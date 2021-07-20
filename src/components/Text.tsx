import React from 'react';

type TextProps = {
  text: string;
};

const Text = ({ text }: TextProps): JSX.Element => {
  return <div>{text}</div>;
};

export default Text;
