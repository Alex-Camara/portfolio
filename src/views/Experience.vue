<template>
    <div ref="compExperience" class="flex h-full lg:h-screen">
      <div class="flex flex-col lg:items-center my-auto mx-8 lg:mx-32">
        <div class="lg:w-9/12" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
          <section-title :title="title"/>
        </div>
        <tab-table class="lg:w-9/12 mt-14" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"/>
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
        const rootElement = this.$refs.compExperience as HTMLDivElement;
        const offsets = rootElement.getBoundingClientRect();
        const top = offsets.top;
        window.scrollBy({
            top,
            behavior: 'smooth'});

        window.location.assign('#experience');
    }
}
</script>