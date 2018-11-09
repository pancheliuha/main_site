<template>
    <div class="nav-btn-with-text">
        <button
                v-if="btn"
                :disabled="disabledBtn"
                :class="{'without-arrow': noArrow, 'kitcia': kitcia}"
                class="next-btn test-btn bigger-btn"
                @click="btnClickHandler">
            <span class="test-btn__text"><slot></slot></span>
            <span class="arrow-right"></span>
        </button>
        <router-link
                v-if="link"
                :class="{'without-arrow': noArrow}"
                class="next-btn test-btn"
                :to="{name: linkToName}">
            <span class="test-btn__text"><slot></slot></span>
            <span class="arrow-right"></span>
        </router-link>
    </div>
</template>

<script>

    export default {
        name: 'NavBtnWithText',
        props: ['btn', 'btnClickHandler', 'link', 'linkToName', 'noArrow', 'kitcia', 'disabledBtn'],
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import './nav-btn-with-text';
</style>