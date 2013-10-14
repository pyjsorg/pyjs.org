/* start module: libuitest.DockPanelTest */
$pyjs['loaded_modules']['libuitest.DockPanelTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libuitest.DockPanelTest']['__was_initialized__']) return $pyjs['loaded_modules']['libuitest.DockPanelTest'];
	if(typeof $pyjs['loaded_modules']['libuitest'] == 'undefined' || !$pyjs['loaded_modules']['libuitest']['__was_initialized__']) $p['___import___']('libuitest', null);
	var $m = $pyjs['loaded_modules']['libuitest.DockPanelTest'];
	$m['__repr__'] = function() { return '<module: libuitest.DockPanelTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libuitest.DockPanelTest';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libuitest']['DockPanelTest'] = $pyjs['loaded_modules']['libuitest.DockPanelTest'];
	try {


		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'libuitest', null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'libuitest', null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'libuitest', null, false);
		$m['UnitTest1'] = $p['___import___']('UnitTest.UnitTest1', 'libuitest', null, false);
		$m['DockPanelTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libuitest.DockPanelTest';
			$cls_definition['__md5__'] = '52cb99681f846f691260198146a5da0a';
			$method = $pyjs__bind_method2('testDockAdd', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52cb99681f846f691260198146a5da0a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('d', $m['DockPanel']()) : $p['setattr'](self, 'd', $m['DockPanel']()); 
				$m['RootPanel']('tests')['add']($p['getattr'](self, 'd'));
				self['write_test_output']('adddockpanel');
				if ((($bool2=!(($bool1=$m['RootPanel']('tests')['remove']($p['getattr'](self, 'd'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['fail']('DockPanel added but apparently not owned by RootPanel()');
				}
				self['write_test_output']('removedockpanel');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDockAdd'] = $method;
			$method = $pyjs__bind_method2('testDockAddCentre', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '52cb99681f846f691260198146a5da0a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3,l2,l,$bool4;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('d', $m['DockPanel']()) : $p['setattr'](self, 'd', $m['DockPanel']()); 
				$m['RootPanel']('tests')['add']($p['getattr'](self, 'd'));
				l = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'teststyle'}, 'Hello World (label)']);
				self['d']['add'](l, $p['getattr']($m['DockPanel'], 'CENTER'));
				self['write_test_output']('addcentrelabel');
				self['d']['remove'](l);
				self['write_test_output']('removecentrelabel');
				l2 = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'teststyle'}, 'Hello World 2 (label)']);
				self['d']['add'](l2, $p['getattr']($m['DockPanel'], 'CENTER'));
				self['write_test_output']('addcentrelabel2');
				if ((($bool4=!(($bool3=$m['RootPanel']('tests')['remove']($p['getattr'](self, 'd'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4['__nonzero__']=='function'?
								$bool4['__nonzero__']() :
								(typeof $bool4['__len__']=='function'?
									($bool4['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['fail']('DockPanel added but apparently not owned by RootPanel()');
				}
				self['write_test_output']('removedock');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDockAddCentre'] = $method;
			var $bases = new Array($m['UnitTest1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DockPanelTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libuitest.DockPanelTest */


/* end module: libuitest.DockPanelTest */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'UnitTest.UnitTest1', 'UnitTest']
*/
