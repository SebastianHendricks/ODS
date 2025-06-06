function App() {
  const [categories, setCategories] = React.useState([]);
  const [providers, setProviders] = React.useState([]);
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/categories').then(r => r.json()).then(setCategories);
    fetch('/api/bookings').then(r => r.json()).then(setBookings);
  }, []);

  return (
    <div>
      <h1>ODS</h1>
      <h2>Categories</h2>
      <ul>{categories.map(c => <li key={c.id}>{c.name}</li>)}</ul>
      <h2>Bookings</h2>
      <ul>{bookings.map(b => <li key={b.id}>{b.category} @ {b.time}</li>)}</ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
