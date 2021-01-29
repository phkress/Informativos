import CardText from '../../components/CardText'
import Acordiao from '../../components/Acordiao'
import ListaBotao from '../../components/ListaBotao'

function Home() {
  const buttons = [{bu:'WIPI',link:'wipi'},{bu:'WFN',link:'wfn'}];
  const acordiaoConteudo = [{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'},{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'}];

  return (
    <>
        <h1 className="text-center">Procedimentos</h1>
        <CardText />
        <ListaBotao links={buttons}/>
        <h1 className="text-center">Outras Informações</h1>
        <Acordiao conteudo={acordiaoConteudo} />
      </>
  );
}

export default Home;
