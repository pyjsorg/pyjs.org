/* start module: game_controller */
$pyjs['loaded_modules']['game_controller'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['game_controller']['__was_initialized__']) return $pyjs['loaded_modules']['game_controller'];
	var $m = $pyjs['loaded_modules']['game_controller'];
	$m['__repr__'] = function() { return '<module: game_controller>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game_controller';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_0 = new $p['int'](0);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['FPS'] = $p['___import___']('game_model.FPS', null, null, false);
		$m['ROTATE_SPEED'] = $p['___import___']('game_model.ROTATE_SPEED', null, null, false);
		$m['Controller'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'game_controller';
			$cls_definition['__md5__'] = '5cacd69bdf6f194b5a472ce1ab47514d';
			$method = $pyjs__bind_method2('__init__', function(model) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					model = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5cacd69bdf6f194b5a472ce1ab47514d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('model', model) : $p['setattr'](self, 'model', model); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_up', false) : $p['setattr'](self, 'key_up', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_down', false) : $p['setattr'](self, 'key_down', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_left', false) : $p['setattr'](self, 'key_left', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_right', false) : $p['setattr'](self, 'key_right', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key_fire', false) : $p['setattr'](self, 'key_fire', false); 
				return null;
			}
	, 1, [null,null,['self'],['model']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('start_game', function(view) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					view = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5cacd69bdf6f194b5a472ce1ab47514d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$div1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('view', view) : $p['setattr'](self, 'view', view); 
				self['model']['start_game'](view);
				self['model']['reset']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timer', $pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'update')}])) : $p['setattr'](self, 'timer', $pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'update')}])); 
				self['timer']['scheduleRepeating']((typeof ($div1=$constant_int_1000)==typeof ($div2=$m['FPS']) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)));
				return null;
			}
	, 1, [null,null,['self'],['view']]);
			$cls_definition['start_game'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5cacd69bdf6f194b5a472ce1ab47514d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['keyboard_updates']();
				self['model']['update']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$method = $pyjs__bind_method2('keyboard_updates', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5cacd69bdf6f194b5a472ce1ab47514d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,drot,$bool2,$bool3,$bool1,$bool4,$bool5,$sub2,$sub1,$add1,ship;
				ship = $p['getattr']($p['getattr'](self, 'model'), 'ship');
				drot = $constant_int_0;
				if ((($bool1=$p['getattr'](self, 'key_left')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					drot = (typeof ($sub1=drot)==typeof ($sub2=$m['ROTATE_SPEED']) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
				}
				if ((($bool2=$p['getattr'](self, 'key_right')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					drot = (typeof ($add1=drot)==typeof ($add2=$m['ROTATE_SPEED']) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
				if ((($bool3=drot) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					ship['rotate_ship'](drot);
				}
				if ((($bool4=$p['getattr'](self, 'key_up')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					ship['thrust']();
				}
				else {
					ship['friction']();
				}
				if ((($bool5=$p['getattr'](self, 'key_fire')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['model']['trigger_fire']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['keyboard_updates'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Controller', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end game_controller */


/* end module: game_controller */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer', 'game_model.FPS', 'game_model', 'game_model.ROTATE_SPEED']
*/
