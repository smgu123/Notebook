  package com.practice;

  import android.widget.Toast;

  import com.facebook.react.bridge.NativeModule;
  import com.facebook.react.bridge.ReactApplicationContext;
  import com.facebook.react.bridge.ReactContext;
  import com.facebook.react.bridge.ReactContextBaseJavaModule;
  import com.facebook.react.bridge.ReactMethod;
  import com.facebook.react.bridge.Callback;

  import java.util.Map;
  import java.util.HashMap;

  public class ToastModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    ToastModule(ReactApplicationContext context) {
      super(context);
      reactContext = context;
    }

  //The purpose of this method is to return the string name of the
  // NativeModule which represents this class in JavaScript.

  @Override
    public String getName() {
      return "ToastExample";
    }

    @Override
    public Map<String, Object> getConstants() {
      final Map<String, Object> constants = new HashMap<>();
      constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
      constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
      return constants;
    }

      @ReactMethod
    public void show(String message, int duration) {
      Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
  }