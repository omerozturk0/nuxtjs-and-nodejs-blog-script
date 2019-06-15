<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">

        <div v-for="post in posts">
          <div class="post-preview">
            <nuxt-link :to="`/posts/${post._id}`">
              <h2 class="post-title">{{ post.title }}</h2>
              <h3 class="post-subtitle">{{ post.subtitle }}</h3>
            </nuxt-link>
            <p class="post-meta">
              Posted by
              <a href="#" @click.prevent="authorUrl(post.author)">{{ post.author }}</a>
              on {{ post.created_at | dateFormat }}
            </p>
            <button class="btn btn-sm btn-danger" id="deletePostBtn" @click="deletePost(post._id)">
              <i class="fa fa-trash-alt"></i>
            </button>
          </div>

          <hr>
        </div>

        <!-- Pager -->
        <div class="pager clearfix">
          <button
            class="btn btn-primary float-left"
            @click.prevent="prevPageUrl"
            v-show="paginate.hasPrevPage">&larr; Newest Posts
          </button>
          <button
            class="btn btn-primary float-right"
            @click.prevent="nextPageUrl"
            v-show="paginate.hasNextPage">Older Posts &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Moment from 'moment';
  import { mapGetters } from 'vuex';

  export default {
    async fetch({store, query}) {
      await store.commit('queryParams', query)
      await store.dispatch('getPosts')
    },

    watchQuery: ['page', 'author'],

    computed: {
      ...mapGetters(['posts', 'paginate', 'queryParams'])
    },

    methods: {
      deletePost(post) {
        this.$store.dispatch('deletePost', post)
      },

      authorUrl(author) {
        this.$store.commit('queryParams', {page: 1, author})

        this.$nuxt.$router.push(`/?${this.queryParams}`)
      },

      prevPageUrl() {
        this.$store.commit('queryParams', {page: this.paginate.prevPage})

        this.$nuxt.$router.push(`/?${this.queryParams}`)
      },

      nextPageUrl() {
        this.$store.commit('queryParams', {page: this.paginate.nextPage})

        this.$nuxt.$router.push(`/?${this.queryParams}`)
      }
    },

    filters: {
      dateFormat(date_string) {
        return Moment(date_string).format('LL');
      }
    }
  }
</script>

<style lang="scss">
  .post-preview {
    position: relative;

    &:hover {
      > #deletePostBtn {
        display: block;
      }
    }

    #deletePostBtn {
      position: absolute;
      top: 0;
      right: 0;
      padding: 2px 6px;
      font-size: 12px;
      display: none;
    }
  }
</style>
