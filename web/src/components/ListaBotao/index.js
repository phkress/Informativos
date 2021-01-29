import ButonNav from '../ButonNav'

function ListaBotao(props) {
    const links = props.links;
    
  return (
      <center>
          {links.map((link,i)=> <ButonNav key={i} name={link.bu} link={link.link} id={link._id}/>)}
      </center>
  );
}

export default ListaBotao;
