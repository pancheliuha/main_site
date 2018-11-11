<template>
    <div class="diseases-alert-content content-common">
        <div class="step-container">
            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_5/step_502.png" alt="step-02">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="goToHeartAttack"></NavButton>
                        <NavButton :next="true" :navHandler="goToFirstAid"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                Перші ознаки інсульту<InsultTooltip01 tooltip-id="insult_01"></InsultTooltip01>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import NavButton from '../../../UI/NavButton/NavButton'
    import InsultTooltip01 from './InsultTooltips/InsultTooltip01'

    export default {
        name: 'DiseaseAlertContent',
        components: {
            NavButton,
            InsultTooltip01
        },
        methods: {
            goToFirstAid() {
                this.$router.push('/first-aid')
            },
            goToHeartAttack() {
                this.$router.push('/disease-alert/heart-attack')
            }
        },
    }
</script>

<style lang="scss">
    @import "../disease-alert-content";
</style>