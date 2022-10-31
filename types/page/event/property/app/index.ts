import type { Properties as RecordIndexEvent } from "./record-index";
import type { Properties as RecordDetailEvent } from "./record-detail";
import type { Properties as RecordCreateEvent } from "./record-create";
import type { Properties as RecordEditEvent } from "./record-edit";
import type { Properties as RecordPrintEvent } from "./record-print";
import type { Properties as ReportEvent } from "./report";

type Properties = RecordIndexEvent &
  RecordDetailEvent &
  RecordCreateEvent &
  RecordEditEvent &
  RecordPrintEvent &
  ReportEvent;

export type { Properties };
