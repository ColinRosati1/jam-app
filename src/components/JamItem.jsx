import React from 'react';
import SongLike from './SongLike'
import SongComment from './SongComment'
import '../styles/jam-items.css'

// unique API items
// renders artist name, song, picture, song path, likes, comments
const JamItem = (props) => {
  const song = props.items.name;
  const artist_name = props.items.artist_name;
  const pic_url = props.items.cover_image_path;
  const song_url = props.items.music_file_path;
  const likes = props.items.likes;
  console.log(props)
  return (
    <div>
        <div className="jam-item-wrapper">
        <div className="jam-item-pic"><img className="jam-item-pic-src" src={pic_url}></img></div>
        <div className="jam-item">
            <div className="jam-item-text">
                <div className="jam-item-artist">{artist_name}</div>
                <div className="jam-item-song">{song}</div>
            </div>
            <div className="jam-item-song">
            <div className="jam-item-song-path">
              <audio controls src={song_url} controls />
            </div>
        </div>
            <SongLike id={props}/>
            <SongComment id={props}/>
        </div>
        
        </div>

    </div>
  );
}

export default JamItem;
