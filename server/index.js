const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const hardcodedUser = {
    username: 'admin',
    password: 'admin',
  };
// Array to store participant names
const participants = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eva',
  'Frank',
  'Grace',
  'Henry',
  'Ivy',
  'Jack',
  'Karen',
  'Leo',
  'Mia',
  'Nick',
  'Olivia',
  'Paul',
  'Quinn',
  'Rachel',
  'Sam',
  'Tyler',
];

// API endpoint for login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });

// // API endpoint to add a participant
// app.post('/api/participant', (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res.status(400).json({ error: 'Name is required' });
//   }

//   participants.push(name);
//   res.json({ success: true });
// });

// API endpoint to get a random participant
app.get('/api/participant', (req, res) => {
  if (participants.length === 0) {
    return res.json({ message: 'No participants available' });
  }

  const randomIndex = Math.floor(Math.random() * participants.length);
  const randomParticipant = participants[randomIndex];
  res.json({ name: randomParticipant });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
