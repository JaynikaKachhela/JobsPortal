using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace JobsPortal.Models
{
    public class JobContext : IdentityDbContext<ApplicationUser>
    {
        public JobContext()
            : base("JobContext", throwIfV1Schema: false)
        {
        }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<JobApplied> JobApplied { get; set; }

        public static JobContext Create()
        {
            return new JobContext();
        }
    }
}