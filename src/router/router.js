// import Index from '../components/Index'
// import Navbar from '../components/Navbar'
// import AddSmoothie from '../components/AddSmoothie'
// import EditSmoothie from '../components/EditSmoothie'


import Welcome from "../components/Welcome";
import Chat from "../components/Chat";

export const routes = [

    {path: '/', component: Welcome, name: 'Welcome'},
    {path: '/Chat', component: Chat, name: 'Chat'},
    // {path: '/navbar', component: Navbar, name: 'Navbar'},
    // {path: '/add_smoothies', component: AddSmoothie, name: 'AddSmoothie'},
    // {path: '/edit-smoothie/:smoothie_slug', component: EditSmoothie, name: 'EditSmoothie'},

];


