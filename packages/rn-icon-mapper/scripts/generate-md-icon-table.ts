#!/usr/bin/env node

import { promises as fs } from 'fs';
import { MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS } from '../src/material-community-icons-to-sf-symbols';
import { MATERIAL_ICONS_TO_SF_SYMBOLS } from '../src/material-icons-to-sf-symbols';

function generateMarkdownTable() {
  // Extract keys and sort them alphabetically
  const sortedKeys = Object.keys({
    ...MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS,
    ...MATERIAL_ICONS_TO_SF_SYMBOLS,
  }).sort();

  // Generate Markdown table header
  let markdownTable = '| Material Community Icon Name | Material Icon Name | SF Symbols Name |\n';
  markdownTable += '| --- | --- | --- |\n';

  // Generate rows for each key
  sortedKeys.forEach((key) => {
    const sfSymbolFromMaterialCommunity = MATERIAL_COMMUNITY_ICONS_TO_SF_SYMBOLS[key];
    if (sfSymbolFromMaterialCommunity) {
      markdownTable += `| ${key} |  | ${sfSymbolFromMaterialCommunity} |\n`;
      return;
    }

    const sfSymbolFromMaterialIcon = MATERIAL_ICONS_TO_SF_SYMBOLS[key];
    if (sfSymbolFromMaterialIcon) {
      markdownTable += `|  | ${key} | ${sfSymbolFromMaterialIcon} |\n`;
    }
  });

  return markdownTable;
}

async function main() {
  try {
    await fs.writeFile('src/__generated/md-icon-table.md', generateMarkdownTable());
  } catch (error) {
    console.error(error);
  }
}

main();
