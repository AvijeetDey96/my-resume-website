import React from 'react';
import Lottie from 'react-lottie';
import developer from './jsons/developer.json';
import meditate from './jsons/meditate.json';
import engineer from './jsons/engineer.json';
 function DeveloperAnimation(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: developer,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <Lottie
        options={defaultOptions}
        height={400} 
        width={400}
      />
    );
}
function MeditateAnimation(props) {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: meditate,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  return (
      <Lottie
      options={defaultOptions}
      height={400} 
      width={400}
    />
  );
}

  export  {DeveloperAnimation ,MeditateAnimation }