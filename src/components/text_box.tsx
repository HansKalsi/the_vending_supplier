import React from "react";

const TextBox: React.FC<{ text: string, type: string }> = (props) => {
    return (
        <>
            {props.type === "p" ?
            <p>{props.text}</p> : <h1>{props.text}</h1>
            }
        </>
    );
}

export default TextBox;
