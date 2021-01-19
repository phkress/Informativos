import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Wipi from './pages/Wipi';
import Wfn from './pages/Wfn';

const Routes = () =>{
    return(
        <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={Wipi} path="/wipi" exact/>
            <Route component={Wfn} path="/wfn" exact/>
        </Switch>
    )
}

export default Routes;