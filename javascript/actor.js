'use strict';define(["ace/ace","ace/lib/lang"],function(e,f){var a=e.edit("actor");a.setTheme("ace/theme/eclipse");a.getSession().setMode("ace/mode/json");var c,g=f.delayedCall(function(){var b=a.getValue();c&&c(b);return b});a.on("change",function(){g.delay(600)});return{onChange:function(b){c=b;c(a.getValue())},contents:function(b){if(void 0!==b){var d=a.getCursorPosition();a.setValue(b,-1);a.moveCursorToPosition(d)}else return a.getValue()},middleware:{source:function(b,d,h){b.source=a.getValue();
h()}}}});