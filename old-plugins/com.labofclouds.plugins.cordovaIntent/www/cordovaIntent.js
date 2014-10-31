var cordovaIntent =  {
    create: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'CordovaIntent', // mapped to our native Java class called "CordovaIntent"
            '', // with this action name
            []
        );
    }
}
module.exports = cordovaIntent;