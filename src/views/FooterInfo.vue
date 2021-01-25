<template>
  <div class="flex flex-col items-center justify-center h-20">
    <div class="flex items-center justify-center h-8">
      <p class="text-dark-white text-sm">Made with</p>
      <img
        src="../assets/love.svg"
        class="blue-icon h-3 mx-2 self-center cursor-pointer"
      />
      <p class="text-dark-white text-sm mr-3">by Alex Cámara</p>
      <a :href="githubProjectLink" target="_blank">
        <img
          src="../assets/github.svg"
          class="white-icon h-5 self-center cursor-pointer"
        />
      </a>
    </div>
    <div class="flex items-center justify-center h-5">
      <p class="text-sm text-dark-gray">Based in the design made by &shy;</p>
      <a href="https://www.uv.mx/" target="_blank" class="link-text text-sm text-dark-gray">
        Brittany Chiang.
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class FooterInfo extends Vue {
  private githubProjectLink = 'https://github.com/Alex-Camara/portfolio';
}
</script>