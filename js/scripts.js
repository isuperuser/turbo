if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    }else{
        document.documentElement.classList.add('is-desktop');
};

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document); 

AOS.init({
    disable: 'phone',
    duration: 900
});

if(document.querySelector('#backgroundVideo')){
    var video = document.querySelector('#backgroundVideo')
        , container = document.querySelector('#videoBgSection');
    var bv = new Bideo();
    bv.init({
        videoEl: video,
        container: container,

        resize: true,
        isMobile: !document.documentElement.classList.contains('is-desktop'),

        playButton: document.querySelector('#bgPlay'),
        pauseButton: document.querySelector('#bgPause'),


        src:[
            {
                src: 'https://cdn.jsdelivr.net/npm/bideo.js@1.0.0/night.mp4',
                type: 'video/mp4'
            },
        ],

        onLoad: function () {
            setVideoDimensions();
            document.querySelector('#bgVideoCover').style.display = 'none';
        }
    });

    function setVideoDimensions() {
      var w = video.videoWidth
        , h = video.videoHeight;
      var videoRatio = (w / h).toFixed(2);
      
      var containerStyles = window.getComputedStyle(container)
        , minW = parseInt( container.clientWidth )
        , minH = parseInt( container.clientHeight );

      var widthRatio = minW / w
        , heightRatio = minH / h;
      
      if (widthRatio > heightRatio) {
        var newWidth = minW;
        var newHeight = Math.ceil( newWidth / videoRatio );
      }
      else {
        var newHeight = minH;
        var newWidth = Math.ceil( newHeight * videoRatio );
      }
      
      video.style.width = newWidth + 'px';
      video.style.height = newHeight + 'px';
    };

};


