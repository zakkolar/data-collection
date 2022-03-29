<template>
  <div>
    <Nuxt />
    <div class="privacy">
      <a href="#" @click.prevent>Privacy</a>
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
  a {
    color: white;
  }
}

</style>
