<template>
  <div id="app" class="bg-primary">
    <navbar/>
    <contact/>
    <!-- <right-panel/> -->
    <home class="md:mx-24"/>
    <about-me class="md:mx-24"/>
    <experience class="md:mx-24"></experience>
    <my-projects class="md:mx-24"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Experience from '@/views/Experience.vue';
import Contact from '@/components/Contact.vue';
import RightPanel from '@/components/RightPanel.vue';
import MyProjects from '@/views/MyProjects.vue';

@Component({
  components: {
    Navbar,
    Home,
    Contact,
    AboutMe,
    Experience,
    MyProjects,
    RightPanel,
  },
})
export default class App extends Vue {}
</script>

