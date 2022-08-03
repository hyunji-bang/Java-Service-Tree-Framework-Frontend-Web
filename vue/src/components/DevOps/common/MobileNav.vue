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
  </nav>
</template>
<script>
export default {
  name: 'MobileNav',
  mounted() {
    const link = document.querySelectorAll('.mobile-menu-list');
    link.forEach(list => {
      list.addEventListener('click', () => {
        this.$emit('openMobileMenu');
      });
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
  /*transition: 0.5s all;
  transform: translateX(100%);*/
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background: none;
    color: #fff;
    font-size: 39px;
  }
  .mobile-sidebar-menu {
    width: 100%;
    padding: 6rem 0 0 15%;
    li {
      font-size: 1.5rem;
      .mobile-treeview-menu-title {
        margin-bottom: 20px;
      }
      &.mobile-category {
        margin-bottom: 2rem;
        color: lightblue;
      }
      .mobile-detail-menu {
        margin-left: 20px;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        color: #fff;
      }
    }
  }
}
</style>
