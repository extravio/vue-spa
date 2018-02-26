<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post, index) in posts" v-bind:key="post.id">
      <app-post :link="post.link">
        <h3 slot="title" v-html="post.title.rendered"></h3>
        <span slot="content" v-html="post.excerpt.rendered"></span>
      </app-post>
    </div>
  </div>
</template>

<script>
  import Post from './Post'
  import appService from '../js/app.service'

  export default {
    components: {
      'app-post' : Post
    },
    data() {
      return {
        id: this.$route.params.id, 
        posts: []
      }
    },
    methods: {
      loadPosts () {
        let categoryId = 2;
        if (this.id === 'mobile') {
            categoryId = 11;
        }  
        appService.getPosts(categoryId, (data) => { this.posts = data });
      }, 
    },
    created () {
      this.loadPosts(); // execute the loadPosts method every time the component is created
    },
    watch: { // reload the posts when the route has changed
        '$route' (to, from) {
          this.id = to.params.id;
          this.loadPosts();
        }
    }
  }
</script>
