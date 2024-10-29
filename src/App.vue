<template>
  <div class="app-container">
    <h1>TiendaGo - ¡Encontrás todo en un solo lugar!</h1>
    <nav class="navbar">
      <RouterLink class="nav-link" to="/">Iniciar sesión</RouterLink>
      <RouterLink class="nav-link" to="/home">Home</RouterLink>
      <RouterLink class="nav-link" to="/profile/">Profile</RouterLink>
      <RouterLink class="nav-link" to="/products/">Productos</RouterLink>
      <RouterLink class="nav-link" to="/cart">Carrito</RouterLink>
    </nav>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; 
  width: 100vw; 
  overflow: hidden; 
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #191414;
  padding: 15px 30px;
  height: 60px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  width: 100%; 
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 10px 15px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
  color: #1db954;
  transform: scale(1.05);
}

.nav-link.active {
  color: #1db954;
}

.main-content {
  flex: 1; 
  /* margin-top: 20px; */
  /* padding: 0%; */
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
  background-color: #121212;
  min-height: calc(100vh - 60px);
  overflow-y: auto; 
  width: 100%; 
}

h2 {
  color: #1db954;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column; 
    padding: 10px;
  }

  .nav-link {
    margin-bottom: 10px; /* espaciado entre enlaces */
    text-align: center; 
  }

  h1 {
    font-size: 1.5rem; 
  }

  .main-content {
    padding: 10p;
  }
}
</style>
