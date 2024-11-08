# Android TV YouTube Player

This project creates an Android TV application that plays YouTube videos using a video ID fetched from an API.

## 🚀 How to use

#### Creating a new project

- Create a project: `npx create-expo-app -e with-tv`
- `cd` into the project

```sh
export EXPO_TV=1
npx expo prebuild
yarn android # Build for Android TV
```

> **_NOTE:_**
> Setting the environment variable `EXPO_TV=1` enables the `@react-native-tvos/config-tv` plugin to modify the project for TV.

#### Fetching YouTube Video ID

This project fetches a YouTube video ID from a specified API endpoint. Ensure that the API is correctly set up to return a valid video ID.

#### Playing Video in WebView

The application uses a WebView component to play the YouTube video. The video ID obtained from the API is passed to the WebView to load the video.

#### TV specific app icons and banners

This project contains placeholder images for the Android TV banner and for brand assets (app icon and top shelf images). You can replace these images with your own app images. Note that for Android TV, the images must be the exact sizes indicated.

```sh
export EXPO_TV=1
npx expo prebuild
yarn android # Build for Android TV
```

> **_NOTE:_**
> Setting the environment variable `EXPO_TV=1` enables the `@react-native-tvos/config-tv` plugin to modify the project for TV.

#### Fetching YouTube Video ID

This project fetches a YouTube video ID from a specified API endpoint. Ensure that the API is correctly set up to return a valid video ID.

#### Playing Video in WebView

The application uses a WebView component to play the YouTube video. The video ID obtained from the API is passed to the WebView to load the video.

#### TV specific app icons and banners

This project contains placeholder images for the Android TV banner and for brand assets (app icon and top shelf images). You can replace these images with your own app images. Note that for Android TV, the images must be the exact sizes indicated.
