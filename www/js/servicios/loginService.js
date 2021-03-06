angular.module('app.services.login', [])
.service("LoginService", function($rootScope, $q, BaseLocal) {
   var database = BaseLocal;
   var currentUser = {};

   // eChangoUser

   var getCurrentUser = function() {
	   //testing
	   return {userID: "123"};
  //   return currentUser;
   };

   var setCurrentUser = function(aUser) {
     this.currentUser = aUser;
   };
   
  // Facebook Services
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setFacebookUser = function(user_data) {
	  var dataj =  JSON.stringify(user_data);
    window.localStorage.starter_facebook_user = dataj;
    /*database.get('usuario').then(function(doc){
    	//vemos como hacer el update
    }).catch(function(){
    	dataj._id = 'usuario';
    	database.put(dataj);
    });*/
  };

  var getFacebookUser = function(){
	 /* database.get('usuario').then(function(doc){
	    	//vemos como hacer al obtener
	    });*/
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

// Google+ Services

  var setGooglePlusUser = function(user_data) {
    window.localStorage.starter_google_user = JSON.stringify(user_data);
  };

  var getGooglePlusUser = function(){
    return JSON.parse(window.localStorage.starter_google_user || '{}');
  };

  var userIsLoggedIn = function () {
    return (isChangoUser() || isFacebookUser() || isGoogleUser())
  }

  var isGoogleUser = function () {
    return (JSON.stringify(getGooglePlusUser())!='{}')
  }

  var isFacebookUser = function () {
    return (JSON.stringify(getFacebookUser())!='{}')
  }

    var isChangoUser = function () {
    return (JSON.stringify(getCurrentUser())!='{}')
  }

  return {
    getFacebookUser: getFacebookUser,
    setFacebookUser: setFacebookUser,
    getGooglePlusUser: getGooglePlusUser,
    setGooglePlusUser: setGooglePlusUser,
    getCurrentUser: getCurrentUser,
    setCurrentUser: setCurrentUser,
    userIsLoggedIn: userIsLoggedIn,
    isGoogleUser: isGoogleUser,
    isFacebookUser: isFacebookUser,
    isChangoUser: isChangoUser
  };
    
})