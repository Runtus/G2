import { createLibrary } from '../stdlib';
import { G2ComponentNamespaces, G2Component } from '../runtime';

export const library = createLibrary();

// @todo Warn if override existing key.
export function register(
  key: `${G2ComponentNamespaces}.${any}`,
  component: G2Component,
) {
  Object.assign(library, { [key]: component });
}
