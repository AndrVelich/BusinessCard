using System;

namespace BusinessCard.Models
{
    public class ContactViewModel
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Subject { get; set; }

        public string Message { get; set; }

        //TODO move validation to domain model
        public bool IsValid()
        {
            var result = !string.IsNullOrWhiteSpace(Name) && IsValidEmail(Email) && !string.IsNullOrWhiteSpace(Message);
            return result;
        }

        private bool IsValidEmail(string email)
        {
            if (!string.IsNullOrWhiteSpace(email))
            {
                try
                {
                    var addr = new System.Net.Mail.MailAddress(email);
                    return addr.Address == email;
                }
                catch { }
            }
            return false;
        }
    }
}