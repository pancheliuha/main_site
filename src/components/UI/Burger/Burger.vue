<template>
    <div
            class="burger"
            :class="{active: menuOpened}"
            @click="openMenu"
    >
        <div class="burger-lines">
            <span class="burger-line top"></span>
            <span class="burger-line middle"></span>
            <span class="burger-line bottom"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Burger',
        data() {
            return {
                menuOpened: false
            }
        },
        methods: {
            openMenu() {
                this.menuOpened = !this.menuOpened;
                this.$root.$emit('toggle-menu', this.menuOpened)
            },
            closeMobileMenu() {
                this.menuOpened = false;
            },
        },
        mounted() {
            this.$root.$on('close-mobile-menu', this.closeMobileMenu)
        }
    }
</script>

<style lang="scss">
    @import "./burger";
</style>