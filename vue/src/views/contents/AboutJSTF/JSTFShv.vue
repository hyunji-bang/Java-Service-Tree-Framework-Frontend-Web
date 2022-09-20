<template>
  <div class="conainer">
    <ContentHeader
      subTitle="jsTree Service Framework<sup>TSF</sup> Spring-Hibernate Demo"
    />
    <JSTFTemplate
      :DataUrlList="DataUrlList"
      :columns="columns"
      :isMonitor="isMonitor"
      rows=""
    />
  </div>
</template>
<script setup scoped>
import ContentHeader from '@/components/common/ContentHeader.vue';
import JSTFTemplate from '@/components/JSTF/JSTFTemplate.vue';
import { getCurrentInstance } from '@vue/runtime-core';

const { proxy } = getCurrentInstance();

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
  getData: proxy.$api.shv.getMonitor,
  alterNodeType: proxy.$api.shv.alterNodeType,
  addNode: proxy.$api.shv.addNode,
  removeNode: proxy.$api.shv.removeNode,
  alterNode: proxy.$api.shv.alterNode,
  moveNode: proxy.$api.shv.moveNode,
};

const isMonitor = true;
</script>
<style lang="scss">
@import '@/assets/scss/JSTF.scss';
</style>
