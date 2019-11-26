import React from 'react';
import '../styles/jam-items.css'

// unique API items
// renders artist name, song, picture, song path, likes, comments
const JamItem = (props) => {
  const song = props.items.name;
  const artist_name = props.items.artist_name;
  const pic_url = props.items.cover_image_path;
  const song_url = props.items.music_file_path;
  return (
    <div className="jam-item">
        <div className="jam-item-artist">{artist_name}</div>
        <div className="jam-item-song">{song}</div>
        <div className="jam-item-pic">{pic_url}</div>
        <div className="jam-item-song-path">{song_url}</div>
    </div>
  );
}

export default JamItem;