if(document.querySelector('#cDemoVideo')){
var cDemoVideoTracks = document.querySelectorAll('#cDemoVideoPlayerPlaylist .c-demo-video__track');
var cDemoVideoArrayTracks = Array.prototype.slice.call(cDemoVideoTracks);

document.getElementById("cDemoVideo").innerHTML = ('<iframe id="cDemoVideoPlayer" src="https://www.youtube.com/embed/'+cDemoVideoArrayTracks[0].href.slice(cDemoVideoArrayTracks[0].href.lastIndexOf("v=") + 2)+'?version=3&amp;showinfo=0&amp;enablejsapi=1&amp;rel=0&amp" frameborder="0" allowtransparency></iframe>');


var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var cDemoVideoPlayer;
      function onYouTubeIframeAPIReady() {
        cDemoVideoPlayer = new YT.Player('cDemoVideoPlayer',{
            events: {
                'onReady':  function(event){
                    if(document.documentElement.classList.contains('is-desktop')){
                        var vTime;
                        window.onscroll = function() {
                            if(document.querySelector("#mouse")){
                                if (window.pageYOffset > 250) {if(!document.querySelector('#mouse').classList.contains('is-invisible')) document.querySelector('#mouse').className+=(' is-invisible')}
                                else {document.querySelector('#mouse').className = document.querySelector('#mouse').className.replace(/\bis-invisible\b/g, '') + ' '}
                            };
                            if(!document.documentElement.classList.contains('js-video-stopped') && document.querySelector("#cDemoVideo").parentElement.classList.contains('aos-animate') && document.querySelector("#cDemoVideo").getBoundingClientRect().top > -document.querySelector("#cDemoVideo").offsetHeight){
                                window.clearTimeout(vTime);
                                vTime = window.setTimeout(function(){cDemoVideoPlayer.playVideo();},2000)
                                // console.log('play')
                             }else{
                                window.clearTimeout(vTime);
                                cDemoVideoPlayer.pauseVideo();
                                // console.log('pause')
                             }
                        }
                    };
                },
                'onStateChange': function(event){
                    if(event.data == YT.PlayerState.ENDED){
                        cDemoVideoAutoPlay();
                    };
                    if(event.data == YT.PlayerState.PAUSED){
                       if(document.documentElement.classList.contains('is-desktop')){
                            if(document.querySelector("#cDemoVideo").parentElement.classList.contains('aos-animate') && document.querySelector("#cDemoVideo").getBoundingClientRect().top > -document.querySelector("#cDemoVideo").offsetHeight){
                                document.documentElement.classList.add('js-video-stopped')
                            }
                       }
                    }else{
                        if(document.documentElement.classList.contains('is-desktop')){
                            if(document.querySelector("#cDemoVideo").parentElement.classList.contains('aos-animate') && document.querySelector("#cDemoVideo").getBoundingClientRect().top > -document.querySelector("#cDemoVideo").offsetHeight){
                                document.documentElement.classList.remove('js-video-stopped')
                            }
                       }
                    }
                }
            }
        });
      };

for (var i = 0; i < cDemoVideoArrayTracks.length; i++) {
    cDemoVideoArrayTracks[i].id='dvt_'+i;
    cDemoVideoArrayTracks[i].onclick = function(e){
        e.preventDefault();
        cDemoVideoPlayer.loadVideoByUrl('https://www.youtube.com/embed/'+this.href.slice(this.href.lastIndexOf("v=") + 2)+'?version=3&amp;showinfo=0&amp;enablejsapi=1&amp;rel=0&amp;autoplay=1');
        for (var i = 0; i < cDemoVideoArrayTracks.length; i++) {
            document.querySelectorAll('#cDemoVideoPlayerPlaylist .c-two-columns-list__item')[i].classList.remove('is-active');
        };
        this.parentElement.classList.add('is-active');
        if(document.querySelector("#cDemoVideo").getBoundingClientRect().top<0){
            document.querySelector("#cDemoVideo").scrollIntoView();
        }
    }
};


cDemoVideoArrayTracks[0].parentElement.classList.add('is-active');

function cDemoVideoAutoPlay(){
    var curId = document.querySelector('#cDemoVideoPlayerPlaylist .is-active .c-demo-video__track').id.slice(document.querySelector('#cDemoVideoPlayerPlaylist .is-active .c-demo-video__track').id.lastIndexOf('_')+1);
        curId++;
    if(curId==cDemoVideoTracks.length) curId=0;
    document.querySelector('#cDemoVideoPlayerPlaylist .is-active').classList.remove('is-active');
    cDemoVideoArrayTracks[curId].parentElement.classList.add('is-active');
    cDemoVideoPlayer.loadVideoByUrl('https://www.youtube.com/embed/'+cDemoVideoArrayTracks[curId].href.slice(cDemoVideoArrayTracks[curId].href.lastIndexOf("v=") + 2)+'?version=3&amp;showinfo=0&amp;enablejsapi=1&amp;rel=0&amp;autoplay=1');
    document.documentElement.classList.remove('js-video-stopped');
};
};//cDemoVideo


var c1,c2,k;

Array.prototype.forEach.call(document.querySelectorAll(".c-two-columns-list"), function(el, index, array){
    c1 = document.createElement('div');
    c1.className = "c-two-columns-list__first-col";
    c2 = document.createElement('div');
    c2.className = "c-two-columns-list__second-col";
    el.appendChild(c1);
    el.appendChild(c2);

    var items = el.querySelectorAll('.c-two-columns-list__item');
    var arrayItems = Array.prototype.slice.call(items);

    var z=0;
    var l=items.length;
    var g = Math.ceil(l/2);
    var k = Math.ceil(l/2);

    for (var i = 0; i < k; i++) {
    arrayItems[z].className+=(' c-equal')+z+index;
    c1.appendChild(arrayItems[z]);
    z++;
    };
    var t=0;
    for (var d = z; d < l; d++) {
    arrayItems[g].className+=(' c-equal')+t+index;
    c2.appendChild(arrayItems[g]);
    g++;
    t++;
    };
});

