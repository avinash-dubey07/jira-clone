import React, { useEffect, useState } from "react";
import "./Kanban.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Kanban() {
  const box = [
    { id: 0, bg: "red" },
    { id: 1, bg: "green" },
  ];

  const onDragEndHandler = () => {};

  return (
    <div>
      <h1>kanban</h1>

      <DragDropContext onDragEnd={onDragEndHandler}>
        <Droppable droppableId="first">
          {(provided) => {
            return (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                {box.map((e, idx) => {
                  const id = e.id.toString();
                  return (
                    <Draggable key={id} draggableId={id} index={idx}>
                      {(provided) => {
                        return (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps} // Add drag handle props here
                          >
                            <div className={`box ${e.bg}`}></div>
                          </li>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
