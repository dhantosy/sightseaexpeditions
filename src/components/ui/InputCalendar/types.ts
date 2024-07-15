import { DateValue } from '@nextui-org/react';

export interface InputCalendarProp {
  setDate: (val: any) => void;
  showCalendar: boolean;
  handleCloseCalendar: (val: boolean) => (void);
  errorMessage: string;
  unavailableDates?: (date: DateValue) => boolean;
}
