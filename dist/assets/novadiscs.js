'use strict';



;define("novadiscs/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("novadiscs/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "novadiscs/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"novadiscs/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("novadiscs/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("novadiscs/components/jumbo", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="jumbo">
    <div class="right tomster"></div>
    {{yield}}
  </div>
  
  */
  {
    "id": "k5fnhD/X",
    "block": "[[[10,0],[14,0,\"jumbo\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"right tomster\"],[12],[13],[1,\"\\n  \"],[18,1,null],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "novadiscs/components/jumbo.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("novadiscs/components/nav-bar", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav class="menu">
    <LinkTo @route="index" class="menu-index">
      <h1>NovaDiscs</h1>
    </LinkTo>
  
    <!-- <div class="links"> -->
  
      <!-- <LinkTo @route="scorecard" class="menu-contact">
        Putting League Scorecard
      </LinkTo> -->
  
      <!-- <LinkTo @route="about" class="menu-about">
        About
      </LinkTo>
  
      <LinkTo @route="contact" class="menu-contact">
        Contact
      </LinkTo> -->
  
    <!-- </div> -->
  </nav>
  
  */
  {
    "id": "HX3u0hVH",
    "block": "[[[10,\"nav\"],[14,0,\"menu\"],[12],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"NovaDiscs\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[3,\" <div class=\\\"links\\\"> \"],[1,\"\\n\\n    \"],[3,\" <LinkTo @route=\\\"scorecard\\\" class=\\\"menu-contact\\\">\\n      Putting League Scorecard\\n    </LinkTo> \"],[1,\"\\n\\n    \"],[3,\" <LinkTo @route=\\\"about\\\" class=\\\"menu-about\\\">\\n      About\\n    </LinkTo>\\n\\n    <LinkTo @route=\\\"contact\\\" class=\\\"menu-contact\\\">\\n      Contact\\n    </LinkTo> \"],[1,\"\\n\\n  \"],[3,\" </div> \"],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\"]]",
    "moduleName": "novadiscs/components/nav-bar.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("novadiscs/components/puttingleaguescoresheet", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <body>
  
  <div class="Total">
    <label for="playerName">Player Name: </label>
    <input type="text" name="playerName" id="playerName" placeholder="Name"/>
  </div>
  
  <table class="puttingleaguescoresheet">
    <tr>
      <th></th>
      <th> 10 Feet </th>
      <th> 15 Feet </th>
      <th> 20 Feet </th>
      <th> 25 Feet </th>
      <th> 30 Feet </th>
    </tr>
    <tr>
      <td>1st Putt</td>
      <td><input type="checkbox" id="10feet1attempt" name="attemptBox" onclick="totalIt()" value=1></td>
      <td><input type="checkbox" id="10feet2attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="10feet3attempt" name="attemptBox" onclick="totalIt()" value=3></td>
      <td><input type="checkbox" id="10feet4attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="10feet5attempt" name="attemptBox" onclick="totalIt()" value=5></td>
    </tr>
    <tr>
      <td>2nd Putt</td>
      <td><input type="checkbox" id="15feet1attempt" name="attemptBox" onclick="totalIt()" value=1></td>
      <td><input type="checkbox" id="15feet2attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="15feet3attempt" name="attemptBox" onclick="totalIt()" value=3></td>
      <td><input type="checkbox" id="15feet4attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="15feet5attempt" name="attemptBox" onclick="totalIt()" value=5></td>
    </tr>
    <tr>
      <td>3rd Putt</td>
      <td><input type="checkbox" id="20feet1attempt" name="attemptBox" onclick="totalIt()" value=1></td>
      <td><input type="checkbox" id="20feet2attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="20feet3attempt" name="attemptBox" onclick="totalIt()" value=3></td>
      <td><input type="checkbox" id="20feet4attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="20feet5attempt" name="attemptBox" onclick="totalIt()" value=5></td>
    </tr>
    <tr>
      <td>4th Putt</td>
      <td><input type="checkbox" id="25feet1attempt" name="attemptBox" onclick="totalIt()" value=1></td>
      <td><input type="checkbox" id="25feet2attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="25feet3attempt" name="attemptBox" onclick="totalIt()" value=3></td>
      <td><input type="checkbox" id="25feet4attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="25feet5attempt" name="attemptBox" onclick="totalIt()" value=5></td>
    </tr>
    <tr>
      <td>5th Putt</td>
      <td><input type="checkbox" id="30feet1attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="30feet2attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="30feet3attempt" name="attemptBox" onclick="totalIt()" value=6></td>
      <td><input type="checkbox" id="30feet4attempt" name="attemptBox" onclick="totalIt()" value=8></td>
      <td><input type="checkbox" id="30feet5attempt" name="attemptBox" onclick="totalIt()" value=10></td>
    </tr>
  </table>
  
    <div class="Total">
      <span>Total Score: </span>
      <h4 style="color:green" id="result">0</h4>
    </div>
  
    <div class="finalButtons">
      <button class="button" onClick="clearAll()" style="background: #db2b14;   margin-right: 30px; margin-bottom: 10px;">Clear All</button>
      <button class="button" onClick="submit()" style="margin-bottom: 10px;">Submit</button>
    </div>
  
  </body>
  
  <script type="text/javascript">
      function totalIt() {
          var input = document.getElementsByName("attemptBox");
          var total = 0;
          for (var i = 0; i < input.length; i++) {
            if (input[i].checked) {
              total += parseFloat(input[i].value);
            }
          }
          document.getElementById("result").innerHTML = total;
      }
  
      function clearAll() {
          if (confirm("Are you sure you want to clear all checkboxes?")) {
              var boxes = document.getElementsByName("attemptBox");
              for (var i = 0; i < boxes.length; i++) {
                  boxes[i].checked = false;
              }
              document.getElementById("result").innerHTML = 0;
          }
      }
  
      function submit() {
          var name = document.getElementById("playerName").value
          var total = document.getElementById("result").innerHTML
  
          if (name == "") {
              alert("Name cannot be left blank.")
          }
          else if (confirm("Submit a score of " + total + " for " + name + "?")){
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();
  
              resp = "Total score for " + name + " on " + mm + "\\" + dd + "\\" + yyyy + ": " + total
              window.location = "mailto:novadiscsscorecards@gmail.com?subject=Putting League Results&body=" + resp;
          }
      }
  </script>
  
  */
  {
    "id": "5NZdHS7E",
    "block": "[[[1,\"\\n\"],[10,\"body\"],[12],[1,\"\\n\\n\"],[10,0],[14,0,\"Total\"],[12],[1,\"\\n  \"],[10,\"label\"],[14,\"for\",\"playerName\"],[12],[1,\"Player Name: \"],[13],[1,\"\\n  \"],[10,\"input\"],[14,3,\"playerName\"],[14,1,\"playerName\"],[14,\"placeholder\",\"Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,\"table\"],[14,0,\"puttingleaguescoresheet\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 10 Feet \"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 15 Feet \"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 20 Feet \"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 25 Feet \"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 30 Feet \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"1st Putt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"2nd Putt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"3rd Putt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"4th Putt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"5th Putt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"6\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"8\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"10\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"Total\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"Total Score: \"],[13],[1,\"\\n    \"],[10,\"h4\"],[14,5,\"color:green\"],[14,1,\"result\"],[12],[1,\"0\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"finalButtons\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,0,\"button\"],[14,\"onClick\",\"clearAll()\"],[14,5,\"background: #db2b14;   margin-right: 30px; margin-bottom: 10px;\"],[12],[1,\"Clear All\"],[13],[1,\"\\n    \"],[10,\"button\"],[14,0,\"button\"],[14,\"onClick\",\"submit()\"],[14,5,\"margin-bottom: 10px;\"],[12],[1,\"Submit\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[10,\"script\"],[14,4,\"text/javascript\"],[12],[1,\"\\n    function totalIt() {\\n        var input = document.getElementsByName(\\\"attemptBox\\\");\\n        var total = 0;\\n        for (var i = 0; i < input.length; i++) {\\n          if (input[i].checked) {\\n            total += parseFloat(input[i].value);\\n          }\\n        }\\n        document.getElementById(\\\"result\\\").innerHTML = total;\\n    }\\n\\n    function clearAll() {\\n        if (confirm(\\\"Are you sure you want to clear all checkboxes?\\\")) {\\n            var boxes = document.getElementsByName(\\\"attemptBox\\\");\\n            for (var i = 0; i < boxes.length; i++) {\\n                boxes[i].checked = false;\\n            }\\n            document.getElementById(\\\"result\\\").innerHTML = 0;\\n        }\\n    }\\n\\n    function submit() {\\n        var name = document.getElementById(\\\"playerName\\\").value\\n        var total = document.getElementById(\\\"result\\\").innerHTML\\n\\n        if (name == \\\"\\\") {\\n            alert(\\\"Name cannot be left blank.\\\")\\n        }\\n        else if (confirm(\\\"Submit a score of \\\" + total + \\\" for \\\" + name + \\\"?\\\")){\\n            var today = new Date();\\n            var dd = String(today.getDate()).padStart(2, '0');\\n            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\\n            var yyyy = today.getFullYear();\\n\\n            resp = \\\"Total score for \\\" + name + \\\" on \\\" + mm + \\\"\\\\\\\\\\\" + dd + \\\"\\\\\\\\\\\" + yyyy + \\\": \\\" + total\\n            window.location = \\\"mailto:novadiscsscorecards@gmail.com?subject=Putting League Results&body=\\\" + resp;\\n        }\\n    }\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "novadiscs/components/puttingleaguescoresheet.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("novadiscs/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("novadiscs/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("novadiscs/helpers/app-version", ["exports", "@ember/component/helper", "novadiscs/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"novadiscs/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("novadiscs/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("novadiscs/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("novadiscs/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("novadiscs/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "novadiscs/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"novadiscs/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("novadiscs/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("novadiscs/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("novadiscs/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("novadiscs/initializers/export-application-global", ["exports", "ember", "novadiscs/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"novadiscs/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("novadiscs/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("novadiscs/router", ["exports", "@ember/routing/router", "novadiscs/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"novadiscs/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('scorecard'); // this.route('about');
    // this.route('contact', { path: '/getting-in-touch' });
  });
});
;define("novadiscs/routes/scientists", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class ScientistsRoute extends _route.default {
    model() {
      return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    }

  }

  _exports.default = ScientistsRoute;
});
;define("novadiscs/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("novadiscs/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("novadiscs/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("novadiscs/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("novadiscs/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("novadiscs/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("novadiscs/templates/about", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "To3qXbbv",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"About Super Rentals\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    The Super Rentals website is a delightful project created to explore Ember.\\n    By building a property rental site, we can simultaneously imagine traveling\\n    AND building Ember applications.\\n  \"],[13],[1,\"\\n  \"],[8,[39,1],[[24,0,\"button\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact Us\"]],[]]]]],[1,\"\\n\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"jumbo\",\"link-to\"]]",
    "moduleName": "novadiscs/templates/about.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("novadiscs/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "Gyfx6JJN",
    "block": "[[[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[8,[39,0],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"body\"],[12],[1,\"\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"nav-bar\",\"component\",\"-outlet\"]]",
    "moduleName": "novadiscs/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("novadiscs/templates/contact", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "W9Nl7JYM",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"Contact Us\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    Super Rentals Representatives would love to help you\"],[10,\"br\"],[12],[13],[1,\"\\n    choose a destination or answer any questions you may have.\\n  \"],[13],[1,\"\\n  \"],[10,\"address\"],[12],[1,\"\\n    Super Rentals HQ\\n    \"],[10,2],[12],[1,\"\\n      1212 Test Address Avenue\"],[10,\"br\"],[12],[13],[1,\"\\n      Testington, OR 97233\\n    \"],[13],[1,\"\\n    \"],[10,3],[14,6,\"tel:503.555.1212\"],[12],[1,\"+1 (503) 555-1212\"],[13],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,3],[14,6,\"mailto:superrentalsrep@emberjs.com\"],[12],[1,\"superrentalsrep@emberjs.com\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[39,1],[[24,0,\"button\"]],[[\"@route\"],[\"about\"]],[[\"default\"],[[[[1,\"About\"]],[]]]]],[1,\"\\n\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"jumbo\",\"link-to\"]]",
    "moduleName": "novadiscs/templates/contact.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("novadiscs/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "vsUsCyR1",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"NovaDiscs Putting League!\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"This site is currently a beta. Nothing is guarunteed. Leaving the site may cause you to lose any results in the scorecard.\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"When submitting a scorecard you will be prompted to send an email. Please do not change the message body or 'To' field\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"If you are unable to submit a scorecard, take a screenshot and send it to Chris or email it to novadiscsscorecards@gmail.com\"],[13],[1,\"\\n  \"],[3,\" <LinkTo @route=\\\"about\\\" class=\\\"button\\\">About Us</LinkTo> \"],[1,\"\\n  \"],[8,[39,1],[[24,0,\"button\"]],[[\"@route\"],[\"scorecard\"]],[[\"default\"],[[[[1,\"Scorecard\"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"jumbo\",\"link-to\"]]",
    "moduleName": "novadiscs/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("novadiscs/templates/scorecard", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "VOFCXj2Q",
    "block": "[[[8,[39,0],null,null,null],[1,\"\\n\\n\\n\"],[3,\" <EmberTable as |t|>\\n  <t.head @columns={{Scoresheet.columns}} />\\n\\n  <t.body @rows={{Scoresheet.rows}} />\\n</EmberTable> \"],[1,\"\\n\\n\"],[3,\" <article class=\\\"puttingleaguescoresheet\\\">\\n  <div class=\\\"details\\\">\\n    <h3>Grand Old Mansion</h3>\\n    <div class=\\\"detail owner\\\">\\n      <span>Owner:</span> Veruca Salt\\n    </div>\\n    <div class=\\\"detail type\\\">\\n      <span>Type:</span> Standalone\\n    </div>\\n    <div class=\\\"detail location\\\">\\n      <span>Location:</span> San Francisco\\n    </div>\\n    <div class=\\\"detail bedrooms\\\">\\n      <span>Number of bedrooms:</span> 15\\n    </div>\\n  </div>\\n</article> \"],[1,\"\\n\"]],[],false,[\"puttingleaguescoresheet\"]]",
    "moduleName": "novadiscs/templates/scorecard.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("novadiscs/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("novadiscs/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("novadiscs/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("novadiscs/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('novadiscs/config/environment', [], function() {
  var prefix = 'novadiscs';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("novadiscs/app")["default"].create({"name":"novadiscs","version":"0.0.0+7843b164"});
          }
        
//# sourceMappingURL=novadiscs.map
