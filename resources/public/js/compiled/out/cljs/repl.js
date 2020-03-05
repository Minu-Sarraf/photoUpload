// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46521){
var map__46522 = p__46521;
var map__46522__$1 = (((((!((map__46522 == null))))?(((((map__46522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46522):map__46522);
var m = map__46522__$1;
var n = cljs.core.get.call(null,map__46522__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46524_46556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46525_46557 = null;
var count__46526_46558 = (0);
var i__46527_46559 = (0);
while(true){
if((i__46527_46559 < count__46526_46558)){
var f_46560 = cljs.core._nth.call(null,chunk__46525_46557,i__46527_46559);
cljs.core.println.call(null,"  ",f_46560);


var G__46561 = seq__46524_46556;
var G__46562 = chunk__46525_46557;
var G__46563 = count__46526_46558;
var G__46564 = (i__46527_46559 + (1));
seq__46524_46556 = G__46561;
chunk__46525_46557 = G__46562;
count__46526_46558 = G__46563;
i__46527_46559 = G__46564;
continue;
} else {
var temp__5720__auto___46565 = cljs.core.seq.call(null,seq__46524_46556);
if(temp__5720__auto___46565){
var seq__46524_46566__$1 = temp__5720__auto___46565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46524_46566__$1)){
var c__4550__auto___46567 = cljs.core.chunk_first.call(null,seq__46524_46566__$1);
var G__46568 = cljs.core.chunk_rest.call(null,seq__46524_46566__$1);
var G__46569 = c__4550__auto___46567;
var G__46570 = cljs.core.count.call(null,c__4550__auto___46567);
var G__46571 = (0);
seq__46524_46556 = G__46568;
chunk__46525_46557 = G__46569;
count__46526_46558 = G__46570;
i__46527_46559 = G__46571;
continue;
} else {
var f_46572 = cljs.core.first.call(null,seq__46524_46566__$1);
cljs.core.println.call(null,"  ",f_46572);


var G__46573 = cljs.core.next.call(null,seq__46524_46566__$1);
var G__46574 = null;
var G__46575 = (0);
var G__46576 = (0);
seq__46524_46556 = G__46573;
chunk__46525_46557 = G__46574;
count__46526_46558 = G__46575;
i__46527_46559 = G__46576;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46577 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46577);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46577)))?cljs.core.second.call(null,arglists_46577):arglists_46577));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46528_46578 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46529_46579 = null;
var count__46530_46580 = (0);
var i__46531_46581 = (0);
while(true){
if((i__46531_46581 < count__46530_46580)){
var vec__46542_46582 = cljs.core._nth.call(null,chunk__46529_46579,i__46531_46581);
var name_46583 = cljs.core.nth.call(null,vec__46542_46582,(0),null);
var map__46545_46584 = cljs.core.nth.call(null,vec__46542_46582,(1),null);
var map__46545_46585__$1 = (((((!((map__46545_46584 == null))))?(((((map__46545_46584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46545_46584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46545_46584):map__46545_46584);
var doc_46586 = cljs.core.get.call(null,map__46545_46585__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46587 = cljs.core.get.call(null,map__46545_46585__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46583);

cljs.core.println.call(null," ",arglists_46587);

if(cljs.core.truth_(doc_46586)){
cljs.core.println.call(null," ",doc_46586);
} else {
}


var G__46588 = seq__46528_46578;
var G__46589 = chunk__46529_46579;
var G__46590 = count__46530_46580;
var G__46591 = (i__46531_46581 + (1));
seq__46528_46578 = G__46588;
chunk__46529_46579 = G__46589;
count__46530_46580 = G__46590;
i__46531_46581 = G__46591;
continue;
} else {
var temp__5720__auto___46592 = cljs.core.seq.call(null,seq__46528_46578);
if(temp__5720__auto___46592){
var seq__46528_46593__$1 = temp__5720__auto___46592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46528_46593__$1)){
var c__4550__auto___46594 = cljs.core.chunk_first.call(null,seq__46528_46593__$1);
var G__46595 = cljs.core.chunk_rest.call(null,seq__46528_46593__$1);
var G__46596 = c__4550__auto___46594;
var G__46597 = cljs.core.count.call(null,c__4550__auto___46594);
var G__46598 = (0);
seq__46528_46578 = G__46595;
chunk__46529_46579 = G__46596;
count__46530_46580 = G__46597;
i__46531_46581 = G__46598;
continue;
} else {
var vec__46547_46599 = cljs.core.first.call(null,seq__46528_46593__$1);
var name_46600 = cljs.core.nth.call(null,vec__46547_46599,(0),null);
var map__46550_46601 = cljs.core.nth.call(null,vec__46547_46599,(1),null);
var map__46550_46602__$1 = (((((!((map__46550_46601 == null))))?(((((map__46550_46601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46550_46601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46550_46601):map__46550_46601);
var doc_46603 = cljs.core.get.call(null,map__46550_46602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46604 = cljs.core.get.call(null,map__46550_46602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46600);

cljs.core.println.call(null," ",arglists_46604);

if(cljs.core.truth_(doc_46603)){
cljs.core.println.call(null," ",doc_46603);
} else {
}


var G__46605 = cljs.core.next.call(null,seq__46528_46593__$1);
var G__46606 = null;
var G__46607 = (0);
var G__46608 = (0);
seq__46528_46578 = G__46605;
chunk__46529_46579 = G__46606;
count__46530_46580 = G__46607;
i__46531_46581 = G__46608;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__46552 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46553 = null;
var count__46554 = (0);
var i__46555 = (0);
while(true){
if((i__46555 < count__46554)){
var role = cljs.core._nth.call(null,chunk__46553,i__46555);
var temp__5720__auto___46609__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___46609__$1)){
var spec_46610 = temp__5720__auto___46609__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46610));
} else {
}


var G__46611 = seq__46552;
var G__46612 = chunk__46553;
var G__46613 = count__46554;
var G__46614 = (i__46555 + (1));
seq__46552 = G__46611;
chunk__46553 = G__46612;
count__46554 = G__46613;
i__46555 = G__46614;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__46552);
if(temp__5720__auto____$1){
var seq__46552__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46552__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46552__$1);
var G__46615 = cljs.core.chunk_rest.call(null,seq__46552__$1);
var G__46616 = c__4550__auto__;
var G__46617 = cljs.core.count.call(null,c__4550__auto__);
var G__46618 = (0);
seq__46552 = G__46615;
chunk__46553 = G__46616;
count__46554 = G__46617;
i__46555 = G__46618;
continue;
} else {
var role = cljs.core.first.call(null,seq__46552__$1);
var temp__5720__auto___46619__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___46619__$2)){
var spec_46620 = temp__5720__auto___46619__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46620));
} else {
}


var G__46621 = cljs.core.next.call(null,seq__46552__$1);
var G__46622 = null;
var G__46623 = (0);
var G__46624 = (0);
seq__46552 = G__46621;
chunk__46553 = G__46622;
count__46554 = G__46623;
i__46555 = G__46624;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46625 = cljs.core.conj.call(null,via,t);
var G__46626 = cljs.core.ex_cause.call(null,t);
via = G__46625;
t = G__46626;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46629 = datafied_throwable;
var map__46629__$1 = (((((!((map__46629 == null))))?(((((map__46629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46629):map__46629);
var via = cljs.core.get.call(null,map__46629__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__46629__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__46629__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46630 = cljs.core.last.call(null,via);
var map__46630__$1 = (((((!((map__46630 == null))))?(((((map__46630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46630):map__46630);
var type = cljs.core.get.call(null,map__46630__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__46630__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__46630__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46631 = data;
var map__46631__$1 = (((((!((map__46631 == null))))?(((((map__46631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46631):map__46631);
var problems = cljs.core.get.call(null,map__46631__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__46631__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__46631__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46632 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__46632__$1 = (((((!((map__46632 == null))))?(((((map__46632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46632):map__46632);
var top_data = map__46632__$1;
var source = cljs.core.get.call(null,map__46632__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__46637 = phase;
var G__46637__$1 = (((G__46637 instanceof cljs.core.Keyword))?G__46637.fqn:null);
switch (G__46637__$1) {
case "read-source":
var map__46638 = data;
var map__46638__$1 = (((((!((map__46638 == null))))?(((((map__46638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46638):map__46638);
var line = cljs.core.get.call(null,map__46638__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__46638__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46640 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__46640__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__46640,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46640);
var G__46640__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__46640__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46640__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__46640__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46640__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46641 = top_data;
var G__46641__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__46641,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46641);
var G__46641__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__46641__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46641__$1);
var G__46641__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__46641__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46641__$2);
var G__46641__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__46641__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46641__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__46641__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46641__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46642 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__46642,(0),null);
var method = cljs.core.nth.call(null,vec__46642,(1),null);
var file = cljs.core.nth.call(null,vec__46642,(2),null);
var line = cljs.core.nth.call(null,vec__46642,(3),null);
var G__46645 = top_data;
var G__46645__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__46645,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46645);
var G__46645__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__46645__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46645__$1);
var G__46645__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__46645__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46645__$2);
var G__46645__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__46645__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46645__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__46645__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46645__$4;
}

break;
case "execution":
var vec__46646 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__46646,(0),null);
var method = cljs.core.nth.call(null,vec__46646,(1),null);
var file = cljs.core.nth.call(null,vec__46646,(2),null);
var line = cljs.core.nth.call(null,vec__46646,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__46646,source__$1,method,file,line,G__46637,G__46637__$1,map__46629,map__46629__$1,via,trace,phase,map__46630,map__46630__$1,type,message,data,map__46631,map__46631__$1,problems,fn,caller,map__46632,map__46632__$1,top_data,source){
return (function (p1__46628_SHARP_){
var or__4131__auto__ = (p1__46628_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__46628_SHARP_);
}
});})(vec__46646,source__$1,method,file,line,G__46637,G__46637__$1,map__46629,map__46629__$1,via,trace,phase,map__46630,map__46630__$1,type,message,data,map__46631,map__46631__$1,problems,fn,caller,map__46632,map__46632__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__46649 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46649__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__46649,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46649);
var G__46649__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__46649__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46649__$1);
var G__46649__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__46649__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46649__$2);
var G__46649__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__46649__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46649__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__46649__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46649__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46637__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46653){
var map__46654 = p__46653;
var map__46654__$1 = (((((!((map__46654 == null))))?(((((map__46654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46654):map__46654);
var triage_data = map__46654__$1;
var phase = cljs.core.get.call(null,map__46654__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__46654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__46654__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__46654__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__46654__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__46654__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__46654__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__46654__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46656 = phase;
var G__46656__$1 = (((G__46656 instanceof cljs.core.Keyword))?G__46656.fqn:null);
switch (G__46656__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46657_46666 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46658_46667 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46659_46668 = true;
var _STAR_print_fn_STAR__temp_val__46660_46669 = ((function (_STAR_print_newline_STAR__orig_val__46657_46666,_STAR_print_fn_STAR__orig_val__46658_46667,_STAR_print_newline_STAR__temp_val__46659_46668,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__46657_46666,_STAR_print_fn_STAR__orig_val__46658_46667,_STAR_print_newline_STAR__temp_val__46659_46668,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46659_46668;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46660_46669;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__46657_46666,_STAR_print_fn_STAR__orig_val__46658_46667,_STAR_print_newline_STAR__temp_val__46659_46668,_STAR_print_fn_STAR__temp_val__46660_46669,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__46657_46666,_STAR_print_fn_STAR__orig_val__46658_46667,_STAR_print_newline_STAR__temp_val__46659_46668,_STAR_print_fn_STAR__temp_val__46660_46669,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__46651_SHARP_){
return cljs.core.dissoc.call(null,p1__46651_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__46657_46666,_STAR_print_fn_STAR__orig_val__46658_46667,_STAR_print_newline_STAR__temp_val__46659_46668,_STAR_print_fn_STAR__temp_val__46660_46669,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__46657_46666,_STAR_print_fn_STAR__orig_val__46658_46667,_STAR_print_newline_STAR__temp_val__46659_46668,_STAR_print_fn_STAR__temp_val__46660_46669,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46658_46667;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46657_46666;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46661_46670 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46662_46671 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46663_46672 = true;
var _STAR_print_fn_STAR__temp_val__46664_46673 = ((function (_STAR_print_newline_STAR__orig_val__46661_46670,_STAR_print_fn_STAR__orig_val__46662_46671,_STAR_print_newline_STAR__temp_val__46663_46672,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__46661_46670,_STAR_print_fn_STAR__orig_val__46662_46671,_STAR_print_newline_STAR__temp_val__46663_46672,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46663_46672;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46664_46673;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__46661_46670,_STAR_print_fn_STAR__orig_val__46662_46671,_STAR_print_newline_STAR__temp_val__46663_46672,_STAR_print_fn_STAR__temp_val__46664_46673,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__46661_46670,_STAR_print_fn_STAR__orig_val__46662_46671,_STAR_print_newline_STAR__temp_val__46663_46672,_STAR_print_fn_STAR__temp_val__46664_46673,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__46652_SHARP_){
return cljs.core.dissoc.call(null,p1__46652_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__46661_46670,_STAR_print_fn_STAR__orig_val__46662_46671,_STAR_print_newline_STAR__temp_val__46663_46672,_STAR_print_fn_STAR__temp_val__46664_46673,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__46661_46670,_STAR_print_fn_STAR__orig_val__46662_46671,_STAR_print_newline_STAR__temp_val__46663_46672,_STAR_print_fn_STAR__temp_val__46664_46673,sb__4661__auto__,G__46656,G__46656__$1,loc,class_name,simple_class,cause_type,format,map__46654,map__46654__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46662_46671;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46661_46670;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46656__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1583319097708
