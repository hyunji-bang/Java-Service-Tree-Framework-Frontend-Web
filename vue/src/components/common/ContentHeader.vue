<template>
  <div class="content-header">
    <img
      class="circle-logo"
      src="@/assets/images/devops/WWW313COKR.png"
      alt="User Image"
    />
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
  .circle-logo {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  .page-summary {
    align-self: center;
  }
}
</style>
