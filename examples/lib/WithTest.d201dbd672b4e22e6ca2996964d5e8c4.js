/* start module: WithTest */
$pyjs['loaded_modules']['WithTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['WithTest']['__was_initialized__']) return $pyjs['loaded_modules']['WithTest'];
	var $m = $pyjs['loaded_modules']['WithTest'];
	$m['__repr__'] = function() { return '<module: WithTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'WithTest';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_2 = new $p['int'](2);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$m['WithTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'WithTest';
			$cls_definition['__md5__'] = '31b4b42b877ccb1ffc47cf8267ee22d9';
			$cls_definition['Dummy'] = (function(){
				var $cls_definition = new Object();
				var $method;
				$cls_definition['__module__'] = 'WithTest';
				$cls_definition['__md5__'] = 'cb0e8d9d86b7eb9299ce2a150fd82ff3';
				$method = $pyjs__bind_method2('__init__', function(value, gobble) {
					if (this['__is_instance__'] === true) {
						var self = this;
						if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
					} else {
						var self = arguments[0];
						value = arguments[1];
						gobble = arguments[2];
						if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
					}
					if ($pyjs['options']['arg_instance_type']) {
						if (self.prototype['__md5__'] !== 'cb0e8d9d86b7eb9299ce2a150fd82ff3') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}
					if (typeof value == 'undefined') value=arguments['callee']['__args__'][3][1];
					if (typeof gobble == 'undefined') gobble=arguments['callee']['__args__'][4][1];
					var $bool1;
					if ((($bool1=$p['op_is'](value, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						value = self;
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('value', value) : $p['setattr'](self, 'value', value); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gobble', gobble) : $p['setattr'](self, 'gobble', gobble); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('enter_called', false) : $p['setattr'](self, 'enter_called', false); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('exit_called', false) : $p['setattr'](self, 'exit_called', false); 
					return null;
				}
	, 1, [null,null,['self'],['value', null],['gobble', false]]);
				$cls_definition['__init__'] = $method;
				$method = $pyjs__bind_method2('__enter__', function() {
					if (this['__is_instance__'] === true) {
						var self = this;
						if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
					} else {
						var self = arguments[0];
						if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					}
					if ($pyjs['options']['arg_instance_type']) {
						if (self.prototype['__md5__'] !== 'cb0e8d9d86b7eb9299ce2a150fd82ff3') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}

					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('enter_called', true) : $p['setattr'](self, 'enter_called', true); 
					return $p['getattr'](self, 'value');
				}
	, 1, [null,null,['self']]);
				$cls_definition['__enter__'] = $method;
				$method = $pyjs__bind_method2('__exit__', function() {
					if (this['__is_instance__'] === true) {
						var self = this;
						var exc_info = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

						if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
					} else {
						var self = arguments[0];
						var exc_info = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

						if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
					}
					if ($pyjs['options']['arg_instance_type']) {
						if (self.prototype['__md5__'] !== 'cb0e8d9d86b7eb9299ce2a150fd82ff3') {
							if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
								$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
							}
						}
					}
					var $bool2;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('exit_called', true) : $p['setattr'](self, 'exit_called', true); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('exc_info', exc_info) : $p['setattr'](self, 'exc_info', exc_info); 
					if ((($bool2=$p['getattr'](self, 'gobble')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						return true;
					}
					return null;
				}
	, 1, ['exc_info',null,['self']]);
				$cls_definition['__exit__'] = $method;
				var $bases = new Array($p['object']);
				var $data = $p['dict']();
				for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
				return $p['_create_class']('Dummy', $p['tuple']($bases), $data);
			})();
			$method = $pyjs__bind_method2('testSimple', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '31b4b42b877ccb1ffc47cf8267ee22d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var d,v,z,$2,$1;
				$p['__with'](self['Dummy'](), function($withval1){

				});
				$p['__with'](self['Dummy'](), function($withval2){
					v = (typeof $withval2 == "undefined"?$m['$withval2']:$withval2);
				});
				d = self['Dummy']();
				$p['__with'](d, function($withval3){

				});
				self['assertTrue']($p['getattr'](d, 'enter_called'));
				self['assertTrue']($p['getattr'](d, 'exit_called'));
				z = null;
				$p['__with'](self['Dummy']($constant_int_10), function($withval4){
					v = (typeof $withval4 == "undefined"?$m['$withval4']:$withval4);
					z = v;
				});
				self['assertEqual'](z, $constant_int_10);
				self['fail']('Bug #XXX - With statement fails for unknown reason');
				return null;
				d = $pyjs_kwargs_call(self, 'Dummy', null, null, [{'gobble':true}]);
				$p['__with'](d, function($withval5){
					throw ($p['Exception']());
				});
				self['assertEqual']($p['type']((typeof ($1=$p['getattr'](d, 'exc_info'))['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_1]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_1))), $p['Exception']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimple'] = $method;
			$method = $pyjs__bind_method2('testNested', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '31b4b42b877ccb1ffc47cf8267ee22d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var v2,v1,v3,l;
				l = null;
				$p['__with'](self['Dummy']($constant_int_1), function($withval6){
					v1 = (typeof $withval6 == "undefined"?$m['$withval6']:$withval6);
					$p['__with'](self['Dummy']($constant_int_2), function($withval7){
						v2 = (typeof $withval7 == "undefined"?$m['$withval7']:$withval7);
						$p['__with'](self['Dummy']($constant_int_3), function($withval8){
							v3 = (typeof $withval8 == "undefined"?$m['$withval8']:$withval8);
							l = $p['list']([v1, v2, v3]);
						});
					});
				});
				self['assertEqual'](l, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				l = null;
				$p['__with'](self['Dummy']($constant_int_1), function($withval9){
					v1 = (typeof $withval9 == "undefined"?$m['$withval9']:$withval9);
					l = $p['list']([]);
					l['append'](v1);
					$p['__with'](self['Dummy']($constant_int_2), function($withval10){
						v2 = (typeof $withval10 == "undefined"?$m['$withval10']:$withval10);
						l['append'](v2);
						$p['__with'](self['Dummy']($constant_int_3), function($withval11){
							v3 = (typeof $withval11 == "undefined"?$m['$withval11']:$withval11);
							l['append'](v3);
						});
					});
				});
				self['assertEqual'](l, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNested'] = $method;
			$method = $pyjs__bind_method2('testComplexAssign', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '31b4b42b877ccb1ffc47cf8267ee22d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$15,$16,$10,d,$12,$13,$8,$9,$6,$7,$4,$5,$3,$11;
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$p['__with'](self['Dummy']('z'), function($withval12){
					d['__setitem__']($constant_int_1, (typeof $withval12 == "undefined"?$m['$withval12']:$withval12));
					self['assertEqual'](d, $p['dict']([[$constant_int_1, 'z']]));
				});
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$p['__with'](self['Dummy']('z'), function($withval13){
					(typeof ($3=d)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($constant_int_1))['__setitem__']($constant_int_0, (typeof $withval13 == "undefined"?$m['$withval13']:$withval13));
					self['assertEqual']((typeof ($7=(typeof ($5=d)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=$constant_int_1]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
						((typeof $7['__array'][$8=$constant_int_0]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__']($constant_int_0)), 'z');
					self['assertEqual'](d, $p['dict']([[$constant_int_1, $p['list'](['z', $constant_int_1, $constant_int_2])]]));
				});
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$p['__with'](self['Dummy']('z'), function($withval14){
					(typeof ($9=d['values']())['__array'] != 'undefined'?
						((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']($constant_int_0))['__setitem__']($constant_int_1, (typeof $withval14 == "undefined"?$m['$withval14']:$withval14));
					self['assertEqual'](d, $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, 'z', $constant_int_2])]]));
				});
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$p['__with'](self['Dummy']($p['list'](['a', 'b', 'c'])), function($withval15){
					var $tupleassign1 = $p['__ass_unpack']((typeof $withval15 == "undefined"?$m['$withval15']:$withval15), 3, null);
					(typeof ($11=d)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$constant_int_1]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($constant_int_1))['__setitem__']($constant_int_0, $tupleassign1[0]);
					(typeof ($13=d)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=$constant_int_1]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__']($constant_int_1))['__setitem__']($constant_int_1, $tupleassign1[1]);
					(typeof ($15=d)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=$constant_int_1]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']($constant_int_1))['__setitem__']($constant_int_2, $tupleassign1[2]);
					self['assertEqual'](d, $p['dict']([[$constant_int_1, $p['list'](['a', 'b', 'c'])]]));
				});
				d = $p['dict']([[$constant_int_1, $p['list']([$constant_int_0, $constant_int_1, $constant_int_2])]]);
				$p['__with'](self['Dummy']($p['list'](['a', 'b', 'c'])), function($withval16){
					var $tupleassign2 = $p['__ass_unpack']((typeof $withval16 == "undefined"?$m['$withval16']:$withval16), 3, null);
					d['__setitem__']($constant_int_1, $tupleassign2[0]);
					d['__setitem__']($constant_int_2, $tupleassign2[1]);
					d['__setitem__']($constant_int_3, $tupleassign2[2]);
					self['assertEqual'](d, $p['dict']([[$constant_int_1, 'a'], [$constant_int_2, 'b'], [$constant_int_3, 'c']]));
				});
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testComplexAssign'] = $method;
			$method = $pyjs__bind_method2('testFlowControl', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '31b4b42b877ccb1ffc47cf8267ee22d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFlowControl'] = $method;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('WithTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end WithTest */


/* end module: WithTest */


/*
PYJS_DEPS: ['UnitTest']
*/
