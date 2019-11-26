import React from 'react';

const JamItem = (props) => {
  const songs = props.items;
  const artist_name = props.items.artist_name
  return (
    <div className="jam-header">
      {artist_name}
    </div>
  );
}

export default JamItem;
