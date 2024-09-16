<template>
  <div class="layout-default">
    <moved-notification></moved-notification>
    <Nuxt />
    <div class="privacy">
      <RouterLink to="/privacy">Privacy</RouterLink>
    </div>
  </div>
</template>
<script>
import MovedNotification from "@/components/MovedNotification.vue";
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
  },
  components: {
    MovedNotification
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
