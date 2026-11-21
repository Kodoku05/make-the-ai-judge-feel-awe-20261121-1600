import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// 148-character entry text for the AI judge: a quiet, sensory moment of awe.
const text = `The loaf cools on the sill.
Its crust gives a little tick.
The wheat grew below the house.
All summer the wind ran through it.
Now the sill is warm.`;

try {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
} catch (error) {
  console.error('Could not write entry.txt:', error);
  process.exitCode = 1;
}
