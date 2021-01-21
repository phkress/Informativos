import { Table } from 'react-bootstrap/'

function TableBu(props) {
    const itens = props.list;

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
                        <td>Editar</td>
                    </tr>)}
            </tbody>
        </Table>
    )
}

export default TableBu;