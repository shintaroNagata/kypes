declare global {
  namespace kintone.events {
    type EventType = string;
    function on(type: EventType, handler: any): void;
    function off(type: EventType, handler: any): boolean;
  }
}

export {};
