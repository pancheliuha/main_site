<template>
    <Tooltip tooltip-id="statistics_04">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    World Health Organization. Global Atlas on Cardiovascular
                    Diseases Prevention and Control, 2011
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'StatisticsTooltip04',
        components: {
            Tooltip
        }
    }
</script>
