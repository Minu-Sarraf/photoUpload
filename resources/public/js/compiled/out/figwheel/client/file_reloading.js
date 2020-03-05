// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44991_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44991_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44992 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44993 = null;
var count__44994 = (0);
var i__44995 = (0);
while(true){
if((i__44995 < count__44994)){
var n = cljs.core._nth.call(null,chunk__44993,i__44995);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__44996 = seq__44992;
var G__44997 = chunk__44993;
var G__44998 = count__44994;
var G__44999 = (i__44995 + (1));
seq__44992 = G__44996;
chunk__44993 = G__44997;
count__44994 = G__44998;
i__44995 = G__44999;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44992);
if(temp__5720__auto__){
var seq__44992__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44992__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44992__$1);
var G__45000 = cljs.core.chunk_rest.call(null,seq__44992__$1);
var G__45001 = c__4550__auto__;
var G__45002 = cljs.core.count.call(null,c__4550__auto__);
var G__45003 = (0);
seq__44992 = G__45000;
chunk__44993 = G__45001;
count__44994 = G__45002;
i__44995 = G__45003;
continue;
} else {
var n = cljs.core.first.call(null,seq__44992__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45004 = cljs.core.next.call(null,seq__44992__$1);
var G__45005 = null;
var G__45006 = (0);
var G__45007 = (0);
seq__44992 = G__45004;
chunk__44993 = G__45005;
count__44994 = G__45006;
i__44995 = G__45007;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__45008){
var vec__45009 = p__45008;
var _ = cljs.core.nth.call(null,vec__45009,(0),null);
var v = cljs.core.nth.call(null,vec__45009,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__45012){
var vec__45013 = p__45012;
var k = cljs.core.nth.call(null,vec__45013,(0),null);
var v = cljs.core.nth.call(null,vec__45013,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__45025_45033 = cljs.core.seq.call(null,deps);
var chunk__45026_45034 = null;
var count__45027_45035 = (0);
var i__45028_45036 = (0);
while(true){
if((i__45028_45036 < count__45027_45035)){
var dep_45037 = cljs.core._nth.call(null,chunk__45026_45034,i__45028_45036);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_45037;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45037));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45037,(depth + (1)),state);
} else {
}


var G__45038 = seq__45025_45033;
var G__45039 = chunk__45026_45034;
var G__45040 = count__45027_45035;
var G__45041 = (i__45028_45036 + (1));
seq__45025_45033 = G__45038;
chunk__45026_45034 = G__45039;
count__45027_45035 = G__45040;
i__45028_45036 = G__45041;
continue;
} else {
var temp__5720__auto___45042 = cljs.core.seq.call(null,seq__45025_45033);
if(temp__5720__auto___45042){
var seq__45025_45043__$1 = temp__5720__auto___45042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45025_45043__$1)){
var c__4550__auto___45044 = cljs.core.chunk_first.call(null,seq__45025_45043__$1);
var G__45045 = cljs.core.chunk_rest.call(null,seq__45025_45043__$1);
var G__45046 = c__4550__auto___45044;
var G__45047 = cljs.core.count.call(null,c__4550__auto___45044);
var G__45048 = (0);
seq__45025_45033 = G__45045;
chunk__45026_45034 = G__45046;
count__45027_45035 = G__45047;
i__45028_45036 = G__45048;
continue;
} else {
var dep_45049 = cljs.core.first.call(null,seq__45025_45043__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_45049;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45049));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45049,(depth + (1)),state);
} else {
}


var G__45050 = cljs.core.next.call(null,seq__45025_45043__$1);
var G__45051 = null;
var G__45052 = (0);
var G__45053 = (0);
seq__45025_45033 = G__45050;
chunk__45026_45034 = G__45051;
count__45027_45035 = G__45052;
i__45028_45036 = G__45053;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45029){
var vec__45030 = p__45029;
var seq__45031 = cljs.core.seq.call(null,vec__45030);
var first__45032 = cljs.core.first.call(null,seq__45031);
var seq__45031__$1 = cljs.core.next.call(null,seq__45031);
var x = first__45032;
var xs = seq__45031__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45030,seq__45031,first__45032,seq__45031__$1,x,xs,get_deps__$1){
return (function (p1__45016_SHARP_){
return clojure.set.difference.call(null,p1__45016_SHARP_,x);
});})(vec__45030,seq__45031,first__45032,seq__45031__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__45054 = cljs.core.seq.call(null,provides);
var chunk__45055 = null;
var count__45056 = (0);
var i__45057 = (0);
while(true){
if((i__45057 < count__45056)){
var prov = cljs.core._nth.call(null,chunk__45055,i__45057);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45066_45074 = cljs.core.seq.call(null,requires);
var chunk__45067_45075 = null;
var count__45068_45076 = (0);
var i__45069_45077 = (0);
while(true){
if((i__45069_45077 < count__45068_45076)){
var req_45078 = cljs.core._nth.call(null,chunk__45067_45075,i__45069_45077);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45078,prov);


var G__45079 = seq__45066_45074;
var G__45080 = chunk__45067_45075;
var G__45081 = count__45068_45076;
var G__45082 = (i__45069_45077 + (1));
seq__45066_45074 = G__45079;
chunk__45067_45075 = G__45080;
count__45068_45076 = G__45081;
i__45069_45077 = G__45082;
continue;
} else {
var temp__5720__auto___45083 = cljs.core.seq.call(null,seq__45066_45074);
if(temp__5720__auto___45083){
var seq__45066_45084__$1 = temp__5720__auto___45083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45066_45084__$1)){
var c__4550__auto___45085 = cljs.core.chunk_first.call(null,seq__45066_45084__$1);
var G__45086 = cljs.core.chunk_rest.call(null,seq__45066_45084__$1);
var G__45087 = c__4550__auto___45085;
var G__45088 = cljs.core.count.call(null,c__4550__auto___45085);
var G__45089 = (0);
seq__45066_45074 = G__45086;
chunk__45067_45075 = G__45087;
count__45068_45076 = G__45088;
i__45069_45077 = G__45089;
continue;
} else {
var req_45090 = cljs.core.first.call(null,seq__45066_45084__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45090,prov);


var G__45091 = cljs.core.next.call(null,seq__45066_45084__$1);
var G__45092 = null;
var G__45093 = (0);
var G__45094 = (0);
seq__45066_45074 = G__45091;
chunk__45067_45075 = G__45092;
count__45068_45076 = G__45093;
i__45069_45077 = G__45094;
continue;
}
} else {
}
}
break;
}


