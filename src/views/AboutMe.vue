<template>
    <div ref="compAboutMe" class="flex flex-col h-full">

        <div class="flex flex-col p-4 lg:flex-row  mx-5 mt-5 lg:mx-24 lg:mt-20 my-auto">

                <div class="flex flex-col lg:w-9/12 lg:pr-10">
                    <section-title :title="title" data-aos="fade-down" data-aos-duration="3000" data-aos-once="true"/>
                    <div class="text-base lg:text-lg text-dark-white" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <p class="mt-4 mb-4">{{ paragraph1 }}</p>
                        <p class="mb-4">{{ paragraph2 }}</p>
                        <p class="mb-4">{{ paragraph3 }}</p>
                        <p>{{ paragraph4 }}</p>
                    </div>
                </div>

                <div class="flex h-full items-center m-5 lg:w-4/12 lg:ml-5">
                    <img src="../assets/me.jpg" class="rounded-md max-w-x1 lg:accent-filter hover:no-filter ease-in-out duration-300">
                </div>
        </div>

        <div class="flex flex-col p-4 mx-5 mt-2 lg:mx-24">

            <div class="flex flex-col lg:mx-auto">
                <p class="text-dark-white lg:text-lg">Some technologies I've recently used:</p>
                <div class="flex flex-col flex-wrap h-32 mt-4 ">
                    <div class="flex items-center pr-3 py-1 text-dark-white text-sm" v-for="interest in interests" :key="interest">
                        <p class="bullet-text order-2">{{ interest }}</p>
                        <div class="bullet order-1"></div>
                    </div>
                </div>
            </div>

            <div class="mt-8 flex flex-col lg:mx-auto" >
                <p class="text-dark-white lg:text-lg">Bucket list</p>
                <div class="flex flex-col flex-wrap mt-4">
                    <div class="flex items-center pr-3 py-1 text-dark-white text-sm" v-for="bucketItem in bucketList" :key="bucketItem">
                        <p class="bullet-text order-2">{{ bucketItem }}</p>
                        <div class="bullet order-1"></div>
                    </div>
                </div>
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
    private paragraph1 = 'Hi! I\'m Alex, a mexican software engineer.';
    private paragraph2 = 'I\'m advocated to create good quality software solutions. Eager to work as part of an awesome team to bring efficient solutions to complex problems.';
    private paragraph3 = 'I completed my bachelor of Software Engineering at Universidad Veracruzana, during the 2020 summer.';
    private paragraph4 = 'My hobbies include gardening, cooking, learning new things and playing with my cat. Lately I enjoy working on side projects '
                        + 'that help me acquire new skills as well as to learn how thing work. I am especially hooked with the use of Ruby on Rails as '
                        + 'an API REST backend service and Vue js to consume the API.';
    private interests = ["Vue", "Ruby on Rails", "Ruby", "JavaScript", "Flutter", "Web development", "Mobile"];
    private bucketList = ["Flutter"];

    public scrollToTop() {
        var rootElement = this.$refs.compAboutMe as HTMLDivElement;
        var offsets = rootElement.getBoundingClientRect();
        var top = offsets.top;
        window.scrollBy({
            top: top,
            behavior: 'smooth'});

        window.location.assign("#aboutMe");
    }
}
</script>