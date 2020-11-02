<template>
    <div class="flex flex-col h-auto items-center bg-primary mt-10">
        <div class="w-10/12">
            <section-title :title="title" class=""/>
        </div>

        <div v-for="(project, index) in projects" :key="project.getId()">
            <project-left v-if="index%2" :project="project" class="w-10/12 mx-auto m-20" />
            <project-right v-else :project="project" class="w-10/12 mx-auto m-20" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SectionTitle from '@/components/SectionTitle.vue';
import ProjectLeft from '@/components/ProjectLeft.vue';
import ProjectRight from '@/components/ProjectRight.vue';
import { Project } from '../classes/Project';
@Component({
  components: {
    SectionTitle,
    ProjectLeft,
    ProjectRight,
  },
})
export default class MyProjects extends Vue {
    private title = 'Projects I\'ve worked on';
    private projects: Project[] = [];

    private created() {
        const progefiImageSamples = ['progefi.png'];
        const progefiDescription = 'Desktop application aimed to provide full '
                                    + 'support to biologist and technicians in '
                                    + 'their labor to generate and manage photocollect data-cards.'
                                    + ' Currently in production.';
        const progefiStack = ['Electron', 'Vue', 'Node', 'SQLite'];
        const progefiWebLink = 'https://alex-camara.github.io/PROGEFI/';
        const progefiGithubLink = 'https://github.com/Alex-Camara/PROGEFI';

        const progefiProject = new Project(1, 'PROGEFI', 'web', progefiDescription, progefiGithubLink,
                                            progefiWebLink, progefiStack, progefiImageSamples);

        const obemeAndroidImageSamples = ['obeme1.png', 'obeme2.png', 'obeme3.png'];
        const obemeAndroidDescription = 'Android app aimed to recolect data from medical students during their residence in hospitals.'
                                        + ' Currently in production.';;
        const obemeAndroidStack = ['Android', 'Kotlin', 'Room'];

        const obemeAndroidWebLink = '';
        const obemeAndroidGithubLink = 'https://github.com/TequilaCoders/OBEME-Android';

        const obemeAndroidProject = new Project(2, 'VemeObeme App', 'movil', obemeAndroidDescription, obemeAndroidGithubLink,
                                            obemeAndroidWebLink, obemeAndroidStack, obemeAndroidImageSamples);

        this.projects.push(progefiProject, obemeAndroidProject);
    }
}
</script>