//withRouter is used to ACCESS history object.
//Access history object so that I can block the SAME ROUTE ACCESS.
//history.block(...): if same URL, don't proceed (return false). but if URLs are different, proceed to that URL (return true).


import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'




class Routes extends Component {
    //SOLUTION HEREEEEE.....
    componentDidMount() {
        console.log("Fire the ROUTE BLOCKER FUNCTION.....")
        const {history} = this.props

        //history.block: 
        //if next route is same as current route (history.location), DO not proceed (return false)
        //else, proceed (return true)
        history.block((location) => {
            if (history.location.pathname === location.pathname )
                return false
            else 
                return true
        })
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about"  component={About}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>
        )
    }
}

//withRouter is needed to get history props...Otherwise we can't use history.block in componentDidMount above
export default withRouter(Routes)
