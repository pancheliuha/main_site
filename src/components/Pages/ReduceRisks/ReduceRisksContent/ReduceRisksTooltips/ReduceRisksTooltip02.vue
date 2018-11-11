<template>
    <Tooltip :tooltip-id="tooltipId">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    Щоб дізнатись свою індивідуальну норму активності, будь
                    ласка, зверніться до свого сімейного лікаря.
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'ReduceRisksTooltip02',
        props: ['tooltipId'],
        components: {
            Tooltip
        }
    }
</script>
