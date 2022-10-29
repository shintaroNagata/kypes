import { Properties as AppEvent } from "./app";
import { Properties as SpaceEvent } from "./space";
import { Properties as PortalEvent } from "./portal";
import { Properties as MobileEvent } from "./mobile";

type Properties = AppEvent & SpaceEvent & PortalEvent & MobileEvent;

export { Properties };
