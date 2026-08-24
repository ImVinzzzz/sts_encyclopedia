import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route === '#/editor' ? <EditorPage /> : <HomePage />;
}

export default App;
