import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './default-avatar.png';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperation';

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      marginRight: 4,
    },
    name: {
      fontWeight: 700,
      marginRight: 12,
    },
  };

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;
    return(
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Ласкаво просимо, {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                Вийти
            </button>
        </div>
    )
};

export default UserMenu;