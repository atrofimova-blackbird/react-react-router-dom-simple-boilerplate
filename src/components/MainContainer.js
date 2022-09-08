import React, { useState, useEffect } from 'react';
import FlippContainer from './FlippContainer'

const useForceUpdate = () => {
  console.log('------- useForceUpdate');
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
}

const MainContainer = () => {
  // the container that is being re rendered
  //
  // const forceUpdate = useForceUpdate();
  //
  //
  // useEffect(() => {
  //   window.addEventListener('popswindow.addEventListenertate', forceUpdate);
  //
  //   return () => {
  //     window.removeEventListener('popstate', forceUpdate);
  //   }
  // }, []);

  return <div id="main-container">
    <FlippContainer/>
  </div>
};

export default MainContainer;
