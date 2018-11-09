<template>
    <div class="reduce-risks-aside common-aside">
        <NavSubMenu :submenu="submenu"></NavSubMenu>
    </div>
</template>

<script>
    import NavSubMenu from '../../../UI/NavSubMenu/NavSubMenu'
    import { reduceRisksSubMenu } from '../reduce-risks-submenu'

    export default {
        name: 'CardioVascularAside',
        components: {
            NavSubMenu
        },
        data() {
            return {
                submenu: reduceRisksSubMenu
            }
        }
    }
</script>

<style lang="scss"></style>