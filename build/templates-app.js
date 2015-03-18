angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>About</h1>\n" +
    "\n" +
    "<p>This is what this is about.</p>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<accordion close-others=\"false\">\n" +
    "\n" +
    "    <accordion-group is-open=\"loadIsOpen == true\">\n" +
    "\n" +
    "        <accordion-heading>\n" +
    "            Load Har Data\n" +
    "        </accordion-heading>\n" +
    "\n" +
    "        <div>\n" +
    "\n" +
    "            <div>\n" +
    "\n" +
    "                <textarea class=\"form-control\" ng-model=\"pastedHar.text\" rows=\"10\" placeholder=\"Paste har in here...\"></textarea>\n" +
    "                <br>\n" +
    "                <button class=\"btn btn-sm btn-primary btn-default comm-action-button\" ng-click=\"loadHar()\">Load</button>\n" +
    "                <button class=\"btn btn-sm btn-primary btn-default comm-action-button\" ng-click=\"clearHar()\">Clear</button>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </accordion-group>\n" +
    "\n" +
    "    <accordion-group is-open=\"true\">\n" +
    "\n" +
    "        <accordion-heading>\n" +
    "            Selected Record Details\n" +
    "        </accordion-heading>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "\n" +
    "            <tabset>\n" +
    "                <tab heading=\"General\" class=\"tab-title\">\n" +
    "                    <div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Started DateTime</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.startedDateTime}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Method</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.method}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Url</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.url}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Status</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.responseStatus}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Blocked</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.blocked}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">DNS</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.dns}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Connect</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.connect}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Send</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.send}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Wait</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.wait}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Receive</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.receive}}</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1\">Ssl</div>\n" +
    "                            <div class=\"col-sm-6\">{{selectedRow.ssl}}</div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                </tab>\n" +
    "                <tab heading=\"Request Headers\" class=\"tab-title\">\n" +
    "\n" +
    "                    <div class=\"row\" ng-repeat=\"header in selectedRow.request.headers\">\n" +
    "                        <div class=\"col-sm-1\">{{header.name}}</div>\n" +
    "                        <div class=\"col-sm-6\">{{header.value}}</div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </tab>\n" +
    "                <tab heading=\"Request Cookies\" class=\"tab-title\">\n" +
    "                    <div class=\"row\" ng-repeat=\"cookie in selectedRow.request.cookies\">\n" +
    "                        <div class=\"col-sm-2\">{{cookie.name}}</div>\n" +
    "                        <div class=\"col-sm-6\">{{cookie.value}}</div>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "                <tab heading=\"Post Data\" class=\"tab-title\">\n" +
    "                    <div class=\"row\" ng-repeat=\"postDatum in selectedRow.request.postData.params\">\n" +
    "                        <div class=\"col-sm-2\">{{postDatum.name}}</div>\n" +
    "                        <div class=\"col-sm-6\">{{postDatum.value}}</div>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "                <tab heading=\"Response Headers\" class=\"tab-title\">\n" +
    "                    <div class=\"row\" ng-repeat=\"header in selectedRow.response.headers\">\n" +
    "                        <div class=\"col-sm-2\">{{header.name}}</div>\n" +
    "                        <div class=\"col-sm-6\">{{header.value}}</div>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "                <tab heading=\"Response Cookies\" class=\"tab-title\">\n" +
    "                    <div class=\"row\" ng-repeat=\"cookie in selectedRow.response.cookies\">\n" +
    "                        <div class=\"col-sm-2\">{{cookie.name}}</div>\n" +
    "                        <div class=\"col-sm-6\">{{cookie.value}}</div>\n" +
    "                    </div>\n" +
    "                </tab>\n" +
    "            </tabset>\n" +
    "        </div>\n" +
    "\n" +
    "    </accordion-group>\n" +
    "\n" +
    "</accordion>\n" +
    "\n" +
    "\n" +
    "<div class=\"panel panel-default top-panel\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Data</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body panel-group\">\n" +
    "        <div>\n" +
    "\n" +
    "            <div ui-grid=\"harFileGrid\" ui-grid-resize-columns ui-grid-auto-resize ui-grid-selection ui-grid-exporter></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
