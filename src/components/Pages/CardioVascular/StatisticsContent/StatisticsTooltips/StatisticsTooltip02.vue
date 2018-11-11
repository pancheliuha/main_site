<template>
    <Tooltip tooltip-id="statistics_02">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    Accessed <a href="http://stent4life.com.ua/association/" target="_blank">http://stent4life.com.ua/association/</a> Oct 2018
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'StatisticsTooltip02',
        components: {
            Tooltip
        }
    }
</script>
