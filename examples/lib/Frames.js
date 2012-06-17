/* start module: Frames */
$pyjs.loaded_modules['Frames'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Frames'].__was_initialized__) return $pyjs.loaded_modules['Frames'];
	var $m = $pyjs.loaded_modules["Frames"];
	$m.__repr__ = function() { return "<module: Frames>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Frames';
	$m.__name__ = __mod_name__;
	try {


		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
		$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', null, null, false);
		$m['Frames'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Frames';
			$cls_definition.__md5__ = '2ee9f9f3b7ed56d4852f0f75924169bb';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2ee9f9f3b7ed56d4852f0f75924169bb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$m['Sink']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('frame', $m['Frame']((typeof ($add1=self['baseURL']())==typeof ($add2='rembrandt/LaMarcheNocturne.html') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))) : $p['setattr'](self, 'frame', $m['Frame']((typeof ($add1=self['baseURL']())==typeof ($add2='rembrandt/LaMarcheNocturne.html') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))); 
				self['frame']['setWidth']('100%');
				self['frame']['setHeight']('48em');
				self['initWidget']($p['getattr'](self, 'frame'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Frames', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var text;
			text = "If you need to include multiple pages of good ol' static HTML, it's easy to do using the <code>Frame</code> class.";
			return $m['SinkInfo']('Frames', text, $m['Frames']);
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Frames */


/* end module: Frames */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame']
*/
