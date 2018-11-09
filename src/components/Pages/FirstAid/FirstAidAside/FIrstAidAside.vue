<template>
    <div class="first-aid-aside common-aside">
        <NavSubMenu :submenu="submenu"></NavSubMenu>
    </div>
</template>

<script>
    import NavSubMenu from '../../../UI/NavSubMenu/NavSubMenu'
    import { firstAidSubmenu } from '../first-aid-submenu'

    export default {
        name: 'CardioVascularAside',
        components: {
            NavSubMenu
        },
        data() {
            return {
                submenu: firstAidSubmenu
            }
        }
    }
</script>

<style lang="scss"></style>