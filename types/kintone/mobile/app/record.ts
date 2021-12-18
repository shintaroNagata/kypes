import { FieldsMap } from "../../field";

type SetField<
  Page extends {
    record: { set: unknown };
    supported: { disabled: boolean; error: boolean };
  }
> = Page extends unknown
  ? Page["record"]["set"] &
      (Page["supported"]["disabled"] extends true
        ? { disabled: boolean }
        : unknown) &
      (Page["supported"]["error"] extends true
        ? { error: string | null }
        : unknown)
  : never;

declare global {
  namespace kintone.mobile.app.record {
    function getId(): number | null;
    function get(): {
      record: {
        [fieldCode: string]:
          | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
          | undefined;
      };
    } | null;
    function set(recordObject: {
      record: {
        [fieldCode: string]: SetField<FieldsMap[keyof FieldsMap]["page"]>;
      };
    }): void;
    function setFieldShown(fieldCode: string, isShown: boolean): void;
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
    function getFieldElement(fieldCode: string): HTMLElement | null;
    function getSpaceElement(id: string): HTMLElement | null;
  }
}

export {};
