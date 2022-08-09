<template>
  <nav class="mobile-sidebar">
    <ul class="mobile-sidebar-menu">
      <li class="mobile-category" v-for="(list, idx) in menuList" :key="idx">
        <router-link
          :to="`/DevOps/Home/${list.title.replace(/(\s*)/g, '')}`"
          :class="{ 'mobile-menu-list': list.title == 'Welcome' }"
          class="mobile-side-menu-title mobile-treeview-menu-title"
          v-if="list.title == 'Welcome'"
        >
          <span>{{ list.title }}</span>
        </router-link>
        <router-link
          :to="`/DevOps/${list.title.replace(/(\s*)/g, '')}`"
          :class="{ 'mobile-menu-list': list.title == 'Welcome' }"
          class="mobile-side-menu-title mobile-treeview-menu-title"
          v-if="list.title !== 'Welcome'"
        >
          <span>{{ list.title }}</span>
        </router-link>
        <ul class="mobile-treeview-menu" id="mobile-treeview-menu-dev-support">
          <li
            class="mobile-detail-menu mobile-menu-list"
            v-for="(sublist, subidx) in list.children"
            :key="subidx"
          >
            <router-link
              :to="`/DevOps/${list.title.replace(/(\s*)/g, '')}/${sublist
                .replace(/(\s*)/g, '')
                .replace('?', '')}`"
              class="mobile-side-menu-title"
            >
              {{ sublist }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { onMounted, defineEmits, computed } from '@vue/runtime-core';
import { useStore } from '@/store';
const emit = defineEmits(['openMobileMenu']);
const store = useStore();
onMounted(() => {
  const link = document.querySelectorAll('.mobile-menu-list');
  link.forEach(list => {
    list.addEventListener('click', () => {
      emit('openMobileMenu');
    });
  });
});
const menuList = computed(() => {
  return store.state.navMenuList;
});
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
      .mobile-treeview-menu {
        margin-top: 20px;
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
