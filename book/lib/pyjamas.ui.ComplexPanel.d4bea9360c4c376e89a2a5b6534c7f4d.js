/* start module: pyjamas.ui.ComplexPanel */
$pyjs['loaded_modules']['pyjamas.ui.ComplexPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.ComplexPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.ComplexPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.ComplexPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.ComplexPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ComplexPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['ComplexPanel'] = $pyjs['loaded_modules']['pyjamas.ui.ComplexPanel'];
	try {


		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'pyjamas.ui', null, false);
		$m['ComplexPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.ComplexPanel';
			$cls_definition['__md5__'] = '1fbf917a80065a178c6ba12c9d7003c3';
			$method = $pyjs__bind_method2('add', function(widget, container) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					container = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1fbf917a80065a178c6ba12c9d7003c3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof container == 'undefined') container=arguments['callee']['__args__'][4][1];

				if ($p['bool'](!$p['op_is'](container, null))) {
					self['insert'](widget, container, self['getWidgetCount']());
				}
				else {
					self['insert'](widget, self['getWidgetCount']());
				}
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container', null]]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('insert', function(widget, container, beforeIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					container = arguments[2];
					beforeIndex = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1fbf917a80065a178c6ba12c9d7003c3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][5][1];

				if ($p['bool']($p['op_eq'](widget['getParent'](), self))) {
					return null;
				}
				if ($p['bool']($p['op_is'](beforeIndex, null))) {
					beforeIndex = container;
					container = self['getElement']();
				}
				self['adopt'](widget, container);
				self['children']['insert'](beforeIndex, widget);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex', null]]);
			$cls_definition['insert'] = $method;
			$method = $pyjs__bind_method2('remove', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1fbf917a80065a178c6ba12c9d7003c3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['isinstance'](widget, $p['int']))) {
					widget = self['getWidget'](widget);
				}
				if ($p['bool'](!self['getChildren']()['__contains__'](widget))) {
					return false;
				}
				self['disown'](widget);
				self['getChildren']()['remove'](widget);
				return true;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			var $bases = new Array($m['Panel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ComplexPanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.ComplexPanel', 'ComplexPanel', $m['ComplexPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.ComplexPanel */


/* end module: pyjamas.ui.ComplexPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui', 'pyjamas.ui.Panel']
*/
