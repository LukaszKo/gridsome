<template>
  <Layout>
    <div class="flex mt-12 mb-12">
      <div class="w-full">
        <span class="font-medium text-xl">All Posts</span>
        <hr>
        <div class="flex flex-wrap mt-20">
          <Post
            class="w-full md:w-1/2 mx-4 my-4"
            v-for="post in $page.posts.edges"
            :post="post.node"
            :key="post.node.id"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id,
        path,
        title,
        excerpt,
        image
      }
    }
  }
}
</page-query>
<script>
import Post from "~/components/Post.vue";
export default {
  components: {Post},
  metaInfo: {
    title: "Gallery"
  },
  created() {
    console.log(this);
  }
};
</script>
<style  scoped>
.image {
  margin: 400px;
}
</style>