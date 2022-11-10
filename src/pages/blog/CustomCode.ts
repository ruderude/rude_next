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

        if (node.children[0].value.startsWith('[id-1]')) {
          node.tagName = 'p';
          node.properties = {
            id: ['user-content-fnref-1'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?id-1\]/g,
            ''
          );
        }

        if (node.children[0].value.startsWith('[id-2]')) {
          node.tagName = 'p';
          node.properties = {
            id: ['user-content-fnref-2'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?id-2\]/g,
            ''
          );
        }

        if (node.children[0].value.startsWith('[id-3]')) {
          node.tagName = 'p';
          node.properties = {
            id: ['user-content-fnref-3'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?id-3\]/g,
            ''
          );
        }

        if (node.children[0].value.startsWith('[id-4]')) {
          node.tagName = 'p';
          node.properties = {
            id: ['user-content-fnref-4'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?id-4\]/g,
            ''
          );
        }

        if (node.children[0].value.startsWith('[id-5]')) {
          node.tagName = 'p';
          node.properties = {
            id: ['user-content-fnref-5'],
          };
          node.children[0].value = node.children[0].value.replace(
            /\[\/?id-5\]/g,
            ''
          );
        }
      }
    });
  };
};