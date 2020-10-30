<template>
  <div class="button">
      <button class="regular-button">{{ buttonText }}</button> 
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BlueButton extends Vue {
  @Prop({type: String, required: true})
  public buttonText!: string;
}
</script>
