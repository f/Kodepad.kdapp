# > core.coffee
class Kodepad.Core.Utils
  @notify = (message)=>
    @instance?.destroy()
    @instance = new KDNotificationView
      type : "mini"
      title: message

class Kodepad.Core.LiveViewer

  {notify} = Kodepad.Core.Utils

  @getSingleton: ()=> @instance ?= new @
  
  active: yes
  
  pistachios: /\{(\w*)?(\#\w*)?((?:\.\w*)*)(\[(?:\b\w*\b)(?:\=[\"|\']?.*[\"|\']?)\])*\{([^{}]*)\}\s*\}/g
  
  constructor: ()->
    @sessionId = KD.utils.uniqueId "kodepadSession"
  
  setPreviewView: (@previewView)->
    
  setSplitView: (@splitView)->
    
  setMainView: (@mainView)->
  
  previewCode: (code)->
    return if not @active
    # Fake App View, THIS IS THE TRICK,
    # Binding appView to preview, so 
    # appView will work as preview.
    require ["https://raw.github.com/jashkenas/coffee-script/master/extras/coffee-script.js"], (Coffee)=>
      window.appView = @previewView
      try
        JS = Coffee.compile code # compile but don't run
        @previewView.destroySubViews() # if any errors occur here wont work
        code = code.replace @pistachios, (pistachio)-> pistachio.replace /\@/g, 'this.'
        Coffee.run code # run the code
      catch error
        notify error.message
      finally
        delete window.appView
  
  previewCSS: (code)->
    return if not @active
    session = "__kodepadCSS#{@sessionId}"

    if window[session]
      try
        window[session].remove()
        
    css = $ "<style scoped></style>"
    css.html code
    window[session] = css
    
    @previewView.domElement.prepend window[session]

class Kodepad.Core.AppCreator
  
  {notify} = Kodepad.Core.Utils
  
  @getSingleton: ()=> @instance ?= new @

  manifestTemplate: (appName)->
    
    {firstName, lastName, nickname} = KD.whoami().profile

    manifest: 
      """
      {
        "devMode": true,
        "version": "0.1",
        "name": "#{appName}",
        "identifier": "com.koding.#{nickname}.apps.#{appName.toLowerCase()}",
        "path": "~/Applications/#{appName}.kdapp",
        "homepage": "#{nickname}.koding.com/#{appName}",
        "author": "#{firstName} #{lastName}",
        "repository": "git://github.com/#{nickname}/#{appName}.kdapp.git",
        "description": "#{appName} : a Koding application created with the Kodepad.",
        "category": "web-app",
        "source": {
          "blocks": {
            "app": {
              "files": [
                "./index.coffee"
              ]
            }
          },
          "stylesheets": [
            "./resources/style.css"
          ]
        },
        "options": {
          "type": "tab"
        },
        "icns": {
          "128": "./resources/icon.128.png"
        }
      }
      """

  create: (name, coffee, css, callback) ->
    
    {manifest} = @manifestTemplate name
    
    {nickname} = KD.whoami().profile
    
    kite    = KD.getSingleton 'kiteController'
    finder  = KD.getSingleton "finderController"
    tree    = finder.treeController
    
    appPath      = "/Users/#{nickname}/Applications"
    basePath     = "#{appPath}/#{name}.kdapp"
    coffeeFile   = "#{basePath}/index.coffee"
    cssFile      = "#{basePath}/resources/style.css"
    manifestFile = "#{basePath}/.manifest"
    
    commands = [
      "mkdir -p #{basePath}"
      "mkdir -p #{basePath}/resources"
      "curl -kL https://koding.com/images/default.app.thumb.png -o #{basePath}/resources/icon.128.png"
    ]
    skeleton = commands.join ";"
    
    kite.run skeleton, (error, response)->
      return if error
      
      # Saving Coffee
      coffeeFileInstance = FSHelper.createFileFromPath coffeeFile
      coffeeFileInstance.save coffee
      
      # Saving CSS
      cssFileInstance = FSHelper.createFileFromPath cssFile
      cssFileInstance.save css
      
      # Saving Manifest
      manifestFileInstance = FSHelper.createFileFromPath manifestFile
      manifestFileInstance.save manifest
      
      KD.utils.wait 1000, -> 
        tree.refreshFolder tree.nodes[appPath]
        KD.getSingleton('kodingAppsController').refreshApps()
        do callback
    
    
  createGist: (coffee, css, callback) ->
    
    {nickname} = KD.whoami().profile
    
    gist = 
      description: """
      Kodepad Gist Share by #{nickname} on http://koding.com
      Author: http://#{nickname}.koding.com
      """
      public: yes
      files:
        "index.coffee": {content: coffee}
        "style.css": {content: css}

    kite    = KD.getSingleton 'kiteController'
    kite.run "mkdir -p /Users/#{nickname}/.kodepad", (err, res) ->
      
      tmpFile = "/Users/#{nickname}/.kodepad/.gist.tmp"
      
      tmp = FSHelper.createFileFromPath tmpFile
      tmp.save JSON.stringify(gist), (err, res)->
        return if err
        
        kite.run "curl -kL -A\"Koding\" -X POST https://api.github.com/gists --data @#{tmpFile}", (err, res)->
          callback err, JSON.parse(res)
          kite.run "rm -f #{tmpFile}"
    