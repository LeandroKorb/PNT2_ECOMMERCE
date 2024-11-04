<template>
  <div class="product-section">
    <h2>Lista de Videojuegos</h2>
    <div class="product-grid">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product-image">
          <img :src="product.image" alt="Imagen del producto" />
        </div>
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">${{ product.price.toFixed(2) }}</p>
          <button @click="addToCart(product)">Añadir al carrito</button>
        </div>
      </div>
      <div v-if="products.length === 0">
        <p>No hay productos disponibles.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>

<style scoped>
.product-section {
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product {
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
  text-align: center;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-info {
  margin-top: 10px;
}

.price {
  font-weight: bold;
  margin-top: 5px;
}

button {
  background-color: #1db954;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #1aaa44;
}
</style>