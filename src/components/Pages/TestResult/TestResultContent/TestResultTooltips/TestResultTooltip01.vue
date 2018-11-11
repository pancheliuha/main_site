<template>
    <Tooltip :tooltip-id="tooltipId">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    Даний тест не є діагностичним інструментом.
                    З метою діагностики та лікування рекомендується
                    звернутися до лікаря.
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'TestResultTooltip01',
        props: ['tooltipId'],
        components: {
            Tooltip
        }
    }
</script>
