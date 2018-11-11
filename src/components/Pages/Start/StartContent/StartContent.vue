<template>
    <div class="start content-common">
        <div class="step-01-img-wrapper" v-show="step === 1">
            <img src="../../../../assets/img/start/grandma.png" alt="step-01">
        </div>

        <div class="step-container">

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1" v-show="step === 1">
                    <div class="content-btns-wrapper">
                        <NavButton :next="true" :navHandler="() => goToStep(2)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="start-text text-with-arrow">
                                Як часто ми говоримо:<br>
                                «Не бери близько до серця!»
                            </p>
                            <p class="start-text">
                                Але не тоді, коли мова йдеться
                                про здоров’я самого серця.
                            </p>
                        </div>
                    </div>
                    <div class="mobile-img-wrapper">
                        <img src="../../../../assets/img/start/grandma-mobile.png" alt="step-01">
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-2" v-show="step === 2">
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(1)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(3)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="start-text-big text-with-arrow">
                                <span class="start-text-big-number">
                                    67<sup class="start-text-big-star"><StartTooltip04></StartTooltip04></sup><span class="start-text-big-percent">%</span>
                                </span>
                            </p>
                            <p class="start-text-medium">
                                летальних випадків
                                в Україні спричинені
                                серцево-судинними
                                захворюваннями
                            </p>
                        </div>
                    </div>
                    <div class="mobile-img-wrapper">
                        <img src="../../../../assets/img/start/cardio-check-mobile.png" alt="step-01">
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="start-inner step-wrapper" v-show="step === 3">
                    <img class="start-logo" src="../../../../assets/img/icons/logo-white.png" alt="logo-white">
                    <p class="start-text text-medium text-with-arrow">
                        Компанія ПФАЙЗЕР (PFIZER) понад
                        160<StartTooltip01></StartTooltip01>
                        років докладає зусиль для зменшення летальних випадків від  серцево-судинних захворювань – загрози життю №1 в
                        Україні<StartTooltip02></StartTooltip02> та світі<StartTooltip03></StartTooltip03>
                    </p>
                    <div class="start-btns-wrapper">
                        <NavButton :navHandler="() => goToStep(2)" :prev="true"></NavButton>
                        <NavBtnWithText link="true" link-to-name="CardioStatistic">Дізнатися більше</NavBtnWithText>
                    </div>
                    <img class="pfizer-logo-white" src="../../../../assets/img/start/pfizer-white.png" alt="logo-white">
                </div>
            </transition>


        </div>

    </div>
</template>

<script>
    import NavButton from '../../../UI/NavButton/NavButton'
    import NavBtnWithText from '../../../UI/NavBtnWithText/NavBtnWithText'
    import StartTooltip01 from './StartTooltips/StartTooltip01'
    import StartTooltip02 from './StartTooltips/StartTooltip02'
    import StartTooltip03 from './StartTooltips/StartTooltip03'
    import StartTooltip04 from './StartTooltips/StartTooltip04'

    export default {
        name: 'StartContent',
        data() {
            return {
                step: 1,
            }
        },
        components: {
            NavButton,
            NavBtnWithText,
            StartTooltip01,
            StartTooltip02,
            StartTooltip03,
            StartTooltip04,
        },
        methods: {
          prevHandler() {
              console.log('prev');
          },
            goToStep(step) {
                this.step = step;
                this.$root.$emit('currentStep', this.step);
            },
        },
    }
</script>

<style lang="scss">
    @import './start-content';
</style>