import { createGlobalStyle } from 'styled-components';

import TYPOGRAPHY from '../../styles/globals/typography';
import RESET from '../../styles/globals/reset';

const globalStyles = `
  ${RESET};
  ${TYPOGRAPHY};
`;

export default createGlobalStyle`
  ${globalStyles}
`;
