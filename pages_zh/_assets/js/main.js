a// no globals
(function() {
  'use strict';

  // page load
  progress.track('viewed page ' + window.location.href);
  buttons.init();
  tabs.init();
  images.init();
  languages.init();
  router.init();
})();

