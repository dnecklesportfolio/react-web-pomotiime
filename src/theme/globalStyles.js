import { injectGlobal } from 'styled-components';
import media from './media';

/* eslint-disable */
injectGlobal`
  body {
    margin: 0;
  
    ${media.tablet`
      padding: 0;
    `}
    font-size: 24px;
    
   
  }
 
`;
/* eslint-enable */