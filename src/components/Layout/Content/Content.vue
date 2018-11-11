<template>
    <main class="content">
        <slot></slot>
    </main>
</template>

<script>
    import Tooltip from '../../UI/Tooltip/Tooltip'

    export default {
        name: 'Content',
        components: {
            Tooltip
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import "./content.scss";
</style>