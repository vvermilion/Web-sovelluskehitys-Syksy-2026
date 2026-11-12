import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './views/Home';
import Layout from './components/Layout';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="Profile" element={<Profile/>} />
          <Route path="Upload" element={<Upload/>} />
          <Route path="Single" element={<Single/>} />
          {/* TODO: add missing routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
