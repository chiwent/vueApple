<template>
    <div class="app">
        <header-bar></header-bar>

        <div class="padheader-content">
            <div class="padheader">
                <ul class="pad-items">
                    <li :class="'pad-item-'+index +' pad-item'" v-for="(item, index) in headbar" :key="item.id">
                        <a href="#" class="pad-item-link">
                            <img :src="item.img" class="pad-item-img">
                            <span class="pad-item-label">{{item.name}}</span>
                            <!-- 小电脑是否为新款 -->
                            <span class="pad-item-new" v-if="item.isnew">新款</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="machines">

            <div class="section-newipad">
                <div class="newipad-content">
                    <h2 class="product-headline">{{machines[0].headline}}</h2>
                    <h3 class="product-subheadline">{{machines[0].subheadline}}</h3>
                    <h3 class="product-subheadline">{{machines[0].subheadline2}}</h3>
                    <div class="product-more">
                        <a href="" class="more-product-cta">进一步了解</a>
                        <a href="" class="more-product-cta">购买</a>
                    </div>
                    <div class="newipad-img-content">
                        <img :src="machines[0].img" alt="" class="newipad-img">
                    </div>
                </div>
            </div>

            <div class="section-ipadpro">
                <div class="ipadpro-content">
                    <h2 class="product-headline ipadpro-headline">{{machines[1].headline}}</h2>
                    <h3 class="product-subheadline ipadpro-subheadline">{{machines[1].subheadline}}</h3>
                    <h3 class="product-subheadline ipadpro-subheadline">{{machines[1].subheadline2}}</h3>
                    <div class="product-more">
                        <a href="" class="more-product-cta ipadpro-cta">进一步了解</a>
                        <a href="" class="more-product-cta ipadpro-cta">购买</a>
                    </div>
                    <img :src="machines[1].img" alt="" class="ipadpro-img">
                </div>
            </div>

            <div class="section-accessories">
                <div class="accessories-content">
                    <div class="access1">
                        <h2 class="product-headline">{{machines[2].headline}}</h2>
                        <div class="product-more">
                            <a href="" class="more-product-cta">进一步了解</a>
                            <a href="" class="more-product-cta">购买</a>
                        </div>
                        <div class="pencil-img-content">
                            <img :src="machines[2].img" alt="" class="pencil-img">
                        </div>
                    </div>
                    <div class="access2">
                        <div class="keyborad-img-content">
                            <img :src="machines[3].img" alt="" class="keyboard-img">
                        </div>
                        <h2 class="product-headline">{{machines[3].headline}}</h2>
                        <div class="product-more">
                            <a href="" class="more-product-cta">进一步了解</a>
                            <a href="" class="more-product-cta">购买</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-compare">
                <div class="compare-content">
                    <div class="compare-img-content">
                        <img :src="all.compare.img" alt="" class="compare-img">
                    </div>
                    <div style="width:300px"></div>
                    <div class="compare-word">
                        <h2 class="product-headline compare-headline">{{all.compare.headline}}</h2>
                        <div class="product-more">
                            <a href="" class="more-product-cta compare-product-cta">找到适合你的iPad</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="change">
                <div class="change-content">
                    <div class="change-section-content">
                        <h2 class="change-headline">
                            把你现有的iPad，
                            <br> 折抵换购成一个新的。
                        </h2>
                        <p class="change-info">最好可获得 RMB 1,410 的折抵优惠
                            <sup>*</sup>。 通过 Apple GiveBack 回馈计划，
                            <br> 用你符合条件的iPad来以旧换新。这既有益于你，也有益于地球。
                        </p>
                        <a href="" class="product-more">进一步了解</a>
                    </div>
                    <div class="change-img-content">
                        <img :src="all.change.img" alt="" class="change-img">
                    </div>
                </div>
            </div>

            <div class="ar">
                <div class="ar-content">
                    <h2 class="product-headline">{{all.ar.headline}}</h2>
                    <h3 class="product-subheadline">{{all.ar.subheadline}}</h3>
                    <p class="product-subheadline">iPad 专为新一代增强现实类 app 而打造。从此，无论是工作、学习和玩乐，
                        <br> 还是你与现实世界沟通的方式，都将发生蜕变。
                    </p>
                    <div class="product-more">
                        <a href="" class="more-product-cta">进一步了解</a>
                    </div>
                    <div class="ar-img-content">
                        <img :src="all.ar.img" alt="" class="ar-img">
                    </div>
                </div>
            </div>

            <div class="ios">
                <div class="ios-content">
                    <h2 class="product-headline">{{all.ios.headline}}</h2>
                    <h2 class="product-headline">{{all.ios.headline2}}</h2>
                    <p class="product-subheadline">看看这些短片，了解 iOS 11 的种种新功能如何让你在 iPad 上做到更
                        <br> 多。你能从中学到很多实用技巧，比如怎样玩转全新的程序坞、更厉害的
                        <br> 多任务处理和强大易用的文件 app 等等。</p>
                    <div class="product-more">
                        <a href="" class="more-product-cta">观看影片</a>
                    </div>
                    <div class="ios-img-content">
                        <img :src="all.ios.img" alt="" class="ios-img">
                    </div>
                </div>
            </div>

            <div class="fit">
                <div class="fit-content">
                    <h2 class="product-headline">{{all.fit.headline}}</h2>
                    <p class="product-subheadline">{{all.fit.subheadline}}</p>
                    <div class="product-more">
                        <a href="" class="more-product-cta">选购IPad配件</a>
                    </div>
                    <div class="fit-img-content">
                        <img :src="all.fit.img" alt="" class="fit-img">
                    </div>
                </div>
            </div>

            <div class="service">
                <div class="service-content">
                    <div class="installment">
                        <figure class="logoLeft"></figure>
                        <p class="pay">分期付款</p>
                        <p class="subpay">符合条件的信用卡用户可选择灵活的分期付款方式。</p>
                        <div class="product-more">
                            <a href="" class="more-product-cta">进一步了解</a>
                        </div>
                    </div>
                    <div style="width:300px;"></div>
                    <div class="delivery">
                        <figure class="logoRight"></figure>
                        <p class="diliver">免费送货</p>
                        <p class="subdiliver">享受免费送货上门服务。</p>
                        <div class="product-more">
                            <a href="" class="more-product-cta">进一步了解</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swift">
                <div class="swift-content">
                    <div class="swift-img-content">
                        <img :src="all.swift.img" alt="" class="swift-img">
                    </div>
                    <div class="swift-word">
                    <div class="swift-icon-content">
                        <img :src="all.swift.icon" alt="" class="swift-icon">
                    </div>
                    <h2 class="product-headline swift-headline">{{all.swift.headline}}</h2>
                    <p class="product-subheadline swift-subheadline">{{all.swift.subheadline}}</p>
                    <div class="product-more">
                        <a href="" class="more-product-cta swift-cta">进一步了解</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="education">
                <div class="education-content">
                    <h2 class="product-headline edu-headline">{{all.education.headline}}</h2>
                    <p class="product-subheadline edu-subheadline">{{all.education.subheadline}}</p>
                    <div class="product-more">
                        <a href="" class="more-product-cta edu-cta">进一步了解iPad教育应用</a>
                        <a href="" class="more-product-cta edu-cta">教育选购</a>
                    </div>
                    <div class="education-img-content">
                        <img :src="all.education.img" alt="" class="education-img">
                    </div>
                </div>
            </div>

            <div class="business">
                <div class="business-content">
                    <h2 class="product-headline business-headline">{{all.business.headline}}</h2>
                    <p class="product-subheadline business-subheadline">{{all.business.subheadline}}</p>
                    <div class="product-more">
                        <a href="" class="more-product-cta business-cta">进一步了解iPad商务应用</a>
                        <a href="" class="more-product-cta business-cta">商务选购</a>
                    </div>
                    <div class="business-img-content">
                        <img :src="all.business.img" alt="" class="business-img">
                    </div>
                </div>
            </div>

            <footer-info></footer-info>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import footerInfo from '@/components/common/FooterInfo'
