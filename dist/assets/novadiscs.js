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
  
    <LinkTo @route="scorecard" class="menu-contact" onclick="openNav()">
      ☰ Menu
    </LinkTo>
  
    <LinkTo @route="scorecard" class="menu-contact">
      Scorecard
    </LinkTo>
  
    <!-- <LinkTo @route="players" class="menu-contact">
      Players
    </LinkTo> -->
  
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
    "id": "8KEAmZex",
    "block": "[[[1,\"\\n\"],[10,\"nav\"],[14,0,\"menu\"],[12],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"NovaDiscs\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,0],[[24,0,\"menu-contact\"],[24,\"onclick\",\"openNav()\"]],[[\"@route\"],[\"scorecard\"]],[[\"default\"],[[[[1,\"\\n    ☰ Menu\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[8,[39,0],[[24,0,\"menu-contact\"]],[[\"@route\"],[\"scorecard\"]],[[\"default\"],[[[[1,\"\\n    Scorecard\\n  \"]],[]]]]],[1,\"\\n\\n  \"],[3,\" <LinkTo @route=\\\"players\\\" class=\\\"menu-contact\\\">\\n    Players\\n  </LinkTo> \"],[1,\"\\n\\n  \"],[3,\" <div class=\\\"links\\\"> \"],[1,\"\\n\\n    \"],[3,\" <LinkTo @route=\\\"scorecard\\\" class=\\\"menu-contact\\\">\\n      Putting League Scorecard\\n    </LinkTo> \"],[1,\"\\n\\n    \"],[3,\" <LinkTo @route=\\\"about\\\" class=\\\"menu-about\\\">\\n      About\\n    </LinkTo>\\n\\n    <LinkTo @route=\\\"contact\\\" class=\\\"menu-contact\\\">\\n      Contact\\n    </LinkTo> \"],[1,\"\\n\\n  \"],[3,\" </div> \"],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\"]]",
    "moduleName": "novadiscs/components/nav-bar.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("novadiscs/components/nav-bar2", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  <style>
  body {margin:0;font-family:Arial}
  
  .topnav .menubuttons {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 28px 16px 25px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav {
    overflow: hidden;
    background-color: #20639B;
  }
  
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav .icon {
    display: none;
  }
  
  .dropdown {
    float: left;
    overflow: hidden;
  }
  
  .dropdown .dropbtn {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  
  @media screen and (max-width: 812px) {
    .topnav a:not(:first-child), .dropdown .dropbtn {
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
    }
    .topnav .menubuttons {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 15px 16px 15px;
      text-decoration: none;
      font-size: 17px;
    }
    .finalButtons {
        width: 66%;
        margin: auto;
    }
  }
  
  @media screen and (max-width: 812px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
    .topnav.responsive .dropdown {float: none;}
    .topnav.responsive .dropdown .dropbtn {
      display: block;
      width: 100%;
      text-align: left;
    }
  }
  </style>
  
  
  
  <div class="topnav" id="myTopnav">
    <LinkTo @route="index" class="menu-index">
      <h1 style="font-style: italic;">NovaDiscs</h1>
    </LinkTo>
    <!-- <a href="#home" class="active">NovaDiscs</a> -->
    <!-- <LinkTo @route="scorecard" class="menu-contact">
      Scorecard
    </LinkTo>
  
    <LinkTo @route="players" class="menu-contact">
      Players
    </LinkTo> -->
    <a class="menubuttons" href="/scorecard">Putting League Scorecard</a>
    <!-- <a class="menubuttons" href="/players">Players</a> -->
    <a class="menubuttons" href="/standings">2023 Putting League Standings</a>
    <a class="menubuttons" href="/stamps">Custom Stamps</a>
  
    <a href="javascript:void(0);" style="font-size:1.8em;" class="icon" onclick="myFunction()">&#9776;</a>
  </div>
  
  
  
  <script>
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  </script>
  
  */
  {
    "id": "VrZzpK8g",
    "block": "[[[1,\"\\n\"],[10,\"meta\"],[14,3,\"viewport\"],[14,\"content\",\"width=device-width, initial-scale=1\"],[12],[13],[1,\"\\n\"],[10,\"link\"],[14,\"rel\",\"stylesheet\"],[14,6,\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"],[12],[13],[1,\"\\n\\n\"],[10,\"style\"],[12],[1,\"\\nbody {margin:0;font-family:Arial}\\n\\n.topnav .menubuttons {\\n  float: left;\\n  display: block;\\n  color: #f2f2f2;\\n  text-align: center;\\n  padding: 28px 16px 25px;\\n  text-decoration: none;\\n  font-size: 17px;\\n}\\n\\n.topnav {\\n  overflow: hidden;\\n  background-color: #20639B;\\n}\\n\\n.topnav a {\\n  float: left;\\n  display: block;\\n  color: #f2f2f2;\\n  text-align: center;\\n  padding: 14px 16px;\\n  text-decoration: none;\\n  font-size: 17px;\\n}\\n\\n.topnav .icon {\\n  display: none;\\n}\\n\\n.dropdown {\\n  float: left;\\n  overflow: hidden;\\n}\\n\\n.dropdown .dropbtn {\\n  font-size: 17px;\\n  border: none;\\n  outline: none;\\n  color: white;\\n  padding: 14px 16px;\\n  background-color: inherit;\\n  font-family: inherit;\\n  margin: 0;\\n}\\n\\n@media screen and (max-width: 812px) {\\n  .topnav a:not(:first-child), .dropdown .dropbtn {\\n    display: none;\\n  }\\n  .topnav a.icon {\\n    float: right;\\n    display: block;\\n  }\\n  .topnav .menubuttons {\\n    float: left;\\n    display: block;\\n    color: #f2f2f2;\\n    text-align: center;\\n    padding: 15px 16px 15px;\\n    text-decoration: none;\\n    font-size: 17px;\\n  }\\n  .finalButtons {\\n      width: 66%;\\n      margin: auto;\\n  }\\n}\\n\\n@media screen and (max-width: 812px) {\\n  .topnav.responsive {position: relative;}\\n  .topnav.responsive .icon {\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n  }\\n  .topnav.responsive a {\\n    float: none;\\n    display: block;\\n    text-align: left;\\n  }\\n  .topnav.responsive .dropdown {float: none;}\\n  .topnav.responsive .dropdown .dropbtn {\\n    display: block;\\n    width: 100%;\\n    text-align: left;\\n  }\\n}\\n\"],[13],[1,\"\\n\\n\\n\\n\"],[10,0],[14,0,\"topnav\"],[14,1,\"myTopnav\"],[12],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h1\"],[14,5,\"font-style: italic;\"],[12],[1,\"NovaDiscs\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n  \"],[3,\" <a href=\\\"#home\\\" class=\\\"active\\\">NovaDiscs</a> \"],[1,\"\\n  \"],[3,\" <LinkTo @route=\\\"scorecard\\\" class=\\\"menu-contact\\\">\\n    Scorecard\\n  </LinkTo>\\n\\n  <LinkTo @route=\\\"players\\\" class=\\\"menu-contact\\\">\\n    Players\\n  </LinkTo> \"],[1,\"\\n  \"],[10,3],[14,0,\"menubuttons\"],[14,6,\"/scorecard\"],[12],[1,\"Putting League Scorecard\"],[13],[1,\"\\n  \"],[3,\" <a class=\\\"menubuttons\\\" href=\\\"/players\\\">Players</a> \"],[1,\"\\n  \"],[10,3],[14,0,\"menubuttons\"],[14,6,\"/standings\"],[12],[1,\"2023 Putting League Standings\"],[13],[1,\"\\n  \"],[10,3],[14,0,\"menubuttons\"],[14,6,\"/stamps\"],[12],[1,\"Custom Stamps\"],[13],[1,\"\\n\\n  \"],[10,3],[14,6,\"javascript:void(0);\"],[14,5,\"font-size:1.8em;\"],[14,0,\"icon\"],[14,\"onclick\",\"myFunction()\"],[12],[1,\"☰\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\\n\\n\"],[10,\"script\"],[12],[1,\"\\nfunction myFunction() {\\n  var x = document.getElementById(\\\"myTopnav\\\");\\n  if (x.className === \\\"topnav\\\") {\\n    x.className += \\\" responsive\\\";\\n  } else {\\n    x.className = \\\"topnav\\\";\\n  }\\n}\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\"]]",
    "moduleName": "novadiscs/components/nav-bar2.hbs",
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
  
  <div class="Total" style="word-spacing: 20px;">
    <label for="playerName" style="font-weight: bold; word-spacing: normal;">Player Name: </label>
    <input type="text" name="playerName" id="playerName" placeholder="Name"/>
    OR
  
    <label for="playerID" style="font-weight: bold; word-spacing: normal;">PDGA Number: </label>
    <input type="number" name="playerID" id="playerID" placeholder="PDGA Number"/>
  </div>
  
  <div class="center">
    <img src="../assets/images/scroll_right.png" alt="" style="max-width: 40px;">
  </div>
  <table class="scoreTable">
    <thead>
      <tr>
        <th class="sticky-col first-col"></th>
        <th> Standard Basket 20' </th>
        <th> Standard Basket 25' </th>
        <th> Standard Basket 33' </th>
        <th> Marksman Basket 25' </th>
        <th> Marksman Basket 33' </th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="sticky-col first-col">1st Putt</td>
          <td><input type="checkbox" id="10feet" name="attemptBox" onclick="totalIt()" value=1></td>
          <td><input type="checkbox" id="15feet" name="attemptBox" onclick="totalIt()" value=2></td>
          <td><input type="checkbox" id="20feet" name="attemptBox" onclick="totalIt()" value=3></td>
          <td><input type="checkbox" id="25feet" name="attemptBox" onclick="totalIt()" value=4></td>
          <td><input type="checkbox" id="30feet" name="attemptBox" onclick="totalIt()" value=5></td>
        </tr>
        <tr>
          <td class="sticky-col first-col">2nd Putt</td>
          <td><input type="checkbox" id="10feet" name="attemptBox" onclick="totalIt()" value=1></td>
          <td><input type="checkbox" id="15feet" name="attemptBox" onclick="totalIt()" value=2></td>
          <td><input type="checkbox" id="20feet" name="attemptBox" onclick="totalIt()" value=3></td>
          <td><input type="checkbox" id="25feet" name="attemptBox" onclick="totalIt()" value=4></td>
          <td><input type="checkbox" id="30feet" name="attemptBox" onclick="totalIt()" value=5></td>
        </tr>
        <tr>
          <td class="sticky-col first-col">3rd Putt</td>
          <td><input type="checkbox" id="10feet" name="attemptBox" onclick="totalIt()" value=1></td>
          <td><input type="checkbox" id="15feet" name="attemptBox" onclick="totalIt()" value=2></td>
          <td><input type="checkbox" id="20feet" name="attemptBox" onclick="totalIt()" value=3></td>
          <td><input type="checkbox" id="25feet" name="attemptBox" onclick="totalIt()" value=4></td>
          <td><input type="checkbox" id="30feet" name="attemptBox" onclick="totalIt()" value=5></td>
        </tr>
        <tr>
          <td class="sticky-col first-col">4th Putt</td>
          <td><input type="checkbox" id="10feet" name="attemptBox" onclick="totalIt()" value=1></td>
          <td><input type="checkbox" id="15feet" name="attemptBox" onclick="totalIt()" value=2></td>
          <td><input type="checkbox" id="20feet" name="attemptBox" onclick="totalIt()" value=3></td>
          <td><input type="checkbox" id="25feet" name="attemptBox" onclick="totalIt()" value=4></td>
          <td><input type="checkbox" id="30feet" name="attemptBox" onclick="totalIt()" value=5></td>
        </tr>
        <tr>
          <td class="sticky-col first-col">5th Putt</td>
          <td><input type="checkbox" id="10feet" name="attemptBox" onclick="totalIt()" value=1></td>
          <td><input type="checkbox" id="15feet" name="attemptBox" onclick="totalIt()" value=2></td>
          <td><input type="checkbox" id="20feet" name="attemptBox" onclick="totalIt()" value=3></td>
          <td><input type="checkbox" id="25feet" name="attemptBox" onclick="totalIt()" value=4></td>
          <td><input type="checkbox" id="30feet" name="attemptBox" onclick="totalIt()" value=5></td>
        </tr>
        <tr>
          <td class="sticky-col first-col"></td>
          <td id="checkAll10" name="checkAll" class="checkAll" onclick="checkAll(10)">Check<br>All</td>
          <td id="checkAll15" name="checkAll" class="checkAll" onclick="checkAll(15)">Check<br>All</td>
          <td id="checkAll20" name="checkAll" class="checkAll" onclick="checkAll(20)">Check<br>All</td>
          <td id="checkAll25" name="checkAll" class="checkAll" onclick="checkAll(25)">Check<br>All</td>
          <td id="checkAll30" name="checkAll" class="checkAll" onclick="checkAll(30)">Check<br>All</td>
        </tr>
    </tbody>
  
  </table>
  
    <div class="Total">
      <span>Total Score: </span>
      <h4 style="color:green" id="result">0</h4>
    </div>
  
    <div class="finalButtons center">
      <button class="button" onClick="clearAll()" style="background: #Ed553B; margin-bottom: 10px;" type="button">Clear All</button>
      <button class="button" onClick="submit()" style="background: #3CAEA3;" type="button">Submit</button>
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
              // Reset all buttons to "check all"
              var buttons = document.getElementsByName("checkAll");
              for (var i = 0; i < buttons.length; i++) {
                  buttons[i].innerHTML = "Check<br>All";
                  buttons[i].style = ""
              }
          }
      }
  
      function checkAll(basket) {
          var button = document.getElementById("checkAll" + basket);
          if (button.innerHTML == "Check<br>All"){
              button.innerHTML = "Uncheck<br>All";
              button.style = "color: #Ed553B;"
              boxes = document.querySelectorAll("input[id='" + basket + "feet']");
              for(var i=0; i<boxes.length; i++){
                  boxes[i].checked = true;
              }
          } else {
              button.innerHTML = "Check<br>All";
              button.style = ""
              boxes = document.querySelectorAll("input[id='" + basket + "feet']");
              for(var i=0; i<boxes.length; i++){
                  boxes[i].checked = false;
              }
          }
          totalIt()
      }
  
      function submit() {
          var name = document.getElementById("playerName").value
          var playerID = document.getElementById("playerID").value
          var playerIDstring = "PlayerID: " + playerID
          var total = document.getElementById("result").innerHTML
  
          if (name == "" && playerID == "") {
              alert("Name or ID is required.")
          }
          // else if name and no ID
          // else if ID and no name
          else if (confirm("Submit a score of " + total + " for " + (name ? name : playerIDstring) + "?")){
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();
              var date = "\'" + yyyy + "-" + mm + "-" + dd + "\'"
  
              if(playerID != ""){
                resp = "Total score for " + (name ? name : playerIDstring) + " on " + date + ": " + total
                sql = "INSERT INTO scores(player_id, date, score) VALUES (" + playerID + ", "+ date +", "+total+");"
                window.location = "mailto:novadiscsscorecards@gmail.com?subject=Putting League Results&body=" + resp + "%0D%0A...%0D%0A" + sql;
              } else {
                // No Player ID given
                resp = "Total score for " + name + " on " + date + ": " + total
                window.location = "mailto:novadiscsscorecards@gmail.com?subject=Putting League Results&body=" + resp
              }
  
          }
      }
  </script>
  
  */
  {
    "id": "amP/S0Xv",
    "block": "[[[1,\"\\n\"],[10,\"body\"],[12],[1,\"\\n\\n\"],[10,0],[14,0,\"Total\"],[14,5,\"word-spacing: 20px;\"],[12],[1,\"\\n  \"],[10,\"label\"],[14,\"for\",\"playerName\"],[14,5,\"font-weight: bold; word-spacing: normal;\"],[12],[1,\"Player Name: \"],[13],[1,\"\\n  \"],[10,\"input\"],[14,3,\"playerName\"],[14,1,\"playerName\"],[14,\"placeholder\",\"Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n  OR\\n\\n  \"],[10,\"label\"],[14,\"for\",\"playerID\"],[14,5,\"font-weight: bold; word-spacing: normal;\"],[12],[1,\"PDGA Number: \"],[13],[1,\"\\n  \"],[10,\"input\"],[14,3,\"playerID\"],[14,1,\"playerID\"],[14,\"placeholder\",\"PDGA Number\"],[14,4,\"number\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"center\"],[12],[1,\"\\n  \"],[10,\"img\"],[14,\"src\",\"../assets/images/scroll_right.png\"],[14,\"alt\",\"\"],[14,5,\"max-width: 40px;\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"table\"],[14,0,\"scoreTable\"],[12],[1,\"\\n  \"],[10,\"thead\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[14,0,\"sticky-col first-col\"],[12],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\" Standard Basket 20' \"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\" Standard Basket 25' \"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\" Standard Basket 33' \"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\" Marksman Basket 25' \"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\" Marksman Basket 33' \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tbody\"],[12],[1,\"\\n      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[14,0,\"sticky-col first-col\"],[12],[1,\"1st Putt\"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[14,0,\"sticky-col first-col\"],[12],[1,\"2nd Putt\"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[14,0,\"sticky-col first-col\"],[12],[1,\"3rd Putt\"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[14,0,\"sticky-col first-col\"],[12],[1,\"4th Putt\"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[14,0,\"sticky-col first-col\"],[12],[1,\"5th Putt\"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"10feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"1\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"15feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"2\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"20feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"3\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"25feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"4\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n        \"],[10,\"td\"],[12],[10,\"input\"],[14,1,\"30feet\"],[14,3,\"attemptBox\"],[14,\"onclick\",\"totalIt()\"],[14,2,\"5\"],[14,4,\"checkbox\"],[12],[13],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[14,0,\"sticky-col first-col\"],[12],[13],[1,\"\\n        \"],[10,\"td\"],[14,1,\"checkAll10\"],[14,3,\"checkAll\"],[14,0,\"checkAll\"],[14,\"onclick\",\"checkAll(10)\"],[12],[1,\"Check\"],[10,\"br\"],[12],[13],[1,\"All\"],[13],[1,\"\\n        \"],[10,\"td\"],[14,1,\"checkAll15\"],[14,3,\"checkAll\"],[14,0,\"checkAll\"],[14,\"onclick\",\"checkAll(15)\"],[12],[1,\"Check\"],[10,\"br\"],[12],[13],[1,\"All\"],[13],[1,\"\\n        \"],[10,\"td\"],[14,1,\"checkAll20\"],[14,3,\"checkAll\"],[14,0,\"checkAll\"],[14,\"onclick\",\"checkAll(20)\"],[12],[1,\"Check\"],[10,\"br\"],[12],[13],[1,\"All\"],[13],[1,\"\\n        \"],[10,\"td\"],[14,1,\"checkAll25\"],[14,3,\"checkAll\"],[14,0,\"checkAll\"],[14,\"onclick\",\"checkAll(25)\"],[12],[1,\"Check\"],[10,\"br\"],[12],[13],[1,\"All\"],[13],[1,\"\\n        \"],[10,\"td\"],[14,1,\"checkAll30\"],[14,3,\"checkAll\"],[14,0,\"checkAll\"],[14,\"onclick\",\"checkAll(30)\"],[12],[1,\"Check\"],[10,\"br\"],[12],[13],[1,\"All\"],[13],[1,\"\\n      \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"Total\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"Total Score: \"],[13],[1,\"\\n    \"],[10,\"h4\"],[14,5,\"color:green\"],[14,1,\"result\"],[12],[1,\"0\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"finalButtons center\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,0,\"button\"],[14,\"onClick\",\"clearAll()\"],[14,5,\"background: #Ed553B; margin-bottom: 10px;\"],[14,4,\"button\"],[12],[1,\"Clear All\"],[13],[1,\"\\n    \"],[10,\"button\"],[14,0,\"button\"],[14,\"onClick\",\"submit()\"],[14,5,\"background: #3CAEA3;\"],[14,4,\"button\"],[12],[1,\"Submit\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[10,\"script\"],[14,4,\"text/javascript\"],[12],[1,\"\\n    function totalIt() {\\n        var input = document.getElementsByName(\\\"attemptBox\\\");\\n        var total = 0;\\n        for (var i = 0; i < input.length; i++) {\\n          if (input[i].checked) {\\n            total += parseFloat(input[i].value);\\n          }\\n        }\\n        document.getElementById(\\\"result\\\").innerHTML = total;\\n    }\\n\\n    function clearAll() {\\n        if (confirm(\\\"Are you sure you want to clear all checkboxes?\\\")) {\\n            var boxes = document.getElementsByName(\\\"attemptBox\\\");\\n            for (var i = 0; i < boxes.length; i++) {\\n                boxes[i].checked = false;\\n            }\\n            document.getElementById(\\\"result\\\").innerHTML = 0;\\n            // Reset all buttons to \\\"check all\\\"\\n            var buttons = document.getElementsByName(\\\"checkAll\\\");\\n            for (var i = 0; i < buttons.length; i++) {\\n                buttons[i].innerHTML = \\\"Check<br>All\\\";\\n                buttons[i].style = \\\"\\\"\\n            }\\n        }\\n    }\\n\\n    function checkAll(basket) {\\n        var button = document.getElementById(\\\"checkAll\\\" + basket);\\n        if (button.innerHTML == \\\"Check<br>All\\\"){\\n            button.innerHTML = \\\"Uncheck<br>All\\\";\\n            button.style = \\\"color: #Ed553B;\\\"\\n            boxes = document.querySelectorAll(\\\"input[id='\\\" + basket + \\\"feet']\\\");\\n            for(var i=0; i<boxes.length; i++){\\n                boxes[i].checked = true;\\n            }\\n        } else {\\n            button.innerHTML = \\\"Check<br>All\\\";\\n            button.style = \\\"\\\"\\n            boxes = document.querySelectorAll(\\\"input[id='\\\" + basket + \\\"feet']\\\");\\n            for(var i=0; i<boxes.length; i++){\\n                boxes[i].checked = false;\\n            }\\n        }\\n        totalIt()\\n    }\\n\\n    function submit() {\\n        var name = document.getElementById(\\\"playerName\\\").value\\n        var playerID = document.getElementById(\\\"playerID\\\").value\\n        var playerIDstring = \\\"PlayerID: \\\" + playerID\\n        var total = document.getElementById(\\\"result\\\").innerHTML\\n\\n        if (name == \\\"\\\" && playerID == \\\"\\\") {\\n            alert(\\\"Name or ID is required.\\\")\\n        }\\n        // else if name and no ID\\n        // else if ID and no name\\n        else if (confirm(\\\"Submit a score of \\\" + total + \\\" for \\\" + (name ? name : playerIDstring) + \\\"?\\\")){\\n            var today = new Date();\\n            var dd = String(today.getDate()).padStart(2, '0');\\n            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\\n            var yyyy = today.getFullYear();\\n            var date = \\\"\\\\'\\\" + yyyy + \\\"-\\\" + mm + \\\"-\\\" + dd + \\\"\\\\'\\\"\\n\\n            if(playerID != \\\"\\\"){\\n              resp = \\\"Total score for \\\" + (name ? name : playerIDstring) + \\\" on \\\" + date + \\\": \\\" + total\\n              sql = \\\"INSERT INTO scores(player_id, date, score) VALUES (\\\" + playerID + \\\", \\\"+ date +\\\", \\\"+total+\\\");\\\"\\n              window.location = \\\"mailto:novadiscsscorecards@gmail.com?subject=Putting League Results&body=\\\" + resp + \\\"%0D%0A...%0D%0A\\\" + sql;\\n            } else {\\n              // No Player ID given\\n              resp = \\\"Total score for \\\" + name + \\\" on \\\" + date + \\\": \\\" + total\\n              window.location = \\\"mailto:novadiscsscorecards@gmail.com?subject=Putting League Results&body=\\\" + resp\\n            }\\n\\n        }\\n    }\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "novadiscs/components/puttingleaguescoresheet.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("novadiscs/components/stamps", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <style media="screen">
    label {
      font-weight: bold;
      word-spacing: normal;
      padding-right:10px;
    }
  </style>
  
  <body>
    <h2>Stamp Examples</h2>
    <a href="#bottom">Jump to Order Form below</a>
  <br>
    <h3>Basic Stamps starting at $35</h3>
    <p>A basic stamp is one that can include your name, phone number, and PDGA number, as well as
      as simple inital or signature at the focal point.
    </p>
  
    <div class="center">
      <img src="../assets/images/stamps/CB basic stamp.jpg" alt="basic stamp img" style="max-width: 200px;">
    </div>
  
    <h3>Advanced Stamp starting at $40</h3>
    <p>An advanced stamp is one that includes an image. This would be if you had
      a logo you wanted put on a stamp. The higher quality of image, the better. Low quality images will
      require more design effort which will be reflected in the cost.
    </p>
    <div class="center">
      <img src="../assets/images/stamps/whale.jpg" alt="advances stamp img" style="max-width: 200px;">
      <img src="../assets/images/stamps/crown.jpg" alt="advances stamp img" style="max-width: 200px;">
      <img src="../assets/images/stamps/mc esher.jpg" alt="advances stamp img" style="max-width: 200px;">
      <img src="../assets/images/stamps/Bender.jpg" alt="advances stamp img" style="max-width: 200px;">
    </div>
  
    <h3>Expert Stamp starting at $50</h3>
    <p>An expert stamp is one that requires the most design work. If you have an idea and need help
      bringing it to life, this is the option for you. If you have multiple images and want them melded
      together, that can also be done on an Expert Stamp
    </p>
  
    <!-- <h3>Ink Color Options</h3>
    <div class="center">
      <img src="../assets/images/stamps/ink colors.png" alt="ink colors" style="max-width: 200px;">
    </div> -->
    <!-- <p>Ink color options include: (left to right) (top to bottom)</p>
    <p>None, Jet Black, Vermillion (Red), Chrome Yellow, Manganese Blue, Emerald Green</p>
    <p>Magenta Hue, Vibrant Fuchsia, Cobalt, Paradise Teal, Coastal Coral, Plum</p>
    <p>Pebble Beach, Rose Madder, Monarch Orange, </p>
  
  <style media="screen">
  .btn-square-sm {
  width: 75px !important;
  max-width: 100% !important;
  max-height: 100% !important;
  height: 75px !important;
  text-align: center;
  padding: 0px;
  font-size:14px;
  }
  </style> -->
  <!-- Color picker squares -->
  <!-- <button type="button" class="btn btn-primary btn-square-sm" style="background-color: #000000; color:#ffffff">Jet Black</button> -->
  <!--  -->
  
  
  
  <!-- Stolen Color Picker -->
  <!-- <div class="Level1Thumbnails-thumbnails">
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="None">
        <img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=none&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=none&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=none&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=none&amp;max_dim=168 168w" alt="None" class="AttributeValueThumbnail-realview">
      </button>
      </div>
        <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Jet Black"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=jetblack&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=jetblack&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=jetblack&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=jetblack&amp;max_dim=168 168w" alt="Jet Black" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--selected AttributeValueThumbnail--size56">
      <button aria-pressed="true" class="AttributeValueThumbnail-button" title="Vermillion (Red)"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vermillion&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vermillion&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vermillion&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vermillion&amp;max_dim=168 168w" alt="Vermillion (Red)" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Chrome Yellow"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=chromeyellow&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=chromeyellow&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=chromeyellow&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=chromeyellow&amp;max_dim=168 168w" alt="Chrome Yellow" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Manganese Blue"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=manganeseblue&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=manganeseblue&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=manganeseblue&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=manganeseblue&amp;max_dim=168 168w" alt="Manganese Blue" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Emerald Green"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=emeraldgreen&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=emeraldgreen&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=emeraldgreen&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=emeraldgreen&amp;max_dim=168 168w" alt="Emerald Green" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Magenta Hue"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=magentahue&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=magentahue&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=magentahue&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=magentahue&amp;max_dim=168 168w" alt="Magenta Hue" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Vibrant Fuchsia"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vibrantfuchsia&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vibrantfuchsia&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vibrantfuchsia&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vibrantfuchsia&amp;max_dim=168 168w" alt="Vibrant Fuchsia" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Cobalt"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=cobalt&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=cobalt&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=cobalt&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=cobalt&amp;max_dim=168 168w" alt="Cobalt" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Paradise Teal"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=paradiseteal&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=paradiseteal&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=paradiseteal&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=paradiseteal&amp;max_dim=168 168w" alt="Paradise Teal" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Coastal Coral"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coastalcoral&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coastalcoral&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coastalcoral&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coastalcoral&amp;max_dim=168 168w" alt="Coastal Coral" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Plum"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=plum&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=plum&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=plum&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=plum&amp;max_dim=168 168w" alt="Plum" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Pebble Beach"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=pebblebeach&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=pebblebeach&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=pebblebeach&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=pebblebeach&amp;max_dim=168 168w" alt="Pebble Beach" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Rose Madder"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=rosemadder&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=rosemadder&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=rosemadder&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=rosemadder&amp;max_dim=168 168w" alt="Rose Madder" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Monarch Orange"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=monarchorange&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=monarchorange&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=monarchorange&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=monarchorange&amp;max_dim=168 168w" alt="Monarch Orange" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Library Green"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=librarygreen&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=librarygreen&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=librarygreen&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=librarygreen&amp;max_dim=168 168w" alt="Library Green" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Light House"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=lighthouse&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=lighthouse&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=lighthouse&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=lighthouse&amp;max_dim=168 168w" alt="Light House" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Aquamarine"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=aquamarine&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=aquamarine&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=aquamarine&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=aquamarine&amp;max_dim=168 168w" alt="Aquamarine" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Bright Tangelo"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=brighttangelo&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=brighttangelo&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=brighttangelo&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=brighttangelo&amp;max_dim=168 168w" alt="Bright Tangelo" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Olive"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=olive&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=olive&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=olive&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=olive&amp;max_dim=168 168w" alt="Olive" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Viridian"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=viridian&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=viridian&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=viridian&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=viridian&amp;max_dim=168 168w" alt="Viridian" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Vivid Chartreuse"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vividchartreuse&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vividchartreuse&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vividchartreuse&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vividchartreuse&amp;max_dim=168 168w" alt="Vivid Chartreuse" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Sepia"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=sepia&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=sepia&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=sepia&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=sepia&amp;max_dim=168 168w" alt="Sepia" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Seafarer"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seafarer&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seafarer&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seafarer&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seafarer&amp;max_dim=168 168w" alt="Seafarer" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Shadow Grey"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=shadowgrey&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=shadowgrey&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=shadowgrey&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=shadowgrey&amp;max_dim=168 168w" alt="Shadow Grey" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Sea Grass"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seagrass&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seagrass&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seagrass&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seagrass&amp;max_dim=168 168w" alt="Sea Grass" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="French Ultra Marine"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=frenchultramarine&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=frenchultramarine&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=frenchultramarine&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=frenchultramarine&amp;max_dim=168 168w" alt="French Ultra Marine" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Coffee"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coffee&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coffee&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coffee&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coffee&amp;max_dim=168 168w" alt="Coffee" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Majestic Violet"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=majesticviolet&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=majesticviolet&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=majesticviolet&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=majesticviolet&amp;max_dim=168 168w" alt="Majestic Violet" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Deep Purple"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=deeppurple&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=deeppurple&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=deeppurple&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=deeppurple&amp;max_dim=168 168w" alt="Deep Purple" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Silvery Shimmer"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=silver&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=silver&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=silver&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=silver&amp;max_dim=168 168w" alt="Silvery Shimmer" class="AttributeValueThumbnail-realview">
      </button>
    </div>
    <div class="AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56">
      <button aria-pressed="false" class="AttributeValueThumbnail-button" title="Golden Glitz"><img src="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=gold&amp;max_dim=56" sizes="56px" srcset="https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=gold&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=gold&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=gold&amp;max_dim=168 168w" alt="Golden Glitz" class="AttributeValueThumbnail-realview">
      </button>
    </div>
  </div> -->
  <!--  -->
  
    <h3 id="bottom">Contact us today for a free consultation if you have an idea and want to make it happen</h3>
  </body>
  
  */
  {
    "id": "MG4wJz9O",
    "block": "[[[10,\"style\"],[14,\"media\",\"screen\"],[12],[1,\"\\n  label {\\n    font-weight: bold;\\n    word-spacing: normal;\\n    padding-right:10px;\\n  }\\n\"],[13],[1,\"\\n\\n\"],[10,\"body\"],[12],[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"Stamp Examples\"],[13],[1,\"\\n  \"],[10,3],[14,6,\"#bottom\"],[12],[1,\"Jump to Order Form below\"],[13],[1,\"\\n\"],[10,\"br\"],[12],[13],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"Basic Stamps starting at $35\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"A basic stamp is one that can include your name, phone number, and PDGA number, as well as\\n    as simple inital or signature at the focal point.\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"center\"],[12],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"../assets/images/stamps/CB basic stamp.jpg\"],[14,\"alt\",\"basic stamp img\"],[14,5,\"max-width: 200px;\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"h3\"],[12],[1,\"Advanced Stamp starting at $40\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"An advanced stamp is one that includes an image. This would be if you had\\n    a logo you wanted put on a stamp. The higher quality of image, the better. Low quality images will\\n    require more design effort which will be reflected in the cost.\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"center\"],[12],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"../assets/images/stamps/whale.jpg\"],[14,\"alt\",\"advances stamp img\"],[14,5,\"max-width: 200px;\"],[12],[13],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"../assets/images/stamps/crown.jpg\"],[14,\"alt\",\"advances stamp img\"],[14,5,\"max-width: 200px;\"],[12],[13],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"../assets/images/stamps/mc esher.jpg\"],[14,\"alt\",\"advances stamp img\"],[14,5,\"max-width: 200px;\"],[12],[13],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"../assets/images/stamps/Bender.jpg\"],[14,\"alt\",\"advances stamp img\"],[14,5,\"max-width: 200px;\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"h3\"],[12],[1,\"Expert Stamp starting at $50\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"An expert stamp is one that requires the most design work. If you have an idea and need help\\n    bringing it to life, this is the option for you. If you have multiple images and want them melded\\n    together, that can also be done on an Expert Stamp\\n  \"],[13],[1,\"\\n\\n  \"],[3,\" <h3>Ink Color Options</h3>\\n  <div class=\\\"center\\\">\\n    <img src=\\\"../assets/images/stamps/ink colors.png\\\" alt=\\\"ink colors\\\" style=\\\"max-width: 200px;\\\">\\n  </div> \"],[1,\"\\n  \"],[3,\" <p>Ink color options include: (left to right) (top to bottom)</p>\\n  <p>None, Jet Black, Vermillion (Red), Chrome Yellow, Manganese Blue, Emerald Green</p>\\n  <p>Magenta Hue, Vibrant Fuchsia, Cobalt, Paradise Teal, Coastal Coral, Plum</p>\\n  <p>Pebble Beach, Rose Madder, Monarch Orange, </p>\\n\\n<style media=\\\"screen\\\">\\n.btn-square-sm {\\nwidth: 75px !important;\\nmax-width: 100% !important;\\nmax-height: 100% !important;\\nheight: 75px !important;\\ntext-align: center;\\npadding: 0px;\\nfont-size:14px;\\n}\\n</style> \"],[1,\"\\n\"],[3,\" Color picker squares \"],[1,\"\\n\"],[3,\" <button type=\\\"button\\\" class=\\\"btn btn-primary btn-square-sm\\\" style=\\\"background-color: #000000; color:#ffffff\\\">Jet Black</button> \"],[1,\"\\n\"],[3,\"  \"],[1,\"\\n\\n\\n\\n\"],[3,\" Stolen Color Picker \"],[1,\"\\n\"],[3,\" <div class=\\\"Level1Thumbnails-thumbnails\\\">\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"None\\\">\\n      <img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=none&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=none&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=none&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=none&amp;max_dim=168 168w\\\" alt=\\\"None\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n    </div>\\n      <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Jet Black\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=jetblack&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=jetblack&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=jetblack&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=jetblack&amp;max_dim=168 168w\\\" alt=\\\"Jet Black\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--selected AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"true\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Vermillion (Red)\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vermillion&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vermillion&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vermillion&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vermillion&amp;max_dim=168 168w\\\" alt=\\\"Vermillion (Red)\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Chrome Yellow\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=chromeyellow&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=chromeyellow&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=chromeyellow&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=chromeyellow&amp;max_dim=168 168w\\\" alt=\\\"Chrome Yellow\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Manganese Blue\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=manganeseblue&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=manganeseblue&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=manganeseblue&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=manganeseblue&amp;max_dim=168 168w\\\" alt=\\\"Manganese Blue\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Emerald Green\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=emeraldgreen&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=emeraldgreen&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=emeraldgreen&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=emeraldgreen&amp;max_dim=168 168w\\\" alt=\\\"Emerald Green\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Magenta Hue\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=magentahue&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=magentahue&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=magentahue&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=magentahue&amp;max_dim=168 168w\\\" alt=\\\"Magenta Hue\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Vibrant Fuchsia\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vibrantfuchsia&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vibrantfuchsia&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vibrantfuchsia&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vibrantfuchsia&amp;max_dim=168 168w\\\" alt=\\\"Vibrant Fuchsia\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Cobalt\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=cobalt&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=cobalt&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=cobalt&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=cobalt&amp;max_dim=168 168w\\\" alt=\\\"Cobalt\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Paradise Teal\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=paradiseteal&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=paradiseteal&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=paradiseteal&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=paradiseteal&amp;max_dim=168 168w\\\" alt=\\\"Paradise Teal\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Coastal Coral\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coastalcoral&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coastalcoral&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coastalcoral&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coastalcoral&amp;max_dim=168 168w\\\" alt=\\\"Coastal Coral\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Plum\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=plum&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=plum&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=plum&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=plum&amp;max_dim=168 168w\\\" alt=\\\"Plum\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Pebble Beach\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=pebblebeach&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=pebblebeach&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=pebblebeach&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=pebblebeach&amp;max_dim=168 168w\\\" alt=\\\"Pebble Beach\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Rose Madder\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=rosemadder&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=rosemadder&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=rosemadder&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=rosemadder&amp;max_dim=168 168w\\\" alt=\\\"Rose Madder\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Monarch Orange\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=monarchorange&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=monarchorange&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=monarchorange&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=monarchorange&amp;max_dim=168 168w\\\" alt=\\\"Monarch Orange\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Library Green\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=librarygreen&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=librarygreen&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=librarygreen&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=librarygreen&amp;max_dim=168 168w\\\" alt=\\\"Library Green\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Light House\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=lighthouse&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=lighthouse&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=lighthouse&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=lighthouse&amp;max_dim=168 168w\\\" alt=\\\"Light House\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Aquamarine\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=aquamarine&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=aquamarine&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=aquamarine&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=aquamarine&amp;max_dim=168 168w\\\" alt=\\\"Aquamarine\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Bright Tangelo\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=brighttangelo&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=brighttangelo&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=brighttangelo&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=brighttangelo&amp;max_dim=168 168w\\\" alt=\\\"Bright Tangelo\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Olive\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=olive&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=olive&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=olive&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=olive&amp;max_dim=168 168w\\\" alt=\\\"Olive\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Viridian\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=viridian&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=viridian&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=viridian&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=viridian&amp;max_dim=168 168w\\\" alt=\\\"Viridian\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Vivid Chartreuse\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vividchartreuse&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vividchartreuse&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vividchartreuse&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=vividchartreuse&amp;max_dim=168 168w\\\" alt=\\\"Vivid Chartreuse\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Sepia\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=sepia&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=sepia&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=sepia&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=sepia&amp;max_dim=168 168w\\\" alt=\\\"Sepia\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Seafarer\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seafarer&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seafarer&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seafarer&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seafarer&amp;max_dim=168 168w\\\" alt=\\\"Seafarer\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Shadow Grey\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=shadowgrey&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=shadowgrey&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=shadowgrey&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=shadowgrey&amp;max_dim=168 168w\\\" alt=\\\"Shadow Grey\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Sea Grass\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seagrass&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seagrass&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seagrass&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=seagrass&amp;max_dim=168 168w\\\" alt=\\\"Sea Grass\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"French Ultra Marine\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=frenchultramarine&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=frenchultramarine&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=frenchultramarine&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=frenchultramarine&amp;max_dim=168 168w\\\" alt=\\\"French Ultra Marine\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Coffee\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coffee&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coffee&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coffee&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=coffee&amp;max_dim=168 168w\\\" alt=\\\"Coffee\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Majestic Violet\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=majesticviolet&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=majesticviolet&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=majesticviolet&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=majesticviolet&amp;max_dim=168 168w\\\" alt=\\\"Majestic Violet\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Deep Purple\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=deeppurple&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=deeppurple&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=deeppurple&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=deeppurple&amp;max_dim=168 168w\\\" alt=\\\"Deep Purple\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Silvery Shimmer\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=silver&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=silver&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=silver&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=silver&amp;max_dim=168 168w\\\" alt=\\\"Silvery Shimmer\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n  <div class=\\\"AttributeValueThumbnail AttributeValueThumbnail--hoverEnabled AttributeValueThumbnail--size56\\\">\\n    <button aria-pressed=\\\"false\\\" class=\\\"AttributeValueThumbnail-button\\\" title=\\\"Golden Glitz\\\"><img src=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=gold&amp;max_dim=56\\\" sizes=\\\"56px\\\" srcset=\\\"https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=gold&amp;max_dim=56 56w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=gold&amp;max_dim=112 112w, https://rlv.zcache.ca/svc/view?rlvnet=1&amp;realview=113056813700701867&amp;inkpadcolor=gold&amp;max_dim=168 168w\\\" alt=\\\"Golden Glitz\\\" class=\\\"AttributeValueThumbnail-realview\\\">\\n    </button>\\n  </div>\\n</div> \"],[1,\"\\n\"],[3,\"  \"],[1,\"\\n\\n  \"],[10,\"h3\"],[14,1,\"bottom\"],[12],[1,\"Contact us today for a free consultation if you have an idea and want to make it happen\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "novadiscs/components/stamps.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("novadiscs/components/stamps_form", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <style media="screen">
    label {
      font-weight: bold;
      word-spacing: normal;
      padding-right:10px;
    }
  </style>
  
  <body>
  <table>
    <thead>
      <tr>
        <th class="center">Stamp Order Form - Basic Info</th>
      </tr>
    </thead>
    <div class="center" style="word-spacing: 20px;">
      <label for="fullName">Full Name: </label>
      <input type="text" id="fullName" placeholder="Name"/>
    <br>
      <label for="PDGA Number">PDGA Number: </label>
      <input type="number" id="pdgaNumber" placeholder="PDGA Number" value=""/>
    <br>
      <label for="Phone Number">Phone Number: </label>
      <input type="number" id="phoneNumber" placeholder="999-999-9999" value=""/>
    <br>
      <label for="Email">Email: </label>
      <input type="text" id="email" placeholder="someone@something.com" value=""/>
    <br>
  
  </div>
  </table>
  
  <table>
    <thead>
      <tr>
        <th class="center">Stamp Type</th>
      </tr>
    </thead>
    <div class="center" style="word-spacing: 20px;">
      <input type="radio" name="stampType" id="basicStamp" value="Basic Stamp" checked=true/>
      <label for="basicStamp">Basic Stamp Starting at $35</label>
      <br>
      <input type="radio" name="stampType" id="advancedStamp" value="Advanced Stamp requires attachment"/>
      <label for="advancedStamp">Advanced Stamp Starting at $40</label>
      <br>
      <input type="radio" name="stampType" id="expertStamp" value="Expert Stamp requires attachment"/>
      <label for="expertStamp">Expert Stamp Starting at $50+</label>
      <br>
    </div>
  </table>
  
  <table>
    <thead>
      <tr>
        <th class="center">Extras</th>
      </tr>
    </thead>
    <div class="center" style="word-spacing: 20px;">
      <label for="inkColor">Preferred Ink Color</label>
      <input type="text" name="inkColor" id="inkColor" placeholder="black" value=""/>
      <p style="word-spacing: normal;">
        Currenlty the only ink we are able to offer is black,
        any other colors can be purchased from your local craft store
      </p>
  
      <div style="justify-content: center; display: flex; gap: 10px; padding-bottom: 10px;">
        <input type="checkbox" name="reuse" id="reuse"/>
        <label for="reuse" style="padding-top: 5px">No reuse; $5</label>
      </div>
  
      <p style="word-spacing: normal;">
        If you are providing creative direction on an image that you don't wish to see anyone else with
        there is an extra fee of $5 as all creative work is the property of the designer and Nova Discs
      </p>
  
      <label for="comments">Additional Comments</label><br>
      <textarea
        name="comments" id="comments" rows=5 style="width: 80%;"
        placeholder="Additional Comments to help us create the perfect stamp for your game"
      />
      <br>
      <br>
      <p style="word-spacing: normal">
        Submitting a response will prompt you to send us an email using your devices default mail
        app. Allow the application to open and verify all the information in the email is correct,
        as well as include any picture attachments.
  
        Someone will be in touch with you as soon as we have reviewed your order.
      </p>
      <button class="button" onClick="submit()" style="background: #3CAEA3;" type="button">Submit</button>
    </div>
  </table>
  </body>
  
  <script>
  function submit() {
    var name = document.getElementById("fullName").value;
    var pdgaNumber = document.getElementById("pdgaNumber").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
  
    var inkColor = document.getElementById("inkColor").value;
    if(inkColor.length= == 0){
      inkColor = "Black"
    }
  
    var comments = document.getElementById("comments").value;
  
    var reuseCheckBoxes = document.getElementsByName("reuse");
    for(i = 0; i < reuseCheckBoxes.length; i++) {
        if(reuseCheckBoxes[i].checked)
        reuseChecked = true;
        else
        reuseChecked = false;
    }
  
    var stampRadio = document.getElementsByName("stampType");
    for(i = 0; i < stampRadio.length; i++) {
        if(stampRadio[i].checked)
        stampType = stampRadio[i].value;
    }
  
    info = {
      "Name": name,
      "PDGA Number": pdgaNumber,
      "Phone Number": phoneNumber,
      "Email": email,
      "Type of Stamp": stampType,
      "Ink Color": inkColor,
      "Additional Comments": comments,
      "Reuse fee": reuseChecked
    };
  
    if (name.length == 0 || pdgaNumber.length == 0 || phoneNumber.length == 0 || email.length == 0){
        alert("All basic information is required.")
    }
    else if (confirm("You will now be redirected to send an email for your order. Okay?")){
        resp = "Dear Nova Discs Stamps,\n" +
                "I would like to purchase a stamp with the following information\n\n";
        for (const [key, value] of Object.entries(info)){
            resp = resp + "\n" + key + ": " + value
        }
        ebody = encodeURIComponent(resp);
        window.location = "mailto:novadiscsstamps@gmail.com?subject=Custom Stamp Orders&body=" + ebody
    }
  }
  </script>
  
  */
  {
    "id": "LxlGJ61h",
    "block": "[[[1,\"\\n\"],[10,\"style\"],[14,\"media\",\"screen\"],[12],[1,\"\\n  label {\\n    font-weight: bold;\\n    word-spacing: normal;\\n    padding-right:10px;\\n  }\\n\"],[13],[1,\"\\n\\n\"],[10,\"body\"],[12],[1,\"\\n\"],[10,\"table\"],[12],[1,\"\\n  \"],[10,\"thead\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[14,0,\"center\"],[12],[1,\"Stamp Order Form - Basic Info\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"center\"],[14,5,\"word-spacing: 20px;\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"fullName\"],[12],[1,\"Full Name: \"],[13],[1,\"\\n    \"],[10,\"input\"],[14,1,\"fullName\"],[14,\"placeholder\",\"Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n  \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"PDGA Number\"],[12],[1,\"PDGA Number: \"],[13],[1,\"\\n    \"],[10,\"input\"],[14,1,\"pdgaNumber\"],[14,\"placeholder\",\"PDGA Number\"],[14,2,\"\"],[14,4,\"number\"],[12],[13],[1,\"\\n  \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"Phone Number\"],[12],[1,\"Phone Number: \"],[13],[1,\"\\n    \"],[10,\"input\"],[14,1,\"phoneNumber\"],[14,\"placeholder\",\"999-999-9999\"],[14,2,\"\"],[14,4,\"number\"],[12],[13],[1,\"\\n  \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"Email\"],[12],[1,\"Email: \"],[13],[1,\"\\n    \"],[10,\"input\"],[14,1,\"email\"],[14,\"placeholder\",\"someone@something.com\"],[14,2,\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n  \"],[10,\"br\"],[12],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,\"table\"],[12],[1,\"\\n  \"],[10,\"thead\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[14,0,\"center\"],[12],[1,\"Stamp Type\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"center\"],[14,5,\"word-spacing: 20px;\"],[12],[1,\"\\n    \"],[10,\"input\"],[14,3,\"stampType\"],[14,1,\"basicStamp\"],[14,2,\"Basic Stamp\"],[14,\"checked\",\"true\"],[14,4,\"radio\"],[12],[13],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"basicStamp\"],[12],[1,\"Basic Stamp Starting at $35\"],[13],[1,\"\\n    \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"input\"],[14,3,\"stampType\"],[14,1,\"advancedStamp\"],[14,2,\"Advanced Stamp requires attachment\"],[14,4,\"radio\"],[12],[13],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"advancedStamp\"],[12],[1,\"Advanced Stamp Starting at $40\"],[13],[1,\"\\n    \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"input\"],[14,3,\"stampType\"],[14,1,\"expertStamp\"],[14,2,\"Expert Stamp requires attachment\"],[14,4,\"radio\"],[12],[13],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"expertStamp\"],[12],[1,\"Expert Stamp Starting at $50+\"],[13],[1,\"\\n    \"],[10,\"br\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,\"table\"],[12],[1,\"\\n  \"],[10,\"thead\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[14,0,\"center\"],[12],[1,\"Extras\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"center\"],[14,5,\"word-spacing: 20px;\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"inkColor\"],[12],[1,\"Preferred Ink Color\"],[13],[1,\"\\n    \"],[10,\"input\"],[14,3,\"inkColor\"],[14,1,\"inkColor\"],[14,\"placeholder\",\"black\"],[14,2,\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n    \"],[10,2],[14,5,\"word-spacing: normal;\"],[12],[1,\"\\n      Currenlty the only ink we are able to offer is black,\\n      any other colors can be purchased from your local craft store\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,5,\"justify-content: center; display: flex; gap: 10px; padding-bottom: 10px;\"],[12],[1,\"\\n      \"],[10,\"input\"],[14,3,\"reuse\"],[14,1,\"reuse\"],[14,4,\"checkbox\"],[12],[13],[1,\"\\n      \"],[10,\"label\"],[14,\"for\",\"reuse\"],[14,5,\"padding-top: 5px\"],[12],[1,\"No reuse; $5\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,2],[14,5,\"word-spacing: normal;\"],[12],[1,\"\\n      If you are providing creative direction on an image that you don't wish to see anyone else with\\n      there is an extra fee of $5 as all creative work is the property of the designer and Nova Discs\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"label\"],[14,\"for\",\"comments\"],[12],[1,\"Additional Comments\"],[13],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"textarea\"],[14,3,\"comments\"],[14,1,\"comments\"],[14,\"rows\",\"5\"],[14,5,\"width: 80%;\"],[14,\"placeholder\",\"Additional Comments to help us create the perfect stamp for your game\"],[12],[13],[1,\"    \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,2],[14,5,\"word-spacing: normal\"],[12],[1,\"\\n      Submitting a response will prompt you to send us an email using your devices default mail\\n      app. Allow the application to open and verify all the information in the email is correct,\\n      as well as include any picture attachments.\\n\\n      Someone will be in touch with you as soon as we have reviewed your order.\\n    \"],[13],[1,\"\\n    \"],[10,\"button\"],[14,0,\"button\"],[14,\"onClick\",\"submit()\"],[14,5,\"background: #3CAEA3;\"],[14,4,\"button\"],[12],[1,\"Submit\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,\"script\"],[12],[1,\"\\nfunction submit() {\\n  var name = document.getElementById(\\\"fullName\\\").value;\\n  var pdgaNumber = document.getElementById(\\\"pdgaNumber\\\").value;\\n  var phoneNumber = document.getElementById(\\\"phoneNumber\\\").value;\\n  var email = document.getElementById(\\\"email\\\").value;\\n\\n  var inkColor = document.getElementById(\\\"inkColor\\\").value;\\n  if(inkColor.length= == 0){\\n    inkColor = \\\"Black\\\"\\n  }\\n\\n  var comments = document.getElementById(\\\"comments\\\").value;\\n\\n  var reuseCheckBoxes = document.getElementsByName(\\\"reuse\\\");\\n  for(i = 0; i < reuseCheckBoxes.length; i++) {\\n      if(reuseCheckBoxes[i].checked)\\n      reuseChecked = true;\\n      else\\n      reuseChecked = false;\\n  }\\n\\n  var stampRadio = document.getElementsByName(\\\"stampType\\\");\\n  for(i = 0; i < stampRadio.length; i++) {\\n      if(stampRadio[i].checked)\\n      stampType = stampRadio[i].value;\\n  }\\n\\n  info = {\\n    \\\"Name\\\": name,\\n    \\\"PDGA Number\\\": pdgaNumber,\\n    \\\"Phone Number\\\": phoneNumber,\\n    \\\"Email\\\": email,\\n    \\\"Type of Stamp\\\": stampType,\\n    \\\"Ink Color\\\": inkColor,\\n    \\\"Additional Comments\\\": comments,\\n    \\\"Reuse fee\\\": reuseChecked\\n  };\\n\\n  if (name.length == 0 || pdgaNumber.length == 0 || phoneNumber.length == 0 || email.length == 0){\\n      alert(\\\"All basic information is required.\\\")\\n  }\\n  else if (confirm(\\\"You will now be redirected to send an email for your order. Okay?\\\")){\\n      resp = \\\"Dear Nova Discs Stamps,\\\\n\\\" +\\n              \\\"I would like to purchase a stamp with the following information\\\\n\\\\n\\\";\\n      for (const [key, value] of Object.entries(info)){\\n          resp = resp + \\\"\\\\n\\\" + key + \\\": \\\" + value\\n      }\\n      ebody = encodeURIComponent(resp);\\n      window.location = \\\"mailto:novadiscsstamps@gmail.com?subject=Custom Stamp Orders&body=\\\" + ebody\\n  }\\n}\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "novadiscs/components/stamps_form.hbs",
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
    this.route('scorecard');
    this.route('players');
    this.route('standings');
    this.route('stamps');
  });
});
;define("novadiscs/routes/stamps", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class StampsRoute extends _route.default {}

  _exports.default = StampsRoute;
});
;define("novadiscs/routes/standings", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class StandingsRoute extends _route.default {}

  _exports.default = StandingsRoute;
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
    "id": "HEiVpWER",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"About Super Rentals\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    The Super Rentals website is a delightful project created to explore Ember.\\n    By building a property rental site, we can simultaneously imagine traveling\\n    AND building Ember applications.\\n    Form\\n  \"],[13],[1,\"\\n  \"],[3,\" <LinkTo @route=\\\"contact\\\" class=\\\"button\\\">Contact Us</LinkTo> \"],[1,\"\\n\\n  \"],[10,\"form\"],[14,3,\"contact\"],[14,\"netlify\",\"\"],[12],[1,\"\\n    \"],[10,2],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Name \"],[10,\"input\"],[14,3,\"name\"],[14,4,\"text\"],[12],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,2],[12],[1,\"\\n      \"],[10,\"label\"],[12],[1,\"Email \"],[10,\"input\"],[14,3,\"email\"],[14,4,\"email\"],[12],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,2],[12],[1,\"\\n      \"],[10,\"button\"],[14,4,\"submit\"],[12],[1,\"Send\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"jumbo\"]]",
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
    "id": "g0d67nYD",
    "block": "[[[1,[28,[35,0],[\"NovaDiscs\"],null]],[1,\"\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[3,\" <NavBar /> \"],[1,\"\\n  \"],[8,[39,1],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"body\"],[12],[1,\"\\n    \"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"nav-bar2\",\"component\",\"-outlet\"]]",
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
    "id": "NsI5NzK+",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"NovaDiscs Putting League!\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"This site is currently a beta. Nothing is guarunteed. Leaving the site may cause you to lose any results in the scorecard.\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"When submitting a scorecard you will be prompted to send an email. Please do not change the message body or 'To' field\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"If you are unable to submit a scorecard, take a screenshot and send it to Chris or email it to novadiscsscorecards@gmail.com\"],[13],[1,\"\\n\\n  \"],[10,\"br\"],[12],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,3],[14,6,\"https://docs.google.com/forms/d/e/1FAIpQLSddxtYoe2ZTw1mIH1KPpnj9lWQ3qNYUCukqGS10rCWLybCt7w/viewform\"],[12],[1,\"Click Here\"],[13],[1,\" to register for the league\\n    \"],[10,\"br\"],[12],[13],[1,\" Cost is $10 per night per person, the league runs Thursdays at 9pm, starting January 5th for 6 weeks.\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"br\"],[12],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,\" \"],[10,3],[14,6,\"mailto:novadiscs@gmail.com\"],[12],[1,\"Contact Us\"],[13],[1,\" if you have any other questions \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"finalButtons center\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"button\"],[24,5,\"background: #3CAEA3; margin: 5px 10px;\"]],[[\"@route\"],[\"scorecard\"]],[[\"default\"],[[[[1,\"Scorecard\"]],[]]]]],[1,\"\\n    \"],[3,\" <LinkTo @route=\\\"players\\\" class=\\\"button\\\" style=\\\"background: #3CAEA3; margin: 5px 10px;\\\">Find your Player ID</LinkTo> \"],[1,\"\\n    \"],[8,[39,1],[[24,0,\"button\"],[24,5,\"background: #3CAEA3; margin: 5px 10px;\"]],[[\"@route\"],[\"standings\"]],[[\"default\"],[[[[1,\"Standings\"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"jumbo\",\"link-to\"]]",
    "moduleName": "novadiscs/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("novadiscs/templates/players", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "ltGgTpRq",
    "block": "[[[1,[28,[35,0],[\"Players\"],null]],[1,\"\\n\"],[10,\"h2\"],[12],[1,\"Registered Players\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  If you don't see your name below talk to Chris to get a Player ID\\n\"],[13],[1,\"\\n\\n\"],[10,\"body\"],[12],[1,\"\\n  \"],[10,\"table\"],[14,1,\"playerTable\"],[14,0,\"playerTable\"],[12],[1,\"\\n    \"],[10,\"thead\"],[12],[1,\"\\n      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"th\"],[14,1,\"string\"],[14,\"onclick\",\"sortByName()\"],[12],[1,\"Player Name ↑↓\"],[13],[1,\"\\n        \"],[10,\"th\"],[14,1,\"number\"],[14,\"onclick\",\"sortByID()\"],[12],[1,\"Player ID\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n      \"],[10,\"form\"],[14,\"action\",\"https://formspree.io/f/{form_id}\"],[14,\"method\",\"post\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,\"for\",\"email\"],[12],[1,\"Your Email\"],[13],[1,\"\\n        \"],[10,\"input\"],[14,3,\"Email\"],[14,1,\"email\"],[14,4,\"email\"],[12],[13],[1,\"\\n        \"],[10,\"button\"],[14,4,\"submit\"],[12],[1,\"Submit\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n    \"],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\\n\"],[10,\"script\"],[14,4,\"text/javascript\"],[12],[1,\"\\n\\n    var players = [\\n      // {\\\"Player Name\\\": \\\"\\\", \\\"Player ID\\\": 0},\\n      {\\\"Player Name\\\": \\\"Chris Bourque\\\", \\\"Player ID\\\": 1},\\n      {\\\"Player Name\\\": \\\"Mandy Isenor\\\", \\\"Player ID\\\": 2},\\n      {'Player Name': 'Brandon Kehoe', 'Player ID':3},\\n      {'Player Name': 'Ian McShane', 'Player ID':4},\\n      {'Player Name': 'Brandon Crawford', 'Player ID':5},\\n      {'Player Name': 'Barry Banks', 'Player ID':6},\\n      {'Player Name': 'David Gillett', 'Player ID':7},\\n      {'Player Name': 'Cameron Mason', 'Player ID':8},\\n      {'Player Name': 'Dan Hendricken', 'Player ID':9},\\n      {'Player Name': 'Matthew Brunet', 'Player ID':10},\\n      {'Player Name': 'Jonathan Colborne', 'Player ID':11},\\n      {'Player Name': 'Adam Berry', 'Player ID':12},\\n      {'Player Name': 'Jonny Furlong', 'Player ID':13},\\n      {'Player Name': 'Heather Edgett', 'Player ID':14},\\n      {'Player Name': 'Patrick Toole', 'Player ID':15},\\n      {'Player Name': 'Brady Giles', 'Player ID':16},\\n      {'Player Name': 'Tony Giles', 'Player ID':17},\\n      {'Player Name': 'Griffin Giles', 'Player ID':18},\\n      {'Player Name': 'Scott Guthrie', 'Player ID':19},\\n      {'Player Name': 'Simon MacIntyre', 'Player ID':20},\\n      {'Player Name': 'Evan Edgett', 'Player ID':21},\\n      {'Player Name': 'Adam Dowe', 'Player ID':22},\\n      {'Player Name': 'Tony Brown', 'Player ID':23},\\n      {'Player Name': 'Blair Jensen', 'Player ID':24},\\n      {'Player Name': 'Dwayne Crawford', 'Player ID':25},\\n      {'Player Name': 'Hunter Treneer', 'Player ID':26},\\n\\n    ];\\n\\n    var columns = [\\\"Player Name\\\", \\\"Player ID\\\"];\\n    var table = document.getElementById('playerTable');\\n    var t = \\\"\\\";\\n\\n    for (var i = 0; i < players.length; i++)\\n    {\\n        var row = table.insertRow( -1 ); // -1 is insert as last\\n        for( var j = 0; j < columns.length; j++ ){\\n            var cell = row.insertCell( - 1 ); // -1 is insert as last\\n            cell.className = columns[j]; //\\n            cell.innerHTML = players[i][columns[j]]\\n        }\\n    }\\n\\n    var name_order = true\\n\\n    function sortByName() {\\n      if (name_order){\\n        document.getElementById(\\\"string\\\").innerHTML = \\\"Player Name ↑\\\"\\n\\n        var table, rows, switching, i, x, y, shouldSwitch;\\n        table = document.getElementById(\\\"playerTable\\\");\\n        switching = true;\\n        /* Make a loop that will continue until\\n        no switching has been done: */\\n        while (switching) {\\n          // Start by saying: no switching is done:\\n          switching = false;\\n          rows = table.rows;\\n          /* Loop through all table rows (except the\\n          first, which contains table headers): */\\n          for (i = 1; i < (rows.length - 1); i++) {\\n            // Start by saying there should be no switching:\\n            shouldSwitch = false;\\n            /* Get the two elements you want to compare,\\n            one from current row and one from the next: */\\n            x = rows[i].getElementsByTagName(\\\"TD\\\")[0];\\n            y = rows[i + 1].getElementsByTagName(\\\"TD\\\")[0];\\n            // Check if the two rows should switch place:\\n            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {\\n              // If so, mark as a switch and break the loop:\\n              shouldSwitch = true;\\n              break;\\n            }\\n          }\\n          if (shouldSwitch) {\\n            /* If a switch has been marked, make the switch\\n            and mark that a switch has been done: */\\n            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);\\n            switching = true;\\n          }\\n        }\\n        name_order = false\\n      } else {\\n        document.getElementById(\\\"string\\\").innerHTML = \\\"Player Name ↓\\\"\\n\\n        var table, rows, switching, i, x, y, shouldSwitch;\\n        table = document.getElementById(\\\"playerTable\\\");\\n        switching = true;\\n        /* Make a loop that will continue until\\n        no switching has been done: */\\n        while (switching) {\\n          // Start by saying: no switching is done:\\n          switching = false;\\n          rows = table.rows;\\n          /* Loop through all table rows (except the\\n          first, which contains table headers): */\\n          for (i = 1; i < (rows.length - 1); i++) {\\n            // Start by saying there should be no switching:\\n            shouldSwitch = false;\\n            /* Get the two elements you want to compare,\\n            one from current row and one from the next: */\\n            x = rows[i + 1].getElementsByTagName(\\\"TD\\\")[0];\\n            y = rows[i].getElementsByTagName(\\\"TD\\\")[0];\\n            // Check if the two rows should switch place:\\n            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {\\n              // If so, mark as a switch and break the loop:\\n              shouldSwitch = true;\\n              break;\\n            }\\n          }\\n          if (shouldSwitch) {\\n            /* If a switch has been marked, make the switch\\n            and mark that a switch has been done: */\\n            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);\\n            switching = true;\\n          }\\n        }\\n        name_order = true\\n      }\\n    }\\n\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\"]]",
    "moduleName": "novadiscs/templates/players.hbs",
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
    "id": "no0vgip1",
    "block": "[[[1,[28,[35,0],[\"Scorecard\"],null]],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\\n\"],[3,\" <EmberTable as |t|>\\n  <t.head @columns={{Scoresheet.columns}} />\\n\\n  <t.body @rows={{Scoresheet.rows}} />\\n</EmberTable> \"],[1,\"\\n\\n\"],[3,\" <article class=\\\"puttingleaguescoresheet\\\">\\n  <div class=\\\"details\\\">\\n    <h3>Grand Old Mansion</h3>\\n    <div class=\\\"detail owner\\\">\\n      <span>Owner:</span> Veruca Salt\\n    </div>\\n    <div class=\\\"detail type\\\">\\n      <span>Type:</span> Standalone\\n    </div>\\n    <div class=\\\"detail location\\\">\\n      <span>Location:</span> San Francisco\\n    </div>\\n    <div class=\\\"detail bedrooms\\\">\\n      <span>Number of bedrooms:</span> 15\\n    </div>\\n  </div>\\n</article> \"],[1,\"\\n\"]],[],false,[\"page-title\",\"puttingleaguescoresheet\"]]",
    "moduleName": "novadiscs/templates/scorecard.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("novadiscs/templates/stamps", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "h+C/Ks56",
    "block": "[[[1,[28,[35,0],[\"Custom Stamps\"],null]],[1,\"\\n\"],[3,\" Jump to Order Form \"],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n\"],[8,[39,2],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"stamps\",\"stamps-form\"]]",
    "moduleName": "novadiscs/templates/stamps.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("novadiscs/templates/standings", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "3M1yvzNv",
    "block": "[[[1,[28,[35,0],[\"Standings\"],null]],[1,\"\\n\\n\"],[10,\"style\"],[14,\"media\",\"screen\"],[12],[1,\"\\n#toc_container {\\n  background: #f9f9f9 none repeat scroll 0 0;\\n  /* border: 1px solid #aaa; */\\n  display: table;\\n  font-size: 95%;\\n  margin-bottom: 1em;\\n  padding: 20px;\\n  width: auto;\\n}\\n\\n.toc_title {\\n  font-weight: 700;\\n  text-align: center;\\n}\\n\\n#toc_container li, #toc_container ul, #toc_container ul li{\\n  list-style: outside none none !important;\\n}\\nul {\\n  margin-left: 20px;\\n}\\n\"],[13],[1,\"\\n\\n\\n  \"],[10,0],[14,1,\"toc_container\"],[12],[1,\"\\n  \"],[10,2],[14,0,\"toc_title\"],[12],[1,\"Contents\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[10,3],[14,6,\"#top5\"],[12],[1,\"Top 5 Leaderboard\"],[13],[13],[1,\"\\n    \"],[10,\"li\"],[12],[10,3],[14,6,\"#jan05\"],[12],[1,\"Top 3 Players of the Day\"],[13],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"#jan05\"],[12],[1,\"January 5th, 2023\"],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\\n\"],[10,\"body\"],[12],[1,\"\\n  \"],[10,\"table\"],[14,1,\"top5\"],[14,0,\"standingsTable\"],[12],[1,\"\\n    \"],[10,\"caption\"],[12],[1,\"Top 5 Players \"],[10,\"br\"],[12],[13],[1,\" Sum of best 4 days\"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Player Name\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Total of 4 Best Days\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Luke Martelli\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"130\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Jonathan Colborne\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"127\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Brandon Kehoe\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"107\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Toby Adams\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"93\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Adam Dowe\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"90\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"br\"],[12],[13],[1,\"\\n\\n  \"],[10,\"table\"],[14,1,\"jan05\"],[14,0,\"standingsTable\"],[12],[1,\"\\n    \"],[10,\"caption\"],[12],[1,\"Top 3 scores of the day \"],[10,\"br\"],[12],[13],[1,\" January 5th, 2023\"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Player Name\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Round Score\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Luke Martelli\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"130\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Jonathan Colborne\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"127\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Brandon Kehoe\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"107\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"br\"],[12],[13],[1,\"\\n\\n\\n  \"],[10,0],[14,0,\"center\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,0,\"button\"],[14,3,\"button\"],[14,\"onclick\",\"document.body.scrollTop = document.documentElement.scrollTop = 0;\"],[12],[1,\"Return to Top\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[10,\"script\"],[14,4,\"text/javascript\"],[12],[1,\"\\n  function top(){\\n    document.body.scrollTop = document.documentElement.scrollTop = 0;\\n  }\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\"]]",
    "moduleName": "novadiscs/templates/standings.hbs",
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
            require("novadiscs/app")["default"].create({"name":"novadiscs","version":"0.0.0+a4d16fac"});
          }
        
//# sourceMappingURL=novadiscs.map
