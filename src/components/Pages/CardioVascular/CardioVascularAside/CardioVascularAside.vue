<template>
    <div class="statistics-aside common-aside">
        <NavSubMenu :submenu="submenu"></NavSubMenu>
    </div>
</template>

<script>
    import NavSubMenu from '../../../UI/NavSubMenu/NavSubMenu'
    import { cardioVascularSubMenu } from '../cardio-vascular-submenu'

    export default {
        name: 'CardioVascularAside',
        components: {
            NavSubMenu
        },
        data() {
            return {
                submenu: cardioVascularSubMenu
            }
        }
    }
</script>

<style lang="scss">
    @import "./cardio-vascular-aside";
</style>