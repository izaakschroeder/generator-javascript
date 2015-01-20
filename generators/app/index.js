'use strict';

var _ = require('lodash'),
	generators = require('yeoman-generator'),
	path = require('path');


function mergeJsonFile() {

}

function mergeIgnoreFile() {
	var existing = this.fs.read(dst) || '';



	_.union(existing.split('\n'), list);
}

function mergeIniFile() {

}

function mergeProcfile() {
	
}

module.exports = generators.Base.extend({

	writing: function() {

		var name = path.basename(this.destinationPath());

		this.fs.copy(
			this.templatePath('.eslintrc'),
			this.destinationPath('.eslintrc')
		);


		var src = this.templatePath('package.json'),
			dst = this.destinationPath('package.json'),
			template = JSON.parse(this.fs.read(src) || '{}'),
			manifest = JSON.parse(this.fs.read(dst) || '{}');

		this.fs.write(
			dst,
			JSON.stringify(_.merge(manifest, template, {
				name: path.basename(this.destinationRoot()),
				description: 'MAH DESCRIPTAH',
				test: _.map(manifest.test, function(name) {
					return 'npm run ' + name;
				}).join('&&'),
			}))
		);
	}
});
