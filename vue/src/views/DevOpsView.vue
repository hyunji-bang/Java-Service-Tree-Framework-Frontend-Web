<template>
  <Header />
  <Navbar />
  <MobileNav />
  <div class="content-wrap">
    <WelcomeDevops v-if="$route.params.path == pathName.welcome" />
    <AlmDevops v-if="$route.params.path == pathName.DevSupport.alm" />
    <DevTools v-if="$route.params.path == pathName.DevSupport.DevTools" />
    <WhatJSTF v-if="$route.params.path == pathName.JSTF.what" />
    <JSTFIntroduction v-if="$route.params.path == pathName.JSTF.introduction" />
    <JSTFGoal v-if="$route.params.path == pathName.JSTF.goal" />
    <JSTFUsage v-if="$route.params.path == pathName.JSTF.usage" />
    <JSTFFAQ v-if="$route.params.path == pathName.JSTF.faq" />
    <JSTFLicense v-if="$route.params.path == pathName.JSTF.license" />
    <ContentFooter />
    <CopyRight />
    <TopBtn />
  </div>
</template>

<script lang="ts">
import Header from '@/components/DevOps/common/HeaderLogo.vue';
import Navbar from '@/components/DevOps/common/NavBar.vue';
import CopyRight from '@/components/DevOps/common/CopyRight.vue';
import MobileNav from '@/components/DevOps/common/MobileNav.vue';
import ContentFooter from '@/components/DevOps/common/ContentFooter.vue';
import TopBtn from '@/components/TopBtn.vue';

import WelcomeDevops from '@/components/DevOps/contents/WelcomeDevops.vue';
import AlmDevops from '@/components/DevOps/contents/AlmSupport.vue';
import DevTools from '@/components/DevOps/contents/DevToolsSupport.vue';
import WhatJSTF from '@/components/DevOps/contents/WhatJSTF.vue';
import JSTFIntroduction from '@/components/DevOps/contents/JSTFIntroduction.vue';
import JSTFGoal from '@/components/DevOps/contents/JSTFGoal.vue';
import JSTFUsage from '@/components/DevOps/contents/JSTFUsage.vue';
import JSTFFAQ from '@/components/DevOps/contents/JSTFFaq.vue';
import JSTFLicense from '@/components/DevOps/contents/JSTFLicense.vue';

export default {
  name: 'DevOps',
  components: {
    Header,
    Navbar,
    MobileNav,
    CopyRight,
    TopBtn,
    ContentFooter,
    WelcomeDevops,
    DevTools,
    AlmDevops,
    WhatJSTF,
    JSTFIntroduction,
    JSTFGoal,
    JSTFUsage,
    JSTFFAQ,
    JSTFLicense,
  },
  data() {
    return {
      pathName: {
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
      },
    };
  },
};
</script>

<style lang="scss"></style>
