import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import Preloader from './Components/Common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

const SuspenseComponent = (Component) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    )
}

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader />
        return (
            <section className='app'>
                <HeaderContainer />
                <Navbar />
                <section className='mainPage_content'>
                    <Route path='/login' component={Login} />
                    <Route path='/' exact render={() => SuspenseComponent(ProfileContainer)} />
                    <Route path='/profile/:userId?' render={() => SuspenseComponent(ProfileContainer)} />
                    <Route path='/dialogs' render={() => SuspenseComponent(DialogsContainer)} />
                    <Route path='/users' render={() => SuspenseComponent(UsersContainer)} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/news' component={News} />
                </section>
            </section>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);

