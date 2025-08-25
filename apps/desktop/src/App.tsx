import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { useNewsStore } from './store/newsStore';
import { usePolling } from './hooks/usePolling';

const POLLING_INTERVAL = 15000; // 15 seconds

function App() {
  const fetchNews = useNewsStore((state) => state.fetchNews);

  // Fetch initial data
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // Set up polling
  usePolling(fetchNews, POLLING_INTERVAL);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
