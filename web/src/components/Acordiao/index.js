import { Accordion, Card } from 'react-bootstrap/'
import './styles.css';

function Acordiao(props) {
    const list = props.conteudo;

    return (
        <Accordion>
            {list.map((conteudo, i) =>                               
                    <Card key={i}> 
                        <Accordion.Toggle as={Card.Header} eventKey={i} className="AcordiaoHead">
                        {i} - {conteudo.titulo}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body dangerouslySetInnerHTML={{ __html: conteudo.texto }}>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            )}
        </Accordion>
    );
}

export default Acordiao;
