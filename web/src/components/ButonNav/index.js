
import { Button } from 'react-bootstrap/'
import { useHistory } from 'react-router-dom';

import './styles.css';

function ButtonNav(props) {
    const history = useHistory();
    
    function goToLink(){
      history.push(`/${props.link}`); 
    }

    return (
            <Button className="btn-nav" size="lg" onClick={()=>goToLink()}>{props.name}</Button>
        
    );
}

export default ButtonNav;
