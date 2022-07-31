<template>
  <header>
    <h1 id="logo">
      <router-link to="/">atlassian-<strong>RMS</strong></router-link>
    </h1>
    <button type="button" class="menu-bar"><i class="fa-solid fa-bars"></i></button>
  </header>
</template>
<script>
export default {
  name: 'HeaderLogo',
  mounted() {
    const menuBtn = document.querySelector('.menu-bar');
    menuBtn.addEventListener('click', () => {
      document.querySelector('.mobile-sidebar').style.transform = 'translateX(0)';
    });
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  #logo {
    margin: 30px 0 0 35px;
    a {
      display: block;
      font-size: 17px;
      strong {
        font-weight: 500;
      }
    }
  }
  .menu-bar {
    border: none;
    background: none;
    color: #fff;
    font-size: 20px;
    padding: 20px;
    display: none;
    cursor: pointer;
  }
}
@media (min-width: 375px) and (max-width: 991px) {
  header {
    .menu-bar {
      display: block;
    }
  }
}
</style>
