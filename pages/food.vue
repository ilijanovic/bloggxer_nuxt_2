<template>
    <div>
        <div class="max-w-5xl text-center font-semibold mx-auto my-5">
            <h1 class="font-semibold my-5 text-gray-800 text-5xl">Food</h1>
            <p class="text-gray-800">{{description}}</p>
        </div>
        <hr class="my-5">
        <div class="flex flex-wrap justify-around gap-2">

            <nuxt-link v-for="content in contents" :key="content.slug" :to="content.path">
                <div style="min-height: 250px"
                    class="max-w-sm hover:shadow-lg  flex flex-col gap-2 transition-all cursor-pointer border rounded p-4 w-full">
                    <h3 class="mb-5 text-purple-800 font-semibold text-2xl">{{content.title}}</h3>
                    <small class="text-gray-800">{{content.description}}</small>
                    <div class="flex mt-auto items-center justify-between">
                        <small class="text-gray-500">{{formatDate(content.updatedAt)}}</small>
                        <Regular>Read</Regular>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>

</template>
<script lang="ts">

import Vue from "vue"
import dayjs from "dayjs"
import regularVue from "~/components/buttons/regular.vue"
import Regular from "~/components/buttons/regular.vue"
export default Vue.extend({
    async asyncData({ app: { $content } }) {


        const contents = await $content("food", { deep: true }).fetch()

        return {
            contents,
            description: `Here you will find out everything you need to know about how to handle food
                properly: Read what is important when it comes to purchasing, storing and preparing food so that healthy
                nutrition can also be implemented successfully.` }
    },
    components: {
        regularVue,
        Regular
    },
    head() {
        return {
            link: [{
                rel: 'canonical',
                //@ts-ignore
                href: 'https://bloggxer.com/food'
            }],
            //@ts-ignore
            title: "Bloggxer - Read what is important when it comes to purchasing, storing and preparing food so that healthy nutrition can also be implemented successfully.",
            meta: [
                {
                    hid: "keywords",
                    name: "keywords",
                    //@ts-ignore
                    content: ["food", "eating", "health"]
                },
                {
                    hid: 'description',
                    name: 'description',
                    //@ts-ignore
                    content: this.description
                },

                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: "Bloggxer"
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    //@ts-ignore
                    content: "Bloggxer - Read what is important when it comes to purchasing, storing and preparing food so that healthy nutrition can also be implemented successfully.",
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    //@ts-ignore
                    content: this.description
                },
                {
                    hid: 'apple-mobile-web-app-title',
                    name: 'apple-mobile-web-app-title',
                    //@ts-ignore
                    content: "Bloggxer - Read what is important when it comes to purchasing, storing and preparing food so that healthy nutrition can also be implemented successfully.",
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    //@ts-ignore
                    content: `https://bloggxer.com/food`,
                },
            ],
        }
    },
    methods: {
        formatDate(date: string) {
            return dayjs(date).format("MMMM D, YYYY")
        }
    }
})

</script>