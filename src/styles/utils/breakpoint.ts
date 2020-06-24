import BREAKPOINTS from '../constants/breakpoints';

/**
 * @param {{
  * xSmall: string,
  * small: string,
  * medium: string,
  * large: string
  * xLarge: string
  * }} BREAKPOINTS
*/
export const breakpoint = (Object.keys(BREAKPOINTS) as Array<keyof typeof BREAKPOINTS>).reduce(
  (acc, key) => {
    acc[key] = (style: String) => `@media (min-width: ${BREAKPOINTS[key]}) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function },
);
