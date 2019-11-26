import React from 'react';
import JamHead from './JamHead'
import JamFeed from './JamFeed'
import '../styles/body-app.css'

function JamBody() {
  return (
    <div className="body-app">
      <JamHead/>
      <JamFeed/>
    </div>
  );
}

export default JamBody;
