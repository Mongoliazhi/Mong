<template>
  <div class="toList">
    <h1>asdfasfa</h1>


    <v-footer message="music"></v-footer>
  </div>
</template>

<script>

  import axios from 'axios'
  //  import Vue from 'vue'
  import footer from '../footer/footer.vue'
  import topList from  './topList.vue'

  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: 'toList',
    components: {
      'v-footer': footer,
    },
    data () {
      return {
        topList: [],
      }
    },
    computed: {
      ...mapState([
        'count'
      ])
    },

    watch: {},
    methods: {
      showRank: function (id) {
        this.$router.push({name: 'TopList', params: {id: id}})
      }
    },
    mounted(){
      var self = this;
      this.$nextTick(function () {
//        排行榜
        var topList_url = "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=272598377&" +
          "uin=1458268002&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1508924113101"

        this.$http.jsonp(topList_url, {
          jsonp: "jsonpCallback"
        }).then(function ($res) {
          console.log($res);
          this.topList = $res.data.data.topList
        }, function (res) {
          console.warn(res);
        })
      })
    },
    filters: {
      listenCount: num => {
        return Math.round(num / 1000) / 10 + '万'
      }
    },
  }
</script>


<style scoped>
  .mui-table-view .mui-table-view-cell a span {
    font-size: 42px;
    color: #2ac845;
  }

  .mui-badge {
    position: absolute;
    right: 18px;
    top: 0;
    background-color: #ff5954;
  }

  .rank {
    width: 100%;
  }

  .rank ul {
    margin-top: 60px;
    padding: 10px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .rank-item {
    display: flex;
    flex-direction: row;
    height: 100px;
    background: #fff;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #DDD;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }

  .rank-item .rank-media {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .rank-item .rank-media img {
    width: 100px;
    height: 100px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    z-index: 0;
  }

  .rank-item .rank-media .listen-count {
    position: absolute;
    bottom: 3px;
    left: 5px;
    color: #fff;
    font-size: 12px;
  }

  .rank-item .rank-info {
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
  }

  .rank-item .rank-info .rank-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .rank-item .rank-info .rank-songs {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .rank-item .rank-info .rank-singername {
    color: #8f8f8f;
  }
</style>
