<template>
    <div ref="compExperience" class="grid grid-cols-1 w-11/12 h-screen">
      <div class="flex flex-col items-center lg:mt-20 my-auto">
        <div class="w-5/6 lg:w-7/12" data-aos="fade-up" data-aos-duration="2000">
          <section-title :title="title"/>
        </div>
        <tab-table class="w-5/6 lg:w-7/12 mt-14" data-aos="fade-up" data-aos-duration="1000"/>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TabTable from '@/components/TabTable.vue';
import SectionTitle from '@/components/SectionTitle.vue';
@Component({
  components: {
    TabTable,
    SectionTitle,
  },
})
export default class Experience extends Vue {
    private title = 'Experience';

    public scrollToTop() {
        var rootElement = this.$refs.compExperience as HTMLDivElement;
        var offsets = rootElement.getBoundingClientRect();
        var top = offsets.top;
        window.scrollBy({
            top: top,
            behavior: 'smooth'});
    }
}
</script>