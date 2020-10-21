<template>
  <div class="Hello bg-primary">
      <div>
        <p class="text-4xl text-white">HOLA</p>
      </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Hello extends Vue {
  private name = 'Alejandro Cámara';
}
</script>