<template>
    <div ref="compProjects" class="flex flex-col h-auto items-center bg-primary mt-20 pt-20">
        <div class="w-10/12">
            <section-title :title="title" data-aos="fade-down" data-aos-duration="3000"/>
        </div>

        <div v-for="(project, index) in projects" :key="project.getId()">
            <div v-if="project.isPinned()">
                <project-left v-if="!index%2" :project="project" class="w-10/12 mx-auto m-20" />
                <project-right v-else :project="project" class="w-10/12 mx-auto m-20" />
            </div>
        </div>

        <p class="text-white mx-auto font-bold my-10 text-xl">{{ subtitle }}</p>

        <div class="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center">
            <project-box :project="project" v-for="(project, index) in notPinnedProjects" :key="project.getId()" class="lg:w-3/12" data-aos="fade-up" data-aos-duration="2000" :data-aos-delay="(100*index) + 100"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SectionTitle from '@/components/SectionTitle.vue';
import ProjectLeft from '@/components/ProjectLeft.vue';
import ProjectRight from '@/components/ProjectRight.vue';
import ProjectBox from '@/components/ProjectBox.vue';
import { Project } from '../classes/Project';
@Component({
  components: {
    SectionTitle,
    ProjectLeft,
    ProjectRight,
    ProjectBox,
  },
})
export default class MyProjects extends Vue {
    private title = 'Projects I\'ve worked on';
    private subtitle = 'Other projects';
    private projects: Project[] = [];

    public scrollToTop() {
        var rootElement = this.$refs.compProjects as HTMLDivElement;
        var offsets = rootElement.getBoundingClientRect();
        var top = offsets.top;
        window.scrollBy({
            top: top,
            behavior: 'smooth'});
    }

    public get notPinnedProjects() {
        let notPinnedProjects = [];
        for (let i = 0; i < this.projects.length; i++) {
            if (!this.projects[i].isPinned()) {
                notPinnedProjects.push(this.projects[i])
            }
        }
        return notPinnedProjects;
    }

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
                                            progefiWebLink, progefiStack, progefiImageSamples, true);

        const obemeAndroidImageSamples = ['obeme1.png', 'obeme2.png', 'obeme3.png'];
        const obemeAndroidDescription = 'Android app aimed to recolect data from medical students during their residence in hospitals.'
                                        + ' Currently in production.';
        const obemeAndroidStack = ['Android', 'Kotlin', 'Room'];

        const obemeAndroidWebLink = '';
        const obemeAndroidGithubLink = 'https://github.com/TequilaCoders/OBEME-Android';

        const obemeAndroidProject = new Project(2, 'VemeObeme App', 'movil', obemeAndroidDescription, obemeAndroidGithubLink,
                                            obemeAndroidWebLink, obemeAndroidStack, obemeAndroidImageSamples, true);

        const tequilaIDEImageSamples = [];
        const tequilaIDEDescription = 'Real time collaborative Integrated Development Environment Application. It allows'
                                + 'users to create and contribute in real time, manipulating Java, C++ and Python files.';
        const tequilaIDEStack = ['Java', 'Node', 'Socket.io', 'JavaFX'];

        const tequilaIDEWebLink = '';
        const tequilaIDEGithubLink = '';

        const tequilaIDEProject = new Project(3, 'Tequila IDE', 'desktop', tequilaIDEDescription, tequilaIDEGithubLink,
                                    tequilaIDEWebLink, tequilaIDEStack, tequilaIDEImageSamples, false);


        const roombaImageSamples = [];
        const roombaDescription = 'Distributed desktop music player designed to share, store, and organize music';
        const roombaStack = ['Java', 'Python', 'MySQL', 'Ubuntu Server'];

        const roombaWebLink = '';
        const roombaGithubLink = '';

        const roombaProject = new Project(4, 'Roomba Music', 'desktop', roombaDescription, roombaGithubLink,
                                    roombaWebLink, roombaStack, roombaImageSamples, false);

        const obemeBackendImageSamples = [];
        const obemeBackendDescription = 'Backend infrastructure providing the services to the android and web clients.';
        const obemeBackendStack = ['Kotlin', 'Spring Boot', 'PostgreSQL', 'GCP'];

        const obemeBackendWebLink = '';
        const obemeBackendGithubLink = '';

        const obemeBackendProject = new Project(5, 'ObemeVeme Backend', 'web', obemeBackendDescription, obemeBackendGithubLink,
                                    obemeBackendWebLink, obemeBackendStack, obemeBackendImageSamples, false);

        const cincoEnUnoImageSamples = [];
        const cincoEnUnoDescription = 'Cinco en Línea game with artificial intelligence';
        const cincoEnUnoStack = ['Java', 'Socket.io', 'IA'];

        const cincoEnUnoWebLink = '';
        const cincoEnUnoGithubLink = '';

        const cincoEnLineaProject = new Project(6, 'Cinco en Línea', 'web', cincoEnUnoDescription, cincoEnUnoGithubLink,
                                    cincoEnUnoWebLink, cincoEnUnoStack, cincoEnUnoImageSamples, false);

        this.projects.push(progefiProject, obemeAndroidProject, tequilaIDEProject, roombaProject, obemeBackendProject, cincoEnLineaProject);
    }
}
</script>