using Microsoft.AspNetCore.Mvc;

namespace BusinessCard.Controllers
{
    public class HomeController : Controller
    {
        [Route("about")]
        [Route("contact")]
        [Route("portfolio")]
        [Route("resume")]
        [Route("")]
        public IActionResult Index()
        {
            return File("~/dist/index.html", "text/html");
        }
    }
}
