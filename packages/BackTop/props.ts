import { CSSProperties } from 'react';

export type BackTopProps = {
  style?: CSSProperties;
  className?: string;
  target: string;
  visibilityHeight?: number;
  children?: React.ReactNode;
}