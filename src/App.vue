<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav class="navbar navbar-expand">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/perfect-hand" target="_blank">GitHub</a>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link" to="/imprint">Imprint</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
