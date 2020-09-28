import React from 'react';
import '../styles.css';

const DeviceMacbook = ({ children }) => (
  <div className="marvel-device macbook">
    <div className="top-bar" />
    <div className="camera" />
    <div className="screen">{children}</div>
    <div className="bottom-bar" />
  </div>
);

export default DeviceMacbook;
