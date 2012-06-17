/* start module: pyjamas.chart.TickLocation */
$pyjs.loaded_modules['pyjamas.chart.TickLocation'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.TickLocation'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.TickLocation'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.TickLocation"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.TickLocation>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.TickLocation';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['TickLocation'] = $pyjs.loaded_modules['pyjamas.chart.TickLocation'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.chart', null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.chart', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.chart', null, false);
		$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.chart', null, false);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.chart', null, false);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', 'pyjamas.chart', null, false);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.chart', null, false);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.chart', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.chart', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.chart', null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.chart', null, false);
		$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.chart', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.chart', null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', 'pyjamas.chart', null, false);
		$m['TickLocation'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.chart.TickLocation';
			$cls_definition.__md5__ = '11b7138dd198996425b1b7cdea7da846';
			$method = $pyjs__bind_method2('__init__', function(locationIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					locationIndex = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11b7138dd198996425b1b7cdea7da846') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('locationIndex', locationIndex) : $p['setattr'](self, 'locationIndex', locationIndex); 
				return null;
			}
	, 1, [null,null,['self'],['locationIndex']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getXAxisSymbolType', function(axisPosition) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					axisPosition = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11b7138dd198996425b1b7cdea7da846') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1,result,symbolMap,$2,$mul2,$mul1,$1;
				symbolMap = $p['list']([$p['getattr']($m['SymbolType'], 'BOX_NORTH'), $p['getattr']($m['SymbolType'], 'BOX_CENTER'), $p['getattr']($m['SymbolType'], 'BOX_SOUTH')]);
				result = (typeof ($1=symbolMap).__array != 'undefined'?
					((typeof $1.__array[$2=(typeof ($add1=(typeof ($mul1=axisPosition)==typeof ($mul2=$p['getattr'](self, 'locationIndex')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__((typeof ($add1=(typeof ($mul1=axisPosition)==typeof ($mul2=$p['getattr'](self, 'locationIndex')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))));
				return result;
			}
	, 1, [null,null,['self'],['axisPosition']]);
			$cls_definition['getXAxisSymbolType'] = $method;
			$method = $pyjs__bind_method2('getYAxisSymbolType', function(axisPosition) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					axisPosition = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '11b7138dd198996425b1b7cdea7da846') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,result,$add4,symbolMap,$4,$mul4,$mul3,$3;
				symbolMap = $p['list']([$p['getattr']($m['SymbolType'], 'BOX_EAST'), $p['getattr']($m['SymbolType'], 'BOX_CENTER'), $p['getattr']($m['SymbolType'], 'BOX_WEST')]);
				result = (typeof ($3=symbolMap).__array != 'undefined'?
					((typeof $3.__array[$4=(typeof ($add3=(typeof ($mul3=axisPosition)==typeof ($mul4=$p['getattr'](self, 'locationIndex')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__((typeof ($add3=(typeof ($mul3=axisPosition)==typeof ($mul4=$p['getattr'](self, 'locationIndex')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))));
				return result;
			}
	, 1, [null,null,['self'],['axisPosition']]);
			$cls_definition['getYAxisSymbolType'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TickLocation', $p['tuple']($bases), $data);
		})();
		$m['OUTSIDE'] = $m['TickLocation']((typeof ($usub1=$constant_int_1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)));
		$m['CENTERED'] = $m['TickLocation']($constant_int_0);
		$m['INSIDE'] = $m['TickLocation']($constant_int_1);
		$m['DEFAULT_TICK_LOCATION'] = $m['OUTSIDE'];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.TickLocation */


/* end module: pyjamas.chart.TickLocation */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui.UIObject', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.chart.SymbolType', 'pyjamas.chart']
*/
