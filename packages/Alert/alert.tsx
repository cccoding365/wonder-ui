import React, { useState } from 'react';
import classnames from 'classnames';
import './style.scss';
import { AlertProps } from './props'

const iconMap = {
  primary: <i className="m-icon-comment-filling" />,
  success: <i className="m-icon-success-filling" />,
  info: <i className="m-icon-prompt-filling" />,
  warning: <i className="m-icon-warning-filling" />,
  error: <i className="m-icon-delete-filling" />,
};

const Alert: React.FC<AlertProps> = (props) => {
  const { className, type, message, description, showIcon, icon, closeable, round } = props;
  // 控制组件显示与隐藏
  const [closed, setClosed] = useState(true);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => setClosed(false);

  const alertCls = classnames('alert', className, {
    [`alert-${type}`]: type,
    [`alert-round`]: round,
    [`alert-with-description`]: !!description,
    [`alert-no-icon`]: !showIcon,
  });

  const renderIconNode = () => {
    const iconType = description ? iconMap[type || 'warning'] : iconMap[type || 'warning'];
    // 判断是否是自定义 icon
    if (icon) return icon;
    return React.createElement('span', { className: `alert-icon` }, iconType);
  };

  const renderCloseIcon = () => <div className="alert-close-icon" onClick={handleClose}> &#10005; </div>

  if (!closed) return null;

  return (
    <div data-show={closed} className={alertCls}>
      {showIcon ? renderIconNode() : null}
      <span className="alert-message">{message}</span>
      <span className="alert-description">{description}</span>
      {closeable ? renderCloseIcon() : null}
    </div>
  );
};

// Alert 的默认配置
Alert.defaultProps = {
  className: '',
  type: 'primary',
  message: '',
  description: '',
  showIcon: false,
  icon: undefined,
  closeable: false,
  round: false,
};

export default Alert;
