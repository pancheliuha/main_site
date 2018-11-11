<template>
    <button
            class="nav-button"
            :class="{prev, next, smaller}"
            @click="navHandler">
        <!--<img-->
                <!--v-if="prev"-->
                <!--class="nav-button-icon"-->
                <!--src="../../../assets/img/icons/button-prev.png"-->
                <!--alt="prev">-->
        <!--<img-->
                <!--v-if="next"-->
                <!--class="nav-button-icon"-->
                <!--src="../../../assets/img/icons/button-next.png"-->
                <!--alt="next">-->
    </button>
</template>

<script>

    export default {
        name: 'NavButton',
        props: ['prev', 'next', 'navHandler', 'smaller'],
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import './nav-button';
</style>