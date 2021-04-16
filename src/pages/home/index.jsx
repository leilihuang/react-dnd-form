import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import _ from "lodash";
import DndForm from "@/components/dnd-form";
import FormList from "@/components/form-list";
import "./index.scss";

export default (porps) => {
  const [scaleData, setScaleData] = useState([]);
  const onDragEnd = (result) => {
    const { source, destination, combine, draggableId } = result;
    const destinationId = _.get(destination, "droppableId");
    const sourceId = _.get(source, "droppableId");
    if (
      (!destination && !combine) ||
      (sourceId === "scales" && destinationId === "components") ||
      (sourceId === "components" && destinationId === "components")
    ) {
      return false;
    }
    const _componentData = _.cloneDeep(this.state.components);
    const _scaleData = _.cloneDeep(this.props.scaleData);
    let scaleData;
    if (sourceId === destinationId) {
      // 当前容器内排序
      scaleData = this.reorder(
        _.cloneDeep(this.props.scaleData),
        source.index,
        destination.index,
        draggableId
      );
    } else if (combine) {
      // 合并组件，处理布局容器
      const index = _.findIndex(_scaleData, [
        "id",
        Number(combine.draggableId),
      ]);
      const formType = _.get(_scaleData, `[${index}].formType`);
      if (
        index == -1 ||
        formType !== "grid" ||
        draggableId.split("-").length > 1
      ) {
        return false;
      }
      const [removeData] = _scaleData.splice(source.index, 1);
      if (!removeData) return false;
      _scaleData.map((item) => {
        if (item.id == combine.draggableId) {
          item.children.push(removeData);
        }
        return item;
      });
      scaleData = _scaleData;
    } else {
      // 跨容器拖拽
      const results = this.removeData(
        _componentData,
        _scaleData,
        source,
        destination
      );
      this.setState({
        components: results.components,
      });
      scaleData = results.scales;
    }
    setScaleData(scaleData);
    // this.props.setCommonZd({
    //   scaleData
    // });
  };
  return (
    <div className="home-page">
      <DragDropContext onDragEnd={onDragEnd}>
        <FormList />
        <DndForm />
      </DragDropContext>
      <div className="field-config">字段配置</div>
    </div>
  );
};
