<template>
  <div class="app-container">
    <h1>TiendaGo - ¡Tu tienda de videojuegos favorita!</h1>
    <nav class="navbar">
      <router-link class="nav-link" to="/">Iniciar sesión</router-link>
      <router-link class="nav-link" to="/home">Home</router-link>
      <router-link class="nav-link" to="/profile">Perfil</router-link>
      <router-link class="nav-link" to="/products">Comprar videojuegos!</router-link>
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

    <!-- Condición para mostrar el carrusel solo en la página Home -->
    <div v-if="isHomePage">
      <div class="carousel">
        <h2>Productos Destacados</h2>
        <div class="carousel-items">
          <div v-for="(product, index) in featuredProducts" :key="product.id" class="carousel-item">
            <img :src="product.image" :alt="product.name" class="carousel-image" />
            <p>{{ product.name }}</p>
            <p>$ {{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>

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
    },
    // Obtener solo los primeros 5 productos para el carrusel
    featuredProducts() {
      return this.products.slice(0, 5);
    },
    // Verificar si la ruta actual es 'Home'
    isHomePage() {
      return this.$route.path === '/home';
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
        { id: 8, name: 'Call of Duty: Warzone', price: 0, description: 'Juego de disparos en Battle Royale', image: cod },
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
/* Estilos del carrusel */
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel-items {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 20%;
  margin-right: 10px;
  text-align: center;
}

.carousel-image {
  width: 100%;
  border-radius: 10px;
}

.carousel h2 {
  text-align: center;
  margin-bottom: 20px;
}

.navbar {
  margin-bottom: 20px;
}

.nav-link {
  margin-right: 15px;
}
</style>
