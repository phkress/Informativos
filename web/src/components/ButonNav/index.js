
import { Button } from 'react-bootstrap/'
import { useHistory } from 'react-router-dom';

import './styles.css';

function ButtonNav(props) {
    const history = useHistory();
    
    function goToLink(){
      if(!props.id){
        history.push(`${props.link}`);
      } else{
        history.push(`${props.link}/${props.id}`);
      }
    }

    return (
            <Button className="btn-nav" size="lg" onClick={()=>goToLink()}>{props.name}</Button>
        
    );
}

export default ButtonNav;
