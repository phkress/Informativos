import CardText from '../../components/CardText'
import Acordiao from '../../components/Acordiao'
import ListaBotao from '../../components/ListaBotao'
import { useEffect, useState } from 'react';
import api from '../../services/api'

function Wipi() {
  // const buttons = [
  //   { titulo: 'BU Corporativo', link: 'wipi/corporativo' },
  //   { titulo: 'BU Retail', link: 'wipi/retail' },
  //   { titulo: 'BU Retail VIP', link: 'wipi/vip' },
  //   { titulo: 'BU Residencial', link: 'wipi/residencial' },
  // ];
  // const acordiaoConteudo = [{ titulo: 'Teste1', text: 'lorem ipsulo2' }, { titulo: 'Teste2', text: 'lorem ipsulo2' }, { titulo: 'Teste1', text: 'lorem ipsulo2' }, { titulo: 'Teste2', text: 'lorem ipsulo2' }];
  const [acordiaoConteudo, setAcordiaoConteudo] = useState([]);
  const [buList, setBuList] = useState([]);

  useEffect(() => {
    loadProcedimentos();
    // eslint-disable-next-line
  }, []);

  async function loadProcedimentos() {
    const response = await api.get('/bu');
    setBuList(response.data.filter(categoria));
    console.log(buList);
  }

  function categoria(value){
    return value.empresa === 'WIPI'
  }

  function setAcordiao(){
    const bu = buList.filter(function(value){return value.bu === 'WIPI'});
    var condominio = [];
    if(bu !== []){
      condominio = bu[0].tratativas.filter(function(value){return value.tipo === 'condominio'})
    }
    setAcordiaoConteudo(condominio)
  }

  return (
    <>
      <h1 className="text-center">Procedimentos</h1>
      <CardText />
      <ListaBotao links={buList} />
      { acordiaoConteudo == [] ? 'teste':
      <div>
        <h1 className="text-center">Codomínios</h1>
        <Acordiao conteudo={acordiaoConteudo} />
      </div>
      }
    </>
  );
}

export default Wipi;
