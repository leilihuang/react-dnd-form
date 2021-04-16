import React from "react";
import {
  Select,
  Input,
  DatePicker,
  TimePicker,
  Radio,
  Checkbox,
  Table,
  Button,
  Upload,
  Icon,
} from "antd";
import locale from "antd/lib/date-picker/locale/zh_CN";
import _ from "lodash";

const { Option } = Select;
const RadioGroup = Radio.Group;
const { RangePicker, WeekPicker, MonthPicker } = DatePicker;
const { TextArea } = Input;

export default (WrapForm) => {
  return class HockFormComponent extends WrapForm {
    constructor(props) {
      super(props);
      const { defaultStyle } = this.props;
      this.typeData = {
        selectUser(item) {
          return (
            <Select style={{ ...defaultStyle }} {...item.cptParams}>
              {item.options.map((opt, opi) => (
                <Option value={opt.value} key={opi}>
                  {opt.label}
                </Option>
              ))}
            </Select>
          );
        },
        inputUser(item) {
          return (
            <Input
              style={{ ...defaultStyle }}
              {...item.cptParams}
              autoComplete="off"
            />
          );
        },
        divUser(item) {
          return <div>{item.content}</div>;
        },
        resultUser(item) {
          return <div>{item.content}</div>;
        },
        textAreaUser(item) {
          return <TextArea style={{ ...defaultStyle }} {...item.cptParams} />;
        },
        datePickerUser(item) {
          const type = _.get(item, "cptParams.type") + "User";

          if (this[type]) {
            return this[type](item);
          }
          return (
            <DatePicker
              locale={locale}
              style={{ ...defaultStyle }}
              {...item.cptParams}
            />
          );
        },
        rangePickerUser(item) {
          return (
            <RangePicker
              locale={locale}
              style={{ ...defaultStyle }}
              {...item.cptParams}
            />
          );
        },
        monthPickerUser(item) {
          return (
            <MonthPicker
              locale={locale}
              style={{ ...defaultStyle }}
              {...item.cptParams}
            />
          );
        },
        weekPickerUser(item) {
          return (
            <WeekPicker
              locale={locale}
              style={{ ...defaultStyle }}
              {...item.cptParams}
            />
          );
        },
        TimePickerUser(item) {
          return <TimePicker style={{ ...defaultStyle }} {...item.cptParams} />;
        },
        radioUser(item) {
          return (
            <RadioGroup style={{ ...defaultStyle }} {...item.cptParams}>
              {item.options.map((opt, opi) => (
                <Radio value={opt.value} key={opi}>
                  {opt.label}
                </Radio>
              ))}
            </RadioGroup>
          );
        },
        checkboxUser(item) {
          return (
            <Checkbox.Group {...item.cptParams}>
              {item.options.map((opt, opi) => (
                <Checkbox value={opt.value} key={opi}>
                  {opt.label}
                </Checkbox>
              ))}
            </Checkbox.Group>
          );
        },
        titleUser(item) {
          return <div>{item.renderDom}</div>;
        },
        zdyUser(item) {
          return <div>{item.renderDom()}</div>;
        },
        tableUser(item) {
          return (
            <Table
              dataSource={item.dataSource}
              columns={item.options}
              rowKey={(rowKey) => rowKey.id}
            />
          );
        },
        dynamicComponentUser(item) {
          return (
            <React.Fragment>
              <Button type="primary">添加</Button>
              <Button>删除</Button>
            </React.Fragment>
          );
        },
        listUser(item) {
          return (
            <React.Fragment>
              {_.get(item, "options", []).map((t, idx) => (
                <div key={idx} className={item.className}>
                  {t.label}
                </div>
              ))}
            </React.Fragment>
          );
        },
        cervicalTableUser(item) {
          return <div></div>;
        },
        tagsUser(item) {
          return (
            <Select mode="tags" style={{ ...defaultStyle }} {...item.cptParams}>
              {item.options.map((opt, opi) => (
                <Option value={opt.value} key={opi}>
                  {opt.label}
                </Option>
              ))}
            </Select>
          );
        },
        reportWrapperUser(item) {
          return <div className="reportWrapper">{item.name}</div>;
        },
        upLoaderUser(item) {
          return (
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              {...item.cptParams}
            >
              <Icon type="upload" />
            </Upload>
          );
        },
      };
    }
    render() {
      return super.render();
    }
  };
};
