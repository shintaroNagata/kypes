import { Event, EventTypes } from "./types";

declare global {
  namespace kintone.events {
    function on<T extends EventTypes>(
      type: T | T[],
      handler: (event: Event<T>) => any
    ): void;

    function off<T extends EventTypes>(
      type?: T | T[],
      handler?: (event: Event<T>) => any
    ): boolean;

    export { EventTypes, on, off };
  }
}

export {};
