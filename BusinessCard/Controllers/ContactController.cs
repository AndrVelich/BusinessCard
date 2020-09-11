using BusinessCard.Models;
using EmailSender.Interfaces.Models;
using EmailSender.Interfaces.Senders;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;

namespace BusinessCard.Controllers
{
    public class ContactController : Controller
    {
        private readonly IContactSender _contactSender;
        private readonly ApplicationSettings _applicationSettings;

        public ContactController(IOptions<ApplicationSettings> config, IContactSender contactSender)
        {
            _applicationSettings = config?.Value;
            _contactSender = contactSender;
        }

        [HttpPost]
        [Route("api/contact")]
        public void Post([FromBody]ContactViewModel contactViewModel)
        {
            if(contactViewModel != null && contactViewModel.IsValid())
            {
                var contactModel = GetContactModel(contactViewModel);
                _contactSender.SendContactInfo(_applicationSettings.AdminEmail, contactModel, _applicationSettings.ContactEmailTemplatePath);
            }
        }

        private ContactModel GetContactModel(ContactViewModel contactViewModel)
        {
            var contactModel = new ContactModel();
            contactModel.Date = DateTime.Now;
            contactModel.Name = contactViewModel.Name;
            contactModel.Email = contactViewModel.Email;
            contactModel.Subject = string.IsNullOrWhiteSpace(contactViewModel.Subject) ? _applicationSettings.ContactEmailDefaultSubject : contactViewModel.Subject;
            contactModel.Message = contactViewModel.Message;

            return contactModel;
        }
    }
}
