var define,require,esl
!function(t){function e(t){u(t,F)||(N[t]=1)}function i(t,e){function i(t){0===t.indexOf(".")&&n.push(t)}var n=[]
if("string"==typeof t?i(t):O(t,function(t){i(t)}),n.length>0)throw Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: "+n.join(", "))
var r=q.waitSeconds
return r&&t instanceof Array&&(P&&clearTimeout(P),P=setTimeout(o,1e3*r)),W(t,e)}function o(){function t(s,a){if(!r[s]&&!u(s,F)){r[s]=1,u(s,B)||o[s]||(o[s]=1,e.push(s))
var h=D[s]
h?a&&(o[s]||(o[s]=1,e.push(s)),O(h.depMs,function(e){t(e.absId,e.hard)})):n[s]||(n[s]=1,i.push(s))}}var e=[],i=[],o={},n={},r={}
for(var s in N)t(s,1)
if(e.length||i.length)throw Error("[MODULE_TIMEOUT]Hang( "+(e.join(", ")||"none")+" ) Miss( "+(i.join(", ")||"none")+" )")}function n(t){O(Z,function(e){a(t,e.deps,e.factory)}),Z.length=0}function r(t,e,i){if(null==i&&(null==e?(i=t,t=null):(i=e,e=null,t instanceof Array&&(e=t,t=null))),null!=i){var o=window.opera
if(!t&&document.attachEvent&&(!o||""+o!="[object Opera]")){var n=A()
t=n&&n.getAttribute("data-require-id")}t?a(t,e,i):Z[0]={deps:e,factory:i}}}function s(){var t=q.config[this.id]
return t&&"object"==typeof t?t:{}}function a(t,e,i){D[t]||(D[t]={id:t,depsDec:e,deps:e||["require","exports","module"],factoryDeps:[],factory:i,exports:{},config:s,state:R,require:z(t),depMs:[],depMkv:{},depRs:[]})}function h(t){var e=D[t]
if(e&&!u(t,H)){var i=e.deps,o=e.factory,n=0
"function"==typeof o&&(n=Math.min(o.length,i.length),!e.depsDec&&(""+o).replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,"").replace(/require\(\s*(['"'])([^'"]+)\1\s*\)/g,function(t,e,o){i.push(o)}))
var r=[],s=[]
O(i,function(i,o){var a,h,l=E(i),c=C(l.mod,t)
c&&!Y[c]?(l.res&&(h={id:i,mod:c,res:l.res},s.push(i),e.depRs.push(h)),a=e.depMkv[c],a||(a={id:l.mod,absId:c,hard:n>o},e.depMs.push(a),e.depMkv[c]=a,r.push(c))):a={absId:c},n>o&&e.factoryDeps.push(h||a)}),e.state=H,d(t),_(r),s.length&&e.require(s,function(){O(e.depRs,function(e){e.absId||(e.absId=C(e.id,t))}),l()})}}function l(){for(var t in N)h(t),c(t),p(t)}function c(t){function e(t){if(h(t),!u(t,H))return!1
if(u(t,B)||i[t])return!0
i[t]=1
var o=D[t],n=!0
return O(o.depMs,function(t){return n=e(t.absId)}),n&&O(o.depRs,function(t){return n=!!t.absId}),n&&(o.state=B),n}var i={}
e(t)}function d(e){function i(){if(!o&&n.state===B){o=1
var i=1
if(O(n.factoryDeps,function(t){var e=t.absId
return Y[e]?void 0:(p(e),i=u(e,F))}),i){try{var r=n.factory,s="function"==typeof r?r.apply(t,f(n.factoryDeps,{require:n.require,exports:n.exports,module:n})):r
null!=s&&(n.exports=s),n.invokeFactory=null}catch(a){if(/^\[MODULE_MISS\]"([^"]+)/.test(a.message)){var h=n.depMkv[RegExp.$1]
return h&&(h.hard=1),void(o=0)}throw a}m(e)}}}var o,n=D[e]
n.invokeFactory=i}function u(t,e){return D[t]&&D[t].state>=e}function p(t){var e=D[t]
e&&e.invokeFactory&&e.invokeFactory()}function f(t,e){var i=[]
return O(t,function(t,o){"object"==typeof t&&(t=t.absId),i[o]=e[t]||D[t].exports}),i}function g(t,e){if(u(t,F))return void e()
var i=G[t]
i||(i=G[t]=[]),i.push(e)}function m(t){var e=D[t]
e.state=F,delete N[t]
for(var i=G[t]||[],o=i.length;o--;)i[o]()
i.length=0,G[t]=null}function _(e,i,o){function n(){if("function"==typeof i&&!r){var o=1
O(e,function(t){return Y[t]?void 0:o=!!u(t,F)}),o&&(r=1,i.apply(t,f(e,Y)))}}var r=0
O(e,function(t){Y[t]||u(t,F)||(g(t,n),(t.indexOf("!")>0?v:y)(t,o))}),n()}function y(e){function i(){var t=j[e]
M(t||e,o)}function o(){if(s){var i
"function"==typeof s.init&&(i=s.init.apply(t,f(a,Y))),null==i&&s.exports&&(i=t,O(s.exports.split("."),function(t){return i=i[t],!!i})),r(e,a,i||{})}else n(e)
l()}if(!X[e]&&!D[e]){X[e]=1
var s=q.shim[e]
s instanceof Array&&(q.shim[e]=s={deps:s})
var a=s&&(s.deps||[])
a?(O(a,function(t){q.shim[t]||(q.shim[t]={})}),W(a,i)):i()}}function v(t,e){function i(e){h.exports=e||!0,m(t)}function o(o){var n=e?D[e].require:W
o.load(a.res,n,i,s.call({id:t}))}if(!D[t]){var r=j[t]
if(r)return void y(r)
var a=E(t),h={id:t,state:H}
D[t]=h,i.fromText=function(t,e){Function(e)(),n(t)},o(W(a.mod))}}function x(t,e){var i=L(t,1,e)
return i.sort(I),i}function b(){function t(t){j[t]=e}q.baseUrl=q.baseUrl.replace(/\/$/,"")+"/",V=x(q.paths),Q=x(q.map,1),O(Q,function(t){t.v=x(t.v)}),U=[],O(q.packages,function(t){var e=t
"string"==typeof t&&(e={name:t.split("/")[0],location:t,main:"main"}),e.location=e.location||e.name,e.main=(e.main||"main").replace(/\.js$/i,""),e.reg=k(e.name),U.push(e)}),U.sort(I),K=x(q.urlArgs,1),j={}
for(var e in q.bundles)O(q.bundles[e],t)}function T(t,e,i){O(e,function(e){return e.reg.test(t)?(i(e.v,e.k,e),!1):void 0})}function S(t){var e=/(\.[a-z0-9]+)$/i,i=/(\?[^#]*)$/,o="",n=t,r=""
i.test(t)&&(r=RegExp.$1,t=t.replace(i,"")),e.test(t)&&(o=RegExp.$1,n=t.replace(e,""))
var s,a=n
return T(n,V,function(t,e){a=a.replace(e,t),s=1}),s||T(n,U,function(t,e,i){a=a.replace(i.name,i.location)}),/^([a-z]{2,10}:\/)?\//i.test(a)||(a=q.baseUrl+a),a+=o+r,T(n,K,function(t){a+=(a.indexOf("?")>0?"&":"?")+t}),a}function z(t){function i(i,n){if("string"==typeof i){if(!o[i]){var r=C(i,t)
if(p(r),!u(r,F))throw Error('[MODULE_MISS]"'+r+'" is not exists!')
o[i]=D[r].exports}return o[i]}if(i instanceof Array){var s=[],a=[]
O(i,function(i,o){var n=E(i),r=C(n.mod,t),h=n.res,l=r
if(h){var c=r+"!"+h
0!==h.indexOf(".")&&j[c]?r=l=c:l=null}a[o]=l,e(r),s.push(r)}),_(s,function(){O(a,function(o,n){null==o&&(o=a[n]=C(i[n],t),e(o))}),_(a,n,t),l()},t),l()}}var o={}
return i.toUrl=function(e){return S(C(e,t))},i}function C(t,e){if(!t)return""
e=e||""
var i=E(t)
if(!i)return t
var o=i.res,n=w(i.mod,e)
if(O(U,function(t){var e=t.name
return e===n?(n=e+"/"+t.main,!1):void 0}),T(e,Q,function(t){T(n,t,function(t,e){n=n.replace(e,t)})}),o){var r=u(n,F)&&W(n)
o=r&&r.normalize?r.normalize(o,function(t){return C(t,e)}):C(o,e),n+="!"+o}return n}function w(t,e){if(0===t.indexOf(".")){var i=e.split("/"),o=t.split("/"),n=i.length-1,r=o.length,s=0,a=0
t:for(var h=0;r>h;h++)switch(o[h]){case"..":if(!(n>s))break t
s++,a++
break
case".":a++
break
default:break t}return i.length=n-s,o=o.slice(a),i.concat(o).join("/")}return t}function E(t){var e=t.split("!")
return e[0]?{mod:e[0],res:e[1]}:void 0}function L(t,e,i){var o=[]
for(var n in t)if(t.hasOwnProperty(n)){var r={k:n,v:t[n]}
o.push(r),e&&(r.reg="*"===n&&i?/^/:k(n))}return o}function A(){if($)return $
if(J&&"interactive"===J.readyState)return J
for(var t=document.getElementsByTagName("script"),e=t.length;e--;){var i=t[e]
if("interactive"===i.readyState)return J=i,i}}function M(t,e){function i(){var t=o.readyState;(void 0===t||/^(loaded|complete)$/.test(t))&&(o.onload=o.onreadystatechange=null,o=null,e())}var o=document.createElement("script")
o.setAttribute("data-require-id",t),o.src=S(t+".js"),o.async=!0,o.readyState?o.onreadystatechange=i:o.onload=i,$=o,et?tt.insertBefore(o,et):tt.appendChild(o),$=null}function k(t){return RegExp("^"+t+"(/|$)")}function O(t,e){if(t instanceof Array)for(var i=0,o=t.length;o>i&&e(t[i],i)!==!1;i++);}function I(t,e){var i=t.k||t.name,o=e.k||e.name
return"*"===o?-1:"*"===i?1:o.length-i.length}var P,D={},R=1,H=2,B=3,F=4,N={},Y={require:i,exports:1,module:1},W=z(),q={baseUrl:"./",paths:{},config:{},map:{},packages:[],shim:{},waitSeconds:0,bundles:{},urlArgs:{}}
i.version="2.0.2",i.loader="esl",i.toUrl=W.toUrl
var Z=[]
r.amd={}
var G={},X={}
i.config=function(t){if(t){for(var e in q){var i=t[e],o=q[e]
if(i)if("urlArgs"===e&&"string"==typeof i)q.urlArgs["*"]=i
else if(o instanceof Array)o.push.apply(o,i)
else if("object"==typeof o)for(var n in i)o[n]=i[n]
else q[e]=i}b()}},b()
var V,U,Q,j,K,$,J,tt=document.getElementsByTagName("head")[0],et=document.getElementsByTagName("base")[0]
et&&(tt=et.parentNode),define||(define=r,require||(require=i),esl=i)}(this),define("echarts",["echarts/echarts"],function(t){return t}),define("echarts/echarts",["require","./config","zrender/tool/util","zrender/tool/event","zrender/tool/env","zrender","zrender/config","./chart/island","./component/toolbox","./component","./component/title","./component/tooltip","./component/legend","./util/ecData","./chart","zrender/tool/color","./component/timeline","zrender/shape/Image","zrender/loadingEffect/Bar","zrender/loadingEffect/Bubble","zrender/loadingEffect/DynamicLine","zrender/loadingEffect/Ring","zrender/loadingEffect/Spin","zrender/loadingEffect/Whirling","./theme/macarons","./theme/infographic"],function(t){function e(){s.Dispatcher.call(this)}function i(t){t.innerHTML="",this._themeConfig={},this.dom=t,this._connected=!1,this._status={dragIn:!1,dragOut:!1,needRefresh:!1},this._curEventType=!1,this._chartList=[],this._messageCenter=new e,this._messageCenterOutSide=new e,this.resize=this.resize(),this._init()}function o(t,e,i,o,n){for(var r=t._chartList,s=r.length;s--;){var a=r[s]
"function"==typeof a[e]&&a[e](i,o,n)}}var n=t("./config"),r=t("zrender/tool/util"),s=t("zrender/tool/event"),a={},h=t("zrender/tool/env").canvasSupported,l=new Date-0,c={},d="_echarts_instance_"
a.version="2.2.0",a.dependencies={zrender:"2.0.7"},a.init=function(e,o){var n=t("zrender")
n.version.replace(".","")-0<a.dependencies.zrender.replace(".","")-0&&console.error("ZRender "+n.version+" is too old for ECharts "+a.version+". Current version need ZRender "+a.dependencies.zrender+"+"),e=e instanceof Array?e[0]:e
var r=e.getAttribute(d)
return r||(r=l++,e.setAttribute(d,r)),c[r]&&c[r].dispose(),c[r]=new i(e),c[r].id=r,c[r].canvasSupported=h,c[r].setTheme(o),c[r]},a.getInstanceById=function(t){return c[t]},r.merge(e.prototype,s.Dispatcher.prototype,!0)
var u=t("zrender/config").EVENT,p=["CLICK","DBLCLICK","MOUSEOVER","MOUSEOUT","DRAGSTART","DRAGEND","DRAGENTER","DRAGOVER","DRAGLEAVE","DROP"]
return i.prototype={_init:function(){var e=this,i=t("zrender").init(this.dom)
this._zr=i,this._messageCenter.dispatch=function(t,i,o,n){o=o||{},o.type=t,o.event=i,e._messageCenter.dispatchWithContext(t,o,n),"HOVER"!=t&&"MOUSEOUT"!=t?setTimeout(function(){e._messageCenterOutSide.dispatchWithContext(t,o,n)},50):e._messageCenterOutSide.dispatchWithContext(t,o,n)},this._onevent=function(t){return e.__onevent(t)}
for(var o in n.EVENT)"CLICK"!=o&&"DBLCLICK"!=o&&"HOVER"!=o&&"MOUSEOUT"!=o&&"MAP_ROAM"!=o&&this._messageCenter.bind(n.EVENT[o],this._onevent,this)
var r={}
this._onzrevent=function(t){return e[r[t.type]](t)}
for(var s=0,a=p.length;a>s;s++){var h=p[s],l=u[h]
r[l]="_on"+h.toLowerCase(),i.on(l,this._onzrevent)}this.chart={},this.component={}
var c=t("./chart/island")
this._island=new c(this._themeConfig,this._messageCenter,i,{},this),this.chart.island=this._island
var d=t("./component/toolbox")
this._toolbox=new d(this._themeConfig,this._messageCenter,i,{},this),this.component.toolbox=this._toolbox
var f=t("./component")
f.define("title",t("./component/title")),f.define("tooltip",t("./component/tooltip")),f.define("legend",t("./component/legend")),(0===i.getWidth()||0===i.getHeight())&&console.error("Dom’s width & height should be ready before init.")},__onevent:function(t){t.__echartsId=t.__echartsId||this.id
var e=t.__echartsId===this.id
switch(this._curEventType||(this._curEventType=t.type),t.type){case n.EVENT.LEGEND_SELECTED:this._onlegendSelected(t)
break
case n.EVENT.DATA_ZOOM:if(!e){var i=this.component.dataZoom
i&&(i.silence(!0),i.absoluteZoom(t.zoom),i.silence(!1))}this._ondataZoom(t)
break
case n.EVENT.DATA_RANGE:e&&this._ondataRange(t)
break
case n.EVENT.MAGIC_TYPE_CHANGED:if(!e){var o=this.component.toolbox
o&&(o.silence(!0),o.setMagicType(t.magicType),o.silence(!1))}this._onmagicTypeChanged(t)
break
case n.EVENT.DATA_VIEW_CHANGED:e&&this._ondataViewChanged(t)
break
case n.EVENT.TOOLTIP_HOVER:e&&this._tooltipHover(t)
break
case n.EVENT.RESTORE:this._onrestore()
break
case n.EVENT.REFRESH:e&&this._onrefresh(t)
break
case n.EVENT.TOOLTIP_IN_GRID:case n.EVENT.TOOLTIP_OUT_GRID:if(e){if(this._connected){var r=this.component.grid
r&&(t.x=(t.event.zrenderX-r.getX())/r.getWidth(),t.y=(t.event.zrenderY-r.getY())/r.getHeight())}}else{var r=this.component.grid
r&&this._zr.trigger("mousemove",{connectTrigger:!0,zrenderX:r.getX()+t.x*r.getWidth(),zrenderY:r.getY()+t.y*r.getHeight()})}}if(this._connected&&e&&this._curEventType===t.type){for(var s in this._connected)this._connected[s].connectedEventHandler(t)
this._curEventType=null}(!e||!this._connected&&e)&&(this._curEventType=null)},_onclick:function(t){if(o(this,"onclick",t),t.target){var e=this._eventPackage(t.target)
e&&null!=e.seriesIndex&&this._messageCenter.dispatch(n.EVENT.CLICK,t.event,e,this)}},_ondblclick:function(t){if(o(this,"ondblclick",t),t.target){var e=this._eventPackage(t.target)
e&&null!=e.seriesIndex&&this._messageCenter.dispatch(n.EVENT.DBLCLICK,t.event,e,this)}},_onmouseover:function(t){if(t.target){var e=this._eventPackage(t.target)
e&&null!=e.seriesIndex&&this._messageCenter.dispatch(n.EVENT.HOVER,t.event,e,this)}},_onmouseout:function(t){if(t.target){var e=this._eventPackage(t.target)
e&&null!=e.seriesIndex&&this._messageCenter.dispatch(n.EVENT.MOUSEOUT,t.event,e,this)}},_ondragstart:function(t){this._status={dragIn:!1,dragOut:!1,needRefresh:!1},o(this,"ondragstart",t)},_ondragenter:function(t){o(this,"ondragenter",t)},_ondragover:function(t){o(this,"ondragover",t)},_ondragleave:function(t){o(this,"ondragleave",t)},_ondrop:function(t){o(this,"ondrop",t,this._status),this._island.ondrop(t,this._status)},_ondragend:function(t){if(o(this,"ondragend",t,this._status),this._timeline&&this._timeline.ondragend(t,this._status),this._island.ondragend(t,this._status),this._status.needRefresh){this._syncBackupData(this._option)
var e=this._messageCenter
e.dispatch(n.EVENT.DATA_CHANGED,t.event,this._eventPackage(t.target),this),e.dispatch(n.EVENT.REFRESH,null,null,this)}},_onlegendSelected:function(t){this._status.needRefresh=!1,o(this,"onlegendSelected",t,this._status),this._status.needRefresh&&this._messageCenter.dispatch(n.EVENT.REFRESH,null,null,this)},_ondataZoom:function(t){this._status.needRefresh=!1,o(this,"ondataZoom",t,this._status),this._status.needRefresh&&this._messageCenter.dispatch(n.EVENT.REFRESH,null,null,this)},_ondataRange:function(t){this._clearEffect(),this._status.needRefresh=!1,o(this,"ondataRange",t,this._status),this._status.needRefresh&&this._zr.refreshNextFrame()},_onmagicTypeChanged:function(){this._clearEffect(),this._render(this._toolbox.getMagicOption())},_ondataViewChanged:function(t){this._syncBackupData(t.option),this._messageCenter.dispatch(n.EVENT.DATA_CHANGED,null,t,this),this._messageCenter.dispatch(n.EVENT.REFRESH,null,null,this)},_tooltipHover:function(t){var e=[]
o(this,"ontooltipHover",t,e)},_onrestore:function(){this.restore()},_onrefresh:function(t){this._refreshInside=!0,this.refresh(t),this._refreshInside=!1},_syncBackupData:function(t){this.component.dataZoom&&this.component.dataZoom.syncBackupData(t)},_eventPackage:function(e){if(e){var i=t("./util/ecData"),o=i.get(e,"seriesIndex"),n=i.get(e,"dataIndex")
return n=-1!=o&&this.component.dataZoom?this.component.dataZoom.getRealDataIndex(o,n):n,{seriesIndex:o,seriesName:(i.get(e,"series")||{}).name,dataIndex:n,data:i.get(e,"data"),name:i.get(e,"name"),value:i.get(e,"value"),special:i.get(e,"special")}}},_noDataCheck:function(t){for(var e=t.series,i=0,o=e.length;o>i;i++)if(e[i].type==n.CHART_TYPE_MAP||e[i].data&&e[i].data.length>0||e[i].markPoint&&e[i].markPoint.data&&e[i].markPoint.data.length>0||e[i].markLine&&e[i].markLine.data&&e[i].markLine.data.length>0||e[i].nodes&&e[i].nodes.length>0||e[i].links&&e[i].links.length>0||e[i].matrix&&e[i].matrix.length>0||e[i].eventList&&e[i].eventList.length>0)return!1
this.clear()
var r=this._option&&this._option.noDataLoadingOption||this._themeConfig.noDataLoadingOption||n.noDataLoadingOption||{text:this._option&&this._option.noDataText||this._themeConfig.noDataText||n.noDataText,effect:this._option&&this._option.noDataEffect||this._themeConfig.noDataEffect||n.noDataEffect}
return this.showLoading(r),!0},_render:function(e){if(this._mergeGlobalConifg(e),!this._noDataCheck(e)){var i=e.backgroundColor
if(i)if(h||-1==i.indexOf("rgba"))this.dom.style.backgroundColor=i
else{var o=i.split(",")
this.dom.style.filter="alpha(opacity="+100*o[3].substring(0,o[3].lastIndexOf(")"))+")",o.length=3,o[0]=o[0].replace("a",""),this.dom.style.backgroundColor=o.join(",")+")"}this._zr.clearAnimation(),this._chartList=[]
var r=t("./chart"),s=t("./component");(e.xAxis||e.yAxis)&&(e.grid=e.grid||{},e.dataZoom=e.dataZoom||{})
for(var a,l,c,d=["title","legend","tooltip","dataRange","roamController","grid","dataZoom","xAxis","yAxis","polar"],u=0,p=d.length;p>u;u++)l=d[u],c=this.component[l],e[l]?(c?c.refresh&&c.refresh(e):(a=s.get(/^[xy]Axis$/.test(l)?"axis":l),c=new a(this._themeConfig,this._messageCenter,this._zr,e,this,l),this.component[l]=c),this._chartList.push(c)):c&&(c.dispose(),this.component[l]=null,delete this.component[l])
for(var f,g,m,_={},u=0,p=e.series.length;p>u;u++)g=e.series[u].type,g?_[g]||(_[g]=!0,f=r.get(g),f?(this.chart[g]?(m=this.chart[g],m.refresh(e)):m=new f(this._themeConfig,this._messageCenter,this._zr,e,this),this._chartList.push(m),this.chart[g]=m):console.error(g+" has not been required.")):console.error("series["+u+"] chart type has not been defined.")
for(g in this.chart)g==n.CHART_TYPE_ISLAND||_[g]||(this.chart[g].dispose(),this.chart[g]=null,delete this.chart[g])
this.component.grid&&this.component.grid.refixAxisShape(this.component),this._island.refresh(e),this._toolbox.refresh(e),e.animation&&!e.renderAsImage?this._zr.refresh():this._zr.render()
var y="IMG"+this.id,v=document.getElementById(y)
e.renderAsImage&&h?(v?v.src=this.getDataURL(e.renderAsImage):(v=this.getImage(e.renderAsImage),v.id=y,v.style.position="absolute",v.style.left=0,v.style.top=0,this.dom.firstChild.appendChild(v)),this.un(),this._zr.un(),this._disposeChartList(),this._zr.clear()):v&&v.parentNode.removeChild(v),v=null,this._option=e}},restore:function(){this._clearEffect(),this._option=r.clone(this._optionRestore),this._disposeChartList(),this._island.clear(),this._toolbox.reset(this._option,!0),this._render(this._option)},refresh:function(t){this._clearEffect(),t=t||{}
var e=t.option
!this._refreshInside&&e&&(e=this.getOption(),r.merge(e,t.option,!0),r.merge(this._optionRestore,t.option,!0),this._toolbox.reset(e)),this._island.refresh(e),this._toolbox.refresh(e),this._zr.clearAnimation()
for(var i=0,o=this._chartList.length;o>i;i++)this._chartList[i].refresh&&this._chartList[i].refresh(e)
this.component.grid&&this.component.grid.refixAxisShape(this.component),this._zr.refresh()},_disposeChartList:function(){this._clearEffect(),this._zr.clearAnimation()
for(var t=this._chartList.length;t--;){var e=this._chartList[t]
if(e){var i=e.type
this.chart[i]&&delete this.chart[i],this.component[i]&&delete this.component[i],e.dispose&&e.dispose()}}this._chartList=[]},_mergeGlobalConifg:function(e){for(var i=["backgroundColor","calculable","calculableColor","calculableHolderColor","nameConnector","valueConnector","animation","animationThreshold","animationDuration","animationDurationUpdate","animationEasing","addDataAnimation","symbolList","DRAG_ENABLE_TIME"],o=i.length;o--;){var r=i[o]
null==e[r]&&(e[r]=null!=this._themeConfig[r]?this._themeConfig[r]:n[r])}var s=e.color
s&&s.length||(s=this._themeConfig.color||n.color),this._zr.getColor=function(e){var i=t("zrender/tool/color")
return i.getColor(e,s)},h||(e.animation=!1,e.addDataAnimation=!1)},setOption:function(t,e){return t.timeline?this._setTimelineOption(t):this._setOption(t,e)},_setOption:function(t,e){return!e&&this._option?this._option=r.merge(this.getOption(),r.clone(t),!0):this._option=r.clone(t),this._optionRestore=r.clone(this._option),this._option.series&&0!==this._option.series.length?(this.component.dataZoom&&(this._option.dataZoom||this._option.toolbox&&this._option.toolbox.feature&&this._option.toolbox.feature.dataZoom&&this._option.toolbox.feature.dataZoom.show)&&this.component.dataZoom.syncOption(this._option),this._toolbox.reset(this._option),this._render(this._option),this):void this._zr.clear()},getOption:function(){function t(t){var o=i._optionRestore[t]
if(o)if(o instanceof Array)for(var n=o.length;n--;)e[t][n].data=r.clone(o[n].data)
else e[t].data=r.clone(o.data)}var e=r.clone(this._option),i=this
return t("xAxis"),t("yAxis"),t("series"),e},setSeries:function(t,e){return e?(this._option.series=t,this.setOption(this._option,e)):this.setOption({series:t}),this},getSeries:function(){return this.getOption().series},_setTimelineOption:function(e){this._timeline&&this._timeline.dispose()
var i=t("./component/timeline"),o=new i(this._themeConfig,this._messageCenter,this._zr,e,this)
return this._timeline=o,this.component.timeline=this._timeline,this},addData:function(t,e,i,o,s){for(var a=t instanceof Array?t:[[t,e,i,o,s]],h=this.getOption(),l=this._optionRestore,c=0,d=a.length;d>c;c++){t=a[c][0],e=a[c][1],i=a[c][2],o=a[c][3],s=a[c][4]
var u=l.series[t],p=i?"unshift":"push",f=i?"pop":"shift"
if(u){var g=u.data,m=h.series[t].data
if(g[p](e),m[p](e),o||(g[f](),e=m[f]()),null!=s){var _,y
if(u.type===n.CHART_TYPE_PIE&&(_=l.legend)&&(y=_.data)){var v=h.legend.data
if(y[p](s),v[p](s),!o){var x=r.indexOf(y,e.name);-1!=x&&y.splice(x,1),x=r.indexOf(v,e.name),-1!=x&&v.splice(x,1)}}else if(null!=l.xAxis&&null!=l.yAxis){var b,T,S=u.xAxisIndex||0;(null==l.xAxis[S].type||"category"===l.xAxis[S].type)&&(b=l.xAxis[S].data,T=h.xAxis[S].data,b[p](s),T[p](s),o||(b[f](),T[f]())),S=u.yAxisIndex||0,"category"===l.yAxis[S].type&&(b=l.yAxis[S].data,T=h.yAxis[S].data,b[p](s),T[p](s),o||(b[f](),T[f]()))}}this._option.series[t].data=h.series[t].data}}this._zr.clearAnimation()
for(var z=this._chartList,c=0,d=z.length;d>c;c++)h.addDataAnimation&&z[c].addDataAnimation&&z[c].addDataAnimation(a)
this.component.dataZoom&&this.component.dataZoom.syncOption(h),this._option=h
var C=this
return setTimeout(function(){if(C._zr){C._zr.clearAnimation()
for(var t=0,e=z.length;e>t;t++)z[t].motionlessOnce=h.addDataAnimation&&z[t].addDataAnimation
C._messageCenter.dispatch(n.EVENT.REFRESH,null,{option:h},C)}},h.addDataAnimation?h.animationDurationUpdate:0),this},addMarkPoint:function(t,e){return this._addMark(t,e,"markPoint")},addMarkLine:function(t,e){return this._addMark(t,e,"markLine")},_addMark:function(t,e,i){var o,n=this._option.series
if(n&&(o=n[t])){var s=this._optionRestore.series,a=s[t],h=o[i],l=a[i]
h=o[i]=h||{data:[]},l=a[i]=l||{data:[]}
for(var c in e)"data"===c?(h.data=h.data.concat(e.data),l.data=l.data.concat(e.data)):"object"!=typeof e[c]||null==h[c]?h[c]=l[c]=e[c]:(r.merge(h[c],e[c],!0),r.merge(l[c],e[c],!0))
var d=this.chart[o.type]
d&&d.addMark(t,e,i)}return this},delMarkPoint:function(t,e){return this._delMark(t,e,"markPoint")},delMarkLine:function(t,e){return this._delMark(t,e,"markLine")},_delMark:function(t,e,i){var o,n,r,s=this._option.series
if(!(s&&(o=s[t])&&(n=o[i])&&(r=n.data)))return this
e=e.split(" > ")
for(var a=-1,h=0,l=r.length;l>h;h++){var c=r[h]
if(c instanceof Array){if(c[0].name===e[0]&&c[1].name===e[1]){a=h
break}}else if(c.name===e[0]){a=h
break}}if(a>-1){r.splice(a,1),this._optionRestore.series[t][i].data.splice(a,1)
var d=this.chart[o.type]
d&&d.delMark(t,e.join(" > "),i)}return this},getDom:function(){return this.dom},getZrender:function(){return this._zr},getDataURL:function(t){if(!h)return""
if(0===this._chartList.length){var e="IMG"+this.id,i=document.getElementById(e)
if(i)return i.src}var o=this.component.tooltip
switch(o&&o.hideTip(),t){case"jpeg":break
default:t="png"}var n=this._option.backgroundColor
return n&&"rgba(0,0,0,0)"===n.replace(" ","")&&(n="#fff"),this._zr.toDataURL("image/"+t,n)},getImage:function(t){var e=this._optionRestore.title,i=document.createElement("img")
return i.src=this.getDataURL(t),i.title=e&&e.text||"ECharts",i},getConnectedDataURL:function(e){if(!this.isConnected())return this.getDataURL(e)
var i=this.dom,o={self:{img:this.getDataURL(e),left:i.offsetLeft,top:i.offsetTop,right:i.offsetLeft+i.offsetWidth,bottom:i.offsetTop+i.offsetHeight}},n=o.self.left,r=o.self.top,s=o.self.right,a=o.self.bottom
for(var h in this._connected)i=this._connected[h].getDom(),o[h]={img:this._connected[h].getDataURL(e),left:i.offsetLeft,top:i.offsetTop,right:i.offsetLeft+i.offsetWidth,bottom:i.offsetTop+i.offsetHeight},n=Math.min(n,o[h].left),r=Math.min(r,o[h].top),s=Math.max(s,o[h].right),a=Math.max(a,o[h].bottom)
var l=document.createElement("div")
l.style.position="absolute",l.style.left="-4000px",l.style.width=s-n+"px",l.style.height=a-r+"px",document.body.appendChild(l)
var c=t("zrender").init(l),d=t("zrender/shape/Image")
for(var h in o)c.addShape(new d({style:{x:o[h].left-n,y:o[h].top-r,image:o[h].img}}))
c.render()
var u=this._option.backgroundColor
u&&"rgba(0,0,0,0)"===u.replace(/ /g,"")&&(u="#fff")
var p=c.toDataURL("image/png",u)
return setTimeout(function(){c.dispose(),l.parentNode.removeChild(l),l=null},100),p},getConnectedImage:function(t){var e=this._optionRestore.title,i=document.createElement("img")
return i.src=this.getConnectedDataURL(t),i.title=e&&e.text||"ECharts",i},on:function(t,e){return this._messageCenterOutSide.bind(t,e,this),this},un:function(t,e){return this._messageCenterOutSide.unbind(t,e),this},connect:function(t){if(!t)return this
if(this._connected||(this._connected={}),t instanceof Array)for(var e=0,i=t.length;i>e;e++)this._connected[t[e].id]=t[e]
else this._connected[t.id]=t
return this},disConnect:function(t){if(!t||!this._connected)return this
if(t instanceof Array)for(var e=0,i=t.length;i>e;e++)delete this._connected[t[e].id]
else delete this._connected[t.id]
for(var o in this._connected)return this
return this._connected=!1,this},connectedEventHandler:function(t){t.__echartsId!=this.id&&this._onevent(t)},isConnected:function(){return!!this._connected},showLoading:function(e){var i={bar:t("zrender/loadingEffect/Bar"),bubble:t("zrender/loadingEffect/Bubble"),dynamicLine:t("zrender/loadingEffect/DynamicLine"),ring:t("zrender/loadingEffect/Ring"),spin:t("zrender/loadingEffect/Spin"),whirling:t("zrender/loadingEffect/Whirling")}
this._toolbox.hideDataView(),e=e||{}
var o=e.textStyle||{}
e.textStyle=o
var s=r.merge(r.merge(r.clone(o),this._themeConfig.textStyle),n.textStyle)
o.textFont=s.fontStyle+" "+s.fontWeight+" "+s.fontSize+"px "+s.fontFamily,o.text=e.text||this._option&&this._option.loadingText||this._themeConfig.loadingText||n.loadingText,null!=e.x&&(o.x=e.x),null!=e.y&&(o.y=e.y),e.effectOption=e.effectOption||{},e.effectOption.textStyle=o
var a=e.effect
return("string"==typeof a||null==a)&&(a=i[e.effect||this._option&&this._option.loadingEffect||this._themeConfig.loadingEffect||n.loadingEffect]||i.spin),this._zr.showLoading(new a(e.effectOption)),this},hideLoading:function(){return this._zr.hideLoading(),this},setTheme:function(e){if(e){if("string"==typeof e)switch(e){case"macarons":e=t("./theme/macarons")
break
case"infographic":e=t("./theme/infographic")
break
default:e={}}else e=e||{}
this._themeConfig=e}if(!h){var i=this._themeConfig.textStyle
i&&i.fontFamily&&i.fontFamily2&&(i.fontFamily=i.fontFamily2),i=n.textStyle,i.fontFamily=i.fontFamily2}this._timeline&&this._timeline.setTheme(!0),this._optionRestore&&this.restore()},resize:function(){var t=this
return function(){if(t._clearEffect(),t._zr.resize(),t._option&&t._option.renderAsImage&&h)return t._render(t._option),t
t._zr.clearAnimation(),t._island.resize(),t._toolbox.resize(),t._timeline&&t._timeline.resize()
for(var e=0,i=t._chartList.length;i>e;e++)t._chartList[e].resize&&t._chartList[e].resize()
return t.component.grid&&t.component.grid.refixAxisShape(t.component),t._zr.refresh(),t._messageCenter.dispatch(n.EVENT.RESIZE,null,null,t),t}},_clearEffect:function(){this._zr.modLayer(n.EFFECT_ZLEVEL,{motionBlur:!1}),this._zr.painter.clearLayer(n.EFFECT_ZLEVEL)},clear:function(){return this._disposeChartList(),this._zr.clear(),this._option={},this._optionRestore={},this.dom.style.backgroundColor=null,this},dispose:function(){var t=this.dom.getAttribute(d)
t&&delete c[t],this._island.dispose(),this._toolbox.dispose(),this._timeline&&this._timeline.dispose(),this._messageCenter.unbind(),this.clear(),this._zr.dispose(),this._zr=null}},a}),define("echarts/config",[],function(){var t={CHART_TYPE_LINE:"line",CHART_TYPE_BAR:"bar",CHART_TYPE_SCATTER:"scatter",CHART_TYPE_PIE:"pie",CHART_TYPE_RADAR:"radar",CHART_TYPE_MAP:"map",CHART_TYPE_K:"k",CHART_TYPE_ISLAND:"island",CHART_TYPE_FORCE:"force",CHART_TYPE_CHORD:"chord",CHART_TYPE_GAUGE:"gauge",CHART_TYPE_FUNNEL:"funnel",CHART_TYPE_EVENTRIVER:"eventRiver",COMPONENT_TYPE_TITLE:"title",COMPONENT_TYPE_LEGEND:"legend",COMPONENT_TYPE_DATARANGE:"dataRange",COMPONENT_TYPE_DATAVIEW:"dataView",COMPONENT_TYPE_DATAZOOM:"dataZoom",COMPONENT_TYPE_TOOLBOX:"toolbox",COMPONENT_TYPE_TOOLTIP:"tooltip",COMPONENT_TYPE_GRID:"grid",COMPONENT_TYPE_AXIS:"axis",COMPONENT_TYPE_POLAR:"polar",COMPONENT_TYPE_X_AXIS:"xAxis",COMPONENT_TYPE_Y_AXIS:"yAxis",COMPONENT_TYPE_AXIS_CATEGORY:"categoryAxis",COMPONENT_TYPE_AXIS_VALUE:"valueAxis",COMPONENT_TYPE_TIMELINE:"timeline",COMPONENT_TYPE_ROAMCONTROLLER:"roamController",backgroundColor:"rgba(0,0,0,0)",color:["#ff7f50","#87cefa","#da70d6","#32cd32","#6495ed","#ff69b4","#ba55d3","#cd5c5c","#ffa500","#40e0d0","#1e90ff","#ff6347","#7b68ee","#00fa9a","#ffd700","#6699FF","#ff6666","#3cb371","#b8860b","#30e0e0"],markPoint:{clickable:!0,symbol:"pin",symbolSize:10,large:!1,effect:{show:!1,loop:!0,period:15,type:"scale",scaleSize:2,bounceDistance:10},itemStyle:{normal:{borderWidth:2,label:{show:!0,position:"inside"}},emphasis:{label:{show:!0}}}},markLine:{clickable:!0,symbol:["circle","arrow"],symbolSize:[2,4],smoothRadian:.2,precision:2,effect:{show:!1,loop:!0,period:15,scaleSize:2},itemStyle:{normal:{borderWidth:1.5,label:{show:!0,position:"end"},lineStyle:{type:"dashed"}},emphasis:{label:{show:!1},lineStyle:{}}}},textStyle:{decoration:"none",fontFamily:"Arial, Verdana, sans-serif",fontFamily2:"微软雅黑",fontSize:12,fontStyle:"normal",fontWeight:"normal"},EVENT:{REFRESH:"refresh",RESTORE:"restore",RESIZE:"resize",CLICK:"click",DBLCLICK:"dblclick",HOVER:"hover",MOUSEOUT:"mouseout",DATA_CHANGED:"dataChanged",DATA_ZOOM:"dataZoom",DATA_RANGE:"dataRange",DATA_RANGE_SELECTED:"dataRangeSelected",DATA_RANGE_HOVERLINK:"dataRangeHoverLink",LEGEND_SELECTED:"legendSelected",LEGEND_HOVERLINK:"legendHoverLink",MAP_SELECTED:"mapSelected",PIE_SELECTED:"pieSelected",MAGIC_TYPE_CHANGED:"magicTypeChanged",DATA_VIEW_CHANGED:"dataViewChanged",TIMELINE_CHANGED:"timelineChanged",MAP_ROAM:"mapRoam",FORCE_LAYOUT_END:"forceLayoutEnd",TOOLTIP_HOVER:"tooltipHover",TOOLTIP_IN_GRID:"tooltipInGrid",TOOLTIP_OUT_GRID:"tooltipOutGrid",ROAMCONTROLLER:"roamController"},DRAG_ENABLE_TIME:120,EFFECT_ZLEVEL:10,symbolList:["circle","rectangle","triangle","diamond","emptyCircle","emptyRectangle","emptyTriangle","emptyDiamond"],loadingEffect:"spin",loadingText:"数据读取中...",noDataEffect:"bubble",noDataText:"暂无数据",calculable:!1,calculableColor:"rgba(255,165,0,0.6)",calculableHolderColor:"#ccc",nameConnector:" & ",valueConnector:": ",animation:!0,addDataAnimation:!0,animationThreshold:2e3,animationDuration:2e3,animationDurationUpdate:500,animationEasing:"ExponentialOut"}
return t}),define("zrender/tool/util",["require","../dep/excanvas"],function(t){function e(t){return t&&1===t.nodeType&&"string"==typeof t.nodeName}function i(t){if("object"==typeof t&&null!==t){var o=t
if(t instanceof Array){o=[]
for(var n=0,r=t.length;r>n;n++)o[n]=i(t[n])}else if(!m[_.call(t)]&&!e(t)){o={}
for(var s in t)t.hasOwnProperty(s)&&(o[s]=i(t[s]))}return o}return t}function o(t,i,o,r){if(i.hasOwnProperty(o)){var s=t[o]
"object"!=typeof s||m[_.call(s)]||e(s)?!r&&o in t||(t[o]=i[o]):n(t[o],i[o],r)}}function n(t,e,i){for(var n in e)o(t,e,n,i)
return t}function r(){if(!d)if(t("../dep/excanvas"),window.G_vmlCanvasManager){var e=document.createElement("div")
e.style.position="absolute",e.style.top="-1000px",document.body.appendChild(e),d=G_vmlCanvasManager.initElement(e).getContext("2d")}else d=document.createElement("canvas").getContext("2d")
return d}function s(){return p||(u=document.createElement("canvas"),f=u.width,g=u.height,p=u.getContext("2d")),p}function a(t,e){var i,o=100
t+y>f&&(f=t+y+o,u.width=f,i=!0),e+v>g&&(g=e+v+o,u.height=g,i=!0),-y>t&&(y=Math.ceil(-t/o)*o,f+=y,u.width=f,i=!0),-v>e&&(v=Math.ceil(-e/o)*o,g+=v,u.height=g,i=!0),i&&p.translate(y,v)}function h(){return{x:y,y:v}}function l(t,e){if(t.indexOf)return t.indexOf(e)
for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i
return-1}function c(t,e){function i(){}var o=t.prototype
i.prototype=e.prototype,t.prototype=new i
for(var n in o)t.prototype[n]=o[n]
t.constructor=t}var d,u,p,f,g,m={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1},_=Object.prototype.toString,y=0,v=0
return{inherits:c,clone:i,merge:n,getContext:r,getPixelContext:s,getPixelOffset:h,adjustCanvasSize:a,indexOf:l}}),define("zrender/tool/event",["require","../mixin/Eventful"],function(t){"use strict"
function e(t){return void 0!==t.zrenderX&&t.zrenderX||void 0!==t.offsetX&&t.offsetX||void 0!==t.layerX&&t.layerX||void 0!==t.clientX&&t.clientX}function i(t){return void 0!==t.zrenderY&&t.zrenderY||void 0!==t.offsetY&&t.offsetY||void 0!==t.layerY&&t.layerY||void 0!==t.clientY&&t.clientY}function o(t){return void 0!==t.zrenderDelta&&t.zrenderDelta||void 0!==t.wheelDelta&&t.wheelDelta||void 0!==t.detail&&-t.detail}var n=t("../mixin/Eventful"),r="function"==typeof window.addEventListener?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0}
return{getX:e,getY:i,getDelta:o,stop:r,Dispatcher:n}}),define("zrender/tool/env",[],function(){function t(t){var e=this.os={},i=this.browser={},o=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),n=t.match(/(Android);?[\s\/]+([\d.]+)?/),r=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),a=!r&&t.match(/(iPhone\sOS)\s([\d_]+)/),h=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=h&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),d=t.match(/Silk\/([\d._]+)/),u=t.match(/(BlackBerry).*Version\/([\d.]+)/),p=t.match(/(BB10).*Version\/([\d.]+)/),f=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),g=t.match(/PlayBook/),m=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),_=t.match(/Firefox\/([\d.]+)/),y=t.match(/MSIE ([\d.]+)/),v=o&&t.match(/Mobile\//)&&!m,x=t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)&&!m,y=t.match(/MSIE\s([\d.]+)/)
return(i.webkit=!!o)&&(i.version=o[1]),n&&(e.android=!0,e.version=n[2]),a&&!s&&(e.ios=e.iphone=!0,e.version=a[2].replace(/_/g,".")),r&&(e.ios=e.ipad=!0,e.version=r[2].replace(/_/g,".")),s&&(e.ios=e.ipod=!0,e.version=s[3]?s[3].replace(/_/g,"."):null),h&&(e.webos=!0,e.version=h[2]),l&&(e.touchpad=!0),u&&(e.blackberry=!0,e.version=u[2]),p&&(e.bb10=!0,e.version=p[2]),f&&(e.rimtabletos=!0,e.version=f[2]),g&&(i.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),d&&(i.silk=!0,i.version=d[1]),!d&&e.android&&t.match(/Kindle Fire/)&&(i.silk=!0),m&&(i.chrome=!0,i.version=m[1]),_&&(i.firefox=!0,i.version=_[1]),y&&(i.ie=!0,i.version=y[1]),v&&(t.match(/Safari/)||e.ios)&&(i.safari=!0),x&&(i.webview=!0),y&&(i.ie=!0,i.version=y[1]),e.tablet=!!(r||g||n&&!t.match(/Mobile/)||_&&t.match(/Tablet/)||y&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(n||a||h||u||p||m&&t.match(/Android/)||m&&t.match(/CriOS\/([\d.]+)/)||_&&t.match(/Mobile/)||y&&t.match(/Touch/))),{browser:i,os:e,canvasSupported:document.createElement("canvas").getContext?!0:!1}}return t(navigator.userAgent)}),define("zrender",["zrender/zrender"],function(t){return t}),define("zrender/zrender",["require","./dep/excanvas","./tool/util","./tool/log","./tool/guid","./Handler","./Painter","./Storage","./animation/Animation","./tool/env"],function(t){function e(t){return function(){for(var e=t.animatingElements,i=0,o=e.length;o>i;i++)t.storage.mod(e[i].id);(e.length||t._needsRefreshNextFrame)&&t.refresh()}}t("./dep/excanvas")
var i=t("./tool/util"),o=t("./tool/log"),n=t("./tool/guid"),r=t("./Handler"),s=t("./Painter"),a=t("./Storage"),h=t("./animation/Animation"),l={},c={}
c.version="2.0.7",c.init=function(t){var e=new d(n(),t)
return l[e.id]=e,e},c.dispose=function(t){if(t)t.dispose()
else{for(var e in l)l[e].dispose()
l={}}return c},c.getInstance=function(t){return l[t]},c.delInstance=function(t){return delete l[t],c}
var d=function(i,o){this.id=i,this.env=t("./tool/env"),this.storage=new a,this.painter=new s(o,this.storage),this.handler=new r(o,this.storage,this.painter),this.animatingElements=[],this.animation=new h({stage:{update:e(this)}}),this.animation.start()
var n=this
this.painter.refreshNextFrame=function(){n.refreshNextFrame()},this._needsRefreshNextFrame=!1}
return d.prototype.getId=function(){return this.id},d.prototype.addShape=function(t){return this.storage.addRoot(t),this},d.prototype.addGroup=function(t){return this.storage.addRoot(t),this},d.prototype.delShape=function(t){return this.storage.delRoot(t),this},d.prototype.delGroup=function(t){return this.storage.delRoot(t),this},d.prototype.modShape=function(t,e){return this.storage.mod(t,e),this},d.prototype.modGroup=function(t,e){return this.storage.mod(t,e),this},d.prototype.modLayer=function(t,e){return this.painter.modLayer(t,e),this},d.prototype.addHoverShape=function(t){return this.storage.addHover(t),this},d.prototype.render=function(t){return this.painter.render(t),this._needsRefreshNextFrame=!1,this},d.prototype.refresh=function(t){return this.painter.refresh(t),this._needsRefreshNextFrame=!1,this},d.prototype.refreshNextFrame=function(){return this._needsRefreshNextFrame=!0,this},d.prototype.refreshHover=function(t){return this.painter.refreshHover(t),this},d.prototype.refreshShapes=function(t,e){return this.painter.refreshShapes(t,e),this},d.prototype.resize=function(){return this.painter.resize(),this},d.prototype.animate=function(t,e,n){if("string"==typeof t&&(t=this.storage.get(t)),t){var r
if(e){for(var s=e.split("."),a=t,h=0,l=s.length;l>h;h++)a&&(a=a[s[h]])
a&&(r=a)}else r=t
if(!r)return void o('Property "'+e+'" is not existed in element '+t.id)
var c=this.animatingElements
return void 0===t.__aniCount&&(t.__aniCount=0),0===t.__aniCount&&c.push(t),t.__aniCount++,this.animation.animate(r,{loop:n}).done(function(){if(t.__aniCount--,0===t.__aniCount){var e=i.indexOf(c,t)
c.splice(e,1)}})}o("Element not existed")},d.prototype.clearAnimation=function(){this.animation.clear()},d.prototype.showLoading=function(t){return this.painter.showLoading(t),this},d.prototype.hideLoading=function(){return this.painter.hideLoading(),this},d.prototype.getWidth=function(){return this.painter.getWidth()},d.prototype.getHeight=function(){return this.painter.getHeight()},d.prototype.toDataURL=function(t,e,i){return this.painter.toDataURL(t,e,i)},d.prototype.shapeToImage=function(t,e,i){var o=n()
return this.painter.shapeToImage(o,t,e,i)},d.prototype.on=function(t,e,i){return this.handler.on(t,e,i),this},d.prototype.un=function(t,e){return this.handler.un(t,e),this},d.prototype.trigger=function(t,e){return this.handler.trigger(t,e),this},d.prototype.clear=function(){return this.storage.delRoot(),this.painter.clear(),this},d.prototype.dispose=function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.animatingElements=this.storage=this.painter=this.handler=null,c.delInstance(this.id)},c}),define("zrender/config",[],function(){var t={EVENT:{RESIZE:"resize",CLICK:"click",DBLCLICK:"dblclick",MOUSEWHEEL:"mousewheel",MOUSEMOVE:"mousemove",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",GLOBALOUT:"globalout",DRAGSTART:"dragstart",DRAGEND:"dragend",DRAGENTER:"dragenter",DRAGOVER:"dragover",DRAGLEAVE:"dragleave",DROP:"drop",touchClickDelay:300},catchBrushException:!1,debugMode:0,devicePixelRatio:Math.max(window.devicePixelRatio||1,1)}
return t}),define("echarts/chart/island",["require","./base","zrender/shape/Circle","../config","../util/ecData","zrender/tool/util","zrender/tool/event","zrender/tool/color","../util/accMath","../chart"],function(t){function e(t,e,o,n,s){i.call(this,t,e,o,n,s),this._nameConnector,this._valueConnector,this._zrHeight=this.zr.getHeight(),this._zrWidth=this.zr.getWidth()
var h=this
h.shapeHandler.onmousewheel=function(t){var e=t.target,i=t.event,o=a.getDelta(i)
o=o>0?-1:1,e.style.r-=o,e.style.r=e.style.r<5?5:e.style.r
var n=r.get(e,"value"),s=n*h.option.island.calculateStep
n=s>1?Math.round(n-s*o):+(n-s*o).toFixed(2)
var l=r.get(e,"name")
e.style.text=l+":"+n,r.set(e,"value",n),r.set(e,"name",l),h.zr.modShape(e.id),h.zr.refreshNextFrame(),a.stop(i)}}var i=t("./base"),o=t("zrender/shape/Circle"),n=t("../config")
n.island={zlevel:0,z:5,r:15,calculateStep:.1}
var r=t("../util/ecData"),s=t("zrender/tool/util"),a=t("zrender/tool/event")
return e.prototype={type:n.CHART_TYPE_ISLAND,_combine:function(e,i){var o=t("zrender/tool/color"),n=t("../util/accMath"),s=n.accAdd(r.get(e,"value"),r.get(i,"value")),a=r.get(e,"name")+this._nameConnector+r.get(i,"name")
e.style.text=a+this._valueConnector+s,r.set(e,"value",s),r.set(e,"name",a),e.style.r=this.option.island.r,e.style.color=o.mix(e.style.color,i.style.color)},refresh:function(t){t&&(t.island=this.reformOption(t.island),this.option=t,this._nameConnector=this.option.nameConnector,this._valueConnector=this.option.valueConnector)},getOption:function(){return this.option},resize:function(){var t=this.zr.getWidth(),e=this.zr.getHeight(),i=t/(this._zrWidth||t),o=e/(this._zrHeight||e)
if(1!==i||1!==o){this._zrWidth=t,this._zrHeight=e
for(var n=0,r=this.shapeList.length;r>n;n++)this.zr.modShape(this.shapeList[n].id,{style:{x:Math.round(this.shapeList[n].style.x*i),y:Math.round(this.shapeList[n].style.y*o)}})}},add:function(t){var e=r.get(t,"name"),i=r.get(t,"value"),n=null!=r.get(t,"series")?r.get(t,"series").name:"",s=this.getFont(this.option.island.textStyle),a={zlevel:this.getZlevelBase(),z:this.getZBase(),style:{x:t.style.x,y:t.style.y,r:this.option.island.r,color:t.style.color||t.style.strokeColor,text:e+this._valueConnector+i,textFont:s},draggable:!0,hoverable:!0,onmousewheel:this.shapeHandler.onmousewheel,_type:"island"}
"#fff"===a.style.color&&(a.style.color=t.style.strokeColor),this.setCalculable(a),a.dragEnableTime=0,r.pack(a,{name:n},-1,i,-1,e),a=new o(a),this.shapeList.push(a),this.zr.addShape(a)},del:function(t){this.zr.delShape(t.id)
for(var e=[],i=0,o=this.shapeList.length;o>i;i++)this.shapeList[i].id!=t.id&&e.push(this.shapeList[i])
this.shapeList=e},ondrop:function(t,e){if(this.isDrop&&t.target){var i=t.target,o=t.dragged
this._combine(i,o),this.zr.modShape(i.id),e.dragIn=!0,this.isDrop=!1}},ondragend:function(t,e){var i=t.target
this.isDragend?e.dragIn&&(this.del(i),e.needRefresh=!0):e.dragIn||(i.style.x=a.getX(t.event),i.style.y=a.getY(t.event),this.add(i),e.needRefresh=!0),this.isDragend=!1}},s.inherits(e,i),t("../chart").define("island",e),e}),define("echarts/component/toolbox",["require","./base","zrender/shape/Line","zrender/shape/Image","zrender/shape/Rectangle","../util/shape/Icon","../config","zrender/tool/util","zrender/config","zrender/tool/event","./dataView","../component"],function(t){function e(t,e,o,n,r){i.call(this,t,e,o,n,r),this.dom=r.dom,this._magicType={},this._magicMap={},this._isSilence=!1,this._iconList,this._iconShapeMap={},this._featureTitle={},this._featureIcon={},this._featureColor={},this._featureOption={},this._enableColor="red",this._disableColor="#ccc",this._markShapeList=[]
var s=this
s._onMark=function(t){s.__onMark(t)},s._onMarkUndo=function(t){s.__onMarkUndo(t)},s._onMarkClear=function(t){s.__onMarkClear(t)},s._onDataZoom=function(t){s.__onDataZoom(t)},s._onDataZoomReset=function(t){s.__onDataZoomReset(t)},s._onDataView=function(t){s.__onDataView(t)},s._onRestore=function(t){s.__onRestore(t)},s._onSaveAsImage=function(t){s.__onSaveAsImage(t)},s._onMagicType=function(t){s.__onMagicType(t)},s._onCustomHandler=function(t){s.__onCustomHandler(t)},s._onmousemove=function(t){return s.__onmousemove(t)},s._onmousedown=function(t){return s.__onmousedown(t)},s._onmouseup=function(t){return s.__onmouseup(t)},s._onclick=function(t){return s.__onclick(t)}}var i=t("./base"),o=t("zrender/shape/Line"),n=t("zrender/shape/Image"),r=t("zrender/shape/Rectangle"),s=t("../util/shape/Icon"),a=t("../config")
a.toolbox={zlevel:0,z:6,show:!1,orient:"horizontal",x:"right",y:"top",color:["#1e90ff","#22bb22","#4b0082","#d2691e"],disableColor:"#ddd",effectiveColor:"red",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,itemSize:16,showTitle:!0,feature:{mark:{show:!1,title:{mark:"辅助线开关",markUndo:"删除辅助线",markClear:"清空辅助线"},lineStyle:{width:1,color:"#1e90ff",type:"dashed"}},dataZoom:{show:!1,title:{dataZoom:"区域缩放",dataZoomReset:"区域缩放后退"}},dataView:{show:!1,title:"数据视图",readOnly:!1,lang:["数据视图","关闭","刷新"]},magicType:{show:!1,title:{line:"折线图切换",bar:"柱形图切换",stack:"堆积",tiled:"平铺",force:"力导向布局图切换",chord:"和弦图切换",pie:"饼图切换",funnel:"漏斗图切换"},type:[]},restore:{show:!1,title:"还原"},saveAsImage:{show:!1,title:"保存为图片",type:"png",lang:["点击保存"]}}}
var h=t("zrender/tool/util"),l=t("zrender/config"),c=t("zrender/tool/event"),d="stack",u="tiled"
return e.prototype={type:a.COMPONENT_TYPE_TOOLBOX,_buildShape:function(){this._iconList=[]
var t=this.option.toolbox
this._enableColor=t.effectiveColor,this._disableColor=t.disableColor
var e=t.feature,i=[]
for(var o in e)if(e[o].show)switch(o){case"mark":i.push({key:o,name:"mark"}),i.push({key:o,name:"markUndo"}),i.push({key:o,name:"markClear"})
break
case"magicType":for(var n=0,r=e[o].type.length;r>n;n++)e[o].title[e[o].type[n]+"Chart"]=e[o].title[e[o].type[n]],e[o].option&&(e[o].option[e[o].type[n]+"Chart"]=e[o].option[e[o].type[n]]),i.push({key:o,name:e[o].type[n]+"Chart"})
break
case"dataZoom":i.push({key:o,name:"dataZoom"}),i.push({key:o,name:"dataZoomReset"})
break
case"saveAsImage":this.canvasSupported&&i.push({key:o,name:"saveAsImage"})
break
default:i.push({key:o,name:o})}if(i.length>0){for(var s,o,n=0,r=i.length;r>n;n++)s=i[n].name,o=i[n].key,this._iconList.push(s),this._featureTitle[s]=e[o].title[s]||e[o].title,e[o].icon&&(this._featureIcon[s]=e[o].icon[s]||e[o].icon),e[o].color&&(this._featureColor[s]=e[o].color[s]||e[o].color),e[o].option&&(this._featureOption[s]=e[o].option[s]||e[o].option)
this._itemGroupLocation=this._getItemGroupLocation(),this._buildBackground(),this._buildItem()
for(var n=0,r=this.shapeList.length;r>n;n++)this.zr.addShape(this.shapeList[n])
this._iconShapeMap.mark&&(this._iconDisable(this._iconShapeMap.markUndo),this._iconDisable(this._iconShapeMap.markClear)),this._iconShapeMap.dataZoomReset&&0===this._zoomQueue.length&&this._iconDisable(this._iconShapeMap.dataZoomReset)}},_buildItem:function(){var e,i,o,r,a=this.option.toolbox,h=this._iconList.length,l=this._itemGroupLocation.x,c=this._itemGroupLocation.y,d=a.itemSize,u=a.itemGap,p=a.color instanceof Array?a.color:[a.color],f=this.getFont(a.textStyle)
"horizontal"===a.orient?(i=this._itemGroupLocation.y/this.zr.getHeight()<.5?"bottom":"top",o=this._itemGroupLocation.x/this.zr.getWidth()<.5?"left":"right",r=this._itemGroupLocation.y/this.zr.getHeight()<.5?"top":"bottom"):i=this._itemGroupLocation.x/this.zr.getWidth()<.5?"right":"left",this._iconShapeMap={}
for(var g=this,m=0;h>m;m++){switch(e={type:"icon",zlevel:this.getZlevelBase(),z:this.getZBase(),style:{x:l,y:c,width:d,height:d,iconType:this._iconList[m],lineWidth:1,strokeColor:this._featureColor[this._iconList[m]]||p[m%p.length],brushType:"stroke"},highlightStyle:{lineWidth:1,text:a.showTitle?this._featureTitle[this._iconList[m]]:void 0,textFont:f,textPosition:i,strokeColor:this._featureColor[this._iconList[m]]||p[m%p.length]},hoverable:!0,clickable:!0},this._featureIcon[this._iconList[m]]&&(e.style.image=this._featureIcon[this._iconList[m]].replace(RegExp("^image:\\/\\/"),""),e.style.opacity=.8,e.highlightStyle.opacity=1,e.type="image"),"horizontal"===a.orient&&(0===m&&"left"===o&&(e.highlightStyle.textPosition="specific",e.highlightStyle.textAlign=o,e.highlightStyle.textBaseline=r,e.highlightStyle.textX=l,e.highlightStyle.textY="top"===r?c+d+10:c-10),m===h-1&&"right"===o&&(e.highlightStyle.textPosition="specific",e.highlightStyle.textAlign=o,e.highlightStyle.textBaseline=r,e.highlightStyle.textX=l+d,e.highlightStyle.textY="top"===r?c+d+10:c-10)),this._iconList[m]){case"mark":e.onclick=g._onMark
break
case"markUndo":e.onclick=g._onMarkUndo
break
case"markClear":e.onclick=g._onMarkClear
break
case"dataZoom":e.onclick=g._onDataZoom
break
case"dataZoomReset":e.onclick=g._onDataZoomReset
break
case"dataView":if(!this._dataView){var _=t("./dataView")
this._dataView=new _(this.ecTheme,this.messageCenter,this.zr,this.option,this.myChart)}e.onclick=g._onDataView
break
case"restore":e.onclick=g._onRestore
break
case"saveAsImage":e.onclick=g._onSaveAsImage
break
default:this._iconList[m].match("Chart")?(e._name=this._iconList[m].replace("Chart",""),e.onclick=g._onMagicType):e.onclick=g._onCustomHandler}"icon"===e.type?e=new s(e):"image"===e.type&&(e=new n(e)),this.shapeList.push(e),this._iconShapeMap[this._iconList[m]]=e,"horizontal"===a.orient?l+=d+u:c+=d+u}},_buildBackground:function(){var t=this.option.toolbox,e=this.reformCssArray(this.option.toolbox.padding)
this.shapeList.push(new r({zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:this._itemGroupLocation.x-e[3],y:this._itemGroupLocation.y-e[0],width:this._itemGroupLocation.width+e[3]+e[1],height:this._itemGroupLocation.height+e[0]+e[2],brushType:0===t.borderWidth?"fill":"both",color:t.backgroundColor,strokeColor:t.borderColor,lineWidth:t.borderWidth}}))},_getItemGroupLocation:function(){var t=this.option.toolbox,e=this.reformCssArray(this.option.toolbox.padding),i=this._iconList.length,o=t.itemGap,n=t.itemSize,r=0,s=0
"horizontal"===t.orient?(r=(n+o)*i-o,s=n):(s=(n+o)*i-o,r=n)
var a,h=this.zr.getWidth()
switch(t.x){case"center":a=Math.floor((h-r)/2)
break
case"left":a=e[3]+t.borderWidth
break
case"right":a=h-r-e[1]-t.borderWidth
break
default:a=t.x-0,a=isNaN(a)?0:a}var l,c=this.zr.getHeight()
switch(t.y){case"top":l=e[0]+t.borderWidth
break
case"bottom":l=c-s-e[2]-t.borderWidth
break
case"center":l=Math.floor((c-s)/2)
break
default:l=t.y-0,l=isNaN(l)?0:l}return{x:a,y:l,width:r,height:s}},__onmousemove:function(t){this._marking&&(this._markShape.style.xEnd=c.getX(t.event),this._markShape.style.yEnd=c.getY(t.event),this.zr.addHoverShape(this._markShape)),this._zooming&&(this._zoomShape.style.width=c.getX(t.event)-this._zoomShape.style.x,this._zoomShape.style.height=c.getY(t.event)-this._zoomShape.style.y,this.zr.addHoverShape(this._zoomShape),this.dom.style.cursor="crosshair",c.stop(t.event)),this._zoomStart&&"pointer"!=this.dom.style.cursor&&"move"!=this.dom.style.cursor&&(this.dom.style.cursor="crosshair")},__onmousedown:function(t){if(!t.target&&(!this.option.toolbox.feature.dataZoom.needCtrlKey||t.event.ctrlKey)){this._zooming=!0
var e=c.getX(t.event),i=c.getY(t.event),o=this.option.dataZoom||{}
return this._zoomShape=new r({zlevel:this.getZlevelBase(),z:this.getZBase(),style:{x:e,y:i,width:1,height:1,brushType:"both"},highlightStyle:{lineWidth:2,color:o.fillerColor||a.dataZoom.fillerColor,strokeColor:o.handleColor||a.dataZoom.handleColor,brushType:"both"}}),this.zr.addHoverShape(this._zoomShape),!0}},__onmouseup:function(){if(!this._zoomShape||Math.abs(this._zoomShape.style.width)<10||Math.abs(this._zoomShape.style.height)<10)return this._zooming=!1,!0
if(this._zooming&&this.component.dataZoom){this._zooming=!1
var t=this.component.dataZoom.rectZoom(this._zoomShape.style)
t&&(this._zoomQueue.push({start:t.start,end:t.end,start2:t.start2,end2:t.end2}),this._iconEnable(this._iconShapeMap.dataZoomReset),this.zr.refreshNextFrame())}return!0},__onclick:function(t){if(!t.target)if(this._marking)this._marking=!1,this._markShapeList.push(this._markShape),this._iconEnable(this._iconShapeMap.markUndo),this._iconEnable(this._iconShapeMap.markClear),this.zr.addShape(this._markShape),this.zr.refreshNextFrame()
else if(this._markStart){this._marking=!0
var e=c.getX(t.event),i=c.getY(t.event)
this._markShape=new o({zlevel:this.getZlevelBase(),z:this.getZBase(),style:{xStart:e,yStart:i,xEnd:e,yEnd:i,lineWidth:this.query(this.option,"toolbox.feature.mark.lineStyle.width"),strokeColor:this.query(this.option,"toolbox.feature.mark.lineStyle.color"),lineType:this.query(this.option,"toolbox.feature.mark.lineStyle.type")}}),this.zr.addHoverShape(this._markShape)}},__onMark:function(t){var e=t.target
if(this._marking||this._markStart)this._resetMark(),this.zr.refreshNextFrame()
else{this._resetZoom(),this.zr.modShape(e.id,{style:{strokeColor:this._enableColor}}),this.zr.refreshNextFrame(),this._markStart=!0
var i=this
setTimeout(function(){i.zr&&i.zr.on(l.EVENT.CLICK,i._onclick)&&i.zr.on(l.EVENT.MOUSEMOVE,i._onmousemove)},10)}return!0},__onMarkUndo:function(){if(this._marking)this._marking=!1
else{var t=this._markShapeList.length
if(t>=1){var e=this._markShapeList[t-1]
this.zr.delShape(e.id),this.zr.refreshNextFrame(),this._markShapeList.pop(),1===t&&(this._iconDisable(this._iconShapeMap.markUndo),this._iconDisable(this._iconShapeMap.markClear))}}return!0},__onMarkClear:function(){this._marking&&(this._marking=!1)
var t=this._markShapeList.length
if(t>0){for(;t--;)this.zr.delShape(this._markShapeList.pop().id)
this._iconDisable(this._iconShapeMap.markUndo),this._iconDisable(this._iconShapeMap.markClear),this.zr.refreshNextFrame()}return!0},__onDataZoom:function(t){var e=t.target
if(this._zooming||this._zoomStart)this._resetZoom(),this.zr.refreshNextFrame(),this.dom.style.cursor="default"
else{this._resetMark(),this.zr.modShape(e.id,{style:{strokeColor:this._enableColor}}),this.zr.refreshNextFrame(),this._zoomStart=!0
var i=this
setTimeout(function(){i.zr&&i.zr.on(l.EVENT.MOUSEDOWN,i._onmousedown)&&i.zr.on(l.EVENT.MOUSEUP,i._onmouseup)&&i.zr.on(l.EVENT.MOUSEMOVE,i._onmousemove)},10),this.dom.style.cursor="crosshair"}return!0},__onDataZoomReset:function(){return this._zooming&&(this._zooming=!1),this._zoomQueue.pop(),this._zoomQueue.length>0?this.component.dataZoom.absoluteZoom(this._zoomQueue[this._zoomQueue.length-1]):(this.component.dataZoom.rectZoom(),this._iconDisable(this._iconShapeMap.dataZoomReset),this.zr.refreshNextFrame()),!0},_resetMark:function(){this._marking=!1,this._markStart&&(this._markStart=!1,this._iconShapeMap.mark&&this.zr.modShape(this._iconShapeMap.mark.id,{style:{strokeColor:this._iconShapeMap.mark.highlightStyle.strokeColor}}),this.zr.un(l.EVENT.CLICK,this._onclick),this.zr.un(l.EVENT.MOUSEMOVE,this._onmousemove))},_resetZoom:function(){this._zooming=!1,this._zoomStart&&(this._zoomStart=!1,this._iconShapeMap.dataZoom&&this.zr.modShape(this._iconShapeMap.dataZoom.id,{style:{strokeColor:this._iconShapeMap.dataZoom.highlightStyle.strokeColor}}),this.zr.un(l.EVENT.MOUSEDOWN,this._onmousedown),this.zr.un(l.EVENT.MOUSEUP,this._onmouseup),this.zr.un(l.EVENT.MOUSEMOVE,this._onmousemove))},_iconDisable:function(t){"image"!=t.type?this.zr.modShape(t.id,{hoverable:!1,clickable:!1,style:{strokeColor:this._disableColor}}):this.zr.modShape(t.id,{hoverable:!1,clickable:!1,style:{opacity:.3}})},_iconEnable:function(t){"image"!=t.type?this.zr.modShape(t.id,{hoverable:!0,clickable:!0,style:{strokeColor:t.highlightStyle.strokeColor}}):this.zr.modShape(t.id,{hoverable:!0,clickable:!0,style:{opacity:.8}})},__onDataView:function(){return this._dataView.show(this.option),!0},__onRestore:function(){return this._resetMark(),this._resetZoom(),this.messageCenter.dispatch(a.EVENT.RESTORE,null,null,this.myChart),!0},__onSaveAsImage:function(){var t=this.option.toolbox.feature.saveAsImage,e=t.type||"png"
"png"!=e&&"jpeg"!=e&&(e="png")
var i
i=this.myChart.isConnected()?this.myChart.getConnectedDataURL(e):this.zr.toDataURL("image/"+e,this.option.backgroundColor&&"rgba(0,0,0,0)"===this.option.backgroundColor.replace(" ","")?"#fff":this.option.backgroundColor)
var o=document.createElement("div")
o.id="__echarts_download_wrap__",o.style.cssText="position:fixed;z-index:99999;display:block;top:0;left:0;background-color:rgba(33,33,33,0.5);text-align:center;width:100%;height:100%;line-height:"+document.documentElement.clientHeight+"px;"
var n=document.createElement("a")
n.href=i,n.setAttribute("download",(t.name?t.name:this.option.title&&(this.option.title.text||this.option.title.subtext)?this.option.title.text||this.option.title.subtext:"ECharts")+"."+e),n.innerHTML='<img style="vertical-align:middle" src="'+i+'" title="'+(window.ActiveXObject||"ActiveXObject"in window?"右键->图片另存为":t.lang?t.lang[0]:"点击保存")+'"/>',o.appendChild(n),document.body.appendChild(o),n=null,o=null,setTimeout(function(){var t=document.getElementById("__echarts_download_wrap__")
t&&(t.onclick=function(){var t=document.getElementById("__echarts_download_wrap__")
t.onclick=null,t.innerHTML="",document.body.removeChild(t),t=null},t=null)},500)},__onMagicType:function(t){this._resetMark()
var e=t.target._name
return this._magicType[e]||(this._magicType[e]=!0,e===a.CHART_TYPE_LINE?this._magicType[a.CHART_TYPE_BAR]=!1:e===a.CHART_TYPE_BAR&&(this._magicType[a.CHART_TYPE_LINE]=!1),e===a.CHART_TYPE_PIE?this._magicType[a.CHART_TYPE_FUNNEL]=!1:e===a.CHART_TYPE_FUNNEL&&(this._magicType[a.CHART_TYPE_PIE]=!1),e===a.CHART_TYPE_FORCE?this._magicType[a.CHART_TYPE_CHORD]=!1:e===a.CHART_TYPE_CHORD&&(this._magicType[a.CHART_TYPE_FORCE]=!1),e===d?this._magicType[u]=!1:e===u&&(this._magicType[d]=!1),this.messageCenter.dispatch(a.EVENT.MAGIC_TYPE_CHANGED,t.event,{magicType:this._magicType},this.myChart)),!0},setMagicType:function(t){this._resetMark(),this._magicType=t,!this._isSilence&&this.messageCenter.dispatch(a.EVENT.MAGIC_TYPE_CHANGED,null,{magicType:this._magicType},this.myChart)},__onCustomHandler:function(t){var e=t.target.style.iconType,i=this.option.toolbox.feature[e].onclick
"function"==typeof i&&i.call(this,this.option)},reset:function(t,e){if(e&&this.clear(),this.query(t,"toolbox.show")&&this.query(t,"toolbox.feature.magicType.show")){var i=t.toolbox.feature.magicType.type,o=i.length
for(this._magicMap={};o--;)this._magicMap[i[o]]=!0
o=t.series.length
for(var n,r;o--;)n=t.series[o].type,this._magicMap[n]&&(r=t.xAxis instanceof Array?t.xAxis[t.series[o].xAxisIndex||0]:t.xAxis,r&&"category"===(r.type||"category")&&(r.__boundaryGap=null!=r.boundaryGap?r.boundaryGap:!0),r=t.yAxis instanceof Array?t.yAxis[t.series[o].yAxisIndex||0]:t.yAxis,r&&"category"===r.type&&(r.__boundaryGap=null!=r.boundaryGap?r.boundaryGap:!0),t.series[o].__type=n,t.series[o].__itemStyle=h.clone(t.series[o].itemStyle||{})),(this._magicMap[d]||this._magicMap[u])&&(t.series[o].__stack=t.series[o].stack)}this._magicType=e?{}:this._magicType||{}
for(var s in this._magicType)if(this._magicType[s]){this.option=t,this.getMagicOption()
break}var a=t.dataZoom
if(a&&a.show){var l=null!=a.start&&a.start>=0&&a.start<=100?a.start:0,c=null!=a.end&&a.end>=0&&a.end<=100?a.end:100
l>c&&(l+=c,c=l-c,l-=c),this._zoomQueue=[{start:l,end:c,start2:0,end2:100}]}else this._zoomQueue=[]},getMagicOption:function(){var t,e
if(this._magicType[a.CHART_TYPE_LINE]||this._magicType[a.CHART_TYPE_BAR]){for(var i=this._magicType[a.CHART_TYPE_LINE]?!1:!0,o=0,n=this.option.series.length;n>o;o++)e=this.option.series[o].type,(e==a.CHART_TYPE_LINE||e==a.CHART_TYPE_BAR)&&(t=this.option.xAxis instanceof Array?this.option.xAxis[this.option.series[o].xAxisIndex||0]:this.option.xAxis,t&&"category"===(t.type||"category")&&(t.boundaryGap=i?!0:t.__boundaryGap),t=this.option.yAxis instanceof Array?this.option.yAxis[this.option.series[o].yAxisIndex||0]:this.option.yAxis,t&&"category"===t.type&&(t.boundaryGap=i?!0:t.__boundaryGap))
this._defaultMagic(a.CHART_TYPE_LINE,a.CHART_TYPE_BAR)}if(this._defaultMagic(a.CHART_TYPE_CHORD,a.CHART_TYPE_FORCE),this._defaultMagic(a.CHART_TYPE_PIE,a.CHART_TYPE_FUNNEL),this._magicType[d]||this._magicType[u])for(var o=0,n=this.option.series.length;n>o;o++)this._magicType[d]?(this.option.series[o].stack="_ECHARTS_STACK_KENER_2014_",e=d):this._magicType[u]&&(this.option.series[o].stack=null,e=u),this._featureOption[e+"Chart"]&&h.merge(this.option.series[o],this._featureOption[e+"Chart"]||{},!0)
return this.option},_defaultMagic:function(t,e){if(this._magicType[t]||this._magicType[e])for(var i=0,o=this.option.series.length;o>i;i++){var n=this.option.series[i].type;(n==t||n==e)&&(this.option.series[i].type=this._magicType[t]?t:e,this.option.series[i].itemStyle=h.clone(this.option.series[i].__itemStyle),n=this.option.series[i].type,this._featureOption[n+"Chart"]&&h.merge(this.option.series[i],this._featureOption[n+"Chart"]||{},!0))}},silence:function(t){this._isSilence=t},resize:function(){this._resetMark(),this.clear(),this.option&&this.option.toolbox&&this.option.toolbox.show&&this._buildShape(),this._dataView&&this._dataView.resize()},hideDataView:function(){this._dataView&&this._dataView.hide()},clear:function(t){this.zr&&(this.zr.delShape(this.shapeList),this.shapeList=[],t||(this.zr.delShape(this._markShapeList),this._markShapeList=[]))},onbeforDispose:function(){this._dataView&&(this._dataView.dispose(),this._dataView=null),this._markShapeList=null},refresh:function(t){t&&(this._resetMark(),this._resetZoom(),t.toolbox=this.reformOption(t.toolbox),this.option=t,this.clear(!0),t.toolbox.show&&this._buildShape(),this.hideDataView())}},h.inherits(e,i),t("../component").define("toolbox",e),e}),define("echarts/component",[],function(){var t={},e={}
return t.define=function(i,o){return e[i]=o,t},t.get=function(t){return e[t]},t}),define("echarts/component/title",["require","./base","zrender/shape/Text","zrender/shape/Rectangle","../config","zrender/tool/util","zrender/tool/area","zrender/tool/color","../component"],function(t){function e(t,e,o,n,r){i.call(this,t,e,o,n,r),this.refresh(n)}var i=t("./base"),o=t("zrender/shape/Text"),n=t("zrender/shape/Rectangle"),r=t("../config")
r.title={zlevel:0,z:6,show:!0,text:"",subtext:"",x:"left",y:"top",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:5,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}
var s=t("zrender/tool/util"),a=t("zrender/tool/area"),h=t("zrender/tool/color")
return e.prototype={type:r.COMPONENT_TYPE_TITLE,_buildShape:function(){if(this.titleOption.show){this._itemGroupLocation=this._getItemGroupLocation(),this._buildBackground(),this._buildItem()
for(var t=0,e=this.shapeList.length;e>t;t++)this.zr.addShape(this.shapeList[t])}},_buildItem:function(){var t=this.titleOption.text,e=this.titleOption.link,i=this.titleOption.target,n=this.titleOption.subtext,r=this.titleOption.sublink,s=this.titleOption.subtarget,a=this.getFont(this.titleOption.textStyle),l=this.getFont(this.titleOption.subtextStyle),c=this._itemGroupLocation.x,d=this._itemGroupLocation.y,u=this._itemGroupLocation.width,p=this._itemGroupLocation.height,f={zlevel:this.getZlevelBase(),z:this.getZBase(),style:{y:d,color:this.titleOption.textStyle.color,text:t,textFont:a,textBaseline:"top"},highlightStyle:{color:h.lift(this.titleOption.textStyle.color,1),brushType:"fill"},hoverable:!1}
e&&(f.hoverable=!0,f.clickable=!0,f.onclick=function(){i&&"self"==i?window.location=e:window.open(e)})
var g={zlevel:this.getZlevelBase(),z:this.getZBase(),style:{y:d+p,color:this.titleOption.subtextStyle.color,text:n,textFont:l,textBaseline:"bottom"},highlightStyle:{color:h.lift(this.titleOption.subtextStyle.color,1),brushType:"fill"},hoverable:!1}
switch(r&&(g.hoverable=!0,g.clickable=!0,g.onclick=function(){s&&"self"==s?window.location=r:window.open(r)}),this.titleOption.x){case"center":f.style.x=g.style.x=c+u/2,f.style.textAlign=g.style.textAlign="center"
break
case"left":f.style.x=g.style.x=c,f.style.textAlign=g.style.textAlign="left"
break
case"right":f.style.x=g.style.x=c+u,f.style.textAlign=g.style.textAlign="right"
break
default:c=this.titleOption.x-0,c=isNaN(c)?0:c,f.style.x=g.style.x=c}this.titleOption.textAlign&&(f.style.textAlign=g.style.textAlign=this.titleOption.textAlign),this.shapeList.push(new o(f)),""!==n&&this.shapeList.push(new o(g))},_buildBackground:function(){var t=this.reformCssArray(this.titleOption.padding)
this.shapeList.push(new n({zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:this._itemGroupLocation.x-t[3],y:this._itemGroupLocation.y-t[0],width:this._itemGroupLocation.width+t[3]+t[1],height:this._itemGroupLocation.height+t[0]+t[2],brushType:0===this.titleOption.borderWidth?"fill":"both",color:this.titleOption.backgroundColor,strokeColor:this.titleOption.borderColor,lineWidth:this.titleOption.borderWidth}}))},_getItemGroupLocation:function(){var t,e=this.reformCssArray(this.titleOption.padding),i=this.titleOption.text,o=this.titleOption.subtext,n=this.getFont(this.titleOption.textStyle),r=this.getFont(this.titleOption.subtextStyle),s=Math.max(a.getTextWidth(i,n),a.getTextWidth(o,r)),h=a.getTextHeight(i,n)+(""===o?0:this.titleOption.itemGap+a.getTextHeight(o,r)),l=this.zr.getWidth()
switch(this.titleOption.x){case"center":t=Math.floor((l-s)/2)
break
case"left":t=e[3]+this.titleOption.borderWidth
break
case"right":t=l-s-e[1]-this.titleOption.borderWidth
break
default:t=this.titleOption.x-0,t=isNaN(t)?0:t}var c,d=this.zr.getHeight()
switch(this.titleOption.y){case"top":c=e[0]+this.titleOption.borderWidth
break
case"bottom":c=d-h-e[2]-this.titleOption.borderWidth
break
case"center":c=Math.floor((d-h)/2)
break
default:c=this.titleOption.y-0,c=isNaN(c)?0:c}return{x:t,y:c,width:s,height:h}},refresh:function(t){t&&(this.option=t,this.option.title=this.reformOption(this.option.title),this.titleOption=this.option.title,this.titleOption.textStyle=this.getTextStyle(this.titleOption.textStyle),this.titleOption.subtextStyle=this.getTextStyle(this.titleOption.subtextStyle)),this.clear(),this._buildShape()}},s.inherits(e,i),t("../component").define("title",e),e}),define("echarts/component/tooltip",["require","./base","../util/shape/Cross","zrender/shape/Line","zrender/shape/Rectangle","../config","../util/ecData","zrender/config","zrender/tool/event","zrender/tool/area","zrender/tool/color","zrender/tool/util","zrender/shape/Base","../component"],function(t){function e(t,e,r,s,a){i.call(this,t,e,r,s,a),this.dom=a.dom
var h=this
h._onmousemove=function(t){return h.__onmousemove(t)},h._onglobalout=function(t){return h.__onglobalout(t)},this.zr.on(l.EVENT.MOUSEMOVE,h._onmousemove),this.zr.on(l.EVENT.GLOBALOUT,h._onglobalout),h._hide=function(t){return h.__hide(t)},h._tryShow=function(t){return h.__tryShow(t)},h._refixed=function(t){return h.__refixed(t)},h._setContent=function(t,e){return h.__setContent(t,e)},this._tDom=this._tDom||document.createElement("div"),this._tDom.onselectstart=function(){return!1},this._tDom.onmouseover=function(){h._mousein=!0},this._tDom.onmouseout=function(){h._mousein=!1},this._tDom.className="echarts-tooltip",this._tDom.style.position="absolute",this.hasAppend=!1,this._axisLineShape&&this.zr.delShape(this._axisLineShape.id),this._axisLineShape=new n({zlevel:this.getZlevelBase(),z:this.getZBase(),invisible:!0,hoverable:!1}),this.shapeList.push(this._axisLineShape),this.zr.addShape(this._axisLineShape),this._axisShadowShape&&this.zr.delShape(this._axisShadowShape.id),this._axisShadowShape=new n({zlevel:this.getZlevelBase(),z:1,invisible:!0,hoverable:!1}),this.shapeList.push(this._axisShadowShape),this.zr.addShape(this._axisShadowShape),this._axisCrossShape&&this.zr.delShape(this._axisCrossShape.id),this._axisCrossShape=new o({zlevel:this.getZlevelBase(),z:this.getZBase(),invisible:!0,hoverable:!1}),this.shapeList.push(this._axisCrossShape),this.zr.addShape(this._axisCrossShape),this.showing=!1,this.refresh(s)}var i=t("./base"),o=t("../util/shape/Cross"),n=t("zrender/shape/Line"),r=t("zrender/shape/Rectangle"),s=new r({}),a=t("../config")
a.tooltip={zlevel:1,z:8,show:!0,showContent:!0,trigger:"item",islandFormatter:"{a} <br/>{b} : {c}",showDelay:20,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(0,0,0,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,axisPointer:{type:"line",lineStyle:{color:"#48b",width:2,type:"solid"},crossStyle:{color:"#1e90ff",width:1,type:"dashed"},shadowStyle:{color:"rgba(150,150,150,0.3)",width:"auto",type:"default"}},textStyle:{color:"#fff"}}
var h=t("../util/ecData"),l=t("zrender/config"),c=t("zrender/tool/event"),d=t("zrender/tool/area"),u=t("zrender/tool/color"),p=t("zrender/tool/util"),f=t("zrender/shape/Base")
return e.prototype={type:a.COMPONENT_TYPE_TOOLTIP,_gCssText:"position:absolute;display:block;border-style:solid;white-space:nowrap;",_style:function(t){if(!t)return""
var e=[]
if(t.transitionDuration){var i="left "+t.transitionDuration+"s,top "+t.transitionDuration+"s"
e.push("transition:"+i),e.push("-moz-transition:"+i),e.push("-webkit-transition:"+i),e.push("-o-transition:"+i)}t.backgroundColor&&(e.push("background-Color:"+u.toHex(t.backgroundColor)),e.push("filter:alpha(opacity=70)"),e.push("background-Color:"+t.backgroundColor)),null!=t.borderWidth&&e.push("border-width:"+t.borderWidth+"px"),null!=t.borderColor&&e.push("border-color:"+t.borderColor),null!=t.borderRadius&&(e.push("border-radius:"+t.borderRadius+"px"),e.push("-moz-border-radius:"+t.borderRadius+"px"),e.push("-webkit-border-radius:"+t.borderRadius+"px"),e.push("-o-border-radius:"+t.borderRadius+"px"))
var o=t.textStyle
o&&(o.color&&e.push("color:"+o.color),o.decoration&&e.push("text-decoration:"+o.decoration),o.align&&e.push("text-align:"+o.align),o.fontFamily&&e.push("font-family:"+o.fontFamily),o.fontSize&&e.push("font-size:"+o.fontSize+"px"),o.fontSize&&e.push("line-height:"+Math.round(3*o.fontSize/2)+"px"),o.fontStyle&&e.push("font-style:"+o.fontStyle),o.fontWeight&&e.push("font-weight:"+o.fontWeight))
var n=t.padding
return null!=n&&(n=this.reformCssArray(n),e.push("padding:"+n[0]+"px "+n[1]+"px "+n[2]+"px "+n[3]+"px")),e=e.join(";")+";"},__hide:function(){this._lastDataIndex=-1,this._lastSeriesIndex=-1,this._lastItemTriggerId=-1,this._tDom&&(this._tDom.style.display="none")
var t=!1
this._axisLineShape.invisible||(this._axisLineShape.invisible=!0,this.zr.modShape(this._axisLineShape.id),t=!0),this._axisShadowShape.invisible||(this._axisShadowShape.invisible=!0,this.zr.modShape(this._axisShadowShape.id),t=!0),this._axisCrossShape.invisible||(this._axisCrossShape.invisible=!0,this.zr.modShape(this._axisCrossShape.id),t=!0),this._lastTipShape&&this._lastTipShape.tipShape.length>0&&(this.zr.delShape(this._lastTipShape.tipShape),this._lastTipShape=!1,this.shapeList.length=2),t&&this.zr.refreshNextFrame(),this.showing=!1},_show:function(t,e,i,o){var n=this._tDom.offsetHeight,r=this._tDom.offsetWidth
t&&("function"==typeof t&&(t=t([e,i])),t instanceof Array&&(e=t[0],i=t[1])),e+r>this._zrWidth&&(e-=r+40),i+n>this._zrHeight&&(i-=n-20),20>i&&(i=0),this._tDom.style.cssText=this._gCssText+this._defaultCssText+(o?o:"")+"left:"+e+"px;top:"+i+"px;",(10>n||10>r)&&setTimeout(this._refixed,20),this.showing=!0},__refixed:function(){if(this._tDom){var t="",e=this._tDom.offsetHeight,i=this._tDom.offsetWidth
this._tDom.offsetLeft+i>this._zrWidth&&(t+="left:"+(this._zrWidth-i-20)+"px;"),this._tDom.offsetTop+e>this._zrHeight&&(t+="top:"+(this._zrHeight-e-10)+"px;"),""!==t&&(this._tDom.style.cssText+=t)}},__tryShow:function(){var t,e
if(this._curTarget){if("island"===this._curTarget._type&&this.option.tooltip.show)return void this._showItemTrigger()
var i=h.get(this._curTarget,"series"),o=h.get(this._curTarget,"data")
t=this.deepQuery([o,i,this.option],"tooltip.show"),null!=i&&null!=o&&t?(e=this.deepQuery([o,i,this.option],"tooltip.trigger"),"axis"===e?this._showAxisTrigger(i.xAxisIndex,i.yAxisIndex,h.get(this._curTarget,"dataIndex")):this._showItemTrigger()):(clearTimeout(this._hidingTicket),clearTimeout(this._showingTicket),this._hidingTicket=setTimeout(this._hide,this._hideDelay))}else this._findPolarTrigger()||this._findAxisTrigger()},_findAxisTrigger:function(){if(!this.component.xAxis||!this.component.yAxis)return void(this._hidingTicket=setTimeout(this._hide,this._hideDelay))
for(var t,e,i=this.option.series,o=0,n=i.length;n>o;o++)if("axis"===this.deepQuery([i[o],this.option],"tooltip.trigger"))return t=i[o].xAxisIndex||0,e=i[o].yAxisIndex||0,this.component.xAxis.getAxis(t)&&this.component.xAxis.getAxis(t).type===a.COMPONENT_TYPE_AXIS_CATEGORY?void this._showAxisTrigger(t,e,this._getNearestDataIndex("x",this.component.xAxis.getAxis(t))):this.component.yAxis.getAxis(e)&&this.component.yAxis.getAxis(e).type===a.COMPONENT_TYPE_AXIS_CATEGORY?void this._showAxisTrigger(t,e,this._getNearestDataIndex("y",this.component.yAxis.getAxis(e))):void this._showAxisTrigger(t,e,-1)
"cross"===this.option.tooltip.axisPointer.type&&this._showAxisTrigger(-1,-1,-1)},_findPolarTrigger:function(){if(!this.component.polar)return!1
var t,e=c.getX(this._event),i=c.getY(this._event),o=this.component.polar.getNearestIndex([e,i])
return o?(t=o.valueIndex,o=o.polarIndex):o=-1,-1!=o?this._showPolarTrigger(o,t):!1},_getNearestDataIndex:function(t,e){var i=-1,o=c.getX(this._event),n=c.getY(this._event)
if("x"===t){for(var r,s,a=this.component.grid.getXend(),h=e.getCoordByIndex(i);a>h&&(s=h,o>=h);)r=h,h=e.getCoordByIndex(++i)
return 0>=i?i=0:s-o>=o-r?i-=1:null==e.getNameByIndex(i)&&(i-=1),i}for(var l,d,u=this.component.grid.getY(),h=e.getCoordByIndex(i);h>u&&(l=h,h>=n);)d=h,h=e.getCoordByIndex(++i)
return 0>=i?i=0:n-l>=d-n?i-=1:null==e.getNameByIndex(i)&&(i-=1),i},_showAxisTrigger:function(t,e,i){if(!this._event.connectTrigger&&this.messageCenter.dispatch(a.EVENT.TOOLTIP_IN_GRID,this._event,null,this.myChart),null==this.component.xAxis||null==this.component.yAxis||null==t||null==e)return clearTimeout(this._hidingTicket),clearTimeout(this._showingTicket),void(this._hidingTicket=setTimeout(this._hide,this._hideDelay))
var o,n,r,s,h=this.option.series,l=[],d=[],u=""
if("axis"===this.option.tooltip.trigger){if(!this.option.tooltip.show)return
n=this.option.tooltip.formatter,r=this.option.tooltip.position}var p,f,g=-1!=t&&this.component.xAxis.getAxis(t).type===a.COMPONENT_TYPE_AXIS_CATEGORY?"xAxis":-1!=e&&this.component.yAxis.getAxis(e).type===a.COMPONENT_TYPE_AXIS_CATEGORY?"yAxis":!1
if(g){var m="xAxis"==g?t:e
o=this.component[g].getAxis(m)
for(var _=0,y=h.length;y>_;_++)this._isSelected(h[_].name)&&h[_][g+"Index"]===m&&"axis"===this.deepQuery([h[_],this.option],"tooltip.trigger")&&(s=this.query(h[_],"tooltip.showContent")||s,n=this.query(h[_],"tooltip.formatter")||n,r=this.query(h[_],"tooltip.position")||r,u+=this._style(this.query(h[_],"tooltip")),null!=h[_].stack&&"xAxis"==g?(l.unshift(h[_]),d.unshift(_)):(l.push(h[_]),d.push(_)))
this.messageCenter.dispatch(a.EVENT.TOOLTIP_HOVER,this._event,{seriesIndex:d,dataIndex:i},this.myChart)
var v
"xAxis"==g?(p=this.subPixelOptimize(o.getCoordByIndex(i),this._axisLineWidth),f=c.getY(this._event),v=[p,this.component.grid.getY(),p,this.component.grid.getYend()]):(p=c.getX(this._event),f=this.subPixelOptimize(o.getCoordByIndex(i),this._axisLineWidth),v=[this.component.grid.getX(),f,this.component.grid.getXend(),f]),this._styleAxisPointer(l,v[0],v[1],v[2],v[3],o.getGap(),p,f)}else p=c.getX(this._event),f=c.getY(this._event),this._styleAxisPointer(h,this.component.grid.getX(),f,this.component.grid.getXend(),f,0,p,f),i>=0?this._showItemTrigger(!0):(clearTimeout(this._hidingTicket),clearTimeout(this._showingTicket),this._tDom.style.display="none")
if(l.length>0){if(this._lastItemTriggerId=-1,this._lastDataIndex!=i||this._lastSeriesIndex!=d[0]){this._lastDataIndex=i,this._lastSeriesIndex=d[0]
var x,b
if("function"==typeof n){for(var T=[],_=0,y=l.length;y>_;_++)x=l[_].data[i],b=this.getDataFromOption(x,"-"),T.push({seriesIndex:d[_],seriesName:l[_].name||"",series:l[_],dataIndex:i,data:x,name:o.getNameByIndex(i),value:b,0:l[_].name||"",1:o.getNameByIndex(i),2:b,3:x})
this._curTicket="axis:"+i,this._tDom.innerHTML=n.call(this.myChart,T,this._curTicket,this._setContent)}else if("string"==typeof n){this._curTicket=NaN,n=n.replace("{a}","{a0}").replace("{b}","{b0}").replace("{c}","{c0}")
for(var _=0,y=l.length;y>_;_++)n=n.replace("{a"+_+"}",this._encodeHTML(l[_].name||"")),n=n.replace("{b"+_+"}",this._encodeHTML(o.getNameByIndex(i))),x=l[_].data[i],x=this.getDataFromOption(x,"-"),n=n.replace("{c"+_+"}",x instanceof Array?x:this.numAddCommas(x))
this._tDom.innerHTML=n}else{this._curTicket=NaN,n=this._encodeHTML(o.getNameByIndex(i))
for(var _=0,y=l.length;y>_;_++)n+="<br/>"+this._encodeHTML(l[_].name||"")+" : ",x=l[_].data[i],x=this.getDataFromOption(x,"-"),n+=x instanceof Array?x:this.numAddCommas(x)
this._tDom.innerHTML=n}}if(s===!1||!this.option.tooltip.showContent)return
this.hasAppend||(this._tDom.style.left=this._zrWidth/2+"px",this._tDom.style.top=this._zrHeight/2+"px",this.dom.firstChild.appendChild(this._tDom),this.hasAppend=!0),this._show(r,p+10,f+10,u)}},_showPolarTrigger:function(t,e){if(null==this.component.polar||null==t||null==e||0>e)return!1
var i,o,n,r=this.option.series,s=[],a=[],h=""
if("axis"===this.option.tooltip.trigger){if(!this.option.tooltip.show)return!1
i=this.option.tooltip.formatter,o=this.option.tooltip.position}for(var l=this.option.polar[t].indicator[e].text,d=0,u=r.length;u>d;d++)this._isSelected(r[d].name)&&r[d].polarIndex===t&&"axis"===this.deepQuery([r[d],this.option],"tooltip.trigger")&&(n=this.query(r[d],"tooltip.showContent")||n,i=this.query(r[d],"tooltip.formatter")||i,o=this.query(r[d],"tooltip.position")||o,h+=this._style(this.query(r[d],"tooltip")),s.push(r[d]),a.push(d))
if(s.length>0){for(var p,f,g,m=[],d=0,u=s.length;u>d;d++){p=s[d].data
for(var _=0,y=p.length;y>_;_++)f=p[_],this._isSelected(f.name)&&(f=null!=f?f:{name:"",value:{dataIndex:"-"}},g=this.getDataFromOption(f.value[e]),m.push({seriesIndex:a[d],seriesName:s[d].name||"",series:s[d],dataIndex:e,data:f,name:f.name,indicator:l,value:g,0:s[d].name||"",1:f.name,2:g,3:l}))}if(m.length<=0)return
if(this._lastItemTriggerId=-1,this._lastDataIndex!=e||this._lastSeriesIndex!=a[0])if(this._lastDataIndex=e,this._lastSeriesIndex=a[0],"function"==typeof i)this._curTicket="axis:"+e,this._tDom.innerHTML=i.call(this.myChart,m,this._curTicket,this._setContent)
else if("string"==typeof i){i=i.replace("{a}","{a0}").replace("{b}","{b0}").replace("{c}","{c0}").replace("{d}","{d0}")
for(var d=0,u=m.length;u>d;d++)i=i.replace("{a"+d+"}",this._encodeHTML(m[d].seriesName)),i=i.replace("{b"+d+"}",this._encodeHTML(m[d].name)),i=i.replace("{c"+d+"}",this.numAddCommas(m[d].value)),i=i.replace("{d"+d+"}",this._encodeHTML(m[d].indicator))
this._tDom.innerHTML=i}else{i=this._encodeHTML(m[0].name)+"<br/>"+this._encodeHTML(m[0].indicator)+" : "+this.numAddCommas(m[0].value)
for(var d=1,u=m.length;u>d;d++)i+="<br/>"+this._encodeHTML(m[d].name)+"<br/>",i+=this._encodeHTML(m[d].indicator)+" : "+this.numAddCommas(m[d].value)
this._tDom.innerHTML=i}if(n===!1||!this.option.tooltip.showContent)return
return this.hasAppend||(this._tDom.style.left=this._zrWidth/2+"px",this._tDom.style.top=this._zrHeight/2+"px",this.dom.firstChild.appendChild(this._tDom),this.hasAppend=!0),this._show(o,c.getX(this._event),c.getY(this._event),h),!0}},_showItemTrigger:function(t){if(this._curTarget){var e,i,o,n=h.get(this._curTarget,"series"),r=h.get(this._curTarget,"seriesIndex"),s=h.get(this._curTarget,"data"),l=h.get(this._curTarget,"dataIndex"),d=h.get(this._curTarget,"name"),u=h.get(this._curTarget,"value"),p=h.get(this._curTarget,"special"),f=h.get(this._curTarget,"special2"),g=[s,n,this.option],m=""
if("island"!=this._curTarget._type){var _=t?"axis":"item"
this.option.tooltip.trigger===_&&(e=this.option.tooltip.formatter,i=this.option.tooltip.position),this.query(n,"tooltip.trigger")===_&&(o=this.query(n,"tooltip.showContent")||o,e=this.query(n,"tooltip.formatter")||e,i=this.query(n,"tooltip.position")||i,m+=this._style(this.query(n,"tooltip"))),o=this.query(s,"tooltip.showContent")||o,e=this.query(s,"tooltip.formatter")||e,i=this.query(s,"tooltip.position")||i,m+=this._style(this.query(s,"tooltip"))}else this._lastItemTriggerId=NaN,o=this.deepQuery(g,"tooltip.showContent"),e=this.deepQuery(g,"tooltip.islandFormatter"),i=this.deepQuery(g,"tooltip.islandPosition")
this._lastDataIndex=-1,this._lastSeriesIndex=-1,this._lastItemTriggerId!==this._curTarget.id&&(this._lastItemTriggerId=this._curTarget.id,"function"==typeof e?(this._curTicket=(n.name||"")+":"+l,this._tDom.innerHTML=e.call(this.myChart,{seriesIndex:r,seriesName:n.name||"",series:n,dataIndex:l,data:s,name:d,value:u,percent:p,indicator:p,value2:f,indicator2:f,0:n.name||"",1:d,2:u,3:p,4:f,5:s,6:r,7:l},this._curTicket,this._setContent)):"string"==typeof e?(this._curTicket=NaN,e=e.replace("{a}","{a0}").replace("{b}","{b0}").replace("{c}","{c0}"),e=e.replace("{a0}",this._encodeHTML(n.name||"")).replace("{b0}",this._encodeHTML(d)).replace("{c0}",u instanceof Array?u:this.numAddCommas(u)),e=e.replace("{d}","{d0}").replace("{d0}",p||""),e=e.replace("{e}","{e0}").replace("{e0}",h.get(this._curTarget,"special2")||""),this._tDom.innerHTML=e):(this._curTicket=NaN,n.type===a.CHART_TYPE_RADAR&&p?this._tDom.innerHTML=this._itemFormatter.radar.call(this,n,d,u,p):n.type===a.CHART_TYPE_EVENTRIVER?this._tDom.innerHTML=this._itemFormatter.eventRiver.call(this,n,d,u,s):this._tDom.innerHTML=""+(null!=n.name?this._encodeHTML(n.name)+"<br/>":"")+(""===d?"":this._encodeHTML(d)+" : ")+(u instanceof Array?u:this.numAddCommas(u))))
var y=c.getX(this._event),v=c.getY(this._event)
this.deepQuery(g,"tooltip.axisPointer.show")&&this.component.grid&&this._styleAxisPointer([n],this.component.grid.getX(),v,this.component.grid.getXend(),v,0,y,v),o!==!1&&this.option.tooltip.showContent&&(this.hasAppend||(this._tDom.style.left=this._zrWidth/2+"px",this._tDom.style.top=this._zrHeight/2+"px",this.dom.firstChild.appendChild(this._tDom),this.hasAppend=!0),this._show(i,y+20,v-20,m))}},_itemFormatter:{radar:function(t,e,i,o){var n=""
n+=this._encodeHTML(""===e?t.name||"":e),n+=""===n?"":"<br />"
for(var r=0;r<o.length;r++)n+=this._encodeHTML(o[r].text)+" : "+this.numAddCommas(i[r])+"<br />"
return n},chord:function(t,e,i,o,n){if(null==n)return this._encodeHTML(e)+" ("+this.numAddCommas(i)+")"
var r=this._encodeHTML(e),s=this._encodeHTML(o)
return""+(null!=t.name?this._encodeHTML(t.name)+"<br/>":"")+r+" -> "+s+" ("+this.numAddCommas(i)+")<br />"+s+" -> "+r+" ("+this.numAddCommas(n)+")"},eventRiver:function(t,e,i,o){var n=""
n+=this._encodeHTML(""===t.name?"":t.name+" : "),n+=this._encodeHTML(e),n+=""===n?"":"<br />",o=o.evolution
for(var r=0,s=o.length;s>r;r++)n+='<div style="padding-top:5px;">',o[r].detail&&(o[r].detail.img&&(n+='<img src="'+o[r].detail.img+'" style="float:left;width:40px;height:40px;">'),n+='<div style="margin-left:45px;">'+o[r].time+"<br/>",n+='<a href="'+o[r].detail.link+'" target="_blank">',n+=o[r].detail.text+"</a></div>",n+="</div>")
return n}},_styleAxisPointer:function(t,e,i,o,n,r,s,a){if(t.length>0){var h,l,c=this.option.tooltip.axisPointer,d=c.type,u={line:{},cross:{},shadow:{}}
for(var p in u)u[p].color=c[p+"Style"].color,u[p].width=c[p+"Style"].width,u[p].type=c[p+"Style"].type
for(var f=0,g=t.length;g>f;f++)h=t[f],l=this.query(h,"tooltip.axisPointer.type"),d=l||d,l&&(u[l].color=this.query(h,"tooltip.axisPointer."+l+"Style.color")||u[l].color,u[l].width=this.query(h,"tooltip.axisPointer."+l+"Style.width")||u[l].width,u[l].type=this.query(h,"tooltip.axisPointer."+l+"Style.type")||u[l].type)
if("line"===d){var m=u.line.width,_=e==o
this._axisLineShape.style={xStart:_?this.subPixelOptimize(e,m):e,yStart:_?i:this.subPixelOptimize(i,m),xEnd:_?this.subPixelOptimize(o,m):o,yEnd:_?n:this.subPixelOptimize(n,m),strokeColor:u.line.color,lineWidth:m,lineType:u.line.type},this._axisLineShape.invisible=!1,this.zr.modShape(this._axisLineShape.id)}else if("cross"===d){var y=u.cross.width
this._axisCrossShape.style={brushType:"stroke",rect:this.component.grid.getArea(),x:this.subPixelOptimize(s,y),y:this.subPixelOptimize(a,y),text:("( "+this.component.xAxis.getAxis(0).getValueFromCoord(s)+" , "+this.component.yAxis.getAxis(0).getValueFromCoord(a)+" )").replace("  , "," ").replace(" ,  "," "),textPosition:"specific",strokeColor:u.cross.color,lineWidth:y,lineType:u.cross.type},this.component.grid.getXend()-s>100?(this._axisCrossShape.style.textAlign="left",this._axisCrossShape.style.textX=s+10):(this._axisCrossShape.style.textAlign="right",this._axisCrossShape.style.textX=s-10),a-this.component.grid.getY()>50?(this._axisCrossShape.style.textBaseline="bottom",this._axisCrossShape.style.textY=a-10):(this._axisCrossShape.style.textBaseline="top",this._axisCrossShape.style.textY=a+10),this._axisCrossShape.invisible=!1,this.zr.modShape(this._axisCrossShape.id)}else"shadow"===d&&((null==u.shadow.width||"auto"===u.shadow.width||isNaN(u.shadow.width))&&(u.shadow.width=r),e===o?Math.abs(this.component.grid.getX()-e)<2?(u.shadow.width/=2,e=o+=u.shadow.width/2):Math.abs(this.component.grid.getXend()-e)<2&&(u.shadow.width/=2,e=o-=u.shadow.width/2):i===n&&(Math.abs(this.component.grid.getY()-i)<2?(u.shadow.width/=2,i=n+=u.shadow.width/2):Math.abs(this.component.grid.getYend()-i)<2&&(u.shadow.width/=2,i=n-=u.shadow.width/2)),this._axisShadowShape.style={xStart:e,yStart:i,xEnd:o,yEnd:n,strokeColor:u.shadow.color,lineWidth:u.shadow.width},this._axisShadowShape.invisible=!1,this.zr.modShape(this._axisShadowShape.id))
this.zr.refreshNextFrame()}},__onmousemove:function(t){if(clearTimeout(this._hidingTicket),clearTimeout(this._showingTicket),!this._mousein||!this._enterable){var e=t.target,i=c.getX(t.event),o=c.getY(t.event)
if(e){this._curTarget=e,this._event=t.event,this._event.zrenderX=i,this._event.zrenderY=o
var n
if(this._needAxisTrigger&&this.component.polar&&-1!=(n=this.component.polar.isInside([i,o])))for(var r=this.option.series,h=0,l=r.length;l>h;h++)if(r[h].polarIndex===n&&"axis"===this.deepQuery([r[h],this.option],"tooltip.trigger")){this._curTarget=null
break}this._showingTicket=setTimeout(this._tryShow,this._showDelay)}else this._curTarget=!1,this._event=t.event,this._event.zrenderX=i,this._event.zrenderY=o,this._needAxisTrigger&&this.component.grid&&d.isInside(s,this.component.grid.getArea(),i,o)?this._showingTicket=setTimeout(this._tryShow,this._showDelay):this._needAxisTrigger&&this.component.polar&&-1!=this.component.polar.isInside([i,o])?this._showingTicket=setTimeout(this._tryShow,this._showDelay):(!this._event.connectTrigger&&this.messageCenter.dispatch(a.EVENT.TOOLTIP_OUT_GRID,this._event,null,this.myChart),this._hidingTicket=setTimeout(this._hide,this._hideDelay))}},__onglobalout:function(){clearTimeout(this._hidingTicket),clearTimeout(this._showingTicket),this._hidingTicket=setTimeout(this._hide,this._hideDelay)},__setContent:function(t,e){this._tDom&&(t===this._curTicket&&(this._tDom.innerHTML=e),setTimeout(this._refixed,20))},ontooltipHover:function(t,e){if(!this._lastTipShape||this._lastTipShape&&this._lastTipShape.dataIndex!=t.dataIndex){this._lastTipShape&&this._lastTipShape.tipShape.length>0&&(this.zr.delShape(this._lastTipShape.tipShape),this.shapeList.length=2)
for(var i=0,o=e.length;o>i;i++)e[i].zlevel=this.getZlevelBase(),e[i].z=this.getZBase(),e[i].style=f.prototype.getHighlightStyle(e[i].style,e[i].highlightStyle),e[i].draggable=!1,e[i].hoverable=!1,e[i].clickable=!1,e[i].ondragend=null,e[i].ondragover=null,e[i].ondrop=null,this.shapeList.push(e[i]),this.zr.addShape(e[i])
this._lastTipShape={dataIndex:t.dataIndex,tipShape:e}}},ondragend:function(){this._hide()},onlegendSelected:function(t){this._selectedMap=t.selected},_setSelectedMap:function(){this.component.legend?this._selectedMap=p.clone(this.component.legend.getSelectedMap()):this._selectedMap={}},_isSelected:function(t){return null!=this._selectedMap[t]?this._selectedMap[t]:!0},showTip:function(t){if(t){var e,i=this.option.series
if(null!=t.seriesIndex)e=t.seriesIndex
else for(var o=t.seriesName,n=0,r=i.length;r>n;n++)if(i[n].name===o){e=n
break}var s=i[e]
if(null!=s){var c=this.myChart.chart[s.type],d="axis"===this.deepQuery([s,this.option],"tooltip.trigger")
if(c)if(d){var u=t.dataIndex
switch(c.type){case a.CHART_TYPE_LINE:case a.CHART_TYPE_BAR:case a.CHART_TYPE_K:if(null==this.component.xAxis||null==this.component.yAxis||s.data.length<=u)return
var p=s.xAxisIndex||0,f=s.yAxisIndex||0
this.component.xAxis.getAxis(p).type===a.COMPONENT_TYPE_AXIS_CATEGORY?this._event={zrenderX:this.component.xAxis.getAxis(p).getCoordByIndex(u),zrenderY:this.component.grid.getY()+(this.component.grid.getYend()-this.component.grid.getY())/4}:this._event={zrenderX:this.component.grid.getX()+(this.component.grid.getXend()-this.component.grid.getX())/4,zrenderY:this.component.yAxis.getAxis(f).getCoordByIndex(u)},this._showAxisTrigger(p,f,u)
break
case a.CHART_TYPE_RADAR:if(null==this.component.polar||s.data[0].value.length<=u)return
var g=s.polarIndex||0,m=this.component.polar.getVector(g,u,"max")
this._event={zrenderX:m[0],zrenderY:m[1]},this._showPolarTrigger(g,u)}}else{var _,y,v=c.shapeList
switch(c.type){case a.CHART_TYPE_LINE:case a.CHART_TYPE_BAR:case a.CHART_TYPE_K:case a.CHART_TYPE_SCATTER:for(var u=t.dataIndex,n=0,r=v.length;r>n;n++)if(null==v[n]._mark&&h.get(v[n],"seriesIndex")==e&&h.get(v[n],"dataIndex")==u){this._curTarget=v[n],_=v[n].style.x,y=c.type!=a.CHART_TYPE_K?v[n].style.y:v[n].style.y[0]
break}break
case a.CHART_TYPE_RADAR:for(var u=t.dataIndex,n=0,r=v.length;r>n;n++)if("polygon"===v[n].type&&h.get(v[n],"seriesIndex")==e&&h.get(v[n],"dataIndex")==u){this._curTarget=v[n]
var m=this.component.polar.getCenter(s.polarIndex||0)
_=m[0],y=m[1]
break}break
case a.CHART_TYPE_PIE:for(var x=t.name,n=0,r=v.length;r>n;n++)if("sector"===v[n].type&&h.get(v[n],"seriesIndex")==e&&h.get(v[n],"name")==x){this._curTarget=v[n]
var b=this._curTarget.style,T=(b.startAngle+b.endAngle)/2*Math.PI/180
_=this._curTarget.style.x+Math.cos(T)*b.r/1.5,y=this._curTarget.style.y-Math.sin(T)*b.r/1.5
break}break
case a.CHART_TYPE_MAP:for(var x=t.name,S=s.mapType,n=0,r=v.length;r>n;n++)if("text"===v[n].type&&v[n]._mapType===S&&v[n].style._name===x){this._curTarget=v[n],_=this._curTarget.style.x+this._curTarget.position[0],y=this._curTarget.style.y+this._curTarget.position[1]
break}break
case a.CHART_TYPE_CHORD:for(var x=t.name,n=0,r=v.length;r>n;n++)if("sector"===v[n].type&&h.get(v[n],"name")==x){this._curTarget=v[n]
var b=this._curTarget.style,T=(b.startAngle+b.endAngle)/2*Math.PI/180
return _=this._curTarget.style.x+Math.cos(T)*(b.r-2),y=this._curTarget.style.y-Math.sin(T)*(b.r-2),void this.zr.trigger(l.EVENT.MOUSEMOVE,{zrenderX:_,zrenderY:y})}break
case a.CHART_TYPE_FORCE:for(var x=t.name,n=0,r=v.length;r>n;n++)if("circle"===v[n].type&&h.get(v[n],"name")==x){this._curTarget=v[n],_=this._curTarget.position[0],y=this._curTarget.position[1]
break}}null!=_&&null!=y&&(this._event={zrenderX:_,zrenderY:y},this.zr.addHoverShape(this._curTarget),this.zr.refreshHover(),this._showItemTrigger())}}}},hideTip:function(){this._hide()},refresh:function(t){if(this._zrHeight=this.zr.getHeight(),this._zrWidth=this.zr.getWidth(),this._lastTipShape&&this._lastTipShape.tipShape.length>0&&this.zr.delShape(this._lastTipShape.tipShape),this._lastTipShape=!1,this.shapeList.length=2,this._lastDataIndex=-1,this._lastSeriesIndex=-1,this._lastItemTriggerId=-1,t){this.option=t,this.option.tooltip=this.reformOption(this.option.tooltip),this.option.tooltip.textStyle=p.merge(this.option.tooltip.textStyle,this.ecTheme.textStyle),this._needAxisTrigger=!1,"axis"===this.option.tooltip.trigger&&(this._needAxisTrigger=!0)
for(var e=this.option.series,i=0,o=e.length;o>i;i++)if("axis"===this.query(e[i],"tooltip.trigger")){this._needAxisTrigger=!0
break}this._showDelay=this.option.tooltip.showDelay,this._hideDelay=this.option.tooltip.hideDelay,this._defaultCssText=this._style(this.option.tooltip),this._setSelectedMap(),this._axisLineWidth=this.option.tooltip.axisPointer.lineStyle.width,this._enterable=this.option.tooltip.enterable}if(this.showing){var n=this
setTimeout(function(){n.zr.trigger(l.EVENT.MOUSEMOVE,n.zr.handler._event)},50)}},onbeforDispose:function(){this._lastTipShape&&this._lastTipShape.tipShape.length>0&&this.zr.delShape(this._lastTipShape.tipShape),clearTimeout(this._hidingTicket),clearTimeout(this._showingTicket),this.zr.un(l.EVENT.MOUSEMOVE,this._onmousemove),this.zr.un(l.EVENT.GLOBALOUT,this._onglobalout),this.hasAppend&&this.dom.firstChild&&this.dom.firstChild.removeChild(this._tDom),this._tDom=null},_encodeHTML:function(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}},p.inherits(e,i),t("../component").define("tooltip",e),e}),define("echarts/component/legend",["require","./base","zrender/shape/Text","zrender/shape/Rectangle","zrender/shape/Sector","../util/shape/Icon","../util/shape/Candle","../config","zrender/tool/util","zrender/tool/area","../component"],function(t){function e(t,e,o,n,r){if(!this.query(n,"legend.data"))return void console.error("option.legend.data has not been defined.")
i.call(this,t,e,o,n,r)
var s=this
s._legendSelected=function(t){s.__legendSelected(t)},s._dispatchHoverLink=function(t){return s.__dispatchHoverLink(t)},this._colorIndex=0,this._colorMap={},this._selectedMap={},this._hasDataMap={},this.refresh(n)}var i=t("./base"),o=t("zrender/shape/Text"),n=t("zrender/shape/Rectangle"),r=t("zrender/shape/Sector"),s=t("../util/shape/Icon"),a=t("../util/shape/Candle"),h=t("../config")
h.legend={zlevel:0,z:4,show:!0,orient:"horizontal",x:"center",y:"top",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,itemWidth:20,itemHeight:14,textStyle:{color:"#333"},selectedMode:!0}
var l=t("zrender/tool/util"),c=t("zrender/tool/area")
e.prototype={type:h.COMPONENT_TYPE_LEGEND,_buildShape:function(){if(this.legendOption.show){this._itemGroupLocation=this._getItemGroupLocation(),this._buildBackground(),this._buildItem()
for(var t=0,e=this.shapeList.length;e>t;t++)this.zr.addShape(this.shapeList[t])}},_buildItem:function(){var t,e,i,n,r,a,h,d,u=this.legendOption.data,p=u.length,f=this.legendOption.textStyle,g=this.zr.getWidth(),m=this.zr.getHeight(),_=this._itemGroupLocation.x,y=this._itemGroupLocation.y,v=this.legendOption.itemWidth,x=this.legendOption.itemHeight,b=this.legendOption.itemGap
"vertical"===this.legendOption.orient&&"right"===this.legendOption.x&&(_=this._itemGroupLocation.x+this._itemGroupLocation.width-v)
for(var T=0;p>T;T++)r=l.merge(u[T].textStyle||{},f),a=this.getFont(r),t=this._getName(u[T]),h=this._getFormatterName(t),""!==t?(e=u[T].icon||this._getSomethingByName(t).type,d=this.getColor(t),"horizontal"===this.legendOption.orient?200>g-_&&v+5+c.getTextWidth(h,a)+(T===p-1||""===u[T+1]?0:b)>=g-_&&(_=this._itemGroupLocation.x,y+=x+b):200>m-y&&x+(T===p-1||""===u[T+1]?0:b)>=m-y&&("right"===this.legendOption.x?_-=this._itemGroupLocation.maxWidth+b:_+=this._itemGroupLocation.maxWidth+b,y=this._itemGroupLocation.y),i=this._getItemShapeByType(_,y,v,x,this._selectedMap[t]&&this._hasDataMap[t]?d:"#ccc",e,d),i._name=t,i=new s(i),n={zlevel:this.getZlevelBase(),z:this.getZBase(),style:{x:_+v+5,y:y+x/2,color:this._selectedMap[t]?"auto"===r.color?d:r.color:"#ccc",text:h,textFont:a,textBaseline:"middle"},highlightStyle:{color:d,brushType:"fill"},hoverable:!!this.legendOption.selectedMode,clickable:!!this.legendOption.selectedMode},"vertical"===this.legendOption.orient&&"right"===this.legendOption.x&&(n.style.x-=v+10,n.style.textAlign="right"),n._name=t,n=new o(n),this.legendOption.selectedMode&&(i.onclick=n.onclick=this._legendSelected,i.onmouseover=n.onmouseover=this._dispatchHoverLink,i.hoverConnect=n.id,n.hoverConnect=i.id),this.shapeList.push(i),this.shapeList.push(n),"horizontal"===this.legendOption.orient?_+=v+5+c.getTextWidth(h,a)+b:y+=x+b):"horizontal"===this.legendOption.orient?(_=this._itemGroupLocation.x,y+=x+b):("right"===this.legendOption.x?_-=this._itemGroupLocation.maxWidth+b:_+=this._itemGroupLocation.maxWidth+b,y=this._itemGroupLocation.y)
"horizontal"===this.legendOption.orient&&"center"===this.legendOption.x&&y!=this._itemGroupLocation.y&&this._mLineOptimize()},_getName:function(t){return void 0!==t.name?t.name:t},_getFormatterName:function(t){var e,i=this.legendOption.formatter
return e="function"==typeof i?i.call(this.myChart,t):"string"==typeof i?i.replace("{name}",t):t},_getFormatterNameFromData:function(t){var e=this._getName(t)
return this._getFormatterName(e)},_mLineOptimize:function(){for(var t=[],e=this._itemGroupLocation.x,i=2,o=this.shapeList.length;o>i;i++)this.shapeList[i].style.x===e?t.push((this._itemGroupLocation.width-(this.shapeList[i-1].style.x+c.getTextWidth(this.shapeList[i-1].style.text,this.shapeList[i-1].style.textFont)-e))/2):i===o-1&&t.push((this._itemGroupLocation.width-(this.shapeList[i].style.x+c.getTextWidth(this.shapeList[i].style.text,this.shapeList[i].style.textFont)-e))/2)
for(var n=-1,i=1,o=this.shapeList.length;o>i;i++)this.shapeList[i].style.x===e&&n++,0!==t[n]&&(this.shapeList[i].style.x+=t[n])},_buildBackground:function(){var t=this.reformCssArray(this.legendOption.padding)
this.shapeList.push(new n({zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:this._itemGroupLocation.x-t[3],y:this._itemGroupLocation.y-t[0],width:this._itemGroupLocation.width+t[3]+t[1],height:this._itemGroupLocation.height+t[0]+t[2],brushType:0===this.legendOption.borderWidth?"fill":"both",color:this.legendOption.backgroundColor,strokeColor:this.legendOption.borderColor,lineWidth:this.legendOption.borderWidth}}))},_getItemGroupLocation:function(){var t=this.legendOption.data,e=t.length,i=this.legendOption.itemGap,o=this.legendOption.itemWidth+5,n=this.legendOption.itemHeight,r=this.legendOption.textStyle,s=this.getFont(r),a=0,h=0,d=this.reformCssArray(this.legendOption.padding),u=this.zr.getWidth()-d[1]-d[3],p=this.zr.getHeight()-d[0]-d[2],f=0,g=0
if("horizontal"===this.legendOption.orient){h=n
for(var m=0;e>m;m++)if(""!==this._getName(t[m])){var _=c.getTextWidth(this._getFormatterNameFromData(t[m]),t[m].textStyle?this.getFont(l.merge(t[m].textStyle||{},r)):s)
f+o+_+i>u?(f-=i,a=Math.max(a,f),h+=n+i,f=0):(f+=o+_+i,a=Math.max(a,f-i))}else f-=i,a=Math.max(a,f),h+=n+i,f=0}else{for(var m=0;e>m;m++)g=Math.max(g,c.getTextWidth(this._getFormatterNameFromData(t[m]),t[m].textStyle?this.getFont(l.merge(t[m].textStyle||{},r)):s))
g+=o,a=g
for(var m=0;e>m;m++)""!==this._getName(t[m])?f+n+i>p?(a+=g+i,f-=i,h=Math.max(h,f),f=0):(f+=n+i,h=Math.max(h,f-i)):(a+=g+i,f-=i,h=Math.max(h,f),f=0)}u=this.zr.getWidth(),p=this.zr.getHeight()
var y
switch(this.legendOption.x){case"center":y=Math.floor((u-a)/2)
break
case"left":y=d[3]+this.legendOption.borderWidth
break
case"right":y=u-a-d[1]-d[3]-2*this.legendOption.borderWidth
break
default:y=this.parsePercent(this.legendOption.x,u)}var v
switch(this.legendOption.y){case"top":v=d[0]+this.legendOption.borderWidth
break
case"bottom":v=p-h-d[0]-d[2]-2*this.legendOption.borderWidth
break
case"center":v=Math.floor((p-h)/2)
break
default:v=this.parsePercent(this.legendOption.y,p)}return{x:y,y:v,width:a,height:h,maxWidth:g}},_getSomethingByName:function(t){for(var e,i=this.option.series,o=0,n=i.length;n>o;o++){if(i[o].name===t)return{type:i[o].type,series:i[o],seriesIndex:o,data:null,dataIndex:-1}
if(i[o].type===h.CHART_TYPE_PIE||i[o].type===h.CHART_TYPE_RADAR||i[o].type===h.CHART_TYPE_CHORD||i[o].type===h.CHART_TYPE_FORCE||i[o].type===h.CHART_TYPE_FUNNEL){e=i[o].categories||i[o].data||i[o].nodes
for(var r=0,s=e.length;s>r;r++)if(e[r].name===t)return{type:i[o].type,series:i[o],seriesIndex:o,data:e[r],dataIndex:r}}}return{type:"bar",series:null,seriesIndex:-1,data:null,dataIndex:-1}},_getItemShapeByType:function(t,e,i,o,n,r,s){var a,l="#ccc"===n?s:n,c={zlevel:this.getZlevelBase(),z:this.getZBase(),style:{iconType:"legendicon"+r,x:t,y:e,width:i,height:o,color:n,strokeColor:n,lineWidth:2},highlightStyle:{color:l,strokeColor:l,lineWidth:1},hoverable:this.legendOption.selectedMode,clickable:this.legendOption.selectedMode}
if(r.match("image")){var a=r.replace(RegExp("^image:\\/\\/"),"")
r="image"}switch(r){case"line":c.style.brushType="stroke",c.highlightStyle.lineWidth=3
break
case"radar":case"scatter":c.highlightStyle.lineWidth=3
break
case"k":c.style.brushType="both",c.highlightStyle.lineWidth=3,c.highlightStyle.color=c.style.color=this.deepQuery([this.ecTheme,h],"k.itemStyle.normal.color")||"#fff",c.style.strokeColor="#ccc"!=n?this.deepQuery([this.ecTheme,h],"k.itemStyle.normal.lineStyle.color")||"#ff3200":n
break
case"image":c.style.iconType="image",c.style.image=a,"#ccc"===n&&(c.style.opacity=.5)}return c},__legendSelected:function(t){var e=t.target._name
if("single"===this.legendOption.selectedMode)for(var i in this._selectedMap)this._selectedMap[i]=!1
this._selectedMap[e]=!this._selectedMap[e],this.messageCenter.dispatch(h.EVENT.LEGEND_SELECTED,t.event,{selected:this._selectedMap,target:e},this.myChart)},__dispatchHoverLink:function(t){this.messageCenter.dispatch(h.EVENT.LEGEND_HOVERLINK,t.event,{target:t.target._name},this.myChart)},refresh:function(t){if(t){this.option=t||this.option,this.option.legend=this.reformOption(this.option.legend),this.legendOption=this.option.legend
var e,i,o,n,r=this.legendOption.data||[]
if(this.legendOption.selected)for(var s in this.legendOption.selected)this._selectedMap[s]=void 0!==this._selectedMap[s]?this._selectedMap[s]:this.legendOption.selected[s]
for(var a=0,l=r.length;l>a;a++)e=this._getName(r[a]),""!==e&&(i=this._getSomethingByName(e),i.series?(this._hasDataMap[e]=!0,n=!i.data||i.type!==h.CHART_TYPE_PIE&&i.type!==h.CHART_TYPE_FORCE&&i.type!==h.CHART_TYPE_FUNNEL?[i.series]:[i.data,i.series],o=this.getItemStyleColor(this.deepQuery(n,"itemStyle.normal.color"),i.seriesIndex,i.dataIndex,i.data),o&&i.type!=h.CHART_TYPE_K&&this.setColor(e,o),this._selectedMap[e]=null!=this._selectedMap[e]?this._selectedMap[e]:!0):this._hasDataMap[e]=!1)}this.clear(),this._buildShape()},getRelatedAmount:function(t){for(var e,i=0,o=this.option.series,n=0,r=o.length;r>n;n++)if(o[n].name===t&&i++,o[n].type===h.CHART_TYPE_PIE||o[n].type===h.CHART_TYPE_RADAR||o[n].type===h.CHART_TYPE_CHORD||o[n].type===h.CHART_TYPE_FORCE||o[n].type===h.CHART_TYPE_FUNNEL){e=o[n].type!=h.CHART_TYPE_FORCE?o[n].data:o[n].categories
for(var s=0,a=e.length;a>s;s++)e[s].name===t&&"-"!=e[s].value&&i++}return i},setColor:function(t,e){this._colorMap[t]=e},getColor:function(t){return this._colorMap[t]||(this._colorMap[t]=this.zr.getColor(this._colorIndex++)),this._colorMap[t]},hasColor:function(t){return this._colorMap[t]?this._colorMap[t]:!1},add:function(t,e){for(var i=this.legendOption.data,o=0,n=i.length;n>o;o++)if(this._getName(i[o])===t)return
this.legendOption.data.push(t),this.setColor(t,e),this._selectedMap[t]=!0,this._hasDataMap[t]=!0},del:function(t){for(var e=this.legendOption.data,i=0,o=e.length;o>i;i++)if(this._getName(e[i])===t)return this.legendOption.data.splice(i,1)},getItemShape:function(t){if(null!=t)for(var e,i=0,o=this.shapeList.length;o>i;i++)if(e=this.shapeList[i],e._name===t&&"text"!=e.type)return e},setItemShape:function(t,e){for(var i,o=0,n=this.shapeList.length;n>o;o++)i=this.shapeList[o],i._name===t&&"text"!=i.type&&(this._selectedMap[t]||(e.style.color="#ccc",e.style.strokeColor="#ccc"),this.zr.modShape(i.id,e))},isSelected:function(t){return void 0!==this._selectedMap[t]?this._selectedMap[t]:!0},getSelectedMap:function(){return this._selectedMap},setSelected:function(t,e){if("single"===this.legendOption.selectedMode)for(var i in this._selectedMap)this._selectedMap[i]=!1
this._selectedMap[t]=e,this.messageCenter.dispatch(h.EVENT.LEGEND_SELECTED,null,{selected:this._selectedMap,target:t},this.myChart)},onlegendSelected:function(t,e){var i=t.selected
for(var o in i)this._selectedMap[o]!=i[o]&&(e.needRefresh=!0),this._selectedMap[o]=i[o]}}
var d={line:function(t,e){var i=e.height/2
t.moveTo(e.x,e.y+i),t.lineTo(e.x+e.width,e.y+i)},pie:function(t,e){var i=e.x,o=e.y,n=e.width,s=e.height
r.prototype.buildPath(t,{x:i+n/2,y:o+s+2,r:s,r0:6,startAngle:45,endAngle:135})},eventRiver:function(t,e){var i=e.x,o=e.y,n=e.width,r=e.height
t.moveTo(i,o+r),t.bezierCurveTo(i+n,o+r,i,o+4,i+n,o+4),t.lineTo(i+n,o),t.bezierCurveTo(i,o,i+n,o+r-4,i,o+r-4),t.lineTo(i,o+r)},k:function(t,e){var i=e.x,o=e.y,n=e.width,r=e.height
a.prototype.buildPath(t,{x:i+n/2,y:[o+1,o+1,o+r-6,o+r],width:n-6})},bar:function(t,e){var i=e.x,o=e.y+1,n=e.width,r=e.height-2,s=3
t.moveTo(i+s,o),t.lineTo(i+n-s,o),t.quadraticCurveTo(i+n,o,i+n,o+s),t.lineTo(i+n,o+r-s),t.quadraticCurveTo(i+n,o+r,i+n-s,o+r),t.lineTo(i+s,o+r),t.quadraticCurveTo(i,o+r,i,o+r-s),t.lineTo(i,o+s),t.quadraticCurveTo(i,o,i+s,o)},force:function(t,e){s.prototype.iconLibrary.circle(t,e)},radar:function(t,e){var i=6,o=e.x+e.width/2,n=e.y+e.height/2,r=e.height/2,s=2*Math.PI/i,a=-Math.PI/2,h=o+r*Math.cos(a),l=n+r*Math.sin(a)
t.moveTo(h,l),a+=s
for(var c=0,d=i-1;d>c;c++)t.lineTo(o+r*Math.cos(a),n+r*Math.sin(a)),a+=s
t.lineTo(h,l)}}
d.chord=d.pie,d.map=d.bar
for(var u in d)s.prototype.iconLibrary["legendicon"+u]=d[u]
return l.inherits(e,i),t("../component").define("legend",e),e}),define("echarts/util/ecData",[],function(){function t(t,e,i,o,n,r,s,a){var h
return void 0!==o&&(h=null==o.value?o:o.value),t._echartsData={_series:e,_seriesIndex:i,_data:o,_dataIndex:n,_name:r,_value:h,_special:s,_special2:a},t._echartsData}function e(t,e){var i=t._echartsData
if(!e)return i
switch(e){case"series":case"seriesIndex":case"data":case"dataIndex":case"name":case"value":case"special":case"special2":return i&&i["_"+e]}return null}function i(t,e,i){switch(t._echartsData=t._echartsData||{},e){case"series":case"seriesIndex":case"data":case"dataIndex":case"name":case"value":case"special":case"special2":t._echartsData["_"+e]=i}}function o(t,e){e._echartsData={_series:t._echartsData._series,_seriesIndex:t._echartsData._seriesIndex,_data:t._echartsData._data,_dataIndex:t._echartsData._dataIndex,_name:t._echartsData._name,_value:t._echartsData._value,_special:t._echartsData._special,_special2:t._echartsData._special2}}return{pack:t,set:i,get:e,clone:o}}),define("echarts/chart",[],function(){var t={},e={}
return t.define=function(i,o){return e[i]=o,t},t.get=function(t){return e[t]},t}),define("zrender/tool/color",["require","../tool/util"],function(t){function e(t){W=t}function i(){W=q}function o(t,e){return t=0|t,e=e||W,e[t%e.length]}function n(t){Z=t}function r(){G=Z}function s(){return Z}function a(t,e,i,o,n,r,s){N||(N=Y.getContext())
for(var a=N.createRadialGradient(t,e,i,o,n,r),h=0,l=s.length;l>h;h++)a.addColorStop(s[h][0],s[h][1])
return a.__nonRecursion=!0,a}function h(t,e,i,o,n){N||(N=Y.getContext())
for(var r=N.createLinearGradient(t,e,i,o),s=0,a=n.length;a>s;s++)r.addColorStop(n[s][0],n[s][1])
return r.__nonRecursion=!0,r}function l(t,e,i){t=f(t),e=f(e),t=M(t),e=M(e)
for(var o=[],n=(e[0]-t[0])/i,r=(e[1]-t[1])/i,s=(e[2]-t[2])/i,a=(e[3]-t[3])/i,h=0,l=t[0],c=t[1],u=t[2],p=t[3];i>h;h++)o[h]=d([I(Math.floor(l),[0,255]),I(Math.floor(c),[0,255]),I(Math.floor(u),[0,255]),p.toFixed(4)-0],"rgba"),l+=n,c+=r,u+=s,p+=a
return l=e[0],c=e[1],u=e[2],p=e[3],o[h]=d([l,c,u,p],"rgba"),o}function c(t,e){var i=[],o=t.length
if(void 0===e&&(e=20),1===o)i=l(t[0],t[0],e)
else if(o>1)for(var n=0,r=o-1;r>n;n++){var s=l(t[n],t[n+1],e)
r-1>n&&s.pop(),i=i.concat(s)}return i}function d(t,e){if(e=e||"rgb",t&&(3===t.length||4===t.length)){if(t=O(t,function(t){return t>1?Math.ceil(t):t}),e.indexOf("hex")>-1)return"#"+((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)
if(e.indexOf("hs")>-1){var i=O(t.slice(1,3),function(t){return t+"%"})
t[1]=i[0],t[2]=i[1]}return e.indexOf("a")>-1?(3===t.length&&t.push(1),t[3]=I(t[3],[0,1]),e+"("+t.slice(0,4).join(",")+")"):e+"("+t.slice(0,3).join(",")+")"}}function u(t){t=z(t),t.indexOf("rgba")<0&&(t=f(t))
var e=[],i=0
return t.replace(/[\d.]+/g,function(t){t=3>i?0|t:+t,e[i++]=t}),e}function p(t,e){if(!P(t))return t
var i=M(t),o=i[3]
return void 0===o&&(o=1),t.indexOf("hsb")>-1?i=D(i):t.indexOf("hsl")>-1&&(i=R(i)),e.indexOf("hsb")>-1||e.indexOf("hsv")>-1?i=B(i):e.indexOf("hsl")>-1&&(i=F(i)),i[3]=o,d(i,e)}function f(t){return p(t,"rgba")}function g(t){return p(t,"rgb")}function m(t){return p(t,"hex")}function _(t){return p(t,"hsva")}function y(t){return p(t,"hsv")}function v(t){return p(t,"hsba")}function x(t){return p(t,"hsb")}function b(t){return p(t,"hsla")}function T(t){return p(t,"hsl")}function S(t){for(var e in V)if(m(V[e])===m(t))return e
return null}function z(t){return(t+"").replace(/\s+/g,"")}function C(t){if(V[t]&&(t=V[t]),t=z(t),t=t.replace(/hsv/i,"hsb"),/^#[\da-f]{3}$/i.test(t)){t=parseInt(t.slice(1),16)
var e=(3840&t)<<8,i=(240&t)<<4,o=15&t
t="#"+((1<<24)+(e<<4)+e+(i<<4)+i+(o<<4)+o).toString(16).slice(1)}return t}function w(t,e){if(!P(t))return t
var i=e>0?1:-1
void 0===e&&(e=0),e=Math.abs(e)>1?1:Math.abs(e),t=g(t)
for(var o=M(t),n=0;3>n;n++)1===i?o[n]=o[n]*(1-e)|0:o[n]=(255-o[n])*e+o[n]|0
return"rgb("+o.join(",")+")"}function E(t){if(!P(t))return t
var e=M(f(t))
return e=O(e,function(t){return 255-t}),d(e,"rgb")}function L(t,e,i){if(!P(t)||!P(e))return t
void 0===i&&(i=.5),i=1-I(i,[0,1])
for(var o=2*i-1,n=M(f(t)),r=M(f(e)),s=n[3]-r[3],a=((o*s===-1?o:(o+s)/(1+o*s))+1)/2,h=1-a,l=[],c=0;3>c;c++)l[c]=n[c]*a+r[c]*h
var u=n[3]*i+r[3]*(1-i)
return u=Math.max(0,Math.min(1,u)),1===n[3]&&1===r[3]?d(l,"rgb"):(l[3]=u,d(l,"rgba"))}function A(){return"#"+(Math.random().toString(16)+"0000").slice(2,8)}function M(t){t=C(t)
var e=t.match(X)
if(null===e)throw Error("The color format error")
var i,o,n,r=[]
if(e[2])i=e[2].replace("#","").split(""),n=[i[0]+i[1],i[2]+i[3],i[4]+i[5]],r=O(n,function(t){return I(parseInt(t,16),[0,255])})
else if(e[4]){var s=e[4].split(",")
o=s[3],n=s.slice(0,3),r=O(n,function(t){return t=Math.floor(t.indexOf("%")>0?2.55*parseInt(t,0):t),I(t,[0,255])}),void 0!==o&&r.push(I(parseFloat(o),[0,1]))}else if(e[5]||e[6]){var a=(e[5]||e[6]).split(","),h=parseInt(a[0],0)/360,l=a[1],c=a[2]
o=a[3],r=O([l,c],function(t){return I(parseFloat(t)/100,[0,1])}),r.unshift(h),void 0!==o&&r.push(I(parseFloat(o),[0,1]))}return r}function k(t,e){if(!P(t))return t
null===e&&(e=1)
var i=M(f(t))
return i[3]=I((+e).toFixed(4),[0,1]),d(i,"rgba")}function O(t,e){if("function"!=typeof e)throw new TypeError
for(var i=t?t.length:0,o=0;i>o;o++)t[o]=e(t[o])
return t}function I(t,e){return t<=e[0]?t=e[0]:t>=e[1]&&(t=e[1]),t}function P(t){return t instanceof Array||"string"==typeof t}function D(t){var e,i,o,n=t[0],r=t[1],s=t[2]
if(0===r)e=255*s,i=255*s,o=255*s
else{var a=6*n
6===a&&(a=0)
var h=0|a,l=s*(1-r),c=s*(1-r*(a-h)),d=s*(1-r*(1-(a-h))),u=0,p=0,f=0
0===h?(u=s,p=d,f=l):1===h?(u=c,p=s,f=l):2===h?(u=l,p=s,f=d):3===h?(u=l,p=c,f=s):4===h?(u=d,p=l,f=s):(u=s,p=l,f=c),e=255*u,i=255*p,o=255*f}return[e,i,o]}function R(t){var e,i,o,n=t[0],r=t[1],s=t[2]
if(0===r)e=255*s,i=255*s,o=255*s
else{var a
a=.5>s?s*(1+r):s+r-r*s
var h=2*s-a
e=255*H(h,a,n+1/3),i=255*H(h,a,n),o=255*H(h,a,n-1/3)}return[e,i,o]}function H(t,e,i){return 0>i&&(i+=1),i>1&&(i-=1),1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}function B(t){var e,i,o=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(o,n,r),a=Math.max(o,n,r),h=a-s,l=a
if(0===h)e=0,i=0
else{i=h/a
var c=((a-o)/6+h/2)/h,d=((a-n)/6+h/2)/h,u=((a-r)/6+h/2)/h
o===a?e=u-d:n===a?e=1/3+c-u:r===a&&(e=2/3+d-c),0>e&&(e+=1),e>1&&(e-=1)}return e=360*e,i=100*i,l=100*l,[e,i,l]}function F(t){var e,i,o=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(o,n,r),a=Math.max(o,n,r),h=a-s,l=(a+s)/2
if(0===h)e=0,i=0
else{i=.5>l?h/(a+s):h/(2-a-s)
var c=((a-o)/6+h/2)/h,d=((a-n)/6+h/2)/h,u=((a-r)/6+h/2)/h
o===a?e=u-d:n===a?e=1/3+c-u:r===a&&(e=2/3+d-c),0>e&&(e+=1),e>1&&(e-=1)}return e=360*e,i=100*i,l=100*l,[e,i,l]}var N,Y=t("../tool/util"),W=["#ff9277"," #dddd00"," #ffc877"," #bbe3ff"," #d5ffbb","#bbbbff"," #ddb000"," #b0dd00"," #e2bbff"," #ffbbe3","#ff7777"," #ff9900"," #83dd00"," #77e3ff"," #778fff","#c877ff"," #ff77ab"," #ff6600"," #aa8800"," #77c7ff","#ad77ff"," #ff77ff"," #dd0083"," #777700"," #00aa00","#0088aa"," #8400dd"," #aa0088"," #dd0000"," #772e00"],q=W,Z="rgba(255,255,0,0.5)",G=Z,X=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,V={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#0ff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000",blanchedalmond:"#ffebcd",blue:"#00f",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#f0f",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#0f0",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#f0f",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#f00",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#fff",whitesmoke:"#f5f5f5",yellow:"#ff0",yellowgreen:"#9acd32"}
return{customPalette:e,resetPalette:i,getColor:o,getHighlightColor:s,customHighlight:n,resetHighlight:r,getRadialGradient:a,getLinearGradient:h,getGradientColors:c,getStepColors:l,reverse:E,mix:L,lift:w,trim:z,random:A,toRGB:g,toRGBA:f,toHex:m,toHSL:T,toHSLA:b,toHSB:x,toHSBA:v,toHSV:y,toHSVA:_,toName:S,toColor:d,toArray:u,alpha:k,getData:M}}),define("echarts/component/timeline",["require","./base","zrender/shape/Rectangle","../util/shape/Icon","../util/shape/Chain","../config","zrender/tool/util","zrender/tool/area","zrender/tool/event","../component"],function(t){function e(t,e,i,n,r){o.call(this,t,e,i,n,r)
var s=this
if(s._onclick=function(t){return s.__onclick(t)},s._ondrift=function(t,e){return s.__ondrift(this,t,e)},s._ondragend=function(){return s.__ondragend()},s._setCurrentOption=function(){var t=s.timelineOption
s.currentIndex%=t.data.length
var e=s.options[s.currentIndex]||{}
s.myChart.setOption(e,t.notMerge),s.messageCenter.dispatch(a.EVENT.TIMELINE_CHANGED,null,{currentIndex:s.currentIndex,data:null!=t.data[s.currentIndex].name?t.data[s.currentIndex].name:t.data[s.currentIndex]},s.myChart)},s._onFrame=function(){s._setCurrentOption(),s._syncHandleShape(),s.timelineOption.autoPlay&&(s.playTicket=setTimeout(function(){return s.currentIndex+=1,!s.timelineOption.loop&&s.currentIndex>=s.timelineOption.data.length?(s.currentIndex=s.timelineOption.data.length-1,void s.stop()):void s._onFrame()},s.timelineOption.playInterval))},this.setTheme(!1),this.options=this.option.options,this.currentIndex=this.timelineOption.currentIndex%this.timelineOption.data.length,this.timelineOption.notMerge||0===this.currentIndex||(this.options[this.currentIndex]=h.merge(this.options[this.currentIndex],this.options[0])),this.timelineOption.show&&(this._buildShape(),this._syncHandleShape()),this._setCurrentOption(),this.timelineOption.autoPlay){var s=this
this.playTicket=setTimeout(function(){s.play()},null!=this.ecTheme.animationDuration?this.ecTheme.animationDuration:a.animationDuration)}}function i(t,e){var i=2,o=e.x+i,n=e.y+i+2,s=e.width-i,a=e.height-i,h=e.symbol
if("last"===h)t.moveTo(o+s-2,n+a/3),t.lineTo(o+s-2,n),t.lineTo(o+2,n+a/2),t.lineTo(o+s-2,n+a),t.lineTo(o+s-2,n+a/3*2),t.moveTo(o,n),t.lineTo(o,n)
else if("next"===h)t.moveTo(o+2,n+a/3),t.lineTo(o+2,n),t.lineTo(o+s-2,n+a/2),t.lineTo(o+2,n+a),t.lineTo(o+2,n+a/3*2),t.moveTo(o,n),t.lineTo(o,n)
else if("play"===h)if("stop"===e.status)t.moveTo(o+2,n),t.lineTo(o+s-2,n+a/2),t.lineTo(o+2,n+a),t.lineTo(o+2,n)
else{var l="both"===e.brushType?2:3
t.rect(o+2,n,l,a),t.rect(o+s-l-2,n,l,a)}else if(h.match("image")){var c=""
c=h.replace(RegExp("^image:\\/\\/"),""),h=r.prototype.iconLibrary.image,h(t,{x:o,y:n,width:s,height:a,image:c})}}var o=t("./base"),n=t("zrender/shape/Rectangle"),r=t("../util/shape/Icon"),s=t("../util/shape/Chain"),a=t("../config")
a.timeline={zlevel:0,z:4,show:!0,type:"time",notMerge:!1,realtime:!0,x:80,x2:80,y2:0,height:50,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,controlPosition:"left",autoPlay:!1,loop:!0,playInterval:2e3,lineStyle:{width:1,color:"#666",type:"dashed"},label:{show:!0,interval:"auto",rotate:0,textStyle:{color:"#333"}},checkpointStyle:{symbol:"auto",symbolSize:"auto",color:"auto",borderColor:"auto",borderWidth:"auto",label:{show:!1,textStyle:{color:"auto"}}},controlStyle:{itemSize:15,itemGap:5,normal:{color:"#333"},emphasis:{color:"#1e90ff"}},symbol:"emptyDiamond",symbolSize:4,currentIndex:0}
var h=t("zrender/tool/util"),l=t("zrender/tool/area"),c=t("zrender/tool/event")
return e.prototype={type:a.COMPONENT_TYPE_TIMELINE,_buildShape:function(){if(this._location=this._getLocation(),this._buildBackground(),this._buildControl(),this._chainPoint=this._getChainPoint(),this.timelineOption.label.show)for(var t=this._getInterval(),e=0,i=this._chainPoint.length;i>e;e+=t)this._chainPoint[e].showLabel=!0
this._buildChain(),this._buildHandle()
for(var e=0,o=this.shapeList.length;o>e;e++)this.zr.addShape(this.shapeList[e])},_getLocation:function(){var t,e=this.timelineOption,i=this.reformCssArray(this.timelineOption.padding),o=this.zr.getWidth(),n=this.parsePercent(e.x,o),r=this.parsePercent(e.x2,o)
null==e.width?(t=o-n-r,r=o-r):(t=this.parsePercent(e.width,o),r=n+t)
var s,a,h=this.zr.getHeight(),l=this.parsePercent(e.height,h)
return null!=e.y?(s=this.parsePercent(e.y,h),a=s+l):(a=h-this.parsePercent(e.y2,h),s=a-l),{x:n+i[3],y:s+i[0],x2:r-i[1],y2:a-i[2],width:t-i[1]-i[3],height:l-i[0]-i[2]}},_getReformedLabel:function(t){var e=this.timelineOption,i=null!=e.data[t].name?e.data[t].name:e.data[t],o=e.data[t].formatter||e.label.formatter
return o&&("function"==typeof o?i=o.call(this.myChart,i):"string"==typeof o&&(i=o.replace("{value}",i))),i},_getInterval:function(){var t=this._chainPoint,e=this.timelineOption,i=e.label.interval
if("auto"===i){var o=e.label.textStyle.fontSize,n=e.data,r=e.data.length
if(r>3){var s,a,h=!1
for(i=0;!h&&r>i;){i++,h=!0
for(var c=i;r>c;c+=i){if(s=t[c].x-t[c-i].x,0!==e.label.rotate)a=o
else if(n[c].textStyle)a=l.getTextWidth(t[c].name,t[c].textFont)
else{var d=t[c].name+"",u=(d.match(/\w/g)||"").length,p=d.length-u
a=u*o*2/3+p*o}if(a>s){h=!1
break}}}}else i=1}else i=i-0+1
return i},_getChainPoint:function(){function t(t){return null!=l[t].name?l[t].name:l[t]+""}var e,i=this.timelineOption,o=i.symbol.toLowerCase(),n=i.symbolSize,r=i.label.rotate,s=i.label.textStyle,a=this.getFont(s),l=i.data,c=this._location.x,d=this._location.y+this._location.height/4*3,u=this._location.x2-this._location.x,p=l.length,f=[]
if(p>1){var g=u/p
if(g=g>50?50:20>g?5:g,u-=2*g,"number"===i.type)for(var m=0;p>m;m++)f.push(c+g+u/(p-1)*m)
else{f[0]=new Date(t(0).replace(/-/g,"/")),f[p-1]=new Date(t(p-1).replace(/-/g,"/"))-f[0]
for(var m=1;p>m;m++)f[m]=c+g+u*(new Date(t(m).replace(/-/g,"/"))-f[0])/f[p-1]
f[0]=c+g}}else f.push(c+u/2)
for(var _,y,v,x,b,T=[],m=0;p>m;m++)c=f[m],_=l[m].symbol&&l[m].symbol.toLowerCase()||o,_.match("empty")?(_=_.replace("empty",""),v=!0):v=!1,_.match("star")&&(y=_.replace("star","")-0||5,_="star"),e=l[m].textStyle?h.merge(l[m].textStyle||{},s):s,x=e.align||"center",r?(x=r>0?"right":"left",b=[r*Math.PI/180,c,d-5]):b=!1,T.push({x:c,n:y,isEmpty:v,symbol:_,symbolSize:l[m].symbolSize||n,color:l[m].color,borderColor:l[m].borderColor,borderWidth:l[m].borderWidth,name:this._getReformedLabel(m),textColor:e.color,textAlign:x,textBaseline:e.baseline||"middle",textX:c,textY:d-(r?5:0),textFont:l[m].textStyle?this.getFont(e):a,rotation:b,showLabel:!1})
return T},_buildBackground:function(){var t=this.timelineOption,e=this.reformCssArray(this.timelineOption.padding),i=this._location.width,o=this._location.height;(0!==t.borderWidth||"rgba(0,0,0,0)"!=t.backgroundColor.replace(/\s/g,""))&&this.shapeList.push(new n({zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:this._location.x-e[3],y:this._location.y-e[0],width:i+e[1]+e[3],height:o+e[0]+e[2],brushType:0===t.borderWidth?"fill":"both",color:t.backgroundColor,strokeColor:t.borderColor,lineWidth:t.borderWidth}}))},_buildControl:function(){var t=this,e=this.timelineOption,i=e.lineStyle,o=e.controlStyle
if("none"!==e.controlPosition){var n,s=o.itemSize,a=o.itemGap
"left"===e.controlPosition?(n=this._location.x,this._location.x+=3*(s+a)):(n=this._location.x2-(3*(s+a)-a),this._location.x2-=3*(s+a))
var l=this._location.y,c={zlevel:this.getZlevelBase(),z:this.getZBase()+1,style:{iconType:"timelineControl",symbol:"last",x:n,y:l,width:s,height:s,brushType:"stroke",color:o.normal.color,strokeColor:o.normal.color,lineWidth:i.width},highlightStyle:{color:o.emphasis.color,strokeColor:o.emphasis.color,lineWidth:i.width+1},clickable:!0}
this._ctrLastShape=new r(c),this._ctrLastShape.onclick=function(){t.last()},this.shapeList.push(this._ctrLastShape),n+=s+a,this._ctrPlayShape=new r(h.clone(c)),this._ctrPlayShape.style.brushType="fill",this._ctrPlayShape.style.symbol="play",this._ctrPlayShape.style.status=this.timelineOption.autoPlay?"playing":"stop",this._ctrPlayShape.style.x=n,this._ctrPlayShape.onclick=function(){"stop"===t._ctrPlayShape.style.status?t.play():t.stop()},this.shapeList.push(this._ctrPlayShape),n+=s+a,this._ctrNextShape=new r(h.clone(c)),this._ctrNextShape.style.symbol="next",this._ctrNextShape.style.x=n,this._ctrNextShape.onclick=function(){t.next()},this.shapeList.push(this._ctrNextShape)}},_buildChain:function(){var t=this.timelineOption,e=t.lineStyle
this._timelineShae={zlevel:this.getZlevelBase(),z:this.getZBase(),style:{x:this._location.x,y:this.subPixelOptimize(this._location.y,e.width),width:this._location.x2-this._location.x,height:this._location.height,chainPoint:this._chainPoint,brushType:"both",strokeColor:e.color,lineWidth:e.width,lineType:e.type},hoverable:!1,clickable:!0,onclick:this._onclick},this._timelineShae=new s(this._timelineShae),this.shapeList.push(this._timelineShae)},_buildHandle:function(){var t=this._chainPoint[this.currentIndex],e=t.symbolSize+1
e=5>e?5:e,this._handleShape={zlevel:this.getZlevelBase(),z:this.getZBase()+1,hoverable:!1,draggable:!0,style:{iconType:"diamond",n:t.n,x:t.x-e,y:this._location.y+this._location.height/4-e,width:2*e,height:2*e,brushType:"both",textPosition:"specific",textX:t.x,textY:this._location.y-this._location.height/4,textAlign:"center",textBaseline:"middle"},highlightStyle:{},ondrift:this._ondrift,ondragend:this._ondragend},this._handleShape=new r(this._handleShape),this.shapeList.push(this._handleShape)},_syncHandleShape:function(){if(this.timelineOption.show){var t=this.timelineOption,e=t.checkpointStyle,i=this._chainPoint[this.currentIndex]
this._handleShape.style.text=e.label.show?i.name:"",this._handleShape.style.textFont=i.textFont,this._handleShape.style.n=i.n,"auto"===e.symbol?this._handleShape.style.iconType="none"!=i.symbol?i.symbol:"diamond":(this._handleShape.style.iconType=e.symbol,e.symbol.match("star")&&(this._handleShape.style.n=e.symbol.replace("star","")-0||5,this._handleShape.style.iconType="star"))
var o
"auto"===e.symbolSize?(o=i.symbolSize+2,o=5>o?5:o):o=e.symbolSize-0,this._handleShape.style.color="auto"===e.color?i.color?i.color:t.controlStyle.emphasis.color:e.color,this._handleShape.style.textColor="auto"===e.label.textStyle.color?this._handleShape.style.color:e.label.textStyle.color,this._handleShape.highlightStyle.strokeColor=this._handleShape.style.strokeColor="auto"===e.borderColor?i.borderColor?i.borderColor:"#fff":e.borderColor,this._handleShape.style.lineWidth="auto"===e.borderWidth?i.borderWidth?i.borderWidth:0:e.borderWidth-0,this._handleShape.highlightStyle.lineWidth=this._handleShape.style.lineWidth+1,this.zr.animate(this._handleShape.id,"style").when(500,{x:i.x-o,textX:i.x,y:this._location.y+this._location.height/4-o,width:2*o,height:2*o}).start("ExponentialOut")}},_findChainIndex:function(t){var e=this._chainPoint,i=e.length
if(t<=e[0].x)return 0
if(t>=e[i-1].x)return i-1
for(var o=0;i-1>o;o++)if(t>=e[o].x&&t<=e[o+1].x)return Math.abs(t-e[o].x)<Math.abs(t-e[o+1].x)?o:o+1},__onclick:function(t){var e=c.getX(t.event),i=this._findChainIndex(e)
return i===this.currentIndex?!0:(this.currentIndex=i,this.timelineOption.autoPlay&&this.stop(),clearTimeout(this.playTicket),void this._onFrame())},__ondrift:function(t,e){this.timelineOption.autoPlay&&this.stop()
var i,o=this._chainPoint,n=o.length
t.style.x+e<=o[0].x-o[0].symbolSize?(t.style.x=o[0].x-o[0].symbolSize,i=0):t.style.x+e>=o[n-1].x-o[n-1].symbolSize?(t.style.x=o[n-1].x-o[n-1].symbolSize,i=n-1):(t.style.x+=e,i=this._findChainIndex(t.style.x))
var r=o[i],s=r.symbolSize+2
if(t.style.iconType=r.symbol,t.style.n=r.n,t.style.textX=t.style.x+s/2,t.style.y=this._location.y+this._location.height/4-s,t.style.width=2*s,t.style.height=2*s,t.style.text=r.name,i===this.currentIndex)return!0
if(this.currentIndex=i,this.timelineOption.realtime){clearTimeout(this.playTicket)
var a=this
this.playTicket=setTimeout(function(){a._setCurrentOption()},200)}return!0},__ondragend:function(){this.isDragend=!0},ondragend:function(t,e){this.isDragend&&t.target&&(!this.timelineOption.realtime&&this._setCurrentOption(),e.dragOut=!0,e.dragIn=!0,e.needRefresh=!1,this.isDragend=!1,this._syncHandleShape())},last:function(){return this.timelineOption.autoPlay&&this.stop(),this.currentIndex-=1,this.currentIndex<0&&(this.currentIndex=this.timelineOption.data.length-1),this._onFrame(),this.currentIndex},next:function(){return this.timelineOption.autoPlay&&this.stop(),this.currentIndex+=1,this.currentIndex>=this.timelineOption.data.length&&(this.currentIndex=0),this._onFrame(),this.currentIndex},play:function(t,e){return this._ctrPlayShape&&"playing"!=this._ctrPlayShape.style.status&&(this._ctrPlayShape.style.status="playing",this.zr.modShape(this._ctrPlayShape.id),this.zr.refreshNextFrame()),this.timelineOption.autoPlay=null!=e?e:!0,this.timelineOption.autoPlay||clearTimeout(this.playTicket),this.currentIndex=null!=t?t:this.currentIndex+1,this.currentIndex>=this.timelineOption.data.length&&(this.currentIndex=0),this._onFrame(),this.currentIndex},stop:function(){return this._ctrPlayShape&&"stop"!=this._ctrPlayShape.style.status&&(this._ctrPlayShape.style.status="stop",this.zr.modShape(this._ctrPlayShape.id),this.zr.refreshNextFrame()),this.timelineOption.autoPlay=!1,clearTimeout(this.playTicket),this.currentIndex},resize:function(){this.timelineOption.show&&(this.clear(),this._buildShape(),this._syncHandleShape())},setTheme:function(t){this.timelineOption=this.reformOption(h.clone(this.option.timeline)),this.timelineOption.label.textStyle=this.getTextStyle(this.timelineOption.label.textStyle),this.timelineOption.checkpointStyle.label.textStyle=this.getTextStyle(this.timelineOption.checkpointStyle.label.textStyle),this.myChart.canvasSupported||(this.timelineOption.realtime=!1),this.timelineOption.show&&t&&(this.clear(),this._buildShape(),this._syncHandleShape())},onbeforDispose:function(){clearTimeout(this.playTicket)}},r.prototype.iconLibrary.timelineControl=i,h.inherits(e,o),t("../component").define("timeline",e),e}),define("zrender/shape/Image",["require","./Base","../tool/util"],function(t){var e=t("./Base"),i=function(t){e.call(this,t)}
return i.prototype={type:"image",brush:function(t,e,i){var o=this.style||{}
e&&(o=this.getHighlightStyle(o,this.highlightStyle||{}))
var n=o.image,r=this
if(this._imageCache||(this._imageCache={}),"string"==typeof n){var s=n
this._imageCache[s]?n=this._imageCache[s]:(n=new Image,n.onload=function(){n.onload=null,r.modSelf(),i()},n.src=s,this._imageCache[s]=n)}if(n){if("IMG"==n.nodeName.toUpperCase())if(window.ActiveXObject){if("complete"!=n.readyState)return}else if(!n.complete)return
var a=o.width||n.width,h=o.height||n.height,l=o.x,c=o.y
if(!n.width||!n.height)return
if(t.save(),this.doClip(t),this.setContext(t,o),this.setTransform(t),o.sWidth&&o.sHeight){var d=o.sx||0,u=o.sy||0
t.drawImage(n,d,u,o.sWidth,o.sHeight,l,c,a,h)}else if(o.sx&&o.sy){var d=o.sx,u=o.sy,p=a-d,f=h-u
t.drawImage(n,d,u,p,f,l,c,a,h)}else t.drawImage(n,l,c,a,h)
o.width||(o.width=a),o.height||(o.height=h),this.style.width||(this.style.width=a),this.style.height||(this.style.height=h),this.drawText(t,o,this.style),t.restore()}},getRect:function(t){return{x:t.x,y:t.y,width:t.width,height:t.height}},clearCache:function(){this._imageCache={}}},t("../tool/util").inherits(i,e),i}),define("zrender/loadingEffect/Bar",["require","./Base","../tool/util","../tool/color","../shape/Rectangle"],function(t){function e(t){i.call(this,t)}var i=t("./Base"),o=t("../tool/util"),n=t("../tool/color"),r=t("../shape/Rectangle")
return o.inherits(e,i),e.prototype._start=function(t,e){var i=o.merge(this.options,{textStyle:{color:"#888"},backgroundColor:"rgba(250, 250, 250, 0.8)",effectOption:{x:0,y:this.canvasHeight/2-30,width:this.canvasWidth,height:5,brushType:"fill",timeInterval:100}}),s=this.createTextShape(i.textStyle),a=this.createBackgroundShape(i.backgroundColor),h=i.effectOption,l=new r({highlightStyle:o.clone(h)})
return l.highlightStyle.color=h.color||n.getLinearGradient(h.x,h.y,h.x+h.width,h.y+h.height,[[0,"#ff6400"],[.5,"#ffe100"],[1,"#b1ff00"]]),null!=i.progress?(t(a),l.highlightStyle.width=this.adjust(i.progress,[0,1])*i.effectOption.width,t(l),t(s),void e()):(l.highlightStyle.width=0,setInterval(function(){t(a),l.highlightStyle.width<h.width?l.highlightStyle.width+=8:l.highlightStyle.width=0,t(l),t(s),e()},h.timeInterval))},e}),define("zrender/loadingEffect/Bubble",["require","./Base","../tool/util","../tool/color","../shape/Circle"],function(t){function e(t){i.call(this,t)}var i=t("./Base"),o=t("../tool/util"),n=t("../tool/color"),r=t("../shape/Circle")
return o.inherits(e,i),e.prototype._start=function(t,e){for(var i=o.merge(this.options,{textStyle:{color:"#888"},backgroundColor:"rgba(250, 250, 250, 0.8)",effect:{n:50,lineWidth:2,brushType:"stroke",color:"random",timeInterval:100}}),s=this.createTextShape(i.textStyle),a=this.createBackgroundShape(i.backgroundColor),h=i.effect,l=h.n,c=h.brushType,d=h.lineWidth,u=[],p=this.canvasWidth,f=this.canvasHeight,g=0;l>g;g++){var m="random"==h.color?n.alpha(n.random(),.3):h.color
u[g]=new r({highlightStyle:{x:Math.ceil(Math.random()*p),y:Math.ceil(Math.random()*f),r:Math.ceil(40*Math.random()),brushType:c,color:m,strokeColor:m,lineWidth:d},animationY:Math.ceil(20*Math.random())})}return setInterval(function(){t(a)
for(var i=0;l>i;i++){var o=u[i].highlightStyle
o.y-u[i].animationY+o.r<=0&&(u[i].highlightStyle.y=f+o.r,u[i].highlightStyle.x=Math.ceil(Math.random()*p)),u[i].highlightStyle.y-=u[i].animationY,t(u[i])}t(s),e()},h.timeInterval)},e}),define("zrender/loadingEffect/DynamicLine",["require","./Base","../tool/util","../tool/color","../shape/Line"],function(t){function e(t){i.call(this,t)}var i=t("./Base"),o=t("../tool/util"),n=t("../tool/color"),r=t("../shape/Line")
return o.inherits(e,i),e.prototype._start=function(t,e){for(var i=o.merge(this.options,{textStyle:{color:"#fff"},backgroundColor:"rgba(0, 0, 0, 0.8)",effectOption:{n:30,lineWidth:1,color:"random",timeInterval:100}}),s=this.createTextShape(i.textStyle),a=this.createBackgroundShape(i.backgroundColor),h=i.effectOption,l=h.n,c=h.lineWidth,d=[],u=this.canvasWidth,p=this.canvasHeight,f=0;l>f;f++){var g=-Math.ceil(1e3*Math.random()),m=Math.ceil(400*Math.random()),_=Math.ceil(Math.random()*p),y="random"==h.color?n.random():h.color
d[f]=new r({highlightStyle:{xStart:g,yStart:_,xEnd:g+m,yEnd:_,strokeColor:y,lineWidth:c},animationX:Math.ceil(100*Math.random()),len:m})}return setInterval(function(){t(a)
for(var i=0;l>i;i++){var o=d[i].highlightStyle
o.xStart>=u&&(d[i].len=Math.ceil(400*Math.random()),o.xStart=-400,o.xEnd=-400+d[i].len,o.yStart=Math.ceil(Math.random()*p),o.yEnd=o.yStart),o.xStart+=d[i].animationX,o.xEnd+=d[i].animationX,t(d[i])}t(s),e()},h.timeInterval)},e}),define("zrender/loadingEffect/Ring",["require","./Base","../tool/util","../tool/color","../shape/Ring","../shape/Sector"],function(t){function e(t){i.call(this,t)}var i=t("./Base"),o=t("../tool/util"),n=t("../tool/color"),r=t("../shape/Ring"),s=t("../shape/Sector")
return o.inherits(e,i),e.prototype._start=function(t,e){var i=o.merge(this.options,{textStyle:{color:"#07a"},backgroundColor:"rgba(250, 250, 250, 0.8)",effect:{x:this.canvasWidth/2,y:this.canvasHeight/2,r0:60,r:100,color:"#bbdcff",brushType:"fill",textPosition:"inside",textFont:"normal 30px verdana",textColor:"rgba(30, 144, 255, 0.6)",timeInterval:100}}),a=i.effect,h=i.textStyle
null==h.x&&(h.x=a.x),null==h.y&&(h.y=a.y+(a.r0+a.r)/2-5)
for(var l=this.createTextShape(i.textStyle),c=this.createBackgroundShape(i.backgroundColor),d=a.x,u=a.y,p=a.r0+6,f=a.r-6,g=a.color,m=n.lift(g,.1),_=new r({highlightStyle:o.clone(a)}),y=[],v=n.getGradientColors(["#ff6400","#ffe100","#97ff00"],25),x=15,b=240,T=0;16>T;T++)y.push(new s({highlightStyle:{x:d,y:u,r0:p,r:f,startAngle:b-x,endAngle:b,brushType:"fill",color:m},_color:n.getLinearGradient(d+p*Math.cos(b,!0),u-p*Math.sin(b,!0),d+p*Math.cos(b-x,!0),u-p*Math.sin(b-x,!0),[[0,v[2*T]],[1,v[2*T+1]]])})),b-=x
b=360
for(var T=0;4>T;T++)y.push(new s({highlightStyle:{x:d,y:u,r0:p,r:f,startAngle:b-x,endAngle:b,brushType:"fill",color:m},_color:n.getLinearGradient(d+p*Math.cos(b,!0),u-p*Math.sin(b,!0),d+p*Math.cos(b-x,!0),u-p*Math.sin(b-x,!0),[[0,v[2*T+32]],[1,v[2*T+33]]])})),b-=x
var S=0
if(null!=i.progress){t(c),S=100*this.adjust(i.progress,[0,1]).toFixed(2)/5,_.highlightStyle.text=5*S+"%",t(_)
for(var T=0;20>T;T++)y[T].highlightStyle.color=S>T?y[T]._color:m,t(y[T])
return t(l),void e()}return setInterval(function(){t(c),S+=S>=20?-20:1,t(_)
for(var i=0;20>i;i++)y[i].highlightStyle.color=S>i?y[i]._color:m,t(y[i])
t(l),e()},a.timeInterval)},e}),define("zrender/loadingEffect/Spin",["require","./Base","../tool/util","../tool/color","../tool/area","../shape/Sector"],function(t){function e(t){i.call(this,t)}var i=t("./Base"),o=t("../tool/util"),n=t("../tool/color"),r=t("../tool/area"),s=t("../shape/Sector")
return o.inherits(e,i),e.prototype._start=function(t,e){var i=o.merge(this.options,{textStyle:{color:"#fff",textAlign:"start"},backgroundColor:"rgba(0, 0, 0, 0.8)"}),a=this.createTextShape(i.textStyle),h=10,l=r.getTextWidth(a.highlightStyle.text,a.highlightStyle.textFont),c=r.getTextHeight(a.highlightStyle.text,a.highlightStyle.textFont),d=o.merge(this.options.effect||{},{r0:9,r:15,n:18,color:"#fff",timeInterval:100}),u=this.getLocation(this.options.textStyle,l+h+2*d.r,Math.max(2*d.r,c))
d.x=u.x+d.r,d.y=a.highlightStyle.y=u.y+u.height/2,a.highlightStyle.x=d.x+d.r+h
for(var p=this.createBackgroundShape(i.backgroundColor),f=d.n,g=d.x,m=d.y,_=d.r0,y=d.r,v=d.color,x=[],b=Math.round(180/f),T=0;f>T;T++)x[T]=new s({highlightStyle:{x:g,y:m,r0:_,r:y,startAngle:b*T*2,endAngle:b*T*2+b,color:n.alpha(v,(T+1)/f),brushType:"fill"}})
var S=[0,g,m]
return setInterval(function(){t(p),S[0]-=.3
for(var i=0;f>i;i++)x[i].rotation=S,t(x[i])
t(a),e()},d.timeInterval)},e}),define("zrender/loadingEffect/Whirling",["require","./Base","../tool/util","../tool/area","../shape/Ring","../shape/Droplet","../shape/Circle"],function(t){function e(t){i.call(this,t)}var i=t("./Base"),o=t("../tool/util"),n=t("../tool/area"),r=t("../shape/Ring"),s=t("../shape/Droplet"),a=t("../shape/Circle")
return o.inherits(e,i),e.prototype._start=function(t,e){var i=o.merge(this.options,{textStyle:{color:"#888",textAlign:"start"},backgroundColor:"rgba(250, 250, 250, 0.8)"}),h=this.createTextShape(i.textStyle),l=10,c=n.getTextWidth(h.highlightStyle.text,h.highlightStyle.textFont),d=n.getTextHeight(h.highlightStyle.text,h.highlightStyle.textFont),u=o.merge(this.options.effect||{},{r:18,colorIn:"#fff",colorOut:"#555",colorWhirl:"#6cf",timeInterval:50}),p=this.getLocation(this.options.textStyle,c+l+2*u.r,Math.max(2*u.r,d))
u.x=p.x+u.r,u.y=h.highlightStyle.y=p.y+p.height/2,h.highlightStyle.x=u.x+u.r+l
var f=this.createBackgroundShape(i.backgroundColor),g=new s({highlightStyle:{a:Math.round(u.r/2),b:Math.round(u.r-u.r/6),brushType:"fill",color:u.colorWhirl}}),m=new a({highlightStyle:{r:Math.round(u.r/6),brushType:"fill",color:u.colorIn}}),_=new r({highlightStyle:{r0:Math.round(u.r-u.r/3),r:u.r,brushType:"fill",color:u.colorOut}}),y=[0,u.x,u.y]
return g.highlightStyle.x=m.highlightStyle.x=_.highlightStyle.x=y[1],g.highlightStyle.y=m.highlightStyle.y=_.highlightStyle.y=y[2],setInterval(function(){t(f),t(_),y[0]-=.3,g.rotation=y,t(g),t(m),t(h),e()},u.timeInterval)},e}),define("echarts/theme/macarons",[],function(){var t={color:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],title:{textStyle:{fontWeight:"normal",color:"#008acd"}},dataRange:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{color:["#1e90ff","#1e90ff","#1e90ff","#1e90ff"],effectiveColor:"#ff4500"},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},polar:{axisLine:{lineStyle:{color:"#ddd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(200,200,200,0.2)"]}},splitLine:{lineStyle:{color:"#ddd"}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},bar:{itemStyle:{normal:{barBorderRadius:5},emphasis:{barBorderRadius:5}}},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},k:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},radar:{symbol:"emptyCircle",symbolSize:3},map:{itemStyle:{normal:{areaStyle:{color:"#ddd"},label:{textStyle:{color:"#d87a80"}}},emphasis:{areaStyle:{color:"#fe994e"}}}},force:{itemStyle:{normal:{linkStyle:{color:"#1e90ff"}}}},chord:{itemStyle:{normal:{borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)",chordStyle:{lineStyle:{color:"rgba(128, 128, 128, 0.5)"}}},emphasis:{borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)",chordStyle:{lineStyle:{color:"rgba(128, 128, 128, 0.5)"}}}}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}},textStyle:{fontFamily:"微软雅黑, Arial, Verdana, sans-serif"}}
return t}),define("echarts/theme/infographic",[],function(){var t={color:["#C1232B","#B5C334","#FCCE10","#E87C25","#27727B","#FE8463","#9BCA63","#FAD860","#F3A43B","#60C0DD","#D7504B","#C6E579","#F4E001","#F0805A","#26C0C0"],title:{textStyle:{fontWeight:"normal",color:"#27727B"}},dataRange:{x:"right",y:"center",itemWidth:5,itemHeight:25,color:["#C1232B","#FCCE10"]},toolbox:{color:["#C1232B","#B5C334","#FCCE10","#E87C25","#27727B","#FE8463","#9BCA63","#FAD860","#F3A43B","#60C0DD"],effectiveColor:"#ff4500"},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#27727B",type:"dashed"},crossStyle:{color:"#27727B"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"rgba(181,195,52,0.3)",fillerColor:"rgba(181,195,52,0.2)",handleColor:"#27727B"},grid:{borderWidth:0},categoryAxis:{axisLine:{lineStyle:{color:"#27727B"}},splitLine:{show:!1}},valueAxis:{axisLine:{show:!1},splitArea:{show:!1},splitLine:{lineStyle:{color:["#ccc"],type:"dashed"}}},polar:{axisLine:{lineStyle:{color:"#ddd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(200,200,200,0.2)"]}},splitLine:{lineStyle:{color:"#ddd"}}},timeline:{lineStyle:{color:"#27727B"},controlStyle:{normal:{color:"#27727B"},emphasis:{color:"#27727B"}},symbol:"emptyCircle",symbolSize:3},line:{itemStyle:{normal:{borderWidth:2,borderColor:"#fff",lineStyle:{width:3}},emphasis:{borderWidth:0}},symbol:"circle",symbolSize:3.5},k:{itemStyle:{normal:{color:"#C1232B",color0:"#B5C334",lineStyle:{width:1,color:"#C1232B",color0:"#B5C334"}}}},scatter:{itemdStyle:{normal:{borderWidth:1,borderColor:"rgba(200,200,200,0.5)"},emphasis:{borderWidth:0}},symbol:"star4",symbolSize:4},radar:{symbol:"emptyCircle",symbolSize:3},map:{itemStyle:{normal:{areaStyle:{color:"#ddd"},label:{textStyle:{color:"#C1232B"}}},emphasis:{areaStyle:{color:"#fe994e"},label:{textStyle:{color:"rgb(100,0,0)"}}}}},force:{itemStyle:{normal:{linkStyle:{color:"#27727B"}}}},chord:{itemStyle:{normal:{borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)",chordStyle:{lineStyle:{color:"rgba(128, 128, 128, 0.5)"}}},emphasis:{borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)",chordStyle:{lineStyle:{color:"rgba(128, 128, 128, 0.5)"}}}}},gauge:{center:["50%","80%"],radius:"100%",startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{color:[[.2,"#B5C334"],[.8,"#27727B"],[1,"#C1232B"]],width:"40%"}},axisTick:{splitNumber:2,length:5,lineStyle:{color:"#fff"}},axisLabel:{textStyle:{color:"#fff",fontWeight:"bolder"}},splitLine:{length:"5%",lineStyle:{color:"#fff"}},pointer:{width:"40%",length:"80%",color:"#fff"},title:{offsetCenter:[0,-20],textStyle:{color:"auto",fontSize:20}},detail:{offsetCenter:[0,0],textStyle:{color:"auto",fontSize:40}}},textStyle:{fontFamily:"微软雅黑, Arial, Verdana, sans-serif"}}
return t}),define("zrender/dep/excanvas",["require"],function(t){return document.createElement("canvas").getContext?G_vmlCanvasManager=!1:!function(){function t(){return this.context_||(this.context_=new x(this))}function e(t,e,i){var o=N.call(arguments,2)
return function(){return t.apply(e,o.concat(N.call(arguments)))}}function i(t){return(t+"").replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function o(t,e,i){t.namespaces[e]||t.namespaces.add(e,i,"#default#VML")}function n(t){if(o(t,"g_vml_","urn:schemas-microsoft-com:vml"),o(t,"g_o_","urn:schemas-microsoft-com:office:office"),!t.styleSheets.ex_canvas_){var e=t.createStyleSheet()
e.owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}function r(t){var e=t.srcElement
switch(t.propertyName){case"width":e.getContext().clearRect(),e.style.width=e.attributes.width.nodeValue+"px",e.firstChild.style.width=e.clientWidth+"px"
break
case"height":e.getContext().clearRect(),e.style.height=e.attributes.height.nodeValue+"px",e.firstChild.style.height=e.clientHeight+"px"}}function s(t){var e=t.srcElement
e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")}function a(){return[[1,0,0],[0,1,0],[0,0,1]]}function h(t,e){for(var i=a(),o=0;3>o;o++)for(var n=0;3>n;n++){for(var r=0,s=0;3>s;s++)r+=t[o][s]*e[s][n]
i[o][n]=r}return i}function l(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.font=t.font,e.textAlign=t.textAlign,e.textBaseline=t.textBaseline,e.scaleX_=t.scaleX_,e.scaleY_=t.scaleY_,e.lineScale_=t.lineScale_}function c(t){var e=t.indexOf("(",3),i=t.indexOf(")",e+1),o=t.substring(e+1,i).split(",")
return(4!=o.length||"a"!=t.charAt(3))&&(o[3]=1),o}function d(t){return parseFloat(t)/100}function u(t,e,i){return Math.min(i,Math.max(e,t))}function p(t){var e,i,o,n,r,s
if(n=parseFloat(t[0])/360%360,0>n&&n++,r=u(d(t[1]),0,1),s=u(d(t[2]),0,1),0==r)e=i=o=s
else{var a=.5>s?s*(1+r):s+r-s*r,h=2*s-a
e=f(h,a,n+1/3),i=f(h,a,n),o=f(h,a,n-1/3)}return"#"+W[Math.floor(255*e)]+W[Math.floor(255*i)]+W[Math.floor(255*o)]}function f(t,e,i){return 0>i&&i++,i>1&&i--,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}function g(t){if(t in X)return X[t]
var e,i=1
if(t+="","#"==t.charAt(0))e=t
else if(/^rgb/.test(t)){for(var o,n=c(t),e="#",r=0;3>r;r++)o=-1!=n[r].indexOf("%")?Math.floor(255*d(n[r])):+n[r],e+=W[u(o,0,255)]
i=+n[3]}else if(/^hsl/.test(t)){var n=c(t)
e=p(n),i=n[3]}else e=G[t]||t
return X[t]={color:e,alpha:i}}function m(t){if(U[t])return U[t]
var e,i=document.createElement("div"),o=i.style
try{o.font=t,e=o.fontFamily.split(",")[0]}catch(n){}return U[t]={style:o.fontStyle||V.style,variant:o.fontVariant||V.variant,weight:o.fontWeight||V.weight,size:o.fontSize||V.size,family:e||V.family}}function _(t,e){var i={}
for(var o in t)i[o]=t[o]
var n=parseFloat(e.currentStyle.fontSize),r=parseFloat(t.size)
return"number"==typeof t.size?i.size=t.size:-1!=t.size.indexOf("px")?i.size=r:-1!=t.size.indexOf("em")?i.size=n*r:-1!=t.size.indexOf("%")?i.size=n/100*r:-1!=t.size.indexOf("pt")?i.size=r/.75:i.size=n,i}function y(t){return t.style+" "+t.variant+" "+t.weight+" "+t.size+"px '"+t.family+"'"}function v(t){return Q[t]||"square"}function x(t){this.m_=a(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*B,this.globalAlpha=1,this.font="12px 微软雅黑",this.textAlign="left",this.textBaseline="alphabetic",this.canvas=t
var e="width:"+t.clientWidth+"px;height:"+t.clientHeight+"px;overflow:hidden;position:absolute",i=t.ownerDocument.createElement("div")
i.style.cssText=e,t.appendChild(i)
var o=i.cloneNode(!1)
o.style.backgroundColor="#fff",o.style.filter="alpha(opacity=0)",t.appendChild(o),this.element_=i,this.scaleX_=1,this.scaleY_=1,this.lineScale_=1}function b(t,e,i,o){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:o.x,y:o.y}),t.currentX_=o.x,t.currentY_=o.y}function T(t,e){var i=g(t.strokeStyle),o=i.color,n=i.alpha*t.globalAlpha,r=t.lineScale_*t.lineWidth
1>r&&(n*=r),e.push("<g_vml_:stroke",' opacity="',n,'"',' joinstyle="',t.lineJoin,'"',' miterlimit="',t.miterLimit,'"',' endcap="',v(t.lineCap),'"',' weight="',r,'px"',' color="',o,'" />')}function S(t,e,i,o){var n=t.fillStyle,r=t.scaleX_,s=t.scaleY_,a=o.x-i.x,h=o.y-i.y
if(n instanceof E){var l=0,c={x:0,y:0},d=0,u=1
if("gradient"==n.type_){var p=n.x0_/r,f=n.y0_/s,m=n.x1_/r,_=n.y1_/s,y=z(t,p,f),v=z(t,m,_),x=v.x-y.x,b=v.y-y.y
l=180*Math.atan2(x,b)/Math.PI,0>l&&(l+=360),1e-6>l&&(l=0)}else{var y=z(t,n.x0_,n.y0_)
c={x:(y.x-i.x)/a,y:(y.y-i.y)/h},a/=r*B,h/=s*B
var T=O.max(a,h)
d=2*n.r0_/T,u=2*n.r1_/T-d}var S=n.colors_
S.sort(function(t,e){return t.offset-e.offset})
for(var C=S.length,w=S[0].color,A=S[C-1].color,M=S[0].alpha*t.globalAlpha,k=S[C-1].alpha*t.globalAlpha,I=[],P=0;C>P;P++){var D=S[P]
I.push(D.offset*u+d+" "+D.color)}e.push('<g_vml_:fill type="',n.type_,'"',' method="none" focus="100%"',' color="',w,'"',' color2="',A,'"',' colors="',I.join(","),'"',' opacity="',k,'"',' g_o_:opacity2="',M,'"',' angle="',l,'"',' focusposition="',c.x,",",c.y,'" />')}else if(n instanceof L){if(a&&h){var R=-i.x,H=-i.y
e.push("<g_vml_:fill",' position="',R/a*r*r,",",H/h*s*s,'"',' type="tile"',' src="',n.src_,'" />')}}else{var F=g(t.fillStyle),N=F.color,Y=F.alpha*t.globalAlpha
e.push('<g_vml_:fill color="',N,'" opacity="',Y,'" />')}}function z(t,e,i){var o=t.m_
return{x:B*(e*o[0][0]+i*o[1][0]+o[2][0])-F,y:B*(e*o[0][1]+i*o[1][1]+o[2][1])-F}}function C(t){return isFinite(t[0][0])&&isFinite(t[0][1])&&isFinite(t[1][0])&&isFinite(t[1][1])&&isFinite(t[2][0])&&isFinite(t[2][1])}function w(t,e,i){if(C(e)&&(t.m_=e,t.scaleX_=Math.sqrt(e[0][0]*e[0][0]+e[0][1]*e[0][1]),t.scaleY_=Math.sqrt(e[1][0]*e[1][0]+e[1][1]*e[1][1]),i)){var o=e[0][0]*e[1][1]-e[0][1]*e[1][0]
t.lineScale_=H(R(o))}}function E(t){this.type_=t,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function L(t,e){switch(M(t),e){case"repeat":case null:case"":this.repetition_="repeat"
break
case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=e
break
default:A("SYNTAX_ERR")}this.src_=t.src,this.width_=t.width,this.height_=t.height}function A(t){throw new k(t)}function M(t){t&&1==t.nodeType&&"IMG"==t.tagName||A("TYPE_MISMATCH_ERR"),"complete"!=t.readyState&&A("INVALID_STATE_ERR")}function k(t){this.code=this[t],this.message=t+": DOM Exception "+this.code}var O=Math,I=O.round,P=O.sin,D=O.cos,R=O.abs,H=O.sqrt,B=10,F=B/2,N=(+navigator.userAgent.match(/MSIE ([\d.]+)?/)[1],Array.prototype.slice)
n(document)
var Y={init:function(t){var i=t||document
i.createElement("canvas"),i.attachEvent("onreadystatechange",e(this.init_,this,i))},init_:function(t){for(var e=t.getElementsByTagName("canvas"),i=0;i<e.length;i++)this.initElement(e[i])},initElement:function(e){if(!e.getContext){e.getContext=t,n(e.ownerDocument),e.innerHTML="",e.attachEvent("onpropertychange",r),e.attachEvent("onresize",s)
var i=e.attributes
i.width&&i.width.specified?e.style.width=i.width.nodeValue+"px":e.width=e.clientWidth,i.height&&i.height.specified?e.style.height=i.height.nodeValue+"px":e.height=e.clientHeight}return e}}
Y.init()
for(var W=[],q=0;16>q;q++)for(var Z=0;16>Z;Z++)W[16*q+Z]=q.toString(16)+Z.toString(16)
var G={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},X={},V={style:"normal",variant:"normal",weight:"normal",size:12,family:"微软雅黑"},U={},Q={butt:"flat",round:"round"},j=x.prototype
j.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null),this.element_.innerHTML=""},j.beginPath=function(){this.currentPath_=[]},j.moveTo=function(t,e){var i=z(this,t,e)
this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},j.lineTo=function(t,e){var i=z(this,t,e)
this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},j.bezierCurveTo=function(t,e,i,o,n,r){var s=z(this,n,r),a=z(this,t,e),h=z(this,i,o)
b(this,a,h,s)},j.quadraticCurveTo=function(t,e,i,o){var n=z(this,t,e),r=z(this,i,o),s={x:this.currentX_+2/3*(n.x-this.currentX_),y:this.currentY_+2/3*(n.y-this.currentY_)},a={x:s.x+(r.x-this.currentX_)/3,y:s.y+(r.y-this.currentY_)/3}
b(this,s,a,r)},j.arc=function(t,e,i,o,n,r){i*=B
var s=r?"at":"wa",a=t+D(o)*i-F,h=e+P(o)*i-F,l=t+D(n)*i-F,c=e+P(n)*i-F
a!=l||r||(a+=.125)
var d=z(this,t,e),u=z(this,a,h),p=z(this,l,c)
this.currentPath_.push({type:s,x:d.x,y:d.y,radius:i,xStart:u.x,yStart:u.y,xEnd:p.x,yEnd:p.y})},j.rect=function(t,e,i,o){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+o),this.lineTo(t,e+o),this.closePath()},j.strokeRect=function(t,e,i,o){var n=this.currentPath_
this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+o),this.lineTo(t,e+o),this.closePath(),this.stroke(),this.currentPath_=n},j.fillRect=function(t,e,i,o){var n=this.currentPath_
this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+o),this.lineTo(t,e+o),this.closePath(),this.fill(),this.currentPath_=n},j.createLinearGradient=function(t,e,i,o){var n=new E("gradient")
return n.x0_=t,n.y0_=e,n.x1_=i,n.y1_=o,n},j.createRadialGradient=function(t,e,i,o,n,r){var s=new E("gradientradial")
return s.x0_=t,s.y0_=e,s.r0_=i,s.x1_=o,s.y1_=n,s.r1_=r,s},j.drawImage=function(t,e){var i,o,n,r,s,a,h,l,c=t.runtimeStyle.width,d=t.runtimeStyle.height
t.runtimeStyle.width="auto",t.runtimeStyle.height="auto"
var u=t.width,p=t.height
if(t.runtimeStyle.width=c,t.runtimeStyle.height=d,3==arguments.length)i=arguments[1],o=arguments[2],s=a=0,h=n=u,l=r=p
else if(5==arguments.length)i=arguments[1],o=arguments[2],n=arguments[3],r=arguments[4],s=a=0,h=u,l=p
else{if(9!=arguments.length)throw Error("Invalid number of arguments")
s=arguments[1],a=arguments[2],h=arguments[3],l=arguments[4],i=arguments[5],o=arguments[6],n=arguments[7],r=arguments[8]}var f=z(this,i,o),g=[],m=10,_=10,y=x=1
if(g.push(" <g_vml_:group",' coordsize="',B*m,",",B*_,'"',' coordorigin="0,0"',' style="width:',m,"px;height:",_,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var v=[],y=this.scaleX_,x=this.scaleY_
v.push("M11=",this.m_[0][0]/y,",","M12=",this.m_[1][0]/x,",","M21=",this.m_[0][1]/y,",","M22=",this.m_[1][1]/x,",","Dx=",I(f.x/B),",","Dy=",I(f.y/B),"")
var b=f,T=z(this,i+n,o),S=z(this,i,o+r),C=z(this,i+n,o+r)
b.x=O.max(b.x,T.x,S.x,C.x),b.y=O.max(b.y,T.y,S.y,C.y),g.push("padding:0 ",I(b.x/B),"px ",I(b.y/B),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",v.join(""),", SizingMethod='clip');")}else g.push("top:",I(f.y/B),"px;left:",I(f.x/B),"px;")
g.push(' ">'),(s||a)&&g.push('<div style="overflow: hidden; width:',Math.ceil((n+s*n/h)*y),"px;"," height:",Math.ceil((r+a*r/l)*x),"px;"," filter:progid:DxImageTransform.Microsoft.Matrix(Dx=",-s*n/h*y,",Dy=",-a*r/l*x,');">'),g.push('<div style="width:',Math.round(y*u*n/h),"px;"," height:",Math.round(x*p*r/l),"px;"," filter:"),this.globalAlpha<1&&g.push(" progid:DXImageTransform.Microsoft.Alpha(opacity="+100*this.globalAlpha+")"),g.push(" progid:DXImageTransform.Microsoft.AlphaImageLoader(src=",t.src,',sizingMethod=scale)">'),(s||a)&&g.push("</div>"),g.push("</div></div>"),this.element_.insertAdjacentHTML("BeforeEnd",g.join(""))},j.stroke=function(t){var e=[],i=10,o=10
e.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',i,"px;height:",o,'px;"',' coordorigin="0,0"',' coordsize="',B*i,",",B*o,'"',' stroked="',!t,'"',' path="')
for(var n={x:null,y:null},r={x:null,y:null},s=0;s<this.currentPath_.length;s++){var a,h=this.currentPath_[s]
switch(h.type){case"moveTo":a=h,e.push(" m ",I(h.x),",",I(h.y))
break
case"lineTo":e.push(" l ",I(h.x),",",I(h.y))
break
case"close":e.push(" x "),h=null
break
case"bezierCurveTo":e.push(" c ",I(h.cp1x),",",I(h.cp1y),",",I(h.cp2x),",",I(h.cp2y),",",I(h.x),",",I(h.y))
break
case"at":case"wa":e.push(" ",h.type," ",I(h.x-this.scaleX_*h.radius),",",I(h.y-this.scaleY_*h.radius)," ",I(h.x+this.scaleX_*h.radius),",",I(h.y+this.scaleY_*h.radius)," ",I(h.xStart),",",I(h.yStart)," ",I(h.xEnd),",",I(h.yEnd))}h&&((null==n.x||h.x<n.x)&&(n.x=h.x),(null==r.x||h.x>r.x)&&(r.x=h.x),(null==n.y||h.y<n.y)&&(n.y=h.y),(null==r.y||h.y>r.y)&&(r.y=h.y))}e.push(' ">'),t?S(this,e,n,r):T(this,e),e.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",e.join(""))},j.fill=function(){this.stroke(!0)},j.closePath=function(){this.currentPath_.push({type:"close"})},j.save=function(){var t={}
l(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=h(a(),this.m_)},j.restore=function(){this.aStack_.length&&(l(this.aStack_.pop(),this),this.m_=this.mStack_.pop())},j.translate=function(t,e){var i=[[1,0,0],[0,1,0],[t,e,1]]
w(this,h(i,this.m_),!1)},j.rotate=function(t){var e=D(t),i=P(t),o=[[e,i,0],[-i,e,0],[0,0,1]]
w(this,h(o,this.m_),!1)},j.scale=function(t,e){var i=[[t,0,0],[0,e,0],[0,0,1]]
w(this,h(i,this.m_),!0)},j.transform=function(t,e,i,o,n,r){var s=[[t,e,0],[i,o,0],[n,r,1]]
w(this,h(s,this.m_),!0)},j.setTransform=function(t,e,i,o,n,r){var s=[[t,e,0],[i,o,0],[n,r,1]]
w(this,s,!0)},j.drawText_=function(t,e,o,n,r){var s=this.m_,a=1e3,h=0,l=a,c={x:0,y:0},d=[],u=_(m(this.font),this.element_),p=y(u),f=this.element_.currentStyle,g=this.textAlign.toLowerCase()
switch(g){case"left":case"center":case"right":break
case"end":g="ltr"==f.direction?"right":"left"
break
case"start":g="rtl"==f.direction?"right":"left"
break
default:g="left"}switch(this.textBaseline){case"hanging":case"top":c.y=u.size/1.75
break
case"middle":break
default:case null:case"alphabetic":case"ideographic":case"bottom":c.y=-u.size/2.25}switch(g){case"right":h=a,l=.05
break
case"center":h=l=a/2}var v=z(this,e+c.x,o+c.y)
d.push('<g_vml_:line from="',-h,' 0" to="',l,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!r,'" stroked="',!!r,'" style="position:absolute;width:1px;height:1px;">'),r?T(this,d):S(this,d,{x:-h,y:0},{x:l,y:u.size})
var x=s[0][0].toFixed(3)+","+s[1][0].toFixed(3)+","+s[0][1].toFixed(3)+","+s[1][1].toFixed(3)+",0,0",b=I(v.x/B)+","+I(v.y/B)
d.push('<g_vml_:skew on="t" matrix="',x,'" ',' offset="',b,'" origin="',h,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',i(t),'" style="v-text-align:',g,";font:",i(p),'" /></g_vml_:line>'),this.element_.insertAdjacentHTML("beforeEnd",d.join(""))},j.fillText=function(t,e,i,o){this.drawText_(t,e,i,o,!1)},j.strokeText=function(t,e,i,o){this.drawText_(t,e,i,o,!0)},j.measureText=function(t){if(!this.textMeasureEl_){var e='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'
this.element_.insertAdjacentHTML("beforeEnd",e),this.textMeasureEl_=this.element_.lastChild}var i=this.element_.ownerDocument
this.textMeasureEl_.innerHTML=""
try{this.textMeasureEl_.style.font=this.font}catch(o){}return this.textMeasureEl_.appendChild(i.createTextNode(t)),{width:this.textMeasureEl_.offsetWidth}},j.clip=function(){},j.arcTo=function(){},j.createPattern=function(t,e){return new L(t,e)},E.prototype.addColorStop=function(t,e){e=g(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})}
var K=k.prototype=Error()
K.INDEX_SIZE_ERR=1,K.DOMSTRING_SIZE_ERR=2,K.HIERARCHY_REQUEST_ERR=3,K.WRONG_DOCUMENT_ERR=4,K.INVALID_CHARACTER_ERR=5,K.NO_DATA_ALLOWED_ERR=6,K.NO_MODIFICATION_ALLOWED_ERR=7,K.NOT_FOUND_ERR=8,K.NOT_SUPPORTED_ERR=9,K.INUSE_ATTRIBUTE_ERR=10,K.INVALID_STATE_ERR=11,K.SYNTAX_ERR=12,K.INVALID_MODIFICATION_ERR=13,K.NAMESPACE_ERR=14,K.INVALID_ACCESS_ERR=15,K.VALIDATION_ERR=16,K.TYPE_MISMATCH_ERR=17,G_vmlCanvasManager=Y,CanvasRenderingContext2D=x,CanvasGradient=E,CanvasPattern=L,DOMException=k}(),G_vmlCanvasManager}),define("zrender/mixin/Eventful",["require"],function(t){var e=function(){this._handlers={}}
return e.prototype.one=function(t,e,i){var o=this._handlers
return e&&t?(o[t]||(o[t]=[]),o[t].push({h:e,one:!0,ctx:i||this}),this):this},e.prototype.bind=function(t,e,i){var o=this._handlers
return e&&t?(o[t]||(o[t]=[]),o[t].push({h:e,one:!1,ctx:i||this}),this):this},e.prototype.unbind=function(t,e){var i=this._handlers
if(!t)return this._handlers={},this
if(e){if(i[t]){for(var o=[],n=0,r=i[t].length;r>n;n++)i[t][n].h!=e&&o.push(i[t][n])
i[t]=o}i[t]&&0===i[t].length&&delete i[t]}else delete i[t]
return this},e.prototype.dispatch=function(t){if(this._handlers[t]){var e=arguments,i=e.length
i>3&&(e=Array.prototype.slice.call(e,1))
for(var o=this._handlers[t],n=o.length,r=0;n>r;){switch(i){case 1:o[r].h.call(o[r].ctx)
break
case 2:o[r].h.call(o[r].ctx,e[1])
break
case 3:o[r].h.call(o[r].ctx,e[1],e[2])
break
default:o[r].h.apply(o[r].ctx,e)}o[r].one?(o.splice(r,1),n--):r++}}return this},e.prototype.dispatchWithContext=function(t){if(this._handlers[t]){var e=arguments,i=e.length
i>4&&(e=Array.prototype.slice.call(e,1,e.length-1))
for(var o=e[e.length-1],n=this._handlers[t],r=n.length,s=0;r>s;){switch(i){case 1:n[s].h.call(o)
break
case 2:n[s].h.call(o,e[1])
break
case 3:n[s].h.call(o,e[1],e[2])
break
default:n[s].h.apply(o,e)}n[s].one?(n.splice(s,1),r--):s++}}return this},e}),define("zrender/tool/log",["require","../config"],function(t){var e=t("../config")
return function(){if(0!==e.debugMode)if(1==e.debugMode)for(var t in arguments)throw Error(arguments[t])
else if(e.debugMode>1)for(var t in arguments)console.log(arguments[t])}}),define("zrender/tool/guid",[],function(){var t=2311
return function(){return"zrender__"+t++}}),define("zrender/Handler",["require","./config","./tool/env","./tool/event","./tool/util","./tool/vector","./tool/matrix","./mixin/Eventful"],function(t){"use strict"
function e(t,e){return function(i){return t.call(e,i)}}function i(t,e){return function(i,o,n){return t.call(e,i,o,n)}}function o(t){for(var i=p.length;i--;){var o=p[i]
t["_"+o+"Handler"]=e(f[o],t)}}function n(t,e,i){if(this._draggingTarget&&this._draggingTarget.id==t.id||t.isSilent())return!1
var o=this._event
if(t.isCover(e,i)){t.hoverable&&this.storage.addHover(t)
for(var n=t.parent;n;){if(n.clipShape&&!n.clipShape.isCover(this._mouseX,this._mouseY))return!1
n=n.parent}return this._lastHover!=t&&(this._processOutShape(o),this._processDragLeave(o),this._lastHover=t,this._processDragEnter(o)),this._processOverShape(o),this._processDragOver(o),this._hasfound=1,!0}return!1}var r=t("./config"),s=t("./tool/env"),a=t("./tool/event"),h=t("./tool/util"),l=t("./tool/vector"),c=t("./tool/matrix"),d=r.EVENT,u=t("./mixin/Eventful"),p=["resize","click","dblclick","mousewheel","mousemove","mouseout","mouseup","mousedown","touchstart","touchend","touchmove"],f={resize:function(t){t=t||window.event,this._lastHover=null,this._isMouseDown=0,this.dispatch(d.RESIZE,t)},click:function(t){t=this._zrenderEventFixed(t)
var e=this._lastHover;(e&&e.clickable||!e)&&this._clickThreshold<5&&this._dispatchAgency(e,d.CLICK,t),this._mousemoveHandler(t)},dblclick:function(t){t=t||window.event,t=this._zrenderEventFixed(t)
var e=this._lastHover;(e&&e.clickable||!e)&&this._clickThreshold<5&&this._dispatchAgency(e,d.DBLCLICK,t),this._mousemoveHandler(t)},mousewheel:function(t){t=this._zrenderEventFixed(t)
var e=t.wheelDelta||-t.detail,i=e>0?1.1:1/1.1,o=!1,n=this._mouseX,r=this._mouseY
this.painter.eachBuildinLayer(function(e){var s=e.position
if(e.zoomable){e.__zoom=e.__zoom||1
var h=e.__zoom
h*=i,h=Math.max(Math.min(e.maxZoom,h),e.minZoom),i=h/e.__zoom,e.__zoom=h,s[0]-=(n-s[0])*(i-1),s[1]-=(r-s[1])*(i-1),e.scale[0]*=i,e.scale[1]*=i,e.dirty=!0,o=!0,a.stop(t)}}),o&&this.painter.refresh(),this._dispatchAgency(this._lastHover,d.MOUSEWHEEL,t),this._mousemoveHandler(t)},mousemove:function(t){if(!this.painter.isLoading()){t=this._zrenderEventFixed(t),this._lastX=this._mouseX,this._lastY=this._mouseY,this._mouseX=a.getX(t),this._mouseY=a.getY(t)
var e=this._mouseX-this._lastX,i=this._mouseY-this._lastY
this._processDragStart(t),this._hasfound=0,this._event=t,this._iterateAndFindHover(),this._hasfound||((!this._draggingTarget||this._lastHover&&this._lastHover!=this._draggingTarget)&&(this._processOutShape(t),this._processDragLeave(t)),this._lastHover=null,this.storage.delHover(),this.painter.clearHover())
var o="default"
if(this._draggingTarget)this.storage.drift(this._draggingTarget.id,e,i),this._draggingTarget.modSelf(),this.storage.addHover(this._draggingTarget),this._clickThreshold++
else if(this._isMouseDown){var n=!1
this.painter.eachBuildinLayer(function(t){t.panable&&(o="move",t.position[0]+=e,t.position[1]+=i,n=!0,t.dirty=!0)}),n&&this.painter.refresh()}this._draggingTarget||this._hasfound&&this._lastHover.draggable?o="move":this._hasfound&&this._lastHover.clickable&&(o="pointer"),this.root.style.cursor=o,this._dispatchAgency(this._lastHover,d.MOUSEMOVE,t),(this._draggingTarget||this._hasfound||this.storage.hasHoverShape())&&this.painter.refreshHover()}},mouseout:function(t){t=this._zrenderEventFixed(t)
var e=t.toElement||t.relatedTarget
if(e!=this.root)for(;e&&9!=e.nodeType;){if(e==this.root)return void this._mousemoveHandler(t)
e=e.parentNode}t.zrenderX=this._lastX,t.zrenderY=this._lastY,this.root.style.cursor="default",this._isMouseDown=0,this._processOutShape(t),this._processDrop(t),this._processDragEnd(t),this.painter.isLoading()||this.painter.refreshHover(),this.dispatch(d.GLOBALOUT,t)},mousedown:function(t){return this._clickThreshold=0,2==this._lastDownButton?(this._lastDownButton=t.button,void(this._mouseDownTarget=null)):(this._lastMouseDownMoment=new Date,t=this._zrenderEventFixed(t),this._isMouseDown=1,this._mouseDownTarget=this._lastHover,this._dispatchAgency(this._lastHover,d.MOUSEDOWN,t),void(this._lastDownButton=t.button))},mouseup:function(t){t=this._zrenderEventFixed(t),this.root.style.cursor="default",this._isMouseDown=0,this._mouseDownTarget=null,this._dispatchAgency(this._lastHover,d.MOUSEUP,t),this._processDrop(t),this._processDragEnd(t)},touchstart:function(t){t=this._zrenderEventFixed(t,!0),this._lastTouchMoment=new Date,this._mobileFindFixed(t),this._mousedownHandler(t)},touchmove:function(t){t=this._zrenderEventFixed(t,!0),this._mousemoveHandler(t),this._isDragging&&a.stop(t)},touchend:function(t){t=this._zrenderEventFixed(t,!0),this._mouseupHandler(t)
var e=new Date
e-this._lastTouchMoment<d.touchClickDelay&&(this._mobileFindFixed(t),this._clickHandler(t),e-this._lastClickMoment<d.touchClickDelay/2&&(this._dblclickHandler(t),this._lastHover&&this._lastHover.clickable&&a.stop(t)),this._lastClickMoment=e),this.painter.clearHover()}},g=function(t,e,r){u.call(this),this.root=t,this.storage=e,this.painter=r,this._lastX=this._lastY=this._mouseX=this._mouseY=0,this._findHover=i(n,this),this._domHover=r.getDomHover(),o(this),window.addEventListener?(window.addEventListener("resize",this._resizeHandler),s.os.tablet||s.os.phone?(t.addEventListener("touchstart",this._touchstartHandler),t.addEventListener("touchmove",this._touchmoveHandler),t.addEventListener("touchend",this._touchendHandler)):(t.addEventListener("click",this._clickHandler),t.addEventListener("dblclick",this._dblclickHandler),t.addEventListener("mousewheel",this._mousewheelHandler),t.addEventListener("mousemove",this._mousemoveHandler),t.addEventListener("mousedown",this._mousedownHandler),t.addEventListener("mouseup",this._mouseupHandler)),t.addEventListener("DOMMouseScroll",this._mousewheelHandler),t.addEventListener("mouseout",this._mouseoutHandler)):(window.attachEvent("onresize",this._resizeHandler),t.attachEvent("onclick",this._clickHandler),t.ondblclick=this._dblclickHandler,t.attachEvent("onmousewheel",this._mousewheelHandler),t.attachEvent("onmousemove",this._mousemoveHandler),t.attachEvent("onmouseout",this._mouseoutHandler),t.attachEvent("onmousedown",this._mousedownHandler),t.attachEvent("onmouseup",this._mouseupHandler))}
g.prototype.on=function(t,e,i){return this.bind(t,e,i),this},g.prototype.un=function(t,e){return this.unbind(t,e),this},g.prototype.trigger=function(t,e){switch(t){case d.RESIZE:case d.CLICK:case d.DBLCLICK:case d.MOUSEWHEEL:case d.MOUSEMOVE:case d.MOUSEDOWN:case d.MOUSEUP:case d.MOUSEOUT:this["_"+t+"Handler"](e)}},g.prototype.dispose=function(){var t=this.root
window.removeEventListener?(window.removeEventListener("resize",this._resizeHandler),s.os.tablet||s.os.phone?(t.removeEventListener("touchstart",this._touchstartHandler),t.removeEventListener("touchmove",this._touchmoveHandler),t.removeEventListener("touchend",this._touchendHandler)):(t.removeEventListener("click",this._clickHandler),t.removeEventListener("dblclick",this._dblclickHandler),t.removeEventListener("mousewheel",this._mousewheelHandler),t.removeEventListener("mousemove",this._mousemoveHandler),t.removeEventListener("mousedown",this._mousedownHandler),t.removeEventListener("mouseup",this._mouseupHandler)),t.removeEventListener("DOMMouseScroll",this._mousewheelHandler),t.removeEventListener("mouseout",this._mouseoutHandler)):(window.detachEvent("onresize",this._resizeHandler),t.detachEvent("onclick",this._clickHandler),t.detachEvent("dblclick",this._dblclickHandler),t.detachEvent("onmousewheel",this._mousewheelHandler),t.detachEvent("onmousemove",this._mousemoveHandler),t.detachEvent("onmouseout",this._mouseoutHandler),t.detachEvent("onmousedown",this._mousedownHandler),t.detachEvent("onmouseup",this._mouseupHandler)),this.root=this._domHover=this.storage=this.painter=null,this.un()},g.prototype._processDragStart=function(t){var e=this._lastHover
if(this._isMouseDown&&e&&e.draggable&&!this._draggingTarget&&this._mouseDownTarget==e){if(e.dragEnableTime&&new Date-this._lastMouseDownMoment<e.dragEnableTime)return
var i=e
this._draggingTarget=i,this._isDragging=1,i.invisible=!0,this.storage.mod(i.id),this._dispatchAgency(i,d.DRAGSTART,t),this.painter.refresh()}},g.prototype._processDragEnter=function(t){this._draggingTarget&&this._dispatchAgency(this._lastHover,d.DRAGENTER,t,this._draggingTarget)},g.prototype._processDragOver=function(t){this._draggingTarget&&this._dispatchAgency(this._lastHover,d.DRAGOVER,t,this._draggingTarget)},g.prototype._processDragLeave=function(t){this._draggingTarget&&this._dispatchAgency(this._lastHover,d.DRAGLEAVE,t,this._draggingTarget)},g.prototype._processDrop=function(t){this._draggingTarget&&(this._draggingTarget.invisible=!1,this.storage.mod(this._draggingTarget.id),this.painter.refresh(),this._dispatchAgency(this._lastHover,d.DROP,t,this._draggingTarget))},g.prototype._processDragEnd=function(t){this._draggingTarget&&(this._dispatchAgency(this._draggingTarget,d.DRAGEND,t),this._lastHover=null),this._isDragging=0,this._draggingTarget=null},g.prototype._processOverShape=function(t){this._dispatchAgency(this._lastHover,d.MOUSEOVER,t)},g.prototype._processOutShape=function(t){this._dispatchAgency(this._lastHover,d.MOUSEOUT,t)},g.prototype._dispatchAgency=function(t,e,i,o){var n="on"+e,r={type:e,event:i,target:t,cancelBubble:!1},s=t
for(o&&(r.dragged=o);s&&(s[n]&&(r.cancelBubble=s[n](r)),s.dispatch(e,r),s=s.parent,!r.cancelBubble););if(t)r.cancelBubble||this.dispatch(e,r)
else if(!o){var a={type:e,event:i}
this.dispatch(e,a),this.painter.eachOtherLayer(function(t){"function"==typeof t[n]&&t[n](a),t.dispatch&&t.dispatch(e,a)})}},g.prototype._iterateAndFindHover=function(){var t=c.create()
return function(){for(var e,i,o=this.storage.getShapeList(),n=[0,0],r=o.length-1;r>=0;r--){var s=o[r]
if(e!==s.zlevel&&(i=this.painter.getLayer(s.zlevel,i),n[0]=this._mouseX,n[1]=this._mouseY,i.needTransform&&(c.invert(t,i.transform),l.applyTransform(n,n,t))),this._findHover(s,n[0],n[1]))break}}}()
var m=[{x:10},{x:-20},{x:10,y:10},{y:-20}]
return g.prototype._mobileFindFixed=function(t){this._lastHover=null,this._mouseX=t.zrenderX,this._mouseY=t.zrenderY,this._event=t,this._iterateAndFindHover()
for(var e=0;!this._lastHover&&e<m.length;e++){var i=m[e]
i.x&&(this._mouseX+=i.x),i.y&&(this._mouseY+=i.y),this._iterateAndFindHover()}this._lastHover&&(t.zrenderX=this._mouseX,t.zrenderY=this._mouseY)},g.prototype._zrenderEventFixed=function(t,e){if(t.zrenderFixed)return t
if(e){var i="touchend"!=t.type?t.targetTouches[0]:t.changedTouches[0]
if(i){var o=this.painter._domRoot.getBoundingClientRect()
t.zrenderX=i.clientX-o.left,t.zrenderY=i.clientY-o.top}}else{t=t||window.event
var n=t.toElement||t.relatedTarget||t.srcElement||t.target
n&&n!=this._domHover&&(t.zrenderX=(void 0!==t.offsetX?t.offsetX:t.layerX)+n.offsetLeft,t.zrenderY=(void 0!==t.offsetY?t.offsetY:t.layerY)+n.offsetTop)}return t.zrenderFixed=1,t},h.merge(g.prototype,u.prototype,!0),g}),define("zrender/Painter",["require","./config","./tool/util","./tool/log","./loadingEffect/Base","./Layer","./shape/Image"],function(t){"use strict"
function e(){return!1}function i(){}function o(t){return t?t.isBuildin?!0:"function"!=typeof t.resize||"function"!=typeof t.refresh?!1:!0:!1}var n=t("./config"),r=t("./tool/util"),s=t("./tool/log"),a=t("./loadingEffect/Base"),h=t("./Layer"),l=function(t,i){this.root=t,t.style["-webkit-tap-highlight-color"]="transparent",t.style["-webkit-user-select"]="none",t.style["user-select"]="none",t.style["-webkit-touch-callout"]="none",this.storage=i,t.innerHTML="",this._width=this._getWidth(),this._height=this._getHeight()
var o=document.createElement("div")
this._domRoot=o,o.style.position="relative",o.style.overflow="hidden",o.style.width=this._width+"px",o.style.height=this._height+"px",t.appendChild(o),this._layers={},this._zlevelList=[],this._layerConfig={},this._loadingEffect=new a({}),this.shapeToImage=this._createShapeToImageProcessor(),this._bgDom=document.createElement("div"),this._bgDom.style.cssText="position:absolute;left:0px;top:0px;width:"+this._width+"px;height:"+(this._height+"px;")+"-webkit-user-select:none;user-select;none;-webkit-touch-callout:none;",this._bgDom.setAttribute("data-zr-dom-id","bg"),o.appendChild(this._bgDom),this._bgDom.onselectstart=e
var n=new h("_zrender_hover_",this)
this._layers.hover=n,o.appendChild(n.dom),n.initContext(),n.dom.onselectstart=e,n.dom.style["-webkit-user-select"]="none",n.dom.style["user-select"]="none",n.dom.style["-webkit-touch-callout"]="none",this.refreshNextFrame=null}
return l.prototype.render=function(t){return this.isLoading()&&this.hideLoading(),this.refresh(t,!0),this},l.prototype.refresh=function(t,e){var i=this.storage.getShapeList(!0)
this._paintList(i,e)
for(var o=0;o<this._zlevelList.length;o++){var n=this._zlevelList[o],r=this._layers[n]
!r.isBuildin&&r.refresh&&r.refresh()}return"function"==typeof t&&t(),this},l.prototype._preProcessLayer=function(t){t.unusedCount++,t.updateTransform()},l.prototype._postProcessLayer=function(t){t.dirty=!1,1==t.unusedCount&&t.clear()},l.prototype._paintList=function(t,e){void 0===e&&(e=!1),this._updateLayerStatus(t)
var i,o,r
this.eachBuildinLayer(this._preProcessLayer)
for(var a=0,h=t.length;h>a;a++){var l=t[a]
if(o!==l.zlevel&&(i&&(i.needTransform&&r.restore(),r.flush&&r.flush()),o=l.zlevel,i=this.getLayer(o),i.isBuildin||s("ZLevel "+o+" has been used by unkown layer "+i.id),r=i.ctx,i.unusedCount=0,(i.dirty||e)&&i.clear(),i.needTransform&&(r.save(),i.setTransform(r))),(i.dirty||e)&&!l.invisible&&(!l.onbrush||l.onbrush&&!l.onbrush(r,!1)))if(n.catchBrushException)try{l.brush(r,!1,this.refreshNextFrame)}catch(c){s(c,"brush error of "+l.type,l)}else l.brush(r,!1,this.refreshNextFrame)
l.__dirty=!1}i&&(i.needTransform&&r.restore(),r.flush&&r.flush()),this.eachBuildinLayer(this._postProcessLayer)},l.prototype.getLayer=function(t){var e=this._layers[t]
return e||(e=new h(t,this),e.isBuildin=!0,this._layerConfig[t]&&r.merge(e,this._layerConfig[t],!0),e.updateTransform(),this.insertLayer(t,e),e.initContext()),e},l.prototype.insertLayer=function(t,e){if(this._layers[t])return void s("ZLevel "+t+" has been used already")
if(!o(e))return void s("Layer of zlevel "+t+" is not valid")
var i=this._zlevelList.length,n=null,r=-1
if(i>0&&t>this._zlevelList[0]){for(r=0;i-1>r&&!(this._zlevelList[r]<t&&this._zlevelList[r+1]>t);r++);n=this._layers[this._zlevelList[r]]}this._zlevelList.splice(r+1,0,t)
var a=n?n.dom:this._bgDom
a.nextSibling?a.parentNode.insertBefore(e.dom,a.nextSibling):a.parentNode.appendChild(e.dom),this._layers[t]=e},l.prototype.eachLayer=function(t,e){for(var i=0;i<this._zlevelList.length;i++){var o=this._zlevelList[i]
t.call(e,this._layers[o],o)}},l.prototype.eachBuildinLayer=function(t,e){for(var i=0;i<this._zlevelList.length;i++){var o=this._zlevelList[i],n=this._layers[o]
n.isBuildin&&t.call(e,n,o)}},l.prototype.eachOtherLayer=function(t,e){for(var i=0;i<this._zlevelList.length;i++){var o=this._zlevelList[i],n=this._layers[o]
n.isBuildin||t.call(e,n,o)}},l.prototype.getLayers=function(){return this._layers},l.prototype._updateLayerStatus=function(t){var e=this._layers,i={}
this.eachBuildinLayer(function(t,e){i[e]=t.elCount,t.elCount=0})
for(var o=0,n=t.length;n>o;o++){var r=t[o],s=r.zlevel,a=e[s]
if(a){if(a.elCount++,a.dirty)continue
a.dirty=r.__dirty}}this.eachBuildinLayer(function(t,e){i[e]!==t.elCount&&(t.dirty=!0)})},l.prototype.refreshShapes=function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i]
n.modSelf()}return this.refresh(e),this},l.prototype.setLoadingEffect=function(t){return this._loadingEffect=t,this},l.prototype.clear=function(){return this.eachBuildinLayer(this._clearLayer),this},l.prototype._clearLayer=function(t){t.clear()},l.prototype.modLayer=function(t,e){if(e){this._layerConfig[t]?r.merge(this._layerConfig[t],e,!0):this._layerConfig[t]=e
var i=this._layers[t]
i&&r.merge(i,this._layerConfig[t],!0)}},l.prototype.delLayer=function(t){var e=this._layers[t]
e&&(this.modLayer(t,{position:e.position,rotation:e.rotation,scale:e.scale}),e.dom.parentNode.removeChild(e.dom),delete this._layers[t],this._zlevelList.splice(r.indexOf(this._zlevelList,t),1))},l.prototype.refreshHover=function(){this.clearHover()
for(var t=this.storage.getHoverShapes(!0),e=0,i=t.length;i>e;e++)this._brushHover(t[e])
var o=this._layers.hover.ctx
return o.flush&&o.flush(),this.storage.delHover(),this},l.prototype.clearHover=function(){var t=this._layers.hover
return t&&t.clear(),this},l.prototype.showLoading=function(t){return this._loadingEffect&&this._loadingEffect.stop(),t&&this.setLoadingEffect(t),this._loadingEffect.start(this),this.loading=!0,this},l.prototype.hideLoading=function(){return this._loadingEffect.stop(),this.clearHover(),this.loading=!1,this},l.prototype.isLoading=function(){return this.loading},l.prototype.resize=function(){var t=this._domRoot
t.style.display="none"
var e=this._getWidth(),i=this._getHeight()
if(t.style.display="",this._width!=e||i!=this._height){this._width=e,this._height=i,t.style.width=e+"px",t.style.height=i+"px"
for(var o in this._layers)this._layers[o].resize(e,i)
this.refresh(null,!0)}return this},l.prototype.clearLayer=function(t){var e=this._layers[t]
e&&e.clear()},l.prototype.dispose=function(){this.isLoading()&&this.hideLoading(),this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},l.prototype.getDomHover=function(){return this._layers.hover.dom},l.prototype.toDataURL=function(t,e,i){if(window.G_vmlCanvasManager)return null
var o=new h("image",this)
this._bgDom.appendChild(o.dom),o.initContext()
var r=o.ctx
o.clearColor=e||"#fff",o.clear()
var a=this
this.storage.iterShape(function(t){if(!t.invisible&&(!t.onbrush||t.onbrush&&!t.onbrush(r,!1)))if(n.catchBrushException)try{t.brush(r,!1,a.refreshNextFrame)}catch(e){s(e,"brush error of "+t.type,t)}else t.brush(r,!1,a.refreshNextFrame)},{normal:"up",update:!0})
var l=o.dom.toDataURL(t,i)
return r=null,this._bgDom.removeChild(o.dom),l},l.prototype.getWidth=function(){return this._width},l.prototype.getHeight=function(){return this._height},l.prototype._getWidth=function(){var t=this.root,e=t.currentStyle||document.defaultView.getComputedStyle(t)
return((t.clientWidth||parseInt(e.width,10))-parseInt(e.paddingLeft,10)-parseInt(e.paddingRight,10)).toFixed(0)-0},l.prototype._getHeight=function(){var t=this.root,e=t.currentStyle||document.defaultView.getComputedStyle(t)
return((t.clientHeight||parseInt(e.height,10))-parseInt(e.paddingTop,10)-parseInt(e.paddingBottom,10)).toFixed(0)-0},l.prototype._brushHover=function(t){var e=this._layers.hover.ctx
if(!t.onbrush||t.onbrush&&!t.onbrush(e,!0)){var i=this.getLayer(t.zlevel)
if(i.needTransform&&(e.save(),i.setTransform(e)),n.catchBrushException)try{t.brush(e,!0,this.refreshNextFrame)}catch(o){s(o,"hoverBrush error of "+t.type,t)}else t.brush(e,!0,this.refreshNextFrame)
i.needTransform&&e.restore()}},l.prototype._shapeToImage=function(e,i,o,n,r){var s=document.createElement("canvas"),a=s.getContext("2d")
s.style.width=o+"px",s.style.height=n+"px",s.setAttribute("width",o*r),s.setAttribute("height",n*r),a.clearRect(0,0,o*r,n*r)
var h={position:i.position,rotation:i.rotation,scale:i.scale}
i.position=[0,0,0],i.rotation=0,i.scale=[1,1],i&&i.brush(a,!1)
var l=t("./shape/Image"),c=new l({id:e,style:{x:0,y:0,image:s}})
return null!=h.position&&(c.position=i.position=h.position),null!=h.rotation&&(c.rotation=i.rotation=h.rotation),null!=h.scale&&(c.scale=i.scale=h.scale),c},l.prototype._createShapeToImageProcessor=function(){if(window.G_vmlCanvasManager)return i
var t=this
return function(e,i,o,r){return t._shapeToImage(e,i,o,r,n.devicePixelRatio)}},l}),define("zrender/Storage",["require","./tool/util","./Group"],function(t){"use strict"
function e(t,e){return t.zlevel==e.zlevel?t.z==e.z?t.__renderidx-e.__renderidx:t.z-e.z:t.zlevel-e.zlevel}var i=t("./tool/util"),o=t("./Group"),n={hover:!1,normal:"down",update:!1},r=function(){this._elements={},this._hoverElements=[],this._roots=[],this._shapeList=[],this._shapeListOffset=0}
return r.prototype.iterShape=function(t,e){if(e||(e=n),e.hover)for(var i=0,o=this._hoverElements.length;o>i;i++){var r=this._hoverElements[i]
if(r.updateTransform(),t(r))return this}switch(e.update&&this.updateShapeList(),e.normal){case"down":for(var o=this._shapeList.length;o--;)if(t(this._shapeList[o]))return this
break
default:for(var i=0,o=this._shapeList.length;o>i;i++)if(t(this._shapeList[i]))return this}return this},r.prototype.getHoverShapes=function(t){for(var i=[],o=0,n=this._hoverElements.length;n>o;o++){i.push(this._hoverElements[o])
var r=this._hoverElements[o].hoverConnect
if(r){var s
r=r instanceof Array?r:[r]
for(var a=0,h=r.length;h>a;a++)s=r[a].id?r[a]:this.get(r[a]),s&&i.push(s)}}if(i.sort(e),t)for(var o=0,n=i.length;n>o;o++)i[o].updateTransform()
return i},r.prototype.getShapeList=function(t){return t&&this.updateShapeList(),this._shapeList},r.prototype.updateShapeList=function(){this._shapeListOffset=0
for(var t=0,i=this._roots.length;i>t;t++){var o=this._roots[t]
this._updateAndAddShape(o)}this._shapeList.length=this._shapeListOffset
for(var t=0,i=this._shapeList.length;i>t;t++)this._shapeList[t].__renderidx=t
this._shapeList.sort(e)},r.prototype._updateAndAddShape=function(t,e){if(!t.ignore)if(t.updateTransform(),"group"==t.type){t.clipShape&&(t.clipShape.parent=t,t.clipShape.updateTransform(),e?(e=e.slice(),e.push(t.clipShape)):e=[t.clipShape])
for(var i=0;i<t._children.length;i++){var o=t._children[i]
o.__dirty=t.__dirty||o.__dirty,this._updateAndAddShape(o,e)}t.__dirty=!1}else t.__clipShapes=e,this._shapeList[this._shapeListOffset++]=t},r.prototype.mod=function(t,e){var o=this._elements[t]
if(o&&(o.modSelf(),e))if(e.parent||e._storage||e.__clipShapes){var n={}
for(var r in e)"parent"!==r&&"_storage"!==r&&"__clipShapes"!==r&&e.hasOwnProperty(r)&&(n[r]=e[r])
i.merge(o,n,!0)}else i.merge(o,e,!0)
return this},r.prototype.drift=function(t,e,i){var o=this._elements[t]
return o&&(o.needTransform=!0,"horizontal"===o.draggable?i=0:"vertical"===o.draggable&&(e=0),(!o.ondrift||o.ondrift&&!o.ondrift(e,i))&&o.drift(e,i)),this},r.prototype.addHover=function(t){return t.updateNeedTransform(),this._hoverElements.push(t),this},r.prototype.delHover=function(){return this._hoverElements=[],this},r.prototype.hasHoverShape=function(){return this._hoverElements.length>0},r.prototype.addRoot=function(t){t instanceof o&&t.addChildrenToStorage(this),this.addToMap(t),this._roots.push(t)},r.prototype.delRoot=function(t){if(void 0===t){for(var e=0;e<this._roots.length;e++){var n=this._roots[e]
n instanceof o&&n.delChildrenFromStorage(this)}return this._elements={},this._hoverElements=[],this._roots=[],this._shapeList=[],void(this._shapeListOffset=0)}if(t instanceof Array)for(var e=0,r=t.length;r>e;e++)this.delRoot(t[e])
else{var s
s="string"==typeof t?this._elements[t]:t
var a=i.indexOf(this._roots,s)
a>=0&&(this.delFromMap(s.id),this._roots.splice(a,1),s instanceof o&&s.delChildrenFromStorage(this))}},r.prototype.addToMap=function(t){return t instanceof o&&(t._storage=this),t.modSelf(),this._elements[t.id]=t,this},r.prototype.get=function(t){return this._elements[t]},r.prototype.delFromMap=function(t){var e=this._elements[t]
return e&&(delete this._elements[t],e instanceof o&&(e._storage=null)),this},r.prototype.dispose=function(){this._elements=this._renderList=this._roots=this._hoverElements=null},r}),define("zrender/animation/Animation",["require","./Clip","../tool/color","../tool/util","../tool/event"],function(t){"use strict"
function e(t,e){return t[e]}function i(t,e,i){t[e]=i}function o(t,e,i){return(e-t)*i+t}function n(t,e,i,n,r){var s=t.length
if(1==r)for(var a=0;s>a;a++)n[a]=o(t[a],e[a],i)
else for(var h=t[0].length,a=0;s>a;a++)for(var l=0;h>l;l++)n[a][l]=o(t[a][l],e[a][l],i)}function r(t){switch(typeof t){case"undefined":case"string":return!1}return void 0!==t.length}function s(t,e,i,o,n,r,s,h,l){var c=t.length
if(1==l)for(var d=0;c>d;d++)h[d]=a(t[d],e[d],i[d],o[d],n,r,s)
else for(var u=t[0].length,d=0;c>d;d++)for(var p=0;u>p;p++)h[d][p]=a(t[d][p],e[d][p],i[d][p],o[d][p],n,r,s)}function a(t,e,i,o,n,r,s){var a=.5*(i-t),h=.5*(o-e)
return(2*(e-i)+a+h)*s+(-3*(e-i)-2*a-h)*r+a*n+e}function h(t){if(r(t)){var e=t.length
if(r(t[0])){for(var i=[],o=0;e>o;o++)i.push(g.call(t[o]))
return i}return g.call(t)}return t}function l(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}var c=t("./Clip"),d=t("../tool/color"),u=t("../tool/util"),p=t("../tool/event").Dispatcher,f=window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){setTimeout(t,16)},g=Array.prototype.slice,m=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time=0,p.call(this)}
m.prototype={add:function(t){this._clips.push(t)},remove:function(t){var e=u.indexOf(this._clips,t)
e>=0&&this._clips.splice(e,1)},_update:function(){for(var t=(new Date).getTime(),e=t-this._time,i=this._clips,o=i.length,n=[],r=[],s=0;o>s;s++){var a=i[s],h=a.step(t)
h&&(n.push(h),r.push(a))}for(var s=0;o>s;)i[s]._needsRemove?(i[s]=i[o-1],i.pop(),o--):s++
o=n.length
for(var s=0;o>s;s++)r[s].fire(n[s])
this._time=t,this.onframe(e),this.dispatch("frame",e),this.stage.update&&this.stage.update()},start:function(){function t(){e._running&&(e._update(),f(t))}var e=this
this._running=!0,this._time=(new Date).getTime(),f(t)},stop:function(){this._running=!1},clear:function(){this._clips=[]},animate:function(t,e){e=e||{}
var i=new _(t,e.loop,e.getter,e.setter)
return i.animation=this,i},constructor:m},u.merge(m.prototype,p.prototype,!0)
var _=function(t,o,n,r){this._tracks={},this._target=t,this._loop=o||!1,this._getter=n||e,this._setter=r||i,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]}
return _.prototype={when:function(t,e){for(var i in e)this._tracks[i]||(this._tracks[i]=[],0!==t&&this._tracks[i].push({time:0,value:h(this._getter(this._target,i))})),this._tracks[i].push({time:parseInt(t,10),value:e[i]})
return this},during:function(t){return this._onframeList.push(t),this},start:function(t){var e=this,i=this._setter,h=this._getter,u="spline"===t,p=function(){if(e._clipCount--,0===e._clipCount){e._tracks={}
for(var t=e._doneList.length,i=0;t>i;i++)e._doneList[i].call(e)}},f=function(f,g){var m=f.length
if(m){var _=f[0].value,y=r(_),v=!1,x=y&&r(_[0])?2:1
f.sort(function(t,e){return t.time-e.time})
var b
if(m){b=f[m-1].time
for(var T=[],S=[],z=0;m>z;z++){T.push(f[z].time/b)
var C=f[z].value
"string"==typeof C&&(C=d.toArray(C),0===C.length&&(C[0]=C[1]=C[2]=0,C[3]=1),v=!0),S.push(C)}var w,z,E,L,A,M,k,O=0,I=0
if(v)var P=[0,0,0,0]
var D=function(t,r){if(I>r){for(w=Math.min(O+1,m-1),z=w;z>=0&&!(T[z]<=r);z--);z=Math.min(z,m-2)}else{for(z=O;m>z&&!(T[z]>r);z++);z=Math.min(z-1,m-2)}O=z,I=r
var c=T[z+1]-T[z]
if(0!==c){if(E=(r-T[z])/c,u)if(A=S[z],L=S[0===z?z:z-1],M=S[z>m-2?m-1:z+1],k=S[z>m-3?m-1:z+2],y)s(L,A,M,k,E,E*E,E*E*E,h(t,g),x)
else{var d
v?(d=s(L,A,M,k,E,E*E,E*E*E,P,1),d=l(P)):d=a(L,A,M,k,E,E*E,E*E*E),i(t,g,d)}else if(y)n(S[z],S[z+1],E,h(t,g),x)
else{var d
v?(n(S[z],S[z+1],E,P,1),d=l(P)):d=o(S[z],S[z+1],E),i(t,g,d)}for(z=0;z<e._onframeList.length;z++)e._onframeList[z](t,r)}},R=new c({target:e._target,life:b,loop:e._loop,delay:e._delay,onframe:D,ondestroy:p})
t&&"spline"!==t&&(R.easing=t),e._clipList.push(R),e._clipCount++,e.animation.add(R)}}}
for(var g in this._tracks)f(this._tracks[g],g)
return this},stop:function(){for(var t=0;t<this._clipList.length;t++){var e=this._clipList[t]
this.animation.remove(e)}this._clipList=[]},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this}},m}),define("zrender/tool/vector",[],function(){var t="undefined"==typeof Float32Array?Array:Float32Array,e={create:function(e,i){var o=new t(2)
return o[0]=e||0,o[1]=i||0,o},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t},set:function(t,e,i){return t[0]=e,t[1]=i,t},add:function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t},scaleAndAdd:function(t,e,i,o){return t[0]=e[0]+i[0]*o,t[1]=e[1]+i[1]*o,t},sub:function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t},len:function(t){return Math.sqrt(this.lenSquare(t))},lenSquare:function(t){return t[0]*t[0]+t[1]*t[1]},mul:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},div:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t},normalize:function(t,i){var o=e.len(i)
return 0===o?(t[0]=0,t[1]=0):(t[0]=i[0]/o,t[1]=i[1]/o),t},distance:function(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))},distanceSquare:function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])},negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:function(t,e,i,o){return t[0]=e[0]+o*(i[0]-e[0]),t[1]=e[1]+o*(i[1]-e[1]),t},applyTransform:function(t,e,i){var o=e[0],n=e[1]
return t[0]=i[0]*o+i[2]*n+i[4],t[1]=i[1]*o+i[3]*n+i[5],t},min:function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t},max:function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t}}
return e.length=e.len,e.lengthSquare=e.lenSquare,e.dist=e.distance,e.distSquare=e.distanceSquare,e}),define("zrender/tool/matrix",[],function(){var t="undefined"==typeof Float32Array?Array:Float32Array,e={create:function(){var i=new t(6)
return e.identity(i),i},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},mul:function(t,e,i){return t[0]=e[0]*i[0]+e[2]*i[1],t[1]=e[1]*i[0]+e[3]*i[1],t[2]=e[0]*i[2]+e[2]*i[3],t[3]=e[1]*i[2]+e[3]*i[3],t[4]=e[0]*i[4]+e[2]*i[5]+e[4],t[5]=e[1]*i[4]+e[3]*i[5]+e[5],t},translate:function(t,e,i){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+i[0],t[5]=e[5]+i[1],t},rotate:function(t,e,i){var o=e[0],n=e[2],r=e[4],s=e[1],a=e[3],h=e[5],l=Math.sin(i),c=Math.cos(i)
return t[0]=o*c+s*l,t[1]=-o*l+s*c,t[2]=n*c+a*l,t[3]=-n*l+c*a,t[4]=c*r+l*h,t[5]=c*h-l*r,t},scale:function(t,e,i){var o=i[0],n=i[1]
return t[0]=e[0]*o,t[1]=e[1]*n,t[2]=e[2]*o,t[3]=e[3]*n,t[4]=e[4]*o,t[5]=e[5]*n,t},invert:function(t,e){var i=e[0],o=e[2],n=e[4],r=e[1],s=e[3],a=e[5],h=i*s-r*o
return h?(h=1/h,t[0]=s*h,t[1]=-r*h,t[2]=-o*h,t[3]=i*h,t[4]=(o*a-s*n)*h,t[5]=(r*n-i*a)*h,t):null},mulVector:function(t,e,i){var o=e[0],n=e[2],r=e[4],s=e[1],a=e[3],h=e[5]
return t[0]=i[0]*o+i[1]*n+r,t[1]=i[0]*s+i[1]*a+h,t}}
return e}),define("zrender/loadingEffect/Base",["require","../tool/util","../shape/Text","../shape/Rectangle"],function(t){function e(t){this.setOptions(t)}var i=t("../tool/util"),o=t("../shape/Text"),n=t("../shape/Rectangle"),r="Loading...",s="normal 16px Arial"
return e.prototype.createTextShape=function(t){return new o({highlightStyle:i.merge({x:this.canvasWidth/2,y:this.canvasHeight/2,text:r,textAlign:"center",textBaseline:"middle",textFont:s,color:"#333",brushType:"fill"},t,!0)})},e.prototype.createBackgroundShape=function(t){return new n({highlightStyle:{x:0,y:0,width:this.canvasWidth,height:this.canvasHeight,brushType:"fill",color:t}})},e.prototype.start=function(t){function e(e){t.storage.addHover(e)}function i(){t.refreshHover()}this.canvasWidth=t._width,this.canvasHeight=t._height,this.loadingTimer=this._start(e,i)},e.prototype._start=function(){return setInterval(function(){},1e4)},e.prototype.stop=function(){clearInterval(this.loadingTimer)},e.prototype.setOptions=function(t){this.options=t||{}},e.prototype.adjust=function(t,e){return t<=e[0]?t=e[0]:t>=e[1]&&(t=e[1]),t},e.prototype.getLocation=function(t,e,i){var o=null!=t.x?t.x:"center"
switch(o){case"center":o=Math.floor((this.canvasWidth-e)/2)
break
case"left":o=0
break
case"right":o=this.canvasWidth-e}var n=null!=t.y?t.y:"center"
switch(n){case"center":n=Math.floor((this.canvasHeight-i)/2)
break
case"top":n=0
break
case"bottom":n=this.canvasHeight-i}return{x:o,y:n,width:e,height:i}},e}),define("zrender/Layer",["require","./mixin/Transformable","./tool/util","./config"],function(t){function e(){return!1}function i(t,e,i){var o=document.createElement(e),n=i.getWidth(),r=i.getHeight()
return o.style.position="absolute",o.style.left=0,o.style.top=0,o.style.width=n+"px",o.style.height=r+"px",o.width=n*s.devicePixelRatio,o.height=r*s.devicePixelRatio,o.setAttribute("data-zr-dom-id",t),o}var o=t("./mixin/Transformable"),n=t("./tool/util"),r=window.G_vmlCanvasManager,s=t("./config"),a=function(t,n){this.id=t,this.dom=i(t,"canvas",n),this.dom.onselectstart=e,this.dom.style["-webkit-user-select"]="none",this.dom.style["user-select"]="none",this.dom.style["-webkit-touch-callout"]="none",this.dom.style["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r&&r.initElement(this.dom),this.domBack=null,this.ctxBack=null,this.painter=n,this.unusedCount=0,this.config=null,this.dirty=!0,this.elCount=0,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.zoomable=!1,this.panable=!1,this.maxZoom=1/0,this.minZoom=0,o.call(this)}
return a.prototype.initContext=function(){this.ctx=this.dom.getContext("2d")
var t=s.devicePixelRatio
1!=t&&this.ctx.scale(t,t)},a.prototype.createBackBuffer=function(){if(!r){this.domBack=i("back-"+this.id,"canvas",this.painter),this.ctxBack=this.domBack.getContext("2d")
var t=s.devicePixelRatio
1!=t&&this.ctxBack.scale(t,t)}},a.prototype.resize=function(t,e){var i=s.devicePixelRatio
this.dom.style.width=t+"px",this.dom.style.height=e+"px",this.dom.setAttribute("width",t*i),this.dom.setAttribute("height",e*i),1!=i&&this.ctx.scale(i,i),this.domBack&&(this.domBack.setAttribute("width",t*i),this.domBack.setAttribute("height",e*i),1!=i&&this.ctxBack.scale(i,i))},a.prototype.clear=function(){var t=this.dom,e=this.ctx,i=t.width,o=t.height,n=this.clearColor&&!r,a=this.motionBlur&&!r,h=this.lastFrameAlpha,l=s.devicePixelRatio
if(a&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(t,0,0,i/l,o/l)),e.clearRect(0,0,i/l,o/l),n&&(e.save(),e.fillStyle=this.clearColor,e.fillRect(0,0,i/l,o/l),e.restore()),a){var c=this.domBack
e.save(),e.globalAlpha=h,e.drawImage(c,0,0,i/l,o/l),e.restore()}},n.merge(a.prototype,o.prototype),a}),define("zrender/shape/Text",["require","../tool/area","./Base","../tool/util"],function(t){var e=t("../tool/area"),i=t("./Base"),o=function(t){i.call(this,t)}
return o.prototype={type:"text",brush:function(t,i){var o=this.style
if(i&&(o=this.getHighlightStyle(o,this.highlightStyle||{})),void 0!==o.text&&o.text!==!1){t.save(),this.doClip(t),this.setContext(t,o),this.setTransform(t),o.textFont&&(t.font=o.textFont),t.textAlign=o.textAlign||"start",t.textBaseline=o.textBaseline||"middle"
var n,r=(o.text+"").split("\n"),s=e.getTextHeight("国",o.textFont),a=this.getRect(o),h=o.x
n="top"==o.textBaseline?a.y:"bottom"==o.textBaseline?a.y+s:a.y+s/2
for(var l=0,c=r.length;c>l;l++){if(o.maxWidth)switch(o.brushType){case"fill":t.fillText(r[l],h,n,o.maxWidth)
break
case"stroke":t.strokeText(r[l],h,n,o.maxWidth)
break
case"both":t.fillText(r[l],h,n,o.maxWidth),t.strokeText(r[l],h,n,o.maxWidth)
break
default:t.fillText(r[l],h,n,o.maxWidth)}else switch(o.brushType){case"fill":t.fillText(r[l],h,n)
break
case"stroke":t.strokeText(r[l],h,n)
break
case"both":t.fillText(r[l],h,n),t.strokeText(r[l],h,n)
break
default:t.fillText(r[l],h,n)}n+=s}t.restore()}},getRect:function(t){if(t.__rect)return t.__rect
var i=e.getTextWidth(t.text,t.textFont),o=e.getTextHeight(t.text,t.textFont),n=t.x
"end"==t.textAlign||"right"==t.textAlign?n-=i:"center"==t.textAlign&&(n-=i/2)
var r
return r="top"==t.textBaseline?t.y:"bottom"==t.textBaseline?t.y-o:t.y-o/2,t.__rect={x:n,y:r,width:i,height:o},t.__rect}},t("../tool/util").inherits(o,i),o}),define("zrender/shape/Rectangle",["require","./Base","../tool/util"],function(t){var e=t("./Base"),i=function(t){e.call(this,t)}
return i.prototype={type:"rectangle",_buildRadiusPath:function(t,e){var i,o,n,r,s=e.x,a=e.y,h=e.width,l=e.height,c=e.radius
"number"==typeof c?i=o=n=r=c:c instanceof Array?1===c.length?i=o=n=r=c[0]:2===c.length?(i=n=c[0],o=r=c[1]):3===c.length?(i=c[0],o=r=c[1],n=c[2]):(i=c[0],o=c[1],n=c[2],r=c[3]):i=o=n=r=0
var d
i+o>h&&(d=i+o,i*=h/d,o*=h/d),n+r>h&&(d=n+r,n*=h/d,r*=h/d),o+n>l&&(d=o+n,o*=l/d,n*=l/d),i+r>l&&(d=i+r,i*=l/d,r*=l/d),t.moveTo(s+i,a),t.lineTo(s+h-o,a),0!==o&&t.quadraticCurveTo(s+h,a,s+h,a+o),t.lineTo(s+h,a+l-n),0!==n&&t.quadraticCurveTo(s+h,a+l,s+h-n,a+l),t.lineTo(s+r,a+l),0!==r&&t.quadraticCurveTo(s,a+l,s,a+l-r),t.lineTo(s,a+i),0!==i&&t.quadraticCurveTo(s,a,s+i,a)},buildPath:function(t,e){e.radius?this._buildRadiusPath(t,e):(t.moveTo(e.x,e.y),t.lineTo(e.x+e.width,e.y),t.lineTo(e.x+e.width,e.y+e.height),t.lineTo(e.x,e.y+e.height),t.lineTo(e.x,e.y)),t.closePath()},getRect:function(t){if(t.__rect)return t.__rect
var e
return e="stroke"==t.brushType||"fill"==t.brushType?t.lineWidth||1:0,t.__rect={x:Math.round(t.x-e/2),y:Math.round(t.y-e/2),width:t.width+e,height:t.height+e},t.__rect}},t("../tool/util").inherits(i,e),i}),define("zrender/tool/area",["require","./util","./curve"],function(t){"use strict"
function e(t){return t%=O,0>t&&(t+=O),t}function i(t,e,i,r){if(!e||!t)return!1
var s=t.type
z=z||C.getContext()
var a=o(t,e,i,r)
if(void 0!==a)return a
if(t.buildPath&&z.isPointInPath)return n(t,z,e,i,r)
switch(s){case"ellipse":return!0
case"trochoid":var h="out"==e.location?e.r1+e.r2+e.d:e.r1-e.r2+e.d
return p(e,i,r,h)
case"rose":return p(e,i,r,e.maxr)
default:return!1}}function o(t,e,i,o){var n=t.type
switch(n){case"bezier-curve":return void 0===e.cpX2?h(e.xStart,e.yStart,e.cpX1,e.cpY1,e.xEnd,e.yEnd,e.lineWidth,i,o):a(e.xStart,e.yStart,e.cpX1,e.cpY1,e.cpX2,e.cpY2,e.xEnd,e.yEnd,e.lineWidth,i,o)
case"line":return s(e.xStart,e.yStart,e.xEnd,e.yEnd,e.lineWidth,i,o)
case"polyline":return c(e.pointList,e.lineWidth,i,o)
case"ring":return d(e.x,e.y,e.r0,e.r,i,o)
case"circle":return p(e.x,e.y,e.r,i,o)
case"sector":var r=e.startAngle*Math.PI/180,l=e.endAngle*Math.PI/180
return e.clockWise||(r=-r,l=-l),f(e.x,e.y,e.r0,e.r,r,l,!e.clockWise,i,o)
case"path":return e.pathArray&&b(e.pathArray,Math.max(e.lineWidth,5),e.brushType,i,o)
case"polygon":case"star":case"isogon":return g(e.pointList,i,o)
case"text":var m=e.__rect||t.getRect(e)
return u(m.x,m.y,m.width,m.height,i,o)
case"rectangle":case"image":return u(e.x,e.y,e.width,e.height,i,o)}}function n(t,e,i,o,n){return e.beginPath(),t.buildPath(e,i),e.closePath(),e.isPointInPath(o,n)}function r(t,e,o,n){return!i(t,e,o,n)}function s(t,e,i,o,n,r,s){if(0===n)return!1
var a=Math.max(n,5),h=0,l=t
if(s>e+a&&s>o+a||e-a>s&&o-a>s||r>t+a&&r>i+a||t-a>r&&i-a>r)return!1
if(t===i)return Math.abs(r-t)<=a/2
h=(e-o)/(t-i),l=(t*o-i*e)/(t-i)
var c=h*r-s+l,d=c*c/(h*h+1)
return a/2*a/2>=d}function a(t,e,i,o,n,r,s,a,h,l,c){if(0===h)return!1
var d=Math.max(h,5)
if(c>e+d&&c>o+d&&c>r+d&&c>a+d||e-d>c&&o-d>c&&r-d>c&&a-d>c||l>t+d&&l>i+d&&l>n+d&&l>s+d||t-d>l&&i-d>l&&n-d>l&&s-d>l)return!1
var u=w.cubicProjectPoint(t,e,i,o,n,r,s,a,l,c,null)
return d/2>=u}function h(t,e,i,o,n,r,s,a,h){if(0===s)return!1
var l=Math.max(s,5)
if(h>e+l&&h>o+l&&h>r+l||e-l>h&&o-l>h&&r-l>h||a>t+l&&a>i+l&&a>n+l||t-l>a&&i-l>a&&n-l>a)return!1
var c=w.quadraticProjectPoint(t,e,i,o,n,r,a,h,null)
return l/2>=c}function l(t,i,o,n,r,s,a,h,l){if(0===a)return!1
var c=Math.max(a,5)
h-=t,l-=i
var d=Math.sqrt(h*h+l*l)
if(d-c>o||o>d+c)return!1
if(Math.abs(n-r)>=O)return!0
if(s){var u=n
n=e(r),r=e(u)}else n=e(n),r=e(r)
n>r&&(r+=O)
var p=Math.atan2(l,h)
return 0>p&&(p+=O),p>=n&&r>=p||p+O>=n&&r>=p+O}function c(t,e,i,o){for(var e=Math.max(e,10),n=0,r=t.length-1;r>n;n++){var a=t[n][0],h=t[n][1],l=t[n+1][0],c=t[n+1][1]
if(s(a,h,l,c,e,i,o))return!0}return!1}function d(t,e,i,o,n,r){var s=(n-t)*(n-t)+(r-e)*(r-e)
return o*o>s&&s>i*i}function u(t,e,i,o,n,r){return n>=t&&t+i>=n&&r>=e&&e+o>=r}function p(t,e,i,o,n){return i*i>(o-t)*(o-t)+(n-e)*(n-e)}function f(t,e,i,o,n,r,s,a,h){return l(t,e,(i+o)/2,n,r,s,o-i,a,h)}function g(t,e,i){for(var o=t.length,n=0,r=0,s=o-1;o>r;r++){var a=t[s][0],h=t[s][1],l=t[r][0],c=t[r][1]
n+=m(a,h,l,c,e,i),s=r}return 0!==n}function m(t,e,i,o,n,r){if(r>e&&r>o||e>r&&o>r)return 0
if(o==e)return 0
var s=e>o?1:-1,a=(r-e)/(o-e),h=a*(i-t)+t
return h>n?s:0}function _(){var t=P[0]
P[0]=P[1],P[1]=t}function y(t,e,i,o,n,r,s,a,h,l){if(l>e&&l>o&&l>r&&l>a||e>l&&o>l&&r>l&&a>l)return 0
var c=w.cubicRootAt(e,o,r,a,l,I)
if(0===c)return 0
for(var d,u,p=0,f=-1,g=0;c>g;g++){var m=I[g],y=w.cubicAt(t,i,n,s,m)
h>y||(0>f&&(f=w.cubicExtrema(e,o,r,a,P),P[1]<P[0]&&f>1&&_(),d=w.cubicAt(e,o,r,a,P[0]),f>1&&(u=w.cubicAt(e,o,r,a,P[1]))),p+=2==f?m<P[0]?e>d?1:-1:m<P[1]?d>u?1:-1:u>a?1:-1:m<P[0]?e>d?1:-1:d>a?1:-1)}return p}function v(t,e,i,o,n,r,s,a){if(a>e&&a>o&&a>r||e>a&&o>a&&r>a)return 0
var h=w.quadraticRootAt(e,o,r,a,I)
if(0===h)return 0
var l=w.quadraticExtremum(e,o,r)
if(l>=0&&1>=l){for(var c=0,d=w.quadraticAt(e,o,r,l),u=0;h>u;u++){var p=w.quadraticAt(t,i,n,I[u])
p>s||(c+=I[u]<l?e>d?1:-1:d>r?1:-1)}return c}var p=w.quadraticAt(t,i,n,I[0])
return p>s?0:e>r?1:-1}function x(t,i,o,n,r,s,a,h){if(h-=i,h>o||-o>h)return 0
var l=Math.sqrt(o*o-h*h)
if(I[0]=-l,I[1]=l,Math.abs(n-r)>=O){n=0,r=O
var c=s?1:-1
return a>=I[0]+t&&a<=I[1]+t?c:0}if(s){var l=n
n=e(r),r=e(l)}else n=e(n),r=e(r)
n>r&&(r+=O)
for(var d=0,u=0;2>u;u++){var p=I[u]
if(p+t>a){var f=Math.atan2(h,p),c=s?1:-1
0>f&&(f=O+f),(f>=n&&r>=f||f+O>=n&&r>=f+O)&&(f>Math.PI/2&&f<1.5*Math.PI&&(c=-c),d+=c)}}return d}function b(t,e,i,o,n){var r=0,c=0,d=0,u=0,p=0,f=!0,g=!0
i=i||"fill"
for(var _="stroke"===i||"both"===i,b="fill"===i||"both"===i,T=0;T<t.length;T++){var S=t[T],z=S.points
if(f||"M"===S.command){if(T>0&&(b&&(r+=m(c,d,u,p,o,n)),0!==r))return!0
u=z[z.length-2],p=z[z.length-1],f=!1,g&&"A"!==S.command&&(g=!1,c=u,d=p)}switch(S.command){case"M":c=z[0],d=z[1]
break
case"L":if(_&&s(c,d,z[0],z[1],e,o,n))return!0
b&&(r+=m(c,d,z[0],z[1],o,n)),c=z[0],d=z[1]
break
case"C":if(_&&a(c,d,z[0],z[1],z[2],z[3],z[4],z[5],e,o,n))return!0
b&&(r+=y(c,d,z[0],z[1],z[2],z[3],z[4],z[5],o,n)),c=z[4],d=z[5]
break
case"Q":if(_&&h(c,d,z[0],z[1],z[2],z[3],e,o,n))return!0
b&&(r+=v(c,d,z[0],z[1],z[2],z[3],o,n)),c=z[2],d=z[3]
break
case"A":var C=z[0],w=z[1],E=z[2],L=z[3],A=z[4],M=z[5],k=Math.cos(A)*E+C,O=Math.sin(A)*L+w
g?(g=!1,u=k,p=O):r+=m(c,d,k,O)
var I=(o-C)*L/E+C
if(_&&l(C,w,L,A,A+M,1-z[7],e,I,n))return!0
b&&(r+=x(C,w,L,A,A+M,1-z[7],I,n)),c=Math.cos(A+M)*E+C,d=Math.sin(A+M)*L+w
break
case"z":if(_&&s(c,d,u,p,e,o,n))return!0
f=!0}}return b&&(r+=m(c,d,u,p,o,n)),0!==r}function T(t,e){var i=t+":"+e
if(E[i])return E[i]
z=z||C.getContext(),z.save(),e&&(z.font=e),t=(t+"").split("\n")
for(var o=0,n=0,r=t.length;r>n;n++)o=Math.max(z.measureText(t[n]).width,o)
return z.restore(),E[i]=o,++A>k&&(A=0,E={}),o}function S(t,e){var i=t+":"+e
if(L[i])return L[i]
z=z||C.getContext(),z.save(),e&&(z.font=e),t=(t+"").split("\n")
var o=(z.measureText("国").width+2)*t.length
return z.restore(),L[i]=o,++M>k&&(M=0,L={}),o}var z,C=t("./util"),w=t("./curve"),E={},L={},A=0,M=0,k=5e3,O=2*Math.PI,I=[-1,-1,-1],P=[-1,-1]
return{isInside:i,isOutside:r,getTextWidth:T,getTextHeight:S,isInsidePath:b,isInsidePolygon:g,isInsideSector:f,isInsideCircle:p,isInsideLine:s,isInsideRect:u,isInsidePolyline:c,isInsideCubicStroke:a,isInsideQuadraticStroke:h}}),define("zrender/shape/Base",["require","../tool/matrix","../tool/guid","../tool/util","../tool/log","../mixin/Transformable","../mixin/Eventful","../tool/area","../tool/color"],function(t){function e(e,o,n,r,s,a,h){s&&(e.font=s),e.textAlign=a,e.textBaseline=h
var l=i(o,n,r,s,a,h)
o=(o+"").split("\n")
var c=t("../tool/area").getTextHeight("国",s)
switch(h){case"top":r=l.y
break
case"bottom":r=l.y+c
break
default:r=l.y+c/2}for(var d=0,u=o.length;u>d;d++)e.fillText(o[d],n,r),r+=c}function i(e,i,o,n,r,s){var a=t("../tool/area"),h=a.getTextWidth(e,n),l=a.getTextHeight("国",n)
switch(e=(e+"").split("\n"),r){case"end":case"right":i-=h
break
case"center":i-=h/2}switch(s){case"top":break
case"bottom":o-=l*e.length
break
default:o-=l*e.length/2}return{x:i,y:o,width:h,height:l*e.length}}var o=window.G_vmlCanvasManager,n=t("../tool/matrix"),r=t("../tool/guid"),s=t("../tool/util"),a=t("../tool/log"),h=t("../mixin/Transformable"),l=t("../mixin/Eventful"),c=function(t){t=t||{},this.id=t.id||r()
for(var e in t)this[e]=t[e]
this.style=this.style||{},this.highlightStyle=this.highlightStyle||null,this.parent=null,this.__dirty=!0,this.__clipShapes=[],h.call(this),l.call(this)}
c.prototype.invisible=!1,c.prototype.ignore=!1,c.prototype.zlevel=0,c.prototype.draggable=!1,c.prototype.clickable=!1,c.prototype.hoverable=!0,c.prototype.z=0,c.prototype.brush=function(t,e){var i=this.beforeBrush(t,e)
switch(t.beginPath(),this.buildPath(t,i),i.brushType){case"both":t.fill()
case"stroke":i.lineWidth>0&&t.stroke()
break
default:t.fill()}this.drawText(t,i,this.style),this.afterBrush(t)},c.prototype.beforeBrush=function(t,e){var i=this.style
return this.brushTypeOnly&&(i.brushType=this.brushTypeOnly),e&&(i=this.getHighlightStyle(i,this.highlightStyle||{},this.brushTypeOnly)),"stroke"==this.brushTypeOnly&&(i.strokeColor=i.strokeColor||i.color),t.save(),this.doClip(t),this.setContext(t,i),this.setTransform(t),i},c.prototype.afterBrush=function(t){t.restore()}
var d=[["color","fillStyle"],["strokeColor","strokeStyle"],["opacity","globalAlpha"],["lineCap","lineCap"],["lineJoin","lineJoin"],["miterLimit","miterLimit"],["lineWidth","lineWidth"],["shadowBlur","shadowBlur"],["shadowColor","shadowColor"],["shadowOffsetX","shadowOffsetX"],["shadowOffsetY","shadowOffsetY"]]
c.prototype.setContext=function(t,e){for(var i=0,o=d.length;o>i;i++){var n=d[i][0],r=e[n],s=d[i][1]
void 0!==r&&(t[s]=r)}}
var u=n.create()
return c.prototype.doClip=function(t){if(this.__clipShapes&&!o)for(var e=0;e<this.__clipShapes.length;e++){var i=this.__clipShapes[e]
if(i.needTransform){var r=i.transform
n.invert(u,r),t.transform(r[0],r[1],r[2],r[3],r[4],r[5])}if(t.beginPath(),i.buildPath(t,i.style),t.clip(),i.needTransform){var r=u
t.transform(r[0],r[1],r[2],r[3],r[4],r[5])}}},c.prototype.getHighlightStyle=function(e,i,o){var n={}
for(var r in e)n[r]=e[r]
var s=t("../tool/color"),a=s.getHighlightColor()
"stroke"!=e.brushType?(n.strokeColor=a,n.lineWidth=(e.lineWidth||1)+this.getHighlightZoom(),n.brushType="both"):"stroke"!=o?(n.strokeColor=a,n.lineWidth=(e.lineWidth||1)+this.getHighlightZoom()):n.strokeColor=i.strokeColor||s.mix(e.strokeColor,s.toRGB(a))
for(var r in i)void 0!==i[r]&&(n[r]=i[r])
return n},c.prototype.getHighlightZoom=function(){return"text"!=this.type?6:2},c.prototype.drift=function(t,e){this.position[0]+=t,this.position[1]+=e},c.prototype.getTansform=function(){var t=[]
return function(e,i){var o=[e,i]
return this.needTransform&&this.transform&&(n.invert(t,this.transform),n.mulVector(o,t,[e,i,1]),e==o[0]&&i==o[1]&&this.updateNeedTransform()),o}}(),c.prototype.buildPath=function(t,e){a("buildPath not implemented in "+this.type)},c.prototype.getRect=function(t){a("getRect not implemented in "+this.type)},c.prototype.isCover=function(e,i){var o=this.getTansform(e,i)
e=o[0],i=o[1]
var n=this.style.__rect
return n||(n=this.style.__rect=this.getRect(this.style)),e>=n.x&&e<=n.x+n.width&&i>=n.y&&i<=n.y+n.height?t("../tool/area").isInside(this,this.style,e,i):!1},c.prototype.drawText=function(t,i,o){if(void 0!==i.text&&i.text!==!1){var n=i.textColor||i.color||i.strokeColor
t.fillStyle=n
var r,s,a,h,l=10,c=i.textPosition||this.textPosition||"top"
switch(c){case"inside":case"top":case"bottom":case"left":case"right":if(this.getRect){var d=(o||i).__rect||this.getRect(o||i)
switch(c){case"inside":a=d.x+d.width/2,h=d.y+d.height/2,r="center",s="middle","stroke"!=i.brushType&&n==i.color&&(t.fillStyle="#fff")
break
case"left":a=d.x-l,h=d.y+d.height/2,r="end",s="middle"
break
case"right":a=d.x+d.width+l,h=d.y+d.height/2,r="start",s="middle"
break
case"top":a=d.x+d.width/2,h=d.y-l,r="center",s="bottom"
break
case"bottom":a=d.x+d.width/2,h=d.y+d.height+l,r="center",s="top"}}break
case"start":case"end":var u=i.pointList||[[i.xStart||0,i.yStart||0],[i.xEnd||0,i.yEnd||0]],p=u.length
if(2>p)return
var f,g,m,_
switch(c){case"start":f=u[1][0],g=u[0][0],m=u[1][1],_=u[0][1]
break
case"end":f=u[p-2][0],g=u[p-1][0],m=u[p-2][1],_=u[p-1][1]}a=g,h=_
var y=Math.atan((m-_)/(g-f))/Math.PI*180
0>g-f?y+=180:0>m-_&&(y+=360),l=5,y>=30&&150>=y?(r="center",s="bottom",h-=l):y>150&&210>y?(r="right",s="middle",a-=l):y>=210&&330>=y?(r="center",s="top",h+=l):(r="left",s="middle",a+=l)
break
case"specific":a=i.textX||0,h=i.textY||0,r="start",s="middle"}null!=a&&null!=h&&e(t,i.text,a,h,i.textFont,i.textAlign||r,i.textBaseline||s)}},c.prototype.modSelf=function(){this.__dirty=!0,this.style&&(this.style.__rect=null),this.highlightStyle&&(this.highlightStyle.__rect=null)},c.prototype.isSilent=function(){return!(this.hoverable||this.draggable||this.clickable||this.onmousemove||this.onmouseover||this.onmouseout||this.onmousedown||this.onmouseup||this.onclick||this.ondragenter||this.ondragover||this.ondragleave||this.ondrop)},s.merge(c.prototype,h.prototype,!0),s.merge(c.prototype,l.prototype,!0),c}),define("zrender/tool/curve",["require","./vector"],function(t){function e(t){return t>-g&&g>t}function i(t){return t>g||-g>t}function o(t,e,i,o,n){var r=1-n
return r*r*(r*t+3*n*e)+n*n*(n*o+3*r*i)}function n(t,e,i,o,n){var r=1-n
return 3*(((e-t)*r+2*(i-e)*n)*r+(o-i)*n*n)}function r(t,i,o,n,r,s){var a=n+3*(i-o)-t,h=3*(o-2*i+t),l=3*(i-t),c=t-r,d=h*h-3*a*l,u=h*l-9*a*c,p=l*l-3*h*c,f=0
if(e(d)&&e(u))if(e(h))s[0]=0
else{var g=-l/h
g>=0&&1>=g&&(s[f++]=g)}else{var y=u*u-4*d*p
if(e(y)){var v=u/d,g=-h/a+v,x=-v/2
g>=0&&1>=g&&(s[f++]=g),x>=0&&1>=x&&(s[f++]=x)}else if(y>0){var b=Math.sqrt(y),T=d*h+1.5*a*(-u+b),S=d*h+1.5*a*(-u-b)
T=0>T?-Math.pow(-T,_):Math.pow(T,_),S=0>S?-Math.pow(-S,_):Math.pow(S,_)
var g=(-h-(T+S))/(3*a)
g>=0&&1>=g&&(s[f++]=g)}else{var z=(2*d*h-3*a*u)/(2*Math.sqrt(d*d*d)),C=Math.acos(z)/3,w=Math.sqrt(d),E=Math.cos(C),g=(-h-2*w*E)/(3*a),x=(-h+w*(E+m*Math.sin(C)))/(3*a),L=(-h+w*(E-m*Math.sin(C)))/(3*a)
g>=0&&1>=g&&(s[f++]=g),x>=0&&1>=x&&(s[f++]=x),L>=0&&1>=L&&(s[f++]=L)}}return f}function s(t,o,n,r,s){var a=6*n-12*o+6*t,h=9*o+3*r-3*t-9*n,l=3*o-3*t,c=0
if(e(h)){if(i(a)){var d=-l/a
d>=0&&1>=d&&(s[c++]=d)}}else{var u=a*a-4*h*l
if(e(u))s[0]=-a/(2*h)
else if(u>0){var p=Math.sqrt(u),d=(-a+p)/(2*h),f=(-a-p)/(2*h)
d>=0&&1>=d&&(s[c++]=d),f>=0&&1>=f&&(s[c++]=f)}}return c}function a(t,e,i,o,n,r){var s=(e-t)*n+t,a=(i-e)*n+e,h=(o-i)*n+i,l=(a-s)*n+s,c=(h-a)*n+a,d=(c-l)*n+l
r[0]=t,r[1]=s,r[2]=l,r[3]=d,r[4]=d,r[5]=c,r[6]=h,r[7]=o}function h(t,e,i,n,r,s,a,h,l,c,d){var u,p=.005,m=1/0
y[0]=l,y[1]=c
for(var _=0;1>_;_+=.05){v[0]=o(t,i,r,a,_),v[1]=o(e,n,s,h,_)
var b=f.distSquare(y,v)
m>b&&(u=_,m=b)}m=1/0
for(var T=0;32>T&&!(g>p);T++){var S=u-p,z=u+p
v[0]=o(t,i,r,a,S),v[1]=o(e,n,s,h,S)
var b=f.distSquare(v,y)
if(S>=0&&m>b)u=S,m=b
else{x[0]=o(t,i,r,a,z),x[1]=o(e,n,s,h,z)
var C=f.distSquare(x,y)
1>=z&&m>C?(u=z,m=C):p*=.5}}return d&&(d[0]=o(t,i,r,a,u),d[1]=o(e,n,s,h,u)),Math.sqrt(m)}function l(t,e,i,o){var n=1-o
return n*(n*t+2*o*e)+o*o*i}function c(t,e,i,o){return 2*((1-o)*(e-t)+o*(i-e))}function d(t,o,n,r,s){var a=t-2*o+n,h=2*(o-t),l=t-r,c=0
if(e(a)){if(i(h)){var d=-l/h
d>=0&&1>=d&&(s[c++]=d)}}else{var u=h*h-4*a*l
if(e(u)){var d=-h/(2*a)
d>=0&&1>=d&&(s[c++]=d)}else if(u>0){var p=Math.sqrt(u),d=(-h+p)/(2*a),f=(-h-p)/(2*a)
d>=0&&1>=d&&(s[c++]=d),f>=0&&1>=f&&(s[c++]=f)}}return c}function u(t,e,i){var o=t+i-2*e
return 0===o?.5:(t-e)/o}function p(t,e,i,o,n,r,s,a,h){var c,d=.005,u=1/0
y[0]=s,y[1]=a
for(var p=0;1>p;p+=.05){v[0]=l(t,i,n,p),v[1]=l(e,o,r,p)
var m=f.distSquare(y,v)
u>m&&(c=p,u=m)}u=1/0
for(var _=0;32>_&&!(g>d);_++){var b=c-d,T=c+d
v[0]=l(t,i,n,b),v[1]=l(e,o,r,b)
var m=f.distSquare(v,y)
if(b>=0&&u>m)c=b,u=m
else{x[0]=l(t,i,n,T),x[1]=l(e,o,r,T)
var S=f.distSquare(x,y)
1>=T&&u>S?(c=T,u=S):d*=.5}}return h&&(h[0]=l(t,i,n,c),h[1]=l(e,o,r,c)),Math.sqrt(u)}var f=t("./vector"),g=1e-4,m=Math.sqrt(3),_=1/3,y=f.create(),v=f.create(),x=f.create()
return{cubicAt:o,cubicDerivativeAt:n,cubicRootAt:r,cubicExtrema:s,cubicSubdivide:a,cubicProjectPoint:h,quadraticAt:l,quadraticDerivativeAt:c,quadraticRootAt:d,quadraticExtremum:u,quadraticProjectPoint:p}}),define("zrender/mixin/Transformable",["require","../tool/matrix","../tool/vector"],function(t){"use strict"
function e(t){return t>-s&&s>t}function i(t){return t>s||-s>t}var o=t("../tool/matrix"),n=t("../tool/vector"),r=[0,0],s=5e-5,a=function(){this.position||(this.position=[0,0]),void 0===this.rotation&&(this.rotation=[0,0,0]),this.scale||(this.scale=[1,1,0,0]),this.needLocalTransform=!1,this.needTransform=!1}
return a.prototype={constructor:a,updateNeedTransform:function(){this.needLocalTransform=i(this.rotation[0])||i(this.position[0])||i(this.position[1])||i(this.scale[0]-1)||i(this.scale[1]-1)},updateTransform:function(){if(this.updateNeedTransform(),this.parent?this.needTransform=this.needLocalTransform||this.parent.needTransform:this.needTransform=this.needLocalTransform,this.needTransform){var t=this.transform||o.create()
if(o.identity(t),this.needLocalTransform){if(i(this.scale[0])||i(this.scale[1])){r[0]=-this.scale[2]||0,r[1]=-this.scale[3]||0
var e=i(r[0])||i(r[1])
e&&o.translate(t,t,r),o.scale(t,t,this.scale),e&&(r[0]=-r[0],r[1]=-r[1],o.translate(t,t,r))}if(this.rotation instanceof Array){if(0!==this.rotation[0]){r[0]=-this.rotation[1]||0,r[1]=-this.rotation[2]||0
var e=i(r[0])||i(r[1])
e&&o.translate(t,t,r),o.rotate(t,t,this.rotation[0]),e&&(r[0]=-r[0],r[1]=-r[1],o.translate(t,t,r))}}else 0!==this.rotation&&o.rotate(t,t,this.rotation);(i(this.position[0])||i(this.position[1]))&&o.translate(t,t,this.position)}this.transform=t,this.parent&&this.parent.needTransform&&(this.needLocalTransform?o.mul(this.transform,this.parent.transform,this.transform):o.copy(this.transform,this.parent.transform))}},setTransform:function(t){if(this.needTransform){var e=this.transform
t.transform(e[0],e[1],e[2],e[3],e[4],e[5])}},lookAt:function(){var t=n.create()
return function(i){this.transform||(this.transform=o.create())
var r=this.transform
n.sub(t,i,this.position),e(t[0])&&e(t[1])||(n.normalize(t,t),r[2]=t[0]*this.scale[1],r[3]=t[1]*this.scale[1],r[0]=t[1]*this.scale[0],r[1]=-t[0]*this.scale[0],r[4]=this.position[0],r[5]=this.position[1],this.decomposeTransform())}}(),decomposeTransform:function(){if(this.transform){var t=this.transform,e=t[0]*t[0]+t[1]*t[1],o=this.position,n=this.scale,r=this.rotation
i(e-1)&&(e=Math.sqrt(e))
var s=t[2]*t[2]+t[3]*t[3]
i(s-1)&&(s=Math.sqrt(s)),o[0]=t[4],o[1]=t[5],n[0]=e,n[1]=s,n[2]=n[3]=0,r[0]=Math.atan2(-t[1]/s,t[0]/e),r[1]=r[2]=0}}},a}),define("zrender/Group",["require","./tool/guid","./tool/util","./mixin/Transformable","./mixin/Eventful"],function(t){var e=t("./tool/guid"),i=t("./tool/util"),o=t("./mixin/Transformable"),n=t("./mixin/Eventful"),r=function(t){t=t||{},this.id=t.id||e()
for(var i in t)this[i]=t[i]
this.type="group",this.clipShape=null,this._children=[],this._storage=null,this.__dirty=!0,o.call(this),n.call(this)}
return r.prototype.ignore=!1,r.prototype.children=function(){return this._children.slice()},r.prototype.childAt=function(t){return this._children[t]},r.prototype.addChild=function(t){t!=this&&t.parent!=this&&(t.parent&&t.parent.removeChild(t),this._children.push(t),t.parent=this,this._storage&&this._storage!==t._storage&&(this._storage.addToMap(t),t instanceof r&&t.addChildrenToStorage(this._storage)))},r.prototype.removeChild=function(t){var e=i.indexOf(this._children,t)
this._children.splice(e,1),t.parent=null,this._storage&&(this._storage.delFromMap(t.id),t instanceof r&&t.delChildrenFromStorage(this._storage))},r.prototype.clearChildren=function(){for(var t=0;t<this._children.length;t++){var e=this._children[t]
this._storage&&(this._storage.delFromMap(e.id),e instanceof r&&e.delChildrenFromStorage(this._storage))}this._children.length=0},r.prototype.eachChild=function(t,e){for(var i=!!e,o=0;o<this._children.length;o++){var n=this._children[o]
i?t.call(e,n):t(n)}},r.prototype.traverse=function(t,e){for(var i=!!e,o=0;o<this._children.length;o++){var n=this._children[o]
i?t.call(e,n):t(n),"group"===n.type&&n.traverse(t,e)}},r.prototype.addChildrenToStorage=function(t){for(var e=0;e<this._children.length;e++){var i=this._children[e]
t.addToMap(i),i instanceof r&&i.addChildrenToStorage(t)}},r.prototype.delChildrenFromStorage=function(t){for(var e=0;e<this._children.length;e++){var i=this._children[e]
t.delFromMap(i.id),i instanceof r&&i.delChildrenFromStorage(t)}},r.prototype.modSelf=function(){this.__dirty=!0},i.merge(r.prototype,o.prototype,!0),i.merge(r.prototype,n.prototype,!0),r}),define("zrender/animation/Clip",["require","./easing"],function(t){function e(t){this._targetPool=t.target||{},this._targetPool instanceof Array||(this._targetPool=[this._targetPool]),this._life=t.life||1e3,this._delay=t.delay||0,this._startTime=(new Date).getTime()+this._delay,this._endTime=this._startTime+1e3*this._life,this.loop=void 0===t.loop?!1:t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart}var i=t("./easing")
return e.prototype={step:function(t){var e=(t-this._startTime)/this._life
if(!(0>e)){e=Math.min(e,1)
var o="string"==typeof this.easing?i[this.easing]:this.easing,n="function"==typeof o?o(e):e
return this.fire("frame",n),1==e?this.loop?(this.restart(),"restart"):(this._needsRemove=!0,"destroy"):null}},restart:function(){var t=(new Date).getTime(),e=(t-this._startTime)%this._life
this._startTime=(new Date).getTime()-e+this.gap,this._needsRemove=!1},fire:function(t,e){for(var i=0,o=this._targetPool.length;o>i;i++)this["on"+t]&&this["on"+t](this._targetPool[i],e)},constructor:e},e}),define("zrender/animation/easing",[],function(){var t={Linear:function(t){return t},QuadraticIn:function(t){return t*t},QuadraticOut:function(t){return t*(2-t)},QuadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},CubicIn:function(t){return t*t*t},CubicOut:function(t){return--t*t*t+1},CubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},QuarticIn:function(t){return t*t*t*t},QuarticOut:function(t){return 1- --t*t*t*t},QuarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},QuinticIn:function(t){return t*t*t*t*t},QuinticOut:function(t){return--t*t*t*t*t+1},QuinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},SinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},SinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},SinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},ExponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},ExponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},ExponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},CircularIn:function(t){return 1-Math.sqrt(1-t*t)},CircularOut:function(t){return Math.sqrt(1- --t*t)},CircularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},ElasticIn:function(t){var e,i=.1,o=.4
return 0===t?0:1===t?1:(!i||1>i?(i=1,e=o/4):e=o*Math.asin(1/i)/(2*Math.PI),-(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/o)))},ElasticOut:function(t){var e,i=.1,o=.4
return 0===t?0:1===t?1:(!i||1>i?(i=1,e=o/4):e=o*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/o)+1)},ElasticInOut:function(t){var e,i=.1,o=.4
return 0===t?0:1===t?1:(!i||1>i?(i=1,e=o/4):e=o*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/o)):i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/o)*.5+1)},BackIn:function(t){var e=1.70158
return t*t*((e+1)*t-e)},BackOut:function(t){var e=1.70158
return--t*t*((e+1)*t+e)+1},BackInOut:function(t){var e=2.5949095
return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)},BounceIn:function(e){return 1-t.BounceOut(1-e)},BounceOut:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},BounceInOut:function(e){return.5>e?.5*t.BounceIn(2*e):.5*t.BounceOut(2*e-1)+.5}}
return t}),define("echarts/chart/base",["require","zrender/shape/Image","../util/shape/Icon","../util/shape/MarkLine","../util/shape/Symbol","../config","../util/ecData","../util/ecAnimation","../util/ecEffect","../util/accMath","../component/base","zrender/tool/util","zrender/tool/area"],function(t){function e(t,e,i,o,n){d.call(this,t,e,i,o,n)
var r=this
this.selectedMap={},this.lastShapeList=[],this.shapeHandler={onclick:function(){r.isClick=!0},ondragover:function(t){var e=t.target
e.highlightStyle=e.highlightStyle||{}
var i=e.highlightStyle,o=i.brushTyep,n=i.strokeColor,a=i.lineWidth
i.brushType="stroke",i.strokeColor=r.ecTheme.calculableColor||s.calculableColor,i.lineWidth="icon"===e.type?30:10,r.zr.addHoverShape(e),setTimeout(function(){i&&(i.brushType=o,i.strokeColor=n,i.lineWidth=a)},20)},ondrop:function(t){null!=a.get(t.dragged,"data")&&(r.isDrop=!0)},ondragend:function(){r.isDragend=!0}}}var i=t("zrender/shape/Image"),o=t("../util/shape/Icon"),n=t("../util/shape/MarkLine"),r=t("../util/shape/Symbol"),s=t("../config"),a=t("../util/ecData"),h=t("../util/ecAnimation"),l=t("../util/ecEffect"),c=t("../util/accMath"),d=t("../component/base"),u=t("zrender/tool/util"),p=t("zrender/tool/area")
return e.prototype={setCalculable:function(t){return t.dragEnableTime=this.ecTheme.DRAG_ENABLE_TIME||s.DRAG_ENABLE_TIME,t.ondragover=this.shapeHandler.ondragover,t.ondragend=this.shapeHandler.ondragend,t.ondrop=this.shapeHandler.ondrop,t},ondrop:function(t,e){if(this.isDrop&&t.target&&!e.dragIn){var i,o=t.target,n=t.dragged,r=a.get(o,"seriesIndex"),h=a.get(o,"dataIndex"),l=this.series,d=this.component.legend
if(-1===h){if(a.get(n,"seriesIndex")==r)return e.dragOut=e.dragIn=e.needRefresh=!0,void(this.isDrop=!1)
i={value:a.get(n,"value"),name:a.get(n,"name")},this.type===s.CHART_TYPE_PIE&&i.value<0&&(i.value=0)
for(var u=!1,p=l[r].data,f=0,g=p.length;g>f;f++)p[f].name===i.name&&"-"===p[f].value&&(l[r].data[f].value=i.value,u=!0)
!u&&l[r].data.push(i),d&&d.add(i.name,n.style.color||n.style.strokeColor)}else i=l[r].data[h]||"-",null!=i.value?("-"!=i.value?l[r].data[h].value=c.accAdd(l[r].data[h].value,a.get(n,"value")):l[r].data[h].value=a.get(n,"value"),(this.type===s.CHART_TYPE_FUNNEL||this.type===s.CHART_TYPE_PIE)&&(d&&1===d.getRelatedAmount(i.name)&&this.component.legend.del(i.name),i.name+=this.option.nameConnector+a.get(n,"name"),d&&d.add(i.name,n.style.color||n.style.strokeColor))):"-"!=i?l[r].data[h]=c.accAdd(l[r].data[h],a.get(n,"value")):l[r].data[h]=a.get(n,"value")
e.dragIn=e.dragIn||!0,this.isDrop=!1
var m=this
setTimeout(function(){m.zr.trigger("mousemove",t.event)},300)}},ondragend:function(t,e){if(this.isDragend&&t.target&&!e.dragOut){var i=t.target,o=a.get(i,"seriesIndex"),n=a.get(i,"dataIndex"),r=this.series
if(null!=r[o].data[n].value){r[o].data[n].value="-"
var s=r[o].data[n].name,h=this.component.legend
h&&0===h.getRelatedAmount(s)&&h.del(s)}else r[o].data[n]="-"
e.dragOut=!0,e.needRefresh=!0,this.isDragend=!1}},onlegendSelected:function(t,e){var i=t.selected
for(var o in this.selectedMap)this.selectedMap[o]!=i[o]&&(e.needRefresh=!0),this.selectedMap[o]=i[o]},_buildPosition:function(){this._symbol=this.option.symbolList,this._sIndex2ShapeMap={},this._sIndex2ColorMap={},this.selectedMap={},this.xMarkMap={}
for(var t,e,i,o,n=this.series,r={top:[],bottom:[],left:[],right:[],other:[]},a=0,h=n.length;h>a;a++)n[a].type===this.type&&(n[a]=this.reformOption(n[a]),this.legendHoverLink=n[a].legendHoverLink||this.legendHoverLink,t=n[a].xAxisIndex,e=n[a].yAxisIndex,i=this.component.xAxis.getAxis(t),o=this.component.yAxis.getAxis(e),i.type===s.COMPONENT_TYPE_AXIS_CATEGORY?r[i.getPosition()].push(a):o.type===s.COMPONENT_TYPE_AXIS_CATEGORY?r[o.getPosition()].push(a):r.other.push(a))
for(var l in r)r[l].length>0&&this._buildSinglePosition(l,r[l])
this.addShapeList()},_buildSinglePosition:function(t,e){var i=this._mapData(e),o=i.locationMap,n=i.maxDataLength
if(0!==n&&0!==o.length){switch(t){case"bottom":case"top":this._buildHorizontal(e,n,o,this.xMarkMap)
break
case"left":case"right":this._buildVertical(e,n,o,this.xMarkMap)
break
case"other":this._buildOther(e,n,o,this.xMarkMap)}for(var r=0,s=e.length;s>r;r++)this.buildMark(e[r])}},_mapData:function(t){for(var e,i,o,n,r=this.series,a=0,h={},l="__kener__stack__",c=this.component.legend,d=[],u=0,p=0,f=t.length;f>p;p++){if(e=r[t[p]],o=e.name,this._sIndex2ShapeMap[t[p]]=this._sIndex2ShapeMap[t[p]]||this.query(e,"symbol")||this._symbol[p%this._symbol.length],c){if(this.selectedMap[o]=c.isSelected(o),this._sIndex2ColorMap[t[p]]=c.getColor(o),n=c.getItemShape(o)){var g=n.style
if(this.type==s.CHART_TYPE_LINE)g.iconType="legendLineIcon",g.symbol=this._sIndex2ShapeMap[t[p]]
else if(e.itemStyle.normal.barBorderWidth>0){var m=n.highlightStyle
g.brushType="both",g.x+=1,g.y+=1,g.width-=2,g.height-=2,g.strokeColor=m.strokeColor=e.itemStyle.normal.barBorderColor,m.lineWidth=3}c.setItemShape(o,n)}}else this.selectedMap[o]=!0,this._sIndex2ColorMap[t[p]]=this.zr.getColor(t[p])
this.selectedMap[o]&&(i=e.stack||l+t[p],null==h[i]?(h[i]=a,d[a]=[t[p]],a++):d[h[i]].push(t[p])),u=Math.max(u,e.data.length)}return{locationMap:d,maxDataLength:u}},_calculMarkMapXY:function(t,e,i){for(var o=this.series,n=0,r=e.length;r>n;n++)for(var s=0,a=e[n].length;a>s;s++){var h=e[n][s],l="xy"==i?0:"",c=this.component.grid,d=t[h]
if("-1"!=i.indexOf("x")){d["counter"+l]>0&&(d["average"+l]=d["sum"+l]/d["counter"+l])
var u=this.component.xAxis.getAxis(o[h].xAxisIndex||0).getCoord(d["average"+l])
d["averageLine"+l]=[[u,c.getYend()],[u,c.getY()]],d["minLine"+l]=[[d["minX"+l],c.getYend()],[d["minX"+l],c.getY()]],d["maxLine"+l]=[[d["maxX"+l],c.getYend()],[d["maxX"+l],c.getY()]],d.isHorizontal=!1}if(l="xy"==i?1:"","-1"!=i.indexOf("y")){d["counter"+l]>0&&(d["average"+l]=d["sum"+l]/d["counter"+l])
var p=this.component.yAxis.getAxis(o[h].yAxisIndex||0).getCoord(d["average"+l])
d["averageLine"+l]=[[c.getX(),p],[c.getXend(),p]],d["minLine"+l]=[[c.getX(),d["minY"+l]],[c.getXend(),d["minY"+l]]],d["maxLine"+l]=[[c.getX(),d["maxY"+l]],[c.getXend(),d["maxY"+l]]],d.isHorizontal=!0}}},addLabel:function(t,e,i,o,n){var r=[i,e],s=this.deepMerge(r,"itemStyle.normal.label"),a=this.deepMerge(r,"itemStyle.emphasis.label"),h=s.textStyle||{},l=a.textStyle||{}
if(s.show){var c=t.style
c.text=this._getLabelText(e,i,o,"normal"),c.textPosition=null==s.position?"horizontal"===n?"right":"top":s.position,c.textColor=h.color,c.textFont=this.getFont(h),c.textAlign=h.align,c.textBaseline=h.baseline}if(a.show){var d=t.highlightStyle
d.text=this._getLabelText(e,i,o,"emphasis"),d.textPosition=s.show?t.style.textPosition:null==a.position?"horizontal"===n?"right":"top":a.position,d.textColor=l.color,d.textFont=this.getFont(l),d.textAlign=l.align,d.textBaseline=l.baseline}return t},_getLabelText:function(t,e,i,o){var n=this.deepQuery([e,t],"itemStyle."+o+".label.formatter")
n||"emphasis"!==o||(n=this.deepQuery([e,t],"itemStyle.normal.label.formatter"))
var r=this.getDataFromOption(e,"-")
return n?"function"==typeof n?n.call(this.myChart,{seriesName:t.name,series:t,name:i,value:r,data:e,status:o}):"string"==typeof n?n=n.replace("{a}","{a0}").replace("{b}","{b0}").replace("{c}","{c0}").replace("{a0}",t.name).replace("{b0}",i).replace("{c0}",this.numAddCommas(r)):void 0:r instanceof Array?null!=r[2]?this.numAddCommas(r[2]):r[0]+" , "+r[1]:this.numAddCommas(r)},buildMark:function(t){var e=this.series[t]
this.selectedMap[e.name]&&(e.markLine&&this._buildMarkLine(t),e.markPoint&&this._buildMarkPoint(t))},_buildMarkPoint:function(t){for(var e,i,o=(this.markAttachStyle||{})[t],n=this.series[t],r=u.clone(n.markPoint),a=0,h=r.data.length;h>a;a++)e=r.data[a],i=this.getMarkCoord(t,e),e.x=null!=e.x?e.x:i[0],e.y=null!=e.y?e.y:i[1],!e.type||"max"!==e.type&&"min"!==e.type||(e.value=i[3],e.name=e.name||e.type,e.symbolSize=e.symbolSize||p.getTextWidth(i[3],this.getFont())/2+5)
for(var l=this._markPoint(t,r),a=0,h=l.length;h>a;a++){var c=l[a]
c.zlevel=this.getZlevelBase(),c.z=this.getZBase()+1
for(var d in o)c[d]=u.clone(o[d])
this.shapeList.push(c)}if(this.type===s.CHART_TYPE_FORCE||this.type===s.CHART_TYPE_CHORD)for(var a=0,h=l.length;h>a;a++)this.zr.addShape(l[a])},_buildMarkLine:function(t){for(var e,i=(this.markAttachStyle||{})[t],o=this.series[t],n=u.clone(o.markLine),r=0,a=n.data.length;a>r;r++){var h=n.data[r]
!h.type||"max"!==h.type&&"min"!==h.type&&"average"!==h.type?e=[this.getMarkCoord(t,h[0]),this.getMarkCoord(t,h[1])]:(e=this.getMarkCoord(t,h),n.data[r]=[u.clone(h),{}],n.data[r][0].name=h.name||h.type,n.data[r][0].value="average"!==h.type?e[3]:+e[3].toFixed(null!=n.precision?n.precision:this.deepQuery([this.ecTheme,s],"markLine.precision")),e=e[2],h=[{},{}]),null!=e&&null!=e[0]&&null!=e[1]&&(n.data[r][0].x=null!=h[0].x?h[0].x:e[0][0],n.data[r][0].y=null!=h[0].y?h[0].y:e[0][1],n.data[r][1].x=null!=h[1].x?h[1].x:e[1][0],n.data[r][1].y=null!=h[1].y?h[1].y:e[1][1])}for(var l=this._markLine(t,n),r=0,a=l.length;a>r;r++){var c=l[r]
c.zlevel=this.getZlevelBase(),c.z=this.getZBase()+1
for(var d in i)c[d]=u.clone(i[d])
this.shapeList.push(c)}if(this.type===s.CHART_TYPE_FORCE||this.type===s.CHART_TYPE_CHORD)for(var r=0,a=l.length;a>r;r++)this.zr.addShape(l[r])},_markPoint:function(t,e){var i=this.series[t],o=this.component
u.merge(u.merge(e,u.clone(this.ecTheme.markPoint||{})),u.clone(s.markPoint)),e.name=i.name
var n,r,h,l,c,d,p,f=[],g=e.data,m=o.dataRange,_=o.legend,y=this.zr.getWidth(),v=this.zr.getHeight()
if(e.large)n=this.getLargeMarkPoingShape(t,e),n._mark="largePoint",n&&f.push(n)
else for(var x=0,b=g.length;b>x;x++)null!=g[x].x&&null!=g[x].y&&(h=null!=g[x].value?g[x].value:"",_&&(r=_.getColor(i.name)),m&&(r=isNaN(h)?r:m.getColor(h),l=[g[x],e],c=this.deepQuery(l,"itemStyle.normal.color")||r,d=this.deepQuery(l,"itemStyle.emphasis.color")||c,null==c&&null==d)||(r=null==r?this.zr.getColor(t):r,g[x].tooltip=g[x].tooltip||e.tooltip||{trigger:"item"},g[x].name=null!=g[x].name?g[x].name:"",g[x].value=h,n=this.getSymbolShape(e,t,g[x],x,g[x].name,this.parsePercent(g[x].x,y),this.parsePercent(g[x].y,v),"pin",r,"rgba(0,0,0,0)","horizontal"),n._mark="point",p=this.deepMerge([g[x],e],"effect"),p.show&&(n.effect=p),i.type===s.CHART_TYPE_MAP&&(n._geo=this.getMarkGeo(g[x])),a.pack(n,i,t,g[x],x,g[x].name,h),f.push(n)))
return f},_markLine:function(t,e){var i=this.series[t],o=this.component
u.merge(u.merge(e,u.clone(this.ecTheme.markLine||{})),u.clone(s.markLine)),e.symbol=e.symbol instanceof Array?e.symbol.length>1?e.symbol:[e.symbol[0],e.symbol[0]]:[e.symbol,e.symbol],e.symbolSize=e.symbolSize instanceof Array?e.symbolSize.length>1?e.symbolSize:[e.symbolSize[0],e.symbolSize[0]]:[e.symbolSize,e.symbolSize],e.symbolRotate=e.symbolRotate instanceof Array?e.symbolRotate.length>1?e.symbolRotate:[e.symbolRotate[0],e.symbolRotate[0]]:[e.symbolRotate,e.symbolRotate],e.name=i.name
for(var n,r,h,l,c,d,p,f,g=[],m=e.data,_=o.dataRange,y=o.legend,v=this.zr.getWidth(),x=this.zr.getHeight(),b=0,T=m.length;T>b;b++){var S=m[b]
null!=S[0].x&&null!=S[0].y&&null!=S[1].x&&null!=S[1].y&&(r=y?y.getColor(i.name):this.zr.getColor(t),f=this.deepMerge(S),h=null!=f.value?f.value:"",_&&(r=isNaN(h)?r:_.getColor(h),l=[f,e],c=this.deepQuery(l,"itemStyle.normal.color")||r,d=this.deepQuery(l,"itemStyle.emphasis.color")||c,null==c&&null==d)||(S[0].tooltip=f.tooltip||e.tooltip||{trigger:"item"},S[0].name=null!=S[0].name?S[0].name:"",S[1].name=null!=S[1].name?S[1].name:"",S[0].value=h,n=this.getLineMarkShape(e,t,S,b,this.parsePercent(S[0].x,v),this.parsePercent(S[0].y,x),this.parsePercent(S[1].x,v),this.parsePercent(S[1].y,x),r),n._mark="line",p=this.deepMerge([f,e],"effect"),p.show&&(n.effect=p),i.type===s.CHART_TYPE_MAP&&(n._geo=[this.getMarkGeo(S[0]),this.getMarkGeo(S[1])]),a.pack(n,i,t,S[0],b,S[0].name+(""!==S[1].name?" > "+S[1].name:""),h),g.push(n)))}return g},getMarkCoord:function(){return[0,0]},getSymbolShape:function(t,e,n,r,s,h,l,c,d,u,p){var f=[n,t],g=this.getDataFromOption(n,"-")
c=this.deepQuery(f,"symbol")||c
var m=this.deepQuery(f,"symbolSize")
m="function"==typeof m?m(g):m
var _=this.deepQuery(f,"symbolRotate"),y=this.deepMerge(f,"itemStyle.normal"),v=this.deepMerge(f,"itemStyle.emphasis"),x=null!=y.borderWidth?y.borderWidth:y.lineStyle&&y.lineStyle.width
null==x&&(x=c.match("empty")?2:0)
var b=null!=v.borderWidth?v.borderWidth:v.lineStyle&&v.lineStyle.width
null==b&&(b=x+2)
var T=new o({style:{iconType:c.replace("empty","").toLowerCase(),x:h-m,y:l-m,width:2*m,height:2*m,brushType:"both",color:c.match("empty")?u:this.getItemStyleColor(y.color,e,r,n)||d,strokeColor:y.borderColor||this.getItemStyleColor(y.color,e,r,n)||d,lineWidth:x},highlightStyle:{color:c.match("empty")?u:this.getItemStyleColor(v.color,e,r,n),strokeColor:v.borderColor||y.borderColor||this.getItemStyleColor(y.color,e,r,n)||d,lineWidth:b},clickable:this.deepQuery(f,"clickable")})
return c.match("image")&&(T.style.image=c.replace(RegExp("^image:\\/\\/"),""),T=new i({style:T.style,highlightStyle:T.highlightStyle,clickable:this.deepQuery(f,"clickable")})),null!=_&&(T.rotation=[_*Math.PI/180,h,l]),c.match("star")&&(T.style.iconType="star",T.style.n=c.replace("empty","").replace("star","")-0||5),"none"===c&&(T.invisible=!0,T.hoverable=!1),T=this.addLabel(T,t,n,s,p),c.match("empty")&&(null==T.style.textColor&&(T.style.textColor=T.style.strokeColor),null==T.highlightStyle.textColor&&(T.highlightStyle.textColor=T.highlightStyle.strokeColor)),a.pack(T,t,e,n,r,s),T._x=h,T._y=l,T._dataIndex=r,T._seriesIndex=e,T},getLineMarkShape:function(t,e,i,o,r,s,a,h,l){var c=null!=i[0].value?i[0].value:"-",d=null!=i[1].value?i[1].value:"-",u=[this.query(i[0],"symbol")||t.symbol[0],this.query(i[1],"symbol")||t.symbol[1]],p=[this.query(i[0],"symbolSize")||t.symbolSize[0],this.query(i[1],"symbolSize")||t.symbolSize[1]]
p[0]="function"==typeof p[0]?p[0](c):p[0],p[1]="function"==typeof p[1]?p[1](d):p[1]
var f=[this.query(i[0],"symbolRotate")||t.symbolRotate[0],this.query(i[1],"symbolRotate")||t.symbolRotate[1]],g=[i[0],i[1],t],m=this.deepMerge(g,"itemStyle.normal")
m.color=this.getItemStyleColor(m.color,e,o,i)
var _=this.deepMerge(g,"itemStyle.emphasis")
_.color=this.getItemStyleColor(_.color,e,o,i)
var y=m.lineStyle,v=_.lineStyle,x=y.width
null==x&&(x=m.borderWidth)
var b=v.width
null==b&&(b=null!=_.borderWidth?_.borderWidth:x+2)
var T=new n({style:{smooth:this.deepQuery([i[0],i[1],t],"smooth")?"spline":!1,smoothRadian:this.deepQuery([i[0],i[1],t],"smoothRadian"),symbol:u,symbolSize:p,symbolRotate:f,xStart:r,yStart:s,xEnd:a,yEnd:h,brushType:"both",lineType:y.type,shadowColor:y.shadowColor||y.color||m.borderColor||m.color||l,shadowBlur:y.shadowBlur,shadowOffsetX:y.shadowOffsetX,shadowOffsetY:y.shadowOffsetY,color:m.color||l,strokeColor:y.color||m.borderColor||m.color||l,lineWidth:x,symbolBorderColor:m.borderColor||m.color||l,symbolBorder:m.borderWidth},highlightStyle:{shadowColor:v.shadowColor,shadowBlur:v.shadowBlur,shadowOffsetX:v.shadowOffsetX,shadowOffsetY:v.shadowOffsetY,color:_.color||m.color||l,strokeColor:v.color||y.color||_.borderColor||m.borderColor||_.color||m.color||l,lineWidth:b,symbolBorderColor:_.borderColor||m.borderColor||_.color||m.color||l,symbolBorder:null==_.borderWidth?m.borderWidth+2:_.borderWidth},clickable:this.deepQuery(g,"clickable")})
return T=this.addLabel(T,t,i[0],i[0].name+" : "+i[1].name),T._x=a,T._y=h,T},getLargeMarkPoingShape:function(t,e){var i,o,n,s,a,h,l=this.series[t],c=this.component,d=e.data,u=c.dataRange,p=c.legend,f=[d[0],e]
if(p&&(o=p.getColor(l.name)),!u||(n=null!=d[0].value?d[0].value:"",o=isNaN(n)?o:u.getColor(n),s=this.deepQuery(f,"itemStyle.normal.color")||o,a=this.deepQuery(f,"itemStyle.emphasis.color")||s,null!=s||null!=a)){o=this.deepMerge(f,"itemStyle.normal").color||o
var g=this.deepQuery(f,"symbol")||"circle"
g=g.replace("empty","").replace(/\d/g,""),h=this.deepMerge([d[0],e],"effect")
var m=window.devicePixelRatio||1
return i=new r({style:{pointList:d,color:o,strokeColor:o,shadowColor:h.shadowColor||o,shadowBlur:(null!=h.shadowBlur?h.shadowBlur:8)*m,size:this.deepQuery(f,"symbolSize"),iconType:g,brushType:"fill",lineWidth:1},draggable:!1,hoverable:!1}),h.show&&(i.effect=h),i}},backupShapeList:function(){this.shapeList&&this.shapeList.length>0?(this.lastShapeList=this.shapeList,this.shapeList=[]):this.lastShapeList=[]},addShapeList:function(){var t,e,i=this.option.animationThreshold/(this.canvasSupported?2:4),o=this.lastShapeList,n=this.shapeList,r=o.length>0,a=r?this.query(this.option,"animationDurationUpdate"):this.query(this.option,"animationDuration"),h=this.query(this.option,"animationEasing"),l={},c={}
if(this.option.animation&&!this.option.renderAsImage&&n.length<i&&!this.motionlessOnce){for(var d=0,u=o.length;u>d;d++)e=this._getAnimationKey(o[d]),e.match("undefined")?this.zr.delShape(o[d].id):(e+=o[d].type,l[e]?this.zr.delShape(o[d].id):l[e]=o[d])
for(var d=0,u=n.length;u>d;d++)e=this._getAnimationKey(n[d]),e.match("undefined")?this.zr.addShape(n[d]):(e+=n[d].type,c[e]=n[d])
for(e in l)c[e]||this.zr.delShape(l[e].id)
for(e in c)l[e]?(this.zr.delShape(l[e].id),this._animateMod(l[e],c[e],a,h,0,r)):(t=this.type!=s.CHART_TYPE_LINE&&this.type!=s.CHART_TYPE_RADAR||0===e.indexOf("icon")?0:a/2,this._animateMod(!1,c[e],a,h,t,r))
this.zr.refresh(),this.animationEffect()}else{this.motionlessOnce=!1,this.zr.delShape(o)
for(var d=0,u=n.length;u>d;d++)this.zr.addShape(n[d])}},_getAnimationKey:function(t){return this.type!=s.CHART_TYPE_MAP?a.get(t,"seriesIndex")+"_"+a.get(t,"dataIndex")+(t._mark?t._mark:"")+(this.type===s.CHART_TYPE_RADAR?a.get(t,"special"):""):a.get(t,"seriesIndex")+"_"+a.get(t,"dataIndex")+(t._mark?t._mark:"undefined")},_animateMod:function(t,e,i,o,n,r){switch(e.type){case"polyline":case"half-smooth-polygon":h.pointList(this.zr,t,e,i,o)
break
case"rectangle":h.rectangle(this.zr,t,e,i,o)
break
case"image":case"icon":h.icon(this.zr,t,e,i,o,n)
break
case"candle":r?this.zr.addShape(e):h.candle(this.zr,t,e,i,o)
break
case"ring":case"sector":case"circle":r?"sector"===e.type?h.sector(this.zr,t,e,i,o):this.zr.addShape(e):h.ring(this.zr,t,e,i+(a.get(e,"dataIndex")||0)%20*100,o)
break
case"text":h.text(this.zr,t,e,i,o)
break
case"polygon":r?h.pointList(this.zr,t,e,i,o):h.polygon(this.zr,t,e,i,o)
break
case"ribbon":h.ribbon(this.zr,t,e,i,o)
break
case"gauge-pointer":h.gaugePointer(this.zr,t,e,i,o)
break
case"mark-line":h.markline(this.zr,t,e,i,o)
break
case"bezier-curve":case"line":h.line(this.zr,t,e,i,o)
break
default:this.zr.addShape(e)}},animationMark:function(t,e,i){for(var o=i||this.shapeList,n=0,r=o.length;r>n;n++)o[n]._mark&&this._animateMod(!1,o[n],t,e,0,!0)
this.animationEffect(i)},animationEffect:function(t){!t&&this.clearEffectShape()
var e=t||this.shapeList
if(null!=e){var i=s.EFFECT_ZLEVEL
this.canvasSupported&&this.zr.modLayer(i,{motionBlur:!0,lastFrameAlpha:.95})
for(var o,n=0,r=e.length;r>n;n++)o=e[n],o._mark&&o.effect&&o.effect.show&&l[o._mark]&&(l[o._mark](this.zr,this.effectList,o,i),this.effectList[this.effectList.length-1]._mark=o._mark)}},clearEffectShape:function(t){this.zr&&this.effectList&&this.effectList.length>0&&(t&&this.zr.modLayer(s.EFFECT_ZLEVEL,{motionBlur:!1}),this.zr.delShape(this.effectList)),this.effectList=[]},addMark:function(t,e,i){var o=this.series[t]
if(this.selectedMap[o.name]){var n=this.query(this.option,"animationDurationUpdate"),r=this.query(this.option,"animationEasing"),s=o[i].data,a=this.shapeList.length
if(o[i].data=e.data,this["_build"+i.replace("m","M")](t),this.option.animation&&!this.option.renderAsImage)this.animationMark(n,r,this.shapeList.slice(a))
else{for(var h=a,l=this.shapeList.length;l>h;h++)this.zr.addShape(this.shapeList[h])
this.zr.refreshNextFrame()}o[i].data=s}},delMark:function(t,e,i){i=i.replace("mark","").replace("large","").toLowerCase()
var o=this.series[t]
if(this.selectedMap[o.name]){for(var n=!1,r=[this.shapeList,this.effectList],s=2;s--;)for(var h=0,l=r[s].length;l>h;h++)if(r[s][h]._mark==i&&a.get(r[s][h],"seriesIndex")==t&&a.get(r[s][h],"name")==e){this.zr.delShape(r[s][h].id),r[s].splice(h,1),n=!0
break}n&&this.zr.refreshNextFrame()}}},u.inherits(e,d),e}),define("zrender/shape/Circle",["require","./Base","../tool/util"],function(t){"use strict"
var e=t("./Base"),i=function(t){e.call(this,t)}
return i.prototype={type:"circle",buildPath:function(t,e){t.arc(e.x,e.y,e.r,0,2*Math.PI,!0)},getRect:function(t){if(t.__rect)return t.__rect
var e
return e="stroke"==t.brushType||"fill"==t.brushType?t.lineWidth||1:0,t.__rect={x:Math.round(t.x-t.r-e/2),y:Math.round(t.y-t.r-e/2),width:2*t.r+e,height:2*t.r+e},t.__rect}},t("../tool/util").inherits(i,e),i}),define("echarts/util/accMath",[],function(){function t(t,e){var i=""+t,o=""+e,n=0
try{n=o.split(".")[1].length}catch(r){}try{n-=i.split(".")[1].length}catch(r){}return(i.replace(".","")-0)/(o.replace(".","")-0)*Math.pow(10,n)}function e(t,e){var i=""+t,o=""+e,n=0
try{n+=i.split(".")[1].length}catch(r){}try{n+=o.split(".")[1].length}catch(r){}return(i.replace(".","")-0)*(o.replace(".","")-0)/Math.pow(10,n)}function i(t,e){var i=0,o=0
try{i=(""+t).split(".")[1].length}catch(n){}try{o=(""+e).split(".")[1].length}catch(n){}var r=Math.pow(10,Math.max(i,o))
return(Math.round(t*r)+Math.round(e*r))/r}function o(t,e){return i(t,-e)}return{accDiv:t,accMul:e,accAdd:i,accSub:o}}),define("echarts/util/shape/Icon",["require","zrender/tool/util","zrender/shape/Star","zrender/shape/Heart","zrender/shape/Droplet","zrender/shape/Image","zrender/shape/Base"],function(t){function e(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
t.moveTo(i,o+e.height),t.lineTo(i+5*n,o+14*r),t.lineTo(i+e.width,o+3*r),t.lineTo(i+13*n,o),t.lineTo(i+2*n,o+11*r),t.lineTo(i,o+e.height),t.moveTo(i+6*n,o+10*r),t.lineTo(i+14*n,o+2*r),t.moveTo(i+10*n,o+13*r),t.lineTo(i+e.width,o+13*r),t.moveTo(i+13*n,o+10*r),t.lineTo(i+13*n,o+e.height)}function i(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
t.moveTo(i,o+e.height),t.lineTo(i+5*n,o+14*r),t.lineTo(i+e.width,o+3*r),t.lineTo(i+13*n,o),t.lineTo(i+2*n,o+11*r),t.lineTo(i,o+e.height),t.moveTo(i+6*n,o+10*r),t.lineTo(i+14*n,o+2*r),t.moveTo(i+10*n,o+13*r),t.lineTo(i+e.width,o+13*r)}function o(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
t.moveTo(i+4*n,o+15*r),t.lineTo(i+9*n,o+13*r),t.lineTo(i+14*n,o+8*r),t.lineTo(i+11*n,o+5*r),t.lineTo(i+6*n,o+10*r),t.lineTo(i+4*n,o+15*r),t.moveTo(i+5*n,o),t.lineTo(i+11*n,o),t.moveTo(i+5*n,o+r),t.lineTo(i+11*n,o+r),t.moveTo(i,o+2*r),t.lineTo(i+e.width,o+2*r),t.moveTo(i,o+5*r),t.lineTo(i+3*n,o+e.height),t.lineTo(i+13*n,o+e.height),t.lineTo(i+e.width,o+5*r)}function n(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
t.moveTo(i,o+3*r),t.lineTo(i+6*n,o+3*r),t.moveTo(i+3*n,o),t.lineTo(i+3*n,o+6*r),t.moveTo(i+3*n,o+8*r),t.lineTo(i+3*n,o+e.height),t.lineTo(i+e.width,o+e.height),t.lineTo(i+e.width,o+3*r),t.lineTo(i+8*n,o+3*r)}function r(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
t.moveTo(i+6*n,o),t.lineTo(i+2*n,o+3*r),t.lineTo(i+6*n,o+6*r),t.moveTo(i+2*n,o+3*r),t.lineTo(i+14*n,o+3*r),t.lineTo(i+14*n,o+11*r),t.moveTo(i+2*n,o+5*r),t.lineTo(i+2*n,o+13*r),t.lineTo(i+14*n,o+13*r),t.moveTo(i+10*n,o+10*r),t.lineTo(i+14*n,o+13*r),t.lineTo(i+10*n,o+e.height)}function s(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16,s=e.width/2
t.lineWidth=1.5,t.arc(i+s,o+s,s-n,0,2*Math.PI/3),t.moveTo(i+3*n,o+e.height),t.lineTo(i+0*n,o+12*r),t.lineTo(i+5*n,o+11*r),t.moveTo(i,o+8*r),t.arc(i+s,o+s,s-n,Math.PI,5*Math.PI/3),t.moveTo(i+13*n,o),t.lineTo(i+e.width,o+4*r),t.lineTo(i+11*n,o+5*r)}function a(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
t.moveTo(i,o),t.lineTo(i,o+e.height),t.lineTo(i+e.width,o+e.height),t.moveTo(i+2*n,o+14*r),t.lineTo(i+7*n,o+6*r),t.lineTo(i+11*n,o+11*r),t.lineTo(i+15*n,o+2*r)}function h(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
t.moveTo(i,o),t.lineTo(i,o+e.height),t.lineTo(i+e.width,o+e.height),t.moveTo(i+3*n,o+14*r),t.lineTo(i+3*n,o+6*r),t.lineTo(i+4*n,o+6*r),t.lineTo(i+4*n,o+14*r),t.moveTo(i+7*n,o+14*r),t.lineTo(i+7*n,o+2*r),t.lineTo(i+8*n,o+2*r),t.lineTo(i+8*n,o+14*r),t.moveTo(i+11*n,o+14*r),t.lineTo(i+11*n,o+9*r),t.lineTo(i+12*n,o+9*r),t.lineTo(i+12*n,o+14*r)}function l(t,e){var i=e.x,o=e.y,n=e.width-2,r=e.height-2,s=Math.min(n,r)/2
o+=2,t.moveTo(i+s+3,o+s-3),t.arc(i+s+3,o+s-3,s-1,0,-Math.PI/2,!0),t.lineTo(i+s+3,o+s-3),t.moveTo(i+s,o),t.lineTo(i+s,o+s),t.arc(i+s,o+s,s,-Math.PI/2,2*Math.PI,!0),t.lineTo(i+s,o+s),t.lineWidth=1.5}function c(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
o-=r,t.moveTo(i+1*n,o+2*r),t.lineTo(i+15*n,o+2*r),t.lineTo(i+14*n,o+3*r),t.lineTo(i+2*n,o+3*r),t.moveTo(i+3*n,o+6*r),t.lineTo(i+13*n,o+6*r),t.lineTo(i+12*n,o+7*r),t.lineTo(i+4*n,o+7*r),t.moveTo(i+5*n,o+10*r),t.lineTo(i+11*n,o+10*r),t.lineTo(i+10*n,o+11*r),t.lineTo(i+6*n,o+11*r),t.moveTo(i+7*n,o+14*r),t.lineTo(i+9*n,o+14*r),t.lineTo(i+8*n,o+15*r),t.lineTo(i+7*n,o+15*r)}function d(t,e){var i=e.x,o=e.y,n=e.width,r=e.height,s=n/16,a=r/16,h=2*Math.min(s,a)
t.moveTo(i+s+h,o+a+h),t.arc(i+s,o+a,h,Math.PI/4,3*Math.PI),t.lineTo(i+7*s-h,o+6*a-h),t.arc(i+7*s,o+6*a,h,Math.PI/4*5,4*Math.PI),t.arc(i+7*s,o+6*a,h/2,Math.PI/4*5,4*Math.PI),t.moveTo(i+7*s-h/2,o+6*a+h),t.lineTo(i+s+h,o+14*a-h),t.arc(i+s,o+14*a,h,-Math.PI/4,2*Math.PI),t.moveTo(i+7*s+h/2,o+6*a),t.lineTo(i+14*s-h,o+10*a-h/2),t.moveTo(i+16*s,o+10*a),t.arc(i+14*s,o+10*a,h,0,3*Math.PI),t.lineWidth=1.5}function u(t,e){var i=e.x,o=e.y,n=e.width,r=e.height,s=Math.min(n,r)/2
t.moveTo(i+n,o+r/2),t.arc(i+s,o+s,s,0,2*Math.PI),t.arc(i+s,o,s,Math.PI/4,Math.PI/5*4),t.arc(i,o+s,s,-Math.PI/3,Math.PI/3),t.arc(i+n,o+r,s,Math.PI,Math.PI/2*3),t.lineWidth=1.5}function p(t,e){for(var i=e.x,o=e.y,n=e.width,r=e.height,s=Math.round(r/3),a=Math.round((s-2)/2),h=3;h--;)t.rect(i,o+s*h+a,n,2)}function f(t,e){for(var i=e.x,o=e.y,n=e.width,r=e.height,s=Math.round(n/3),a=Math.round((s-2)/2),h=3;h--;)t.rect(i+s*h+a,o,2,r)}function g(t,e){var i=e.x,o=e.y,n=e.width/16
t.moveTo(i+n,o),t.lineTo(i+n,o+e.height),t.lineTo(i+15*n,o+e.height),t.lineTo(i+15*n,o),t.lineTo(i+n,o),t.moveTo(i+3*n,o+3*n),t.lineTo(i+13*n,o+3*n),t.moveTo(i+3*n,o+6*n),t.lineTo(i+13*n,o+6*n),t.moveTo(i+3*n,o+9*n),t.lineTo(i+13*n,o+9*n),t.moveTo(i+3*n,o+12*n),t.lineTo(i+9*n,o+12*n)}function m(t,e){var i=e.x,o=e.y,n=e.width/16,r=e.height/16
t.moveTo(i,o),t.lineTo(i,o+e.height),t.lineTo(i+e.width,o+e.height),t.lineTo(i+e.width,o),t.lineTo(i,o),t.moveTo(i+4*n,o),t.lineTo(i+4*n,o+8*r),t.lineTo(i+12*n,o+8*r),t.lineTo(i+12*n,o),t.moveTo(i+6*n,o+11*r),t.lineTo(i+6*n,o+13*r),t.lineTo(i+10*n,o+13*r),t.lineTo(i+10*n,o+11*r),t.lineTo(i+6*n,o+11*r)}function _(t,e){var i=e.x,o=e.y,n=e.width,r=e.height
t.moveTo(i,o+r/2),t.lineTo(i+n,o+r/2),t.moveTo(i+n/2,o),t.lineTo(i+n/2,o+r)}function y(t,e){var i=e.width/2,o=e.height/2,n=Math.min(i,o)
t.moveTo(e.x+i+n,e.y+o),t.arc(e.x+i,e.y+o,n,0,2*Math.PI),t.closePath()}function v(t,e){t.rect(e.x,e.y,e.width,e.height),t.closePath()}function x(t,e){var i=e.width/2,o=e.height/2,n=e.x+i,r=e.y+o,s=Math.min(i,o)
t.moveTo(n,r-s),t.lineTo(n+s,r+s),t.lineTo(n-s,r+s),t.lineTo(n,r-s),t.closePath()}function b(t,e){var i=e.width/2,o=e.height/2,n=e.x+i,r=e.y+o,s=Math.min(i,o)
t.moveTo(n,r-s),t.lineTo(n+s,r),t.lineTo(n,r+s),t.lineTo(n-s,r),t.lineTo(n,r-s),t.closePath()}function T(t,e){var i=e.x,o=e.y,n=e.width/16
t.moveTo(i+8*n,o),t.lineTo(i+n,o+e.height),t.lineTo(i+8*n,o+e.height/4*3),t.lineTo(i+15*n,o+e.height),t.lineTo(i+8*n,o),t.closePath()}function S(e,i){var o=t("zrender/shape/Star"),n=i.width/2,r=i.height/2
o.prototype.buildPath(e,{x:i.x+n,y:i.y+r,r:Math.min(n,r),n:i.n||5})}function z(e,i){var o=t("zrender/shape/Heart")
o.prototype.buildPath(e,{x:i.x+i.width/2,y:i.y+.2*i.height,a:i.width/2,b:.8*i.height})}function C(e,i){var o=t("zrender/shape/Droplet")
o.prototype.buildPath(e,{x:i.x+.5*i.width,y:i.y+.5*i.height,a:.5*i.width,b:.8*i.height})}function w(t,e){var i=e.x,o=e.y-e.height/2*1.5,n=e.width/2,r=e.height/2,s=Math.min(n,r)
t.arc(i+n,o+r,s,Math.PI/5*4,Math.PI/5),t.lineTo(i+n,o+r+1.5*s),t.closePath()}function E(e,i,o){var n=t("zrender/shape/Image")
this._imageShape=this._imageShape||new n({style:{}})
for(var r in i)this._imageShape.style[r]=i[r]
this._imageShape.brush(e,!1,o)}function L(t){M.call(this,t)}var A=t("zrender/tool/util"),M=t("zrender/shape/Base")
return L.prototype={type:"icon",iconLibrary:{mark:e,markUndo:i,markClear:o,dataZoom:n,dataZoomReset:r,restore:s,lineChart:a,barChart:h,pieChart:l,funnelChart:c,forceChart:d,chordChart:u,stackChart:p,tiledChart:f,dataView:g,saveAsImage:m,cross:_,circle:y,rectangle:v,triangle:x,diamond:b,arrow:T,star:S,heart:z,droplet:C,pin:w,image:E},brush:function(e,i,o){var n=i?this.highlightStyle:this.style
n=n||{}
var r=n.iconType||this.style.iconType
if("image"===r){var s=t("zrender/shape/Image")
s.prototype.brush.call(this,e,i,o)}else{var n=this.beforeBrush(e,i)
switch(e.beginPath(),this.buildPath(e,n,o),n.brushType){case"both":e.fill()
case"stroke":n.lineWidth>0&&e.stroke()
break
default:e.fill()}this.drawText(e,n,this.style),this.afterBrush(e)}},buildPath:function(t,e,i){this.iconLibrary[e.iconType]?this.iconLibrary[e.iconType].call(this,t,e,i):(t.moveTo(e.x,e.y),t.lineTo(e.x+e.width,e.y),t.lineTo(e.x+e.width,e.y+e.height),t.lineTo(e.x,e.y+e.height),t.lineTo(e.x,e.y),t.closePath())},getRect:function(t){return t.__rect?t.__rect:(t.__rect={x:Math.round(t.x),y:Math.round(t.y-("pin"==t.iconType?t.height/2*1.5:0)),width:t.width,height:t.height*("pin"===t.iconType?1.25:1)},t.__rect)},isCover:function(t,e){var i=this.getTansform(t,e)
t=i[0],e=i[1]
var o=this.style.__rect
o||(o=this.style.__rect=this.getRect(this.style))
var n=o.height<8||o.width<8?4:0
return t>=o.x-n&&t<=o.x+o.width+n&&e>=o.y-n&&e<=o.y+o.height+n?!0:!1}},A.inherits(L,M),L}),define("echarts/util/shape/MarkLine",["require","zrender/shape/Base","./Icon","zrender/shape/Line","zrender/shape/Polyline","zrender/tool/matrix","zrender/tool/area","zrender/shape/util/dashedLineTo","zrender/shape/util/smoothSpline","zrender/tool/util"],function(t){function e(t){i.call(this,t)}var i=t("zrender/shape/Base"),o=t("./Icon"),n=t("zrender/shape/Line"),r=new n({}),s=t("zrender/shape/Polyline"),a=new s({}),h=t("zrender/tool/matrix"),l=t("zrender/tool/area"),c=t("zrender/shape/util/dashedLineTo"),d=t("zrender/shape/util/smoothSpline"),u=t("zrender/tool/util")
return e.prototype={type:"mark-line",brush:function(t,e){var i=this.style
e&&(i=this.getHighlightStyle(i,this.highlightStyle||{})),t.save(),this.setContext(t,i),this.setTransform(t),t.save(),t.beginPath(),this.buildLinePath(t,i,this.style.lineWidth||1),t.stroke(),t.restore(),this.brushSymbol(t,i,0),this.brushSymbol(t,i,1),this.drawText(t,i,this.style),t.restore()},buildLinePath:function(t,e,i){var o=e.pointList||this.getPointList(e)
e.pointList=o
var n=Math.min(e.pointList.length,Math.round(e.pointListLength||e.pointList.length))
if(e.lineType&&"solid"!=e.lineType){if("dashed"==e.lineType||"dotted"==e.lineType)if("spline"!==e.smooth){var r=i*("dashed"==e.lineType?5:1)
t.moveTo(o[0][0],o[0][1])
for(var s=1;n>s;s++)c(t,o[s-1][0],o[s-1][1],o[s][0],o[s][1],r)}else for(var s=1;n>s;s+=2)t.moveTo(o[s-1][0],o[s-1][1]),t.lineTo(o[s][0],o[s][1])}else{t.moveTo(o[0][0],o[0][1])
for(var s=1;n>s;s++)t.lineTo(o[s][0],o[s][1])}},brushSymbol:function(t,e,i){if("none"!=e.symbol[i]){t.save(),t.beginPath(),t.lineWidth=e.symbolBorder,t.strokeStyle=e.symbolBorderColor,e.iconType=e.symbol[i].replace("empty","").toLowerCase(),e.symbol[i].match("empty")&&(t.fillStyle="#fff")
var n,r=Math.min(e.pointList.length,Math.round(e.pointListLength||e.pointList.length)),s=0===i?e.pointList[0][0]:e.pointList[r-1][0],a=0===i?e.pointList[0][1]:e.pointList[r-1][1],l=void 0!==e.symbolRotate[i]?e.symbolRotate[i]-0:0
if(0!==l&&(n=h.create(),h.identity(n),(s||a)&&h.translate(n,n,[-s,-a]),h.rotate(n,n,l*Math.PI/180),(s||a)&&h.translate(n,n,[s,a]),t.transform.apply(t,n)),"arrow"==e.iconType&&0===l)this.buildArrawPath(t,e,i)
else{var c=e.symbolSize[i]
e.x=s-c,e.y=a-c,e.width=2*c,e.height=2*c,o.prototype.buildPath(t,e)}t.closePath(),t.fill(),t.stroke(),t.restore()}},buildArrawPath:function(t,e,i){var o=Math.min(e.pointList.length,Math.round(e.pointListLength||e.pointList.length)),n=2*e.symbolSize[i],r=e.pointList[0][0],s=e.pointList[o-1][0],a=e.pointList[0][1],h=e.pointList[o-1][1],l=0
"spline"===e.smooth&&(l=e.smoothRadian*(s>=r?1:-1))
var c=Math.atan(Math.abs((h-a)/(r-s)))
0===i?s>r?h>a?c=2*Math.PI-c+l:c+=l:h>a?c+=Math.PI-l:c=Math.PI-c-l:r>s?a>h?c=2*Math.PI-c+l:c+=l:a>h?c+=Math.PI-l:c=Math.PI-c-l
var d=Math.PI/8,u=0===i?r:s,p=0===i?a:h,f=[[u+n*Math.cos(c-d),p-n*Math.sin(c-d)],[u+.6*n*Math.cos(c),p-.6*n*Math.sin(c)],[u+n*Math.cos(c+d),p-n*Math.sin(c+d)]]
t.moveTo(u,p)
for(var g=0,m=f.length;m>g;g++)t.lineTo(f[g][0],f[g][1])
t.lineTo(u,p)},getPointList:function(t){var e=[[t.xStart,t.yStart],[t.xEnd,t.yEnd]]
if("spline"===t.smooth){var i=e[1][0],o=e[1][1]
if(t.smoothRadian<=.8){e[3]=[i,o]
var n=e[0][0]<=e[3][0]
e[1]=this.getOffetPoint(e[0],e[3],n,t.smoothRadian),e[2]=this.getOffetPoint(e[3],e[0],n,t.smoothRadian)}else e[2]=[i,o],e[1]=this.getOffetPoint(e[0],e[2],e[0][0]<=e[2][0],t.smoothRadian)
e=d(e,!1),e[e.length-1]=[i,o]}return e},getOffetPoint:function(t,e,i,o){var n,r=(2-Math.abs(o))/.6,s=Math.sqrt(Math.round((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])))/r,a=[t[0],t[1]]
if(t[0]!=e[0]&&t[1]!=e[1]){var h=(e[1]-t[1])/(e[0]-t[0])
n=Math.atan(h)}else n=t[0]==e[0]?(t[1]<=e[1]?1:-1)*Math.PI/2:0
var l,c
return t[0]<=e[0]?(n-=o*(i?1:-1),l=Math.round(Math.cos(n)*s),c=Math.round(Math.sin(n)*s),a[0]+=l,a[1]+=c):(n+=o*(i?1:-1),l=Math.round(Math.cos(n)*s),c=Math.round(Math.sin(n)*s),a[0]-=l,a[1]-=c),a},getRect:function(t){if(t.__rect)return t.__rect
var e=t.lineWidth||1
return t.__rect={x:Math.min(t.xStart,t.xEnd)-e,y:Math.min(t.yStart,t.yEnd)-e,width:Math.abs(t.xStart-t.xEnd)+e,height:Math.abs(t.yStart-t.yEnd)+e},t.__rect},isCover:function(t,e){var i=this.getTansform(t,e)
t=i[0],e=i[1]
var o=this.style.__rect
return o||(o=this.style.__rect=this.getRect(this.style)),t>=o.x&&t<=o.x+o.width&&e>=o.y&&e<=o.y+o.height?"spline"!==this.style.smooth?l.isInside(r,this.style,t,e):l.isInside(a,this.style,t,e):!1}},u.inherits(e,i),e}),define("echarts/util/shape/Symbol",["require","zrender/shape/Base","zrender/shape/Polygon","zrender/tool/util","./normalIsCover"],function(t){function e(t){i.call(this,t)}var i=t("zrender/shape/Base"),o=t("zrender/shape/Polygon"),n=new o({}),r=t("zrender/tool/util")
return e.prototype={type:"symbol",buildPath:function(t,e){var i=e.pointList,o=i.length
if(0!==o)for(var n,r,s,a,h,l=1e4,c=Math.ceil(o/l),d=i[0]instanceof Array,u=e.size?e.size:2,p=u,f=u/2,g=2*Math.PI,m=0;c>m;m++){t.beginPath(),n=m*l,r=n+l,r=r>o?o:r
for(var _=n;r>_;_++)if(e.random&&(s=e["randomMap"+_%20]/100,p=u*s*s,f=p/2),d?(a=i[_][0],h=i[_][1]):(a=i[_].x,h=i[_].y),3>p)t.rect(a-f,h-f,p,p)
else switch(e.iconType){case"circle":t.moveTo(a,h),t.arc(a,h,f,0,g,!0)
break
case"diamond":t.moveTo(a,h-f),t.lineTo(a+f/3,h-f/3),t.lineTo(a+f,h),t.lineTo(a+f/3,h+f/3),t.lineTo(a,h+f),t.lineTo(a-f/3,h+f/3),t.lineTo(a-f,h),t.lineTo(a-f/3,h-f/3),t.lineTo(a,h-f)
break
default:t.rect(a-f,h-f,p,p)}if(t.closePath(),c-1>m)switch(e.brushType){case"both":t.fill(),e.lineWidth>0&&t.stroke()
break
case"stroke":e.lineWidth>0&&t.stroke()
break
default:t.fill()}}},getRect:function(t){return t.__rect||n.getRect(t)},isCover:t("./normalIsCover")},r.inherits(e,i),e}),define("echarts/util/ecAnimation",["require","zrender/tool/util","zrender/shape/Polygon"],function(t){function e(t,e,i,o,n){var r,s=i.style.pointList,a=s.length
if(!e){if(r=[],"vertical"!=i._orient)for(var h=s[0][1],l=0;a>l;l++)r[l]=[s[l][0],h]
else for(var c=s[0][0],l=0;a>l;l++)r[l]=[c,s[l][1]]
"half-smooth-polygon"==i.type&&(r[a-1]=f.clone(s[a-1]),r[a-2]=f.clone(s[a-2])),e={style:{pointList:r}}}r=e.style.pointList
var d=r.length
d==a?i.style.pointList=r:a>d?i.style.pointList=r.concat(s.slice(d)):i.style.pointList=r.slice(0,a),t.addShape(i),i._animating=!0,t.animate(i.id,"style").when(o,{pointList:s}).done(function(){i._animating=!1}).start(n)}function i(t,e){for(var i=arguments.length,o=2;i>o;o++){var n=arguments[o]
t.style[n]=e.style[n]}}function o(t,e,o,n,r){var s=o.style
e||(e={position:o.position,style:{x:s.x,y:"vertical"==o._orient?s.y+s.height:s.y,width:"vertical"==o._orient?s.width:0,height:"vertical"!=o._orient?s.height:0}})
var a=s.x,h=s.y,l=s.width,c=s.height,d=[o.position[0],o.position[1]]
i(o,e,"x","y","width","height"),o.position=e.position,t.addShape(o),(d[0]!=e.position[0]||d[1]!=e.position[1])&&t.animate(o.id,"").when(n,{position:d}).start(r),o._animating=!0,t.animate(o.id,"style").when(n,{x:a,y:h,width:l,height:c}).done(function(){o._animating=!1}).start(r)}function n(t,e,i,o,n){if(!e){var r=i.style.y
e={style:{y:[r[0],r[0],r[0],r[0]]}}}var s=i.style.y
i.style.y=e.style.y,t.addShape(i),i._animating=!0,t.animate(i.id,"style").when(o,{y:s}).done(function(){i._animating=!1}).start(n)}function r(t,e,i,o,n){var r=i.style.x,s=i.style.y,a=i.style.r0,h=i.style.r
i._animating=!0,"r"!=i._animationAdd?(i.style.r0=0,i.style.r=0,i.rotation=[2*Math.PI,r,s],t.addShape(i),t.animate(i.id,"style").when(o,{r0:a,r:h}).done(function(){i._animating=!1}).start(n),t.animate(i.id,"").when(Math.round(o/3*2),{rotation:[0,r,s]}).start(n)):(i.style.r0=i.style.r,t.addShape(i),t.animate(i.id,"style").when(o,{r0:a}).done(function(){i._animating=!1}).start(n))}function s(t,e,o,n,r){e||(e="r"!=o._animationAdd?{style:{startAngle:o.style.startAngle,endAngle:o.style.startAngle}}:{style:{r0:o.style.r}})
var s=o.style.startAngle,a=o.style.endAngle
i(o,e,"startAngle","endAngle"),t.addShape(o),o._animating=!0,t.animate(o.id,"style").when(n,{startAngle:s,endAngle:a}).done(function(){o._animating=!1}).start(r)}function a(t,e,o,n,r){e||(e={style:{x:"left"==o.style.textAlign?o.style.x+100:o.style.x-100,y:o.style.y}})
var s=o.style.x,a=o.style.y
i(o,e,"x","y"),t.addShape(o),o._animating=!0,t.animate(o.id,"style").when(n,{x:s,y:a}).done(function(){o._animating=!1}).start(r)}function h(e,i,o,n,r){var s=t("zrender/shape/Polygon").prototype.getRect(o.style),a=s.x+s.width/2,h=s.y+s.height/2
o.scale=[.1,.1,a,h],e.addShape(o),o._animating=!0,e.animate(o.id,"").when(n,{scale:[1,1,a,h]}).done(function(){o._animating=!1}).start(r)}function l(t,e,o,n,r){e||(e={style:{source0:0,source1:o.style.source1>0?360:-360,target0:0,target1:o.style.target1>0?360:-360}})
var s=o.style.source0,a=o.style.source1,h=o.style.target0,l=o.style.target1
e.style&&i(o,e,"source0","source1","target0","target1"),t.addShape(o),o._animating=!0,t.animate(o.id,"style").when(n,{source0:s,source1:a,target0:h,target1:l}).done(function(){o._animating=!1}).start(r)}function c(t,e,i,o,n){e||(e={style:{angle:i.style.startAngle}})
var r=i.style.angle
i.style.angle=e.style.angle,t.addShape(i),i._animating=!0,t.animate(i.id,"style").when(o,{angle:r}).done(function(){i._animating=!1}).start(n)}function d(t,e,i,n,r,s){if(i.style._x=i.style.x,i.style._y=i.style.y,i.style._width=i.style.width,i.style._height=i.style.height,e)o(t,e,i,n,r)
else{var a=i._x||0,h=i._y||0
i.scale=[.01,.01,a,h],t.addShape(i),i._animating=!0,t.animate(i.id,"").delay(s).when(n,{scale:[1,1,a,h]}).done(function(){i._animating=!1}).start(r||"QuinticOut")}}function u(t,e,o,n,r){e||(e={style:{xStart:o.style.xStart,yStart:o.style.yStart,xEnd:o.style.xStart,yEnd:o.style.yStart}})
var s=o.style.xStart,a=o.style.xEnd,h=o.style.yStart,l=o.style.yEnd
i(o,e,"xStart","xEnd","yStart","yEnd"),t.addShape(o),o._animating=!0,t.animate(o.id,"style").when(n,{xStart:s,xEnd:a,yStart:h,yEnd:l}).done(function(){o._animating=!1}).start(r)}function p(t,e,i,o,n){i.style.smooth?e?t.addShape(i):(i.style.pointListLength=1,t.addShape(i),i._animating=!0,i.style.pointList=i.style.pointList||i.getPointList(i.style),t.animate(i.id,"style").when(o,{pointListLength:i.style.pointList.length}).done(function(){i._animating=!1}).start(n||"QuinticOut")):(i.style.pointList=e?e.style.pointList:[[i.style.xStart,i.style.yStart],[i.style.xStart,i.style.yStart]],t.addShape(i),i._animating=!0,t.animate(i.id,"style").when(o,{pointList:[[i.style.xStart,i.style.yStart],[i._x||0,i._y||0]]}).done(function(){i._animating=!1}).start(n||"QuinticOut"))}var f=t("zrender/tool/util")
return{pointList:e,rectangle:o,candle:n,ring:r,sector:s,text:a,polygon:h,ribbon:l,gaugePointer:c,icon:d,line:u,markline:p}}),define("echarts/util/ecEffect",["require","../util/ecData","zrender/shape/Circle","zrender/shape/Image","../util/shape/Icon","../util/shape/Symbol","zrender/tool/env"],function(t){function e(t,e,i,o){var r,h=i.effect,c=h.color||i.style.strokeColor||i.style.color,d=h.shadowColor||c,u=h.scaleSize,p=h.bounceDistance,f=void 0!==h.shadowBlur?h.shadowBlur:u
"image"!==i.type?(r=new a({zlevel:o,style:{brushType:"stroke",iconType:"droplet"!=i.style.iconType?i.style.iconType:"circle",x:f+1,y:f+1,n:i.style.n,width:i.style._width*u,height:i.style._height*u,lineWidth:1,strokeColor:c,shadowColor:d,shadowBlur:f},draggable:!1,hoverable:!1}),"pin"==i.style.iconType&&(r.style.y+=r.style.height/2*1.5),l&&(r.style.image=t.shapeToImage(r,r.style.width+2*f+2,r.style.height+2*f+2).style.image,r=new s({zlevel:r.zlevel,style:r.style,draggable:!1,hoverable:!1}))):r=new s({zlevel:o,style:i.style,draggable:!1,hoverable:!1}),n.clone(i,r),r.position=i.position,e.push(r),t.addShape(r)
var g="image"!==i.type?window.devicePixelRatio||1:1,m=(r.style.width/g-i.style._width)/2
r.style.x=i.style._x-m,r.style.y=i.style._y-m,"pin"==i.style.iconType&&(r.style.y-=i.style.height/2*1.5)
var _=100*(h.period+10*Math.random())
t.modShape(i.id,{invisible:!0})
var y=r.style.x+r.style.width/2/g,v=r.style.y+r.style.height/2/g
"scale"===h.type?(t.modShape(r.id,{scale:[.1,.1,y,v]}),t.animate(r.id,"",h.loop).when(_,{scale:[1,1,y,v]}).done(function(){i.effect.show=!1,t.delShape(r.id)}).start()):t.animate(r.id,"style",h.loop).when(_,{y:r.style.y-p}).when(2*_,{y:r.style.y}).done(function(){i.effect.show=!1,t.delShape(r.id)}).start()}function i(t,e,i,o){var n=i.effect,r=n.color||i.style.strokeColor||i.style.color,s=n.scaleSize,a=n.shadowColor||r,l=void 0!==n.shadowBlur?n.shadowBlur:2*s,c=window.devicePixelRatio||1,d=new h({zlevel:o,position:i.position,scale:i.scale,style:{pointList:i.style.pointList,iconType:i.style.iconType,color:r,strokeColor:r,shadowColor:a,shadowBlur:l*c,random:!0,brushType:"fill",lineWidth:1,size:i.style.size},draggable:!1,hoverable:!1})
e.push(d),t.addShape(d),t.modShape(i.id,{invisible:!0})
for(var u=Math.round(100*n.period),p={},f={},g=0;20>g;g++)d.style["randomMap"+g]=0,p={},p["randomMap"+g]=100,f={},f["randomMap"+g]=0,d.style["randomMap"+g]=100*Math.random(),t.animate(d.id,"style",!0).when(u,p).when(2*u,f).when(3*u,p).when(4*u,p).delay(Math.random()*u*g).start()}function o(t,e,i,o){var a,h=i.effect,c=h.color||i.style.strokeColor||i.style.color,d=h.shadowColor||i.style.strokeColor||c,u=i.style.lineWidth*h.scaleSize,p=void 0!==h.shadowBlur?h.shadowBlur:u,f=new r({zlevel:o,style:{x:p,y:p,r:u,color:c,shadowColor:d,shadowBlur:p},draggable:!1,hoverable:!1})
l?(f.style.image=t.shapeToImage(f,2*(u+p),2*(u+p)).style.image,f=new s({zlevel:f.zlevel,style:f.style,draggable:!1,hoverable:!1}),a=p):a=0,n.clone(i,f),f.position=i.position,e.push(f),t.addShape(f),f.style.x=i.style.xStart-a,f.style.y=i.style.yStart-a
var g=(i.style.xStart-i.style.xEnd)*(i.style.xStart-i.style.xEnd)+(i.style.yStart-i.style.yEnd)*(i.style.yStart-i.style.yEnd),m=Math.round(Math.sqrt(Math.round(g*h.period*h.period)))
if(i.style.smooth){var _=i.style.pointList||i.getPointList(i.style),y=_.length
m=Math.round(m/y)
for(var v=t.animate(f.id,"style",h.loop),x=Math.ceil(y/8),b=0;y-x>b;b+=x)v.when(m*(b+1),{x:_[b][0]-a,y:_[b][1]-a})
v.when(m*y,{x:_[y-1][0]-a,y:_[y-1][1]-a}),v.done(function(){i.effect.show=!1,t.delShape(f.id)}),v.start("spline")}else t.animate(f.id,"style",h.loop).when(m,{x:i._x-a,y:i._y-a}).done(function(){i.effect.show=!1,t.delShape(f.id)}).start()}var n=t("../util/ecData"),r=t("zrender/shape/Circle"),s=t("zrender/shape/Image"),a=t("../util/shape/Icon"),h=t("../util/shape/Symbol"),l=t("zrender/tool/env").canvasSupported
return{point:e,largePoint:i,line:o}}),define("echarts/component/base",["require","../config","../util/ecData","../util/ecQuery","../util/number","zrender/tool/util","zrender/tool/env"],function(t){function e(t,e,n,r,s){this.ecTheme=t,this.messageCenter=e,this.zr=n,this.option=r,this.series=r.series,this.myChart=s,this.component=s.component,this.shapeList=[],this.effectList=[]
var a=this
a._onlegendhoverlink=function(t){if(a.legendHoverLink)for(var e,n=t.target,r=a.shapeList.length-1;r>=0;r--)e=a.type==i.CHART_TYPE_PIE||a.type==i.CHART_TYPE_FUNNEL?o.get(a.shapeList[r],"name"):(o.get(a.shapeList[r],"series")||{}).name,e!=n||a.shapeList[r].invisible||a.shapeList[r]._animating||a.zr.addHoverShape(a.shapeList[r])},e&&e.bind(i.EVENT.LEGEND_HOVERLINK,this._onlegendhoverlink)}var i=t("../config"),o=t("../util/ecData"),n=t("../util/ecQuery"),r=t("../util/number"),s=t("zrender/tool/util")
return e.prototype={canvasSupported:t("zrender/tool/env").canvasSupported,_getZ:function(t){var e=this.ecTheme[this.type]
return e&&null!=e[t]?e[t]:(e=i[this.type],e&&null!=e[t]?e[t]:0)},getZlevelBase:function(){return this._getZ("zlevel")},getZBase:function(){return this._getZ("z")},reformOption:function(t){return s.merge(s.merge(t||{},s.clone(this.ecTheme[this.type]||{})),s.clone(i[this.type]||{}))},reformCssArray:function(t){if(!(t instanceof Array))return[t,t,t,t]
switch(t.length+""){case"4":return t
case"3":return[t[0],t[1],t[2],t[1]]
case"2":return[t[0],t[1],t[0],t[1]]
case"1":return[t[0],t[0],t[0],t[0]]
case"0":return[0,0,0,0]}},getShapeById:function(t){for(var e=0,i=this.shapeList.length;i>e;e++)if(this.shapeList[e].id===t)return this.shapeList[e]
return null},getFont:function(t){var e=this.getTextStyle(s.clone(t))
return e.fontStyle+" "+e.fontWeight+" "+e.fontSize+"px "+e.fontFamily},getTextStyle:function(t){return s.merge(s.merge(t||{},this.ecTheme.textStyle),i.textStyle)},getItemStyleColor:function(t,e,i,o){return"function"==typeof t?t.call(this.myChart,{seriesIndex:e,series:this.series[e],dataIndex:i,data:o}):t},getDataFromOption:function(t,e){return null!=t?null!=t.value?t.value:t:e},subPixelOptimize:function(t,e){return t=e%2===1?Math.floor(t)+.5:Math.round(t)},resize:function(){this.refresh&&this.refresh(),this.clearEffectShape&&this.clearEffectShape(!0)
var t=this
setTimeout(function(){t.animationEffect&&t.animationEffect()},200)},clear:function(){this.clearEffectShape&&this.clearEffectShape(),this.zr&&this.zr.delShape(this.shapeList),this.shapeList=[]},dispose:function(){this.onbeforDispose&&this.onbeforDispose(),this.clear(),this.shapeList=null,this.effectList=null,this.messageCenter&&this.messageCenter.unbind(i.EVENT.LEGEND_HOVERLINK,this._onlegendhoverlink),this.onafterDispose&&this.onafterDispose()},query:n.query,deepQuery:n.deepQuery,deepMerge:n.deepMerge,parsePercent:r.parsePercent,parseCenter:r.parseCenter,parseRadius:r.parseRadius,numAddCommas:r.addCommas},e}),define("zrender/shape/Star",["require","../tool/math","./Base","../tool/util"],function(t){var e=t("../tool/math"),i=e.sin,o=e.cos,n=Math.PI,r=t("./Base"),s=function(t){r.call(this,t)}
return s.prototype={type:"star",buildPath:function(t,e){var r=e.n
if(r&&!(2>r)){var s=e.x,a=e.y,h=e.r,l=e.r0
null==l&&(l=r>4?h*o(2*n/r)/o(n/r):h/3)
var c=n/r,d=-n/2,u=s+h*o(d),p=a+h*i(d)
d+=c
var f=e.pointList=[]
f.push([u,p])
for(var g,m=0,_=2*r-1;_>m;m++)g=m%2===0?l:h,f.push([s+g*o(d),a+g*i(d)]),d+=c
f.push([u,p]),t.moveTo(f[0][0],f[0][1])
for(var m=0;m<f.length;m++)t.lineTo(f[m][0],f[m][1])
t.closePath()}},getRect:function(t){if(t.__rect)return t.__rect
var e
return e="stroke"==t.brushType||"fill"==t.brushType?t.lineWidth||1:0,t.__rect={x:Math.round(t.x-t.r-e/2),y:Math.round(t.y-t.r-e/2),width:2*t.r+e,height:2*t.r+e},t.__rect}},t("../tool/util").inherits(s,r),s}),define("zrender/shape/Heart",["require","./Base","./util/PathProxy","../tool/area","../tool/util"],function(t){"use strict"
var e=t("./Base"),i=t("./util/PathProxy"),o=t("../tool/area"),n=function(t){e.call(this,t),this._pathProxy=new i}
return n.prototype={type:"heart",buildPath:function(t,e){var o=this._pathProxy||new i
o.begin(t),o.moveTo(e.x,e.y),o.bezierCurveTo(e.x+e.a/2,e.y-2*e.b/3,e.x+2*e.a,e.y+e.b/3,e.x,e.y+e.b),o.bezierCurveTo(e.x-2*e.a,e.y+e.b/3,e.x-e.a/2,e.y-2*e.b/3,e.x,e.y),o.closePath()},getRect:function(t){return t.__rect?t.__rect:(this._pathProxy.isEmpty()||this.buildPath(null,t),this._pathProxy.fastBoundingRect())},isCover:function(t,e){var i=this.getTansform(t,e)
t=i[0],e=i[1]
var n=this.getRect(this.style)
return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height?o.isInsidePath(this._pathProxy.pathCommands,this.style.lineWidth,this.style.brushType,t,e):void 0}},t("../tool/util").inherits(n,e),n}),define("zrender/shape/Droplet",["require","./Base","./util/PathProxy","../tool/area","../tool/util"],function(t){"use strict"
var e=t("./Base"),i=t("./util/PathProxy"),o=t("../tool/area"),n=function(t){e.call(this,t),this._pathProxy=new i}
return n.prototype={type:"droplet",buildPath:function(t,e){var o=this._pathProxy||new i
o.begin(t),o.moveTo(e.x,e.y+e.a),o.bezierCurveTo(e.x+e.a,e.y+e.a,e.x+3*e.a/2,e.y-e.a/3,e.x,e.y-e.b),o.bezierCurveTo(e.x-3*e.a/2,e.y-e.a/3,e.x-e.a,e.y+e.a,e.x,e.y+e.a),o.closePath()},getRect:function(t){return t.__rect?t.__rect:(this._pathProxy.isEmpty()||this.buildPath(null,t),this._pathProxy.fastBoundingRect())},isCover:function(t,e){var i=this.getTansform(t,e)
t=i[0],e=i[1]
var n=this.getRect(this.style)
return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height?o.isInsidePath(this._pathProxy.pathCommands,this.style.lineWidth,this.style.brushType,t,e):void 0}},t("../tool/util").inherits(n,e),n}),define("zrender/tool/math",[],function(){function t(t,e){return Math.sin(e?t*n:t)}function e(t,e){return Math.cos(e?t*n:t)}function i(t){return t*n}function o(t){return t/n}var n=Math.PI/180
return{sin:t,cos:e,degreeToRadian:i,radianToDegree:o}}),define("zrender/shape/util/PathProxy",["require","../../tool/vector"],function(t){var e=t("../../tool/vector"),i=function(t,e){this.command=t,this.points=e||null},o=function(){this.pathCommands=[],this._ctx=null,this._min=[],this._max=[]}
return o.prototype.fastBoundingRect=function(){var t=this._min,i=this._max
t[0]=t[1]=1/0,i[0]=i[1]=-(1/0)
for(var o=0;o<this.pathCommands.length;o++){var n=this.pathCommands[o],r=n.points
switch(n.command){case"M":e.min(t,t,r),e.max(i,i,r)
break
case"L":e.min(t,t,r),e.max(i,i,r)
break
case"C":for(var s=0;6>s;s+=2)t[0]=Math.min(t[0],t[0],r[s]),t[1]=Math.min(t[1],t[1],r[s+1]),i[0]=Math.max(i[0],i[0],r[s]),i[1]=Math.max(i[1],i[1],r[s+1])
break
case"Q":for(var s=0;4>s;s+=2)t[0]=Math.min(t[0],t[0],r[s]),t[1]=Math.min(t[1],t[1],r[s+1]),i[0]=Math.max(i[0],i[0],r[s]),i[1]=Math.max(i[1],i[1],r[s+1])
break
case"A":var a=r[0],h=r[1],l=r[2],c=r[3]
t[0]=Math.min(t[0],t[0],a-l),t[1]=Math.min(t[1],t[1],h-c),i[0]=Math.max(i[0],i[0],a+l),i[1]=Math.max(i[1],i[1],h+c)}}return{x:t[0],y:t[1],width:i[0]-t[0],height:i[1]-t[1]}},o.prototype.begin=function(t){return this._ctx=t||null,this.pathCommands.length=0,this},o.prototype.moveTo=function(t,e){return this.pathCommands.push(new i("M",[t,e])),this._ctx&&this._ctx.moveTo(t,e),this},o.prototype.lineTo=function(t,e){return this.pathCommands.push(new i("L",[t,e])),this._ctx&&this._ctx.lineTo(t,e),this},o.prototype.bezierCurveTo=function(t,e,o,n,r,s){return this.pathCommands.push(new i("C",[t,e,o,n,r,s])),this._ctx&&this._ctx.bezierCurveTo(t,e,o,n,r,s),this},o.prototype.quadraticCurveTo=function(t,e,o,n){return this.pathCommands.push(new i("Q",[t,e,o,n])),this._ctx&&this._ctx.quadraticCurveTo(t,e,o,n),this},o.prototype.arc=function(t,e,o,n,r,s){return this.pathCommands.push(new i("A",[t,e,o,o,n,r-n,0,s?0:1])),this._ctx&&this._ctx.arc(t,e,o,n,r,s),this},o.prototype.arcTo=function(t,e,i,o,n){return this._ctx&&this._ctx.arcTo(t,e,i,o,n),this},o.prototype.rect=function(t,e,i,o){return this._ctx&&this._ctx.rect(t,e,i,o),this},o.prototype.closePath=function(){return this.pathCommands.push(new i("z")),this._ctx&&this._ctx.closePath(),this},o.prototype.isEmpty=function(){return 0===this.pathCommands.length},o.PathSegment=i,o}),define("zrender/shape/Line",["require","./Base","./util/dashedLineTo","../tool/util"],function(t){var e=t("./Base"),i=t("./util/dashedLineTo"),o=function(t){this.brushTypeOnly="stroke",this.textPosition="end",e.call(this,t)}
return o.prototype={type:"line",buildPath:function(t,e){if(e.lineType&&"solid"!=e.lineType){if("dashed"==e.lineType||"dotted"==e.lineType){var o=(e.lineWidth||1)*("dashed"==e.lineType?5:1)
i(t,e.xStart,e.yStart,e.xEnd,e.yEnd,o)}}else t.moveTo(e.xStart,e.yStart),t.lineTo(e.xEnd,e.yEnd)},getRect:function(t){if(t.__rect)return t.__rect
var e=t.lineWidth||1
return t.__rect={x:Math.min(t.xStart,t.xEnd)-e,y:Math.min(t.yStart,t.yEnd)-e,width:Math.abs(t.xStart-t.xEnd)+e,height:Math.abs(t.yStart-t.yEnd)+e},t.__rect}},t("../tool/util").inherits(o,e),o}),define("zrender/shape/Polyline",["require","./Base","./util/smoothSpline","./util/smoothBezier","./util/dashedLineTo","./Polygon","../tool/util"],function(t){var e=t("./Base"),i=t("./util/smoothSpline"),o=t("./util/smoothBezier"),n=t("./util/dashedLineTo"),r=function(t){this.brushTypeOnly="stroke",this.textPosition="end",e.call(this,t)}
return r.prototype={type:"polyline",buildPath:function(t,e){var r=e.pointList
if(!(r.length<2)){var s=Math.min(e.pointList.length,Math.round(e.pointListLength||e.pointList.length))
if(e.smooth&&"spline"!==e.smooth){var a=o(r,e.smooth,!1,e.smoothConstraint)
t.moveTo(r[0][0],r[0][1])
for(var h,l,c,d=0;s-1>d;d++)h=a[2*d],l=a[2*d+1],c=r[d+1],t.bezierCurveTo(h[0],h[1],l[0],l[1],c[0],c[1])}else if("spline"===e.smooth&&(r=i(r),s=r.length),e.lineType&&"solid"!=e.lineType){if("dashed"==e.lineType||"dotted"==e.lineType){var u=(e.lineWidth||1)*("dashed"==e.lineType?5:1)
t.moveTo(r[0][0],r[0][1])
for(var d=1;s>d;d++)n(t,r[d-1][0],r[d-1][1],r[d][0],r[d][1],u)}}else{t.moveTo(r[0][0],r[0][1])
for(var d=1;s>d;d++)t.lineTo(r[d][0],r[d][1])}}},getRect:function(e){return t("./Polygon").prototype.getRect(e)}},t("../tool/util").inherits(r,e),r}),define("zrender/shape/util/dashedLineTo",[],function(){var t=[5,5]
return function(e,i,o,n,r,s){if(e.setLineDash)return t[0]=t[1]=s,e.setLineDash(t),e.moveTo(i,o),void e.lineTo(n,r)
s="number"!=typeof s?5:s
var a=n-i,h=r-o,l=Math.floor(Math.sqrt(a*a+h*h)/s)
a/=l,h/=l
for(var c=!0,d=0;l>d;++d)c?e.moveTo(i,o):e.lineTo(i,o),c=!c,i+=a,o+=h
e.lineTo(n,r)}}),define("zrender/shape/util/smoothSpline",["require","../../tool/vector"],function(t){function e(t,e,i,o,n,r,s){var a=.5*(i-t),h=.5*(o-e)
return(2*(e-i)+a+h)*s+(-3*(e-i)-2*a-h)*r+a*n+e}var i=t("../../tool/vector")
return function(t,o,n){for(var r=t.length,s=[],a=0,h=1;r>h;h++)a+=i.distance(t[h-1],t[h])
var l=a/5
l=r>l?r:l
for(var h=0;l>h;h++){var c,d,u,p=h/(l-1)*(o?r:r-1),f=Math.floor(p),g=p-f,m=t[f%r]
o?(c=t[(f-1+r)%r],d=t[(f+1)%r],u=t[(f+2)%r]):(c=t[0===f?f:f-1],d=t[f>r-2?r-1:f+1],u=t[f>r-3?r-1:f+2])
var _=g*g,y=g*_
s.push([e(c[0],m[0],d[0],u[0],g,_,y),e(c[1],m[1],d[1],u[1],g,_,y)])}return s}}),define("zrender/shape/util/smoothBezier",["require","../../tool/vector"],function(t){var e=t("../../tool/vector")
return function(t,i,o,n){var r,s,a,h,l=[],c=[],d=[],u=[],p=!!n
if(p){a=[1/0,1/0],h=[-(1/0),-(1/0)]
for(var f=0,g=t.length;g>f;f++)e.min(a,a,t[f]),e.max(h,h,t[f])
e.min(a,a,n[0]),e.max(h,h,n[1])}for(var f=0,g=t.length;g>f;f++){var r,s,m=t[f]
if(o)r=t[f?f-1:g-1],s=t[(f+1)%g]
else{if(0===f||f===g-1){l.push(t[f])
continue}r=t[f-1],s=t[f+1]}e.sub(c,s,r),e.scale(c,c,i)
var _=e.distance(m,r),y=e.distance(m,s),v=_+y
0!==v&&(_/=v,y/=v),e.scale(d,c,-_),e.scale(u,c,y)
var x=e.add([],m,d),b=e.add([],m,u)
p&&(e.max(x,x,a),e.min(x,x,h),e.max(b,b,a),e.min(b,b,h)),l.push(x),l.push(b)}return o&&l.push(l.shift()),l}}),define("zrender/shape/Polygon",["require","./Base","./util/smoothSpline","./util/smoothBezier","./util/dashedLineTo","../tool/util"],function(t){var e=t("./Base"),i=t("./util/smoothSpline"),o=t("./util/smoothBezier"),n=t("./util/dashedLineTo"),r=function(t){e.call(this,t)}
return r.prototype={type:"polygon",buildPath:function(t,e){var r=e.pointList
if(!(r.length<2)){if(e.smooth&&"spline"!==e.smooth){var s=o(r,e.smooth,!0,e.smoothConstraint)
t.moveTo(r[0][0],r[0][1])
for(var a,h,l,c=r.length,d=0;c>d;d++)a=s[2*d],h=s[2*d+1],l=r[(d+1)%c],t.bezierCurveTo(a[0],a[1],h[0],h[1],l[0],l[1])}else if("spline"===e.smooth&&(r=i(r,!0)),e.lineType&&"solid"!=e.lineType){if("dashed"==e.lineType||"dotted"==e.lineType){var u=e._dashLength||(e.lineWidth||1)*("dashed"==e.lineType?5:1)
e._dashLength=u,t.moveTo(r[0][0],r[0][1])
for(var d=1,p=r.length;p>d;d++)n(t,r[d-1][0],r[d-1][1],r[d][0],r[d][1],u)
n(t,r[r.length-1][0],r[r.length-1][1],r[0][0],r[0][1],u)}}else{t.moveTo(r[0][0],r[0][1])
for(var d=1,p=r.length;p>d;d++)t.lineTo(r[d][0],r[d][1])
t.lineTo(r[0][0],r[0][1])}t.closePath()}},getRect:function(t){if(t.__rect)return t.__rect
for(var e=Number.MAX_VALUE,i=Number.MIN_VALUE,o=Number.MAX_VALUE,n=Number.MIN_VALUE,r=t.pointList,s=0,a=r.length;a>s;s++)r[s][0]<e&&(e=r[s][0]),r[s][0]>i&&(i=r[s][0]),r[s][1]<o&&(o=r[s][1]),r[s][1]>n&&(n=r[s][1])
var h
return h="stroke"==t.brushType||"fill"==t.brushType?t.lineWidth||1:0,t.__rect={x:Math.round(e-h/2),y:Math.round(o-h/2),width:i-e+h,height:n-o+h},t.__rect}},t("../tool/util").inherits(r,e),r}),define("echarts/util/shape/normalIsCover",[],function(){return function(t,e){var i=this.getTansform(t,e)
t=i[0],e=i[1]
var o=this.style.__rect
return o||(o=this.style.__rect=this.getRect(this.style)),t>=o.x&&t<=o.x+o.width&&e>=o.y&&e<=o.y+o.height}}),define("echarts/util/ecQuery",["require","zrender/tool/util"],function(t){function e(t,e){if(void 0!==t){if(!e)return t
e=e.split(".")
for(var i=e.length,o=0;i>o;){if(t=t[e[o]],void 0===t)return
o++}return t}}function i(t,i){for(var o,n=0,r=t.length;r>n;n++)if(o=e(t[n],i),void 0!==o)return o}function o(t,i){for(var o,r=t.length;r--;){var s=e(t[r],i)
void 0!==s&&(void 0===o?o=n.clone(s):n.merge(o,s,!0))}return o}var n=t("zrender/tool/util")
return{query:e,deepQuery:i,deepMerge:o}}),define("echarts/util/number",[],function(){function t(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function e(e,i){return"string"==typeof e?t(e).match(/%$/)?parseFloat(e)/100*i:parseFloat(e):e}function i(t,i){return[e(i[0],t.getWidth()),e(i[1],t.getHeight())]}function o(t,i){i instanceof Array||(i=[0,i])
var o=Math.min(t.getWidth(),t.getHeight())/2
return[e(i[0],o),e(i[1],o)]}function n(t){return isNaN(t)?"-":(t=(t+"").split("."),t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:""))}return{parsePercent:e,parseCenter:i,parseRadius:o,addCommas:n}}),define("echarts/component/dataView",["require","./base","../config","zrender/tool/util","../component"],function(t){function e(t,e,o,n,r){i.call(this,t,e,o,n,r),this.dom=r.dom,this._tDom=document.createElement("div"),this._textArea=document.createElement("textArea"),this._buttonRefresh=document.createElement("button"),this._buttonClose=document.createElement("button"),this._hasShow=!1,this._zrHeight=o.getHeight(),this._zrWidth=o.getWidth(),this._tDom.className="echarts-dataview",this.hide(),this.dom.firstChild.appendChild(this._tDom),window.addEventListener?(this._tDom.addEventListener("click",this._stop),this._tDom.addEventListener("mousewheel",this._stop),this._tDom.addEventListener("mousemove",this._stop),this._tDom.addEventListener("mousedown",this._stop),this._tDom.addEventListener("mouseup",this._stop),this._tDom.addEventListener("touchstart",this._stop),this._tDom.addEventListener("touchmove",this._stop),this._tDom.addEventListener("touchend",this._stop)):(this._tDom.attachEvent("onclick",this._stop),this._tDom.attachEvent("onmousewheel",this._stop),this._tDom.attachEvent("onmousemove",this._stop),this._tDom.attachEvent("onmousedown",this._stop),this._tDom.attachEvent("onmouseup",this._stop))}var i=t("./base"),o=t("../config"),n=t("zrender/tool/util")
return e.prototype={type:o.COMPONENT_TYPE_DATAVIEW,_lang:["Data View","close","refresh"],_gCssText:"position:absolute;display:block;overflow:hidden;transition:height 0.8s,background-color 1s;-moz-transition:height 0.8s,background-color 1s;-webkit-transition:height 0.8s,background-color 1s;-o-transition:height 0.8s,background-color 1s;z-index:1;left:0;top:0;",hide:function(){this._sizeCssText="width:"+this._zrWidth+"px;height:0px;background-color:#f0ffff;",this._tDom.style.cssText=this._gCssText+this._sizeCssText},show:function(t){this._hasShow=!0
var e=this.query(this.option,"toolbox.feature.dataView.lang")||this._lang
this.option=t,this._tDom.innerHTML='<p style="padding:8px 0;margin:0 0 10px 0;border-bottom:1px solid #eee">'+(e[0]||this._lang[0])+"</p>",this._textArea.style.cssText="display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:"+(this._zrWidth-15)+"px;height:"+(this._zrHeight-100)+"px;"
var i=this.query(this.option,"toolbox.feature.dataView.optionToContent")
"function"!=typeof i?this._textArea.value=this._optionToContent():this._textArea.value=i(this.option),this._tDom.appendChild(this._textArea),this._buttonClose.style.cssText="float:right;padding:1px 6px;",this._buttonClose.innerHTML=e[1]||this._lang[1]
var o=this
this._buttonClose.onclick=function(){o.hide()},this._tDom.appendChild(this._buttonClose),this.query(this.option,"toolbox.feature.dataView.readOnly")===!1?(this._buttonRefresh.style.cssText="float:right;margin-right:10px;padding:1px 6px;",this._buttonRefresh.innerHTML=e[2]||this._lang[2],this._buttonRefresh.onclick=function(){o._save()},this._tDom.appendChild(this._buttonRefresh),this._textArea.readOnly=!1,this._textArea.style.cursor="default"):(this._textArea.readOnly=!0,this._textArea.style.cursor="text"),this._sizeCssText="width:"+this._zrWidth+"px;height:"+this._zrHeight+"px;background-color:#fff;",this._tDom.style.cssText=this._gCssText+this._sizeCssText},_optionToContent:function(){var t,e,i,n,r,s,a=[],h=""
if(this.option.xAxis)for(a=this.option.xAxis instanceof Array?this.option.xAxis:[this.option.xAxis],t=0,n=a.length;n>t;t++)if("category"==(a[t].type||"category")){for(s=[],e=0,i=a[t].data.length;i>e;e++)s.push(this.getDataFromOption(a[t].data[e]))
h+=s.join(", ")+"\n\n"}if(this.option.yAxis)for(a=this.option.yAxis instanceof Array?this.option.yAxis:[this.option.yAxis],t=0,n=a.length;n>t;t++)if("category"==a[t].type){for(s=[],e=0,i=a[t].data.length;i>e;e++)s.push(this.getDataFromOption(a[t].data[e]))
h+=s.join(", ")+"\n\n"}var l,c=this.option.series
for(t=0,n=c.length;n>t;t++){for(s=[],e=0,i=c[t].data.length;i>e;e++)r=c[t].data[e],l=c[t].type==o.CHART_TYPE_PIE||c[t].type==o.CHART_TYPE_MAP?(r.name||"-")+":":"",c[t].type==o.CHART_TYPE_SCATTER&&(r=this.getDataFromOption(r).join(", ")),s.push(l+this.getDataFromOption(r))
h+=(c[t].name||"-")+" : \n",h+=s.join(c[t].type==o.CHART_TYPE_SCATTER?"\n":", "),h+="\n\n"}return h},_save:function(){var t=this._textArea.value,e=this.query(this.option,"toolbox.feature.dataView.contentToOption")
if("function"!=typeof e){t=t.split("\n")
for(var i=[],n=0,r=t.length;r>n;n++)t[n]=this._trim(t[n]),""!==t[n]&&i.push(t[n])
this._contentToOption(i)}else e(t,this.option)
this.hide()
var s=this
setTimeout(function(){s.messageCenter&&s.messageCenter.dispatch(o.EVENT.DATA_VIEW_CHANGED,null,{option:s.option},s.myChart)},s.canvasSupported?800:100)},_contentToOption:function(t){var e,i,n,r,s,a,h,l=[],c=0
if(this.option.xAxis)for(l=this.option.xAxis instanceof Array?this.option.xAxis:[this.option.xAxis],e=0,r=l.length;r>e;e++)if("category"==(l[e].type||"category")){for(a=t[c].split(","),i=0,n=l[e].data.length;n>i;i++)h=this._trim(a[i]||""),s=l[e].data[i],void 0!==l[e].data[i].value?l[e].data[i].value=h:l[e].data[i]=h
c++}if(this.option.yAxis)for(l=this.option.yAxis instanceof Array?this.option.yAxis:[this.option.yAxis],e=0,r=l.length;r>e;e++)if("category"==l[e].type){for(a=t[c].split(","),i=0,n=l[e].data.length;n>i;i++)h=this._trim(a[i]||""),s=l[e].data[i],void 0!==l[e].data[i].value?l[e].data[i].value=h:l[e].data[i]=h
c++}var d=this.option.series
for(e=0,r=d.length;r>e;e++)if(c++,d[e].type==o.CHART_TYPE_SCATTER)for(var i=0,n=d[e].data.length;n>i;i++)a=t[c],h=a.replace(" ","").split(","),void 0!==d[e].data[i].value?d[e].data[i].value=h:d[e].data[i]=h,c++
else{a=t[c].split(",")
for(var i=0,n=d[e].data.length;n>i;i++)h=(a[i]||"").replace(/.*:/,""),h=this._trim(h),h="-"!=h&&""!==h?h-0:"-",void 0!==d[e].data[i].value?d[e].data[i].value=h:d[e].data[i]=h
c++}},_trim:function(t){var e=RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g")
return t.replace(e,"")},_stop:function(t){t=t||window.event,t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},resize:function(){this._zrHeight=this.zr.getHeight(),this._zrWidth=this.zr.getWidth(),this._tDom.offsetHeight>10&&(this._sizeCssText="width:"+this._zrWidth+"px;height:"+this._zrHeight+"px;background-color:#fff;",this._tDom.style.cssText=this._gCssText+this._sizeCssText,this._textArea.style.cssText="display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:"+(this._zrWidth-15)+"px;height:"+(this._zrHeight-100)+"px;")},dispose:function(){window.removeEventListener?(this._tDom.removeEventListener("click",this._stop),this._tDom.removeEventListener("mousewheel",this._stop),this._tDom.removeEventListener("mousemove",this._stop),this._tDom.removeEventListener("mousedown",this._stop),this._tDom.removeEventListener("mouseup",this._stop),this._tDom.removeEventListener("touchstart",this._stop),this._tDom.removeEventListener("touchmove",this._stop),this._tDom.removeEventListener("touchend",this._stop)):(this._tDom.detachEvent("onclick",this._stop),this._tDom.detachEvent("onmousewheel",this._stop),this._tDom.detachEvent("onmousemove",this._stop),this._tDom.detachEvent("onmousedown",this._stop),this._tDom.detachEvent("onmouseup",this._stop)),this._buttonRefresh.onclick=null,this._buttonClose.onclick=null,this._hasShow&&(this._tDom.removeChild(this._textArea),this._tDom.removeChild(this._buttonRefresh),this._tDom.removeChild(this._buttonClose)),this._textArea=null,this._buttonRefresh=null,this._buttonClose=null,this.dom.firstChild.removeChild(this._tDom),this._tDom=null}},n.inherits(e,i),t("../component").define("dataView",e),e}),define("echarts/util/shape/Cross",["require","zrender/shape/Base","zrender/shape/Line","zrender/tool/util","./normalIsCover"],function(t){function e(t){i.call(this,t)}var i=t("zrender/shape/Base"),o=t("zrender/shape/Line"),n=t("zrender/tool/util")
return e.prototype={type:"cross",buildPath:function(t,e){var i=e.rect
e.xStart=i.x,e.xEnd=i.x+i.width,e.yStart=e.yEnd=e.y,o.prototype.buildPath(t,e),e.xStart=e.xEnd=e.x,e.yStart=i.y,e.yEnd=i.y+i.height,o.prototype.buildPath(t,e)},getRect:function(t){return t.rect},isCover:t("./normalIsCover")},n.inherits(e,i),e}),define("zrender/shape/Sector",["require","../tool/math","../tool/computeBoundingBox","../tool/vector","./Base","../tool/util"],function(t){var e=t("../tool/math"),i=t("../tool/computeBoundingBox"),o=t("../tool/vector"),n=t("./Base"),r=o.create(),s=o.create(),a=o.create(),h=o.create(),l=function(t){n.call(this,t)}
return l.prototype={type:"sector",buildPath:function(t,i){var o=i.x,n=i.y,r=i.r0||0,s=i.r,a=i.startAngle,h=i.endAngle,l=i.clockWise||!1
a=e.degreeToRadian(a),h=e.degreeToRadian(h),l||(a=-a,h=-h)
var c=e.cos(a),d=e.sin(a)
t.moveTo(c*r+o,d*r+n),t.lineTo(c*s+o,d*s+n),t.arc(o,n,s,a,h,!l),t.lineTo(e.cos(h)*r+o,e.sin(h)*r+n),0!==r&&t.arc(o,n,r,h,a,l),t.closePath()},getRect:function(t){if(t.__rect)return t.__rect
var n=t.x,l=t.y,c=t.r0||0,d=t.r,u=e.degreeToRadian(t.startAngle),p=e.degreeToRadian(t.endAngle),f=t.clockWise
return f||(u=-u,p=-p),c>1?i.arc(n,l,c,u,p,!f,r,a):(r[0]=a[0]=n,r[1]=a[1]=l),i.arc(n,l,d,u,p,!f,s,h),o.min(r,r,s),o.max(a,a,h),t.__rect={x:r[0],y:r[1],width:a[0]-r[0],height:a[1]-r[1]},t.__rect}},t("../tool/util").inherits(l,n),l}),define("echarts/util/shape/Candle",["require","zrender/shape/Base","zrender/tool/util","./normalIsCover"],function(t){function e(t){i.call(this,t)}var i=t("zrender/shape/Base"),o=t("zrender/tool/util")
return e.prototype={type:"candle",_numberOrder:function(t,e){return e-t},buildPath:function(t,e){var i=o.clone(e.y).sort(this._numberOrder)
t.moveTo(e.x,i[3]),t.lineTo(e.x,i[2]),t.moveTo(e.x-e.width/2,i[2]),t.rect(e.x-e.width/2,i[2],e.width,i[1]-i[2]),t.moveTo(e.x,i[1]),t.lineTo(e.x,i[0])},getRect:function(t){if(!t.__rect){var e=0;("stroke"==t.brushType||"fill"==t.brushType)&&(e=t.lineWidth||1)
var i=o.clone(t.y).sort(this._numberOrder)
t.__rect={x:Math.round(t.x-t.width/2-e/2),y:Math.round(i[3]-e/2),width:t.width+e,height:i[0]-i[3]+e}}return t.__rect},isCover:t("./normalIsCover")},o.inherits(e,i),e}),define("zrender/tool/computeBoundingBox",["require","./vector","./curve"],function(t){function e(t,e,i){if(0!==t.length){for(var o=t[0][0],n=t[0][0],r=t[0][1],s=t[0][1],a=1;a<t.length;a++){var h=t[a]
h[0]<o&&(o=h[0]),h[0]>n&&(n=h[0]),h[1]<r&&(r=h[1]),h[1]>s&&(s=h[1])}e[0]=o,e[1]=r,i[0]=n,i[1]=s}}function i(t,e,i,o,n,s){var a=[]
r.cubicExtrema(t[0],e[0],i[0],o[0],a)
for(var h=0;h<a.length;h++)a[h]=r.cubicAt(t[0],e[0],i[0],o[0],a[h])
var l=[]
r.cubicExtrema(t[1],e[1],i[1],o[1],l)
for(var h=0;h<l.length;h++)l[h]=r.cubicAt(t[1],e[1],i[1],o[1],l[h])
a.push(t[0],o[0]),l.push(t[1],o[1])
var c=Math.min.apply(null,a),d=Math.max.apply(null,a),u=Math.min.apply(null,l),p=Math.max.apply(null,l)
n[0]=c,n[1]=u,s[0]=d,s[1]=p}function o(t,e,i,o,n){var s=r.quadraticExtremum(t[0],e[0],i[0]),a=r.quadraticExtremum(t[1],e[1],i[1])
s=Math.max(Math.min(s,1),0),a=Math.max(Math.min(a,1),0)
var h=1-s,l=1-a,c=h*h*t[0]+2*h*s*e[0]+s*s*i[0],d=h*h*t[1]+2*h*s*e[1]+s*s*i[1],u=l*l*t[0]+2*l*a*e[0]+a*a*i[0],p=l*l*t[1]+2*l*a*e[1]+a*a*i[1]
o[0]=Math.min(t[0],i[0],c,u),o[1]=Math.min(t[1],i[1],d,p),n[0]=Math.max(t[0],i[0],c,u),n[1]=Math.max(t[1],i[1],d,p)}var n=t("./vector"),r=t("./curve"),s=n.create(),a=n.create(),h=n.create(),l=function(t,e,i,o,r,l,c,d){if(Math.abs(o-r)>=2*Math.PI)return c[0]=t-i,c[1]=e-i,d[0]=t+i,void(d[1]=e+i)
if(s[0]=Math.cos(o)*i+t,s[1]=Math.sin(o)*i+e,a[0]=Math.cos(r)*i+t,a[1]=Math.sin(r)*i+e,n.min(c,s,a),n.max(d,s,a),o%=2*Math.PI,0>o&&(o+=2*Math.PI),r%=2*Math.PI,0>r&&(r+=2*Math.PI),o>r&&!l?r+=2*Math.PI:r>o&&l&&(o+=2*Math.PI),l){var u=r
r=o,o=u}for(var p=0;r>p;p+=Math.PI/2)p>o&&(h[0]=Math.cos(p)*i+t,h[1]=Math.sin(p)*i+e,n.min(c,h,c),n.max(d,h,d))}
return e.cubeBezier=i,e.quadraticBezier=o,e.arc=l,e}),define("echarts/util/shape/Chain",["require","zrender/shape/Base","./Icon","zrender/shape/util/dashedLineTo","zrender/tool/util","zrender/tool/matrix"],function(t){function e(t){i.call(this,t)}var i=t("zrender/shape/Base"),o=t("./Icon"),n=t("zrender/shape/util/dashedLineTo"),r=t("zrender/tool/util"),s=t("zrender/tool/matrix")
return e.prototype={type:"chain",brush:function(t,e){var i=this.style
e&&(i=this.getHighlightStyle(i,this.highlightStyle||{})),t.save(),this.setContext(t,i),this.setTransform(t),t.save(),t.beginPath(),this.buildLinePath(t,i),t.stroke(),t.restore(),this.brushSymbol(t,i),t.restore()},buildLinePath:function(t,e){var i=e.x,o=e.y+5,r=e.width,s=e.height/2-10
if(t.moveTo(i,o),t.lineTo(i,o+s),t.moveTo(i+r,o),t.lineTo(i+r,o+s),t.moveTo(i,o+s/2),e.lineType&&"solid"!=e.lineType){if("dashed"==e.lineType||"dotted"==e.lineType){var a=(e.lineWidth||1)*("dashed"==e.lineType?5:1)
n(t,i,o+s/2,i+r,o+s/2,a)}}else t.lineTo(i+r,o+s/2)},brushSymbol:function(t,e){var i=e.y+e.height/4
t.save()
for(var n,r=e.chainPoint,s=0,a=r.length;a>s;s++){if(n=r[s],"none"!=n.symbol){t.beginPath()
var h=n.symbolSize
o.prototype.buildPath(t,{iconType:n.symbol,x:n.x-h,y:i-h,width:2*h,height:2*h,n:n.n}),t.fillStyle=n.isEmpty?"#fff":e.strokeColor,t.closePath(),t.fill(),t.stroke()}n.showLabel&&(t.font=n.textFont,t.fillStyle=n.textColor,t.textAlign=n.textAlign,t.textBaseline=n.textBaseline,n.rotation?(t.save(),this._updateTextTransform(t,n.rotation),t.fillText(n.name,n.textX,n.textY),t.restore()):t.fillText(n.name,n.textX,n.textY))}t.restore()},_updateTextTransform:function(t,e){var i=s.create()
if(s.identity(i),0!==e[0]){var o=e[1]||0,n=e[2]||0;(o||n)&&s.translate(i,i,[-o,-n]),s.rotate(i,i,e[0]),(o||n)&&s.translate(i,i,[o,n])}t.transform.apply(t,i)},isCover:function(t,e){var i=this.style
return t>=i.x&&t<=i.x+i.width&&e>=i.y&&e<=i.y+i.height?!0:!1}},r.inherits(e,i),e}),define("zrender/shape/Ring",["require","./Base","../tool/util"],function(t){var e=t("./Base"),i=function(t){e.call(this,t)}
return i.prototype={type:"ring",buildPath:function(t,e){t.arc(e.x,e.y,e.r,0,2*Math.PI,!1),t.moveTo(e.x+e.r0,e.y),t.arc(e.x,e.y,e.r0,0,2*Math.PI,!0)},getRect:function(t){if(t.__rect)return t.__rect
var e
return e="stroke"==t.brushType||"fill"==t.brushType?t.lineWidth||1:0,t.__rect={x:Math.round(t.x-t.r-e/2),y:Math.round(t.y-t.r-e/2),width:2*t.r+e,height:2*t.r+e},t.__rect}},t("../tool/util").inherits(i,e),i}),define("echarts/component/axis",["require","./base","zrender/shape/Line","../config","../util/ecData","zrender/tool/util","zrender/tool/color","./categoryAxis","./valueAxis","../component"],function(t){function e(t,e,o,n,r,s){i.call(this,t,e,o,n,r),this.axisType=s,this._axisList=[],this.refresh(n)}var i=t("./base"),o=t("zrender/shape/Line"),n=t("../config"),r=t("../util/ecData"),s=t("zrender/tool/util"),a=t("zrender/tool/color")
return e.prototype={type:n.COMPONENT_TYPE_AXIS,axisBase:{_buildAxisLine:function(){var t=this.option.axisLine.lineStyle.width,e=t/2,i={_axisShape:"axisLine",zlevel:this.getZlevelBase(),z:this.getZBase()+3,hoverable:!1},n=this.grid
switch(this.option.position){case"left":i.style={xStart:n.getX()-e,yStart:n.getYend(),xEnd:n.getX()-e,yEnd:n.getY(),lineCap:"round"}
break
case"right":i.style={xStart:n.getXend()+e,yStart:n.getYend(),xEnd:n.getXend()+e,yEnd:n.getY(),lineCap:"round"}
break
case"bottom":i.style={xStart:n.getX(),yStart:n.getYend()+e,xEnd:n.getXend(),yEnd:n.getYend()+e,lineCap:"round"}
break
case"top":i.style={xStart:n.getX(),yStart:n.getY()-e,xEnd:n.getXend(),yEnd:n.getY()-e,lineCap:"round"}}var r=i.style
""!==this.option.name&&(r.text=this.option.name,r.textPosition=this.option.nameLocation,r.textFont=this.getFont(this.option.nameTextStyle),this.option.nameTextStyle.align&&(r.textAlign=this.option.nameTextStyle.align),this.option.nameTextStyle.baseline&&(r.textBaseline=this.option.nameTextStyle.baseline),this.option.nameTextStyle.color&&(r.textColor=this.option.nameTextStyle.color)),r.strokeColor=this.option.axisLine.lineStyle.color,r.lineWidth=t,this.isHorizontal()?r.yStart=r.yEnd=this.subPixelOptimize(r.yEnd,t):r.xStart=r.xEnd=this.subPixelOptimize(r.xEnd,t),r.lineType=this.option.axisLine.lineStyle.type,i=new o(i),this.shapeList.push(i)},_axisLabelClickable:function(t,e){return t?(r.pack(e,void 0,-1,void 0,-1,e.style.text),e.hoverable=!0,e.clickable=!0,e.highlightStyle={color:a.lift(e.style.color,1),brushType:"fill"},e):e},refixAxisShape:function(t,e){if(this.option.axisLine.onZero){var i
if(this.isHorizontal()&&null!=e)for(var o=0,n=this.shapeList.length;n>o;o++)"axisLine"===this.shapeList[o]._axisShape?(this.shapeList[o].style.yStart=this.shapeList[o].style.yEnd=this.subPixelOptimize(e,this.shapeList[o].stylelineWidth),this.zr.modShape(this.shapeList[o].id)):"axisTick"===this.shapeList[o]._axisShape&&(i=this.shapeList[o].style.yEnd-this.shapeList[o].style.yStart,this.shapeList[o].style.yStart=e-i,this.shapeList[o].style.yEnd=e,this.zr.modShape(this.shapeList[o].id))
if(!this.isHorizontal()&&null!=t)for(var o=0,n=this.shapeList.length;n>o;o++)"axisLine"===this.shapeList[o]._axisShape?(this.shapeList[o].style.xStart=this.shapeList[o].style.xEnd=this.subPixelOptimize(t,this.shapeList[o].stylelineWidth),this.zr.modShape(this.shapeList[o].id)):"axisTick"===this.shapeList[o]._axisShape&&(i=this.shapeList[o].style.xEnd-this.shapeList[o].style.xStart,this.shapeList[o].style.xStart=t,this.shapeList[o].style.xEnd=t+i,this.zr.modShape(this.shapeList[o].id))}},getPosition:function(){return this.option.position},isHorizontal:function(){return"bottom"===this.option.position||"top"===this.option.position}},reformOption:function(t){if(!t||t instanceof Array&&0===t.length?t=[{type:n.COMPONENT_TYPE_AXIS_VALUE}]:t instanceof Array||(t=[t]),t.length>2&&(t=[t[0],t[1]]),"xAxis"===this.axisType){(!t[0].position||"bottom"!=t[0].position&&"top"!=t[0].position)&&(t[0].position="bottom"),t.length>1&&(t[1].position="bottom"===t[0].position?"top":"bottom")
for(var e=0,i=t.length;i>e;e++)t[e].type=t[e].type||"category",t[e].xAxisIndex=e,t[e].yAxisIndex=-1}else{(!t[0].position||"left"!=t[0].position&&"right"!=t[0].position)&&(t[0].position="left"),t.length>1&&(t[1].position="left"===t[0].position?"right":"left")
for(var e=0,i=t.length;i>e;e++)t[e].type=t[e].type||"value",t[e].xAxisIndex=-1,t[e].yAxisIndex=e}return t},refresh:function(e){var i
e&&(this.option=e,"xAxis"===this.axisType?(this.option.xAxis=this.reformOption(e.xAxis),i=this.option.xAxis):(this.option.yAxis=this.reformOption(e.yAxis),i=this.option.yAxis),this.series=e.series)
for(var o=t("./categoryAxis"),n=t("./valueAxis"),r=Math.max(i&&i.length||0,this._axisList.length),s=0;r>s;s++)!this._axisList[s]||!e||i[s]&&this._axisList[s].type==i[s].type||(this._axisList[s].dispose&&this._axisList[s].dispose(),this._axisList[s]=!1),this._axisList[s]?this._axisList[s].refresh&&this._axisList[s].refresh(i?i[s]:!1,this.series):i&&i[s]&&(this._axisList[s]="category"===i[s].type?new o(this.ecTheme,this.messageCenter,this.zr,i[s],this.myChart,this.axisBase):new n(this.ecTheme,this.messageCenter,this.zr,i[s],this.myChart,this.axisBase,this.series))},getAxis:function(t){return this._axisList[t]},clear:function(){for(var t=0,e=this._axisList.length;e>t;t++)this._axisList[t].dispose&&this._axisList[t].dispose()
this._axisList=[]}},s.inherits(e,i),t("../component").define("axis",e),e}),define("echarts/component/grid",["require","./base","zrender/shape/Rectangle","../config","zrender/tool/util","../component"],function(t){function e(t,e,o,n,r){i.call(this,t,e,o,n,r),this.refresh(n)}var i=t("./base"),o=t("zrender/shape/Rectangle"),n=t("../config")
n.grid={zlevel:0,z:0,x:80,y:60,x2:80,y2:60,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}
var r=t("zrender/tool/util")
return e.prototype={type:n.COMPONENT_TYPE_GRID,getX:function(){return this._x},getY:function(){return this._y},getWidth:function(){return this._width},getHeight:function(){return this._height},getXend:function(){return this._x+this._width},getYend:function(){return this._y+this._height},getArea:function(){return{x:this._x,y:this._y,width:this._width,height:this._height}},getBbox:function(){return[[this._x,this._y],[this.getXend(),this.getYend()]]},refixAxisShape:function(t){for(var e,i,o,r=t.xAxis._axisList.concat(t.yAxis?t.yAxis._axisList:[]),s=r.length;s--;)o=r[s],o.type==n.COMPONENT_TYPE_AXIS_VALUE&&o._min<0&&o._max>=0&&(o.isHorizontal()?e=o.getCoord(0):i=o.getCoord(0))
if(void 0!==e||void 0!==i)for(s=r.length;s--;)r[s].refixAxisShape(e,i)},refresh:function(t){if(t||this._zrWidth!=this.zr.getWidth()||this._zrHeight!=this.zr.getHeight()){this.clear(),this.option=t||this.option,this.option.grid=this.reformOption(this.option.grid)
var e=this.option.grid
this._zrWidth=this.zr.getWidth(),this._zrHeight=this.zr.getHeight(),this._x=this.parsePercent(e.x,this._zrWidth),this._y=this.parsePercent(e.y,this._zrHeight)
var i=this.parsePercent(e.x2,this._zrWidth),n=this.parsePercent(e.y2,this._zrHeight)
void 0===e.width?this._width=this._zrWidth-this._x-i:this._width=this.parsePercent(e.width,this._zrWidth),this._width=this._width<=0?10:this._width,void 0===e.height?this._height=this._zrHeight-this._y-n:this._height=this.parsePercent(e.height,this._zrHeight),this._height=this._height<=0?10:this._height,this._x=this.subPixelOptimize(this._x,e.borderWidth),this._y=this.subPixelOptimize(this._y,e.borderWidth),this.shapeList.push(new o({zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:this._x,y:this._y,width:this._width,height:this._height,brushType:e.borderWidth>0?"both":"fill",color:e.backgroundColor,strokeColor:e.borderColor,lineWidth:e.borderWidth}})),this.zr.addShape(this.shapeList[0])}}},r.inherits(e,i),t("../component").define("grid",e),e}),define("echarts/component/dataZoom",["require","./base","zrender/shape/Rectangle","zrender/shape/Polygon","../util/shape/Icon","../config","../util/date","zrender/tool/util","../component"],function(t){function e(t,e,o,n,r){i.call(this,t,e,o,n,r)
var s=this
s._ondrift=function(t,e){return s.__ondrift(this,t,e)},s._ondragend=function(){return s.__ondragend()},this._fillerSize=30,this._isSilence=!1,this._zoom={},this.option.dataZoom=this.reformOption(this.option.dataZoom),this.zoomOption=this.option.dataZoom,this._handleSize=this.zoomOption.handleSize,this.myChart.canvasSupported||(this.zoomOption.realtime=!1),this._location=this._getLocation(),this._zoom=this._getZoom(),this._backupData(),this.option.dataZoom.show&&this._buildShape(),this._syncData()}var i=t("./base"),o=t("zrender/shape/Rectangle"),n=t("zrender/shape/Polygon"),r=t("../util/shape/Icon"),s=t("../config")
s.dataZoom={zlevel:0,z:4,show:!1,orient:"horizontal",backgroundColor:"rgba(0,0,0,0)",dataBackgroundColor:"#eee",fillerColor:"rgba(144,197,237,0.2)",handleColor:"rgba(70,130,180,0.8)",handleSize:8,showDetail:!0,realtime:!0}
var a=t("../util/date"),h=t("zrender/tool/util")
return e.prototype={type:s.COMPONENT_TYPE_DATAZOOM,_buildShape:function(){this._buildBackground(),this._buildFiller(),this._buildHandle(),this._buildFrame()
for(var t=0,e=this.shapeList.length;e>t;t++)this.zr.addShape(this.shapeList[t])
this._syncFrameShape()},_getLocation:function(){var t,e,i,o,n=this.component.grid
return"horizontal"==this.zoomOption.orient?(i=this.zoomOption.width||n.getWidth(),o=this.zoomOption.height||this._fillerSize,t=null!=this.zoomOption.x?this.zoomOption.x:n.getX(),e=null!=this.zoomOption.y?this.zoomOption.y:this.zr.getHeight()-o-2):(i=this.zoomOption.width||this._fillerSize,o=this.zoomOption.height||n.getHeight(),t=null!=this.zoomOption.x?this.zoomOption.x:2,e=null!=this.zoomOption.y?this.zoomOption.y:n.getY()),{x:t,y:e,width:i,height:o}},_getZoom:function(){var t=this.option.series,e=this.option.xAxis
!e||e instanceof Array||(e=[e],this.option.xAxis=e)
var i=this.option.yAxis
!i||i instanceof Array||(i=[i],this.option.yAxis=i)
var o,n,r=[],a=this.zoomOption.xAxisIndex
if(e&&null==a){o=[]
for(var h=0,l=e.length;l>h;h++)("category"==e[h].type||null==e[h].type)&&o.push(h)}else o=a instanceof Array?a:null!=a?[a]:[]
if(a=this.zoomOption.yAxisIndex,i&&null==a){n=[]
for(var h=0,l=i.length;l>h;h++)"category"==i[h].type&&n.push(h)}else n=a instanceof Array?a:null!=a?[a]:[]
for(var c,h=0,l=t.length;l>h;h++)if(c=t[h],c.type==s.CHART_TYPE_LINE||c.type==s.CHART_TYPE_BAR||c.type==s.CHART_TYPE_SCATTER||c.type==s.CHART_TYPE_K){for(var d=0,u=o.length;u>d;d++)if(o[d]==(c.xAxisIndex||0)){r.push(h)
break}for(var d=0,u=n.length;u>d;d++)if(n[d]==(c.yAxisIndex||0)){r.push(h)
break}null==this.zoomOption.xAxisIndex&&null==this.zoomOption.yAxisIndex&&c.data&&this.getDataFromOption(c.data[0])instanceof Array&&(c.type==s.CHART_TYPE_SCATTER||c.type==s.CHART_TYPE_LINE||c.type==s.CHART_TYPE_BAR)&&r.push(h)}var p=null!=this._zoom.start?this._zoom.start:null!=this.zoomOption.start?this.zoomOption.start:0,f=null!=this._zoom.end?this._zoom.end:null!=this.zoomOption.end?this.zoomOption.end:100
p>f&&(p+=f,f=p-f,p-=f)
var g=Math.round((f-p)/100*("horizontal"==this.zoomOption.orient?this._location.width:this._location.height))
return{start:p,end:f,start2:0,end2:100,size:g,xAxisIndex:o,yAxisIndex:n,seriesIndex:r,scatterMap:this._zoom.scatterMap||{}}},_backupData:function(){this._originalData={xAxis:{},yAxis:{},series:{}}
for(var t=this.option.xAxis,e=this._zoom.xAxisIndex,i=0,o=e.length;o>i;i++)this._originalData.xAxis[e[i]]=t[e[i]].data
for(var n=this.option.yAxis,r=this._zoom.yAxisIndex,i=0,o=r.length;o>i;i++)this._originalData.yAxis[r[i]]=n[r[i]].data
for(var a,h=this.option.series,l=this._zoom.seriesIndex,i=0,o=l.length;o>i;i++)a=h[l[i]],this._originalData.series[l[i]]=a.data,a.data&&this.getDataFromOption(a.data[0])instanceof Array&&(a.type==s.CHART_TYPE_SCATTER||a.type==s.CHART_TYPE_LINE||a.type==s.CHART_TYPE_BAR)&&(this._backupScale(),this._calculScatterMap(l[i]))},_calculScatterMap:function(e){this._zoom.scatterMap=this._zoom.scatterMap||{},this._zoom.scatterMap[e]=this._zoom.scatterMap[e]||{}
var i=t("../component"),o=i.get("axis"),n=h.clone(this.option.xAxis)
"category"==n[0].type&&(n[0].type="value"),n[1]&&"category"==n[1].type&&(n[1].type="value")
var r=new o(this.ecTheme,null,!1,{xAxis:n,series:this.option.series},this,"xAxis"),s=this.option.series[e].xAxisIndex||0
this._zoom.scatterMap[e].x=r.getAxis(s).getExtremum(),r.dispose(),n=h.clone(this.option.yAxis),"category"==n[0].type&&(n[0].type="value"),n[1]&&"category"==n[1].type&&(n[1].type="value"),r=new o(this.ecTheme,null,!1,{yAxis:n,series:this.option.series},this,"yAxis"),s=this.option.series[e].yAxisIndex||0,this._zoom.scatterMap[e].y=r.getAxis(s).getExtremum(),r.dispose()},_buildBackground:function(){var t=this._location.width,e=this._location.height
this.shapeList.push(new o({zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:this._location.x,y:this._location.y,width:t,height:e,color:this.zoomOption.backgroundColor}}))
for(var i=0,r=this._originalData.xAxis,a=this._zoom.xAxisIndex,h=0,l=a.length;l>h;h++)i=Math.max(i,r[a[h]].length)
for(var c=this._originalData.yAxis,d=this._zoom.yAxisIndex,h=0,l=d.length;l>h;h++)i=Math.max(i,c[d[h]].length)
for(var u,p=this._zoom.seriesIndex[0],f=this._originalData.series[p],g=Number.MIN_VALUE,m=Number.MAX_VALUE,h=0,l=f.length;l>h;h++)u=this.getDataFromOption(f[h],0),this.option.series[p].type==s.CHART_TYPE_K&&(u=u[1]),isNaN(u)&&(u=0),g=Math.max(g,u),m=Math.min(m,u)
var _=g-m,y=[],v=t/(i-(i>1?1:0)),x=e/(i-(i>1?1:0)),b=1
"horizontal"==this.zoomOption.orient&&1>v?b=Math.floor(3*i/t):"vertical"==this.zoomOption.orient&&1>x&&(b=Math.floor(3*i/e))
for(var h=0,l=i;l>h;h+=b)u=this.getDataFromOption(f[h],0),this.option.series[p].type==s.CHART_TYPE_K&&(u=u[1]),isNaN(u)&&(u=0),"horizontal"==this.zoomOption.orient?y.push([this._location.x+v*h,this._location.y+e-1-Math.round((u-m)/_*(e-10))]):y.push([this._location.x+1+Math.round((u-m)/_*(t-10)),this._location.y+x*(l-h-1)])
"horizontal"==this.zoomOption.orient?(y.push([this._location.x+t,this._location.y+e]),y.push([this._location.x,this._location.y+e])):(y.push([this._location.x,this._location.y]),y.push([this._location.x,this._location.y+e])),this.shapeList.push(new n({zlevel:this.getZlevelBase(),z:this.getZBase(),style:{pointList:y,color:this.zoomOption.dataBackgroundColor},hoverable:!1}))},_buildFiller:function(){this._fillerShae={zlevel:this.getZlevelBase(),z:this.getZBase(),draggable:!0,ondrift:this._ondrift,ondragend:this._ondragend,_type:"filler"},"horizontal"==this.zoomOption.orient?this._fillerShae.style={x:this._location.x+Math.round(this._zoom.start/100*this._location.width)+this._handleSize,y:this._location.y,width:this._zoom.size-2*this._handleSize,height:this._location.height,color:this.zoomOption.fillerColor,text:":::",textPosition:"inside"}:this._fillerShae.style={x:this._location.x,y:this._location.y+Math.round(this._zoom.start/100*this._location.height)+this._handleSize,width:this._location.width,height:this._zoom.size-2*this._handleSize,color:this.zoomOption.fillerColor,text:"::",textPosition:"inside"},this._fillerShae.highlightStyle={brushType:"fill",color:"rgba(0,0,0,0)"},this._fillerShae=new o(this._fillerShae),this.shapeList.push(this._fillerShae)},_buildHandle:function(){var t=this.zoomOption.showDetail?this._getDetail():{start:"",end:""}
this._startShape={zlevel:this.getZlevelBase(),z:this.getZBase(),draggable:!0,style:{iconType:"rectangle",x:this._location.x,y:this._location.y,width:this._handleSize,height:this._handleSize,color:this.zoomOption.handleColor,text:"=",textPosition:"inside"},highlightStyle:{text:t.start,brushType:"fill",textPosition:"left"},ondrift:this._ondrift,ondragend:this._ondragend},"horizontal"==this.zoomOption.orient?(this._startShape.style.height=this._location.height,this._endShape=h.clone(this._startShape),this._startShape.style.x=this._fillerShae.style.x-this._handleSize,this._endShape.style.x=this._fillerShae.style.x+this._fillerShae.style.width,this._endShape.highlightStyle.text=t.end,this._endShape.highlightStyle.textPosition="right"):(this._startShape.style.width=this._location.width,this._endShape=h.clone(this._startShape),this._startShape.style.y=this._fillerShae.style.y+this._fillerShae.style.height,this._startShape.highlightStyle.textPosition="bottom",this._endShape.style.y=this._fillerShae.style.y-this._handleSize,this._endShape.highlightStyle.text=t.end,this._endShape.highlightStyle.textPosition="top"),this._startShape=new r(this._startShape),this._endShape=new r(this._endShape),this.shapeList.push(this._startShape),this.shapeList.push(this._endShape)},_buildFrame:function(){var t=this.subPixelOptimize(this._location.x,1),e=this.subPixelOptimize(this._location.y,1)
this._startFrameShape={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:t,y:e,width:this._location.width-(t>this._location.x?1:0),height:this._location.height-(e>this._location.y?1:0),lineWidth:1,brushType:"stroke",strokeColor:this.zoomOption.handleColor}},this._endFrameShape=h.clone(this._startFrameShape),this._startFrameShape=new o(this._startFrameShape),this._endFrameShape=new o(this._endFrameShape),this.shapeList.push(this._startFrameShape),this.shapeList.push(this._endFrameShape)},_syncHandleShape:function(){"horizontal"==this.zoomOption.orient?(this._startShape.style.x=this._fillerShae.style.x-this._handleSize,this._endShape.style.x=this._fillerShae.style.x+this._fillerShae.style.width,this._zoom.start=(this._startShape.style.x-this._location.x)/this._location.width*100,this._zoom.end=(this._endShape.style.x+this._handleSize-this._location.x)/this._location.width*100):(this._startShape.style.y=this._fillerShae.style.y+this._fillerShae.style.height,this._endShape.style.y=this._fillerShae.style.y-this._handleSize,this._zoom.start=(this._location.y+this._location.height-this._startShape.style.y)/this._location.height*100,this._zoom.end=(this._location.y+this._location.height-this._endShape.style.y-this._handleSize)/this._location.height*100),this.zr.modShape(this._startShape.id),this.zr.modShape(this._endShape.id),this._syncFrameShape(),this.zr.refreshNextFrame()},_syncFillerShape:function(){var t,e
"horizontal"==this.zoomOption.orient?(t=this._startShape.style.x,e=this._endShape.style.x,this._fillerShae.style.x=Math.min(t,e)+this._handleSize,this._fillerShae.style.width=Math.abs(t-e)-this._handleSize,this._zoom.start=(Math.min(t,e)-this._location.x)/this._location.width*100,this._zoom.end=(Math.max(t,e)+this._handleSize-this._location.x)/this._location.width*100):(t=this._startShape.style.y,e=this._endShape.style.y,this._fillerShae.style.y=Math.min(t,e)+this._handleSize,this._fillerShae.style.height=Math.abs(t-e)-this._handleSize,this._zoom.start=(this._location.y+this._location.height-Math.max(t,e))/this._location.height*100,this._zoom.end=(this._location.y+this._location.height-Math.min(t,e)-this._handleSize)/this._location.height*100),this.zr.modShape(this._fillerShae.id),this._syncFrameShape(),this.zr.refreshNextFrame()},_syncFrameShape:function(){"horizontal"==this.zoomOption.orient?(this._startFrameShape.style.width=this._fillerShae.style.x-this._location.x,this._endFrameShape.style.x=this._fillerShae.style.x+this._fillerShae.style.width,this._endFrameShape.style.width=this._location.x+this._location.width-this._endFrameShape.style.x):(this._startFrameShape.style.y=this._fillerShae.style.y+this._fillerShae.style.height,this._startFrameShape.style.height=this._location.y+this._location.height-this._startFrameShape.style.y,this._endFrameShape.style.height=this._fillerShae.style.y-this._location.y),this.zr.modShape(this._startFrameShape.id),this.zr.modShape(this._endFrameShape.id)},_syncShape:function(){this.zoomOption.show&&("horizontal"==this.zoomOption.orient?(this._startShape.style.x=this._location.x+this._zoom.start/100*this._location.width,this._endShape.style.x=this._location.x+this._zoom.end/100*this._location.width-this._handleSize,this._fillerShae.style.x=this._startShape.style.x+this._handleSize,this._fillerShae.style.width=this._endShape.style.x-this._startShape.style.x-this._handleSize):(this._startShape.style.y=this._location.y+this._location.height-this._zoom.start/100*this._location.height,this._endShape.style.y=this._location.y+this._location.height-this._zoom.end/100*this._location.height-this._handleSize,this._fillerShae.style.y=this._endShape.style.y+this._handleSize,this._fillerShae.style.height=this._startShape.style.y-this._endShape.style.y-this._handleSize),this.zr.modShape(this._startShape.id),this.zr.modShape(this._endShape.id),this.zr.modShape(this._fillerShae.id),this._syncFrameShape(),this.zr.refresh())},_syncData:function(t){var e,i,o,n,r
for(var a in this._originalData){e=this._originalData[a]
for(var h in e)r=e[h],null!=r&&(n=r.length,i=Math.floor(this._zoom.start/100*n),o=Math.ceil(this._zoom.end/100*n),this.getDataFromOption(r[0])instanceof Array&&this.option[a][h].type!=s.CHART_TYPE_K?(this._setScale(),this.option[a][h].data=this._synScatterData(h,r)):this.option[a][h].data=r.slice(i,o))}this._isSilence||!this.zoomOption.realtime&&!t||this.messageCenter.dispatch(s.EVENT.DATA_ZOOM,null,{zoom:this._zoom},this.myChart)},_synScatterData:function(t,e){if(0===this._zoom.start&&100==this._zoom.end&&0===this._zoom.start2&&100==this._zoom.end2)return e
var i,o,n,r,s,a=[],h=this._zoom.scatterMap[t]
"horizontal"==this.zoomOption.orient?(i=h.x.max-h.x.min,o=this._zoom.start/100*i+h.x.min,n=this._zoom.end/100*i+h.x.min,i=h.y.max-h.y.min,r=this._zoom.start2/100*i+h.y.min,s=this._zoom.end2/100*i+h.y.min):(i=h.x.max-h.x.min,o=this._zoom.start2/100*i+h.x.min,n=this._zoom.end2/100*i+h.x.min,i=h.y.max-h.y.min,r=this._zoom.start/100*i+h.y.min,s=this._zoom.end/100*i+h.y.min)
for(var l,c=0,d=e.length;d>c;c++)l=e[c].value||e[c],l[0]>=o&&l[0]<=n&&l[1]>=r&&l[1]<=s&&a.push(e[c])
return a},_setScale:function(){var t=0!==this._zoom.start||100!==this._zoom.end||0!==this._zoom.start2||100!==this._zoom.end2,e={xAxis:this.option.xAxis,yAxis:this.option.yAxis}
for(var i in e)for(var o=0,n=e[i].length;n>o;o++)e[i][o].scale=t||e[i][o]._scale},_backupScale:function(){var t={xAxis:this.option.xAxis,yAxis:this.option.yAxis}
for(var e in t)for(var i=0,o=t[e].length;o>i;i++)t[e][i]._scale=t[e][i].scale},_getDetail:function(){var t="horizontal"==this.zoomOption.orient?"xAxis":"yAxis",e=this._originalData[t]
for(var i in e){var o=e[i]
if(null!=o){var n=o.length,r=Math.floor(this._zoom.start/100*n),s=Math.ceil(this._zoom.end/100*n)
return s-=s>0?1:0,{start:this.getDataFromOption(o[r]),end:this.getDataFromOption(o[s])}}}var h=this._zoom.seriesIndex[0],l=this.option.series[h][t+"Index"]||0,c=this.option[t][l].type,d=this._zoom.scatterMap[h][t.charAt(0)].min,u=this._zoom.scatterMap[h][t.charAt(0)].max,p=u-d
if("value"==c)return{start:d+p*this._zoom.start/100,end:d+p*this._zoom.end/100}
if("time"==c){u=d+p*this._zoom.end/100,d+=p*this._zoom.start/100
var f=a.getAutoFormatter(d,u).formatter
return{start:a.format(f,d),end:a.format(f,u)}}return{start:"",end:""}},__ondrift:function(t,e,i){this.zoomOption.zoomLock&&(t=this._fillerShae)
var o="filler"==t._type?this._handleSize:0
if("horizontal"==this.zoomOption.orient?t.style.x+e-o<=this._location.x?t.style.x=this._location.x+o:t.style.x+e+t.style.width+o>=this._location.x+this._location.width?t.style.x=this._location.x+this._location.width-t.style.width-o:t.style.x+=e:t.style.y+i-o<=this._location.y?t.style.y=this._location.y+o:t.style.y+i+t.style.height+o>=this._location.y+this._location.height?t.style.y=this._location.y+this._location.height-t.style.height-o:t.style.y+=i,"filler"==t._type?this._syncHandleShape():this._syncFillerShape(),this.zoomOption.realtime&&this._syncData(),this.zoomOption.showDetail){var n=this._getDetail()
this._startShape.style.text=this._startShape.highlightStyle.text=n.start,this._endShape.style.text=this._endShape.highlightStyle.text=n.end,this._startShape.style.textPosition=this._startShape.highlightStyle.textPosition,this._endShape.style.textPosition=this._endShape.highlightStyle.textPosition}return!0},__ondragend:function(){this.zoomOption.showDetail&&(this._startShape.style.text=this._endShape.style.text="=",this._startShape.style.textPosition=this._endShape.style.textPosition="inside",this.zr.modShape(this._startShape.id),this.zr.modShape(this._endShape.id),this.zr.refreshNextFrame()),this.isDragend=!0},ondragend:function(t,e){this.isDragend&&t.target&&(!this.zoomOption.realtime&&this._syncData(),e.dragOut=!0,e.dragIn=!0,this._isSilence||this.zoomOption.realtime||this.messageCenter.dispatch(s.EVENT.DATA_ZOOM,null,{zoom:this._zoom},this.myChart),e.needRefresh=!1,this.isDragend=!1)},ondataZoom:function(t,e){e.needRefresh=!0},absoluteZoom:function(t){this._zoom.start=t.start,this._zoom.end=t.end,this._zoom.start2=t.start2,this._zoom.end2=t.end2,this._syncShape(),this._syncData(!0)},rectZoom:function(t){if(!t)return this._zoom.start=this._zoom.start2=0,this._zoom.end=this._zoom.end2=100,this._syncShape(),this._syncData(!0),this._zoom
var e=this.component.grid.getArea(),i={x:t.x,y:t.y,width:t.width,height:t.height}
if(i.width<0&&(i.x+=i.width,i.width=-i.width),i.height<0&&(i.y+=i.height,i.height=-i.height),i.x>e.x+e.width||i.y>e.y+e.height)return!1
i.x<e.x&&(i.x=e.x),i.x+i.width>e.x+e.width&&(i.width=e.x+e.width-i.x),i.y+i.height>e.y+e.height&&(i.height=e.y+e.height-i.y)
var o,n=(i.x-e.x)/e.width,r=1-(i.x+i.width-e.x)/e.width,s=1-(i.y+i.height-e.y)/e.height,a=(i.y-e.y)/e.height
return"horizontal"==this.zoomOption.orient?(o=this._zoom.end-this._zoom.start,this._zoom.start+=o*n,this._zoom.end-=o*r,o=this._zoom.end2-this._zoom.start2,this._zoom.start2+=o*s,this._zoom.end2-=o*a):(o=this._zoom.end-this._zoom.start,this._zoom.start+=o*s,this._zoom.end-=o*a,o=this._zoom.end2-this._zoom.start2,this._zoom.start2+=o*n,this._zoom.end2-=o*r),this._syncShape(),this._syncData(!0),this._zoom},syncBackupData:function(t){for(var e,i,o=this._originalData.series,n=t.series,r=0,s=n.length;s>r;r++){i=n[r].data||n[r].eventList,e=o[r]?Math.floor(this._zoom.start/100*o[r].length):0
for(var a=0,h=i.length;h>a;a++)o[r]&&(o[r][a+e]=i[a])}},syncOption:function(t){this.silence(!0),this.option=t,this.option.dataZoom=this.reformOption(this.option.dataZoom),this.zoomOption=this.option.dataZoom,this.myChart.canvasSupported||(this.zoomOption.realtime=!1),this.clear(),this._location=this._getLocation(),this._zoom=this._getZoom(),this._backupData(),this.option.dataZoom&&this.option.dataZoom.show&&this._buildShape(),this._syncData(),this.silence(!1)},silence:function(t){this._isSilence=t},getRealDataIndex:function(t,e){if(!this._originalData||0===this._zoom.start&&100==this._zoom.end)return e
var i=this._originalData.series
return i[t]?Math.floor(this._zoom.start/100*i[t].length)+e:-1},resize:function(){this.clear(),this._location=this._getLocation(),this._zoom=this._getZoom(),this.option.dataZoom.show&&this._buildShape()}},h.inherits(e,i),t("../component").define("dataZoom",e),e}),define("echarts/component/categoryAxis",["require","./base","zrender/shape/Text","zrender/shape/Line","zrender/shape/Rectangle","../config","zrender/tool/util","zrender/tool/area","../component"],function(t){function e(t,e,o,n,r,s){if(n.data.length<1)return void console.error("option.data.length < 1.")
i.call(this,t,e,o,n,r),this.grid=this.component.grid
for(var a in s)this[a]=s[a]
this.refresh(n)}var i=t("./base"),o=t("zrender/shape/Text"),n=t("zrender/shape/Line"),r=t("zrender/shape/Rectangle"),s=t("../config")
s.categoryAxis={zlevel:0,z:0,show:!0,position:"bottom",name:"",nameLocation:"end",nameTextStyle:{},boundaryGap:!0,axisLine:{show:!0,onZero:!0,lineStyle:{color:"#48b",width:2,type:"solid"}},axisTick:{show:!0,interval:"auto",inside:!1,length:5,lineStyle:{color:"#333",width:1}},axisLabel:{show:!0,interval:"auto",rotate:0,margin:8,textStyle:{color:"#333"}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}}
var a=t("zrender/tool/util"),h=t("zrender/tool/area")
return e.prototype={type:s.COMPONENT_TYPE_AXIS_CATEGORY,_getReformedLabel:function(t){var e=this.getDataFromOption(this.option.data[t]),i=this.option.data[t].formatter||this.option.axisLabel.formatter
return i&&("function"==typeof i?e=i.call(this.myChart,e):"string"==typeof i&&(e=i.replace("{value}",e))),e},_getInterval:function(){var t=this.option.axisLabel.interval
if("auto"==t){var e=this.option.axisLabel.textStyle.fontSize,i=this.option.data,o=this.option.data.length
if(this.isHorizontal())if(o>3){var n,r,s=this.getGap(),l=!1,c=Math.floor(.5/s)
for(c=1>c?1:c,t=Math.floor(15/s);!l&&o>t;){t+=c,l=!0,n=Math.floor(s*t)
for(var d=Math.floor((o-1)/t)*t;d>=0;d-=t){if(0!==this.option.axisLabel.rotate)r=e
else if(i[d].textStyle)r=h.getTextWidth(this._getReformedLabel(d),this.getFont(a.merge(i[d].textStyle,this.option.axisLabel.textStyle)))
else{var u=this._getReformedLabel(d)+"",p=(u.match(/\w/g)||"").length,f=u.length-p
r=p*e*2/3+f*e}if(r>n){l=!1
break}}}}else t=1
else if(o>3){var s=this.getGap()
for(t=Math.floor(11/s);e>s*t-6&&o>t;)t++}else t=1}else t="function"==typeof t?1:t-0+1
return t},_buildShape:function(){if(this._interval=this._getInterval(),this.option.show){this.option.splitArea.show&&this._buildSplitArea(),this.option.splitLine.show&&this._buildSplitLine(),this.option.axisLine.show&&this._buildAxisLine(),this.option.axisTick.show&&this._buildAxisTick(),this.option.axisLabel.show&&this._buildAxisLabel()
for(var t=0,e=this.shapeList.length;e>t;t++)this.zr.addShape(this.shapeList[t])}},_buildAxisTick:function(){var t,e=this.option.data,i=this.option.data.length,o=this.option.axisTick,r=o.length,s=o.lineStyle.color,a=o.lineStyle.width,h="function"==typeof o.interval?o.interval:"auto"==o.interval&&"function"==typeof this.option.axisLabel.interval?this.option.axisLabel.interval:!1,l=h?1:"auto"==o.interval?this._interval:o.interval-0+1,c=o.onGap,d=c?this.getGap()/2:void 0===c&&this.option.boundaryGap?this.getGap()/2:0,u=d>0?-l:0
if(this.isHorizontal())for(var p,f="bottom"==this.option.position?o.inside?this.grid.getYend()-r-1:this.grid.getYend()+1:o.inside?this.grid.getY()+1:this.grid.getY()-r-1,g=u;i>g;g+=l)(!h||h(g,e[g]))&&(p=this.subPixelOptimize(this.getCoordByIndex(g)+(g>=0?d:0),a),t={_axisShape:"axisTick",zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:p,yStart:f,xEnd:p,yEnd:f+r,strokeColor:s,lineWidth:a}},this.shapeList.push(new n(t)))
else for(var m,_="left"==this.option.position?o.inside?this.grid.getX()+1:this.grid.getX()-r-1:o.inside?this.grid.getXend()-r-1:this.grid.getXend()+1,g=u;i>g;g+=l)(!h||h(g,e[g]))&&(m=this.subPixelOptimize(this.getCoordByIndex(g)-(g>=0?d:0),a),t={_axisShape:"axisTick",zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:_,yStart:m,xEnd:_+r,yEnd:m,strokeColor:s,lineWidth:a}},this.shapeList.push(new n(t)))},_buildAxisLabel:function(){var t,e,i=this.option.data,n=this.option.data.length,r=this.option.axisLabel,s=r.rotate,h=r.margin,l=r.clickable,c=r.textStyle,d="function"==typeof r.interval?r.interval:!1
if(this.isHorizontal()){var u,p
"bottom"==this.option.position?(u=this.grid.getYend()+h,p="top"):(u=this.grid.getY()-h,p="bottom")
for(var f=0;n>f;f+=this._interval)d&&!d(f,i[f])||""===this._getReformedLabel(f)||(e=a.merge(i[f].textStyle||{},c),t={zlevel:this.getZlevelBase(),z:this.getZBase()+3,hoverable:!1,style:{x:this.getCoordByIndex(f),y:u,color:e.color,text:this._getReformedLabel(f),textFont:this.getFont(e),textAlign:e.align||"center",textBaseline:e.baseline||p}},s&&(t.style.textAlign=s>0?"bottom"==this.option.position?"right":"left":"bottom"==this.option.position?"left":"right",t.rotation=[s*Math.PI/180,t.style.x,t.style.y]),this.shapeList.push(new o(this._axisLabelClickable(l,t))))}else{var g,m
"left"==this.option.position?(g=this.grid.getX()-h,m="right"):(g=this.grid.getXend()+h,m="left")
for(var f=0;n>f;f+=this._interval)d&&!d(f,i[f])||""===this._getReformedLabel(f)||(e=a.merge(i[f].textStyle||{},c),t={zlevel:this.getZlevelBase(),z:this.getZBase()+3,hoverable:!1,style:{x:g,y:this.getCoordByIndex(f),color:e.color,text:this._getReformedLabel(f),textFont:this.getFont(e),textAlign:e.align||m,textBaseline:e.baseline||0===f&&""!==this.option.name?"bottom":f==n-1&&""!==this.option.name?"top":"middle"}},s&&(t.rotation=[s*Math.PI/180,t.style.x,t.style.y]),this.shapeList.push(new o(this._axisLabelClickable(l,t))))}},_buildSplitLine:function(){var t,e=this.option.data,i=this.option.data.length,o=this.option.splitLine,r=o.lineStyle.type,s=o.lineStyle.width,a=o.lineStyle.color
a=a instanceof Array?a:[a]
var h=a.length,l="function"==typeof this.option.axisLabel.interval?this.option.axisLabel.interval:!1,c=o.onGap,d=c?this.getGap()/2:void 0===c&&this.option.boundaryGap?this.getGap()/2:0
if(i-=c||void 0===c&&this.option.boundaryGap?1:0,this.isHorizontal())for(var u,p=this.grid.getY(),f=this.grid.getYend(),g=0;i>g;g+=this._interval)(!l||l(g,e[g]))&&(u=this.subPixelOptimize(this.getCoordByIndex(g)+d,s),t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:u,yStart:p,xEnd:u,yEnd:f,strokeColor:a[g/this._interval%h],lineType:r,lineWidth:s}},this.shapeList.push(new n(t)))
else for(var m,_=this.grid.getX(),y=this.grid.getXend(),g=0;i>g;g+=this._interval)(!l||l(g,e[g]))&&(m=this.subPixelOptimize(this.getCoordByIndex(g)-d,s),t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:_,yStart:m,xEnd:y,yEnd:m,strokeColor:a[g/this._interval%h],lineType:r,lineWidth:s}},this.shapeList.push(new n(t)))},_buildSplitArea:function(){var t,e=this.option.data,i=this.option.splitArea,o=i.areaStyle.color
if(o instanceof Array){var n=o.length,s=this.option.data.length,a="function"==typeof this.option.axisLabel.interval?this.option.axisLabel.interval:!1,h=i.onGap,l=h?this.getGap()/2:void 0===h&&this.option.boundaryGap?this.getGap()/2:0
if(this.isHorizontal())for(var c,d=this.grid.getY(),u=this.grid.getHeight(),p=this.grid.getX(),f=0;s>=f;f+=this._interval)a&&!a(f,e[f])&&s>f||(c=s>f?this.getCoordByIndex(f)+l:this.grid.getXend(),t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:p,y:d,width:c-p,height:u,color:o[f/this._interval%n]}},this.shapeList.push(new r(t)),p=c)
else for(var g,m=this.grid.getX(),_=this.grid.getWidth(),y=this.grid.getYend(),f=0;s>=f;f+=this._interval)a&&!a(f,e[f])&&s>f||(g=s>f?this.getCoordByIndex(f)-l:this.grid.getY(),t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:m,y:g,width:_,height:y-g,color:o[f/this._interval%n]}},this.shapeList.push(new r(t)),y=g)}else t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:this.grid.getX(),y:this.grid.getY(),width:this.grid.getWidth(),height:this.grid.getHeight(),color:o}},this.shapeList.push(new r(t))},refresh:function(t){t&&(this.option=this.reformOption(t),this.option.axisLabel.textStyle=this.getTextStyle(this.option.axisLabel.textStyle)),this.clear(),this._buildShape()},getGap:function(){var t=this.option.data.length,e=this.isHorizontal()?this.grid.getWidth():this.grid.getHeight()
return this.option.boundaryGap?e/t:e/(t>1?t-1:1)},getCoord:function(t){for(var e=this.option.data,i=e.length,o=this.getGap(),n=this.option.boundaryGap?o/2:0,r=0;i>r;r++){if(this.getDataFromOption(e[r])==t)return n=this.isHorizontal()?this.grid.getX()+n:this.grid.getYend()-n
n+=o}},getCoordByIndex:function(t){if(0>t)return this.isHorizontal()?this.grid.getX():this.grid.getYend()
if(t>this.option.data.length-1)return this.isHorizontal()?this.grid.getXend():this.grid.getY()
var e=this.getGap(),i=this.option.boundaryGap?e/2:0
return i+=t*e,i=this.isHorizontal()?this.grid.getX()+i:this.grid.getYend()-i},getNameByIndex:function(t){return this.getDataFromOption(this.option.data[t])},getIndexByName:function(t){for(var e=this.option.data,i=e.length,o=0;i>o;o++)if(this.getDataFromOption(e[o])==t)return o
return-1},getValueFromCoord:function(){return""},isMainAxis:function(t){return t%this._interval===0}},a.inherits(e,i),t("../component").define("categoryAxis",e),e}),define("echarts/component/valueAxis",["require","./base","zrender/shape/Text","zrender/shape/Line","zrender/shape/Rectangle","../config","../util/date","zrender/tool/util","../util/smartSteps","../util/accMath","../component"],function(t){function e(t,e,o,n,r,s,a){if(!a||0===a.length)return void console.err("option.series.length == 0.")
i.call(this,t,e,o,n,r),this.series=a,this.grid=this.component.grid
for(var h in s)this[h]=s[h]
this.refresh(n,a)}var i=t("./base"),o=t("zrender/shape/Text"),n=t("zrender/shape/Line"),r=t("zrender/shape/Rectangle"),s=t("../config")
s.valueAxis={zlevel:0,z:0,show:!0,position:"left",name:"",nameLocation:"end",nameTextStyle:{},boundaryGap:[0,0],axisLine:{show:!0,onZero:!0,lineStyle:{color:"#48b",width:2,type:"solid"}},axisTick:{show:!1,inside:!1,length:5,lineStyle:{color:"#333",width:1}},axisLabel:{show:!0,rotate:0,margin:8,textStyle:{color:"#333"}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}}
var a=t("../util/date"),h=t("zrender/tool/util")
return e.prototype={type:s.COMPONENT_TYPE_AXIS_VALUE,_buildShape:function(){if(this._hasData=!1,this._calculateValue(),this._hasData&&this.option.show){this.option.splitArea.show&&this._buildSplitArea(),this.option.splitLine.show&&this._buildSplitLine(),this.option.axisLine.show&&this._buildAxisLine(),this.option.axisTick.show&&this._buildAxisTick(),this.option.axisLabel.show&&this._buildAxisLabel()
for(var t=0,e=this.shapeList.length;e>t;t++)this.zr.addShape(this.shapeList[t])}},_buildAxisTick:function(){var t,e=this._valueList,i=this._valueList.length,o=this.option.axisTick,r=o.length,s=o.lineStyle.color,a=o.lineStyle.width
if(this.isHorizontal())for(var h,l="bottom"===this.option.position?o.inside?this.grid.getYend()-r-1:this.grid.getYend()+1:o.inside?this.grid.getY()+1:this.grid.getY()-r-1,c=0;i>c;c++)h=this.subPixelOptimize(this.getCoord(e[c]),a),t={_axisShape:"axisTick",zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:h,yStart:l,xEnd:h,yEnd:l+r,strokeColor:s,lineWidth:a}},this.shapeList.push(new n(t))
else for(var d,u="left"===this.option.position?o.inside?this.grid.getX()+1:this.grid.getX()-r-1:o.inside?this.grid.getXend()-r-1:this.grid.getXend()+1,c=0;i>c;c++)d=this.subPixelOptimize(this.getCoord(e[c]),a),t={_axisShape:"axisTick",zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:u,yStart:d,xEnd:u+r,yEnd:d,strokeColor:s,lineWidth:a}},this.shapeList.push(new n(t))},_buildAxisLabel:function(){var t,e=this._valueList,i=this._valueList.length,n=this.option.axisLabel.rotate,r=this.option.axisLabel.margin,s=this.option.axisLabel.clickable,a=this.option.axisLabel.textStyle
if(this.isHorizontal()){var h,l
"bottom"===this.option.position?(h=this.grid.getYend()+r,l="top"):(h=this.grid.getY()-r,l="bottom")
for(var c=0;i>c;c++)t={zlevel:this.getZlevelBase(),z:this.getZBase()+3,hoverable:!1,style:{x:this.getCoord(e[c]),y:h,color:"function"==typeof a.color?a.color(e[c]):a.color,text:this._valueLabel[c],textFont:this.getFont(a),textAlign:a.align||"center",textBaseline:a.baseline||l}},n&&(t.style.textAlign=n>0?"bottom"===this.option.position?"right":"left":"bottom"===this.option.position?"left":"right",t.rotation=[n*Math.PI/180,t.style.x,t.style.y]),this.shapeList.push(new o(this._axisLabelClickable(s,t)))}else{var d,u
"left"===this.option.position?(d=this.grid.getX()-r,u="right"):(d=this.grid.getXend()+r,u="left")
for(var c=0;i>c;c++)t={zlevel:this.getZlevelBase(),z:this.getZBase()+3,hoverable:!1,style:{x:d,y:this.getCoord(e[c]),color:"function"==typeof a.color?a.color(e[c]):a.color,text:this._valueLabel[c],textFont:this.getFont(a),textAlign:a.align||u,textBaseline:a.baseline||(0===c&&""!==this.option.name?"bottom":c===i-1&&""!==this.option.name?"top":"middle")}},n&&(t.rotation=[n*Math.PI/180,t.style.x,t.style.y]),this.shapeList.push(new o(this._axisLabelClickable(s,t)))}},_buildSplitLine:function(){var t,e=this._valueList,i=this._valueList.length,o=this.option.splitLine,r=o.lineStyle.type,s=o.lineStyle.width,a=o.lineStyle.color
a=a instanceof Array?a:[a]
var h=a.length
if(this.isHorizontal())for(var l,c=this.grid.getY(),d=this.grid.getYend(),u=0;i>u;u++)l=this.subPixelOptimize(this.getCoord(e[u]),s),t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:l,yStart:c,xEnd:l,yEnd:d,strokeColor:a[u%h],lineType:r,lineWidth:s}},this.shapeList.push(new n(t))
else for(var p,f=this.grid.getX(),g=this.grid.getXend(),u=0;i>u;u++)p=this.subPixelOptimize(this.getCoord(e[u]),s),t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{xStart:f,yStart:p,xEnd:g,yEnd:p,strokeColor:a[u%h],lineType:r,lineWidth:s}},this.shapeList.push(new n(t))},_buildSplitArea:function(){var t,e=this.option.splitArea.areaStyle.color
if(e instanceof Array){var i=e.length,o=this._valueList,n=this._valueList.length
if(this.isHorizontal())for(var s,a=this.grid.getY(),h=this.grid.getHeight(),l=this.grid.getX(),c=0;n>=c;c++)s=n>c?this.getCoord(o[c]):this.grid.getXend(),t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:l,y:a,width:s-l,height:h,color:e[c%i]}},this.shapeList.push(new r(t)),l=s
else for(var d,u=this.grid.getX(),p=this.grid.getWidth(),f=this.grid.getYend(),c=0;n>=c;c++)d=n>c?this.getCoord(o[c]):this.grid.getY(),t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:u,y:d,width:p,height:f-d,color:e[c%i]}},this.shapeList.push(new r(t)),f=d}else t={zlevel:this.getZlevelBase(),z:this.getZBase(),hoverable:!1,style:{x:this.grid.getX(),y:this.grid.getY(),width:this.grid.getWidth(),height:this.grid.getHeight(),color:e}},this.shapeList.push(new r(t))},_calculateValue:function(){if(isNaN(this.option.min-0)||isNaN(this.option.max-0)){for(var t,e,i={},o=this.component.legend,n=0,r=this.series.length;r>n;n++)(this.series[n].type==s.CHART_TYPE_LINE||this.series[n].type==s.CHART_TYPE_BAR||this.series[n].type==s.CHART_TYPE_SCATTER||this.series[n].type==s.CHART_TYPE_K||this.series[n].type==s.CHART_TYPE_EVENTRIVER)&&(!o||o.isSelected(this.series[n].name))&&(t=this.series[n].xAxisIndex||0,e=this.series[n].yAxisIndex||0,(this.option.xAxisIndex==t||this.option.yAxisIndex==e)&&this._calculSum(i,n))
var a
for(var n in i){a=i[n]
for(var h=0,l=a.length;l>h;h++)if(!isNaN(a[h])){this._hasData=!0,this._min=a[h],this._max=a[h]
break}if(this._hasData)break}for(var n in i){a=i[n]
for(var h=0,l=a.length;l>h;h++)isNaN(a[h])||(this._min=Math.min(this._min,a[h]),this._max=Math.max(this._max,a[h]))}var c=Math.abs(this._max-this._min)
this._min=isNaN(this.option.min-0)?this._min-Math.abs(c*this.option.boundaryGap[0]):this.option.min-0,this._max=isNaN(this.option.max-0)?this._max+Math.abs(c*this.option.boundaryGap[1]):this.option.max-0,this._min===this._max&&(0===this._max?this._max=1:this._max>0?this._min=this._max/this.option.splitNumber!=null?this.option.splitNumber:5:this._max=this._max/this.option.splitNumber!=null?this.option.splitNumber:5),"time"!=this.option.type?this._reformValue(this.option.scale):this._reformTimeValue()}else this._hasData=!0,this._min=this.option.min-0,this._max=this.option.max-0,"time"!=this.option.type?this._customerValue():this._reformTimeValue()},_calculSum:function(t,e){var i,o,n=this.series[e].name||"kener"
if(this.series[e].stack){var r="__Magic_Key_Positive__"+this.series[e].stack,h="__Magic_Key_Negative__"+this.series[e].stack
t[r]=t[r]||[],t[h]=t[h]||[],t[n]=t[n]||[],o=this.series[e].data
for(var l=0,c=o.length;c>l;l++)i=this.getDataFromOption(o[l]),"-"!==i&&(i-=0,i>=0?null!=t[r][l]?t[r][l]+=i:t[r][l]=i:null!=t[h][l]?t[h][l]+=i:t[h][l]=i,this.option.scale&&t[n].push(i))}else if(t[n]=t[n]||[],this.series[e].type!=s.CHART_TYPE_EVENTRIVER){o=this.series[e].data
for(var l=0,c=o.length;c>l;l++)i=this.getDataFromOption(o[l]),this.series[e].type===s.CHART_TYPE_K?(t[n].push(i[0]),t[n].push(i[1]),t[n].push(i[2]),t[n].push(i[3])):i instanceof Array?(-1!=this.option.xAxisIndex&&t[n].push("time"!=this.option.type?i[0]:a.getNewDate(i[0])),-1!=this.option.yAxisIndex&&t[n].push("time"!=this.option.type?i[1]:a.getNewDate(i[1]))):t[n].push(i)}else{o=this.series[e].eventList
for(var l=0,c=o.length;c>l;l++)for(var d=o[l].evolution,u=0,p=d.length;p>u;u++)t[n].push(a.getNewDate(d[u].time))}},_reformValue:function(e){var i=t("../util/smartSteps"),o=this.option.splitNumber
!e&&this._min>=0&&this._max>=0&&(this._min=0),!e&&this._min<=0&&this._max<=0&&(this._max=0)
var n=i(this._min,this._max,o)
o=null!=o?o:n.secs,this._min=n.min,this._max=n.max,this._valueList=n.pnts,this._reformLabelData()},_reformTimeValue:function(){var t=null!=this.option.splitNumber?this.option.splitNumber:5,e=a.getAutoFormatter(this._min,this._max,t),i=e.formatter,o=e.gapValue
this._valueList=[a.getNewDate(this._min)]
var n
switch(i){case"week":n=a.nextMonday(this._min)
break
case"month":n=a.nextNthOnMonth(this._min,1)
break
case"quarter":n=a.nextNthOnQuarterYear(this._min,1)
break
case"half-year":n=a.nextNthOnHalfYear(this._min,1)
break
case"year":n=a.nextNthOnYear(this._min,1)
break
default:72e5>=o?n=(Math.floor(this._min/o)+1)*o:(n=a.getNewDate(this._min- -o),n.setHours(6*Math.round(n.getHours()/6)),n.setMinutes(0),n.setSeconds(0))}for(n-this._min<o/2&&(n-=-o),e=a.getNewDate(n),t*=1.5;t-- >=0&&(("month"==i||"quarter"==i||"half-year"==i||"year"==i)&&e.setDate(1),!(this._max-e<o/2));)this._valueList.push(e),e=a.getNewDate(e- -o)
this._valueList.push(a.getNewDate(this._max)),this._reformLabelData(i)},_customerValue:function(){var e=t("../util/accMath"),i=null!=this.option.splitNumber?this.option.splitNumber:5,o=(this._max-this._min)/i
this._valueList=[]
for(var n=0;i>=n;n++)this._valueList.push(e.accAdd(this._min,e.accMul(o,n)))
this._reformLabelData()},_reformLabelData:function(t){this._valueLabel=[]
var e=this.option.axisLabel.formatter
if(e)for(var i=0,o=this._valueList.length;o>i;i++)"function"==typeof e?this._valueLabel.push(t?e.call(this.myChart,this._valueList[i],t):e.call(this.myChart,this._valueList[i])):"string"==typeof e&&this._valueLabel.push(t?a.format(e,this._valueList[i]):e.replace("{value}",this._valueList[i]))
else if(t)for(var i=0,o=this._valueList.length;o>i;i++)this._valueLabel.push(a.format(t,this._valueList[i]))
else for(var i=0,o=this._valueList.length;o>i;i++)this._valueLabel.push(this.numAddCommas(this._valueList[i]))},getExtremum:function(){return this._calculateValue(),{min:this._min,max:this._max}},refresh:function(t,e){t&&(this.option=this.reformOption(t),this.option.axisLabel.textStyle=h.merge(this.option.axisLabel.textStyle||{},this.ecTheme.textStyle),this.series=e),this.zr&&(this.clear(),this._buildShape())},getCoord:function(t){t=t<this._min?this._min:t,t=t>this._max?this._max:t
var e
return e=this.isHorizontal()?this.grid.getX()+(t-this._min)/(this._max-this._min)*this.grid.getWidth():this.grid.getYend()-(t-this._min)/(this._max-this._min)*this.grid.getHeight()},getCoordSize:function(t){return this.isHorizontal()?Math.abs(t/(this._max-this._min)*this.grid.getWidth()):Math.abs(t/(this._max-this._min)*this.grid.getHeight())},getValueFromCoord:function(t){var e
return this.isHorizontal()?(t=t<this.grid.getX()?this.grid.getX():t,t=t>this.grid.getXend()?this.grid.getXend():t,e=this._min+(t-this.grid.getX())/this.grid.getWidth()*(this._max-this._min)):(t=t<this.grid.getY()?this.grid.getY():t,t=t>this.grid.getYend()?this.grid.getYend():t,e=this._max-(t-this.grid.getY())/this.grid.getHeight()*(this._max-this._min)),e.toFixed(2)-0},isMaindAxis:function(t){for(var e=0,i=this._valueList.length;i>e;e++)if(this._valueList[e]===t)return!0
return!1}},h.inherits(e,i),t("../component").define("valueAxis",e),e}),define("echarts/util/date",[],function(){function t(t,e,i){i=i>1?i:2
for(var o,n,r,s,a=0,h=c.length;h>a;a++)if(o=c[a].value,n=Math.ceil(e/o)*o-Math.floor(t/o)*o,Math.round(n/o)<=1.2*i){r=c[a].formatter,s=c[a].value
break}return null==r&&(r="year",o=317088e5,n=Math.ceil(e/o)*o-Math.floor(t/o)*o,s=Math.round(n/(i-1)/o)*o),{formatter:r,gapValue:s}}function e(t){return 10>t?"0"+t:t}function i(t,i){("week"==t||"month"==t||"quarter"==t||"half-year"==t||"year"==t)&&(t="MM - dd\nyyyy")
var o=l(i),n=o.getFullYear(),r=o.getMonth()+1,s=o.getDate(),a=o.getHours(),h=o.getMinutes(),c=o.getSeconds()
return t=t.replace("MM",e(r)),t=t.toLowerCase(),t=t.replace("yyyy",n),t=t.replace("yy",n%100),t=t.replace("dd",e(s)),t=t.replace("d",s),t=t.replace("hh",e(a)),t=t.replace("h",a),t=t.replace("mm",e(h)),t=t.replace("m",h),t=t.replace("ss",e(c)),t=t.replace("s",c)}function o(t){return t=l(t),t.setDate(t.getDate()+8-t.getDay()),t}function n(t,e,i){return t=l(t),t.setMonth(Math.ceil((t.getMonth()+1)/i)*i),t.setDate(e),t}function r(t,e){return n(t,e,1)}function s(t,e){return n(t,e,3)}function a(t,e){return n(t,e,6)}function h(t,e){return n(t,e,12)}function l(t){return t instanceof Date?t:new Date("string"==typeof t?t.replace(/-/g,"/"):t)}var c=[{formatter:"hh : mm : ss",value:1e3},{formatter:"hh : mm : ss",value:5e3},{formatter:"hh : mm : ss",value:1e4},{formatter:"hh : mm : ss",value:15e3},{formatter:"hh : mm : ss",value:3e4},{formatter:"hh : mm\nMM - dd",value:6e4},{formatter:"hh : mm\nMM - dd",value:3e5},{formatter:"hh : mm\nMM - dd",value:6e5},{formatter:"hh : mm\nMM - dd",value:9e5},{formatter:"hh : mm\nMM - dd",value:18e5},{formatter:"hh : mm\nMM - dd",value:36e5},{formatter:"hh : mm\nMM - dd",value:72e5},{formatter:"hh : mm\nMM - dd",value:216e5},{formatter:"hh : mm\nMM - dd",value:432e5},{formatter:"MM - dd\nyyyy",value:864e5},{formatter:"week",value:6048e5},{formatter:"month",value:26784e5},{formatter:"quarter",value:8208e6},{formatter:"half-year",value:16416e6},{formatter:"year",value:32832e6}]
return{getAutoFormatter:t,getNewDate:l,format:i,nextMonday:o,nextNthPerNmonth:n,nextNthOnMonth:r,nextNthOnQuarterYear:s,nextNthOnHalfYear:a,nextNthOnYear:h}}),define("echarts/util/smartSteps",[],function(){function t(t){return w.log(M(t))/w.LN10}function e(t){return w.pow(10,t)}function i(t){return t===L(t)}function o(t,e,o,n){v=n||{},x=v.steps||z,b=v.secs||C,o=E(+o||0)%99,t=+t||0,e=+e||0,T=S=0,"min"in v&&(t=+v.min||0,T=1),"max"in v&&(e=+v.max||0,S=1),t>e&&(e=[t,t=e][0])
var r=e-t
if(T&&S)return y(t,e,o)
if((o||5)>r){if(i(t)&&i(e))return p(t,e,o)
if(0===r)return f(t,e,o)}return l(t,e,o)}function n(t,i,o,n){n=n||0
var a=r((i-t)/o,-1),h=r(t,-1,1),l=r(i,-1),c=w.min(a.e,h.e,l.e)
0===h.c?c=w.min(a.e,l.e):0===l.c&&(c=w.min(a.e,h.e)),s(a,{c:0,e:c}),s(h,a,1),s(l,a),n+=c,t=h.c,i=l.c
for(var d=(i-t)/o,u=e(n),p=0,f=[],g=o+1;g--;)f[g]=(t+d*g)*u
if(0>n){p=m(u),d=+(d*u).toFixed(p),t=+(t*u).toFixed(p),i=+(i*u).toFixed(p)
for(var g=f.length;g--;)f[g]=f[g].toFixed(p),0===+f[g]&&(f[g]="0")}else t*=u,i*=u,d*=u
return b=0,x=0,v=0,{min:t,max:i,secs:o,step:d,fix:p,exp:n,pnts:f}}function r(o,n,r){n=E(n%10)||2,0>n&&(i(o)?n=(""+M(o)).replace(/0+$/,"").length||1:(o=o.toFixed(15).replace(/0+$/,""),n=o.replace(".","").replace(/^[-0]+/,"").length,o=+o))
var s=L(t(o))-n+1,a=+(o*e(-s)).toFixed(15)||0
return a=r?L(a):A(a),!a&&(s=0),(""+M(a)).length>n&&(s+=1,a/=10),{c:a,e:s}}function s(t,i,o){var n=i.e-t.e
n&&(t.e+=n,t.c*=e(-n),t.c=o?L(t.c):A(t.c))}function a(t,e,i){t.e<e.e?s(e,t,i):s(t,e,i)}function h(t,e){e=e||z,t=r(t)
for(var i=t.c,o=0;i>e[o];)o++
if(!e[o])for(i/=10,t.e+=1,o=0;i>e[o];)o++
return t.c=e[o],t}function l(t,e,o){var a,l=o||+b.slice(-1),f=h((e-t)/l,x),m=r(e-t),y=r(t,-1,1),v=r(e,-1)
if(s(m,f),s(y,f,1),s(v,f),o?a=d(y,v,l):l=c(y,v),i(t)&&i(e)&&t*e>=0){if(l>e-t)return p(t,e,l)
l=u(t,e,o,y,v,l)}var z=g(t,e,y.c,v.c)
return y.c=z[0],v.c=z[1],(T||S)&&_(t,e,y,v),n(y.c,v.c,l,v.e)}function c(t,i){for(var o,n,r,s,a=[],l=b.length;l--;)o=b[l],n=h((i.c-t.c)/o,x),n=n.c*e(n.e),r=L(t.c/n)*n,s=A(i.c/n)*n,a[l]={min:r,max:s,step:n,span:s-r}
return a.sort(function(t,e){var i=t.span-e.span
return 0===i&&(i=t.step-e.step),i}),a=a[0],o=a.span/a.step,t.c=a.min,i.c=a.max,3>o?2*o:o}function d(t,i,o){for(var n,r,s=i.c,a=(i.c-t.c)/o-1;s>t.c;)a=h(a+1,x),a=a.c*e(a.e),n=a*o,r=A(i.c/a)*a,s=r-n
var l=t.c-s,c=r-i.c,d=l-c
return d>1.1*a&&(d=E(d/a/2)*a,s+=d,r+=d),t.c=s,i.c=r,a}function u(t,o,n,r,s,a){var h=s.c-r.c,l=h/a*e(s.e)
if(!i(l)&&(l=L(l),h=l*a,o-t>h&&(l+=1,h=l*a,!n&&l*(a-1)>=o-t&&(a-=1,h=l*a)),h>=o-t)){var c=h-(o-t)
r.c=E(t-c/2),s.c=E(o+c/2),r.e=0,s.e=0}return a}function p(t,e,i){if(i=i||5,T)e=t+i
else if(S)t=e-i
else{var o=i-(e-t),r=E(t-o/2),s=E(e+o/2),a=g(t,e,r,s)
t=a[0],e=a[1]}return n(t,e,i)}function f(t,e,i){i=i||5
var o=w.min(M(e/i),i)/2.1
return T?e=t+o:S?t=e-o:(t-=o,e+=o),l(t,e,i)}function g(t,e,i,o){return t>=0&&0>i?(o-=i,i=0):0>=e&&o>0&&(i-=o,o=0),[i,o]}function m(t){return t=(+t).toFixed(15).split("."),t.pop().replace(/0+$/,"").length}function _(t,e,i,o){if(T){var n=r(t,4,1)
i.e-n.e>6&&(n={c:0,e:i.e}),a(i,n),a(o,n),o.c+=n.c-i.c,i.c=n.c}else if(S){var s=r(e,4)
o.e-s.e>6&&(s={c:0,e:o.e}),a(i,s),a(o,s),i.c+=s.c-o.c,o.c=s.c}}function y(t,e,i){var o=i?[i]:b,a=e-t
if(0===a)return e=r(e,3),i=o[0],e.c=E(e.c+i/2),n(e.c-i,e.c,i,e.e)
M(e/a)<1e-6&&(e=0),M(t/a)<1e-6&&(t=0)
var h,l,c,d=[[5,10],[10,2],[50,10],[100,2]],u=[],p=[],f=r(e-t,3),g=r(t,-1,1),m=r(e,-1)
s(g,f,1),s(m,f),a=m.c-g.c,f.c=a
for(var _=o.length;_--;){i=o[_],h=A(a/i),l=h*i-a,c=3*(l+3),c+=2*(i-o[0]+2),i%5===0&&(c-=10)
for(var y=d.length;y--;)h%d[y][0]===0&&(c/=d[y][1])
p[_]=[i,h,l,c].join(),u[_]={secs:i,step:h,delta:l,score:c}}return u.sort(function(t,e){return t.score-e.score}),u=u[0],g.c=E(g.c-u.delta/2),m.c=E(m.c+u.delta/2),n(g.c,m.c,u.secs,f.e)}var v,x,b,T,S,z=[10,20,25,50],C=[4,5,6],w=Math,E=w.round,L=w.floor,A=w.ceil,M=w.abs
return o})
