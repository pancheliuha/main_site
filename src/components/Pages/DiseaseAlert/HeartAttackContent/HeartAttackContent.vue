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
                                Перші ознаки* серцевого нападу**
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

    export default {
        name: 'DiseaseAlertContent',
        components: {
            NavButton
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