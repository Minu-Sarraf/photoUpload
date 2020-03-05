// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__40923__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40924__i = 0, G__40924__a = new Array(arguments.length -  0);
while (G__40924__i < G__40924__a.length) {G__40924__a[G__40924__i] = arguments[G__40924__i + 0]; ++G__40924__i;}
  args = new cljs.core.IndexedSeq(G__40924__a,0,null);
} 
return G__40923__delegate.call(this,args);};
G__40923.cljs$lang$maxFixedArity = 0;
G__40923.cljs$lang$applyTo = (function (arglist__40925){
var args = cljs.core.seq(arglist__40925);
return G__40923__delegate(args);
});
G__40923.cljs$core$IFn$_invoke$arity$variadic = G__40923__delegate;
return G__40923;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40926__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40927__i = 0, G__40927__a = new Array(arguments.length -  0);
while (G__40927__i < G__40927__a.length) {G__40927__a[G__40927__i] = arguments[G__40927__i + 0]; ++G__40927__i;}
  args = new cljs.core.IndexedSeq(G__40927__a,0,null);
} 
return G__40926__delegate.call(this,args);};
G__40926.cljs$lang$maxFixedArity = 0;
G__40926.cljs$lang$applyTo = (function (arglist__40928){
var args = cljs.core.seq(arglist__40928);
return G__40926__delegate(args);
});
G__40926.cljs$core$IFn$_invoke$arity$variadic = G__40926__delegate;
return G__40926;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1583319093066
