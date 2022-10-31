import type { Properties as AppEvent } from "./app";
import type { Properties as SpaceEvent } from "./space";
import type { Properties as PortalEvent } from "./portal";
import type { Properties as MobileEvent } from "./mobile";

type Properties = AppEvent & SpaceEvent & PortalEvent & MobileEvent;

export type { Properties };
