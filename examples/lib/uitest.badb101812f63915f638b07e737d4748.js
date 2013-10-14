/* start module: uitest */
$pyjs['loaded_modules']['uitest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['uitest']['__was_initialized__']) return $pyjs['loaded_modules']['uitest'];
	var $m = $pyjs['loaded_modules']['uitest'];
	$m['__repr__'] = function() { return '<module: uitest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'uitest';
	$m['__name__'] = __mod_name__;
	try {
		var $bool5,$len3,$bool3,$bool4,$4,$3;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1 = new $p['int'](1);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['IN_BROWSER'] = $p['___import___']('libuitest.UnitTest.IN_BROWSER', null, null, false);
		$m['IN_JS'] = $p['___import___']('libuitest.UnitTest.IN_JS', null, null, false);
		$m['DockPanelTest'] = $p['___import___']('libuitest.DockPanelTest.DockPanelTest', null, null, false);
		$m['LabelTest'] = $p['___import___']('libuitest.LabelTest.LabelTest', null, null, false);
		$m['DOMTest'] = $p['___import___']('libuitest.DOMTest.DOMTest', null, null, false);
		$m['EventTest'] = $p['___import___']('libuitest.EventTest.EventTest', null, null, false);
		$m['write'] = $p['___import___']('libuitest.write', null, null, false);
		$m['sys'] = $p['___import___']('sys', null);
		$m['RunTests'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'uitest';
			$cls_definition['__md5__'] = '2dea344814b48b1451631b40a20c9628';
			$method = $pyjs__bind_method2('__init__', function(test_gen) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					test_gen = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2dea344814b48b1451631b40a20c9628') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('current_test', null) : $p['setattr'](self, 'current_test', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_gen', test_gen) : $p['setattr'](self, 'test_gen', test_gen); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('testlist', $p['dict']([])) : $p['setattr'](self, 'testlist', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', $constant_int_0) : $p['setattr'](self, 'test_idx', $constant_int_0); 
				$m['Timer']($constant_int_100, self);
				return null;
			}
	, 1, [null,null,['self'],['test_gen']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('add', function(test) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					test = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2dea344814b48b1451631b40a20c9628') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len1;
				$p['getattr'](self, 'testlist')['__setitem__']((($len1=$p['getattr'](self, 'testlist')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), test);
				return null;
			}
	, 1, [null,null,['self'],['test']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(tid) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					tid = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2dea344814b48b1451631b40a20c9628') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['start_test']();
				return null;
			}
	, 1, [null,null,['self'],['tid']]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('start_test', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2dea344814b48b1451631b40a20c9628') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,idx,$cmp3,$cmp2,test_kls,t,$bool2,$bool1,$len2,$add2,$add1,$2,$1;
				if ((($bool1=((((($cmp1=$p['getattr'](self, 'test_idx'))===($cmp2=(($len2=$p['getattr'](self, 'testlist')) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					if ((($bool2=((($cmp3=$p['getattr']($p['getattr'](self, 'current_test'), 'tests_outstanding'))===($cmp4=$constant_int_0)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						$m['Timer']($constant_int_100, self);
						return null;
					}
					$m['write']['display_log_output']();
					return null;
				}
				idx = $p['getattr'](self, 'test_idx');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('test_idx', (typeof ($add1=$p['getattr'](self, 'test_idx'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) : $p['setattr'](self, 'test_idx', (typeof ($add1=$p['getattr'](self, 'test_idx'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))); 
				test_kls = (typeof ($1=$p['getattr'](self, 'testlist'))['__array'] != 'undefined'?
					((typeof $1['__array'][$2=idx]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](idx));
				t = test_kls($p['getattr'](self, 'test_gen'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('current_test', t) : $p['setattr'](self, 'current_test', t); 
				t['__is_instance__'] && typeof t['__setattr__'] == 'function' ? t['__setattr__']('start_next_test', $p['getattr'](self, 'start_test')) : $p['setattr'](t, 'start_next_test', $p['getattr'](self, 'start_test')); 
				t['run']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['start_test'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RunTests', $p['tuple']($bases), $data);
		})();
		$m['main'] = function(test_gen_out) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var t;
			$m['pyjd']['setup']('public/uitest.html');
			t = $m['RunTests'](test_gen_out);
			t['add']($m['DockPanelTest']);
			t['add']($m['LabelTest']);
			t['add']($m['EventTest']);
			t['add']($m['DOMTest']);
			$m['pyjd']['run']();
			return null;
		};
		$m['main']['__name__'] = 'main';

		$m['main']['__bind_type__'] = 0;
		$m['main']['__args__'] = [null,null,['test_gen_out']];
		if ((($bool3=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['test_gen_output_folder'] = null;
			if ((($bool4=$p['hasattr']($m['sys'], 'argv')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				if ((($bool5=$p['op_eq']((($len3=$p['getattr']($m['sys'], 'argv')) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))), $constant_int_2)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['test_gen_output_folder'] = (typeof ($3=$p['getattr']($m['sys'], 'argv'))['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($constant_int_1));
				}
			}
			$m['main']($m['test_gen_output_folder']);
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end uitest */


/* end module: uitest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'libuitest.UnitTest.IN_BROWSER', 'libuitest', 'libuitest.UnitTest', 'libuitest.UnitTest.IN_JS', 'libuitest.DockPanelTest.DockPanelTest', 'libuitest.DockPanelTest', 'libuitest.LabelTest.LabelTest', 'libuitest.LabelTest', 'libuitest.DOMTest.DOMTest', 'libuitest.DOMTest', 'libuitest.EventTest.EventTest', 'libuitest.EventTest', 'libuitest.write', 'sys']
*/
