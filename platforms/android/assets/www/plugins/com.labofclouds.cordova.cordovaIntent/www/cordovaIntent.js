cordova.define("com.labofclouds.cordova.cordovaIntent.CordovaIntent", function(require, exports, module) {
	var CordovaIntent =  {
		create: function(successCallback, errorCallback) {
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'CordovaIntent', // mapped to our native Java class called "CordovaIntent"
				'sendAudio', // with this action name
				[]
			);
		}
	}

	module.exports = CordovaIntent;
});
