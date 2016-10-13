var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/assets"
elixir.config.publicPath="public";

elixir(function(mix){
	var nodemodules = "node_modules/";
	var bower = "bower_components/";
	var sourceJs = "src/assets/js/";
	var sourceCss = "src/assets/css/";

	var distFile = "public/";

	mix
		.copy(bower + 'bootstrap/dist/js/bootstrap.min.js', sourceJs + 'bootstrap.min.js')
        .copy(bower + 'jquery/dist/jquery.min.js', sourceJs + 'jquery.min.js')

        // css
        .copy(bower + 'bootstrap/dist/css/bootstrap.min.css', sourceCss + 'bootstrap.min.css')
        .copy(bower + 'font-awesome/css/font-awesome.min.css', sourceCss + 'font-awesome.min.css')
        .copy(nodemodules + 'react-select/dist/react-select.min.css', sourceCss + 'react-select.min.css')
        .copy(nodemodules + 'react-s-alert/dist/s-alert-default.css', sourceCss + 's-alert-default.css')
        .copy(nodemodules + 'react-s-alert/dist/s-alert-css-effects/slide.css', sourceCss + 's-alert-slide.css')

        .copy(bower + 'font-awesome/fonts', distFile + '/fonts')
        .copy(bower + 'bootstrap/fonts', distFile + '/fonts')

        .scripts([
            'jquery.min.js',
            'bootstrap.min.js'
    	],'public/js/common.min.js')

		.styles([
			'bootstrap.min.css',
            'font-awesome.min.css',
            'style.css',
            'animate.css',            
            'react-select.min.css',
            's-alert-default.css',
            's-alert-slide.css'
		],'public/css/common.min.css')
})