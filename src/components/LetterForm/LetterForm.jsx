import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const navigate = useNavigate();

  const [mailboxId, setMailboxId] = useState(
    mailboxes[0]?._id ?? ''
  );
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mailboxId || !recipient.trim() || !message.trim()) return;

    const letterData = {
      mailboxId: Number(mailboxId),
      recipient,
      message,
    };

    addLetter(letterData);
    setRecipient('');
    setMessage('');
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <main>
      <h1>New Letter</h1>

      {mailboxes.length === 0 ? (
        <p>You must create a mailbox before sending a letter.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="mailboxId">Mailbox</label>
          <select
            id="mailboxId"
            value={mailboxId}
            onChange={(e) => setMailboxId(e.target.value)}
          >
            <option value="">Select a mailbox</option>
            {mailboxes.map((box) => (
              <option key={box._id} value={box._id}>
                Box {box._id} – {box.boxOwner || 'No Owner'}
              </option>
            ))}
          </select>

          <label htmlFor="recipient">Recipient</label>
          <input
            id="recipient"
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Recipient name"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
          />

          <button type="submit">Send Letter</button>
        </form>
      )}
    </main>
  );
};

export default LetterForm;

