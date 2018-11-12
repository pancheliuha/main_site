<template>
    <div class="myths-content content-common">
        <div class="step-container">

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-1" v-show="step === 1">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_301.png" alt="step-01">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Кажуть, що частіше за все люди <br />
                                в Україні помирають від раку
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(2)">
                            Факт
                        </NavBtnWithText>
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(2)">
                            Міф
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-2" v-show="step === 2">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_302.png" alt="step-02">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                <b>ФАКТ</b>: серцево-судинні захворювання –<br />
                                причина 67% летальних випадків в Україні<MythsTooltip01></MythsTooltip01>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper jcc-mob">
                        <NavBtnWithText :btn="true" :btnClickHandler="() => goToStep(3)">
                            Далі
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-3" v-show="step === 3">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_303.png" alt="step-03">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Серцево-судинні захворювання <br />
                                характерні для людей похилого віку
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(4)">
                            Факт
                        </NavBtnWithText>
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(4)">
                            Міф
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-4" v-show="step === 4">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_3/step_304.png" alt="step-04">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                <b>ФАКТ</b>: навіть у молоді та людей середнього віку можуть <br class="hidden-sm" />
                                розвинути серцеві проблеми – особливо зараз, коли ожиріння, <br class="hidden-lg" />
                                діабет 2 типу та інші фактори ризику стають все більш <br class="hidden-lg" />
                                поширеними у молодому віці<MythsTooltip02 tooltip-id="myths_02"></MythsTooltip02>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper jcc-mob">
                        <NavBtnWithText :btn="true" :btnClickHandler="() => goToStep(5)">
                            Далі
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-5" v-show="step === 5">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_305.png" alt="step-05">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Якщо ти займаєшся <br />
                                спортом, ти у безпеці
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(6)">
                            Факт
                        </NavBtnWithText>
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(6)">
                            Міф
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-6" v-show="step === 6">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_3/step_306.png" alt="step-06">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Активний спосіб життя — не єдина запорука хорошого здоров’я.<br class="hidden-lg" />
                                Профілактика серцево-судинних захворювань<br class="hidden-xs" />
                                потребує цілого комплексу дій.<MythsTooltip03 tooltip-id="myths_03"></MythsTooltip03>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper jcc-mob">
                        <NavBtnWithText :btn="true" :btnClickHandler="() => goToStep(7)">
                            Далі
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-7" v-show="step === 7">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_307.png" alt="step-07">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Артеріальний тиск можна не міряти,<br />
                                якщо відчуваєш себе добре
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(8)">
                            Факт
                        </NavBtnWithText>
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(8)">
                            Міф
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-8" v-show="step === 8">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_3/step_308.png" alt="step-08">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                <b>ФАКТ</b>: гіпертонію називають «тихим вбивцею», оскільки її
                                наявність часто залишається непоміченою. Періодичне вимірювання
                                артеріального тиску дозволяє вчасно виявити проблему,
                                почати лікування та уникнути розвитку таких ускладнень,
                                як: інфаркт, інсульт, пошкодження нирок, очей
                                та інших серйозних захворювань<MythsTooltip02 tooltip-id="myths_04"></MythsTooltip02>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper jcc-mob">
                        <NavBtnWithText :btn="true" :btnClickHandler="() => goToStep(9)">
                            Далі
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-9" v-show="step === 9">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_309.png" alt="step-09">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Якщо у родині у всіх проблеми із серцем, <br class="hidden-xs" />
                                то їх вже не уникнути
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(10)">
                            Факт
                        </NavBtnWithText>
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(10)">
                            Міф
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>


            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-10" v-show="step === 10">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_3/step_310.png" alt="step-10">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                <b>ФАКТ</b>: сімейна історія серцевих захворювань – не вирок.
                                Щоб зберегти серце здоровим, людям з сімейною історієюдостатньо мінімізувати інші фактори ризику<MythsTooltip02 tooltip-id="myths_05"></MythsTooltip02>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper jcc-mob">
                        <NavBtnWithText :btn="true" :btnClickHandler="() => goToStep(11)">
                            Далі
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>


            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-11" v-show="step === 11">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_311.png" alt="step-11">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Рівень холестерину варто вимірювати <br />
                                лише тим, кому за 40
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(12)">
                            Факт
                        </NavBtnWithText>
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(12)">
                            Міф
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-12" v-show="step === 12">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_3/step_312.png" alt="step-12">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                <b>ФАКТ</b>: кардіологи рекомендують перевіряти рівень холестерину
                                кожні 5 років, починаючи з 20 років, і навіть раніше, якщо у родині
                                були випадки серцево-судинних захворювань<MythsTooltip02 tooltip-id="myths_06"></MythsTooltip02>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper jcc-mob">
                        <NavBtnWithText :btn="true" :btnClickHandler="() => goToStep(13)">
                            Далі
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-13" v-show="step === 13">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_313.png" alt="step-13">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Біль в ногах — це від старості
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(14)">
                            Факт
                        </NavBtnWithText>
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(14)">
                            Міф
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-14" v-show="step === 14">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_3/step_314.png" alt="step-14">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                <b>ФАКТ</b>: біль в ногах при ходьбі можуть бути ознакою
                                захворювання периферичних артерій — стану, коли в артеріях
                                ніг утворюються холестеринові бляшки. У людей з таким
                                захворюванням ризик інфаркту міокарду або інсульту збільшується<MythsTooltip02 tooltip-id="myths_07"></MythsTooltip02>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper jcc-mob">
                        <NavBtnWithText :btn="true" :btnClickHandler="() => goToStep(15)">
                            Далі
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>


            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-15" v-show="step === 15">
                    <div class="step-img-wrapper">
                        <img class="round-image" src="../../../../assets/img/SSZ_3/step_315.png" alt="step-15">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                Після інфаркту фізичні <br />
                                навантаження протипоказані
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper">
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(16)">
                            Факт
                        </NavBtnWithText>
                        <NavBtnWithText :kitcia="true" :btn="true" :noArrow="true" :btnClickHandler="() => goToStep(16)">
                            Міф
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

            <transition
                    name="fade-out"
                    leave-active-class="opacity-in">
                <div class="step-wrapper step-16" v-show="step === 16">
                    <div class="step-img-wrapper">
                        <img src="../../../../assets/img/SSZ_3/step_316.png" alt="step-16">
                    </div>
                    <div class="content-description">
                        <div class="content-description-text-wrapper">
                            <p class="content-description-text">
                                <b>ФАКТ</b>: біль в ногах при ходьбі можуть бути ознакою
                                захворювання периферичних артерій — стану, коли в артеріях
                                ніг утворюються холестеринові бляшки. У людей з таким
                                захворюванням ризик інфаркту міокарду або інсульту збільшується<MythsTooltip02 tooltip-id="myths_08"></MythsTooltip02>
                            </p>
                        </div>
                    </div>
                    <div class="group-btns-wrapper jcc-mob">
                        <NavBtnWithText :btn="true" :btnClickHandler="goToRisks">
                            Далі
                        </NavBtnWithText>
                    </div>
                </div>
            </transition>

        </div>
    </div>
</template>

<script>
    import NavBtnWithText from '../../../UI/NavBtnWithText/NavBtnWithText'
    import MythsTooltip01 from './MythsTooltips/MythsTooltip01'
    import MythsTooltip02 from './MythsTooltips/MythsTooltip02'
    import MythsTooltip03 from './MythsTooltips/MythsTooltip03'

    export default {
        name: 'MythsContent',
        data() {
            return {
                step: 1
            }
        },
        components: {
            NavBtnWithText,
            MythsTooltip01,
            MythsTooltip02,
            MythsTooltip03,
        },
        methods: {
            goToStep(step) {
                this.step = step;
            },
            goToRisks() {
                this.$router.push('/reduce-risks');
            }
        },
    }
</script>

<style lang="scss">
    @import "./myths-content";
</style>