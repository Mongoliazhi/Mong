<template>
  <div class="footer">
    <transition name="play-slide"
                @after-enter="showBlurBg"
                @before-leave="hideBlurBg"
                @after-leave="routerViewAnimation='page-slide'">
    <play v-show="playPageShow"></play>
    </transition>
    <div class="index_footer">
      <p class="footer_line"></p>
      <ul class="footer_ul nav_noactive">
        <li class="nav_active">
          <router-link to="/main">
            <i class="iconfont gj-shouye"></i>
            <p>首页</p>
          </router-link>
        </li>

        <li>
          <router-link to="/music">
            <i class="iconfont icon-erji"></i>
            <p>Music</p>
          </router-link>
        </li>

        <li>
          <a @touchstart="showPlayPage" @click="showPlayPage">
            <img class="footer_logoimg" style="border: 2px solid #E38FA6;" src="../../../static/images/erji.png" alt="">
          </a>
        </li>

        <li>
          <router-link to="/cart">
            <i class="iconfont gj-xinpintuijian"></i>
            <p>方向</p>
          </router-link>
        </li>
        <li>
          <router-link to="/my">
            <i class="iconfont gj-wode1"></i>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Play from '../music/Play'
  export default {
    name: 'footer',
    data () {
      return {
        msg: 'footer',
        playPageShow:false,
        routerViewAnimation: 'page-slide',
      }
    },
    components:{
      Play
    },
    watch: {
      message: {},
    },
    methods: {
      setLicolor(a){
        console.log(a)
        var li = document.querySelectorAll(".footer_ul li");
        li.forEach(function (ali, index) {
          li[index].setAttribute("class", "");
        })
        li[a].setAttribute("class", "nav_active");
        li[a].querySelectorAll("p")[0].style.color = "red"
      },
      showPlayPage(event) {
        event.preventDefault()

        if(this.playPageShow){
          this.playPageShow = false
        }else{
          this.playPageShow = true
        }
      },
      hidePlayPage(event) {
        event.preventDefault()
        this.playPageShow = false
      },
      showBlurBg() {
        this.routerViewAnimation = 'fade'
        this.blurBgShow = true
      },
      hideBlurBg () {
        this.blurBgShow = false
      },
    },

    created(){

    },

    mounted(){
      var self = this;
      this.$nextTick(function () {

        switch (this.$route.name) {
          case 'main1':
            self.setLicolor(0)
            break;
          case 'classfig':
            self.setLicolor(1)
            break;
          case 'music':
            self.setLicolor(1)
            break;
          case 'cart':
            self.setLicolor(3)
            break;
          case 'my':
            self.setLicolor(4)
            break;
        }


      })
    }
  }


</script>

<style lang="sass" scoped>
  .index_footer
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    background-color: #fff
    z-index: 201
    .footer_line
      position: absolute
      top: -2px
      left: 0
      width: 100%
      height: 2px
      background: linear-gradient(to right, #DF9E49, #EDD87B, #E8B659, #DA9D42, #FCECCB, #FFFFFD, #EDCF81, #E6BD6B, #C77625)
    .footer_ul
      width: 100%
      display: -webkit-box
      display: -webkit-flex
      display: flex
      -webkit-flex-direction: row
      flex-direction: row
      li

        -webkit-box-flex: 1
        -webkit-flex: 1
        flex: 1
        width: 20%
        text-align: center
        padding: 0.4rem 0
        a
          position: relative
          overflow: auto
          i
            font-size: 1.6rem
            margin-bottom: 0.2rem
          b
            position: absolute
            right: -0.9rem
            top: -0.9rem
            width: 1.4rem
            height: 1.4rem
            line-height: 1.4rem
            background-color: #E54239
            color: #ffffff
            border-radius: 50%

        .footer_logoimg
          position: absolute
          left: 50%
          margin-left: -2.5rem
          margin-top: -1.6rem
          width: 5rem
          height: 5rem
          border-radius: 50%
      li:nth-child(3)
        flex: 1.2
    .nav_active
      color: red

  .play-slide-enter-active
    transition: all .3s ease
  .play-slide-leave-active
    transition: all .3s ease-out

  .play-slide-enter, .play-slide-leave-active
    transform: translateY(100vh)

  .bar-slide-enter-active
    transition: all .3s ease

</style>
