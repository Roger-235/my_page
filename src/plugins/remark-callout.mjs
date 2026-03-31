import { visit } from 'unist-util-visit';
import remarkDirective from 'remark-directive';

const CALLOUT_TYPES = {
  note:    { label: 'Note' },
  tip:     { label: 'Tip' },
  warning: { label: 'Warning' },
  danger:  { label: 'Danger' },
  info:    { label: 'Info' },
};

function remarkCallout() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' &&
        CALLOUT_TYPES[node.name]
      ) {
        const { label } = CALLOUT_TYPES[node.name];
        node.data = node.data || {};
        node.data.hName = 'div';
        node.data.hProperties = {
          class: `callout callout-${node.name}`,
        };

        // Prepend label as first child
        node.children.unshift({
          type: 'paragraph',
          data: {
            hName: 'p',
            hProperties: { class: 'callout-label' },
          },
          children: [{ type: 'text', value: label }],
        });
      }
    });
  };
}

export { remarkDirective, remarkCallout };
