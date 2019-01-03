﻿// <auto-generated />
using System;
using EDoc2.FAQ.Core.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EDoc2.FAQ.Core.Infrastructure.Migrations
{
    [DbContext(typeof(CommunityContext))]
    [Migration("20181215031818_AddArticleCategory")]
    partial class AddArticleCategory
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.Role", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Name");

                    b.Property<string>("NormalizedName");

                    b.HasKey("Id");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.RoleClaim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("RoleClaims");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("City")
                        .HasMaxLength(128);

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfirmed");

                    b.Property<int>("Gender");

                    b.Property<bool>("IsMuted");

                    b.Property<DateTime>("JoinDate");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("Nickname")
                        .HasMaxLength(50);

                    b.Property<string>("NormalizedEmail");

                    b.Property<string>("NormalizedUserName");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("Signature")
                        .HasMaxLength(256);

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserClaim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("UserClaims");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserFavorite", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<Guid>("ArticleId");

                    b.Property<bool>("IsCancel");

                    b.Property<DateTime>("OperationTime");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("ArticleId");

                    b.HasIndex("UserId");

                    b.ToTable("UserFavorite");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserLogin", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("ProviderKey");

                    b.HasKey("UserId");

                    b.ToTable("UserLogins");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserProperty", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.Property<string>("Value");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("UserProperty");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserRole", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserRoles");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserScoreChangeReason", b =>
                {
                    b.Property<int>("Id")
                        .HasDefaultValue(1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("UserScoreChangeReason");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserScoreHistory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ChangeScore");

                    b.Property<DateTime>("CreationTime");

                    b.Property<int>("FinalScore");

                    b.Property<int>("OriginScore");

                    b.Property<int?>("ReasonId");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("ReasonId");

                    b.HasIndex("UserId");

                    b.ToTable("UserScoreHistory");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserSubscriber", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FanId")
                        .IsRequired();

                    b.Property<string>("FollowId")
                        .IsRequired();

                    b.Property<bool>("IsCancel");

                    b.Property<DateTime>("OperationTime");

                    b.HasKey("Id");

                    b.HasIndex("FanId");

                    b.HasIndex("FollowId");

                    b.ToTable("UserSubscriber");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserToken", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId");

                    b.ToTable("UserTokens");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Applications.Application", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.Property<string>("IconBase64");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Version")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Application");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Applications.ApplicationSetting", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<Guid>("ApplicationId");

                    b.Property<string>("Description")
                        .HasMaxLength(256);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Value")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("ApplicationId");

                    b.ToTable("ApplicationSetting");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.Article", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("CanComment")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValue(true);

                    b.Property<Guid>("CategoryId");

                    b.Property<string>("Content")
                        .IsRequired();

                    b.Property<DateTime>("CreationTime");

                    b.Property<string>("CreatorId");

                    b.Property<DateTime?>("FinishTime");

                    b.Property<string>("Keywords")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("State");

                    b.Property<string>("Summary")
                        .HasMaxLength(256);

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(128);

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("CreatorId");

                    b.ToTable("Article");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.ArticleComment", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<Guid>("ArticleId");

                    b.Property<string>("Content")
                        .IsRequired();

                    b.Property<DateTime>("CreationTime");

                    b.Property<string>("CreatorId");

                    b.Property<int>("Dislikes");

                    b.Property<int>("Likes");

                    b.Property<long?>("ParentCommentId");

                    b.Property<int>("State");

                    b.HasKey("Id");

                    b.HasIndex("ArticleId");

                    b.HasIndex("CreatorId");

                    b.ToTable("ArticleComment");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.ArticleOperation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsCancel");

                    b.Property<DateTime>("OperationTime");

                    b.Property<string>("Operator")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("OperatorType");

                    b.Property<string>("Target")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<int>("TargetType");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("ArticleOperation");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.ArticleProperty", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("ArticleId");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Value");

                    b.HasKey("Id");

                    b.HasIndex("ArticleId");

                    b.ToTable("ArticleProperty");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.ArticleTop", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<Guid>("ArticleId");

                    b.Property<DateTime>("CreationTime");

                    b.Property<DateTime?>("ExpirationTime");

                    b.Property<bool>("IsCancel");

                    b.Property<bool>("IsForever");

                    b.HasKey("Id");

                    b.HasIndex("ArticleId")
                        .IsUnique();

                    b.ToTable("ArticleTop");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Categories.Category", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ArticleCount");

                    b.Property<DateTime>("CteationTime");

                    b.Property<string>("Description")
                        .HasMaxLength(256);

                    b.Property<bool>("Enabled");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<Guid?>("ParentId");

                    b.HasKey("Id");

                    b.HasIndex("ParentId");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Categories.CategoryModerator", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<Guid>("CategoryId");

                    b.Property<DateTime>("LastModifyTime");

                    b.Property<string>("ModeratorId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("ModeratorId");

                    b.ToTable("CategoryModerator");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.RoleClaim", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.Role", "Role")
                        .WithMany("RoleClaims")
                        .HasForeignKey("RoleId");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserClaim", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "User")
                        .WithMany("UserClaims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserFavorite", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Articles.Article", "Article")
                        .WithMany()
                        .HasForeignKey("ArticleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "User")
                        .WithMany("UserFavorites")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserLogin", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "User")
                        .WithMany("UserLogins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserProperty", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "User")
                        .WithMany("UserProperties")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserRole", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserScoreHistory", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.UserScoreChangeReason", "Reason")
                        .WithMany()
                        .HasForeignKey("ReasonId");

                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserSubscriber", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "Fan")
                        .WithMany("UserFollows")
                        .HasForeignKey("FanId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "Follow")
                        .WithMany("UserFans")
                        .HasForeignKey("FollowId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Accounts.UserToken", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "User")
                        .WithMany("UserTokens")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Applications.ApplicationSetting", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Applications.Application", "Application")
                        .WithMany("Settings")
                        .HasForeignKey("ApplicationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.Article", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Categories.Category", "Category")
                        .WithMany("Articles")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.ArticleComment", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Articles.Article", "Article")
                        .WithMany("Comments")
                        .HasForeignKey("ArticleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorId")
                        .OnDelete(DeleteBehavior.SetNull);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.ArticleProperty", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Articles.Article", "Article")
                        .WithMany("Properties")
                        .HasForeignKey("ArticleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Articles.ArticleTop", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Articles.Article", "Article")
                        .WithOne("ArticleTop")
                        .HasForeignKey("EDoc2.FAQ.Core.Domain.Articles.ArticleTop", "ArticleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Categories.Category", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Categories.Category", "Parent")
                        .WithMany("Children")
                        .HasForeignKey("ParentId");
                });

            modelBuilder.Entity("EDoc2.FAQ.Core.Domain.Categories.CategoryModerator", b =>
                {
                    b.HasOne("EDoc2.FAQ.Core.Domain.Categories.Category", "Category")
                        .WithMany("CategoryModerators")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EDoc2.FAQ.Core.Domain.Accounts.User", "Moderator")
                        .WithMany()
                        .HasForeignKey("ModeratorId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}