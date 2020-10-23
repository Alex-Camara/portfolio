<template>
  <div class="flex justify-center md:justify-start h-screen bg-primary">
    <hello class="md:mt-8 md:ml-24"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hello from '@/components/Hello.vue';
@Component({
  components: {
    Hello,
  },
})
export default class Home extends Vue {
}
</script>
