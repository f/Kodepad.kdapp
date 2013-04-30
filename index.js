/* Compiled by KD */
(function() {
/* KDAPP STARTS */
/* BLOCK STARTS: ./app/settings.coffee */
var Kodepad;

Kodepad = {
  Settings: {
    theme: "ace/theme/monokai",
    exampleCode: null,
    exampleCSS: null,
    aceThrottle: 400
  },
  Core: {
    Utils: null,
    LiveViewer: null,
    AppCreator: null
  },
  Views: {
    Editor: null,
    MainView: null
  }
};

Kodepad.Settings.exampleCodes = [];

/*
# Sample Example
*/


Kodepad.Settings.exampleCodes.push({
  title: "Sample",
  coffee: "# Your awesome Koding App Code\n\n{nickname} = KD.whoami().profile\n\nclass MainView extends JView\n  constructor:->\n    super\n    @header = new KDHeaderView\n      type: \"big\"\n      title: \"Welcome to Kodepad!\"\n\n    @name = new KDInputView\n      placeholder: \"Your name\"\n\n    @button = new KDButtonView\n      title: \"Say hello!\"\n      callback: =>\n        name = @name.getValue() or nickname\n        @_notify?.destroy()\n        @_notify = new KDNotificationView\n          title: \"Hello, \#{name}!\"\n\n  pistachio:->\n    \"\"\"\n    {{> this.header}}\n    Just change something from the left pane.\n    <br><br>\n    <strong>And try some interactions!:</strong>\n    {{> this.name}}\n    {{> this.button}}\n    \"\"\"\n  viewAppended: ->\n    @setTemplate do @pistachio\n\nappView.addSubView new MainView\n  cssClass: \"my-koding-app\"",
  css: "\n/* Your awesome Koding App CSS Code */\n\n.my-koding-app {\n  margin: 10px;\n  padding: 0 10px 10px;\n  width: auto;\n  height: auto;\n  background-color: rgba(255,255,255,0.9);\n  border-radius: 3px;\n}\n\n.my-koding-app input {\n  margin: 20px 0;\n  background-color: #ccc !important;\n}"
});

/*
# Blank Code Example
*/


Kodepad.Settings.exampleCodes.push({
  title: "Pure Blank",
  coffee: "",
  css: ""
});

/*
# Blank Application Code Example
*/


Kodepad.Settings.exampleCodes.push({
  title: "Blank Application Template",
  coffee: "{nickname} = KD.whoami().profile\n\nclass MainView extends JView\n  constructor:->\n    super\n    @header = new KDHeaderView\n      type: \"big\"\n      title: \"This is the header, \#{nickname}!\"\n\n    # Your app code here,\n    # nickname variable is the username of the app user.\n\n  pistachio:->\n    \"\"\"\n    {{> this.header}}\n    \"\"\"\n  viewAppended: ->\n    @setTemplate do @pistachio\n\nappView.addSubView new MainView\n  cssClass: \"your-app-name\"",
  css: ".your-app-name {\n  /* Your app CSS */\n}"
});

Kodepad.Settings.exampleCodes.push({
  title: "Bouncing Ball",
  coffee: "# A bouncing ball example by Gokmen Goksel\n# @gokmen - http://gokmen.koding.com\n\nclass MainView extends JView\n\n  constructor:->\n    super\n \n    @ball = new KDView\n      cssClass : 'ball'\n \n    @_width   = 400\n    @_height  = 300\n \n    @.$().css width : @_width\n    @.$().css height: @_height\n \n    @_x = @x = @_y = @y = 1\n \n    @updateBallPosition()\n \n  updateBallPosition:->\n \n    @x += @_x\n    @y += @_y\n \n    @_x = -1 if @x >= @_width - 50\n    @_x =  1 if @x == 0\n \n    @_y = -1 if @y >= @_height - 50\n    @_y =  1 if @y == 0\n \n    @ball.$().css top: @y\n    @ball.$().css left:@x\n \n    setTimeout =>\n      @updateBallPosition()\n    , 5\n \n  pistachio:->\n    \"\"\"\n    {{> this.ball}}\n    \"\"\"\n \nappView.addSubView new MainView\n  cssClass: \"bounce\"",
  css: ".bounce {\n  border: 1px solid orange;\n  margin: 10px;\n}\n\n.bounce .ball {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  background-color: red;\n}"
});

/*
# Kite Example
*/


Kodepad.Settings.exampleCodes.push({
  title: "The Terminal: Kite Example",
  coffee: "{nickname} = KD.whoami().profile\n\nclass MainView extends JView\n  constructor:->\n    super\n    @header = new KDHeaderView\n      type: \"big\"\n      title: \"The Terminal: Kite Example\"\n      \n    @_console = new KDView\n      tagName: 'pre'\n      partial: \"Run some code \#{nickname}!\"\n      \n    @command = new KDInputView\n      cssClass    : 'command'\n      placeholder : 'Write your command'\n      defaultValue: \"ls -la /Users/\#{nickname}/Applications\"\n      \n    @commandButton = new KDButtonView\n      title       : \"Run\"\n      callback    : =>\n        kite = KD.getSingleton(\"kiteController\")\n        kite.run @command.getValue(), (err, response)=>\n          @_console.$().text (err and err.message) or response\n          \n  pistachio:->\n    \"\"\"\n    {{> this.header}}\n    {{> this.command}}\n    {{> this.commandButton}}\n    {{> this._console}}\n    \"\"\"\n  viewAppended: ->\n    @setTemplate do @pistachio\n    \nappView.addSubView new MainView\n  cssClass: \"console\"",
  css: ".console {\n  overflow-y: scroll;\n  padding: 0 10px;\n}\n\n.console pre {\n  height: auto;\n  margin: 0;\n}\n\n.console input {\n  float: left;\n  margin: 10px 0;\n}\n\n.console button {\n  float: left;\n  margin: 10px 10px;\n}"
});

Kodepad.Settings.exampleCodes.push({
  title: "Sample.kdapp (Really.)",
  coffee: "# WOW! This is inception!!!\n\n{KDView}                = KD.classes\n{KDSplitView}           = KD.classes\n{KDInputView}           = KD.classes\n{KDModalView}           = KD.classes\n{KDButtonView}          = KD.classes\n{KDHeaderView}          = KD.classes\n{KDOnOffSwitch}         = KD.classes\n{KDListItemView}        = KD.classes\n{KDNotificationView}    = KD.classes\n{KDListViewController}  = KD.classes\n{KDModalViewWithForms}  = KD.classes\n\nclass SampleApp extends KDView\n\n  viewAppended:->\n\n    super\n\n    # Add Documentation Toggle Button\n    docToggleButton = new KDOnOffSwitch\n      defaultValue  : on\n      title         : \"Show Documentation: \"\n      size          : \"tiny\"\n      cssClass      : \"test-switch\"\n      callback      : (state) ->\n        if state then bottomSplitView.show() else bottomSplitView.hide()\n\n    @addSubView docToggleButton\n\n    # Get User Information\n    {nickname} = KD.whoami().profile\n\n    # Add the Header\n    @addSubView @header = new KDHeaderView\n      type     : \"big\"\n      title    : \"Welcome to your sample application <strong>\#{nickname}</strong> made with KDFramework !\"\n\n    informationView = new KDView\n      cssClass   : \"information-box\"\n      partial    : \"\"\"\n          <p>This is a sample application that you can read the code and get started with. To see usage, go to <code>index.coffee</code>\n          just glance at it, you will know how this page is constructed, and you will be able to make cool stuff.</p><br/>\n\n          <p>We want to provide much better documentation about the capabilities of KDFramework very soon, it is what we made <strong>Koding</strong> with.\n          Basically every single frontend functionality you see on Koding, will be made available to you piece by piece.</p><br/>\n          <p>We will open source KDFramework and publish it to Github so that you can contribute to it, but at this stage\n          it's api is not to be relied upon, and everything can change.</p><br/>\n          \n          <p>Please bear with us, and use its basic functionalities, soon enough you will be able to make amazing realtime applications with it. Enjoy! :)</p>\n      \"\"\"\n\n    # Create Input Test\n    inputView = new KDInputView\n      cssClass      : \"test-input\"\n      placeholder   : \"Write something to create a notification...\"\n      validate      :\n        event       : \"keyup\"\n        rules       :\n          required  : yes\n        messages    :\n          required  : \"That's a very required field...\"\n\n    # Update button state based on Input validation\n    inputView.on \"ValidationError\",  -> testButton.disable()\n    inputView.on \"ValidationPassed\", -> testButton.enable()\n\n    # Create Test Button\n    testButton = new KDButtonView\n      cssClass   : \"clean-gray test-input\"\n      title      : \"Create a Notification\"\n      callback   : ->\n        new KDNotificationView\n          title : inputView.getValue()\n\n    # Disable the Button, we will enable it if validation passes on input\n    testButton.disable()\n\n    # Create a Split View for input and the button\n    inputExampleView  = new KDSplitView\n      type      : \"vertical\"\n      resizable : no\n      sizes     : [\"70%\", \"30%\"]\n      views     : [inputView, testButton]\n\n    buttonExampleView  = new KDView\n      cssClass   : \"button-area\"\n\n    # Create a Modal Test Button\n    modalButton = new KDButtonView\n      cssClass : \"clean-gray test-input\"\n      title    : \"Create a Modal\"\n      callback   : ->\n        modal = new KDModalView\n          title        : \"A Modal with a Title\"\n          content      : \"<div class='modalformline'>Do you want to continue?</div>\"\n          height       : \"auto\"\n          overlay      : yes\n          buttons      :\n            Continue   :\n              loader   :\n                color  : \"#ffffff\"\n                diameter : 16\n              style    : \"modal-clean-gray\"\n              callback : ->\n                new KDNotificationView\n                  title: \"Lets Continue...\"\n                modal.destroy()\n\n    buttonExampleView.addSubView modalButton\n\n    showError = ->\n      new KDNotificationView\n        title    : \"An error occured while running the command\"\n        type     : \"mini\"\n        cssClass : \"error\"\n        duration : 3000\n\n    kiteController = KD.getSingleton \"kiteController\"\n\n    kiteButton = new KDButtonView\n      cssClass   : \"clean-gray test-input\"\n      title      : \"Run a command on Server\"\n      callback   : ->\n        modal = new KDModalViewWithForms\n          title                   : \"Run a command on server-side\"\n          content                 : \"<div class='modalformline'>You can run any bash commands that you run from Terminal</div>\"\n          overlay                 : yes\n          width                   : 600\n          height                  : \"auto\"\n          tabs                    :\n            navigable             : yes\n            forms                 :\n              form                :\n                buttons           :\n                  Run             :\n                    cssClass      : \"modal-clean-gray\"\n                    loader        :\n                      color       : \"#444444\"\n                      diameter    : 12\n                    callback      : ->\n                      command = modal.modalTabs.forms.form.inputs.Command.getValue()\n                      \n                      setTimeout ->\n                        if modal.modalTabs.forms.form.buttons.Run.loader.active\n                          showError()\n                          modal.modalTabs.forms.form.buttons.Clear.getCallback()()\n                      , 8000\n                      \n                      kiteController.run command, (err, res)->\n                        showError() if err\n                        modal.modalTabs.forms.form.inputs.Output.setValue err or res\n                        modal.modalTabs.forms.form.buttons.Run.hideLoader()\n                  Clear           :\n                    cssClass      : \"modal-clean-gray\"\n                    callback      : ->\n                      modal.modalTabs.forms.form.inputs.Output.setValue ''\n                      modal.modalTabs.forms.form.buttons.Run.hideLoader()\n\n                fields            :\n                  Command         :\n                    label         : \"Command:\"\n                    name          : \"command\"\n                    defaultValue  : \"ls -la\"\n                    placeholder   : \"Command to run on Server-Side\"\n                    cssClass      : \"command-input\"\n                  Output          :\n                    label         : \"Output:\"\n                    type          : \"textarea\"\n                    name          : \"output\"\n                    placeholder   : \"The output of command will be here...\"\n                    cssClass      : \"output-screen\"\n\n    buttonExampleView.addSubView kiteButton\n\n    # Open A Koding App\n    openActivityButton = new KDButtonView\n      cssClass   : \"clean-gray test-input\"\n      title      : \"Open Activity Feed\"\n      callback   : ->\n        appManager.openApplication \"Activity\"\n\n    buttonExampleView.addSubView openActivityButton\n\n    # Create a Description View for Property List\n    descriptionView = new KDView\n      cssClass : \"description-view\"\n\n    # Add a Header for Property List\n    descriptionView.addSubView subHeader = new KDHeaderView\n      type     : \"medium\"\n      title    : \"Select a Class from left to see its properties here\"\n\n    # Create Class List Controller to control class data\n    classListController = new KDListViewController\n      viewOptions :\n        itemClass : ClassItemView\n    ,\n      items : ({name: item} for item of KD.classes)\n\n    # Create Class List Controller to control property data\n    propertyListController = new KDListViewController\n      viewOptions :\n        itemClass : PropertyItemView\n\n    # Get their views\n    classList = classListController.getView()\n    descriptionView.addSubView propertyListController.getView()\n\n    # Create a custom KDView and add header and the list on it\n    classView = new KDView\n    classView.addSubView new KDHeaderView\n      type     : \"medium\"\n      title    : \"List of Classes on KD Framework\"\n\n    # Follow showClassDetails event from classList\n    classListView = classListController.getListView()\n    classListView.on \"showClassDetails\", (className)->\n      subHeader.updateTitle className\n      obj = KD.classes[className].prototype\n\n      propertyListController.replaceAllItems (item for item of obj)\n\n    classView.addSubView classList\n\n    # Add the Header\n    examplesHeader = new KDHeaderView\n      type     : \"medium\"\n      title    : \"Examples\"\n\n    # Add documentation view to bottomSplitView\n    bottomSplitView = new KDSplitView\n      type      : \"vertical\"\n      cssClass  : \"class-model-panel\"\n      resizable : yes\n      sizes     : [\"50%\",null]\n      views     : [ classView, descriptionView ]\n\n    topRightSplitView = new KDSplitView\n      type      : \"horizontal\"\n      resizable : no\n      sizes     : [\"20%\", null ,null]\n      views     : [ examplesHeader, inputExampleView, buttonExampleView ]\n\n    topSplitView = new KDSplitView\n      type      : \"vertical\"\n      resizable : no\n      sizes     : [\"50%\",null]\n      views     : [ informationView, topRightSplitView ]\n\n    # Add all of the views to a split\n    mainSplitView = new KDSplitView\n      type      : \"horizontal\"\n      resizable : no\n      sizes     : [\"30%\", null]\n      views     : [ topSplitView, bottomSplitView ]\n\n    # And add that split to the mainView\n    @addSubView mainSplitView\n\nclass ClassItemView extends KDListItemView\n\n  constructor:(options, data)->\n    options.cssClass = \"class-item\"\n    super\n\n  partial:(data)-> \"<a href=#> » \#{data.name}</a>\"\n\n  click:->\n    listView = @getDelegate()\n    listView.emit \"showClassDetails\", @getData().name\n\nclass PropertyItemView extends ClassItemView\n\n  partial:(data)-> \"<a href=#> ► \#{data}</a>\"\n\n  click:->\n    new KDNotificationView\n      title: \"Documentation will be available soon\"\n\n# And let create our App\ndo ->\n  appInstance = new SampleApp\n\n  # appView is a constant that you can use as your app container\n  appView.addSubView appInstance\n",
  css: ".class-model-panel {\n    border-top:1px solid #DDD;\n}\n\n.class-model-panel .kdsplitview-resizer {\n    width: 5px;\n}\n\n.class-item {\n    padding: 2px;\n    padding-left: 6px;\n}\n\n.class-item a {\n    text-decoration:none;\n}\n\n.test-input {\n    margin: 6px;\n    width: 98%;\n}\n\n.test-switch {\n    position: absolute;\n    right: 4px;\n    top: 4px;   \n    z-index:1000;\n}\n\n.test-button {\n    position: absolute;\n    right: 8px;   \n}\n\n.test-input-view {\n    background-color: lightgray;\n}\n\n.command-input, .output-screen {\n    font-family: monospace;\n}\n\n.output-screen {\n    min-height: 200px;\n}\n\n.button-area {\n    text-align: center;   \n}\n\n.information-box {\n    width: auto;\n    height: auto;\n    padding: 10px;\n    background-color: #EEE;\n    border: 1px solid #DDD;\n    border-radius: 4px;\n    margin: 4px;\n}"
});
/* BLOCK STARTS: ./app/core.coffee */
Kodepad.Core.Utils = (function() {
  var _this = this;

  function Utils() {}

  Utils.notify = function(message) {
    var _ref;

    if ((_ref = Utils.instance) != null) {
      _ref.destroy();
    }
    return Utils.instance = new KDNotificationView({
      type: "mini",
      title: message
    });
  };

  return Utils;

}).call(this);

Kodepad.Core.LiveViewer = (function() {
  var notify;

  notify = Kodepad.Core.Utils.notify;

  LiveViewer.getSingleton = function() {
    var _ref;

    return (_ref = LiveViewer.instance) != null ? _ref : LiveViewer.instance = new LiveViewer;
  };

  LiveViewer.prototype.active = true;

  LiveViewer.prototype.pistachios = /\{(\w*)?(\#\w*)?((?:\.\w*)*)(\[(?:\b\w*\b)(?:\=[\"|\']?.*[\"|\']?)\])*\{([^{}]*)\}\s*\}/g;

  function LiveViewer() {
    this.sessionId = KD.utils.uniqueId("kodepadSession");
  }

  LiveViewer.prototype.setPreviewView = function(previewView) {
    this.previewView = previewView;
  };

  LiveViewer.prototype.setSplitView = function(splitView) {
    this.splitView = splitView;
  };

  LiveViewer.prototype.setMainView = function(mainView) {
    this.mainView = mainView;
  };

  LiveViewer.prototype.previewCode = function(code) {
    var _this = this;

    if (!this.active) {
      return;
    }
    return require(["https://raw.github.com/jashkenas/coffee-script/master/extras/coffee-script.js"], function(Coffee) {
      var JS, error;

      window.appView = _this.previewView;
      try {
        JS = Coffee.compile(code);
        _this.previewView.destroySubViews();
        code = code.replace(_this.pistachios, function(pistachio) {
          return pistachio.replace(/\@/g, 'this.');
        });
        return Coffee.run(code);
      } catch (_error) {
        error = _error;
        return notify(error.message);
      } finally {
        delete window.appView;
      }
    });
  };

  LiveViewer.prototype.previewCSS = function(code) {
    var css, session;

    if (!this.active) {
      return;
    }
    session = "__kodepadCSS" + this.sessionId;
    if (window[session]) {
      try {
        window[session].remove();
      } catch (_error) {}
    }
    css = $("<style scoped></style>");
    css.html(code);
    window[session] = css;
    return this.previewView.domElement.prepend(window[session]);
  };

  return LiveViewer;

}).call(this);

Kodepad.Core.AppCreator = (function() {
  var notify;

  function AppCreator() {}

  notify = Kodepad.Core.Utils.notify;

  AppCreator.getSingleton = function() {
    var _ref;

    return (_ref = AppCreator.instance) != null ? _ref : AppCreator.instance = new AppCreator;
  };

  AppCreator.prototype.manifestTemplate = function(appName) {
    var firstName, lastName, nickname, _ref;

    _ref = KD.whoami().profile, firstName = _ref.firstName, lastName = _ref.lastName, nickname = _ref.nickname;
    return {
      manifest: "{\n  \"devMode\": true,\n  \"version\": \"0.1\",\n  \"name\": \"" + appName + "\",\n  \"identifier\": \"com.koding." + nickname + ".apps." + (appName.toLowerCase()) + "\",\n  \"path\": \"~/Applications/" + appName + ".kdapp\",\n  \"homepage\": \"" + nickname + ".koding.com/" + appName + "\",\n  \"author\": \"" + firstName + " " + lastName + "\",\n  \"repository\": \"git://github.com/" + nickname + "/" + appName + ".kdapp.git\",\n  \"description\": \"" + appName + " : a Koding application created with the Kodepad.\",\n  \"category\": \"web-app\",\n  \"source\": {\n    \"blocks\": {\n      \"app\": {\n        \"files\": [\n          \"./index.coffee\"\n        ]\n      }\n    },\n    \"stylesheets\": [\n      \"./resources/style.css\"\n    ]\n  },\n  \"options\": {\n    \"type\": \"tab\"\n  },\n  \"icns\": {\n    \"128\": \"./resources/icon.128.png\"\n  }\n}"
    };
  };

  AppCreator.prototype.create = function(name, coffee, css, callback) {
    var appPath, basePath, coffeeFile, commands, cssFile, finder, kite, manifest, manifestFile, nickname, skeleton, tree;

    manifest = this.manifestTemplate(name).manifest;
    nickname = KD.whoami().profile.nickname;
    kite = KD.getSingleton('kiteController');
    finder = KD.getSingleton("finderController");
    tree = finder.treeController;
    appPath = "/Users/" + nickname + "/Applications";
    basePath = "" + appPath + "/" + name + ".kdapp";
    coffeeFile = "" + basePath + "/index.coffee";
    cssFile = "" + basePath + "/resources/style.css";
    manifestFile = "" + basePath + "/.manifest";
    commands = ["mkdir -p " + basePath, "mkdir -p " + basePath + "/resources", "curl -kL https://koding.com/images/default.app.thumb.png -o " + basePath + "/resources/icon.128.png"];
    skeleton = commands.join(";");
    return kite.run(skeleton, function(error, response) {
      var coffeeFileInstance, cssFileInstance, manifestFileInstance;

      if (error) {
        return;
      }
      coffeeFileInstance = FSHelper.createFileFromPath(coffeeFile);
      coffeeFileInstance.save(coffee);
      cssFileInstance = FSHelper.createFileFromPath(cssFile);
      cssFileInstance.save(css);
      manifestFileInstance = FSHelper.createFileFromPath(manifestFile);
      manifestFileInstance.save(manifest);
      return KD.utils.wait(1000, function() {
        tree.refreshFolder(tree.nodes[appPath]);
        KD.getSingleton('kodingAppsController').refreshApps();
        return callback();
      });
    });
  };

  AppCreator.prototype.createGist = function(coffee, css, callback) {
    var gist, kite, nickname;

    nickname = KD.whoami().profile.nickname;
    gist = {
      description: "Kodepad Gist Share by " + nickname + " on http://koding.com\nAuthor: http://" + nickname + ".koding.com",
      "public": true,
      files: {
        "index.coffee": {
          content: coffee
        },
        "style.css": {
          content: css
        }
      }
    };
    kite = KD.getSingleton('kiteController');
    return kite.run("mkdir -p /Users/" + nickname + "/.kodepad", function(err, res) {
      var tmp, tmpFile;

      tmpFile = "/Users/" + nickname + "/.kodepad/.gist.tmp";
      tmp = FSHelper.createFileFromPath(tmpFile);
      return tmp.save(JSON.stringify(gist), function(err, res) {
        if (err) {
          return;
        }
        return kite.run("curl -kL -A\"Koding\" -X POST https://api.github.com/gists --data @" + tmpFile, function(err, res) {
          callback(err, JSON.parse(res));
          return kite.run("rm -f " + tmpFile);
        });
      });
    });
  };

  return AppCreator;

}).call(this);
/* BLOCK STARTS: ./app/views.coffee */
var Ace, AppCreator, LiveViewer, Settings, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Settings = Kodepad.Settings, Ace = Kodepad.Ace;

_ref = Kodepad.Core, LiveViewer = _ref.LiveViewer, AppCreator = _ref.AppCreator;

Kodepad.Views.Editor = (function() {
  function Editor(options) {
    this.view = new KDView({
      tagName: "textarea"
    });
    this.view.domElement.css({
      "font-family": "monospace"
    });
    if (options.defaultValue) {
      this.setValue(options.defaultValue);
    }
    if (options.callback) {
      this.view.domElement.keyup(options.callback);
    }
  }

  Editor.prototype.setValue = function(value) {
    return this.view.domElement.html(value);
  };

  Editor.prototype.getValue = function() {
    return this.view.domElement.val();
  };

  Editor.prototype.getView = function() {
    return this.view;
  };

  Editor.prototype.getElement = function() {
    return this.view.domElement.get(0);
  };

  return Editor;

})();

Kodepad.Views.MainView = (function(_super) {
  var Editor;

  __extends(MainView, _super);

  Editor = Kodepad.Views.Editor;

  function MainView() {
    MainView.__super__.constructor.apply(this, arguments);
    this.liveViewer = LiveViewer.getSingleton();
  }

  MainView.prototype.delegateElements = function() {
    var item, key, overflowFix, runApp, toggleTransparency,
      _this = this;

    this.preview = new KDView({
      cssClass: "preview-pane"
    });
    this.liveViewer.setPreviewView(this.preview);
    this.editor = new Editor({
      defaultValue: Settings.exampleCodes[0].coffee,
      callback: function() {
        return _this.liveViewer.previewCode(_this.editor.getValue());
      }
    });
    this.editor.getView().hide();
    this.aceView = new KDView({
      cssClass: 'editor code-editor'
    });
    this.cssEditor = new Editor({
      defaultValue: Settings.exampleCodes[0].css,
      callback: function() {
        return _this.liveViewer.previewCSS(_this.cssEditor.getValue());
      }
    });
    this.cssEditor.getView().hide();
    this.aceCSSView = new KDView({
      cssClass: 'editor css-editor'
    });
    this.editorSplitView = new KDSplitView({
      type: "horizontal",
      resizable: true,
      sizes: ["65%", "35%"],
      views: [this.aceView, this.aceCSSView]
    });
    overflowFix = function() {
      var height;

      height = ($(".kdview.kodepad")).height() - 49;
      return ($(".kodepad-editors")).height(height);
    };
    ($(window)).on("resize", overflowFix);
    (function() {
      var lastAceHeight, lastAceWidth;

      lastAceHeight = 0;
      lastAceWidth = 0;
      return setInterval(function() {
        var aceHeight, aceWidth;

        aceHeight = _this.aceView.getHeight();
        aceWidth = _this.aceView.getWidth();
        if (aceHeight !== lastAceHeight || aceWidth !== lastAceWidth) {
          _this.ace.resize();
          _this.cssAce.resize();
          lastAceHeight = _this.aceView.getHeight();
          return lastAceWidth = _this.aceView.getWidth();
        }
      }, 20);
    })();
    this.splitView = new KDSplitView({
      cssClass: "kodepad-editors",
      type: "vertical",
      resizable: true,
      sizes: ["50%", "50%"],
      views: [this.editorSplitView, this.preview]
    });
    this.controlView = new KDView({
      cssClass: 'control-pane editor-header'
    });
    this.exampleCode = new KDSelectBox({
      label: new KDLabelView({
        title: 'Kode Examples: '
      }),
      defaultValue: this.lastSelectedItem || "0",
      cssClass: 'control-button code-examples',
      selectOptions: (function() {
        var _i, _len, _ref1, _results;

        _ref1 = Kodepad.Settings.exampleCodes;
        _results = [];
        for (key = _i = 0, _len = _ref1.length; _i < _len; key = ++_i) {
          item = _ref1[key];
          _results.push({
            title: item.title,
            value: key
          });
        }
        return _results;
      })(),
      callback: function() {
        var coffee, css, _ref1;

        _this.lastSelectedItem = _this.exampleCode.getValue();
        _ref1 = Kodepad.Settings.exampleCodes[_this.lastSelectedItem], coffee = _ref1.coffee, css = _ref1.css;
        _this.ace.getSession().setValue(coffee);
        return _this.cssAce.getSession().setValue(css);
      }
    });
    this.controlButtons = new KDView({
      cssClass: 'header-buttons'
    });
    this.controlButtons.addSubView(new KDButtonViewWithMenu({
      cssClass: 'clean-gray editor-button control-button save-as-kdapp',
      title: "Save",
      menu: function() {
        return {
          "Save as GitHub Gist...": {
            callback: function() {
              var coffee, css;

              coffee = _this.ace.getSession().getValue();
              css = _this.cssAce.getSession().getValue();
              new KDNotificationView({
                title: "Kodepad is creating your Gist..."
              });
              return AppCreator.getSingleton().createGist(coffee, css, function(err, res) {
                var modal;

                if (err) {
                  new KDNotificationView({
                    title: "An error occured while creating gist, try again."
                  });
                }
                return modal = new KDModalView({
                  overlay: true,
                  title: "Your Gist is ready!",
                  content: "<div class='modalformline'>\n  <p><b>" + res.html_url + "</b></p>\n</div>",
                  buttons: {
                    "Open Gist": {
                      cssClass: "modal-clean-green",
                      callback: function() {
                        return window.open(res.html_url, "_blank");
                      }
                    }
                  }
                });
              });
            }
          },
          "Load from GitHub Gist...": {
            callback: function() {
              var modal;

              return modal = new KDModalViewWithForms({
                overlay: true,
                title: "Load from Gist URL",
                content: "<div class='modalformline'>\n  <p>\n    You can load a gist as an application and run it in Kodepad.\n    The gist must contain <code>index.coffee</code> and <code>style.css</code> files.\n  </p>\n  <p>\n      The gist code you are going to load can reach (and modify) all of your files, settings and \n      all other information you shared with Koding. If you don't know what you are doing, \n      it's <strong>not recommended</strong> to run external code on Kodepad.\n  </p>\n</div>",
                tabs: {
                  navigable: true,
                  forms: {
                    "Gist URL": {
                      fields: {
                        url: {
                          label: "Gist URL: ",
                          name: "url",
                          placeholder: "enter a gist url...",
                          validate: {
                            rules: {
                              regExp: /^https?:\/\/gist\.github\.com\//
                            },
                            messages: {
                              regExp: "You must enter a real gist url."
                            }
                          }
                        }
                      },
                      buttons: {
                        "I know the risks, load and run": {
                          cssClass: "modal-clean-gray",
                          callback: function() {
                            var kite, notify, url;

                            if (!modal.modalTabs.forms["Gist URL"].inputs.url.validate()) {
                              return;
                            }
                            url = modal.modalTabs.forms["Gist URL"].inputs.url.getValue();
                            url = url.replace(/^.*\/(\d+)$/g, 'https://api.github.com/gists/$1');
                            notify = new KDNotificationView({
                              title: "Loading Gist..."
                            });
                            kite = KD.getSingleton("kiteController");
                            return kite.run("curl -kL " + url, function(error, data) {
                              try {
                                data = JSON.parse(data);
                              } catch (_error) {}
                              debugger;
                              if (!error) {
                                _this.ace.getSession().setValue(data.files["index.coffee"].content);
                                _this.cssAce.getSession().setValue(data.files["style.css"].content);
                                notify.destroy();
                                modal.destroy();
                                return notify = new KDNotificationView({
                                  title: "Gist Loaded!"
                                });
                              } else {
                                return notify = new KDNotificationView({
                                  title: "Try again. :("
                                });
                              }
                            });
                          }
                        }
                      }
                    }
                  }
                }
              });
            }
          }
        };
      },
      callback: function() {
        var modal;

        return modal = new KDModalViewWithForms({
          title: "Save Application",
          content: "<div class='modalformline'>\n  <p>You can build an application using Kodepad. Please set your application up.</p>\n  <p>Don't forget to edit <code>.manifest</code> file in your application directory.</p>\n</div>",
          overlay: true,
          height: "auto",
          tabs: {
            navigable: true,
            forms: {
              "Settings": {
                fields: {
                  name: {
                    label: "Name: ",
                    name: "name",
                    placeholder: "name your application...",
                    validate: {
                      rules: {
                        regExp: /^[a-z\d]+([-][a-z\d]+)*$/i
                      },
                      messages: {
                        regExp: "For Application name only lowercase letters and numbers are allowed!"
                      }
                    }
                  }
                },
                buttons: {
                  "Save": {
                    cssClass: "modal-clean-gray",
                    callback: function() {
                      var coffee, css, name, notify;

                      if (!modal.modalTabs.forms.Settings.inputs.name.validate()) {
                        return;
                      }
                      name = modal.modalTabs.forms.Settings.inputs.name.getValue();
                      coffee = _this.ace.getSession().getValue();
                      css = _this.cssAce.getSession().getValue();
                      notify = new KDNotificationView({
                        title: "Application " + name + " is being created now..."
                      });
                      return AppCreator.getSingleton().create(name, coffee, css, function() {
                        notify.destroy();
                        modal.destroy();
                        return new KDNotificationView({
                          title: "Your application " + name + " is ready! Have fun. :)"
                        });
                      });
                    }
                  }
                }
              }
            }
          }
        });
      }
    }));
    this.controlButtons.addSubView(new KDButtonView({
      cssClass: 'clean-gray editor-button control-button full-preview',
      title: "",
      icon: true,
      iconOnly: true,
      iconClass: "preview",
      callback: function() {
        _this.splitView.state = !_this.splitView.state;
        if (_this.splitView.state) {
          _this.splitView.resizePanel();
          return KD.utils.wait(500, function() {
            return _this.editor.getView().domElement.trigger("keyup");
          });
        } else {
          return ($(window)).trigger("resize");
        }
      }
    }));
    toggleTransparency = new KDToggleButton({
      style: "kdwhitebtn",
      cssClass: "clean-gray editor-button control-button transp",
      states: [
        "Transparent", function(callback) {
          _this.preview.domElement.addClass('transparented');
          toggleTransparency.domElement.addClass('transparented');
          return callback();
        }, "Opaque", function(callback) {
          _this.preview.domElement.removeClass('transparented');
          toggleTransparency.domElement.removeClass('transparented');
          return callback();
        }
      ]
    });
    this.controlButtons.addSubView(toggleTransparency);
    runApp = function(appName) {
      var appController, appManifest;

      appController = KD.getSingleton("kodingAppsController");
      appManifest = appController.constructor.manifests[appName];
      if (appManifest) {
        appController.runApp(appManifest);
        return true;
      } else {
        return false;
      }
    };
    this.controlButtons.addSubView(new KDButtonView({
      cssClass: "clean-gray editor-button control-button",
      title: "",
      icon: true,
      iconOnly: true,
      iconClass: "docs",
      callback: function() {
        var docsApp;

        docsApp = runApp("Koding Docs");
        if (!docsApp) {
          return new KDNotificationView({
            title: "Koding Docs is not installed!",
            content: "This button is a shortcut to run Koding Docs, so you must install it."
          });
        }
      }
    }));
    this.controlButtons.addSubView(new KDMultipleChoice({
      cssClass: "clean-gray editor-button control-button auto-manual",
      labels: ["Auto", "Manual"],
      defaultValue: "Auto",
      callback: function(state) {
        _this.liveViewer.active = state === "Auto" ? true : false;
        if (state === "Auto") {
          _this.liveViewer.previewCSS(_this.cssEditor.getValue());
          return _this.liveViewer.previewCode(_this.editor.getValue());
        }
      }
    }));
    this.controlView.addSubView(this.exampleCode.options.label);
    this.controlView.addSubView(this.exampleCode);
    this.controlView.addSubView(this.controlButtons);
    this.liveViewer.setSplitView(this.splitView);
    this.liveViewer.setMainView(this);
    this.liveViewer.previewCode(this.editor.getValue());
    return this.liveViewer.previewCSS(this.cssEditor.getValue());
  };

  MainView.prototype.pistachio = function() {
    return "{{> this.controlView}}\n{{> this.editor.getView()}}\n{{> this.cssEditor.getView()}}\n{{> this.splitView}}";
  };

  MainView.prototype.buildAce = function() {
    var ace, cssUpdate, update,
      _this = this;

    ace = this.getOptions().ace;
    try {
      update = KD.utils.throttle(function() {
        _this.editor.setValue(_this.ace.getSession().getValue());
        return _this.editor.getView().domElement.trigger("keyup");
      }, Settings.aceThrottle);
      this.ace = ace.edit(this.aceView.domElement.get(0));
      this.ace.setTheme(Settings.theme);
      this.ace.getSession().setMode("ace/mode/coffee");
      this.ace.getSession().setTabSize(2);
      this.ace.getSession().setUseSoftTabs(true);
      this.ace.getSession().setValue(this.editor.getValue());
      this.ace.getSession().on("change", function() {
        return update();
      });
      this.editor.setValue(this.ace.getSession().getValue());
      this.ace.commands.addCommand({
        name: 'save',
        bindKey: {
          win: 'Ctrl-S',
          mac: 'Command-S'
        },
        exec: function() {
          return _this.editor.setValue(_this.ace.getSession().getValue());
        }
      });
    } catch (_error) {}
    try {
      cssUpdate = KD.utils.throttle(function() {
        _this.cssEditor.setValue(_this.cssAce.getSession().getValue());
        return _this.cssEditor.getView().domElement.trigger("keyup");
      }, Settings.aceThrottle);
      this.cssAce = ace.edit(this.aceCSSView.domElement.get(0));
      this.cssAce.setTheme(Settings.theme);
      this.cssAce.getSession().setMode("ace/mode/css");
      this.cssAce.getSession().setTabSize(2);
      this.cssAce.getSession().setUseSoftTabs(true);
      this.cssAce.getSession().setValue(this.cssEditor.getValue());
      this.cssAce.getSession().on("change", function() {
        return cssUpdate();
      });
      this.cssEditor.setValue(this.cssAce.getSession().getValue());
      return this.cssAce.commands.addCommand({
        name: 'save',
        bindKey: {
          win: 'Ctrl-S',
          mac: 'Command-S'
        },
        exec: function() {
          return _this.cssEditor.setValue(_this.cssAce.getSession().getValue());
        }
      });
    } catch (_error) {}
  };

  MainView.prototype.viewAppended = function() {
    this.delegateElements();
    this.setTemplate(this.pistachio());
    return this.buildAce();
  };

  return MainView;

})(JView);
/* BLOCK STARTS: ./index.coffee */
var MainView;

MainView = Kodepad.Views.MainView;

(function() {
  var loader;

  loader = new KDView({
    cssClass: "kodepad loading",
    partial: "Loading Kodepad..."
  });
  appView.addSubView(loader);
  return require(["ace/ace"], function(Ace) {
    appView.removeSubView(loader);
    return appView.addSubView(new MainView({
      cssClass: "kodepad",
      ace: Ace
    }));
  });
})();

/* KDAPP ENDS */
}).call();