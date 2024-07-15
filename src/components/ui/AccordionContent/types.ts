import { ReactNode } from 'react';

export interface AccordionContentProp {
  isExpand: boolean;
  title: string;
  children: ReactNode;
}
