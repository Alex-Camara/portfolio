<template>
  <div class="nav-div relative">
    <nav id="navbar" class="nav flex fixed w-screen justify-end h-24">

        <button id="hamburguer-button" class="hamburger--elastic flex mr-6 h-12 items-center self-center md:hidden z-50" type="button" 
            @click="changeShowMenu"
            :class="{'is-active': isActive}"
            @mousedown.prevent="">

            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>  

        <aside-menu @scroll="scrollToSectionFromMenu($event)" class="md:hidden" :showMenu="showMenu"></aside-menu>

        <div class="flex">
            <div class="hidden md:flex items-center md:visible" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                <div class="navbar-button-circle"></div>
                <p class="navbar-button" @click="scrollToSection('aboutMe')">{{ sectionAboutMe }}</p>
            </div>
            <div class="hidden md:flex items-center md:visible" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
                <div class="navbar-button-circle"></div>
                <p class="navbar-button" @click="scrollToSection('experience')">{{ sectionExperience }}</p>
            </div>
            <div class="hidden md:flex items-center md:visible" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                <div class="navbar-button-circle"></div>
                <p class="navbar-button" @click="scrollToSection('projects')">{{ sectionWork }}</p>
                </div>
            <div class="hidden md:flex items-center md:visible" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">
                <div class="navbar-button-circle"></div>
                <p class="navbar-button" @click="scrollToSection('contact')">{{ sectionContact }}</p>
            </div> 
        </div>
        <div class="hidden md:flex md:visible items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">
            <a href="./cv_alejandro_camara.pdf" class="regular-button mr-10" target="_blank">
                {{ resumeButtonText }}
            </a>
        </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BlueButton from '@/components/BlueButton.vue';
import Menu from '@/components/Menu.vue';
@Component({
  components: {
    BlueButton,
    'aside-menu': Menu,
  },
})
export default class Navbar extends Vue {
    private sectionAboutMe = 'About me';
    private sectionExperience = 'Experience';
    private sectionWork = 'Work';
    private sectionContact = 'Contact';
    private resumeButtonText = 'Resume';
    private menuButtonText = 'Menu';
    private showMenu = false;
    private isActive = false;
    private lastScrollPosition = window.pageYOffset;
    private publicPath = process.env.publicPath;

    private changeShowMenu() {
        this.showMenu = !(this.showMenu);
        this.isActive = !this.isActive;
    }

    public scrollToSection(section: string) {
        this.$emit('scroll', section);
    }

    public scrollToSectionFromMenu(section: string) {
        this.showMenu = false;
        this.isActive = false;
        this.$emit('scroll', section);
    }

    private created() {
        window.addEventListener('scroll', this.handleScroll);
    }

    public handleScroll(event) {
        var currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition < 0) {
            return
        }
        if (this.lastScrollPosition > currentScrollPosition) {
            document.getElementById("navbar").style.top = "0";                
        } else {
            document.getElementById("navbar").style.top = "-6rem";
        }
        this.lastScrollPosition = currentScrollPosition;
    }
}
</script>
