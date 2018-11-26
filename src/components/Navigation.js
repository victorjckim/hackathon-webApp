import React from 'react'
import { Link, Route } from 'react-router-dom'
import Park from "./Park"
import Register from "../components/Register"
import Login from "../components/Login"
import Extend from "../components/Extend"
import Landing from "../components/Landing"
import { Navbar, Nav } from 'react-bootstrap'


class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
        render() {
        return(
            <React.Fragment>
                   <Navbar>
                       <Nav>
                        <Link to="/">Landing</Link>
                        </Nav>
                        <Nav>
                        <Link to="/Park">Park</Link>
                        </Nav>
                        <Nav>
                        <Link to="/Register">Register</Link>
                        </Nav>
                        <Nav>
                        <Link to="/Extend">Extend</Link>
                        </Nav>
                <Nav>
                        <Link to="/Login">Login</Link>
                        </Nav>
                <Route exact path ="/" component={Landing}/>
                <Route exact path ="/Park" component={Park}/>
                <Route exact path ="/Register" component={Register}/>
                <Route exact path ="/Login" component={Login}/>
                <Route exact path ="/Extend" component={Extend}/>
            </Navbar>
            </React.Fragment>
        )
    }
}

export default Navigation 