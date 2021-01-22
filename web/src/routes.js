import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Generic from './pages/Generic';
import Wipi from './pages/Wipi';
import Wfn from './pages/Wfn';
import BuLista from './pages/BuLista';

const Routes = () =>{
    return(
        <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={Generic} path="/wipi/corporativo" exact/>
            <Route component={Generic} path="/wipi/retail" exact/>
            <Route component={Generic} path="/wipi/vip" exact/>
            <Route component={Generic} path="/wipi/residencial" exact/>
            <Route component={Generic} path="/wfn/corporativo" exact/>
            <Route component={Generic} path="/wfn/residencial" exact/>
            <Route component={Wipi} path="/wipi" exact/>
            <Route component={Wfn} path="/wfn" exact/>
            <Route component={BuLista} path="/bu/:id" exact/>
            <Route component={BuLista} path="/bu" exact/>
        </Switch>
    )
}

export default Routes;