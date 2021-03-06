/* start module: TestGChart02 */
$pyjs['loaded_modules']['TestGChart02'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['TestGChart02']['__was_initialized__']) return $pyjs['loaded_modules']['TestGChart02'];
	var $m = $pyjs['loaded_modules']['TestGChart02'];
	$m['__repr__'] = function() { return '<module: TestGChart02>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TestGChart02';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_400 = new $p['int'](400);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_7 = new $p['int'](7);
		$m['GChartTestAppUtil'] = $p['___import___']('GChartTestAppUtil', null);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
		$m['symbolTypes'] = $p['list']([$p['getattr']($m['SymbolType'], 'BOX_CENTER'), $p['getattr']($m['SymbolType'], 'BOX_EAST'), $p['getattr']($m['SymbolType'], 'BOX_NORTH'), $p['getattr']($m['SymbolType'], 'BOX_NORTHEAST'), $p['getattr']($m['SymbolType'], 'BOX_NORTHWEST'), $p['getattr']($m['SymbolType'], 'BOX_SOUTH'), $p['getattr']($m['SymbolType'], 'BOX_SOUTHEAST'), $p['getattr']($m['SymbolType'], 'BOX_SOUTHWEST'), $p['getattr']($m['SymbolType'], 'BOX_WEST'), $p['getattr']($m['SymbolType'], 'HBAR_EAST'), $p['getattr']($m['SymbolType'], 'HBAR_NORTHEAST'), $p['getattr']($m['SymbolType'], 'HBAR_NORTHWEST'), $p['getattr']($m['SymbolType'], 'HBAR_SOUTHEAST'), $p['getattr']($m['SymbolType'], 'BOX_SOUTHWEST'), $p['getattr']($m['SymbolType'], 'HBAR_WEST'), $p['getattr']($m['SymbolType'], 'HBAR_NEXT'), $p['getattr']($m['SymbolType'], 'HBAR_PREV'), $p['getattr']($m['SymbolType'], 'NONE'), $p['getattr']($m['SymbolType'], 'VBAR_NORTH'), $p['getattr']($m['SymbolType'], 'VBAR_NORTHEAST'), $p['getattr']($m['SymbolType'], 'VBAR_NORTHWEST'), $p['getattr']($m['SymbolType'], 'VBAR_SOUTH'), $p['getattr']($m['SymbolType'], 'VBAR_SOUTHEAST'), $p['getattr']($m['SymbolType'], 'VBAR_SOUTHWEST'), $p['getattr']($m['SymbolType'], 'VBAR_NEXT'), $p['getattr']($m['SymbolType'], 'VBAR_PREV'), $p['getattr']($m['SymbolType'], 'XGRIDLINE'), $p['getattr']($m['SymbolType'], 'Y2GRIDLINE'), $p['getattr']($m['SymbolType'], 'YGRIDLINE')]);
		$m['symbolNames'] = $p['list'](['BOX_CENTER', 'BOX_EAST', 'BOX_NORTH', 'BOX_NORTHEAST', 'BOX_NORTHWEST', 'BOX_SOUTH', 'BOX_SOUTHEAST', 'BOX_SOUTHWEST', 'BOX_WEST', 'HBAR_EAST', 'HBAR_NORTHEAST', 'HBAR_NORTHWEST', 'HBAR_SOUTHEAST', 'BOX_SOUTHWEST', 'HBAR_WEST', 'HBAR_NEXT', 'HBAR_PREV', 'NONE', 'VBAR_NORTH', 'VBAR_NORTHEAST', 'VBAR_NORTHWEST', 'VBAR_SOUTH', 'VBAR_SOUTHEAST', 'VBAR_SOUTHWEST', 'VBAR_NEXT', 'VBAR_PREV', 'XGRIDLINE', 'Y2GRIDLINE', 'YGRIDLINE']);
		$m['TestGChart02'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'TestGChart02';
			$cls_definition['__md5__'] = 'c732ece6934924ec2bbc79de00d11e5e';
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
					if (self.prototype['__md5__'] !== 'c732ece6934924ec2bbc79de00d11e5e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,$len3,$iter1_iter,$len2,$iter1_array,$len1,$4,$1,$2,$3,$iter1_idx;
				$pyjs_kwargs_call($m['GChart'], '__init__', null, null, [{'XChartSize':$constant_int_400, 'YChartSize':$constant_int_400}, self]);
				self['setChartTitle']($m['GChartTestAppUtil']['getTitle'](self));
				self['setChartFootnotes']('Check: Rendering consistent with SymbolType on legend.');
				$iter1_iter = $p['range']((($len1=$m['symbolTypes']) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))));
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['addCurve']();
					self['getCurve'](i)['addPoint'](i, i);
					self['getCurve'](i)['getSymbol']()['setSymbolType']((typeof ($1=$m['symbolTypes'])['__array'] != 'undefined'?
						((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](i)));
					self['getCurve'](i)['getSymbol']()['setHeight']($constant_int_7);
					self['getCurve'](i)['getSymbol']()['setWidth']($constant_int_7);
					self['getCurve'](i)['setLegendLabel']($p['sprintf']('%d %s ', $p['tuple']([i, (typeof ($3=$m['symbolNames'])['__array'] != 'undefined'?
						((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](i))])));
				}
				self['setLegendFontSize']($constant_int_8);
				self['getXAxis']()['setTickLabelFontSize']($constant_int_8);
				self['getXAxis']()['setHasGridlines'](true);
				self['getXAxis']()['setTickCount']((($len2=$m['symbolTypes']) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))));
				self['getYAxis']()['setTickLabelFontSize']($constant_int_8);
				self['getYAxis']()['setHasGridlines'](true);
				self['getYAxis']()['setTickCount']((($len3=$m['symbolTypes']) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TestGChart02', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TestGChart02 */


/* end module: TestGChart02 */


/*
PYJS_DEPS: ['GChartTestAppUtil', 'pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.SymbolType']
*/
