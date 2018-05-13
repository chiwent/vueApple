<template>
    <div @click="showBag">
        <div class="adv-wrapper">
            <div class="adv-wrapper-text">&lt; 广告 &gt;</div>
        </div>
        <div class="header">
            <div class="head-bar">
                <ul class="header-list">
                    <li class="header-item head-apple">
                        <router-link to="/">
                            <i class="icon iconfont icon-iconfontapple"></i>
                        </router-link>
                    </li>
                    <li class="header-item head-mac">
                        <router-link to="/mac">Mac</router-link>
                    </li>
                    <li class="header-item head-ipad">
                        <router-link to="/pad">iPad</router-link>
                    </li>
                    <li class="header-item head-iphone">
                        <router-link to="/phone">iPhone</router-link>
                    </li>
                    <li class="header-item head-watch">
                        <router-link to="/watch">Watch</router-link>
                    </li>
                    <li class="header-item head-music">
                        <router-link to="/music">Music</router-link>
                    </li>
                    <li class="header-item head-support">
                        <router-link to="/support">技术支持</router-link>
                    </li>
                    <li class="header-item head-search" to="">
                        <i class="icon iconfont icon-search"></i>
                    </li>
                    <li class="header-item head-bag">
                        <router-link to="">
                            <i class="icon iconfont icon-bag-copy"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <!--<div class="bagview" id="bag">
                            <div class="bag-content">
                                <p class="bag-message-empty">你的购物袋是空的</p>
                                <nav class="bagview-nav">
                                    <ul class="bagview-nav-list">
                                        <li class="bagview-nav-item">
                                            <a href="" class="bagview-nav-link">购物袋</a>
                                        </li>
                                        <li class="bagview-nav-item">
                                            <a href="" class="bagview-nav-link">收藏</a>
                                        </li>
                                        <li class="bagview-nav-item">
                                            <a href="" class="bagview-nav-link">订单</a>
                                        </li>
                                        <li class="bagview-nav-item">
                                            <a href="" class="bagview-nav-link">账户</a>
                                        </li>
                                        <li class="bagview-nav-item">
                                            <a href="" class="bagview-nav-link">登录</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
              </div>-->

        <!--<aside id="ac-gn-searchview" class="ac-gn-searchview" role="search" data-analytics-region="search">
                			<div class="ac-gn-searchview-content">
                				<form id="ac-gn-searchform" class="ac-gn-searchform" action="/cn/search" method="get">
                					<div class="ac-gn-searchform-wrapper">
                						<input id="ac-gn-searchform-input" class="ac-gn-searchform-input" type="text" aria-label="搜索 apple.com" placeholder="搜索 apple.com" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" />
                						<input id="ac-gn-searchform-src" type="hidden" name="src" value="globalnav" />
                						<button id="ac-gn-searchform-submit" class="ac-gn-searchform-submit" type="submit" disabled aria-label="提交"></button>
                						<button id="ac-gn-searchform-reset" class="ac-gn-searchform-reset" type="reset" disabled aria-label="清除搜索"></button>
                					</div>
                				</form>
                				<aside id="ac-gn-searchresults" class="ac-gn-searchresults" data-string-quicklinks="快速链接" data-string-suggestions="搜索结果建议" data-string-noresults=""></aside>
                			</div>
                			<button id="ac-gn-searchview-close" class="ac-gn-searchview-close" aria-label="关闭搜索">
                					<span class="ac-gn-searchview-close-wrapper">
                						<span class="ac-gn-searchview-close-left"></span>
                						<span class="ac-gn-searchview-close-right"></span>
                					</span>
                				</button>
          </aside>-->

        <aside class="ac-gn-bagview" data-analytics-region="bag" id="bag">
            <div class="ac-gn-bagview-scrim">
                <span class="ac-gn-bagview-caret ac-gn-bagview-caret-small"></span>
            </div>
            <div class="ac-gn-bagview-content" id="ac-gn-bagview-content">
                <p class="ac-gn-bagview-message ac-gn-bagview-message-empty">
                    你的购物袋是空的
                </p>
                <nav class="ac-gn-bagview-nav">
                    <ul class="ac-gn-bagview-nav-list ac-gn-bagview-nav-nobtn">
                        <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-bag">
                            <a href="#" data-evar1="[pageName] |  | bag overlay |  | bag" class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-bag" data-ac-autom="gn-bagview-link-bag">
                                    购物袋
                                </a>
                        </li>
                        <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-favorites">
                            <a href="#" data-evar1="[pageName] |  | bag overlay |  | favorites" class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-favorites" data-ac-autom="gn-bagview-link-favorites">
                                    收藏
                                </a>
                        </li>
                        <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-orders">
                            <a href="#" data-evar1="[pageName] |  | bag overlay |  | orders" class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-orders" data-ac-autom="gn-bagview-link-orders">
                                    订单
                                </a>
                        </li>
                        <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-account">
                            <a href="#" data-evar1="[pageName] |  | bag overlay |  | account" class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-account" data-ac-autom="gn-bagview-link-account">
                                    账户
                                </a>
                        </li>
                        <li class="ac-gn-bagview-nav-item ac-gn-bagview-nav-item-signIn">
                            <a href=""
                                data-evar1="[pageName] |  | bag overlay |  | signIn" class="ac-gn-bagview-nav-link ac-gn-bagview-nav-link-signIn" data-ac-autom="gn-bagview-link-signIn">
                                    登录
                                </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </aside>

    </div>
