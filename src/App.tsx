import React from 'react';
import { MobileView, BrowserView, isDesktop, isMobile, AndroidView, IOSView, isAndroid, isIOS } from 'react-device-detect';
import './App.css';

function App() {
  
  if(isDesktop) {
    return(
      <div>
        <BrowserView className="browser">
          <div>BrowserView</div>
        </BrowserView>
      </div>
    );
  }else if(isMobile) {
    if(isAndroid) {
      return(
        <AndroidView className="android">
          <div>AndroidView</div>
        </AndroidView>
      );
    }else if(isIOS) {
      return(
        <IOSView className="ios">
          <div>IOSView</div>
        </IOSView>
      );
    }else {
      return(
        <MobileView className="mobile">
          <div>MobileView</div>
        </MobileView>
      );
    }
  }else {
    return(
      <div className="not-detected">
        Device not detected
      </div>
    );
  }
}

export default App;
