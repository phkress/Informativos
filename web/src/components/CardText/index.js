import Card  from 'react-bootstrap/Card'

function CardText(props) {
    const texto = props.texto;
    
  return (
        <Card>
          <Card.Body>
            <Card.Text dangerouslySetInnerHTML={{ __html: texto }}>
            </Card.Text>
          </Card.Body>
        </Card>
  );
}

export default CardText;
