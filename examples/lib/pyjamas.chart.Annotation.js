/* start module: pyjamas.chart.Annotation */
$pyjs.loaded_modules['pyjamas.chart.Annotation'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.chart.Annotation'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.chart.Annotation'];
	if(typeof $pyjs.loaded_modules['pyjamas.chart'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.chart'].__was_initialized__) $p['___import___']('pyjamas.chart', null);
	var $m = $pyjs.loaded_modules["pyjamas.chart.Annotation"];
	$m.__repr__ = function() { return "<module: pyjamas.chart.Annotation>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.chart.Annotation';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.chart']['Annotation'] = $pyjs.loaded_modules['pyjamas.chart.Annotation'];
	try {
		var $len2,$len1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['math'] = $p['___import___']('math', 'pyjamas.chart');
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.chart', null, false);
		$m['htmlWidth'] = $p['___import___']('pyjamas.chart.GChartUtil.htmlWidth', 'pyjamas.chart', null, false);
		$m['htmlHeight'] = $p['___import___']('pyjamas.chart.GChartUtil.htmlHeight', 'pyjamas.chart', null, false);
		$m['NAI'] = $p['___import___']('pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart', null, false);
		$m['DEFAULT_FONT_COLOR'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_FONT_COLOR', 'pyjamas.chart', null, false);
		$m['DEFAULT_ANNOTATION_FONTSIZE'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_ANNOTATION_FONTSIZE', 'pyjamas.chart', null, false);
		$m['DEFAULT_WIDGET_WIDTH_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_WIDGET_WIDTH_UPPERBOUND', 'pyjamas.chart', null, false);
		$m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.DEFAULT_WIDGET_HEIGHT_UPPERBOUND', 'pyjamas.chart', null, false);
		$m['CHARHEIGHT_TO_FONTSIZE_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.CHARHEIGHT_TO_FONTSIZE_UPPERBOUND', 'pyjamas.chart', null, false);
		$m['CHARWIDTH_TO_FONTSIZE_UPPERBOUND'] = $p['___import___']('pyjamas.chart.GChartConsts.CHARWIDTH_TO_FONTSIZE_UPPERBOUND', 'pyjamas.chart', null, false);
		$m['HTML_LEN'] = (($len1='<html>') === null?$constant_int_0:
			(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
						$p['len']($len1)))));
		$m['BR_LEN'] = (($len2='<br>') === null?$constant_int_0:
			(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
				(typeof $len2.__len__ == 'function'?$len2.__len__():
					(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
						$p['len']($len2)))));
		$m['getNumberOfCharsWide'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool2,$bool1,result,$len3;
			result = $constant_int_0;
			if ((($bool2=!(($bool1=s['startswith']('<html>')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				result = (($len3=s) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3)))));
			}
			else {
				result = $m['htmlWidth'](s);
			}
			return result;
		};
		$m['getNumberOfCharsWide'].__name__ = 'getNumberOfCharsWide';

		$m['getNumberOfCharsWide'].__bind_type__ = 0;
		$m['getNumberOfCharsWide'].__args__ = [null,null,['s']];
		$m['Annotation'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.chart.Annotation';
			$cls_definition.__md5__ = '00df79ebd800854ec0efd8f6390f4ea5';
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
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontColor', $m['DEFAULT_FONT_COLOR']) : $p['setattr'](self, 'fontColor', $m['DEFAULT_FONT_COLOR']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontSize', $m['DEFAULT_ANNOTATION_FONTSIZE']) : $p['setattr'](self, 'fontSize', $m['DEFAULT_ANNOTATION_FONTSIZE']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontStyle', 'normal') : $p['setattr'](self, 'fontStyle', 'normal'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontWeight', 'normal') : $p['setattr'](self, 'fontWeight', 'normal'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('location', null) : $p['setattr'](self, 'location', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('text', null) : $p['setattr'](self, 'text', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('widget', null) : $p['setattr'](self, 'widget', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('visible', true) : $p['setattr'](self, 'visible', true); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xShift', $constant_int_0) : $p['setattr'](self, 'xShift', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yShift', $constant_int_0) : $p['setattr'](self, 'yShift', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_isHTML', false) : $p['setattr'](self, '_isHTML', false); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numberOfLinesHigh', $constant_int_0) : $p['setattr'](self, 'numberOfLinesHigh', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numberOfCharsWide', $constant_int_0) : $p['setattr'](self, 'numberOfCharsWide', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('widthUpperBound', $m['NAI']) : $p['setattr'](self, 'widthUpperBound', $m['NAI']); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('heightUpperBound', $m['NAI']) : $p['setattr'](self, 'heightUpperBound', $m['NAI']); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('analyzeHTML', function(s) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$len4,$bool3,$bool6,result,$bool4,$bool5,$bool8,$and2,$bool7;
				result = null;
				if ((($bool3=$p['op_eq'](null, s)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_isHTML', false) : $p['setattr'](self, '_isHTML', false); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numberOfLinesHigh', $constant_int_0) : $p['setattr'](self, 'numberOfLinesHigh', $constant_int_0); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numberOfCharsWide', $constant_int_0) : $p['setattr'](self, 'numberOfCharsWide', $constant_int_0); 
				}
				else if ((($bool6=((($bool4=$and1=$p['hasattr'](s, 'startswith')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool5=s['startswith']('<html>')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_isHTML', false) : $p['setattr'](self, '_isHTML', false); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numberOfLinesHigh', $constant_int_1) : $p['setattr'](self, 'numberOfLinesHigh', $constant_int_1); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numberOfCharsWide', (($len4=s) === null?$constant_int_0:
						(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
							(typeof $len4.__len__ == 'function'?$len4.__len__():
								(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
									$p['len']($len4)))))) : $p['setattr'](self, 'numberOfCharsWide', (($len4=s) === null?$constant_int_0:
						(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
							(typeof $len4.__len__ == 'function'?$len4.__len__():
								(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
									$p['len']($len4)))))); 
					result = s;
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_isHTML', true) : $p['setattr'](self, '_isHTML', true); 
					result = $p['__getslice'](s, $m['HTML_LEN'], null);
					if ((($bool7=$p['op_eq']($p['getattr'](self, 'widthUpperBound'), $m['NAI'])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numberOfCharsWide', $m['htmlWidth'](result)) : $p['setattr'](self, 'numberOfCharsWide', $m['htmlWidth'](result)); 
					}
					if ((($bool8=$p['op_eq']($p['getattr'](self, 'heightUpperBound'), $m['NAI'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('numberOfLinesHigh', $m['htmlHeight'](result)) : $p['setattr'](self, 'numberOfLinesHigh', $m['htmlHeight'](result)); 
					}
				}
				return result;
			}
	, 1, [null,null,['self'],['s']]);
			$cls_definition['analyzeHTML'] = $method;
			$method = $pyjs__bind_method2('getFontColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'fontColor');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFontColor'] = $method;
			$method = $pyjs__bind_method2('getFontSize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'fontSize');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFontSize'] = $method;
			$method = $pyjs__bind_method2('getLocation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'location');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLocation'] = $method;
			$method = $pyjs__bind_method2('isHTML', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, '_isHTML');
			}
	, 1, [null,null,['self']]);
			$cls_definition['isHTML'] = $method;
			$method = $pyjs__bind_method2('getText', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,$bool10,$add2,$add1,$bool9;
				if ((($bool9=$p['getattr'](self, '_isHTML')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					return (typeof ($add1='<html>')==typeof ($add2=((($bool10=$or1=$p['getattr'](self, 'text')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10.__nonzero__=='function'?
								$bool10.__nonzero__() :
								(typeof $bool10.__len__=='function'?
									($bool10.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:'')) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
				return $p['getattr'](self, 'text');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getText'] = $method;
			$method = $pyjs__bind_method2('getVisible', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'visible');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getVisible'] = $method;
			$method = $pyjs__bind_method2('getXShift', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'xShift');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getXShift'] = $method;
			$method = $pyjs__bind_method2('getYShift', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'yShift');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getYShift'] = $method;
			$method = $pyjs__bind_method2('setFontColor', function(cssColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					cssColor = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontColor', cssColor) : $p['setattr'](self, 'fontColor', cssColor); 
				return null;
			}
	, 1, [null,null,['self'],['cssColor']]);
			$cls_definition['setFontColor'] = $method;
			$method = $pyjs__bind_method2('setFontSize', function(fontSize) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fontSize = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontSize', fontSize) : $p['setattr'](self, 'fontSize', fontSize); 
				return null;
			}
	, 1, [null,null,['self'],['fontSize']]);
			$cls_definition['setFontSize'] = $method;
			$method = $pyjs__bind_method2('setFontWeight', function(cssWeight) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					cssWeight = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontWeight', cssWeight) : $p['setattr'](self, 'fontWeight', cssWeight); 
				return null;
			}
	, 1, [null,null,['self'],['cssWeight']]);
			$cls_definition['setFontWeight'] = $method;
			$method = $pyjs__bind_method2('setFontStyle', function(cssStyle) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					cssStyle = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontStyle', cssStyle) : $p['setattr'](self, 'fontStyle', cssStyle); 
				return null;
			}
	, 1, [null,null,['self'],['cssStyle']]);
			$cls_definition['setFontStyle'] = $method;
			$method = $pyjs__bind_method2('getFontWeight', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'fontWeight');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFontWeight'] = $method;
			$method = $pyjs__bind_method2('getFontStyle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'fontStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFontStyle'] = $method;
			$method = $pyjs__bind_method2('setLocation', function(location) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					location = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('location', location) : $p['setattr'](self, 'location', location); 
				return null;
			}
	, 1, [null,null,['self'],['location']]);
			$cls_definition['setLocation'] = $method;
			$method = $pyjs__bind_method2('setText', function(text, widthUpperBound, heightUpperBound) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					widthUpperBound = arguments[2];
					heightUpperBound = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof widthUpperBound == 'undefined') widthUpperBound=arguments.callee.__args__[4][1];
				if (typeof heightUpperBound == 'undefined') heightUpperBound=arguments.callee.__args__[5][1];

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('widthUpperBound', widthUpperBound) : $p['setattr'](self, 'widthUpperBound', widthUpperBound); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('heightUpperBound', heightUpperBound) : $p['setattr'](self, 'heightUpperBound', heightUpperBound); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('text', self['analyzeHTML'](text)) : $p['setattr'](self, 'text', self['analyzeHTML'](text)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('widget', null) : $p['setattr'](self, 'widget', null); 
				return null;
			}
	, 1, [null,null,['self'],['text'],['widthUpperBound', $m['NAI']],['heightUpperBound', $m['NAI']]]);
			$cls_definition['setText'] = $method;
			$method = $pyjs__bind_method2('setVisible', function(visible) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('visible', visible) : $p['setattr'](self, 'visible', visible); 
				return null;
			}
	, 1, [null,null,['self'],['visible']]);
			$cls_definition['setVisible'] = $method;
			$method = $pyjs__bind_method2('setWidget', function(widget, widthUpperBound, heightUpperBound) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					widthUpperBound = arguments[2];
					heightUpperBound = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof widthUpperBound == 'undefined') widthUpperBound=arguments.callee.__args__[4][1];
				if (typeof heightUpperBound == 'undefined') heightUpperBound=arguments.callee.__args__[5][1];
				var $bool11;
				if ((($bool11=$p['isinstance'](widget, $p['basestring'])) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11.__nonzero__=='function'?
								$bool11.__nonzero__() :
								(typeof $bool11.__len__=='function'?
									($bool11.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					widget = $m['HTML'](widget);
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('widthUpperBound', widthUpperBound) : $p['setattr'](self, 'widthUpperBound', widthUpperBound); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('heightUpperBound', heightUpperBound) : $p['setattr'](self, 'heightUpperBound', heightUpperBound); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('text', null) : $p['setattr'](self, 'text', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('widget', widget) : $p['setattr'](self, 'widget', widget); 
				return null;
			}
	, 1, [null,null,['self'],['widget'],['widthUpperBound', $m['DEFAULT_WIDGET_WIDTH_UPPERBOUND']],['heightUpperBound', $m['DEFAULT_WIDGET_HEIGHT_UPPERBOUND']]]);
			$cls_definition['setWidget'] = $method;
			$method = $pyjs__bind_method2('getWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'widget');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWidget'] = $method;
			$method = $pyjs__bind_method2('setXShift', function(xShift) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					xShift = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('xShift', xShift) : $p['setattr'](self, 'xShift', xShift); 
				return null;
			}
	, 1, [null,null,['self'],['xShift']]);
			$cls_definition['setXShift'] = $method;
			$method = $pyjs__bind_method2('setYShift', function(yShift) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					yShift = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('yShift', yShift) : $p['setattr'](self, 'yShift', yShift); 
				return null;
			}
	, 1, [null,null,['self'],['yShift']]);
			$cls_definition['setYShift'] = $method;
			$method = $pyjs__bind_method2('getHeightUpperBound', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$mul2,result,$mul4,$mul3,$mul1;
				result = $constant_int_0;
				if ((($bool12=!$p['op_eq']($p['getattr'](self, 'heightUpperBound'), $m['NAI'])) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12.__nonzero__=='function'?
								$bool12.__nonzero__() :
								(typeof $bool12.__len__=='function'?
									($bool12.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'heightUpperBound');
				}
				else {
					result = $p['int']($m['math']['ceil']((typeof ($mul3=(typeof ($mul1=$p['getattr'](self, 'fontSize'))==typeof ($mul2=$p['getattr'](self, 'numberOfLinesHigh')) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)))==typeof ($mul4=$m['CHARHEIGHT_TO_FONTSIZE_UPPERBOUND']) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHeightUpperBound'] = $method;
			$method = $pyjs__bind_method2('getWidthUpperBound', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '00df79ebd800854ec0efd8f6390f4ea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool13,result,$mul8,$mul7,$mul6,$mul5;
				result = $constant_int_0;
				if ((($bool13=!$p['op_eq']($p['getattr'](self, 'widthUpperBound'), $m['NAI'])) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = $p['getattr'](self, 'widthUpperBound');
				}
				else {
					result = $p['int']($m['math']['ceil']((typeof ($mul7=(typeof ($mul5=$p['getattr'](self, 'fontSize'))==typeof ($mul6=$p['getattr'](self, 'numberOfCharsWide')) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))==typeof ($mul8=$m['CHARWIDTH_TO_FONTSIZE_UPPERBOUND']) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))));
				}
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWidthUpperBound'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Annotation', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.chart.Annotation */


/* end module: pyjamas.chart.Annotation */


/*
PYJS_DEPS: ['math', 'pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.chart.GChartUtil.htmlWidth', 'pyjamas.chart', 'pyjamas.chart.GChartUtil', 'pyjamas.chart.GChartUtil.htmlHeight', 'pyjamas.chart.GChartConsts.NAI', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.GChartConsts.DEFAULT_FONT_COLOR', 'pyjamas.chart.GChartConsts.DEFAULT_ANNOTATION_FONTSIZE', 'pyjamas.chart.GChartConsts.DEFAULT_WIDGET_WIDTH_UPPERBOUND', 'pyjamas.chart.GChartConsts.DEFAULT_WIDGET_HEIGHT_UPPERBOUND', 'pyjamas.chart.GChartConsts.CHARHEIGHT_TO_FONTSIZE_UPPERBOUND', 'pyjamas.chart.GChartConsts.CHARWIDTH_TO_FONTSIZE_UPPERBOUND']
*/
