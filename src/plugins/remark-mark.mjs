import { findAndReplace } from 'mdast-util-find-and-replace';

export function remarkMark() {
  return (tree) => {
    findAndReplace(tree, [
      [
        /==(.+?)==/g,
        (_match, text) => ({
          type: 'html',
          value: `<mark>${text}</mark>`,
        }),
      ],
    ]);
  };
}
