<template>
  <div class="body">
    <header-bar></header-bar>
    <div class="major">
      <div class="major-0">
        <div class="major-0-wrapper">
          <h2 class="headline">{{major[0].title}}</h2>
          <h3 class="subheadline">{{major[0].description}}</h3>
        </div>
        <div class="major-0-img">
          <img :src="major[0].img" class="iphoneX">
        </div>
      </div>
      <div class="major-1">
        <div class="major-1-wrapper">
          <h2 class="headline" style="display:none;width:0;height:0;">{{major[1].title}}</h2>
          <span class="violator">特别版</span>
          <h3 class="subheadline">{{major[1].description}}</h3>
        </div>
        <div class="major-1-img">
          <img :src="major[1].img" class="iphone8">
        </div>
      </div>
      <div class="major-2">
        <div class="major-2-wrapper">
          <h2 class="headline">{{major[2].title}}</h2>
          <h3 class="subheadline now">{{major[2].description}}</h3>
        </div>
        <div class="major-2-img">
          <img :src="major[2].img" class="choosenow">
        </div>
      </div>
    </div>
    <!-- <div class="foot">
          <ul class="ads">
            <li class="ads-0">
              <div class="ads-wrapper">
                <h4 class="logo-title">
                  <img class="logo-image" :src="ads[0].title">
                </h4>
                <h5 class="logo-subheader">{{ads[0].description}}</h5>
              </div>
              <div class="ads-0-img">
                <img :src="ads[0].img">
              </div>
            </li>
            <li class="ads-1">
              <div class="ads-1-img">
                <img :src="ads[1].img">
              </div>
            </li>
            <li class="ads-2">
              <div class="ads-wrapper">
                <h4 class="logo-title ads-2-title">
                  <div class="logo-title-font">
                    {{ads[2].title}}
                  </div>
                </h4>
                <h5 class="logo-subheader ads-2-font">{{ads[2].description}}</h5>
              </div>
              <div class="ads-2-img">
                <img :src="ads[2].img">
              </div>
            </li>
            <li class="ads-3">
              <div class="ads-wrapper">
                <h4 class="logo-title ads-3-title">
                  <div class="logo-title-font">
                    {{ads[3].title}}
                  </div>
                </h4>
                <h5 class="logo-subheader ads-3-font">{{ads[3].description}}</h5>
              </div>
              <div class="ads-3-img">
                <img :src="ads[3].img">
              </div>
            </li>
            <li class="ads-4">
              <div class="ads-4-wrapper">
                <h4 class="logo-4-title">
                  <img class="logo-image logo-4-image" :src="ads[4].title">
                </h4>
                <h5 class="logo-subheader logo-4-info">{{ads[4].description}}</h5>
              </div>
              <div class="ads-4-img">
                <img :src="ads[4].img">
              </div>
            </li>
            <li class="ads-5">
              <div class="ads-5-wrapper">
                <h4 class="logo-title logo-5-title">{{ads[5].title}}</h4>
              </div>
              <div class="ads-5-img">
                <img :src="ads[5].img">
              </div>
            </li>
          </ul>
        </div> -->
    <section class="promos">
      <ul class="promos-count">
        <li class="cols">
          <div class="macpro">
            <div class="unit-wrapper">
              <a href="" class="unit-link">
                <span class="visuallyhidden"></span>
              </a>
              <div class="unit-copy-wrapper">
                <h4 class="headline2 macpro-headline">{{all.macpro.headline}}</h4>
                <h5 class="subheadline2 macpro-subheadline">{{all.macpro.subheadline}}</h5>
              </div>
              <div class="unit-img-wrapper">
                <img :src="all.macpro.img" alt="" class="macpro-img">
              </div>
            </div>
          </div>
        </li>
        <li class="cols">
          <div class="watch">
            <div class="unit-wrapper">
              <a href="" class="unit-link">
                <span class="visuallyhidden"></span>
              </a>
              <div class="unit-copy-wrapper">
                <!-- <h4 class="watch-headline">{{all.watch.headline}}</h4>
                <h5 class="watch-headline2">{{all.watch.subheadline}}</h5> -->
                <img :src="all.watch.logo" alt="" class="watch-logo">
                <h5 class="subheadline2 watch-subheadline">{{all.watch.subheadline2}}</h5>
              </div>
              <div class="unit-img-wrapper">
                <img :src="all.watch.img" alt="" class="watch-img">
              </div>
            </div>
          </div>
        </li>
        <li class="cols">
          <div class="change">
            <div class="unit-wrapper">
              <a href="" class="unit-link">
                <span class="visuallyhidden"></span>
              </a>
              <div class="unit-copy-wrapper">
                <h4 class="headline2 change-headline">{{all.change.headline}}</h4>
                <h5 class="subheadline2 change-subheadline">{{all.change.subheadline}}</h5>
              </div>
              <div class="unit-img-wrapper">
                <img :src="all.change.img" alt="" class="change-img">
              </div>
            </div>
          </div>
        </li>
        <li class="cols">
          <div class="choose">
            <div class="unit-wrapper">
              <a href="" class="unit-link">
                <span class="visuallyhidden"></span>
              </a>
              <div class="unit-copy-wrapper">
                <h4 class="headline2 choose-headline">{{all.choose.headline}}</h4>
                <h5 class="subheadline2 choose-subheadline">{{all.choose.subheadline}}</h5>
              </div>
              <div class="unit-img-wrapper">
                <img :src="all.choose.img" alt="" class="choose-img">
              </div>
            </div>
          </div>
        </li>
        <li class="cols">
          <div class="applepay">
            <div class="unit-wrapper">
              <a href="" class="unit-link">
                <span class="visuallyhidden"></span>
              </a>
              <div class="unit-copy-wrapper">
                <img :src="all.applepay.logo" alt="" class="applepay-logo">
                <h4 class="headline2 applepay-headline">{{all.applepay.headline}}</h4>
                <h5 class="subheadline2 applepay-subheadline">{{all.applepay.subheadline}}</h5>
              </div>
              <div class="unit-img-wrapper">
                <img :src="all.applepay.img" alt="" class="applepay-img">
              </div>
            </div>
          </div>
        </li>
        <li class="cols">
          <div class="giveback">
            <div class="unit-wrapper">
              <a href="" class="unit-link">
                <span class="visuallyhidden"></span>
              </a>
              <div class="unit-copy-wrapper">
                <h4 class="headline2 giveback-headline">{{all.giveback.headline}}</h4>
                <h4 class="headline2 givevack-headline">{{all.giveback.headline2}}</h4>
                <h5 class="subheadline2 giveback-subheadline">{{all.giveback.subheadline}}</h5>
                <div class="product-more">
                        <a href="" class="more-product-cta giveback-cta">进一步了解</a>
                    </div>
              </div>
              <div class="unit-img-wrapper">
                <img :src="all.giveback.img" alt="" class="giveback-img">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <footer-info></footer-info>
  </div>
