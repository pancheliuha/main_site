<template>
    <Tooltip :tooltip-id="tooltipId">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    Accessed
                    <a href="http://www.wpro.who.int/mediacentre/factsheets/cardiovascular_disease/en/" target="_blank">
                        http://www.wpro.who.int/mediacentre/factsheets/
                        cardiovascular_disease/en/
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
        name: 'InsultTooltip01',
        props: ['tooltipId'],
        components: {
            Tooltip
        }
    }
</script>
