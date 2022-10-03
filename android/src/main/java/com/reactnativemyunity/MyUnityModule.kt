package com.reactnativemyunity

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MyUnityModule(reactContext: ReactApplicationContext?) :
  ReactContextBaseJavaModule(reactContext) {
  /**
   * @return the name of this module. This will be the name used to `require()` this module
   * from javascript.
   */
  override fun getName(): String {
    return "UnityContainer"
  }

  @ReactMethod
  fun createEvent() {
    try {
      val context = reactApplicationContext
      val intent = Intent(
        context,
        UnityWrappedActivity::class.java
      )
      intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      context.startActivity(intent)
    } catch (e: Exception) {
      e.printStackTrace()
    }
  }
}
