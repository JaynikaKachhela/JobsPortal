using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JobsPortal.Models
{
    public class Applicant
    {
        [DataType(DataType.Url)]
        public string GitHubUrl { get; set; }
        public string Resume { get; set; }
    }
}