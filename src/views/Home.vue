<template>
  <main>
    <Hero />
    <Features />
    <About />
  </main>
</template>

<script>
import About from '../components/home/About.vue';
import Features from '../components/home/Features.vue';
import Hero from '../components/home/Hero.vue';

export default {
  components: { Hero, Features, About },
  name: 'Home'
}
</script>