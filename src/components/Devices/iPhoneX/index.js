import React from 'react';
import '../styles.css';

const DeviceiPhoneX = ({ children }) => (
  <div className="marvel-device iphone-x">
    <div className="notch">
      <div className="camera" />
      <div className="speaker" />
    </div>
    <div className="top-bar" />
    <div className="sleep" />
    <div className="bottom-bar" />
    <div className="volume" />
    <div className="overflow">
      <div className="shadow shadow--tr" />
      <div className="shadow shadow--tl" />
      <div className="shadow shadow--br" />
      <div className="shadow shadow--bl" />
    </div>
    <div className="inner-shadow" />
    <div className="screen">{children}</div>
  </div>
);

export default DeviceiPhoneX;
