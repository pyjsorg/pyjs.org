/* start module: pyjamas.Canvas.GWTCanvasImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.GWTCanvasImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.GWTCanvasImplIE6';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['GWTCanvasImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_100 = new $p['int'](100);
		$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.Canvas', null, false);
		$m['BUTT'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.BUTT', 'pyjamas.Canvas', null, false);
		$m['DESTINATION_OVER'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.DESTINATION_OVER', 'pyjamas.Canvas', null, false);
		$m['SOURCE_OVER'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.SOURCE_OVER', 'pyjamas.Canvas', null, false);
		$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas', null, false);
		$m['JSOStack'] = $p['___import___']('pyjamas.Canvas.JSOStack.JSOStack', 'pyjamas.Canvas', null, false);
		$m['PathElement'] = $p['___import___']('pyjamas.Canvas.PathElement', 'pyjamas.Canvas', null, false);
		$m['VMLContext'] = $p['___import___']('pyjamas.Canvas.VMLContext.VMLContext', 'pyjamas.Canvas', null, false);
		$m['VMLStyle'] = $p['___import___']('pyjamas.Canvas.VMLContext.VMLStyle', 'pyjamas.Canvas', null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
		$m['CanvasGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas', null, false);
		$m['addNamespace'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);


    if (!$doc['namespaces']["v"]) {
        $doc['namespaces']['add']("v", "urn:schemas-microsoft-com:vml");
        $doc['createStyleSheet']()['cssText'] = "v\:*{behavior:url(#default#VML);}";
    }
    
		};
		$m['addNamespace']['__name__'] = 'addNamespace';

		$m['addNamespace']['__bind_type__'] = 0;
		$m['addNamespace']['__args__'] = [null,null];
		$m['GWTCanvasImplIE6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.GWTCanvasImplIE6';
			$cls_definition['__md5__'] = '9d71e080921187c65bc45f6dfa5ea70a';
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
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ns,$pyjs_try_err;
				try {
					ns = $doc['namespaces']['item']('v');
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						$doc['namespaces']['add']('v', 'urn:schemas-microsoft-com:vml');
						$doc['createStyleSheet']()['__is_instance__'] && typeof $doc['createStyleSheet']()['__setattr__'] == 'function' ? $doc['createStyleSheet']()['__setattr__']('cssText', 'v\\:*{behavior:url(#default#VML);}') : $p['setattr']($doc['createStyleSheet'](), 'cssText', 'v\\:*{behavior:url(#default#VML);}'); 
					}
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pathStr', $m['JSOStack']()) : $p['setattr'](self, 'pathStr', $m['JSOStack']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('contextStack', $p['list']([])) : $p['setattr'](self, 'contextStack', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', $constant_int_0) : $p['setattr'](self, 'currentX', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', $constant_int_0) : $p['setattr'](self, 'currentY', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentElement', null) : $p['setattr'](self, 'parentElement', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentHeight', $constant_int_0) : $p['setattr'](self, 'parentHeight', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentWidth', $constant_int_0) : $p['setattr'](self, 'parentWidth', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('arc', function(x, y, radius, startAngle, endAngle, anticlockwise) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					radius = arguments[3];
					startAngle = arguments[4];
					endAngle = arguments[5];
					anticlockwise = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['pathStr']['append']($m['PathElement']['arc'](x, y, radius, startAngle, endAngle, anticlockwise, self));
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['radius'],['startAngle'],['endAngle'],['anticlockwise']]);
			$cls_definition['arc'] = $method;
			$method = $pyjs__bind_method2('beginPath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['pathStr']['clear']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['beginPath'] = $method;
			$method = $pyjs__bind_method2('clear', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];

				self['pathStr']['clear']();
				$m['DOM']['setInnerHTML']($p['getattr'](self, 'parentElement'), '');
				return null;
			}
	, 1, [null,null,['self'],['width', $constant_int_0],['height', $constant_int_0]]);
			$cls_definition['clear'] = $method;
			$method = $pyjs__bind_method2('closePath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['pathStr']['append']($m['PathElement']['closePath']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['closePath'] = $method;
			$method = $pyjs__bind_method2('createElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', $m['VMLContext']()) : $p['setattr'](self, 'context', $m['VMLContext']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')) : $p['setattr'](self, 'matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')); 
				return self['createParentElement']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['createElement'] = $method;
			$method = $pyjs__bind_method2('createParentElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentElement', $m['DOM']['createElement']('div')) : $p['setattr'](self, 'parentElement', $m['DOM']['createElement']('div')); 
				$m['DOM']['setStyleAttribute']($p['getattr'](self, 'parentElement'), 'overflow', 'hidden');
				return $p['getattr'](self, 'parentElement');
			}
	, 1, [null,null,['self']]);
			$cls_definition['createParentElement'] = $method;
			$method = $pyjs__bind_method2('setFont', function(font) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					font = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['font']]);
			$cls_definition['setFont'] = $method;
			$method = $pyjs__bind_method2('cubicCurveTo', function(cp1x, cp1y, cp2x, cp2y, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					cp1x = arguments[1];
					cp1y = arguments[2];
					cp2x = arguments[3];
					cp2y = arguments[4];
					x = arguments[5];
					y = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['pathStr']['append']($m['PathElement']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y, self));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', y) : $p['setattr'](self, 'currentY', y); 
				return null;
			}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
			$cls_definition['cubicCurveTo'] = $method;
			$method = $pyjs__bind_method2('drawImage', function(img) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					img = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul4,$2,$3,sourceX,sourceY,$bool2,vmlStr,$bool1,$bool6,$bool4,$bool5,$len1,dX,dY,sourceHeight,$sub3,$len2,$len3,$sub2,$17,destWidth,sourceWidth,$div14,$div15,$div16,$div10,$div11,$div12,$div13,fullHeight,$8,$9,$6,$7,$4,$5,$mul3,$mul2,$mul1,$1,$14,$15,$16,$40,$10,$11,$12,$13,$18,$19,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$29,$28,$21,$20,$22,$25,$24,$27,$26,$sub8,destY,destX,$sub1,$sub7,$sub6,$sub5,$sub4,$or1,$bool3,$or2,fullWidth,$div8,$div9,$div2,$div3,$div1,$div6,$div7,$div4,$div5,$38,$39,$36,$37,$34,$35,$32,$33,$30,$31,destHeight,$23;
				if ((($bool1=$p['isinstance'](img, $m['Widget'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					img = img['getElement']();
				}
				fullWidth = $p['getattr'](img, 'width');
				fullHeight = $p['getattr'](img, 'height');
				if ((($bool2=$p['op_eq']((($len1=args) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), $constant_int_8)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					sourceX = (typeof ($1=args)['__array'] != 'undefined'?
						((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__']($constant_int_0));
					sourceY = (typeof ($3=args)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($constant_int_1));
					sourceWidth = (typeof ($5=args)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=$constant_int_2]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']($constant_int_2));
					sourceHeight = (typeof ($7=args)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=$constant_int_3]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__']($constant_int_3));
					destX = (typeof ($9=args)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=$constant_int_4]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__']($constant_int_4));
					destY = (typeof ($11=args)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=$constant_int_5]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__']($constant_int_5));
					destWidth = (typeof ($13=args)['__array'] != 'undefined'?
						((typeof $13['__array'][$14=$constant_int_6]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__']($constant_int_6));
					destHeight = (typeof ($15=args)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=$constant_int_7]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']($constant_int_7));
				}
				else if ((($bool3=$p['op_eq']((($len2=args) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))), $constant_int_4)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					sourceX = $constant_int_0;
					sourceY = $constant_int_0;
					sourceWidth = fullWidth;
					sourceHeight = fullHeight;
					destX = (typeof ($17=args)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=$constant_int_0]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__']($constant_int_0));
					destY = (typeof ($19=args)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=$constant_int_1]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__']($constant_int_1));
					destWidth = (typeof ($21=args)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=$constant_int_2]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__']($constant_int_2));
					destHeight = (typeof ($23=args)['__array'] != 'undefined'?
						((typeof $23['__array'][$24=$constant_int_3]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__']($constant_int_3));
				}
				else if ((($bool4=$p['op_eq']((($len3=args) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))), $constant_int_2)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					sourceX = $constant_int_0;
					sourceY = $constant_int_0;
					sourceWidth = fullWidth;
					sourceHeight = fullHeight;
					destX = (typeof ($25=args)['__array'] != 'undefined'?
						((typeof $25['__array'][$26=$constant_int_0]) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__']($constant_int_0));
					destY = (typeof ($27=args)['__array'] != 'undefined'?
						((typeof $27['__array'][$28=$constant_int_1]) != 'undefined'?$27['__array'][$28]:
							$27['__getitem__']($28)):
							$27['__getitem__']($constant_int_1));
					destWidth = fullWidth;
					destHeight = fullHeight;
				}
				vmlStr = $p['list']([]);
				vmlStr['append']('<v:group style="position:absolute;width:10;height:10;');
				dX = self['getCoordX']($p['getattr'](self, 'matrix'), destX, destY);
				dY = self['getCoordY']($p['getattr'](self, 'matrix'), destX, destY);
				if ((($bool6=((($bool5=$or1=!$p['op_eq']((typeof ($29=$p['getattr']($p['getattr'](self, 'context'), 'matrix'))['__array'] != 'undefined'?
					((typeof $29['__array'][$30=$constant_int_0]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__']($constant_int_0)), $constant_int_1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:!$p['op_eq']((typeof ($31=$p['getattr']($p['getattr'](self, 'context'), 'matrix'))['__array'] != 'undefined'?
					((typeof $31['__array'][$32=$constant_int_1]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__']($constant_int_1)), $constant_int_0))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					vmlStr['append']('padding-right:');
					vmlStr['append']((typeof ($add1=$p['str']($p['getattr'](self, 'parentWidth')))==typeof ($add2='px;') && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)));
					vmlStr['append']('padding-bottom:');
					vmlStr['append']((typeof ($add3=$p['str']($p['getattr'](self, 'parentHeight')))==typeof ($add4='px;') && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)));
					vmlStr['append']("filter:progid:DXImageTransform.Microsoft.Matrix(M11='");
					vmlStr['append']((typeof ($add5='')==typeof ($add6=$p['str']((typeof ($33=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
						((typeof $33['__array'][$34=$constant_int_0]) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__']($constant_int_0)))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)));
					vmlStr['append']("',");
					vmlStr['append']("M12='");
					vmlStr['append']((typeof ($add7='')==typeof ($add8=$p['str']((typeof ($35=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
						((typeof $35['__array'][$36=$constant_int_1]) != 'undefined'?$35['__array'][$36]:
							$35['__getitem__']($36)):
							$35['__getitem__']($constant_int_1)))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)));
					vmlStr['append']("',");
					vmlStr['append']("M21='");
					vmlStr['append']($p['str']((typeof ($37=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
						((typeof $37['__array'][$38=$constant_int_3]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__']($constant_int_3))));
					vmlStr['append']("',");
					vmlStr['append']("M22='");
					vmlStr['append']($p['str']((typeof ($39=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
						((typeof $39['__array'][$40=$constant_int_4]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__']($constant_int_4))));
					vmlStr['append']("',");
					vmlStr['append']("Dx='");
					vmlStr['append']($p['str']($m['math']['floor']((typeof ($div1=dX)==typeof ($div2=$constant_int_10) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)))));
					vmlStr['append']("',");
					vmlStr['append']("Dy='");
					vmlStr['append']($p['str']($m['math']['floor']((typeof ($div3=dY)==typeof ($div4=$constant_int_10) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)))));
					vmlStr['append']("', SizingMethod='clip');");
				}
				else {
					vmlStr['append']('left:');
					vmlStr['append']($p['sprintf']('%dpx;', $p['int']((typeof ($div5=dX)==typeof ($div6=$constant_int_10) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6)))));
					vmlStr['append']('top:');
					vmlStr['append']($p['sprintf']('%dpx', $p['int']((typeof ($div7=dY)==typeof ($div8=$constant_int_10) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)))));
				}
				vmlStr['append']('" coordsize="100,100" coordorigin="0,0"><v:image src="');
				vmlStr['append']($m['DOM']['getAttribute'](img, 'src'));
				vmlStr['append']('" style="');
				vmlStr['append']('width:');
				vmlStr['append']($p['str']($p['int']((typeof ($mul1=destWidth)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))));
				vmlStr['append'](';height:');
				vmlStr['append']($p['str']($p['int']((typeof ($mul3=destHeight)==typeof ($mul4=$constant_int_10) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))));
				vmlStr['append'](';" cropleft="');
				vmlStr['append']($p['str']((typeof ($div9=sourceX)==typeof ($div10=fullWidth) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))));
				vmlStr['append']('" croptop="');
				vmlStr['append']($p['str']((typeof ($div11=sourceY)==typeof ($div12=fullHeight) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12))));
				vmlStr['append']('" cropright="');
				vmlStr['append']($p['str']((typeof ($div13=(typeof ($sub3=(typeof ($sub1=fullWidth)==typeof ($sub2=sourceX) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))==typeof ($sub4=sourceWidth) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($div14=fullWidth) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))));
				vmlStr['append']('" cropbottom="');
				vmlStr['append']($p['str']((typeof ($div15=(typeof ($sub7=(typeof ($sub5=fullHeight)==typeof ($sub6=sourceY) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)))==typeof ($sub8=sourceHeight) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)))==typeof ($div16=fullHeight) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16))));
				vmlStr['append']('"/></v:group>');
				self['insert']('BeforeEnd', ''['join'](vmlStr));
				return null;
			}
	, 1, ['args',null,['self'],['img']]);
			$cls_definition['drawImage'] = $method;
			$method = $pyjs__bind_method2('appendGradient', function(style, shapeStr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					style = arguments[1];
					shapeStr = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var maxX,maxY,dx,dy,$iter1_iter,cs,colors,$iter2_type,$mul9,colorStops,$add21,$add20,$add22,$len4,minX,minY,$sub9,$48,$iter1_array,$43,$42,$41,$47,$46,$45,$44,$mul8,$iter1_nextval,focusX,focusY,$sub13,$sub12,$sub11,$sub10,$sub14,$add14,$add15,$add16,$add17,$add10,$bool7,$add12,$add13,$mul7,$mul6,$mul5,$add18,$add19,$mul12,$iter2_nextval,stopPosn,$iter1_type,$mul11,$mul10,i,fillLength,$iter2_idx,$iter2_iter,$len6,length,$len5,$iter1_idx,$add9,$iter2_array,$add11;
				colorStops = $p['getattr']($p['getattr'](style, 'gradient'), 'colorStops');
				length = (($len4=colorStops) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4)))));
				shapeStr['append']('" color="');
				shapeStr['append']($p['str']($p['getattr']((typeof ($41=colorStops)['__array'] != 'undefined'?
					((typeof $41['__array'][$42=$constant_int_0]) != 'undefined'?$41['__array'][$42]:
						$41['__getitem__']($42)):
						$41['__getitem__']($constant_int_0)), 'color')));
				shapeStr['append']('" color2="');
				shapeStr['append']($p['str']($p['getattr']((typeof ($43=colorStops)['__array'] != 'undefined'?
					((typeof $43['__array'][$44=(typeof ($sub9=length)==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10))]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__']((typeof ($sub9=length)==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)))), 'color')));
				shapeStr['append']('" type="');
				shapeStr['append']($p['getattr']($p['getattr'](style, 'gradient'), 'type'));
				if ((($bool7=$p['op_eq']($p['getattr']($p['getattr'](style, 'gradient'), 'type'), 'gradient')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					colors = '';
					$iter1_iter = $p['range']($constant_int_1, (($len5=colorStops) === null?$constant_int_0:
						(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
							(typeof $len5['__len__'] == 'function'?$len5['__len__']():
								(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
									$p['len']($len5))))));
					if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter['__iter__']();
						$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						i = $iter1_nextval;
						cs = (typeof ($45=colorStops)['__array'] != 'undefined'?
							((typeof $45['__array'][$46=i]) != 'undefined'?$45['__array'][$46]:
								$45['__getitem__']($46)):
								$45['__getitem__'](i));
						stopPosn = $p['getattr'](cs, 'offset');
						colors = (typeof ($add9=colors)==typeof ($add10=$p['sprintf']('%d%%', $p['int']((typeof ($mul5=stopPosn)==typeof ($mul6=$constant_int_100) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6))))) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10));
						colors = (typeof ($add13=colors)==typeof ($add14=(typeof ($add11=$p['str']($p['getattr'](cs, 'color')))==typeof ($add12=',') && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12))) && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14));
					}
					shapeStr['append']('" colors="');
					shapeStr['append'](colors);
				}
				else {
					minX = self['pathStr']['getMinCoordX']();
					maxX = self['pathStr']['getMaxCoordX']();
					minY = self['pathStr']['getMinCoordY']();
					maxY = self['pathStr']['getMaxCoordY']();
					dx = (typeof ($sub11=maxX)==typeof ($sub12=minX) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12));
					dy = (typeof ($sub13=maxY)==typeof ($sub14=minY) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14));
					fillLength = $m['math']['sqrt']((typeof ($add15=(typeof ($mul7=dx)==typeof ($mul8=dx) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)))==typeof ($add16=(typeof ($mul9=dy)==typeof ($mul10=dy) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)));
					focusX = $constant_int_50;
					focusY = $constant_int_50;
					colors = '';
					$iter2_iter = $p['range']($constant_int_1, (($len6=colorStops) === null?$constant_int_0:
						(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
							(typeof $len6['__len__'] == 'function'?$len6['__len__']():
								(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
									$p['len']($len6))))));
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						i = $iter2_nextval;
						cs = (typeof ($47=colorStops)['__array'] != 'undefined'?
							((typeof $47['__array'][$48=i]) != 'undefined'?$47['__array'][$48]:
								$47['__getitem__']($48)):
								$47['__getitem__'](i));
						stopPosn = $p['getattr'](cs, 'offset');
						colors = (typeof ($add17=colors)==typeof ($add18=$p['sprintf']('%d%%', $p['int']((typeof ($mul11=stopPosn)==typeof ($mul12=$constant_int_100) && typeof $mul11=='number'?
							$mul11*$mul12:
							$p['op_mul']($mul11,$mul12))))) && (typeof $add17=='number'||typeof $add17=='string')?
							$add17+$add18:
							$p['op_add']($add17,$add18));
						colors = (typeof ($add21=colors)==typeof ($add22=(typeof ($add19=$p['str']($p['getattr'](cs, 'color')))==typeof ($add20=',') && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20))) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22));
					}
					shapeStr['append']('" colors="');
					shapeStr['append'](colors);
					shapeStr['append']('" focusposition="');
					shapeStr['append']($p['str'](focusX));
					shapeStr['append']('%,');
					shapeStr['append']($p['str'](focusY));
					shapeStr['append']('%,');
				}
				shapeStr['append']('" angle="');
				shapeStr['append']($p['str']($p['getattr']($p['getattr'](style, 'gradient'), 'angle')));
				return null;
			}
	, 1, [null,null,['self'],['style'],['shapeStr']]);
			$cls_definition['appendGradient'] = $method;
			$method = $pyjs__bind_method2('appendStroke', function(shapeStr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					shapeStr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul14,$mul13,$cmp2,$len7,$cmp1,$bool8,$bool9;
				shapeStr['append']('<v:stroke opacity="');
				shapeStr['append']($p['str']((typeof ($mul13=$p['getattr']($p['getattr'](self, 'context'), 'globalAlpha'))==typeof ($mul14=$p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'alpha')) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))));
				shapeStr['append']('"');
				if ((($bool8=$p['op_eq']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'type'), 'Gradient')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					if ((($bool9=((($cmp1=(($len7=$p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'gradient'), 'colorStops')) === null?$constant_int_0:
						(typeof $len7['__array'] != 'undefined' ? new $p['int']($len7['__array']['length']):
							(typeof $len7['__len__'] == 'function'?$len7['__len__']():
								(typeof $len7['length'] != 'undefined'? new $p['int']($len7['length']):
									$p['len']($len7))))))===($cmp2=$constant_int_0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						self['appendGradient']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), shapeStr);
					}
				}
				else {
					shapeStr['append'](' color="');
					shapeStr['append']($p['str']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'color')));
				}
				shapeStr['append']('" miterlimit="');
				shapeStr['append']($p['str']($p['getattr']($p['getattr'](self, 'context'), 'miterLimit')));
				shapeStr['append']('" joinstyle="');
				shapeStr['append']($p['getattr']($p['getattr'](self, 'context'), 'lineJoin'));
				shapeStr['append']('" endcap="');
				shapeStr['append']($p['getattr']($p['getattr'](self, 'context'), 'lineCap'));
				shapeStr['append']('"></v:stroke>');
				return null;
			}
	, 1, [null,null,['self'],['shapeStr']]);
			$cls_definition['appendStroke'] = $method;
			$method = $pyjs__bind_method2('appendFill', function(shapeStr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					shapeStr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul16,$mul15,$cmp3,$cmp4,$bool10,$bool11,$len8;
				shapeStr['append']('<v:fill opacity="');
				shapeStr['append']($p['str']((typeof ($mul15=$p['getattr']($p['getattr'](self, 'context'), 'globalAlpha'))==typeof ($mul16=$p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'alpha')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))));
				shapeStr['append']('"');
				if ((($bool10=$p['op_eq']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'type'), 'Gradient')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					if ((($bool11=((($cmp3=(($len8=$p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'gradient'), 'colorStops')) === null?$constant_int_0:
						(typeof $len8['__array'] != 'undefined' ? new $p['int']($len8['__array']['length']):
							(typeof $len8['__len__'] == 'function'?$len8['__len__']():
								(typeof $len8['length'] != 'undefined'? new $p['int']($len8['length']):
									$p['len']($len8))))))===($cmp4=$constant_int_0)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
							false :
							(typeof $bool11=='object'?
								(typeof $bool11['__nonzero__']=='function'?
									$bool11['__nonzero__']() :
									(typeof $bool11['__len__']=='function'?
										($bool11['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['appendGradient']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), shapeStr);
					}
				}
				else {
					shapeStr['append'](' color="');
					shapeStr['append']($p['str']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'color')));
				}
				shapeStr['append']('"></v:fill>');
				return null;
			}
	, 1, [null,null,['self'],['shapeStr']]);
			$cls_definition['appendFill'] = $method;
			$method = $pyjs__bind_method2('fill', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var shapeStr,daStr,$bool12,$len9;
				if ((($bool12=$p['op_eq']((($len9=$p['getattr'](self, 'pathStr')) === null?$constant_int_0:
					(typeof $len9['__array'] != 'undefined' ? new $p['int']($len9['__array']['length']):
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'? new $p['int']($len9['length']):
								$p['len']($len9))))), $constant_int_0)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					return null;
				}
				shapeStr = $p['list']([]);
				shapeStr['append']('<v:shape style="position:absolute;width:10;height:10;" coordsize="100,100');
				shapeStr['append']('" stroked="f" path="');
				shapeStr['append'](self['pathStr']['join']());
				shapeStr['append'](' e">');
				self['appendFill'](shapeStr);
				shapeStr['append']('</v:shape>');
				daStr = ''['join'](shapeStr);
				self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['fill'] = $method;
			$method = $pyjs__bind_method2('stroke', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len10,shapeStr,$bool13,daStr;
				if ((($bool13=$p['op_eq']((($len10=$p['getattr'](self, 'pathStr')) === null?$constant_int_0:
					(typeof $len10['__array'] != 'undefined' ? new $p['int']($len10['__array']['length']):
						(typeof $len10['__len__'] == 'function'?$len10['__len__']():
							(typeof $len10['length'] != 'undefined'? new $p['int']($len10['length']):
								$p['len']($len10))))), $constant_int_0)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					return null;
				}
				shapeStr = $p['list']([]);
				shapeStr['append']('<v:shape style="position:absolute;');
				shapeStr['append']('width:10; height:10;');
				shapeStr['append']('" coordsize="100,100');
				shapeStr['append']('" filled="f');
				shapeStr['append']('" stroked="t');
				shapeStr['append']('" strokeweight="');
				shapeStr['append']($p['str']($p['getattr']($p['getattr'](self, 'context'), 'lineWidth')));
				shapeStr['append']('px" path="');
				shapeStr['append'](self['pathStr']['join']());
				shapeStr['append'](' e">');
				self['appendStroke'](shapeStr);
				shapeStr['append']('<v:shape>');
				daStr = ''['join'](shapeStr);
				self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stroke'] = $method;
			$method = $pyjs__bind_method2('fillRect', function(x, y, w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					w = arguments[3];
					h = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add25,$add24,$add26,$add23;
				w = (typeof ($add23=w)==typeof ($add24=x) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
				h = (typeof ($add25=h)==typeof ($add26=y) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
				self['beginPath']();
				self['moveTo'](x, y);
				self['lineTo'](x, h);
				self['lineTo'](w, h);
				self['lineTo'](w, y);
				self['closePath']();
				self['fill']();
				self['pathStr']['clear']();
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['fillRect'] = $method;
			$method = $pyjs__bind_method2('getContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'context');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getContext'] = $method;
			$method = $pyjs__bind_method2('getCoordX', function(matrix, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add29,$add28,$div18,$div17,$add27,$49,$mul22,$mul20,$mul21,$sub16,$sub15,coordX,$mul17,$add30,$mul19,$mul18,$50,$51,$52,$53,$54;
				coordX = $p['int']($m['math']['floor']($m['math']['floor']((typeof ($sub15=(typeof ($mul21=$constant_int_10)==typeof ($mul22=(typeof ($add29=(typeof ($add27=(typeof ($mul17=(typeof ($49=matrix)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=$constant_int_0]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__']($constant_int_0)))==typeof ($mul18=x) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))==typeof ($add28=(typeof ($mul19=(typeof ($51=matrix)['__array'] != 'undefined'?
					((typeof $51['__array'][$52=$constant_int_1]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__']($constant_int_1)))==typeof ($mul20=y) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28)))==typeof ($add30=(typeof ($53=matrix)['__array'] != 'undefined'?
					((typeof $53['__array'][$54=$constant_int_2]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__']($constant_int_2))) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30))) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)))==typeof ($sub16=4.5) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16)))));
				self['pathStr']['logCoordX']((typeof ($div17=coordX)==typeof ($div18=$constant_int_10) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)));
				return coordX;
			}
	, 1, [null,null,['self'],['matrix'],['x'],['y']]);
			$cls_definition['getCoordX'] = $method;
			$method = $pyjs__bind_method2('getCoordY', function(matrix, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					matrix = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul28,$mul26,$mul27,$mul24,$mul25,$60,$sub18,$sub17,coordY,$div19,$div20,$add32,$add33,$add31,$add34,$mul23,$58,$59,$55,$56,$57;
				coordY = $p['int']($m['math']['floor']($m['math']['floor']((typeof ($sub17=(typeof ($mul27=$constant_int_10)==typeof ($mul28=(typeof ($add33=(typeof ($add31=(typeof ($mul23=(typeof ($55=matrix)['__array'] != 'undefined'?
					((typeof $55['__array'][$56=$constant_int_3]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__']($constant_int_3)))==typeof ($mul24=x) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)))==typeof ($add32=(typeof ($mul25=(typeof ($57=matrix)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=$constant_int_4]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__']($constant_int_4)))==typeof ($mul26=y) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32)))==typeof ($add34=(typeof ($59=matrix)['__array'] != 'undefined'?
					((typeof $59['__array'][$60=$constant_int_5]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__']($constant_int_5))) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34))) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)))==typeof ($sub18=4.5) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18)))));
				self['pathStr']['logCoordY']((typeof ($div19=coordY)==typeof ($div20=$constant_int_10) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20)));
				return coordY;
			}
	, 1, [null,null,['self'],['matrix'],['x'],['y']]);
			$cls_definition['getCoordY'] = $method;
			$method = $pyjs__bind_method2('getFillStyle', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'context'), 'fillStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFillStyle'] = $method;
			$method = $pyjs__bind_method2('getGlobalAlpha', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'context'), 'globalAlpha');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalAlpha'] = $method;
			$method = $pyjs__bind_method2('getGlobalCompositeOperation', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool14;
				if ((($bool14=$p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), $m['DESTINATION_OVER'])) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					return $p['getattr']($m['GWTCanvasConsts'], 'DESTINATION_OVER');
				}
				else {
					return $p['getattr']($m['GWTCanvasConsts'], 'SOURCE_OVER');
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalCompositeOperation'] = $method;
			$method = $pyjs__bind_method2('getLineCap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool15;
				if ((($bool15=$p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'lineCap'), $m['BUTT'])) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					return $p['getattr']($m['GWTCanvasConsts'], 'BUTT');
				}
				return $p['getattr']($p['getattr'](self, 'context'), 'lineCap');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineCap'] = $method;
			$method = $pyjs__bind_method2('getLineJoin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'context'), 'lineJoin');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineJoin'] = $method;
			$method = $pyjs__bind_method2('getLineWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'context'), 'lineWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineWidth'] = $method;
			$method = $pyjs__bind_method2('getMiterLimit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'context'), 'miterLimit');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMiterLimit'] = $method;
			$method = $pyjs__bind_method2('getStrokeStyle', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getStrokeStyle'] = $method;
			$method = $pyjs__bind_method2('lineTo', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['pathStr']['append']($m['PathElement']['lineTo'](x, y, self));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', y) : $p['setattr'](self, 'currentY', y); 
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['lineTo'] = $method;
			$method = $pyjs__bind_method2('moveTo', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['pathStr']['append']($m['PathElement']['moveTo'](x, y, self));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', y) : $p['setattr'](self, 'currentY', y); 
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['moveTo'] = $method;
			$method = $pyjs__bind_method2('quadraticCurveTo', function(cpx, cpy, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					cpx = arguments[1];
					cpy = arguments[2];
					x = arguments[3];
					y = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$sub23,$sub20,$sub21,$sub26,$sub24,$sub25,cp2y,cp2x,$add42,$add41,$add40,$mul29,$add39,$sub19,$add38,cp1x,cp1y,$div21,$div23,$div22,$div25,$div24,$div27,$div26,$div28,$add36,$add37,$add35,$mul31,$mul30,$mul32;
				cp1x = (typeof ($add35=$p['getattr'](self, 'currentX'))==typeof ($add36=(typeof ($mul29=(typeof ($div21=2.0)==typeof ($div22=3.0) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22)))==typeof ($mul30=(typeof ($sub19=cpx)==typeof ($sub20=$p['getattr'](self, 'currentX')) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20))) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36));
				cp1y = (typeof ($add37=$p['getattr'](self, 'currentY'))==typeof ($add38=(typeof ($mul31=(typeof ($div23=2.0)==typeof ($div24=3.0) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24)))==typeof ($mul32=(typeof ($sub21=cpy)==typeof ($sub22=$p['getattr'](self, 'currentY')) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22))) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38));
				cp2x = (typeof ($add39=cp1x)==typeof ($add40=(typeof ($div25=(typeof ($sub23=x)==typeof ($sub24=$p['getattr'](self, 'currentX')) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24)))==typeof ($div26=3.0) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26))) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40));
				cp2y = (typeof ($add41=cp1y)==typeof ($add42=(typeof ($div27=(typeof ($sub25=y)==typeof ($sub26=$p['getattr'](self, 'currentY')) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26)))==typeof ($div28=3.0) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28))) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42));
				self['pathStr']['append']($m['PathElement']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y, self));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', y) : $p['setattr'](self, 'currentY', y); 
				return null;
			}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
			$cls_definition['quadraticCurveTo'] = $method;
			$method = $pyjs__bind_method2('rect', function(x, y, w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					w = arguments[3];
					h = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add50,$add51,$add52,$add49,$add48,$add47,$add44,$add43,$add46,$add45;
				self['pathStr']['append']($m['PathElement']['moveTo'](x, y, self));
				self['pathStr']['append']($m['PathElement']['lineTo']((typeof ($add43=x)==typeof ($add44=w) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44)), y, self));
				self['pathStr']['append']($m['PathElement']['lineTo']((typeof ($add45=x)==typeof ($add46=w) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$p['op_add']($add45,$add46)), (typeof ($add47=y)==typeof ($add48=h) && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$p['op_add']($add47,$add48)), self));
				self['pathStr']['append']($m['PathElement']['lineTo'](x, (typeof ($add49=y)==typeof ($add50=h) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50)), self));
				self['pathStr']['append']($m['PathElement']['closePath']());
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', x) : $p['setattr'](self, 'currentX', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', (typeof ($add51=y)==typeof ($add52=h) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52))) : $p['setattr'](self, 'currentY', (typeof ($add51=y)==typeof ($add52=h) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52))); 
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['rect'] = $method;
			$method = $pyjs__bind_method2('restoreContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$len11,$cmp6,$bool16;
				if ((($bool16=((($cmp5=(($len11=$p['getattr'](self, 'contextStack')) === null?$constant_int_0:
					(typeof $len11['__array'] != 'undefined' ? new $p['int']($len11['__array']['length']):
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'? new $p['int']($len11['length']):
								$p['len']($len11))))))===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', self['contextStack']['pop']()) : $p['setattr'](self, 'context', self['contextStack']['pop']()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')) : $p['setattr'](self, 'matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')); 
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['restoreContext'] = $method;
			$method = $pyjs__bind_method2('rotate', function(angle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					angle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub27,$sub28,$sub29,$mul44,$mul45,$mul47,$mul40,$mul41,$mul42,$mul43,m1,$68,m2,$65,$64,$67,$66,$61,$63,$62,$sub30,$add53,$mul48,a,c,b,$add54,$add55,$add56,s,$mul39,$mul38,$mul35,$mul34,$mul37,$mul36,$mul46,$mul33;
				s = $m['math']['sin']((typeof ($usub1=angle)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				c = $m['math']['cos']((typeof ($usub2=angle)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				a = (typeof ($61=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $61['__array'][$62=$constant_int_0]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__']($constant_int_0));
				b = (typeof ($63=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $63['__array'][$64=$constant_int_1]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__']($constant_int_1));
				m1 = (typeof ($mul33=a)==typeof ($mul34=c) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34));
				m2 = (typeof ($mul35=b)==typeof ($mul36=s) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36));
				$p['getattr'](self, 'matrix')['__setitem__']($constant_int_0, (typeof ($sub27=m1)==typeof ($sub28=m2) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					$p['op_sub']($sub27,$sub28)));
				m1 = (typeof ($mul37=a)==typeof ($mul38=s) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38));
				m2 = (typeof ($mul39=b)==typeof ($mul40=c) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40));
				$p['getattr'](self, 'matrix')['__setitem__']($constant_int_1, (typeof ($add53=m1)==typeof ($add54=m2) && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					$p['op_add']($add53,$add54)));
				a = (typeof ($65=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $65['__array'][$66=$constant_int_3]) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__']($constant_int_3));
				b = (typeof ($67=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $67['__array'][$68=$constant_int_4]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__']($constant_int_4));
				m1 = (typeof ($mul41=a)==typeof ($mul42=c) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42));
				m2 = (typeof ($mul43=b)==typeof ($mul44=s) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44));
				$p['getattr'](self, 'matrix')['__setitem__']($constant_int_3, (typeof ($sub29=m1)==typeof ($sub30=m2) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30)));
				m1 = (typeof ($mul45=a)==typeof ($mul46=s) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46));
				m2 = (typeof ($mul47=b)==typeof ($mul48=c) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48));
				$p['getattr'](self, 'matrix')['__setitem__']($constant_int_4, (typeof ($add55=m1)==typeof ($add56=m2) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56)));
				return null;
			}
	, 1, [null,null,['self'],['angle']]);
			$cls_definition['rotate'] = $method;
			$method = $pyjs__bind_method2('saveContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['contextStack']['append']($p['getattr'](self, 'context'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('context', $m['VMLContext']($p['getattr'](self, 'context'))) : $p['setattr'](self, 'context', $m['VMLContext']($p['getattr'](self, 'context'))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')) : $p['setattr'](self, 'matrix', $p['getattr']($p['getattr'](self, 'context'), 'matrix')); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['saveContext'] = $method;
			$method = $pyjs__bind_method2('scale', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul60,$mul49,$69,$augexpr1,$augexpr3,$augexpr2,$augexpr4,$augsub4,$augsub3,$augsub2,$augsub1,$mul59,$mul58,$72,$73,$70,$71,$76,$74,$75,$mul53,$mul52,$mul51,$mul50,$mul57,$mul56,$mul55,$mul54;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('arcScaleX', (typeof ($mul49=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleX'))==typeof ($mul50=x) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50))) : $p['setattr']($p['getattr'](self, 'context'), 'arcScaleX', (typeof ($mul49=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleX'))==typeof ($mul50=x) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50))); 
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('arcScaleY', (typeof ($mul51=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleY'))==typeof ($mul52=y) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52))) : $p['setattr']($p['getattr'](self, 'context'), 'arcScaleY', (typeof ($mul51=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleY'))==typeof ($mul52=y) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52))); 
				var $augsub1 = $constant_int_0;
				var $augexpr1 = $p['getattr'](self, 'matrix');
				$augexpr1['__setitem__']($augsub1, (typeof ($mul53=(typeof ($69=$augexpr1)['__array'] != 'undefined'?
					((typeof $69['__array'][$70=$augsub1]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__']($augsub1)))==typeof ($mul54=x) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54)));
				var $augsub2 = $constant_int_1;
				var $augexpr2 = $p['getattr'](self, 'matrix');
				$augexpr2['__setitem__']($augsub2, (typeof ($mul55=(typeof ($71=$augexpr2)['__array'] != 'undefined'?
					((typeof $71['__array'][$72=$augsub2]) != 'undefined'?$71['__array'][$72]:
						$71['__getitem__']($72)):
						$71['__getitem__']($augsub2)))==typeof ($mul56=y) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56)));
				var $augsub3 = $constant_int_3;
				var $augexpr3 = $p['getattr'](self, 'matrix');
				$augexpr3['__setitem__']($augsub3, (typeof ($mul57=(typeof ($73=$augexpr3)['__array'] != 'undefined'?
					((typeof $73['__array'][$74=$augsub3]) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__']($augsub3)))==typeof ($mul58=x) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)));
				var $augsub4 = $constant_int_4;
				var $augexpr4 = $p['getattr'](self, 'matrix');
				$augexpr4['__setitem__']($augsub4, (typeof ($mul59=(typeof ($75=$augexpr4)['__array'] != 'undefined'?
					((typeof $75['__array'][$76=$augsub4]) != 'undefined'?$75['__array'][$76]:
						$75['__getitem__']($76)):
						$75['__getitem__']($augsub4)))==typeof ($mul60=y) && typeof $mul59=='number'?
					$mul59*$mul60:
					$p['op_mul']($mul59,$mul60)));
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['scale'] = $method;
			$method = $pyjs__bind_method2('setBackgroundColor', function(element, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['setStyleAttribute'](element, 'backgroundColor', color);
				return null;
			}
	, 1, [null,null,['self'],['element'],['color']]);
			$cls_definition['setBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('setCoordHeight', function(elem, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['setElemAttribute'](elem, 'width', $p['int'](height));
				self['clear']($constant_int_0, $constant_int_0);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['height']]);
			$cls_definition['setCoordHeight'] = $method;
			$method = $pyjs__bind_method2('setCoordWidth', function(elem, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					width = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['setElemAttribute'](elem, 'width', $p['int'](width));
				self['clear']($constant_int_0, $constant_int_0);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['width']]);
			$cls_definition['setCoordWidth'] = $method;
			$method = $pyjs__bind_method2('setCurrentX', function(currentX) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					currentX = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentX', currentX) : $p['setattr'](self, 'currentX', currentX); 
				return null;
			}
	, 1, [null,null,['self'],['currentX']]);
			$cls_definition['setCurrentX'] = $method;
			$method = $pyjs__bind_method2('setCurrentY', function(currentY) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					currentY = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentY', currentY) : $p['setattr'](self, 'currentY', currentY); 
				return null;
			}
	, 1, [null,null,['self'],['currentY']]);
			$cls_definition['setCurrentY'] = $method;
			$method = $pyjs__bind_method2('setFillStyle', function(fillStyle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					fillStyle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$bool17,$add65,$add64,$add67,$add66,end,$add60,$add63,$add62,guts,$add68,$bool20,$84,$83,$82,$81,$80,$add61,$cmp7,$77,$add57,$add58,$add59,$78,$79,$cmp8,$len12;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('fillStyle', $m['VMLStyle']()) : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', $m['VMLStyle']()); 
				if ((($bool17=$p['isinstance'](fillStyle, $m['CanvasGradientImplIE6'])) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17['__nonzero__']=='function'?
								$bool17['__nonzero__']() :
								(typeof $bool17['__len__']=='function'?
									($bool17['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('type', 'Gradient') : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'type', 'Gradient'); 
					$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('gradient', fillStyle) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'gradient', fillStyle); 
				}
				else {
					fillStyle = $p['str'](fillStyle)['strip']();
					if ((($bool18=fillStyle['startswith']('rgba(')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						end = fillStyle['find'](')', $constant_int_12);
						if ((($bool19=((($cmp7=end)===($cmp8=(typeof ($usub3=$constant_int_1)=='number'?
							-$usub3:
							$p['op_usub']($usub3)))?0:
							(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
								($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
								$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
							guts = $p['__getslice'](fillStyle, $constant_int_5, end)['$$split'](',');
							if ((($bool20=$p['op_eq']((($len12=guts) === null?$constant_int_0:
								(typeof $len12['__array'] != 'undefined' ? new $p['int']($len12['__array']['length']):
									(typeof $len12['__len__'] == 'function'?$len12['__len__']():
										(typeof $len12['length'] != 'undefined'? new $p['int']($len12['length']):
											$p['len']($len12))))), $constant_int_4)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
								$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('alpha', $p['float']((typeof ($77=guts)['__array'] != 'undefined'?
									((typeof $77['__array'][$78=$constant_int_3]) != 'undefined'?$77['__array'][$78]:
										$77['__getitem__']($78)):
										$77['__getitem__']($constant_int_3)))) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'alpha', $p['float']((typeof ($77=guts)['__array'] != 'undefined'?
									((typeof $77['__array'][$78=$constant_int_3]) != 'undefined'?$77['__array'][$78]:
										$77['__getitem__']($78)):
										$77['__getitem__']($constant_int_3)))); 
								$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('color', (typeof ($add67=(typeof ($add65=(typeof ($add63=(typeof ($add61=(typeof ($add59=(typeof ($add57='rgb(')==typeof ($add58=(typeof ($79=guts)['__array'] != 'undefined'?
									((typeof $79['__array'][$80=$constant_int_0]) != 'undefined'?$79['__array'][$80]:
										$79['__getitem__']($80)):
										$79['__getitem__']($constant_int_0))) && (typeof $add57=='number'||typeof $add57=='string')?
									$add57+$add58:
									$p['op_add']($add57,$add58)))==typeof ($add60=',') && (typeof $add59=='number'||typeof $add59=='string')?
									$add59+$add60:
									$p['op_add']($add59,$add60)))==typeof ($add62=(typeof ($81=guts)['__array'] != 'undefined'?
									((typeof $81['__array'][$82=$constant_int_1]) != 'undefined'?$81['__array'][$82]:
										$81['__getitem__']($82)):
										$81['__getitem__']($constant_int_1))) && (typeof $add61=='number'||typeof $add61=='string')?
									$add61+$add62:
									$p['op_add']($add61,$add62)))==typeof ($add64=',') && (typeof $add63=='number'||typeof $add63=='string')?
									$add63+$add64:
									$p['op_add']($add63,$add64)))==typeof ($add66=(typeof ($83=guts)['__array'] != 'undefined'?
									((typeof $83['__array'][$84=$constant_int_2]) != 'undefined'?$83['__array'][$84]:
										$83['__getitem__']($84)):
										$83['__getitem__']($constant_int_2))) && (typeof $add65=='number'||typeof $add65=='string')?
									$add65+$add66:
									$p['op_add']($add65,$add66)))==typeof ($add68=')') && (typeof $add67=='number'||typeof $add67=='string')?
									$add67+$add68:
									$p['op_add']($add67,$add68))) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'color', (typeof ($add67=(typeof ($add65=(typeof ($add63=(typeof ($add61=(typeof ($add59=(typeof ($add57='rgb(')==typeof ($add58=(typeof ($79=guts)['__array'] != 'undefined'?
									((typeof $79['__array'][$80=$constant_int_0]) != 'undefined'?$79['__array'][$80]:
										$79['__getitem__']($80)):
										$79['__getitem__']($constant_int_0))) && (typeof $add57=='number'||typeof $add57=='string')?
									$add57+$add58:
									$p['op_add']($add57,$add58)))==typeof ($add60=',') && (typeof $add59=='number'||typeof $add59=='string')?
									$add59+$add60:
									$p['op_add']($add59,$add60)))==typeof ($add62=(typeof ($81=guts)['__array'] != 'undefined'?
									((typeof $81['__array'][$82=$constant_int_1]) != 'undefined'?$81['__array'][$82]:
										$81['__getitem__']($82)):
										$81['__getitem__']($constant_int_1))) && (typeof $add61=='number'||typeof $add61=='string')?
									$add61+$add62:
									$p['op_add']($add61,$add62)))==typeof ($add64=',') && (typeof $add63=='number'||typeof $add63=='string')?
									$add63+$add64:
									$p['op_add']($add63,$add64)))==typeof ($add66=(typeof ($83=guts)['__array'] != 'undefined'?
									((typeof $83['__array'][$84=$constant_int_2]) != 'undefined'?$83['__array'][$84]:
										$83['__getitem__']($84)):
										$83['__getitem__']($constant_int_2))) && (typeof $add65=='number'||typeof $add65=='string')?
									$add65+$add66:
									$p['op_add']($add65,$add66)))==typeof ($add68=')') && (typeof $add67=='number'||typeof $add67=='string')?
									$add67+$add68:
									$p['op_add']($add67,$add68))); 
							}
						}
					}
					else {
						$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['__setattr__']('color', fillStyle) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'color', fillStyle); 
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['fillStyle']]);
			$cls_definition['setFillStyle'] = $method;
			$method = $pyjs__bind_method2('setStrokeStyle', function(strokeStyle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					strokeStyle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add80,$90,$91,$92,end,guts,$add69,$bool24,$bool21,$bool23,$bool22,$89,$88,$87,$86,$85,$add75,$cmp10,$add76,$add77,$add74,$len13,$add72,$add73,$add70,$add71,$cmp9,$add78,$add79;
				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('strokeStyle', $m['VMLStyle']()) : $p['setattr']($p['getattr'](self, 'context'), 'strokeStyle', $m['VMLStyle']()); 
				if ((($bool21=$p['isinstance'](strokeStyle, $m['CanvasGradientImplIE6'])) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21['__nonzero__']=='function'?
								$bool21['__nonzero__']() :
								(typeof $bool21['__len__']=='function'?
									($bool21['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__']('type', 'Gradient') : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'type', 'Gradient'); 
					$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__']('gradient', strokeStyle) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'gradient', strokeStyle); 
				}
				else {
					strokeStyle = $p['str'](strokeStyle)['strip']();
					if ((($bool22=strokeStyle['startswith']('rgba(')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						end = strokeStyle['find'](')', $constant_int_12);
						if ((($bool23=((($cmp9=end)===($cmp10=(typeof ($usub4=$constant_int_1)=='number'?
							-$usub4:
							$p['op_usub']($usub4)))?0:
							(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
								($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
								$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
							guts = $p['__getslice'](strokeStyle, $constant_int_5, end)['$$split'](',');
							if ((($bool24=$p['op_eq']((($len13=guts) === null?$constant_int_0:
								(typeof $len13['__array'] != 'undefined' ? new $p['int']($len13['__array']['length']):
									(typeof $len13['__len__'] == 'function'?$len13['__len__']():
										(typeof $len13['length'] != 'undefined'? new $p['int']($len13['length']):
											$p['len']($len13))))), $constant_int_4)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
									false :
									(typeof $bool24=='object'?
										(typeof $bool24['__nonzero__']=='function'?
											$bool24['__nonzero__']() :
											(typeof $bool24['__len__']=='function'?
												($bool24['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								$p['getattr']($p['getattr'](self, 'context'), 'stokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'stokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'stokeStyle')['__setattr__']('alpha', $p['float']((typeof ($85=guts)['__array'] != 'undefined'?
									((typeof $85['__array'][$86=$constant_int_3]) != 'undefined'?$85['__array'][$86]:
										$85['__getitem__']($86)):
										$85['__getitem__']($constant_int_3)))) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'stokeStyle'), 'alpha', $p['float']((typeof ($85=guts)['__array'] != 'undefined'?
									((typeof $85['__array'][$86=$constant_int_3]) != 'undefined'?$85['__array'][$86]:
										$85['__getitem__']($86)):
										$85['__getitem__']($constant_int_3)))); 
								$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__']('color', (typeof ($add79=(typeof ($add77=(typeof ($add75=(typeof ($add73=(typeof ($add71=(typeof ($add69='rgb(')==typeof ($add70=(typeof ($87=guts)['__array'] != 'undefined'?
									((typeof $87['__array'][$88=$constant_int_0]) != 'undefined'?$87['__array'][$88]:
										$87['__getitem__']($88)):
										$87['__getitem__']($constant_int_0))) && (typeof $add69=='number'||typeof $add69=='string')?
									$add69+$add70:
									$p['op_add']($add69,$add70)))==typeof ($add72=',') && (typeof $add71=='number'||typeof $add71=='string')?
									$add71+$add72:
									$p['op_add']($add71,$add72)))==typeof ($add74=(typeof ($89=guts)['__array'] != 'undefined'?
									((typeof $89['__array'][$90=$constant_int_1]) != 'undefined'?$89['__array'][$90]:
										$89['__getitem__']($90)):
										$89['__getitem__']($constant_int_1))) && (typeof $add73=='number'||typeof $add73=='string')?
									$add73+$add74:
									$p['op_add']($add73,$add74)))==typeof ($add76=',') && (typeof $add75=='number'||typeof $add75=='string')?
									$add75+$add76:
									$p['op_add']($add75,$add76)))==typeof ($add78=(typeof ($91=guts)['__array'] != 'undefined'?
									((typeof $91['__array'][$92=$constant_int_2]) != 'undefined'?$91['__array'][$92]:
										$91['__getitem__']($92)):
										$91['__getitem__']($constant_int_2))) && (typeof $add77=='number'||typeof $add77=='string')?
									$add77+$add78:
									$p['op_add']($add77,$add78)))==typeof ($add80=')') && (typeof $add79=='number'||typeof $add79=='string')?
									$add79+$add80:
									$p['op_add']($add79,$add80))) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'color', (typeof ($add79=(typeof ($add77=(typeof ($add75=(typeof ($add73=(typeof ($add71=(typeof ($add69='rgb(')==typeof ($add70=(typeof ($87=guts)['__array'] != 'undefined'?
									((typeof $87['__array'][$88=$constant_int_0]) != 'undefined'?$87['__array'][$88]:
										$87['__getitem__']($88)):
										$87['__getitem__']($constant_int_0))) && (typeof $add69=='number'||typeof $add69=='string')?
									$add69+$add70:
									$p['op_add']($add69,$add70)))==typeof ($add72=',') && (typeof $add71=='number'||typeof $add71=='string')?
									$add71+$add72:
									$p['op_add']($add71,$add72)))==typeof ($add74=(typeof ($89=guts)['__array'] != 'undefined'?
									((typeof $89['__array'][$90=$constant_int_1]) != 'undefined'?$89['__array'][$90]:
										$89['__getitem__']($90)):
										$89['__getitem__']($constant_int_1))) && (typeof $add73=='number'||typeof $add73=='string')?
									$add73+$add74:
									$p['op_add']($add73,$add74)))==typeof ($add76=',') && (typeof $add75=='number'||typeof $add75=='string')?
									$add75+$add76:
									$p['op_add']($add75,$add76)))==typeof ($add78=(typeof ($91=guts)['__array'] != 'undefined'?
									((typeof $91['__array'][$92=$constant_int_2]) != 'undefined'?$91['__array'][$92]:
										$91['__getitem__']($92)):
										$91['__getitem__']($constant_int_2))) && (typeof $add77=='number'||typeof $add77=='string')?
									$add77+$add78:
									$p['op_add']($add77,$add78)))==typeof ($add80=')') && (typeof $add79=='number'||typeof $add79=='string')?
									$add79+$add80:
									$p['op_add']($add79,$add80))); 
							}
						}
					}
					else {
						$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['__setattr__']('color', strokeStyle) : $p['setattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'color', strokeStyle); 
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['strokeStyle']]);
			$cls_definition['setStrokeStyle'] = $method;
			$method = $pyjs__bind_method2('setGlobalAlpha', function(globalAlpha) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					globalAlpha = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('globalAlpha', globalAlpha) : $p['setattr']($p['getattr'](self, 'context'), 'globalAlpha', globalAlpha); 
				return null;
			}
	, 1, [null,null,['self'],['globalAlpha']]);
			$cls_definition['setGlobalAlpha'] = $method;
			$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(gco) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					gco = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool25,$bool26;
				gco = gco['strip']();
				if ((($bool25=$p['op_eq']($p['getattr'](gco, 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'SOURCE_OVER'))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('globalCompositeOperation', $m['SOURCE_OVER']) : $p['setattr']($p['getattr'](self, 'context'), 'globalCompositeOperation', $m['SOURCE_OVER']); 
				}
				else if ((($bool26=$p['op_eq']($p['getattr'](gco, 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'DESTINATION_OVER'))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26['__nonzero__']=='function'?
								$bool26['__nonzero__']() :
								(typeof $bool26['__len__']=='function'?
									($bool26['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('globalCompositeOperation', $m['DESTINATION_OVER']) : $p['setattr']($p['getattr'](self, 'context'), 'globalCompositeOperation', $m['DESTINATION_OVER']); 
				}
				return null;
			}
	, 1, [null,null,['self'],['gco']]);
			$cls_definition['setGlobalCompositeOperation'] = $method;
			$method = $pyjs__bind_method2('setLineCap', function(lineCap) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineCap = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool27;
				if ((($bool27=$p['op_eq']($p['getattr'](lineCap['strip'](), 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'BUTT'))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('lineCap', $m['BUTT']) : $p['setattr']($p['getattr'](self, 'context'), 'lineCap', $m['BUTT']); 
				}
				else {
					$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('lineCap', lineCap) : $p['setattr']($p['getattr'](self, 'context'), 'lineCap', lineCap); 
				}
				return null;
			}
	, 1, [null,null,['self'],['lineCap']]);
			$cls_definition['setLineCap'] = $method;
			$method = $pyjs__bind_method2('setLineJoin', function(lineJoin) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineJoin = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('lineJoin', lineJoin) : $p['setattr']($p['getattr'](self, 'context'), 'lineJoin', lineJoin); 
				return null;
			}
	, 1, [null,null,['self'],['lineJoin']]);
			$cls_definition['setLineJoin'] = $method;
			$method = $pyjs__bind_method2('setLineWidth', function(lineWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineWidth = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('lineWidth', lineWidth) : $p['setattr']($p['getattr'](self, 'context'), 'lineWidth', lineWidth); 
				return null;
			}
	, 1, [null,null,['self'],['lineWidth']]);
			$cls_definition['setLineWidth'] = $method;
			$method = $pyjs__bind_method2('setMiterLimit', function(miterLimit) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					miterLimit = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'context')['__is_instance__'] && typeof $p['getattr'](self, 'context')['__setattr__'] == 'function' ? $p['getattr'](self, 'context')['__setattr__']('miterLimit', miterLimit) : $p['setattr']($p['getattr'](self, 'context'), 'miterLimit', miterLimit); 
				return null;
			}
	, 1, [null,null,['self'],['miterLimit']]);
			$cls_definition['setMiterLimit'] = $method;
			$method = $pyjs__bind_method2('setParentElement', function(g) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					g = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentElement', g) : $p['setattr'](self, 'parentElement', g); 
				return null;
			}
	, 1, [null,null,['self'],['g']]);
			$cls_definition['setParentElement'] = $method;
			$method = $pyjs__bind_method2('setPixelHeight', function(elem, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add82,$add81;
				$m['DOM']['setStyleAttribute'](elem, 'height', (typeof ($add81=$p['str'](height))==typeof ($add82='px') && (typeof $add81=='number'||typeof $add81=='string')?
					$add81+$add82:
					$p['op_add']($add81,$add82)));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentHeight', height) : $p['setattr'](self, 'parentHeight', height); 
				return null;
			}
	, 1, [null,null,['self'],['elem'],['height']]);
			$cls_definition['setPixelHeight'] = $method;
			$method = $pyjs__bind_method2('setPixelWidth', function(elem, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					width = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add83,$add84;
				$m['DOM']['setStyleAttribute'](elem, 'width', (typeof ($add83=$p['str'](width))==typeof ($add84='px') && (typeof $add83=='number'||typeof $add83=='string')?
					$add83+$add84:
					$p['op_add']($add83,$add84)));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parentWidth', width) : $p['setattr'](self, 'parentWidth', width); 
				return null;
			}
	, 1, [null,null,['self'],['elem'],['width']]);
			$cls_definition['setPixelWidth'] = $method;
			$method = $pyjs__bind_method2('strokeRect', function(x, y, w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					w = arguments[3];
					h = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add88,$add87,$add86,$add85;
				w = (typeof ($add85=w)==typeof ($add86=x) && (typeof $add85=='number'||typeof $add85=='string')?
					$add85+$add86:
					$p['op_add']($add85,$add86));
				h = (typeof ($add87=h)==typeof ($add88=y) && (typeof $add87=='number'||typeof $add87=='string')?
					$add87+$add88:
					$p['op_add']($add87,$add88));
				self['beginPath']();
				self['moveTo'](x, y);
				self['lineTo'](x, h);
				self['lineTo'](w, h);
				self['lineTo'](w, y);
				self['closePath']();
				self['stroke']();
				self['pathStr']['clear']();
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['strokeRect'] = $method;
			$method = $pyjs__bind_method2('transform', function(m11, m12, m21, m22, dx, dy) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					m11 = arguments[1];
					m12 = arguments[2];
					m21 = arguments[3];
					m22 = arguments[4];
					dx = arguments[5];
					dy = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul80,$add89,$98,$99,$mul81,$100,$94,$95,$96,$97,$mul82,$93,$add98,$add104,$104,$mul62,$mul63,$add100,$mul61,$mul66,$mul67,$mul64,$mul65,$mul69,$augsub6,$add103,$add96,$101,$mul71,$103,$102,$augexpr5,$add99,$mul83,$augexpr6,$add94,$add95,$augsub5,$add97,$add90,$add91,$add92,$add93,$mul72,$mul84,$add102,a,$mul70,$mul73,b,$mul75,$mul74,$mul77,$mul76,$mul79,$mul78,$add101,$mul68;
				a = (typeof ($93=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $93['__array'][$94=$constant_int_0]) != 'undefined'?$93['__array'][$94]:
						$93['__getitem__']($94)):
						$93['__getitem__']($constant_int_0));
				b = (typeof ($95=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $95['__array'][$96=$constant_int_1]) != 'undefined'?$95['__array'][$96]:
						$95['__getitem__']($96)):
						$95['__getitem__']($constant_int_1));
				$p['getattr'](self, 'matrix')['__setitem__']($constant_int_0, (typeof ($add89=(typeof ($mul61=a)==typeof ($mul62=m11) && typeof $mul61=='number'?
					$mul61*$mul62:
					$p['op_mul']($mul61,$mul62)))==typeof ($add90=(typeof ($mul63=b)==typeof ($mul64=m12) && typeof $mul63=='number'?
					$mul63*$mul64:
					$p['op_mul']($mul63,$mul64))) && (typeof $add89=='number'||typeof $add89=='string')?
					$add89+$add90:
					$p['op_add']($add89,$add90)));
				$p['getattr'](self, 'matrix')['__setitem__']($constant_int_1, (typeof ($add91=(typeof ($mul65=a)==typeof ($mul66=m21) && typeof $mul65=='number'?
					$mul65*$mul66:
					$p['op_mul']($mul65,$mul66)))==typeof ($add92=(typeof ($mul67=b)==typeof ($mul68=m22) && typeof $mul67=='number'?
					$mul67*$mul68:
					$p['op_mul']($mul67,$mul68))) && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92)));
				var $augsub5 = $constant_int_2;
				var $augexpr5 = $p['getattr'](self, 'matrix');
				$augexpr5['__setitem__']($augsub5, (typeof ($add95=(typeof ($97=$augexpr5)['__array'] != 'undefined'?
					((typeof $97['__array'][$98=$augsub5]) != 'undefined'?$97['__array'][$98]:
						$97['__getitem__']($98)):
						$97['__getitem__']($augsub5)))==typeof ($add96=(typeof ($add93=(typeof ($mul69=a)==typeof ($mul70=dx) && typeof $mul69=='number'?
					$mul69*$mul70:
					$p['op_mul']($mul69,$mul70)))==typeof ($add94=(typeof ($mul71=b)==typeof ($mul72=dy) && typeof $mul71=='number'?
					$mul71*$mul72:
					$p['op_mul']($mul71,$mul72))) && (typeof $add93=='number'||typeof $add93=='string')?
					$add93+$add94:
					$p['op_add']($add93,$add94))) && (typeof $add95=='number'||typeof $add95=='string')?
					$add95+$add96:
					$p['op_add']($add95,$add96)));
				a = (typeof ($99=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $99['__array'][$100=$constant_int_3]) != 'undefined'?$99['__array'][$100]:
						$99['__getitem__']($100)):
						$99['__getitem__']($constant_int_3));
				b = (typeof ($101=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $101['__array'][$102=$constant_int_4]) != 'undefined'?$101['__array'][$102]:
						$101['__getitem__']($102)):
						$101['__getitem__']($constant_int_4));
				$p['getattr'](self, 'matrix')['__setitem__']($constant_int_3, (typeof ($add97=(typeof ($mul73=a)==typeof ($mul74=m11) && typeof $mul73=='number'?
					$mul73*$mul74:
					$p['op_mul']($mul73,$mul74)))==typeof ($add98=(typeof ($mul75=b)==typeof ($mul76=m12) && typeof $mul75=='number'?
					$mul75*$mul76:
					$p['op_mul']($mul75,$mul76))) && (typeof $add97=='number'||typeof $add97=='string')?
					$add97+$add98:
					$p['op_add']($add97,$add98)));
				$p['getattr'](self, 'matrix')['__setitem__']($constant_int_4, (typeof ($add99=(typeof ($mul77=a)==typeof ($mul78=m21) && typeof $mul77=='number'?
					$mul77*$mul78:
					$p['op_mul']($mul77,$mul78)))==typeof ($add100=(typeof ($mul79=b)==typeof ($mul80=m22) && typeof $mul79=='number'?
					$mul79*$mul80:
					$p['op_mul']($mul79,$mul80))) && (typeof $add99=='number'||typeof $add99=='string')?
					$add99+$add100:
					$p['op_add']($add99,$add100)));
				var $augsub6 = $constant_int_5;
				var $augexpr6 = $p['getattr'](self, 'matrix');
				$augexpr6['__setitem__']($augsub6, (typeof ($add103=(typeof ($103=$augexpr6)['__array'] != 'undefined'?
					((typeof $103['__array'][$104=$augsub6]) != 'undefined'?$103['__array'][$104]:
						$103['__getitem__']($104)):
						$103['__getitem__']($augsub6)))==typeof ($add104=(typeof ($add101=(typeof ($mul81=a)==typeof ($mul82=dx) && typeof $mul81=='number'?
					$mul81*$mul82:
					$p['op_mul']($mul81,$mul82)))==typeof ($add102=(typeof ($mul83=b)==typeof ($mul84=dy) && typeof $mul83=='number'?
					$mul83*$mul84:
					$p['op_mul']($mul83,$mul84))) && (typeof $add101=='number'||typeof $add101=='string')?
					$add101+$add102:
					$p['op_add']($add101,$add102))) && (typeof $add103=='number'||typeof $add103=='string')?
					$add103+$add104:
					$p['op_add']($add103,$add104)));
				return null;
			}
	, 1, [null,null,['self'],['m11'],['m12'],['m21'],['m22'],['dx'],['dy']]);
			$cls_definition['transform'] = $method;
			$method = $pyjs__bind_method2('translate', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $116,$114,$115,$112,$113,$110,$111,$add112,$mul92,$mul91,$mul90,$add108,$105,$mul86,$augexpr7,$mul87,$109,$augexpr8,$add107,$add105,$mul85,$107,$106,$augsub7,$108,$add110,$add106,$mul88,$add111,$add109,$mul89,$augsub8;
				var $augsub7 = $constant_int_2;
				var $augexpr7 = $p['getattr'](self, 'matrix');
				$augexpr7['__setitem__']($augsub7, (typeof ($add107=(typeof ($105=$augexpr7)['__array'] != 'undefined'?
					((typeof $105['__array'][$106=$augsub7]) != 'undefined'?$105['__array'][$106]:
						$105['__getitem__']($106)):
						$105['__getitem__']($augsub7)))==typeof ($add108=(typeof ($add105=(typeof ($mul85=(typeof ($107=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $107['__array'][$108=$constant_int_0]) != 'undefined'?$107['__array'][$108]:
						$107['__getitem__']($108)):
						$107['__getitem__']($constant_int_0)))==typeof ($mul86=x) && typeof $mul85=='number'?
					$mul85*$mul86:
					$p['op_mul']($mul85,$mul86)))==typeof ($add106=(typeof ($mul87=(typeof ($109=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $109['__array'][$110=$constant_int_1]) != 'undefined'?$109['__array'][$110]:
						$109['__getitem__']($110)):
						$109['__getitem__']($constant_int_1)))==typeof ($mul88=y) && typeof $mul87=='number'?
					$mul87*$mul88:
					$p['op_mul']($mul87,$mul88))) && (typeof $add105=='number'||typeof $add105=='string')?
					$add105+$add106:
					$p['op_add']($add105,$add106))) && (typeof $add107=='number'||typeof $add107=='string')?
					$add107+$add108:
					$p['op_add']($add107,$add108)));
				var $augsub8 = $constant_int_5;
				var $augexpr8 = $p['getattr'](self, 'matrix');
				$augexpr8['__setitem__']($augsub8, (typeof ($add111=(typeof ($111=$augexpr8)['__array'] != 'undefined'?
					((typeof $111['__array'][$112=$augsub8]) != 'undefined'?$111['__array'][$112]:
						$111['__getitem__']($112)):
						$111['__getitem__']($augsub8)))==typeof ($add112=(typeof ($add109=(typeof ($mul89=(typeof ($113=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $113['__array'][$114=$constant_int_3]) != 'undefined'?$113['__array'][$114]:
						$113['__getitem__']($114)):
						$113['__getitem__']($constant_int_3)))==typeof ($mul90=x) && typeof $mul89=='number'?
					$mul89*$mul90:
					$p['op_mul']($mul89,$mul90)))==typeof ($add110=(typeof ($mul91=(typeof ($115=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $115['__array'][$116=$constant_int_4]) != 'undefined'?$115['__array'][$116]:
						$115['__getitem__']($116)):
						$115['__getitem__']($constant_int_4)))==typeof ($mul92=y) && typeof $mul91=='number'?
					$mul91*$mul92:
					$p['op_mul']($mul91,$mul92))) && (typeof $add109=='number'||typeof $add109=='string')?
					$add109+$add110:
					$p['op_add']($add109,$add110))) && (typeof $add111=='number'||typeof $add111=='string')?
					$add111+$add112:
					$p['op_add']($add111,$add112)));
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['translate'] = $method;
			$method = $pyjs__bind_method2('insert', function(gco, html) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					gco = arguments[1];
					html = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['parentElement']['insertAdjacentHTML'](gco, html);
				return null;
			}
	, 1, [null,null,['self'],['gco'],['html']]);
			$cls_definition['insert'] = $method;
			$method = $pyjs__bind_method2('buildStyleString', function(style) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					style = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $117,$add118,$add119,$add116,$add117,$add114,$add115,$add113,$118,$119,$add127,$add126,$add125,$add124,$add123,$add122,$add121,$add120,$add128,$123,$122,$121,$120,$126,$125,$124;
				return (typeof ($add127=(typeof ($add125=(typeof ($add123=(typeof ($add121=(typeof ($add119=(typeof ($add117=(typeof ($add115=(typeof ($add113=(typeof ($117=style)['__array'] != 'undefined'?
					((typeof $117['__array'][$118='style']) != 'undefined'?$117['__array'][$118]:
						$117['__getitem__']($118)):
						$117['__getitem__']('style')))==typeof ($add114=' ') && (typeof $add113=='number'||typeof $add113=='string')?
					$add113+$add114:
					$p['op_add']($add113,$add114)))==typeof ($add116=(typeof ($119=style)['__array'] != 'undefined'?
					((typeof $119['__array'][$120='variant']) != 'undefined'?$119['__array'][$120]:
						$119['__getitem__']($120)):
						$119['__getitem__']('variant'))) && (typeof $add115=='number'||typeof $add115=='string')?
					$add115+$add116:
					$p['op_add']($add115,$add116)))==typeof ($add118=' ') && (typeof $add117=='number'||typeof $add117=='string')?
					$add117+$add118:
					$p['op_add']($add117,$add118)))==typeof ($add120=(typeof ($121=style)['__array'] != 'undefined'?
					((typeof $121['__array'][$122='weight']) != 'undefined'?$121['__array'][$122]:
						$121['__getitem__']($122)):
						$121['__getitem__']('weight'))) && (typeof $add119=='number'||typeof $add119=='string')?
					$add119+$add120:
					$p['op_add']($add119,$add120)))==typeof ($add122=' ') && (typeof $add121=='number'||typeof $add121=='string')?
					$add121+$add122:
					$p['op_add']($add121,$add122)))==typeof ($add124=$p['str']((typeof ($123=style)['__array'] != 'undefined'?
					((typeof $123['__array'][$124='size']) != 'undefined'?$123['__array'][$124]:
						$123['__getitem__']($124)):
						$123['__getitem__']('size')))) && (typeof $add123=='number'||typeof $add123=='string')?
					$add123+$add124:
					$p['op_add']($add123,$add124)))==typeof ($add126='px ') && (typeof $add125=='number'||typeof $add125=='string')?
					$add125+$add126:
					$p['op_add']($add125,$add126)))==typeof ($add128=(typeof ($125=style)['__array'] != 'undefined'?
					((typeof $125['__array'][$126='family']) != 'undefined'?$125['__array'][$126]:
						$125['__getitem__']($126)):
						$125['__getitem__']('family'))) && (typeof $add127=='number'||typeof $add127=='string')?
					$add127+$add128:
					$p['op_add']($add127,$add128));
			}
	, 1, [null,null,['self'],['style']]);
			$cls_definition['buildStyleString'] = $method;
			$method = $pyjs__bind_method2('encodeHtmlAttribute', function(s) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e;
				e = s['$$replace']('&', '&amp;');
				return e['$$replace']('"', '&quot;');
			}
	, 1, [null,null,['self'],['s']]);
			$cls_definition['encodeHtmlAttribute'] = $method;
			$method = $pyjs__bind_method2('drawText_', function(text, x, y, maxWidth, stroke) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					x = arguments[2];
					y = arguments[3];
					maxWidth = arguments[4];
					stroke = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add134,$add135,$add136,right,$add130,$add131,$add133,$add138,$add139,daStr,$add137,$130,$131,$132,$133,$134,$div32,$div30,$div31,$add132,$add145,$add144,$add147,$add146,DEFAULT_STYLE,$add140,$add143,$add142,$add141,$add149,$bool28,skewM,$add154,$add129,lineStr,$129,$128,delta,$127,textAlign,skewOffset,$div29,fontStyleString,offsetX,offsetY,$add148,$add152,$add153,$add150,$add151,dX,dY,left;
				delta = $constant_int_1000;
				left = $constant_int_0;
				right = delta;
				offsetX = $constant_int_0;
				offsetY = $constant_int_0;
				DEFAULT_STYLE = $p['dict']([['style', 'normal'], ['variant', 'normal'], ['weight', 'normal'], ['size', $constant_int_10], ['family', 'sans-serif']]);
				fontStyleString = self['buildStyleString'](DEFAULT_STYLE);
				textAlign = 'left';
				dX = self['getCoordX']($p['getattr'](self, 'matrix'), (typeof ($add129=x)==typeof ($add130=offsetX) && (typeof $add129=='number'||typeof $add129=='string')?
					$add129+$add130:
					$p['op_add']($add129,$add130)), (typeof ($add131=y)==typeof ($add132=offsetY) && (typeof $add131=='number'||typeof $add131=='string')?
					$add131+$add132:
					$p['op_add']($add131,$add132)));
				dY = self['getCoordY']($p['getattr'](self, 'matrix'), (typeof ($add133=x)==typeof ($add134=offsetX) && (typeof $add133=='number'||typeof $add133=='string')?
					$add133+$add134:
					$p['op_add']($add133,$add134)), (typeof ($add135=y)==typeof ($add136=offsetY) && (typeof $add135=='number'||typeof $add135=='string')?
					$add135+$add136:
					$p['op_add']($add135,$add136)));
				lineStr = $p['list']([]);
				lineStr['append']('<v:line from="');
				lineStr['append']($p['str']((typeof ($usub5=left)=='number'?
					-$usub5:
					$p['op_usub']($usub5))));
				lineStr['append'](' 0" to="');
				lineStr['append']($p['str'](right));
				lineStr['append'](' 0" ');
				lineStr['append'](' coordsize="100 100" coordorigin="0 0"');
				lineStr['append']('" style="position:absolute;width:1px;height:1px"');
				if ((($bool28=stroke) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					lineStr['append'](' filled="f" stroked="t">');
					self['appendStroke'](lineStr);
				}
				else {
					lineStr['append'](' filled="t" stroked="f">');
					self['appendFill'](lineStr);
				}
				skewM = (typeof ($add149=(typeof ($add147=(typeof ($add145=(typeof ($add143=(typeof ($add141=(typeof ($add139=(typeof ($add137=$p['str']((typeof ($127=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $127['__array'][$128=$constant_int_0]) != 'undefined'?$127['__array'][$128]:
						$127['__getitem__']($128)):
						$127['__getitem__']($constant_int_0))))==typeof ($add138=',') && (typeof $add137=='number'||typeof $add137=='string')?
					$add137+$add138:
					$p['op_add']($add137,$add138)))==typeof ($add140=$p['str']((typeof ($129=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $129['__array'][$130=$constant_int_1]) != 'undefined'?$129['__array'][$130]:
						$129['__getitem__']($130)):
						$129['__getitem__']($constant_int_1)))) && (typeof $add139=='number'||typeof $add139=='string')?
					$add139+$add140:
					$p['op_add']($add139,$add140)))==typeof ($add142=',') && (typeof $add141=='number'||typeof $add141=='string')?
					$add141+$add142:
					$p['op_add']($add141,$add142)))==typeof ($add144=$p['str']((typeof ($131=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $131['__array'][$132=$constant_int_3]) != 'undefined'?$131['__array'][$132]:
						$131['__getitem__']($132)):
						$131['__getitem__']($constant_int_3)))) && (typeof $add143=='number'||typeof $add143=='string')?
					$add143+$add144:
					$p['op_add']($add143,$add144)))==typeof ($add146=',') && (typeof $add145=='number'||typeof $add145=='string')?
					$add145+$add146:
					$p['op_add']($add145,$add146)))==typeof ($add148=$p['str']((typeof ($133=$p['getattr'](self, 'matrix'))['__array'] != 'undefined'?
					((typeof $133['__array'][$134=$constant_int_4]) != 'undefined'?$133['__array'][$134]:
						$133['__getitem__']($134)):
						$133['__getitem__']($constant_int_4)))) && (typeof $add147=='number'||typeof $add147=='string')?
					$add147+$add148:
					$p['op_add']($add147,$add148)))==typeof ($add150=',0,0') && (typeof $add149=='number'||typeof $add149=='string')?
					$add149+$add150:
					$p['op_add']($add149,$add150));
				skewOffset = (typeof ($add153=(typeof ($add151=$p['str']($m['math']['floor']((typeof ($div29=dX)==typeof ($div30=$constant_int_10) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30)))))==typeof ($add152=',') && (typeof $add151=='number'||typeof $add151=='string')?
					$add151+$add152:
					$p['op_add']($add151,$add152)))==typeof ($add154=$p['str']($m['math']['floor']((typeof ($div31=dY)==typeof ($div32=$constant_int_10) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32))))) && (typeof $add153=='number'||typeof $add153=='string')?
					$add153+$add154:
					$p['op_add']($add153,$add154));
				lineStr['append']('<v:skew on="t" matrix="');
				lineStr['append'](skewM);
				lineStr['append']('" ');
				lineStr['append'](' offset="');
				lineStr['append'](skewOffset);
				lineStr['append']('" origin="');
				lineStr['append']($p['str'](left));
				lineStr['append'](' 0" />');
				lineStr['append']('<v:path textpathok="true" />');
				lineStr['append']('<v:textpath on="true" string="');
				lineStr['append'](self['encodeHtmlAttribute'](text));
				lineStr['append']('" style="v-text-align:');
				lineStr['append'](textAlign);
				lineStr['append'](';font:');
				lineStr['append'](self['encodeHtmlAttribute'](fontStyleString));
				lineStr['append']('" /></v:line>');
				daStr = ''['join'](lineStr);
				self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
				return null;
			}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth'],['stroke']]);
			$cls_definition['drawText_'] = $method;
			$method = $pyjs__bind_method2('fillText', function(text, x, y, maxWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					x = arguments[2];
					y = arguments[3];
					maxWidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

				self['drawText_'](text, x, y, maxWidth, false);
				return null;
			}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth', null]]);
			$cls_definition['fillText'] = $method;
			$method = $pyjs__bind_method2('strokeText', function(text, x, y, maxWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					x = arguments[2];
					y = arguments[3];
					maxWidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d71e080921187c65bc45f6dfa5ea70a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

				self['drawText_'](text, x, y, maxWidth, true);
				return null;
			}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth', null]]);
			$cls_definition['strokeText'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GWTCanvasImplIE6', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.GWTCanvasImplIE6 */


/* end module: pyjamas.Canvas.GWTCanvasImplIE6 */


/*
PYJS_DEPS: ['math', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.Window', 'pyjamas.Canvas.GWTCanvasImplIEConsts.BUTT', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIEConsts', 'pyjamas.Canvas.GWTCanvasImplIEConsts.DESTINATION_OVER', 'pyjamas.Canvas.GWTCanvasImplIEConsts.SOURCE_OVER', 'pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas.JSOStack.JSOStack', 'pyjamas.Canvas.JSOStack', 'pyjamas.Canvas.PathElement', 'pyjamas.Canvas.VMLContext.VMLContext', 'pyjamas.Canvas.VMLContext', 'pyjamas.Canvas.VMLContext.VMLStyle', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas.CanvasGradientImplIE6']
*/
