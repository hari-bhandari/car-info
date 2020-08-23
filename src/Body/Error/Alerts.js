import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import './Error.css'
const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
        <div className="error-notice">
          <div className="oaerror danger">
            <strong>{alert.msg}</strong>
          </div>
      </div>
    ))
  );
};

export default Alerts;
