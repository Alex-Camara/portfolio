<template>
    <div class="flex items-center justify-center h-10">
        <p class="text-dark-white text-sm mr-3">Repository for this project </p>
        <img src="../assets/github.svg" class="white-icon h-5 self-center cursor-pointer"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class FooterInfo extends Vue {
}
</script>