<template>
  <Header
    @openMobileMenu="openMobileMenu = !openMobileMenu"
    :btnActive="openMobileMenu"
  />
  <Navbar v-if="openMobileMenu == false" />
  <transition name="fade">
    <MobileNav v-if="openMobileMenu" @openMobileMenu="openMobileMenu = !openMobileMenu" />
  </transition>

  <div class="content-wrap">
    <router-view></router-view>
    <ContentFooter />
    <CopyRight />
    <TopBtn />
  </div>
</template>

<script setup>
import Header from '@/components/common/HeaderLogo.vue';
import Navbar from '@/components/common/NavBar.vue';
import CopyRight from '@/components/common/CopyRight.vue';
import MobileNav from '@/components/common/MobileNav.vue';
import ContentFooter from '@/components/common/ContentFooter.vue';
import TopBtn from '@/components/common/TopBtn.vue';

import { onMounted, ref } from 'vue';

const openMobileMenu = ref(false);

onMounted(() => {
  document.title = 'Java Service Tree Framework - DevOps Portal - 313 DEV GRP';
});
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
  transform: translateX(100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
}
.fade-enter-to,
.fade-leave-from {
  transform: translateX(0);
}
</style>
