export interface ObjectKeyString {
  [key: string]: string | number | ObjectKeyString;
}
export interface requiredDataTable {
  dataUrl: string;
  dataSrc: string;
  dataColumns: [];
}
