<template>
    <Tooltip tooltip-id="start_02">
        **
        <template slot="toopltip-content">
            <span class="toopltip-content-star">**</span>
            <div class="toopltip-content-text">
                <p>
                    Демографічний щорічник "Населення України за 2016 рік".
                </p>
                <p>
                    Державна служба статистики України. 2017
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'StartTooltip02',
        components: {
            Tooltip
        }
    }
</script>
