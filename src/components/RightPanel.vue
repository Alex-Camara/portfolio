<template>
  <div class="hidden lg:visible lg:flex justify-center top-0 right-0 h-screen w-24 fixed z-30 bg-primary">
    <p></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class RightPanel extends Vue {
  private email = "arcamsoft@"
}
</script>