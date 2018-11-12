<template>

    <transition
            name="fade-out"
            leave-active-class="opacity-in">
        <div class="popup" v-show="popupIsShow">
            <div class="popup-inner">
                <p class="popup-inner-text-big">
                    Cамолікування може бути
                </p>
                <p class="popup-inner-text-medium">
                    шкідливим для Вашого здоров’я
                </p>
                <div class="popup-inner-close" @click="hidePopup">
                    <span></span>
                    <span></span>
                </div>

            </div>
            <div class="popup-backdrop" @click="hidePopup"></div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Popup',
        data() {
            return {
                popupIsShow: true
            }
        },
        methods: {
            hidePopup() {
                this.popupIsShow = false;
                localStorage.setItem('shopPopup', 'true');
            }
        },
        beforeMount() {
            if (localStorage.getItem('shopPopup')) {
                this.popupIsShow = false
            }
        }
    }
</script>

<style lang="scss">
    @import "./popup";
</style>