<template>
  <div class="cart-section">
    <h2>Carrito de Compras</h2>
    <div v-if="cartItems.length === 0">
      <p>El carrito está vacío.</p>
    </div>
    <div v-else>
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <div class="cart-item-info">
          <img :src="item.image" alt="Imagen del producto" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>Cantidad: {{ item.quantity }}</p>
            <p>Precio Total: ${{ item.totalPrice.toFixed(2) }}</p>
            <div class="cart-controls">
              <button @click="decreaseQuantity(item)">-</button>
              <button @click="increaseQuantity(item)">+</button>
              <button @click="removeFromCart(item.id)">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="total">
        <h3>Total: ${{ totalAmount }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cartItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
    }
  },
  methods: {
    increaseQuantity(item) {
      item.quantity++;
      item.totalPrice = item.price * item.quantity;
      this.$emit('update-cart', this.cartItems);
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;
      } else {
        this.removeFromCart(item.id);
      }
      this.$emit('update-cart', this.cartItems);
    },
    removeFromCart(itemId) {
      const updatedCart = this.cartItems.filter(item => item.id !== itemId);
      this.$emit('update-cart', updatedCart);
    }
  }
};
</script>

<style scoped>
.cart-section {
  padding: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.cart-item img {
  width: 100px;
  height: auto;
}

.cart-controls {
  display: flex;
  justify-content: space-around;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #1db954;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #1aaa44;
}

.total {
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
