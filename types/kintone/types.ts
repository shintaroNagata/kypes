type KintoneField = { type: string; value: any };
type KintoneRecord = {
  [fieldCode: string]: KintoneField | undefined;
};

export type { KintoneRecord, KintoneField };
