<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <form @submit.prevent="savePost">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Title</label>
              <input type="text" class="form-control" placeholder="Title" v-model="form.title">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Subtitle</label>
              <input type="text" class="form-control" placeholder="Subtitle" v-model="form.subtitle">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Author</label>
              <input type="text" class="form-control" placeholder="Author" v-model="form.author">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Content</label>
              <no-ssr placeholder="Loading...">
                <vue-editor v-model="form.content"></vue-editor>
              </no-ssr>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div class="form-group">
            <button class="btn btn-primary" @click.prevent="savePost">Save Post</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          subtitle: '',
          author: '',
          content: ''
        }
      }
    },

    methods: {
      savePost() {
        this.$axios.$post('http://localhost:8080/posts', this.form)
          .then(resp => {
            if (resp) {
              this.form = {
                title: '',
                subtitle: '',
                author: '',
                content: ''
              }
            }
          })
      }
    }
  }
</script>

