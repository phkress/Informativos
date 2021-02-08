import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Generic from './pages/Generic';
import Wipi from './pages/Wipi';
import Wfn from './pages/Wfn';
import BuLista from './pages/BuLista';
import BuEditor from './pages/BuEditor';

const Routes = () =>{
    return(
        <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={Generic} path="/wipi/corporativo/:id" exact/>
            <Route component={Generic} path="/wipi/retail/:id" exact/>
            <Route component={Generic} path="/wipi/vip/:id" exact/>
            <Route component={Generic} path="/wipi/residencial/:id" exact/>
            <Route component={Generic} path="/wfn/corporativo/:id" exact/>
            <Route component={Generic} path="/wfn/residencial/:id" exact/>
            <Route component={Wipi} path="/wipi" exact/>
            <Route component={Wfn} path="/wfn" exact/>
            <Route component={Wipi} path="/wipi/:id" exact/>
            <Route component={Wfn} path="/wfn/:id" exact/>
            <Route component={BuEditor} path="/bu/:id" exact/>
            <Route component={BuLista} path="/bu" exact/>
        </Switch>
    )
}

export default Routes;