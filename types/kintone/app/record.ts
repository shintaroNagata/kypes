declare global {
  namespace kintone.app.record {
    function getId(): number | null;
    function get(): any;
    function set(record: any): void;
    function setFieldShown(fieldCode: string, isShown: boolean): any;
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): any;
    function getFieldElement(fieldCode: string): HTMLElement | null;
    function getHeaderMenuSpaceElement(): HTMLElement | null;
    function getSpaceElement(id: string): HTMLElement | null;
  }
}

export {};
