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
import { defineProps } from 'vue';
import JsDataTable from '@/components/DevOps/contents/AboutJSTF/component/JsDataTableBuild.vue';
import JsTreeBuild from '@/components/DevOps/contents/AboutJSTF/component/JsTreeBuild.vue';

const props = defineProps({
  DataUrlList: Array,
  columns: Array,
  rows: String,
  isMonitor: Boolean,
});
</script>
