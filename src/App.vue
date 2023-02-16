<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            
            <li class="nav-item">
              <RouterLink class="nav-link" to="/imprint">Imprint</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <h1 class="display-1 text-center">Perfect Hand Entertainment</h1>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
