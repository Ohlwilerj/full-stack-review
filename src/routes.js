import Catalog from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import Admin from './components/Admin/Admin'
import {Switch, Route} from 'react-router-dom'
import React from 'react'

export default (
    <Switch>
        <Route exact path='/' component={Catalog}/>
        <Route path='/cart' component={Cart}/>
        <Route path='admin' component={Admin} />
    </Switch>
)