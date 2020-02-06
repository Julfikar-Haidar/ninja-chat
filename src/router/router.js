// import Index from '../components/Index'
// import Navbar from '../components/Navbar'
// import AddSmoothie from '../components/AddSmoothie'
// import EditSmoothie from '../components/EditSmoothie'


import Welcome from "../components/Welcome";
import Chat from "../components/Chat";

export const routes = [

    {path: '/', component: Welcome, name: 'Welcome'},
    {
     path: '/chat',
     component: Chat,
     name: 'Chat',
     props:true,
     beforeEnter:(to , from, next)=>{
         if (to.params.name) {
             next()
         }else{
             next({ name: 'Welcome'})
         }
     }
    },
   

];


