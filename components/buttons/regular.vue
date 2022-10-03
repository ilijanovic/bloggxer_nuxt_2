<template>
    <button
        class="md:w-36 transform w-full transition hover:bg-purple-800 bg-purple-700 text-center active:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        :class="{ disabled }" type="button">
        <div class="p-1 w-full items-center justify-center gap-2 flex">
            <slot cy="buttontext" v-if="!loading"></slot>
            <div cy="buttonloader" v-else class="loader"></div>
        </div>
    </button>
</template>
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
    props: {
        loading: {
            default: false
        },
        disabled: {
            default: false
        }
    }
})
</script>
<style scoped>
.disabled {
    background: lightgrey;
    color: gray;
    pointer-events: none;
    cursor: none;
}

.loader {
    border: 3px solid #f3f3f3;
    /* Light grey */
    border-top: 3px solid #727272;
    /* Blue */
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 400ms linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>