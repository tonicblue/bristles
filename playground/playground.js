require('./playground.scss');
var ace = require('brace');
require('brace/mode/json');
require('brace/mode/handlebars');
require('brace/mode/html');
require('brace/theme/monokai');
const $ = require('jquery');
const golden = require('golden-layout');
const Bristles = require('../src/index').default;

window.$ = $;
window.jQuery = $;

const $templateEditor = $('<div>').addClass('editor');
const $contextEditor = $('<div>').addClass('editor');
const $outputEditor = $('<div>').addClass('editor');
const $outputFrame = $('<iframe>').addClass('output-frame');

const $runButton = $('#run');
const $jsonOutput = $('#json-output');

let templateEditor, contextEditor, outputEditor, bristles, lastFocused;

function setupEditors() {
  templateEditor = ace.edit($templateEditor[0]);
  templateEditor.getSession().setMode('ace/mode/handlebars');
  templateEditor.setTheme('ace/theme/monokai');
  templateEditor.$blockScrolling = Infinity;
  templateEditor.session.setTabSize(2);
  templateEditor.on('focus', () => {
    lastFocused = templateEditor;
  });
  templateEditor.commands.addCommands([
    {
      name: 'run',
      bindKey: { win: 'Ctrl-Enter' },
      exec: run
    }
  ]);

  contextEditor = ace.edit($contextEditor[0]);
  contextEditor.getSession().setMode('ace/mode/json');
  contextEditor.setTheme('ace/theme/monokai');
  contextEditor.$blockScrolling = Infinity;
  contextEditor.session.setTabSize(2);
  contextEditor.on('focus', () => {
    lastFocused = contextEditor;
  });
  contextEditor.commands.addCommands([
    {
      name: 'run',
      bindKey: { win: 'Ctrl-Enter' },
      exec: run
    }
  ]);

  outputEditor = ace.edit($outputEditor[0]);
  outputEditor.getSession().setMode('ace/mode/html');
  outputEditor.setTheme('ace/theme/monokai');
  outputEditor.setReadOnly(true);
  outputEditor.$blockScrolling = Infinity;
  outputEditor.session.setTabSize(2);
}

document.addEventListener('DOMContentLoaded', function() {
  setupEditors();
  bristles = Bristles();

  var config = {
    content: [
      {
        type: 'row',
        content: [
          {
            type: 'stack',
            content: [
              {
                type:'component',
                componentName: 'template',
                componentState: { }
              },
              {
                type:'component',
                componentName: 'context',
                componentState: { }
              }
            ]
          },
          {
            type: 'stack',
            content: [
              {
                type:'component',
                componentName: 'outputEditor',
                componentState: { }
              },
              {
                type:'component',
                componentName: 'output',
                componentState: { }
              }
            ]
          }
        ]
      }
    ]
  };

  var myLayout = new golden(config);

  myLayout.registerComponent('template', function(container, state) {
    container.getElement().append($templateEditor);
  });

  myLayout.registerComponent('context', function(container, state) {
    container.getElement().append($contextEditor);
  });

  myLayout.registerComponent('outputEditor', function(container, state) {
    container.getElement().append($outputEditor);
  });

  myLayout.registerComponent('output', function(container, state) {
    container.getElement().append($outputFrame);
  });

  myLayout.init();

  $runButton.on('click', run);
  $jsonOutput.on('change', run);

  const startTemplate = window.localStorage.getItem('template') || '';
  const startContext = window.localStorage.getItem('context') || '{\n\n}';
  templateEditor.setValue(startTemplate);
  contextEditor.setValue(startContext);

  templateEditor.focus();
});

function run() {
  const template = templateEditor.getValue();
  const contextJson = contextEditor.getValue();

  window.localStorage.setItem('template', template);
  window.localStorage.setItem('context', contextJson);

  const compiled = bristles.compile(template);
  const context = JSON.parse(contextJson);
  const output = compiled(context);

  const jsonOutput = $jsonOutput.prop('checked');
  const contentType = jsonOutput ? 'application/json' : 'text/html';
  outputEditor.session.setMode(jsonOutput ? 'ace/mode/json' : 'ace/mode/html');

  outputEditor.setValue(output);
  $outputFrame.attr('src', 'data:' + contentType + ';charset=utf-8,' + escape(output));

  lastFocused.focus();
}