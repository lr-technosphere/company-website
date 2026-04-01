'use client';

import { useEffect } from 'react';

const WhatsAppWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed">
      <div className="elfsight-app-75508bce-300b-495c-bbb6-b158b0073b44" data-elfsight-app-lazy></div>
    </div>
  );
};

export default WhatsAppWidget;