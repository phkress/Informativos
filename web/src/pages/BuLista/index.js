import { useEffect, useState } from 'react';
import TabelaBu from '../../components/TableBus'
import api from '../../services/api'
import './styles.css';


function BuLista() {

  const [buList, setBuList] = useState([]);

  useEffect(() => {
    loadProcedimentos();
    // eslint-disable-next-line
  }, []);

  async function loadProcedimentos() {
    const response = await api.get('/bu');
    setBuList(response.data);
  }
  
  return (
    <>
        <TabelaBu list={buList} />
    </>
  );
}

export default BuLista;
