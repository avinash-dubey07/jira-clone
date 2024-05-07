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
   }}>
    {icon}
    {text}
    {onHover ? (
      <div style={{cursor:'not-allowed'}}>Not Implemented</div>)
      :
      (<></>)}
   </div>
  )
}
