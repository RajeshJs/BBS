using EDoc2.FAQ.Web.Services;
using System.Text.Encodings.Web;

namespace EDoc2.FAQ.Web.Extensions
{
    public static class EmailSenderExtensions
    {
        public static void SendEmailConfirmationAsync(this IMailService mailService, string email, string link)
        {
            mailService.Send(email, "EDoc2�ʴ�����-�˺ż���",
                "��ͨ�������������������������˺ţ�������Ǳ��˲����������ӡ�<br />" +
                $"<a href='{HtmlEncoder.Default.Encode(link)}'>����</a>��<br/>" +
                "����޷���ת���븴���������ӵ�������򿪡�<br />" +
                HtmlEncoder.Default.Encode(link));
        }

        public static void SendResetPasswordAsync(this IMailService mailService, string email, string callbackUrl)
        {
            mailService.Send(email, "Reset Password",
                $"��ͨ��������������������룺 <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>��������</a>.");
        }

        public static void SendRegisterCodeAsync(this IMailService mailService, string email, string code, int minutes)
        {
            mailService.Send(email, "EDoc2�ʴ�����-�û�ע��",
                $"��EDoc2�ʴ���������֤���ǡ�{code}��, ������ע��У�飬����������ˡ�������Ա����������Ҫ��{minutes} ��������Ч��");
        }
    }
}
