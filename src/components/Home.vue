<template>
  <div class="home-container">
    <!-- Carrusel -->
    <vue-carousel :perPage="3" :scrollPerPage="true">
      <!-- Aquí solo muestras los primeros 5 productos del carrusel -->
      <vue-carousel-item v-for="product in firstFiveProducts" :key="product.id">
        <div class="carousel-item">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">\${{ product.price.toFixed(2) }}</p>
        </div>
      </vue-carousel-item>
    </vue-carousel>
  </div>
</template>

<script>
import VueCarousel from '@ssense/vue-carousel';
import zelda from '../images/zelda.jpg';
import mario from '../images/mario.jpg';
import cyberpunk from '../images/cyberpunk.jpg';
import theWitcher from '../images/theWitcher.jpg';
import minecraft from '../images/minecraft.jpg';

export default {
  name: 'Home',
  components: {
    VueCarousel
  },
  data() {
    return {
      products: [
        { id: 1, name: 'The Legend of Zelda', price: 59.99, description: 'Un juego de aventuras épico', image: zelda },
        { id: 2, name: 'Super Mario Odyssey', price: 49.99, description: 'Explora mundos increíbles con Mario', image: mario },
        { id: 3, name: 'Cyberpunk 2077', price: 39.99, description: 'Un RPG futurista y lleno de acción', image: cyberpunk },
        { id: 4, name: 'The Witcher 3', price: 29.99, description: 'Un RPG de mundo abierto increíble', image: theWitcher },
        { id: 5, name: 'Minecraft', price: 19.99, description: 'Construye lo que imagines en este juego de bloques', image: minecraft },
        // Asegúrate de tener los productos restantes si deseas incluir más en el carrusel
      ]
    };
  },
  computed: {
    firstFiveProducts() {
      return this.products.slice(0, 5); // Solo los primeros 5 productos para el carrusel
    }
  }
};
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.carousel-title {
  font-size: 1.8rem;
  color: #333; /* Gris oscuro para el título */
  margin-bottom: 20px;
}

.carousel-item {
  text-align: center;
  padding: 20px;
}

.carousel-item img {
  max-width: 100%;
  height: auto;
}

.carousel-item h3 {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #333; 
}

.carousel-item .product-description {
  font-size: 1rem;
  color: #555; 
}

.carousel-item .product-price {
  font-size: 1.2rem;
  color: #333; 
  margin-top: 10px;
}
</style>
