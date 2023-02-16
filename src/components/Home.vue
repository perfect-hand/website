<script setup>
import CoreValue from './CoreValue.vue'
</script>

<template>
  <h1 class="display-1 text-center">Perfect Hand Entertainment</h1>
  <p class="lead text-center">We're creating high-quality cooperative digital and physical card games.</p>
  <hr>
  
  <h1 class="text-center">Core Values</h1>
  <p class="lead text-center">How we're building and operating all of our games</p>

  <div class="row">
    <CoreValue title="Digital & Physical" icon="dashboard" text="Our players can play our card games in both digital and physical form, facilitating finding a partner for playing and occasionally allowing you to benefit in one way while doing the other." />
    <CoreValue title="Cooperative" icon="groups" text="We strongly believe that winning together is a lot more fun than losing alone, and building and experiencing worlds is easier in a cooperative environment." />
    <CoreValue title="High Quality" icon="trending_up" text="We aim to build the highest quality card games, driven by our unlimited passion and supported by technical measures such as lots of automated tests." />
    <CoreValue title="Low Profile" icon="savings" text="At Perfect Hand, we're working in a small, distributed team, and trust in hosted infrastructure instead of building and operating everything ourselves and from scratch." />
    <CoreValue title="Doing Good" icon="favorite" text="We're always striving to do the right thing, by supporting sustainability, protecting player data, open-sourcing tech, being transparent and training young talent." />
  </div>

  <hr>
  <p class="text-center">If you're interested in joining our team, growing our community, or funding our games, don't hesitate to <a href="mailto:mail@perfecthand.de">reach out</a>!</p>
</template>

<style scoped>
</style>
