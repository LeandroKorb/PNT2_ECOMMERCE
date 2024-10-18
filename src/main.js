import './assets/main.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from "./components/Login.vue";
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';


const routes = createRouter[
    {path: "/", component: login},
    {path: "/home", component: home},
    {path: "/profile/:id", component: Profile}
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to,from) =>{
    console.log(to);
    return true;
})

createApp(App).use(router).mount('#app')

createApp(App).mount('#app')
