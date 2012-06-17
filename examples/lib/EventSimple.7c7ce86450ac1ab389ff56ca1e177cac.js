/* start module: EventSimple */
$pyjs.loaded_modules['EventSimple'] = function (__mod_name__) {
	if($pyjs.loaded_modules['EventSimple'].__was_initialized__) return $pyjs.loaded_modules['EventSimple'];
	var $m = $pyjs.loaded_modules["EventSimple"];
	$m.__repr__ = function() { return "<module: EventSimple>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'EventSimple';
	$m.__name__ = __mod_name__;
	try {
		var $bool1;
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_1500 = new $p['int'](1500);
		var $constant_int_4 = new $p['int'](4);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['Map'] = $p['___import___']('pyjamas.gmaps.Map.Map', null, null, false);
		$m['MapTypeId'] = $p['___import___']('pyjamas.gmaps.Map.MapTypeId', null, null, false);
		$m['MapOptions'] = $p['___import___']('pyjamas.gmaps.Map.MapOptions', null, null, false);
		$m['LatLng'] = $p['___import___']('pyjamas.gmaps.Base.LatLng', null, null, false);
		$m['EventSimple'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'EventSimple';
			$cls_definition.__md5__ = '22a512e6c5f69a96e7ffdce418fc554e';
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
					if (self.prototype.__md5__ !== '22a512e6c5f69a96e7ffdce418fc554e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var options;
				$m['SimplePanel']['__init__'](self);
				self['setSize']('100%', '100%');
				options = $m['MapOptions']();
				options.__is_instance__ && typeof options.__setattr__ == 'function' ? options.__setattr__('zoom', $constant_int_4) : $p['setattr'](options, 'zoom', $constant_int_4); 
				options.__is_instance__ && typeof options.__setattr__ == 'function' ? options.__setattr__('center', $m['LatLng']((typeof ($usub1=25.363882)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 131.044922)) : $p['setattr'](options, 'center', $m['LatLng']((typeof ($usub1=25.363882)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), 131.044922)); 
				options.__is_instance__ && typeof options.__setattr__ == 'function' ? options.__setattr__('mapTypeId', $p['getattr']($m['MapTypeId'], 'ROADMAP')) : $p['setattr'](options, 'mapTypeId', $p['getattr']($m['MapTypeId'], 'ROADMAP')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('map', $m['Map'](self['getElement'](), options)) : $p['setattr'](self, 'map', $m['Map'](self['getElement'](), options)); 
				self['map']['addListener']('zoom_changed', $p['getattr'](self, 'zoomChanged'));
				self['map']['addListener']('click', $p['getattr'](self, 'clicked'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('zoomChanged', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '22a512e6c5f69a96e7ffdce418fc554e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Timer']($constant_int_1500, $p['getattr'](self, 'moveToDarwin'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['zoomChanged'] = $method;
			$method = $pyjs__bind_method2('moveToDarwin', function(timer) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					timer = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '22a512e6c5f69a96e7ffdce418fc554e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var darwin;
				darwin = $m['LatLng']((typeof ($usub2=12.461334)=='number'?
					-$usub2:
					$p['op_usub']($usub2)), 130.841904);
				self['map']['setCenter'](darwin);
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['moveToDarwin'] = $method;
			$method = $pyjs__bind_method2('clicked', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '22a512e6c5f69a96e7ffdce418fc554e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['map']['setZoom']($constant_int_8);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clicked'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('EventSimple', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['root'] = $m['RootPanel']();
			$m['root']['add']($m['EventSimple']());
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end EventSimple */


/* end module: EventSimple */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.gmaps.Map.Map', 'pyjamas.gmaps', 'pyjamas.gmaps.Map', 'pyjamas.gmaps.Map.MapTypeId', 'pyjamas.gmaps.Map.MapOptions', 'pyjamas.gmaps.Base.LatLng', 'pyjamas.gmaps.Base']
*/