var G__45095 = seq__45054;
var G__45096 = chunk__45055;
var G__45097 = count__45056;
var G__45098 = (i__45057 + (1));
seq__45054 = G__45095;
chunk__45055 = G__45096;
count__45056 = G__45097;
i__45057 = G__45098;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__45054);
if(temp__5720__auto__){
var seq__45054__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45054__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__45054__$1);
var G__45099 = cljs.core.chunk_rest.call(null,seq__45054__$1);
var G__45100 = c__4550__auto__;
var G__45101 = cljs.core.count.call(null,c__4550__auto__);
var G__45102 = (0);
seq__45054 = G__45099;
chunk__45055 = G__45100;
count__45056 = G__45101;
i__45057 = G__45102;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45054__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45070_45103 = cljs.core.seq.call(null,requires);
var chunk__45071_45104 = null;
var count__45072_45105 = (0);
var i__45073_45106 = (0);
while(true){
if((i__45073_45106 < count__45072_45105)){
var req_45107 = cljs.core._nth.call(null,chunk__45071_45104,i__45073_45106);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45107,prov);


var G__45108 = seq__45070_45103;
var G__45109 = chunk__45071_45104;
var G__45110 = count__45072_45105;
var G__45111 = (i__45073_45106 + (1));
seq__45070_45103 = G__45108;
chunk__45071_45104 = G__45109;
count__45072_45105 = G__45110;
i__45073_45106 = G__45111;
continue;
} else {
var temp__5720__auto___45112__$1 = cljs.core.seq.call(null,seq__45070_45103);
if(temp__5720__auto___45112__$1){
var seq__45070_45113__$1 = temp__5720__auto___45112__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45070_45113__$1)){
var c__4550__auto___45114 = cljs.core.chunk_first.call(null,seq__45070_45113__$1);
var G__45115 = cljs.core.chunk_rest.call(null,seq__45070_45113__$1);
var G__45116 = c__4550__auto___45114;
var G__45117 = cljs.core.count.call(null,c__4550__auto___45114);
var G__45118 = (0);
seq__45070_45103 = G__45115;
chunk__45071_45104 = G__45116;
count__45072_45105 = G__45117;
i__45073_45106 = G__45118;
continue;
} else {
var req_45119 = cljs.core.first.call(null,seq__45070_45113__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45119,prov);


var G__45120 = cljs.core.next.call(null,seq__45070_45113__$1);
var G__45121 = null;
var G__45122 = (0);
var G__45123 = (0);
seq__45070_45103 = G__45120;
chunk__45071_45104 = G__45121;
count__45072_45105 = G__45122;
i__45073_45106 = G__45123;
continue;
}
} else {
}
}
break;
}


