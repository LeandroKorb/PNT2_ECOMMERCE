<script setup>
import {useRouter} from "vue-router";
import {ref} from 'vue';
const router = useRouter();
const username = ref(null);
const password = ref(null);
const login = () => {
  if (username.value === "admin" && password.value === "admin") {
    router.push("/home");
  }
};
</script>

<template>
 <div class="container">
  <div class="login-box">
    <div class="logo"> TiendaGo</div>
      <form @click.prevent="login">
        <input type="text" placeholder="username" required v-model="username"/>
        <input type="password" placeholder="password" required v-model="password"/>
        <button type="submit">iniciar sesion</button>
      </form>
  </div>
 </div>
</template>



<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-box {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input[type="text"],
input[type="password"] {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #007BFF;
  outline: none;
}

button[type="submit"] {
  background-color: #007BFF;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
