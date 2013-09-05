# > settings.coffee
# KD.enableLogs()

Kodepad = 
  Settings:
    theme      : "ace/theme/monokai"
    exampleCode: null
    exampleCSS : null
    aceThrottle: 400
  Core:
    Utils      : null
    LiveViewer : null
    AppCreator : null
  Views:
    Editor     : null
    MainView   : null


Kodepad.Settings.exampleCodes = []

###
# Sample Example
###
Kodepad.Settings.exampleCodes.push 
  title: "Sample"
  coffee: 
    """

    # Your awesome Koding App Code
    
    {nickname} = KD.whoami().profile
    
    class MainView extends JView
      constructor:->
        super
        @header = new KDHeaderView
          type: "big"
          title: "Welcome to Kodepad!"
    
        @name = new KDInputView
          placeholder: "Your name"
    
        @button = new KDButtonView
          title: "Say hello!"
          callback: =>
            name = @name.getValue() or nickname
            @_notify?.destroy()
            @_notify = new KDNotificationView
              title: "Hello, \#{name}!"
    
      pistachio:->
        \"\"\"
        {{> @header}}
        Just change something from the left pane.
        <br><br>
        <strong>And try some interactions!:</strong>
        {{> @name}}
        {{> @button}}
        \"\"\"
      viewAppended: ->
        @setTemplate do @pistachio
    
    appView.addSubView new MainView
      cssClass: "my-koding-app"
    """
  css: 
    """

    /* Your awesome Koding App CSS Code */
    
    .my-koding-app {
      margin: 10px;
      padding: 0 10px 10px;
      width: auto;
      height: auto;
      background-color: rgba(255,255,255,0.9);
      border-radius: 3px;
    }
    
    .my-koding-app input {
      margin: 20px 0;
      background-color: #ccc !important;
    }
    """

###
# Blank Code Example
###
Kodepad.Settings.exampleCodes.push 
  title   : "Pure Blank"
  coffee  : ""
  css     : ""

###
# Blank Application Code Example
###
Kodepad.Settings.exampleCodes.push 
  title   : "Blank Application Template"
  coffee  : 
    """
    {nickname} = KD.whoami().profile
    
    class MainView extends JView
      constructor:->
        super
        @header = new KDHeaderView
          type: "big"
          title: "This is the header, \#{nickname}!"
    
        # Your app code here,
        # nickname variable is the username of the app user.
    
      pistachio:->
        \"\"\"
        {{> @header}}
        \"\"\"
      viewAppended: ->
        @setTemplate do @pistachio
    
    appView.addSubView new MainView
      cssClass: "your-app-name"
    """
  css     : 
    """
    .your-app-name {
      /* Your app CSS */
    }
    """

Kodepad.Settings.exampleCodes.push
  title   : "Bouncing Ball"
  coffee  : 
    """
    # A bouncing ball example by Gokmen Goksel
    # @gokmen - http://gokmen.koding.com
    
    class MainView extends JView
    
      constructor:->
        super
     
        @ball = new KDView
          cssClass : 'ball'
     
        @_width   = 400
        @_height  = 300
     
        @.$().css width : @_width
        @.$().css height: @_height
     
        @_x = @x = @_y = @y = 1
     
        @updateBallPosition()
     
      updateBallPosition:->
     
        @x += @_x
        @y += @_y
     
        @_x = -1 if @x >= @_width - 50
        @_x =  1 if @x == 0
     
        @_y = -1 if @y >= @_height - 50
        @_y =  1 if @y == 0
     
        @ball.$().css top: @y
        @ball.$().css left:@x
     
        setTimeout =>
          @updateBallPosition()
        , 5
     
      pistachio:->
        \"\"\"
        {{> @ball}}
        \"\"\"
     
    appView.addSubView new MainView
      cssClass: "bounce"
    """
  css: 
    """
    .bounce {
      border: 1px solid orange;
      margin: 10px;
    }
    
    .bounce .ball {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: red;
    }
    """
    
