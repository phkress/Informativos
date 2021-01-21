import { Jumbotron, Container} from 'react-bootstrap/'
import CardText from '../../components/CardText'
import Acordiao from '../../components/Acordiao'
import ListaBotao from '../../components/ListaBotao'
import api from '../../services/api'
import { useEffect, useState } from 'react';

function Wipi() {
  const buttons = [
    {titulo:'BU Corporativo',link:'wipi/corporativo'},
    {titulo:'BU Retail',link:'wipi/retail'},
    {titulo:'BU Retail VIP',link:'wipi/vip'},
    {titulo:'BU Residencial',link:'wipi/residencial'},
];
  const acordiaoConteudo = [{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'},{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'}];
  const [infoPag, setInfoPag] = useState({procedimentos:'',informacoes:[]});
  
  useEffect(() => {
    loadProcedimentos();
    // eslint-disable-next-line
  }, []);
  
  async function loadProcedimentos() {
    const response = await api.get('/teste');
    setInfoPag(response);
  }

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
