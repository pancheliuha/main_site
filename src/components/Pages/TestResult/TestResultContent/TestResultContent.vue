<template>
    <div
            class="test-result-content content-common"
            :class="{'test-result-success': resultSuccess, 'test-result-danger': resultDanger}"
    >
        <div class="step-container">

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1">
                    <div class="step-img-wrapper">
                        <img v-if="resultSuccess" src="../../../../assets/img/test_results/test_res_success.png" alt="step-01">
                        <img v-if="resultDanger" src="../../../../assets/img/test_results/test_res_danger.png" alt="step-01">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text big">
                                Результат:
                            </p>
                            <p class="content-description-text" v-if="resultType === 'yourself'">
                                Ви маєте <span>{{ testResultPoint }}</span> з <span>9</span>
                                факторів ризику серцево-судинних захворювань<TestResultTooltip01 tooltip-id="test-res_01"></TestResultTooltip01>
                            </p>
                            <p class="content-description-text" v-if="resultType === 'loved-one'">
                                Людина, про яку Ви турбуєтесь, має <span>{{ testResultPoint }}</span> з <span>9</span>
                                факторів ризику серцево-судинних захворювань<TestResultTooltip01 tooltip-id="test-res_02"></TestResultTooltip01>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText
                                class="test-result-btn"
                                :link="true"
                                link-to-name="Start"
                        >
                            Дізнайтесь більше
                        </NavBtnWithText>
                        <NavBtnWithText
                                class="test-result-btn"
                                :link="true"
                                link-to-name="ReduceRisks"
                        >
                            Як знизити ризики?
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import NavBtnWithText from '../../../UI/NavBtnWithText/NavBtnWithText'
    import TestResultTooltip01 from './TestResultTooltips/TestResultTooltip01'
    import { testForLovedOneUrl, testForYourselfUrl } from '../../../../config.js'

    export default {
        name: 'MythsContent',
        data() {
            return {
                resultSuccess: false,
                resultDanger: false,
                testResultPoint: 0,
                resultType: 'yourself'
            }
        },
        components: {
            NavBtnWithText,
            TestResultTooltip01
        },
        methods: {
            goToStep(step) {
                this.step = step;
            },
            goToRisks() {
                this.$router.push('/reduce-risks');
            }
        },
        created() {
            if (this.$route.query.result) {
                this.testResultPoint = this.$route.query.result;
                if (this.testResultPoint > 4) {
                    this.resultDanger = true
                } else {
                    this.resultSuccess = true
                }
            }

            if (document.referrer === testForLovedOneUrl) {
                this.resultType = 'yourself'
            } else if (document.referrer === testForYourselfUrl) {
                this.resultType = 'loved-one'
            } else {
                 this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss">
    @import "./test-result-content";
</style>