import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
height: 475px;
width: 250px;
background-color: rgb(223, 223, 223);
overflow-y: scroll;
margin: 5px;
margin-top: 9px;
padding-top: 7px;
padding-left: 7px;
flex-direction: row;
display: inline-block;
border-radius: 10px;
color: black;
font-size: 16px;
font-weight: normal;`;

const TextContent = styled.div``;

const Icons = styled.div`
display: flex;
justify-content: end;
padding: 2px;`;



export default function Task({task, index}) {
  return(
    <Draggable draggableId= {`${task.id}`} key={task.id} index={index} >

      {(provided , snapshot)  => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          >
            <div style={{display: "flex", justifyContent: "start", padding: 2 }}>
              <span>
                <small>
                  #{task.id} 
                  {"  "}
                </small>
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
              <TextContent>{task.title}</TextContent>
            </div>
            <Icons>
              <div>
                <Avatar src={""}/>
              </div>
            </Icons>
            {provided.placeholder}
        </Container>
      ) } 

    </Draggable>
  )
}