﻿using Autofac;
using Autofac.Extensions.DependencyInjection;
using EDoc2.FAQ.Api.Infrastructure;
using EDoc2.FAQ.Api.Infrastructure.Middlewares;
using EDoc2.FAQ.Api.Infrastructure.Modules;
using EDoc2.FAQ.Core.Domain.Accounts;
using EDoc2.FAQ.Core.Infrastructure;
using EDoc2.FAQ.Core.Infrastructure.Settings;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using NSwag;
using NSwag.SwaggerGeneration.Processors.Security;
using System;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace EDoc2.FAQ.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => false;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            //swagger ui
            services.AddSwaggerDocument(setting =>
            {
                setting.Title = "EDoc2问答社区Api文档";
                setting.DocumentName = "v1";
                setting.Description = "EDoc2问答社区Api文档";

                setting.OperationProcessors.Add(new OperationSecurityScopeProcessor("JWT token"));
                setting.DocumentProcessors.Add(new SecurityDefinitionAppender("JWT token", new SwaggerSecurityScheme
                {
                    Type = SwaggerSecuritySchemeType.ApiKey,
                    Name = "Authorization",
                    In = SwaggerSecurityApiKeyLocation.Header,
                    Description = "拷贝 'Bearer ' + 有效的 'JWT'"
                }));
            }).AddOpenApiDocument(doc => { doc.DocumentName = "openApi"; });

            //db context
            services.AddDbContext<CommunityContext>(options =>
            {
                options.UseSqlServer(
                        Configuration["ConnectionString"],
                        sqlOptions =>
                        {
                            sqlOptions.MigrationsAssembly(typeof(CommunityContext).GetTypeInfo().Assembly.GetName().Name);
                            sqlOptions.EnableRetryOnFailure(maxRetryCount: 15, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
                        }).UseLazyLoadingProxies();
            })
            .AddIdentity<User, Role>()
            .AddEntityFrameworkStores<CommunityContext>()
            .AddDefaultTokenProviders();

            services.Configure<AuthorizeSetting>(Configuration.GetSection(nameof(AuthorizeSetting)));
            services.Configure<EventBusSetting>(Configuration.GetSection(nameof(EventBusSetting)));
            services.Configure<JwtSetting>(Configuration.GetSection(nameof(JwtSetting)));
            services.Configure<MailSetting>(Configuration.GetSection(nameof(MailSetting)));

            var jwtSetting = new JwtSetting();
            var eventBusSetting = new EventBusSetting();
            var mailSetting = new MailSetting();

            Configuration.Bind(nameof(EventBusSetting), eventBusSetting);
            Configuration.Bind(nameof(JwtSetting), jwtSetting);
            Configuration.Bind(nameof(MailSetting), mailSetting);

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Events = new JwtBearerEvents()
                    {
                        OnMessageReceived = context =>
                        {
                            if (context.Request.Query.ContainsKey("access_token"))
                                context.Token = context.Request.Query["access_token"];

                            return Task.CompletedTask;
                        }
                    };

                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtSetting.Secret)),

                        ValidateIssuer = true,
                        ValidIssuer = jwtSetting.Issuer,

                        ValidateAudience = true,
                        ValidAudience = jwtSetting.Audience,

                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.FromMinutes(30)
                    };
                });

            services.Configure<IdentityOptions>(options =>
            {
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.AllowedForNewUsers = true;

                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 6;

                options.SignIn.RequireConfirmedEmail = true;
                options.SignIn.RequireConfirmedPhoneNumber = false;

                options.User.RequireUniqueEmail = true;

                options.Tokens.AuthenticatorTokenProvider = "";
            });

            //services.ConfigureApplicationCookie(options =>
            //{
            //    options.Cookie.Title = "EDoc2.FAQ.Community";
            //    options.Cookie.HttpOnly = true;

            //    options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
            //    options.SlidingExpiration = true;
            //    options.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
            //});

            services.AddEventBus(eventBusSetting);
            services.UseMailSender(mailSetting);

            services.AddCors();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            var container = new ContainerBuilder();
            container.Populate(services);

            //container.RegisterModule(new MediatorModule());
            container.RegisterModule(new ApplicationModule());

            return new AutofacServiceProvider(container.Build());
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseStaticFiles();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            loggerFactory.AddConsole();
            //loggerFactory.AddNLog();
            //env.ConfigureNLog("NLog.config");

            app.UseSwagger()
               .UseSwaggerUi3();

            app.UseAuthentication();

            app.UseExceptionsHandler();

            app.UseCors(b =>
            {
                //.WithOrigins("http://api:4200")
                b.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });

            app.UseMvc();

            app.ConfigureEventBus();
        }
    }
}
