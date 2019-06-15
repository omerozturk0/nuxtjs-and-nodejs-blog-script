<template>
  <div>
    <!-- Nav -->
    <Nav />

    <!-- Header -->
    <PostDetailHeader />

    <!-- Main Content -->
    <nuxt />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
  import Nav from '~/components/statics/Nav';
  import PostDetailHeader from '~/components/statics/PostDetailHeader';
  import Footer from '~/components/statics/Footer';

  export default {
    components: { Nav, PostDetailHeader, Footer }
  }
</script>
