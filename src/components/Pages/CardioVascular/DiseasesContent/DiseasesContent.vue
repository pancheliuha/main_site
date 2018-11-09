<template>
    <div class="diseases-content content-common">
        <div class="step-container">
            <div class="human-img-wrapper">
                <img class="human-img" src="../../../../assets/img/SSZ_2/human.png" alt="human">
            </div>
            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1" v-show="step === 1">
                    <div class="step-img-wrapper">
                        <img class="heart-part" src="../../../../assets/img/SSZ_2/step_201.png" alt="step-01">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="goToStatistic"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(2)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text big">
                                ішемічна хвороба серця
                            </p>
                            <p class="content-description-text">
                                хвороба кровоносних судин, що забезпечують <br />
                                кров’ю серцевий м’яз (міокард)*
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
                        <img class="brain-part" src="../../../../assets/img/SSZ_2/step_202.png" alt="step-02">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(1)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(3)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text big">
                                захворювання судин <br />
                                головного мозку
                            </p>
                            <p class="content-description-text">
                                хвороба кровоносних судин, <br />
                                що забезпечують кров'ю мозок*
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
                        <img class="vesseles-part" src="../../../../assets/img/SSZ_2/step_203.png" alt="step-03">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(2)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(4)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text big">
                                хвороба периферичних артерій
                            </p>
                            <p class="content-description-text">
                                хвороба кровоносних судин, <br />
                                що забезпечують кров'ю кінцівки*
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
                        <img class="revmocardite-part" src="../../../../assets/img/SSZ_2/step_204.png" alt="step-04">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(3)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(5)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text big">
                                ревмокардит
                            </p>
                            <p class="content-description-text">
                                ураження серцевого м'яза і серцевих клапанів <br />
                                в результаті ревматичної атаки, що викликається <br />
                                бактеріями роду Streptococcus*
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
                        <img class="break-heart-part" src="../../../../assets/img/SSZ_2/step_205.png" alt="step-05">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(4)"></NavButton>
                        <NavButton :next="true" :navHandler="() => goToStep(6)"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text big">
                                вроджена вада серця
                            </p>
                            <p class="content-description-text">
                                Деформація будови серця, яка присутня <br />
                                у людини з народження*
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
                        <img class="lungs-part" src="../../../../assets/img/SSZ_2/step_206.png" alt="step-06">
                    </div>
                    <div class="content-btns-wrapper">
                        <NavButton :prev="true" :navHandler="() => goToStep(5)"></NavButton>
                        <NavButton :next="true" :navHandler="goToMyths"></NavButton>
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text big">
                                тромбоз глибоких вен <br />
                                нижніх кінцівок і емболія легенів
                            </p>
                            <p class="content-description-text">
                                утворення у венах ніг згустків крові,
                                які можуть зміщуватися та рухатися до серця і легенів,
                                частково або повністю перешкоджаючи руху крові*
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
        name: 'DiseasesContent',
        data() {
            return {
                step: 1
            }
        },
        components: {
            NavButton
        },
        methods: {
            goToStep(step) {
                this.step = step;
            },
            goToMyths() {
                this.$router.push('/cardio-vascular/facts-vs-myths')
            },
            goToStatistic() {
                this.$router.push('/cardio-vascular/statistic')
            }
        },
    }
</script>

<style lang="scss">
    @import "./diseases-content";
</style>