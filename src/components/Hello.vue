<template>
  <div class="flex sm:content-start place-items-start">

      <div class="flex flex-col justify-center my-auto">
        <p class="text-base text-accent">{{ greetings }}</p>
        <!-- <p class="text-4xl text-white mb-1 md:mb-1 font-bold md:text-huge leading-none cursor-default">{{ name }}</p>
         -->
         <!-- <name class="w-3/4"/> -->
        <p class="text-4xl text-light-primary mb-2 md:mb-5 font-bold md:text-6xl leading-tight">{{ slogan }}</p>
        <p class="text-base text-dark-white">{{ introduction }}  </p>

        <button @click="openEmail()" class="regular-button items-center mt-5 place-self-start w-56 h-16">{{ contactButton }}</button>
      </div>
      
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Me } from "@/classes/Me";
import Name from '@/components/Name.vue';
@Component({
  components: {
    // Name,
  },
})
export default class Hello extends Vue {
  @Prop()
  public me!: Me;

  private name = 'Alex Cámara.';
  private slogan = 'Building solutions through software.';
  private greetings = 'Hi! My name is';
  private introduction = 'I\'m a software engineer';
  private contactButton = 'Get In Touch';

  public openEmail(): void {
      location.href = 'mailto:' + this.me.getEmail() + '?subject=Hello!&body=Hi,%20Alex!';
  }
}
</script>