using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace UkraineGameDev.Pages
{
    public class LoginModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; }

        public class InputModel
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            // Handle login logic here
            return RedirectToPage("/Index");
        }
    }
}
