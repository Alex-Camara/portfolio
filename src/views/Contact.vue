<template>
    <div ref="compContact" class="flex flex-col h-screen bg-primary">
        <div class="my-auto" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200" data-aos-once="true">

            <div class="flex mx-auto w-full">
                <div class="border-2 h-0 my-auto ml-2 border-light-primary w-4/12 lg:w-5/12 "></div>
                <div class="text-accent text-center w-6/12 text-xl lg:w-2/12">{{ title }}</div>
                <div class="border-2 h-0 my-auto mr-2 border-light-primary w-4/12 lg:w-5/12"></div>
            </div>

            <div class="lg:w-8/12 mx-auto mt-16 lg:mt-5">
                <p class="text-dark-white text-3xl lg:text-4xl text-center font-bold">{{ subtitle }}</p>
            </div>

            <div class="mt-5 mx-8 lg:mx-auto lg:w-6/12">
                <p class="text-dark-white text-lg text-center">{{ message }}</p>
            </div>

            <div class="lg:w-3/12 mx-8 lg:mx-auto mt-16 lg:mt-10">
                <button  @click="openEmail()" class="regular-button w-full">{{ buttonText }}</button>
            </div>

        </div>

        <contact-panel :me="me" class="lg:hidden h-24 my-5"/>

    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SectionTitle from '@/components/SectionTitle.vue';
import ContactPanel from '@/components/ContactPanel.vue';
import { Me } from "@/classes/Me";
@Component({
  components: {
    ContactPanel,
  },
})
export default class Contact extends Vue {
    @Prop()
    public me!: Me;

    private title = 'Contact info';
    private subtitle = 'Get In Touch! ;)';
    private buttonText = 'Say Hi!';
    private message = 'I\'m currently open to new job opportunities, so if you\'re interested '
                    +   'I\'d love to hear back from you. If you want to make a request, suggest '
                    +   'an improvement, report an error or you simply want to say hi, my inbox is always open!';

    public scrollToTop() {
        var rootElement = this.$refs.compContact as HTMLDivElement;
        var offsets = rootElement.getBoundingClientRect();
        var top = offsets.top;
        window.scrollBy({
            top: top,
            behavior: 'smooth'});
    }

    public openEmail(): void {
      location.href = 'mailto:' + this.me.getEmail() + '?subject=Hello!&body=Hi,%20Alex!';
    }
}
</script>