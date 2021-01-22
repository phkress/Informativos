import { Table } from 'react-bootstrap/'
import { useHistory } from 'react-router-dom';
import './styles.css';

function TableBu(props) {
    const history = useHistory();
    const itens = props.list;
    
    function editarBu(id){
        history.push(`/bu/editor/${id}`); 
    }

    return (
        <Table responsive striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>#</th>
                    <th>BUs</th>
                    <th>Link</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {itens.map((item, i) =>
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{item.bu}</td>
                        <td>AQUI VAI ENTARA O LINK</td>
                        <td className="pointer" onClick={()=>editarBu(item._id)}>Editar</td>
                    </tr>)}
            </tbody>
        </Table>
    )
}

export default TableBu;