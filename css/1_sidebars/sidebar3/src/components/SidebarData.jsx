import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPeopleCarry,faCartPlus, faPeopleArrows, faMessage, faCircle, faC } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome} />,
        cName: 'nav-text'
    },
    {
        title: 'Ajouter un client',
        path: '/form-client',
        icon: <FontAwesomeIcon icon={faPeopleCarry} />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Products',
    //     path: '/products',
    //     icon: <FontAwesomeIcon icon={faCartPlus} />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Team',
    //     path: '/team',
    //     icon: <FontAwesomeIcon icon={faPeopleArrows} />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Messages',
    //     path: '/messages',
    //     icon: <FontAwesomeIcon icon={faMessage} />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Support',
    //     path: '/support',
    //     icon: <FontAwesomeIcon icon={faCircle} />,
    //     cName: 'nav-text'
    // },
]