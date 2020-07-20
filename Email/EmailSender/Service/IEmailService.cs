using System.Threading.Tasks;

namespace EmailSender.Service
{
    public interface IEmailService
    {
        Task SendEmailAsync(
            string toEmail,
            string subject,
            string message,
            string fromName = null,
            string fromEmail = null);
    }
}
