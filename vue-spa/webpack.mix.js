let mix = require('laravel-mix');

mix.js('src/js/', 'public/dist/app.js');

// mix.browserSync({
//     proxy: 'nodevue:5000',
//     port: 3000,
//     browser: ["firefox"],
// });
