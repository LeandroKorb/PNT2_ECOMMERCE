<template>
  <div class="app-container">
    <h1>TiendaGo - ¡Tu tienda de videojuegos favorita!</h1>
    <nav class="navbar">
      <router-link class="nav-link" to="/">Iniciar sesión</router-link>
      <router-link class="nav-link" to="/home">Home</router-link>
      <router-link class="nav-link" to="/profile">Perfil</router-link>
      <router-link class="nav-link" to="/products">Videojuegos</router-link>
      <router-link class="nav-link" to="/cart">Carrito</router-link>
      <!-- Búsqueda -->
      <input
        type="text"
        placeholder="Buscar videojuegos"
        v-model="searchQuery"
        @input="onSearch"
        class="search-input"
      />
    </nav>
    <main class="main-content">
      <router-view @add-to-cart="addToCart" :products="filteredProducts" :cart-items="cartItems" @update-cart="updateCart" />
    </main>
  </div>
</template>

<script>
import zelda from './images/zelda.jpg';
import mario from './images/mario.jpg';
import cyberpunk from './images/cyberpunk.jpg';
import theWitcher from './images/theWitcher.jpg';
import minecraft from './images/minecraft.jpg';
import halo from './images/halo.jpg';
import fifa from './images/fifa.jpg';
import cod from './images/cod.jpg';
import fortnite from './images/fortnite.jpg';
import animal from './images/animal.jpg';



export default {
  name: 'App',
  data() {
    return {
      searchQuery: '',
      products: [],
      cartItems: []
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.products = [
        { id: 1, name: 'The Legend of Zelda', price: 59.99, description: 'Un juego de aventuras épico', image: zelda },
        { id: 2, name: 'Super Mario Odyssey', price: 49.99, description: 'Explora mundos increíbles con Mario', image: mario },
        { id: 3, name: 'Cyberpunk 2077', price: 39.99, description: 'Un RPG futurista y lleno de acción', image: cyberpunk },
        { id: 4, name: 'The Witcher 3', price: 29.99, description: 'Un RPG de mundo abierto increíble', image: theWitcher },
        { id: 5, name: 'Minecraft', price: 19.99, description: 'Construye lo que imagines en este juego de bloques', image: minecraft },
        { id: 6, name: 'Halo Infinite', price: 59.99, description: 'Lucha contra alienígenas en el espacio', image: halo },
        { id: 7, name: 'FIFA 24', price: 49.99, description: 'El mejor simulador de fútbol', image: fifa },
        { id: 8, name: 'Call of Duty: Warzone', price: 0, description: 'Juego de disparos en Battle Royale', image: cod},
        { id: 9, name: 'Fortnite', price: 0, description: 'Únete a la batalla en este shooter gratuito', image: fortnite },
        { id: 10, name: 'Animal Crossing', price: 59.99, description: 'Crea tu isla en este adorable simulador', image: animal }
      ];
    },
    onSearch() {
      // No es necesario redirigir ya que usamos filtrado en tiempo real
    },
    addToCart(product) {
      const item = this.cartItems.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      } else {
        this.cartItems.push({
          ...product,
          quantity: 1,
          totalPrice: product.price
        });
      }
    },
    updateCart(updatedCart) {
      this.cartItems = updatedCart;
    }
  }
};
</script>

<style scoped>
.app-container {
  text-align: center;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #333;
  padding: 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
}

.nav-link:hover {
  color: #1db954;
}

.search-input {
  padding: 0.5rem;
  font-size: 1rem;
  margin-left: 1rem;
}

.main-content {
  padding: 20px;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .nav-link {
    margin: 0.5rem 0;
  }

  .search-input {
    margin: 1rem 0;
  }
}
</style>