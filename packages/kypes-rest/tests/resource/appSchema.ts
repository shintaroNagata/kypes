export type MyAppSchema = {
  properties: {
    経費: {
      type: "SUBTABLE";
      code: "経費";
      noLabel: true;
      label: "経費";
      fields: {
        科目: {
          type: "DROP_DOWN";
          code: "科目";
          label: "科目";
          noLabel: false;
          required: false;
          options: {
            広告宣伝費: {
              label: "広告宣伝費";
              index: "4";
            };
            雑費: {
              label: "雑費";
              index: "5";
            };
            消耗品費: {
              label: "消耗品費";
              index: "2";
            };
            交際費: {
              label: "交際費";
              index: "1";
            };
            会議費: {
              label: "会議費";
              index: "0";
            };
            旅費交通費: {
              label: "旅費交通費";
              index: "3";
            };
          };
          defaultValue: "";
        };
        経費日付: {
          type: "DATE";
          code: "経費日付";
          label: "日付";
          noLabel: false;
          required: false;
          unique: false;
          defaultValue: "";
          defaultNowValue: true;
        };
        経費領収書: {
          type: "CHECK_BOX";
          code: "経費領収書";
          label: "領収書";
          noLabel: false;
          required: false;
          options: {
            あり: {
              label: "あり";
              index: "0";
            };
          };
          defaultValue: [];
          align: "HORIZONTAL";
        };
        経費摘要: {
          type: "SINGLE_LINE_TEXT";
          code: "経費摘要";
          label: "摘要";
          noLabel: false;
          required: false;
          minLength: "";
          maxLength: "";
          expression: "";
          hideExpression: false;
          unique: false;
          defaultValue: "";
        };
        支払先: {
          type: "SINGLE_LINE_TEXT";
          code: "支払先";
          label: "支払先";
          noLabel: false;
          required: false;
          minLength: "";
          maxLength: "";
          expression: "";
          hideExpression: false;
          unique: false;
          defaultValue: "";
        };
        経費金額: {
          type: "NUMBER";
          code: "経費金額";
          label: "金額（円）";
          noLabel: false;
          required: false;
          minValue: "";
          maxValue: "";
          digit: true;
          unique: false;
          defaultValue: "0";
          displayScale: "";
          unit: "";
          unitPosition: "BEFORE";
        };
      };
    };
    経費合計: {
      type: "CALC";
      code: "経費合計";
      label: "経費合計";
      noLabel: true;
      required: false;
      expression: "SUM(経費金額)";
      format: "NUMBER_DIGIT";
      displayScale: "";
      hideExpression: false;
      unit: "";
      unitPosition: "BEFORE";
    };
    備考: {
      type: "MULTI_LINE_TEXT";
      code: "備考";
      label: "備考";
      noLabel: false;
      required: false;
      defaultValue: "";
    };
    No: {
      type: "SINGLE_LINE_TEXT";
      code: "No";
      label: "No";
      noLabel: false;
      required: true;
      minLength: "";
      maxLength: "64";
      expression: "";
      hideExpression: false;
      unique: true;
      defaultValue: "";
    };
    行き先: {
      type: "SINGLE_LINE_TEXT";
      code: "行き先";
      label: "行き先";
      noLabel: false;
      required: false;
      minLength: "";
      maxLength: "";
      expression: "";
      hideExpression: false;
      unique: false;
      defaultValue: "";
    };
    日当: {
      type: "NUMBER";
      code: "日当";
      label: "日当";
      noLabel: false;
      required: false;
      minValue: "";
      maxValue: "";
      digit: true;
      unique: false;
      defaultValue: "0";
      displayScale: "";
      unit: "";
      unitPosition: "BEFORE";
    };
    レコード番号: {
      type: "RECORD_NUMBER";
      code: "レコード番号";
      label: "レコード番号";
      noLabel: false;
    };
    作業者: {
      type: "STATUS_ASSIGNEE";
      code: "作業者";
      label: "作業者";
      enabled: true;
    };
    精算金額: {
      type: "CALC";
      code: "精算金額";
      label: "精算金額";
      noLabel: true;
      required: false;
      expression: "旅費合計+経費合計";
      format: "NUMBER_DIGIT";
      displayScale: "";
      hideExpression: false;
      unit: "";
      unitPosition: "BEFORE";
    };
    申請者: {
      type: "USER_SELECT";
      code: "申請者";
      label: "申請者";
      noLabel: false;
      required: true;
      entities: [];
      defaultValue: [];
    };
    地域: {
      type: "DROP_DOWN";
      code: "地域";
      label: "地域";
      noLabel: false;
      required: false;
      options: {
        海外: {
          label: "海外";
          index: "6";
        };
        "中部・北陸": {
          label: "中部・北陸";
          index: "5";
        };
        "関東（首都圏以外）": {
          label: "関東（首都圏以外）";
          index: "1";
        };
        首都圏: {
          label: "首都圏";
          index: "0";
        };
        東海: {
          label: "東海";
          index: "3";
        };
        東北: {
          label: "東北";
          index: "4";
        };
        その他: {
          label: "その他";
          index: "7";
        };
        関西: {
          label: "関西";
          index: "2";
        };
      };
      defaultValue: "首都圏";
    };
    更新者: {
      type: "MODIFIER";
      code: "更新者";
      label: "更新者";
      noLabel: false;
    };
    作成者: {
      type: "CREATOR";
      code: "作成者";
      label: "作成者";
      noLabel: false;
    };
    上長: {
      type: "USER_SELECT";
      code: "上長";
      label: "上長";
      noLabel: false;
      required: false;
      entities: [];
      defaultValue: [];
    };
    旅費合計: {
      type: "CALC";
      code: "旅費合計";
      label: "旅費合計";
      noLabel: true;
      required: false;
      expression: "SUM(旅費金額)";
      format: "NUMBER_DIGIT";
      displayScale: "";
      hideExpression: false;
      unit: "";
      unitPosition: "BEFORE";
    };
    ステータス: {
      type: "STATUS";
      code: "ステータス";
      label: "ステータス";
      enabled: true;
    };
    グループ: {
      type: "GROUP";
      code: "グループ";
      label: "グループ";
      noLabel: true;
      openGroup: true;
    };
    出発: {
      type: "DATE";
      code: "出発";
      label: "期間（出発）";
      noLabel: false;
      required: false;
      unique: false;
      defaultValue: "";
      defaultNowValue: true;
    };
    更新日時: {
      type: "UPDATED_TIME";
      code: "更新日時";
      label: "更新日時";
      noLabel: false;
    };
    カテゴリー: {
      type: "CATEGORY";
      code: "カテゴリー";
      label: "カテゴリー";
      enabled: false;
    };
    目的: {
      type: "SINGLE_LINE_TEXT";
      code: "目的";
      label: "目的";
      noLabel: false;
      required: false;
      minLength: "";
      maxLength: "";
      expression: "";
      hideExpression: false;
      unique: false;
      defaultValue: "";
    };
    旅費: {
      type: "SUBTABLE";
      code: "旅費";
      noLabel: true;
      label: "旅費";
      fields: {
        旅費領収書: {
          type: "CHECK_BOX";
          code: "旅費領収書";
          label: "領収書";
          noLabel: false;
          required: false;
          options: {
            あり: {
              label: "あり";
              index: "0";
            };
          };
          defaultValue: [];
          align: "HORIZONTAL";
        };
        旅費日付: {
          type: "DATE";
          code: "旅費日付";
          label: "日付";
          noLabel: false;
          required: false;
          unique: false;
          defaultValue: "";
          defaultNowValue: true;
        };
        手段: {
          type: "DROP_DOWN";
          code: "手段";
          label: "手段";
          noLabel: false;
          required: false;
          options: {
            タクシー: {
              label: "タクシー";
              index: "2";
            };
            飛行機: {
              label: "飛行機";
              index: "3";
            };
            宿泊: {
              label: "宿泊";
              index: "5";
            };
            電車: {
              label: "電車";
              index: "0";
            };
            船舶: {
              label: "船舶";
              index: "4";
            };
            バス: {
              label: "バス";
              index: "1";
            };
          };
          defaultValue: "電車";
        };
        旅費金額: {
          type: "NUMBER";
          code: "旅費金額";
          label: "金額（円）";
          noLabel: false;
          required: false;
          minValue: "";
          maxValue: "";
          digit: true;
          unique: false;
          defaultValue: "0";
          displayScale: "";
          unit: "";
          unitPosition: "BEFORE";
        };
        旅費摘要: {
          type: "SINGLE_LINE_TEXT";
          code: "旅費摘要";
          label: "摘要";
          noLabel: false;
          required: false;
          minLength: "";
          maxLength: "";
          expression: "";
          hideExpression: false;
          unique: false;
          defaultValue: "";
        };
      };
    };
    帰着: {
      type: "DATE";
      code: "帰着";
      label: "期間（帰着）";
      noLabel: false;
      required: false;
      unique: false;
      defaultValue: "";
      defaultNowValue: true;
    };
    作成日時: {
      type: "CREATED_TIME";
      code: "作成日時";
      label: "作成日時";
      noLabel: false;
    };
  };
};
