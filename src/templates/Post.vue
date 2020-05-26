<template>
  <Layout>
    <div class="flex items-center justify-center py-12">
      <div class="max-w-4xl rounded overflow-hidden shadow-lg">
        <g-image :src="$page.post.image" class="w-full" height="500" width="500" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{$page.post.title}}</div>
          <p class="text-gray-700 text-base">{{$page.post.excerpt}}</p>
        </div>
        <div class="flex flex-wrap px-6 py-4 items-center">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#photography</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#travel</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String) {
  post: post (path: $path) {
    title
    excerpt,
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