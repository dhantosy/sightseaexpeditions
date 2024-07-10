interface TableProp {
  diveDestination: string;
  totalDive?: string;
  program?: string;
  duration?: string;
  minimumPerson?: string;
  price: string;
}

export interface AccordionTableProp {
  isExpand: boolean;
  title: string;
  tableTitle: string[];
  tableItems: TableProp[];
  tableItemsClassTitle: string;
  tableItemsClass: string;
  includedList?: string[];
}
