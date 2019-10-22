import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import { connect } from 'react-redux'
import { keepLogin } from '../Actions/index'

export class App extends Component {
    state = {
        check: false
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            this.props.keepLogin(user)
        }   
        this.setState({check: true})
    }

    render() {
        if (this.state.check) {
            return (
                <BrowserRouter>
                    <Header />
                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </BrowserRouter>
    
            )
        }else {
            return <h1>Sabar bos</h1>
        }
    }
}

export default connect(null, { keepLogin })(App)