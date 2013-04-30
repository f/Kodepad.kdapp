# > index.coffee
{MainView} = Kodepad.Views
do ->
  loader = new KDView
    cssClass: "kodepad loading"
    partial : "Loading Kodepad..."

  appView.addSubView loader
  require ["ace/ace"], (Ace)->
    appView.removeSubView loader
    appView.addSubView new MainView
      cssClass: "kodepad"
      ace: Ace