using System.IO;
using EmailSender.Interfaces.Models;
using EmailSender.Interfaces.Senders;
using EmailSender.Service;
using MimeKit;

namespace EmailSender.Senders
{
    public sealed class ContactSender : IContactSender
    {
        private const string emailToken = "{email}";
        private const string nameToken = "{name}";
        private const string messageToken = "{message}";
        private const string dateToken = "{date}";

        private readonly IEmailService _emailService;

        public ContactSender(IEmailService emailService)
        {
            _emailService = emailService;
        }

        public void SendContactInfo(string email, ContactModel contactModel,  string templatePath)
        {
            //TODO get from config
            //var pathToFile = webRoot
            //                 + Path.DirectorySeparatorChar
            //                 + "EmailTemplates"
            //                 + Path.DirectorySeparatorChar
            //                 + "Order"
            //                 + Path.DirectorySeparatorChar
            //                 + "OrderNotification.html";

            var subject = string.IsNullOrWhiteSpace(contactModel.Subject) ?  "New letter" : contactModel.Subject;

            var builder = new BodyBuilder();
            using (StreamReader SourceReader = File.OpenText(templatePath))
            {
                builder.HtmlBody = SourceReader.ReadToEnd();
            }
            string messageBody = ReplaceTokens(builder.HtmlBody, contactModel);

            _emailService.SendEmailAsync(email, subject, messageBody);
        }

        private string ReplaceTokens(string messageBody, ContactModel contactModel)
        {
            messageBody = messageBody.Replace(emailToken, contactModel.Email);
            messageBody = messageBody.Replace(nameToken, contactModel.Name);
            messageBody = messageBody.Replace(messageToken, contactModel.Message);
            messageBody = messageBody.Replace(dateToken, contactModel.Date.ToString("yyyy-MM-dd HH:mm"));

            return messageBody;
        }
    }
}
