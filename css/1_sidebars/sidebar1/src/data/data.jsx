import { faHome, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
    {
      to: '/',
      text: 'Home',
      icon : <FontAwesomeIcon icon={faHome}/>
    },
    {
      to: '/new-client',
      text: 'New Client',
      icon : <FontAwesomeIcon icon={faPeopleArrows}/>
    },
  ];
export default data;