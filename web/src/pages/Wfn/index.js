import { Jumbotron, Container} from 'react-bootstrap/'
import CardText from '../../components/CardText'
import Acordiao from '../../components/Acordiao'
import ListaBotao from '../../components/ListaBotao'

function Wfn() {
  const buttons = [
    {titulo:'BU Corporativo',link:'wfn/corporativo'},
    {titulo:'BU Residencial',link:'wfn/residencial'},
];
  const acordiaoConteudo = [{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'},{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'}];

  return (
    <Container>
      <Jumbotron style={{paddingTop:'1rem'}}>
        <h1 className="text-center">Procedimentos</h1>
        <CardText />
        <ListaBotao links={buttons}/>
        <h1 className="text-center">Outras Informações</h1>
        <Acordiao conteudo={acordiaoConteudo} />
      </Jumbotron>
    </Container>
  );
}

export default Wfn;
