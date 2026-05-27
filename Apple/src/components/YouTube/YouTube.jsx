import React, { useEffect, useState } from "react";
import "./YouTube.css";

const API_KEY    = import.meta.env.VITE_YOUTUBE_KEY;
const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw";

// Add this temporarily at the top of YouTube.jsx
console.log("API KEY:", import.meta.env.VITE_YOUTUBE_KEY);

function YouTube() {
  const [videos, setVideos]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) throw new Error(data.error.message);
        setVideos(data.items || []);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>{error}</p>;

  return (
    <div className="youtube-container">
      <h1>Latest Apple Videos</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            />
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouTube;