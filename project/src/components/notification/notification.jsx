import React, { useEffect, useState } from 'react';
import { func, string } from 'prop-types';
import cn from 'classnames';

import { NOTIFICATION_HIDE_TIMEOUT } from '../../const';


function Notification({message, onNotificationHide}) {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsHiding(true), NOTIFICATION_HIDE_TIMEOUT);
    return () => onNotificationHide();
  }, []);

  return (
    <h3 className={cn('notification', { 'notification--hiding': isHiding })} onTransitionEnd={onNotificationHide}>
      {message}
    </h3>
  );
}

Notification.propTypes = {
  message: string.isRequired,
  onNotificationHide: func.isRequired,
};

export default Notification;
