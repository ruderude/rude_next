import { visit } from 'unist-util-visit'

export const CustomCode = () => {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'p' && node.children[0].type === 'text') {
        if (node.children[0].value.startsWith('[alert]')) {
          node.tagName = 'div';
          node.properties = {
            className: ['alert'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?alert\]/g,
            ''
          );
        }

        if (node.children[0].value.startsWith('[red]')) {
          node.tagName = 'div';
          node.properties = {
            className: ['red'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?red\]/g,
            ''
          );
        }
      }
    });
  };
};