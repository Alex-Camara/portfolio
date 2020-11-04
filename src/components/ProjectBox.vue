<template>
    <div class="flex flex-col bg-light-primary p-5 m-3 items-center rounded-md project-box">

        <div id="project-header" class="flex w-full justify-between">
            <img src="../assets/folder.svg" class="blue-icon h-10 self-center cursor-pointer mr-3"/>
            <div class="flex">
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

        <div id="project-info" class="flex flex-col">
            <p class="text-white font-bold my-5">{{ project.getName() }}</p>
            <p class="text-dark-white">{{ project.getDescription() }}</p>
        </div>

        <div id="project-technology-stack" class="flex place-self-start mt-5 h-full">
            <p v-for="tech in project.getStack()" :key="tech" class="text-dark-white text-sm pr-3 mt-auto">
                {{ tech }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Project } from '@/classes/Project';
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class ProjectBox extends Vue {
    @Prop()
    public project!: Project;
}
</script>