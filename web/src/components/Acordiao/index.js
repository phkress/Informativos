import { Accordion, Card } from 'react-bootstrap/'
import './styles.css';

function Acordiao(props) {
    const list = props.conteudo;

    return (
        <Accordion defaultActiveKey="0">
            {list.map((conteudo, i) =>                               
                    <Card key={i}> 
                        <Accordion.Toggle as={Card.Header} eventKey={i+1} className="AcordiaoHead">
                        {i+1} - {conteudo.titulo}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i+1}>
                            <Card.Body dangerouslySetInnerHTML={{ __html: conteudo.texto }}>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            )}
        </Accordion>
    );
}

export default Acordiao;
