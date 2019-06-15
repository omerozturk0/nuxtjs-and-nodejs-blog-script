<template>
  <header class="masthead" :style="`background-image: url('${bgImg}')`">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",

    data() {
      return {
        bgImg: require('~/assets/img/home-bg.jpg')
      }
    }
  }
</script>