</template>

<script>
export default {
  methods: {
    // showBag(v) {
    //     // console.log(v);
    //     var bag = document.getElementById('bag');
    //     if (v.target.className == "icon iconfont icon-bag-copy") {
    //         bag.style.display = 'block';
    //     } else {
    //         bag.style.display = 'none';
    //     }
    // }
    showBag (v) {
      // console.log(v);
      var bag = document.getElementById('bag')
      // console.log(bag);
      if (v.target.className === 'icon iconfont icon-bag-copy') {
        bag.style.display = 'block'
      } else {
        bag.style.display = 'none'
      }
    }
    // blur(e){
    //     e = e || window.event;
    //     var bag = document.getElementById('bag');
    //     if(bag.style.display === 'block')
    //         bag.style.display = 'none';
    // }
  }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .adv-wrapper {
        width: 100%;
        height: 40px;
        background: #444;
    }

    .adv-wrapper-text {
        width: 976px;
        height: 40px;
        margin: auto;
        font-size: 10px;
        font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro", "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 150;
        color: #a8a8aa;
        text-align: right;
        line-height: 40px;
        font-style: normal;
    }

    .header {
        width: 100%;
        height: 44px;
        background: rgba(0, 0, 0, 0.8);
    }

    .head-bar {
        width: 1000px;
        height: 44px;
        margin: auto;
    }

    .header-list {
        margin-top: 0;
        margin-bottom: 0;
        padding: 0;
        height: 44px;
        position: absolute;
        cursor: pointer;
        list-style: none;
        width: auto;
        color: white;
        font-size: 13px;
        font-weight: 100;
    }

    .header-item {
        height: 44px;
        margin-left: 64px;
        display: inline-block;
        vertical-align: top;
        opacity: 1;
    }

    .header-item a {
        text-decoration: none;
        width: 40px;
        height: 44px;
        color: #fff;
        padding: 0 10px;
        line-height: 44px;
        text-align: center;
        font-size: 1em;
    }

    .header-item :hover {
        opacity: 0.65;
    }

    .head-apple {
        margin-left: 0;
        width: 40px;
    }

    .icon-iconfontapple {
        font-size: 19px;
    }

    .head-mac {
        width: 48px;
    }

    .head-ipad {
        width: 46.98px;
    }

    .head-iphone {
        width: 64px;
    }

    .head-watch {
        width: 59.98px;
    }

    .head-music {
        width: 57px;
    }

    .head-support {
        width: 75px;
        /* font-size: 1em; */
    }

    .head-search {
        padding-top: 13px;
        width: 36px;
    }

    .head-bag {
        width: 34px;
    }

    .icon-bag-copy {
        font-size: 16px;
    }

    /* 购物袋的样式 */

    .bagview {
        width: 288px;
        height: 309px;
        box-sizing: content-box;
        border: 1px solid #d6d6d6;
        border-radius: 2px;
        background: white;
        opacity: 1;
        z-index: 9;
        position: absolute;
        margin-left: 1262px;
        margin-top: 4px;
        display: none;
    }

    .bagview::before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background: white;
        border-top: 1px solid #d6d6d6;
        border-left: 1px solid #d6d6d6;
        opacity: 1;
        z-index: 9;
        transform: rotate(45deg);
        margin-left: 135px;
        margin-top: -7px;
    }

    .bag-content {
        margin: 0 auto;
        min-height: 90px;
        padding: 0 20px;
        position: relative;
        z-index: 2;
        font-size: 13px;
    }

    .bag-message-empty {
        color: #888;
        padding: 35px 0;
        margin: 0;
        text-align: center;
        letter-spacing: normal;
        font-weight: 300;
        font-family: inherit;
    }

    .bagview-nav {
        margin-bottom: 2px;
        width: 248px;
        height: 220px;
        margin: 0 auto;
        box-sizing: content-box;
    }

    .bagview-nav-list {
        list-style: none;
        border-top: 1px solid #e3e3e3;
    }

    .bagview-nav-item {
        margin: 0;
        padding: 0;
        border-top: 1px solid #e3e3e3;
    }

    .bagview-nav-item:first-child {
        border-top-style: none;
    }

    .bagview-nav-link {
        color: #0688f3;
        display: block;
        line-height: 43px;
        padding: 0 30px;
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* font-weight: 300; */
    }

    /* .bagview-nav-link:nth-of-type(1) {
        background-image: none, url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/bag.svg");
        background-repeat: no-repeat;
        background-position: 3px 45%;
    }

    .bagview-nav-link:nth-of-type(2) {
        background-image: none, url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/favorites.svg");
        background-repeat: no-repeat;
        background-position: 3px 45%;
    }

    .bagview-nav-link:nth-of-type(31) {
        background-image: none, url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/bag.svg");
        background-repeat: no-repeat;
        background-position: 3px 45%;
    }

    .bagview-nav-link:nth-of-type(4) {
        background-image: none, url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/bag.svg");
        background-repeat: no-repeat;
        background-position: 3px 45%;
    }

    .bagview-nav-link:nth-of-type(5) {
        background-image: none, url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/bag.svg");
        background-repeat: no-repeat;
        background-position: 3px 45%;
    }

    .bagview-nav-link:hover {
        text-decoration: underline;
    } */

    @font-face {
        font-family: "iconfont";
        src: url('//at.alicdn.com/t/font_553053_g2m0ns1yioogvi.eot?t=1516950867708');
        /* IE9*/
        src: url('//at.alicdn.com/t/font_553053_g2m0ns1yioogvi.eot?t=1516950867708#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAf8AAsAAAAADCAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7ksfY21hcAAAAYAAAACWAAACAg2pb6hnbHlmAAACGAAAA64AAAUwNjc+gGhlYWQAAAXIAAAALwAAADYQQTCjaGhlYQAABfgAAAAcAAAAJAfeA4pobXR4AAAGFAAAABQAAAAkI+kAAGxvY2EAAAYoAAAAFAAAABQF3Ac4bWF4cAAABjwAAAAfAAAAIAEbAF1uYW1lAAAGXAAAAUUAAAJtPlT+fXBvc3QAAAekAAAAVwAAAG/mT5WVeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/ss4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVLw0YG7438AQw9zA0AAUZgTJAQAoxwykeJzFkcsNwjAQRGeJCRHiQBe5IMWHlJBLuqAEjimCE0WO5CrCrDcSnwYy1rO0I39WswCOABpxEwmwFwyup1yrfoNz9RPuqq9afn5hz8yRE+eS1/XPGarzLas3P8udhJPeatXDAZ2MFrvJ9vv6V5e6P7ZKqWDZUIvsA58Uc6AMwTHwyXAKlCs4Bz7lMgTKGiUH6N6H7Sa8AAB4nNVTzW8bRRSfNxOvvzZ292t2bcderzf2xrXjqOuPrZ1kgytHkIqkqBGKIEFKkDDhkN7aSIiDJUQaVwgoBw5RigAV9YIqlAtCioREcuBAD1w4IUEF916QegBvmLUbJP4EZmfem6d5s+/3fu8NCiB09pgcEw1JaApdQh30EkLAlSAXw2kwrFoFl0AxAooqx4hlWkbQzFXIPKg5TqZ2o1ZQuSAXhxhkoGrYDauCLajXXDwLNk0DJFLJVTE/IZKPIKJZmfe8q/gLUHRzIu5Oe0vlBdnOSqFdXhQTovh+iAsEQhiPxWOwo9JwIBzhvPuBeFI51otYBz5hJV98ZTybErf2azfSeTUM0OuBlMrGHiwISYHNd5JUEhPBC+MhLTluTsqw+0dUk/h04XfERojlekoOyByiKIMMNI2aqI0W0RLL2IV6BawYBEdSpqopGEKQrarqzIBqOhlQR8cuBFz411SDqlMVjAQYQhGYO/6JJvByy3JF0bVayzhBfyB2zjugq+mlFalwp9wCaJVLvvR+Pt+Vyq0Pl9Kr1DuALlv70MXLUk1n16GQzRaA/VCvSYNd3M95T0C4K/Q6uR+heX65+Ua5Cefmaz3hru/kPRrKJwhhlnePfEneRgVURShP/ZqZOauQ8xWu1xpVm6oZsF1ctdXhqSITLsjyY4mqisyRxYsNrXpteaJZW5m5lN046r9JL6ezxYTTLKnPtzLZGWXq/mQmkpVh462xyV9mxReu7UqyIoHzyZ2vo3FxnDcuWPJUUW92rsLnRpQE8KvvJmJ8fh2N8H1LviELSEclhAJWw2nULMY0A8gwcDLDplLbaTjgt1x+WINRAchXZ0UtlUpuue0P2u5mio1Nf2vqgKNpZfD05j1C7t28dUjIYfisfPm/Xu5WMpWKU8+LKOnH5PDWuTPDRIacPSI9FGeoZhkqFlJgkQ2GSGCx80YF6gKjzrCpIsgc1EeYFNknEuZh1EgKsxrk9el5gPnpwdxI49PBXJjnw/iUycFfeK3dXsNRWZWjZK/b3SOgTWo9cIp4s+gA04PPmH4ZIiF8PRSNhgYPQxF4enJlDeO1Kye8xLN50r1NyO3uiahpQz6/J1vkOaSxLkdgPmttxcxxPnb/ofq5mMYzzORig+xvb/dJnTENGRVfH+pPvWO8vri4juHXne0+xv3tHZ16K1TXKRxRfaezgfFGhwXwHxf5Dv+NIqy7hKr/haEqwIOj3/a8ttfeGwPe+xO68LF3wzv4P3P7DxvB/2wAAHicY2BkYGAA4u+JXGvj+W2+MnCzMIDAtQnfghH0/wYWBuYGIJeDgQkkCgBB6AsuAHicY2BkYGBu+N/AEMPCAAJAkpEBFXACAEcPAnJ4nGNhYGBgfsnAwMKAGwMAHwsBDQAAAAAAdgDyAUIBjAHqAiICOgKYeJxjYGRgYOBkCGTgYAABJiDmAkIGhv9gPgMAEd4BeQB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxtx1EKgCAQBcB9aaVCR+lQVmpGuIIJefuCfpu/oY4+hv5pdBCQ6DFghIKGIdwyRH9NceXkOV0259MZb1PY7BFTEIsNolQeys61OfV2Xjk3ogdxAxRSAA==') format('woff'), url('//at.alicdn.com/t/font_553053_g2m0ns1yioogvi.ttf?t=1516950867708') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/font_553053_g2m0ns1yioogvi.svg?t=1516950867708#iconfont') format('svg');
        /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-gift:before {
        content: "\e92f";
    }

    .icon-iconfontapple:before {
        content: "\e634";
    }

    .icon-search:before {
        content: "\e627";
    }

    .icon-bag:before {
        content: "\e649";
    }

    .icon-suo:before {
        content: "\e644";
    }

    .icon-shouye:before {
        content: "\e630";
    }

    .icon-bag-copy:before {
        content: "\e930";
    }

    li {
        list-style: none;
    }

    .ac-gn-bagview {
        right: 295px;
        position: absolute;
        top: 95px;
        width: 290px;
        height: 311px;
        z-index: 1;
        border: 1px solid #d5d5d5;
    }

    .ac-gn-bagview:before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background: white;
        border-top: 1px solid #d6d6d6;
        border-left: 1px solid #d6d6d6;
        opacity: 1;
        z-index: 9;
        transform: rotate(45deg);
        margin-left: 135px;
        margin-top: -7px;
    }

    /* .ac-gn-bagview-caret {
                overflow: hidden;
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 10px;
                z-index: 1;
            }

            .ac-gn-bagview-caret:after {
                left: 50%;
                border: 1px solid;
                content: "";
                display: block;
                position: absolute;
                top: 0;
                width: 12px;
                height: 12px;
                transform: rotate(45deg);
                transform-origin: 0 0;
                z-index: 1;
                color: #d5d5d5;
            } */

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    #bag{
        display: none;
    }
    #ac-gn-bagview-content {
        margin: 0 auto;
        /* min-height: 90px; */
        height: 100%;
        padding: 0 20px;
        position: relative;
        z-index: 2;
        font-size: 0;
    }

    #ac-gn-bagview-message {
        color: #888;
        padding: 35px;
        margin: 0;
        text-align: center;
    }

    .ac-gn-bagview-message-empty {
        color: #888;
        font-size: 15px;
        text-align: center;
        height: 87px;
        line-height: 89px;
    }

    .ac-gn-bagview-nav {
        position: relative;
        display: block;
        height: 220px;
        /* margin-top:-10px; */
    }
    .ac-gn-bagview-nav::before{
        content:"";
        height:0;
    }
    .ac-gn-bagview-nav-list {
        height: 100%;
        margin: 0;
        padding: 0;
        list-style: none
    }

    .ac-gn-bagview-nav-item {
        margin: 0;
        padding: 0;
        border-top: 1px solid #e3e3e3;
    }

    .ac-gn-bagview-nav-item {
        height:43px;
        line-height: 43px;
    }

    .ac-gn-bagview-nav-item a {
        font-size:14px;
        color: #0070c9;
        display: block;
        line-height: 43px;
        padding: 0 30px;
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left:20px;
    }

    .ac-gn-bagview-nav-link:hover {
        text-decoration: underline
    }

    .ac-gn-bagview-nav-link-bag {
    background-image: url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/bag.png");
    background-image: none,url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/bag.svg");
    background-position: 1px center;
    background-repeat: no-repeat
}

.ac-gn-bagview-nav-link-favorites {
    background-image: url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/favorites.png");
    background-image: none,url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/favorites.svg");
    background-position: 1px center;
    background-repeat: no-repeat
}

.ac-gn-bagview-nav-link-orders {
    background-image: url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/orders.png");
    background-image: none,url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/orders.svg");
    background-position: 1px center;
    background-repeat: no-repeat
}

.ac-gn-bagview-nav-link-account {
    background-image: url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/account.png");
    background-image: none,url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/account.svg");
    background-position: 1px center;
    background-repeat: no-repeat
}
.ac-gn-bagview-nav-link-signIn {
    background-image: url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/signIn.png");
    background-image: none,url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/signIn.svg");
    background-position: 1px center;
    background-repeat: no-repeat
}

.ac-gn-bagview-nav-link-signOut {
    background-image: url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/signOut.png");
    background-image: none,url("https://www.apple.com/ac/globalnav/3/zh_CN/assets/ac-store/signOut.svg");
    background-position: 1px center;
    background-repeat: no-repeat
}
</style>
