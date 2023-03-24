/* eslint-disable no-unused-expressions */
import "../types/index";
import { MyAppSchema } from "./resource/appSchema";

// kintone.events.on(/* ... */)
const test_infer_callback_args_type_from_event_type = () => {
  kintone.events.on("app.record.edit.show", (event) => {
    const expect_event_extends_app_record_edit_show_event: kintone.events.AppRecordEditShowEvent =
      event;

    const expect_event_record_extends_kintone_record: kintone.app.Record =
      event.record;

    // @ts-expect-error
    const check_event_not_any: undefined = event;

    // @ts-expect-error
    const check_event_record_not_any: undefined = event.record;
  });
};

const test_infer_callback_args_type_from_type_parameters = () => {
  const eventType = "app.record.edit.show";
  type MyEvent = kintone.events.Event<typeof eventType, MyAppSchema>;
  kintone.events.on<MyEvent>(eventType, (event) => {
    // FIXME:
    // @ts-expect-error
    const expect_event_extends_app_record_index_show_event: kintone.events.AppRecordEditShowEvent =
      event;

    const expect_event_record_extends_my_app_record: kintone.app.BuildRecord<MyAppSchema> =
      event.record;

    // @ts-expect-error
    const check_event_not_any: undefined = event;

    // @ts-expect-error
    const check_event_record_not_any: undefined = event;
  });
};

// kintone.events.on(/* ... */)
const test_infer_callback_args_type_from_event_types_array = () => {
  kintone.events.on(
    ["app.record.edit.show", "app.record.create.show"],
    (event) => {
      switch (event.type) {
        case "app.record.edit.show": {
          const expect_event_extends_app_record_edit_show_event: kintone.events.AppRecordEditShowEvent =
            event;

          const expect_event_record_extends_kintone_record: kintone.app.Record =
            event.record;

          break;
        }
        case "app.record.create.show": {
          const expect_event_extends_app_record_edit_show_event: kintone.events.AppRecordCreateShowEvent =
            event;

          const expect_event_record_extends_kintone_record: kintone.app.RecordOnCreatePage =
            event.record;

          break;
        }
        default: {
          const exhaustive_check: never = event;
          break;
        }
      }

      // @ts-expect-error
      const check_event_not_any: undefined = event;

      // @ts-expect-error
      const check_event_record_not_any: undefined = event.record;
    }
  );
};

const test_infer_callback_args_type_from_type_parameters_case_array = () => {
  const eventType = ["app.record.edit.show", "app.record.create.show"] as const;
  type MyEvent = kintone.events.Event<typeof eventType, MyAppSchema>;
  kintone.events.on<MyEvent>(eventType, (event) => {
    switch (event.type) {
      case "app.record.edit.show": {
        // FIXME:
        // @ts-expect-error
        const expect_event_extends_app_record_edit_show_event: kintone.events.AppRecordEditShowEvent =
          event;

        const expect_event_record_extends_my_app_record: kintone.app.BuildRecord<MyAppSchema> =
          event.record;

        break;
      }
      case "app.record.create.show": {
        // FIXME:
        // @ts-expect-error
        const expect_event_extends_app_record_edit_show_event: kintone.events.AppRecordCreateShowEvent =
          event;

        const expect_event_record_extends_my_app_record: kintone.app.BuildRecordOnCreatePage<MyAppSchema> =
          event.record;

        break;
      }
      default: {
        const exhaustive_check: never = event;
        break;
      }
    }

    // @ts-expect-error
    const check_event_not_any: undefined = event;

    // @ts-expect-error
    const check_event_record_not_any: undefined = event.record;
  });
};
