/* start module: pyjamas.ui.HTML */
$pyjs['loaded_modules']['pyjamas.ui.HTML'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.HTML']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.HTML'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.HTML'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.HTML>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTML';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['HTML'] = $pyjs['loaded_modules']['pyjamas.ui.HTML'];
	try {


		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'pyjamas.ui', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$m['HTML'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.HTML';
			$cls_definition['__md5__'] = '01380b8e0b796daf0f7a870c367aab8c';
			$cls_definition['_props'] = $p['list']([$p['tuple'](['wordwrap', 'Word Wrap', 'WordWrap', null]), $p['tuple'](['horzAlign', 'Horizontal Alignment', 'HorizontalAlignment', null])]);
			$method = $pyjs__bind_method2('__init__', function(html, wordWrap) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					wordWrap = arguments[2];
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01380b8e0b796daf0f7a870c367aab8c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof wordWrap != 'undefined') {
						if (wordWrap !== null && typeof wordWrap['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = wordWrap;
							wordWrap = arguments[3];
						}
					} else 					if (typeof html != 'undefined') {
						if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = html;
							html = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof html == 'undefined') html=arguments['callee']['__args__'][3][1];
				if (typeof wordWrap == 'undefined') wordWrap=arguments['callee']['__args__'][4][1];

				kwargs['__setitem__']('StyleName', kwargs['get']('StyleName', 'gwt-HTML'));
				if ($p['bool'](html)) {
					kwargs['__setitem__']('HTML', html);
				}
				$pyjs_kwargs_call($m['Label'], '__init__', null, kwargs, [{'wordWrap':wordWrap}, self]);
				self['sinkEvents']($p['op_bitor2']($p['getattr']($m['Event'], 'ONCLICK'), $p['getattr']($m['Event'], 'MOUSEEVENTS')));
				return null;
			}
	, 1, [null,['kwargs'],['self'],['html', null],['wordWrap', true]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				return $p['__op_add']($add1=$m['Widget']['_getProps'](),$add2=$p['getattr'](self, '_props'));
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$method = $pyjs__bind_method2('_setWeirdProps', function(props, builderstate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					props = arguments[1];
					builderstate = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '01380b8e0b796daf0f7a870c367aab8c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var txt;
				if ($p['bool'](props['has_key']('label'))) {
					props['__setitem__']('text', props['__getitem__']('label'));
					props['__delitem__']('label');
				}
				if ($p['bool'](!$p['bool'](props['has_key']('text')))) {
					return null;
				}
				txt = props['__getitem__']('text');
				if ($p['bool'](props['get']('html', false))) {
					self['setHTML'](txt);
				}
				else {
					self['setText'](txt);
				}
				return null;
			}
	, 1, [null,null,['self'],['props'],['builderstate']]);
			$cls_definition['_setWeirdProps'] = $method;
			var $bases = new Array($m['Label'],$m['InnerHTML']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HTML', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.HTML', 'HTML', $m['HTML']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.HTML */


/* end module: pyjamas.ui.HTML */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Label.Label', 'pyjamas.ui', 'pyjamas.ui.Label', 'pyjamas.ui.Event', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
