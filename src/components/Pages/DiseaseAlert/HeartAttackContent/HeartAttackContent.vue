<template>
    <div class="diseases-alert-content content-common">
        <div class="step-container">
            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_5/step_501.png" alt="step-01">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="goToReduceRisks"></NavButton>
                        <NavButton :next="true" :navHandler="goToInsult"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                Перші ознаки<HeartAttackTooltip01></HeartAttackTooltip01> серцевого нападу<HeartAttackTooltip02></HeartAttackTooltip02>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import NavButton from '../../../UI/NavButton/NavButton';
    import HeartAttackTooltip01 from './HeartAttackTooltips/HeartAttackTooltip01'
    import HeartAttackTooltip02 from './HeartAttackTooltips/HeartAttackTooltip02'

    export default {
        name: 'DiseaseAlertContent',
        components: {
            NavButton,
            HeartAttackTooltip01,
            HeartAttackTooltip02,
        },
        methods: {
            goToReduceRisks() {
                this.$router.push('/reduce-risks')
            },
            goToInsult() {
                this.$router.push('/disease-alert/insult')
            }
        },
    }
</script>

<style lang="scss">
    @import "../disease-alert-content";
</style>