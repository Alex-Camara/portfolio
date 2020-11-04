<template>
    <div ref="compExperience" class="flex h-full mt-20 lg:h-screen">
      <div class="flex flex-col lg:items-center my-auto mx-8 lg:mx-auto">
        <div class="lg:w-7/12" data-aos="fade-down" data-aos-duration="2000">
          <section-title :title="title"/>
        </div>
        <tab-table class="lg:w-7/12 mt-14" data-aos="fade-up" data-aos-duration="1000"/>
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