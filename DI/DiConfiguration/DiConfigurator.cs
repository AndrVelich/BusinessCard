using EmailSender.Configurator;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DiConfiguration
{
    public sealed class DiConfigurator
    {
        private readonly IConfiguration _configuration;

        public DiConfigurator(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            RegisterBuisnessPart(services);
            RegisterDataPart(services);
        }

        private void RegisterBuisnessPart(IServiceCollection services)
        {
            EmailSenderConfigurator.Configure(services, _configuration);
        }

        private void RegisterDataPart(IServiceCollection services)
        {

        }
    }
}
