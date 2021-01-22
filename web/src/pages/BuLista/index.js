import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TabelaBu from '../../components/TableBus'
import api from '../../services/api'
import './styles.css';


function BuLista() {

  const [infoPag, setInfoPag] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadProcedimentos();
    // eslint-disable-next-line
  }, []);

  async function loadProcedimentos() {
    const response = await api.get('/bu');
    console.table(response.data)
    setInfoPag(response.data);
  }
  return (
    <>
      {id ? 'ok':
        <TabelaBu list={infoPag}/>
        }
      
    </>
  );
}

export default BuLista;
