<template>
  <div class="background landing">
    <div class="container">
      <HomeHeader />
      <HomeSlider />
    </div>
    <HomeContent />
    <h2 class="thanks text-align-center">Thanks for watching!</h2>
    <p class="lead text-align-center">
      <a class="back-to-top" href="/">
        back to top <i class="bi bi-arrow-up-square"></i>
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from '../components/Home/HomeHeader.vue';
import HomeSlider from '../components/Home/HomeSlider.vue';
import HomeContent from '../components/Home/HomeContent.vue';
import { useStore } from '@/store';
import { ActionKeys } from '@/constants/enums/StoreKeys';
import { onMounted } from 'vue';

const store = useStore();
onMounted(() => {
  store.dispatch(ActionKeys.GET_USER, { name: 'test!' });
});
</script>
<style lang="scss">
body {
  padding-bottom: 0;
}
</style>
