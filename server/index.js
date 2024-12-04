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
// let participants = [
//   '1', '2', '3',
// ];
let participants = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
  '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
  '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
  '51', '52'
];

// let participants = [  
  
// ];



let selectedParticipants = [];

// API endpoint for login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });

// API endpoint to get a random participant
app.get('/api/participant', (req, res) => {
  // if (participants.length === 0) {
  //   return res.json({ message: 'No participants available' });
  // }
  
  const availableParticipants = participants.filter(p => !selectedParticipants.includes(p));

  // if (availableParticipants.length === 0) {
  //   // All participants have been used, reset the array of selected participants
  //   selectedParticipants = [];
  // }

  const index = Math.floor(Math.random() * availableParticipants.length);
  const selectedParticipant = availableParticipants[index];

  // Remove the selected participant from the array of available participants
  participants = participants.filter(p => p !== selectedParticipant);

  // Save the selected participant in the array of selected participants
  selectedParticipants.push(selectedParticipant);
  // const randomIndex = Math.floor(Math.random() * participants.length);
  // const randomParticipant = participants[randomIndex];
  // save.push(randomParticipant)
  // const index = array.indexOf(5);
// if (index > -1) { // only splice array when item is found
  // participants.splice(randomParticipant, 1); // 2nd parameter means remove one item only
// }
  
  res.json({ name: selectedParticipant });
});

// API endpoint to repeat a participant
app.post('/api/repeat-participant', (req, res) => {
  const { name } = req.body;

  // Add the repeated participant back to the array of available participants
  participants.push(name);

  // Remove the repeated participant from the array of selected participants
  selectedParticipants = selectedParticipants.filter(p => p !== name);

  console.log(participants)
  console.log(selectedParticipants)
  res.json({ message: 'Participant repeated successfully' });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
