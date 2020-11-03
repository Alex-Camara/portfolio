<template>
  <div id="app" class="bg-primary">
    <navbar/>
    <contact-panel/>
    <right-panel/>
    <home class="mx-5 md:mx-24"/>
    <about-me class="md:mx-24"/>
    <experience class="md:mx-24"/>
    <my-projects class="md:mx-20"/>
    <contact class="md:mx-24 mt-10 "/>
    <footer-info class="md:mx-24"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Experience from '@/views/Experience.vue';
import ContactPanel from '@/components/ContactPanel.vue';
import RightPanel from '@/components/RightPanel.vue';
import MyProjects from '@/views/MyProjects.vue';
import Contact from '@/views/Contact.vue'
import FooterInfo from '@/views/FooterInfo.vue'

@Component({
  components: {
    Navbar,
    Home,
    ContactPanel,
    AboutMe,
    Experience,
    MyProjects,
    RightPanel,
    Contact,
    FooterInfo,
  },
})
export default class App extends Vue {}
</script>

