export function rehypeWrapH3() {
  return (tree) => {
    const children = tree.children;
    const result = [];
    let i = 0;

    while (i < children.length) {
      const node = children[i];

      if (node.type === 'element' && node.tagName === 'h3') {
        result.push(node);
        i++;

        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['h3-content'] },
          children: [],
        };

        while (
          i < children.length &&
          !(children[i].type === 'element' &&
            (children[i].tagName === 'h2' || children[i].tagName === 'h3'))
        ) {
          wrapper.children.push(children[i]);
          i++;
        }

        if (wrapper.children.length > 0) {
          result.push(wrapper);
        }
      } else {
        result.push(node);
        i++;
      }
    }

    tree.children = result;
  };
}
