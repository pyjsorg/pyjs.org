/* start module: Professor */
$pyjs['loaded_modules']['Professor'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Professor']['__was_initialized__']) return $pyjs['loaded_modules']['Professor'];
	var $m = $pyjs['loaded_modules']['Professor'];
	$m['__repr__'] = function() { return '<module: Professor>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Professor';
	$m['__name__'] = __mod_name__;
	try {


		$m['Person'] = $p['___import___']('Person.Person', null, null, false);
		$m['Schedule'] = $p['___import___']('Schedule.Schedule', null, null, false);
		$m['Professor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Professor';
			$cls_definition['__md5__'] = '87570a356ff53c3c60d24faabd986247';
			$method = $pyjs__bind_method2('__init__', function(teachingSchedule) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					teachingSchedule = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '87570a356ff53c3c60d24faabd986247') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof teachingSchedule != 'undefined') {
						if (teachingSchedule !== null && typeof teachingSchedule['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = teachingSchedule;
							teachingSchedule = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof teachingSchedule == 'undefined') teachingSchedule=arguments['callee']['__args__'][3][1];
				var $bool1;
				$pyjs_kwargs_call($m['Person'], '__init__', null, kwargs, [{}, self]);
				if ((($bool1=$p['op_is'](teachingSchedule, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('teachingSchedule', $m['Schedule']()) : $p['setattr'](self, 'teachingSchedule', $m['Schedule']()); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('teachingSchedule', teachingSchedule) : $p['setattr'](self, 'teachingSchedule', teachingSchedule); 
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['teachingSchedule', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getSchedule', function(daysFilter) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					daysFilter = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '87570a356ff53c3c60d24faabd986247') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['teachingSchedule']['getDescription'](daysFilter);
			}
	, 1, [null,null,['self'],['daysFilter']]);
			$cls_definition['getSchedule'] = $method;
			$method = $pyjs__bind_method2('getTeachingSchedule', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '87570a356ff53c3c60d24faabd986247') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'teachingSchedule');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTeachingSchedule'] = $method;
			var $bases = new Array($m['Person']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Professor', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Professor */


/* end module: Professor */


/*
PYJS_DEPS: ['Person.Person', 'Person', 'Schedule.Schedule', 'Schedule']
*/
