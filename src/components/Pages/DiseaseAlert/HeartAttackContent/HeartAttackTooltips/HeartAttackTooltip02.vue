<template>
    <Tooltip tooltip-id="heart_02">
        **
        <template slot="toopltip-content">
            <span class="toopltip-content-star">**</span>
            <div class="toopltip-content-text">
                <p>
                    1. Accessed
                    <a href=" https://www.heartfoundation.org.nz/shop/heart-healthcare/heart-attack-warning-signs.pdf" target="_blank">
                        https://www.heartfoundation.org.nz/shop/heart
                        -healthcare/heart-attack-warning-signs.pdf
                    </a>
                    Oct 2018.
                </p>
            </div>
        </template>
    </Tooltip>
</template>

<script>
    import Tooltip from '../../../../UI/Tooltip/Tooltip'

    export default {
        name: 'HeartAttackTooltip02',
        components: {
            Tooltip
        }
    }
</script>
