﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JobsPortal.Controllers
{
    public class UserController : Controller
    {
        public ActionResult Index()
        {          
            return View();
        }
        
        public ActionResult Admin()
        {
            return View();
        }

    }
}