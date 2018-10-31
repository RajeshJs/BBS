using Microsoft.AspNetCore.Identity.UI.Services;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace EDoc2.FAQ.Web.Extensions
{
    public static class EmailSenderExtensions
    {
        public static Task SendEmailConfirmationAsync(this IEmailSender emailSender, string email, string link)
        {
            return emailSender.SendEmailAsync(email, "EDoc2�ʴ�����-�˺ż���",
                "��ͨ�������������������������˺ţ�������Ǳ��˲����������ӡ�<br />" +
                $"<a href='{HtmlEncoder.Default.Encode(link)}'>����</a>��<br/>" +
                "����޷���ת���븴���������ӵ�������򿪡�<br />" +
                HtmlEncoder.Default.Encode(link));
        }

        public static Task SendResetPasswordAsync(this IEmailSender emailSender, string email, string callbackUrl)
        {
            return emailSender.SendEmailAsync(email, "Reset Password",
                $"Please reset your password by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");
        }

        public static Task SendRegisterCodeAsync(this IEmailSender emailSender, string email, string code, int minutes)
        {
            return emailSender.SendEmailAsync(email, "EDoc2�ʴ�����-�û�ע��",
                $"��EDoc2�ʴ���������֤���ǡ�{code}��, ������ע��У�飬����������ˡ�������Ա����������Ҫ��{minutes} ��������Ч��");
        }
    }
}
