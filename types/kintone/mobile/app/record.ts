import { KintoneRecord } from "../../types";

declare global {
  namespace kintone.mobile.app.record {
    function getId(): number | null;
    function get(): KintoneRecord;
    function set(record: KintoneRecord): void;
    function setFieldShown(fieldCode: string, isShown: boolean): void;
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
    function getFieldElement(fieldCode: string): HTMLElement | null;
    function getSpaceElement(id: string): HTMLElement | null;
  }
}

export {};
