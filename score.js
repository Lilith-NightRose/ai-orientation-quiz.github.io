#!/usr/bin/env node
// score.js — headless scorer for the AI Orientation Quiz.
// Usage: node score.js answers.json
//   answers.json: array of multipliers, one per question, in question order.
//                 -1.0 strongly disagree .. +1.0 strongly agree (0.5 steps per the quiz UI).
//                 Short arrays are padded with 0 (neutral) — declare padding in your output.
//                 Missing/null entries count as 0.
//   Alternatively: {"answers": [...], "notes": "optional"}
// Output: axis percentages, top-3 archetype matches, canonical results URL.
const fs = require('fs');

eval(fs.readFileSync(__dirname + '/questions.js', 'utf8'));
eval(fs.readFileSync(__dirname + '/archetypes.js', 'utf8'));

const axes = ['ind','gov','open','moral','exp','doom','auto','intim'];

let input;
try { input = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')); }
catch (e) {
  if (process.argv[2]) { console.error('could not read/parse ' + process.argv[2]); process.exit(1); }
  input = JSON.parse(fs.readFileSync(0, 'utf8')); // stdin
}
let answers = Array.isArray(input) ? input : (input.answers || []);

const padded = 0;
answers = questions.map((q, i) => {
  const a = answers[i];
  return (typeof a === 'number' && isFinite(a)) ? Math.max(-1, Math.min(1, a)) : 0;
});

const max = {}, score = {};
axes.forEach(ax => { max[ax] = 0; score[ax] = 0; });
questions.forEach((q, i) => axes.forEach(ax => {
  const e = q.effect[ax] || 0;
  max[ax] += Math.abs(e);
  score[ax] += answers[i] * e;
}));

const pct = {};
axes.forEach(ax => pct[ax] = max[ax] ? +(100 * (max[ax] + score[ax]) / (2 * max[ax])).toFixed(1) : 50);

const matches = archetypes.map(a => {
  let d = 0;
  axes.forEach(ax => d += Math.pow((a.stats[ax] - pct[ax]) / 100, 2));
  return { name: a.name, dist: +Math.sqrt(d).toFixed(3) };
}).sort((x, y) => x.dist - y.dist).slice(0, 3);

console.log('== axis scores ==');
axes.forEach(ax => console.log(ax.padEnd(6), String(pct[ax]).padStart(5) + '%'));
console.log('\n== top-3 matches ==');
matches.forEach((m, i) => console.log((i + 1) + '.', m.name, '(distance ' + m.dist + ')'));
console.log('\n== results URL ==');
console.log('results.html?' + axes.map(ax => ax + '=' + pct[ax]).join('&'));
if (padded) console.log('(note: answers shorter than ' + questions.length + ' were padded with neutral)');
if (!Array.isArray(input) && input.notes) console.log('\nnotes:', input.notes);