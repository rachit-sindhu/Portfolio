import { useNavigate } from 'react-router-dom';
import styles from './header.module.css'

const Header = () => {
  let navigate=useNavigate();
  return <div className={styles.Container}>
    <ul>
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/skills")}>Skills</li>
        <li onClick={() => navigate("/projects")}>Projects</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
    </ul>
  </div>;
};

export default Header;
