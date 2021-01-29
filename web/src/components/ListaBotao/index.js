import ButonNav from '../ButonNav'

function ListaBotao(props) {
    const links = props.links;
    
  return (
      <center>
          {links.map((link,i)=> <ButonNav key={i} name={link.bu} link={link.link} />)}
      </center>
  );
}

export default ListaBotao;
