import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


import { selectAuth } from '../Store/Profile/profile_selector';

export const PrivateRoute = ({ component }) => {
	const isAuth = useSelector(selectAuth);

	if (!isAuth) {
		return <Navigate to="/login" />;
	}

	return component ? component : <Outlet />;
};
