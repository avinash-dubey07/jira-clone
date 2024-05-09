import React from 'react'

export default function SideBarOption(props) {
  const { icon, text, onHover,} = props;
  return (
   <div 
   style={{
    padding: "10px 26px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    whiteSpace: "pre-wrap",
   }}>
    {icon} &nbsp;
    {text}
    {onHover ? (
      <div style={{cursor:'not-allowed', fontSize:"12px", fontFamily: "-moz-initial"}}></div>)
      :
      (<></>)}
   </div>
  )
}
