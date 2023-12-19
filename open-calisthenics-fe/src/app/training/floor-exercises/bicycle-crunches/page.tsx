import React, { FunctionComponent } from "react";

interface BicycleCrunchProps {}

const BicycleCrunch: FunctionComponent<BicycleCrunchProps> = () => {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Iwyvozckjak?si=DlouV-jEivcBio0O"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default BicycleCrunch;
