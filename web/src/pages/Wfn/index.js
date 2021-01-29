import CardText from '../../components/CardText'
import Acordiao from '../../components/Acordiao'
import ListaBotao from '../../components/ListaBotao'
import { useEffect, useState } from 'react';
import api from '../../services/api'

function Wfn() {
  // const buttons = [
  //   { titulo: 'BU Corporativo', link: 'wfn/corporativo' },
  //   { titulo: 'BU Residencial', link: 'wfn/residencial' },
  // ];
  const acordiaoConteudo = [{ titulo: 'Teste1', text: 'lorem ipsulo2' }, { titulo: 'Teste2', text: 'lorem ipsulo2' }, { titulo: 'Teste1', text: 'lorem ipsulo2' }, { titulo: 'Teste2', text: 'lorem ipsulo2' }];
  const [buList, setBuList] = useState([]);
  
  useEffect(() => {
    loadProcedimentos();
    // eslint-disable-next-line
  }, []);

  async function loadProcedimentos() {
    const response = await api.get('/bu');
    setBuList(response.data.filter(categoria));
  }

  function categoria(value){
    return value.empresa === 'WFN'
  }
  return (
    <>
      <h1 className="text-center">Procedimentos</h1>
      <CardText />
      <ListaBotao links={buList} />
      <h1 className="text-center">Outras Informações</h1>
      <Acordiao conteudo={acordiaoConteudo} />
    </>
  );
}

export default Wfn;
