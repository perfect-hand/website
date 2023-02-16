<script setup>
  defineProps({
    title: String,
    icon: String,
    text: String
  })
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <span class="material-icons">{{ icon }}</span> <h5 class="card-title"> {{ title }}</h5>
        <p class="card-text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
