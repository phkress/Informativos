import { Jumbotron, Container} from 'react-bootstrap/'
import CardText from '../../components/CardText'
import CardObs from '../../components/CardObs'
import Acordiao from '../../components/Acordiao'

function Generic() {
    const acordiaoConteudo = [{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'},{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'}];
  return (
    <Container>
      <Jumbotron style={{paddingTop:'1rem'}}>
        <h1 className="text-center">BU Corporativo - WIPI</h1> 
        <CardText/>
        <br/>
        <h3 className="text-center">Técnico - WIPI</h3>
        <Acordiao conteudo={acordiaoConteudo} />
        <CardObs/>
        <br/>
        <h3 className="text-center">Financeiro - WIPI</h3>
        <Acordiao conteudo={acordiaoConteudo} />
        <br/>
        <h3 className="text-center">Comercial - WIPI</h3>
        <Acordiao conteudo={acordiaoConteudo} />
      </Jumbotron>
    </Container>
  );
}

export default Generic;
