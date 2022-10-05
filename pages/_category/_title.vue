<template>
    <div>
        <div class="gap-2 flex lg:flex-row flex-col-reverse justify-around">
            <div class="w-full justify-center flex">
                <nuxt-content class="prose  lg:prose-xl" :document="page"></nuxt-content>
            </div>

            <div class="flex  mx-auto flex-col gap-2">
                <a :href="'#'+toc.id" class="cursor-pointer" v-for="toc in page.toc">{{
                toc.text
                }}</a>
            </div>
        </div>
        <hr class="my-5">
        <p v-if="related.length" class="text-gray-800 my-5 text-center font-semibold text-3xl">Related articles</p>
        <div class="flex  gap-4 flex-wrap  justify-center">

            <nuxt-link v-for="content in related" :key="content.slug" :to="content.path">
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
import regularVue from "~/components/buttons/regular.vue"
import Regular from "~/components/buttons/regular.vue"
import dayjs from "dayjs"
export default Vue.extend({
    methods: {
        formatDate(date: string) {
            return dayjs(date).format("MMMM D, YYYY")
        }
    },
    components: { regularVue, Regular },
    async asyncData({ params, app: { $content } }) {
        let { category, title } = params

        const page = await $content(category + "/" + title).fetch()

        const related = await Promise.all(page.related.map((slug: string) => $content(category + "/" + slug).only(["title", "description", "path", "updatedAt"]).fetch()))

        return { page, related }
    },

    head() {
        return {

            //@ts-ignore
            title: this.page.title,
            meta: [
                {
                    hid: "keywords",
                    name: "keywords",
                    //@ts-ignore
                    content: this.page.keywords
                },
                {
                    hid: 'description',
                    name: 'description',
                    //@ts-ignore
                    content: this.page.description
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
                    content: this.page.title
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    //@ts-ignore
                    content: this.page.description
                },
                {
                    hid: 'apple-mobile-web-app-title',
                    name: 'apple-mobile-web-app-title',
                    //@ts-ignore
                    content: this.page.title
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    //@ts-ignore
                    content: `https://bloggxer.com` + this.page.path,
                },
            ],
        }
    },
    jsonld() {
        return {

            "@context": "https://schema.org",
            "@type": "NewsArticle",
            //@ts-ignore
            "headline": this.page.title,
            "author": [{
                "@type": "Person",
                "name": "Ilija Marijanovic",
                "url": "http://example.com/profile/janedoe123"
            }]

        }
    }
})

</script>