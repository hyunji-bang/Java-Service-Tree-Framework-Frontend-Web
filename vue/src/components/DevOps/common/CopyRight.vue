<template>
  <footer class="copyrightLayer">
    <span
      ><strong
        >Copyright © 2010-2021
        <router-link to="/DevOps/welcome">313 DEV GRP</router-link>. All rights
        reserved.</strong
      ></span
    >
  </footer>
</template>
<script>
export default {
  name: 'CopyRight',
};
</script>

<style lang="scss" scoped>
.copyrightLayer {
  z-index: 1;
  position: relative;
  margin-top: 5px;
  color: #d6d6d6;
  float: right;
  margin-right: 39px;
  font-size: 13px;
  padding-bottom: 100px;
}
</style>
