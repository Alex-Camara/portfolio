<template>
  <div id="app" class="">
    <navbar/>
    <contact/>
    <home class="md:ml-24"/>
    <about-me class="md:ml-24"/>
    <experience class="md:ml-24"></experience>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Experience from '@/views/Experience.vue';
import Contact from '@/components/Contact.vue';

@Component({
  components: {
    Navbar,
    Home,
    Contact,
    AboutMe,
    Experience,
  },
})
export default class App extends Vue {}
</script>

