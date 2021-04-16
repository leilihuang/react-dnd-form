import React, { useState, useEffect } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import FormTemplate from "@/utils/scale-template";

const formTypes = [
  "常规组件",
  "input",
  "textArea",
  "radio",
  "checkbox",
  "select",
  "datePicker",
  "table",
  "upLoader",
  "特殊组件",
  "div",
  "result",
  "imgs",
  "dynamicComponent",
  "list",
  "cervicalTable",
  "reportWrapper",
  "grid",
];

export default (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let data = [];
    formTypes.forEach((type, idx) => {
      const opts = FormTemplate(type);
      if (opts) {
        data.push({
          id: idx,
          ...opts,
        });
      } else {
        data.push({
          title: type,
        });
      }
    });
    setData(data);
  }, []);
  return (
    <Droppable droppableId="formList">
      {(provided) => (
        <div ref={provided.innerRef} className="form-list">
          {data.map((item, index) => {
            return !item.title ? (
              <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                {(provided) => (
                  <div
                    className="c-box"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.itemParams.label}
                  </div>
                )}
              </Draggable>
            ) : (
              <div className="m-c-title" key={index}>
                {item.title}
              </div>
            );
          })}
        </div>
      )}
    </Droppable>
  );
};
