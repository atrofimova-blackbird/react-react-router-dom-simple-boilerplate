import React, { useEffect, useRef } from 'react'

const FlippContainer = () => {
  const flippContainer = useRef(null)

  useEffect(() => {
    if (window.storefront !== undefined) {
      console.log('window.storefront', window.storefront);
    } else {
      console.log('defining storefront');
      window.storefront = new Flipp.Storefront({
        accessToken: "92bcff5f7d07c3aaa4b33e2c048d7728",
        merchantId: "234",
        merchantNameIdentifier: "walmartcanada"
      });
    }

    window.storefront.renderStorefront(flippContainer.current);
  }, [])

  return (
      <div id="flipp-container" ref={flippContainer}>
        Wait for Flipp content to load...
      </div>
  );
}

export default FlippContainer;
