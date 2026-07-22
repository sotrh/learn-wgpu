import { _ as o, c as a, a as t, o as i } from "./app-B_uFvM1x.js";
const n = {};
function s(r, e) {
  return i(), a("div", null, [...e[0] || (e[0] = [t('<h1 id="first-major-version-22-0" tabindex="-1"><a class="header-anchor" href="#first-major-version-22-0"><span>First Major Version! (22.0)</span></a></h1><p>Theres only a few things here. First all the shader related config structs now have a <code>compilation_options</code> field. For now I&#39;m just leaving it as <code>Default::default()</code>, but if you have specific compilation needs it&#39;s there for you.</p><p>The next thing is <code>RenderPipelineDescriptor</code> and <code>ComputePipelineDescriptor</code> now have a <code>cache</code> field. This allows you to supply a cache to use during shader compilation. This is only really useful for Android devices as most desktop hardware/drivers provide caching. I&#39;ve left it as <code>None</code> for now.</p><p><code>DeviceDescriptor</code> now has a <code>memory_hint</code> field. You can use this to ask the gpu to prioritize performance, memory usage, or allow you to request a custom memory block size. These are just hints though and the hardware has the final say in how to do things. I&#39;ve left this as <code>Default::default()</code> for now.</p>', 4)])]);
}
const d = o(n, [["render", s]]), l = JSON.parse('{"path":"/news/22.0/","title":"First Major Version! (22.0)","lang":"en-US","frontmatter":{},"git":{"updatedTime":1784696941000,"contributors":[{"name":"Benjamin Hansen","username":"","email":"bhbenjaminhansen@gmail.com","commits":1}],"changelog":[{"hash":"d90b30088fceae214c53603207464c874a08b6d8","time":1784696941000,"email":"bhbenjaminhansen@gmail.com","author":"Benjamin Hansen","message":"text demo layout from JSON, need to fix multiline position bug"}]},"filePathRelative":"news/22.0/readme.md"}');
export {
  d as comp,
  l as data
};
