import React, { useState, useEffect } from "react";

function TitleWithFadeOut() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 8000); // 2000 millisecondes (2 secondes)

    return () => {
      clearTimeout(timeout); // Nettoie le timeout si le composant est démonté avant la fin du délai
    };
  }, []);

  return (
    <div className="content">
      {isVisible && (
        <h1 style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s" }}>
          Connectify
        </h1>
      )}
    </div>
  );
}

export default TitleWithFadeOut;
