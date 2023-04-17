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

const test_infer_response_type_when_proper_methods_specified_for_queried_url =
  () => {
    const case_get = async () => {
      const response = await kintone.api(
        "https://example.cybozu.com/k/v1/records.json?app=1&id=1",
        "GET",
        {}
      );
      const expect_response_extends_get_records_json_response: KintoneApi.RecordsJson["GET"]["response"] =
        response;

      // @ts-expect-error
      const check_response_not_any: undefined = response;
    };

    const case_delete = async () => {
      const response = await kintone.api(
        "https://example.cybozu.com/k/v1/records.json?app=1&ids[0]=1",
        "DELETE",
        {}
      );
      const expect_response_extends_delete_records_json_response: KintoneApi.RecordsJson["DELETE"]["response"] =
        response;

      // @ts-expect-error
      const check_response_not_any: undefined = response;
    };

    const case_post = async () => {
      const response = await kintone.api(
        "https://example.cybozu.com/k/v1/records.json?app=1",
        "POST",
        {}
      );
      // @ts-expect-error
      const expect_response_does_not_extend_post_records_json_response: KintoneApi.RecordsJson["POST"]["response"] =
        response;
    };

    const case_put = async () => {
      const put_response = await kintone.api(
        "https://example.cybozu.com/k/v1/records.json?app=1",
        "PUT",
        {}
      );
      // @ts-expect-error
      const expect_response_does_not_extend_put_records_json_response: KintoneApi.RecordsJson["PUT"]["response"] =
        put_response;
    };
  };

const test_infer_callback_args_type_when_proper_methods_specified_for_queried_url =
  () => {
    kintone.api(
      "https://example.cybozu.com/k/v1/records.json?app=1&id=1",
      "GET",
      {},
      (response) => {
        const expect_response_extends_get_records_json_response: KintoneApi.RecordsJson["GET"]["response"] =
          response;

        // @ts-expect-error
        const check_response_not_any: undefined = response;
      }
    );
    kintone.api(
      "https://example.cybozu.com/k/v1/records.json?app=1&ids[0]=1",
      "DELETE",
      {},
      (response) => {
        const expect_response_extends_delete_records_json_response: KintoneApi.RecordsJson["DELETE"]["response"] =
          response;

        // @ts-expect-error
        const check_response_not_any: undefined = response;
      }
    );

    kintone.api(
      "https://example.cybozu.com/k/v1/records.json?app=1",
      "POST",
      {},
      (response) => {
        // @ts-expect-error
        const expect_response_does_not_extend_post_records_json_response: KintoneApi.RecordsJson["POST"]["response"] =
          response;
      }
    );

    kintone.api(
      "https://example.cybozu.com/k/v1/records.json?app=1",
      "PUT",
      {},
      (response) => {
        // @ts-expect-error
        const expect_response_does_not_extend_put_records_json_response: KintoneApi.RecordsJson["PUT"]["response"] =
          response;
      }
    );
  };
