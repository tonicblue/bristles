export const HTML_ATTRIBUTES_MAP: { [attributes: string]: true | string[] } = {
  "accept": [
    "input"
  ],
  "accept-charset": [
    "form"
  ],
  "accesskey": true,
  "action": [
    "form"
  ],
  "alt": [
    "area",
    "img",
    "input"
  ],
  "aria-activedescendant": true,
  "aria-atomic": true,
  "aria-autocomplete": true,
  "aria-busy": true,
  "aria-checked": true,
  "aria-colcount": true,
  "aria-colindex": true,
  "aria-colspan": true,
  "aria-controls": true,
  "aria-current": true,
  "aria-describedby": true,
  "aria-details": true,
  "aria-disabled": true,
  "aria-dragged": true,
  "aria-dropeffect": true,
  "aria-errormessage": true,
  "aria-expanded": true,
  "aria-flowto": true,
  "aria-haspopup": true,
  "aria-hidden": true,
  "aria-invalid": true,
  "aria-label": true,
  "aria-labelledby": true,
  "aria-level": true,
  "aria-live": true,
  "aria-modal": true,
  "aria-multiline": true,
  "aria-multiselectable": true,
  "aria-orientation": true,
  "aria-owns": true,
  "aria-placeholder": true,
  "aria-posinset": true,
  "aria-pressed": true,
  "aria-readonly": true,
  "aria-relevant": true,
  "aria-required": true,
  "aria-rowcount": true,
  "aria-rowindex": true,
  "aria-rowspan": true,
  "aria-selected": true,
  "aria-setsize": true,
  "aria-sort": true,
  "aria-valuemax": true,
  "aria-valuemin": true,
  "aria-valuenow": true,
  "aria-valuetext": true,
  "async": [
    "script"
  ],
  "autocomplete": [
    "form",
    "input"
  ],
  "autofocus": [
    "button",
    "input",
    "select",
    "textarea"
  ],
  "autoplay": [
    "audio",
    "video"
  ],
  "charset": [
    "meta",
    "script"
  ],
  "checked": [
    "input"
  ],
  "cite": [
    "blockquote",
    "del",
    "ins",
    "q"
  ],
  "class": true,
  "cols": [
    "textarea"
  ],
  "colspan": [
    "td",
    "th"
  ],
  "content": [
    "meta"
  ],
  "contenteditable": true,
  "controls": [
    "audio",
    "video"
  ],
  "coords": [
    "area"
  ],
  "data": [
    "object"
  ],
  "datetime": [
    "del",
    "ins",
    "time"
  ],
  "default": [
    "track"
  ],
  "defer": [
    "script"
  ],
  "dir": true,
  "dirname": [
    "input",
    "textarea"
  ],
  "disabled": [
    "button",
    "fieldset",
    "input",
    "optgroup",
    "option",
    "select",
    "textarea"
  ],
  "download": [
    "a",
    "area"
  ],
  "draggable": true,
  "dropzone": true,
  "enctype": [
    "form"
  ],
  "for": [
    "label",
    "output"
  ],
  "form": [
    "button",
    "fieldset",
    "input",
    "label",
    "meter",
    "object",
    "output",
    "select",
    "textarea"
  ],
  "formaction": [
    "button",
    "input"
  ],
  "headers": [
    "td",
    "th"
  ],
  "height": [
    "canvas",
    "embed",
    "iframe",
    "img",
    "input",
    "object",
    "video"
  ],
  "hidden": true,
  "high": [
    "meter"
  ],
  "href": [
    "a",
    "area",
    "base",
    "link"
  ],
  "hreflang": [
    "a",
    "area",
    "link"
  ],
  "http-equiv": [
    "meta"
  ],
  "id": true,
  "ismap": [
    "img"
  ],
  "kind": [
    "track"
  ],
  "label": [
    "track",
    "option",
    "optgroup"
  ],
  "lang": true,
  "list": [
    "input"
  ],
  "loop": [
    "audio",
    "video"
  ],
  "low": [
    "meter"
  ],
  "max": [
    "input",
    "meter",
    "progress"
  ],
  "maxlength": [
    "input",
    "textarea"
  ],
  "media": [
    "a",
    "area",
    "link",
    "source",
    "style"
  ],
  "method": [
    "form"
  ],
  "min": [
    "input",
    "meter"
  ],
  "minlength": [
    "input",
    "textarea"
  ],
  "multiple": [
    "input",
    "select"
  ],
  "muted": [
    "video",
    "audio"
  ],
  "name": [
    "button",
    "fieldset",
    "form",
    "iframe",
    "input",
    "map",
    "meta",
    "object",
    "output",
    "param",
    "select",
    "textarea"
  ],
  "novalidate": [
    "form"
  ],
  "onabort": [
    "audio",
    "embed",
    "img",
    "object",
    "video"
  ],
  "onafterprint": [
    "body"
  ],
  "onbeforeprint": [
    "body"
  ],
  "onbeforeunload": [
    "body"
  ],
  "onblur": true,
  "oncanplay": [
    "audio",
    "embed",
    "object",
    "video"
  ],
  "oncanplaythrough": [
    "audio",
    "video"
  ],
  "onchange": true,
  "onclick": true,
  "oncontextmenu": true,
  "oncopy": true,
  "oncuechange": [
    "track"
  ],
  "oncut": true,
  "ondblclick": true,
  "ondrag": true,
  "ondragend": true,
  "ondragenter": true,
  "ondragleave": true,
  "ondragover": true,
  "ondragstart": true,
  "ondrop": true,
  "ondurationchange": [
    "audio",
    "video"
  ],
  "onemptied": [
    "audio",
    "video"
  ],
  "onended": [
    "audio",
    "video"
  ],
  "onerror": [
    "audio",
    "body",
    "embed",
    "img",
    "object",
    "script",
    "style",
    "video"
  ],
  "onfocus": true,
  "onhashchange": [
    "body"
  ],
  "oninput": true,
  "oninvalid": true,
  "onkeydown": true,
  "onkeypress": true,
  "onkeyup": true,
  "onload": [
    "body",
    "iframe",
    "img",
    "input",
    "link",
    "script",
    "style"
  ],
  "onloadeddata": [
    "audio",
    "video"
  ],
  "onloadedmetadata": [
    "audio",
    "video"
  ],
  "onloadstart": [
    "audio",
    "video"
  ],
  "onmousedown": true,
  "onmousemove": true,
  "onmouseout": true,
  "onmouseover": true,
  "onmouseup": true,
  "onmousewheel": true,
  "onoffline": [
    "body"
  ],
  "ononline": [
    "body"
  ],
  "onpagehide": [
    "body"
  ],
  "onpageshow": [
    "body"
  ],
  "onpaste": true,
  "onpause": [
    "audio",
    "video"
  ],
  "onplay": [
    "audio",
    "video"
  ],
  "onplaying": [
    "audio",
    "video"
  ],
  "onpopstate": [
    "body"
  ],
  "onprogress": [
    "audio",
    "video"
  ],
  "onratechange": [
    "audio",
    "video"
  ],
  "onreset": [
    "form"
  ],
  "onresize": [
    "body"
  ],
  "onscroll": true,
  "onsearch": [
    "input"
  ],
  "onseeked": [
    "audio",
    "video"
  ],
  "onseeking": [
    "audio",
    "video"
  ],
  "onselect": true,
  "onstalled": [
    "audio",
    "video"
  ],
  "onstorage": [
    "body"
  ],
  "onsubmit": [
    "form"
  ],
  "onsuspend": [
    "audio",
    "video"
  ],
  "ontimeupdate": [
    "audio",
    "video"
  ],
  "ontoggle": [
    "details"
  ],
  "onunload": [
    "body"
  ],
  "onvolumechange": [
    "audio",
    "video"
  ],
  "onwaiting": [
    "audio",
    "video"
  ],
  "onwheel": true,
  "open": [
    "details"
  ],
  "optimum": [
    "meter"
  ],
  "pattern": [
    "input"
  ],
  "placeholder": [
    "input",
    "textarea"
  ],
  "poster": [
    "video"
  ],
  "preload": [
    "audio",
    "video"
  ],
  "readonly": [
    "input",
    "textarea"
  ],
  "rel": [
    "a",
    "area",
    "link"
  ],
  "required": [
    "input",
    "select",
    "textarea"
  ],
  "reversed": [
    "ol"
  ],
  "rows": [
    "textarea"
  ],
  "rowspan": [
    "td",
    "th"
  ],
  "sandbox": [
    "iframe"
  ],
  "scope": [
    "th"
  ],
  "selected": [
    "option"
  ],
  "shape": [
    "area"
  ],
  "size": [
    "input",
    "select"
  ],
  "sizes": [
    "img",
    "link",
    "source"
  ],
  "span": [
    "col",
    "colgroup"
  ],
  "spellcheck": true,
  "src": [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ],
  "srcdoc": [
    "iframe"
  ],
  "srclang": [
    "track"
  ],
  "srcset": [
    "img",
    "source"
  ],
  "start": [
    "ol"
  ],
  "step": [
    "input"
  ],
  "style": true,
  "tabindex": true,
  "target": [
    "a",
    "area",
    "base",
    "form"
  ],
  "title": true,
  "translate": true,
  "type": [
    "a",
    "button",
    "embed",
    "input",
    "link",
    "menu",
    "object",
    "script",
    "source",
    "style"
  ],
  "usemap": [
    "img",
    "object"
  ],
  "value": [
    "button",
    "input",
    "li",
    "option",
    "meter",
    "progress",
    "param"
  ],
  "width": [
    "canvas",
    "embed",
    "iframe",
    "img",
    "input",
    "object",
    "video"
  ],
  "wrap": [
    "textarea"
  ]
}