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
 
 <input type= "text" placeholder="Usuario"/>
 <input type="password" placeholder="contraseña"/>
 <button>tocame</button>
</template>
