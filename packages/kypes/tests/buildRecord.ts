import "../types";
import { KintoneApi } from "@shin-chan/kypes-rest";
import { MyAppSchema } from "./resource/appSchema";

// Unknown app schema gives unknown record schema.
type UnknownAppSchema = { properties: KintoneApi.KintoneFormProperty };

type UnknownRecord = kintone.app.BuildRecord<UnknownAppSchema>;
declare const unknownRecord: UnknownRecord;
declare const kintoneRecord: kintone.app.Record;
const test_unknown_record_extends_kintone_record_case_get: kintone.app.Record =
  unknownRecord;
const test_kintone_record_extends_unknown_record_case_get: UnknownRecord =
  kintoneRecord;

type UnknownRecordForAdd = kintone.app.BuildRecordForSet<UnknownAppSchema>;
declare const unknownRecordForAdd: UnknownRecordForAdd;
declare const kintoneRecordForSet: kintone.app.RecordForSet;
const test_unknown_record_extends_kintone_record_case_set: kintone.app.RecordForSet =
  unknownRecordForAdd;
const test_kintone_record_extends_unknown_record_case_set: UnknownRecordForAdd =
  kintoneRecordForSet;

type UnknownRecordOnCreatePage =
  kintone.app.BuildRecordOnCreatePage<UnknownAppSchema>;
declare const unknownRecordForUpdate: UnknownRecordOnCreatePage;
declare const kintoneRecordOnCreatePage: kintone.app.RecordOnCreatePage;
const test_unknown_record_extends_kintone_record_case_create_page: kintone.app.RecordOnCreatePage =
  unknownRecordForUpdate;
const test_kintone_record_extends_unknown_record_case_create_page: UnknownRecordOnCreatePage =
  kintoneRecordOnCreatePage;

// Specific record schema extends unknown record schema
type MyRecord = kintone.app.BuildRecord<MyAppSchema>;
declare const myRecord: MyRecord;
const test_specific_record_extends_kintone_record_case_get: kintone.app.Record =
  myRecord;

type MyRecordForAdd = kintone.app.BuildRecordForSet<MyAppSchema>;
declare const myRecordForSet: MyRecordForAdd;
const test_specific_record_extends_kintone_record_case_add: kintone.app.RecordForSet =
  myRecordForSet;

type MyRecordOnCreatePage = kintone.app.BuildRecordOnCreatePage<MyAppSchema>;
declare const myRecordOnCreatePage: MyRecordOnCreatePage;
const test_specific_record_extends_kintone_record_case_create_page: kintone.app.RecordOnCreatePage =
  myRecordOnCreatePage;
