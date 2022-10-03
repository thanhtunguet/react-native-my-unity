package com.reactnativemyunity

import android.view.KeyEvent
import com.unity3d.player.UnityPlayerActivity

class UnityWrappedActivity : UnityPlayerActivity() {
  override fun onKeyUp(keyCode: Int, event: KeyEvent?): Boolean {
    if (keyCode == KeyEvent.KEYCODE_BACK) {
      mUnityPlayer.unload()
      finish()
      return true
    }
    return super.onKeyUp(keyCode, event)
  }
}
