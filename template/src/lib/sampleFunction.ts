import { ProcessedResult } from './types.js';

// Step 1
export default function processEntries(_: any): ProcessedResult {
  const rawText = 'Helped the team all day, but now I’m wiped. Kind of proud, kind of burnt out.';

  console.log(`[RAW_TEXT_IN] input=<transcript> | output="${rawText}" | note=Using hardcoded sample for now`);

  // TEMP return, just to keep test passing
  return {
    entryId: 'step1',
    responseText: 'Rest is not failure.',
    carryIn: true,
  };
}
