import { Properties as EventProperties } from "./property";

type EventTypes = keyof EventProperties;

type Event<EventType extends EventTypes> = EventType extends unknown
  ? { type: EventType } & EventProperties[EventType]
  : never;

export { Event, EventTypes };
