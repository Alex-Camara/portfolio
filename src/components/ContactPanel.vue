<template>
  <div class="hidden lg:visible lg:flex justify-center top-0 left-0 h-screen w-24 fixed z-30 bg-primary">
    <div class="flex flex-col pt-64">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Me } from "@/classes/Me";
@Component
export default class ContactPanel extends Vue {
  @Prop()
  public me!: Me;
}
</script>