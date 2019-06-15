<template>
  <header class="masthead" :style="`background-image: url('${bgImg}')`">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
            <h1>{{ post.title }}</h1>
            <h2 class="subheading">{{ post.subtitle }}</h2>
            <span class="meta">Posted by <nuxt-link :to="`/posts/${post._id}`">{{ post.author }}</nuxt-link> on {{ post.created_at | dateFormat }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Moment from 'moment';
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        bgImg: require('~/assets/img/post-bg.jpg')
      }
    },

    computed: {
      ...mapGetters(['post'])
    },

    filters: {
      dateFormat(date_string) {
        return Moment(date_string).format('LL');
      }
    }
  }
</script>
