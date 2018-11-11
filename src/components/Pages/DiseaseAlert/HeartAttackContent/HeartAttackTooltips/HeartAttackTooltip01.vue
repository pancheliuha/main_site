<template>
    <Tooltip tooltip-id="heart_01">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    Симптоми серцевого нападу можуть бути різними. Вони
                    можуть виникнути раптово і бути вираженими або можуть
                    прогресувати повільно, починаючи з легкого болю у грудях.
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'HeartAttackTooltip01',
        components: {
            Tooltip
        }
    }
</script>
