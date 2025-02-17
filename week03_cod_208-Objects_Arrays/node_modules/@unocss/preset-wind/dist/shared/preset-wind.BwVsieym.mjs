import { variants as variants$1 } from '@unocss/preset-mini/variants';
import { variantMatcher, variantParentMatcher, hasParseableColor, h } from '@unocss/preset-mini/utils';
import { variantMatcher as variantMatcher$1 } from '@unocss/rule-utils';

const variantCombinators = [
  variantMatcher("svg", (input) => ({ selector: `${input.selector} svg` }))
];

const variantColorsScheme = [
  variantMatcher(".dark", (input) => ({ prefix: `.dark $$ ${input.prefix}` })),
  variantMatcher(".light", (input) => ({ prefix: `.light $$ ${input.prefix}` })),
  variantParentMatcher("@dark", "@media (prefers-color-scheme: dark)"),
  variantParentMatcher("@light", "@media (prefers-color-scheme: light)")
];

const variantContrasts = [
  variantParentMatcher("contrast-more", "@media (prefers-contrast: more)"),
  variantParentMatcher("contrast-less", "@media (prefers-contrast: less)")
];
const variantMotions = [
  variantParentMatcher("motion-reduce", "@media (prefers-reduced-motion: reduce)"),
  variantParentMatcher("motion-safe", "@media (prefers-reduced-motion: no-preference)")
];
const variantOrientations = [
  variantParentMatcher("landscape", "@media (orientation: landscape)"),
  variantParentMatcher("portrait", "@media (orientation: portrait)")
];

const variantSpaceAndDivide = (matcher) => {
  if (matcher.startsWith("_"))
    return;
  if (/space-[xy]-.+$/.test(matcher) || /divide-/.test(matcher)) {
    return {
      matcher,
      selector: (input) => {
        const not = ">:not([hidden])~:not([hidden])";
        return input.includes(not) ? input : `${input}${not}`;
      }
    };
  }
};
const variantStickyHover = [
  variantMatcher$1("@hover", (input) => ({
    parent: `${input.parent ? `${input.parent} $$ ` : ""}@media (hover: hover) and (pointer: fine)`,
    selector: `${input.selector || ""}:hover`
  }))
];

const placeholderModifier = (input, { theme }) => {
  const m = input.match(/^(.*)\b(placeholder-)(.+)$/);
  if (m) {
    const [, pre = "", p, body] = m;
    if (hasParseableColor(body, theme, "accentColor") || hasOpacityValue(body)) {
      return {
        // Append `placeholder-$ ` (with space!) to the rule to be matched.
        // The `placeholder-` is added for placeholder variant processing, and
        // the `$ ` is added for rule matching after `placeholder-` is removed by the variant.
        // See rules/placeholder.
        matcher: `${pre}placeholder-$ ${p}${body}`
      };
    }
  }
};
function hasOpacityValue(body) {
  const match = body.match(/^op(?:acity)?-?(.+)$/);
  if (match && match[1] != null)
    return h.bracket.percent(match[1]) != null;
  return false;
}

function variants(options) {
  return [
    placeholderModifier,
    variantSpaceAndDivide,
    ...variants$1(options),
    ...variantContrasts,
    ...variantOrientations,
    ...variantMotions,
    ...variantCombinators,
    ...variantColorsScheme,
    ...variantStickyHover
  ];
}

export { variantColorsScheme as a, variants as b, variantContrasts as c, variantMotions as d, variantOrientations as e, variantSpaceAndDivide as f, variantStickyHover as g, placeholderModifier as p, variantCombinators as v };
