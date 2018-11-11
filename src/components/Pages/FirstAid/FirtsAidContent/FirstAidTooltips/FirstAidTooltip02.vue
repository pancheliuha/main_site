<template>
    <Tooltip tooltip-id="aid_02">
        *
        <template slot="toopltip-content">
            <span class="toopltip-content-star">*</span>
            <div class="toopltip-content-text">
                <p>
                    1. Accessed
                    <a href=" https://www.heartfoundation.org.nz/shop/heart-healthcare/heart-attack-warning-signs.pdf" target="_blank">
                        https://www.heartfoundation.org.nz/shop/heart
                        -healthcare/heart-attack-warning-signs.pdf
                    </a>
                    Oct 2018.
                </p>
                <p>
                    2. Accessed
                    <a href="http://moz.gov.ua/article/health/chi-pravilni-nashi-ujavlennja-pro-sercevo-sudinni-zahvorjuvannja-top-10-mifiv-" target="_blank">
                        http://moz.gov.ua/article/health/chi-pravilni-nashi
                        -ujavlennja-pro-sercevo-sudinni-zahvorjuvannja-top-10-mifiv-
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
        name: 'FirstAidTooltip02',
        components: {
            Tooltip
        }
    }
</script>
