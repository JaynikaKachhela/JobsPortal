using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JobsPortal.Models
{
    public class Job
    {
        [Required]
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int NoOfPosition { get; set; }
        public int LeftNoOfPosition { get; set; }
        public ICollection<JobApplied> JobApplied { get; set; }

    }
}