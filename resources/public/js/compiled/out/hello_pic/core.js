// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_pic.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/hello-pic/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof hello_pic !== 'undefined') && (typeof hello_pic.core !== 'undefined') && (typeof hello_pic.core.app_state !== 'undefined')){
} else {
hello_pic.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world 111!"], null));
}
hello_pic.core.img_id = "uploaded-image";
hello_pic.core.preview_src = reagent.core.atom.call(null,"");
hello_pic.core.load_image = (function hello_pic$core$load_image(file_added_event){
var file = cljs.core.first.call(null,cljs.core.array_seq.call(null,file_added_event.target.files));
var file_reader = (new FileReader());
file_reader.onload = ((function (file,file_reader){
return (function (file_load_event){
cljs.core.reset_BANG_.call(null,hello_pic.core.preview_src,file_load_event.target.result);

var img = document.getElementById(hello_pic.core.img_id);
return img.onload = ((function (img,file,file_reader){
return (function (image_load){
return console.log("dimensions:",img.width,"x",img.height);
});})(img,file,file_reader))
;
});})(file,file_reader))
;

return file_reader.readAsDataURL(file);
});
hello_pic.core.image_upload_fn = (function hello_pic$core$image_upload_fn(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"image-upload"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),hello_pic.core.load_image], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hello_pic.core.img_id,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,hello_pic.core.preview_src)], null)], null)], null);
});
hello_pic.core.aa = (function hello_pic$core$aa(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"image"], null)], null);
});
hello_pic.core.on_js_reload = (function hello_pic$core$on_js_reload(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_pic.core.image_upload_fn], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map?rel=1583387392765
