<template>
  <main>
    <Hero />
    <Features />
  </main>
</template>

<script>
import Features from '../components/home/Features.vue';
import Hero from '../components/home/Hero.vue';

export default {
  components: { Hero, Features },
  name: 'Home'
}
</script>