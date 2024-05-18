import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./Kanban.css";
import ticketService from "../../backend/services/ticket.service";

const onDragEnd = (result, boards, setBoards) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceBoard = boards[source.droppableId];
    const destBoard = boards[destination.droppableId];

    const sourceTickets = [...sourceBoard.tickets];
    const destTickets = [...destBoard.tickets];

    const [removed] = sourceTickets.splice(source.index, 1);

    destTickets.splice(destination.index, 0, removed);

    setBoards({
      ...boards,
      [source.droppableId]: {
        ...sourceBoard,
        tickets: sourceTickets,
      },
      [destination.droppableId]: {
        ...destBoard,
        tickets: destTickets,
      },
    });
  } else {
    const board = boards[source.droppableId];
    const copiedItems = [...board.tickets];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);

    setBoards({
      ...boards,
      [source.droppableId]: {
        ...board,
        tickets: copiedItems,
      },
    });
  }
};

function Kanban() {
  const [boards, setBoards] = useState({
    backlog: {
      name: "Backlogs",
      tickets: ticketService.getTicketsFromDB("BACKLOG"),
    },
    todo: {
      name: "To Do",
      tickets: ticketService.getTicketsFromDB("SELECTED FOR DEVELOPMENT"),
    },
    inProgress: {
      name: "In Progress",
      tickets: ticketService.getTicketsFromDB("IN PROGRESS"),
    },
    done: {
      name: "Done",
      tickets: ticketService.getTicketsFromDB("DONE"),
    },
  });

  return (
    <>
      <div className="all">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            marginLeft: "280px",
            fontFamily: "CircularStdBook",
            fontSize: "16px",
          }}
        >
          <DragDropContext
            className="main-board"
            onDragEnd={(result) => onDragEnd(result, boards, setBoards)}
          >
            {Object.entries(boards).map(([boardId, board], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={boardId}
                >
                  <h4>{board.name}</h4>
                  <div style={{ margin: 5 }}>
                    <Droppable droppableId={boardId} key={boardId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "rgb(223, 223, 223)"
                                : "rgb(235, 235, 235)",
                              padding: 4,
                              width: 270,
                              minHeight: 450,
                            }}
                          >
                            {board.tickets.map((ticket, index) => {
                              return (
                                <Draggable
                                  key={ticket.id.toString()}
                                  draggableId={ticket.id.toString()}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "rgb(240, 240, 240)"
                                            : "rgb(255, 255, 255)",
                                          color: "black",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        {ticket.shortSummary}
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </div>
    </>
  );
}

export default Kanban;
