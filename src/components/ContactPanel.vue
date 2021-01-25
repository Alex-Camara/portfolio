<template>
    <div class="flex lg:flex-col lg:pt-64 justify-between w-7/12 lg:w-24 lg:justify-center mx-auto items-center"
    data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200" data-aos-once="true">
        <a :href="me.getGithubLink()" target="_blank">
          <img src="../assets/github.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce" />
        </a>
        <a :href="me.getTelegramLink()" target="_blank">
          <img src="../assets/telegram.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce"/>
        </a>
        <a :href="me.getLinkedinLink()" target="_blank">
          <img src="../assets/linkedin.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce"/>
        </a>
        <a :href="me.getInstagramLink()" target="_blank">
          <img src="../assets/instagram.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce"/>
        </a>
        <a :href="me.getTwitterLink()" target="_blank">
          <img src="../assets/twitter.svg" class="white-icon h-4 my-4 cursor-pointer animate-bounce"/>
        </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Me } from '@/classes/Me';
@Component
export default class ContactPanel extends Vue {
  @Prop()
  public me!: Me;
}
</script>