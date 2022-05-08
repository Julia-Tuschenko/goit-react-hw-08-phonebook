const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const isFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    isFetchingCurrentUser
};

export default authSelectors;