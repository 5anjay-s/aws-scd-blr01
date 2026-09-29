import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { readQuoteArtwork } from '../src/components/quotePixels.ts';
import { voiceTypingTimings, wrapVoiceLines } from '../src/components/voiceTyping.ts';

test('pixel flicker preserves every original quote path and palette on desktop and mobile', () => {
  for (const file of ['860-5246-42ed8.svg', '860-5246-85f17.svg', '866-8542-c8e08.svg', '866-8542-0b5fe.svg']) {
    const svg = readFileSync(new URL(`../public/assets/${file}`, import.meta.url), 'utf8');
    const artwork = readQuoteArtwork(svg);
    assert.ok(artwork);
    const parts = (path, color) => path.match(/M[^Z]+Z/g).map(part => `${color}:${part}`);
    const original = [...svg.matchAll(/<path\b([^>]+)>/g)].flatMap(([, attrs]) =>
      parts(attrs.match(/\bd="([^"]+)"/)[1], attrs.match(/fill="([^"]+)"/)[1]));
    assert.deepEqual(artwork.fields.flatMap(field => parts(field.path, field.color)).sort(), original.sort());
    const moving = artwork.fields.filter(field => field.band !== undefined);
    assert.ok(moving.length >= 6);
    assert.ok(moving.every(field => ['#22D3EE', '#BEF264'].includes(field.color)));
  }
});

test('typing lines preserve the supplied words and fit narrow columns', () => {
  const text = 'Bring the project you have been putting off. Bring the thing you cannot explain yet.';
  for (const capacity of [12, 18, 24, 30]) {
    const lines = wrapVoiceLines(text, capacity);
    assert.equal(lines.join(' '), text);
    assert.ok(lines.every(line => line.length <= capacity));
  }
});

test('typing pauses at punctuation and holds each complete line before scrolling', () => {
  const timing = voiceTypingTimings('Hi. Go!', 0);
  assert.equal(timing.characters.length, 7);
  assert.equal(timing.characters[0], 0.016);
  assert.ok(Math.abs(timing.characters[3] - timing.characters[2] - 0.07) < 1e-9);
  assert.ok(Math.abs(timing.advanceAt - timing.characters.at(-1) - 0.07) < 1e-9);
  assert.equal(voiceTypingTimings('A', 3).characters[0], 0.025);
  assert.deepEqual(voiceTypingTimings('A', 4), voiceTypingTimings('A', 0));
  assert.ok(voiceTypingTimings('', 0).advanceAt > 0);
});
