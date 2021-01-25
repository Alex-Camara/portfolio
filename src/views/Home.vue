<template>
  <div id="home" class="flex justify-center md:justify-start h-screen">
    <hello :me="me" class="md:mt-32 lg:mt-0 md:ml-24" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Hello from '@/components/Hello.vue';
import { Me } from '@/classes/Me';
@Component({
  components: {
    Hello,
  },
})
export default class Home extends Vue {
  @Prop()
  public me!: Me;
  private element: HTMLElement;

  public scrollToNextSection() {
    this.element.removeEventListener('wheel', this.scrollToNextSection);
    this.$emit('next', 'aboutMe');
  }

  private mounted() {
    const self = this;
    this.element = document.getElementById('home');
    this.element.addEventListener('wheel', self.scrollToNextSection);
  }
}
</script>
