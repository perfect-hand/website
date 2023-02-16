<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="text-center">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/imprint">Imprint</RouterLink>
      </nav>
    </div>

    <h1 class="display-1 text-center">Perfect Hand Entertainment</h1>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
