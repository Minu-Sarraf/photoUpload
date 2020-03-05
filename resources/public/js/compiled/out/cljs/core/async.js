// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__41841 = arguments.length;
switch (G__41841) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41842 = (function (f,blockable,meta41843){
this.f = f;
this.blockable = blockable;
this.meta41843 = meta41843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41844,meta41843__$1){
var self__ = this;
var _41844__$1 = this;
return (new cljs.core.async.t_cljs$core$async41842(self__.f,self__.blockable,meta41843__$1));
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41844){
var self__ = this;
var _41844__$1 = this;
return self__.meta41843;
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41843","meta41843",-1001039256,null)], null);
});

cljs.core.async.t_cljs$core$async41842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41842";

cljs.core.async.t_cljs$core$async41842.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async41842");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41842.
 */
cljs.core.async.__GT_t_cljs$core$async41842 = (function cljs$core$async$__GT_t_cljs$core$async41842(f__$1,blockable__$1,meta41843){
return (new cljs.core.async.t_cljs$core$async41842(f__$1,blockable__$1,meta41843));
});

}

return (new cljs.core.async.t_cljs$core$async41842(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__41848 = arguments.length;
switch (G__41848) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__41851 = arguments.length;
switch (G__41851) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__41854 = arguments.length;
switch (G__41854) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41856 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41856);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41856,ret){
return (function (){
return fn1.call(null,val_41856);
});})(val_41856,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__41858 = arguments.length;
switch (G__41858) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___41860 = n;
var x_41861 = (0);
while(true){
if((x_41861 < n__4607__auto___41860)){
(a[x_41861] = x_41861);

var G__41862 = (x_41861 + (1));
x_41861 = G__41862;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41863 = (function (flag,meta41864){
this.flag = flag;
this.meta41864 = meta41864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41865,meta41864__$1){
var self__ = this;
var _41865__$1 = this;
return (new cljs.core.async.t_cljs$core$async41863(self__.flag,meta41864__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41865){
var self__ = this;
var _41865__$1 = this;
return self__.meta41864;
});})(flag))
;

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41863.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41864","meta41864",-294670320,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41863";

cljs.core.async.t_cljs$core$async41863.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async41863");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41863.
 */
cljs.core.async.__GT_t_cljs$core$async41863 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41863(flag__$1,meta41864){
return (new cljs.core.async.t_cljs$core$async41863(flag__$1,meta41864));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41863(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41866 = (function (flag,cb,meta41867){
this.flag = flag;
this.cb = cb;
this.meta41867 = meta41867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41868,meta41867__$1){
var self__ = this;
var _41868__$1 = this;
return (new cljs.core.async.t_cljs$core$async41866(self__.flag,self__.cb,meta41867__$1));
});

cljs.core.async.t_cljs$core$async41866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41868){
var self__ = this;
var _41868__$1 = this;
return self__.meta41867;
});

cljs.core.async.t_cljs$core$async41866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41867","meta41867",-78230705,null)], null);
});

cljs.core.async.t_cljs$core$async41866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41866";

cljs.core.async.t_cljs$core$async41866.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async41866");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41866.
 */
cljs.core.async.__GT_t_cljs$core$async41866 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41866(flag__$1,cb__$1,meta41867){
return (new cljs.core.async.t_cljs$core$async41866(flag__$1,cb__$1,meta41867));
});

}

