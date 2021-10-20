import React from 'react';
import { BrowserView, isDesktop, isMobile, AndroidView, IOSView } from 'react-device-detect';
import './App.css';

function App() {

  if(isMobile || isDesktop) {
    return(
      <div>
        <AndroidView className="android">
          <div>AndroidView</div>
        </AndroidView>
        <IOSView className="ios">
          <div>IOSView</div>
        </IOSView>
        <BrowserView className="browser">
          <div>BrowserView</div>
        </BrowserView>
      </div>
    );
  }else {
    return(
      <div className="not-detected">
        Device wasn't detected
      </div>
    );
  }
}

export default App;
