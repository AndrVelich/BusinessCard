using Microsoft.AspNetCore.Mvc;

namespace BusinessCard.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return File("~/dist/index.html", "text/html");
        }
    }
}
