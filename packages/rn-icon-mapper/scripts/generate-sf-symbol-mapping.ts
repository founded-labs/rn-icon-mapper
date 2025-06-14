#!/usr/bin/env node

import { promises as fs } from 'fs';
import { MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS } from '../src/material-community-icons-to-sf-symbols';
import { MATERIAL_ICONS_TO_SF_SYMBOLS } from '../src/material-icons-to-sf-symbols';

async function main() {
  const SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS = {};

  for (const key in MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS) {
    SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS[
      MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS[
        key as keyof typeof MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS
      ]
    ] = key as keyof typeof MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS;
  }

  const SF_SYMBOLS_TO_MATERIAL_ICONS = {};

  for (const key in MATERIAL_ICONS_TO_SF_SYMBOLS) {
    SF_SYMBOLS_TO_MATERIAL_ICONS[
      MATERIAL_ICONS_TO_SF_SYMBOLS[key as keyof typeof MATERIAL_ICONS_TO_SF_SYMBOLS]
    ] = key as keyof typeof MATERIAL_ICONS_TO_SF_SYMBOLS;
  }

  try {
    await fs.writeFile(
      'src/__generated/sf-symbols-to-material-community-icons.ts',
      `export const SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS = ${JSON.stringify(
        SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS,
        null,
        2
      )} as const\n`
    );
    await fs.writeFile(
      'src/__generated/sf-symbols-to-material-icons.ts',
      `export const SF_SYMBOLS_TO_MATERIAL_ICONS = ${JSON.stringify(
        SF_SYMBOLS_TO_MATERIAL_ICONS,
        null,
        2
      )} as const\n`
    );
  } catch (error) {
    console.error(error);
  }
}

main();
