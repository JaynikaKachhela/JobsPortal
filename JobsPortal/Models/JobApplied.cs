using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace JobsPortal.Models
{
    public class JobApplied
    {
        [Required]
        [Key]
        public int id { get; set; }
      
        public string ApplicantId { get; set; }
        [ForeignKey("ApplicantId")]
        public ApplicationUser ApplicationUser { get; set; }
     
        public int JobId { get; set; }
        [ForeignKey("JobId")]
        public Job Job { get; set; }

      
       
    }
}