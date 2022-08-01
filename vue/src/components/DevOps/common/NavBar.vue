<template>
  <nav class="sidebar">
    <ul class="sidebar-menu">
      <li class="category">
        <router-link
          to="/DevOps/welcome"
          class="side-menu-title page-list treeview-menu-title"
          @click="openMenu"
          data-index="0"
        >
          <i class="bi bi-house-door-fill"></i>
          <span>Welcome</span>
        </router-link>
      </li>

      <li class="category">
        <div
          class="side-menu-title treeview-menu-title"
          @click="openMenu"
          data-bs-toggle="collapse"
          data-bs-target="#treeview-menu-dev-support"
          data-index="1"
        >
          <i class="bi bi-motherboard-fill"></i>
          <span>Dev Support</span>
          <span class="pull-right-container">
            <i class="bi bi-chevron-left arrow"></i>
          </span>
        </div>
        <ul class="treeview-menu collapse" id="treeview-menu-dev-support" data-index="1">
          <li class="detail-menu">
            <router-link to="/DevOps/ALM" class="side-menu-title page-list">
              ALM
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/DevTools" class="side-menu-title page-list">
              Dev Tools
            </router-link>
          </li>
        </ul>
      </li>

      <li class="category">
        <div
          class="side-menu-title treeview-menu-title"
          @click="openMenu"
          data-bs-toggle="collapse"
          data-bs-target="#treeview-menu-about-jstf"
          data-index="2"
        >
          <i class="bi bi-mortarboard-fill"></i>
          <span>About JSTF</span>
          <span class="pull-right-container">
            <i class="bi bi-chevron-left arrow"></i>
          </span>
        </div>
        <ul class="treeview-menu collapse" id="treeview-menu-about-jstf" data-index="2">
          <li class="detail-menu">
            <router-link to="/DevOps/WhatisJSTF" class="side-menu-title page-list">
              What is JSTF ?
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFIntroduction" class="side-menu-title page-list">
              JSTF Introduction
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFGoals" class="side-menu-title page-list">
              JSTF Goals
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFUsage" class="side-menu-title page-list">
              JSTF Usage
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFDemoSHV" class="side-menu-title page-list">
              JSTF Demo SHV
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFDemoSIV" class="side-menu-title page-list">
              JSTF Demo SIV
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFDemoSDV" class="side-menu-title page-list">
              JSTF Demo SDV
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFDemoTIV" class="side-menu-title page-list">
              JSTF Demo TIV
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFFAQ" class="side-menu-title page-list">
              JSTF FAQ
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFLicense" class="side-menu-title page-list">
              JSTF License
            </router-link>
          </li>
          <li class="detail-menu">
            <router-link to="/DevOps/JSTFDownload" class="side-menu-title page-list">
              JSTF Download
            </router-link>
          </li>
        </ul>
      </li>

      <li class="category">
        <div
          class="side-menu-title treeview-menu-title"
          @click="openMenu"
          data-bs-toggle="collapse"
          data-bs-target="#treeview-menu-community"
          data-index="3"
        >
          <i class="bi bi-people-fill"></i> <span>Community</span>
          <span class="pull-right-container">
            <i class="bi bi-chevron-left arrow"></i>
          </span>
        </div>
        <ul class="treeview-menu collapse" id="treeview-menu-community" data-index="3">
          <li class="detail-menu">
            <router-link to="/DevOps/Contributors" class="side-menu-title page-list">
              Contributors
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script scoped>
export default {
  name: 'NavBar',
  methods: {
    openMenu(e) {
      e.currentTarget.classList.toggle('active');
      this.clickedMenuIndex = e.currentTarget.dataset.index;
    },
  },
  data() {
    return {
      clickedMenuIndex: 0,
      activeCategory: 0,
    };
  },
  mounted() {
    const selectedMenu =
      document.querySelector('.router-link-active').parentNode.parentNode;
    const pageList = document.querySelectorAll('.page-list');
    const treeviewMenu = document.querySelectorAll('.treeview-menu-title');
    const mobileMenu = document.querySelectorAll('.mobile-menu-list');

    //현재 페이지 메뉴 활성화
    if (selectedMenu.classList[0] === 'treeview-menu') {
      selectedMenu.classList.add('show');
      selectedMenu.previousSibling.classList.add('active');
      this.clickedMenuIndex = selectedMenu.previousSibling.dataset.index;
      addActiveColor(Number(this.clickedMenuIndex));
    }

    treeviewMenu.forEach(menu => {
      menu.addEventListener('click', () =>
        toggleOpenSideMenu(Number(this.clickedMenuIndex)),
      );
    });

    pageList.forEach((list, idx) => {
      if (list.classList.contains('router-link-active')) {
        this.activeCategory = list.parentNode.parentNode.dataset.index;
      }
      const activeClickedPCMenu = () => {
        self.activeCategory = list.parentNode.parentNode.dataset.index;
        addActiveColor(Number(self.activeCategory));
      };
      const activeClickedMobileMenu = idx => {
        idx === 0
          ? (self.activeCategory = 0)
          : (self.activeCategory = list.parentNode.parentNode.dataset.index);
        activeClickedPCMenu();
        toggleOpenSideMenu(Number(self.activeCategory));
      };

      list.addEventListener('click', () => activeClickedPCMenu());
      mobileMenu[idx].addEventListener('click', () => activeClickedMobileMenu(idx));
    });

    //메뉴 오픈시 다른 메뉴들은 닫기
    function toggleOpenSideMenu(index) {
      const newList = [...treeviewMenu];
      newList.splice(index, 1);
      newList.forEach(list => {
        list.classList.remove('active');
        if (list.nextSibling) {
          list.nextSibling.classList.remove('show');
        }
      });
    }
    //active 된 메뉴 color 추가
    function addActiveColor(activeIndex) {
      treeviewMenu.forEach((menu, idx) => {
        if (activeIndex === idx) {
          menu.style.color = 'lightblue';
        } else {
          menu.style.color = 'white';
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
nav.sidebar {
  position: absolute;
  top: 122px;
  left: 0;
  width: 190px;
  padding: 10px 0;
  font-weight: 300;
  ul {
    li {
      a.router-link-exact-active {
        color: lightblue !important;
      }
    }
    > li {
      width: 190px;
      font-size: 13px;
      color: #fff;
      cursor: pointer;
      font-weight: 300;

      .side-menu-title {
        position: relative;
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 6px;
        font-weight: 500;

        &:hover,
        &:focus {
          background: rgba(0, 0, 0, 0.07);
        }
        &.active {
          .arrow {
            transform: rotate(-90deg);
            transform-origin: center center;
          }
        }
        .arrow {
          transform: rotate(0deg);
          transition: 0.5s transform;
        }
      }
      &.category {
        > .side-menu-title {
          padding: 10px 20px;
        }
      }
      &.detail-menu {
        > .side-menu-title {
          padding: 4px 20px;
          padding-left: 50px;
        }
      }

      .bi {
        margin-right: 10px;
      }
      .bi-chevron-left {
        position: absolute;
        right: 0;
        top: 12px;
      }
    }
  }
}
@media (min-width: 375px) and (max-width: 991px) {
  .sidebar {
    transform: translateX(-2000px);
    transition: 0.5s all;
  }
}
</style>
