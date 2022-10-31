import type { Properties as RecordIndexEvent } from "./record-index";
import type { Properties as RecordDetailEvent } from "./record-detail";
import type { Properties as RecordCreateEvent } from "./record-create";
import type { Properties as RecordEditEvent } from "./record-edit";
import type { Properties as ReportEvent } from "./report";

type Properties = RecordIndexEvent &
  RecordDetailEvent &
  RecordCreateEvent &
  RecordEditEvent &
  ReportEvent;

export type { Properties };
