import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';

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
