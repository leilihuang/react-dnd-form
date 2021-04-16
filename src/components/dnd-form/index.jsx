import React, { useState, useEffect } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Form, Row, Icon, Modal } from "antd";
import ViewToolForm from "@/components/tool-form/view-tool-form";

const scaleFormItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default (props) => {
  const [list, setList] = useState([]);
  const [curField, setCurFiled] = useState({});
  const curComponent = () => {};
  return (
    <Droppable droppableId="formDnd">
      {(provided) => (
        <div ref={provided.innerRef} className="form-dnd">
          <Row>
            <Form {...scaleFormItemLayout}>
              {list.map((item, index) => (
                <Draggable
                  key={item.id}
                  index={index}
                  draggableId={`${item.id}`}
                >
                  {(provided) => (
                    <div
                      className={
                        item.id === curField.id
                          ? `s-box ant-col-${
                              item.Col ? item.Col.span : "24"
                            } cur-scale`
                          : `s-box ant-col-${item.Col ? item.Col.span : "24"}`
                      }
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={(e) => curComponent(item, index, e)}
                    >
                      <ViewToolForm
                        ColSpan={24}
                        item={item}
                        // form={form}
                        curFieldConfig={curField}
                        curComponent={curComponent}
                      />
                      {item.id === curField.id ? (
                        <div className="m-cz">
                          <Icon
                            type="copy"
                            className=" icon-btn-img"
                            title="复制"
                            onClick={this.copyField}
                          />
                          <Icon
                            type="delete"
                            className=" icon-btn-img"
                            title="删除"
                            onClick={this.deleteCurField}
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Form>
          </Row>
        </div>
      )}
    </Droppable>
  );
};
