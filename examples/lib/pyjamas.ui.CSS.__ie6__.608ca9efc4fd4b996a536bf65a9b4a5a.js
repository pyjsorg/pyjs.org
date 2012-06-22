/* start module: pyjamas.ui.CSS */
$pyjs['loaded_modules']['pyjamas.ui.CSS'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.CSS']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.CSS'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.CSS'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.CSS>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CSS';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['CSS'] = $pyjs['loaded_modules']['pyjamas.ui.CSS'];
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['StyleSheetCssFile'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.CSS';
			$cls_definition['__md5__'] = '991b1706fbbd1ce650c4e82b07bf6b0a';
			$method = $pyjs__bind_method2('__init__', function(cssFile, _doc) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					cssFile = arguments[1];
					_doc = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '991b1706fbbd1ce650c4e82b07bf6b0a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof cssFile == 'undefined') cssFile=arguments['callee']['__args__'][3][1];
				if (typeof _doc == 'undefined') _doc=arguments['callee']['__args__'][4][1];
				var $bool1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_e', $m['DOM']['createElement']('link')) : $p['setattr'](self, '_e', $m['DOM']['createElement']('link')); 
				self['_e']['setAttribute']('rel', 'stylesheet');
				self['_e']['setAttribute']('type', 'text/css');
				self['_e']['setAttribute']('href', cssFile);
				if ((($bool1=$p['op_is'](_doc, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					_doc = $doc;
				}
				_doc['getElementsByTagName']('head')['item']($constant_int_0)['appendChild']($p['getattr'](self, '_e'));
				return null;
			}
	, 1, [null,null,['self'],['cssFile', ''],['_doc', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '991b1706fbbd1ce650c4e82b07bf6b0a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var parent;
				parent = $m['DOM']['getParent']($p['getattr'](self, '_e'));
				$m['DOM']['removeChild'](parent, $p['getattr'](self, '_e'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StyleSheetCssFile', $p['tuple']($bases), $data);
		})();
		$m['setStyleElementText'] = function(el, text) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$p['getattr'](el, 'styleSheet')['__is_instance__'] && typeof $p['getattr'](el, 'styleSheet')['__setattr__'] == 'function' ? $p['getattr'](el, 'styleSheet')['__setattr__']('cssText', text) : $p['setattr']($p['getattr'](el, 'styleSheet'), 'cssText', text); 
			return null;
		};
		$m['setStyleElementText']['__name__'] = 'setStyleElementText';

		$m['setStyleElementText']['__bind_type__'] = 0;
		$m['setStyleElementText']['__args__'] = [null,null,['el'],['text']];
		$m['StyleSheetCssText'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.CSS';
			$cls_definition['__md5__'] = 'cc759f53f4ec2c797823a86282032dcc';
			$method = $pyjs__bind_method2('__init__', function(text, _doc) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					_doc = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc759f53f4ec2c797823a86282032dcc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];
				if (typeof _doc == 'undefined') _doc=arguments['callee']['__args__'][4][1];
				var $bool2;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_e', $m['DOM']['createElement']('style')) : $p['setattr'](self, '_e', $m['DOM']['createElement']('style')); 
				self['_e']['setAttribute']('type', 'text/css');
				$m['setStyleElementText']($p['getattr'](self, '_e'), text);
				if ((($bool2=$p['op_is'](_doc, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2['__nonzero__']=='function'?
								$bool2['__nonzero__']() :
								(typeof $bool2['__len__']=='function'?
									($bool2['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					_doc = $doc;
				}
				_doc['getElementsByTagName']('head')['item']($constant_int_0)['appendChild']($p['getattr'](self, '_e'));
				return null;
			}
	, 1, [null,null,['self'],['text', ''],['_doc', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc759f53f4ec2c797823a86282032dcc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var parent;
				parent = $m['DOM']['getParent']($p['getattr'](self, '_e'));
				$m['DOM']['removeChild'](parent, $p['getattr'](self, '_e'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StyleSheetCssText', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.CSS */


/* end module: pyjamas.ui.CSS */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
