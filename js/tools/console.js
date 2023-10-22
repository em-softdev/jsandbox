if (typeof console  != "undefined") 
  if (typeof console.log != 'undefined')
    console.olog = console.log;
else
  console.olog = function() {};

console.log = function(message) {
  console.olog(message);
  textoConsola= textoConsola+ ">" + message + "\n";
  editorDEV.setValue(textoConsola);
};
console.error = console.debug = console.info =  console.log