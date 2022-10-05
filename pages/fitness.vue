<template>
    <div>
        <div class="max-w-5xl text-center font-semibold mx-auto my-5">
            <p class="font-semibold my-5 text-gray-800 text-5xl">Fitness</p>
            <p class="text-gray-800">If you are fit and do enough sport, you will strengthen your immune system, among
                other things. You're
                less sick and don't catch every virus right away. Your heart and circulation also benefit from it and
                you can prevent many diseases. Osteoarthritis does not even develop if your knees are regularly in
                motion, for example. Work out a perfect training plan that you can easily integrate into your everyday
                life. Remember, a fit body has tight muscles and the excess weight gradually disappears.
            </p>
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


        const contents = await $content("fitness", { deep: true }).fetch()

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