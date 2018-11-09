<template>
    <div class="test-item">
        <span class="test-number">{{ testNumber }}</span>
        <div class="test-content">
            <p class="test-text" v-html="testText"></p>
            <div class="choose-btns-wrapper" :class="{'inverse': inverseBtns}">
                <button
                        class="choose-btn"
                        :class="{active: trueBtnActive}"
                        @click="chooseVariant(1)"
                >
                    {{ trueBtnText }}
                </button>

                <button
                        class="choose-btn"
                        :class="{active: falseBtnActive}"
                        @click="chooseVariant(0)"
                >
                    {{ falseBtnText }}
                </button>
            </div>
            <button
                    :disabled="disabledBtn"
                    class="next-btn test-btn inverse"
                    @click="goToNextStep"
            >
                <span class="test-btn__text">Далі</span>
                <span class="arrow-right"></span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestItem',
        props: [
            'trueBtnText',
            'falseBtnText',
            'testText',
            'testNumber',
            'inverseBtns'
        ],
        data() {
            return {
                disabledBtn: true,
                testCount: null,
                trueBtnActive: false,
                falseBtnActive: false,
            }
        },

        methods: {
            chooseVariant(variant) {
                this.disabledBtn = false;
                this.trueBtnActive = variant === 1;
                this.falseBtnActive = variant === 0;
                this.testCount = variant;
            },
            goToNextStep() {
                this.disabledBtn = true;
                this.$root.$emit('goToNextStep', this.testCount);
            }
        },
    }
</script>

<style lang="scss">
    @import "../assets/scss/_mixins.scss";

    .test-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .choose-btns-wrapper {
        height: 73px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        @include desktop() {
            height: 55px;
            margin-bottom: 25px;
        }
        @include laptop() {
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .choose-btns-wrapper.inverse {
        flex-direction: row-reverse;
    }

    .choose-btn {
        width: 46%;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        color: #fff;
        background-color: #78cedd;
        font-family: 'Helvetica-Roman', sans-serif;
        font-size: 25px;
        line-height: 33px;
        letter-spacing: 1px;
        border-radius: 60px;
        transition: all .2s;
        @include desktop() {
            font-size: 21px;
            width: 47%;
        }
    }

    .choose-btn:hover,
    .choose-btn.active {
        transform: scale(1.1);
        transition: all .2s;
    }
</style>