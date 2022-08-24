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
            dataSrc=""
          />
        </div>
      </div>
      <div class="content-section table-section">
        <JsDataTable
          :tableDataUrl="DataUrlList.getMonitor"
          :columns="columns"
          dataSrc=""
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
  { data: 'c_id' },
  { data: 'c_parentid' },
  { data: 'c_position' },
  { data: 'c_left' },
  { data: 'c_right' },
  { data: 'c_level' },
  { data: 'c_title' },
  { data: 'c_type' },
];
const DataUrlList = {
  getMonitor: '/com/ext/jstree/springHibernate/core/getMonitor.do',
  alterNodeType: '/com/ext/jstree/springHibernate/core/alterNodeType.do',
  addNode: '/com/ext/jstree/springHibernate/core/addNode.do',
  removeNode: '/com/ext/jstree/springHibernate/core/removeNode.do',
  alterNode: '/com/ext/jstree/springHibernate/core/alterNode.do',
  moveNode: '/com/ext/jstree/springHibernate/core/moveNode.do',
};
const isMonitor = true;
</script>
<style lang="scss">
@import '@/assets/scss/JSTF.scss';
</style>
