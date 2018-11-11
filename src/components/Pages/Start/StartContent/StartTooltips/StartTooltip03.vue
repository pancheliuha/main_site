<template>
    <Tooltip tooltip-id="start_03">
        ***
        <template slot="toopltip-content">
            <span class="toopltip-content-star">***</span>
            <div class="toopltip-content-text">
                <p>
                    Accessed
                    <a target="_blank" href="http://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)">
                        http://www.who.int/news-room/fact-sheets/detail/
                        cardiovascular-diseases-(cvds)</a>
                    Oct 2018
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'StartTooltip03',
        components: {
            Tooltip
        }
    }
</script>
