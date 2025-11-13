import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h1>Mailboxes</h1>

      {mailboxes.length === 0 ? (
        <p>No mailboxes yet.</p>
      ) : (
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id}>
              <Link to={`/mailboxes/${mailbox._id}`}>
                <div className="mail-box">{mailbox._id}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MailboxList;

