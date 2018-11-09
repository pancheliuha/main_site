<template>
    <div class="start content-common">
        <div class="start-inner">
            <img class="start-logo" src="../../../../assets/img/icons/logo-white.png" alt="logo-white">
            <p class="start-text text-medium">
                Компанія ПФАЙЗЕР (PFIZER) понад 160* років докладає зусиль для зменшення летальних випадків від  серцево-судинних захворювань – загрози життю
                №1 в Україні** та світі***
            </p>
            <div class="start-btns-wrapper">
                <NavButton :prevHandler="prevHandler" :prev="true"></NavButton>
                <NavBtnWithText link="true" link-to-name="CardioStatistic">Дізнатися більше</NavBtnWithText>
            </div>
        </div>
    </div>
</template>

<script>
    import NavButton from '../../../UI/NavButton/NavButton'
    import NavBtnWithText from '../../../UI/NavBtnWithText/NavBtnWithText'

    export default {
        name: 'StartContent',
        components: {
            NavButton,
            NavBtnWithText
        },
        methods: {
          prevHandler() {
              console.log('prev');
          }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import '../../../../assets/scss/common';
    @import 'start-content';
</style>