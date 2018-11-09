<template>
    <div class="main-wrapper">

    </div>
</template>

<script>

export default {
    name: 'Main',
    components: {
    },
    data () {
        return {
            step: 0,
            testCount: 0,
            testsArr: tests
        }
    },
    methods: {
        goToFirstStep() {
          this.step++;
        },

        goToNextStep(stepTestCount) {
            this.testCount += stepTestCount;
            if (this.step === 9) {
                console.log('redirect');
                let searchParams = `?test-results=${this.testCount}`
                this.$router.push(searchParams);
                console.log(this.$route);
                location.href = `localhost:8080/${searchParams}`;
                return;
            }
            this.step++;
        }
    },
    mounted() {
        this.$root.$on('goToFirstStep', this.goToFirstStep);
        this.$root.$on('goToNextStep', this.goToNextStep);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../assets/scss/_mixins.scss";
    /* eslint-disable */
    .main-wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        @include laptop() {
            flex-direction: column;
            overflow: auto;
            align-items: center;
        }
    }

    .logo {
        position: absolute;
        top: 40px;
        right: 65px;
        @include desktop() {
            width: 90px;
            right: 35px;
            top: 25px;
        }
        @include laptop() {
            display: none;
        }
    }

    .logo-mobile {
        display: none;
        @include laptop() {
            position: absolute;
            top: 30px;
            right: 30px;
            display: inline-block;
            width: 84px;
        }
        @include phones() {
            right: 0;
        }
    }

    .bg-wrapper {
        flex-grow: 1;
        position: relative;
        @include laptop() {
            width: 100%;
            height: 70vw;
            flex-grow: 0;
        }
    }

    .bg-section {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .aside-section {
        width: 500px;
        padding: 0 65px 65px;
        background-color: #fff;
        @include desktop() {
            padding: 0 35px 50px;
            width: 400px;
        }
        @include laptop() {
            width: 80%
        }
        @include phones() {
            width: 100%;
            padding: 0 15px;
        }
    }

    .test-content {
        @include laptop() {
            margin-bottom: 25px;
        }
    }

</style>
