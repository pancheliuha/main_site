<template>
    <Tooltip :tooltip-id="tooltipId">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    Accessed <a href="http://www.who.int/ru/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds) " target="_blank">http://www.who.int/ru/news-room/fact-sheets/
                    detail/cardiovascular-diseases-(cvds) </a> Oct 2018
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'DiseasesTooltip',
        props: ['tooltipId'],
        components: {
            Tooltip
        }
    }
</script>
