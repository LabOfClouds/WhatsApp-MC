var TestePlugin = {
    create: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'TestePlugin', // mapped to our native Java class called "TestePlugin"
            'doAlert', // with this action name
            ["message"]
        );
    }
}

module.exports = TestePlugin;