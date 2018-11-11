<template>
    <Tooltip :tooltip-id="tooltipId">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    Accessed
                     <a href="http://moz.gov.ua/article/health/jak-zapobigti-sercevo-sudinnim-zahvorjuvannjam" target="_blank">
                         http://moz.gov.ua/article/health/jak-zapobigti-sercevo
                         -sudinnim-zahvorjuvannjam
                     </a>
                    Oct 2018
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'MythsTooltip03',
        props: ['tooltipId'],
        components: {
            Tooltip
        }
    }
</script>
