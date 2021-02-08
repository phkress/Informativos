import { useHistory, useParams } from 'react-router-dom';
import CardText from '../../components/CardText'
import CardObs from '../../components/CardObs'
import Acordiao from '../../components/Acordiao'
import { useEffect, useState } from 'react';
import api from '../../services/api'

function Generic() {
  const history = useHistory();
  const [pagInfo, setPagInfo] = useState({ empressa: '', pagina: '' });
  const { id } = useParams();
  const [bu, setBu] = useState({
    bu: "",
    empresa: "",
    link: "",
    procedimentos: "",
    tratativas: []
  });

  useEffect(() => {
    let pathPag = history.location.pathname;
    pathPag = pathPag.split("/").filter(Boolean);
    const info = { empressa: pathPag[0].toUpperCase(), pagina: pathPag[1].toUpperCase() }
    setPagInfo(info);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadProcedimentos();
    // eslint-disable-next-line
  }, []);

  async function loadProcedimentos() {
    const response = await api.get(`/bu/${id}`);
    setBu(response.data)
  }
  function categoria(nome){
    return bu.tratativas.filter(value=>{return value.tipo === nome})
  }
  return (
    <>
      <h1 className="text-center">BU {pagInfo.pagina} - {pagInfo.empressa} </h1>
      <CardText texto={bu.procedimentos}/>
      <br />
      <h3 className="text-center">Técnico - {pagInfo.empressa}</h3>
      <Acordiao conteudo={categoria('tecnico')} />
      <CardObs />
      <br />
      <h3 className="text-center">Financeiro - {pagInfo.empressa}</h3>
      <Acordiao conteudo={categoria('financeiro')} />
      <br />
      <h3 className="text-center">Comercial - {pagInfo.empressa}</h3>
      <Acordiao conteudo={categoria('comercial')} />
    </>
  );
}

export default Generic;
