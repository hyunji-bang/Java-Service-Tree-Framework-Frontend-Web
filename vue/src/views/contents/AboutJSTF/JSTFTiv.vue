<template>
  <div class="conainer">
    <ContentHeader
      subTitle="jsTree Service Framework<sup>TSF</sup> Spring-Hibernate Demo"
    />
    <JSTFTemplate
      :DataUrlList="DataUrlList"
      :columns="columns"
      :isMonitor="isMonitor"
      rows="rows"
    />
  </div>
</template>
<script setup scoped>
import ContentHeader from '@/components/common/ContentHeader.vue';
import JSTFTemplate from '@/components/JSTF/JSTFTemplate.vue';
import { getCurrentInstance } from '@vue/runtime-core';
const { proxy } = getCurrentInstance();

const columns = [
  {
    data: 'cell.0',
  },
  {
    data: 'cell.1',
  },
  {
    data: 'cell.2',
  },
  {
    data: 'cell.3',
  },
  {
    data: 'cell.4',
  },
  {
    data: 'cell.5',
  },
  {
    data: 'cell.6',
  },
  {
    data: 'cell.7',
  },
];

const DataUrlList = {
  getMonitor: '/com/ext/jstree/strutsiBatis/core/monitor/list.action',
  getData: proxy.$api.tiv.getMonitor,
  alterNodeType: proxy.$api.tiv.alterNodeType,
  addNode: proxy.$api.tiv.addNode,
  removeNode: proxy.$api.tiv.removeNode,
  alterNode: proxy.$api.tiv.alterNode,
  moveNode: proxy.$api.tiv.moveNode,
};
const isMonitor = false;
</script>
<style lang="scss">
@import '@/assets/scss/JSTF.scss';
</style>
