<template>
  <nav class="mobile-sidebar">
    <ul class="mobile-sidebar-menu">
      <li class="mobile-category mobile-menu-list">
        <router-link
          to="/DevOps/welcome"
          class="mobile-side-menu-title mobile-treeview-menu-title"
          data-index="0"
        >
          <span>Welcome</span>
        </router-link>
      </li>

      <li class="mobile-category">
        <div class="mobile-side-menu-title mobile-treeview-menu-title" data-index="1">
          <span>Dev Support</span>
          <!--<span class="pull-right-container"> </span>-->
        </div>
        <ul
          class="mobile-treeview-menu"
          id="mobile-treeview-menu-dev-support"
          data-index="1"
        >
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/ALM" class="mobile-side-menu-title">
              ALM
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/DevTools" class="mobile-side-menu-title">
              Dev Tools
            </router-link>
          </li>
        </ul>
      </li>

      <li class="mobile-category">
        <div class="mobile-side-menu-title mobile-treeview-menu-title" data-index="2">
          <span>About JSTF</span>
          <span class="pull-right-container"> </span>
        </div>
        <ul
          class="mobile-treeview-menu"
          id="mobile-treeview-menu-about-jstf"
          data-index="2"
        >
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/WhatisJSTF" class="mobile-side-menu-title">
              What is JSTF ?
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFIntroduction" class="mobile-side-menu-title">
              JSTF Introduction
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFGoals" class="mobile-side-menu-title">
              JSTF Goals
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFUsage" class="mobile-side-menu-title">
              JSTF Usage
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFDemoSHV" class="mobile-side-menu-title">
              JSTF Demo SHV
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFDemoSIV" class="mobile-side-menu-title">
              JSTF Demo SIV
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFDemoSDV" class="mobile-side-menu-title">
              JSTF Demo SDV
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFDemoTIV" class="mobile-side-menu-title">
              JSTF Demo TIV
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFFAQ" class="mobile-side-menu-title">
              JSTF FAQ
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFLicense" class="mobile-side-menu-title">
              JSTF License
            </router-link>
          </li>
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/JSTFDownload" class="mobile-side-menu-title">
              JSTF Download
            </router-link>
          </li>
        </ul>
      </li>

      <li class="mobile-category">
        <div class="mobile-side-menu-title mobile-treeview-menu-title" data-index="3">
          <span>Community</span>
          <span class="pull-right-container"> </span>
        </div>
        <ul
          class="mobile-treeview-menu"
          id="mobile-treeview-menu-community"
          data-index="3"
        >
          <li class="mobile-detail-menu mobile-menu-list">
            <router-link to="/DevOps/Contributors" class="mobile-side-menu-title">
              Contributors
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <button type="button" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
  </nav>
</template>
<script>
export default {
  name: 'MobileNav',
  components: {},
  data() {
    return {
      sampleData: '',
    };
  },
  mounted() {
    const link = document.querySelectorAll('.mobile-menu-list');
    const closeBtn = document.querySelector('.close-btn');
    link.forEach(list => {
      list.addEventListener('click', () => {
        document.querySelector('.mobile-sidebar ').style.transform = 'translateX(100%)';
      });
    });
    closeBtn.addEventListener('click', () => {
      document.querySelector('.mobile-sidebar ').style.transform = 'translateX(100%)';
    });
  },
};
</script>

<style lang="scss" scoped>
.mobile-sidebar {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  transition: 0.8s all;
  transform: translateX(100%);
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    color: #fff;
    font-size: 30px;
  }
  .mobile-sidebar-menu {
    padding: 60px;
    padding-left: 20%;
    li {
      font-size: 20px;
      .mobile-treeview-menu-title {
        margin-bottom: 8px;
      }
      &.mobile-category {
        margin-bottom: 20px;
      }
      .mobile-detail-menu {
        margin-left: 5%;
        margin-bottom: 8px;
        font-size: 16px;
      }
    }
  }
}
</style>
