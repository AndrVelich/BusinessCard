using System;
using System.Collections.Generic;
using System.Text;

namespace EmailSender.Interfaces.Models
{
    public sealed class ContactModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public DateTime Date { get; set; }
    }
}
