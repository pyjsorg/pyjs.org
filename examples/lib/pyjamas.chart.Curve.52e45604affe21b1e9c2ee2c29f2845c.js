/* start module: pyjamas.chart.Curve */
$pyjs['loaded_modules']['pyjamas.chart.Curve'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.chart.Curve']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.chart.Curve'];
	if(typeof $pyjs['loaded_modules']['pyjamas.chart'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.chart']['__was_initialized__']) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs['loaded_modules']['pyjamas.chart.Curve'];
	$m['__repr__'] = function() { return '<module: pyjamas.chart.Curve>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.Curve';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.chart']['Curve'] = $pyjs['loaded_modules']['pyjamas.chart.Curve'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_0 = new $p['int'](0);
		$m['math'] = $p['___import___']('math', 'pyjamas.chart');
		$m['Double'] = $p['___import___']('pyjamas.chart.Double', 'pyjamas.chart', null, false);
		$m['Point'] = $p['___import___']('pyjamas.chart.Point.Point', 'pyjamas.chart', null, false);
		$m['Symbol'] = $p['___import___']('pyjamas.chart.Symbol.Symbol', 'pyjamas.chart', null, false);
		$m['Y_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart', null, false);
		$m['Y2_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2_AXIS', 'pyjamas.chart', null, false);
		$m['N_PRE_SYSTEM_CURVES'] = $p['___import___']('pyjamas.chart.GChartConsts.N_PRE_SYSTEM_CURVES', 'pyjamas.chart', null, false);
		$m['NAI'] = $p['___import___']('pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart', null, false);
		$m['GChartWidgets'] = $p['___import___']('pyjamas.chart.GChartWidgets', 'pyjamas.chart', null, false);
		$m['EXTRA_BANDS'] = $constant_int_2;
		$m['Curve'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.chart.Curve';
			$cls_definition['__md5__'] = '051aa1602faa594547d443b9b642d040';
			$method = $pyjs__bind_method2('isValidated', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'validated');
			}
	, 1, [null,null,['self']]);
			$cls_definition['isValidated'] = $method;
			$method = $pyjs__bind_method2('incrementIndex', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('indexOf', (typeof ($add1=$p['getattr'](self, 'indexOf'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) : $p['setattr'](self, 'indexOf', (typeof ($add1=$p['getattr'](self, 'indexOf'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['incrementIndex'] = $method;
			$method = $pyjs__bind_method2('decrementIndex', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub2,$sub1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('indexOf', (typeof ($sub1=$p['getattr'](self, 'indexOf'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 'indexOf', (typeof ($sub1=$p['getattr'](self, 'indexOf'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['decrementIndex'] = $method;
			$method = $pyjs__bind_method2('clearIndex', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('indexOf', $m['NAI']) : $p['setattr'](self, 'indexOf', $m['NAI']); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearIndex'] = $method;
			$method = $pyjs__bind_method2('getIndexOf', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'indexOf');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getIndexOf'] = $method;
			$method = $pyjs__bind_method2('__init__', function(chart, indexOf) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					chart = arguments[1];
					indexOf = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof indexOf == 'undefined') indexOf=arguments['callee']['__args__'][4][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chart', chart) : $p['setattr'](self, 'chart', chart); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wasCanvasRendered', false) : $p['setattr'](self, 'wasCanvasRendered', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('visible', true) : $p['setattr'](self, 'visible', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('legendHTML', null) : $p['setattr'](self, 'legendHTML', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('points', $p['list']([])) : $p['setattr'](self, 'points', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('symbol', $m['Symbol'](self)) : $p['setattr'](self, 'symbol', $m['Symbol'](self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yAxisId', $m['Y_AXIS']) : $p['setattr'](self, 'yAxisId', $m['Y_AXIS']); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('validated', false) : $p['setattr'](self, 'validated', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('indexOf', indexOf) : $p['setattr'](self, 'indexOf', indexOf); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bandList', null) : $p['setattr'](self, 'bandList', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bandThickness', $p['getattr']($m['Double'], 'NaN')) : $p['setattr'](self, 'bandThickness', $p['getattr']($m['Double'], 'NaN')); 
				return null;
			}
	, 1, [null,null,['self'],['chart'],['indexOf', $m['NAI']]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addPoint', function(arg1, arg2, arg3) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					arg1 = arguments[1];
					arg2 = arguments[2];
					arg3 = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof arg3 == 'undefined') arg3=arguments['callee']['__args__'][5][1];
				var iPoint,$bool1,y,x;
				self['invalidate']();
				if ((($bool1=$p['op_is'](arg3, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					x = arg1;
					y = arg2;
					self['points']['append']($m['Point'](self, x, y));
				}
				else {
					iPoint = arg1;
					x = arg2;
					y = arg3;
					self['points']['insert'](iPoint, $m['Point'](self, x, y));
				}
				return null;
			}
	, 1, [null,null,['self'],['arg1'],['arg2'],['arg3', null]]);
			$cls_definition['addPoint'] = $method;
			$method = $pyjs__bind_method2('clearPoints', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2;
				if ((($bool2=$p['op_eq'](self, self['getParent']()['getTouchedCurve']())) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['chart']['plotPanel']['touch'](null);
				}
				self['invalidate']();
				$p['delattr'](self, 'points');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('points', $p['list']([])) : $p['setattr'](self, 'points', $p['list']([])); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearPoints'] = $method;
			$method = $pyjs__bind_method2('getBand', function(iPoint, bandThickness) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					iPoint = arguments[1];
					bandThickness = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var symType,result,$mul4,$len4,$sub9,$sub8,$div4,$sub3,$add6,$sub7,$sub6,$sub5,$sub4,yPx,$sub10,$bool3,xPx,$bool6,$bool7,$bool4,$bool5,$div2,$div3,$bool8,$div1,$mul3,$mul2,$mul1,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$cmp8,$add3,$bool9,$add5,$len2,$len3,$add4,$len1;
				result = $m['NAI'];
				symType = self['getSymbol']()['getSymbolType']();
				xPx = symType['getCenterX']($p['getattr']($p['getattr'](self, 'chart'), 'plotPanel'), self['getSymbol'](), iPoint);
				if ((($bool3=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), xPx)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return result;
				}
				yPx = symType['getCenterY']($p['getattr']($p['getattr'](self, 'chart'), 'plotPanel'), self['getSymbol'](), iPoint, self['onY2']());
				if ((($bool4=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), yPx)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					return result;
				}
				if ((($bool5=self['getSymbol']()['isHorizontallyBanded']()) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					if ((($bool6=((($cmp1=yPx)===($cmp2=$constant_int_0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
							false :
							(typeof $bool6=='object'?
								(typeof $bool6['__nonzero__']=='function'?
									$bool6['__nonzero__']() :
									(typeof $bool6['__len__']=='function'?
										($bool6['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result = $constant_int_0;
					}
					else if ((($bool7=((((($cmp3=yPx)===($cmp4=(typeof ($mul1=(typeof ($sub3=(($len1=$p['getattr'](self, 'bandList')) === null?$constant_int_0:
						(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
									$p['len']($len1))))))==typeof ($sub4=$m['EXTRA_BANDS']) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)))==typeof ($mul2=bandThickness) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)))?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7['__nonzero__']=='function'?
									$bool7['__nonzero__']() :
									(typeof $bool7['__len__']=='function'?
										($bool7['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result = (typeof ($sub5=(($len2=$p['getattr'](self, 'bandList')) === null?$constant_int_0:
							(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
								(typeof $len2['__len__'] == 'function'?$len2['__len__']():
									(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
										$p['len']($len2))))))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
							$sub5-$sub6:
							$p['op_sub']($sub5,$sub6));
					}
					else {
						result = (typeof ($add3=$constant_int_1)==typeof ($add4=$p['int']($m['math']['floor']((typeof ($div1=yPx)==typeof ($div2=bandThickness) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2))))) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
				}
				else {
					if ((($bool8=((($cmp5=xPx)===($cmp6=$constant_int_0)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
							false :
							(typeof $bool8=='object'?
								(typeof $bool8['__nonzero__']=='function'?
									$bool8['__nonzero__']() :
									(typeof $bool8['__len__']=='function'?
										($bool8['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result = $constant_int_0;
					}
					else if ((($bool9=((((($cmp7=xPx)===($cmp8=(typeof ($mul3=(typeof ($sub7=(($len3=$p['getattr'](self, 'bandList')) === null?$constant_int_0:
						(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
							(typeof $len3['__len__'] == 'function'?$len3['__len__']():
								(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
									$p['len']($len3))))))==typeof ($sub8=$m['EXTRA_BANDS']) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)))==typeof ($mul4=bandThickness) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)))?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9['__nonzero__']=='function'?
									$bool9['__nonzero__']() :
									(typeof $bool9['__len__']=='function'?
										($bool9['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result = (typeof ($sub9=(($len4=$p['getattr'](self, 'bandList')) === null?$constant_int_0:
							(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
								(typeof $len4['__len__'] == 'function'?$len4['__len__']():
									(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
										$p['len']($len4))))))==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$p['op_sub']($sub9,$sub10));
					}
					else {
						result = (typeof ($add5=$constant_int_1)==typeof ($add6=$p['int']($m['math']['floor']((typeof ($div3=xPx)==typeof ($div4=bandThickness) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4))))) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
					}
				}
				return result;
			}
	, 1, [null,null,['self'],['iPoint'],['bandThickness']]);
			$cls_definition['getBand'] = $method;
			$method = $pyjs__bind_method2('getNBands', function(bandThickness) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bandThickness = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,$div8,$add10,result,$add7,$add8,$add9,$div6,$div7,$div5;
				result = $m['EXTRA_BANDS'];
				if ((($bool10=self['getSymbol']()['isHorizontallyBanded']()) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = (typeof ($add7=result)==typeof ($add8=$p['int']($m['math']['ceil']((typeof ($div5=self['chart']['getYChartSize']())==typeof ($div6=bandThickness) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				else {
					result = (typeof ($add9=result)==typeof ($add10=$p['int']($m['math']['ceil']((typeof ($div7=self['chart']['getXChartSize']())==typeof ($div8=bandThickness) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8))))) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				return result;
			}
	, 1, [null,null,['self'],['bandThickness']]);
			$cls_definition['getNBands'] = $method;
			$method = $pyjs__bind_method2('clearBandList', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bandList', null) : $p['setattr'](self, 'bandList', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearBandList'] = $method;
			$method = $pyjs__bind_method2('bandSeparatePoints', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$bool11,$bool12,$iter3_type,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,iPoint,iBand,$iter3_iter,$iter1_array,$bool13,$or1,$or2,$iter2_idx,$iter3_array,$2,$1,$iter2_nextval,$iter1_type,i,p,$len5,nBands,$iter1_idx,$iter3_nextval,$iter2_array;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bandThickness', self['getSymbol']()['getSymbolType']()['getBandThickness']($p['getattr']($p['getattr'](self, 'chart'), 'plotPanel'), self['getSymbol'](), self['onY2']())) : $p['setattr'](self, 'bandThickness', self['getSymbol']()['getSymbolType']()['getBandThickness']($p['getattr']($p['getattr'](self, 'chart'), 'plotPanel'), self['getSymbol'](), self['onY2']())); 
				nBands = self['getNBands']($p['getattr'](self, 'bandThickness'));
				if ((($bool12=((($bool11=$or1=$p['op_is']($p['getattr'](self, 'bandList'), null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11['__nonzero__']=='function'?
							$bool11['__nonzero__']() :
							(typeof $bool11['__len__']=='function'?
								($bool11['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:!$p['op_eq']((($len5=$p['getattr'](self, 'bandList')) === null?$constant_int_0:
					(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
								$p['len']($len5))))), nBands))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12['__nonzero__']=='function'?
								$bool12['__nonzero__']() :
								(typeof $bool12['__len__']=='function'?
									($bool12['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bandList', $p['list']([])) : $p['setattr'](self, 'bandList', $p['list']([])); 
					$iter1_iter = $p['range'](nBands);
					if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter['__iter__']();
						$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						i = $iter1_nextval;
						self['bandList']['append']($m['NAI']);
					}
				}
				$iter2_iter = $p['range'](nBands);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$p['getattr'](self, 'bandList')['__setitem__'](i, $m['NAI']);
				}
				$iter3_iter = $p['range'](self['getNPoints']());
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					iPoint = $iter3_nextval;
					iBand = self['getBand'](iPoint, $p['getattr'](self, 'bandThickness'));
					p = self['getPoint'](iPoint);
					if ((($bool13=$p['op_eq']($m['NAI'], iBand)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
							false :
							(typeof $bool13=='object'?
								(typeof $bool13['__nonzero__']=='function'?
									$bool13['__nonzero__']() :
									(typeof $bool13['__len__']=='function'?
										($bool13['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						p['setINextInBand'](iPoint);
					}
					else {
						p['setINextInBand']((typeof ($1=$p['getattr'](self, 'bandList'))['__array'] != 'undefined'?
							((typeof $1['__array'][$2=iBand]) != 'undefined'?$1['__array'][$2]:
								$1['__getitem__']($2)):
								$1['__getitem__'](iBand)));
						$p['getattr'](self, 'bandList')['__setitem__'](iBand, iPoint);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['bandSeparatePoints'] = $method;
			$method = $pyjs__bind_method2('getClosestTouchingPoint', function(xBrush, yBrush) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					xBrush = arguments[1];
					yBrush = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$bool18,$sub20,$sub21,$sub26,$sub24,$bool19,top,$bool14,$bool15,$bool16,$bool17,$iter4_type,$mul5,$sub25,yPoint,$bool21,$and1,$and2,dx,dy,$add72,d,$add70,$add71,$iter4_nextval,p,right,result,$add65,$add64,$add67,$add66,$add61,$add60,$add63,bottom,$add69,$add68,$sub23,$bool20,$bool22,$sub19,$sub18,$sub13,$sub12,$sub11,dBest,$sub17,$sub16,$sub15,$sub14,$div21,$div20,$div23,$div22,$add54,$div24,$add56,$add57,$add58,$add59,$add47,$add17,$cmp16,$add46,$add45,iBandLast,$cmp10,$add44,$cmp13,$add43,$add13,iBandFirst,$add42,symType,$add40,$iter4_iter,$mul10,$div18,$div19,$add49,$add48,$div14,$div15,$div16,$div17,$div10,$div11,$div12,$div13,$add50,$add51,$add52,brushWidth,brushHeight,$add53,$cmp15,$mul9,$mul8,$mul7,$mul6,$4,$3,$add55,$add38,$add39,$mul11,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$len6,$cmp14,$add41,nBands,$iter4_array,$add62,$add29,$add28,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,iBand,xPoint,brushLocation,$or4,$or3,$mul12,$add14,$add15,$add16,$div9,$cmp11,$add11,$add12,$cmp12,$add18,$add19,iPoint,$cmp9,$iter4_idx,left;
				result = $m['NAI'];
				if ((($bool14=$p['op_eq'](null, $p['getattr'](self, 'bandList'))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return result;
				}
				symType = self['getSymbol']()['getSymbolType']();
				dBest = $p['getattr']($m['Double'], 'MAX_VALUE');
				brushWidth = symType['getBrushWidth'](self['getSymbol']());
				brushHeight = (typeof ($add11=symType['getBrushHeight'](self['getSymbol']()))==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
				brushLocation = symType['getBrushLocation'](self['getSymbol']());
				nBands = (($len6=$p['getattr'](self, 'bandList')) === null?$constant_int_0:
					(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
						(typeof $len6['__len__'] == 'function'?$len6['__len__']():
							(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
								$p['len']($len6)))));
				if ((($bool15=self['getSymbol']()['isHorizontallyBanded']()) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15['__nonzero__']=='function'?
								$bool15['__nonzero__']() :
								(typeof $bool15['__len__']=='function'?
									($bool15['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					top = brushLocation['getUpperLeftY'](yBrush, brushHeight, $constant_int_0);
					bottom = (typeof ($add13=top)==typeof ($add14=brushHeight) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
					top = (typeof ($sub11=top)==typeof ($sub12=(typeof ($div9=$p['getattr'](self, 'bandThickness'))==typeof ($div10=2.0) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10))) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12));
					bottom = (typeof ($add15=bottom)==typeof ($add16=(typeof ($div11=$p['getattr'](self, 'bandThickness'))==typeof ($div12=2.0) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12))) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16));
					iBandFirst = $p['int']($p['max']($constant_int_0, $p['min']((typeof ($sub13=nBands)==typeof ($sub14=$constant_int_1) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14)), (typeof ($add17=$constant_int_1)==typeof ($add18=$m['math']['floor']((typeof ($div13=top)==typeof ($div14=$p['getattr'](self, 'bandThickness')) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14)))) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18)))));
					iBandLast = $p['int']($p['max']($constant_int_0, $p['min']((typeof ($sub15=nBands)==typeof ($sub16=$constant_int_1) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16)), (typeof ($add19=$constant_int_1)==typeof ($add20=$m['math']['floor']((typeof ($div15=bottom)==typeof ($div16=$p['getattr'](self, 'bandThickness')) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16)))) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)))));
				}
				else {
					left = brushLocation['getUpperLeftX'](xBrush, brushWidth, $constant_int_0);
					right = (typeof ($add21=left)==typeof ($add22=brushWidth) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22));
					left = (typeof ($sub17=left)==typeof ($sub18=(typeof ($div17=$p['getattr'](self, 'bandThickness'))==typeof ($div18=2.0) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18))) && (typeof $sub17=='number'||typeof $sub17=='string')?
						$sub17-$sub18:
						$p['op_sub']($sub17,$sub18));
					right = (typeof ($add23=right)==typeof ($add24=(typeof ($div19=$p['getattr'](self, 'bandThickness'))==typeof ($div20=2.0) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20))) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
					iBandFirst = $p['int']($p['max']($constant_int_0, $p['min']((typeof ($sub19=nBands)==typeof ($sub20=$constant_int_1) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20)), (typeof ($add25=$constant_int_1)==typeof ($add26=$m['math']['floor']((typeof ($div21=left)==typeof ($div22=$p['getattr'](self, 'bandThickness')) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22)))) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26)))));
					iBandLast = $p['int']($p['max']($constant_int_0, $p['min']((typeof ($sub21=nBands)==typeof ($sub22=$constant_int_1) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22)), (typeof ($add27=$constant_int_1)==typeof ($add28=$m['math']['floor']((typeof ($div23=right)==typeof ($div24=$p['getattr'](self, 'bandThickness')) && typeof $div23=='number' && $div24 !== 0?
						$div23/$div24:
						$p['op_div']($div23,$div24)))) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))));
				}
				$iter4_iter = $p['range'](iBandFirst, (typeof ($add29=iBandLast)==typeof ($add30=$constant_int_1) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)));
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					iBand = $iter4_nextval;
					p = null;
					iPoint = (typeof ($3=$p['getattr'](self, 'bandList'))['__array'] != 'undefined'?
						((typeof $3['__array'][$4=iBand]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](iBand));
					while ((($bool16=!$p['op_eq'](iPoint, $m['NAI'])) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
							false :
							(typeof $bool16=='object'?
								(typeof $bool16['__nonzero__']=='function'?
									$bool16['__nonzero__']() :
									(typeof $bool16['__len__']=='function'?
										($bool16['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool18=((($bool17=$or3=((($cmp9=iPoint)===($cmp10=$constant_int_0)?0:
							(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
								($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
								$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
							false :
							(typeof $bool17=='object'?
								(typeof $bool17['__nonzero__']=='function'?
									$bool17['__nonzero__']() :
									(typeof $bool17['__len__']=='function'?
										($bool17['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or3:((((($cmp11=iPoint)===($cmp12=self['getNPoints']())?0:
							(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
								($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
								$p['cmp']($cmp11, $cmp12))))|1) == 1))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
								false :
								(typeof $bool18=='object'?
									(typeof $bool18['__nonzero__']=='function'?
										$bool18['__nonzero__']() :
										(typeof $bool18['__len__']=='function'?
											($bool18['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							throw ((typeof IllegalStateException == "undefined"?$m['IllegalStateException']:IllegalStateException)((typeof ($add69=(typeof ($add67=(typeof ($add65=(typeof ($add63=(typeof ($add61=(typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53=(typeof ($add51=(typeof ($add49=(typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41=(typeof ($add39=(typeof ($add37=(typeof ($add35=(typeof ($add33=(typeof ($add31='Inappropriately terminated band-point-list, GChart bug likely. ')==typeof ($add32='iPoint=') && (typeof $add31=='number'||typeof $add31=='string')?
								$add31+$add32:
								$p['op_add']($add31,$add32)))==typeof ($add34=iPoint) && (typeof $add33=='number'||typeof $add33=='string')?
								$add33+$add34:
								$p['op_add']($add33,$add34)))==typeof ($add36=' nPoints=') && (typeof $add35=='number'||typeof $add35=='string')?
								$add35+$add36:
								$p['op_add']($add35,$add36)))==typeof ($add38=self['getNPoints']()) && (typeof $add37=='number'||typeof $add37=='string')?
								$add37+$add38:
								$p['op_add']($add37,$add38)))==typeof ($add40=' iBand=') && (typeof $add39=='number'||typeof $add39=='string')?
								$add39+$add40:
								$p['op_add']($add39,$add40)))==typeof ($add42=iBand) && (typeof $add41=='number'||typeof $add41=='string')?
								$add41+$add42:
								$p['op_add']($add41,$add42)))==typeof ($add44=' iBandFirst=') && (typeof $add43=='number'||typeof $add43=='string')?
								$add43+$add44:
								$p['op_add']($add43,$add44)))==typeof ($add46=iBandFirst) && (typeof $add45=='number'||typeof $add45=='string')?
								$add45+$add46:
								$p['op_add']($add45,$add46)))==typeof ($add48=' iBandLast=') && (typeof $add47=='number'||typeof $add47=='string')?
								$add47+$add48:
								$p['op_add']($add47,$add48)))==typeof ($add50=iBandLast) && (typeof $add49=='number'||typeof $add49=='string')?
								$add49+$add50:
								$p['op_add']($add49,$add50)))==typeof ($add52=' xBrush=') && (typeof $add51=='number'||typeof $add51=='string')?
								$add51+$add52:
								$p['op_add']($add51,$add52)))==typeof ($add54=xBrush) && (typeof $add53=='number'||typeof $add53=='string')?
								$add53+$add54:
								$p['op_add']($add53,$add54)))==typeof ($add56=' yBrush=') && (typeof $add55=='number'||typeof $add55=='string')?
								$add55+$add56:
								$p['op_add']($add55,$add56)))==typeof ($add58=yBrush) && (typeof $add57=='number'||typeof $add57=='string')?
								$add57+$add58:
								$p['op_add']($add57,$add58)))==typeof ($add60=' brushWidth=') && (typeof $add59=='number'||typeof $add59=='string')?
								$add59+$add60:
								$p['op_add']($add59,$add60)))==typeof ($add62=brushWidth) && (typeof $add61=='number'||typeof $add61=='string')?
								$add61+$add62:
								$p['op_add']($add61,$add62)))==typeof ($add64=' brushHeight=') && (typeof $add63=='number'||typeof $add63=='string')?
								$add63+$add64:
								$p['op_add']($add63,$add64)))==typeof ($add66=brushHeight) && (typeof $add65=='number'||typeof $add65=='string')?
								$add65+$add66:
								$p['op_add']($add65,$add66)))==typeof ($add68=' bandThickness=') && (typeof $add67=='number'||typeof $add67=='string')?
								$add67+$add68:
								$p['op_add']($add67,$add68)))==typeof ($add70=$p['getattr'](self, 'bandThickness')) && (typeof $add69=='number'||typeof $add69=='string')?
								$add69+$add70:
								$p['op_add']($add69,$add70))));
						}
						p = self['getPoint'](iPoint);
						if ((($bool19=symType['isIntersecting']($p['getattr']($p['getattr'](self, 'chart'), 'plotPanel'), self['getSymbol'](), iPoint, self['onY2'](), xBrush, yBrush, brushWidth, brushHeight)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
								false :
								(typeof $bool19=='object'?
									(typeof $bool19['__nonzero__']=='function'?
										$bool19['__nonzero__']() :
										(typeof $bool19['__len__']=='function'?
											($bool19['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							xPoint = symType['getCenterX']($p['getattr']($p['getattr'](self, 'chart'), 'plotPanel'), self['getSymbol'](), iPoint);
							yPoint = symType['getCenterY']($p['getattr']($p['getattr'](self, 'chart'), 'plotPanel'), self['getSymbol'](), iPoint, self['onY2']());
							dx = (typeof ($mul5=$p['getattr'](self['getSymbol'](), 'xScaleFactor'))==typeof ($mul6=(typeof ($sub23=xPoint)==typeof ($sub24=xBrush) && (typeof $sub23=='number'||typeof $sub23=='string')?
								$sub23-$sub24:
								$p['op_sub']($sub23,$sub24))) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6));
							dy = (typeof ($mul7=$p['getattr'](self['getSymbol'](), 'yScaleFactor'))==typeof ($mul8=(typeof ($sub25=yPoint)==typeof ($sub26=yBrush) && (typeof $sub25=='number'||typeof $sub25=='string')?
								$sub25-$sub26:
								$p['op_sub']($sub25,$sub26))) && typeof $mul7=='number'?
								$mul7*$mul8:
								$p['op_mul']($mul7,$mul8));
							d = (typeof ($add71=(typeof ($mul9=dx)==typeof ($mul10=dx) && typeof $mul9=='number'?
								$mul9*$mul10:
								$p['op_mul']($mul9,$mul10)))==typeof ($add72=(typeof ($mul11=dy)==typeof ($mul12=dy) && typeof $mul11=='number'?
								$mul11*$mul12:
								$p['op_mul']($mul11,$mul12))) && (typeof $add71=='number'||typeof $add71=='string')?
								$add71+$add72:
								$p['op_add']($add71,$add72));
							if ((($bool20=((($cmp13=d)===($cmp14=dBest)?0:
								(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
									($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
									$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
									false :
									(typeof $bool20=='object'?
										(typeof $bool20['__nonzero__']=='function'?
											$bool20['__nonzero__']() :
											(typeof $bool20['__len__']=='function'?
												($bool20['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								result = iPoint;
								dBest = d;
							}
							else if ((($bool22=((($bool21=$and1=$p['op_eq'](d, dBest)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
								false :
								(typeof $bool21=='object'?
									(typeof $bool21['__nonzero__']=='function'?
										$bool21['__nonzero__']() :
										(typeof $bool21['__len__']=='function'?
											($bool21['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($cmp15=iPoint)===($cmp16=result)?0:
								(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
									($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
									$p['cmp']($cmp15, $cmp16))) == 1):$and1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
									false :
									(typeof $bool22=='object'?
										(typeof $bool22['__nonzero__']=='function'?
											$bool22['__nonzero__']() :
											(typeof $bool22['__len__']=='function'?
												($bool22['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								result = iPoint;
								dBest = d;
							}
						}
						iPoint = p['getINextInBand']();
					}
				}
				return result;
			}
	, 1, [null,null,['self'],['xBrush'],['yBrush']]);
			$cls_definition['getClosestTouchingPoint'] = $method;
			$method = $pyjs__bind_method2('getHovertextTemplate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['symbol']['getHovertextTemplate']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHovertextTemplate'] = $method;
			$method = $pyjs__bind_method2('getLegendLabel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'legendHTML');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLegendLabel'] = $method;
			$method = $pyjs__bind_method2('getNPoints', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len7;
				return (($len7=$p['getattr'](self, 'points')) === null?$constant_int_0:
					(typeof $len7['__array'] != 'undefined' ? new $p['int']($len7['__array']['length']):
						(typeof $len7['__len__'] == 'function'?$len7['__len__']():
							(typeof $len7['length'] != 'undefined'? new $p['int']($len7['length']):
								$p['len']($len7)))));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getNPoints'] = $method;
			$method = $pyjs__bind_method2('getParent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'chart');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getParent'] = $method;
			$method = $pyjs__bind_method2('getPoint', function(iPoint) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					iPoint = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof iPoint == 'undefined') iPoint=arguments['callee']['__args__'][3][1];
				var $sub27,$sub28,$cmp20,$bool25,$bool24,$bool23,$or5,$or6,$cmp17,$6,$5,$cmp19,$cmp18,$add76,$add77,$add74,$add75,$add73,$add78,$len8;
				if ((($bool23=$p['op_is'](iPoint, null)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					iPoint = (typeof ($sub27=self['getNPoints']())==typeof ($sub28=$constant_int_1) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28));
				}
				if ((($bool25=((($bool24=$or5=((($cmp17=iPoint)===($cmp18=$constant_int_0)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24['__nonzero__']=='function'?
							$bool24['__nonzero__']() :
							(typeof $bool24['__len__']=='function'?
								($bool24['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:((((($cmp19=iPoint)===($cmp20=(($len8=$p['getattr'](self, 'points')) === null?$constant_int_0:
					(typeof $len8['__array'] != 'undefined' ? new $p['int']($len8['__array']['length']):
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'? new $p['int']($len8['length']):
								$p['len']($len8))))))?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))))|1) == 1))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25['__nonzero__']=='function'?
								$bool25['__nonzero__']() :
								(typeof $bool25['__len__']=='function'?
									($bool25['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m['IllegalArgumentException']:IllegalArgumentException)((typeof ($add77=(typeof ($add75=(typeof ($add73='Point index iPoint=')==typeof ($add74=iPoint) && (typeof $add73=='number'||typeof $add73=='string')?
						$add73+$add74:
						$p['op_add']($add73,$add74)))==typeof ($add76='. ') && (typeof $add75=='number'||typeof $add75=='string')?
						$add75+$add76:
						$p['op_add']($add75,$add76)))==typeof ($add78='is either < 0 or >= the number of points on the curve.') && (typeof $add77=='number'||typeof $add77=='string')?
						$add77+$add78:
						$p['op_add']($add77,$add78))));
				}
				return (typeof ($5=$p['getattr'](self, 'points'))['__array'] != 'undefined'?
					((typeof $5['__array'][$6=iPoint]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](iPoint));
			}
	, 1, [null,null,['self'],['iPoint', null]]);
			$cls_definition['getPoint'] = $method;
			$method = $pyjs__bind_method2('getPointIndex', function(point) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					point = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				try {
					return self['points']['index'](point);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						return $m['NAI'];
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self'],['point']]);
			$cls_definition['getPointIndex'] = $method;
			$method = $pyjs__bind_method2('getSymbol', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'symbol');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSymbol'] = $method;
			$method = $pyjs__bind_method2('getYAxis', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'yAxisId');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getYAxis'] = $method;
			$method = $pyjs__bind_method2('isVisible', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'visible');
			}
	, 1, [null,null,['self']]);
			$cls_definition['isVisible'] = $method;
			$method = $pyjs__bind_method2('onY2', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['op_eq']($p['getattr'](self, 'yAxisId'), $m['Y2_AXIS']);
			}
	, 1, [null,null,['self']]);
			$cls_definition['onY2'] = $method;
			$method = $pyjs__bind_method2('removePointByIndex', function(iPoint) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					iPoint = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp23,$bool28,$or7,$add83,$add82,$add80,$add86,$or8,$add85,$add79,$cmp21,$cmp22,$bool26,$cmp24,$bool27,$add84,$add81;
				if ((($bool27=((($bool26=$or7=((($cmp21=iPoint)===($cmp22=$constant_int_0)?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26['__nonzero__']=='function'?
							$bool26['__nonzero__']() :
							(typeof $bool26['__len__']=='function'?
								($bool26['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or7:((((($cmp23=iPoint)===($cmp24=(typeof getNPoints == "undefined"?$m['getNPoints']:getNPoints)())?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))))|1) == 1))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m['IllegalArgumentException']:IllegalArgumentException)((typeof ($add85=(typeof ($add83=(typeof ($add81=(typeof ($add79='iPoint=')==typeof ($add80=iPoint) && (typeof $add79=='number'||typeof $add79=='string')?
						$add79+$add80:
						$p['op_add']($add79,$add80)))==typeof ($add82=' iPoint arg must be >= 0 and < ') && (typeof $add81=='number'||typeof $add81=='string')?
						$add81+$add82:
						$p['op_add']($add81,$add82)))==typeof ($add84=(typeof getNPoints == "undefined"?$m['getNPoints']:getNPoints)()) && (typeof $add83=='number'||typeof $add83=='string')?
						$add83+$add84:
						$p['op_add']($add83,$add84)))==typeof ($add86=', the number of points on the curve.') && (typeof $add85=='number'||typeof $add85=='string')?
						$add85+$add86:
						$p['op_add']($add85,$add86))));
				}
				self['invalidate']();
				if ((($bool28=$p['op_eq']($p['getattr']($p['getattr']($p['getattr'](self, 'chart'), 'plotPanel'), 'touchedPoint'), self['getPoint'](iPoint))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28['__nonzero__']=='function'?
								$bool28['__nonzero__']() :
								(typeof $bool28['__len__']=='function'?
									($bool28['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['chart']['plotPanel']['touch'](null);
				}
				self['points']['remove'](iPoint);
				return null;
			}
	, 1, [null,null,['self'],['iPoint']]);
			$cls_definition['removePointByIndex'] = $method;
			$method = $pyjs__bind_method2('removePoint', function(p) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					p = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$bool32,$bool30,$bool31,$bool29;
				if ((($bool30=!(($bool29=$p['isinstance'](p, $m['Point'])) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29['__nonzero__']=='function'?
							$bool29['__nonzero__']() :
							(typeof $bool29['__len__']=='function'?
								($bool29['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['removePointByIndex'](p);
					return null;
				}
				if ((($bool31=$p['op_eq'](null, p)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
						false :
						(typeof $bool31=='object'?
							(typeof $bool31['__nonzero__']=='function'?
								$bool31['__nonzero__']() :
								(typeof $bool31['__len__']=='function'?
									($bool31['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ((typeof IllegalArgumentException == "undefined"?$m['IllegalArgumentException']:IllegalArgumentException)('p cannot be None.'));
				}
				index = self['getPointIndex'](p);
				if ((($bool32=$p['op_eq']($m['NAI'], index)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['ValueError']($p['sprintf']('p must be a point on this curve (whose curveIndex is %d)', self['getParent']()['getCurveIndex'](self))));
				}
				self['removePoint'](index);
				return null;
			}
	, 1, [null,null,['self'],['p']]);
			$cls_definition['removePoint'] = $method;
			$method = $pyjs__bind_method2('setHovertextTemplate', function(hovertextTemplate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					hovertextTemplate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['symbol']['setHovertextTemplate'](hovertextTemplate);
				return null;
			}
	, 1, [null,null,['self'],['hovertextTemplate']]);
			$cls_definition['setHovertextTemplate'] = $method;
			$method = $pyjs__bind_method2('setLegendLabel', function(legendHTML) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					legendHTML = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('legendHTML', legendHTML) : $p['setattr'](self, 'legendHTML', legendHTML); 
				return null;
			}
	, 1, [null,null,['self'],['legendHTML']]);
			$cls_definition['setLegendLabel'] = $method;
			$method = $pyjs__bind_method2('setVisible', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or10,$and3,$bool33,$or9,yaxis,$and4,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$bool40,axisCreatedOrDestroyed;
				if ((($bool33=$p['op_eq'](self['getIndexOf'](), $m['NAI'])) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('visible', visible) : $p['setattr'](self, 'visible', visible); 
					return null;
				}
				self['invalidate']();
				if ((($bool34=self['isSystemCurve']()) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('visible', visible) : $p['setattr'](self, 'visible', visible); 
					return null;
				}
				if ((($bool35=!$p['op_eq']($p['getattr'](self, 'visible'), visible)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool36=$p['op_eq'](self['getYAxis'](), $m['Y_AXIS'])) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
							false :
							(typeof $bool36=='object'?
								(typeof $bool36['__nonzero__']=='function'?
									$bool36['__nonzero__']() :
									(typeof $bool36['__len__']=='function'?
										($bool36['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						yaxis = self['chart']['getYAxis']();
					}
					else {
						yaxis = self['chart']['getY2Axis']();
					}
					if ((($bool37=visible) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
							false :
							(typeof $bool37=='object'?
								(typeof $bool37['__nonzero__']=='function'?
									$bool37['__nonzero__']() :
									(typeof $bool37['__len__']=='function'?
										($bool37['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						axisCreatedOrDestroyed = $p['op_eq'](yaxis['getNCurvesVisibleOnAxis'](), $constant_int_0);
						self['chart']['getXAxis']()['incrementCurves']();
						yaxis['incrementCurves']();
					}
					else {
						self['chart']['getXAxis']()['decrementCurves']();
						yaxis['decrementCurves']();
						axisCreatedOrDestroyed = $p['op_eq'](yaxis['getNCurvesVisibleOnAxis'](), $constant_int_0);
					}
					if ((($bool40=((($bool39=$or9=((($bool38=$and3=!$p['op_eq'](null, self['getLegendLabel']())) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38['__nonzero__']=='function'?
								$bool38['__nonzero__']() :
								(typeof $bool38['__len__']=='function'?
									($bool38['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?self['isLegendVisible']():$and3)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39['__nonzero__']=='function'?
								$bool39['__nonzero__']() :
								(typeof $bool39['__len__']=='function'?
									($bool39['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or9:axisCreatedOrDestroyed)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
							false :
							(typeof $bool40=='object'?
								(typeof $bool40['__nonzero__']=='function'?
									$bool40['__nonzero__']() :
									(typeof $bool40['__len__']=='function'?
										($bool40['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('chartDecorationsChanged', true) : $p['setattr'](self, 'chartDecorationsChanged', true); 
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('visible', visible) : $p['setattr'](self, 'visible', visible); 
				}
				return null;
			}
	, 1, [null,null,['self'],['visible']]);
			$cls_definition['setVisible'] = $method;
			$method = $pyjs__bind_method2('setYAxis', function(axisId) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					axisId = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool43,$bool41,$bool42;
				self['invalidate']();
				if ((($bool41=self['isSystemCurve']()) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
						false :
						(typeof $bool41=='object'?
							(typeof $bool41['__nonzero__']=='function'?
								$bool41['__nonzero__']() :
								(typeof $bool41['__len__']=='function'?
									($bool41['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yAxisId', axisId) : $p['setattr'](self, 'yAxisId', axisId); 
				}
				else if ((($bool42=!$p['op_eq'](axisId, $p['getattr'](self, 'yAxisId'))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
						false :
						(typeof $bool42=='object'?
							(typeof $bool42['__nonzero__']=='function'?
								$bool42['__nonzero__']() :
								(typeof $bool42['__len__']=='function'?
									($bool42['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool43=$p['op_eq'](axisId, $m['Y2_AXIS'])) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
							false :
							(typeof $bool43=='object'?
								(typeof $bool43['__nonzero__']=='function'?
									$bool43['__nonzero__']() :
									(typeof $bool43['__len__']=='function'?
										($bool43['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['chart']['getYAxis']()['decrementCurves']();
						self['chart']['getY2Axis']()['incrementCurves']();
					}
					else {
						self['chart']['getY2Axis']()['decrementCurves']();
						self['chart']['getYAxis']()['incrementCurves']();
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('yAxisId', axisId) : $p['setattr'](self, 'yAxisId', axisId); 
				}
				return null;
			}
	, 1, [null,null,['self'],['axisId']]);
			$cls_definition['setYAxis'] = $method;
			$method = $pyjs__bind_method2('getActuallyClippedToPlotArea', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool46,$bool45,$bool44,$or11,result,$or12,rpIndex;
				result = self['getParent']()['getClipToPlotArea']();
				if ((($bool44=result) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
						false :
						(typeof $bool44=='object'?
							(typeof $bool44['__nonzero__']=='function'?
								$bool44['__nonzero__']() :
								(typeof $bool44['__len__']=='function'?
									($bool44['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					rpIndex = self['chart']['getRenderingPanelIndex'](self['getIndexOf']());
					if ((($bool46=((($bool45=$or11=$p['op_eq']($p['getattr']($m['GChartWidgets'], 'DECORATIVE_RENDERING_PANEL_INDEX'), rpIndex)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
						false :
						(typeof $bool45=='object'?
							(typeof $bool45['__nonzero__']=='function'?
								$bool45['__nonzero__']() :
								(typeof $bool45['__len__']=='function'?
									($bool45['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or11:self['chart']['isHoverFeedbackRenderingPanel'](rpIndex))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
							false :
							(typeof $bool46=='object'?
								(typeof $bool46['__nonzero__']=='function'?
									$bool46['__nonzero__']() :
									(typeof $bool46['__len__']=='function'?
										($bool46['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						result = false;
					}
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getActuallyClippedToPlotArea'] = $method;
			$method = $pyjs__bind_method2('isSystemCurve', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool47,$and5,$and6,$cmp25,$cmp26,result;
				result = ((($bool47=$and5=!$p['op_eq']($p['getattr'](self, 'indexOf'), $m['NAI'])) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
					false :
					(typeof $bool47=='object'?
						(typeof $bool47['__nonzero__']=='function'?
							$bool47['__nonzero__']() :
							(typeof $bool47['__len__']=='function'?
								($bool47['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp25=self['getParent']()['externalCurveIndex']($p['getattr'](self, 'indexOf')))===($cmp26=$constant_int_0)?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) == -1):$and5);
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isSystemCurve'] = $method;
			$method = $pyjs__bind_method2('realizePoint', function(pp, grp, arp, iPoint) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					pp = arguments[1];
					grp = arguments[2];
					arp = arguments[3];
					iPoint = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add88,$bool50,$bool51,$sub29,$add87,nextP,$cmp27,$cmp28,$cmp29,nextX,nextY,$or14,prevX,prevY,prevP,$sub31,$sub30,$sub32,$bool49,$bool48,$8,$9,$7,$cmp30,$10,$11,$12,p,$or13,drawMainSymbol,y,x;
				p = (typeof ($7=$p['getattr'](self, 'points'))['__array'] != 'undefined'?
					((typeof $7['__array'][$8=iPoint]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](iPoint));
				x = p['getX']();
				y = p['getY']();
				if ((($bool49=((($bool48=$or13=$p['op_eq']($p['getattr']($m['Double'], 'NaN'), x)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48['__nonzero__']=='function'?
							$bool48['__nonzero__']() :
							(typeof $bool48['__len__']=='function'?
								($bool48['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or13:$p['op_eq']($p['getattr']($m['Double'], 'NaN'), y))) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49['__nonzero__']=='function'?
								$bool49['__nonzero__']() :
								(typeof $bool49['__len__']=='function'?
									($bool49['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				prevX = $p['getattr']($m['Double'], 'NaN');
				prevY = $p['getattr']($m['Double'], 'NaN');
				if ((($bool50=((($cmp27=iPoint)===($cmp28=$constant_int_0)?0:
					(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
						($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
						$p['cmp']($cmp27, $cmp28))) == 1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50['__nonzero__']=='function'?
								$bool50['__nonzero__']() :
								(typeof $bool50['__len__']=='function'?
									($bool50['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					prevP = (typeof ($9=$p['getattr'](self, 'points'))['__array'] != 'undefined'?
						((typeof $9['__array'][$10=(typeof ($sub29=iPoint)==typeof ($sub30=$constant_int_1) && (typeof $sub29=='number'||typeof $sub29=='string')?
						$sub29-$sub30:
						$p['op_sub']($sub29,$sub30))]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']((typeof ($sub29=iPoint)==typeof ($sub30=$constant_int_1) && (typeof $sub29=='number'||typeof $sub29=='string')?
						$sub29-$sub30:
						$p['op_sub']($sub29,$sub30))));
					prevX = prevP['getX']();
					prevY = prevP['getY']();
				}
				nextX = $p['getattr']($m['Double'], 'NaN');
				nextY = $p['getattr']($m['Double'], 'NaN');
				nextP = null;
				if ((($bool51=((($cmp29=iPoint)===($cmp30=(typeof ($sub31=self['getNPoints']())==typeof ($sub32=$constant_int_1) && (typeof $sub31=='number'||typeof $sub31=='string')?
					$sub31-$sub32:
					$p['op_sub']($sub31,$sub32)))?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))) == -1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51['__nonzero__']=='function'?
								$bool51['__nonzero__']() :
								(typeof $bool51['__len__']=='function'?
									($bool51['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					nextP = (typeof ($11=$p['getattr'](self, 'points'))['__array'] != 'undefined'?
						((typeof $11['__array'][$12=(typeof ($add87=iPoint)==typeof ($add88=$constant_int_1) && (typeof $add87=='number'||typeof $add87=='string')?
						$add87+$add88:
						$p['op_add']($add87,$add88))]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']((typeof ($add87=iPoint)==typeof ($add88=$constant_int_1) && (typeof $add87=='number'||typeof $add87=='string')?
						$add87+$add88:
						$p['op_add']($add87,$add88))));
					nextX = nextP['getX']();
					nextY = nextP['getY']();
				}
				drawMainSymbol = !$p['op_eq'](p['getINextInBand'](), iPoint);
				self['getSymbol']()['realizeSymbol'](pp, grp, arp, p['getAnnotation'](), self['onY2'](), self['getActuallyClippedToPlotArea'](), self['getParent']()['getClipToDecoratedChart'](), drawMainSymbol, x, y, prevX, prevY, nextX, nextY);
				return null;
			}
	, 1, [null,null,['self'],['pp'],['grp'],['arp'],['iPoint']]);
			$cls_definition['realizePoint'] = $method;
			$method = $pyjs__bind_method2('invalidate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$14,$bool52,$bool53,i,$iter5_array,$13,$iter5_iter,$iter5_idx,$iter5_type,$cmp32,$cmp31;
				if ((($bool52=$p['getattr'](self, 'validated')) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
						false :
						(typeof $bool52=='object'?
							(typeof $bool52['__nonzero__']=='function'?
								$bool52['__nonzero__']() :
								(typeof $bool52['__len__']=='function'?
									($bool52['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('validated', false) : $p['setattr'](self, 'validated', false); 
					if ((($bool53=((($cmp31=$p['getattr'](self, 'indexOf'))===($cmp32=$m['N_PRE_SYSTEM_CURVES'])?0:
						(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
							($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
							$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
							false :
							(typeof $bool53=='object'?
								(typeof $bool53['__nonzero__']=='function'?
									$bool53['__nonzero__']() :
									(typeof $bool53['__len__']=='function'?
										($bool53['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$iter5_iter = $p['range']($m['N_PRE_SYSTEM_CURVES']);
						if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
							$iter5_type = 0;
						} else {
							$iter5_iter = $iter5_iter['__iter__']();
							$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter5_idx = 0;
						while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
							i = $iter5_nextval;
							(typeof ($13=$p['getattr']($p['getattr'](self, 'chart'), 'curves'))['__array'] != 'undefined'?
								((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
									$13['__getitem__']($14)):
									$13['__getitem__'](i))['__is_instance__'] && typeof (typeof ($13=$p['getattr']($p['getattr'](self, 'chart'), 'curves'))['__array'] != 'undefined'?
								((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
									$13['__getitem__']($14)):
									$13['__getitem__'](i))['__setattr__'] == 'function' ? (typeof ($13=$p['getattr']($p['getattr'](self, 'chart'), 'curves'))['__array'] != 'undefined'?
								((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
									$13['__getitem__']($14)):
									$13['__getitem__'](i))['__setattr__']('validated', false) : $p['setattr']((typeof ($13=$p['getattr']($p['getattr'](self, 'chart'), 'curves'))['__array'] != 'undefined'?
								((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
									$13['__getitem__']($14)):
									$13['__getitem__'](i)), 'validated', false); 
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['invalidate'] = $method;
			$method = $pyjs__bind_method2('getContainingRectangle', function(pp) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pp = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add89,bottom0,bottom1,yPxMax,$bool81,$bool80,extraSpace,$sub33,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,$iter6_array,$cmp39,$cmp38,$cmp37,$cmp36,$cmp35,$cmp34,$cmp33,p,x,left0,left1,result,$iter6_iter,$add97,$iter6_idx,$add92,$mul16,$mul15,$mul14,$mul13,yPxMin,$bool54,$bool55,$bool56,$bool57,$iter6_type,$bool58,$bool59,symType,isClippedToPlotArea,right0,right1,xPxMin,xPxMax,$bool61,$bool60,$bool63,$bool62,$bool65,$bool64,$bool67,$bool66,$bool69,$bool68,top1,nPoints,top0,$assign1,maxX,maxY,$bool78,$bool79,$bool76,$bool77,$bool74,$bool75,$bool72,$bool73,$bool70,$bool71,$sub40,$cmp40,$iter6_nextval,isClippedToDecoratedChart,pointAtYAxisMax,minX,minY,$add98,$add94,$add95,$add96,pointAtXAxisMin,$add90,$add91,sym,$add93,pointAtYAxisMin,pointAtXAxisMax,onY2,i,y;
				result = $m['GChartWidgets']['Rectangle']();
				if ((($bool54=$p['op_eq'](self['getNPoints'](), $constant_int_0)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54['__nonzero__']=='function'?
								$bool54['__nonzero__']() :
								(typeof $bool54['__len__']=='function'?
									($bool54['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$assign1 = $constant_int_0;
					result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('x', $assign1) : $p['setattr'](result, 'x', $assign1); 
					result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('y', $assign1) : $p['setattr'](result, 'y', $assign1); 
					result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('width', $assign1) : $p['setattr'](result, 'width', $assign1); 
					result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('height', $assign1) : $p['setattr'](result, 'height', $assign1); 
					return result;
				}
				minX = $p['getattr']($m['Double'], 'MAX_VALUE');
				maxX = (typeof ($usub1=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub1:
					$p['op_usub']($usub1));
				minY = $p['getattr']($m['Double'], 'MAX_VALUE');
				maxY = (typeof ($usub2=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
					-$usub2:
					$p['op_usub']($usub2));
				pointAtXAxisMin = false;
				pointAtXAxisMax = false;
				pointAtYAxisMin = false;
				pointAtYAxisMax = false;
				isClippedToDecoratedChart = self['chart']['getClipToDecoratedChart']();
				isClippedToPlotArea = self['getActuallyClippedToPlotArea']();
				nPoints = self['getNPoints']();
				$iter6_iter = $p['range'](nPoints);
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					p = self['getPoint'](i);
					x = p['getX']();
					y = p['getY']();
					if ((($bool55=$p['op_eq']($p['getattr']($m['Double'], 'MAX_VALUE'), x)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
							false :
							(typeof $bool55=='object'?
								(typeof $bool55['__nonzero__']=='function'?
									$bool55['__nonzero__']() :
									(typeof $bool55['__len__']=='function'?
										($bool55['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						pointAtXAxisMax = true;
					}
					else if ((($bool56=$p['op_eq']((typeof ($usub3=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
						-$usub3:
						$p['op_usub']($usub3)), x)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
							false :
							(typeof $bool56=='object'?
								(typeof $bool56['__nonzero__']=='function'?
									$bool56['__nonzero__']() :
									(typeof $bool56['__len__']=='function'?
										($bool56['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						pointAtXAxisMin = true;
					}
					else {
						if ((($bool57=((($cmp33=x)===($cmp34=minX)?0:
							(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
								($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
								$p['cmp']($cmp33, $cmp34))) == -1)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
								false :
								(typeof $bool57=='object'?
									(typeof $bool57['__nonzero__']=='function'?
										$bool57['__nonzero__']() :
										(typeof $bool57['__len__']=='function'?
											($bool57['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							minX = x;
						}
						if ((($bool58=((($cmp35=x)===($cmp36=maxX)?0:
							(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
								($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
								$p['cmp']($cmp35, $cmp36))) == 1)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
								false :
								(typeof $bool58=='object'?
									(typeof $bool58['__nonzero__']=='function'?
										$bool58['__nonzero__']() :
										(typeof $bool58['__len__']=='function'?
											($bool58['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							maxX = x;
						}
					}
					if ((($bool59=$p['op_eq']($p['getattr']($m['Double'], 'MAX_VALUE'), y)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
							false :
							(typeof $bool59=='object'?
								(typeof $bool59['__nonzero__']=='function'?
									$bool59['__nonzero__']() :
									(typeof $bool59['__len__']=='function'?
										($bool59['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						pointAtYAxisMax = true;
					}
					else if ((($bool60=$p['op_eq']((typeof ($usub4=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
						-$usub4:
						$p['op_usub']($usub4)), y)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
							false :
							(typeof $bool60=='object'?
								(typeof $bool60['__nonzero__']=='function'?
									$bool60['__nonzero__']() :
									(typeof $bool60['__len__']=='function'?
										($bool60['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						pointAtYAxisMin = true;
					}
					else {
						if ((($bool61=((($cmp37=y)===($cmp38=minY)?0:
							(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
								($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
								$p['cmp']($cmp37, $cmp38))) == -1)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
								false :
								(typeof $bool61=='object'?
									(typeof $bool61['__nonzero__']=='function'?
										$bool61['__nonzero__']() :
										(typeof $bool61['__len__']=='function'?
											($bool61['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							minY = y;
						}
						if ((($bool62=((($cmp39=y)===($cmp40=maxY)?0:
							(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
								($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
								$p['cmp']($cmp39, $cmp40))) == 1)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
								false :
								(typeof $bool62=='object'?
									(typeof $bool62['__nonzero__']=='function'?
										$bool62['__nonzero__']() :
										(typeof $bool62['__len__']=='function'?
											($bool62['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							maxY = y;
						}
					}
				}
				if ((($bool63=pointAtXAxisMin) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63['__nonzero__']=='function'?
								$bool63['__nonzero__']() :
								(typeof $bool63['__len__']=='function'?
									($bool63['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					minX = $p['min'](minX, pp['getXMin']());
				}
				if ((($bool64=isClippedToPlotArea) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
						false :
						(typeof $bool64=='object'?
							(typeof $bool64['__nonzero__']=='function'?
								$bool64['__nonzero__']() :
								(typeof $bool64['__len__']=='function'?
									($bool64['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					minX = $p['max'](minX, pp['getXMin']());
				}
				else if ((($bool65=isClippedToDecoratedChart) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65['__nonzero__']=='function'?
								$bool65['__nonzero__']() :
								(typeof $bool65['__len__']=='function'?
									($bool65['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					minX = $p['max'](minX, $m['getXAxis']()['pixelToModel']($constant_int_0));
				}
				if ((($bool66=pointAtXAxisMax) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
						false :
						(typeof $bool66=='object'?
							(typeof $bool66['__nonzero__']=='function'?
								$bool66['__nonzero__']() :
								(typeof $bool66['__len__']=='function'?
									($bool66['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					maxX = $p['max'](maxX, pp['getXMax']());
				}
				if ((($bool67=isClippedToPlotArea) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
						false :
						(typeof $bool67=='object'?
							(typeof $bool67['__nonzero__']=='function'?
								$bool67['__nonzero__']() :
								(typeof $bool67['__len__']=='function'?
									($bool67['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					maxX = $p['min'](maxX, pp['getXMax']());
				}
				else if ((($bool68=isClippedToDecoratedChart) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
						false :
						(typeof $bool68=='object'?
							(typeof $bool68['__nonzero__']=='function'?
								$bool68['__nonzero__']() :
								(typeof $bool68['__len__']=='function'?
									($bool68['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					maxX = $p['min'](maxX, $m['getXAxis']()['pixelToModel'](pp['getXChartSizeDecoratedQuickly']()));
				}
				onY2 = self['onY2']();
				if ((($bool69=onY2) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
						false :
						(typeof $bool69=='object'?
							(typeof $bool69['__nonzero__']=='function'?
								$bool69['__nonzero__']() :
								(typeof $bool69['__len__']=='function'?
									($bool69['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool70=pointAtYAxisMin) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
							false :
							(typeof $bool70=='object'?
								(typeof $bool70['__nonzero__']=='function'?
									$bool70['__nonzero__']() :
									(typeof $bool70['__len__']=='function'?
										($bool70['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						minY = $p['min'](minY, pp['getY2Min']());
					}
					if ((($bool71=isClippedToPlotArea) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
							false :
							(typeof $bool71=='object'?
								(typeof $bool71['__nonzero__']=='function'?
									$bool71['__nonzero__']() :
									(typeof $bool71['__len__']=='function'?
										($bool71['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						minY = $p['max'](minY, pp['getY2Min']());
					}
					else if ((($bool72=isClippedToDecoratedChart) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
							false :
							(typeof $bool72=='object'?
								(typeof $bool72['__nonzero__']=='function'?
									$bool72['__nonzero__']() :
									(typeof $bool72['__len__']=='function'?
										($bool72['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						minY = $p['max'](minY, $m['getY2Axis']()['pixelToModel'](pp['getYChartSizeDecoratedQuickly']()));
					}
					if ((($bool73=pointAtYAxisMax) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
							false :
							(typeof $bool73=='object'?
								(typeof $bool73['__nonzero__']=='function'?
									$bool73['__nonzero__']() :
									(typeof $bool73['__len__']=='function'?
										($bool73['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						maxY = $p['max'](maxY, pp['getY2Max']());
					}
					if ((($bool74=isClippedToPlotArea) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
							false :
							(typeof $bool74=='object'?
								(typeof $bool74['__nonzero__']=='function'?
									$bool74['__nonzero__']() :
									(typeof $bool74['__len__']=='function'?
										($bool74['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						maxY = $p['min'](maxY, pp['getY2Max']());
					}
					else if ((($bool75=isClippedToDecoratedChart) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
							false :
							(typeof $bool75=='object'?
								(typeof $bool75['__nonzero__']=='function'?
									$bool75['__nonzero__']() :
									(typeof $bool75['__len__']=='function'?
										($bool75['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						maxY = $p['min'](maxY, $m['getY2Axis']()['pixelToModel']($constant_int_0));
					}
				}
				else {
					if ((($bool76=pointAtYAxisMin) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
							false :
							(typeof $bool76=='object'?
								(typeof $bool76['__nonzero__']=='function'?
									$bool76['__nonzero__']() :
									(typeof $bool76['__len__']=='function'?
										($bool76['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						minY = $p['min'](minY, pp['getYMin']());
					}
					if ((($bool77=isClippedToPlotArea) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
							false :
							(typeof $bool77=='object'?
								(typeof $bool77['__nonzero__']=='function'?
									$bool77['__nonzero__']() :
									(typeof $bool77['__len__']=='function'?
										($bool77['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						minY = $p['max'](minY, pp['getYMin']());
					}
					else if ((($bool78=isClippedToDecoratedChart) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
							false :
							(typeof $bool78=='object'?
								(typeof $bool78['__nonzero__']=='function'?
									$bool78['__nonzero__']() :
									(typeof $bool78['__len__']=='function'?
										($bool78['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						minY = $p['max'](minY, self['chart']['getYAxis']()['pixelToModel'](pp['getYChartSizeDecoratedQuickly']()));
					}
					if ((($bool79=pointAtYAxisMax) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
							false :
							(typeof $bool79=='object'?
								(typeof $bool79['__nonzero__']=='function'?
									$bool79['__nonzero__']() :
									(typeof $bool79['__len__']=='function'?
										($bool79['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						maxY = $p['max'](maxY, pp['getYMax']());
					}
					if ((($bool80=isClippedToPlotArea) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
							false :
							(typeof $bool80=='object'?
								(typeof $bool80['__nonzero__']=='function'?
									$bool80['__nonzero__']() :
									(typeof $bool80['__len__']=='function'?
										($bool80['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						maxY = $p['min'](maxY, pp['getYMax']());
					}
					else if ((($bool81=isClippedToDecoratedChart) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
							false :
							(typeof $bool81=='object'?
								(typeof $bool81['__nonzero__']=='function'?
									$bool81['__nonzero__']() :
									(typeof $bool81['__len__']=='function'?
										($bool81['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						maxY = $p['min'](maxY, self['chart']['getYAxis']()['pixelToModel']($constant_int_0));
					}
				}
				sym = self['getSymbol']();
				symType = sym['getSymbolType']();
				extraSpace = sym['getFillThickness']();
				extraSpace = (typeof ($add89=extraSpace)==typeof ($add90=$p['abs'](sym['getBorderWidth']())) && (typeof $add89=='number'||typeof $add89=='string')?
					$add89+$add90:
					$p['op_add']($add89,$add90));
				left0 = symType['getEdgeLeft'](pp, sym, minX, onY2);
				left1 = symType['getEdgeLeft'](pp, sym, maxX, onY2);
				right0 = symType['getEdgeRight'](pp, sym, minX, onY2);
				right1 = symType['getEdgeRight'](pp, sym, maxX, onY2);
				bottom0 = symType['getEdgeBottom'](pp, sym, minY, onY2);
				bottom1 = symType['getEdgeBottom'](pp, sym, maxY, onY2);
				top0 = symType['getEdgeTop'](pp, sym, minY, onY2);
				top1 = symType['getEdgeTop'](pp, sym, maxY, onY2);
				xPxMin = $p['min']($p['min'](left0, left1), $p['min'](right0, right1));
				xPxMax = $p['max']($p['max'](left0, left1), $p['max'](right0, right1));
				yPxMin = $p['min']($p['min'](bottom0, bottom1), $p['min'](top0, top1));
				yPxMax = $p['max']($p['max'](bottom0, bottom1), $p['max'](top0, top1));
				result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('x', (typeof ($sub33=xPxMin)==typeof ($sub34=extraSpace) && (typeof $sub33=='number'||typeof $sub33=='string')?
					$sub33-$sub34:
					$p['op_sub']($sub33,$sub34))) : $p['setattr'](result, 'x', (typeof ($sub33=xPxMin)==typeof ($sub34=extraSpace) && (typeof $sub33=='number'||typeof $sub33=='string')?
					$sub33-$sub34:
					$p['op_sub']($sub33,$sub34))); 
				result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('y', (typeof ($sub35=yPxMin)==typeof ($sub36=extraSpace) && (typeof $sub35=='number'||typeof $sub35=='string')?
					$sub35-$sub36:
					$p['op_sub']($sub35,$sub36))) : $p['setattr'](result, 'y', (typeof ($sub35=yPxMin)==typeof ($sub36=extraSpace) && (typeof $sub35=='number'||typeof $sub35=='string')?
					$sub35-$sub36:
					$p['op_sub']($sub35,$sub36))); 
				result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('width', (typeof ($add93=(typeof ($add91=(typeof ($sub37=xPxMax)==typeof ($sub38=xPxMin) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38)))==typeof ($add92=$constant_int_1) && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92)))==typeof ($add94=(typeof ($mul13=$constant_int_2)==typeof ($mul14=extraSpace) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))) && (typeof $add93=='number'||typeof $add93=='string')?
					$add93+$add94:
					$p['op_add']($add93,$add94))) : $p['setattr'](result, 'width', (typeof ($add93=(typeof ($add91=(typeof ($sub37=xPxMax)==typeof ($sub38=xPxMin) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38)))==typeof ($add92=$constant_int_1) && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92)))==typeof ($add94=(typeof ($mul13=$constant_int_2)==typeof ($mul14=extraSpace) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))) && (typeof $add93=='number'||typeof $add93=='string')?
					$add93+$add94:
					$p['op_add']($add93,$add94))); 
				result['__is_instance__'] && typeof result['__setattr__'] == 'function' ? result['__setattr__']('height', (typeof ($add97=(typeof ($add95=(typeof ($sub39=yPxMax)==typeof ($sub40=yPxMin) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40)))==typeof ($add96=$constant_int_1) && (typeof $add95=='number'||typeof $add95=='string')?
					$add95+$add96:
					$p['op_add']($add95,$add96)))==typeof ($add98=(typeof ($mul15=$constant_int_2)==typeof ($mul16=extraSpace) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $add97=='number'||typeof $add97=='string')?
					$add97+$add98:
					$p['op_add']($add97,$add98))) : $p['setattr'](result, 'height', (typeof ($add97=(typeof ($add95=(typeof ($sub39=yPxMax)==typeof ($sub40=yPxMin) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40)))==typeof ($add96=$constant_int_1) && (typeof $add95=='number'||typeof $add95=='string')?
					$add95+$add96:
					$p['op_add']($add95,$add96)))==typeof ($add98=(typeof ($mul15=$constant_int_2)==typeof ($mul16=extraSpace) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $add97=='number'||typeof $add97=='string')?
					$add97+$add98:
					$p['op_add']($add97,$add98))); 
				return result;
			}
	, 1, [null,null,['self'],['pp']]);
			$cls_definition['getContainingRectangle'] = $method;
			$method = $pyjs__bind_method2('setWasCanvasRendered', function(wasCanvasRendered) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					wasCanvasRendered = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('wasCanvasRendered', wasCanvasRendered) : $p['setattr'](self, 'wasCanvasRendered', wasCanvasRendered); 
				return null;
			}
	, 1, [null,null,['self'],['wasCanvasRendered']]);
			$cls_definition['setWasCanvasRendered'] = $method;
			$method = $pyjs__bind_method2('isCanvasRendered', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '051aa1602faa594547d443b9b642d040') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$bool82,$and7;
				return ((($bool82=$and7=$p['getattr'](self, 'validated')) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
					false :
					(typeof $bool82=='object'?
						(typeof $bool82['__nonzero__']=='function'?
							$bool82['__nonzero__']() :
							(typeof $bool82['__len__']=='function'?
								($bool82['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](self, 'wasCanvasRendered'):$and7);
			}
	, 1, [null,null,['self']]);
			$cls_definition['isCanvasRendered'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Curve', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.Curve */


/* end module: pyjamas.chart.Curve */


/*
PYJS_DEPS: ['math', 'pyjamas.chart.Double', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.Point.Point', 'pyjamas.chart.Point', 'pyjamas.chart.Symbol.Symbol', 'pyjamas.chart.Symbol', 'pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.GChartConsts.Y2_AXIS', 'pyjamas.chart.GChartConsts.N_PRE_SYSTEM_CURVES', 'pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart.GChartWidgets']
*/
