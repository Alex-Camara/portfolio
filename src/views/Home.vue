<template>
  <div class="flex justify-center md:justify-start h-screen bg-primary bg-blue-500">
    <hello :me="me" class="md:mt-32 lg:mt-0 md:ml-24"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Hello from '@/components/Hello.vue';
import { Me } from "@/classes/Me";
@Component({
  components: {
    Hello,
  },
})
export default class Home extends Vue {
  @Prop()
  public me!: Me;
}
</script>
