import { RecordObject, SetRecordObject } from "../../../../types/page/field";

declare global {
  namespace kintone.mobile.app.record {
    function getId(): number | null;
    function get(): RecordObject | null;
    function set(recordObject: { record: SetRecordObject }): void;
    function setFieldShown(fieldCode: string, isShown: boolean): void;
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
    function getFieldElement(fieldCode: string): HTMLElement | null;
    function getSpaceElement(id: string): HTMLElement | null;
  }
}

export {};
