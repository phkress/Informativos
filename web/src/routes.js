import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Generic from './pages/Generic';
import Wipi from './pages/Wipi';
import Wfn from './pages/Wfn';

const Routes = () =>{
    return(
        <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={Generic} path="/wipi/Corporativo" exact/>
            <Route component={Wipi} path="/wipi" exact/>
            <Route component={Wfn} path="/wfn" exact/>
        </Switch>
    )
}

export default Routes;