<script setup>
import { productsList } from  '../models/productsList.js'
import { computed } from 'vue';

const{searchQuery} = defineProps({
  searchQuery: String
})

const filteredProducts = computed(() => {
  return productsList.filter(product =>
    product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  )
})

</script>

<template>
<h1>{{ searchQuery }}</h1>

<ul class="product-list">
      <li v-for="product in filteredProducts" :key="product.id" class="product-item">
        <img :src="product.img" :alt="product.nombre" />
        <p>{{ product.nombre }}</p>
        <p> {{ product.id }}</p>
        <p>{{ product.precio }}</p>
      </li>
    </ul>
</template>
