<template>
    <div class="test-item">
        <span class="test-number">01</span>
        <div class="test-content">
            <p class="test-text">
                Який вік людини, <br /> про яку Ви турбуєтесь?
            </p>
            <div class="range-wrapper">
                <range-slider
                        class="slider"
                        min="1"
                        max="100"
                        step="1"
                        v-model="sliderValue">
                </range-slider>
                <span class="range-counter">{{ sliderValue }}</span>
            </div>
            <button
                    :disabled="disabledBtn"
                    class="next-btn test-btn inverse"
                    @click="goToNextStep">
                <span class="test-btn__text">Далі</span>
                <span class="arrow-right"></span>
            </button>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import RangeSlider from 'vue-range-slider'
    // you probably need to import built-in style
    import 'vue-range-slider/dist/vue-range-slider.css'
    export default {
        name: 'TestItemRange',
        data() {
            return {
                disabledBtn: false,
                sliderValue: 50
            }
        },
        computed: {
          testCount() {return this.sliderValue > 40 ? 1: 0}
        },
        components: {
            RangeSlider
        },
        methods: {
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
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .range-wrapper {
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
            margin: 0 auto 25px;
        }
    }

    .range-slider.range-slider {
        height: 100%;
        border-radius: 260px;
        overflow: hidden;
        padding: 0 31px;
        background: #78cedd;
        flex-grow: 1;
    }

    .range-slider-rail.range-slider-rail {
        height: 100%;
        background: #78cedd;
    }

    .range-slider-fill.range-slider-fill {
        height: 100%;
        background-color: #78cedd;
    }

    .range-slider-knob.range-slider-knob {
        width: 62px;
        height: 62px;
        @include desktop() {
            height: 44px;
            width: 44px;
        }
    }

    .range-counter {
        height: 73px;
        width: 73px;
        margin-left: 10px;
        border-radius: 50%;
        background-color: #78cedd;
        color: #fff;
        font-size: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        @include desktop() {
            height: 55px;
            width: 55px;
            font-size: 28px;
        }
    }

</style>