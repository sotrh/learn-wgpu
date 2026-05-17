import { _ as o, c as a, a as t, o as i } from "./app-HHbeU4D1.js";
const n = {};
function s(r, e) {
  return i(), a("div", null, [...e[0] || (e[0] = [t('<h1 id="first-major-version-22-0" tabindex="-1"><a class="header-anchor" href="#first-major-version-22-0"><span>First Major Version! (22.0)</span></a></h1><p>Theres only a few things here. First all the shader related config structs now have a <code>compilation_options</code> field. For now I&#39;m just leaving it as <code>Default::default()</code>, but if you have specific compilation needs it&#39;s there for you.</p><p>The next thing is <code>RenderPipelineDescriptor</code> and <code>ComputePipelineDescriptor</code> now have a <code>cache</code> field. This allows you to supply a cache to use during shader compilation. This is only really useful for Android devices as most desktop hardware/drivers provide caching. I&#39;ve left it as <code>None</code> for now.</p><p><code>DeviceDescriptor</code> now has a <code>memory_hint</code> field. You can use this to ask the gpu to prioritize performance, memory usage, or allow you to request a custom memory block size. These are just hints though and the hardware has the final say in how to do things. I&#39;ve left this as <code>Default::default()</code> for now.</p>', 4)])]);
}
const d = o(n, [["render", s]]), h = JSON.parse('{"path":"/news/22.0/","title":"First Major Version! (22.0)","lang":"en-US","frontmatter":{},"git":{"updatedTime":1778988332000,"contributors":[{"name":"Benjamin Hansen","username":"","email":"bhbenjaminhansen@gmail.com","commits":1}],"changelog":[{"hash":"c88d6ab33b262d50499685ce9ebc6a1b5a8bce65","time":1778988332000,"email":"bhbenjaminhansen@gmail.com","author":"Benjamin Hansen","message":"started text tutorial and exploring multithreading"}]},"filePathRelative":"news/22.0/readme.md"}');
export {
  d as comp,
  h as data
};
