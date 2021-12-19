import { IDField } from "./id";
import { RevisionField } from "./revision";
import { RecordNumberField } from "./recordNumber";
import { CreatorField } from "./creator";
import { CreatedTimeField } from "./createdTime";
import { ModifierField } from "./modifier";
import { UpdatedTimeField } from "./updatedTime";
import { CategoryField } from "./category";
import { StatusField } from "./status";
import { StatusAssigneeField } from "./statusAssignee";
import { SingleLineTextField } from "./singleLineText";
import { NumberField } from "./number";
import { CalcField } from "./calc";
import { MultiLineTextField } from "./multiLineText";
import { RichTextField } from "./richText";
import { LinkField } from "./link";
import { CheckBoxField } from "./checkBox";
import { RadioButtonField } from "./radioButton";
import { DropdownField } from "./dropDown";
import { MultiSelectField } from "./multiSelect";
import { FileField } from "./file";
import { DateField } from "./date";
import { TimeField } from "./time";
import { DateTimeField } from "./dateTime";
import { UserSelectField } from "./userSelect";
import { OrganizationSelectField } from "./organizationSelect";
import { GroupSelectField } from "./groupSelect";

type MetaFieldsMap = {
  ID: IDField;
  Revision: RevisionField;
  RecordNumber: RecordNumberField;
  Creator: CreatorField;
  CreatedTime: CreatedTimeField;
  Modifier: ModifierField;
  UpdatedTime: UpdatedTimeField;
  Category: CategoryField;
  Status: StatusField;
  StatusAssignee: StatusAssigneeField;
};

type NormalFieldsMap = {
  SingleLineText: SingleLineTextField;
  Number: NumberField;
  Calc: CalcField;
  MultiLineText: MultiLineTextField;
  RichText: RichTextField;
  Link: LinkField;
  CheckBox: CheckBoxField;
  RadioButton: RadioButtonField;
  Dropdown: DropdownField;
  MultiSelect: MultiSelectField;
  File: FileField;
  Date: DateField;
  Time: TimeField;
  DateTime: DateTimeField;
  UserSelect: UserSelectField;
  OrganizationSelect: OrganizationSelectField;
  GroupSelect: GroupSelectField;
};

type SubtableMap = {
  Subtable: {
    rest: {
      record: {
        get: {
          type: "SUBTABLE";
          value: Array<{
            id: string;
            value: {
              [fieldCode: string]:
                | NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["get"]
                | undefined;
            };
          }>;
        };
        add: {
          value: Array<{
            id?: string | null;
            value?: {
              [
                fieldCode: string
              ]: NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["add"];
            };
          }>;
        };
        update: {
          value: Array<{
            id?: string | null;
            value?: {
              [
                fieldCode: string
              ]: NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["update"];
            };
          }>;
        };
      };
    };
    page: {
      record: {
        get: {
          type: "SUBTABLE";
          value: Array<{
            id: string | null;
            value: {
              [fieldCode: string]:
                | NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["get"]
                | undefined;
            };
          }>;
        };
        set: {
          type: "SUBTABLE";
          value: Array<{
            value: {
              [fieldCode: string]:
                | NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["get"];
            };
          }>;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: false;
        error: false;
      };
    };
  };
};

type FieldsMap = MetaFieldsMap & NormalFieldsMap & SubtableMap;

export { FieldsMap };
