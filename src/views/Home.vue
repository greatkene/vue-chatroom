<template>
  <main>
    <Hero />
    <Features />
    <About />
    <MoreAbout />
  </main>
</template>

<script>
import MoreAbout from '../components/home/MoreAbout.vue';
import About from '../components/home/About.vue';
import Features from '../components/home/Features.vue';
import Hero from '../components/home/Hero.vue';


export default {
  components: { Hero, Features, About, MoreAbout },
  name: 'Home'
}
</script>