using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace ARIA
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/libs/jquery/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/libs/angular/angular.min.js",
                "~/Scripts/libs/angular/angular-resource.min.js",
                "~/Scripts/libs/angular/angular-loader.min.js",
                "~/Scripts/libs/angular/angular-sanitize.min.js",
                "~/Scripts/libs/angular/angular-scenario.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").IncludeDirectory("~/Scripts/app/", "*.js", true));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/libs/modernizr/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/libs/bootstrap/bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Content/bootstrap.css",
                 "~/Content/Site.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                 "~/Content/bootstrap.css"));
        }
    }
}
