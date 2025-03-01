# explicit-boolean-comparison-plugin

A Deno lint plugin that enforces explicit boolean comparisons by disallowing the
use of the ! shorthand for boolean negation. This rule helps improve code
readability by requiring an explicit comparison (e.g., variable === false) in
conditional statements.

> [!NOTE]
> If it were up to me, I’d nuke the “!” shorthand that turns our code into
> gibberish at scale. But until I secure the necessary military funding for this
> operation, here’s a lint plugin.

## Usage

TODO
