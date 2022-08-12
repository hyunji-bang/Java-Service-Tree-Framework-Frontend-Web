<template>
  <footer id="home-footer">
    <h2>Thanks for watching!</h2>
    <p>
      <button type="button" ref="topBtn">
        back to top <i class="bi bi-chevron-up"></i>
      </button>
    </p>
  </footer>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const topBtn = ref(null);

onMounted(() => {
  topBtn.value.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });
});
</script>

<style lang="scss" scoped>
#home-footer {
  padding: 60px 0 40px 0;
  text-align: center;
  h2 {
    font-size: 30px;
    line-height: 40px;
    margin: 10px 0;
  }
  p {
    font-size: 19.5px;
    margin-bottom: 20px;
    line-height: 1.4;
  }
  button {
    border: none;
    background-color: transparent;
    color: #ffff;
  }
}
</style>
