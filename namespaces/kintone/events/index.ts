import { Event, EventTypes } from "./types";

declare global {
  namespace kintone.events {
    /**
     * Registers an event handler.
     * @param type The event type or array of event types, to which the event handler will bind to.
     * @param handler The handler that will run when the event is triggered.
     * All event objects have an event type in their type property.
     */
    function on<T extends EventTypes>(
      type: T | T[],
      handler: (event: Event<T>) => any
    ): void;

    /**
     * Removes event handlers from the specified event type(s).
     * @param type The event type(s) to which the event handler is bound to.
     * @param handler The handler that will be removed from the specified event type(s).
     * If no value is set for this parameter, all event handlers will be removed from the specified event type(s).
     * If no values are set for both the type and handler parameter, then all event handlers will be removed from all event types.
     */
    function off<T extends EventTypes>(
      type?: T | T[],
      handler?: (event: Event<T>) => any
    ): boolean;

    export { EventTypes, on, off };
  }
}

export {};
