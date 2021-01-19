import { Accordion, Card } from 'react-bootstrap/'
import './styles.css';

function Acordiao(props) {
    const list = props.conteudo;

    return (
        <Accordion defaultActiveKey="0">
            {list.map((conteudo, i) =>                               
                    <Card key={i}> 
                        <Accordion.Toggle as={Card.Header} eventKey={i} className="AcordiaoHead">
                            {conteudo.titulo} {i}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                                {conteudo.text}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            )}

        </Accordion>
    );
}

export default Acordiao;
