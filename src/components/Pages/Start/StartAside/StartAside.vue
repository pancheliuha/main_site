<template>
    <div class="start-aside">
        <img v-show="step === 2" class="start-aside__img cardio-check" src="../../../../assets/img/start/cardio-check.png" alt="pfizer-logo">
        <img v-show="step === 3" class="start-aside__img" src="../../../../assets/img/icons/pfizer-logo.png" alt="pfizer-logo">
    </div>
</template>

<script>
    export default {
        name: 'StartAside',
        data() {
            return {
                step: 1
            }
        },
        methods: {
            toggleVisibleAside(step) {
                this.step = step;
            }
        },
        mounted() {
            this.$root.$on('currentStep', this.toggleVisibleAside)
        }
    }
</script>

<style lang="scss">
    @import "./start-aside.scss";
</style>