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
        <JsDataTable :tableDataUrl="tableDataUrl" :columns="columns" dataSrc="" />
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
      isMonitor: true,
      DataUrlList: {
        getMonitor: '/com/ext/jstree/springHibernate/core/getMonitor.do',
      },
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/JSTF.scss';
</style>
