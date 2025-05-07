const AUTH_USER_KEY = 'authUser';

export const saveAuthUser = (user) => {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
};

export const getAuthUser = () => {
    const data = localStorage.getItem(AUTH_USER_KEY);
    return data ? JSON.parse(data) : null;
};

export const clearAuthUser = () => {
    localStorage.removeItem(AUTH_USER_KEY);
};
