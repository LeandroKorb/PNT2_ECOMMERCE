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

    <!-- Aviso de producto añadido o removido -->
    <div v-if="showNotification" class="notification">
      <p>{{ notificationMessage }}</p>
      <button v-if="isUndoVisible" @click="undoAddToCart">Deshacer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  data() {
    return {
      showNotification: false,  // Controla la visibilidad del aviso
      notificationMessage: '',  // Mensaje de la notificación
      lastAddedProduct: null,  // Para almacenar el último producto añadido
      isUndoVisible: true,  // Controla si se muestra el botón de deshacer
    };
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
      this.lastAddedProduct = product;  // Guardamos el último producto añadido
      this.notificationMessage = `${product.name} añadido al carrito!`;  // Mensaje con el nombre del producto
      this.isUndoVisible = true;  // Aseguramos que el botón de deshacer se muestre
      this.showNotification = true;  // Mostrar el aviso

      // Ocultamos el aviso después de 3 segundos
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },
    undoAddToCart() {
      if (this.lastAddedProduct) {
        this.$emit('remove-from-cart', this.lastAddedProduct);  // Evento para eliminar del carrito
        this.notificationMessage = `${this.lastAddedProduct.name} ha sido removido del carrito.`;  // Mensaje de deshacer
        this.isUndoVisible = false;  // Ocultamos el botón de deshacer

        // Mostramos la notificación durante 5 segundos en total
        setTimeout(() => {
          this.showNotification = false;  // Ocultamos la notificación después de 5 segundos
        }, 2000); // 2 segundos más que el mensaje original
      }
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
  color: #666;
}

.product-info h3 {
  color: #666;
}
.price {
  font-weight: bold;
  margin-top: 5px;
  color: #666;
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

/* Estilos para la notificación */
.notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  z-index: 1000;
}

.notification button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.notification button:hover {
  background-color: #ff1a1a;
}
</style>