// data-modal-open
if(document.querySelectorAll("[data-modal-open=modalVideo]")){
for (var i = 0; i < document.querySelectorAll("[data-modal-open=modalVideo]").length; i++) {
    document.querySelectorAll("[data-modal-open=modalVideo]")[i].id='mov_'+i;
    var modalVideoPlayer;
    document.querySelectorAll("[data-modal-open=modalVideo]")[i].onclick = function(e){
        var self = this;
        self.classList.add('is-active');
        if(!document.documentElement.classList.contains('is-modal-opened')){
            var tag = document.createElement('script');
              tag.src = "https://www.youtube.com/iframe_api";
              var firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            document.documentElement.classList.add('is-modal-opened');
        };
        var modalVideo = new tingle.modal({
            cssClass: ['l-modal-video'],
            closeLabel: "Закрыть",
            onOpen: function(){
                modalVideoPlayer = new YT.Player('modalVideoPlayer',{
                    events: {
                        'onStateChange': function(event){
                            if(event.data == YT.PlayerState.ENDED){
                                modalVideoPlayerAutoPlay();
                            };
                        }
                    }
                });
            },
            onClose: function(){
                document.querySelector('[data-modal-open=modalVideo].is-active').classList.remove('is-active');
                modalVideo.destroy();
            }
        });
        modalVideo.setContent('<div class="c-modal-header">'+self.querySelector('.c-carousel__name').innerHTML+'</div><div class="c-demo-video"><iframe width="100%" height="400" id="modalVideoPlayer" src="https://www.youtube.com/embed/'+self.href.slice(self.href.lastIndexOf("v=") + 2)+'?version=3&amp;showinfo=0&amp;enablejsapi=1&amp;rel=0&amp;autoplay=1" frameborder="0" allowtransparency></iframe></div><button id="modalVideoPrev" onclick="modalVideoPlayerPrev()" class="c-carousel__arrow c-carousel__arrow--left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.125em" height=".9375em" viewBox="0 0 5 8"><g fill="none" fill-rule="evenodd"><use fill="#eee" xlink:href="#carouselArrowIco"/><g fill="#eee" mask="url(#CarouselArrowMask)"><path d="M-38-32h72v72h-72z"/></g></g></svg></button><button id="modalVideoNext" onclick="modalVideoPlayerAutoPlay()" class="c-carousel__arrow c-carousel__arrow--right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.125em" height=".9375em" viewBox="0 0 5 8"><g fill="none" fill-rule="evenodd"><use fill="#eee" xlink:href="#carouselArrowIco"/><g fill="#eee" mask="url(#CarouselArrowMask)"><path d="M-38-32h72v72h-72z"/></g></g></svg></button>');
        modalVideo.open();
        e.preventDefault();
    };
    var curId;
    function modalVideoPlayerAutoPlay(){
        curId = document.querySelector('[data-modal-open=modalVideo].is-active').id.slice(document.querySelector('[data-modal-open=modalVideo].is-active').id.lastIndexOf('_')+1);
            curId++;
        if(curId==document.querySelectorAll("[data-modal-open=modalVideo]").length) curId=0;
        document.querySelector('[data-modal-open=modalVideo].is-active').classList.remove('is-active');
        document.querySelectorAll('[data-modal-open=modalVideo]')[curId].classList.add('is-active');
        document.querySelector('.c-modal-header').innerHTML = (document.querySelectorAll('[data-modal-open=modalVideo]')[curId].querySelector('.c-carousel__name').innerHTML);
        modalVideoPlayer.loadVideoByUrl('https://www.youtube.com/embed/'+document.querySelectorAll('[data-modal-open=modalVideo]')[curId].href.slice(document.querySelectorAll('[data-modal-open=modalVideo]')[curId].href.lastIndexOf("v=") + 2)+'?version=3&amp;showinfo=0&amp;enablejsapi=1&amp;rel=0&amp;autoplay=1');
    };
    function modalVideoPlayerPrev(){
        curId = document.querySelector('[data-modal-open=modalVideo].is-active').id.slice(document.querySelector('[data-modal-open=modalVideo].is-active').id.lastIndexOf('_')+1);
            curId=curId-1;
            // document.querySelector('#modalVideoPrev').disabled = false;
        if(curId<0) curId=document.querySelectorAll('[data-modal-open=modalVideo]').length-1;//{curId=0; document.querySelector('#modalVideoPrev').disabled = true};
        
        // document.querySelectorAll("[data-modal-open=modalVideo]").length;
        document.querySelector('[data-modal-open=modalVideo].is-active').classList.remove('is-active');
        document.querySelectorAll('[data-modal-open=modalVideo]')[curId].classList.add('is-active');
        document.querySelector('.c-modal-header').innerHTML = (document.querySelectorAll('[data-modal-open=modalVideo]')[curId].querySelector('.c-carousel__name').innerHTML);
        modalVideoPlayer.loadVideoByUrl('https://www.youtube.com/embed/'+document.querySelectorAll('[data-modal-open=modalVideo]')[curId].href.slice(document.querySelectorAll('[data-modal-open=modalVideo]')[curId].href.lastIndexOf("v=") + 2)+'?version=3&amp;showinfo=0&amp;enablejsapi=1&amp;rel=0&amp;autoplay=1');
    };
};

};


