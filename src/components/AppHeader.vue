<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/timeline">Timeline</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  
  <style scoped>
  nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #42b983;
  }
  </style>
  