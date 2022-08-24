<template>
  <div class="conainer">
    <ContentHeader
      subTitle="jsTree Service Framework<sup>TSF</sup> Spring-Hibernate Demo"
    />
    <div class="content-box">
      <div class="treebox">
        <div class="content-section tree-section" style="margin-bottom: 20px">
          <JsTreeBuild
            :DataUrlList="DataUrlList"
            :isMonitor="isMonitor"
            :columns="columns"
            dataSrc="rows"
          />
        </div>
      </div>
      <div class="content-section table-section">
        <JsDataTable
          :tableDataUrl="DataUrlList.getMonitor"
          :columns="columns"
          dataSrc="rows"
        />
      </div>
    </div>
  </div>
</template>
<script setup scoped>
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';
import JsDataTable from '@/components/DevOps/contents/AboutJSTF/component/JsDataTableBuild.vue';
import JsTreeBuild from '@/components/DevOps/contents/AboutJSTF/component/JsTreeBuild.vue';
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
