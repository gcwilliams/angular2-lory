(function(global) {
  
  var map = {
    'app':                        'dist/',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs',
    'lory':                       'bower_components/lory/dist/lory.js'
  };
  
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };
  
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade'
  ];
  
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });
  
  var config = {
    map: map,
    packages: packages
  };
  
  System.config(config);
  
})(this);

