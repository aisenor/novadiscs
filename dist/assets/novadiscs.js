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
  
    <div class="links">
  
      <LinkTo @route="scorecard" class="menu-contact">
        Putting League Scorecard
      </LinkTo>
  
      <!-- <LinkTo @route="about" class="menu-about">
        About
      </LinkTo>
  
      <LinkTo @route="contact" class="menu-contact">
        Contact
      </LinkTo> -->
  
    </div>
  </nav>
  
  */
  {
    "id": "N75MUv+S",
    "block": "[[[10,\"nav\"],[14,0,\"menu\"],[12],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"NovaDiscs\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[10,0],[14,0,\"links\"],[12],[1,\"\\n\\n    \"],[8,[39,0],[[24,0,\"menu-contact\"]],[[\"@route\"],[\"scorecard\"]],[[\"default\"],[[[[1,\"\\n      Putting League Scorecard\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[3,\" <LinkTo @route=\\\"about\\\" class=\\\"menu-about\\\">\\n      About\\n    </LinkTo>\\n\\n    <LinkTo @route=\\\"contact\\\" class=\\\"menu-contact\\\">\\n      Contact\\n    </LinkTo> \"],[1,\"\\n\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\"]]",
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
    <!-- {{sendmail}} -->
  <!-- <sendmail /> -->
  <!-- Sample HTML Form -->
  <!-- <form method="post" action="sendmail.php">
  <textarea name="message"></textarea>
  <input type="submit">
  </form> -->
  
  <body>
    <label for="playerName">Player Name: </label>
    <input type="text" name="playerName" id="playerName" placeholder="Name"/>
  
  <table class="puttingleaguescoresheet">
    <tr>
      <th>Attempts</th>
      <th> 10 Feet </th>
      <th> 15 Feet </th>
      <th> 20 Feet </th>
      <th> 25 Feet </th>
      <th> 30 Feet </th>
    </tr>
    <tr>
      <td>1st Attempt</td>
      <td><input type="checkbox" id="10feet1attempt" name="attemptBox" onclick="totalIt()" value=1></td>
      <td><input type="checkbox" id="10feet2attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="10feet3attempt" name="attemptBox" onclick="totalIt()" value=3></td>
      <td><input type="checkbox" id="10feet4attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="10feet5attempt" name="attemptBox" onclick="totalIt()" value=5></td>
    </tr>
    <tr>
      <td>2nd Attempt</td>
      <td><input type="checkbox" id="15feet1attempt" name="attemptBox" onclick="totalIt()" value=1></td>
      <td><input type="checkbox" id="15feet2attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="15feet3attempt" name="attemptBox" onclick="totalIt()" value=3></td>
      <td><input type="checkbox" id="15feet4attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="15feet5attempt" name="attemptBox" onclick="totalIt()" value=5></td>
    </tr>
    <tr>
      <td>3rd Attempt</td>
      <td><input type="checkbox" id="20feet1attempt" name="attemptBox" onclick="totalIt()" value=1></td>
      <td><input type="checkbox" id="20feet2attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="20feet3attempt" name="attemptBox" onclick="totalIt()" value=3></td>
      <td><input type="checkbox" id="20feet4attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="20feet5attempt" name="attemptBox" onclick="totalIt()" value=5></td>
    </tr>
    <tr>
      <td>4th Attempt</td>
      <td><input type="checkbox" id="25feet1attempt" name="attemptBox" onclick="totalIt()" value=1></td>
      <td><input type="checkbox" id="25feet2attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="25feet3attempt" name="attemptBox" onclick="totalIt()" value=3></td>
      <td><input type="checkbox" id="25feet4attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="25feet5attempt" name="attemptBox" onclick="totalIt()" value=5></td>
    </tr>
    <tr>
      <td>5th Attempt</td>
      <td><input type="checkbox" id="30feet1attempt" name="attemptBox" onclick="totalIt()" value=2></td>
      <td><input type="checkbox" id="30feet2attempt" name="attemptBox" onclick="totalIt()" value=4></td>
      <td><input type="checkbox" id="30feet3attempt" name="attemptBox" onclick="totalIt()" value=6></td>
      <td><input type="checkbox" id="30feet4attempt" name="attemptBox" onclick="totalIt()" value=8></td>
      <td><input type="checkbox" id="30feet5attempt" name="attemptBox" onclick="totalIt()" value=10></td>
    </tr>
  </table>
  
  <!-- <html>
  <body>
  
  <h2 style="color:green"> Get all marked checkboxes value </h2>
  <h4> Select the programming language, you know </h4>
  <tr>
  <td> Java: <input type="checkbox" id="check1" name="pl" value="Java"> </td>
  <td> PHP: <input type="checkbox" id="check2" name="pl" value="PHP"> </td>
  </tr> <tr>
  <td> Angular: <input type="checkbox" id="check3" name="pl" value="Angular"> </td>
  <td> CSS: <input type="checkbox" id="check4" name="pl" value="CSS"> </td>
  </tr> <tr>
  <td> Python: <input type="checkbox" id="check5" name="pl" value="Python"> </td>
  <td> Android: <input type="checkbox" id="check6" name="pl" value="Android"> </td> <br> <br>
  <button id="btn">Submit</button> <br>
  <h4 style="color:green" id="result"></h4>
  
  <script>
  document.getElementById('btn').onclick = function() {
    var markedCheckbox = document.getElementsByName('pl');
    for (var checkbox of markedCheckbox) {
      if (checkbox.checked)
        document.body.append(checkbox.value + ' ');
    }
  }
  </script>
  
  </body>
  </html> -->
  
  
    <div class="Total">
      <span>Total Score: </span>
      <h4 style="color:green" id="result">0</h4>
    </div>
  
    <button class="button" onClick="clearAll()" style="background: #db2b14;">Clear All</button>
    <button class="button" onClick="submit()" >Submit</button>
  
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
          alert("Total score for " + name + ": " + total)
      }
  
  
    // function checkCheckbox() {
    //   var attemptsFrom10Feet = document.getElementsByName("10feet");
    //   print(attemptsFrom10Feet.value())
      // var no = document.getElementById("myCheck2");
      // if (yes.checked == true && no.checked == true){
      //   return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";
      // }
      // else if (yes.checked == true){
      //   var y = document.getElementById("myCheck1").value;
      //   return document.getElementById("result").innerHTML = y;
      // }
      // else if (no.checked == true){
      //   var n = document.getElementById("myCheck2").value;
      //   return document.getElementById("result").innerHTML = n;
      // }
      // else {
      //   return document.getElementById("error").innerHTML = "*Please mark any of checkbox";
      // }
    // }
  </script>
  <!-- <button onclick={{route-action 'refresh'}}>Refresh Score</button> -->
  
  <!-- <label for="total">Total Score</label> -->
  
  <!-- <EmberTable as |t|>
    <t.head @columns={{Scoresheet.columns}} />
  
    <t.body @rows={{Scoresheet.rows}} />
  </EmberTable> -->
  
  <!--
  
  <table>
    <tr>
      <th>Attempts</th>
      <th>1st Attempt</th>
      <th>2nd Attempt</th>
      <th>3rd Attempt</th>
      <th>4th Attempt</th>
      <th>5th Attempt</th>
    </tr>
    <tr>
      <td>10 Feet</td>
      <td><input type="checkbox" id="10feet1attempt" name="10feet" value=1></td>
      <td><input type="checkbox" id="10feet2attempt" name="10feet" value=1></td>
      <td><input type="checkbox" id="10feet3attempt" name="10feet" value=1></td>
      <td><input type="checkbox" id="10feet4attempt" name="10feet" value=1></td>
      <td><input type="checkbox" id="10feet5attempt" name="10feet" value=2></td>
    </tr>
    <tr>
      <td>15 Feet</td>
      <td><input type="checkbox" id="15feet1attempt" name="15feet1attempt" value=2></td>
      <td><input type="checkbox" id="15feet2attempt" name="15feet2attempt" value=2></td>
      <td><input type="checkbox" id="15feet3attempt" name="15feet3attempt" value=2></td>
      <td><input type="checkbox" id="15feet4attempt" name="15feet4attempt" value=2></td>
      <td><input type="checkbox" id="15feet5attempt" name="15feet5attempt" value=4></td>
    </tr>
    <tr>
      <td>20 Feet</td>
      <td><input type="checkbox" id="20feet1attempt" name="20feet1attempt" value=3></td>
      <td><input type="checkbox" id="20feet2attempt" name="20feet2attempt" value=3></td>
      <td><input type="checkbox" id="20feet3attempt" name="20feet3attempt" value=3></td>
      <td><input type="checkbox" id="20feet4attempt" name="20feet4attempt" value=3></td>
      <td><input type="checkbox" id="20feet5attempt" name="20feet5attempt" value=6></td>
    </tr>
    <tr>
      <td>25 Feet</td>
      <td><input type="checkbox" id="25feet1attempt" name="25feet1attempt" value=4></td>
      <td><input type="checkbox" id="25feet2attempt" name="25feet2attempt" value=4></td>
      <td><input type="checkbox" id="25feet3attempt" name="25feet3attempt" value=4></td>
      <td><input type="checkbox" id="25feet4attempt" name="25feet4attempt" value=4></td>
      <td><input type="checkbox" id="25feet5attempt" name="25feet5attempt" value=8></td>
    </tr>
    <tr>
      <td>30 Feet</td>
      <td><input type="checkbox" id="30feet1attempt" name="30feet1attempt" value=5></td>
      <td><input type="checkbox" id="30feet2attempt" name="30feet2attempt" value=5></td>
      <td><input type="checkbox" id="30feet3attempt" name="30feet3attempt" value=5></td>
      <td><input type="checkbox" id="30feet4attempt" name="30feet4attempt" value=5></td>
      <td><input type="checkbox" id="30feet5attempt" name="30feet5attempt" value=10></td>
    </tr>
    <tr>
      <td>Total Score</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table> -->
  
  <!-- var checkboxes = document.getElementsByName('10feet');
  var sum = 0;
  checkboxes.forEach(function(checkbox){
    if (checkbox.checked) {
      sum += checkbox.value;
    }
  }); -->
  
  */
  {
    "id": "TBgQuYPc",
    "block": "[[[3,\" {{sendmail}} \"],[1,\"\\n\"],[3,\" <sendmail /> \"],[1,\"\\n\"],[3,\" Sample HTML Form \"],[1,\"\\n\"],[3,\" <form method=\\\"post\\\" action=\\\"sendmail.php\\\">\\n<textarea name=\\\"message\\\"></textarea>\\n<input type=\\\"submit\\\">\\n</form> \"],[1,\"\\n\\n\"],[10,\"body\"],[12],[1,\"\\n  \"],[10,\"label\"],[14,\"for\",\"playerName\"],[12],[1,\"Player Name: \"],[13],[1,\"\\n  \"],[10,\"input\"],[14,3,\"playerName\"],[14,1,\"playerName\"],[14,\"placeholder\",\"Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\n\"],[10,\"table\"],[14,0,\"puttingleaguescoresheet\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Attempts\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 10 Feet \"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 15 Feet \"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 20 Feet \"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 25 Feet \"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\" 30 Feet \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"1st Attempt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"2nd Attempt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"3rd Attempt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"4th Attempt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"5th Attempt\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet1attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet2attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet3attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"6\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet4attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"8\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n    \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet5attempt\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"10\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[3,\" <html>\\n<body>\\n\\n<h2 style=\\\"color:green\\\"> Get all marked checkboxes value </h2>\\n<h4> Select the programming language, you know </h4>\\n<tr>\\n<td> Java: <input type=\\\"checkbox\\\" id=\\\"check1\\\" name=\\\"pl\\\" value=\\\"Java\\\"> </td>\\n<td> PHP: <input type=\\\"checkbox\\\" id=\\\"check2\\\" name=\\\"pl\\\" value=\\\"PHP\\\"> </td>\\n</tr> <tr>\\n<td> Angular: <input type=\\\"checkbox\\\" id=\\\"check3\\\" name=\\\"pl\\\" value=\\\"Angular\\\"> </td>\\n<td> CSS: <input type=\\\"checkbox\\\" id=\\\"check4\\\" name=\\\"pl\\\" value=\\\"CSS\\\"> </td>\\n</tr> <tr>\\n<td> Python: <input type=\\\"checkbox\\\" id=\\\"check5\\\" name=\\\"pl\\\" value=\\\"Python\\\"> </td>\\n<td> Android: <input type=\\\"checkbox\\\" id=\\\"check6\\\" name=\\\"pl\\\" value=\\\"Android\\\"> </td> <br> <br>\\n<button id=\\\"btn\\\">Submit</button> <br>\\n<h4 style=\\\"color:green\\\" id=\\\"result\\\"></h4>\\n\\n<script>\\ndocument.getElementById('btn').onclick = function() {\\n  var markedCheckbox = document.getElementsByName('pl');\\n  for (var checkbox of markedCheckbox) {\\n    if (checkbox.checked)\\n      document.body.append(checkbox.value + ' ');\\n  }\\n}\\n</script>\\n\\n</body>\\n</html> \"],[1,\"\\n\\n\\n  \"],[10,0],[14,0,\"Total\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"Total Score: \"],[13],[1,\"\\n    \"],[10,\"h4\"],[14,5,\"color:green\"],[14,1,\"result\"],[12],[1,\"0\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"button\"],[14,0,\"button\"],[14,\"onClick\",\"clearAll()\"],[14,5,\"background: #db2b14;\"],[12],[1,\"Clear All\"],[13],[1,\"\\n  \"],[10,\"button\"],[14,0,\"button\"],[14,\"onClick\",\"submit()\"],[12],[1,\"Submit\"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[10,\"script\"],[14,4,\"text/javascript\"],[12],[1,\"\\n    function totalIt() {\\n        var input = document.getElementsByName(\\\"attemptBox\\\");\\n        var total = 0;\\n        for (var i = 0; i < input.length; i++) {\\n          if (input[i].checked) {\\n            total += parseFloat(input[i].value);\\n          }\\n        }\\n        document.getElementById(\\\"result\\\").innerHTML = total;\\n    }\\n\\n    function clearAll() {\\n        if (confirm(\\\"Are you sure you want to clear all checkboxes?\\\")) {\\n            var boxes = document.getElementsByName(\\\"attemptBox\\\");\\n            for (var i = 0; i < boxes.length; i++) {\\n                boxes[i].checked = false;\\n            }\\n            document.getElementById(\\\"result\\\").innerHTML = 0;\\n        }\\n    }\\n\\n    function submit() {\\n      var name = document.getElementById(\\\"playerName\\\").value\\n        var total = document.getElementById(\\\"result\\\").innerHTML\\n        alert(\\\"Total score for \\\" + name + \\\": \\\" + total)\\n    }\\n\\n\\n  // function checkCheckbox() {\\n  //   var attemptsFrom10Feet = document.getElementsByName(\\\"10feet\\\");\\n  //   print(attemptsFrom10Feet.value())\\n    // var no = document.getElementById(\\\"myCheck2\\\");\\n    // if (yes.checked == true && no.checked == true){\\n    //   return document.getElementById(\\\"error\\\").innerHTML = \\\"Please mark only one checkbox either Yes or No\\\";\\n    // }\\n    // else if (yes.checked == true){\\n    //   var y = document.getElementById(\\\"myCheck1\\\").value;\\n    //   return document.getElementById(\\\"result\\\").innerHTML = y;\\n    // }\\n    // else if (no.checked == true){\\n    //   var n = document.getElementById(\\\"myCheck2\\\").value;\\n    //   return document.getElementById(\\\"result\\\").innerHTML = n;\\n    // }\\n    // else {\\n    //   return document.getElementById(\\\"error\\\").innerHTML = \\\"*Please mark any of checkbox\\\";\\n    // }\\n  // }\\n\"],[13],[1,\"\\n\"],[3,\" <button onclick={{route-action 'refresh'}}>Refresh Score</button> \"],[1,\"\\n\\n\"],[3,\" <label for=\\\"total\\\">Total Score</label> \"],[1,\"\\n\\n\"],[3,\" <EmberTable as |t|>\\n  <t.head @columns={{Scoresheet.columns}} />\\n\\n  <t.body @rows={{Scoresheet.rows}} />\\n</EmberTable> \"],[1,\"\\n\\n\"],[3,\"\\n\\n<table>\\n  <tr>\\n    <th>Attempts</th>\\n    <th>1st Attempt</th>\\n    <th>2nd Attempt</th>\\n    <th>3rd Attempt</th>\\n    <th>4th Attempt</th>\\n    <th>5th Attempt</th>\\n  </tr>\\n  <tr>\\n    <td>10 Feet</td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"10feet1attempt\\\" name=\\\"10feet\\\" value=1></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"10feet2attempt\\\" name=\\\"10feet\\\" value=1></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"10feet3attempt\\\" name=\\\"10feet\\\" value=1></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"10feet4attempt\\\" name=\\\"10feet\\\" value=1></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"10feet5attempt\\\" name=\\\"10feet\\\" value=2></td>\\n  </tr>\\n  <tr>\\n    <td>15 Feet</td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"15feet1attempt\\\" name=\\\"15feet1attempt\\\" value=2></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"15feet2attempt\\\" name=\\\"15feet2attempt\\\" value=2></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"15feet3attempt\\\" name=\\\"15feet3attempt\\\" value=2></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"15feet4attempt\\\" name=\\\"15feet4attempt\\\" value=2></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"15feet5attempt\\\" name=\\\"15feet5attempt\\\" value=4></td>\\n  </tr>\\n  <tr>\\n    <td>20 Feet</td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"20feet1attempt\\\" name=\\\"20feet1attempt\\\" value=3></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"20feet2attempt\\\" name=\\\"20feet2attempt\\\" value=3></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"20feet3attempt\\\" name=\\\"20feet3attempt\\\" value=3></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"20feet4attempt\\\" name=\\\"20feet4attempt\\\" value=3></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"20feet5attempt\\\" name=\\\"20feet5attempt\\\" value=6></td>\\n  </tr>\\n  <tr>\\n    <td>25 Feet</td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"25feet1attempt\\\" name=\\\"25feet1attempt\\\" value=4></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"25feet2attempt\\\" name=\\\"25feet2attempt\\\" value=4></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"25feet3attempt\\\" name=\\\"25feet3attempt\\\" value=4></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"25feet4attempt\\\" name=\\\"25feet4attempt\\\" value=4></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"25feet5attempt\\\" name=\\\"25feet5attempt\\\" value=8></td>\\n  </tr>\\n  <tr>\\n    <td>30 Feet</td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"30feet1attempt\\\" name=\\\"30feet1attempt\\\" value=5></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"30feet2attempt\\\" name=\\\"30feet2attempt\\\" value=5></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"30feet3attempt\\\" name=\\\"30feet3attempt\\\" value=5></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"30feet4attempt\\\" name=\\\"30feet4attempt\\\" value=5></td>\\n    <td><input type=\\\"checkbox\\\" id=\\\"30feet5attempt\\\" name=\\\"30feet5attempt\\\" value=10></td>\\n  </tr>\\n  <tr>\\n    <td>Total Score</td>\\n    <td></td>\\n    <td></td>\\n    <td></td>\\n    <td></td>\\n    <td></td>\\n  </tr>\\n</table> \"],[1,\"\\n\\n\"],[3,\" var checkboxes = document.getElementsByName('10feet');\\nvar sum = 0;\\ncheckboxes.forEach(function(checkbox){\\n  if (checkbox.checked) {\\n    sum += checkbox.value;\\n  }\\n}); \"],[1,\"\\n\"]],[],false,[]]",
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
    "id": "VUT8WUSu",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"NovaDiscs Putting League!\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"This site is currently a beta. Nothing is guarunteed. Leaving the site may cause you to lose any stored data.\"],[13],[1,\"\\n  \"],[3,\" <LinkTo @route=\\\"about\\\" class=\\\"button\\\">About Us</LinkTo> \"],[1,\"\\n  \"],[8,[39,1],[[24,0,\"button\"]],[[\"@route\"],[\"scorecard\"]],[[\"default\"],[[[[1,\"Scorecard\"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"jumbo\",\"link-to\"]]",
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
            require("novadiscs/app")["default"].create({"name":"novadiscs","version":"0.0.0+4e4f6844"});
          }
        
//# sourceMappingURL=novadiscs.map