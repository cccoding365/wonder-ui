import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  type?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'link' | 'text';
  size?: 'large' | 'medium' | 'small';
  round?: boolean,
  icon?: string,
  loading?: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>,
};
function Button(props: ButtonProps): JSX.Element {
  const { style, className, children, type, size, round, icon, loading, disabled, onClick } = props;
  const btnClass = classNames({
    'wonder_btn': true,
    [`wonder_btn_${type}`]: true,
    [`wonder_btn_${size}`]: true,
    'wonder_btn_round': round,
    'wonder_btn_loading': loading,
    [`wonder_btn_disabled wonder_btn_disabled_${type}`]: disabled,
    [className || '']: !!className,
  });
  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (onClick && !loading) {
      onClick(e);
    }
  }
  return (
    <button className={btnClass} style={style || undefined} disabled={disabled} onClick={handleBtnClick}>
      {
        loading ? <span className={['m-icon-loading1', 'wonder_publicRotateEle'].join(' ')} /> : null
      }
      {
        icon && !loading ? <span className={icon} /> : null
      }
      {children}
    </button>
  );
}
Button.defaultProps = {
  style: '',
  className: '',
  children: null,
  type: 'default',
  size: 'medium',
  round: false,
  icon: '',
  loading: false,
  disabled: false,
  onClick: () => { },
};
export default Button;
