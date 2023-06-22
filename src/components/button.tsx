import React from 'react';

export const GenericButton: React.FC<{ label: string }> = props => {
  return (
    <button className="btn waves-effect waves-light" type="button">
      {props.label}
    </button>
  );
};

export default GenericButton;
