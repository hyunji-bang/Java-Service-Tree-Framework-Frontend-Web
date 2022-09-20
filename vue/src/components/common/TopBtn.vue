<template>
  <button type="button" id="top-btn" @click="scrollTop">
    <i class="bi bi-arrow-up"></i>
  </button>
</template>
<script setup>
const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
</script>
<style lang="scss" scoped>
#top-btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  position: fixed;
  z-index: 50;
  bottom: 20px;
  right: 20px;
  background-color: #666;
  color: #fff;
  animation: TopBtn 1.5s ease infinite;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  padding: 0;
}
@keyframes TopBtn {
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
