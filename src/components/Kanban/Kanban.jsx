import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./Kanban.css";
import ModalComponent from "../commons/Modal/Modal";
import TicketEdit from "../../TicketEdit";
import DeleteToast from "../commons/Toasts/DeleteToast";
import { useTicketContext } from "../../App";

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
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState();
  const [ticketModified, setTicketModified] = useState(false);

  const { allTickets } = useTicketContext();
  // Function to filter tickets based on their status
  const getFilteredTickets = (status) => {
    const filteredTickets = allTickets.filter(
      (ticket) => ticket.status === status
    );
    return filteredTickets;
  };

  const getBoards = () => {
    return {
      backlog: {
        name: "Backlogs",
        tickets: getFilteredTickets("BACKLOG"),
      },
      todo: {
        name: "To Do",
        tickets: getFilteredTickets("SELECTED FOR DEVELOPMENT"),
      },
      inProgress: {
        name: "In Progress",
        tickets: getFilteredTickets("IN PROGRESS"),
      },
      done: {
        name: "Done",
        tickets: getFilteredTickets("DONE"),
      },
    };
  };
  // boards -> {key: value}
  // value -> Object {key: valye}
  // name, tickets-> Array of objects
  //ARRAY ELEMENT -> ARR[INDEX] -> ELEMENT
  const [boards, setBoards] = useState(getBoards());

  useEffect(() => {
    const updatedBoards = getBoards();
    setBoards({ ...updatedBoards });
  }, [allTickets]);

  const onTicketClickHandler = (boardKey, ticketIndex) => {
    // Example -> Fix the bug
    // 1. identify the board using boardKey
    const applicableBoard = boards[boardKey]; // boardKey -> backlog ->**|| Final output = { name: "Backlogs",tickets: [{}]} ||**
    const boardTickets = applicableBoard.tickets; // [{ticket 0 obj}, {ticket 1 obj}, {ticket 2 oj}]
    const clickedTicket = boardTickets[ticketIndex]; // ticketIndex = 1 || Output = {ticket 1 obj}
    setShowTicketModal(true);
    setSelectedTicket(clickedTicket);
  };

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
                    margin: "0px 8px",
                  }}
                  key={boardId}
                >
                  <div style={{ padding: 8 }}>{board.name}</div>
                  <div style={{ marginBottom: 7 }}>
                    <Droppable droppableId={boardId} key={boardId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "rgb(242, 242, 242)"
                                : "rgb(235, 235, 235)",
                              padding: 4,
                              width: 270,
                              minHeight: 450,
                            }}
                          >
                            {board.tickets.map((ticket, index) => {
                              return (
                                <Draggable
                                  key={boardId + ticket.id.toString()}
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
                                            ? "rgb(245, 245, 245)"
                                            : "rgb(255, 255, 255)",
                                          color: "black",

                                          ...provided.draggableProps.style,
                                        }}
                                        onClick={() =>
                                          onTicketClickHandler(boardId, index)
                                        }
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
      {showTicketModal && (
        <ModalComponent
          show={showTicketModal}
          onHide={() => setShowTicketModal(false)}
          component={
            <TicketEdit
              ticket={selectedTicket}
              ticketModal={setShowTicketModal}
            />
          }
          //1. open the ticketEdit modal
          //2. click on  the delete button
          //3. delete the ticket from the kanban board
          //4.  close the TicketEdit modal
          //5.  rerender the UI kanban board.
        />
      )}
      {showDeleteToast && <DeleteToast showToast={showDeleteToast} />}
    </>
  );
}

export default Kanban;
