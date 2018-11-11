<template>
    <div class="statistics-content content-common">
        <div class="step-container">
            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1" v-show="step === 1">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_1/step_1.png" alt="step-01">
                    </div>
                    <div class="content-btns-wrapper">
                        <div class="nav-button empty"></div>
                        <NavButton :next="true" :navHandler="() => goToStep(2)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                9 млн. українців мають клінічні симптоми <br class="hidden-xs" />
                                ішемічної хвороби серця<StatisticsTooltip01></StatisticsTooltip01>
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
                        <img src="../../../../assets/img/SSZ_1/step_2.png" alt="step-02">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(1)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(3)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                У кожної четвертої людини <br />
                                є атеросклероз коронарних судин<StatisticsTooltip02></StatisticsTooltip02>
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
                        <img src="../../../../assets/img/SSZ_1/step_3.png" alt="step-03">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(2)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(4)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Прогноз кількості людей у світі, <br />
                                які помруть від хвороб серця<StatisticsTooltip03></StatisticsTooltip03>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-4" v-show="step === 4">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_1/step_4.png" alt="step-04">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(3)"></NavButton>
                        <NavButton :next="true" :navHandler="goToDeceases"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text big">
                                Фактори ризику<StatisticsTooltip04></StatisticsTooltip04>
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
    import StatisticsTooltip01 from './StatisticsTooltips/StatisticsTooltip01'
    import StatisticsTooltip02 from './StatisticsTooltips/StatisticsTooltip02'
    import StatisticsTooltip03 from './StatisticsTooltips/StatisticsTooltip03'
    import StatisticsTooltip04 from './StatisticsTooltips/StatisticsTooltip04'


    export default {
        name: 'StatisticsContent',
        data() {
            return {
                step: 1
            }
        },
        components: {
            NavButton,
            StatisticsTooltip01,
            StatisticsTooltip02,
            StatisticsTooltip03,
            StatisticsTooltip04,
        },
        methods: {
            goToStep(step) {
              this.step = step;
            },
            goToDeceases() {
                this.$router.push('/cardio-vascular/diseases')
            }
        },
    }
</script>

<style lang="scss">
    @import "./statistics-content";
</style>