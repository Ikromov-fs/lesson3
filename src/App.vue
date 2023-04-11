<template >
  <div class="container">
    <Navbar :links="links" />
    <router-view></router-view>
    <Footer :datas="datas" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Navbar from './components/navbar/navbar.vue';
import Footer from './components/footer/footer.vue';

const datas = ref([
  { name: 'Sign up with Apple' },
  { name: 'Sign up with Facebook' },
  { name: 'Sign up with Google' },
])
const links = ref([
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
])

</script>
<style scoped></style>