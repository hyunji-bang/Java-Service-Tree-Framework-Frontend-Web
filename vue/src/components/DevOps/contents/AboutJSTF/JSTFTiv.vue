<template>
  <div class="conainer">
    <ContentHeader
      subTitle="jsTree Service Framework<sup>TSF</sup> Spring-Hibernate Demo"
    />
    <div class="content-section" style="margin-bottom: 20px">
      <div id="demo"></div>
    </div>
    <div class="content-section table-section">
      <JsDataTable :tableDataUrl="tableDataUrl" :columns="columns" dataSrc="rows" />
    </div>
  </div>
</template>
<script scoped>
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';
import JsDataTable from '@/components/DevOps/contents/AboutJSTF/JsDataTableBuild.vue';
//import $ from 'jquery';
//import 'jstree/dist/jstree.min.js';
//import 'jstree/dist/themes/default/style.min.css';
export default {
  components: {
    ContentHeader,
    JsDataTable,
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
    };
  },
};
</script>
