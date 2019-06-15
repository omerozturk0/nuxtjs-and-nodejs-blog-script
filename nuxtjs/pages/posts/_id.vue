<template>
  <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div v-html="post.content"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    layout: "postDetail",

    async fetch({ store, params }) {
      await store.dispatch('getPost', params.id)
    },

    computed: {
      ...mapGetters(['post'])
    }
  }
</script>

<style lang="scss">
  pre {
    font-family: Andale Mono,monospace,monospace !important;
    font-size: 14px !important;
    font-weight: 400;
    color: #35495e;
    letter-spacing: 0;
    padding: 10px;
    border: 1px solid #dbdfe1;
    border-radius: 4px;
    background-color: #fcfcfc;
  }
</style>
