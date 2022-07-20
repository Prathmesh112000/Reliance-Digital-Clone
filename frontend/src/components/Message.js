import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Message = ({children, variant}) => {
  return (
    <Alert key={variant} variant={variant}>
   {children}
  </Alert>
  )
}

export default Message