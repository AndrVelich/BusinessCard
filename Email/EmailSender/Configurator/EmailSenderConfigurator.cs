using EmailSender.Interfaces.Senders;
using EmailSender.Senders;
using EmailSender.Service;
using EmailSender.Settings;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace EmailSender.Configurator
{
    public static class EmailSenderConfigurator
    {
        public static void Configure(IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<SmtpSettings>(configuration.GetSection("SmtpSettings"));
            services.AddTransient<IContactSender, ContactSender>();
            services.AddTransient<IEmailService, EmailService>();
        }
    }
}
