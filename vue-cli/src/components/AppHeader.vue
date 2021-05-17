<!-- 컴포넌트이름을 두단어로 만들어야 Vue가 컴포넌트로 인식하기 때문
     -> 한단어로 한다면 브라우저입장에선 이게 HTML Tag인지 컴포넌트인지 알 수 없음 -->
<template>
  <header>
      <h1>{{ propsdata }}</h1>
  </header>
</template>

<script>
export default {
    props: ['propsdata']
}
</script>

<style>

</style>