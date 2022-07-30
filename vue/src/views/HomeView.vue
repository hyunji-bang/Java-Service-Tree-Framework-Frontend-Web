<template>
  <div id="wrapper">
    <div class="container">
      <HomeHeader />
      <HomeSlide />
    </div>
    <HomeContent />
    <footer>
      <h2>Thanks for watching!</h2>
      <p>
        <a class="back-to-top" href="/"> back to top <i class="bi bi-chevron-up"></i> </a>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from '../components/Home/HomeHeader.vue';
import HomeSlide from '../components/Home/HomeSlide.vue';
import HomeContent from '../components/Home/HomeContent.vue';
import { useStore } from '@/store';
import { ActionKeys } from '@/constants/enums/StoreKeys';
import { onMounted } from 'vue';

const store = useStore();
onMounted(() => {
  store.dispatch(ActionKeys.GET_USER, { name: 'test!' });
});
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 0 15px;
}
footer {
  padding: 60px 0 40px 0;
  text-align: center;
  h2 {
    font-size: 30px;
    line-height: 40px;
    margin: 10px 0;
  }
  p {
    font-size: 19.5px;
    margin-bottom: 20px;
    line-height: 1.4;
  }
}
</style>
