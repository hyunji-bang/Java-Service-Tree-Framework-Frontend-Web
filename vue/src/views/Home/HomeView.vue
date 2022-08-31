<template>
  <div id="wrapper">
    <div class="container">
      <HomeHeader />
      <HomeSlide />
    </div>
    <HomeContent />
    <HomeFooter />
  </div>
</template>

<script setup>
import HomeHeader from '@/components/Home/HomeHeader.vue';
import HomeSlide from '@/components/Home/HomeSlide.vue';
import HomeContent from '@/components/Home/HomeContent.vue';
import HomeFooter from '@/components/Home/HomeFooter.vue';
import { useStore } from '@/store';
import { ActionKeys } from '@/constants/enums/StoreKeys';
import { onMounted } from 'vue';

const store = useStore();
onMounted(() => {
  store.dispatch(ActionKeys.GET_USER, { name: 'test!' });
  document.title = 'Atlassian RMS';
});
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 0 15px;
}
@media (min-width: 280px) and (max-width: 750px) {
  .container {
    width: 100%;
  }
}
</style>
