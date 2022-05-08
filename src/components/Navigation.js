import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
  };

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return(
    <nav>
        <NavLink to="/"
        style={styles.link}>
            Головна
        </NavLink>
        {isLoggedIn && (
            <NavLink to="contacts"
            style={styles.link}>
                Контакти
            </NavLink>
         )}
        <Outlet/>
    </nav>
    )
};

export default Navigation;

