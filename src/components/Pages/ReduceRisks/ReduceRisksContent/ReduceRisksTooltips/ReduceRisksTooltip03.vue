<template>
    <Tooltip :tooltip-id="tooltipId">
        **
        <template slot="toopltip-content">
            <span class="toopltip-content-star">**</span>
            <div class="toopltip-content-text">
                <p>
                    1. Accessed
                    <a href="http://moz.gov.ua/article/health/chi-pravilni-nashi-ujavlennja-pro-sercevo-sudinni-zahvorjuvannja-top-10-mifiv-" target="_blank">
                        http://moz.gov.ua/article/health/chi-pravilni-nashi
                        -ujavlennja-pro-sercevo-sudinni-zahvorjuvannja-top-10-mifiv-
                    </a>
                    Oct 2018.
                </p>
                <p>
                    2. World Health Organization. Global Atlas on Cardiovascular
                    Diseases Prevention and Control, 2011.
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'ReduceRisksTooltip03',
        props: ['tooltipId'],
        components: {
            Tooltip
        }
    }
</script>
