import { Properties as RecordIndexEvent } from "./record-index";
import { Properties as RecordDetailEvent } from "./record-detail";
import { Properties as RecordCreateEvent } from "./record-create";
import { Properties as RecordEditEvent } from "./record-edit";
import { Properties as RecordPrintEvent } from "./record-print";
import { Properties as ReportEvent } from "./report";

type Properties = RecordIndexEvent &
  RecordDetailEvent &
  RecordCreateEvent &
  RecordEditEvent &
  RecordPrintEvent &
  ReportEvent;

export { Properties };
