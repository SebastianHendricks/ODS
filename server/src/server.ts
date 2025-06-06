import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage to keep example simple
const users: any[] = [];
const categories: any[] = [];
const bookings: any[] = [];

app.post('/api/register', (req, res) => {
  const { role, email, password } = req.body;
  users.push({ id: users.length + 1, role, email, password });
  res.status(201).json({ message: 'registered' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: 'invalid' });
  res.json({ message: 'logged in', user });
});

app.post('/api/categories', (req, res) => {
  categories.push({ id: categories.length + 1, name: req.body.name });
  res.status(201).json({ message: 'category added' });
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.post('/api/bookings', (req, res) => {
  const booking = { id: bookings.length + 1, ...req.body };
  bookings.push(booking);
  res.status(201).json({ message: 'booked', booking });
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.put('/api/bookings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const booking = bookings.find(b => b.id === id);
  if (!booking) return res.status(404).json({ message: 'not found' });
  Object.assign(booking, req.body);
  res.json({ message: 'updated', booking });
});

app.delete('/api/bookings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = bookings.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: 'not found' });
  bookings.splice(index, 1);
  res.json({ message: 'deleted' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running on', PORT));
