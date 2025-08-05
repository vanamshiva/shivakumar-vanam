import { Routes, Route } from 'react-router-dom';
import ViewProfilePage from './pages/ViewProfile';
import ViewProjects from './pages/ViewProjects';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './context/PrivateRoute';
import CustomAppBar from './components/AppBar';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route element={<CustomAppBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view-profile" element={<ViewProfilePage />} />
          <Route path="/view-projects" element={<ViewProjects />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
