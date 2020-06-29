import React, { ReactElement } from 'react';
interface Props {
  placeholder: string;
  name: string;
}
function TextInput({ placeholder, name }: Props): ReactElement {
  return <input placeholder={placeholder} name={name} />;
}

export default TextInput;
