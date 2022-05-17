<template>
  <div class="layout-default">
    <Nuxt />
    <div class="privacy">
      <RouterLink to="/privacy">Privacy</RouterLink>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: '/css/style.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap-reboot.min.css'
      }
    ]
  }
}
</script>
<style lang="scss" scoped>
.layout-default {
    .privacy {
      text-align: center;
      margin-bottom: 30px;

      a {
        color: white;
      }

  }
}
</style>
