<template>
    <div>
        <div class=" gap-2 flex lg:flex-row flex-col-reverse justify-evenly">
            <nuxt-content class="prose mx-auto lg:prose-xl" :document="page"></nuxt-content>
            <div class="flex mx-auto flex-col gap-2">
                <a :href="'#'+toc.id" class="cursor-pointer" v-for="toc in page.toc">{{
                toc.text
                }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import regularVue from "~/components/buttons/regular.vue"
import Regular from "~/components/buttons/regular.vue"
export default Vue.extend({
    components: { regularVue, Regular },
    async asyncData({ params, app: { $content } }) {
        let { category, title } = params

        const page = await $content(category + "/" + title).fetch()
        console.log(page)
        return { page }
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