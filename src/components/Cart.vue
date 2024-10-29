
<template>
    <div class="cart-section">
      <h2>Carrito de Compras</h2>
      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>No hay productos en el carrito.</p>
      </div>
      <div v-else>
        <div class="cart-item" v-for="item in cartItems" :key="item.id">
          <div class="cart-item-info">
            <img :src="item.image" alt="Imagen del producto" />
            <div>
              <h3>{{ item.name }}</h3>
              <p class="price">{{ item.price }}</p>
              <button class="btn-remove" @click="removeFromCart(item.id)">Eliminar</button>
            </div>
          </div>
        </div>
        <div class="total">
          <h3>Total: {{ totalAmount }}</h3>
          <button class="btn-checkout">Pagar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart',
    data() {
      return {
        cartItems: [
          { id: 1, name: 'Producto 1', price: 10, image: 'https://via.placeholder.com/100' },
          { id: 2, name: 'Producto 2', price: 20, image: 'https://via.placeholder.com/100' },
        ],
      };
    },
    computed: {
      // Suma los precios de todos los productos en el carrito
      totalAmount() {
        return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2); // Devuelve el total como una cadena de 2 decimales
      },
    },
    methods: {
      removeFromCart(itemId) {
        // Filtra los productos en el carrito para excluir el que se quiere eliminar
        this.cartItems = this.cartItems.filter(item => item.id !== itemId);
      }
    }
  };
  </script>
  
  <style scoped>
  .cart-section {
    padding: 20px;
    color: #fff;
  }
  
  .cart-item {
    display: flex;
    background-color: #1e1e1e;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .cart-item img {
    width: 80px;
    height: auto;
    border-radius: 10px;
    margin-right: 10px;
  }
  
  .cart-item-info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .price {
    color: #f1c40f;
  }
  
  .btn-remove {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-remove:hover {
    background-color: #c0392b;
  }
  
  .total {
    margin-top: 20px;
  }
  
  .btn-checkout {
    background-color: #1db954;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-checkout:hover {
    background-color: #17a24b;
  }
  
  .empty-cart {
    text-align: center;
    color: #ccc;
  }
  </style>
  