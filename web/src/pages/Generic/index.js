import { useHistory } from 'react-router-dom';
import CardText from '../../components/CardText'
import CardObs from '../../components/CardObs'
import Acordiao from '../../components/Acordiao'
import { useEffect, useState } from 'react';

function Generic() {
    const acordiaoConteudo = [{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'},{titulo:'Teste1',text:'lorem ipsulo2'},{titulo:'Teste2',text:'lorem ipsulo2'}];
    const history = useHistory();
    const [pagInfo, setPagInfo] = useState({empressa:'',pagina:''});

    useEffect(()=>{
      let pathPag = history.location.pathname;
      pathPag = pathPag.split("/").filter(Boolean);
      const info = { empressa: pathPag[0].toUpperCase(), pagina: pathPag[1].toUpperCase()}      
      setPagInfo(info);
      // eslint-disable-next-line
    },[]);

  return (
    <>
        <h1 className="text-center">BU {pagInfo.pagina} - {pagInfo.empressa} </h1> 
        <CardText/>
        <br/>
        <h3 className="text-center">Técnico - {pagInfo.empressa}</h3>
        <Acordiao conteudo={acordiaoConteudo} />
        <CardObs/>
        <br/>
        <h3 className="text-center">Financeiro - {pagInfo.empressa}</h3>
        <Acordiao conteudo={acordiaoConteudo} />
        <br/>
        <h3 className="text-center">Comercial - {pagInfo.empressa}</h3>
        <Acordiao conteudo={acordiaoConteudo} />
      </>
  );
}

export default Generic;
