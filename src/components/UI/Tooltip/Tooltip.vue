<template>
    <div
            class="tooltip-wrapper"
            v-tooltip="{html: tooltipId, placement: 'top', offset: 30, delay: 500}">
        <slot></slot>
        <div :id="tooltipId" class="tooltip-content">
            <slot name="toopltip-content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tooltip',
        props: ['tooltipContents', 'tooltipId'],
    }
</script>

<style lang="scss">
    @import './tooltip';
</style>