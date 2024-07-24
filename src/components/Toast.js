import React, { useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastButton = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <div>
      <Button color="primary" onClick={toggleToast}>
        Show Toast
      </Button>
      {showToast && (
        <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 1000 }}>
          <Toast isOpen={showToast} style={{ backgroundColor: '#007bff', color: 'white' }}>
            <ToastHeader toggle={toggleToast} style={{ backgroundColor: '#0056b3', color: 'white' }}>
              Notification
            </ToastHeader>
            <ToastBody>
              This is a blue toast!
            </ToastBody>
          </Toast>
        </div>
      )}
    </div>
  );
};

export default ToastButton;
