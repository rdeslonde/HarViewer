
(function(module) {

    module.controller('HomeController', function ($scope, $upload, uiGridConstants) {

        init();

        function init() {

            $scope.loadIsOpen = true;

            $scope.pastedHar = {};
            $scope.pastedHar.text = "";

            $scope.loadHar = function()
            {
                var harData = JSON.parse($scope.pastedHar.text);

                $scope.gridData = [];
                var gridData = $scope.gridData;
                $scope.loadedFile = {};
                var loadedFile = $scope.loadedFile;

                loadedFile.startedDateTime = harData.log.pages[0]["startedDateTime"];
                loadedFile.title = harData.log.pages[0]["title"];
                loadedFile.entries = harData.log.entries;

                loadedFile.entries.forEach(function (entry) {

                    var record = {
                        "startedDateTime": entry.startedDateTime,
                        "method": entry.request.method,
                        "url": entry.request.url,
                        "responseStatus": entry.response.status,
                        "queryString": entry.queryString,
                        "blocked":entry.timings.blocked,
                        "dns":entry.timings.dns,
                        "connect":entry.timings.connect,
                        "send":entry.timings.send,
                        "wait":entry.timings.wait,
                        "receive":entry.timings.receive,
                        "ssl":entry.timings.ssl,
                        "requestHeadersRaw":entry.request.headers,
                        "requestCookiesRaw":entry.request.cookies,
                        "requestPostDataRaw":entry.request.postData,
                        "responseHeadersRaw":entry.response.headers,
                        "responseCookiesRaw":entry.response.cookies
                    };

                    //request headers
                    var requestHeadersConcat = "";
                    entry.request.headers.forEach(function(header)
                    {
                        requestHeadersConcat = requestHeadersConcat + "\n" + header.name + ": " + header.value;
                    });
                    record.requestHeaders = requestHeadersConcat;

                    //request cookies
                    var requestCookiesConcat = "";
                    entry.request.cookies.forEach(function(cookie)
                    {
                        requestCookiesConcat = requestCookiesConcat + "\n" + cookie.name + ": " + cookie.value;
                    });
                    record.requestCookies = requestCookiesConcat;

                    //request post data
                    var requestPostDataConcat = "";
                    if(entry.request.postData && entry.request.postData.params)
                    {
                        entry.request.postData.params.forEach(function(postDatum)
                        {
                            requestPostDataConcat = requestPostDataConcat + "\n" + postDatum.name + ": " + postDatum.value;
                        });
                    }
                    record.requestPostData = requestPostDataConcat;

                    //response headers
                    var responseHeadersConcat = "";
                    entry.response.headers.forEach(function(header)
                    {
                        responseHeadersConcat = responseHeadersConcat + "\n" + header.name + ": " + header.value;
                    });
                    record.responseHeaders = responseHeadersConcat;

                    //response cookies
                    var responseCookiesConcat = "";
                    entry.response.cookies.forEach(function(cookie)
                    {
                        responseCookiesConcat = responseCookiesConcat + "\n" + cookie.name + ": " + cookie.value;
                    });
                    record.responseCookies = responseCookiesConcat;

                    gridData.push(record);

                });

                $scope.harFileGrid.data = [];
                $scope.harFileGrid.data = $scope.gridData;

                $scope.loadIsOpen = false;

            };

            $scope.clearHar = function()
            {
                $scope.gridData = [];
                $scope.loadedFile = {};
                $scope.harFileGrid.data = [];
            };

            $scope.harFileGrid = {
                enableSorting: true,
                enableFiltering: true,
                multiSelect: false,
                enableGridMenu: true,
                exporterCsvFilename: 'harData.csv',
                minRowsToShow: 25,
                columnDefs: [
                    { field: 'startedDateTime', width: 200 },
                    { field: 'method', width: 50},
                    { field: 'url' },
                    { field: 'queryString', visible: false },
                    { field: 'requestHeaders', visible: false },
                    { field: 'responseHeaders', visible: false },
                    { field: 'requestCookies', visible: false },
                    { field: 'responseCookies', visible: false },
                    { field: 'requestPostData', visible: false },
                    { field: 'responseStatus', width: 50, displayName: 'Status' },
                    { field: 'blocked', width: 70, displayName: 'Blckd' },
                    { field: 'dns', width: 70, displayName: 'DNS' },
                    { field: 'connect', width: 70, displayName: 'Cnct' },
                    { field: 'send', width: 70, displayName: 'Snd' },
                    { field: 'wait', width: 70, displayName: 'Wt' },
                    { field: 'receive', width: 70, displayName: 'Rcv' },
                    { field: 'ssl', width: 70, displayName: 'Ssl' }
                ]
            };

            $scope.harFileGrid.onRegisterApi = function(gridApi){
                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope,function(row){

                    var entity = row.entity;

                    $scope.selectedRow = {};
                    var selectedRow = $scope.selectedRow;

                    selectedRow.startedDateTime = entity.startedDateTime;
                    selectedRow.url = entity.url;
                    selectedRow.method = entity.method;
                    selectedRow.responseStatus = entity.responseStatus;
                    selectedRow.blocked = entity.blocked;
                    selectedRow.dns = entity.dns;
                    selectedRow.connect = entity.connect;
                    selectedRow.send = entity.send;
                    selectedRow.wait = entity.wait;
                    selectedRow.receive = entity.receive;
                    selectedRow.ssl = entity.ssl;
                    selectedRow.request = [];
                    selectedRow.response = [];
                    selectedRow.request.headers = entity.requestHeadersRaw;
                    selectedRow.request.cookies = entity.requestCookiesRaw;
                    selectedRow.request.postData = entity.requestPostDataRaw;
                    selectedRow.response.headers = entity.responseHeadersRaw;
                    selectedRow.response.cookies = entity.responseCookiesRaw;
                });
            };
        }


    });


}(angular.module("HarViewer.home")));