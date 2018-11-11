<template>
    <Tooltip :tooltip-id="tooltipId">
        **
        <template slot="toopltip-content">
            <span class="toopltip-content-star">**</span>
            <div class="toopltip-content-text">
                <p>
                    World Health Organization. Global Atlas on Cardiovascular
                    Diseases Prevention and Control, 2011.
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'ReduceRisksTooltip05',
        props: ['tooltipId'],
        components: {
            Tooltip
        }
    }
</script>
