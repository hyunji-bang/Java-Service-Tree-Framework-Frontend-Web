<template>
  <Header />
  <Navbar />
  <MobileNav />
  <div class="content-wrap">
    <WelcomeDevops v-if="$route.params.path == pathName.welcome" />
    <AlmDevops v-if="$route.params.path == pathName.DevSupport.alm" />
    <WhatJSTF v-if="$route.params.path == pathName.JSTF.what" />
    <JSTFIntroduction v-if="$route.params.path == pathName.JSTF.introduction" />
    <JSTFGoal v-if="$route.params.path == pathName.JSTF.goal" />
    <JSTFUsage v-if="$route.params.path == pathName.JSTF.usage" />
    <JSTFFAQ v-if="$route.params.path == pathName.JSTF.faq" />
    <JSTFLicense v-if="$route.params.path == pathName.JSTF.license" />
    <ContentFooter />
    <footer class="copyrightLayer">
      <span
        ><strong
          >Copyright © 2010-2021
          <router-link to="/DevOps/welcome">313 DEV GRP</router-link>. All rights
          reserved.</strong
        ></span
      >
    </footer>
  </div>
</template>

<script lang="ts">
import Header from '@/components/DevOps/common/HeaderLogo.vue';
import Navbar from '@/components/DevOps/common/NavBar.vue';
import MobileNav from '@/components/DevOps/common/MobileNav.vue';
import ContentFooter from '@/components/DevOps/common/ContentFooter.vue';
import WelcomeDevops from '@/components/DevOps/contents/WelcomeDevops.vue';
import AlmDevops from '@/components/DevOps/contents/AlmSupport.vue';
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
    ContentFooter,
    WelcomeDevops,
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

<style lang="scss">
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
