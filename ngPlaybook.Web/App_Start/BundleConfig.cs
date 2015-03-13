using System.Web;
using System.Web.Optimization;

namespace ngPlaybook.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/ng").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-ui-router.js",

                "~/app/common/common.module.js",
                "~/app/common/exceptionHandler.js",
                "~/app/common/interpolatDebug.js",
                "~/app/common/alerting.service.js",
                "~/app/common/alerts.directive.js",

                "~/app/admin/admin.module.js",
                "~/app/admin/admin.controller.js",
                "~/app/admin/admin.routes.js",

                "~/app/app.js",
                "~/app/errorProne.controller.js"));

        }
    }
}
