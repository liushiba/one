(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77ee3790"],{"1c64":function(e,t,n){},"1cc6":function(e,t,n){"use strict";var i=n("1c64"),a=n.n(i);a.a},"333d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,n){var i=l(),a=e-i,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var l=Math.easeInOutQuad(u,i,a,t);o(l),u<t?r(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(n("1cc6"),n("2877")),p=Object(d["a"])(c,i,a,!1,null,"f3b72548",null);t["a"]=p.exports},caae:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入会员账号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.user,callback:function(t){e.$set(e.listQuery,"user",t)},expression:"listQuery.user"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{icon:e.listQuery.user?"el-icon-search":"el-icon-refresh",type:"primary"},on:{click:e.handleFilter}},[e._v(e._s(e.listQuery.user?"搜索":"刷新"))]),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("添加")]),e._v(" "),e.roles.includes("6")?n("el-button",{staticClass:"filter-item",attrs:{type:"danger"},on:{click:e.deleteAllRecords}},[e._v("一键清空")]):e._e(),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"danger"},on:{click:e.deleteBulkRecords}},[e._v("批量删除")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange,"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"35px"}}),e._v(" "),n("el-table-column",{attrs:{label:"编号",prop:"id",sortable:"custom",align:"center","min-width":"60px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"会员账号",align:"center","min-width":"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.user))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"投注号码",align:"center","min-width":"195px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.number))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"投注期数",align:"center","min-width":"195px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.period))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"投注时间",align:"center","min-width":"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("datetimeFilter")(t.row.create_time)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"抽奖IP",align:"center","min-width":"130px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.ip))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"开奖金额",align:"center","min-width":"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[!0===t.row.status?n("span",[e._v(e._s(t.row.bonus))]):n("span",[e._v("未开奖")])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作","min-width":"228px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.page_size},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"page_size",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.temp,"label-position":"left","label-width":"70px"}},[n("el-form-item",{attrs:{label:"会员账号"}},[n("el-input",{model:{value:e.temp.user,callback:function(t){e.$set(e.temp,"user",t)},expression:"temp.user"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"投注号码"}},[n("el-input",{model:{value:e.temp.number,callback:function(t){e.$set(e.temp,"number",t)},expression:"temp.number"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"投注期数"}},[n("el-input",{model:{value:e.temp.period,callback:function(t){e.$set(e.temp,"period",t)},expression:"temp.period"}})],1),e._v(" "),"create"===e.dialogStatus?n("el-form-item",{attrs:{label:"中奖时间",prop:"datetime"}},[n("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择时间"},model:{value:e.temp.create_time,callback:function(t){e.$set(e.temp,"create_time",t)},expression:"temp.create_time"}})],1):e._e()],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("确定")])],1)],1)],1)},a=[],r=(n("ac4d"),n("8a81"),n("ac6a"),n("db72")),o=(n("28a5"),n("a481"),n("b775"));function l(e){return Object(o["a"])({url:"/api/records/",method:"post",data:e})}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o["a"])({url:"/api/records/"+e+"/",method:"delete",data:t})}function u(e,t){return Object(o["a"])({url:"/api/records/"+e+"/",method:"patch",data:t})}function c(e){return Object(o["a"])({url:"/api/records/",params:e})}var d=n("333d"),p=n("2f62"),f={name:"Record",components:{Pagination:d["a"]},filters:{typeToColor:function(e){var t=["success","info","danger"];return t[parseInt(e)]},typeToText:function(e){var t=["自然抽奖","内定抽奖","后台添加"];return t[parseInt(e)]},sendToColor:function(e){var t=["warning","success"];return t[parseInt(e)]},sendToText:function(e){var t=["未送出","已送出","处理中"];return t[parseInt(e)]},datetimeFilter:function(e){return e?e.split(".")[0].replace("T"," "):e}},data:function(){return{multipleSelection:[],freshTime:0,sendOptions:[{value:0,label:"未派发"},{value:1,label:"已派发"},{value:void 0,label:"全部"}],times:[{value:0,label:"自动刷新"},{value:5,label:"每5秒"},{value:15,label:"每15秒"},{value:30,label:"每30秒"},{value:60,label:"每1分钟"},{value:600,label:"每10分钟"},{value:-1,label:"关闭刷新"}],lastRunTime:void 0,isPlaying:!1,currentTime:void 0,intervalid1:void 0,intervalid2:void 0,currentId:0,total:0,tableKey:0,list:null,down:null,listLoading:!0,listQuery:{page:1,page_size:20,user:void 0,ordering:"-id",period:void 0},downloadLoading:!1,textMap:{create:"添加",update:"编辑"},dialogStatus:"",dialogFormVisible:!1,temp:{id:void 0,user:"",period:void 0,number:void 0,create_time:new Date}}},computed:Object(r["a"])({},Object(p["b"])(["name","roles"])),created:function(){this.getList()},methods:{deleteBulkRecords:function(){var e=this;this.$confirm("该操作会永久删除".concat(this.multipleSelection.length,"条信息，是否继续？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s("bulk",e.multipleSelection).then((function(){e.$message({type:"success",message:"删除成功"}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange:function(e){this.multipleSelection=e.map((function(e){return e.id}))},play:function(){var e=this;this.lastRunTime=Date.now();var t=document.querySelector("#audio");this.isPlaying||(t.play(),this.isPlaying=!0);var n=setTimeout((function(){e.stop(n)}),3e3)},stop:function(e){this.currentTime=Date.now();var t=document.querySelector("#audio");this.currentTime-this.lastRunTime>2999&&this.isPlaying&&(t.currentTime=0,t.pause(),this.isPlaying=!1),clearTimeout(e)},freshList:function(){var e=this,t={min_rec:this.currentId,ordering:"-id"};0!==this.currentId&&c(t).then((function(t){t.data.count>0&&(e.play(),0===e.freshTime&&e.getList(),t.data.results.forEach((function(t,n){0===n&&(e.currentId=t.id),e.$notify({title:"新的记录".concat(t.id),message:"用户 ".concat(t.user," 砸中 ").concat(t.prizeName),type:"warning",duration:2e3})})))})).catch((function(t){console.log(t),clearInterval(e.intervalid1)}))},getList:function(){var e=this;this.listLoading=!0,c(this.listQuery).then((function(t){if(e.list=t.data.results,e.list.length>0)if("-id"===e.listQuery.ordering){var n=e.list[0].id;e.currentId=n>e.currentId?n:e.currentId}else{var i=t.data.results.pop().id;e.currentId=i>e.currentId?i:e.currentId}e.total=t.data.count,e.listLoading=!1})).catch((function(t){console.log(t),e.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleCreate:function(){var e=this;this.temp={id:void 0,user:"",period:void 0,number:void 0,create_time:new Date},this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleDelete:function(e){var t=this;this.$confirm("删除这条记录，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s(e.id).then((function(){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var n=t.list.indexOf(e);t.list.splice(n,1)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleDownload:function(){var e=this;this.downloadLoading=!0;var t="抽奖"+(new Date).toDateString();c({page_size:5e5,isSend:this.listQuery.isSend}).then((function(i){e.down=i.data.results,Promise.all([n.e("chunk-6e87ca78"),n.e("chunk-23b9c8dc"),n.e("chunk-581b2547")]).then(n.bind(null,"4bf8d")).then((function(n){var i=["会员账号","中奖礼品","中奖时间","抽奖IP","是否发送"],a=["user","prizeName","datetime","ip","isSend"],r=e.formatJson(a,e.down);n.export_json_to_excel({header:i,data:r,filename:t}),e.downloadLoading=!1}))}))},formatJson:function(e,t){var n=["未送出","已送出"];return t.map((function(t){return e.map((function(e){return"isSend"===e?n[t[e]]:t[e]}))}))},sortChange:function(e){var t=e.prop,n=e.order;"id"===t&&(this.listQuery.ordering="ascending"===n?"id":"-id",this.handleFilter())},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&l(e.temp).then((function(t){e.list.unshift(t.data),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var n=Object.assign({},e.temp);u(n.id,n).then((function(){var t=!0,n=!1,i=void 0;try{for(var a,r=e.list[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var o=a.value;if(o.id===e.temp.id){var l=e.list.indexOf(o);e.list.splice(l,1,e.temp);break}}}catch(s){n=!0,i=s}finally{try{t||null==r.return||r.return()}finally{if(n)throw i}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})}))}}))},handleSend:function(e,t,n){var i=this,a={isSend:n,sendTime:1===n?new Date:void 0},r={1:"派送成功",2:"锁定成功"};u(t,a).then((function(e){if(e.data.code&&1===e.data.code){var a=!0,o=!1,l=void 0;try{for(var s,u=i.list[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var c=s.value;if(c.id===t){var d=i.list.indexOf(c);i.list.splice(d,1,e.data.data);break}}}catch(b){o=!0,l=b}finally{try{a||null==u.return||u.return()}finally{if(o)throw l}}i.$notify({title:"提示",message:"操作失败：记录被锁定",type:"warning",duration:2e3})}else{var p=!0,f=!1,m=void 0;try{for(var h,g=i.list[Symbol.iterator]();!(p=(h=g.next()).done);p=!0){var v=h.value;if(v.id===t){var y=i.list.indexOf(v);i.list.splice(y,1,e.data);break}}}catch(b){f=!0,m=b}finally{try{p||null==g.return||g.return()}finally{if(f)throw m}}i.$notify({title:"成功",message:r[n],type:"success",duration:2e3})}}))},deleteAllRecords:function(){var e=this;this.$confirm("该操作会永久删除所有信息，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s("all").then((function(){e.$message({type:"success",message:"删除成功"}),e.list=null,e.total=0}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},changeAllRecords:function(e){var t=this,n="send"===e?"派送":"锁定";this.$confirm("该操作会".concat(n,"选中记录，是否继续？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){u(e,t.multipleSelection).then((function(){t.$message({type:"success",message:"".concat(n,"成功")}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消".concat(n)})}))}}},m=f,h=n("2877"),g=Object(h["a"])(m,i,a,!1,null,null,null);t["default"]=g.exports}}]);