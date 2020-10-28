<template>
  <div />
</template>

<script>
export default {
  name: 'Ding',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const code = vm.$route.query.code
      // console.log(code)
      vm.$store.dispatch('user/dingToLogin', code).then(() => {
        vm.$router.push({ path: '/' })
      })
    })
  }
}
</script>

<style>
</style>
