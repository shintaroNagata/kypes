import { KintoneApi } from "../types/index";
import { MyAppSchema } from "./resource/appSchema";

// Unknown app schema gives unknown record schema.
type UnknownAppSchema = { properties: KintoneApi.KintoneFormProperty };

type UnknownRecord = KintoneApi.BuildRecord<UnknownAppSchema>;
declare const unknownRecord: UnknownRecord;
declare const kintoneRecord: KintoneApi.KintoneRecord;
const test_unknown_record_extends_kintone_record_case_get: KintoneApi.KintoneRecord =
  unknownRecord;
const test_kintone_record_extends_unknown_record_case_get: UnknownRecord =
  kintoneRecord;

type UnknownRecordForAdd = KintoneApi.BuildRecordForAdd<UnknownAppSchema>;
declare const unknownRecordForAdd: UnknownRecordForAdd;
declare const kintoneRecordForAdd: KintoneApi.KintoneRecordForAdd;
const test_unknown_record_extends_kintone_record_case_add: KintoneApi.KintoneRecordForAdd =
  unknownRecordForAdd;
const test_kintone_record_extends_unknown_record_case_add: UnknownRecordForAdd =
  kintoneRecordForAdd;

type UnknownRecordForUpdate = KintoneApi.BuildRecordForUpdate<UnknownAppSchema>;
declare const unknownRecordForUpdate: UnknownRecordForUpdate;
declare const kintoneRecordForUpdate: KintoneApi.KintoneRecordForUpdate;
const test_unknown_record_extends_kintone_record_case_update: KintoneApi.KintoneRecordForUpdate =
  unknownRecordForUpdate;
const test_kintone_record_extends_unknown_record_case_update: UnknownRecordForUpdate =
  kintoneRecordForUpdate;

// Specific record schema extends unknown record schema
type MyRecord = KintoneApi.BuildRecord<MyAppSchema>;
declare const myRecord: MyRecord;
const test_specific_record_extends_kintone_record_case_get: KintoneApi.KintoneRecord =
  myRecord;

type MyRecordForAdd = KintoneApi.BuildRecordForAdd<MyAppSchema>;
declare const myRecordForAdd: MyRecordForAdd;
const test_specific_record_extends_kintone_record_case_add: KintoneApi.KintoneRecordForAdd =
  myRecordForAdd;

type MyRecordForUpdate = KintoneApi.BuildRecordForUpdate<MyAppSchema>;
declare const myRecordForUpdate: MyRecordForUpdate;
const test_specific_record_extends_kintone_record_case_update: KintoneApi.KintoneRecordForUpdate =
  myRecordForUpdate;
