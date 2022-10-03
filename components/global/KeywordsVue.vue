<template>

    <div class="flex gap-2 flex-wrap">
        <small class="bg-purple-500 text-white p-2 rounded" v-for="keyword in keywords"
            :key="keyword">{{keyword}}</small>
    </div>
</template>
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    props: {
        keywords: {
            default: () => ([])
        }
    }
})

</script>