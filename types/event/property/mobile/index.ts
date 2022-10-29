import { Properties as AppEvent } from "./app";
import { Properties as SpaceEvent } from "./space";
import { Properties as PortalEvent } from "./portal";

type Properties = AppEvent & SpaceEvent & PortalEvent;

export { Properties };
