import { ReactNode } from 'react';

export interface StickyBookingSectionProp {
  children: ReactNode;
  title: string;
  isBookFormShow: boolean;
  onCloseClick: () => void;
}
