/* start module: TestGChart01 */
$pyjs.loaded_modules['TestGChart01'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TestGChart01'].__was_initialized__) return $pyjs.loaded_modules['TestGChart01'];
	var $m = $pyjs.loaded_modules["TestGChart01"];
	$m.__repr__ = function() { return "<module: TestGChart01>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TestGChart01';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_500 = new $p['int'](500);
		$m['GChartTestAppUtil'] = $p['___import___']('GChartTestAppUtil', null);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['GChartConsts'] = $p['___import___']('pyjamas.chart.GChartConsts', null, null, false);
		$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['msg'] = $p['list']([$p['list'](['Check: all chart elements except labels red', 'Check: missing image icon appears on points and plot area.', 'Check: no missing image icon appears on chart area or points', 'Check: missing image icons appear on points and plot area iff IP connection is down (otherwise, 3D pies)']), $p['list'](['Check: all points red', 'Check: missing image icon appears on all points', 'Check: no missing image icon appears on chart', 'Check: missing image icons appear on points iff IP connection is down (otherwise, 3D pies).']), $p['list'](['Check: plot area red', 'Check: missing image icon appears on plot area', 'Check: no missing image icon appears on plot area', 'Check: missing image icon appears on plot area iff IP connection is down (otherwise, 3D pies).'])]);
		$m['imageURL'] = $p['list'](['red.gif', 'no-such-file.gif', 'gchart.gif', 'http://chart.apis.google.com/chart?cht=p3&chd=t:100&chs=500x200']);
		$m['TestGChart01'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'TestGChart01';
			$cls_definition.__md5__ = '60bc00abe8a28bfbcc2c2b6ba615850c';
			$method = $pyjs__bind_method2('__init__', function(imageId, targetArea) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					imageId = arguments[1];
					targetArea = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '60bc00abe8a28bfbcc2c2b6ba615850c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool4,$bool8,$bool5,$bool9,$bool2,$bool3,$bool1,$bool6,$bool7,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$10,$11,$12,$13,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
				$pyjs_kwargs_call($m['GChart'], '__init__', null, null, [{XChartSize:$constant_int_500, YChartSize:$constant_int_200}, self]);
				self['setChartTitle']((typeof ($add7=(typeof ($add5=(typeof ($add3=(typeof ($add1=$m['GChartTestAppUtil']['getTitle'](self))==typeof ($add2=' imageId=') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4=$p['str'](imageId)) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))==typeof ($add6=' targetArea=') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($add8=$p['str'](targetArea)) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)));
				self['setChartFootnotes']((typeof ($3=(typeof ($1=$m['msg']).__array != 'undefined'?
					((typeof $1.__array[$2=targetArea]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(targetArea))).__array != 'undefined'?
					((typeof $3.__array[$4=imageId]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(imageId)));
				self['addCurve']();
				if ((($bool1=$p['op_eq'](targetArea, $constant_int_0)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['setBlankImageURL']((typeof ($5=$m['imageURL']).__array != 'undefined'?
						((typeof $5.__array[$6=imageId]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(imageId)));
				}
				else if ((($bool2=$p['op_eq'](targetArea, $constant_int_1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['getCurve']()['getSymbol']()['setImageURL']((typeof ($7=$m['imageURL']).__array != 'undefined'?
						((typeof $7.__array[$8=imageId]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(imageId)));
				}
				else if ((($bool3=$p['op_eq'](targetArea, $constant_int_2)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setPlotAreaImageURL']((typeof ($9=$m['imageURL']).__array != 'undefined'?
						((typeof $9.__array[$10=imageId]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(imageId)));
				}
				if ((($bool4=$p['op_eq'](targetArea, $constant_int_0)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool5=!$p['op_eq'](self['getBlankImageURL'](), (typeof ($11=$m['imageURL']).__array != 'undefined'?
						((typeof $11.__array[$12=imageId]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(imageId)))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
							false :
							(typeof $bool5=='object'?
								(typeof $bool5.__nonzero__=='function'?
									$bool5.__nonzero__() :
									(typeof $bool5.__len__=='function'?
										($bool5.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ((typeof IllegalStateException == "undefined"?$m.IllegalStateException:IllegalStateException)('getBlankImageURL method failed.'));
					}
				}
				else if ((($bool6=$p['op_eq'](targetArea, $constant_int_1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool7=!$p['op_eq'](self['getCurve']()['getSymbol']()['getImageURL'](), (typeof ($13=$m['imageURL']).__array != 'undefined'?
						((typeof $13.__array[$14=imageId]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__(imageId)))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7.__nonzero__=='function'?
									$bool7.__nonzero__() :
									(typeof $bool7.__len__=='function'?
										($bool7.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ((typeof IllegalStateException == "undefined"?$m.IllegalStateException:IllegalStateException)('getImageURL method failed.'));
					}
				}
				else if ((($bool8=$p['op_eq'](targetArea, $constant_int_2)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool9=!$p['op_eq'](self['getPlotAreaImageURL'](), (typeof ($15=$m['imageURL']).__array != 'undefined'?
						((typeof $15.__array[$16=imageId]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__(imageId)))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9.__nonzero__=='function'?
									$bool9.__nonzero__() :
									(typeof $bool9.__len__=='function'?
										($bool9.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ((typeof IllegalStateException == "undefined"?$m.IllegalStateException:IllegalStateException)('getPlotAreaImageURL method failed.'));
					}
				}
				self['getCurve']()['getSymbol']()['setModelHeight']($constant_int_1);
				self['getCurve']()['getSymbol']()['setModelWidth']($constant_int_1);
				self['getCurve']()['getSymbol']()['setBorderWidth']($constant_int_0);
				self['getCurve']()['addPoint']($constant_int_1, $constant_int_1);
				self['getCurve']()['addPoint']($constant_int_2, $constant_int_2);
				self['getCurve']()['addPoint']($constant_int_3, $constant_int_3);
				self['getCurve']()['setLegendLabel']('Curve 0');
				self['update']();
				self['setBlankImageURL']($p['getattr']($m['GChartConsts'], 'DEFAULT_BLANK_IMAGE_URL'));
				return null;
			}
	, 1, [null,null,['self'],['imageId'],['targetArea']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestGChart01', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TestGChart01 */


/* end module: TestGChart01 */


/*
PYJS_DEPS: ['GChartTestAppUtil', 'pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType', 'pyjamas.ui.Button.Button', 'pyjamas.ui', 'pyjamas.ui.Button']
*/
