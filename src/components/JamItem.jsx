import React from 'react';
import SongLike from './SongLike'
import '../styles/jam-items.css'

// unique API items
// renders artist name, song, picture, song path, likes, comments
const JamItem = (props) => {
  const song = props.items.name;
  const artist_name = props.items.artist_name;
  const pic_url = props.items.cover_image_path;
  const song_url = props.items.music_file_path;
  const likes = props.items.likes;
  return (
    <div>
        <div className="jam-item-wrapper">
        <div className="jam-item">
            <div className="jam-item-text">
                <div className="jam-item-artist">{artist_name}</div>
                <div className="jam-item-song">{song}</div>
            </div>
            <div className="jam-item-pic"><img src={pic_url} width={"150px"}></img></div>
            {/* <div className="jam-likes">{likes}❤️</div> */}
            <SongLike id={props}/>
        </div>
        <div className="jam-item-song">
            <div className="jam-item-song-path">
            <audio controls src={song_url} controls />
            </div>
        </div>
        </div>

    </div>
  );
}

export default JamItem;
