<template>
    <div class="flex flex-col h-screen items-center bg-primary">
        <div class="w-5/6 lg:w-7/12">
          <section-title :title="title"/>
        </div>
        <tab-table class="w-5/6 lg:w-7/12 mt-14"/>
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
}
</script>