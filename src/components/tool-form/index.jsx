import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Form, Col, Divider } from "antd";
import Valids from "../../const/filter";
import HockFormComponent from "./form-component";

class Forms extends Component {
  static defaultProps = {
    defaultStyle: {
      // width: 170
    },
    keys: "form",
    horizontal: {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    },
    ColSpan: 12,
    onClickEvent: () => {
      console.log("123");
    }
  };
  componentRender = (item, ruleValid, i) => {
    const { getFieldDecorator } = this.props.form;
    const { curIndex } = this.props;
    const renders = {
      div: () => <div className={curIndex === i ? "curFiled" : ""}>{item.content}</div>,
      img: () => (
        <React.Fragment>
          {item.labelName}
          <img src={item.imgUrl} />
        </React.Fragment>
      ),
      reportWrapper: () => <div className={curIndex === i ? "curFiled" : ""}>{item.content}</div>,
      grid: () => {
        return item.children.map((child, index) => {
          return (
            <Form.Item {...child.itemParams} key={index}>
              {getFieldDecorator(child.fieldName, {
                ...child.rules
              })(this.typeData[child.formType + "User"](child))}
            </Form.Item>
          );
        });
      }
    };
    if (renders[item.formType]) {
      return renders[item.formType]();
    }
    const cls = curIndex === i ? `curFiled m-r48 ${item.itemParams.className}` : `m-r48 ${item.itemParams.className}`;
    return (
      <Form.Item {...item.itemParams} className={cls}>
        {getFieldDecorator(item.fieldName, {
          ...item.rules,
          rules: ruleValid
        })(this.typeData[item.formType + "User"](item))}
      </Form.Item>
    );
  };
  renderForm = () => {
    const { getFieldValue } = this.props.form;
    const { dataSource, ColSpan } = this.props;

    return dataSource.map((item, i) => {
      let num = 0;
      let ruleValid = [];
      // 联动关系校验
      if (item.linkageRule) {
        item.linkageRule.forEach(t => {
          if (getFieldValue(t.name) == t.value) {
            num += 1;
          }
        });
      }
      // 是否满足所有联动关系校验，满足则显示组件
      if (num === _.get(item, "linkageRule", []).length) {
        const addValid = Valids[item.validType];
        // 是否存在自定义规则，存在则合并
        if (addValid) {
          ruleValid = [..._.get(item, "rules.rules", []), addValid];
        } else {
          ruleValid = [..._.get(item, "rules.rules", [])];
        }
        return (
          <Col
            key={i}
            className={item.className}
            span={ColSpan ? ColSpan : _.get(item, "Col.span")}
            offset={_.get(item, "Col.offset")}
            onClick={() => this.props.onClickEvent(i, item)}
          >
            {this.componentRender(item, ruleValid, i)}
          </Col>
        );
      }

      return null;
    });
  };
  render() {
    return <React.Fragment>{this.renderForm()}</React.Fragment>;
  }
}

Forms.propTypes = {
  dataSource: PropTypes.array,
  keys: PropTypes.string
};

export default HockFormComponent(Forms);
