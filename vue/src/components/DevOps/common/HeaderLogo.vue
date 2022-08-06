<template>
  <header>
    <h1 id="logo">
      <router-link to="/">atlassian-<strong>RMS</strong></router-link>
    </h1>
    <button
      type="button"
      class="menu-bar"
      @click="$emit('openMobileMenu')"
      v-bind:class="{ active: btnActive }"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  btnActive: Boolean,
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;

  #logo {
    margin: 30px 0 0 35px;
    a {
      display: block;
      font-size: 1.05rem;
      strong {
        font-weight: 500;
      }
    }
  }
  .menu-bar {
    position: absolute;
    z-index: 120;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    color: #fff;
    font-size: 20px;
    padding: 20px;
    display: none;
    cursor: pointer;
    &.active span {
      transition: 0.25s margin, 0.25s transform 0.25s;
      &:nth-child(1) {
        margin-top: 4px;
        margin-bottom: -2px;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        margin-top: -4px;
        transform: rotate(135deg);
      }
    }
    span {
      display: block;
      background: #fff;
      width: 25px;
      height: 3px;
      border-radius: 20px;
      transition: 0.25s margin 0.25s, 0.25s transform;
      &:nth-child(1) {
        margin-bottom: 4px;
      }
      &:nth-child(3) {
        margin-top: 4px;
      }
    }
  }
}

@media (min-width: 280px) and (max-width: 991px) {
  header {
    #logo {
      margin: 30px 0 0 20px;
    }
    .menu-bar {
      display: block;
    }
  }
}
</style>
