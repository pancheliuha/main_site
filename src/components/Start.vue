<template>
    <div class="start-component">
        <p class="start-text-head text-big">
            Серцево-<br />судинні  захворювання
        </p>
        <p class="text-middle text-blue">
            Чи близька Вам людина входить до групи ризику?
        </p>

        <p class="text-sm">
            Вам важливо, як довго дорогі серцю люди будуть поруч, і Ви даруватимете один одному свою любов та піклування?
        </p>

        <p class="text-sm">
            Цей тест допоможе дізнатися, чи варто хвилюватися про їхню серцево-судинну систему.
        </p>

        <button
                :disabled="disabledBtn"
                class="next-btn test-btn"
                @click="goToFirstStep">
            <span class="test-btn__text">Перевірити</span>
            <span class="arrow-right"></span>
        </button>

        <p class="text-xs">
            World Health Organization. Global Atlas on Cardiovascular
            Diseases Prevention and Control, 2011.
        </p>
    </div>

</template>

<script>
    /* eslint-disable */
    export default {
        name: 'StartComponent',
        data() {
            return {
                disabledBtn: false,
            }
        },
        methods: {
            goToFirstStep() {
                this.disabledBtn = true;
                this.$root.$emit('goToFirstStep');
            }
        }
    }
</script>

<style lang="scss">
    /* eslint-disable */
    @import "../assets/scss/_mixins.scss";

    .text-blue {
        color: #59b1c0;
    }

    .start-component {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        @include laptop() {
            right: auto;
            bottom: auto;
            margin-top: 19px;
        }
    }

    .start-text-head {
        font-size: 40px;
        line-height: 52px;
        color: #475461;
        margin-top: 0;
        margin-bottom: 35px;
        text-transform: uppercase;
        @include desktop() {
            font-size: 30px;
            line-height: 37px;
            margin-bottom: 15px;
        }
        @include laptop() {
            width: 60%;
        }
    }

    .text-middle {
        font-size: 27px;
        line-height: 37px;
        font-family: 'Helvetica-Roman', sans-serif;
        margin-top: 0;
        margin-bottom: 30px;
        @include desktop() {
            font-size: 24px;
            line-height: 1.3;
            margin-bottom: 16px;
        }
    }

    .text-sm {
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 14px;
        line-height: 26px;
        @include desktop() {
            font-size: 16px;
            line-height: 1.4;
            margin-bottom: 8px;
        }
    }

    .text-xs {
        font-size: 13px;
        font-family: "Helvetica-Light", sans-serif;
        position: absolute;
        top: 100%;
        margin-bottom: 17px;
        margin-top: 18px;
        @include desktop() {
            font-size: 11px;
            width: 90%;
            margin-top: 13px;
        }
        @include laptop() {
            width: 100%;
            text-align: center;
        }
    }

</style>