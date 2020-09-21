import React from 'react';
import Layout from './src/components/Layout';

// webpage element hook to apply Layout on all pages
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
