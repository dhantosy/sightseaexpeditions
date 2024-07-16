export interface CounterProp {
  count: number;
  maxCount: number;
  onChange: (val: number) => (void);
}