</template>

<script>
import axios from 'axios'
import footerInfo from '@/components/common/FooterInfo'
import headerBar from '@/components/common/HeaderBar'
export default {
  data () {
    return {
      all: {},
      major: []
      // ads: []
    }
  },
  mounted: function () {
    axios
      .get(
        'https://www.easy-mock.com/mock/5ae1d1d31147a527a322c6de/example/'
      )
      .then(response => {
        this.all = response.data
        this.major = response.data.major
        // this.ads = response.data.ads;
      })
      .catch(error => {
        if (error) { alert('网络错误') }
      })
  },
  components: {
    footerInfo,
    headerBar
  }
}
</script>

<style scoped>
  .headline {
    text-align: center;
    font-size: 56px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.07143;
    letter-spacing: -0.005em;
    font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  .major-0-wrapper h3 {
    text-align: center;
    margin-top: 18px;
    margin-bottom: 0;
    font-size: 23px;
    font-weight: 400;
    letter-spacing: 0.008em;
    line-height: 1.14815;
    color: #000;
    font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  .major-0 {
    cursor: pointer;
    width: 100%;
    height: 692px;
    margin-top: 0;
    background: #fafafa;
    position: relative;
    border-bottom: 12px solid #fff;
  }

  .major-0-wrapper {
    padding-top: 117px;
  }

  .major-0-img {
    margin-top: 315px;
  }

  .iphoneX {
    position: absolute;
    left: calc(50% - 491px);
    top: 315px;
  }

  .major-1 {
    cursor: pointer;
    width: 100%;
    background: #be0017;
    height: 692px;
    position: relative;
    border-bottom: 12px solid #fff;
  }

  .major-1-wrapper {
    padding-top: 55px;
    text-align: center;
  }

  .major-1-wrapper span {
    font-size: 17px;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -.022em;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    color: #fff;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 4px;
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 4px;
    padding-bottom: 4px;
    white-space: nowrap
  }

  .major-1-wrapper h3 {
    text-align: center;
    margin-top: 18px;
    margin-bottom: 0;
    font-size: 56px;
    font-weight: 400;
    letter-spacing: 0.008em;
    line-height: 1.14815;
    color: #fff;
    font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  .iphone8 {
    bottom: 0;
    position: absolute;
    width: 334px;
    height: 335px;
    right: auto;
    left: calc(50% 0px);
    transform: translateX(230%);
  }

  .major-2 {
    cursor: pointer;
    height: 740px;
    background: #f5f5f5;
    position: relative;
    overflow: hidden;
  }

  .major-2-wrapper {
    padding-top: 55px;
  }

  .major-2-wrapper {
    text-align: center;
  }

  .major-2-wrapper h3 {
    font-weight: 200;
  }

  .major-2-img {
    position: relative;
    top: 600px;
  }

  .major-2-img img {
    z-index: 1;
    position: absolute;
    border: 0;
    margin: 0;
    padding: 0;
    left: calc(50% + 0px);
    right: auto;
    bottom: 0px;
    top: auto;
    -webkit-transform: translatex(-50%);
    -ms-transform: translatex(-50%);
    transform: translatex(-50%)
  }

  .now {
    font-size: 25px;
  }

  .choosenow {
    position: absolute;
    left: calc(50% - 423px);
    bottom: -273px;
  }

  /* 两列布局 */
.promos{
  position: relative;
}
.promos-count {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;
  padding: 20px;
}
.cols {
  /* border: 6px solid #fff; */
  background-color: #fafafa;
  height: 592px;
  width: 50%;
  margin-top: 10px;
  /* width: 598px; */
}
/* .macpro{
  cursor: pointer;
} */
.unit-wrapper{
  position: relative;
  text-align: center;
}
.unit-wrapper a{
 cursor: pointer;
}
.unit-img-wrapper img{
  position: relative;
  display: block;
  /* width:100%; */
  margin:0 auto;
}
.unit-copy-wrapper {
  margin-top: 50px;
}
.headline2 {
  font-size: 38px;
}

.section1-right {
   /* border: 6px solid #fff; */
  background-color: #fafafa;
}
.cols:nth-of-type(2){
  background:#ededee;
}

.cols:nth-of-type(3) {
  height: 530px;
}
.change {
  position: relative;
  height: 100%;
}
.change-headline {
  margin-top: 60px;
}
.change .unit-copy-wrapper {
  z-index: 1;
  position: absolute;
  width: 100%;
  display: block;
  margin:0 auto;

}
.change .unit-wrapper {
  height: 100%;
}
.change .unit-img-wrapper {
  position: absolute;
  bottom: 0;
  height: 100%;
}
.change-img {
  width: 100%;
  height:100%;
}

/* why choose iPhone */
.cols:nth-of-type(4) {
  height: 530px;
  background-color: #3b8594;
}
.choose {
  position: relative;
  height: 100%;
}
.choose-headline {
  margin-top: 60px;
}
.choose .unit-copy-wrapper {
  z-index: 1;
  position: absolute;
  width: 100%;
  display: block;
  margin:0 auto;
}
.choose .unit-wrapper {
  height: 100%;
}
.choose .unit-img-wrapper {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.choose-img {
  position: absolute;
  bottom:0;
  width: 100%;
  height: 100%;
}

/* apple pay*/
.cols:nth-of-type(5) {
  height: 580px;
}
.applepay {
  position: relative;
  height: 100%;
}
.applepay-logo {
  margin-top: 30px;
}
.applepay-headline {
  margin-top: 20px;
}
.applepay .unit-copy-wrapper {
  z-index: 1;
  position: absolute;
  width: 100%;
  display: block;
  margin:0 auto;
}
.applepay .unit-wrapper {
  height: 100%;
}
.applepay .unit-img-wrapper {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.applepay-img {
  position: absolute;
  bottom:0;
  width: 100%;
  height: 100%;
}

/* giveback*/
.cols:nth-of-type(6) {
  height: 580px;
}
.giveback {
  position: relative;
  height: 100%;
}
.giveback-logo {
  margin-top: 30px;
}
.giveback-headline {
  margin-top: 60px;
}
.giveback .unit-copy-wrapper {
  z-index: 1;
  position: absolute;
  width: 100%;
  display: block;
  margin:0 auto;
}
.giveback .unit-wrapper {
  height: 100%;
}
.giveback .unit-img-wrapper {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.giveback-img {
  position: absolute;
  bottom:0;
  width: 100%;
  height: 100%;
}
/* .unit-img-wrapper img{
  z-index: 1;
  position: absolute;
  border: 0;
  margin: 0;
  padding: 0;
  left: calc(50% + 0px);
  right: auto;
  bottom: 0;
  top: auto;
  transform: translateX(-50%);
} */

  /* .ads {
      width: 100%;
      display: inline-block;
      list-style: none;
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      border-left: 6px solid #fff;
      border-right: 6px solid #fff;
      border-top: 6px solid #fff;
      box-sizing: border-box;
      padding: 0;
    }
    .ads li {
      cursor: pointer;
      width: 50%;
      height: 592px;
      float: left;
      border: 6px solid #fff;

      box-sizing: border-box;
      overflow: hidden;
    }
    .ads-0 {
      position: relative;
    }
    .ads-wrapper {
      position: absolute;
      z-index: 2;
      text-align: center;
      width: 100%;
    }
    .logo-title {
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;
      height: 90px;
      font-size: 40px;
    }
    .logo-image {
      text-align: center;
      margin-top: 57px;
      width: 129px;
      height: 33px;
      bottom: 0;
      z-index: 3;
    }
    .logo-subheader {
      margin-top: 10px;
      margin-bottom: 0;
      font-size: 19px;
      color: #fff;
      font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
        "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-weight: 300;
    }
    .ads-0-img,
    .ads-1-img {
      position: absolute;
      left: calc(50% - 631px);
      z-index: 1;
    }
    .ads-1 {
      position: relative;
    }
    .ads-2 {
      position: relative;
      background: #fafafa;
    }
    .ads-2-font {
      color: #333;
    }
    .logo-title-font {
      margin-top: 52px;
      height: 44px;
      bottom: 0;
    }
    .ads-2-title {
      height: 44px;
    }
    .ads-2-img {
      position: absolute;
      top: calc(50% - 73px);
      left: calc(50% - 255px);
      padding-top: 55px;
    }
    .ads-3 {
      position: relative;
      background: rgb(26, 26, 26);
    }
    .ads-3-title {
      height: 44px;
      color: #fff;
      line-height: 44px;
    }
    .ads-3-font {
      font-weight: 150;
      font-size: 18px;
      margin-top: 4px;
    }
    .ads-3-img {
      position: absolute;
      left: calc(50% - 225px);
      bottom: 0;
      height: 457px;
    }
    .ads-4 {
      position: relative;
      background: #fafafa;
    }
    .logo-4-title {
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;
      height: 111px;
      font-size: 40px;
      text-align: center;
    }
    .logo-4-image {
      width: 142px;
      height: 54px;
      text-align: center;
    }
    .logo-4-info {
      color: #333;
      text-align: center;
      font-weight: 300;
    }
    .ads-4-img {
      position: absolute;
      margin-top: 55px;
      left: calc(50% - 293px);
    }
    .ads-5 {
      position: relative;
      background: #fafafa;
    }
    .ads-5-wrapper {
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;
      height: 140px;
      font-size: 40px;
      text-align: center;
      padding-top: 52px;
    }
    .logo-5-title {
      margin: auto;
      font-size: 38px;
      width: 430px;
      height: 88px;
      color: #111;
      line-height: 44px;
    }
    .ads-5-img {
      padding-top: 55px;
      position: absolute;
      top: calc(50% - 81px);
      left: calc(50% - 66px);
    } */
</style>
