(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[44513],{613316:(e,t,s)=>{function i(e){return[0,24,21,26].includes(e)}function o({articleType:e,id:t,title:s}){const i=s.toLowerCase().replace(/[.,\/#!?$%\^&\*+;:{}=\-_`~()\’'"]/g,"").trim().replace(/\s+/g,"-");return"today"===e?`/today/shop/${i}/${t}/`:`/discover/article/${i}/${t}/`}s.d(t,{x:()=>o,y:()=>i})},12610:(e,t,s)=>{function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,{Z3:()=>u,LU:()=>h,ZP:()=>m});const o=1e6,r=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,n={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},a={},l={background:"#FF8A8A",transform:"scale(.98)"},d={init:e=>({transform:`scale(${a[e]?.8:.99})`,transition:"transform .2s ease-in-out",background:"#8E8E8E"}),[n.enter]:{background:"#A0DCC8",transform:"scale(.99)"},[n.exit]:l,[n.stopped]:l,[n.paused]:l,[n.resumed]:{background:"#0FA573",transform:"scale(.99)"}};class c{constructor(e){i(this,"setMutationObserver",(e=>(this.mutationObserver=e,this))),i(this,"startMutationObserver",(e=>{this.mutationObserver&&this.mutationObserver.observe(this.node,e)})),i(this,"stopMutationObserver",(()=>{this.mutationObserver&&this.mutationObserver.disconnect()})),i(this,"handleIntersectionChange",(e=>{const t=e.intersectionRatio>0||e.isIntersecting;if(t&&!this.inViewport){const e=Date.now();this.startTime=e,this._debug(n.enter,{startTime:e,node:this.node}),this.enterCallbacks.forEach((e=>e()))}else!t&&this.inViewport&&(this._debug(n.exit,!0),this.exitCallbacks.forEach((e=>e(this.toJSON()))));this.inViewport=t})),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId=""}onEnterViewport(e){return this.enterCallbacks.push(e),this}onExitViewport(e){return this.exitCallbacks.push(e),this}setDebugId(e){return this.debugId=e,r&&Object.assign(this.node.style,d.init(e)),this}pause(){return this.inViewport&&(this._debug(n.paused,!0),this.exitCallbacks.forEach((e=>e(this.toJSON())))),this}resume(){if(this.inViewport){const e=Date.now();this._debug(n.resumed,{startTime:e}),this.startTime=e}return this}stop(e){return this.inViewport&&(this._debug(n.stopped,!0),this.exitCallbacks.forEach((t=>t(this.toJSON(e))))),this}toJSON(e=""){return{startTime:this.startTime*o,endTime:Date.now()*o,forcedExit:e}}toDebugJSON(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:(Date.now()-this.startTime)/1e3+" seconds"}}_debug(e,t){if(r)switch(window.console.log(`📌 ${e} -- ${this.debugId}`),!0===t&&window.console.log(this.toDebugJSON()),"object"==typeof t&&window.console.log(t),d[e]&&Object.assign(this.node.style,d[e]),e){case n.flushed:case n.paused:case n.exit:a[this.debugId]=!0}}}function p(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const u=!0,h=!1;class m{constructor(){p(this,"_delegateChange",(e=>{e.forEach((e=>{const t=this.activeImpressions.get(e.target);t&&t.handleIntersectionChange(e)}))})),p(this,"_handleMutations",((e,t)=>{const s=this.mutationObservers.get(t);s&&s.offsetHeight<1&&s&&this.stop(s,"removed")})),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=h,this.observer=new window.IntersectionObserver(this._delegateChange),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}setExperimentStatus(e){this.inExperiment!==e&&(this.inExperiment=e)}stop(e,t=""){const s=this.activeImpressions.get(e);s&&(s.stop(t),this.mutationObservers.delete(s.mutationObserver),s.stopMutationObserver(),this.activeImpressions.delete(e),this.observer.unobserve(e))}start(e){let t=this.activeImpressions.get(e);if(!t){t=new c(e),this.activeImpressions.set(e,t),this.observer.observe(e);const s=(e,t)=>this._handleMutations(e,t);t.setMutationObserver(new window.MutationObserver(s)),this.mutationObservers.set(t.mutationObserver,e),t.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})}return t}pause(e=u){this.paused||(Array.from(this.activeImpressions.values()).forEach((e=>e.pause())),this.paused=!0,this.pausePriority===h&&(this.pausePriority=e))}resume(e=u){e===h&&this.pausePriority===u||this.paused&&(Array.from(this.activeImpressions.values()).forEach((e=>e.resume())),this.paused=!1,this.pausePriority=h)}addObstruction(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}removeObstruction(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}updateObstructions(){this._calculateRootMargins()}_calculateRootMargins(){const e=Array.from(this.topObstructions).reduce(((e,t)=>{const{bottom:s}=t.getBoundingClientRect();return s>e?s:e}),0),t=window.innerHeight-Array.from(this.bottomObstructions).reduce(((e,t)=>{const{top:s}=t.getBoundingClientRect();return s<e?s:e}),window.innerHeight);if(e!==this.topHeight||t!==this.bottomHeight){const s={rootMargin:`${-e}px 0px ${-t}px`};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,s),Array.from(this.activeImpressions.values()).forEach((e=>this.observer.observe(e.node))),this.topHeight=e,this.bottomHeight=t}}}},564194:(e,t,s)=>{s.d(t,{Z:()=>m});var i=s(667294),o=s(973935),r=s(983722),n=s(834911),a=s(124580),l=s(407043),d=s(802201),c=s(785893);function p(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const u={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},BoardMoreIdeasRep:{impressionType:"boardMoreIdeasImpressions",idType:"boardIdStr",eventType:10054},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},TodayArticle:{impressionType:"todayArticleImpressions",idType:"todayArticleIdStr",eventType:8569},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061},Comment:{impressionType:"commentImpressions",idType:"commentIdStr",eventType:9127}};class h extends i.Component{constructor(e){super(e),p(this,"trackImpression",(()=>{try{this.node=(0,o.findDOMNode)(this),this.node instanceof HTMLElement&&this.impressionsFramework.start(this.node).onExitViewport(this.logImpression).setDebugId(this.props.loggingId||"unknown")}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}})),p(this,"logImpression",(e=>{const{carousel_data:t,closeupImpressionType:s,closeupNavigationType:i,componentType:o,contextLogData:n,elementType:a,impressionAuxFields:l,impressionType:d,loggingId:c,objectIdStr:p,slotIndex:h,trackCarousel:m,viewData:g,viewParameter:b,viewType:y,logContextEvent:x}=this.props,v=u[d],_=v.idType,w=e.forcedExit&&"removed"===e.forcedExit?0:void 0,T={endTime:e.endTime,[_]:c,slotIndex:h,time:e.startTime,renderDuration:e.endTime-e.startTime,type:s,...l,forcedExit:w},f=(0,r.Z)(),{checkExperiment:I}=(f||{}).experimentsClient||{},C="function"==typeof I&&I("web_mweb_story_impression_fix").anyEnabled;if(C&&(u.Story={impressionType:"storyImpression",idType:"idStr",eventType:170}),m||x({event_type:v.eventType,component:o,element:a,event_data:{[v.impressionType]:"Story"===d&&C?T:[T]},object_id_str:p,view_type:y,view_data:g||{},view_parameter:b,aux_data:{...n,closeup_navigation_type:i}}),t&&m){const{carousel_slots:e,index:s=0,id:i}=t;x({event_type:7352,component:o,event_data:{pinCarouselSlotImpressions:[{...T,carouselDataId:Number(i),carouselSlotId:(null==e?void 0:e[s])&&Number(e[s].id),slotIndex:s}]},object_id_str:p,view_type:y,view_data:g||{},view_parameter:b,aux_data:{...n}})}})),this.impressionsFramework=e.impressionsFramework||a.Z}componentDidMount(){this.props.inImpressionExp&&!this.impressionsFramework.inExperiment&&this.impressionsFramework.setExperimentStatus(!0),this.props.isPaused||this.trackImpression()}componentDidUpdate(e){e.isPaused&&!this.props.isPaused&&this.trackImpression()}componentWillUnmount(){this.node instanceof HTMLElement&&this.impressionsFramework.stop(this.node)}render(){return i.Children.only(this.props.children)}}function m(e){const{logContextEvent:t}=(0,l.v)(),{loggingId:s}=e,i=(0,d.AF)(),o=s?i[s]:{};return(0,c.jsx)(h,{...e,logContextEvent:t,carousel_data:o&&(0,n.Z)({carouselData:o.carousel_data,images:o.images,richMetadata:o.rich_metadata,richSummary:o.rich_summary})})}},124580:(e,t,s)=>{s.d(t,{Z:()=>i});const i=new(s(12610).ZP)},391143:(e,t,s)=>{s.d(t,{Z:()=>r});var i=s(643913),o=s(613316);function r({storyCategory:e,query:t,referringSource:s,bubbleId:r,storyId:n,title:a}){const l=[0,24,21,26].includes(e),d=(0,i.Z)({q:t,rs:s||void 0,b_id:r,source_id:n}),c=l&&a?(0,o.x)({title:a,id:r,articleType:"discover"}):`/discover/article/${r}/`;return l?c:"/search/pins/"+(d?"?"+d:"")}},940882:(e,t,s)=>{s.d(t,{J:()=>i,Z:()=>o});const i=-1;function o(e){switch(e){case 0:return"shopping-bag";case 1:return"tag";default:return"search"}}},934523:(e,t,s)=>{s.d(t,{L1:()=>r,Rz:()=>l,WZ:()=>n,cI:()=>o,fe:()=>a,hu:()=>i});const i=64,o=80,r=22,n="HeaderContent",a=671,l={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}},802201:(e,t,s)=>{s.d(t,{AF:()=>a,H0:()=>l,S6:()=>d,_S:()=>c});var i=s(702664),o=s(425288),r=s(785893);const{Provider:n,useHook:a,useMaybeHook:l}=(0,o.Z)("Pins");function d(){const e=a();return t=>e[t]}function c({children:e}){const t=(0,i.useSelector)((({pins:e})=>e),i.shallowEqual);return(0,r.jsx)(n,{value:t,children:e})}},57636:(e,t,s)=>{s.d(t,{Z:()=>g});var i=s(667294),o=s(116303),r=s(63444),n=s(564194),a=s(391143),l=s(667976),d=s(66699),c=s(898781),p=s(19121),u=s(940882),h=s(883119),m=s(785893);function g({bubble:e,contextLogData:t,disableTabIndex:s,handleReport:g,height:b,imgSignature:y,isHovered:x,onClick:v,onMouseEnter:_,onMouseLeave:w,referringSource:T,searchBoxRenderStopwatch:f,showFlag:I,slotIndex:C,storyId:S,viewParameter:j,viewType:O,width:P}){const k=(0,c.ZP)(),E=(0,p.Z)(),{id:M,action:R,cover_images:D,dominant_colors:A,identifier_icon_type:H,title:F,story_category:Z,curator:z}=e,L=D&&D[0]?D[0]["280x280"]||D[0]["236x"]:void 0,N=(0,d.Z)(F&&F.format||"",F&&F.args||{}),B=A&&A.length?A[0]:"gray",V=(null==R?void 0:R.url)||(0,a.Z)({storyCategory:Z,query:N,referringSource:T,bubbleId:M,storyId:S,title:F.format});return(0,m.jsx)(n.Z,{impressionAuxFields:{storyCategory:Z,storyIdStr:S},impressionType:"Article",loggingId:M,viewType:O,viewParameter:j,slotIndex:C,contextLogData:{story_id:S,...t},children:(0,m.jsx)(r.Z,{backgroundColor:B,coverImage:L,disableTabIndex:s,height:b,id:M,isHovered:x,onClick:v,onMouseEnter:_,onMouseLeave:w,searchBoxRenderStopwatch:f,url:V,width:P,children:({isHovered:e})=>(0,m.jsxs)(i.Fragment,{children:[z&&26!==Z&&(0,m.jsx)(h.xu,{position:"absolute",top:!0,left:!0,padding:2,children:(0,m.jsx)(o.Z,{outline:!0,size:"xs",src:z.image_small_url,name:z.full_name})}),H&&H!==u.J&&(0,m.jsx)(h.xu,{alignItems:"center",color:"default",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,m.jsx)(h.JO,{icon:(0,u.Z)(H),accessibilityLabel:k.bt("购物图标", "Shopping icon", "bubble.shoppingIcon.label", undefined, true),color:"default",size:12})}),(0,m.jsx)(h.xu,{display:"flex",height:b,width:P||"100%",position:"absolute",top:!0,padding:3,alignItems:26===Z?"end":"center",justifyContent:"center",children:(0,m.jsxs)(h.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:[b>200?(0,m.jsx)(h.X6,{size:"500",align:"center",color:"light",children:N}):(0,m.jsx)(h.xv,{align:"center",color:"light",weight:"bold",children:N}),z&&26===Z&&(0,m.jsxs)(h.xu,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:4,children:[(0,m.jsx)(h.xu,{marginEnd:2,children:(0,m.jsx)(o.Z,{outline:!0,size:"xs",src:z.image_small_url,name:z.full_name})}),(0,m.jsx)(h.xv,{size:"100",color:"light",children:z.full_name})]})]})}),E.isAuth&&E.isEmployee&&I?(0,m.jsx)(h.xu,{position:"absolute",bottom:!0,right:!0,marginBottom:1,children:(0,m.jsx)(l.Z,{handleReport:g,imgSignature:y||"",isVisible:e})}):null]})})})}},63444:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(667294),o=s(883119),r=s(785893);const n={bubbleOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"}};function a({backgroundColor:e,children:t,coverImage:s,disableTabIndex:a,height:l,id:d,isHovered:c,onClick:p,onMouseEnter:u,onMouseLeave:h,url:m,width:g,searchBoxRenderStopwatch:b}){var y,x;const[v,_]=(0,i.useState)(!1),w=()=>{u?u():_(!0)},T=()=>{h?h():_(!1)},f=c||v;return(0,r.jsx)(o.iP,{role:"link",href:m,onBlur:T,onMouseLeave:T,onFocus:w,onMouseEnter:w,onTap:()=>{null==p||p(d)},rounding:4,tabIndex:a?-1:void 0,children:(0,r.jsx)(o.zd,{rounding:4,width:g||"100%",height:l,children:null!=s&&s.url?(0,r.jsxs)(o.Ee,{alt:"",color:e,fit:"cover",naturalHeight:null!==(y=s.height)&&void 0!==y?y:1,naturalWidth:null!==(x=s.width)&&void 0!==x?x:1,onLoad:()=>{null==b||b.stop()},role:"presentation",src:s.url,children:[(0,r.jsx)(o.xu,{height:"100%",width:"100%",dangerouslySetInlineStyle:{__style:f?n.hoverOverlay:n.bubbleOverlay}}),"function"==typeof t?t({isHovered:f}):t]}):(0,r.jsx)(o.xu,{height:"100%",width:"100%",dangerouslySetInlineStyle:{__style:{backgroundColor:e}}})})})}},958155:(e,t,s)=>{s.d(t,{Z:()=>u});var i=s(667294);const o={backgroundColor:"transparent"},r={backgroundColor:"rgba(216, 216, 216, 0.37)"},n={borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},a={outline:"0"};var l=s(883119),d=s(785893);function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class p extends i.Component{constructor(...e){super(...e),c(this,"state",{hovered:!1}),c(this,"handleMouseEnter",(()=>this.setState({hovered:!0}))),c(this,"handleMouseLeave",(()=>this.setState({hovered:!1})))}render(){const{backgroundHaloSize:e,onClick:t,color:s="subtle"}=this.props,i=Object.freeze({height:e,width:e}),c={border:0,display:"block",background:"transparent",cursor:"pointer",...a},p={...i,...{...n,...o,...this.state.hovered?r:{}}};return(0,d.jsx)("button",{type:"button",style:c,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onClick:e=>t&&t({event:e}),children:(0,d.jsx)("div",{style:p,children:(0,d.jsx)(l.xu,{rounding:"circle",children:(0,d.jsx)(l.JO,{accessibilityLabel:"",icon:"flag",size:e/2,color:s})})})})}}const u=p},667976:(e,t,s)=>{s.d(t,{Z:()=>g});var i=s(667294),o=s(958155),r=s(121151),n=s(6637),a=s(499128),l=s(844949),d=s(898781),c=s(343341),p=s(883119),u=s(785893);function h(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class m extends i.PureComponent{constructor(...e){var t;super(...e),t=this,h(this,"state",{showModal:!1,reportType:null}),h(this,"handleDismiss",(()=>this.setState({showModal:!1}))),h(this,"handleClick",(()=>{const{reportType:e}=this.state;"image"===e?this.reportSuggestionImage():this.reportSuggestionText()})),h(this,"reportSuggestionImage",(async function(){const{imgSignature:e,reportImage:s}=t.props;t.setState({showModal:!1});s((await n.Z.create("GetPinFromSignature",{imgSignature:e}).callGet()).resource_response.data.id)})),h(this,"reportSuggestionText",(()=>{const{handleReport:e,toastManagerContext:t}=this.props;e&&(e(),t.showToast((({hideToast:e})=>(0,u.jsx)(a.ZP,{onHide:e,text:this.props.i18n.bt("感谢你的报告！此报告将由我们的信任和安全团队进行审核", "Thanks for your report! This will be reviewed by our Trust and Safety Team", "ReportingFlag.Toast.text", undefined, true)}))),this.handleDismiss())})),h(this,"showModal",(({event:e})=>{e.stopPropagation(),e.preventDefault(),this.setState({showModal:!0})}))}render(){const{showModal:e}=this.state;return(0,u.jsxs)(i.Fragment,{children:[this.props.isVisible&&(0,u.jsx)(o.Z,{onClick:this.showModal,backgroundHaloSize:24}),e&&(0,u.jsx)(r.ZP,{accessibilityModalLabel:this.props.i18n.bt("报告搜索词", "Report search term", "ReportingFlag.Modal.accessibilityModalLabel", undefined, true),heading:this.props.i18n.bt("报告搜索词", "Report search term", "ReportingFlag.Modal.heading", undefined, true),onDismiss:this.handleDismiss,size:"sm",children:(0,u.jsxs)(p.xu,{children:[(0,u.jsx)(p.xu,{padding:5,children:(0,u.jsx)(p.xv,{children:this.props.i18n.bt("你标记此内容后，我们的信任和安全团队将对其进行审核。审核后，如果发现此内容不符合我们的社区准则，我们会屏蔽此内容。", "When you flag this, our Trust and Safety team will review it. If it doesn't meet our Community Guidelines, it will be blocked.", "ReportingFlag.Box.Text.report", undefined, true)})}),(0,u.jsxs)(p.FX,{id:"reporting-flag-options-group",legend:this.props.i18n.bt("你标记此内容后，我们的信任和安全团队将对其进行审核。审核后，如果发现此内容不符合我们的社区准则，我们会屏蔽此内容。", "When you flag this, our Trust and Safety team will review it. If it doesn't meet our Community Guidelines, it will be blocked.", "ReportingFlag.Box.Text.report", undefined, true),legendDisplay:"hidden",children:[(0,u.jsxs)(p.xu,{role:"list",display:"flex",direction:"column",marginBottom:4,paddingX:5,children:[(0,u.jsxs)(p.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,u.jsx)(p.FX.RadioButton,{checked:"text"===this.state.reportType,id:"textType",onChange:()=>this.setState({reportType:"text"}),value:"Report search text"}),(0,u.jsx)(p.xu,{flex:"grow",children:(0,u.jsx)(p.__,{htmlFor:"textType",children:(0,u.jsx)(p.xu,{paddingX:2,children:(0,u.jsx)(p.xv,{children:"Report search text"})})})})]}),(0,u.jsxs)(p.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,u.jsx)(p.FX.RadioButton,{checked:"image"===this.state.reportType,id:"imageType",onChange:()=>this.setState({reportType:"image"}),value:"Report search image"}),(0,u.jsx)(p.xu,{flex:"grow",children:(0,u.jsx)(p.__,{htmlFor:"imageType",children:(0,u.jsx)(p.xu,{paddingX:2,children:(0,u.jsx)(p.xv,{children:"Report search image"})})})})]})]}),(0,u.jsx)(p.iz,{}),(0,u.jsxs)(p.xu,{display:"flex",justifyContent:"end",padding:2,children:[(0,u.jsx)(p.xu,{margin:2,children:(0,u.jsx)(p.zx,{fullWidth:!0,onClick:this.handleDismiss,text:this.props.i18n.bt("取消", "Cancel", "ReportingFlag.Box.Button.text.cancel", undefined, true)})}),(0,u.jsx)(p.xu,{margin:2,children:(0,u.jsx)(p.zx,{fullWidth:!0,color:"red",onClick:this.handleClick,text:this.props.i18n.bt("报告", "Report", "ReportingFlag.Box.Button.text.report", undefined, true),disabled:!this.state.reportType})})]})]})]})})]})}}function g(e){const t=(0,d.ZP)(),{reportImage:s}=(0,l.f)();return(0,u.jsx)(m,{...e,i18n:t,reportImage:s,toastManagerContext:(0,c.F9)()})}},844949:(e,t,s)=>{s.d(t,{X:()=>c,f:()=>d});var i=s(667294);function o(e=null,t){switch(t.type){case"REPORT_CONTENT_SHOW":return{id:t.payload.id,isProduct:t.payload.isProduct,isPromoted:t.payload.isPromoted,videoDuration:t.payload.videoDuration,viewParameter:t.payload.viewParameter,viewType:t.payload.viewType,type:t.payload.type};case"REPORT_CONTENT_DISMISS":return null;default:return e}}var r=s(425288),n=s(623568),a=s(785893);const{Provider:l,useHook:d}=(0,r.Z)("ReportData");function c({children:e}){const[t,s]=(0,i.useReducer)(o,null),r=(0,i.useCallback)((()=>s({type:"REPORT_CONTENT_DISMISS"})),[]),d=(0,i.useCallback)(((e,t,i)=>s({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:i,type:"aggregatedComment"}})),[]),c=(0,i.useCallback)(((e,t,i)=>s({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:i,type:"pin"}})),[]),p=(0,i.useCallback)(((e,t,i)=>{const{id:o,videos:r}=e,a=(0,n.VX)(e),l=(0,n.jL)(e);let d;if((0,n.iR)(r)&&r){const{video_list:e={}}=r,t=e[Object.keys(e)[0]];d=t&&t.duration}s({type:"REPORT_CONTENT_SHOW",payload:{id:o,isProduct:a,isPromoted:l,videoDuration:d,viewParameter:t,viewType:i,type:"pin"}})}),[]),u=(0,i.useMemo)((()=>({reportData:t,dismiss:r,reportComment:d,reportImage:c,reportPin:p})),[t,r,d,c,p]);return(0,a.jsx)(l,{value:u,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/44513.zh_CN-3c10ccf3db028055.mjs.map