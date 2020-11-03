<template>
    <div class="flex">
        <div class="text-white text-xl w-5/12 mr-4 md:mr-0 lg:w-4/12 font-bold lg:text-2xl">{{ title }}</div>
        <div class="border-2 h-0 w-7/12 lg:w-5/6 my-auto mr-auto border-light-primary"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class SectionTitle extends Vue {
    @Prop()
    public title!: string;
}
</script>