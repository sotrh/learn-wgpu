(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{491:function(t,e,o){"use strict";o.r(e);var a=o(13),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"update-to-0-18-and-hdr-tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-to-0-18-and-hdr-tutorial"}},[t._v("#")]),t._v(" Update to 0.18 and HDR tutorial")]),t._v(" "),e("p",[t._v("First let's go over some of the changes that occurred:")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("RenderPassDescriptor")]),t._v(" now have 2 new fields:\n"),e("code",[t._v("occlusion_query_set")]),t._v(" and, "),e("code",[t._v("timestamp_writes")]),t._v(". I'm\nsetting both to "),e("code",[t._v("None")]),t._v(" for now.")]),t._v(" "),e("li",[e("code",[t._v("ComputePassDescriptor")]),t._v(" now has a "),e("code",[t._v("timestamp_writes")]),t._v("\nfield.")]),t._v(" "),e("li",[e("code",[t._v("InstanceDescriptor")]),t._v(" now has some more fields, but I\nopted to just use "),e("code",[t._v("..Default::default()")]),t._v(" for all the\nfields other than "),e("code",[t._v("backends")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"hdr-tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdr-tutorial"}},[t._v("#")]),t._v(" HDR tutorial")]),t._v(" "),e("p",[t._v("I've been unsure how best to introduce compute shaders\nas they are a big part of what makes WebGPU special, but\nmost browsers don't support them at the moment. With Chrome\nrolling out support for WebGPU, I felt more confident\nwriting a tutorial for them.")]),t._v(" "),e("p",[t._v("Also, I'm been interested learning how to load HDR images\nfrom places like Polyhaven, so I decided to introduce\ncompute shaders by creating one that will load an HDR and\nconvert it to a Cubemap to be rendered.")]),t._v(" "),e("p",[t._v("You can check it out "),e("a",{attrs:{href:"../../intermediate/tutorial13-hdr"}},[t._v("here")]),t._v("!")])])}),[],!1,null,null,null);e.default=r.exports}}]);