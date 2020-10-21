<template>
  <div class="Home">
    <navbar/>
    <!-- <hello/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Hello from '@/components/Hello.vue';
@Component({
  components: {
    navbar: Navbar,
    Hello,
  },
})
export default class Home extends Vue {

}
</script>
