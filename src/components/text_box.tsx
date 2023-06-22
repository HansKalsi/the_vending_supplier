import React from 'react';

const TextBox: React.FC<{ text: string; type: string }> = props => {
  return (
    <>
      {props.type === 'title' && <h1>{props.text}</h1>}
      {props.type === 'text' && <p>{props.text}</p>}
    </>
  );
};

export default TextBox;
