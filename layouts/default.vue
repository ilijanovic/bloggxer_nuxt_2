<template>

    <div>
        <div class="border-b top-0 fixed flex w-full bg-white justify-between items-center z-10 p-10">
            <nuxt-link class="text-3xl text-gray-700 font-semibold" to="/">
                Bloggxer
            </nuxt-link>
            <div>
                <nuxt-link to="/">
                    <Regular>Articles</Regular>
                </nuxt-link>

            </div>
        </div>

        <div class="mt-32 p-4">
            <nuxt />
        </div>



    </div>
</template>

<script lang="ts">
import Vue from "vue"
import regularVue from "~/components/buttons/regular.vue";
import Regular from "~/components/buttons/regular.vue";
export default Vue.extend({
    components: {
        regularVue,
        Regular
    }
})
</script>
<style>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}

html {
    scroll-behavior: smooth;
}
</style>