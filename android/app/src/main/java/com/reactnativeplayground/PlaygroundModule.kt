package com.reactnativeplayground

import android.util.Log
import com.facebook.react.bridge.*
import kotlin.concurrent.thread

internal class PlaygroundModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "JackPlayground"
    }

    @ReactMethod
    fun addBarTo(stringFromReactNative: String, promise: Promise) {
        promise.resolve(stringFromReactNative + "bar")
    }
}
