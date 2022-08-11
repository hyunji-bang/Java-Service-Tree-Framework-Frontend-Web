<template>
  <div class="conainer">
    <ContentHeader
      subTitle="jsTree Service Framework<sup>TSF</sup> Spring-Hibernate Demo"
    />
    <div class="content-section" style="margin-bottom: 20px">
      <div id="demo"></div>
    </div>
    <div class="content-section table-section">
      <JsDataTable :tableDataUrl="tableDataUrl" :columns="columns" dataSrc="" />
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
      tableDataUrl: '/com/ext/jstree/springHibernate/core/getMonitor.do',
      columns: [
        { data: 'c_id' },
        { data: 'c_parentid' },
        { data: 'c_position' },
        { data: 'c_left' },
        { data: 'c_right' },
        { data: 'c_level' },
        { data: 'c_title' },
        { data: 'c_type' },
      ],
    };
  },
};
</script>
