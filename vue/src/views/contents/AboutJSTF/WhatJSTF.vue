<template>
  <div class="conainer">
    <ContentHeader subTitle="What is jsTree Service Framework?" />
    <div class="content-section">
      <img
        src="@/assets/images/devops/JSTF/javaServiceTreeFramework.jpg"
        alt="javaServiceTreeFramework"
        class="javaServiceTreeFramework"
      />
    </div>
  </div>
</template>
<script setup>
import ContentHeader from '@/components/common/ContentHeader.vue';
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
