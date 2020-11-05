<template>
  <div id="app" class="bg-primary">
    <navbar @scroll="scrollToSection($event)"/>
    <contact-panel :me="me" class="hidden lg:flex top-0 left-0 h-screen w-24 lg:fixed z-30"/>
    <right-panel :me="me"/>
    <home :me="me" class="mx-5 md:mx-24"/>
    <about-me ref="compAboutMe" class="md:mx-24"/>
    <experience ref="compExperience" class="md:mx-24"/>
    <my-projects ref="compProjects" class="md:mx-20"/>
    <contact ref="compContact" :me="me" class="md:mx-24 mt-10 mb-10 lg:mb-0"/>
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
import { Me } from "@/classes/Me";
import { VueClass } from '@vue/test-utils';

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
export default class App extends Vue {
  private me!: Me;
  private created() {
    document.title = 'Alex Cámara';

    this.me = new Me(1, 'Alejandro Cámara', 'Alex Cámara', 'arcamsoft@gmail.com', 'https://twitter.com/alexarcam',
                     'https://www.linkedin.com/in/alex-camara/', 'https://github.com/Alex-Camara',
                      'https://telegram.me/alexcamara', 'https://www.instagram.com/alex_arcam/');
  }

  mounted() {
    var self = this;
    window.addEventListener('hashchange', function() {
      self.scrollToSection(window.location.hash.substring(1));
    })
  }

  public scrollToSection(section: string) {
    switch(section) {
      case 'aboutMe':
        (this.$refs.compAboutMe as AboutMe).scrollToTop();
      break;
      case 'experience':
        (this.$refs.compExperience as Experience).scrollToTop();
      break;
      case 'projects':
        (this.$refs.compProjects as MyProjects).scrollToTop();
      break;
      case 'contact':
        (this.$refs.compContact as Contact).scrollToTop();
      break;
    }
  }
}
</script>

