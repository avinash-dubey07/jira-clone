const Ticket = ({ ticket }) => {
  return Ticket(
    <article>
      <p>{ticket.shortSummary}</p>
      <p>{ticket.status}-{ticket.id}</p>
    </article>
  )
}

export default Ticket;
