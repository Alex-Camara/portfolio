<template>
    <div class="flex flex-col h-screen items-center bg-primary">
        <div class="flex w-7/12">
            <div class="border h-0 lg:w-5/6 my-auto ml-10 mr-4 border-dark-white"></div>
            <div class="text-white text-xl font-bold lg:text-2xl">{{ title }}</div>
        </div>
        <tab-table class="w-7/12 mt-14"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TabTable from '@/components/TabTable.vue';
@Component({
  components: {
    TabTable,
  },
})
export default class Experience extends Vue {
    private title = 'Experience';
}
</script>