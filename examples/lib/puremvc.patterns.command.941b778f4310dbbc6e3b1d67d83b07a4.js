/* start module: puremvc.patterns.command */
$pyjs['loaded_modules']['puremvc.patterns.command'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['puremvc.patterns.command']['__was_initialized__']) return $pyjs['loaded_modules']['puremvc.patterns.command'];
	if(typeof $pyjs['loaded_modules']['puremvc.patterns'] == 'undefined' || !$pyjs['loaded_modules']['puremvc.patterns']['__was_initialized__']) $p['___import___']('puremvc.patterns', null);
	var $m = $pyjs['loaded_modules']['puremvc.patterns.command'];
	$m['__repr__'] = function() { return '<module: puremvc.patterns.command>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'puremvc.patterns.command';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['puremvc.patterns']['command'] = $pyjs['loaded_modules']['puremvc.patterns.command'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		$m['puremvc'] = $p['___import___']('puremvc.interfaces', 'puremvc.patterns');
		$m['puremvc'] = $p['___import___']('puremvc.patterns.observer', 'puremvc.patterns');
		$m['MacroCommand'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'puremvc.patterns.command';
			$cls_definition['__md5__'] = '94e276112d751f839a4c9839c54dd7e6';
			$cls_definition['subCommands'] = null;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '94e276112d751f839a4c9839c54dd7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('subCommands', $p['list']([])) : $p['setattr'](self, 'subCommands', $p['list']([])); 
				self['initializeMacroCommand']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('initializeMacroCommand', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '94e276112d751f839a4c9839c54dd7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['initializeMacroCommand'] = $method;
			$method = $pyjs__bind_method2('addSubCommand', function(commandClassRef) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					commandClassRef = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '94e276112d751f839a4c9839c54dd7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['subCommands']['append'](commandClassRef);
				return null;
			}
	, 1, [null,null,['self'],['commandClassRef']]);
			$cls_definition['addSubCommand'] = $method;
			$method = $pyjs__bind_method2('execute', function(notification) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					notification = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '94e276112d751f839a4c9839c54dd7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,$cmp2,commandClassRef,$bool1,$len1,commandInstance;
				while ((($bool1=((($cmp1=(($len1=$p['getattr'](self, 'subCommands')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))))===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					commandClassRef = self['subCommands']['pop']($constant_int_0);
					commandInstance = commandClassRef();
					commandInstance['execute'](notification);
				}
				return null;
			}
	, 1, [null,null,['self'],['notification']]);
			$cls_definition['execute'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($p['getattr']($m['puremvc'], 'patterns'), 'observer'), 'Notifier'),$p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'ICommand'),$p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'INotifier'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MacroCommand', $p['tuple']($bases), $data);
		})();
		$m['SimpleCommand'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'puremvc.patterns.command';
			$cls_definition['__md5__'] = '4b6c4da94c7c6c1afd32ecc01a8c789c';
			$method = $pyjs__bind_method2('execute', function(notification) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					notification = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4b6c4da94c7c6c1afd32ecc01a8c789c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['notification']]);
			$cls_definition['execute'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($p['getattr']($m['puremvc'], 'patterns'), 'observer'), 'Notifier'),$p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'ICommand'),$p['getattr']($p['getattr']($m['puremvc'], 'interfaces'), 'INotifier'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SimpleCommand', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end puremvc.patterns.command */


/* end module: puremvc.patterns.command */


/*
PYJS_DEPS: ['puremvc.interfaces', 'puremvc', 'puremvc.patterns.observer', 'puremvc.patterns']
*/
