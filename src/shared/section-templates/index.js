function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
export default requireAll(
  require.context("./templates", true, /^\.\/.*\index.js$/)
).map(m => m.default);
