// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import LetterForm from './components/LetterForm/LetterForm.jsx';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      _id: mailboxes.length + 1, 
      boxOwner: formData.boxOwner,
      boxSize: formData.boxSize,
    };

    setMailboxes((prevMailboxes) => [...prevMailboxes, newBox]);
  };

  const addLetter = (formData) => {
    setLetters((prevLetters) => [...prevLetters, formData]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />

        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />

        <Route
          path="/new-letter"
          element={
            <LetterForm mailboxes={mailboxes} addLetter={addLetter} />
          }
        />

        <Route
          path="/mailboxes/:mailboxId"
          element={
            <MailboxDetails mailboxes={mailboxes} letters={letters} />
          }
        />
      </Routes>
    </>
  );
};

export default App;



