import Ticket from "./Ticket";

const ListPage = ({ searchResults }) => {

  const results = searchResults.map(ticket => <Ticket key={ticket.id} ticket={ticket} />)

  const content = results?.length ? results : <article><p>No Matching Ticket</p></article>
  return (
    <main>{content}</main>
  )
}

export default ListPage;