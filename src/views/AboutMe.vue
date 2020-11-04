<template>
    <div ref="compAboutMe" class="flex flex-col h-full lg:h-screen bg-primary">

        <div class="flex flex-col p-4 lg:flex-row  mx-5 mt-5 lg:mx-40 lg:mt-20 my-auto">

                <div class="flex flex-col lg:w-7/12">
                    <section-title :title="title" data-aos="fade-down" data-aos-duration="3000" data-aos-once="true"/>
                    <div class="text-base lg:text-lg text-dark-white" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <p class="mt-4 mb-8">{{ paragraph1 }}</p>
                        <p class="mb-8">{{ paragraph2 }}</p>
                        <p class="mb-8">{{ paragraph3 }}</p>
                        <p>{{ paragraph4 }}</p>
                    </div>
                </div>

                <div class="flex h-full items-center m-5 lg:w-4/12 lg:ml-5">
                    <img src="../assets/me.jpg" class="rounded-md max-w-x1 lg:accent-filter hover:no-filter ease-in-out duration-300">
                </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator';
import SectionTitle from '@/components/SectionTitle.vue';
@Component({
  components: {
    SectionTitle,
  },
})
export default class AboutMe extends Vue {
    private title = 'About me';
    private paragraph1 = 'Hi! I\'m Alejandro, a mexican software engineer.';
    private paragraph2 = 'I\'m advocated to create good quality software solutions. Eager to work as part of an awesome team to bring efficient solutions to complex problems.';
    private paragraph3 = 'I completed my bachelor of Software Engineering at Universidad Veracruzana, during the 2020 summer.';
    private paragraph4 = 'My hobbies include playing with my cat, watching my cat play, watching my cat sleep, taking pictures of my cat and so on…!';
    
    public scrollToTop() {
        var rootElement = this.$refs.compAboutMe as HTMLDivElement;
        var offsets = rootElement.getBoundingClientRect();
        var top = offsets.top;
        window.scrollBy({
            top: top,
            behavior: 'smooth'});
    }
}
</script>