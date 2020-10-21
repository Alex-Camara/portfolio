<template>
  <div class="Home">
    <navbar/>
    <div class="flex">
      <contact/>
      <hello id="main" class="pt-24 md:pt-48"/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Hello from '@/components/Hello.vue';
import Contact from '@/components/Contact.vue';
@Component({
  components: {
    Navbar,
    Hello,
    Contact,
  },
})
export default class Home extends Vue {
  // private isNavbarActive = false;

  // blurContent(isActive :boolean){
  //   console.log(isActive)
  //   this.isNavbarActive = isActive;
  //   let element = document.getElementById("main");
  //   if (isActive){
  //     element!.classList.add("blur-screen");
  //   } else {
  //     element!.classList.remove("blur-screen");
  //   }
  //   console.log(element)
  // }
}
</script>
