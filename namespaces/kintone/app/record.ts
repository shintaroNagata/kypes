import type { KintoneRecord, KintoneRecordForSet } from "../../../types/page";

declare global {
  namespace kintone.app.record {
    function getId(): number | null;
    function get(): KintoneRecord | null;
    function set(recordObject: { record: KintoneRecordForSet }): void;
    function setFieldShown(fieldCode: string, isShown: boolean): void;
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
    function getFieldElement(fieldCode: string): HTMLElement | null;
    function getHeaderMenuSpaceElement(): HTMLElement | null;
    function getSpaceElement(id: string): HTMLElement | null;
  }
}

export {};
