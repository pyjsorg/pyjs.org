/* start module: pyjamas.ui.Hyperlink */
$pyjs['loaded_modules']['pyjamas.ui.Hyperlink'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Hyperlink']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Hyperlink'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Hyperlink'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Hyperlink>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Hyperlink';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Hyperlink'] = $pyjs['loaded_modules']['pyjamas.ui.Hyperlink'];
	try {


		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['History'] = $p['___import___']('pyjamas.History', 'pyjamas.ui', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
		$m['Hyperlink'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Hyperlink';
			$cls_definition['__md5__'] = '396eefe7da1b91d110a178a19828f0cc';
			$method = $pyjs__bind_method2('__init__', function(text, asHTML, Element) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					asHTML = arguments[2];
					Element = arguments[3];
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof Element != 'undefined') {
						if (Element !== null && typeof Element['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = Element;
							Element = arguments[4];
						}
					} else 					if (typeof asHTML != 'undefined') {
						if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = asHTML;
							asHTML = arguments[4];
						}
					} else 					if (typeof text != 'undefined') {
						if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = text;
							text = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];
				if (typeof asHTML == 'undefined') asHTML=arguments['callee']['__args__'][4][1];
				if (typeof Element == 'undefined') Element=arguments['callee']['__args__'][5][1];

				if ($p['bool']($p['op_is'](Element, null))) {
					Element = $m['DOM']['createDiv']();
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('anchorElem', $m['DOM']['createAnchor']()) : $p['setattr'](self, 'anchorElem', $m['DOM']['createAnchor']()); 
				self['setElement'](Element);
				$m['DOM']['appendChild'](self['getElement'](), $p['getattr'](self, 'anchorElem'));
				if ($p['bool'](!$p['bool'](kwargs['has_key']('StyleName')))) {
					kwargs['__setitem__']('StyleName', 'gwt-Hyperlink');
				}
				if ($p['bool'](text)) {
					if ($p['bool'](asHTML)) {
						kwargs['__setitem__']('HTML', text);
					}
					else {
						kwargs['__setitem__']('Text', text);
					}
				}
				if ($p['bool'](!$p['bool'](kwargs['has_key']('TargetHistoryToken')))) {
					kwargs['__setitem__']('TargetHistoryToken', null);
				}
				$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
				$m['ClickHandler']['__init__'](self);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['text', ''],['asHTML', false],['Element', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event_type;
				$m['Widget']['onBrowserEvent'](self, event);
				event_type = $m['DOM']['eventGetType'](event);
				if ($p['bool']($p['op_eq'](event_type, 'click'))) {
					$m['DOM']['eventPreventDefault'](event);
					if ($p['bool'](!$p['op_is']($p['getattr'](self, 'targetHistoryToken'), null))) {
						$m['History']['newItem']($p['getattr'](self, 'targetHistoryToken'));
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$method = $pyjs__bind_method2('getHTML', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['getInnerHTML']($p['getattr'](self, 'anchorElem'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHTML'] = $method;
			$method = $pyjs__bind_method2('setHTML', function(html) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['setInnerHTML']($p['getattr'](self, 'anchorElem'), html);
				return null;
			}
	, 1, [null,null,['self'],['html']]);
			$cls_definition['setHTML'] = $method;
			$method = $pyjs__bind_method2('getText', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['getInnerText']($p['getattr'](self, 'anchorElem'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getText'] = $method;
			$method = $pyjs__bind_method2('setText', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['setInnerText']($p['getattr'](self, 'anchorElem'), text);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['setText'] = $method;
			$method = $pyjs__bind_method2('getTargetHistoryToken', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'targetHistoryToken');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTargetHistoryToken'] = $method;
			$method = $pyjs__bind_method2('setTargetHistoryToken', function(targetHistoryToken) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					targetHistoryToken = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '396eefe7da1b91d110a178a19828f0cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('targetHistoryToken', targetHistoryToken) : $p['setattr'](self, 'targetHistoryToken', targetHistoryToken); 
				if ($p['bool']($p['op_is'](targetHistoryToken, null))) {
					targetHistoryToken = '';
				}
				$m['DOM']['setAttribute']($p['getattr'](self, 'anchorElem'), 'href', $p['__op_add']($add1='#',$add2=targetHistoryToken));
				return null;
			}
	, 1, [null,null,['self'],['targetHistoryToken']]);
			$cls_definition['setTargetHistoryToken'] = $method;
			var $bases = new Array($m['Widget'],$m['ClickHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Hyperlink', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.Hyperlink', 'Hyperlink', $m['Hyperlink']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Hyperlink */


/* end module: pyjamas.ui.Hyperlink */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.History', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Event', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
