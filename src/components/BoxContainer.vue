<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        nome: 'BoxContainer',
    })
</script>

<style scoped>
    .box {
        background: #FAF0CA;
    }

</style>