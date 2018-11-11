<template>
    <Tooltip :tooltip-id="tooltipId">
        **
        <template slot="toopltip-content">
            <span class="toopltip-content-star">**</span>
            <div class="toopltip-content-text">
                <p>
                    Accessed World Health Organization. Global Atlas
                    on Cardiovascular Diseases Prevention and Control, 2011
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'ReduceRisksTooltip07',
        props: ['tooltipId'],
        components: {
            Tooltip
        }
    }
</script>