if(document.querySelector(".c-carousel")){
var carousel = tns({
    container: '.c-carousel',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    loop: false,
    mouseDrag: true,
    controlsText:['',''],
    nav: false,
    responsive: {
      640: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    onInit:function () {
        document.querySelector('.tns-controls [data-controls="prev"]').innerHTML = ('<span class="c-carousel__arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.125em" height=".9375em" viewBox="0 0 5 8"><g fill="none" fill-rule="evenodd"><use fill="#fff" xlink:href="#carouselArrowIco"/><g fill="#fff" mask="url(#CarouselArrowMask)"><path d="M-38-32h72v72h-72z"/></g></g></svg></span>');
        document.querySelector('.tns-controls [data-controls="next"]').innerHTML = ('<span class="c-carousel__arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.125em" height=".9375em" viewBox="0 0 5 8"><g fill="none" fill-rule="evenodd"><use fill="#fff" xlink:href="#carouselArrowIco"/><g fill="#fff" mask="url(#CarouselArrowMask)"><path d="M-38-32h72v72h-72z"/></g></g></svg></span>');

        document.querySelector('.tns-controls [data-controls="next"]').style.height = document.querySelector('.c-carousel .c-carousel__media').offsetHeight;
        document.querySelector('.tns-controls [data-controls="next"]').setAttribute("style","height:"+document.querySelector('.c-carousel .c-carousel__media').offsetHeight+"px");
        document.querySelector('.tns-controls [data-controls="prev"]').style.height = document.querySelector('.c-carousel .c-carousel__media').offsetHeight;
        document.querySelector('.tns-controls [data-controls="prev"]').setAttribute("style","height:"+document.querySelector('.c-carousel .c-carousel__media').offsetHeight+"px");
    }
});
};

if(document.querySelector('.c-search-form__text')){
for (var i = 0; i < document.querySelectorAll(".c-search-form__go").length; i++) {
    document.querySelectorAll('.c-search-form__go')[i].disabled = true;
    document.querySelectorAll('.c-search-form__text')[i].onkeyup =function(e){
        if(this.value.toString().replace(/^([\s]*)|([\s]*)$/g, '')!=''){
            this.parentElement.querySelector('.c-search-form__go').disabled = false;
        }else{
            this.parentElement.querySelector('.c-search-form__go').disabled = true;
        }
    };
}
};

if(document.querySelector('.c-faq-list__questuion')){
    for (var i = 0; i < document.querySelectorAll(".c-faq-list__questuion").length; i++) {
        document.querySelectorAll('.c-faq-list__questuion')[i].onclick = function(e){
            e.preventDefault();
            if(this.parentElement.classList.contains('is-opened')){
                this.parentElement.classList.remove('is-opened')
            }else{
                this.parentElement.classList.add('is-opened')
            }
        }
    }
};

if(document.querySelector('.c-main-content__menu')){
    for (var i = 0; i < document.querySelectorAll('.c-main-content__menu ul').length; i++) {
        document.querySelectorAll('.c-main-content__menu ul')[i].parentElement.classList.add('is-has-list');

    };
    for (var i = 0; i < document.querySelectorAll('.c-main-content__menu ul .is-active').length; i++) {
        document.querySelectorAll('.c-main-content__menu ul')[i].parentElement.classList.add('is-opened');
    };
    for (var i = 0; i < document.querySelectorAll('.c-main-content__menu .is-has-list .c-main-content__menu-item-name').length; i++) {
        document.querySelectorAll('.c-main-content__menu .is-has-list .c-main-content__menu-item-name')[i].innerHTML = ('<div class="c-main-content__menu-item-toggle">'+document.querySelectorAll('.c-main-content__menu .is-has-list .c-main-content__menu-item-name')[i].innerHTML+'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=".5em" height=".3125em" viewBox="0 0 8 5"><g fill="none" fill-rule="evenodd"><use fill="#333" xlink:href="#menuArrowIco"/><g fill="#3C3C43" mask="url(#menuArrowMask)"><path d="M-32-34h72v72h-72z"/></g></g></svg></div>');
        document.querySelectorAll('.c-main-content__menu .is-has-list .c-main-content__menu-item-name')[i].onclick = function(){
            if(this.parentElement.classList.contains('is-opened')){
                this.parentElement.classList.remove('is-opened')
            }else{
                this.parentElement.classList.add('is-opened')
            };
            return false
        }
    };
};

if(document.querySelector('.c-main-content__menu-toggle')){
    for (var i = 0; i < document.querySelectorAll('.c-main-content__menu-toggle').length; i++) {
        document.querySelectorAll('.c-main-content__menu-toggle')[i].onclick = function(){
            if(this.parentElement.classList.contains('is-opened')){
                this.parentElement.classList.remove('is-opened')
            }else{
                this.parentElement.classList.add('is-opened')
            };
            return false
        }
    }
};


document.addEventListener("DOMContentLoaded", function() {
    Array.prototype.forEach.call(document.querySelectorAll(".c-two-columns-list"), function(el, index, array){
        for (var i = 0; i < document.querySelectorAll(".c-two-columns-list__item").length; i++) {
            matchHeight('.c-two-columns-list .c-two-columns-list__item.'+('c-equal')+i+index);
        };
    });
    
    // 
    matchHeight('.c-carousel .c-carousel__name');
    document.querySelector('html').classList.add('is-loaded');
});
window.addEventListener('resize', function() {
    if(document.querySelector('#backgroundVideo')){setVideoDimensions()};
    Array.prototype.forEach.call(document.querySelectorAll(".c-two-columns-list"), function(el, index, array){
        for (var i = 0; i < document.querySelectorAll(".c-two-columns-list__item").length; i++) {
            matchHeight('.c-two-columns-list .c-two-columns-list__item.'+('c-equal')+i+index);
        };
    });
    if(document.querySelector('.c-carousel')){
        matchHeight('.c-carousel .c-carousel__name');
        document.querySelector('.tns-controls [data-controls="next"]').style.height = document.querySelector('.c-carousel .c-carousel__media').offsetHeight;
        document.querySelector('.tns-controls [data-controls="next"]').setAttribute("style","height:"+document.querySelector('.c-carousel .c-carousel__media').offsetHeight+"px");
        document.querySelector('.tns-controls [data-controls="prev"]').style.height = document.querySelector('.c-carousel .c-carousel__media').offsetHeight;
        document.querySelector('.tns-controls [data-controls="prev"]').setAttribute("style","height:"+document.querySelector('.c-carousel .c-carousel__media').offsetHeight+"px");
    };
});


if(document.querySelector("#mouse") && !document.querySelector("#cDemoVideo")){
    window.onscroll = function() {
        if (window.pageYOffset > 250) {if(!document.querySelector('#mouse').classList.contains('is-invisible')) document.querySelector('#mouse').className+=(' is-invisible')}
        else {document.querySelector('#mouse').className = document.querySelector('#mouse').className.replace(/\bis-invisible\b/g, '') + ' '}
    };
};


//
function matchHeight(elems) {

    var items = document.querySelectorAll(elems);
    var arrayItems = Array.prototype.slice.call(items);
    var maxHeight = 0;

    arrayItems.forEach(function(e) {
        
        e.style.minHeight = "0"
        var height = e.offsetHeight

        if (height >= maxHeight) {
            maxHeight = height
        }

    })

    arrayItems.forEach(function(e) {

        e.style.minHeight = maxHeight + "px"

    })
    
};

    
// THE END. ALL THE BEST!