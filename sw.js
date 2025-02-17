/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/myblog/2022/08/20/hello-world/index.html","4fe578b96d9373245c01d49527c980ac"],["/myblog/2022/08/24/开端/index.html","f4bfae6fb6b0ef6586c8b23d1ad5eac5"],["/myblog/2022/08/25/分享壁纸(一)/index.html","696336681900f80a26eb7a382a254289"],["/myblog/2022/08/26/计算机网络性能和体系结构（8.26）/index.html","87c0c3778308c8577a4524b91b407b4c"],["/myblog/2022/08/27/又是一个不眠之夜/index.html","4065921040d79a2952b145a1eb098b4f"],["/myblog/2022/08/28/计算机网络体系分层思想(8-27)/index.html","e5236c223d73394ab8d563a4b6d8ed03"],["/myblog/2022/08/29/计算机网络-物理层(一)8-28/index.html","f30769b3a2f3f89cce0d00b5de5f78ab"],["/myblog/2022/08/30/计算机网络-数据链路(一)8-30/index.html","f0e2ba308e11aa1d28795e818cf0ea4e"],["/myblog/2022/08/30/计算机网络-物理层(二)8-29/index.html","cc485848ac085a8a985e13dbce0a551c"],["/myblog/2022/08/31/分享壁纸(二)/index.html","9d1e3ae180af7d0bd9cf6b39caabeb00"],["/myblog/2022/08/31/计算机网络-数据链路(二)8-31/index.html","73b1474941fa632b28012ed93ece3818"],["/myblog/2022/09/01/计算机网络-数据链路(三)/index.html","b6ce82faa2c772de75d4018a30e8fde3"],["/myblog/2022/09/02/计算机网络-数据链路(四)/index.html","46c9cce04b15fec1f9ff9ed4df8d02ce"],["/myblog/2022/09/03/分享壁纸(三)/index.html","20ec3075e8a362d4bbe2b127e4dc9ee6"],["/myblog/2022/09/03/计算机网络-数据链路(五)/index.html","bfe702ca32097e0c960d0b00430b238d"],["/myblog/2022/09/04/计算机网络-数据链路(六)/index.html","cba0193d4605a08f618260e4d5832b1a"],["/myblog/2022/09/05/计算机网络-数据链路层(七)9-5/index.html","69be29c594a198a467c83d40f5fb59d5"],["/myblog/2022/09/06/计算机网络-网络层(一)9-6/index.html","0366e3c475e5012f3919485f10173db8"],["/myblog/2022/10/09/咒术回战/index.html","a1a5d8abb6d25529e45bd46fdf526f4e"],["/myblog/2025/02/16/test/index.html","307598ae001259e9c01772eb573c0a52"],["/myblog/2025/02/16/白桃露露/index.html","cdc0f82adac7e343b00494233f945533"],["/myblog/about/index.html","8e68320816f489ff3c8afab8dd0c7db5"],["/myblog/archives/2022/08/index.html","f89c4cf5c0f9b2b44598401251edfbbf"],["/myblog/archives/2022/08/page/2/index.html","ff7a11a0c4a08b5a504f9621a1bde030"],["/myblog/archives/2022/09/index.html","65fd0be77317215875d2d4a81d10deac"],["/myblog/archives/2022/10/index.html","21e1287ce0a73cb4707675571f7a229d"],["/myblog/archives/2022/index.html","ebeef4de472f5690c710e91df173242f"],["/myblog/archives/2022/page/2/index.html","dc93c9745bb38172bd8abd145be8ea53"],["/myblog/archives/2025/02/index.html","c6e34da29a3f2b29ff4c1bed5ddfccc3"],["/myblog/archives/2025/index.html","30161061ac5429628a1d50cb9ce007ea"],["/myblog/archives/index.html","a4f4e86f5d75d3506f3d471fdb69366b"],["/myblog/archives/page/2/index.html","38396545fb9e766ba3cfe88547897136"],["/myblog/archives/page/3/index.html","64cfee2218a7450d88e7432890198972"],["/myblog/baidu_verify_code-7wQqNukg63.html","db1e07e2f710d00db73424531a5096a7"],["/myblog/categories/index.html","94b0dc7d8c9394943f16968ab53eb1de"],["/myblog/categories/壁纸/index.html","7df73043f7ebb8bd21f8f73d1528cc3a"],["/myblog/categories/机网/index.html","23638b1843e8d6dd2e6462b94c02282d"],["/myblog/categories/机网/page/2/index.html","b9364b69c155ada3a8762de8b7d48e40"],["/myblog/categories/福利/index.html","a0194aa01e7af62c02cbf6d7aa8df307"],["/myblog/css/main.css","41285f844331b5140508f19c36932389"],["/myblog/google47c145bfb7c98004.html","2d07a3853d978c4c34c79f77746ee935"],["/myblog/images/1.jpg","0a53047d1013252766cd4485628483a9"],["/myblog/images/2.jpg","f872c0d4b9405ee4f510075a6a0b67cf"],["/myblog/images/3.jpg","f50648c341b6890be845a076e2c4773b"],["/myblog/images/4.jpg","fb2b90ad365a76fb19e954b0124c1b42"],["/myblog/images/5.jpg","81407116c5f5f01568bdcd3ab603c162"],["/myblog/images/6.jpg","d81e36595d706a5d8f64ccc608124b52"],["/myblog/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/myblog/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/myblog/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/myblog/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/myblog/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/myblog/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/myblog/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/myblog/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/myblog/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/myblog/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/myblog/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/myblog/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/myblog/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/myblog/images/s.jpg","2daac5896292bac19bdd98123d3758e7"],["/myblog/images/spy.jpg","67ea61220cbdff5b56c0c3eadad4e983"],["/myblog/images/time.jpg","996c02352e2fdb7d1cf94c470d688492"],["/myblog/images/time1.jpg","234aacb842b3b5ba067253253ffae2b4"],["/myblog/images/weixin.jpg","50dba67e49fba5ba6649b59c4e83fbdc"],["/myblog/images/wyu.jpg","19b19e9ec49c4de42f7ccdc13273840c"],["/myblog/images/yanjiang.jpg","3c0001f990b70b0c807db58544cbd135"],["/myblog/index.html","af9bc4b0c34bdb921018d87b0a655d12"],["/myblog/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/myblog/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/myblog/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/myblog/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/myblog/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/myblog/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/myblog/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/myblog/js/three/README.html","50a33f3253d5b324fba8c591ef6ca7f5"],["/myblog/js/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/myblog/js/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/myblog/js/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/myblog/js/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/myblog/js/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/myblog/js/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/myblog/js/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/myblog/js/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/myblog/js/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/myblog/js/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/myblog/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/myblog/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/myblog/lib/fancybox/README.html","a3a1077dfd0c05c30d5b9816d2b82679"],["/myblog/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/myblog/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/myblog/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/myblog/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/myblog/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/myblog/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/myblog/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/myblog/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/myblog/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/myblog/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/myblog/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/myblog/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/myblog/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/myblog/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/myblog/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/myblog/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/myblog/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/myblog/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/myblog/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/myblog/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/myblog/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/myblog/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/myblog/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/myblog/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/myblog/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/myblog/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/myblog/lib/pjax/README.html","7c11c6065ce3bdc9b58dc54610370cd0"],["/myblog/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/myblog/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/myblog/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/myblog/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/myblog/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/myblog/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/myblog/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/myblog/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/myblog/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/myblog/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/myblog/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/myblog/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/myblog/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/myblog/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/myblog/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/myblog/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/myblog/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/myblog/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/myblog/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/myblog/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/myblog/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/myblog/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/myblog/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/myblog/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/myblog/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/myblog/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/myblog/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/myblog/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/myblog/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/myblog/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/myblog/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/myblog/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/myblog/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/myblog/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/myblog/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/myblog/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/myblog/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/myblog/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/myblog/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/myblog/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/myblog/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/myblog/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/myblog/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/myblog/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/myblog/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/myblog/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/myblog/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/myblog/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/myblog/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/myblog/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/myblog/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/myblog/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/myblog/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/myblog/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/myblog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/myblog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/myblog/links/index.html","fa9a71171daf097b289a8e1962541a7a"],["/myblog/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/myblog/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/myblog/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/myblog/message/index.html","7bafa5769af8923f9e895dd9e84212ce"],["/myblog/page/2/index.html","85b2b6abf68371976323a3049e8dfe64"],["/myblog/page/3/index.html","fa48c1cbbec5102c61e9a652b3078674"],["/myblog/photos/index.html","780fe3505faa04e7edc48bd3caca935c"],["/myblog/sw-register.js","741ca0588eec30ddae8e97b1ac3abe7f"],["/myblog/tags/index.html","91398d10d2f21409fe799d0e0bbf0980"],["/myblog/tags/test/index.html","b7c30b904408ca0bd748c35c24f7146e"],["/myblog/tags/养眼/index.html","d9490693f5d7224bc7a74fd7349392f7"],["/myblog/tags/日常/index.html","56122c630b0d35c688ceace83ae8927d"],["/myblog/tags/福利/index.html","05a6612acd623b1dde60e039e926583a"],["/myblog/tags/第一篇/index.html","f60840ebf6e3f4783e8c323fdc3506a0"],["/myblog/tags/网络/index.html","a62cbff21f2223221e12b9e736e77f4b"],["/myblog/tags/网络/page/2/index.html","8e807a2160d43eef57bbab30aa651292"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
