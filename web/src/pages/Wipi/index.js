import { Jumbotron, Container} from 'react-bootstrap/'
import CardText from '../../components/CardText'
import Acordiao from '../../components/Acordiao'
import ListaBotao from '../../components/ListaBotao'

function Wipi() {
  const buttons = [
    {titulo:'BU Corporativo',link:'wipi/Corporativo'},
    {titulo:'BU Retail',link:'wfn'},
    {titulo:'BU Retail VIP',link:'wfn'},
    {titulo:'BU Residencial',link:'wfn'},
];
  const acordiaoConteudo = [{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'},{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'}];

  return (
    <Container>
      <Jumbotron style={{paddingTop:'1rem'}}>
        <h1 className="text-center">Procedimentos</h1>
        <CardText />
        <ListaBotao links={buttons}/>
        <h1 className="text-center">Codomínios</h1>
        <Acordiao conteudo={acordiaoConteudo} />
      </Jumbotron>
    </Container>
  );
}

export default Wipi;
