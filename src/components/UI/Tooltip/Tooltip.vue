<template>
    <span
            class="tooltip-btn"
            v-tooltip="{content: () => tooltipTemplate, autohide:true, trigger: 'click focus', hideOnTargetClick: true}">
        <slot></slot>
    </span>
</template>

<script>

    export default {
        name: 'Tooltip',

        data() {
            return {
                tooltipTemplate: `
                    <div>
                        some tooltip content
                    </div>
                `
            }
        }
    }
</script>

<style lang="scss">
    @import './tooltip';
</style>