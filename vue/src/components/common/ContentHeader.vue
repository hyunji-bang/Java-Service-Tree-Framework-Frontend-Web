<template>
  <div class="content-header">
    <div class="circle-logo"></div>
    <div class="page-summary">
      <h2 class="sub-title" v-html="subTitle"></h2>
      <p v-if="subText" v-html="subText"></p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  subTitle: String,
  subText: String,
});
</script>

<style lang="scss" scoped>
.content-header {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  .circle-logo {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    overflow: hidden;
    /*border-radius: 40px;*/
    background: url('@/assets/images/devops/logo.png') no-repeat center / cover;
  }
  .page-summary {
    align-self: center;
  }
}
</style>
