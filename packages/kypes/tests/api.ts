/* eslint-disable no-unused-expressions */

import "../types/index";
import type { KintoneApi } from "@shin-chan/kypes-rest";
import { MyAppSchema } from "./resource/appSchema";

// kintone.api(/* ... */)
const test_infer_response_type_from_arguments = async () => {
  const response = await kintone.api("/k/v1/record.json", "GET", {
    app: 1,
    id: 1,
  });
  const expect_response_extends_get_record_json_response: KintoneApi.RecordJson["GET"]["response"] =
    response;

  // @ts-expect-error
  const check_response_not_any: undefined = response;
};

const test_infer_callback_args_type_from_arguments = () => {
  kintone.api(
    "/k/v1/record.json",
    "GET",
    {
      app: 1,
      id: 1,
    },
    (response) => {
      const expect_response_extends_get_record_json_response: KintoneApi.RecordJson["GET"]["response"] =
        response;

      // @ts-expect-error
      const check_response_not_any: undefined = response;
    }
  );
};

const test_infer_response_type_from_type_parameters = async () => {
  type MyGetRecordSchema = KintoneApi.RecordJson<MyAppSchema>["GET"];
  const response = await kintone.api<MyGetRecordSchema>(
    "/k/v1/record.json",
    "GET",
    { app: 1, id: 1 }
  );
  const expect_response_extends_get_record_json_response: KintoneApi.RecordJson["GET"]["response"] =
    response;

  const expect_response_record_extends_my_app_record: KintoneApi.BuildRecord<MyAppSchema> =
    response.record;

  // @ts-expect-error
  const check_response_not_any: undefined = response;

  // @ts-expect-error
  const check_response_record_not_any: undefined = response.record;
};

const test_infer_callback_args_type_from_type_parameters = () => {
  type MyGetRecordSchema = KintoneApi.RecordJson<MyAppSchema>["GET"];
  kintone.api<MyGetRecordSchema>(
    "/k/v1/record.json",
    "GET",
    {
      app: 1,
      id: 1,
    },
    (response) => {
      const expect_response_extends_get_record_json_response: KintoneApi.RecordJson["GET"]["response"] =
        response;

      const expect_response_record_extends_my_app_record: KintoneApi.BuildRecord<MyAppSchema> =
        response.record;

      // @ts-expect-error
      const check_response_not_any: undefined = response;

      // @ts-expect-error
      const check_response_record_not_any: undefined = response.record;
    }
  );
};
