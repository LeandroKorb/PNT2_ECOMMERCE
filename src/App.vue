<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const searchQuery = ref(null);
function onSearch() {
// router.push({name: 'products', params: {searchQuery: searchQuery.value}}) hace lo mismo que la linea 8
router.push(`/products/${searchQuery.value}`)
}
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav  class="navbar">
    <RouterLink class="nav-link" to="/">Go to Login</RouterLink>
    <RouterLink class="nav-link" to="/home">Go to Home</RouterLink>
    <RouterLink class="nav-link" to="/profile/123">Go to Profile</RouterLink>
    <input type="text" name="query" @keyup.enter="onSearch" v-model="searchQuery"/>
  </nav>
  <main class="main-content">
    <RouterView />
  </main>
</template>


<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #191414; /* Fondo negro de Spotify */
  padding: 15px 30px;
  height: 60px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.nav-link {
  text-decoration: none;
  color: #ffffff; /* Blanco para el texto */
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 10px 15px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
  color: #1db954; /* Verde característico de Spotify */
  transform: scale(1.05); /* Ligero aumento al pasar el cursor */
}

.nav-link.active {
  color: #1db954; /* Estilo para el enlace activo */
}

.main-content {
  margin-top: 20px;
  padding: 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
  background-color: #121212; /* Fondo oscuro similar al de Spotify */
  min-height: calc(100vh - 60px); /* Ocupa toda la altura excepto el navbar */
}
</style>


