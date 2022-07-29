export default function UserList({contacts}) {
    return (
      <div>
        {contacts.map((contact, i) => (
          <div className="card" key={i}>
            <p className="card-name">{contact.date}</p>
            <p>{contact.amount}</p>
            <p>{contact.payment}</p>
            <p>{contact.remark}</p>
          </div>
        ))}
      </div>
    );
  }