import fs from 'node:fs';
import { glob } from 'node:fs/promises';
import path from 'node:path';
import { args, banner, minify, read, renderLess, write } from './util.js';

const develop = args.develop || args.debug || args.d || args.nominify;
const sources = [
    { src: 'src/less/uikit.less', dist: 'dist/css/uikit-core.css' },
    { src: 'src/less/uikit.theme.less', dist: 'dist/css/uikit.css' },
];

const themes = fs.existsSync('themes.json') ? JSON.parse(await read('themes.json')) : {};

for await (const src of glob('custom/*.less')) {
    const theme = path.basename(src, '.less');
    const dist = `dist/css/uikit.${theme}.css`;

    themes[theme] = { css: `../${dist}` };

    if (fs.existsSync(`dist/js/uikit-icons-${theme}.js`)) {
        themes[theme].icons = `../dist/js/uikit-icons-${theme}.js`;
    }

    sources.push({ src, dist });
}

await Promise.all(sources.map(({ src, dist }) => compile(src, dist, develop)));

if ((Object.keys(themes).length || !fs.existsSync('themes.json'))) {
    await write('themes.json', JSON.stringify(themes));
}

async function compile(file, dist, develop) {
    const less = await read(file);

    const output = (
        await renderLess(less, {
            rewriteUrls: 'all',
            rootpath: '../../',
            paths: ['src/less/', 'custom/'],
        })
    ).replace(/\.\.\/dist\//g, '');

    await write(dist, banner + output);

    if (!develop) {
        await minify(dist);
    }
}
