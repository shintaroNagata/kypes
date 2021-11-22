import { kintone } from "./kintone";

declare global {
  interface Window {
    kintone: typeof kintone;
  }
}
