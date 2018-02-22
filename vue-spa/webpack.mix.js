let mix = require('laravel-mix');

mix.options({
   extractVueStyles: true,
});

mix.js('src/js/', 'public/dist/app.js')
   .copy('./vue-styles.css', './public/dist/vue-styles.css');



// mix.browserSync({
//     proxy: 'nodevue:5000',
//     port: 3000,
//     browser: ["firefox"],
// });