var G__45124 = cljs.core.next.call(null,seq__45054__$1);
var G__45125 = null;
var G__45126 = (0);
var G__45127 = (0);
seq__45054 = G__45124;
chunk__45055 = G__45125;
count__45056 = G__45126;
i__45057 = G__45127;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__45128_45132 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45129_45133 = null;
var count__45130_45134 = (0);
var i__45131_45135 = (0);
while(true){
if((i__45131_45135 < count__45130_45134)){
var ns_45136 = cljs.core._nth.call(null,chunk__45129_45133,i__45131_45135);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45136);


var G__45137 = seq__45128_45132;
var G__45138 = chunk__45129_45133;
var G__45139 = count__45130_45134;
var G__45140 = (i__45131_45135 + (1));
seq__45128_45132 = G__45137;
chunk__45129_45133 = G__45138;
count__45130_45134 = G__45139;
i__45131_45135 = G__45140;
continue;
} else {
var temp__5720__auto___45141 = cljs.core.seq.call(null,seq__45128_45132);
if(temp__5720__auto___45141){
var seq__45128_45142__$1 = temp__5720__auto___45141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45128_45142__$1)){
var c__4550__auto___45143 = cljs.core.chunk_first.call(null,seq__45128_45142__$1);
var G__45144 = cljs.core.chunk_rest.call(null,seq__45128_45142__$1);
var G__45145 = c__4550__auto___45143;
var G__45146 = cljs.core.count.call(null,c__4550__auto___45143);
var G__45147 = (0);
seq__45128_45132 = G__45144;
chunk__45129_45133 = G__45145;
count__45130_45134 = G__45146;
i__45131_45135 = G__45147;
continue;
} else {
var ns_45148 = cljs.core.first.call(null,seq__45128_45142__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45148);


var G__45149 = cljs.core.next.call(null,seq__45128_45142__$1);
var G__45150 = null;
var G__45151 = (0);
var G__45152 = (0);
seq__45128_45132 = G__45149;
chunk__45129_45133 = G__45150;
count__45130_45134 = G__45151;
i__45131_45135 = G__45152;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__45153__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45154__i = 0, G__45154__a = new Array(arguments.length -  0);
while (G__45154__i < G__45154__a.length) {G__45154__a[G__45154__i] = arguments[G__45154__i + 0]; ++G__45154__i;}
  args = new cljs.core.IndexedSeq(G__45154__a,0,null);
} 
return G__45153__delegate.call(this,args);};
G__45153.cljs$lang$maxFixedArity = 0;
G__45153.cljs$lang$applyTo = (function (arglist__45155){
var args = cljs.core.seq(arglist__45155);
return G__45153__delegate(args);
});
G__45153.cljs$core$IFn$_invoke$arity$variadic = G__45153__delegate;
return G__45153;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__45156_SHARP_,p2__45157_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45156_SHARP_)),p2__45157_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__45158_SHARP_,p2__45159_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45158_SHARP_),p2__45159_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45160 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45160.addCallback(((function (G__45160){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__45160))
);

G__45160.addErrback(((function (G__45160){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__45160))
);

return G__45160;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45161){if((e45161 instanceof Error)){
var e = e45161;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45161;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45162){if((e45162 instanceof Error)){
var e = e45162;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45162;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45163 = cljs.core._EQ_;
var expr__45164 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45163.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45164))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__45163.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45164))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__45163.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45164))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__45163,expr__45164){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45163,expr__45164))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45166,callback){
var map__45167 = p__45166;
var map__45167__$1 = (((((!((map__45167 == null))))?(((((map__45167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45167):map__45167);
var file_msg = map__45167__$1;
var request_url = cljs.core.get.call(null,map__45167__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__45167,map__45167__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45167,map__45167__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__){
return (function (state_45205){
var state_val_45206 = (state_45205[(1)]);
if((state_val_45206 === (7))){
var inst_45201 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
var statearr_45207_45233 = state_45205__$1;
(statearr_45207_45233[(2)] = inst_45201);

(statearr_45207_45233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (1))){
var state_45205__$1 = state_45205;
var statearr_45208_45234 = state_45205__$1;
(statearr_45208_45234[(2)] = null);

(statearr_45208_45234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (4))){
var inst_45171 = (state_45205[(7)]);
var inst_45171__$1 = (state_45205[(2)]);
var state_45205__$1 = (function (){var statearr_45209 = state_45205;
(statearr_45209[(7)] = inst_45171__$1);

return statearr_45209;
})();
if(cljs.core.truth_(inst_45171__$1)){
var statearr_45210_45235 = state_45205__$1;
(statearr_45210_45235[(1)] = (5));

} else {
var statearr_45211_45236 = state_45205__$1;
(statearr_45211_45236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (15))){
var inst_45184 = (state_45205[(8)]);
var inst_45186 = (state_45205[(9)]);
var inst_45188 = inst_45186.call(null,inst_45184);
var state_45205__$1 = state_45205;
var statearr_45212_45237 = state_45205__$1;
(statearr_45212_45237[(2)] = inst_45188);

(statearr_45212_45237[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (13))){
var inst_45195 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
var statearr_45213_45238 = state_45205__$1;
(statearr_45213_45238[(2)] = inst_45195);

(statearr_45213_45238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (6))){
var state_45205__$1 = state_45205;
var statearr_45214_45239 = state_45205__$1;
(statearr_45214_45239[(2)] = null);

(statearr_45214_45239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (17))){
var inst_45192 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
var statearr_45215_45240 = state_45205__$1;
(statearr_45215_45240[(2)] = inst_45192);

(statearr_45215_45240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (3))){
var inst_45203 = (state_45205[(2)]);
var state_45205__$1 = state_45205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45205__$1,inst_45203);
} else {
if((state_val_45206 === (12))){
var state_45205__$1 = state_45205;
var statearr_45216_45241 = state_45205__$1;
(statearr_45216_45241[(2)] = null);

(statearr_45216_45241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (2))){
var state_45205__$1 = state_45205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45205__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45206 === (11))){
var inst_45176 = (state_45205[(10)]);
var inst_45182 = figwheel.client.file_reloading.blocking_load.call(null,inst_45176);
var state_45205__$1 = state_45205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45205__$1,(14),inst_45182);
} else {
if((state_val_45206 === (9))){
var inst_45176 = (state_45205[(10)]);
var state_45205__$1 = state_45205;
if(cljs.core.truth_(inst_45176)){
var statearr_45217_45242 = state_45205__$1;
(statearr_45217_45242[(1)] = (11));

} else {
var statearr_45218_45243 = state_45205__$1;
(statearr_45218_45243[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (5))){
var inst_45171 = (state_45205[(7)]);
var inst_45177 = (state_45205[(11)]);
var inst_45176 = cljs.core.nth.call(null,inst_45171,(0),null);
var inst_45177__$1 = cljs.core.nth.call(null,inst_45171,(1),null);
var state_45205__$1 = (function (){var statearr_45219 = state_45205;
(statearr_45219[(11)] = inst_45177__$1);

(statearr_45219[(10)] = inst_45176);

return statearr_45219;
})();
if(cljs.core.truth_(inst_45177__$1)){
var statearr_45220_45244 = state_45205__$1;
(statearr_45220_45244[(1)] = (8));

} else {
var statearr_45221_45245 = state_45205__$1;
(statearr_45221_45245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (14))){
var inst_45186 = (state_45205[(9)]);
var inst_45176 = (state_45205[(10)]);
var inst_45184 = (state_45205[(2)]);
var inst_45185 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45186__$1 = cljs.core.get.call(null,inst_45185,inst_45176);
var state_45205__$1 = (function (){var statearr_45222 = state_45205;
(statearr_45222[(8)] = inst_45184);

(statearr_45222[(9)] = inst_45186__$1);

return statearr_45222;
})();
if(cljs.core.truth_(inst_45186__$1)){
var statearr_45223_45246 = state_45205__$1;
(statearr_45223_45246[(1)] = (15));

} else {
var statearr_45224_45247 = state_45205__$1;
(statearr_45224_45247[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (16))){
var inst_45184 = (state_45205[(8)]);
var inst_45190 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45184);
var state_45205__$1 = state_45205;
var statearr_45225_45248 = state_45205__$1;
(statearr_45225_45248[(2)] = inst_45190);

(statearr_45225_45248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (10))){
var inst_45197 = (state_45205[(2)]);
var state_45205__$1 = (function (){var statearr_45226 = state_45205;
(statearr_45226[(12)] = inst_45197);

return statearr_45226;
})();
var statearr_45227_45249 = state_45205__$1;
(statearr_45227_45249[(2)] = null);

(statearr_45227_45249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45206 === (8))){
var inst_45177 = (state_45205[(11)]);
var inst_45179 = eval(inst_45177);
var state_45205__$1 = state_45205;
var statearr_45228_45250 = state_45205__$1;
(statearr_45228_45250[(2)] = inst_45179);

(statearr_45228_45250[(1)] = (10));


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
});})(c__28138__auto__))
;
return ((function (switch__28043__auto__,c__28138__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28044__auto__ = null;
var figwheel$client$file_reloading$state_machine__28044__auto____0 = (function (){
var statearr_45229 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45229[(0)] = figwheel$client$file_reloading$state_machine__28044__auto__);

(statearr_45229[(1)] = (1));

return statearr_45229;
});
var figwheel$client$file_reloading$state_machine__28044__auto____1 = (function (state_45205){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_45205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e45230){if((e45230 instanceof Object)){
var ex__28047__auto__ = e45230;
var statearr_45231_45251 = state_45205;
(statearr_45231_45251[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45252 = state_45205;
state_45205 = G__45252;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28044__auto__ = function(state_45205){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28044__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28044__auto____1.call(this,state_45205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28044__auto____0;
figwheel$client$file_reloading$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28044__auto____1;
return figwheel$client$file_reloading$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__))
})();
var state__28140__auto__ = (function (){var statearr_45232 = f__28139__auto__.call(null);
(statearr_45232[(6)] = c__28138__auto__);

return statearr_45232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__))
);

return c__28138__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__45254 = arguments.length;
switch (G__45254) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45256,callback){
var map__45257 = p__45256;
var map__45257__$1 = (((((!((map__45257 == null))))?(((((map__45257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45257):map__45257);
var file_msg = map__45257__$1;
var namespace = cljs.core.get.call(null,map__45257__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45257,map__45257__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45257,map__45257__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45259){
var map__45260 = p__45259;
var map__45260__$1 = (((((!((map__45260 == null))))?(((((map__45260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45260):map__45260);
var file_msg = map__45260__$1;
var namespace = cljs.core.get.call(null,map__45260__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45262){
var map__45263 = p__45262;
var map__45263__$1 = (((((!((map__45263 == null))))?(((((map__45263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45263):map__45263);
var file_msg = map__45263__$1;
var namespace = cljs.core.get.call(null,map__45263__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45265,callback){
var map__45266 = p__45265;
var map__45266__$1 = (((((!((map__45266 == null))))?(((((map__45266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45266):map__45266);
var file_msg = map__45266__$1;
var request_url = cljs.core.get.call(null,map__45266__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28138__auto___45316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___45316,out){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___45316,out){
return (function (state_45301){
var state_val_45302 = (state_45301[(1)]);
if((state_val_45302 === (1))){
var inst_45275 = cljs.core.seq.call(null,files);
var inst_45276 = cljs.core.first.call(null,inst_45275);
var inst_45277 = cljs.core.next.call(null,inst_45275);
var inst_45278 = files;
var state_45301__$1 = (function (){var statearr_45303 = state_45301;
(statearr_45303[(7)] = inst_45277);

(statearr_45303[(8)] = inst_45278);

(statearr_45303[(9)] = inst_45276);

return statearr_45303;
})();
var statearr_45304_45317 = state_45301__$1;
(statearr_45304_45317[(2)] = null);

(statearr_45304_45317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (2))){
var inst_45278 = (state_45301[(8)]);
var inst_45284 = (state_45301[(10)]);
var inst_45283 = cljs.core.seq.call(null,inst_45278);
var inst_45284__$1 = cljs.core.first.call(null,inst_45283);
var inst_45285 = cljs.core.next.call(null,inst_45283);
var inst_45286 = (inst_45284__$1 == null);
var inst_45287 = cljs.core.not.call(null,inst_45286);
var state_45301__$1 = (function (){var statearr_45305 = state_45301;
(statearr_45305[(11)] = inst_45285);

(statearr_45305[(10)] = inst_45284__$1);

return statearr_45305;
})();
if(inst_45287){
var statearr_45306_45318 = state_45301__$1;
(statearr_45306_45318[(1)] = (4));

} else {
var statearr_45307_45319 = state_45301__$1;
(statearr_45307_45319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (3))){
var inst_45299 = (state_45301[(2)]);
var state_45301__$1 = state_45301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45301__$1,inst_45299);
} else {
if((state_val_45302 === (4))){
var inst_45284 = (state_45301[(10)]);
var inst_45289 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45284);
var state_45301__$1 = state_45301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45301__$1,(7),inst_45289);
} else {
if((state_val_45302 === (5))){
var inst_45295 = cljs.core.async.close_BANG_.call(null,out);
var state_45301__$1 = state_45301;
var statearr_45308_45320 = state_45301__$1;
(statearr_45308_45320[(2)] = inst_45295);

(statearr_45308_45320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (6))){
var inst_45297 = (state_45301[(2)]);
var state_45301__$1 = state_45301;
var statearr_45309_45321 = state_45301__$1;
(statearr_45309_45321[(2)] = inst_45297);

(statearr_45309_45321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (7))){
var inst_45285 = (state_45301[(11)]);
var inst_45291 = (state_45301[(2)]);
var inst_45292 = cljs.core.async.put_BANG_.call(null,out,inst_45291);
var inst_45278 = inst_45285;
var state_45301__$1 = (function (){var statearr_45310 = state_45301;
(statearr_45310[(8)] = inst_45278);

(statearr_45310[(12)] = inst_45292);

return statearr_45310;
})();
var statearr_45311_45322 = state_45301__$1;
(statearr_45311_45322[(2)] = null);

(statearr_45311_45322[(1)] = (2));


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
});})(c__28138__auto___45316,out))
;
return ((function (switch__28043__auto__,c__28138__auto___45316,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto____0 = (function (){
var statearr_45312 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45312[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto__);

(statearr_45312[(1)] = (1));

return statearr_45312;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto____1 = (function (state_45301){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_45301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e45313){if((e45313 instanceof Object)){
var ex__28047__auto__ = e45313;
var statearr_45314_45323 = state_45301;
(statearr_45314_45323[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45324 = state_45301;
state_45301 = G__45324;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto__ = function(state_45301){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto____1.call(this,state_45301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___45316,out))
})();
var state__28140__auto__ = (function (){var statearr_45315 = f__28139__auto__.call(null);
(statearr_45315[(6)] = c__28138__auto___45316);

return statearr_45315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___45316,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45325,opts){
var map__45326 = p__45325;
var map__45326__$1 = (((((!((map__45326 == null))))?(((((map__45326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45326):map__45326);
var eval_body = cljs.core.get.call(null,map__45326__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45328){var e = e45328;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45329_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45329_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45330){
var vec__45331 = p__45330;
var k = cljs.core.nth.call(null,vec__45331,(0),null);
var v = cljs.core.nth.call(null,vec__45331,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45334){
var vec__45335 = p__45334;
var k = cljs.core.nth.call(null,vec__45335,(0),null);
var v = cljs.core.nth.call(null,vec__45335,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45341,p__45342){
var map__45343 = p__45341;
var map__45343__$1 = (((((!((map__45343 == null))))?(((((map__45343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45343):map__45343);
var opts = map__45343__$1;
var before_jsload = cljs.core.get.call(null,map__45343__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45343__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45343__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45344 = p__45342;
var map__45344__$1 = (((((!((map__45344 == null))))?(((((map__45344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45344):map__45344);
var msg = map__45344__$1;
var files = cljs.core.get.call(null,map__45344__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45344__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45344__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45498){
var state_val_45499 = (state_45498[(1)]);
if((state_val_45499 === (7))){
var inst_45361 = (state_45498[(7)]);
var inst_45359 = (state_45498[(8)]);
var inst_45360 = (state_45498[(9)]);
var inst_45358 = (state_45498[(10)]);
var inst_45366 = cljs.core._nth.call(null,inst_45359,inst_45361);
var inst_45367 = figwheel.client.file_reloading.eval_body.call(null,inst_45366,opts);
var inst_45368 = (inst_45361 + (1));
var tmp45500 = inst_45359;
var tmp45501 = inst_45360;
var tmp45502 = inst_45358;
var inst_45358__$1 = tmp45502;
var inst_45359__$1 = tmp45500;
var inst_45360__$1 = tmp45501;
var inst_45361__$1 = inst_45368;
var state_45498__$1 = (function (){var statearr_45503 = state_45498;
(statearr_45503[(11)] = inst_45367);

(statearr_45503[(7)] = inst_45361__$1);

(statearr_45503[(8)] = inst_45359__$1);

(statearr_45503[(9)] = inst_45360__$1);

(statearr_45503[(10)] = inst_45358__$1);

return statearr_45503;
})();
var statearr_45504_45587 = state_45498__$1;
(statearr_45504_45587[(2)] = null);

(statearr_45504_45587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (20))){
var inst_45401 = (state_45498[(12)]);
var inst_45409 = figwheel.client.file_reloading.sort_files.call(null,inst_45401);
var state_45498__$1 = state_45498;
var statearr_45505_45588 = state_45498__$1;
(statearr_45505_45588[(2)] = inst_45409);

(statearr_45505_45588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (27))){
var state_45498__$1 = state_45498;
var statearr_45506_45589 = state_45498__$1;
(statearr_45506_45589[(2)] = null);

(statearr_45506_45589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (1))){
var inst_45350 = (state_45498[(13)]);
var inst_45347 = before_jsload.call(null,files);
var inst_45348 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45349 = (function (){return ((function (inst_45350,inst_45347,inst_45348,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45338_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45338_SHARP_);
});
;})(inst_45350,inst_45347,inst_45348,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45350__$1 = cljs.core.filter.call(null,inst_45349,files);
var inst_45351 = cljs.core.not_empty.call(null,inst_45350__$1);
var state_45498__$1 = (function (){var statearr_45507 = state_45498;
(statearr_45507[(14)] = inst_45348);

(statearr_45507[(15)] = inst_45347);

(statearr_45507[(13)] = inst_45350__$1);

return statearr_45507;
})();
if(cljs.core.truth_(inst_45351)){
var statearr_45508_45590 = state_45498__$1;
(statearr_45508_45590[(1)] = (2));

} else {
var statearr_45509_45591 = state_45498__$1;
(statearr_45509_45591[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (24))){
var state_45498__$1 = state_45498;
var statearr_45510_45592 = state_45498__$1;
(statearr_45510_45592[(2)] = null);

(statearr_45510_45592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (39))){
var inst_45451 = (state_45498[(16)]);
var state_45498__$1 = state_45498;
var statearr_45511_45593 = state_45498__$1;
(statearr_45511_45593[(2)] = inst_45451);

(statearr_45511_45593[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (46))){
var inst_45493 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45512_45594 = state_45498__$1;
(statearr_45512_45594[(2)] = inst_45493);

(statearr_45512_45594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (4))){
var inst_45395 = (state_45498[(2)]);
var inst_45396 = cljs.core.List.EMPTY;
var inst_45397 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45396);
var inst_45398 = (function (){return ((function (inst_45395,inst_45396,inst_45397,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45339_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45339_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45339_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__45339_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_45395,inst_45396,inst_45397,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45399 = cljs.core.filter.call(null,inst_45398,files);
var inst_45400 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45401 = cljs.core.concat.call(null,inst_45399,inst_45400);
var state_45498__$1 = (function (){var statearr_45513 = state_45498;
(statearr_45513[(12)] = inst_45401);

(statearr_45513[(17)] = inst_45397);

(statearr_45513[(18)] = inst_45395);

return statearr_45513;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45514_45595 = state_45498__$1;
(statearr_45514_45595[(1)] = (16));

} else {
var statearr_45515_45596 = state_45498__$1;
(statearr_45515_45596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (15))){
var inst_45385 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45516_45597 = state_45498__$1;
(statearr_45516_45597[(2)] = inst_45385);

(statearr_45516_45597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (21))){
var inst_45411 = (state_45498[(19)]);
var inst_45411__$1 = (state_45498[(2)]);
var inst_45412 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45411__$1);
var state_45498__$1 = (function (){var statearr_45517 = state_45498;
(statearr_45517[(19)] = inst_45411__$1);

return statearr_45517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45498__$1,(22),inst_45412);
} else {
if((state_val_45499 === (31))){
var inst_45496 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45498__$1,inst_45496);
} else {
if((state_val_45499 === (32))){
var inst_45451 = (state_45498[(16)]);
var inst_45456 = inst_45451.cljs$lang$protocol_mask$partition0$;
var inst_45457 = (inst_45456 & (64));
var inst_45458 = inst_45451.cljs$core$ISeq$;
var inst_45459 = (cljs.core.PROTOCOL_SENTINEL === inst_45458);
var inst_45460 = ((inst_45457) || (inst_45459));
var state_45498__$1 = state_45498;
if(cljs.core.truth_(inst_45460)){
var statearr_45518_45598 = state_45498__$1;
(statearr_45518_45598[(1)] = (35));

} else {
var statearr_45519_45599 = state_45498__$1;
(statearr_45519_45599[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (40))){
var inst_45473 = (state_45498[(20)]);
var inst_45472 = (state_45498[(2)]);
var inst_45473__$1 = cljs.core.get.call(null,inst_45472,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45474 = cljs.core.get.call(null,inst_45472,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45475 = cljs.core.not_empty.call(null,inst_45473__$1);
var state_45498__$1 = (function (){var statearr_45520 = state_45498;
(statearr_45520[(21)] = inst_45474);

(statearr_45520[(20)] = inst_45473__$1);

return statearr_45520;
})();
if(cljs.core.truth_(inst_45475)){
var statearr_45521_45600 = state_45498__$1;
(statearr_45521_45600[(1)] = (41));

} else {
var statearr_45522_45601 = state_45498__$1;
(statearr_45522_45601[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (33))){
var state_45498__$1 = state_45498;
var statearr_45523_45602 = state_45498__$1;
(statearr_45523_45602[(2)] = false);

(statearr_45523_45602[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (13))){
var inst_45371 = (state_45498[(22)]);
var inst_45375 = cljs.core.chunk_first.call(null,inst_45371);
var inst_45376 = cljs.core.chunk_rest.call(null,inst_45371);
var inst_45377 = cljs.core.count.call(null,inst_45375);
var inst_45358 = inst_45376;
var inst_45359 = inst_45375;
var inst_45360 = inst_45377;
var inst_45361 = (0);
var state_45498__$1 = (function (){var statearr_45524 = state_45498;
(statearr_45524[(7)] = inst_45361);

(statearr_45524[(8)] = inst_45359);

(statearr_45524[(9)] = inst_45360);

(statearr_45524[(10)] = inst_45358);

return statearr_45524;
})();
var statearr_45525_45603 = state_45498__$1;
(statearr_45525_45603[(2)] = null);

(statearr_45525_45603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (22))){
var inst_45419 = (state_45498[(23)]);
var inst_45414 = (state_45498[(24)]);
var inst_45415 = (state_45498[(25)]);
var inst_45411 = (state_45498[(19)]);
var inst_45414__$1 = (state_45498[(2)]);
var inst_45415__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45414__$1);
var inst_45416 = (function (){var all_files = inst_45411;
var res_SINGLEQUOTE_ = inst_45414__$1;
var res = inst_45415__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45419,inst_45414,inst_45415,inst_45411,inst_45414__$1,inst_45415__$1,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45340_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45340_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45419,inst_45414,inst_45415,inst_45411,inst_45414__$1,inst_45415__$1,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45417 = cljs.core.filter.call(null,inst_45416,inst_45414__$1);
var inst_45418 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45419__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45418);
var inst_45420 = cljs.core.not_empty.call(null,inst_45419__$1);
var state_45498__$1 = (function (){var statearr_45526 = state_45498;
(statearr_45526[(23)] = inst_45419__$1);

(statearr_45526[(24)] = inst_45414__$1);

(statearr_45526[(25)] = inst_45415__$1);

(statearr_45526[(26)] = inst_45417);

return statearr_45526;
})();
if(cljs.core.truth_(inst_45420)){
var statearr_45527_45604 = state_45498__$1;
(statearr_45527_45604[(1)] = (23));

} else {
var statearr_45528_45605 = state_45498__$1;
(statearr_45528_45605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (36))){
var state_45498__$1 = state_45498;
var statearr_45529_45606 = state_45498__$1;
(statearr_45529_45606[(2)] = false);

(statearr_45529_45606[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (41))){
var inst_45473 = (state_45498[(20)]);
var inst_45477 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45478 = cljs.core.map.call(null,inst_45477,inst_45473);
var inst_45479 = cljs.core.pr_str.call(null,inst_45478);
var inst_45480 = ["figwheel-no-load meta-data: ",inst_45479].join('');
var inst_45481 = figwheel.client.utils.log.call(null,inst_45480);
var state_45498__$1 = state_45498;
var statearr_45530_45607 = state_45498__$1;
(statearr_45530_45607[(2)] = inst_45481);

(statearr_45530_45607[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (43))){
var inst_45474 = (state_45498[(21)]);
var inst_45484 = (state_45498[(2)]);
var inst_45485 = cljs.core.not_empty.call(null,inst_45474);
var state_45498__$1 = (function (){var statearr_45531 = state_45498;
(statearr_45531[(27)] = inst_45484);

return statearr_45531;
})();
if(cljs.core.truth_(inst_45485)){
var statearr_45532_45608 = state_45498__$1;
(statearr_45532_45608[(1)] = (44));

} else {
var statearr_45533_45609 = state_45498__$1;
(statearr_45533_45609[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (29))){
var inst_45451 = (state_45498[(16)]);
var inst_45419 = (state_45498[(23)]);
var inst_45414 = (state_45498[(24)]);
var inst_45415 = (state_45498[(25)]);
var inst_45417 = (state_45498[(26)]);
var inst_45411 = (state_45498[(19)]);
var inst_45447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45450 = (function (){var all_files = inst_45411;
var res_SINGLEQUOTE_ = inst_45414;
var res = inst_45415;
var files_not_loaded = inst_45417;
var dependencies_that_loaded = inst_45419;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45451,inst_45419,inst_45414,inst_45415,inst_45417,inst_45411,inst_45447,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45449){
var map__45534 = p__45449;
var map__45534__$1 = (((((!((map__45534 == null))))?(((((map__45534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45534):map__45534);
var namespace = cljs.core.get.call(null,map__45534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45451,inst_45419,inst_45414,inst_45415,inst_45417,inst_45411,inst_45447,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45451__$1 = cljs.core.group_by.call(null,inst_45450,inst_45417);
var inst_45453 = (inst_45451__$1 == null);
var inst_45454 = cljs.core.not.call(null,inst_45453);
var state_45498__$1 = (function (){var statearr_45536 = state_45498;
(statearr_45536[(16)] = inst_45451__$1);

(statearr_45536[(28)] = inst_45447);

return statearr_45536;
})();
if(inst_45454){
var statearr_45537_45610 = state_45498__$1;
(statearr_45537_45610[(1)] = (32));

} else {
var statearr_45538_45611 = state_45498__$1;
(statearr_45538_45611[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (44))){
var inst_45474 = (state_45498[(21)]);
var inst_45487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45474);
var inst_45488 = cljs.core.pr_str.call(null,inst_45487);
var inst_45489 = ["not required: ",inst_45488].join('');
var inst_45490 = figwheel.client.utils.log.call(null,inst_45489);
var state_45498__$1 = state_45498;
var statearr_45539_45612 = state_45498__$1;
(statearr_45539_45612[(2)] = inst_45490);

(statearr_45539_45612[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (6))){
var inst_45392 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45540_45613 = state_45498__$1;
(statearr_45540_45613[(2)] = inst_45392);

(statearr_45540_45613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (28))){
var inst_45417 = (state_45498[(26)]);
var inst_45444 = (state_45498[(2)]);
var inst_45445 = cljs.core.not_empty.call(null,inst_45417);
var state_45498__$1 = (function (){var statearr_45541 = state_45498;
(statearr_45541[(29)] = inst_45444);

return statearr_45541;
})();
if(cljs.core.truth_(inst_45445)){
var statearr_45542_45614 = state_45498__$1;
(statearr_45542_45614[(1)] = (29));

} else {
var statearr_45543_45615 = state_45498__$1;
(statearr_45543_45615[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (25))){
var inst_45415 = (state_45498[(25)]);
var inst_45431 = (state_45498[(2)]);
var inst_45432 = cljs.core.not_empty.call(null,inst_45415);
var state_45498__$1 = (function (){var statearr_45544 = state_45498;
(statearr_45544[(30)] = inst_45431);

return statearr_45544;
})();
if(cljs.core.truth_(inst_45432)){
var statearr_45545_45616 = state_45498__$1;
(statearr_45545_45616[(1)] = (26));

} else {
var statearr_45546_45617 = state_45498__$1;
(statearr_45546_45617[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (34))){
var inst_45467 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
if(cljs.core.truth_(inst_45467)){
var statearr_45547_45618 = state_45498__$1;
(statearr_45547_45618[(1)] = (38));

} else {
var statearr_45548_45619 = state_45498__$1;
(statearr_45548_45619[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (17))){
var state_45498__$1 = state_45498;
var statearr_45549_45620 = state_45498__$1;
(statearr_45549_45620[(2)] = recompile_dependents);

(statearr_45549_45620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (3))){
var state_45498__$1 = state_45498;
var statearr_45550_45621 = state_45498__$1;
(statearr_45550_45621[(2)] = null);

(statearr_45550_45621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (12))){
var inst_45388 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45551_45622 = state_45498__$1;
(statearr_45551_45622[(2)] = inst_45388);

(statearr_45551_45622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (2))){
var inst_45350 = (state_45498[(13)]);
var inst_45357 = cljs.core.seq.call(null,inst_45350);
var inst_45358 = inst_45357;
var inst_45359 = null;
var inst_45360 = (0);
var inst_45361 = (0);
var state_45498__$1 = (function (){var statearr_45552 = state_45498;
(statearr_45552[(7)] = inst_45361);

(statearr_45552[(8)] = inst_45359);

(statearr_45552[(9)] = inst_45360);

(statearr_45552[(10)] = inst_45358);

return statearr_45552;
})();
var statearr_45553_45623 = state_45498__$1;
(statearr_45553_45623[(2)] = null);

(statearr_45553_45623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (23))){
var inst_45419 = (state_45498[(23)]);
var inst_45414 = (state_45498[(24)]);
var inst_45415 = (state_45498[(25)]);
var inst_45417 = (state_45498[(26)]);
var inst_45411 = (state_45498[(19)]);
var inst_45422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45424 = (function (){var all_files = inst_45411;
var res_SINGLEQUOTE_ = inst_45414;
var res = inst_45415;
var files_not_loaded = inst_45417;
var dependencies_that_loaded = inst_45419;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45419,inst_45414,inst_45415,inst_45417,inst_45411,inst_45422,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45423){
var map__45554 = p__45423;
var map__45554__$1 = (((((!((map__45554 == null))))?(((((map__45554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45554):map__45554);
var request_url = cljs.core.get.call(null,map__45554__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45419,inst_45414,inst_45415,inst_45417,inst_45411,inst_45422,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45425 = cljs.core.reverse.call(null,inst_45419);
var inst_45426 = cljs.core.map.call(null,inst_45424,inst_45425);
var inst_45427 = cljs.core.pr_str.call(null,inst_45426);
var inst_45428 = figwheel.client.utils.log.call(null,inst_45427);
var state_45498__$1 = (function (){var statearr_45556 = state_45498;
(statearr_45556[(31)] = inst_45422);

return statearr_45556;
})();
var statearr_45557_45624 = state_45498__$1;
(statearr_45557_45624[(2)] = inst_45428);

(statearr_45557_45624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (35))){
var state_45498__$1 = state_45498;
var statearr_45558_45625 = state_45498__$1;
(statearr_45558_45625[(2)] = true);

(statearr_45558_45625[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (19))){
var inst_45401 = (state_45498[(12)]);
var inst_45407 = figwheel.client.file_reloading.expand_files.call(null,inst_45401);
var state_45498__$1 = state_45498;
var statearr_45559_45626 = state_45498__$1;
(statearr_45559_45626[(2)] = inst_45407);

(statearr_45559_45626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (11))){
var state_45498__$1 = state_45498;
var statearr_45560_45627 = state_45498__$1;
(statearr_45560_45627[(2)] = null);

(statearr_45560_45627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (9))){
var inst_45390 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45561_45628 = state_45498__$1;
(statearr_45561_45628[(2)] = inst_45390);

(statearr_45561_45628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (5))){
var inst_45361 = (state_45498[(7)]);
var inst_45360 = (state_45498[(9)]);
var inst_45363 = (inst_45361 < inst_45360);
var inst_45364 = inst_45363;
var state_45498__$1 = state_45498;
if(cljs.core.truth_(inst_45364)){
var statearr_45562_45629 = state_45498__$1;
(statearr_45562_45629[(1)] = (7));

} else {
var statearr_45563_45630 = state_45498__$1;
(statearr_45563_45630[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (14))){
var inst_45371 = (state_45498[(22)]);
var inst_45380 = cljs.core.first.call(null,inst_45371);
var inst_45381 = figwheel.client.file_reloading.eval_body.call(null,inst_45380,opts);
var inst_45382 = cljs.core.next.call(null,inst_45371);
var inst_45358 = inst_45382;
var inst_45359 = null;
var inst_45360 = (0);
var inst_45361 = (0);
var state_45498__$1 = (function (){var statearr_45564 = state_45498;
(statearr_45564[(7)] = inst_45361);

(statearr_45564[(8)] = inst_45359);

(statearr_45564[(9)] = inst_45360);

(statearr_45564[(32)] = inst_45381);

(statearr_45564[(10)] = inst_45358);

return statearr_45564;
})();
var statearr_45565_45631 = state_45498__$1;
(statearr_45565_45631[(2)] = null);

(statearr_45565_45631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (45))){
var state_45498__$1 = state_45498;
var statearr_45566_45632 = state_45498__$1;
(statearr_45566_45632[(2)] = null);

(statearr_45566_45632[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (26))){
var inst_45419 = (state_45498[(23)]);
var inst_45414 = (state_45498[(24)]);
var inst_45415 = (state_45498[(25)]);
var inst_45417 = (state_45498[(26)]);
var inst_45411 = (state_45498[(19)]);
var inst_45434 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45436 = (function (){var all_files = inst_45411;
var res_SINGLEQUOTE_ = inst_45414;
var res = inst_45415;
var files_not_loaded = inst_45417;
var dependencies_that_loaded = inst_45419;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45419,inst_45414,inst_45415,inst_45417,inst_45411,inst_45434,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45435){
var map__45567 = p__45435;
var map__45567__$1 = (((((!((map__45567 == null))))?(((((map__45567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45567):map__45567);
var namespace = cljs.core.get.call(null,map__45567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45567__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45419,inst_45414,inst_45415,inst_45417,inst_45411,inst_45434,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45437 = cljs.core.map.call(null,inst_45436,inst_45415);
var inst_45438 = cljs.core.pr_str.call(null,inst_45437);
var inst_45439 = figwheel.client.utils.log.call(null,inst_45438);
var inst_45440 = (function (){var all_files = inst_45411;
var res_SINGLEQUOTE_ = inst_45414;
var res = inst_45415;
var files_not_loaded = inst_45417;
var dependencies_that_loaded = inst_45419;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45419,inst_45414,inst_45415,inst_45417,inst_45411,inst_45434,inst_45436,inst_45437,inst_45438,inst_45439,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45419,inst_45414,inst_45415,inst_45417,inst_45411,inst_45434,inst_45436,inst_45437,inst_45438,inst_45439,state_val_45499,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45441 = setTimeout(inst_45440,(10));
var state_45498__$1 = (function (){var statearr_45569 = state_45498;
(statearr_45569[(33)] = inst_45434);

(statearr_45569[(34)] = inst_45439);

return statearr_45569;
})();
var statearr_45570_45633 = state_45498__$1;
(statearr_45570_45633[(2)] = inst_45441);

(statearr_45570_45633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (16))){
var state_45498__$1 = state_45498;
var statearr_45571_45634 = state_45498__$1;
(statearr_45571_45634[(2)] = reload_dependents);

(statearr_45571_45634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (38))){
var inst_45451 = (state_45498[(16)]);
var inst_45469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45451);
var state_45498__$1 = state_45498;
var statearr_45572_45635 = state_45498__$1;
(statearr_45572_45635[(2)] = inst_45469);

(statearr_45572_45635[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (30))){
var state_45498__$1 = state_45498;
var statearr_45573_45636 = state_45498__$1;
(statearr_45573_45636[(2)] = null);

(statearr_45573_45636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (10))){
var inst_45371 = (state_45498[(22)]);
var inst_45373 = cljs.core.chunked_seq_QMARK_.call(null,inst_45371);
var state_45498__$1 = state_45498;
if(inst_45373){
var statearr_45574_45637 = state_45498__$1;
(statearr_45574_45637[(1)] = (13));

} else {
var statearr_45575_45638 = state_45498__$1;
(statearr_45575_45638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (18))){
var inst_45405 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
if(cljs.core.truth_(inst_45405)){
var statearr_45576_45639 = state_45498__$1;
(statearr_45576_45639[(1)] = (19));

} else {
var statearr_45577_45640 = state_45498__$1;
(statearr_45577_45640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (42))){
var state_45498__$1 = state_45498;
var statearr_45578_45641 = state_45498__$1;
(statearr_45578_45641[(2)] = null);

(statearr_45578_45641[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (37))){
var inst_45464 = (state_45498[(2)]);
var state_45498__$1 = state_45498;
var statearr_45579_45642 = state_45498__$1;
(statearr_45579_45642[(2)] = inst_45464);

(statearr_45579_45642[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45499 === (8))){
var inst_45371 = (state_45498[(22)]);
var inst_45358 = (state_45498[(10)]);
var inst_45371__$1 = cljs.core.seq.call(null,inst_45358);
var state_45498__$1 = (function (){var statearr_45580 = state_45498;
(statearr_45580[(22)] = inst_45371__$1);

return statearr_45580;
})();
if(inst_45371__$1){
var statearr_45581_45643 = state_45498__$1;
(statearr_45581_45643[(1)] = (10));

} else {
var statearr_45582_45644 = state_45498__$1;
(statearr_45582_45644[(1)] = (11));

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
});})(c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28043__auto__,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto____0 = (function (){
var statearr_45583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45583[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto__);

(statearr_45583[(1)] = (1));

return statearr_45583;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto____1 = (function (state_45498){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_45498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e45584){if((e45584 instanceof Object)){
var ex__28047__auto__ = e45584;
var statearr_45585_45645 = state_45498;
(statearr_45585_45645[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45646 = state_45498;
state_45498 = G__45646;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto__ = function(state_45498){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto____1.call(this,state_45498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28140__auto__ = (function (){var statearr_45586 = f__28139__auto__.call(null);
(statearr_45586[(6)] = c__28138__auto__);

return statearr_45586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__,map__45343,map__45343__$1,opts,before_jsload,on_jsload,reload_dependents,map__45344,map__45344__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28138__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45649,link){
var map__45650 = p__45649;
var map__45650__$1 = (((((!((map__45650 == null))))?(((((map__45650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45650):map__45650);
var file = cljs.core.get.call(null,map__45650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__45650,map__45650__$1,file){
return (function (p1__45647_SHARP_,p2__45648_SHARP_){
if(cljs.core._EQ_.call(null,p1__45647_SHARP_,p2__45648_SHARP_)){
return p1__45647_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__45650,map__45650__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45653){
var map__45654 = p__45653;
var map__45654__$1 = (((((!((map__45654 == null))))?(((((map__45654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45654):map__45654);
var match_length = cljs.core.get.call(null,map__45654__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45654__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45652_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45652_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45656_SHARP_,p2__45657_SHARP_){
return cljs.core.assoc.call(null,p1__45656_SHARP_,cljs.core.get.call(null,p2__45657_SHARP_,key),p2__45657_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_45658 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_45658);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_45658);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45659,p__45660){
var map__45661 = p__45659;
var map__45661__$1 = (((((!((map__45661 == null))))?(((((map__45661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45661):map__45661);
var on_cssload = cljs.core.get.call(null,map__45661__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__45662 = p__45660;
var map__45662__$1 = (((((!((map__45662 == null))))?(((((map__45662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45662):map__45662);
var files_msg = map__45662__$1;
var files = cljs.core.get.call(null,map__45662__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1583319096773
