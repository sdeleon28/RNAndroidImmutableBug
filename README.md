# React Native / Android / Immutable deleteIn bug

Test case for an elusive bug involving Immutable, React Native and Android.

## Description

`immutableObject.deleteIn(somePath)` replaces the object at the target path with an empty javascript (not immutable) array instead of removing it from the collection. This only happens when all these surprisingly specific conditions are met:

* You're running immutable in a React Native project
* You're running the Android version of your app
* Remote debug is disabled
* immutable version is `4.0.0-rc.9`

## To reproduce

```
git clone https://github.com/sdeleon28/RNAndroidImmutableBug
cd RNAndroidImmutableBug
yarn
yarn start
```

When Metro Bundler finishes doing its thing, press `a` to fire the app in your Android emulator (which must already be running).

Once inside the app, take a minute to appreciate my astounding design skills, then press the button (the blue thing at the bottom).

* Expected behavior: The second element in the green section is removed.
* Actual behavior: An error is displayed because immutable inserted an array in the middle of your data structure and made things blow up ¯\\\_(ツ)\_/¯

## Working version

I've also tagged a version of this app that uses a different immutable version (`^3.8.2`) which works just fine. To test it, checkout the `stable` branch.

## Related issues

* [immutable-js: List.delete() sets element to empty array instead of removing it](https://github.com/facebook/immutable-js/issues/1474)
* [React Native: Add ES6 Symbol polyfill for compatibility with iOS 8 and Android](https://github.com/facebook/react-native/pull/5294)
* [React Native: Polyfill ES6 Symbol](https://github.com/facebook/react-native/issues/4676)

## Potential workarounds

* https://github.com/facebook/react-native/issues/4676#issuecomment-340290485 (could cause problems with the hardware back button, though)
