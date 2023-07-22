import React from 'react';

export const GenericButton: React.FC<{
  label: string;
  onClick: any;
}> = props => {
  return (
    <button
      className="btn waves-effect waves-light hoverable"
      type="button"
      onClick={props.onClick ? props.onClick : null}
    >
      {props.label}
    </button>
  );
};
