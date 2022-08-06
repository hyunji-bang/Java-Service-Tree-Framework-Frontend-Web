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
    <WelcomeDevops v-if="$route.params.path == pathName.welcome" />
    <AlmDevops v-if="$route.params.path == pathName.DevSupport.alm" />
    <DevTools v-if="$route.params.path == pathName.DevSupport.DevTools" />
    <WhatJSTF v-if="$route.params.path == pathName.JSTF.what" />
    <JSTFIntroduction v-if="$route.params.path == pathName.JSTF.introduction" />
    <JSTFGoal v-if="$route.params.path == pathName.JSTF.goal" />
    <JSTFUsage v-if="$route.params.path == pathName.JSTF.usage" />
    <JSTFShv v-if="$route.params.path == pathName.JSTF.demoShv" />
    <JSTFFAQ v-if="$route.params.path == pathName.JSTF.faq" />
    <JSTFLicense v-if="$route.params.path == pathName.JSTF.license" />
    <JSTFDownload v-if="$route.params.path == pathName.JSTF.JSTFDownload" />
    <ContentFooter />
    <CopyRight />
    <TopBtn />
  </div>
</template>

<script setup>
import Header from '@/components/DevOps/common/HeaderLogo.vue';
import Navbar from '@/components/DevOps/common/NavBar.vue';
import CopyRight from '@/components/DevOps/common/CopyRight.vue';
import MobileNav from '@/components/DevOps/common/MobileNav.vue';
import ContentFooter from '@/components/DevOps/common/ContentFooter.vue';
import TopBtn from '@/components/DevOps/common/TopBtn.vue';

import WelcomeDevops from '@/components/DevOps/contents/WelcomeDevops.vue';
import AlmDevops from '@/components/DevOps/contents/AlmSupport.vue';
import DevTools from '@/components/DevOps/contents/DevToolsSupport.vue';
import WhatJSTF from '@/components/DevOps/contents/WhatJSTF.vue';
import JSTFIntroduction from '@/components/DevOps/contents/JSTFIntroduction.vue';
import JSTFGoal from '@/components/DevOps/contents/JSTFGoal.vue';
import JSTFUsage from '@/components/DevOps/contents/JSTFUsage.vue';
import JSTFFAQ from '@/components/DevOps/contents/JSTFFaq.vue';
import JSTFLicense from '@/components/DevOps/contents/JSTFLicense.vue';
import JSTFDownload from '@/components/DevOps/contents/JSTFDownload.vue';
import JSTFShv from '@/components/DevOps/contents/JSTFShv.vue';
import { onMounted, ref } from 'vue';

const openMobileMenu = ref(false);
const pathName = {
  welcome: 'welcome',
  DevSupport: {
    alm: 'ALM',
    DevTools: 'DevTools',
  },
  JSTF: {
    what: 'WhatisJSTF',
    introduction: 'JSTFIntroduction',
    goal: 'JSTFGoals',
    usage: 'JSTFUsage',
    demoShv: 'JSTFDemoSHV',
    demoSiv: 'JSTFDemoSIV',
    demoSdv: 'JSTFDemoSDV',
    demoTiv: 'JSTFDemoTIV',
    faq: 'JSTFFAQ',
    license: 'JSTFLicense',
    JSTFDownload: 'JSTFDownload',
  },
  community: {
    contributors: 'Contributors',
  },
};
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
