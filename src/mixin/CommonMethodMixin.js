export default {
  methods: {
    /*
    name: go
    용도: 라우터에 등록된 컴포넌트의 name을 기반으로 이동
    */
    go (targetName) {
      this.$router.push({'name': targetName})
    },
    /*
    name: goBack
    용도: 브라우저 히스토리 상 바로 전 페이지로 이동
    */
    goBack () {
      this.$router.go(-1)
    }
  }
}
