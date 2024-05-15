
**Steps to reproduce**:
1. Clone this project
2. Run `npm i` (or `pnpm i`)
3. Run `node index.js`

**Expected behavior**: `$ a \$ b $` to be parsed as an inline math node with
content ` a \$ b `.

**Actual behavior**: `$ a \$ b $` is parsed as follows:
- `$ a \$`: math node with content `a \`
- `b $`: text node with content `b $`

**Suggestion**: Math environments shouldn't be allowed to end with an odd number
of backslashes, since backslash is TeX's escape character.
