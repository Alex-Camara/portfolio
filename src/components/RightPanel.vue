<template>
  <div class="hidden lg:flex justify-center top-0 right-0 h-screen w-24 fixed z-30 bg-primary">
    <div class="w-3/12"></div>
    <div class="w-5/12 h-48 mt-auto">
      <p class="vertical-text text-center h-full text-dark-white">{{ me.getEmail() }}</p>
    </div>
    <div class="w-4/12"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Me } from "@/classes/Me";
@Component
export default class RightPanel extends Vue {
  @Prop()
  public me!: Me;
}
</script>