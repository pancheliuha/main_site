<template>
    <div class="reduce-risks-content content-common">
        <div class="step-container">
            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1" v-show="step === 1">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_4/step_401.png" alt="step-01">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="goToMyths"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(2)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                дотримуйтесь здорового харчування
                            </p>
                            <p class="content-description-text">
                                •  вживайте більше овочів, фруктів, зернових, риби<br />
                                •  зменшіть вживання солі, жирної їжі та цукру <ReduceRisksTooltip01 tooltip-id="risks_01"></ReduceRisksTooltip01>
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
                        <img src="../../../../assets/img/SSZ_4/step_402.png" alt="step-02">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(1)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(3)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                більше рухайтесь
                            </p>
                            <p class="content-description-text">
                                для більшості оптимальний варіант — <br />
                                25-40<ReduceRisksTooltip02 tooltip-id="risks_02"></ReduceRisksTooltip02> хв. активності на день<ReduceRisksTooltip03 tooltip-id="risks_03"></ReduceRisksTooltip03>
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
                        <img src="../../../../assets/img/SSZ_4/step_403.png" alt="step-03">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(2)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(4)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                контролюйте цукор у крові
                            </p>
                            <p class="content-description-text">
                                оптимальний рівень для більшості — <br />
                                нижче за 7,0<ReduceRisksTooltip04 tooltip-id="risks_04"></ReduceRisksTooltip04> ммоль/л<ReduceRisksTooltip05 tooltip-id="risks_05"></ReduceRisksTooltip05>
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
                        <img src="../../../../assets/img/SSZ_4/step_404.png" alt="step-04">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(3)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(5)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                контролюйте рівень холестерину
                            </p>
                            <p class="content-description-text">
                                оптимальна для більшості норма — <br />
                                менше за 6,2<ReduceRisksTooltip06 tooltip-id="risks_06"></ReduceRisksTooltip06> ммоль/л<ReduceRisksTooltip05 tooltip-id="risks_07"></ReduceRisksTooltip05>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-5" v-show="step === 5">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_4/step_405.png" alt="step-05">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(4)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(6)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                підтримуйте здорову вагу тіла
                            </p>
                            <p class="content-description-text">
                                індекс маси тіла має бути нижчим за 25<ReduceRisksTooltip06 tooltip-id="risks_08"></ReduceRisksTooltip06> для більшості <ReduceRisksTooltip07 tooltip-id="risks_09"></ReduceRisksTooltip07>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-6" v-show="step === 6">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_4/step_406.png" alt="step-06">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(5)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(7)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                слідкуйте за артеріальним тиском
                            </p>
                            <p class="content-description-text">
                                намагайтеся тримати його у нормі<ReduceRisksTooltip08 tooltip-id="risks_10"></ReduceRisksTooltip08> – 120/80 мм рт.ст.<ReduceRisksTooltip01 tooltip-id="risks_11"></ReduceRisksTooltip01>
                            </p>
                        </div>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-7" v-show="step === 7">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_4/step_407.png" alt="step-07">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(6)"></NavButton>
                        <NavButton :next="true" :navHandler="goToDiseaseAlert"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text medium uppercase">
                                позбудьтеся шкідливих звичок
                            </p>
                            <p class="content-description-text">
                                паління та зловживання алкоголем<ReduceRisksTooltip09 tooltip-id="risks_12"></ReduceRisksTooltip09>
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
    import ReduceRisksTooltip01 from './ReduceRisksTooltips/ReduceRisksTooltip01'
    import ReduceRisksTooltip02 from './ReduceRisksTooltips/ReduceRisksTooltip02'
    import ReduceRisksTooltip03 from './ReduceRisksTooltips/ReduceRisksTooltip03'
    import ReduceRisksTooltip04 from './ReduceRisksTooltips/ReduceRisksTooltip04'
    import ReduceRisksTooltip05 from './ReduceRisksTooltips/ReduceRisksTooltip05'
    import ReduceRisksTooltip06 from './ReduceRisksTooltips/ReduceRisksTooltip06'
    import ReduceRisksTooltip07 from './ReduceRisksTooltips/ReduceRisksTooltip07'
    import ReduceRisksTooltip08 from './ReduceRisksTooltips/ReduceRisksTooltip08'
    import ReduceRisksTooltip09 from './ReduceRisksTooltips/ReduceRisksTooltip09'


    export default {
        name: 'ReduceRisksContent',
        data() {
            return {
                step: 1
            }
        },
        components: {
            NavButton,
            ReduceRisksTooltip01,
            ReduceRisksTooltip02,
            ReduceRisksTooltip03,
            ReduceRisksTooltip04,
            ReduceRisksTooltip05,
            ReduceRisksTooltip06,
            ReduceRisksTooltip07,
            ReduceRisksTooltip08,
            ReduceRisksTooltip09,
        },
        methods: {
            goToStep(step) {
                this.step = step;
            },
            goToMyths() {
                this.$router.push('/cardio-vascular/facts-vs-myths')
            },
            goToDiseaseAlert() {
                this.$router.push('/disease-alert/heart-attack')
            }
        },
    }
</script>

<style lang="scss">
    @import "./reduce-risks-content";
</style>