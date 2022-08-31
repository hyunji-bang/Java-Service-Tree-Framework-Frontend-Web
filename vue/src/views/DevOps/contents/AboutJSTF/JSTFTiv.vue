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
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';
import JSTFTemplate from '@/components/DevOps/JSTF/JSTFTemplate.vue';

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
  alterNodeType: '/com/ext/jstree/strutsiBatis/core/alterNodeType.action',
  addNode: '/com/ext/jstree/strutsiBatis/core/addNode.action',
  removeNode: '/com/ext/jstree/strutsiBatis/core/removeNode.action',
  alterNode: '/com/ext/jstree/strutsiBatis/core/alterNode.action',
  moveNode: '/com/ext/jstree/strutsiBatis/core/moveNode.action',
};
const isMonitor = false;
</script>
<style lang="scss" scoped>
@import '@/assets/scss/JSTF.scss';
</style>
