import React from 'react';

export const TextInput: React.FC = () => {
  return (
    <div className="input-field">
      <input name="text" type="text" className="validate" />
      <label htmlFor="text">TEXT INPUT</label>
    </div>
  );
};

export const EmailInput: React.FC = () => {
  return (
    <div className="input-field">
      <input name="email" type="email" className="validate" />
      <label htmlFor="email">EMAIL INPUT</label>
    </div>
  );
};
