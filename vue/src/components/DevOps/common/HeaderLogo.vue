<template>
  <header>
    <h1 id="logo">
      <router-link to="/">atlassian-<strong>RMS</strong></router-link>
    </h1>
  </header>
</template>
<script>
export default {
  name: 'HeaderLogo',
};
</script>

<style lang="scss" scoped>
header {
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
}
</style>
