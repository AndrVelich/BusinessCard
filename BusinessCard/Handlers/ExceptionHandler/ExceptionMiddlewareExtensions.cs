using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace BusinessCard.Handlers.ExceptionHandler
{
    public static class ExceptionMiddlewareExtensions
    {
        public static void ConfigureExceptionHandler(this IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            var exceptionHandlerLogger = loggerFactory.CreateLogger("ExceptionHandlerLogger");
            app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.ContentType = "application/json";

                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (contextFeature != null)
                    {
                        exceptionHandlerLogger.LogError($"ERROR: {contextFeature.Error}");

                        var requiresJsonResponse = IsRequiresJsonResponse(context.Request);

                        if (requiresJsonResponse)
                        {
                            context.Response.ContentType = "application/json; charset=utf-8";
                            var errorDetails = new ErrorDetails
                            {
                                StatusCode = context.Response.StatusCode,
                                Message = contextFeature.Error.Message
                            };
                            var stringError = errorDetails.ToString();
                            await context.Response.WriteAsync(stringError);
                        }
                        else
                        {
                            context.Response.Redirect("error.html");
                            await Task.CompletedTask;
                        }
                    }
                });
            });
        }

        private static bool IsRequiresJsonResponse(HttpRequest request)
        {
            var matchText = "JSON";

            bool requiresJsonResponse = request
                .GetTypedHeaders()
                .Accept
                .Any(t => t.Suffix.Value?.ToUpper() == matchText
                          || t.SubTypeWithoutSuffix.Value?.ToUpper() == matchText);

            return requiresJsonResponse;
        }

    }
}
