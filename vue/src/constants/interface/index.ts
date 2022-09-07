export interface ObjectKeyString {
  [key: string]: string | number | ObjectKeyString;
}
export interface requiredDataTable {
  dataUrl: string;
  dataSrc: string;
  dataColumns: [];
}
export interface changeNodePayload {
  ref?: string;
  c_position?: number;
  c_title?: string;
  c_type?: string;
  c_id?: number;
}
