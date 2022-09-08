import React, { useEffect, useRef } from 'react'

const FlippContainer = () => {
  const flippContainer = useRef(null)

  useEffect(() => {
    if (window.storefront !== undefined) {
      // console.log('window.storefront', window.storefront);
    } else {
      // console.log('defining storefront');
      window.storefront = new Flipp.Storefront({
        accessToken: "1c397596a4ba9c50c3fad26b0fcdbaa6",
        merchantId: "2451",
        merchantNameIdentifier: "shoprite"
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
