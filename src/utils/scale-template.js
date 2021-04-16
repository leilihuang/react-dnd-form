export default (formType) => {
  const scaleModules = {
    div: {
      formType: "div",
      content: "文字",
      spanNum: 12,
      cptParams: {},
      itemParams: {
        label: "文字",
        className: "",
      },
    },
    result: {
      formType: "result",
      fieldName: "result",
      spanNum: 12,
      cptParams: {},
      itemParams: {
        label: "结果组件",
        className: "",
      },
    },
    imgs: {
      formType: "img",
      spanNum: 12,
      name: "图片地址",
      labelName: "图片地址",
      cptParams: {},
      itemParams: {
        label: "图片",
        className: "",
      },
    },
    input: {
      formType: "input",
      fieldName: "input",
      spanNum: 12,
      cptParams: {
        placeholder: "请输入",
      },
      itemParams: {
        label: "单行文本",
        className: "",
      },
    },
    textArea: {
      formType: "textArea",
      fieldName: "textArea",
      spanNum: 12,
      cptParams: {
        placeholder: "请输入",
      },
      itemParams: {
        label: "多行文本",
        className: "",
      },
    },
    radio: {
      formType: "radio",
      fieldName: "radio",
      spanNum: 12,
      cptParams: {},
      itemParams: {
        label: "单选",
        className: "",
      },
      options: [],
    },
    checkbox: {
      formType: "checkbox",
      fieldName: "checkbox",
      spanNum: 12,
      cptParams: {},
      itemParams: {
        label: "多选",
        className: "",
      },
      options: [],
    },
    select: {
      formType: "select",
      fieldName: "select",
      spanNum: 12,
      cptParams: {},
      itemParams: {
        label: "下拉选择器",
        className: "",
      },
      options: [],
    },
    datePicker: {
      formType: "datePicker",
      fieldName: "datePicker",
      spanNum: 12,
      cptParams: {
        format: "YYYY-MM-DD",
      },
      itemParams: {
        placeholder: "请输入提示信息",
        label: "时间选择器",
        className: "",
      },
    },
    monthPicker: {
      formType: "monthPicker",
      fieldName: "monthPicker",
      spanNum: 12,
      cptParams: {
        format: "YYYY-MM",
      },
      itemParams: {
        placeholder: "请输入提示信息",
        label: "标签名",
        className: "",
      },
    },
    rangePicker: {
      formType: "rangePicker",
      fieldName: "rangePicker",
      spanNum: 12,
      cptParams: {
        format: "YYYY-MM-DD",
      },
      itemParams: {
        placeholder: "请输入提示信息",
        label: "标签名",
        className: "",
      },
    },
    table: {
      formType: "table",
      fieldName: "table",
      Col: {
        span: 24,
      },
      itemParams: {
        label: "表格",
        className: "",
      },
      dataSource: [],
      options: [
        {
          title: "标题",
          dataIndex: "title",
          key: "title",
        },
      ],
    },
    dynamicComponent: {
      formType: "dynamicComponent",
      fieldName: "dynamicComponent",
      Col: {
        span: 24,
      },
      itemParams: {
        label: "动态组件",
        className: "",
      },
      cptParams: {},
    },
    list: {
      formType: "list",
      fieldName: "list",
      Col: {
        span: 24,
      },
      itemParams: {
        label: "列表组件",
        className: "",
      },
      cptParams: {},
      options: [],
    },
    cervicalTable: {
      formType: "cervicalTable",
      fieldName: "cervicalTable",
      Col: {
        span: 24,
      },
      itemParams: {
        label: "颈部超声",
        className: "",
      },
      cptParams: {},
      labelWidth: "10px",
    },
    //容器
    reportWrapper: {
      formType: "reportWrapper",
      content: "容器",
      spanNum: 12,
      cptParams: {},
      itemParams: {
        label: "容器",
        className: "",
      },
    },
    tags: {
      formType: "tags",
      fieldName: "tags",
      spanNum: 12,
      cptParams: {},
      itemParams: {
        label: "标签名",
        className: "",
      },
      options: [],
    },
    grid: {
      formType: "grid",
      fieldName: "grid",
      name: "布局容器",
      cptParams: {},
      itemParams: {
        label: "布局容器H5",
      },
      children: [],
    },
    upLoader: {
      formType: "upLoader",
      fieldName: "upLoader",
      nameFile: "file",
      cptParams: {
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        accept: "image/jpeg,image/png",
      },
      itemParams: {
        label: "图片上传H5",
        className: "",
      },
    },
  };
  if (!scaleModules[formType]) {
    return null;
  }
  return scaleModules[formType];
};
