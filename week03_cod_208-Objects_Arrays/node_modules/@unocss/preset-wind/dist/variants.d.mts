import { Variant, VariantFunction } from '@unocss/core';
export { variants } from './index.mjs';
import '@unocss/preset-mini';
import './shortcuts.mjs';
import './theme.mjs';
import './shared/preset-wind.DRADYSMV.mjs';

declare const variantCombinators: Variant[];

declare const variantColorsScheme: Variant[];

declare const variantContrasts: Variant[];
declare const variantMotions: Variant[];
declare const variantOrientations: Variant[];

declare const variantSpaceAndDivide: Variant;
declare const variantStickyHover: Variant[];

declare const placeholderModifier: VariantFunction;

export { placeholderModifier, variantColorsScheme, variantCombinators, variantContrasts, variantMotions, variantOrientations, variantSpaceAndDivide, variantStickyHover };
