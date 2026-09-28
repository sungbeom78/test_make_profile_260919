// src/template.html 을 site/profile_claude/index.html 번들의 __bundler/template 블록에 다시 넣는다.
// 이미지·폰트·런타임 등 리소스(manifest)는 기존 번들 것을 그대로 사용한다.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const bundlePath = path.join(root, 'site/profile_claude/index.html');
const templatePath = path.join(root, 'src/template.html');

const bundle = fs.readFileSync(bundlePath, 'utf8');
const template = fs.readFileSync(templatePath, 'utf8');

const open = '<script type="__bundler/template">';
const start = bundle.indexOf(open);
if (start < 0) throw new Error('template block not found');
const bodyStart = start + open.length;
const end = bundle.indexOf('</script>', bodyStart);

// '</' 와 '<!--' 가 <script> 블록을 끊지 않도록 '<' 를 JSON 유니코드 이스케이프로 바꾼다.
const LT = String.fromCharCode(92) + 'u003c';
const encoded = JSON.stringify(template)
  .replace(/<\//g, LT + '/')
  .replace(/<!--/g, LT + '!--');

const out = bundle.slice(0, bodyStart) + '\n' + encoded + '\n  ' + bundle.slice(end);
fs.writeFileSync(bundlePath, out);
console.log('built', path.relative(root, bundlePath), out.length, 'bytes');
