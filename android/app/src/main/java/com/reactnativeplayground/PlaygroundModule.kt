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

    @ReactMethod
    fun doHeavyComputation(array: ReadableArray, promise: Promise) {
        thread {
            Thread.sleep(5000)
            var result = 1.0

            for (index in 0 until array.size()) {
                result *= array.getDouble(index)
            }

            promise.resolve(result)
        }
    }
}
