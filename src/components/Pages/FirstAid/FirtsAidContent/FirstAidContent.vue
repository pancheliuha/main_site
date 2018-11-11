<template>
    <div class="first-aid-content content-common">
        <div class="step-container">
            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1" v-show="step === 1">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_6/step_601.png" alt="step-01">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="goToDiseaseAlert"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(2)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Зупиніться та перепочиньте. <br />
                                Розкажіть тому, хто поруч з вами <br />
                                про свої симптоми<FirstAidTooltip01></FirstAidTooltip01>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-2" v-show="step === 2">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_6/step_602.png" alt="step-02">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(1)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(3)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Якщо симптоми не проходять протягом 15 хвилин
                                і ви вважаєте, що почався серцевий напад,
                                викликайте швидку допомогу (103)<FirstAidTooltip02></FirstAidTooltip02>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-3" v-show="step === 3">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_6/step_603.png" alt="step-03">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(2)"></NavButton>
                        <NavButton :next="true" :navHandler="goToMain"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Якщо ваш лікар давав вам рекомендації з приводу
                                того, як діяти в таких випадках, дотримуйтесь
                                їх, та чекайте на прибуття швидкої допомоги
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
    import FirstAidTooltip01 from './FirstAidTooltips/FirstAidTooltip01'
    import FirstAidTooltip02 from './FirstAidTooltips/FirstAidTooltip02'

    export default {
        name: 'FirstAidContent',
        data() {
            return {
                step: 1
            }
        },
        components: {
            NavButton,
            FirstAidTooltip01,
            FirstAidTooltip02,
        },
        methods: {
            goToStep(step) {
                this.step = step;
            },
            goToMain() {
                this.$router.push('/')
            },
            goToDiseaseAlert() {
                this.$router.push('/disease-alert/heart-attack')
            }
        },
    }
</script>

<style lang="scss">
    @import "./first-aid-content";
</style>