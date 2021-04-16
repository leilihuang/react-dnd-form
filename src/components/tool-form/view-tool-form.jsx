import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Form, Col } from "antd";
import HockFormComponent from "./form-component";
import { Draggable } from "react-beautiful-dnd";

class Forms extends Component {
  static defaultProps = {
    defaultStyle: {
      // width: 170
    },
    keys: "form",
    horizontal: {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    },
    ColSpan: 12,
    onClickEvent: () => {},
  };
  componentRender = (item) => {
    const { form, pageType } = this.props;
    const { getFieldDecorator } = form;

    const renders = {
      div: () => <div className="p10">{item.content}</div>,
      img: () => (
        <React.Fragment>
          <img
            src={item.imgUrl}
            style={{
              width: item.itemParams.imgWidth,
              height: item.itemParams.imgHeight,
            }}
            alt="请输入图片地址"
          />
        </React.Fragment>
      ),
      reportWrapper: () => <div>{item.content}</div>,
      grid: () => {
        if (pageType === "previewPage") {
          return item.children.map((child, index) => {
            return (
              <Form.Item {...child.itemParams} key={index}>
                {getFieldDecorator(child.fieldName, {
                  ...child.rules,
                })(this.typeData[child.formType + "User"](child))}
              </Form.Item>
            );
          });
        }
        return (
          <div className="m-grids p-l10 p-r10 p-t10">
            {item.children.map((child, index) => (
              <Draggable
                key={child.id}
                index={index}
                draggableId={`${item.id}-child-${child.id}`}
                disableInteractiveElementBlocking={false}
              >
                {(provided) => (
                  <div
                    className={`s-box ant-col-${
                      child.Col ? child.Col.span : "24"
                    }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {this.componentRender(child)}
                  </div>
                )}
              </Draggable>
            ))}
            {item.children.length > 0 ? null : (
              <span>请拖动组件到容器区域</span>
            )}
          </div>
        );
      },
    };
    if (renders[item.formType]) {
      return renders[item.formType]();
    }
    return (
      <Form.Item {...item.itemParams}>
        {getFieldDecorator(item.fieldName, {
          ...item.rules,
        })(this.typeData[item.formType + "User"](item))}
      </Form.Item>
    );
  };
  renderForm = () => {
    const { getFieldValue } = this.props.form;
    const { item, ColSpan } = this.props;
    const itemSpan = _.get(item, "Col.span");
    return (
      <Col
        className={item.className}
        span={ColSpan ? ColSpan : itemSpan}
        offset={_.get(item, "Col.offset")}
      >
        {this.componentRender(item)}
      </Col>
    );
  };
  render() {
    return <React.Fragment>{this.renderForm()}</React.Fragment>;
  }
}

Forms.propTypes = {
  item: PropTypes.object,
  keys: PropTypes.string,
  provided: PropTypes.object,
};

export default HockFormComponent(Forms);
