<template>
  <div :class="color">
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-fluid">
        <span @mouseenter="logHover" @click="logClick" @mouseleave="logLeave"><nuxt-link to="/" class="navbar-brand" >Data Privacy Articles</nuxt-link></span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Articles</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown01">
                <li v-for="article of articles" @click="logClick" @mouseenter="logHover" @mouseleave="logLeave"><nuxt-link class="dropdown-item" :to="`/article/${article.slug}`">{{ article.title }}</nuxt-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="py-4 articles ">
      <div class="container">
        <Nuxt />

      </div>
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center pb-3 mb-3">
          <li class="nav-item"><nuxt-link to="/privacy" class="nav-link px-2 text-muted">Privacy</nuxt-link></li>
        </ul>
      </footer>
    </main>

  </div>


</template>
<script>
import articles from "@/mixins/articles";
import articleLogger from "../mixins/articleLogger";

export default {
  head: {
    link: [
      {
        'href': '/css/bootstrap.min.css',
        'rel': 'stylesheet'
      }
    ],
    script: [
      {
        'src': '/js/bootstrap.min.js',
        'type': 'text/javascript'
      }
    ]
  },
  mixins: [
    articles,
    articleLogger
  ]
}
</script>
<style lang="scss">

.articles {
  min-height: 100vh;
}

.navbar {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity))
}

.blue {
  .navbar, .btn-dark {
    background-color: #083f7e;
  }
}

.green {
  .navbar, .btn-dark {
    background-color: #005100;
  }

}

.red {
  .navbar, .btn-dark {
    background-color: #7e0c0c;
  }
}

.purple {
  .navbar, .btn-dark{
    background-color: #3c0779;
  }
}

.articles .container {
  min-height: calc(100vh - 200px);
}

</style>
