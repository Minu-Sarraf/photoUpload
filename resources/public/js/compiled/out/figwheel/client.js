// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e46868){if((e46868 instanceof Error)){
var e = e46868;
return "Error: Unable to stringify";
} else {
throw e46868;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__46871 = arguments.length;
switch (G__46871) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__46869_SHARP_){
if(typeof p1__46869_SHARP_ === 'string'){
return p1__46869_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__46869_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46874 = arguments.length;
var i__4731__auto___46875 = (0);
while(true){
if((i__4731__auto___46875 < len__4730__auto___46874)){
args__4736__auto__.push((arguments[i__4731__auto___46875]));

var G__46876 = (i__4731__auto___46875 + (1));
i__4731__auto___46875 = G__46876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46873){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46873));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46878 = arguments.length;
var i__4731__auto___46879 = (0);
while(true){
if((i__4731__auto___46879 < len__4730__auto___46878)){
args__4736__auto__.push((arguments[i__4731__auto___46879]));

var G__46880 = (i__4731__auto___46879 + (1));
i__4731__auto___46879 = G__46880;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46877){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46877));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46881){
var map__46882 = p__46881;
var map__46882__$1 = (((((!((map__46882 == null))))?(((((map__46882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46882):map__46882);
var message = cljs.core.get.call(null,map__46882__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46882__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28138__auto___46961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___46961,ch){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___46961,ch){
return (function (state_46933){
var state_val_46934 = (state_46933[(1)]);
if((state_val_46934 === (7))){
var inst_46929 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46935_46962 = state_46933__$1;
(statearr_46935_46962[(2)] = inst_46929);

(statearr_46935_46962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (1))){
var state_46933__$1 = state_46933;
var statearr_46936_46963 = state_46933__$1;
(statearr_46936_46963[(2)] = null);

(statearr_46936_46963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (4))){
var inst_46886 = (state_46933[(7)]);
var inst_46886__$1 = (state_46933[(2)]);
var state_46933__$1 = (function (){var statearr_46937 = state_46933;
(statearr_46937[(7)] = inst_46886__$1);

return statearr_46937;
})();
if(cljs.core.truth_(inst_46886__$1)){
var statearr_46938_46964 = state_46933__$1;
(statearr_46938_46964[(1)] = (5));

} else {
var statearr_46939_46965 = state_46933__$1;
(statearr_46939_46965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (15))){
var inst_46893 = (state_46933[(8)]);
var inst_46908 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46893);
var inst_46909 = cljs.core.first.call(null,inst_46908);
var inst_46910 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46909);
var inst_46911 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46910)].join('');
var inst_46912 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46911);
var state_46933__$1 = state_46933;
var statearr_46940_46966 = state_46933__$1;
(statearr_46940_46966[(2)] = inst_46912);

(statearr_46940_46966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (13))){
var inst_46917 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46941_46967 = state_46933__$1;
(statearr_46941_46967[(2)] = inst_46917);

(statearr_46941_46967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (6))){
var state_46933__$1 = state_46933;
var statearr_46942_46968 = state_46933__$1;
(statearr_46942_46968[(2)] = null);

(statearr_46942_46968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (17))){
var inst_46915 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46943_46969 = state_46933__$1;
(statearr_46943_46969[(2)] = inst_46915);

(statearr_46943_46969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (3))){
var inst_46931 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46933__$1,inst_46931);
} else {
if((state_val_46934 === (12))){
var inst_46892 = (state_46933[(9)]);
var inst_46906 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46892,opts);
var state_46933__$1 = state_46933;
if(inst_46906){
var statearr_46944_46970 = state_46933__$1;
(statearr_46944_46970[(1)] = (15));

} else {
var statearr_46945_46971 = state_46933__$1;
(statearr_46945_46971[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (2))){
var state_46933__$1 = state_46933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46933__$1,(4),ch);
} else {
if((state_val_46934 === (11))){
var inst_46893 = (state_46933[(8)]);
var inst_46898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46899 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46893);
var inst_46900 = cljs.core.async.timeout.call(null,(1000));
var inst_46901 = [inst_46899,inst_46900];
var inst_46902 = (new cljs.core.PersistentVector(null,2,(5),inst_46898,inst_46901,null));
var state_46933__$1 = state_46933;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46933__$1,(14),inst_46902);
} else {
if((state_val_46934 === (9))){
var inst_46893 = (state_46933[(8)]);
var inst_46919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46920 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46893);
var inst_46921 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46920);
var inst_46922 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46921)].join('');
var inst_46923 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46922);
var state_46933__$1 = (function (){var statearr_46946 = state_46933;
(statearr_46946[(10)] = inst_46919);

return statearr_46946;
})();
var statearr_46947_46972 = state_46933__$1;
(statearr_46947_46972[(2)] = inst_46923);

(statearr_46947_46972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (5))){
var inst_46886 = (state_46933[(7)]);
var inst_46888 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46889 = (new cljs.core.PersistentArrayMap(null,2,inst_46888,null));
var inst_46890 = (new cljs.core.PersistentHashSet(null,inst_46889,null));
var inst_46891 = figwheel.client.focus_msgs.call(null,inst_46890,inst_46886);
var inst_46892 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46891);
var inst_46893 = cljs.core.first.call(null,inst_46891);
var inst_46894 = figwheel.client.autoload_QMARK_.call(null);
var state_46933__$1 = (function (){var statearr_46948 = state_46933;
(statearr_46948[(9)] = inst_46892);

(statearr_46948[(8)] = inst_46893);

return statearr_46948;
})();
if(cljs.core.truth_(inst_46894)){
var statearr_46949_46973 = state_46933__$1;
(statearr_46949_46973[(1)] = (8));

} else {
var statearr_46950_46974 = state_46933__$1;
(statearr_46950_46974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (14))){
var inst_46904 = (state_46933[(2)]);
var state_46933__$1 = state_46933;
var statearr_46951_46975 = state_46933__$1;
(statearr_46951_46975[(2)] = inst_46904);

(statearr_46951_46975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (16))){
var state_46933__$1 = state_46933;
var statearr_46952_46976 = state_46933__$1;
(statearr_46952_46976[(2)] = null);

(statearr_46952_46976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (10))){
var inst_46925 = (state_46933[(2)]);
var state_46933__$1 = (function (){var statearr_46953 = state_46933;
(statearr_46953[(11)] = inst_46925);

return statearr_46953;
})();
var statearr_46954_46977 = state_46933__$1;
(statearr_46954_46977[(2)] = null);

(statearr_46954_46977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46934 === (8))){
var inst_46892 = (state_46933[(9)]);
var inst_46896 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46892,opts);
var state_46933__$1 = state_46933;
if(cljs.core.truth_(inst_46896)){
var statearr_46955_46978 = state_46933__$1;
(statearr_46955_46978[(1)] = (11));

} else {
var statearr_46956_46979 = state_46933__$1;
(statearr_46956_46979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28138__auto___46961,ch))
;
return ((function (switch__28043__auto__,c__28138__auto___46961,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28044__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28044__auto____0 = (function (){
var statearr_46957 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46957[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28044__auto__);

(statearr_46957[(1)] = (1));

return statearr_46957;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28044__auto____1 = (function (state_46933){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_46933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e46958){if((e46958 instanceof Object)){
var ex__28047__auto__ = e46958;
var statearr_46959_46980 = state_46933;
(statearr_46959_46980[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46981 = state_46933;
state_46933 = G__46981;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28044__auto__ = function(state_46933){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28044__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28044__auto____1.call(this,state_46933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28044__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28044__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___46961,ch))
})();
var state__28140__auto__ = (function (){var statearr_46960 = f__28139__auto__.call(null);
(statearr_46960[(6)] = c__28138__auto___46961);

return statearr_46960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___46961,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46982_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46982_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_46988 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46988){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46984 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46985 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46986 = true;
var _STAR_print_fn_STAR__temp_val__46987 = ((function (_STAR_print_newline_STAR__orig_val__46984,_STAR_print_fn_STAR__orig_val__46985,_STAR_print_newline_STAR__temp_val__46986,sb,base_path_46988){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__46984,_STAR_print_fn_STAR__orig_val__46985,_STAR_print_newline_STAR__temp_val__46986,sb,base_path_46988))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46986;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46987;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46985;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46984;
}}catch (e46983){if((e46983 instanceof Error)){
var e = e46983;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46988], null));
} else {
var e = e46983;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_46988))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46989){
var map__46990 = p__46989;
var map__46990__$1 = (((((!((map__46990 == null))))?(((((map__46990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46990):map__46990);
var opts = map__46990__$1;
var build_id = cljs.core.get.call(null,map__46990__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46990,map__46990__$1,opts,build_id){
return (function (p__46992){
var vec__46993 = p__46992;
var seq__46994 = cljs.core.seq.call(null,vec__46993);
var first__46995 = cljs.core.first.call(null,seq__46994);
var seq__46994__$1 = cljs.core.next.call(null,seq__46994);
var map__46996 = first__46995;
var map__46996__$1 = (((((!((map__46996 == null))))?(((((map__46996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46996):map__46996);
var msg = map__46996__$1;
var msg_name = cljs.core.get.call(null,map__46996__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46994__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46993,seq__46994,first__46995,seq__46994__$1,map__46996,map__46996__$1,msg,msg_name,_,map__46990,map__46990__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46993,seq__46994,first__46995,seq__46994__$1,map__46996,map__46996__$1,msg,msg_name,_,map__46990,map__46990__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46990,map__46990__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46998){
var vec__46999 = p__46998;
var seq__47000 = cljs.core.seq.call(null,vec__46999);
var first__47001 = cljs.core.first.call(null,seq__47000);
var seq__47000__$1 = cljs.core.next.call(null,seq__47000);
var map__47002 = first__47001;
var map__47002__$1 = (((((!((map__47002 == null))))?(((((map__47002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47002):map__47002);
var msg = map__47002__$1;
var msg_name = cljs.core.get.call(null,map__47002__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47000__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47004){
var map__47005 = p__47004;
var map__47005__$1 = (((((!((map__47005 == null))))?(((((map__47005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47005):map__47005);
var on_compile_warning = cljs.core.get.call(null,map__47005__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47005__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47005,map__47005__$1,on_compile_warning,on_compile_fail){
return (function (p__47007){
var vec__47008 = p__47007;
var seq__47009 = cljs.core.seq.call(null,vec__47008);
var first__47010 = cljs.core.first.call(null,seq__47009);
var seq__47009__$1 = cljs.core.next.call(null,seq__47009);
var map__47011 = first__47010;
var map__47011__$1 = (((((!((map__47011 == null))))?(((((map__47011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47011):map__47011);
var msg = map__47011__$1;
var msg_name = cljs.core.get.call(null,map__47011__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47009__$1;
var pred__47013 = cljs.core._EQ_;
var expr__47014 = msg_name;
if(cljs.core.truth_(pred__47013.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47014))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47013.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47014))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47005,map__47005__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__,msg_hist,msg_names,msg){
return (function (state_47103){
var state_val_47104 = (state_47103[(1)]);
if((state_val_47104 === (7))){
var inst_47023 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
if(cljs.core.truth_(inst_47023)){
var statearr_47105_47152 = state_47103__$1;
(statearr_47105_47152[(1)] = (8));

} else {
var statearr_47106_47153 = state_47103__$1;
(statearr_47106_47153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (20))){
var inst_47097 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47107_47154 = state_47103__$1;
(statearr_47107_47154[(2)] = inst_47097);

(statearr_47107_47154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (27))){
var inst_47093 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47108_47155 = state_47103__$1;
(statearr_47108_47155[(2)] = inst_47093);

(statearr_47108_47155[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (1))){
var inst_47016 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47103__$1 = state_47103;
if(cljs.core.truth_(inst_47016)){
var statearr_47109_47156 = state_47103__$1;
(statearr_47109_47156[(1)] = (2));

} else {
var statearr_47110_47157 = state_47103__$1;
(statearr_47110_47157[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (24))){
var inst_47095 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47111_47158 = state_47103__$1;
(statearr_47111_47158[(2)] = inst_47095);

(statearr_47111_47158[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (4))){
var inst_47101 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47103__$1,inst_47101);
} else {
if((state_val_47104 === (15))){
var inst_47099 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47112_47159 = state_47103__$1;
(statearr_47112_47159[(2)] = inst_47099);

(statearr_47112_47159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (21))){
var inst_47052 = (state_47103[(2)]);
var inst_47053 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47054 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47053);
var state_47103__$1 = (function (){var statearr_47113 = state_47103;
(statearr_47113[(7)] = inst_47052);

return statearr_47113;
})();
var statearr_47114_47160 = state_47103__$1;
(statearr_47114_47160[(2)] = inst_47054);

(statearr_47114_47160[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (31))){
var inst_47082 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47103__$1 = state_47103;
if(inst_47082){
var statearr_47115_47161 = state_47103__$1;
(statearr_47115_47161[(1)] = (34));

} else {
var statearr_47116_47162 = state_47103__$1;
(statearr_47116_47162[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (32))){
var inst_47091 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47117_47163 = state_47103__$1;
(statearr_47117_47163[(2)] = inst_47091);

(statearr_47117_47163[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (33))){
var inst_47078 = (state_47103[(2)]);
var inst_47079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47080 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47079);
var state_47103__$1 = (function (){var statearr_47118 = state_47103;
(statearr_47118[(8)] = inst_47078);

return statearr_47118;
})();
var statearr_47119_47164 = state_47103__$1;
(statearr_47119_47164[(2)] = inst_47080);

(statearr_47119_47164[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (13))){
var inst_47037 = figwheel.client.heads_up.clear.call(null);
var state_47103__$1 = state_47103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(16),inst_47037);
} else {
if((state_val_47104 === (22))){
var inst_47058 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47059 = figwheel.client.heads_up.append_warning_message.call(null,inst_47058);
var state_47103__$1 = state_47103;
var statearr_47120_47165 = state_47103__$1;
(statearr_47120_47165[(2)] = inst_47059);

(statearr_47120_47165[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (36))){
var inst_47089 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47121_47166 = state_47103__$1;
(statearr_47121_47166[(2)] = inst_47089);

(statearr_47121_47166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (29))){
var inst_47069 = (state_47103[(2)]);
var inst_47070 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47071 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47070);
var state_47103__$1 = (function (){var statearr_47122 = state_47103;
(statearr_47122[(9)] = inst_47069);

return statearr_47122;
})();
var statearr_47123_47167 = state_47103__$1;
(statearr_47123_47167[(2)] = inst_47071);

(statearr_47123_47167[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (6))){
var inst_47018 = (state_47103[(10)]);
var state_47103__$1 = state_47103;
var statearr_47124_47168 = state_47103__$1;
(statearr_47124_47168[(2)] = inst_47018);

(statearr_47124_47168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (28))){
var inst_47065 = (state_47103[(2)]);
var inst_47066 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47067 = figwheel.client.heads_up.display_warning.call(null,inst_47066);
var state_47103__$1 = (function (){var statearr_47125 = state_47103;
(statearr_47125[(11)] = inst_47065);

return statearr_47125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(29),inst_47067);
} else {
if((state_val_47104 === (25))){
var inst_47063 = figwheel.client.heads_up.clear.call(null);
var state_47103__$1 = state_47103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(28),inst_47063);
} else {
if((state_val_47104 === (34))){
var inst_47084 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47103__$1 = state_47103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(37),inst_47084);
} else {
if((state_val_47104 === (17))){
var inst_47043 = (state_47103[(2)]);
var inst_47044 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47045 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47044);
var state_47103__$1 = (function (){var statearr_47126 = state_47103;
(statearr_47126[(12)] = inst_47043);

return statearr_47126;
})();
var statearr_47127_47169 = state_47103__$1;
(statearr_47127_47169[(2)] = inst_47045);

(statearr_47127_47169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (3))){
var inst_47035 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47103__$1 = state_47103;
if(inst_47035){
var statearr_47128_47170 = state_47103__$1;
(statearr_47128_47170[(1)] = (13));

} else {
var statearr_47129_47171 = state_47103__$1;
(statearr_47129_47171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (12))){
var inst_47031 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47130_47172 = state_47103__$1;
(statearr_47130_47172[(2)] = inst_47031);

(statearr_47130_47172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (2))){
var inst_47018 = (state_47103[(10)]);
var inst_47018__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47103__$1 = (function (){var statearr_47131 = state_47103;
(statearr_47131[(10)] = inst_47018__$1);

return statearr_47131;
})();
if(cljs.core.truth_(inst_47018__$1)){
var statearr_47132_47173 = state_47103__$1;
(statearr_47132_47173[(1)] = (5));

} else {
var statearr_47133_47174 = state_47103__$1;
(statearr_47133_47174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (23))){
var inst_47061 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47103__$1 = state_47103;
if(inst_47061){
var statearr_47134_47175 = state_47103__$1;
(statearr_47134_47175[(1)] = (25));

} else {
var statearr_47135_47176 = state_47103__$1;
(statearr_47135_47176[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (35))){
var state_47103__$1 = state_47103;
var statearr_47136_47177 = state_47103__$1;
(statearr_47136_47177[(2)] = null);

(statearr_47136_47177[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (19))){
var inst_47056 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47103__$1 = state_47103;
if(inst_47056){
var statearr_47137_47178 = state_47103__$1;
(statearr_47137_47178[(1)] = (22));

} else {
var statearr_47138_47179 = state_47103__$1;
(statearr_47138_47179[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (11))){
var inst_47027 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47139_47180 = state_47103__$1;
(statearr_47139_47180[(2)] = inst_47027);

(statearr_47139_47180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (9))){
var inst_47029 = figwheel.client.heads_up.clear.call(null);
var state_47103__$1 = state_47103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(12),inst_47029);
} else {
if((state_val_47104 === (5))){
var inst_47020 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47103__$1 = state_47103;
var statearr_47140_47181 = state_47103__$1;
(statearr_47140_47181[(2)] = inst_47020);

(statearr_47140_47181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (14))){
var inst_47047 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47103__$1 = state_47103;
if(inst_47047){
var statearr_47141_47182 = state_47103__$1;
(statearr_47141_47182[(1)] = (18));

} else {
var statearr_47142_47183 = state_47103__$1;
(statearr_47142_47183[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (26))){
var inst_47073 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47103__$1 = state_47103;
if(inst_47073){
var statearr_47143_47184 = state_47103__$1;
(statearr_47143_47184[(1)] = (30));

} else {
var statearr_47144_47185 = state_47103__$1;
(statearr_47144_47185[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (16))){
var inst_47039 = (state_47103[(2)]);
var inst_47040 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47041 = figwheel.client.heads_up.display_exception.call(null,inst_47040);
var state_47103__$1 = (function (){var statearr_47145 = state_47103;
(statearr_47145[(13)] = inst_47039);

return statearr_47145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(17),inst_47041);
} else {
if((state_val_47104 === (30))){
var inst_47075 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47076 = figwheel.client.heads_up.display_warning.call(null,inst_47075);
var state_47103__$1 = state_47103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(33),inst_47076);
} else {
if((state_val_47104 === (10))){
var inst_47033 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47146_47186 = state_47103__$1;
(statearr_47146_47186[(2)] = inst_47033);

(statearr_47146_47186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (18))){
var inst_47049 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47050 = figwheel.client.heads_up.display_exception.call(null,inst_47049);
var state_47103__$1 = state_47103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(21),inst_47050);
} else {
if((state_val_47104 === (37))){
var inst_47086 = (state_47103[(2)]);
var state_47103__$1 = state_47103;
var statearr_47147_47187 = state_47103__$1;
(statearr_47147_47187[(2)] = inst_47086);

(statearr_47147_47187[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47104 === (8))){
var inst_47025 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47103__$1 = state_47103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47103__$1,(11),inst_47025);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28138__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28043__auto__,c__28138__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto____0 = (function (){
var statearr_47148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47148[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto__);

(statearr_47148[(1)] = (1));

return statearr_47148;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto____1 = (function (state_47103){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_47103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e47149){if((e47149 instanceof Object)){
var ex__28047__auto__ = e47149;
var statearr_47150_47188 = state_47103;
(statearr_47150_47188[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47189 = state_47103;
state_47103 = G__47189;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto__ = function(state_47103){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto____1.call(this,state_47103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__,msg_hist,msg_names,msg))
})();
var state__28140__auto__ = (function (){var statearr_47151 = f__28139__auto__.call(null);
(statearr_47151[(6)] = c__28138__auto__);

return statearr_47151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__,msg_hist,msg_names,msg))
);

return c__28138__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28138__auto___47218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___47218,ch){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___47218,ch){
return (function (state_47204){
var state_val_47205 = (state_47204[(1)]);
if((state_val_47205 === (1))){
var state_47204__$1 = state_47204;
var statearr_47206_47219 = state_47204__$1;
(statearr_47206_47219[(2)] = null);

(statearr_47206_47219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (2))){
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47204__$1,(4),ch);
} else {
if((state_val_47205 === (3))){
var inst_47202 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47204__$1,inst_47202);
} else {
if((state_val_47205 === (4))){
var inst_47192 = (state_47204[(7)]);
var inst_47192__$1 = (state_47204[(2)]);
var state_47204__$1 = (function (){var statearr_47207 = state_47204;
(statearr_47207[(7)] = inst_47192__$1);

return statearr_47207;
})();
if(cljs.core.truth_(inst_47192__$1)){
var statearr_47208_47220 = state_47204__$1;
(statearr_47208_47220[(1)] = (5));

} else {
var statearr_47209_47221 = state_47204__$1;
(statearr_47209_47221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (5))){
var inst_47192 = (state_47204[(7)]);
var inst_47194 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47192);
var state_47204__$1 = state_47204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47204__$1,(8),inst_47194);
} else {
if((state_val_47205 === (6))){
var state_47204__$1 = state_47204;
var statearr_47210_47222 = state_47204__$1;
(statearr_47210_47222[(2)] = null);

(statearr_47210_47222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (7))){
var inst_47200 = (state_47204[(2)]);
var state_47204__$1 = state_47204;
var statearr_47211_47223 = state_47204__$1;
(statearr_47211_47223[(2)] = inst_47200);

(statearr_47211_47223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47205 === (8))){
var inst_47196 = (state_47204[(2)]);
var state_47204__$1 = (function (){var statearr_47212 = state_47204;
(statearr_47212[(8)] = inst_47196);

return statearr_47212;
})();
var statearr_47213_47224 = state_47204__$1;
(statearr_47213_47224[(2)] = null);

(statearr_47213_47224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28138__auto___47218,ch))
;
return ((function (switch__28043__auto__,c__28138__auto___47218,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28044__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28044__auto____0 = (function (){
var statearr_47214 = [null,null,null,null,null,null,null,null,null];
(statearr_47214[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28044__auto__);

(statearr_47214[(1)] = (1));

return statearr_47214;
});
var figwheel$client$heads_up_plugin_$_state_machine__28044__auto____1 = (function (state_47204){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_47204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e47215){if((e47215 instanceof Object)){
var ex__28047__auto__ = e47215;
var statearr_47216_47225 = state_47204;
(statearr_47216_47225[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47226 = state_47204;
state_47204 = G__47226;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28044__auto__ = function(state_47204){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28044__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28044__auto____1.call(this,state_47204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28044__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28044__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___47218,ch))
})();
var state__28140__auto__ = (function (){var statearr_47217 = f__28139__auto__.call(null);
(statearr_47217[(6)] = c__28138__auto___47218);

return statearr_47217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___47218,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__){
return (function (state_47232){
var state_val_47233 = (state_47232[(1)]);
if((state_val_47233 === (1))){
var inst_47227 = cljs.core.async.timeout.call(null,(3000));
var state_47232__$1 = state_47232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47232__$1,(2),inst_47227);
} else {
if((state_val_47233 === (2))){
var inst_47229 = (state_47232[(2)]);
var inst_47230 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47232__$1 = (function (){var statearr_47234 = state_47232;
(statearr_47234[(7)] = inst_47229);

return statearr_47234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47232__$1,inst_47230);
} else {
return null;
}
}
});})(c__28138__auto__))
;
return ((function (switch__28043__auto__,c__28138__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28044__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28044__auto____0 = (function (){
var statearr_47235 = [null,null,null,null,null,null,null,null];
(statearr_47235[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28044__auto__);

(statearr_47235[(1)] = (1));

return statearr_47235;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28044__auto____1 = (function (state_47232){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_47232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e47236){if((e47236 instanceof Object)){
var ex__28047__auto__ = e47236;
var statearr_47237_47239 = state_47232;
(statearr_47237_47239[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47240 = state_47232;
state_47232 = G__47240;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28044__auto__ = function(state_47232){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28044__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28044__auto____1.call(this,state_47232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28044__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28044__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__))
})();
var state__28140__auto__ = (function (){var statearr_47238 = f__28139__auto__.call(null);
(statearr_47238[(6)] = c__28138__auto__);

return statearr_47238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__))
);

return c__28138__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__,figwheel_version,temp__5720__auto__){
return (function (state_47247){
var state_val_47248 = (state_47247[(1)]);
if((state_val_47248 === (1))){
var inst_47241 = cljs.core.async.timeout.call(null,(2000));
var state_47247__$1 = state_47247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47247__$1,(2),inst_47241);
} else {
if((state_val_47248 === (2))){
var inst_47243 = (state_47247[(2)]);
var inst_47244 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_47245 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47244);
var state_47247__$1 = (function (){var statearr_47249 = state_47247;
(statearr_47249[(7)] = inst_47243);

return statearr_47249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47247__$1,inst_47245);
} else {
return null;
}
}
});})(c__28138__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__28043__auto__,c__28138__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto____0 = (function (){
var statearr_47250 = [null,null,null,null,null,null,null,null];
(statearr_47250[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto__);

(statearr_47250[(1)] = (1));

return statearr_47250;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto____1 = (function (state_47247){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_47247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e47251){if((e47251 instanceof Object)){
var ex__28047__auto__ = e47251;
var statearr_47252_47254 = state_47247;
(statearr_47252_47254[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47255 = state_47247;
state_47247 = G__47255;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto__ = function(state_47247){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto____1.call(this,state_47247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__,figwheel_version,temp__5720__auto__))
})();
var state__28140__auto__ = (function (){var statearr_47253 = f__28139__auto__.call(null);
(statearr_47253[(6)] = c__28138__auto__);

return statearr_47253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__,figwheel_version,temp__5720__auto__))
);

return c__28138__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47256){
var map__47257 = p__47256;
var map__47257__$1 = (((((!((map__47257 == null))))?(((((map__47257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47257):map__47257);
var file = cljs.core.get.call(null,map__47257__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47257__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47257__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47259 = "";
var G__47259__$1 = (cljs.core.truth_(file)?[G__47259,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__47259);
var G__47259__$2 = (cljs.core.truth_(line)?[G__47259__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__47259__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__47259__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__47259__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47260){
var map__47261 = p__47260;
var map__47261__$1 = (((((!((map__47261 == null))))?(((((map__47261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47261):map__47261);
var ed = map__47261__$1;
var exception_data = cljs.core.get.call(null,map__47261__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47261__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_47264 = (function (){var G__47263 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47263)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__47263;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_47264);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47265){
var map__47266 = p__47265;
var map__47266__$1 = (((((!((map__47266 == null))))?(((((map__47266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47266):map__47266);
var w = map__47266__$1;
var message = cljs.core.get.call(null,map__47266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__47268 = cljs.core.seq.call(null,plugins);
var chunk__47269 = null;
var count__47270 = (0);
var i__47271 = (0);
while(true){
if((i__47271 < count__47270)){
var vec__47278 = cljs.core._nth.call(null,chunk__47269,i__47271);
var k = cljs.core.nth.call(null,vec__47278,(0),null);
var plugin = cljs.core.nth.call(null,vec__47278,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47284 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47268,chunk__47269,count__47270,i__47271,pl_47284,vec__47278,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47284.call(null,msg_hist);
});})(seq__47268,chunk__47269,count__47270,i__47271,pl_47284,vec__47278,k,plugin))
);
} else {
}


var G__47285 = seq__47268;
var G__47286 = chunk__47269;
var G__47287 = count__47270;
var G__47288 = (i__47271 + (1));
seq__47268 = G__47285;
chunk__47269 = G__47286;
count__47270 = G__47287;
i__47271 = G__47288;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__47268);
if(temp__5720__auto__){
var seq__47268__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47268__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47268__$1);
var G__47289 = cljs.core.chunk_rest.call(null,seq__47268__$1);
var G__47290 = c__4550__auto__;
var G__47291 = cljs.core.count.call(null,c__4550__auto__);
var G__47292 = (0);
seq__47268 = G__47289;
chunk__47269 = G__47290;
count__47270 = G__47291;
i__47271 = G__47292;
continue;
} else {
var vec__47281 = cljs.core.first.call(null,seq__47268__$1);
var k = cljs.core.nth.call(null,vec__47281,(0),null);
var plugin = cljs.core.nth.call(null,vec__47281,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47293 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47268,chunk__47269,count__47270,i__47271,pl_47293,vec__47281,k,plugin,seq__47268__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47293.call(null,msg_hist);
});})(seq__47268,chunk__47269,count__47270,i__47271,pl_47293,vec__47281,k,plugin,seq__47268__$1,temp__5720__auto__))
);
} else {
}


var G__47294 = cljs.core.next.call(null,seq__47268__$1);
var G__47295 = null;
var G__47296 = (0);
var G__47297 = (0);
seq__47268 = G__47294;
chunk__47269 = G__47295;
count__47270 = G__47296;
i__47271 = G__47297;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__47299 = arguments.length;
switch (G__47299) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__47300_47305 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47301_47306 = null;
var count__47302_47307 = (0);
var i__47303_47308 = (0);
while(true){
if((i__47303_47308 < count__47302_47307)){
var msg_47309 = cljs.core._nth.call(null,chunk__47301_47306,i__47303_47308);
figwheel.client.socket.handle_incoming_message.call(null,msg_47309);


var G__47310 = seq__47300_47305;
var G__47311 = chunk__47301_47306;
var G__47312 = count__47302_47307;
var G__47313 = (i__47303_47308 + (1));
seq__47300_47305 = G__47310;
chunk__47301_47306 = G__47311;
count__47302_47307 = G__47312;
i__47303_47308 = G__47313;
continue;
} else {
var temp__5720__auto___47314 = cljs.core.seq.call(null,seq__47300_47305);
if(temp__5720__auto___47314){
var seq__47300_47315__$1 = temp__5720__auto___47314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47300_47315__$1)){
var c__4550__auto___47316 = cljs.core.chunk_first.call(null,seq__47300_47315__$1);
var G__47317 = cljs.core.chunk_rest.call(null,seq__47300_47315__$1);
var G__47318 = c__4550__auto___47316;
var G__47319 = cljs.core.count.call(null,c__4550__auto___47316);
var G__47320 = (0);
seq__47300_47305 = G__47317;
chunk__47301_47306 = G__47318;
count__47302_47307 = G__47319;
i__47303_47308 = G__47320;
continue;
} else {
var msg_47321 = cljs.core.first.call(null,seq__47300_47315__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47321);


var G__47322 = cljs.core.next.call(null,seq__47300_47315__$1);
var G__47323 = null;
var G__47324 = (0);
var G__47325 = (0);
seq__47300_47305 = G__47322;
chunk__47301_47306 = G__47323;
count__47302_47307 = G__47324;
i__47303_47308 = G__47325;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47330 = arguments.length;
var i__4731__auto___47331 = (0);
while(true){
if((i__4731__auto___47331 < len__4730__auto___47330)){
args__4736__auto__.push((arguments[i__4731__auto___47331]));

var G__47332 = (i__4731__auto___47331 + (1));
i__4731__auto___47331 = G__47332;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47327){
var map__47328 = p__47327;
var map__47328__$1 = (((((!((map__47328 == null))))?(((((map__47328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47328):map__47328);
var opts = map__47328__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47326){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47326));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47333){if((e47333 instanceof Error)){
var e = e47333;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47333;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__47334){
var map__47335 = p__47334;
var map__47335__$1 = (((((!((map__47335 == null))))?(((((map__47335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47335):map__47335);
var msg_name = cljs.core.get.call(null,map__47335__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1583319098054
