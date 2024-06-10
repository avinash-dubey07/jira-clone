import React from "react";

export default function SidebarOptions(props) {
  const { icon, text, isExpanded, onClickHandler } = props;
  return (
    <div
      style={{
        padding: "8px 16px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => onClickHandler(text)}
    >
      {icon}
      {isExpanded ? (
        <div style={{ marginLeft: "16px", fontSize: "small" }}>{text}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
