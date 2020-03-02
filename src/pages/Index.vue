<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image
      alt="Example image"
      src="~/favicon.png"
      width="135"
    />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a
        href="https://gridsome.org/docs/"
        target="_blank"
        rel="noopener"
      >Gridsome Docs</a>
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
      >GitHub</a>
    </p>

    <ul>
      <li
        v-for="post in $page.posts.edges"
        :key="post.id"
      >
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id,
        path,
        title
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  async created() {
    fetch("https://vibrant-lovelace-496f72.netlify.com/.netlify/functions/hello").then(res =>
      console.log(res)
    );
  }
};
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>