import tabNav from '@/components/common/TabNav'
import headerBar from '@/components/common/HeaderBar'
export default {
  data () {
    return {
      all: {},
      headbar: [],
      machines: []
    }
  },
  components: {
    headerBar,
    tabNav,
    footerInfo
  },
  mounted: function () {
    axios
      .get(
        'https://www.easy-mock.com/mock/5ae1d1d31147a527a322c6de/example/https:/www.easy-mock.com'
      ).then(response => {
        this.all = response.data
        this.headbar = response.data.headbar
        this.machines = response.data.machines
      })
      .catch(error => {
        if (error) { alert('网络错误') }
      })
  }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .app {
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    .padheader-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        color: #363636;
        background: rgba(242, 242, 242, 0.7);
    }

    .padheader {
        height: 100%;
    }

    .pad-items {
        list-style: none;
        padding: 0;
        padding-bottom: 48px;
        /* margin: 0; */

        animation: slide 0.5s linear;
    }

    @keyframes slide {
        0% {
            margin-right: -2300px;
        }
        50% {
            margin-right: -1300px;
        }
        100% {
            margin: 0;
        }
    }

    .pad-item {
        display: inline-block;
        margin-left: 0;
        padding-right: 20px;
        padding-left: 20px;
        height: 75px;
    }

    .pad-item:first-child {
        display: inline-block;
        margin-left: 0px;
        padding-right: 20px;
        height: 75px;
    }

    .pad-item-link {
        color: #fff;
        position: relative;
        text-decration: none;
    }

    .pad-item-link:hover {
        color: #6bf;
    }

    .pad-item-img {
        height: 54px;
    }

    .pad-item-label {
        font-size: 10px;
        font-weight: 300;
        line-height: 1.09091;
        display: block;
        color: #363636;
    }

    .pad-item-new {
        font-size: 8px;
        color: #f46c0e;
        letter-spacing: 0.017em;
        position: absolute;
        font-weight: 300;
        line-height: 1.22226;
        width: 48px;
        margin-top: 3px;
        font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        display: block;
        margin-left: -9px;
    }

    /* 下面的产品详细介绍 */

    /* 产品标题 */

    .product-headline {
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-size: 78px;
        line-height: 1.0625;
        font-weight: 500;
        margin-bottom: 5px;
        color: #333;
        letter-spacing: 0em;
    }

    /* 产品二级标题 */

    .product-subheadline {
        padding-left: 0.4em;
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        color: #333;
        margin-top: 0;
        margin-bottom: 2px;
        font-size: 37px;
        line-height: 1.1;
        font-weight: 400;
        letter-spacing: 0em;
    }

    /* 了解更多和购买 */

    .product-more {
        margin-top: 19px;
        display: inline-block;
        color: #0070c9;
    }

    .more-product-cta {
        margin: 0 10px;
        font-size: 18px;
        line-height: 1.38105;
        font-weight: 400;
        letter-spacing: 0.011em;
        position: relative;
        display: inline-block;
        margin-right: 25px;
        color: #0070c9;
    }

    /* 购买后面的伪元素 */

    .more-product-cta::after {
        content: "";
        padding-left: 0.4em;
        top: 7px;
        height: 0.4em;
        margin-left: 5px;
        border-top: 0.083em solid #0070c9;
        border-right: 0.083em solid #0070c9;
        transform: rotate(45deg);
        position: absolute;
    }

    .app {
        background-color: #fafafa;
        ;
    }

    /* new ipad */

    .section-newipad,
    .newipad-content {
        position: relative;
        background: #fafafa;
    }

    .section-newipad .newipad-content .product-headline {
        font-size: 72px;
        font-weight: 700;
        text-align: center;
        margin-top: 100px;
        margin-bottom: 30px;
    }

    .section-newipad .newipad-content .product-subheadline {
        font-size: 40px;
        text-align: center;
    }

    .section-newipad .newipad-content .product-more {
        margin: 30px auto;
        display: block;
        width: 210px;
    }

    .section-newipad .newipad-content .newipad-img-content {
        width: 969px;
        height: 410px;
        display: block;
        margin: 10px auto;
    }

    /* ipad pro */

    .ipadpro-content {
        height: 700px;
    }

    .section-ipadpro .ipadpro-content h2 {
        font-size: 72px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
    }

    .ipadpro-subheadline {
        font-size: 35px;
        text-align: center;
    }

    .ipadpro-content .product-more {
        margin: 30px auto;
        display: block;
        width: 210px;
    }

    .ipadpro-content .ipadpro-img {
        position: relative;
        width: 1078px;
        height: 299px;
        display: block;
        margin: 20px auto;
    }

    /* accessoreis */

    .section-accessories .accessories-content {
        display: flex;
        justify-content: space-around;
        margin-top: 200px;
        height: 700px;
    }

    .access1 .product-headline,
    .access2 .product-headline {
        font-size: 45px;
        font-weight: 700;
        position: relative;
        text-align: center;
    }

    .access1 .product-more {
        position: relative;
        display: block;
        width: 202px;
        margin: 30px auto;
    }

    .access2 .product-headline {
        margin-top: 20px;
    }

    .access2 .product-more {
        position: relative;
        display: block;
        width: 202px;
        margin: 30px auto;
    }

    /* ipad机型比较 */

    .section-compare .compare-content {
        display: flex;
        justify-content: center;
        margin-top: 150px;
        position: relative;
        height: 500px;
    }

    .compare-img {
        margin-top: 86px;
    }

    .compare-headline {
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        /* align-items: center; */
    }

    .compare-word {
        /* width:100%; */
        width: 300px;
    }

    .compare-content .product-more {
        position: relative;
        top: 200px;
    }

    .compare-product-cta {
        top: 60px;
    }

    /* 以旧换新 */

    .change-content {
        margin-top: 130px;
        height: 500px;
        display: flex;
        justify-content: space-around;
    }

    /* ar */

    .ar {
        height: 500px;
    }

    .ar-content {
        position: relative;
    }

    .ar-content h2 {
        position: absolute;
        font-size: 40px;
        font-weight: 600;
        z-index: 2;
        left: 55%;
        top: 35%;
        color: #fff;
    }

    .ar-content h3 {
        position: absolute;
        font-size: 25px;
        z-index: 2;
        left: 55%;
        top: 47%;
        color: #fff;
    }

    .ar-content p {
        position: absolute;
        font-size: 15px;
        left: 55%;
        top: 57%;
        color: #fff;
    }

    .ar-img-content {
        /* position: absolute; */
        align-items: center;
        width: 1352px;
        height: 501px;
        z-index: 1;
        margin: 0 auto;
    }

    .ar-content .product-more {
        position: absolute;
        top: 63%;
        left: 55%;
        z-index: 2;
    }

    .ar-content .product-more .more-product-cta {
        font-size: 15px;
        color: #fff;
    }

    .ar-content .product-more .more-product-cta::after {
        font-size: 15px;
        border-top: 0.083em solid #fff;
        border-right: 0.083em solid #fff;
        /* transform:rotate(45deg); */
    }

    /* ios11 */

    .ios {
        height: 500px;
        margin-top: 30px;
    }

    .ios-content {
        position: relative;
    }

    .ios-content h2:nth-of-type(1) {
        position: absolute;
        font-size: 48px;
        line-height: 1.08365;
        font-weight: 600;
        letter-spacing: 0.08em;
        font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        z-index: 2;
        left: 23%;
        top: 38%;
        color: #000;
    }

    .ios-content h2:nth-of-type(2) {
        position: absolute;
        font-size: 48px;
        line-height: 1.08365;
        font-weight: 600;
        letter-spacing: 0.08em;
        font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        z-index: 2;
        left: 23%;
        top: 53%;
        color: #000;
    }

    .ios-content p {
        position: absolute;
        font-size: 15px;
        left: 23%;
        top: 65%;
        color: #000;
        line-height: 25px;
    }

    .ios-content .product-more {
        position: absolute;
        top: 78%;
        left: 23%;
        z-index: 2;
    }

    .ios-img-content {
        /* position: absolute; */
        align-items: center;
        width: 1352px;
        height: 501px;
        z-index: 1;
        margin: 0 auto;
    }

    /* fit */

    .fit {
        height: 779px;
        margin-top: 30px;
        width: 1352px;
        margin-left: auto;
        margin-right: auto;
    }

    .fit-content {
        position: relative;
        padding-top: 20px;
        background-color: #f2f2f2;
        /* height:100px;  */
    }

    .fit-content .product-headline {
        font-size: 48px;
        line-height: 1.08365;
        font-weight: 600;
        letter-spacing: 0.08em;
        font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        z-index: 2;
        color: #000;
        margin: 20px auto;
        text-align: center;
    }

    .fit-content h2:nth-of-type(2) {
        position: absolute;
        font-size: 48px;
        line-height: 1.08365;
        font-weight: 600;
        letter-spacing: 0.08em;
        font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        z-index: 2;
        left: 23%;
        top: 53%;
        color: #000;
    }

    .fit-content p {
        font-size: 15px;
        left: 23%;
        top: 65%;
        color: #000;
        line-height: 25px;
        text-align: center;
        margin-bottom: 50px;
    }

    .fit-content .product-more {
        display: block;
        position: relative;
        width: 150px;
        margin: 10px auto;
        z-index: 2;
    }

    .fit-img-content {
        /* position: absolute; */
        align-items: center;
        width: 1352px;
        height: 501px;
        z-index: 1;
        /* margin: 0 auto; */
        margin-left: auto;
        margin-right: auto;
        bottom: 0;
    }

    .fit-img-content img {
        width: 100%;
        height: auto;
    }

    /* 分期付款和送货上门 */

    .service {
        position: relative;
        height: 450px;
    }

    .service-content {
        width: 100%;
        height: 100%;
        padding-top: 200px;
        display: flex;
        justify-content: center;
    }

    .installment {
        display: block;
    }

    .logoLeft,
    .logoRight {
        margin:0 auto;
        width: 40px;
        height: 44px;
        background-size: 40px 44px;
        background-repeat: no-repeat;
    }

    .logoLeft {
        background-image: url("https://www.apple.com/v/ipad/home/ag/images/home/pickup_icon_large.png");
    }
    .logoRight {
        background-image: url("https://www.apple.com/v/ipad/home/ag/images/home/shipping_icon_large.png");
    }
    .pay{
        text-align: center;
        margin-top: 10px;
    }
    .subpay{
        text-align:center;
        font-size: 8px;
        margin-top: 6px;
    }
    .diliver {
        text-align: center;
        margin-top: 10px;
    }
    .subdiliver {
        text-align: center;
        font-size: 8px;
        margin-top: 6px;
    }
    .service-content .product-more {
        position: relative;
        display: block;
        width: 96px;
        margin:10px auto;
    }
    .service-content .product-more a{
        font-size: 8px;
    }

    /* swift */
    .swift {
        position: relative;
        height: 450px;
    }
    .swift-content {
        display: flex;
        justify-content: space-around;
    }
    .swift-icon-content {
        position: relative;
        width:66px;
        display: block;
        margin:0 auto;
    }
    .swift-headline {
        font-size: 40px;
        font-weight: 600;
        text-align:center;
        margin-top: 30px;
    }
    .swift-subheadline {
        text-align: center;
        font-size: 18px;
        font-weight: 300;
        margin-top:30px;
    }

    /* education */
    .education {
        position: relative;
        height: 500px;
         margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
    }
    .education-content {
        position: relative;
        /* padding-top: 20px; */
        background-color: #f2f2f2;
        /* height:100px;  */
    }

    .education-content .product-headline {
        font-size: 48px;
        line-height: 1.08365;
        font-weight: 600;
        letter-spacing: 0.08em;
        font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        z-index: 2;
        color: #fff;
        margin: 20px auto;
        text-align: center;
        position: absolute;
        top: 20%;
        left: 42%;
    }

    .education-content p {
        font-size: 15px;
        color: #fff;
        line-height: 25px;
        text-align: center;
        margin-bottom: 50px;
        z-index:2;
        position: absolute;
        top: 40%;
        left: 42%;
    }

    .education-content .product-more {
        display: block;
        position: absolute;
        margin: 10px auto;
        z-index: 2;
        left:46%;
        top: 50%;
    }
    .edu-cta {
        display: block;
        text-align: center;
        width: 140x;
        font-size: 14px;
        color:#fff;
        margin:0 auto;
    }
    .edu-cta::after {
        font-size: 14px;
        border-top: 0.083em solid #fff;
        border-right: 0.083em solid #fff;
    }
    .education-img-content {
        /* position: absolute; */
        align-items: center;
        width: 1352px;
        /* height: 501px; */
        z-index: 1;
        /* margin: 0 auto; */
        margin-left: auto;
        margin-right: auto;
        bottom: 0;
    }

    .education-img-content img {
        z-index: 1;
        width: 100%;
        height: auto;
    }

    /* business */
    .business {
        position: relative;
        height: 500px;
         margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
    }
    .business-content {
        position: relative;
        /* padding-top: 20px; */
        background-color: #f2f2f2;
        /* height:100px;  */
    }

    .business-content .product-headline {
        font-size: 48px;
        line-height: 1.08365;
        font-weight: 600;
        letter-spacing: 0.08em;
        font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        z-index: 2;
        color: #fff;
        margin: 20px auto;
        text-align: center;
        position: absolute;
        top: 20%;
        left: 42%;
    }

    .business-content p {
        font-size: 15px;
        color: #fff;
        line-height: 25px;
        text-align: center;
        margin-bottom: 50px;
        z-index:2;
        position: absolute;
        top: 40%;
        left: 42%;
    }

    .business-content .product-more {
        display: block;
        position: absolute;
        margin: 10px auto;
        z-index: 2;
        left:46%;
        top: 50%;
    }
    .business-cta {
        display: block;
        text-align: center;
        width: 140x;
        font-size: 14px;
        color:#fff;
        margin:0 auto;
    }
    .bussiness-cta::after {
        font-size: 14px;
        border-top: 0.083em solid #fff;
        border-right: 0.083em solid #fff;
    }
    .business-img-content {
        /* position: absolute; */
        align-items: center;
        width: 1352px;
        /* height: 501px; */
        z-index: 1;
        /* margin: 0 auto; */
        margin-left: auto;
        margin-right: auto;
        bottom: 0;
    }

    .business-img-content img {
        z-index: 1;
        width: 100%;
        height: auto;
    }
</style>