###
# Kite Example
###
Kodepad.Settings.exampleCodes.push 
  title   : "The Terminal: Kite Example"
  coffee  : 
    """
    {nickname} = KD.whoami().profile
    
    class MainView extends JView
      constructor:->
        super
        @header = new KDHeaderView
          type: "big"
          title: "The Terminal: Kite Example"
          
        @_console = new KDView
          tagName: 'pre'
          partial: "Run some code \#{nickname}!"
          
        @command = new KDInputView
          cssClass    : 'command'
          placeholder : 'Write your command'
          defaultValue: "ls -la /Users/\#{nickname}/Applications"
          
        @commandButton = new KDButtonView
          title       : "Run"
          callback    : =>
            kite = KD.getSingleton("kiteController")
            kite.run @command.getValue(), (err, response)=>
              @_console.$().text (err and err.message) or response
              
      pistachio:->
        \"\"\"
        {{> @header}}
        {{> @command}}
        {{> @commandButton}}
        {{> @_console}}
        \"\"\"
      viewAppended: ->
        @setTemplate do @pistachio
        
    appView.addSubView new MainView
      cssClass: "console"
    """
  css     : 
    """
    .console {
      overflow-y: scroll;
      padding: 0 10px;
    }
    
    .console pre {
      height: auto;
      margin: 0;
    }
    
    .console input {
      float: left;
      margin: 10px 0;
    }
    
    .console button {
      float: left;
      margin: 10px 10px;
    }
    """
    
Kodepad.Settings.exampleCodes.push
  title: "The Terminal: Real one"
  css: 
    """
    .your-app-name {
    }
    """
  coffee:
    """
    class MainView extends JView
      constructor:->
        super
    
        @terminal = new KDView
          cssClass: "terminal"
        @terminal.$().css
          width: "100%"
          height: 300
      
        @webterm = new WebTermView
          delegate: @terminal
          cssClass: "webterm"
          
        @webterm.on "WebTermConnected", (remote)=>
          @remote = remote
        
        @terminal.addSubView @webterm
        
        @runCmd = new KDButtonView
          title: "Run command"
          callback: =>
            @remote.input "ls\\n"
    
      pistachio:->
        \"\"\"
        This is a real terminal:
        {{> @terminal}}
        <br>
        {{> @runCmd}}
        \"\"\"
      viewAppended: ->
        @setTemplate do @pistachio
    
    appView.addSubView new MainView
      cssClass: "your-app-name"
    
    """

