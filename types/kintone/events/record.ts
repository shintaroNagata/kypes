type KintoneField = { type: string; value: any };
type KintoneRecord = {
  [fieldCode in string]?: KintoneField;
};

export type { KintoneRecord, KintoneField };
