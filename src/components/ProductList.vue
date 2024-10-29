
<template>
    <div class="product-section">
      <h2>Lista de Productos</h2>
      <div class="product-grid">
              <!-- con v-for iteramos la lista de productos y creamos un bloque para c/u-->
        <div class="product" v-for="product in products" :key="product.id">
          <div class="product-image">
            <img :src="product.image" alt="Imagen del producto" />
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }}</p>
            <p class="description">{{ product.description }}</p>
            <RouterLink :to="`/products/${product.id}`" class="btn-view-details">Ver Detalles</RouterLink>
            <button class="btn-add-to-cart">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    name: 'ProductList',
    components: {
      RouterLink
    },
    data() {
      return {
        products: [
          { id: 1, name: 'Producto 1', price: '$10', description: 'Descripción del Producto 1', image: 'https://via.placeholder.com/100' },
          { id: 2, name: 'Producto 2', price: '$20', description: 'Descripción del Producto 2', image: 'https://via.placeholder.com/100' },
          { id: 3, name: 'Producto 3', price: '$30', description: 'Descripción del Producto 3', image: 'https://via.placeholder.com/100' },
          { id: 4, name: 'Producto 4', price: '$40', description: 'Descripción del Producto 4', image: 'https://via.placeholder.com/100' },
          { id: 5, name: 'Producto 5', price: '$50', description: 'Descripción del Producto 5', image: 'https://via.placeholder.com/100' },
          { id: 6, name: 'Producto 6', price: '$60', description: 'Descripción del Producto 6', image: 'https://via.placeholder.com/100' },
          { id: 7, name: 'Producto 7', price: '$70', description: 'Descripción del Producto 7', image: 'https://via.placeholder.com/100' },
          { id: 8, name: 'Producto 8', price: '$80', description: 'Descripción del Producto 8', image: 'https://via.placeholder.com/100' },
          { id: 9, name: 'Producto 9', price: '$90', description: 'Descripción del Producto 9', image: 'https://via.placeholder.com/100' },
          { id: 10, name: 'Producto 10', price: '$100', description: 'Descripción del Producto 10', image: 'https://via.placeholder.com/100' },
          { id: 11, name: 'Producto 11', price: '$110', description: 'Descripción del Producto 11', image: 'https://via.placeholder.com/100' },
          { id: 12, name: 'Producto 12', price: '$120', description: 'Descripción del Producto 12', image: 'https://via.placeholder.com/100' },
          { id: 13, name: 'Producto 13', price: '$130', description: 'Descripción del Producto 13', image: 'https://via.placeholder.com/100' },
          { id: 14, name: 'Producto 14', price: '$140', description: 'Descripción del Producto 14', image: 'https://via.placeholder.com/100' },
          { id: 15, name: 'Producto 15', price: '$150', description: 'Descripción del Producto 15', image: 'https://via.placeholder.com/100' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-section {
    margin-top: 40px;
    padding: 20px;
    color: #fff;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
  
  .product {
    background-color: #1e1e1e;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .product:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
  
  .product-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .product-info {
    margin-top: 10px;
  }
  
  h3 {
    color: #1db954;
    font-size: 1rem;
    margin: 5px 0;
  }
  
  .price {
    font-size: 0.9rem;
    color: #f1c40f;
    margin: 5px 0;
  }
  
  .description {
    font-size: 0.8rem;
    color: #ccc;
    margin: 10px 0;
  }
  
  .btn-add-to-cart {
    background-color: #1db954;
    color: #fff;
    border: none;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    font-size: 0.8rem;
  }
  
  .btn-add-to-cart:hover {
    background-color: #17a24b;
  }
  
  .btn-view-details {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .btn-view-details:hover {
    background-color: #0056b3;
  }
  </style>
  