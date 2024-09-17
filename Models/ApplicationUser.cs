using Microsoft.AspNetCore.Identity;

namespace UkraineGameDev.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }
    }
}
