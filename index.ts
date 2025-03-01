export default {
  name: "explicit-boolean-comparison-plugin",
  rules: {
    "no-implicit-boolean-negation": {
      create(context) {
        return {
          'IfStatement > UnaryExpression[operator="!"]'(node) {
            if (node.argument.type === "Identifier") {
              context.report({
                node,
                message:
                  "Avoid using '!' shorthand for boolean negation to improve readability. Use an explicit comparison instead (e.g., variable === false).",
                fix(fixer) {
                  const sourceCode = context.sourceCode.getText(node.argument);
                  return fixer.replaceText(node, `${sourceCode} === false`);
                },
              });
            }
          },
        };
      },
    },
  },
} satisfies Deno.lint.Plugin;
