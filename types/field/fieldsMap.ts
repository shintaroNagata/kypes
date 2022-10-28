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
import { GroupField } from "./group";
import { ReferenceTableField } from "./referenceTable";
import { LookupField } from "./lookup";
import { LabelField } from "./label";
import { HRField } from "./hr";
import { SpacerField } from "./spacer";

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
  Lookup: LookupField;
};

type AppearanceFieldsMap = {
  Group: GroupField;
  ReferenceTable: ReferenceTableField;
  Label: LabelField;
  HR: HRField;
  Spacer: SpacerField;
};

type Subtable<Structure extends { [fieldCode: string]: unknown }> = {
  record: {
    get: {
      type: "SUBTABLE";
      value: Array<{
        id: string | null;
        value: Structure;
      }>;
    };
    set: {
      type: "SUBTABLE";
      value: Array<{
        value: Structure;
      }>;
    };
  };
};
type FieldsMap = MetaFieldsMap & NormalFieldsMap & AppearanceFieldsMap;
type InSubtableFieldsMap = NormalFieldsMap;

export { FieldsMap, Subtable, InSubtableFieldsMap };
