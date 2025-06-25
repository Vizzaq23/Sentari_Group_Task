import { VoiceEntry, ProcessedResult } from './types.js'

export function processEntries(entries: VoiceEntry[]): ProcessedResult {
  const INTENTION_PATTERNS = [
    /i need to ([a-zA-Z\s]+)\b/i,
    /i'm going to ([a-zA-Z\s]+)\b/i,
    /i hope to ([a-zA-Z\s]+)\b/i,
    /my goal is to ([a-zA-Z\s]+)\b/i,
    /i plan to ([a-zA-Z\s]+)\b/i,
  ]

  const tagFrequencies: Record<string, number> = {}
  const wordFrequencies: Record<string, number> = {}
  const detectedIntentions: string[] = []

  for (const entry of entries) {
    // Count user tags
    for (const tag of entry.tags_user) {
      tagFrequencies[tag] = (tagFrequencies[tag] || 0) + 1
    }

    // Use user-edited transcript
    const text = entry.transcript_user.toLowerCase()
    const words = text.match(/\b\w+\b/g) || []
    for (const word of words) {
      wordFrequencies[word] = (wordFrequencies[word] || 0) + 1
    }

    // Detect goals/intentions
    for (const pattern of INTENTION_PATTERNS) {
      const match = text.match(pattern)
      if (match && match[1]) {
        const cleaned = match[1].trim().replace(/\.$/, '')
        detectedIntentions.push(cleaned)
      }
    }
  }

  return {
    summary: `Analysed ${entries.length} entries`,
    tagFrequencies,
    wordFrequencies,
    detectedIntentions,
  }
}
