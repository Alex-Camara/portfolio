<template>
  <div class="navbar z-20">
    <nav class="flex fixed w-full justify-end bg-primary h-24">

        <button id="hamburguer-button" class="hamburger--elastic flex mr-6 h-12 items-center self-center md:hidden z-50" type="button" 
            @click="changeShowMenu"
            :class="{'is-active': isActive}"
            @mousedown.prevent="">

            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>  

        <aside-menu class="md:hidden" :showMenu="showMenu"></aside-menu>

        <div class="flex">
            <div class="hidden md:flex items-center md:visible">
                <div class="navbar-button-circle"></div>
                <p class="navbar-button">{{ sectionAboutMe }}</p>
            </div>
            <div class="hidden md:flex items-center md:visible">
                <div class="navbar-button-circle"></div>
                <p class="navbar-button">{{ sectionExperience }}</p>
            </div>
            <div class="hidden md:flex items-center md:visible">
                <div class="navbar-button-circle"></div>
                <p class="navbar-button">{{ sectionWork }}</p>
                </div>
            <div class="hidden md:flex items-center md:visible">
                <div class="navbar-button-circle"></div>
                <p class="navbar-button">{{ sectionContact }}</p>
            </div> 
        </div>
        <blue-button class="hidden md:flex pr-10 items-center md:visible" :buttonText="resumeButtonText" />
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

    private changeShowMenu() {
        this.showMenu = !(this.showMenu);
        this.isActive = !this.isActive;
        // $event.target.classList.toggle('is-active')
        // console.log($event)
    }
}
</script>