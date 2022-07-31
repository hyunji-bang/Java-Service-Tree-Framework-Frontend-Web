<template>
  <div class="conainer">
    <ContentHeader subTitle="What is jsTree Service Framework?" />
    <div class="content-section">
      <img
        src="../../../assets/images/devops/JSTF/javaServiceTreeFramework.jpg"
        alt="javaServiceTreeFramework"
        class="javaServiceTreeFramework"
      />
    </div>
  </div>
</template>
<script>
import ContentHeader from '@/components/DevOps/common/ContentHeader.vue';
export default {
  name: 'WhatJSTF',
  components: {
    ContentHeader,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  place-content: center;
  .javaServiceTreeFramework {
    width: 100%;
  }
}
</style>
