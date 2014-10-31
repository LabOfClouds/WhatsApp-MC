package com.labofclouds.cordova.cordovaIntent;

import android.content.Intent;
import android.net.Uri;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.File;

public class CordovaIntent extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            Intent sendIntent = new Intent();
            sendIntent.setPackage("com.whatsapp");

            sendIntent.setAction(Intent.ACTION_SEND);
            sendIntent.putExtra(Intent.EXTRA_STREAM, Uri.fromFile(new File("/sdcard/audio.mp3")));
            sendIntent.setType("audio/*");
            this.cordova.getActivity().startActivity(Intent.createChooser(sendIntent, "Send"));

			callbackContext.success();
			
            return true;
        } catch (Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        }
    }
}