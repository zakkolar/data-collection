<template>
  <div>
    <Nuxt />
    <div class="privacy">
      <RouterLink to="/privacy">Privacy</RouterLink>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
@import '~/assets/style.css';
@import '~/assets/bootstrap-reboot.min.css';

.privacy {
  text-align: center;
  margin-bottom: 30px;
  a {
    color: white;
  }
}

</style>
