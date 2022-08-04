<template>
  <ul class="contextMenu" ref="contextmenu">
    <li class="has-submenu">
      <div>
        <span>Create</span>
        <span>»</span>
      </div>
      <ul class="sub-context-menu">
        <li class="context-list">
          <div>file</div>
        </li>
        <li class="context-list">
          <div>folder</div>
        </li>
      </ul>
    </li>
    <li class="context-list">
      <div>Rename</div>
    </li>
    <li class="context-list">
      <div>Delete</div>
    </li>
    <li class="has-submenu">
      <div>
        <span>Edit</span>
        <span>»</span>
      </div>
      <ul class="sub-context-menu">
        <li class="context-list">
          <div class="context-list">Cut</div>
        </li>
        <li class="context-list">
          <div>Copy</div>
        </li>
        <li class="context-list">
          <div>Paste</div>
        </li>
        <li class="context-list">
          <div>Change Type</div>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ContextMenu',
  props: {
    top: Number,
    left: Number,
  },
  watch: {
    top(top) {
      this.$refs.contextmenu.style.top = `${top}px`;
    },
    left(left) {
      this.$refs.contextmenu.style.left = `${left}px`;
    },
  },
  mounted() {
    this.$refs.contextmenu.style.cssText = `top:${this.top}px; left:${this.left}px`;
  },
};
</script>
<style lang="scss">
.contextMenu {
  width: 180px;
  background: rgba(51, 51, 51, 0.95);
  position: absolute;
  li {
    font-size: 13px;
  }
  > li {
    position: relative;
    cursor: pointer;
    padding: 2px 10px;

    &:hover {
      background: #e8eff7;
      color: #000;
    }
    &.has-submenu {
      div {
        display: flex;
        justify-content: space-between;
      }
    }
    &.has-submenu:hover .sub-context-menu {
      display: block;
    }
    .sub-context-menu {
      width: 180px;
      position: absolute;
      background: rgba(51, 51, 51, 0.95);
      top: 0;
      left: 100%;
      display: none;
      > li {
        padding: 2px 10px;
        color: #fff;
        &:hover {
          background: #e8eff7;
          color: #000;
        }
      }
    }
  }
}
</style>
