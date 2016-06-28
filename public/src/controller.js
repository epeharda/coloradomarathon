angular.module('MainApp')
.controller('ResultsController', function($scope){
	$scope.message = "Hello Results!";
})
.controller('HomeController', function($scope){
	$scope.message = "Hello Home!";
})
.controller('CourseController', function($scope){
	$scope.message = "Hello Course!";
})
.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'Marathon',
            url: 'one.tpl.html'
        }, {
            title: 'Half Marathon',
            url: 'two.tpl.html'
        }, {
            title: '10k',
            url: 'three.tpl.html'
    	},{
            title: '5k',
            url: 'four.tpl.html'
        },{
						title: 'Relay',
						url: 'five.tpl.html'
					},{
            title: 'Race Fees',
            url: 'six.tpl.html'
      }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}])
.controller('EmailController', function($scope,$http) {
        $scope.resultMessage;
        $scope.fullname="";
        $scope.email="";
        $scope.message=""

        $scope.sendEmail =function(){
            console.log("about to email - before mailJSON");
            var mailJSON ={
                "key": "rgXsCj0PROJbEHOk_7uHrA",
                "message": {
                  "html": ""+$scope.message,
                  "text": ""+$scope.message,
                  "subject": "*** Colorado Marathon Message from " + $scope.fullname + " ***",
                  "from_email": $scope.email,
                  "from_name": "" + $scope.fullname,
                  "to": [
                    {
                      "email": "ericapeharda@gmail.com",
                      "name": "Colorado Race Directors",
                      "type": "to"
                    }
                  ],
                  "important": false,
                  "track_opens": null,
                  "track_clicks": null,
                  "auto_text": null,
                  "auto_html": null,
                  "inline_css": null,
                  "url_strip_qs": null,
                  "preserve_recipients": null,
                  "view_content_link": null,
                  "tracking_domain": null,
                  "signing_domain": null,
                  "return_path_domain": null
                },
                "async": false,
                "ip_pool": "Main Pool"
            };
            var apiURL = "https://mandrillapp.com/api/1.0/messages/send.json";
            $http.post(apiURL, mailJSON).
              success(function(data, status, headers, config) {
                $scope.form={};
                console.log('successful email send.');
                console.log('status: ' + status);
                console.log('data: ' + data);
                console.log('headers: ' + headers);
                console.log('config: ' + config);
                $scope.myForm.$setUntouched();
                $scope.resultMessage="Thank you!  You message was successfully sent";
              }).error(function(data, status, headers, config) {
                console.log('error sending email.');
                console.log('status: ' + status);
                $scope.resultMessage="Your message failed to send.  Please email ericapeharda@gmail.com";
              });
        };
});
