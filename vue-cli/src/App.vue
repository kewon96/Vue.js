<template>
<!-- 이 안에 최상위 Element는 하나만 존재해야만 한다. -->
    <div>
        <!-- {{ str }} -->
        <AppHeader 
            v-bind:propsdata="str"
            v-on:renew="renewStr"
        />
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
    // 기존에는 data라는 속성안에 데이터를 넣었지만 
    // 이제 함수형태로 해서 객체를 return하는 형태여야한다.
    data: function() {
        return {
            str: 'Hello! Vue Cli!',
        }
    },
    components: {
        'AppHeader': AppHeader
    },
    methods: {
        renewStr: function() {
            this.str = 'hi';
        }
    }
}
</script>

<style>

</style>