import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 1024
});

export const OnMobile = layout.is('mobile');
export const OnAtLeastTablet = layout.isAtLeast('tablet');
export const OnAtMostPhablet = layout.isAtMost('phablet');
export const OnDesktop = layout.is('desktop');