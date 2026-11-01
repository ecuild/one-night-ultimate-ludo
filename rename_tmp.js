const fs = require('fs');
const paths = ['web/index.html', 'README.md'];
for (const p of paths) {
  const s = fs.readFileSync(p, 'utf8');
  const before = (s.match(/ludo/gi) || []).length;
  const s2 = s.replace(/ULTIMATE\s+LUDO/gi, 'ULTIMATE AEROCHESS');
  const after = (s2.match(/ludo/gi) || []).length;
  fs.writeFileSync(p, s2);
  console.log(`${p}: replaced ${before - after} (remaining ludo=${after})`);
}
