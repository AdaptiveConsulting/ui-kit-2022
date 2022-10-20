import {
  identifier,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  jsxSpreadAttribute,
} from '@babel/types';

const template = ({ imports, componentName, jsx, exports, interfaces }, { tpl }) => {
  const wrappedJsx = jsxElement(
    jsxOpeningElement(jsxIdentifier('SvgIcon'), [
      ...jsx.openingElement.attributes,
      jsxSpreadAttribute(identifier('props')),
    ]),
    jsxClosingElement(jsxIdentifier('SvgIcon')),
    jsx.children,
    false,
  );

  return tpl`
    ${imports};
    import { SvgIcon } from '@mui/material';

    ${interfaces};

    const ${componentName} = (props) => (
      ${wrappedJsx}
    );

    ${exports};
  `;
};

export default template;
