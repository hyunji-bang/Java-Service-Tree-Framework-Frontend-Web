<template>
  <div class="conainer">
    <ContentHeader
      subTitle="jsTree Service Framework<sup>TSF</sup> Spring-Hibernate Demo"
    />
    <div class="content-box">
      <div class="treebox">
        <div class="content-section tree-section" style="margin-bottom: 20px">
          <JsTreeBuild :DataUrlList="DataUrlList" :isMonitor="isMonitor" />
        </div>
      </div>
      <div class="content-section table-section">
        <JsDataTable :tableDataUrl="tableDataUrl" :columns="columns" dataSrc="rows" />
      </div>
    </div>
  </div>
</template>
<script scoped>
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';
import JsDataTable from '@/components/DevOps/contents/AboutJSTF/JsDataTableBuild.vue';
import JsTreeBuild from '@/components/DevOps/contents/AboutJSTF/JsTreeBuild.vue';

export default {
  components: {
    ContentHeader,
    JsDataTable,
    JsTreeBuild,
  },
  data() {
    return {
      tableDataUrl: '/com/ext/jstree/strutsiBatis/core/monitor/list.action',
      columns: [
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
      ],
      isMonitor: false,
      DataUrlList: {
        getMonitor: '/com/ext/jstree/strutsiBatis/core/monitor/list.action',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/JSTF.scss';
</style>
