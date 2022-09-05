<template>
  <div class="content-box">
    <div class="treebox">
      <div class="content-section tree-section" style="margin-bottom: 20px">
        <JsTreeBuild
          :DataUrlList="DataUrlList"
          :isMonitor="isMonitor"
          :columns="columns"
          :dataSrc="rows"
        />
      </div>
    </div>
    <div class="content-section table-section">
      <JsDataTable
        :tableDataUrl="DataUrlList.getMonitor"
        :columns="columns"
        :dataSrc="rows"
      />
    </div>
  </div>
</template>
<script setup>
import JsDataTable from '@/components/DevOps/JSTF/JsDataTableBuild.vue';
import JsTreeBuild from '@/components/DevOps/JSTF/JsTreeBuild.vue';

const props = defineProps({
  DataUrlList: Object,
  columns: Array,
  rows: String,
  isMonitor: Boolean,
});
</script>
