<template>
  <div class="icon-nav">
    <ul class="result hand flex-box">
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IconNav'
}
</script>

<style lang="scss" scoped>
.icon-nav {
  padding: 10px 10px 0 10px;
  position: relative;

  .result {
    flex-wrap: wrap;

    li {
      width: 25%;
      height: 50px;
      border: 1px solid #000;
      margin-bottom: 15px;
    }
  }
}
</style>
