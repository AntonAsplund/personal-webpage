/**
 * Cookie based feature toggles. A feature is enabled when its cookie is set to "true",
 * e.g. by running `document.cookie = "feature_portfolio=true; path=/"` in the browser console.
 */
export const FEATURE_TOGGLES = {
  PORTFOLIO: 'feature_portfolio',
} as const;

export type FeatureToggle = typeof FEATURE_TOGGLES[keyof typeof FEATURE_TOGGLES];

export const isFeatureEnabled = (feature: FeatureToggle): boolean =>
  document.cookie
    .split(';')
    .some((cookie) => cookie.trim() === `${feature}=true`);
