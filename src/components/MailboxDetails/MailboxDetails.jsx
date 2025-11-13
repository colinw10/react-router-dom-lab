import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const numericId = Number(mailboxId);

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === numericId
  );

  if (!selectedBox) {
    return (
      <main>
        <h1>Mailbox Not Found!</h1>
      </main>
    );
  }

  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === numericId
  );

  return (
    <main>
      <h1>Mailbox Details</h1>
      <p>
        <strong>Box Number:</strong> {selectedBox._id}
      </p>
      <p>
        <strong>Box Owner:</strong> {selectedBox.boxOwner}
      </p>
      <p>
        <strong>Box Size:</strong> {selectedBox.boxSize}
      </p>

      <section>
        <h2>Letters</h2>
        {selectedLetters.length === 0 ? (
          <p>No letters for this mailbox yet.</p>
        ) : (
          <ul>
            {selectedLetters.map((letter, index) => (
              <li key={index}>
                <p>
                  <strong>To:</strong> {letter.recipient}
                </p>
                <p>{letter.message}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default MailboxDetails;

