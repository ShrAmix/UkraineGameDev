using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Threading.Tasks;
using UkraineGameDev.Data;
using UkraineGameDev.Models;

namespace UkraineGameDev.Pages
{
    public class ProfileModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationDbContext _context;

        public ProfileModel(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, ApplicationDbContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }

        public string UserName { get; set; }

        public void OnGet()
        {
            UserName = User.Identity.Name;
        }

        public async Task<IActionResult> OnPostLogoutAsync()
        {
            await _signInManager.SignOutAsync();
            return RedirectToPage("/Index"); // Redirect to home page or another page after logout
        }

        public async Task<IActionResult> OnPostDeleteAccountAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user != null)
            {
                await _userManager.DeleteAsync(user);
                await _signInManager.SignOutAsync();
                return RedirectToPage("/Index"); // Redirect to home page or another page after account deletion
            }
            return Page(); // Return to the profile page if the user was not found
        }
    }
}
