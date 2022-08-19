import { ReactNode } from 'react';
import 'react-native-svg';
declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
  }

  export interface GProps {
    children?: ReactNode;
  }

  export interface ClipPathProps {
    children?: ReactNode;
  }
}