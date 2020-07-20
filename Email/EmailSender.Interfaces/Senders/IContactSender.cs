using EmailSender.Interfaces.Models;

namespace EmailSender.Interfaces.Senders
{
    public interface IContactSender
    {
        void SendContactInfo(string email, ContactModel contactModel, string templatePath);
    }
}
