<template>
  <nav class="sidebar">
    <ul class="accordion" id="side-nav-bar">
      <li
        class="accordion-item"
        v-for="(list, idx) in navList"
        :key="idx"
        ref="detailList"
        :data-title="list.title.replace(/(\s*)/g, '')"
      >
        <div class="accordion-header" :id="`heading${idx}`">
          <router-link to="/Welcome" v-if="list.title == 'Welcome'" ref="firstmenu">
            <i :class="list.icon"></i>
            <span class="accordion-button">
              {{ list.title }}
            </span>
          </router-link>
          <a v-if="list.title !== 'Welcome'" class="accordion-button">
            <i :class="list.icon"></i>
            <span>
              {{ list.title }}
            </span>
          </a>

          <ul
            :id="`collapse${idx}`"
            class="accordion-collapse"
            data-bs-parent="#side-nav-bar"
          >
            <li
              class="accordion-body"
              v-for="(sublist, subIdx) in list.children"
              :key="subIdx"
            >
              <router-link
                :to="`/${list.title.replace(/(\s*)/g, '')}/${sublist
                  .replace(/(\s*)/g, '')
                  .replace('?', '')}`"
              >
                {{ sublist }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, ref, onMounted, watch } from '@vue/runtime-core';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
const store = useStore();
const navList = computed(() => {
  return store.state.navMenuList;
});
const detailList = ref([]);
const route = useRoute();
const path = route.path.split('/');

//active 되었던 메뉴 Unactive
const clickMenuRemoveActive = (list, titleEl) => {
  const newList = [...detailList.value];
  newList.splice(detailList.value.indexOf(list), 1);
  newList.forEach(newlist =>
    newlist.children[0].children[0].classList.remove('active-blue'),
  );
  titleEl.classList.add('active-blue');
};

//route path에 따라 일치하는 페이지 네비 active
const activeNavMenu = newPath => {
  detailList.value.forEach((list, idx) => {
    const title = list.dataset.title;
    const titleEl = list.children[0].children[0];
    const subMenuEl = list.children[0].children[1];
    newPath.includes(title)
      ? titleEl.classList.add('active-blue')
      : titleEl.classList.remove('active-blue');

    if (idx === 0) {
      list.addEventListener('click', () => clickMenuRemoveActive(list, titleEl));
    } else {
      subMenuEl.childNodes.forEach(node => {
        node.addEventListener('click', () => clickMenuRemoveActive(list, titleEl));
      });
    }
  });
};

watch(
  () => route.path,
  newPath => {
    if (newPath) activeNavMenu(newPath);
  },
);

onMounted(() => {
  activeNavMenu(path);
});
</script>

<style lang="scss" scoped>
nav.sidebar {
  position: absolute;
  top: 122px;
  left: 0;
  width: 190px;
  padding: 10px 0;
  font-weight: 300;
  .accordion {
    /* nav list li */
    .accordion-item {
      font-size: 13px;
      color: #fff;
      cursor: pointer;
      font-weight: 500;
      /* nav list title */
      .accordion-header {
        a {
          padding: 10px 20px;
          display: inline-block;
          width: 100%;
          position: relative;
          transition: rotate 0.5s;
          transform: rotate(0deg);
          .bi:nth-child(1) {
            margin-right: 10px;
          }
          .arrow {
            position: absolute;
            right: 0;
          }

          &.router-link-exact-active {
            color: lightblue !important;
          }
          &.active-blue {
            color: lightblue !important;
          }
        }
      }
      /* nav list submenu */
      .accordion-collapse {
        .accordion-body {
          a {
            margin-left: 20px;
            padding: 4px 20px 4px 30px;
            border-radius: 5px;
            &:hover {
              background: rgba(0, 0, 0, 0.07);
            }
          }
        }
      }
    }
  }
}
@media (min-width: 280px) and (max-width: 991px) {
  .sidebar {
    transform: translateX(-2000px);
    transition: 0.5s all;
  }
}
</style>
