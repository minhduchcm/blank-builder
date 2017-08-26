"use strict";

function getExpressString(expr) {
  console.log(expr.properties);
  return "";
}
var f = true;
module.exports = function(babel) {
  var t = babel.types;
  return {
    visitor: {
      JSXAttribute: function(path, state) {
        if (f && path.node.name.name === "style") {
          var value = path.node.value;
          if (value.type === "JSXExpressionContainer") {
            let expression = value.expression;
            path
              .get("value")
              .get("expression")
              .replaceWith(
                t.callExpression(t.identifier("yeah"), [expression])
              );
          }
        }
      }
    }
  };
};
