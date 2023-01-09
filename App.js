import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './components/auth/Create';
import HomeScreen from './screens/HomeScreen';
import Search from './components/auth/Search';
import ChangePass from './components/auth/ChangePassword';


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>

        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/user" element={<CreateUser />} />
            <Route path="/search" element={<Search />} />
            <Route path="/change_pass" element={<ChangePass />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );

}

export default App;
