import CardText from '../../components/CardText'
import Acordiao from '../../components/Acordiao'
import ListaBotao from '../../components/ListaBotao'
import { useEffect, useState } from 'react';
import api from '../../services/api'

function Wipi() {
  const [acordiaoConteudo, setAcordiaoConteudo] = useState([]);
  const [buList, setBuList] = useState([]);
  const [bu,setBu] = useState({})

  useEffect(() => {
    loadProcedimentos();
    // eslint-disable-next-line
  }, []);

  useEffect(() => { 
    if(buList.length) {
      setAcordiao()
    }    
    // eslint-disable-next-line
  }, [buList]);

  async function loadProcedimentos() {
    const response = await api.get('/bu');
    setBuList(response.data.filter(categoria));
  }

  function categoria(value){
    return value.empresa === 'WIPI'
  }
  function buName(value){
    return value.bu === 'WIPI'
  }

  function setAcordiao(){
    const bu = buList.filter(buName);
    setBu(bu[0]);
    var condominio = [];

    if(bu.length){
      condominio = bu[0].tratativas.filter(function(value){return value.tipo === 'condominio'});
    }
    setAcordiaoConteudo(condominio);
  }

  return (
    <>
      <h1 className="text-center">Procedimentos</h1>
      <CardText texto={bu.procedimentos}/>
      <ListaBotao links={buList} />
      { acordiaoConteudo === [] ? '':
      <div>
        <h1 className="text-center">Codomínios</h1>
        <Acordiao conteudo={acordiaoConteudo} />
      </div>
      }
    </>
  );
}

export default Wipi;
