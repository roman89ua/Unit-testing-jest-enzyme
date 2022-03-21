export interface IOption {
  value: number;
  label: string;
}
  
export interface ISelect {
  handleChange: () => void;
  options: IOption[] | null | undefined;
  defaultValue: number | undefined;
}