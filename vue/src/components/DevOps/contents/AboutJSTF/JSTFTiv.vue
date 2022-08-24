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
