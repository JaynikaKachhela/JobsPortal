namespace JobsPortal.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<JobsPortal.Models.JobContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        public enum Roles
        {
            Administrator,
            EndUser
        }

        protected override void Seed(JobsPortal.Models.JobContext context)
        {
            var Roles = Enum.GetNames(typeof(Roles));
            foreach (var role in Roles)
            {
                if (!context.Roles.Any(r => r.Name == role))
                {
                    var store = new RoleStore<IdentityRole>(context);
                    var manager = new RoleManager<IdentityRole>(store);
                    var roles = new IdentityRole { Name = role };

                    manager.Create(roles);
                }
            }
            var user = new ApplicationUser
            {
                UserName = "Jaynika Kachhela",
                Email = "admin@jobportal.com",
                EmailConfirmed = true,
                PhoneNumber = "8980905256",
                Applicant = new Applicant(),
            };
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            if (!context.Users.Any(u => u.Email == "admin@jobportal.com"))
            {
                context.Users.Add(user);

                if (userManager.FindByEmail("admin@jobportal.com") == null)
                {
                    var result = userManager.Create(user, "Password@123");
                }
            }
            ApplicationUser user1 = userManager.FindByEmail("admin@jobportal.com");
            if (user1 != null)
            {
                userManager.AddToRole(user1.Id, "Administrator");
            }
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
