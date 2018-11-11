<template>
    <Tooltip tooltip-id="start_01">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    Accessed <a href="https://www.pfizer.ua/uk/node/356" target="_blank">https://www.pfizer.ua/uk/node/356</a> Oct 2018
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'StartTooltip01',
        components: {
            Tooltip
        }
    }
</script>
