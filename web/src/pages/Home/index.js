import CardText from '../../components/CardText'
import Acordiao from '../../components/Acordiao'
import ListaBotao from '../../components/ListaBotao'
import { useEffect, useState } from 'react';
import api from '../../services/api'


function Home() {
  const buttons = [{bu:'WIPI',link:'wipi'},{bu:'WFN',link:'wfn'}];
  const [bu,setBu] = useState({
    bu: "",
    empresa: "",
    link: "",
    procedimentos: "",
    tratativas: [{tipo:'',texto:'',titulo:''}]})

  useEffect(() => {
    loadProcedimentos();
    // eslint-disable-next-line
  }, []);
  async function loadProcedimentos() {
    const response = await api.get('/bu');
    setBu(response.data.filter(filtroBu)[0]);
  }
  function filtroBu(value){
    return value.empresa === 'Home'
  }
  function categoria(nome){
    return bu.tratativas.filter(value=>{return value.tipo === nome})
  }
  return (
    <>
        <h1 className="text-center">Procedimentos</h1>
        <CardText texto={bu.procedimentos}/>
        <ListaBotao links={buttons}/>
        <h1 className="text-center">Outras Informações</h1>
        <Acordiao conteudo={categoria('condominio')} />
      </>
  );
}

export default Home;
