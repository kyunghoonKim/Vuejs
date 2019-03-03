<template>
  <div class="hello">
    {{ message }}<br>
    {{ msg }}<br>
    {{ 1234 }}
    {{ upperCaseMessage }}<br>
    {{ test() }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'abcdasdasasdasddas'
    }
  },
  props: {
    msg: String
  },
  computed:{
    upperCaseMessage() {
      return this.msg.toUpperCase();
    }
  },
  watch: {
    msg() {
      console.log(this.msg);
    }
  },
  methods:{
    test() {
      return 'testttt';
    }
  },
  created() {
  },
  mounted() {
    this.$el.style.color = '#f00';

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    font-size: 112px;
  }
</style>
