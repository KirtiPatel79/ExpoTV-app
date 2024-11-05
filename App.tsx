import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Dimensions, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from "axios";

export default function App() {
  const [youtubeId, setYoutubeId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch YouTube ID from the API
    const fetchYoutubeId = async () => {
      try {
        const response = await axios.get(
          "https://lethalxvision.com/ytlive.php?fetch_id",
          {
            headers: {
              "User-Agent": "", // Set empty User-Agent
            },
          }
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

  const { height,width } = Dimensions.get("window"); // Get device height
console.log(height,width);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : (
        <YoutubePlayer
        videoId={youtubeId}
        height={height}
        width={width}
        play={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});
//eas build -p android --profile preview
