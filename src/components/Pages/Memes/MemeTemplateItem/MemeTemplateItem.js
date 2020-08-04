import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import MemeGeneratorContext from "../../../../contexts/MemeGeneratorContext";

const MemeTemplateItem = (props) => {
  const memeContext = useContext(MemeGeneratorContext);

  const handleClick = () => {
    memeContext.setMeme({ ...props.meme });
    props.history.replace("/create-a-meme");
  };

  return (
    <div>
      <h2 onClick={handleClick}>{props.meme.name}</h2>
      <img
        src={props.meme.url}
        alt={props.meme.name}
        height={props.height}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default withRouter(MemeTemplateItem);