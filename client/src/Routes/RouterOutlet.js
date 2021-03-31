import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import RegisterPage from '../components/RegisterPage';
import LoginPage from '../components/LoginPage';
import SuccessPage from '../components/SuccessPage';
import NotFound from '../components/NotFound';

const routes = [
    {
        path: '/',
        isPrivate: true,
        isExact: true,
        component: HomePage
    },
    {
        path: '/register',
        isPrivate: false,
        isExact: false,
        component: RegisterPage
    },
    {
        path: '/login',
        isPrivate: false,
        isExact: false,
        component: LoginPage
    },
    {
        path: '/success',
        isPrivate: false,
        isExact: false,
        component: SuccessPage
    },
    {
        path: '*',
        isPrivate: false,
        isExact: true,
        component: NotFound
    }
];

const renderComponent = (Component, isPrivate, isLogged) => () => {
    if (isPrivate) {
        return isLogged ? <Component/> : <Redirect to='/login'/>
    }
    return <Component/>;
}

const RouterOutlet = () => {
    const isLogged = true;

    return (
        <Router>
            <Switch>
                {
                    routes.map((val, index) => {
                        return <Route key={index} path={val.path} exact={val.isExact}
                                      render={renderComponent(val.component, val.isPrivate, isLogged)}/>
                    })
                }
            </Switch>
        </Router>
    );
}

export default RouterOutlet;
