import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Dashboard } from './Dashboard';
export const Header = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/Home" element={ <Home/> } />
            <Route path="/About" element={ <About/> } />
            <Route path="/Dashboard" element={ <Dashboard/> } />
        </Routes>
    </BrowserRouter>
);