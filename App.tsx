import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";

export default function App() {
  const [youtubeId, setYoutubeId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch YouTube ID from the API
    const fetchYoutubeId = async () => {
      try {
        const response = await axios.get(
          "https://yoururl.com/fetch_id",//it will give you youtube id
        );
        setYoutubeId(response.data.youtubeId);
        console.log("YouTube ID:", response.data.youtubeId);
      } catch (error) {
        console.error("Error fetching YouTube ID:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchYoutubeId();
    }, 500);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : (
        <WebView
          style={styles.video}
          source={{
            uri: `https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1`,
          }}
          javaScriptEnabled={true}
          cacheEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript={`
            const style = document.createElement('style');
            style.innerHTML = '.yt-uix-sessionlink { display: none !important; }';
            document.head.appendChild(style);
          `}
          mediaPlaybackRequiresUserAction={false}
          userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"//added useragent because in android webkit doesn't allowing it to
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});
//eas build -p android --profile preview
