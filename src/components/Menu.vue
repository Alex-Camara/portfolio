<template>
  <aside
    class="transform top-0 w-3/4 pt-24 bg-light-primary fixed h-full ease-in-out transition-all duration-300 z-30"
    :class="showMenu ? '-translate-x-3/2' : 'translate-x-full'"
  >
    <div class="flex items-center flex-col justify-content-center">
      <div class="flex items-center p-4 md:hidden">
        <p class="navbar-menu-button" @click="scrollToSection('aboutMe')">
          {{ sectionAboutMe }}
        </p>
      </div>
      <div class="flex items-center p-4 md:hidden">
        <p class="navbar-menu-button" @click="scrollToSection('experience')">
          {{ sectionExperience }}
        </p>
      </div>
      <div class="flex items-center p-4 md:hidden">
        <p class="navbar-menu-button" @click="scrollToSection('projects')">
          {{ sectionWork }}
        </p>
      </div>
      <div class="flex items-center p-4 md:hidden">
        <p class="navbar-menu-button" @click="scrollToSection('contact')">
          {{ sectionContact }}
        </p>
      </div>
      <a
        href="./cv_alejandro_camara.pdf"
        class="regular-button m-10 md:hidden"
        target="_blank"
      >
        {{ resumeButtonText }}
      </a>
    </div>
  </aside>
</template>


<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component
export default class Menu extends Vue {
  @Prop({ type: Boolean, required: true })
  public showMenu!: boolean;
  private sectionAboutMe = 'About me';
  private sectionExperience = 'Experience';
  private sectionWork = 'Work';
  private sectionContact = 'Contact';
  private resumeButtonText = 'Resume';

  public scrollToSection(section: string) {
    this.$emit('scroll', section);
  }

  @Watch('showMenu', { immediate: true })
  private onPropertyChanged(value: boolean, oldValue: boolean) {
    if (value) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.removeProperty('overflow');
    }
  }
}
</script>