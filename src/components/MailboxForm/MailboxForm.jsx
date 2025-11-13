import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!boxOwner.trim()) return;

    addBox({ boxOwner, boxSize });

    setBoxOwner('');
    setBoxSize('Small');
    navigate('/mailboxes');
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Box Owner</label>
        <input
          id="boxOwner"
          type="text"
          value={boxOwner}
          onChange={(e) => setBoxOwner(e.target.value)}
          placeholder="Enter box owner's name"
        />

        <label htmlFor="boxSize">Box Size</label>
        <select
          id="boxSize"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Create Mailbox</button>
      </form>
    </main>
  );
};

export default MailboxForm;
