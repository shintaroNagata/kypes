import { Properties as RecordIndexEvent } from "./record-index";
import { Properties as RecordDetailEvent } from "./record-detail";
import { Properties as RecordCreateEvent } from "./record-create";
import { Properties as RecordEditEvent } from "./record-edit";
import { Properties as ReportEvent } from "./report";

type Properties = RecordIndexEvent &
  RecordDetailEvent &
  RecordCreateEvent &
  RecordEditEvent &
  ReportEvent;

export { Properties };
