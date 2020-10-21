<template>
  <div class="flex justify-center top-0 left-0 h-screen w-1/12 sticky z-30">
    <div class="flex flex-col pt-64">
        <img src="../assets/github.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce"/>
        <img src="../assets/telegram.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce"/>
        <img src="../assets/linkedin.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce"/>
        <img src="../assets/twitter.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Contact extends Vue {
}
</script>