return (new cljs.core.async.t_cljs$core$async41866(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41869_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41869_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41870_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41870_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41871 = (i + (1));
i = G__41871;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41877 = arguments.length;
var i__4731__auto___41878 = (0);
while(true){
if((i__4731__auto___41878 < len__4730__auto___41877)){
args__4736__auto__.push((arguments[i__4731__auto___41878]));

var G__41879 = (i__4731__auto___41878 + (1));
i__4731__auto___41878 = G__41879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41874){
var map__41875 = p__41874;
var map__41875__$1 = (((((!((map__41875 == null))))?(((((map__41875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41875):map__41875);
var opts = map__41875__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41872){
var G__41873 = cljs.core.first.call(null,seq41872);
var seq41872__$1 = cljs.core.next.call(null,seq41872);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41873,seq41872__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__41881 = arguments.length;
switch (G__41881) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28138__auto___41927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___41927){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___41927){
return (function (state_41905){
var state_val_41906 = (state_41905[(1)]);
if((state_val_41906 === (7))){
var inst_41901 = (state_41905[(2)]);
var state_41905__$1 = state_41905;
var statearr_41907_41928 = state_41905__$1;
(statearr_41907_41928[(2)] = inst_41901);

(statearr_41907_41928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (1))){
var state_41905__$1 = state_41905;
var statearr_41908_41929 = state_41905__$1;
(statearr_41908_41929[(2)] = null);

(statearr_41908_41929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (4))){
var inst_41884 = (state_41905[(7)]);
var inst_41884__$1 = (state_41905[(2)]);
var inst_41885 = (inst_41884__$1 == null);
var state_41905__$1 = (function (){var statearr_41909 = state_41905;
(statearr_41909[(7)] = inst_41884__$1);

return statearr_41909;
})();
if(cljs.core.truth_(inst_41885)){
var statearr_41910_41930 = state_41905__$1;
(statearr_41910_41930[(1)] = (5));

} else {
var statearr_41911_41931 = state_41905__$1;
(statearr_41911_41931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (13))){
var state_41905__$1 = state_41905;
var statearr_41912_41932 = state_41905__$1;
(statearr_41912_41932[(2)] = null);

(statearr_41912_41932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (6))){
var inst_41884 = (state_41905[(7)]);
var state_41905__$1 = state_41905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41905__$1,(11),to,inst_41884);
} else {
if((state_val_41906 === (3))){
var inst_41903 = (state_41905[(2)]);
var state_41905__$1 = state_41905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41905__$1,inst_41903);
} else {
if((state_val_41906 === (12))){
var state_41905__$1 = state_41905;
var statearr_41913_41933 = state_41905__$1;
(statearr_41913_41933[(2)] = null);

(statearr_41913_41933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (2))){
var state_41905__$1 = state_41905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41905__$1,(4),from);
} else {
if((state_val_41906 === (11))){
var inst_41894 = (state_41905[(2)]);
var state_41905__$1 = state_41905;
if(cljs.core.truth_(inst_41894)){
var statearr_41914_41934 = state_41905__$1;
(statearr_41914_41934[(1)] = (12));

} else {
var statearr_41915_41935 = state_41905__$1;
(statearr_41915_41935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (9))){
var state_41905__$1 = state_41905;
var statearr_41916_41936 = state_41905__$1;
(statearr_41916_41936[(2)] = null);

(statearr_41916_41936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (5))){
var state_41905__$1 = state_41905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41917_41937 = state_41905__$1;
(statearr_41917_41937[(1)] = (8));

} else {
var statearr_41918_41938 = state_41905__$1;
(statearr_41918_41938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (14))){
var inst_41899 = (state_41905[(2)]);
var state_41905__$1 = state_41905;
var statearr_41919_41939 = state_41905__$1;
(statearr_41919_41939[(2)] = inst_41899);

(statearr_41919_41939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (10))){
var inst_41891 = (state_41905[(2)]);
var state_41905__$1 = state_41905;
var statearr_41920_41940 = state_41905__$1;
(statearr_41920_41940[(2)] = inst_41891);

(statearr_41920_41940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41906 === (8))){
var inst_41888 = cljs.core.async.close_BANG_.call(null,to);
var state_41905__$1 = state_41905;
var statearr_41921_41941 = state_41905__$1;
(statearr_41921_41941[(2)] = inst_41888);

(statearr_41921_41941[(1)] = (10));


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
});})(c__28138__auto___41927))
;
return ((function (switch__28043__auto__,c__28138__auto___41927){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_41922 = [null,null,null,null,null,null,null,null];
(statearr_41922[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_41922[(1)] = (1));

return statearr_41922;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_41905){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_41905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e41923){if((e41923 instanceof Object)){
var ex__28047__auto__ = e41923;
var statearr_41924_41942 = state_41905;
(statearr_41924_41942[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41943 = state_41905;
state_41905 = G__41943;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_41905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_41905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___41927))
})();
var state__28140__auto__ = (function (){var statearr_41925 = f__28139__auto__.call(null);
(statearr_41925[(6)] = c__28138__auto___41927);

return statearr_41925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___41927))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__41944){
var vec__41945 = p__41944;
var v = cljs.core.nth.call(null,vec__41945,(0),null);
var p = cljs.core.nth.call(null,vec__41945,(1),null);
var job = vec__41945;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28138__auto___42116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___42116,res,vec__41945,v,p,job,jobs,results){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___42116,res,vec__41945,v,p,job,jobs,results){
return (function (state_41952){
var state_val_41953 = (state_41952[(1)]);
if((state_val_41953 === (1))){
var state_41952__$1 = state_41952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41952__$1,(2),res,v);
} else {
if((state_val_41953 === (2))){
var inst_41949 = (state_41952[(2)]);
var inst_41950 = cljs.core.async.close_BANG_.call(null,res);
var state_41952__$1 = (function (){var statearr_41954 = state_41952;
(statearr_41954[(7)] = inst_41949);

return statearr_41954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41952__$1,inst_41950);
} else {
return null;
}
}
});})(c__28138__auto___42116,res,vec__41945,v,p,job,jobs,results))
;
return ((function (switch__28043__auto__,c__28138__auto___42116,res,vec__41945,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_41955 = [null,null,null,null,null,null,null,null];
(statearr_41955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_41955[(1)] = (1));

return statearr_41955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_41952){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_41952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e41956){if((e41956 instanceof Object)){
var ex__28047__auto__ = e41956;
var statearr_41957_42117 = state_41952;
(statearr_41957_42117[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42118 = state_41952;
state_41952 = G__42118;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_41952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_41952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___42116,res,vec__41945,v,p,job,jobs,results))
})();
var state__28140__auto__ = (function (){var statearr_41958 = f__28139__auto__.call(null);
(statearr_41958[(6)] = c__28138__auto___42116);

return statearr_41958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___42116,res,vec__41945,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41959){
var vec__41960 = p__41959;
var v = cljs.core.nth.call(null,vec__41960,(0),null);
var p = cljs.core.nth.call(null,vec__41960,(1),null);
var job = vec__41960;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___42119 = n;
var __42120 = (0);
while(true){
if((__42120 < n__4607__auto___42119)){
var G__41963_42121 = type;
var G__41963_42122__$1 = (((G__41963_42121 instanceof cljs.core.Keyword))?G__41963_42121.fqn:null);
switch (G__41963_42122__$1) {
case "compute":
var c__28138__auto___42124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42120,c__28138__auto___42124,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (__42120,c__28138__auto___42124,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async){
return (function (state_41976){
var state_val_41977 = (state_41976[(1)]);
if((state_val_41977 === (1))){
var state_41976__$1 = state_41976;
var statearr_41978_42125 = state_41976__$1;
(statearr_41978_42125[(2)] = null);

(statearr_41978_42125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41977 === (2))){
var state_41976__$1 = state_41976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41976__$1,(4),jobs);
} else {
if((state_val_41977 === (3))){
var inst_41974 = (state_41976[(2)]);
var state_41976__$1 = state_41976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41976__$1,inst_41974);
} else {
if((state_val_41977 === (4))){
var inst_41966 = (state_41976[(2)]);
var inst_41967 = process.call(null,inst_41966);
var state_41976__$1 = state_41976;
if(cljs.core.truth_(inst_41967)){
var statearr_41979_42126 = state_41976__$1;
(statearr_41979_42126[(1)] = (5));

} else {
var statearr_41980_42127 = state_41976__$1;
(statearr_41980_42127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41977 === (5))){
var state_41976__$1 = state_41976;
var statearr_41981_42128 = state_41976__$1;
(statearr_41981_42128[(2)] = null);

(statearr_41981_42128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41977 === (6))){
var state_41976__$1 = state_41976;
var statearr_41982_42129 = state_41976__$1;
(statearr_41982_42129[(2)] = null);

(statearr_41982_42129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41977 === (7))){
var inst_41972 = (state_41976[(2)]);
var state_41976__$1 = state_41976;
var statearr_41983_42130 = state_41976__$1;
(statearr_41983_42130[(2)] = inst_41972);

(statearr_41983_42130[(1)] = (3));


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
});})(__42120,c__28138__auto___42124,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async))
;
return ((function (__42120,switch__28043__auto__,c__28138__auto___42124,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_41984 = [null,null,null,null,null,null,null];
(statearr_41984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_41984[(1)] = (1));

return statearr_41984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_41976){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_41976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e41985){if((e41985 instanceof Object)){
var ex__28047__auto__ = e41985;
var statearr_41986_42131 = state_41976;
(statearr_41986_42131[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42132 = state_41976;
state_41976 = G__42132;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_41976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_41976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(__42120,switch__28043__auto__,c__28138__auto___42124,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async))
})();
var state__28140__auto__ = (function (){var statearr_41987 = f__28139__auto__.call(null);
(statearr_41987[(6)] = c__28138__auto___42124);

return statearr_41987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(__42120,c__28138__auto___42124,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async))
);


break;
case "async":
var c__28138__auto___42133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42120,c__28138__auto___42133,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (__42120,c__28138__auto___42133,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async){
return (function (state_42000){
var state_val_42001 = (state_42000[(1)]);
if((state_val_42001 === (1))){
var state_42000__$1 = state_42000;
var statearr_42002_42134 = state_42000__$1;
(statearr_42002_42134[(2)] = null);

(statearr_42002_42134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42001 === (2))){
var state_42000__$1 = state_42000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42000__$1,(4),jobs);
} else {
if((state_val_42001 === (3))){
var inst_41998 = (state_42000[(2)]);
var state_42000__$1 = state_42000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42000__$1,inst_41998);
} else {
if((state_val_42001 === (4))){
var inst_41990 = (state_42000[(2)]);
var inst_41991 = async.call(null,inst_41990);
var state_42000__$1 = state_42000;
if(cljs.core.truth_(inst_41991)){
var statearr_42003_42135 = state_42000__$1;
(statearr_42003_42135[(1)] = (5));

} else {
var statearr_42004_42136 = state_42000__$1;
(statearr_42004_42136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42001 === (5))){
var state_42000__$1 = state_42000;
var statearr_42005_42137 = state_42000__$1;
(statearr_42005_42137[(2)] = null);

(statearr_42005_42137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42001 === (6))){
var state_42000__$1 = state_42000;
var statearr_42006_42138 = state_42000__$1;
(statearr_42006_42138[(2)] = null);

(statearr_42006_42138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42001 === (7))){
var inst_41996 = (state_42000[(2)]);
var state_42000__$1 = state_42000;
var statearr_42007_42139 = state_42000__$1;
(statearr_42007_42139[(2)] = inst_41996);

(statearr_42007_42139[(1)] = (3));


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
});})(__42120,c__28138__auto___42133,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async))
;
return ((function (__42120,switch__28043__auto__,c__28138__auto___42133,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_42008 = [null,null,null,null,null,null,null];
(statearr_42008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_42008[(1)] = (1));

return statearr_42008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_42000){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42009){if((e42009 instanceof Object)){
var ex__28047__auto__ = e42009;
var statearr_42010_42140 = state_42000;
(statearr_42010_42140[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42141 = state_42000;
state_42000 = G__42141;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_42000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_42000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(__42120,switch__28043__auto__,c__28138__auto___42133,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async))
})();
var state__28140__auto__ = (function (){var statearr_42011 = f__28139__auto__.call(null);
(statearr_42011[(6)] = c__28138__auto___42133);

return statearr_42011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(__42120,c__28138__auto___42133,G__41963_42121,G__41963_42122__$1,n__4607__auto___42119,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41963_42122__$1)].join('')));

}

var G__42142 = (__42120 + (1));
__42120 = G__42142;
continue;
} else {
}
break;
}

var c__28138__auto___42143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___42143,jobs,results,process,async){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___42143,jobs,results,process,async){
return (function (state_42033){
var state_val_42034 = (state_42033[(1)]);
if((state_val_42034 === (7))){
var inst_42029 = (state_42033[(2)]);
var state_42033__$1 = state_42033;
var statearr_42035_42144 = state_42033__$1;
(statearr_42035_42144[(2)] = inst_42029);

(statearr_42035_42144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42034 === (1))){
var state_42033__$1 = state_42033;
var statearr_42036_42145 = state_42033__$1;
(statearr_42036_42145[(2)] = null);

(statearr_42036_42145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42034 === (4))){
var inst_42014 = (state_42033[(7)]);
var inst_42014__$1 = (state_42033[(2)]);
var inst_42015 = (inst_42014__$1 == null);
var state_42033__$1 = (function (){var statearr_42037 = state_42033;
(statearr_42037[(7)] = inst_42014__$1);

return statearr_42037;
})();
if(cljs.core.truth_(inst_42015)){
var statearr_42038_42146 = state_42033__$1;
(statearr_42038_42146[(1)] = (5));

} else {
var statearr_42039_42147 = state_42033__$1;
(statearr_42039_42147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42034 === (6))){
var inst_42019 = (state_42033[(8)]);
var inst_42014 = (state_42033[(7)]);
var inst_42019__$1 = cljs.core.async.chan.call(null,(1));
var inst_42020 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42021 = [inst_42014,inst_42019__$1];
var inst_42022 = (new cljs.core.PersistentVector(null,2,(5),inst_42020,inst_42021,null));
var state_42033__$1 = (function (){var statearr_42040 = state_42033;
(statearr_42040[(8)] = inst_42019__$1);

return statearr_42040;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42033__$1,(8),jobs,inst_42022);
} else {
if((state_val_42034 === (3))){
var inst_42031 = (state_42033[(2)]);
var state_42033__$1 = state_42033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42033__$1,inst_42031);
} else {
if((state_val_42034 === (2))){
var state_42033__$1 = state_42033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42033__$1,(4),from);
} else {
if((state_val_42034 === (9))){
var inst_42026 = (state_42033[(2)]);
var state_42033__$1 = (function (){var statearr_42041 = state_42033;
(statearr_42041[(9)] = inst_42026);

return statearr_42041;
})();
var statearr_42042_42148 = state_42033__$1;
(statearr_42042_42148[(2)] = null);

(statearr_42042_42148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42034 === (5))){
var inst_42017 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42033__$1 = state_42033;
var statearr_42043_42149 = state_42033__$1;
(statearr_42043_42149[(2)] = inst_42017);

(statearr_42043_42149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42034 === (8))){
var inst_42019 = (state_42033[(8)]);
var inst_42024 = (state_42033[(2)]);
var state_42033__$1 = (function (){var statearr_42044 = state_42033;
(statearr_42044[(10)] = inst_42024);

return statearr_42044;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42033__$1,(9),results,inst_42019);
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
});})(c__28138__auto___42143,jobs,results,process,async))
;
return ((function (switch__28043__auto__,c__28138__auto___42143,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_42045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42045[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_42045[(1)] = (1));

return statearr_42045;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_42033){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42046){if((e42046 instanceof Object)){
var ex__28047__auto__ = e42046;
var statearr_42047_42150 = state_42033;
(statearr_42047_42150[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42151 = state_42033;
state_42033 = G__42151;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_42033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_42033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___42143,jobs,results,process,async))
})();
var state__28140__auto__ = (function (){var statearr_42048 = f__28139__auto__.call(null);
(statearr_42048[(6)] = c__28138__auto___42143);

return statearr_42048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___42143,jobs,results,process,async))
);


var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__,jobs,results,process,async){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__,jobs,results,process,async){
return (function (state_42086){
var state_val_42087 = (state_42086[(1)]);
if((state_val_42087 === (7))){
var inst_42082 = (state_42086[(2)]);
var state_42086__$1 = state_42086;
var statearr_42088_42152 = state_42086__$1;
(statearr_42088_42152[(2)] = inst_42082);

(statearr_42088_42152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (20))){
var state_42086__$1 = state_42086;
var statearr_42089_42153 = state_42086__$1;
(statearr_42089_42153[(2)] = null);

(statearr_42089_42153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (1))){
var state_42086__$1 = state_42086;
var statearr_42090_42154 = state_42086__$1;
(statearr_42090_42154[(2)] = null);

(statearr_42090_42154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (4))){
var inst_42051 = (state_42086[(7)]);
var inst_42051__$1 = (state_42086[(2)]);
var inst_42052 = (inst_42051__$1 == null);
var state_42086__$1 = (function (){var statearr_42091 = state_42086;
(statearr_42091[(7)] = inst_42051__$1);

return statearr_42091;
})();
if(cljs.core.truth_(inst_42052)){
var statearr_42092_42155 = state_42086__$1;
(statearr_42092_42155[(1)] = (5));

} else {
var statearr_42093_42156 = state_42086__$1;
(statearr_42093_42156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (15))){
var inst_42064 = (state_42086[(8)]);
var state_42086__$1 = state_42086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42086__$1,(18),to,inst_42064);
} else {
if((state_val_42087 === (21))){
var inst_42077 = (state_42086[(2)]);
var state_42086__$1 = state_42086;
var statearr_42094_42157 = state_42086__$1;
(statearr_42094_42157[(2)] = inst_42077);

(statearr_42094_42157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (13))){
var inst_42079 = (state_42086[(2)]);
var state_42086__$1 = (function (){var statearr_42095 = state_42086;
(statearr_42095[(9)] = inst_42079);

return statearr_42095;
})();
var statearr_42096_42158 = state_42086__$1;
(statearr_42096_42158[(2)] = null);

(statearr_42096_42158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (6))){
var inst_42051 = (state_42086[(7)]);
var state_42086__$1 = state_42086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42086__$1,(11),inst_42051);
} else {
if((state_val_42087 === (17))){
var inst_42072 = (state_42086[(2)]);
var state_42086__$1 = state_42086;
if(cljs.core.truth_(inst_42072)){
var statearr_42097_42159 = state_42086__$1;
(statearr_42097_42159[(1)] = (19));

} else {
var statearr_42098_42160 = state_42086__$1;
(statearr_42098_42160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (3))){
var inst_42084 = (state_42086[(2)]);
var state_42086__$1 = state_42086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42086__$1,inst_42084);
} else {
if((state_val_42087 === (12))){
var inst_42061 = (state_42086[(10)]);
var state_42086__$1 = state_42086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42086__$1,(14),inst_42061);
} else {
if((state_val_42087 === (2))){
var state_42086__$1 = state_42086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42086__$1,(4),results);
} else {
if((state_val_42087 === (19))){
var state_42086__$1 = state_42086;
var statearr_42099_42161 = state_42086__$1;
(statearr_42099_42161[(2)] = null);

(statearr_42099_42161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (11))){
var inst_42061 = (state_42086[(2)]);
var state_42086__$1 = (function (){var statearr_42100 = state_42086;
(statearr_42100[(10)] = inst_42061);

return statearr_42100;
})();
var statearr_42101_42162 = state_42086__$1;
(statearr_42101_42162[(2)] = null);

(statearr_42101_42162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (9))){
var state_42086__$1 = state_42086;
var statearr_42102_42163 = state_42086__$1;
(statearr_42102_42163[(2)] = null);

(statearr_42102_42163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (5))){
var state_42086__$1 = state_42086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42103_42164 = state_42086__$1;
(statearr_42103_42164[(1)] = (8));

} else {
var statearr_42104_42165 = state_42086__$1;
(statearr_42104_42165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (14))){
var inst_42064 = (state_42086[(8)]);
var inst_42066 = (state_42086[(11)]);
var inst_42064__$1 = (state_42086[(2)]);
var inst_42065 = (inst_42064__$1 == null);
var inst_42066__$1 = cljs.core.not.call(null,inst_42065);
var state_42086__$1 = (function (){var statearr_42105 = state_42086;
(statearr_42105[(8)] = inst_42064__$1);

(statearr_42105[(11)] = inst_42066__$1);

return statearr_42105;
})();
if(inst_42066__$1){
var statearr_42106_42166 = state_42086__$1;
(statearr_42106_42166[(1)] = (15));

} else {
var statearr_42107_42167 = state_42086__$1;
(statearr_42107_42167[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (16))){
var inst_42066 = (state_42086[(11)]);
var state_42086__$1 = state_42086;
var statearr_42108_42168 = state_42086__$1;
(statearr_42108_42168[(2)] = inst_42066);

(statearr_42108_42168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (10))){
var inst_42058 = (state_42086[(2)]);
var state_42086__$1 = state_42086;
var statearr_42109_42169 = state_42086__$1;
(statearr_42109_42169[(2)] = inst_42058);

(statearr_42109_42169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (18))){
var inst_42069 = (state_42086[(2)]);
var state_42086__$1 = state_42086;
var statearr_42110_42170 = state_42086__$1;
(statearr_42110_42170[(2)] = inst_42069);

(statearr_42110_42170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42087 === (8))){
var inst_42055 = cljs.core.async.close_BANG_.call(null,to);
var state_42086__$1 = state_42086;
var statearr_42111_42171 = state_42086__$1;
(statearr_42111_42171[(2)] = inst_42055);

(statearr_42111_42171[(1)] = (10));


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
});})(c__28138__auto__,jobs,results,process,async))
;
return ((function (switch__28043__auto__,c__28138__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_42112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__);

(statearr_42112[(1)] = (1));

return statearr_42112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1 = (function (state_42086){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42113){if((e42113 instanceof Object)){
var ex__28047__auto__ = e42113;
var statearr_42114_42172 = state_42086;
(statearr_42114_42172[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42173 = state_42086;
state_42086 = G__42173;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__ = function(state_42086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1.call(this,state_42086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__,jobs,results,process,async))
})();
var state__28140__auto__ = (function (){var statearr_42115 = f__28139__auto__.call(null);
(statearr_42115[(6)] = c__28138__auto__);

return statearr_42115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__,jobs,results,process,async))
);

return c__28138__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42175 = arguments.length;
switch (G__42175) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42178 = arguments.length;
switch (G__42178) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42181 = arguments.length;
switch (G__42181) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28138__auto___42230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___42230,tc,fc){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___42230,tc,fc){
return (function (state_42207){
var state_val_42208 = (state_42207[(1)]);
if((state_val_42208 === (7))){
var inst_42203 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
var statearr_42209_42231 = state_42207__$1;
(statearr_42209_42231[(2)] = inst_42203);

(statearr_42209_42231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (1))){
var state_42207__$1 = state_42207;
var statearr_42210_42232 = state_42207__$1;
(statearr_42210_42232[(2)] = null);

(statearr_42210_42232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (4))){
var inst_42184 = (state_42207[(7)]);
var inst_42184__$1 = (state_42207[(2)]);
var inst_42185 = (inst_42184__$1 == null);
var state_42207__$1 = (function (){var statearr_42211 = state_42207;
(statearr_42211[(7)] = inst_42184__$1);

return statearr_42211;
})();
if(cljs.core.truth_(inst_42185)){
var statearr_42212_42233 = state_42207__$1;
(statearr_42212_42233[(1)] = (5));

} else {
var statearr_42213_42234 = state_42207__$1;
(statearr_42213_42234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (13))){
var state_42207__$1 = state_42207;
var statearr_42214_42235 = state_42207__$1;
(statearr_42214_42235[(2)] = null);

(statearr_42214_42235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (6))){
var inst_42184 = (state_42207[(7)]);
var inst_42190 = p.call(null,inst_42184);
var state_42207__$1 = state_42207;
if(cljs.core.truth_(inst_42190)){
var statearr_42215_42236 = state_42207__$1;
(statearr_42215_42236[(1)] = (9));

} else {
var statearr_42216_42237 = state_42207__$1;
(statearr_42216_42237[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (3))){
var inst_42205 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42207__$1,inst_42205);
} else {
if((state_val_42208 === (12))){
var state_42207__$1 = state_42207;
var statearr_42217_42238 = state_42207__$1;
(statearr_42217_42238[(2)] = null);

(statearr_42217_42238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (2))){
var state_42207__$1 = state_42207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42207__$1,(4),ch);
} else {
if((state_val_42208 === (11))){
var inst_42184 = (state_42207[(7)]);
var inst_42194 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42207__$1,(8),inst_42194,inst_42184);
} else {
if((state_val_42208 === (9))){
var state_42207__$1 = state_42207;
var statearr_42218_42239 = state_42207__$1;
(statearr_42218_42239[(2)] = tc);

(statearr_42218_42239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (5))){
var inst_42187 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42188 = cljs.core.async.close_BANG_.call(null,fc);
var state_42207__$1 = (function (){var statearr_42219 = state_42207;
(statearr_42219[(8)] = inst_42187);

return statearr_42219;
})();
var statearr_42220_42240 = state_42207__$1;
(statearr_42220_42240[(2)] = inst_42188);

(statearr_42220_42240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (14))){
var inst_42201 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
var statearr_42221_42241 = state_42207__$1;
(statearr_42221_42241[(2)] = inst_42201);

(statearr_42221_42241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (10))){
var state_42207__$1 = state_42207;
var statearr_42222_42242 = state_42207__$1;
(statearr_42222_42242[(2)] = fc);

(statearr_42222_42242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (8))){
var inst_42196 = (state_42207[(2)]);
var state_42207__$1 = state_42207;
if(cljs.core.truth_(inst_42196)){
var statearr_42223_42243 = state_42207__$1;
(statearr_42223_42243[(1)] = (12));

} else {
var statearr_42224_42244 = state_42207__$1;
(statearr_42224_42244[(1)] = (13));

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
});})(c__28138__auto___42230,tc,fc))
;
return ((function (switch__28043__auto__,c__28138__auto___42230,tc,fc){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_42225 = [null,null,null,null,null,null,null,null,null];
(statearr_42225[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_42225[(1)] = (1));

return statearr_42225;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_42207){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42226){if((e42226 instanceof Object)){
var ex__28047__auto__ = e42226;
var statearr_42227_42245 = state_42207;
(statearr_42227_42245[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42246 = state_42207;
state_42207 = G__42246;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_42207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_42207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___42230,tc,fc))
})();
var state__28140__auto__ = (function (){var statearr_42228 = f__28139__auto__.call(null);
(statearr_42228[(6)] = c__28138__auto___42230);

return statearr_42228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___42230,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__){
return (function (state_42267){
var state_val_42268 = (state_42267[(1)]);
if((state_val_42268 === (7))){
var inst_42263 = (state_42267[(2)]);
var state_42267__$1 = state_42267;
var statearr_42269_42287 = state_42267__$1;
(statearr_42269_42287[(2)] = inst_42263);

(statearr_42269_42287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42268 === (1))){
var inst_42247 = init;
var state_42267__$1 = (function (){var statearr_42270 = state_42267;
(statearr_42270[(7)] = inst_42247);

return statearr_42270;
})();
var statearr_42271_42288 = state_42267__$1;
(statearr_42271_42288[(2)] = null);

(statearr_42271_42288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42268 === (4))){
var inst_42250 = (state_42267[(8)]);
var inst_42250__$1 = (state_42267[(2)]);
var inst_42251 = (inst_42250__$1 == null);
var state_42267__$1 = (function (){var statearr_42272 = state_42267;
(statearr_42272[(8)] = inst_42250__$1);

return statearr_42272;
})();
if(cljs.core.truth_(inst_42251)){
var statearr_42273_42289 = state_42267__$1;
(statearr_42273_42289[(1)] = (5));

} else {
var statearr_42274_42290 = state_42267__$1;
(statearr_42274_42290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42268 === (6))){
var inst_42247 = (state_42267[(7)]);
var inst_42250 = (state_42267[(8)]);
var inst_42254 = (state_42267[(9)]);
var inst_42254__$1 = f.call(null,inst_42247,inst_42250);
var inst_42255 = cljs.core.reduced_QMARK_.call(null,inst_42254__$1);
var state_42267__$1 = (function (){var statearr_42275 = state_42267;
(statearr_42275[(9)] = inst_42254__$1);

return statearr_42275;
})();
if(inst_42255){
var statearr_42276_42291 = state_42267__$1;
(statearr_42276_42291[(1)] = (8));

} else {
var statearr_42277_42292 = state_42267__$1;
(statearr_42277_42292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42268 === (3))){
var inst_42265 = (state_42267[(2)]);
var state_42267__$1 = state_42267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42267__$1,inst_42265);
} else {
if((state_val_42268 === (2))){
var state_42267__$1 = state_42267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42267__$1,(4),ch);
} else {
if((state_val_42268 === (9))){
var inst_42254 = (state_42267[(9)]);
var inst_42247 = inst_42254;
var state_42267__$1 = (function (){var statearr_42278 = state_42267;
(statearr_42278[(7)] = inst_42247);

return statearr_42278;
})();
var statearr_42279_42293 = state_42267__$1;
(statearr_42279_42293[(2)] = null);

(statearr_42279_42293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42268 === (5))){
var inst_42247 = (state_42267[(7)]);
var state_42267__$1 = state_42267;
var statearr_42280_42294 = state_42267__$1;
(statearr_42280_42294[(2)] = inst_42247);

(statearr_42280_42294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42268 === (10))){
var inst_42261 = (state_42267[(2)]);
var state_42267__$1 = state_42267;
var statearr_42281_42295 = state_42267__$1;
(statearr_42281_42295[(2)] = inst_42261);

(statearr_42281_42295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42268 === (8))){
var inst_42254 = (state_42267[(9)]);
var inst_42257 = cljs.core.deref.call(null,inst_42254);
var state_42267__$1 = state_42267;
var statearr_42282_42296 = state_42267__$1;
(statearr_42282_42296[(2)] = inst_42257);

(statearr_42282_42296[(1)] = (10));


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
});})(c__28138__auto__))
;
return ((function (switch__28043__auto__,c__28138__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28044__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28044__auto____0 = (function (){
var statearr_42283 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42283[(0)] = cljs$core$async$reduce_$_state_machine__28044__auto__);

(statearr_42283[(1)] = (1));

return statearr_42283;
});
var cljs$core$async$reduce_$_state_machine__28044__auto____1 = (function (state_42267){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42284){if((e42284 instanceof Object)){
var ex__28047__auto__ = e42284;
var statearr_42285_42297 = state_42267;
(statearr_42285_42297[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42298 = state_42267;
state_42267 = G__42298;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28044__auto__ = function(state_42267){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28044__auto____1.call(this,state_42267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28044__auto____0;
cljs$core$async$reduce_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28044__auto____1;
return cljs$core$async$reduce_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__))
})();
var state__28140__auto__ = (function (){var statearr_42286 = f__28139__auto__.call(null);
(statearr_42286[(6)] = c__28138__auto__);

return statearr_42286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__))
);

return c__28138__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__,f__$1){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__,f__$1){
return (function (state_42304){
var state_val_42305 = (state_42304[(1)]);
if((state_val_42305 === (1))){
var inst_42299 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42304__$1 = state_42304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42304__$1,(2),inst_42299);
} else {
if((state_val_42305 === (2))){
var inst_42301 = (state_42304[(2)]);
var inst_42302 = f__$1.call(null,inst_42301);
var state_42304__$1 = state_42304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42304__$1,inst_42302);
} else {
return null;
}
}
});})(c__28138__auto__,f__$1))
;
return ((function (switch__28043__auto__,c__28138__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28044__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28044__auto____0 = (function (){
var statearr_42306 = [null,null,null,null,null,null,null];
(statearr_42306[(0)] = cljs$core$async$transduce_$_state_machine__28044__auto__);

(statearr_42306[(1)] = (1));

return statearr_42306;
});
var cljs$core$async$transduce_$_state_machine__28044__auto____1 = (function (state_42304){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42307){if((e42307 instanceof Object)){
var ex__28047__auto__ = e42307;
var statearr_42308_42310 = state_42304;
(statearr_42308_42310[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42311 = state_42304;
state_42304 = G__42311;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28044__auto__ = function(state_42304){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28044__auto____1.call(this,state_42304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28044__auto____0;
cljs$core$async$transduce_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28044__auto____1;
return cljs$core$async$transduce_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__,f__$1))
})();
var state__28140__auto__ = (function (){var statearr_42309 = f__28139__auto__.call(null);
(statearr_42309[(6)] = c__28138__auto__);

return statearr_42309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__,f__$1))
);

return c__28138__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42313 = arguments.length;
switch (G__42313) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__){
return (function (state_42338){
var state_val_42339 = (state_42338[(1)]);
if((state_val_42339 === (7))){
var inst_42320 = (state_42338[(2)]);
var state_42338__$1 = state_42338;
var statearr_42340_42361 = state_42338__$1;
(statearr_42340_42361[(2)] = inst_42320);

(statearr_42340_42361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (1))){
var inst_42314 = cljs.core.seq.call(null,coll);
var inst_42315 = inst_42314;
var state_42338__$1 = (function (){var statearr_42341 = state_42338;
(statearr_42341[(7)] = inst_42315);

return statearr_42341;
})();
var statearr_42342_42362 = state_42338__$1;
(statearr_42342_42362[(2)] = null);

(statearr_42342_42362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (4))){
var inst_42315 = (state_42338[(7)]);
var inst_42318 = cljs.core.first.call(null,inst_42315);
var state_42338__$1 = state_42338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42338__$1,(7),ch,inst_42318);
} else {
if((state_val_42339 === (13))){
var inst_42332 = (state_42338[(2)]);
var state_42338__$1 = state_42338;
var statearr_42343_42363 = state_42338__$1;
(statearr_42343_42363[(2)] = inst_42332);

(statearr_42343_42363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (6))){
var inst_42323 = (state_42338[(2)]);
var state_42338__$1 = state_42338;
if(cljs.core.truth_(inst_42323)){
var statearr_42344_42364 = state_42338__$1;
(statearr_42344_42364[(1)] = (8));

} else {
var statearr_42345_42365 = state_42338__$1;
(statearr_42345_42365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (3))){
var inst_42336 = (state_42338[(2)]);
var state_42338__$1 = state_42338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42338__$1,inst_42336);
} else {
if((state_val_42339 === (12))){
var state_42338__$1 = state_42338;
var statearr_42346_42366 = state_42338__$1;
(statearr_42346_42366[(2)] = null);

(statearr_42346_42366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (2))){
var inst_42315 = (state_42338[(7)]);
var state_42338__$1 = state_42338;
if(cljs.core.truth_(inst_42315)){
var statearr_42347_42367 = state_42338__$1;
(statearr_42347_42367[(1)] = (4));

} else {
var statearr_42348_42368 = state_42338__$1;
(statearr_42348_42368[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (11))){
var inst_42329 = cljs.core.async.close_BANG_.call(null,ch);
var state_42338__$1 = state_42338;
var statearr_42349_42369 = state_42338__$1;
(statearr_42349_42369[(2)] = inst_42329);

(statearr_42349_42369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (9))){
var state_42338__$1 = state_42338;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42350_42370 = state_42338__$1;
(statearr_42350_42370[(1)] = (11));

} else {
var statearr_42351_42371 = state_42338__$1;
(statearr_42351_42371[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (5))){
var inst_42315 = (state_42338[(7)]);
var state_42338__$1 = state_42338;
var statearr_42352_42372 = state_42338__$1;
(statearr_42352_42372[(2)] = inst_42315);

(statearr_42352_42372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (10))){
var inst_42334 = (state_42338[(2)]);
var state_42338__$1 = state_42338;
var statearr_42353_42373 = state_42338__$1;
(statearr_42353_42373[(2)] = inst_42334);

(statearr_42353_42373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (8))){
var inst_42315 = (state_42338[(7)]);
var inst_42325 = cljs.core.next.call(null,inst_42315);
var inst_42315__$1 = inst_42325;
var state_42338__$1 = (function (){var statearr_42354 = state_42338;
(statearr_42354[(7)] = inst_42315__$1);

return statearr_42354;
})();
var statearr_42355_42374 = state_42338__$1;
(statearr_42355_42374[(2)] = null);

(statearr_42355_42374[(1)] = (2));


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
});})(c__28138__auto__))
;
return ((function (switch__28043__auto__,c__28138__auto__){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_42356 = [null,null,null,null,null,null,null,null];
(statearr_42356[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_42356[(1)] = (1));

return statearr_42356;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_42338){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42357){if((e42357 instanceof Object)){
var ex__28047__auto__ = e42357;
var statearr_42358_42375 = state_42338;
(statearr_42358_42375[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42376 = state_42338;
state_42338 = G__42376;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_42338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_42338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__))
})();
var state__28140__auto__ = (function (){var statearr_42359 = f__28139__auto__.call(null);
(statearr_42359[(6)] = c__28138__auto__);

return statearr_42359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__))
);

return c__28138__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42377 = (function (ch,cs,meta42378){
this.ch = ch;
this.cs = cs;
this.meta42378 = meta42378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42379,meta42378__$1){
var self__ = this;
var _42379__$1 = this;
return (new cljs.core.async.t_cljs$core$async42377(self__.ch,self__.cs,meta42378__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42379){
var self__ = this;
var _42379__$1 = this;
return self__.meta42378;
});})(cs))
;

cljs.core.async.t_cljs$core$async42377.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42377.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42377.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42377.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42377.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42377.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42378","meta42378",2020768325,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42377";

cljs.core.async.t_cljs$core$async42377.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async42377");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42377.
 */
cljs.core.async.__GT_t_cljs$core$async42377 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42377(ch__$1,cs__$1,meta42378){
return (new cljs.core.async.t_cljs$core$async42377(ch__$1,cs__$1,meta42378));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42377(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28138__auto___42599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___42599,cs,m,dchan,dctr,done){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___42599,cs,m,dchan,dctr,done){
return (function (state_42514){
var state_val_42515 = (state_42514[(1)]);
if((state_val_42515 === (7))){
var inst_42510 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42516_42600 = state_42514__$1;
(statearr_42516_42600[(2)] = inst_42510);

(statearr_42516_42600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (20))){
var inst_42413 = (state_42514[(7)]);
var inst_42425 = cljs.core.first.call(null,inst_42413);
var inst_42426 = cljs.core.nth.call(null,inst_42425,(0),null);
var inst_42427 = cljs.core.nth.call(null,inst_42425,(1),null);
var state_42514__$1 = (function (){var statearr_42517 = state_42514;
(statearr_42517[(8)] = inst_42426);

return statearr_42517;
})();
if(cljs.core.truth_(inst_42427)){
var statearr_42518_42601 = state_42514__$1;
(statearr_42518_42601[(1)] = (22));

} else {
var statearr_42519_42602 = state_42514__$1;
(statearr_42519_42602[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (27))){
var inst_42455 = (state_42514[(9)]);
var inst_42382 = (state_42514[(10)]);
var inst_42457 = (state_42514[(11)]);
var inst_42462 = (state_42514[(12)]);
var inst_42462__$1 = cljs.core._nth.call(null,inst_42455,inst_42457);
var inst_42463 = cljs.core.async.put_BANG_.call(null,inst_42462__$1,inst_42382,done);
var state_42514__$1 = (function (){var statearr_42520 = state_42514;
(statearr_42520[(12)] = inst_42462__$1);

return statearr_42520;
})();
if(cljs.core.truth_(inst_42463)){
var statearr_42521_42603 = state_42514__$1;
(statearr_42521_42603[(1)] = (30));

} else {
var statearr_42522_42604 = state_42514__$1;
(statearr_42522_42604[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (1))){
var state_42514__$1 = state_42514;
var statearr_42523_42605 = state_42514__$1;
(statearr_42523_42605[(2)] = null);

(statearr_42523_42605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (24))){
var inst_42413 = (state_42514[(7)]);
var inst_42432 = (state_42514[(2)]);
var inst_42433 = cljs.core.next.call(null,inst_42413);
var inst_42391 = inst_42433;
var inst_42392 = null;
var inst_42393 = (0);
var inst_42394 = (0);
var state_42514__$1 = (function (){var statearr_42524 = state_42514;
(statearr_42524[(13)] = inst_42391);

(statearr_42524[(14)] = inst_42394);

(statearr_42524[(15)] = inst_42393);

(statearr_42524[(16)] = inst_42432);

(statearr_42524[(17)] = inst_42392);

return statearr_42524;
})();
var statearr_42525_42606 = state_42514__$1;
(statearr_42525_42606[(2)] = null);

(statearr_42525_42606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (39))){
var state_42514__$1 = state_42514;
var statearr_42529_42607 = state_42514__$1;
(statearr_42529_42607[(2)] = null);

(statearr_42529_42607[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (4))){
var inst_42382 = (state_42514[(10)]);
var inst_42382__$1 = (state_42514[(2)]);
var inst_42383 = (inst_42382__$1 == null);
var state_42514__$1 = (function (){var statearr_42530 = state_42514;
(statearr_42530[(10)] = inst_42382__$1);

return statearr_42530;
})();
if(cljs.core.truth_(inst_42383)){
var statearr_42531_42608 = state_42514__$1;
(statearr_42531_42608[(1)] = (5));

} else {
var statearr_42532_42609 = state_42514__$1;
(statearr_42532_42609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (15))){
var inst_42391 = (state_42514[(13)]);
var inst_42394 = (state_42514[(14)]);
var inst_42393 = (state_42514[(15)]);
var inst_42392 = (state_42514[(17)]);
var inst_42409 = (state_42514[(2)]);
var inst_42410 = (inst_42394 + (1));
var tmp42526 = inst_42391;
var tmp42527 = inst_42393;
var tmp42528 = inst_42392;
var inst_42391__$1 = tmp42526;
var inst_42392__$1 = tmp42528;
var inst_42393__$1 = tmp42527;
var inst_42394__$1 = inst_42410;
var state_42514__$1 = (function (){var statearr_42533 = state_42514;
(statearr_42533[(13)] = inst_42391__$1);

(statearr_42533[(18)] = inst_42409);

(statearr_42533[(14)] = inst_42394__$1);

(statearr_42533[(15)] = inst_42393__$1);

(statearr_42533[(17)] = inst_42392__$1);

return statearr_42533;
})();
var statearr_42534_42610 = state_42514__$1;
(statearr_42534_42610[(2)] = null);

(statearr_42534_42610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (21))){
var inst_42436 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42538_42611 = state_42514__$1;
(statearr_42538_42611[(2)] = inst_42436);

(statearr_42538_42611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (31))){
var inst_42462 = (state_42514[(12)]);
var inst_42466 = done.call(null,null);
var inst_42467 = cljs.core.async.untap_STAR_.call(null,m,inst_42462);
var state_42514__$1 = (function (){var statearr_42539 = state_42514;
(statearr_42539[(19)] = inst_42466);

return statearr_42539;
})();
var statearr_42540_42612 = state_42514__$1;
(statearr_42540_42612[(2)] = inst_42467);

(statearr_42540_42612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (32))){
var inst_42454 = (state_42514[(20)]);
var inst_42455 = (state_42514[(9)]);
var inst_42456 = (state_42514[(21)]);
var inst_42457 = (state_42514[(11)]);
var inst_42469 = (state_42514[(2)]);
var inst_42470 = (inst_42457 + (1));
var tmp42535 = inst_42454;
var tmp42536 = inst_42455;
var tmp42537 = inst_42456;
var inst_42454__$1 = tmp42535;
var inst_42455__$1 = tmp42536;
var inst_42456__$1 = tmp42537;
var inst_42457__$1 = inst_42470;
var state_42514__$1 = (function (){var statearr_42541 = state_42514;
(statearr_42541[(20)] = inst_42454__$1);

(statearr_42541[(9)] = inst_42455__$1);

(statearr_42541[(21)] = inst_42456__$1);

(statearr_42541[(22)] = inst_42469);

(statearr_42541[(11)] = inst_42457__$1);

return statearr_42541;
})();
var statearr_42542_42613 = state_42514__$1;
(statearr_42542_42613[(2)] = null);

(statearr_42542_42613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (40))){
var inst_42482 = (state_42514[(23)]);
var inst_42486 = done.call(null,null);
var inst_42487 = cljs.core.async.untap_STAR_.call(null,m,inst_42482);
var state_42514__$1 = (function (){var statearr_42543 = state_42514;
(statearr_42543[(24)] = inst_42486);

return statearr_42543;
})();
var statearr_42544_42614 = state_42514__$1;
(statearr_42544_42614[(2)] = inst_42487);

(statearr_42544_42614[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (33))){
var inst_42473 = (state_42514[(25)]);
var inst_42475 = cljs.core.chunked_seq_QMARK_.call(null,inst_42473);
var state_42514__$1 = state_42514;
if(inst_42475){
var statearr_42545_42615 = state_42514__$1;
(statearr_42545_42615[(1)] = (36));

} else {
var statearr_42546_42616 = state_42514__$1;
(statearr_42546_42616[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (13))){
var inst_42403 = (state_42514[(26)]);
var inst_42406 = cljs.core.async.close_BANG_.call(null,inst_42403);
var state_42514__$1 = state_42514;
var statearr_42547_42617 = state_42514__$1;
(statearr_42547_42617[(2)] = inst_42406);

(statearr_42547_42617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (22))){
var inst_42426 = (state_42514[(8)]);
var inst_42429 = cljs.core.async.close_BANG_.call(null,inst_42426);
var state_42514__$1 = state_42514;
var statearr_42548_42618 = state_42514__$1;
(statearr_42548_42618[(2)] = inst_42429);

(statearr_42548_42618[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (36))){
var inst_42473 = (state_42514[(25)]);
var inst_42477 = cljs.core.chunk_first.call(null,inst_42473);
var inst_42478 = cljs.core.chunk_rest.call(null,inst_42473);
var inst_42479 = cljs.core.count.call(null,inst_42477);
var inst_42454 = inst_42478;
var inst_42455 = inst_42477;
var inst_42456 = inst_42479;
var inst_42457 = (0);
var state_42514__$1 = (function (){var statearr_42549 = state_42514;
(statearr_42549[(20)] = inst_42454);

(statearr_42549[(9)] = inst_42455);

(statearr_42549[(21)] = inst_42456);

(statearr_42549[(11)] = inst_42457);

return statearr_42549;
})();
var statearr_42550_42619 = state_42514__$1;
(statearr_42550_42619[(2)] = null);

(statearr_42550_42619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (41))){
var inst_42473 = (state_42514[(25)]);
var inst_42489 = (state_42514[(2)]);
var inst_42490 = cljs.core.next.call(null,inst_42473);
var inst_42454 = inst_42490;
var inst_42455 = null;
var inst_42456 = (0);
var inst_42457 = (0);
var state_42514__$1 = (function (){var statearr_42551 = state_42514;
(statearr_42551[(20)] = inst_42454);

(statearr_42551[(27)] = inst_42489);

(statearr_42551[(9)] = inst_42455);

(statearr_42551[(21)] = inst_42456);

(statearr_42551[(11)] = inst_42457);

return statearr_42551;
})();
var statearr_42552_42620 = state_42514__$1;
(statearr_42552_42620[(2)] = null);

(statearr_42552_42620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (43))){
var state_42514__$1 = state_42514;
var statearr_42553_42621 = state_42514__$1;
(statearr_42553_42621[(2)] = null);

(statearr_42553_42621[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (29))){
var inst_42498 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42554_42622 = state_42514__$1;
(statearr_42554_42622[(2)] = inst_42498);

(statearr_42554_42622[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (44))){
var inst_42507 = (state_42514[(2)]);
var state_42514__$1 = (function (){var statearr_42555 = state_42514;
(statearr_42555[(28)] = inst_42507);

return statearr_42555;
})();
var statearr_42556_42623 = state_42514__$1;
(statearr_42556_42623[(2)] = null);

(statearr_42556_42623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (6))){
var inst_42446 = (state_42514[(29)]);
var inst_42445 = cljs.core.deref.call(null,cs);
var inst_42446__$1 = cljs.core.keys.call(null,inst_42445);
var inst_42447 = cljs.core.count.call(null,inst_42446__$1);
var inst_42448 = cljs.core.reset_BANG_.call(null,dctr,inst_42447);
var inst_42453 = cljs.core.seq.call(null,inst_42446__$1);
var inst_42454 = inst_42453;
var inst_42455 = null;
var inst_42456 = (0);
var inst_42457 = (0);
var state_42514__$1 = (function (){var statearr_42557 = state_42514;
(statearr_42557[(20)] = inst_42454);

(statearr_42557[(9)] = inst_42455);

(statearr_42557[(21)] = inst_42456);

(statearr_42557[(11)] = inst_42457);

(statearr_42557[(29)] = inst_42446__$1);

(statearr_42557[(30)] = inst_42448);

return statearr_42557;
})();
var statearr_42558_42624 = state_42514__$1;
(statearr_42558_42624[(2)] = null);

(statearr_42558_42624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (28))){
var inst_42454 = (state_42514[(20)]);
var inst_42473 = (state_42514[(25)]);
var inst_42473__$1 = cljs.core.seq.call(null,inst_42454);
var state_42514__$1 = (function (){var statearr_42559 = state_42514;
(statearr_42559[(25)] = inst_42473__$1);

return statearr_42559;
})();
if(inst_42473__$1){
var statearr_42560_42625 = state_42514__$1;
(statearr_42560_42625[(1)] = (33));

} else {
var statearr_42561_42626 = state_42514__$1;
(statearr_42561_42626[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (25))){
var inst_42456 = (state_42514[(21)]);
var inst_42457 = (state_42514[(11)]);
var inst_42459 = (inst_42457 < inst_42456);
var inst_42460 = inst_42459;
var state_42514__$1 = state_42514;
if(cljs.core.truth_(inst_42460)){
var statearr_42562_42627 = state_42514__$1;
(statearr_42562_42627[(1)] = (27));

} else {
var statearr_42563_42628 = state_42514__$1;
(statearr_42563_42628[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (34))){
var state_42514__$1 = state_42514;
var statearr_42564_42629 = state_42514__$1;
(statearr_42564_42629[(2)] = null);

(statearr_42564_42629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (17))){
var state_42514__$1 = state_42514;
var statearr_42565_42630 = state_42514__$1;
(statearr_42565_42630[(2)] = null);

(statearr_42565_42630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (3))){
var inst_42512 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42514__$1,inst_42512);
} else {
if((state_val_42515 === (12))){
var inst_42441 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42566_42631 = state_42514__$1;
(statearr_42566_42631[(2)] = inst_42441);

(statearr_42566_42631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (2))){
var state_42514__$1 = state_42514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42514__$1,(4),ch);
} else {
if((state_val_42515 === (23))){
var state_42514__$1 = state_42514;
var statearr_42567_42632 = state_42514__$1;
(statearr_42567_42632[(2)] = null);

(statearr_42567_42632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (35))){
var inst_42496 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42568_42633 = state_42514__$1;
(statearr_42568_42633[(2)] = inst_42496);

(statearr_42568_42633[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (19))){
var inst_42413 = (state_42514[(7)]);
var inst_42417 = cljs.core.chunk_first.call(null,inst_42413);
var inst_42418 = cljs.core.chunk_rest.call(null,inst_42413);
var inst_42419 = cljs.core.count.call(null,inst_42417);
var inst_42391 = inst_42418;
var inst_42392 = inst_42417;
var inst_42393 = inst_42419;
var inst_42394 = (0);
var state_42514__$1 = (function (){var statearr_42569 = state_42514;
(statearr_42569[(13)] = inst_42391);

(statearr_42569[(14)] = inst_42394);

(statearr_42569[(15)] = inst_42393);

(statearr_42569[(17)] = inst_42392);

return statearr_42569;
})();
var statearr_42570_42634 = state_42514__$1;
(statearr_42570_42634[(2)] = null);

(statearr_42570_42634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (11))){
var inst_42391 = (state_42514[(13)]);
var inst_42413 = (state_42514[(7)]);
var inst_42413__$1 = cljs.core.seq.call(null,inst_42391);
var state_42514__$1 = (function (){var statearr_42571 = state_42514;
(statearr_42571[(7)] = inst_42413__$1);

return statearr_42571;
})();
if(inst_42413__$1){
var statearr_42572_42635 = state_42514__$1;
(statearr_42572_42635[(1)] = (16));

} else {
var statearr_42573_42636 = state_42514__$1;
(statearr_42573_42636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (9))){
var inst_42443 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42574_42637 = state_42514__$1;
(statearr_42574_42637[(2)] = inst_42443);

(statearr_42574_42637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (5))){
var inst_42389 = cljs.core.deref.call(null,cs);
var inst_42390 = cljs.core.seq.call(null,inst_42389);
var inst_42391 = inst_42390;
var inst_42392 = null;
var inst_42393 = (0);
var inst_42394 = (0);
var state_42514__$1 = (function (){var statearr_42575 = state_42514;
(statearr_42575[(13)] = inst_42391);

(statearr_42575[(14)] = inst_42394);

(statearr_42575[(15)] = inst_42393);

(statearr_42575[(17)] = inst_42392);

return statearr_42575;
})();
var statearr_42576_42638 = state_42514__$1;
(statearr_42576_42638[(2)] = null);

(statearr_42576_42638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (14))){
var state_42514__$1 = state_42514;
var statearr_42577_42639 = state_42514__$1;
(statearr_42577_42639[(2)] = null);

(statearr_42577_42639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (45))){
var inst_42504 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42578_42640 = state_42514__$1;
(statearr_42578_42640[(2)] = inst_42504);

(statearr_42578_42640[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (26))){
var inst_42446 = (state_42514[(29)]);
var inst_42500 = (state_42514[(2)]);
var inst_42501 = cljs.core.seq.call(null,inst_42446);
var state_42514__$1 = (function (){var statearr_42579 = state_42514;
(statearr_42579[(31)] = inst_42500);

return statearr_42579;
})();
if(inst_42501){
var statearr_42580_42641 = state_42514__$1;
(statearr_42580_42641[(1)] = (42));

} else {
var statearr_42581_42642 = state_42514__$1;
(statearr_42581_42642[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (16))){
var inst_42413 = (state_42514[(7)]);
var inst_42415 = cljs.core.chunked_seq_QMARK_.call(null,inst_42413);
var state_42514__$1 = state_42514;
if(inst_42415){
var statearr_42582_42643 = state_42514__$1;
(statearr_42582_42643[(1)] = (19));

} else {
var statearr_42583_42644 = state_42514__$1;
(statearr_42583_42644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (38))){
var inst_42493 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42584_42645 = state_42514__$1;
(statearr_42584_42645[(2)] = inst_42493);

(statearr_42584_42645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (30))){
var state_42514__$1 = state_42514;
var statearr_42585_42646 = state_42514__$1;
(statearr_42585_42646[(2)] = null);

(statearr_42585_42646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (10))){
var inst_42394 = (state_42514[(14)]);
var inst_42392 = (state_42514[(17)]);
var inst_42402 = cljs.core._nth.call(null,inst_42392,inst_42394);
var inst_42403 = cljs.core.nth.call(null,inst_42402,(0),null);
var inst_42404 = cljs.core.nth.call(null,inst_42402,(1),null);
var state_42514__$1 = (function (){var statearr_42586 = state_42514;
(statearr_42586[(26)] = inst_42403);

return statearr_42586;
})();
if(cljs.core.truth_(inst_42404)){
var statearr_42587_42647 = state_42514__$1;
(statearr_42587_42647[(1)] = (13));

} else {
var statearr_42588_42648 = state_42514__$1;
(statearr_42588_42648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (18))){
var inst_42439 = (state_42514[(2)]);
var state_42514__$1 = state_42514;
var statearr_42589_42649 = state_42514__$1;
(statearr_42589_42649[(2)] = inst_42439);

(statearr_42589_42649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (42))){
var state_42514__$1 = state_42514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42514__$1,(45),dchan);
} else {
if((state_val_42515 === (37))){
var inst_42482 = (state_42514[(23)]);
var inst_42382 = (state_42514[(10)]);
var inst_42473 = (state_42514[(25)]);
var inst_42482__$1 = cljs.core.first.call(null,inst_42473);
var inst_42483 = cljs.core.async.put_BANG_.call(null,inst_42482__$1,inst_42382,done);
var state_42514__$1 = (function (){var statearr_42590 = state_42514;
(statearr_42590[(23)] = inst_42482__$1);

return statearr_42590;
})();
if(cljs.core.truth_(inst_42483)){
var statearr_42591_42650 = state_42514__$1;
(statearr_42591_42650[(1)] = (39));

} else {
var statearr_42592_42651 = state_42514__$1;
(statearr_42592_42651[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42515 === (8))){
var inst_42394 = (state_42514[(14)]);
var inst_42393 = (state_42514[(15)]);
var inst_42396 = (inst_42394 < inst_42393);
var inst_42397 = inst_42396;
var state_42514__$1 = state_42514;
if(cljs.core.truth_(inst_42397)){
var statearr_42593_42652 = state_42514__$1;
(statearr_42593_42652[(1)] = (10));

} else {
var statearr_42594_42653 = state_42514__$1;
(statearr_42594_42653[(1)] = (11));

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
});})(c__28138__auto___42599,cs,m,dchan,dctr,done))
;
return ((function (switch__28043__auto__,c__28138__auto___42599,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28044__auto__ = null;
var cljs$core$async$mult_$_state_machine__28044__auto____0 = (function (){
var statearr_42595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42595[(0)] = cljs$core$async$mult_$_state_machine__28044__auto__);

(statearr_42595[(1)] = (1));

return statearr_42595;
});
var cljs$core$async$mult_$_state_machine__28044__auto____1 = (function (state_42514){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42596){if((e42596 instanceof Object)){
var ex__28047__auto__ = e42596;
var statearr_42597_42654 = state_42514;
(statearr_42597_42654[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42655 = state_42514;
state_42514 = G__42655;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28044__auto__ = function(state_42514){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28044__auto____1.call(this,state_42514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28044__auto____0;
cljs$core$async$mult_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28044__auto____1;
return cljs$core$async$mult_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___42599,cs,m,dchan,dctr,done))
})();
var state__28140__auto__ = (function (){var statearr_42598 = f__28139__auto__.call(null);
(statearr_42598[(6)] = c__28138__auto___42599);

return statearr_42598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___42599,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42657 = arguments.length;
switch (G__42657) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42669 = arguments.length;
var i__4731__auto___42670 = (0);
while(true){
if((i__4731__auto___42670 < len__4730__auto___42669)){
args__4736__auto__.push((arguments[i__4731__auto___42670]));

var G__42671 = (i__4731__auto___42670 + (1));
i__4731__auto___42670 = G__42671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42663){
var map__42664 = p__42663;
var map__42664__$1 = (((((!((map__42664 == null))))?(((((map__42664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42664):map__42664);
var opts = map__42664__$1;
var statearr_42666_42672 = state;
(statearr_42666_42672[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__42664,map__42664__$1,opts){
return (function (val){
var statearr_42667_42673 = state;
(statearr_42667_42673[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42664,map__42664__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_42668_42674 = state;
(statearr_42668_42674[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42659){
var G__42660 = cljs.core.first.call(null,seq42659);
var seq42659__$1 = cljs.core.next.call(null,seq42659);
var G__42661 = cljs.core.first.call(null,seq42659__$1);
var seq42659__$2 = cljs.core.next.call(null,seq42659__$1);
var G__42662 = cljs.core.first.call(null,seq42659__$2);
var seq42659__$3 = cljs.core.next.call(null,seq42659__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42660,G__42661,G__42662,seq42659__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42675 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42676){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42676 = meta42676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42677,meta42676__$1){
var self__ = this;
var _42677__$1 = this;
return (new cljs.core.async.t_cljs$core$async42675(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42676__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42677){
var self__ = this;
var _42677__$1 = this;
return self__.meta42676;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42676","meta42676",967778844,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42675";

cljs.core.async.t_cljs$core$async42675.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async42675");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42675.
 */
cljs.core.async.__GT_t_cljs$core$async42675 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42675(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42676){
return (new cljs.core.async.t_cljs$core$async42675(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42676));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28138__auto___42839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___42839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___42839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42779){
var state_val_42780 = (state_42779[(1)]);
if((state_val_42780 === (7))){
var inst_42694 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
var statearr_42781_42840 = state_42779__$1;
(statearr_42781_42840[(2)] = inst_42694);

(statearr_42781_42840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (20))){
var inst_42706 = (state_42779[(7)]);
var state_42779__$1 = state_42779;
var statearr_42782_42841 = state_42779__$1;
(statearr_42782_42841[(2)] = inst_42706);

(statearr_42782_42841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (27))){
var state_42779__$1 = state_42779;
var statearr_42783_42842 = state_42779__$1;
(statearr_42783_42842[(2)] = null);

(statearr_42783_42842[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (1))){
var inst_42681 = (state_42779[(8)]);
var inst_42681__$1 = calc_state.call(null);
var inst_42683 = (inst_42681__$1 == null);
var inst_42684 = cljs.core.not.call(null,inst_42683);
var state_42779__$1 = (function (){var statearr_42784 = state_42779;
(statearr_42784[(8)] = inst_42681__$1);

return statearr_42784;
})();
if(inst_42684){
var statearr_42785_42843 = state_42779__$1;
(statearr_42785_42843[(1)] = (2));

} else {
var statearr_42786_42844 = state_42779__$1;
(statearr_42786_42844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (24))){
var inst_42730 = (state_42779[(9)]);
var inst_42739 = (state_42779[(10)]);
var inst_42753 = (state_42779[(11)]);
var inst_42753__$1 = inst_42730.call(null,inst_42739);
var state_42779__$1 = (function (){var statearr_42787 = state_42779;
(statearr_42787[(11)] = inst_42753__$1);

return statearr_42787;
})();
if(cljs.core.truth_(inst_42753__$1)){
var statearr_42788_42845 = state_42779__$1;
(statearr_42788_42845[(1)] = (29));

} else {
var statearr_42789_42846 = state_42779__$1;
(statearr_42789_42846[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (4))){
var inst_42697 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
if(cljs.core.truth_(inst_42697)){
var statearr_42790_42847 = state_42779__$1;
(statearr_42790_42847[(1)] = (8));

} else {
var statearr_42791_42848 = state_42779__$1;
(statearr_42791_42848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (15))){
var inst_42724 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
if(cljs.core.truth_(inst_42724)){
var statearr_42792_42849 = state_42779__$1;
(statearr_42792_42849[(1)] = (19));

} else {
var statearr_42793_42850 = state_42779__$1;
(statearr_42793_42850[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (21))){
var inst_42729 = (state_42779[(12)]);
var inst_42729__$1 = (state_42779[(2)]);
var inst_42730 = cljs.core.get.call(null,inst_42729__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42731 = cljs.core.get.call(null,inst_42729__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42732 = cljs.core.get.call(null,inst_42729__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42779__$1 = (function (){var statearr_42794 = state_42779;
(statearr_42794[(9)] = inst_42730);

(statearr_42794[(12)] = inst_42729__$1);

(statearr_42794[(13)] = inst_42731);

return statearr_42794;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42779__$1,(22),inst_42732);
} else {
if((state_val_42780 === (31))){
var inst_42761 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
if(cljs.core.truth_(inst_42761)){
var statearr_42795_42851 = state_42779__$1;
(statearr_42795_42851[(1)] = (32));

} else {
var statearr_42796_42852 = state_42779__$1;
(statearr_42796_42852[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (32))){
var inst_42738 = (state_42779[(14)]);
var state_42779__$1 = state_42779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42779__$1,(35),out,inst_42738);
} else {
if((state_val_42780 === (33))){
var inst_42729 = (state_42779[(12)]);
var inst_42706 = inst_42729;
var state_42779__$1 = (function (){var statearr_42797 = state_42779;
(statearr_42797[(7)] = inst_42706);

return statearr_42797;
})();
var statearr_42798_42853 = state_42779__$1;
(statearr_42798_42853[(2)] = null);

(statearr_42798_42853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (13))){
var inst_42706 = (state_42779[(7)]);
var inst_42713 = inst_42706.cljs$lang$protocol_mask$partition0$;
var inst_42714 = (inst_42713 & (64));
var inst_42715 = inst_42706.cljs$core$ISeq$;
var inst_42716 = (cljs.core.PROTOCOL_SENTINEL === inst_42715);
var inst_42717 = ((inst_42714) || (inst_42716));
var state_42779__$1 = state_42779;
if(cljs.core.truth_(inst_42717)){
var statearr_42799_42854 = state_42779__$1;
(statearr_42799_42854[(1)] = (16));

} else {
var statearr_42800_42855 = state_42779__$1;
(statearr_42800_42855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (22))){
var inst_42739 = (state_42779[(10)]);
var inst_42738 = (state_42779[(14)]);
var inst_42737 = (state_42779[(2)]);
var inst_42738__$1 = cljs.core.nth.call(null,inst_42737,(0),null);
var inst_42739__$1 = cljs.core.nth.call(null,inst_42737,(1),null);
var inst_42740 = (inst_42738__$1 == null);
var inst_42741 = cljs.core._EQ_.call(null,inst_42739__$1,change);
var inst_42742 = ((inst_42740) || (inst_42741));
var state_42779__$1 = (function (){var statearr_42801 = state_42779;
(statearr_42801[(10)] = inst_42739__$1);

(statearr_42801[(14)] = inst_42738__$1);

return statearr_42801;
})();
if(cljs.core.truth_(inst_42742)){
var statearr_42802_42856 = state_42779__$1;
(statearr_42802_42856[(1)] = (23));

} else {
var statearr_42803_42857 = state_42779__$1;
(statearr_42803_42857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (36))){
var inst_42729 = (state_42779[(12)]);
var inst_42706 = inst_42729;
var state_42779__$1 = (function (){var statearr_42804 = state_42779;
(statearr_42804[(7)] = inst_42706);

return statearr_42804;
})();
var statearr_42805_42858 = state_42779__$1;
(statearr_42805_42858[(2)] = null);

(statearr_42805_42858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (29))){
var inst_42753 = (state_42779[(11)]);
var state_42779__$1 = state_42779;
var statearr_42806_42859 = state_42779__$1;
(statearr_42806_42859[(2)] = inst_42753);

(statearr_42806_42859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (6))){
var state_42779__$1 = state_42779;
var statearr_42807_42860 = state_42779__$1;
(statearr_42807_42860[(2)] = false);

(statearr_42807_42860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (28))){
var inst_42749 = (state_42779[(2)]);
var inst_42750 = calc_state.call(null);
var inst_42706 = inst_42750;
var state_42779__$1 = (function (){var statearr_42808 = state_42779;
(statearr_42808[(15)] = inst_42749);

(statearr_42808[(7)] = inst_42706);

return statearr_42808;
})();
var statearr_42809_42861 = state_42779__$1;
(statearr_42809_42861[(2)] = null);

(statearr_42809_42861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (25))){
var inst_42775 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
var statearr_42810_42862 = state_42779__$1;
(statearr_42810_42862[(2)] = inst_42775);

(statearr_42810_42862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (34))){
var inst_42773 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
var statearr_42811_42863 = state_42779__$1;
(statearr_42811_42863[(2)] = inst_42773);

(statearr_42811_42863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (17))){
var state_42779__$1 = state_42779;
var statearr_42812_42864 = state_42779__$1;
(statearr_42812_42864[(2)] = false);

(statearr_42812_42864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (3))){
var state_42779__$1 = state_42779;
var statearr_42813_42865 = state_42779__$1;
(statearr_42813_42865[(2)] = false);

(statearr_42813_42865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (12))){
var inst_42777 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42779__$1,inst_42777);
} else {
if((state_val_42780 === (2))){
var inst_42681 = (state_42779[(8)]);
var inst_42686 = inst_42681.cljs$lang$protocol_mask$partition0$;
var inst_42687 = (inst_42686 & (64));
var inst_42688 = inst_42681.cljs$core$ISeq$;
var inst_42689 = (cljs.core.PROTOCOL_SENTINEL === inst_42688);
var inst_42690 = ((inst_42687) || (inst_42689));
var state_42779__$1 = state_42779;
if(cljs.core.truth_(inst_42690)){
var statearr_42814_42866 = state_42779__$1;
(statearr_42814_42866[(1)] = (5));

} else {
var statearr_42815_42867 = state_42779__$1;
(statearr_42815_42867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (23))){
var inst_42738 = (state_42779[(14)]);
var inst_42744 = (inst_42738 == null);
var state_42779__$1 = state_42779;
if(cljs.core.truth_(inst_42744)){
var statearr_42816_42868 = state_42779__$1;
(statearr_42816_42868[(1)] = (26));

} else {
var statearr_42817_42869 = state_42779__$1;
(statearr_42817_42869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (35))){
var inst_42764 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
if(cljs.core.truth_(inst_42764)){
var statearr_42818_42870 = state_42779__$1;
(statearr_42818_42870[(1)] = (36));

} else {
var statearr_42819_42871 = state_42779__$1;
(statearr_42819_42871[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (19))){
var inst_42706 = (state_42779[(7)]);
var inst_42726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42706);
var state_42779__$1 = state_42779;
var statearr_42820_42872 = state_42779__$1;
(statearr_42820_42872[(2)] = inst_42726);

(statearr_42820_42872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (11))){
var inst_42706 = (state_42779[(7)]);
var inst_42710 = (inst_42706 == null);
var inst_42711 = cljs.core.not.call(null,inst_42710);
var state_42779__$1 = state_42779;
if(inst_42711){
var statearr_42821_42873 = state_42779__$1;
(statearr_42821_42873[(1)] = (13));

} else {
var statearr_42822_42874 = state_42779__$1;
(statearr_42822_42874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (9))){
var inst_42681 = (state_42779[(8)]);
var state_42779__$1 = state_42779;
var statearr_42823_42875 = state_42779__$1;
(statearr_42823_42875[(2)] = inst_42681);

(statearr_42823_42875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (5))){
var state_42779__$1 = state_42779;
var statearr_42824_42876 = state_42779__$1;
(statearr_42824_42876[(2)] = true);

(statearr_42824_42876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (14))){
var state_42779__$1 = state_42779;
var statearr_42825_42877 = state_42779__$1;
(statearr_42825_42877[(2)] = false);

(statearr_42825_42877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (26))){
var inst_42739 = (state_42779[(10)]);
var inst_42746 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42739);
var state_42779__$1 = state_42779;
var statearr_42826_42878 = state_42779__$1;
(statearr_42826_42878[(2)] = inst_42746);

(statearr_42826_42878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (16))){
var state_42779__$1 = state_42779;
var statearr_42827_42879 = state_42779__$1;
(statearr_42827_42879[(2)] = true);

(statearr_42827_42879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (38))){
var inst_42769 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
var statearr_42828_42880 = state_42779__$1;
(statearr_42828_42880[(2)] = inst_42769);

(statearr_42828_42880[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (30))){
var inst_42730 = (state_42779[(9)]);
var inst_42739 = (state_42779[(10)]);
var inst_42731 = (state_42779[(13)]);
var inst_42756 = cljs.core.empty_QMARK_.call(null,inst_42730);
var inst_42757 = inst_42731.call(null,inst_42739);
var inst_42758 = cljs.core.not.call(null,inst_42757);
var inst_42759 = ((inst_42756) && (inst_42758));
var state_42779__$1 = state_42779;
var statearr_42829_42881 = state_42779__$1;
(statearr_42829_42881[(2)] = inst_42759);

(statearr_42829_42881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (10))){
var inst_42681 = (state_42779[(8)]);
var inst_42702 = (state_42779[(2)]);
var inst_42703 = cljs.core.get.call(null,inst_42702,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42704 = cljs.core.get.call(null,inst_42702,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42705 = cljs.core.get.call(null,inst_42702,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42706 = inst_42681;
var state_42779__$1 = (function (){var statearr_42830 = state_42779;
(statearr_42830[(16)] = inst_42703);

(statearr_42830[(17)] = inst_42704);

(statearr_42830[(18)] = inst_42705);

(statearr_42830[(7)] = inst_42706);

return statearr_42830;
})();
var statearr_42831_42882 = state_42779__$1;
(statearr_42831_42882[(2)] = null);

(statearr_42831_42882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (18))){
var inst_42721 = (state_42779[(2)]);
var state_42779__$1 = state_42779;
var statearr_42832_42883 = state_42779__$1;
(statearr_42832_42883[(2)] = inst_42721);

(statearr_42832_42883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (37))){
var state_42779__$1 = state_42779;
var statearr_42833_42884 = state_42779__$1;
(statearr_42833_42884[(2)] = null);

(statearr_42833_42884[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42780 === (8))){
var inst_42681 = (state_42779[(8)]);
var inst_42699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42681);
var state_42779__$1 = state_42779;
var statearr_42834_42885 = state_42779__$1;
(statearr_42834_42885[(2)] = inst_42699);

(statearr_42834_42885[(1)] = (10));


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
});})(c__28138__auto___42839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28043__auto__,c__28138__auto___42839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28044__auto__ = null;
var cljs$core$async$mix_$_state_machine__28044__auto____0 = (function (){
var statearr_42835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42835[(0)] = cljs$core$async$mix_$_state_machine__28044__auto__);

(statearr_42835[(1)] = (1));

return statearr_42835;
});
var cljs$core$async$mix_$_state_machine__28044__auto____1 = (function (state_42779){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e42836){if((e42836 instanceof Object)){
var ex__28047__auto__ = e42836;
var statearr_42837_42886 = state_42779;
(statearr_42837_42886[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42887 = state_42779;
state_42779 = G__42887;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28044__auto__ = function(state_42779){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28044__auto____1.call(this,state_42779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28044__auto____0;
cljs$core$async$mix_$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28044__auto____1;
return cljs$core$async$mix_$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___42839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28140__auto__ = (function (){var statearr_42838 = f__28139__auto__.call(null);
(statearr_42838[(6)] = c__28138__auto___42839);

return statearr_42838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___42839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42889 = arguments.length;
switch (G__42889) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42893 = arguments.length;
switch (G__42893) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__42891_SHARP_){
if(cljs.core.truth_(p1__42891_SHARP_.call(null,topic))){
return p1__42891_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42891_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42894 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42895){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42895 = meta42895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42896,meta42895__$1){
var self__ = this;
var _42896__$1 = this;
return (new cljs.core.async.t_cljs$core$async42894(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42895__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42896){
var self__ = this;
var _42896__$1 = this;
return self__.meta42895;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42894.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42895","meta42895",1487495156,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42894";

cljs.core.async.t_cljs$core$async42894.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async42894");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42894.
 */
cljs.core.async.__GT_t_cljs$core$async42894 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42894(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42895){
return (new cljs.core.async.t_cljs$core$async42894(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42895));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42894(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28138__auto___43014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___43014,mults,ensure_mult,p){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___43014,mults,ensure_mult,p){
return (function (state_42968){
var state_val_42969 = (state_42968[(1)]);
if((state_val_42969 === (7))){
var inst_42964 = (state_42968[(2)]);
var state_42968__$1 = state_42968;
var statearr_42970_43015 = state_42968__$1;
(statearr_42970_43015[(2)] = inst_42964);

(statearr_42970_43015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (20))){
var state_42968__$1 = state_42968;
var statearr_42971_43016 = state_42968__$1;
(statearr_42971_43016[(2)] = null);

(statearr_42971_43016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (1))){
var state_42968__$1 = state_42968;
var statearr_42972_43017 = state_42968__$1;
(statearr_42972_43017[(2)] = null);

(statearr_42972_43017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (24))){
var inst_42947 = (state_42968[(7)]);
var inst_42956 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42947);
var state_42968__$1 = state_42968;
var statearr_42973_43018 = state_42968__$1;
(statearr_42973_43018[(2)] = inst_42956);

(statearr_42973_43018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (4))){
var inst_42899 = (state_42968[(8)]);
var inst_42899__$1 = (state_42968[(2)]);
var inst_42900 = (inst_42899__$1 == null);
var state_42968__$1 = (function (){var statearr_42974 = state_42968;
(statearr_42974[(8)] = inst_42899__$1);

return statearr_42974;
})();
if(cljs.core.truth_(inst_42900)){
var statearr_42975_43019 = state_42968__$1;
(statearr_42975_43019[(1)] = (5));

} else {
var statearr_42976_43020 = state_42968__$1;
(statearr_42976_43020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (15))){
var inst_42941 = (state_42968[(2)]);
var state_42968__$1 = state_42968;
var statearr_42977_43021 = state_42968__$1;
(statearr_42977_43021[(2)] = inst_42941);

(statearr_42977_43021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (21))){
var inst_42961 = (state_42968[(2)]);
var state_42968__$1 = (function (){var statearr_42978 = state_42968;
(statearr_42978[(9)] = inst_42961);

return statearr_42978;
})();
var statearr_42979_43022 = state_42968__$1;
(statearr_42979_43022[(2)] = null);

(statearr_42979_43022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (13))){
var inst_42923 = (state_42968[(10)]);
var inst_42925 = cljs.core.chunked_seq_QMARK_.call(null,inst_42923);
var state_42968__$1 = state_42968;
if(inst_42925){
var statearr_42980_43023 = state_42968__$1;
(statearr_42980_43023[(1)] = (16));

} else {
var statearr_42981_43024 = state_42968__$1;
(statearr_42981_43024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (22))){
var inst_42953 = (state_42968[(2)]);
var state_42968__$1 = state_42968;
if(cljs.core.truth_(inst_42953)){
var statearr_42982_43025 = state_42968__$1;
(statearr_42982_43025[(1)] = (23));

} else {
var statearr_42983_43026 = state_42968__$1;
(statearr_42983_43026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (6))){
var inst_42949 = (state_42968[(11)]);
var inst_42947 = (state_42968[(7)]);
var inst_42899 = (state_42968[(8)]);
var inst_42947__$1 = topic_fn.call(null,inst_42899);
var inst_42948 = cljs.core.deref.call(null,mults);
var inst_42949__$1 = cljs.core.get.call(null,inst_42948,inst_42947__$1);
var state_42968__$1 = (function (){var statearr_42984 = state_42968;
(statearr_42984[(11)] = inst_42949__$1);

(statearr_42984[(7)] = inst_42947__$1);

return statearr_42984;
})();
if(cljs.core.truth_(inst_42949__$1)){
var statearr_42985_43027 = state_42968__$1;
(statearr_42985_43027[(1)] = (19));

} else {
var statearr_42986_43028 = state_42968__$1;
(statearr_42986_43028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (25))){
var inst_42958 = (state_42968[(2)]);
var state_42968__$1 = state_42968;
var statearr_42987_43029 = state_42968__$1;
(statearr_42987_43029[(2)] = inst_42958);

(statearr_42987_43029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (17))){
var inst_42923 = (state_42968[(10)]);
var inst_42932 = cljs.core.first.call(null,inst_42923);
var inst_42933 = cljs.core.async.muxch_STAR_.call(null,inst_42932);
var inst_42934 = cljs.core.async.close_BANG_.call(null,inst_42933);
var inst_42935 = cljs.core.next.call(null,inst_42923);
var inst_42909 = inst_42935;
var inst_42910 = null;
var inst_42911 = (0);
var inst_42912 = (0);
var state_42968__$1 = (function (){var statearr_42988 = state_42968;
(statearr_42988[(12)] = inst_42934);

(statearr_42988[(13)] = inst_42910);

(statearr_42988[(14)] = inst_42911);

(statearr_42988[(15)] = inst_42909);

(statearr_42988[(16)] = inst_42912);

return statearr_42988;
})();
var statearr_42989_43030 = state_42968__$1;
(statearr_42989_43030[(2)] = null);

(statearr_42989_43030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (3))){
var inst_42966 = (state_42968[(2)]);
var state_42968__$1 = state_42968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42968__$1,inst_42966);
} else {
if((state_val_42969 === (12))){
var inst_42943 = (state_42968[(2)]);
var state_42968__$1 = state_42968;
var statearr_42990_43031 = state_42968__$1;
(statearr_42990_43031[(2)] = inst_42943);

(statearr_42990_43031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (2))){
var state_42968__$1 = state_42968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42968__$1,(4),ch);
} else {
if((state_val_42969 === (23))){
var state_42968__$1 = state_42968;
var statearr_42991_43032 = state_42968__$1;
(statearr_42991_43032[(2)] = null);

(statearr_42991_43032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (19))){
var inst_42949 = (state_42968[(11)]);
var inst_42899 = (state_42968[(8)]);
var inst_42951 = cljs.core.async.muxch_STAR_.call(null,inst_42949);
var state_42968__$1 = state_42968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42968__$1,(22),inst_42951,inst_42899);
} else {
if((state_val_42969 === (11))){
var inst_42909 = (state_42968[(15)]);
var inst_42923 = (state_42968[(10)]);
var inst_42923__$1 = cljs.core.seq.call(null,inst_42909);
var state_42968__$1 = (function (){var statearr_42992 = state_42968;
(statearr_42992[(10)] = inst_42923__$1);

return statearr_42992;
})();
if(inst_42923__$1){
var statearr_42993_43033 = state_42968__$1;
(statearr_42993_43033[(1)] = (13));

} else {
var statearr_42994_43034 = state_42968__$1;
(statearr_42994_43034[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (9))){
var inst_42945 = (state_42968[(2)]);
var state_42968__$1 = state_42968;
var statearr_42995_43035 = state_42968__$1;
(statearr_42995_43035[(2)] = inst_42945);

(statearr_42995_43035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (5))){
var inst_42906 = cljs.core.deref.call(null,mults);
var inst_42907 = cljs.core.vals.call(null,inst_42906);
var inst_42908 = cljs.core.seq.call(null,inst_42907);
var inst_42909 = inst_42908;
var inst_42910 = null;
var inst_42911 = (0);
var inst_42912 = (0);
var state_42968__$1 = (function (){var statearr_42996 = state_42968;
(statearr_42996[(13)] = inst_42910);

(statearr_42996[(14)] = inst_42911);

(statearr_42996[(15)] = inst_42909);

(statearr_42996[(16)] = inst_42912);

return statearr_42996;
})();
var statearr_42997_43036 = state_42968__$1;
(statearr_42997_43036[(2)] = null);

(statearr_42997_43036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (14))){
var state_42968__$1 = state_42968;
var statearr_43001_43037 = state_42968__$1;
(statearr_43001_43037[(2)] = null);

(statearr_43001_43037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (16))){
var inst_42923 = (state_42968[(10)]);
var inst_42927 = cljs.core.chunk_first.call(null,inst_42923);
var inst_42928 = cljs.core.chunk_rest.call(null,inst_42923);
var inst_42929 = cljs.core.count.call(null,inst_42927);
var inst_42909 = inst_42928;
var inst_42910 = inst_42927;
var inst_42911 = inst_42929;
var inst_42912 = (0);
var state_42968__$1 = (function (){var statearr_43002 = state_42968;
(statearr_43002[(13)] = inst_42910);

(statearr_43002[(14)] = inst_42911);

(statearr_43002[(15)] = inst_42909);

(statearr_43002[(16)] = inst_42912);

return statearr_43002;
})();
var statearr_43003_43038 = state_42968__$1;
(statearr_43003_43038[(2)] = null);

(statearr_43003_43038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (10))){
var inst_42910 = (state_42968[(13)]);
var inst_42911 = (state_42968[(14)]);
var inst_42909 = (state_42968[(15)]);
var inst_42912 = (state_42968[(16)]);
var inst_42917 = cljs.core._nth.call(null,inst_42910,inst_42912);
var inst_42918 = cljs.core.async.muxch_STAR_.call(null,inst_42917);
var inst_42919 = cljs.core.async.close_BANG_.call(null,inst_42918);
var inst_42920 = (inst_42912 + (1));
var tmp42998 = inst_42910;
var tmp42999 = inst_42911;
var tmp43000 = inst_42909;
var inst_42909__$1 = tmp43000;
var inst_42910__$1 = tmp42998;
var inst_42911__$1 = tmp42999;
var inst_42912__$1 = inst_42920;
var state_42968__$1 = (function (){var statearr_43004 = state_42968;
(statearr_43004[(13)] = inst_42910__$1);

(statearr_43004[(14)] = inst_42911__$1);

(statearr_43004[(15)] = inst_42909__$1);

(statearr_43004[(16)] = inst_42912__$1);

(statearr_43004[(17)] = inst_42919);

return statearr_43004;
})();
var statearr_43005_43039 = state_42968__$1;
(statearr_43005_43039[(2)] = null);

(statearr_43005_43039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (18))){
var inst_42938 = (state_42968[(2)]);
var state_42968__$1 = state_42968;
var statearr_43006_43040 = state_42968__$1;
(statearr_43006_43040[(2)] = inst_42938);

(statearr_43006_43040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42969 === (8))){
var inst_42911 = (state_42968[(14)]);
var inst_42912 = (state_42968[(16)]);
var inst_42914 = (inst_42912 < inst_42911);
var inst_42915 = inst_42914;
var state_42968__$1 = state_42968;
if(cljs.core.truth_(inst_42915)){
var statearr_43007_43041 = state_42968__$1;
(statearr_43007_43041[(1)] = (10));

} else {
var statearr_43008_43042 = state_42968__$1;
(statearr_43008_43042[(1)] = (11));

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
});})(c__28138__auto___43014,mults,ensure_mult,p))
;
return ((function (switch__28043__auto__,c__28138__auto___43014,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_43009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43009[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_43009[(1)] = (1));

return statearr_43009;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_42968){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_42968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43010){if((e43010 instanceof Object)){
var ex__28047__auto__ = e43010;
var statearr_43011_43043 = state_42968;
(statearr_43011_43043[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43044 = state_42968;
state_42968 = G__43044;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_42968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_42968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___43014,mults,ensure_mult,p))
})();
var state__28140__auto__ = (function (){var statearr_43012 = f__28139__auto__.call(null);
(statearr_43012[(6)] = c__28138__auto___43014);

return statearr_43012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___43014,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43046 = arguments.length;
switch (G__43046) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43049 = arguments.length;
switch (G__43049) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43052 = arguments.length;
switch (G__43052) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28138__auto___43119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___43119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___43119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43091){
var state_val_43092 = (state_43091[(1)]);
if((state_val_43092 === (7))){
var state_43091__$1 = state_43091;
var statearr_43093_43120 = state_43091__$1;
(statearr_43093_43120[(2)] = null);

(statearr_43093_43120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (1))){
var state_43091__$1 = state_43091;
var statearr_43094_43121 = state_43091__$1;
(statearr_43094_43121[(2)] = null);

(statearr_43094_43121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (4))){
var inst_43055 = (state_43091[(7)]);
var inst_43057 = (inst_43055 < cnt);
var state_43091__$1 = state_43091;
if(cljs.core.truth_(inst_43057)){
var statearr_43095_43122 = state_43091__$1;
(statearr_43095_43122[(1)] = (6));

} else {
var statearr_43096_43123 = state_43091__$1;
(statearr_43096_43123[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (15))){
var inst_43087 = (state_43091[(2)]);
var state_43091__$1 = state_43091;
var statearr_43097_43124 = state_43091__$1;
(statearr_43097_43124[(2)] = inst_43087);

(statearr_43097_43124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (13))){
var inst_43080 = cljs.core.async.close_BANG_.call(null,out);
var state_43091__$1 = state_43091;
var statearr_43098_43125 = state_43091__$1;
(statearr_43098_43125[(2)] = inst_43080);

(statearr_43098_43125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (6))){
var state_43091__$1 = state_43091;
var statearr_43099_43126 = state_43091__$1;
(statearr_43099_43126[(2)] = null);

(statearr_43099_43126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (3))){
var inst_43089 = (state_43091[(2)]);
var state_43091__$1 = state_43091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43091__$1,inst_43089);
} else {
if((state_val_43092 === (12))){
var inst_43077 = (state_43091[(8)]);
var inst_43077__$1 = (state_43091[(2)]);
var inst_43078 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43077__$1);
var state_43091__$1 = (function (){var statearr_43100 = state_43091;
(statearr_43100[(8)] = inst_43077__$1);

return statearr_43100;
})();
if(cljs.core.truth_(inst_43078)){
var statearr_43101_43127 = state_43091__$1;
(statearr_43101_43127[(1)] = (13));

} else {
var statearr_43102_43128 = state_43091__$1;
(statearr_43102_43128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (2))){
var inst_43054 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43055 = (0);
var state_43091__$1 = (function (){var statearr_43103 = state_43091;
(statearr_43103[(7)] = inst_43055);

(statearr_43103[(9)] = inst_43054);

return statearr_43103;
})();
var statearr_43104_43129 = state_43091__$1;
(statearr_43104_43129[(2)] = null);

(statearr_43104_43129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (11))){
var inst_43055 = (state_43091[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43091,(10),Object,null,(9));
var inst_43064 = chs__$1.call(null,inst_43055);
var inst_43065 = done.call(null,inst_43055);
var inst_43066 = cljs.core.async.take_BANG_.call(null,inst_43064,inst_43065);
var state_43091__$1 = state_43091;
var statearr_43105_43130 = state_43091__$1;
(statearr_43105_43130[(2)] = inst_43066);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (9))){
var inst_43055 = (state_43091[(7)]);
var inst_43068 = (state_43091[(2)]);
var inst_43069 = (inst_43055 + (1));
var inst_43055__$1 = inst_43069;
var state_43091__$1 = (function (){var statearr_43106 = state_43091;
(statearr_43106[(7)] = inst_43055__$1);

(statearr_43106[(10)] = inst_43068);

return statearr_43106;
})();
var statearr_43107_43131 = state_43091__$1;
(statearr_43107_43131[(2)] = null);

(statearr_43107_43131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (5))){
var inst_43075 = (state_43091[(2)]);
var state_43091__$1 = (function (){var statearr_43108 = state_43091;
(statearr_43108[(11)] = inst_43075);

return statearr_43108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43091__$1,(12),dchan);
} else {
if((state_val_43092 === (14))){
var inst_43077 = (state_43091[(8)]);
var inst_43082 = cljs.core.apply.call(null,f,inst_43077);
var state_43091__$1 = state_43091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43091__$1,(16),out,inst_43082);
} else {
if((state_val_43092 === (16))){
var inst_43084 = (state_43091[(2)]);
var state_43091__$1 = (function (){var statearr_43109 = state_43091;
(statearr_43109[(12)] = inst_43084);

return statearr_43109;
})();
var statearr_43110_43132 = state_43091__$1;
(statearr_43110_43132[(2)] = null);

(statearr_43110_43132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (10))){
var inst_43059 = (state_43091[(2)]);
var inst_43060 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43091__$1 = (function (){var statearr_43111 = state_43091;
(statearr_43111[(13)] = inst_43059);

return statearr_43111;
})();
var statearr_43112_43133 = state_43091__$1;
(statearr_43112_43133[(2)] = inst_43060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43092 === (8))){
var inst_43073 = (state_43091[(2)]);
var state_43091__$1 = state_43091;
var statearr_43113_43134 = state_43091__$1;
(statearr_43113_43134[(2)] = inst_43073);

(statearr_43113_43134[(1)] = (5));


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
});})(c__28138__auto___43119,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28043__auto__,c__28138__auto___43119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_43114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43114[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_43114[(1)] = (1));

return statearr_43114;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_43091){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_43091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43115){if((e43115 instanceof Object)){
var ex__28047__auto__ = e43115;
var statearr_43116_43135 = state_43091;
(statearr_43116_43135[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43136 = state_43091;
state_43091 = G__43136;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_43091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_43091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___43119,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28140__auto__ = (function (){var statearr_43117 = f__28139__auto__.call(null);
(statearr_43117[(6)] = c__28138__auto___43119);

return statearr_43117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___43119,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43139 = arguments.length;
switch (G__43139) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28138__auto___43193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___43193,out){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___43193,out){
return (function (state_43171){
var state_val_43172 = (state_43171[(1)]);
if((state_val_43172 === (7))){
var inst_43150 = (state_43171[(7)]);
var inst_43151 = (state_43171[(8)]);
var inst_43150__$1 = (state_43171[(2)]);
var inst_43151__$1 = cljs.core.nth.call(null,inst_43150__$1,(0),null);
var inst_43152 = cljs.core.nth.call(null,inst_43150__$1,(1),null);
var inst_43153 = (inst_43151__$1 == null);
var state_43171__$1 = (function (){var statearr_43173 = state_43171;
(statearr_43173[(7)] = inst_43150__$1);

(statearr_43173[(9)] = inst_43152);

(statearr_43173[(8)] = inst_43151__$1);

return statearr_43173;
})();
if(cljs.core.truth_(inst_43153)){
var statearr_43174_43194 = state_43171__$1;
(statearr_43174_43194[(1)] = (8));

} else {
var statearr_43175_43195 = state_43171__$1;
(statearr_43175_43195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43172 === (1))){
var inst_43140 = cljs.core.vec.call(null,chs);
var inst_43141 = inst_43140;
var state_43171__$1 = (function (){var statearr_43176 = state_43171;
(statearr_43176[(10)] = inst_43141);

return statearr_43176;
})();
var statearr_43177_43196 = state_43171__$1;
(statearr_43177_43196[(2)] = null);

(statearr_43177_43196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43172 === (4))){
var inst_43141 = (state_43171[(10)]);
var state_43171__$1 = state_43171;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43171__$1,(7),inst_43141);
} else {
if((state_val_43172 === (6))){
var inst_43167 = (state_43171[(2)]);
var state_43171__$1 = state_43171;
var statearr_43178_43197 = state_43171__$1;
(statearr_43178_43197[(2)] = inst_43167);

(statearr_43178_43197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43172 === (3))){
var inst_43169 = (state_43171[(2)]);
var state_43171__$1 = state_43171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43171__$1,inst_43169);
} else {
if((state_val_43172 === (2))){
var inst_43141 = (state_43171[(10)]);
var inst_43143 = cljs.core.count.call(null,inst_43141);
var inst_43144 = (inst_43143 > (0));
var state_43171__$1 = state_43171;
if(cljs.core.truth_(inst_43144)){
var statearr_43180_43198 = state_43171__$1;
(statearr_43180_43198[(1)] = (4));

} else {
var statearr_43181_43199 = state_43171__$1;
(statearr_43181_43199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43172 === (11))){
var inst_43141 = (state_43171[(10)]);
var inst_43160 = (state_43171[(2)]);
var tmp43179 = inst_43141;
var inst_43141__$1 = tmp43179;
var state_43171__$1 = (function (){var statearr_43182 = state_43171;
(statearr_43182[(10)] = inst_43141__$1);

(statearr_43182[(11)] = inst_43160);

return statearr_43182;
})();
var statearr_43183_43200 = state_43171__$1;
(statearr_43183_43200[(2)] = null);

(statearr_43183_43200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43172 === (9))){
var inst_43151 = (state_43171[(8)]);
var state_43171__$1 = state_43171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43171__$1,(11),out,inst_43151);
} else {
if((state_val_43172 === (5))){
var inst_43165 = cljs.core.async.close_BANG_.call(null,out);
var state_43171__$1 = state_43171;
var statearr_43184_43201 = state_43171__$1;
(statearr_43184_43201[(2)] = inst_43165);

(statearr_43184_43201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43172 === (10))){
var inst_43163 = (state_43171[(2)]);
var state_43171__$1 = state_43171;
var statearr_43185_43202 = state_43171__$1;
(statearr_43185_43202[(2)] = inst_43163);

(statearr_43185_43202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43172 === (8))){
var inst_43150 = (state_43171[(7)]);
var inst_43152 = (state_43171[(9)]);
var inst_43151 = (state_43171[(8)]);
var inst_43141 = (state_43171[(10)]);
var inst_43155 = (function (){var cs = inst_43141;
var vec__43146 = inst_43150;
var v = inst_43151;
var c = inst_43152;
return ((function (cs,vec__43146,v,c,inst_43150,inst_43152,inst_43151,inst_43141,state_val_43172,c__28138__auto___43193,out){
return (function (p1__43137_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43137_SHARP_);
});
;})(cs,vec__43146,v,c,inst_43150,inst_43152,inst_43151,inst_43141,state_val_43172,c__28138__auto___43193,out))
})();
var inst_43156 = cljs.core.filterv.call(null,inst_43155,inst_43141);
var inst_43141__$1 = inst_43156;
var state_43171__$1 = (function (){var statearr_43186 = state_43171;
(statearr_43186[(10)] = inst_43141__$1);

return statearr_43186;
})();
var statearr_43187_43203 = state_43171__$1;
(statearr_43187_43203[(2)] = null);

(statearr_43187_43203[(1)] = (2));


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
});})(c__28138__auto___43193,out))
;
return ((function (switch__28043__auto__,c__28138__auto___43193,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_43188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43188[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_43188[(1)] = (1));

return statearr_43188;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_43171){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_43171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43189){if((e43189 instanceof Object)){
var ex__28047__auto__ = e43189;
var statearr_43190_43204 = state_43171;
(statearr_43190_43204[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43205 = state_43171;
state_43171 = G__43205;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_43171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_43171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___43193,out))
})();
var state__28140__auto__ = (function (){var statearr_43191 = f__28139__auto__.call(null);
(statearr_43191[(6)] = c__28138__auto___43193);

return statearr_43191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___43193,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43207 = arguments.length;
switch (G__43207) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28138__auto___43252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___43252,out){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___43252,out){
return (function (state_43231){
var state_val_43232 = (state_43231[(1)]);
if((state_val_43232 === (7))){
var inst_43213 = (state_43231[(7)]);
var inst_43213__$1 = (state_43231[(2)]);
var inst_43214 = (inst_43213__$1 == null);
var inst_43215 = cljs.core.not.call(null,inst_43214);
var state_43231__$1 = (function (){var statearr_43233 = state_43231;
(statearr_43233[(7)] = inst_43213__$1);

return statearr_43233;
})();
if(inst_43215){
var statearr_43234_43253 = state_43231__$1;
(statearr_43234_43253[(1)] = (8));

} else {
var statearr_43235_43254 = state_43231__$1;
(statearr_43235_43254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (1))){
var inst_43208 = (0);
var state_43231__$1 = (function (){var statearr_43236 = state_43231;
(statearr_43236[(8)] = inst_43208);

return statearr_43236;
})();
var statearr_43237_43255 = state_43231__$1;
(statearr_43237_43255[(2)] = null);

(statearr_43237_43255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (4))){
var state_43231__$1 = state_43231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43231__$1,(7),ch);
} else {
if((state_val_43232 === (6))){
var inst_43226 = (state_43231[(2)]);
var state_43231__$1 = state_43231;
var statearr_43238_43256 = state_43231__$1;
(statearr_43238_43256[(2)] = inst_43226);

(statearr_43238_43256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (3))){
var inst_43228 = (state_43231[(2)]);
var inst_43229 = cljs.core.async.close_BANG_.call(null,out);
var state_43231__$1 = (function (){var statearr_43239 = state_43231;
(statearr_43239[(9)] = inst_43228);

return statearr_43239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43231__$1,inst_43229);
} else {
if((state_val_43232 === (2))){
var inst_43208 = (state_43231[(8)]);
var inst_43210 = (inst_43208 < n);
var state_43231__$1 = state_43231;
if(cljs.core.truth_(inst_43210)){
var statearr_43240_43257 = state_43231__$1;
(statearr_43240_43257[(1)] = (4));

} else {
var statearr_43241_43258 = state_43231__$1;
(statearr_43241_43258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (11))){
var inst_43208 = (state_43231[(8)]);
var inst_43218 = (state_43231[(2)]);
var inst_43219 = (inst_43208 + (1));
var inst_43208__$1 = inst_43219;
var state_43231__$1 = (function (){var statearr_43242 = state_43231;
(statearr_43242[(10)] = inst_43218);

(statearr_43242[(8)] = inst_43208__$1);

return statearr_43242;
})();
var statearr_43243_43259 = state_43231__$1;
(statearr_43243_43259[(2)] = null);

(statearr_43243_43259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (9))){
var state_43231__$1 = state_43231;
var statearr_43244_43260 = state_43231__$1;
(statearr_43244_43260[(2)] = null);

(statearr_43244_43260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (5))){
var state_43231__$1 = state_43231;
var statearr_43245_43261 = state_43231__$1;
(statearr_43245_43261[(2)] = null);

(statearr_43245_43261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (10))){
var inst_43223 = (state_43231[(2)]);
var state_43231__$1 = state_43231;
var statearr_43246_43262 = state_43231__$1;
(statearr_43246_43262[(2)] = inst_43223);

(statearr_43246_43262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (8))){
var inst_43213 = (state_43231[(7)]);
var state_43231__$1 = state_43231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43231__$1,(11),out,inst_43213);
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
});})(c__28138__auto___43252,out))
;
return ((function (switch__28043__auto__,c__28138__auto___43252,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_43247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43247[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_43247[(1)] = (1));

return statearr_43247;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_43231){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_43231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43248){if((e43248 instanceof Object)){
var ex__28047__auto__ = e43248;
var statearr_43249_43263 = state_43231;
(statearr_43249_43263[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43264 = state_43231;
state_43231 = G__43264;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_43231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_43231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___43252,out))
})();
var state__28140__auto__ = (function (){var statearr_43250 = f__28139__auto__.call(null);
(statearr_43250[(6)] = c__28138__auto___43252);

return statearr_43250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___43252,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43266 = (function (f,ch,meta43267){
this.f = f;
this.ch = ch;
this.meta43267 = meta43267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43268,meta43267__$1){
var self__ = this;
var _43268__$1 = this;
return (new cljs.core.async.t_cljs$core$async43266(self__.f,self__.ch,meta43267__$1));
});

cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43268){
var self__ = this;
var _43268__$1 = this;
return self__.meta43267;
});

cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43269 = (function (f,ch,meta43267,_,fn1,meta43270){
this.f = f;
this.ch = ch;
this.meta43267 = meta43267;
this._ = _;
this.fn1 = fn1;
this.meta43270 = meta43270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43271,meta43270__$1){
var self__ = this;
var _43271__$1 = this;
return (new cljs.core.async.t_cljs$core$async43269(self__.f,self__.ch,self__.meta43267,self__._,self__.fn1,meta43270__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43271){
var self__ = this;
var _43271__$1 = this;
return self__.meta43270;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43265_SHARP_){
return f1.call(null,(((p1__43265_SHARP_ == null))?null:self__.f.call(null,p1__43265_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43269.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43267","meta43267",-2055007899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43266","cljs.core.async/t_cljs$core$async43266",1862328063,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43270","meta43270",-247883180,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43269";

cljs.core.async.t_cljs$core$async43269.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43269");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43269.
 */
cljs.core.async.__GT_t_cljs$core$async43269 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43269(f__$1,ch__$1,meta43267__$1,___$2,fn1__$1,meta43270){
return (new cljs.core.async.t_cljs$core$async43269(f__$1,ch__$1,meta43267__$1,___$2,fn1__$1,meta43270));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43269(self__.f,self__.ch,self__.meta43267,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43267","meta43267",-2055007899,null)], null);
});

cljs.core.async.t_cljs$core$async43266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43266";

cljs.core.async.t_cljs$core$async43266.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43266");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43266.
 */
cljs.core.async.__GT_t_cljs$core$async43266 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43266(f__$1,ch__$1,meta43267){
return (new cljs.core.async.t_cljs$core$async43266(f__$1,ch__$1,meta43267));
});

}

return (new cljs.core.async.t_cljs$core$async43266(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43272 = (function (f,ch,meta43273){
this.f = f;
this.ch = ch;
this.meta43273 = meta43273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43274,meta43273__$1){
var self__ = this;
var _43274__$1 = this;
return (new cljs.core.async.t_cljs$core$async43272(self__.f,self__.ch,meta43273__$1));
});

cljs.core.async.t_cljs$core$async43272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43274){
var self__ = this;
var _43274__$1 = this;
return self__.meta43273;
});

cljs.core.async.t_cljs$core$async43272.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43272.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43272.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43273","meta43273",-353617096,null)], null);
});

cljs.core.async.t_cljs$core$async43272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43272";

cljs.core.async.t_cljs$core$async43272.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43272");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43272.
 */
cljs.core.async.__GT_t_cljs$core$async43272 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43272(f__$1,ch__$1,meta43273){
return (new cljs.core.async.t_cljs$core$async43272(f__$1,ch__$1,meta43273));
});

}

return (new cljs.core.async.t_cljs$core$async43272(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43275 = (function (p,ch,meta43276){
this.p = p;
this.ch = ch;
this.meta43276 = meta43276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43277,meta43276__$1){
var self__ = this;
var _43277__$1 = this;
return (new cljs.core.async.t_cljs$core$async43275(self__.p,self__.ch,meta43276__$1));
});

cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43277){
var self__ = this;
var _43277__$1 = this;
return self__.meta43276;
});

cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43276","meta43276",-1086748145,null)], null);
});

cljs.core.async.t_cljs$core$async43275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43275";

cljs.core.async.t_cljs$core$async43275.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43275");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43275.
 */
cljs.core.async.__GT_t_cljs$core$async43275 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43275(p__$1,ch__$1,meta43276){
return (new cljs.core.async.t_cljs$core$async43275(p__$1,ch__$1,meta43276));
});

}

return (new cljs.core.async.t_cljs$core$async43275(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43279 = arguments.length;
switch (G__43279) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28138__auto___43319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___43319,out){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___43319,out){
return (function (state_43300){
var state_val_43301 = (state_43300[(1)]);
if((state_val_43301 === (7))){
var inst_43296 = (state_43300[(2)]);
var state_43300__$1 = state_43300;
var statearr_43302_43320 = state_43300__$1;
(statearr_43302_43320[(2)] = inst_43296);

(statearr_43302_43320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43301 === (1))){
var state_43300__$1 = state_43300;
var statearr_43303_43321 = state_43300__$1;
(statearr_43303_43321[(2)] = null);

(statearr_43303_43321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43301 === (4))){
var inst_43282 = (state_43300[(7)]);
var inst_43282__$1 = (state_43300[(2)]);
var inst_43283 = (inst_43282__$1 == null);
var state_43300__$1 = (function (){var statearr_43304 = state_43300;
(statearr_43304[(7)] = inst_43282__$1);

return statearr_43304;
})();
if(cljs.core.truth_(inst_43283)){
var statearr_43305_43322 = state_43300__$1;
(statearr_43305_43322[(1)] = (5));

} else {
var statearr_43306_43323 = state_43300__$1;
(statearr_43306_43323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43301 === (6))){
var inst_43282 = (state_43300[(7)]);
var inst_43287 = p.call(null,inst_43282);
var state_43300__$1 = state_43300;
if(cljs.core.truth_(inst_43287)){
var statearr_43307_43324 = state_43300__$1;
(statearr_43307_43324[(1)] = (8));

} else {
var statearr_43308_43325 = state_43300__$1;
(statearr_43308_43325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43301 === (3))){
var inst_43298 = (state_43300[(2)]);
var state_43300__$1 = state_43300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43300__$1,inst_43298);
} else {
if((state_val_43301 === (2))){
var state_43300__$1 = state_43300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43300__$1,(4),ch);
} else {
if((state_val_43301 === (11))){
var inst_43290 = (state_43300[(2)]);
var state_43300__$1 = state_43300;
var statearr_43309_43326 = state_43300__$1;
(statearr_43309_43326[(2)] = inst_43290);

(statearr_43309_43326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43301 === (9))){
var state_43300__$1 = state_43300;
var statearr_43310_43327 = state_43300__$1;
(statearr_43310_43327[(2)] = null);

(statearr_43310_43327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43301 === (5))){
var inst_43285 = cljs.core.async.close_BANG_.call(null,out);
var state_43300__$1 = state_43300;
var statearr_43311_43328 = state_43300__$1;
(statearr_43311_43328[(2)] = inst_43285);

(statearr_43311_43328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43301 === (10))){
var inst_43293 = (state_43300[(2)]);
var state_43300__$1 = (function (){var statearr_43312 = state_43300;
(statearr_43312[(8)] = inst_43293);

return statearr_43312;
})();
var statearr_43313_43329 = state_43300__$1;
(statearr_43313_43329[(2)] = null);

(statearr_43313_43329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43301 === (8))){
var inst_43282 = (state_43300[(7)]);
var state_43300__$1 = state_43300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43300__$1,(11),out,inst_43282);
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
});})(c__28138__auto___43319,out))
;
return ((function (switch__28043__auto__,c__28138__auto___43319,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_43314 = [null,null,null,null,null,null,null,null,null];
(statearr_43314[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_43314[(1)] = (1));

return statearr_43314;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_43300){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_43300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43315){if((e43315 instanceof Object)){
var ex__28047__auto__ = e43315;
var statearr_43316_43330 = state_43300;
(statearr_43316_43330[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43331 = state_43300;
state_43300 = G__43331;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_43300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_43300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___43319,out))
})();
var state__28140__auto__ = (function (){var statearr_43317 = f__28139__auto__.call(null);
(statearr_43317[(6)] = c__28138__auto___43319);

return statearr_43317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___43319,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43333 = arguments.length;
switch (G__43333) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28138__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto__){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto__){
return (function (state_43396){
var state_val_43397 = (state_43396[(1)]);
if((state_val_43397 === (7))){
var inst_43392 = (state_43396[(2)]);
var state_43396__$1 = state_43396;
var statearr_43398_43436 = state_43396__$1;
(statearr_43398_43436[(2)] = inst_43392);

(statearr_43398_43436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (20))){
var inst_43362 = (state_43396[(7)]);
var inst_43373 = (state_43396[(2)]);
var inst_43374 = cljs.core.next.call(null,inst_43362);
var inst_43348 = inst_43374;
var inst_43349 = null;
var inst_43350 = (0);
var inst_43351 = (0);
var state_43396__$1 = (function (){var statearr_43399 = state_43396;
(statearr_43399[(8)] = inst_43350);

(statearr_43399[(9)] = inst_43349);

(statearr_43399[(10)] = inst_43348);

(statearr_43399[(11)] = inst_43373);

(statearr_43399[(12)] = inst_43351);

return statearr_43399;
})();
var statearr_43400_43437 = state_43396__$1;
(statearr_43400_43437[(2)] = null);

(statearr_43400_43437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (1))){
var state_43396__$1 = state_43396;
var statearr_43401_43438 = state_43396__$1;
(statearr_43401_43438[(2)] = null);

(statearr_43401_43438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (4))){
var inst_43337 = (state_43396[(13)]);
var inst_43337__$1 = (state_43396[(2)]);
var inst_43338 = (inst_43337__$1 == null);
var state_43396__$1 = (function (){var statearr_43402 = state_43396;
(statearr_43402[(13)] = inst_43337__$1);

return statearr_43402;
})();
if(cljs.core.truth_(inst_43338)){
var statearr_43403_43439 = state_43396__$1;
(statearr_43403_43439[(1)] = (5));

} else {
var statearr_43404_43440 = state_43396__$1;
(statearr_43404_43440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (15))){
var state_43396__$1 = state_43396;
var statearr_43408_43441 = state_43396__$1;
(statearr_43408_43441[(2)] = null);

(statearr_43408_43441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (21))){
var state_43396__$1 = state_43396;
var statearr_43409_43442 = state_43396__$1;
(statearr_43409_43442[(2)] = null);

(statearr_43409_43442[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (13))){
var inst_43350 = (state_43396[(8)]);
var inst_43349 = (state_43396[(9)]);
var inst_43348 = (state_43396[(10)]);
var inst_43351 = (state_43396[(12)]);
var inst_43358 = (state_43396[(2)]);
var inst_43359 = (inst_43351 + (1));
var tmp43405 = inst_43350;
var tmp43406 = inst_43349;
var tmp43407 = inst_43348;
var inst_43348__$1 = tmp43407;
var inst_43349__$1 = tmp43406;
var inst_43350__$1 = tmp43405;
var inst_43351__$1 = inst_43359;
var state_43396__$1 = (function (){var statearr_43410 = state_43396;
(statearr_43410[(14)] = inst_43358);

(statearr_43410[(8)] = inst_43350__$1);

(statearr_43410[(9)] = inst_43349__$1);

(statearr_43410[(10)] = inst_43348__$1);

(statearr_43410[(12)] = inst_43351__$1);

return statearr_43410;
})();
var statearr_43411_43443 = state_43396__$1;
(statearr_43411_43443[(2)] = null);

(statearr_43411_43443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (22))){
var state_43396__$1 = state_43396;
var statearr_43412_43444 = state_43396__$1;
(statearr_43412_43444[(2)] = null);

(statearr_43412_43444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (6))){
var inst_43337 = (state_43396[(13)]);
var inst_43346 = f.call(null,inst_43337);
var inst_43347 = cljs.core.seq.call(null,inst_43346);
var inst_43348 = inst_43347;
var inst_43349 = null;
var inst_43350 = (0);
var inst_43351 = (0);
var state_43396__$1 = (function (){var statearr_43413 = state_43396;
(statearr_43413[(8)] = inst_43350);

(statearr_43413[(9)] = inst_43349);

(statearr_43413[(10)] = inst_43348);

(statearr_43413[(12)] = inst_43351);

return statearr_43413;
})();
var statearr_43414_43445 = state_43396__$1;
(statearr_43414_43445[(2)] = null);

(statearr_43414_43445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (17))){
var inst_43362 = (state_43396[(7)]);
var inst_43366 = cljs.core.chunk_first.call(null,inst_43362);
var inst_43367 = cljs.core.chunk_rest.call(null,inst_43362);
var inst_43368 = cljs.core.count.call(null,inst_43366);
var inst_43348 = inst_43367;
var inst_43349 = inst_43366;
var inst_43350 = inst_43368;
var inst_43351 = (0);
var state_43396__$1 = (function (){var statearr_43415 = state_43396;
(statearr_43415[(8)] = inst_43350);

(statearr_43415[(9)] = inst_43349);

(statearr_43415[(10)] = inst_43348);

(statearr_43415[(12)] = inst_43351);

return statearr_43415;
})();
var statearr_43416_43446 = state_43396__$1;
(statearr_43416_43446[(2)] = null);

(statearr_43416_43446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (3))){
var inst_43394 = (state_43396[(2)]);
var state_43396__$1 = state_43396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43396__$1,inst_43394);
} else {
if((state_val_43397 === (12))){
var inst_43382 = (state_43396[(2)]);
var state_43396__$1 = state_43396;
var statearr_43417_43447 = state_43396__$1;
(statearr_43417_43447[(2)] = inst_43382);

(statearr_43417_43447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (2))){
var state_43396__$1 = state_43396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43396__$1,(4),in$);
} else {
if((state_val_43397 === (23))){
var inst_43390 = (state_43396[(2)]);
var state_43396__$1 = state_43396;
var statearr_43418_43448 = state_43396__$1;
(statearr_43418_43448[(2)] = inst_43390);

(statearr_43418_43448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (19))){
var inst_43377 = (state_43396[(2)]);
var state_43396__$1 = state_43396;
var statearr_43419_43449 = state_43396__$1;
(statearr_43419_43449[(2)] = inst_43377);

(statearr_43419_43449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (11))){
var inst_43362 = (state_43396[(7)]);
var inst_43348 = (state_43396[(10)]);
var inst_43362__$1 = cljs.core.seq.call(null,inst_43348);
var state_43396__$1 = (function (){var statearr_43420 = state_43396;
(statearr_43420[(7)] = inst_43362__$1);

return statearr_43420;
})();
if(inst_43362__$1){
var statearr_43421_43450 = state_43396__$1;
(statearr_43421_43450[(1)] = (14));

} else {
var statearr_43422_43451 = state_43396__$1;
(statearr_43422_43451[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (9))){
var inst_43384 = (state_43396[(2)]);
var inst_43385 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43396__$1 = (function (){var statearr_43423 = state_43396;
(statearr_43423[(15)] = inst_43384);

return statearr_43423;
})();
if(cljs.core.truth_(inst_43385)){
var statearr_43424_43452 = state_43396__$1;
(statearr_43424_43452[(1)] = (21));

} else {
var statearr_43425_43453 = state_43396__$1;
(statearr_43425_43453[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (5))){
var inst_43340 = cljs.core.async.close_BANG_.call(null,out);
var state_43396__$1 = state_43396;
var statearr_43426_43454 = state_43396__$1;
(statearr_43426_43454[(2)] = inst_43340);

(statearr_43426_43454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (14))){
var inst_43362 = (state_43396[(7)]);
var inst_43364 = cljs.core.chunked_seq_QMARK_.call(null,inst_43362);
var state_43396__$1 = state_43396;
if(inst_43364){
var statearr_43427_43455 = state_43396__$1;
(statearr_43427_43455[(1)] = (17));

} else {
var statearr_43428_43456 = state_43396__$1;
(statearr_43428_43456[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (16))){
var inst_43380 = (state_43396[(2)]);
var state_43396__$1 = state_43396;
var statearr_43429_43457 = state_43396__$1;
(statearr_43429_43457[(2)] = inst_43380);

(statearr_43429_43457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (10))){
var inst_43349 = (state_43396[(9)]);
var inst_43351 = (state_43396[(12)]);
var inst_43356 = cljs.core._nth.call(null,inst_43349,inst_43351);
var state_43396__$1 = state_43396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43396__$1,(13),out,inst_43356);
} else {
if((state_val_43397 === (18))){
var inst_43362 = (state_43396[(7)]);
var inst_43371 = cljs.core.first.call(null,inst_43362);
var state_43396__$1 = state_43396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43396__$1,(20),out,inst_43371);
} else {
if((state_val_43397 === (8))){
var inst_43350 = (state_43396[(8)]);
var inst_43351 = (state_43396[(12)]);
var inst_43353 = (inst_43351 < inst_43350);
var inst_43354 = inst_43353;
var state_43396__$1 = state_43396;
if(cljs.core.truth_(inst_43354)){
var statearr_43430_43458 = state_43396__$1;
(statearr_43430_43458[(1)] = (10));

} else {
var statearr_43431_43459 = state_43396__$1;
(statearr_43431_43459[(1)] = (11));

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
});})(c__28138__auto__))
;
return ((function (switch__28043__auto__,c__28138__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____0 = (function (){
var statearr_43432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43432[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__);

(statearr_43432[(1)] = (1));

return statearr_43432;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____1 = (function (state_43396){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_43396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43433){if((e43433 instanceof Object)){
var ex__28047__auto__ = e43433;
var statearr_43434_43460 = state_43396;
(statearr_43434_43460[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43461 = state_43396;
state_43396 = G__43461;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__ = function(state_43396){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____1.call(this,state_43396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28044__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto__))
})();
var state__28140__auto__ = (function (){var statearr_43435 = f__28139__auto__.call(null);
(statearr_43435[(6)] = c__28138__auto__);

return statearr_43435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto__))
);

return c__28138__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43463 = arguments.length;
switch (G__43463) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43466 = arguments.length;
switch (G__43466) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43469 = arguments.length;
switch (G__43469) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28138__auto___43516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___43516,out){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___43516,out){
return (function (state_43493){
var state_val_43494 = (state_43493[(1)]);
if((state_val_43494 === (7))){
var inst_43488 = (state_43493[(2)]);
var state_43493__$1 = state_43493;
var statearr_43495_43517 = state_43493__$1;
(statearr_43495_43517[(2)] = inst_43488);

(statearr_43495_43517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43494 === (1))){
var inst_43470 = null;
var state_43493__$1 = (function (){var statearr_43496 = state_43493;
(statearr_43496[(7)] = inst_43470);

return statearr_43496;
})();
var statearr_43497_43518 = state_43493__$1;
(statearr_43497_43518[(2)] = null);

(statearr_43497_43518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43494 === (4))){
var inst_43473 = (state_43493[(8)]);
var inst_43473__$1 = (state_43493[(2)]);
var inst_43474 = (inst_43473__$1 == null);
var inst_43475 = cljs.core.not.call(null,inst_43474);
var state_43493__$1 = (function (){var statearr_43498 = state_43493;
(statearr_43498[(8)] = inst_43473__$1);

return statearr_43498;
})();
if(inst_43475){
var statearr_43499_43519 = state_43493__$1;
(statearr_43499_43519[(1)] = (5));

} else {
var statearr_43500_43520 = state_43493__$1;
(statearr_43500_43520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43494 === (6))){
var state_43493__$1 = state_43493;
var statearr_43501_43521 = state_43493__$1;
(statearr_43501_43521[(2)] = null);

(statearr_43501_43521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43494 === (3))){
var inst_43490 = (state_43493[(2)]);
var inst_43491 = cljs.core.async.close_BANG_.call(null,out);
var state_43493__$1 = (function (){var statearr_43502 = state_43493;
(statearr_43502[(9)] = inst_43490);

return statearr_43502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43493__$1,inst_43491);
} else {
if((state_val_43494 === (2))){
var state_43493__$1 = state_43493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43493__$1,(4),ch);
} else {
if((state_val_43494 === (11))){
var inst_43473 = (state_43493[(8)]);
var inst_43482 = (state_43493[(2)]);
var inst_43470 = inst_43473;
var state_43493__$1 = (function (){var statearr_43503 = state_43493;
(statearr_43503[(7)] = inst_43470);

(statearr_43503[(10)] = inst_43482);

return statearr_43503;
})();
var statearr_43504_43522 = state_43493__$1;
(statearr_43504_43522[(2)] = null);

(statearr_43504_43522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43494 === (9))){
var inst_43473 = (state_43493[(8)]);
var state_43493__$1 = state_43493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43493__$1,(11),out,inst_43473);
} else {
if((state_val_43494 === (5))){
var inst_43473 = (state_43493[(8)]);
var inst_43470 = (state_43493[(7)]);
var inst_43477 = cljs.core._EQ_.call(null,inst_43473,inst_43470);
var state_43493__$1 = state_43493;
if(inst_43477){
var statearr_43506_43523 = state_43493__$1;
(statearr_43506_43523[(1)] = (8));

} else {
var statearr_43507_43524 = state_43493__$1;
(statearr_43507_43524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43494 === (10))){
var inst_43485 = (state_43493[(2)]);
var state_43493__$1 = state_43493;
var statearr_43508_43525 = state_43493__$1;
(statearr_43508_43525[(2)] = inst_43485);

(statearr_43508_43525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43494 === (8))){
var inst_43470 = (state_43493[(7)]);
var tmp43505 = inst_43470;
var inst_43470__$1 = tmp43505;
var state_43493__$1 = (function (){var statearr_43509 = state_43493;
(statearr_43509[(7)] = inst_43470__$1);

return statearr_43509;
})();
var statearr_43510_43526 = state_43493__$1;
(statearr_43510_43526[(2)] = null);

(statearr_43510_43526[(1)] = (2));


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
});})(c__28138__auto___43516,out))
;
return ((function (switch__28043__auto__,c__28138__auto___43516,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_43511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43511[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_43511[(1)] = (1));

return statearr_43511;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_43493){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_43493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43512){if((e43512 instanceof Object)){
var ex__28047__auto__ = e43512;
var statearr_43513_43527 = state_43493;
(statearr_43513_43527[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43528 = state_43493;
state_43493 = G__43528;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_43493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_43493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___43516,out))
})();
var state__28140__auto__ = (function (){var statearr_43514 = f__28139__auto__.call(null);
(statearr_43514[(6)] = c__28138__auto___43516);

return statearr_43514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___43516,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43530 = arguments.length;
switch (G__43530) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28138__auto___43596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___43596,out){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___43596,out){
return (function (state_43568){
var state_val_43569 = (state_43568[(1)]);
if((state_val_43569 === (7))){
var inst_43564 = (state_43568[(2)]);
var state_43568__$1 = state_43568;
var statearr_43570_43597 = state_43568__$1;
(statearr_43570_43597[(2)] = inst_43564);

(statearr_43570_43597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (1))){
var inst_43531 = (new Array(n));
var inst_43532 = inst_43531;
var inst_43533 = (0);
var state_43568__$1 = (function (){var statearr_43571 = state_43568;
(statearr_43571[(7)] = inst_43532);

(statearr_43571[(8)] = inst_43533);

return statearr_43571;
})();
var statearr_43572_43598 = state_43568__$1;
(statearr_43572_43598[(2)] = null);

(statearr_43572_43598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (4))){
var inst_43536 = (state_43568[(9)]);
var inst_43536__$1 = (state_43568[(2)]);
var inst_43537 = (inst_43536__$1 == null);
var inst_43538 = cljs.core.not.call(null,inst_43537);
var state_43568__$1 = (function (){var statearr_43573 = state_43568;
(statearr_43573[(9)] = inst_43536__$1);

return statearr_43573;
})();
if(inst_43538){
var statearr_43574_43599 = state_43568__$1;
(statearr_43574_43599[(1)] = (5));

} else {
var statearr_43575_43600 = state_43568__$1;
(statearr_43575_43600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (15))){
var inst_43558 = (state_43568[(2)]);
var state_43568__$1 = state_43568;
var statearr_43576_43601 = state_43568__$1;
(statearr_43576_43601[(2)] = inst_43558);

(statearr_43576_43601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (13))){
var state_43568__$1 = state_43568;
var statearr_43577_43602 = state_43568__$1;
(statearr_43577_43602[(2)] = null);

(statearr_43577_43602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (6))){
var inst_43533 = (state_43568[(8)]);
var inst_43554 = (inst_43533 > (0));
var state_43568__$1 = state_43568;
if(cljs.core.truth_(inst_43554)){
var statearr_43578_43603 = state_43568__$1;
(statearr_43578_43603[(1)] = (12));

} else {
var statearr_43579_43604 = state_43568__$1;
(statearr_43579_43604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (3))){
var inst_43566 = (state_43568[(2)]);
var state_43568__$1 = state_43568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43568__$1,inst_43566);
} else {
if((state_val_43569 === (12))){
var inst_43532 = (state_43568[(7)]);
var inst_43556 = cljs.core.vec.call(null,inst_43532);
var state_43568__$1 = state_43568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43568__$1,(15),out,inst_43556);
} else {
if((state_val_43569 === (2))){
var state_43568__$1 = state_43568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43568__$1,(4),ch);
} else {
if((state_val_43569 === (11))){
var inst_43548 = (state_43568[(2)]);
var inst_43549 = (new Array(n));
var inst_43532 = inst_43549;
var inst_43533 = (0);
var state_43568__$1 = (function (){var statearr_43580 = state_43568;
(statearr_43580[(7)] = inst_43532);

(statearr_43580[(10)] = inst_43548);

(statearr_43580[(8)] = inst_43533);

return statearr_43580;
})();
var statearr_43581_43605 = state_43568__$1;
(statearr_43581_43605[(2)] = null);

(statearr_43581_43605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (9))){
var inst_43532 = (state_43568[(7)]);
var inst_43546 = cljs.core.vec.call(null,inst_43532);
var state_43568__$1 = state_43568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43568__$1,(11),out,inst_43546);
} else {
if((state_val_43569 === (5))){
var inst_43532 = (state_43568[(7)]);
var inst_43536 = (state_43568[(9)]);
var inst_43541 = (state_43568[(11)]);
var inst_43533 = (state_43568[(8)]);
var inst_43540 = (inst_43532[inst_43533] = inst_43536);
var inst_43541__$1 = (inst_43533 + (1));
var inst_43542 = (inst_43541__$1 < n);
var state_43568__$1 = (function (){var statearr_43582 = state_43568;
(statearr_43582[(12)] = inst_43540);

(statearr_43582[(11)] = inst_43541__$1);

return statearr_43582;
})();
if(cljs.core.truth_(inst_43542)){
var statearr_43583_43606 = state_43568__$1;
(statearr_43583_43606[(1)] = (8));

} else {
var statearr_43584_43607 = state_43568__$1;
(statearr_43584_43607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (14))){
var inst_43561 = (state_43568[(2)]);
var inst_43562 = cljs.core.async.close_BANG_.call(null,out);
var state_43568__$1 = (function (){var statearr_43586 = state_43568;
(statearr_43586[(13)] = inst_43561);

return statearr_43586;
})();
var statearr_43587_43608 = state_43568__$1;
(statearr_43587_43608[(2)] = inst_43562);

(statearr_43587_43608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (10))){
var inst_43552 = (state_43568[(2)]);
var state_43568__$1 = state_43568;
var statearr_43588_43609 = state_43568__$1;
(statearr_43588_43609[(2)] = inst_43552);

(statearr_43588_43609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43569 === (8))){
var inst_43532 = (state_43568[(7)]);
var inst_43541 = (state_43568[(11)]);
var tmp43585 = inst_43532;
var inst_43532__$1 = tmp43585;
var inst_43533 = inst_43541;
var state_43568__$1 = (function (){var statearr_43589 = state_43568;
(statearr_43589[(7)] = inst_43532__$1);

(statearr_43589[(8)] = inst_43533);

return statearr_43589;
})();
var statearr_43590_43610 = state_43568__$1;
(statearr_43590_43610[(2)] = null);

(statearr_43590_43610[(1)] = (2));


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
});})(c__28138__auto___43596,out))
;
return ((function (switch__28043__auto__,c__28138__auto___43596,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_43591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43591[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_43591[(1)] = (1));

return statearr_43591;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_43568){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_43568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43592){if((e43592 instanceof Object)){
var ex__28047__auto__ = e43592;
var statearr_43593_43611 = state_43568;
(statearr_43593_43611[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43612 = state_43568;
state_43568 = G__43612;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_43568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_43568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___43596,out))
})();
var state__28140__auto__ = (function (){var statearr_43594 = f__28139__auto__.call(null);
(statearr_43594[(6)] = c__28138__auto___43596);

return statearr_43594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___43596,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43614 = arguments.length;
switch (G__43614) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28138__auto___43684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28138__auto___43684,out){
return (function (){
var f__28139__auto__ = (function (){var switch__28043__auto__ = ((function (c__28138__auto___43684,out){
return (function (state_43656){
var state_val_43657 = (state_43656[(1)]);
if((state_val_43657 === (7))){
var inst_43652 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
var statearr_43658_43685 = state_43656__$1;
(statearr_43658_43685[(2)] = inst_43652);

(statearr_43658_43685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (1))){
var inst_43615 = [];
var inst_43616 = inst_43615;
var inst_43617 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43656__$1 = (function (){var statearr_43659 = state_43656;
(statearr_43659[(7)] = inst_43616);

(statearr_43659[(8)] = inst_43617);

return statearr_43659;
})();
var statearr_43660_43686 = state_43656__$1;
(statearr_43660_43686[(2)] = null);

(statearr_43660_43686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (4))){
var inst_43620 = (state_43656[(9)]);
var inst_43620__$1 = (state_43656[(2)]);
var inst_43621 = (inst_43620__$1 == null);
var inst_43622 = cljs.core.not.call(null,inst_43621);
var state_43656__$1 = (function (){var statearr_43661 = state_43656;
(statearr_43661[(9)] = inst_43620__$1);

return statearr_43661;
})();
if(inst_43622){
var statearr_43662_43687 = state_43656__$1;
(statearr_43662_43687[(1)] = (5));

} else {
var statearr_43663_43688 = state_43656__$1;
(statearr_43663_43688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (15))){
var inst_43646 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
var statearr_43664_43689 = state_43656__$1;
(statearr_43664_43689[(2)] = inst_43646);

(statearr_43664_43689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (13))){
var state_43656__$1 = state_43656;
var statearr_43665_43690 = state_43656__$1;
(statearr_43665_43690[(2)] = null);

(statearr_43665_43690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (6))){
var inst_43616 = (state_43656[(7)]);
var inst_43641 = inst_43616.length;
var inst_43642 = (inst_43641 > (0));
var state_43656__$1 = state_43656;
if(cljs.core.truth_(inst_43642)){
var statearr_43666_43691 = state_43656__$1;
(statearr_43666_43691[(1)] = (12));

} else {
var statearr_43667_43692 = state_43656__$1;
(statearr_43667_43692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (3))){
var inst_43654 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43656__$1,inst_43654);
} else {
if((state_val_43657 === (12))){
var inst_43616 = (state_43656[(7)]);
var inst_43644 = cljs.core.vec.call(null,inst_43616);
var state_43656__$1 = state_43656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43656__$1,(15),out,inst_43644);
} else {
if((state_val_43657 === (2))){
var state_43656__$1 = state_43656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43656__$1,(4),ch);
} else {
if((state_val_43657 === (11))){
var inst_43624 = (state_43656[(10)]);
var inst_43620 = (state_43656[(9)]);
var inst_43634 = (state_43656[(2)]);
var inst_43635 = [];
var inst_43636 = inst_43635.push(inst_43620);
var inst_43616 = inst_43635;
var inst_43617 = inst_43624;
var state_43656__$1 = (function (){var statearr_43668 = state_43656;
(statearr_43668[(11)] = inst_43634);

(statearr_43668[(7)] = inst_43616);

(statearr_43668[(8)] = inst_43617);

(statearr_43668[(12)] = inst_43636);

return statearr_43668;
})();
var statearr_43669_43693 = state_43656__$1;
(statearr_43669_43693[(2)] = null);

(statearr_43669_43693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (9))){
var inst_43616 = (state_43656[(7)]);
var inst_43632 = cljs.core.vec.call(null,inst_43616);
var state_43656__$1 = state_43656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43656__$1,(11),out,inst_43632);
} else {
if((state_val_43657 === (5))){
var inst_43617 = (state_43656[(8)]);
var inst_43624 = (state_43656[(10)]);
var inst_43620 = (state_43656[(9)]);
var inst_43624__$1 = f.call(null,inst_43620);
var inst_43625 = cljs.core._EQ_.call(null,inst_43624__$1,inst_43617);
var inst_43626 = cljs.core.keyword_identical_QMARK_.call(null,inst_43617,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43627 = ((inst_43625) || (inst_43626));
var state_43656__$1 = (function (){var statearr_43670 = state_43656;
(statearr_43670[(10)] = inst_43624__$1);

return statearr_43670;
})();
if(cljs.core.truth_(inst_43627)){
var statearr_43671_43694 = state_43656__$1;
(statearr_43671_43694[(1)] = (8));

} else {
var statearr_43672_43695 = state_43656__$1;
(statearr_43672_43695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (14))){
var inst_43649 = (state_43656[(2)]);
var inst_43650 = cljs.core.async.close_BANG_.call(null,out);
var state_43656__$1 = (function (){var statearr_43674 = state_43656;
(statearr_43674[(13)] = inst_43649);

return statearr_43674;
})();
var statearr_43675_43696 = state_43656__$1;
(statearr_43675_43696[(2)] = inst_43650);

(statearr_43675_43696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (10))){
var inst_43639 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
var statearr_43676_43697 = state_43656__$1;
(statearr_43676_43697[(2)] = inst_43639);

(statearr_43676_43697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (8))){
var inst_43616 = (state_43656[(7)]);
var inst_43624 = (state_43656[(10)]);
var inst_43620 = (state_43656[(9)]);
var inst_43629 = inst_43616.push(inst_43620);
var tmp43673 = inst_43616;
var inst_43616__$1 = tmp43673;
var inst_43617 = inst_43624;
var state_43656__$1 = (function (){var statearr_43677 = state_43656;
(statearr_43677[(7)] = inst_43616__$1);

(statearr_43677[(14)] = inst_43629);

(statearr_43677[(8)] = inst_43617);

return statearr_43677;
})();
var statearr_43678_43698 = state_43656__$1;
(statearr_43678_43698[(2)] = null);

(statearr_43678_43698[(1)] = (2));


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
});})(c__28138__auto___43684,out))
;
return ((function (switch__28043__auto__,c__28138__auto___43684,out){
return (function() {
var cljs$core$async$state_machine__28044__auto__ = null;
var cljs$core$async$state_machine__28044__auto____0 = (function (){
var statearr_43679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43679[(0)] = cljs$core$async$state_machine__28044__auto__);

(statearr_43679[(1)] = (1));

return statearr_43679;
});
var cljs$core$async$state_machine__28044__auto____1 = (function (state_43656){
while(true){
var ret_value__28045__auto__ = (function (){try{while(true){
var result__28046__auto__ = switch__28043__auto__.call(null,state_43656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28046__auto__;
}
break;
}
}catch (e43680){if((e43680 instanceof Object)){
var ex__28047__auto__ = e43680;
var statearr_43681_43699 = state_43656;
(statearr_43681_43699[(5)] = ex__28047__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43700 = state_43656;
state_43656 = G__43700;
continue;
} else {
return ret_value__28045__auto__;
}
break;
}
});
cljs$core$async$state_machine__28044__auto__ = function(state_43656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28044__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28044__auto____1.call(this,state_43656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28044__auto____0;
cljs$core$async$state_machine__28044__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28044__auto____1;
return cljs$core$async$state_machine__28044__auto__;
})()
;})(switch__28043__auto__,c__28138__auto___43684,out))
})();
var state__28140__auto__ = (function (){var statearr_43682 = f__28139__auto__.call(null);
(statearr_43682[(6)] = c__28138__auto___43684);

return statearr_43682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28140__auto__);
});})(c__28138__auto___43684,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1583319095335
