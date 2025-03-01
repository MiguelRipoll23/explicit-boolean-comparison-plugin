# explicit-boolean-comparison-plugin

A Deno lint plugin that enforces explicit boolean comparisons by disallowing the
use of the ! shorthand for boolean negation. This rule helps improve code
readability by requiring an explicit comparison (e.g., variable === false) in
conditional statements.

> [!NOTE]
> If it were up to me, I’d launch a strike to wipe out the ! shorthand that
> turns code into unreadable chaos. But until I can secure the necessary
> military funding, here’s a lint plugin as a peace offering.

## Usage

Add the following block to your `deno.json` file:

```json
{
  "lint": {
    "plugins": [
      "jsr:@miguelripoll23/explicit-boolean-comparison-plugin"
    ]
  }
}
```
