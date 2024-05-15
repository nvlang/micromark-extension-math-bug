import { fromMarkdown } from "mdast-util-from-markdown";
import { inspect } from "node:util";
import { math } from "micromark-extension-math";
import { mathFromMarkdown } from "mdast-util-math";

const ast = fromMarkdown("$ a \\$ b $", {
    extensions: [math({ singleDollarTextMath: true })],
    mdastExtensions: [mathFromMarkdown()],
});

console.log(inspect(ast, { depth: 10, colors: true }));

const expected = {
    type: "root",
    children: [
        {
            type: "paragraph",
            children: [
                {
                    type: "inlineMath",
                    value: "a \\$ b",
                    data: {
                        hName: "code",
                        hProperties: { className: ["language-math", "math-inline"] },
                        hChildren: [{ type: "text", value: "a \\$ b" }],
                    },
                    position: {
                        start: { line: 1, column: 1, offset: 0 },
                        end: { line: 1, column: 11, offset: 10 },
                    },
                },
            ],
            position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 11, offset: 10 },
            },
        },
    ],
    position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 1, column: 11, offset: 10 },
    },
};

if (JSON.stringify(ast) !== JSON.stringify(expected)) {
    console.error('\nExpected "$ a \\$ b $" to be parsed as an inline math node.');
}
