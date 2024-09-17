using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UkraineGameDev.Models;

namespace UkraineGameDev.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Можна видалити цей метод, якщо використовуєте builder.Services.AddDbContext в Program.cs
        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     if (!optionsBuilder.IsConfigured)
        //     {
        //         var connectionString = _configuration.GetConnectionString("DefaultConnection");
        //         optionsBuilder.UseSqlServer(
        //             connectionString,
        //             options => options.EnableRetryOnFailure());
        //     }
        // }
    }
}
