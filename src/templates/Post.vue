<template>
  <Layout>
    <div class="markdown-body">
      <h1>{{ $page.post.title }}</h1>
      <g-image :src="$page.post.image" width="500"></g-image>
      <div v-html="$page.post.content" />
    </div>
  </Layout>

</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content,
    image
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>