<template>
  <div class="Hello flex justify-center sm:content-start w-full h-full md:pb-20 md:mr-40 ">
      <div class="flex flex-col justify-center">
        <p class="text-base text-accent">{{ greetings }}</p>
        <p class="text-4xl text-white mb-2 md:mb-5 font-bold md:text-huge">{{ name }}</p>
        <p class="text-base text-dark-white">{{ introduction }}</p>

        <button class="regular-button items-center mt-20 place-self-start w-56">{{ contactButton }}</button>
      </div>
      
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Hello extends Vue {
  private name = 'Alex Cámara.';
  private greetings = 'Hi! My name is';
  private introduction = 'I\'m a software engineer';
  private contactButton = 'Get In Touch';
}
</script>