<template>
    <div class="flex">
        
        <div v-if="project.getType() == 'web'" class="w-full lg:w-7/12 cursor-pointer accent-filter-transparent lg:accent-filter hover:no-filter ease-in-out duration-300 shadow-lg">
            <img class="rounded-md" :src="getImageSource(0)" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
        </div>

        <div v-else class="flex flex-col w-full lg:flex-row lg:justify-between lg:w-7/12">
            <img :src="getImageSource(0)" class="w-1/2 ml-auto mx-auto lg:mx-0 lg:w-4/12 rounded-md cursor-pointer accent-filter-transparent lg:visible lg:accent-filter hover:no-filter ease-in-out duration-300 shadow-2xl"
            data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <img :src="getImageSource(1)" class="hidden w-0 rounded-md cursor-pointer accent-filter-transparent lg:inline lg:w-4/12 lg:accent-filter hover:no-filter ease-in-out duration-300 shadow-2xl"
            data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
            <img :src="getImageSource(2)" class="hidden w-0 rounded-md cursor-pointer accent-filter-transparent lg:inline lg:w-4/12 lg:accent-filter hover:no-filter ease-in-out duration-300 shadow-2xl"
            data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">
        </div>

        <div class="flex flex-col justify-center mx-auto w-full left-foreground lg:w-5/12">
                <p class="text-accent text-lg text-right">Pinned project</p>
                <p class="text-white text-xl font-bold text-right">{{ project.getName() }}</p>

                <div class="bg-transparent text-dark-white z-50 my-5 shadow-2xl rounded-sm text-left-foreground lg:bg-light-primary">
                    <p class="p-5 text-right opacity-100">{{ project.getDescription() }}</p>
                </div>

                <div class="flex ml-auto">
                    <p v-for="tech in project.getStack()" :key="tech" class="p-2 text-accent">
                        {{ tech }}
                    </p>
                </div>

                <div class="flex ml-auto pr-2 mt-5">
                    <div v-if="project.getWebLink() !== ''">
                        <a :href="project.getWebLink()" target="_blank">
                            <img src="../assets/link.svg" class="white-icon h-5 self-center cursor-pointer mr-3"/>
                        </a>
                    </div>
                    <div v-if="project.getGithubLink() !== ''">
                        <a :href="project.getGithubLink()" target="_blank">
                            <img src="../assets/github.svg" class="white-icon h-5 self-center cursor-pointer"/>
                        </a>
                    </div>
                </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Project } from '@/classes/Project';
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class ProjectLeft extends Vue {
    @Prop()
    public project!: Project;

    public getImageSource(index: number): string {
        const imageSample: string[] = this.project.getImageSamples();
        return require('../assets/' + imageSample[index]);
    }
}
</script>