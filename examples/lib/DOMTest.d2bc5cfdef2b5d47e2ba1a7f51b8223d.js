/* start module: DOMTest */
$pyjs['loaded_modules']['DOMTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['DOMTest']['__was_initialized__']) return $pyjs['loaded_modules']['DOMTest'];
	var $m = $pyjs['loaded_modules']['DOMTest'];
	$m['__repr__'] = function() { return '<module: DOMTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DOMTest';
	$m['__name__'] = __mod_name__;
	try {


		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['UnitTest1'] = $p['___import___']('UnitTest.UnitTest1', null, null, false);
		$m['DOMTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'DOMTest';
			$cls_definition['__md5__'] = 'c6704609be056efa3d171f294d44c8ed';
			$method = $pyjs__bind_method2('testDivHTML', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c6704609be056efa3d171f294d44c8ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,div;
				e = $m['DOM']['getElementById']('tests');
				div = $m['DOM']['createElement']('div');
				$m['DOM']['appendChild'](e, div);
				$m['DOM']['setInnerHTML'](div, 'hello world\n');
				self['write_test_output']('addDiv');
				$m['DOM']['removeChild'](e, div);
				self['write_test_output']('removeDiv');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDivHTML'] = $method;
			$method = $pyjs__bind_method2('testDivText', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c6704609be056efa3d171f294d44c8ed') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,div,div2;
				e = $m['DOM']['getElementById']('tests');
				div = $m['DOM']['createElement']('div');
				$m['DOM']['appendChild'](e, div);
				div2 = $m['DOM']['createElement']('div');
				$m['DOM']['appendChild'](div, div2);
				$m['DOM']['setInnerText'](div2, 'hello world\n');
				self['write_test_output']('addDiv');
				$m['DOM']['removeChild'](e, div);
				self['write_test_output']('removeDiv');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDivText'] = $method;
			var $bases = new Array($m['UnitTest1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DOMTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end DOMTest */


/* end module: DOMTest */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM', 'UnitTest.UnitTest1', 'UnitTest']
*/
