<template>
  <div>
    <!-- Nav -->
    <Nav />

    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <nuxt />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
  import Nav from '~/components/statics/Nav';
  import Header from '~/components/statics/Header';
  import Footer from '~/components/statics/Footer';

  export default {
    components: { Nav, Header, Footer }
  }
</script>
