// Alert 有五种类型：primary、success、info、warning、error
type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  // 自定义类名
  className?: string;
  // 警告提示类型
  type?: AlertType;
  // 警告提示内容
  message?: string;
  // 警告提示的描述
  description?: string;
  // 是否显示图标
  showIcon?: boolean;
  // 自定义图标, showIcon 为 true 时生效
  icon?: string;
  // 是否显示关闭按钮 开启手动关闭功能
  closeable?: boolean;
  // 是否表现为圆角
  round?: boolean;
}