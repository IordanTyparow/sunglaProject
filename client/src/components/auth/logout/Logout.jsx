import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../../context/authContext';
import { logout } from '../../../services/authService';

const Logout = () => {
    const navigate = useNavigate();
    const { userLogout } = useContext(AuthContext);

    useEffect(() => {
        logout()
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;
}

export default Logout;
