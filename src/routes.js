import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Teste from './components/teste'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Teste}/>                
            </Switch>        
        </BrowserRouter>
    )
}

export default Routes