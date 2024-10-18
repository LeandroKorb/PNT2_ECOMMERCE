<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Login</RouterLink>
    <RouterLink to="/home">Go to Home</RouterLink>
    <RouterLink to="/profile/123">Go to Profile</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>


