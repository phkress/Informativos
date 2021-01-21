import { useEffect, useState } from 'react';
import TabelaBu from '../../components/TableBus'
import api from '../../services/api'
import './styles.css';


function Editor() {

  const [infoPag, setInfoPag] = useState([]);

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
      <TabelaBu list={infoPag}/>
    </>
  );
}

export default Editor;
