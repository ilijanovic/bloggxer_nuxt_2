<template>

  <div class="flex flex-wrap gap-2">
    <nuxt-link v-for="content in contents" :key="content.slug" :to="content.path">
      <div class="max-w-sm hover:shadow-lg flex flex-col gap-2 transition-all cursor-pointer border rounded p-4 w-full">
        <h3 class="mb-5 text-purple-800 font-semibold text-2xl">{{content.title}}</h3>
        <small class="text-gray-800">{{content.description}}</small>
        <div class="flex items-center justify-between">
          <small class="text-gray-500">{{formatDate(content.updatedAt)}}</small>
          <Regular>Read</Regular>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script lang="ts">

import Vue from "vue"
import dayjs from "dayjs"
import regularVue from "~/components/buttons/regular.vue"
import Regular from "~/components/buttons/regular.vue"
export default Vue.extend({
  async asyncData({ app: { $content } }) {


    const contents = await $content("", { deep: true }).fetch()

    return { contents }
  },
  components: {
    regularVue,
    Regular
  },
  methods: {
    formatDate(date: string) {
      return dayjs(date).format("MMMM D, YYYY")
    }
  }
})

</script>