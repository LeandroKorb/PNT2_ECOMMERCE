<template>
  <div class="product-detail">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" alt="Product Image" />
    <p><strong>Descripción:</strong> {{ product.description }}</p>
    <p><strong>Precio:</strong> ${{ product.price }}</p>
    <button @click="addToCart">Añadir al carrito</button>
    <button @click="shareProduct">Compartir</button>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    product: Object
  },
  methods: {
    // Método para añadir al carrito
    addToCart() {
      this.$emit('add-to-cart', this.product);
    },
    shareProduct() {
      const shareData = {
        title: this.product.name,
        text: this.product.description,
        url: window.location.href,
      };

      navigator.share(shareData)
        .then(() => console.log('Compartido exitosamente'))
        .catch((error) => console.error('Error al compartir:', error));
    }
  }
};
</script>

<style scoped>
.product-detail {
  padding: 20px;
  background-color: #121212;
  color: #fff;
}

.product-detail img {
  max-width: 100%;
  height: auto;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #1db954;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #1aaa44;
}
</style>
