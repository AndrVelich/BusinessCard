using System.IO;
using EmailSender.Interfaces.Models;
using EmailSender.Interfaces.Senders;
using EmailSender.Service;
using Microsoft.AspNetCore.Hosting;
using MimeKit;

namespace EmailSender.Senders
{
    public sealed class ContactSender : IContactSender
    {
        private const string emailToken = "{email}";
        private const string nameToken = "{name}";
        private const string subjectToken = "{subject}";
        private const string messageToken = "{message}";
        private const string dateToken = "{date}";

        private readonly IEmailService _emailService;
        private readonly IHostingEnvironment _env;

        public ContactSender(IEmailService emailService, IHostingEnvironment env)
        {
            _emailService = emailService;
            _env = env;
        }

        public void SendContactInfo(string email, ContactModel contactModel, string templatePath)
        {
            var pathToFile = $"{_env.WebRootPath}{templatePath}";
            var builder = new BodyBuilder();
            using (StreamReader SourceReader = File.OpenText(pathToFile))
            {
                builder.HtmlBody = SourceReader.ReadToEnd();
            }
            string messageBody = ReplaceTokens(builder.HtmlBody, contactModel);

            _emailService.SendEmailAsync(email, contactModel.Subject, messageBody);
        }

        private string ReplaceTokens(string messageBody, ContactModel contactModel)
        {
            messageBody = messageBody.Replace(emailToken, contactModel.Email);
            messageBody = messageBody.Replace(nameToken, contactModel.Name);
            messageBody = messageBody.Replace(messageToken, contactModel.Message);
            messageBody = messageBody.Replace(subjectToken, contactModel.Subject);
            messageBody = messageBody.Replace(dateToken, contactModel.Date.ToString("yyyy-MM-dd HH:mm"));

            return messageBody;
        }
    }
}
