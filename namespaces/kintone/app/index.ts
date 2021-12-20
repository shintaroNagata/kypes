import "./record";

declare global {
  namespace kintone.app {
    function getQueryCondition(): string | null;
    function getQuery(): string | null;
    function getId(): number | null;
    function getLookupTargetAppId(fieldCode: string): number | null;
    function getRelatedRecordsTargetAppId(fieldCode: string): number | null;
    function getFieldElements(fieldCode: string): HTMLElement[] | null;
    function getHeaderMenuSpaceElement(): HTMLElement | null;
    function getHeaderSpaceElement(): HTMLElement | null;
  }
}

export {};
