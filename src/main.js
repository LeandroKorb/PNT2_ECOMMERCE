import "./assets/main.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";
import Productos from "./components/Productos.vue";

const router = createRouter({
  routes: [
    { path: "/", component: Login },
    { path: "/home", component: Home },
    { path: "/profile/:id", component: Profile },
    {
      path: "/products/:searchQuery?",
      component: Productos,
      props: (route) => ({
        searchQuery: route.params.searchQuery || "",
      }),
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
