import { NavLink, Outlet } from 'react-router-dom';

const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },

  };

const AppBar = () => {
    return (
        <div>
            <NavLink to="register"
            style={styles.link}>
                Реєстрація
            </NavLink>
            <NavLink to="login"
            style={styles.link}> 
                Логін
            </NavLink>
            <Outlet/>
        </div>
    )
}


export default AppBar;
