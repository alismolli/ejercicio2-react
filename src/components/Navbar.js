import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="./Home"> Home </Link></li>
                <li><Link to="./About"> About </Link></li>
                <li><Link to="./Dashboard"> Dashboard </Link></li> 
            </ul>
        </nav>
    )
}
