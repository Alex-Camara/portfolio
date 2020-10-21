<template>
  <div class="Home">
    <navbar/>
    <contact/>
    <!-- <hello class="pt-24"/> -->
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

}
</script>
