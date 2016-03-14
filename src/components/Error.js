import React from 'react';

export default function(props){
  const {message} = props;
  return (
    <div className="Error">
      {message}
    </div>
  );
}
