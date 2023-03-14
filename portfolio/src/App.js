import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './components/helpers/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {
          routes.map((item) => (
            <Route
              id={item.id}
              path={item.path}
              element={item.component}
            />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