Kodepad.Settings.exampleCodes.push
  title: "Sample.kdapp (Really.)"
  coffee:
    """
    
    # WOW! This is inception!!!
    
    {KDView}                = KD.classes
    {KDSplitView}           = KD.classes
    {KDInputView}           = KD.classes
    {KDModalView}           = KD.classes
    {KDButtonView}          = KD.classes
    {KDHeaderView}          = KD.classes
    {KDOnOffSwitch}         = KD.classes
    {KDListItemView}        = KD.classes
    {KDNotificationView}    = KD.classes
    {KDListViewController}  = KD.classes
    {KDModalViewWithForms}  = KD.classes
    
    class SampleApp extends KDView
    
      viewAppended:->
    
        super
    
        # Add Documentation Toggle Button
        docToggleButton = new KDOnOffSwitch
          defaultValue  : on
          title         : "Show Documentation: "
          size          : "tiny"
          cssClass      : "test-switch"
          callback      : (state) ->
            if state then bottomSplitView.show() else bottomSplitView.hide()
    
        @addSubView docToggleButton
    
        # Get User Information
        {nickname} = KD.whoami().profile
    
        # Add the Header
        @addSubView @header = new KDHeaderView
          type     : "big"
          title    : "Welcome to your sample application <strong>\#{nickname}</strong> made with KDFramework !"
    
        informationView = new KDView
          cssClass   : "information-box"
          partial    : \"\"\"
              <p>This is a sample application that you can read the code and get started with. To see usage, go to <code>index.coffee</code>
              just glance at it, you will know how this page is constructed, and you will be able to make cool stuff.</p><br/>
    
              <p>We want to provide much better documentation about the capabilities of KDFramework very soon, it is what we made <strong>Koding</strong> with.
              Basically every single frontend functionality you see on Koding, will be made available to you piece by piece.</p><br/>
              <p>We will open source KDFramework and publish it to Github so that you can contribute to it, but at this stage
              it's api is not to be relied upon, and everything can change.</p><br/>
              
              <p>Please bear with us, and use its basic functionalities, soon enough you will be able to make amazing realtime applications with it. Enjoy! :)</p>
          \"\"\"
    
        # Create Input Test
        inputView = new KDInputView
          cssClass      : "test-input"
          placeholder   : "Write something to create a notification..."
          validate      :
            event       : "keyup"
            rules       :
              required  : yes
            messages    :
              required  : "That's a very required field..."
    
        # Update button state based on Input validation
        inputView.on "ValidationError",  -> testButton.disable()
        inputView.on "ValidationPassed", -> testButton.enable()
    
        # Create Test Button
        testButton = new KDButtonView
          cssClass   : "clean-gray test-input"
          title      : "Create a Notification"
          callback   : ->
            new KDNotificationView
              title : inputView.getValue()
    
        # Disable the Button, we will enable it if validation passes on input
        testButton.disable()
    
        # Create a Split View for input and the button
        inputExampleView  = new KDSplitView
          type      : "vertical"
          resizable : no
          sizes     : ["70%", "30%"]
          views     : [inputView, testButton]
    
        buttonExampleView  = new KDView
          cssClass   : "button-area"
    
        # Create a Modal Test Button
        modalButton = new KDButtonView
          cssClass : "clean-gray test-input"
          title    : "Create a Modal"
          callback   : ->
            modal = new KDModalView
              title        : "A Modal with a Title"
              content      : "<div class='modalformline'>Do you want to continue?</div>"
              height       : "auto"
              overlay      : yes
              buttons      :
                Continue   :
                  loader   :
                    color  : "#ffffff"
                    diameter : 16
                  style    : "modal-clean-gray"
                  callback : ->
                    new KDNotificationView
                      title: "Lets Continue..."
                    modal.destroy()
    
        buttonExampleView.addSubView modalButton
    
        showError = ->
          new KDNotificationView
            title    : "An error occured while running the command"
            type     : "mini"
            cssClass : "error"
            duration : 3000
    
        kiteController = KD.getSingleton "kiteController"
    
        kiteButton = new KDButtonView
          cssClass   : "clean-gray test-input"
          title      : "Run a command on Server"
          callback   : ->
            modal = new KDModalViewWithForms
              title                   : "Run a command on server-side"
              content                 : "<div class='modalformline'>You can run any bash commands that you run from Terminal</div>"
              overlay                 : yes
              width                   : 600
              height                  : "auto"
              tabs                    :
                navigable             : yes
                forms                 :
                  form                :
                    buttons           :
                      Run             :
                        cssClass      : "modal-clean-gray"
                        loader        :
                          color       : "#444444"
                          diameter    : 12
                        callback      : ->
                          command = modal.modalTabs.forms.form.inputs.Command.getValue()
                          
                          setTimeout ->
                            if modal.modalTabs.forms.form.buttons.Run.loader.active
                              showError()
                              modal.modalTabs.forms.form.buttons.Clear.getCallback()()
                          , 8000
                          
                          kiteController.run command, (err, res)->
                            showError() if err
                            modal.modalTabs.forms.form.inputs.Output.setValue err or res
                            modal.modalTabs.forms.form.buttons.Run.hideLoader()
                      Clear           :
                        cssClass      : "modal-clean-gray"
                        callback      : ->
                          modal.modalTabs.forms.form.inputs.Output.setValue ''
                          modal.modalTabs.forms.form.buttons.Run.hideLoader()
    
                    fields            :
                      Command         :
                        label         : "Command:"
                        name          : "command"
                        defaultValue  : "ls -la"
                        placeholder   : "Command to run on Server-Side"
                        cssClass      : "command-input"
                      Output          :
                        label         : "Output:"
                        type          : "textarea"
                        name          : "output"
                        placeholder   : "The output of command will be here..."
                        cssClass      : "output-screen"
    
        buttonExampleView.addSubView kiteButton
    
        # Open A Koding App
        openActivityButton = new KDButtonView
          cssClass   : "clean-gray test-input"
          title      : "Open Activity Feed"
          callback   : ->
            appManager.openApplication "Activity"
    
        buttonExampleView.addSubView openActivityButton
    
        # Create a Description View for Property List
        descriptionView = new KDView
          cssClass : "description-view"
    
        # Add a Header for Property List
        descriptionView.addSubView subHeader = new KDHeaderView
          type     : "medium"
          title    : "Select a Class from left to see its properties here"
    
        # Create Class List Controller to control class data
        classListController = new KDListViewController
          viewOptions :
            itemClass : ClassItemView
        ,
          items : ({name: item} for item of KD.classes)
    
        # Create Class List Controller to control property data
        propertyListController = new KDListViewController
          viewOptions :
            itemClass : PropertyItemView
    
        # Get their views
        classList = classListController.getView()
        descriptionView.addSubView propertyListController.getView()
    
        # Create a custom KDView and add header and the list on it
        classView = new KDView
        classView.addSubView new KDHeaderView
          type     : "medium"
          title    : "List of Classes on KD Framework"
    
        # Follow showClassDetails event from classList
        classListView = classListController.getListView()
        classListView.on "showClassDetails", (className)->
          subHeader.updateTitle className
          obj = KD.classes[className].prototype
    
          propertyListController.replaceAllItems (item for item of obj)
    
        classView.addSubView classList
    
        # Add the Header
        examplesHeader = new KDHeaderView
          type     : "medium"
          title    : "Examples"
    
        # Add documentation view to bottomSplitView
        bottomSplitView = new KDSplitView
          type      : "vertical"
          cssClass  : "class-model-panel"
          resizable : yes
          sizes     : ["50%",null]
          views     : [ classView, descriptionView ]
    
        topRightSplitView = new KDSplitView
          type      : "horizontal"
          resizable : no
          sizes     : ["20%", null ,null]
          views     : [ examplesHeader, inputExampleView, buttonExampleView ]
    
        topSplitView = new KDSplitView
          type      : "vertical"
          resizable : no
          sizes     : ["50%",null]
          views     : [ informationView, topRightSplitView ]
    
        # Add all of the views to a split
        mainSplitView = new KDSplitView
          type      : "horizontal"
          resizable : no
          sizes     : ["30%", null]
          views     : [ topSplitView, bottomSplitView ]
    
        # And add that split to the mainView
        @addSubView mainSplitView
    
    class ClassItemView extends KDListItemView
    
      constructor:(options, data)->
        options.cssClass = "class-item"
        super
    
      partial:(data)-> "<a href=#> » \#{data.name}</a>"
    
      click:->
        listView = @getDelegate()
        listView.emit "showClassDetails", @getData().name
    
    class PropertyItemView extends ClassItemView
    
      partial:(data)-> "<a href=#> ► \#{data}</a>"
    
      click:->
        new KDNotificationView
          title: "Documentation will be available soon"
    
    # And let create our App
    do ->
      appInstance = new SampleApp
    
      # appView is a constant that you can use as your app container
      appView.addSubView appInstance

    """
  css:
    """
    .class-model-panel {
        border-top:1px solid #DDD;
    }
    
    .class-model-panel .kdsplitview-resizer {
        width: 5px;
    }
    
    .class-item {
        padding: 2px;
        padding-left: 6px;
    }
    
    .class-item a {
        text-decoration:none;
    }
    
    .test-input {
        margin: 6px;
        width: 98%;
    }
    
    .test-switch {
        position: absolute;
        right: 4px;
        top: 4px;   
        z-index:1000;
    }
    
    .test-button {
        position: absolute;
        right: 8px;   
    }
    
    .test-input-view {
        background-color: lightgray;
    }
    
    .command-input, .output-screen {
        font-family: monospace;
    }
    
    .output-screen {
        min-height: 200px;
    }
    
    .button-area {
        text-align: center;   
    }
    
    .information-box {
        width: auto;
        height: auto;
        padding: 10px;
        background-color: #EEE;
        border: 1px solid #DDD;
        border-radius: 4px;
        margin: 4px;
    }
    """