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
  getMonitor: '/com/ext/jstree/springiBatis/core/monitor/list.do',
  alterNodeType: '/com/ext/jstree/springiBatis/core/alterNodeType.do',
  addNode: '/com/ext/jstree/springiBatis/core/addNode.do',
  removeNode: '/com/ext/jstree/springiBatis/core/removeNode.do',
  alterNode: '/com/ext/jstree/springiBatis/core/alterNode.do',
  moveNode: '/com/ext/jstree/springiBatis/core/moveNode.do',
};
const isMonitor = false;
</script>
<style lang="scss" scoped>
@import '@/assets/scss/JSTF.scss';
</style>
