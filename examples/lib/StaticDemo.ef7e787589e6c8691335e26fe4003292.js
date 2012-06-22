/* start module: StaticDemo */
$pyjs['loaded_modules']['StaticDemo'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['StaticDemo']['__was_initialized__']) return $pyjs['loaded_modules']['StaticDemo'];
	var $m = $pyjs['loaded_modules']['StaticDemo'];
	$m['__repr__'] = function() { return '<module: StaticDemo>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'StaticDemo';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_140 = new $p['int'](140);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_400 = new $p['int'](400);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_150 = new $p['int'](150);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_37 = new $p['int'](37);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_51 = new $p['int'](51);
		var $constant_int_180 = new $p['int'](180);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_65 = new $p['int'](65);
		var $constant_int_70 = new $p['int'](70);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_75 = new $p['int'](75);
		var $constant_int_80 = new $p['int'](80);
		var $constant_int_85 = new $p['int'](85);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_95 = new $p['int'](95);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_110 = new $p['int'](110);
		var $constant_int_120 = new $p['int'](120);
		var $constant_int_255 = new $p['int'](255);
		$m['math'] = $p['___import___']('math', null);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
		$m['SimpleCanvasDemo'] = $p['___import___']('SimpleCanvasDemo.SimpleCanvasDemo', null, null, false);
		$m['StaticDemoControls'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'StaticDemo';
			$cls_definition['__md5__'] = '93103ca6ba473755e9e7485766e835ad';
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
					if (self.prototype['__md5__'] !== '93103ca6ba473755e9e7485766e835ad') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Composite']['__init__'](self, $m['VerticalPanel']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StaticDemoControls', $p['tuple']($bases), $data);
		})();
		$m['StaticDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'StaticDemo';
			$cls_definition['__md5__'] = '0e3a6f635d02ae896769488982369d6b';
			$method = $pyjs__bind_method2('__init__', function(theCanvas) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					theCanvas = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0e3a6f635d02ae896769488982369d6b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['SimpleCanvasDemo']['__init__'](self, theCanvas);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $constant_int_400) : $p['setattr'](self, 'width', $constant_int_400); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $constant_int_400) : $p['setattr'](self, 'height', $constant_int_400); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('demoName', 'Static Scene') : $p['setattr'](self, 'demoName', 'Static Scene'); 
				return null;
			}
	, 1, [null,null,['self'],['theCanvas']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createControls', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0e3a6f635d02ae896769488982369d6b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('controls', $m['StaticDemoControls']()) : $p['setattr'](self, 'controls', $m['StaticDemoControls']()); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createControls'] = $method;
			$method = $pyjs__bind_method2('drawDemo', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0e3a6f635d02ae896769488982369d6b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_type,$mul24,$iter1_iter,$div2,$iter2_type,$mul20,$iter3_idx,$iter2_iter,$iter1_array,$sub2,$sub1,$mul22,$mul23,$iter3_array,$iter3_iter,$iter1_nextval,$div1,$iter2_idx,$mul14,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter1_type,$mul17,$mul16,$mul15,$iter2_nextval,$mul13,$mul12,$mul11,$mul10,i,j,$mul19,$mul18,$add2,$add1,$iter1_idx,$mul21,$iter3_nextval,$iter2_array;
				self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				self['canvas']['saveContext']();
				self['canvas']['setLineWidth']($constant_int_1);
				self['canvas']['setFillStyle']($p['getattr']($m['Color'], 'GREEN'));
				self['canvas']['fillRect']($constant_int_5, $constant_int_5, $constant_int_25, $constant_int_25);
				self['canvas']['setStrokeStyle']($p['getattr']($m['Color'], 'RED'));
				self['canvas']['strokeRect']($constant_int_20, $constant_int_20, $constant_int_25, $constant_int_25);
				self['canvas']['beginPath']();
				self['canvas']['setLineWidth']($constant_int_1);
				self['canvas']['moveTo']($constant_int_1, $constant_int_1);
				self['canvas']['lineTo']($constant_int_80, $constant_int_80);
				self['canvas']['lineTo']($constant_int_100, $constant_int_20);
				self['canvas']['closePath']();
				self['canvas']['stroke']();
				self['canvas']['setStrokeStyle']($p['getattr']($m['Color'], 'BLUE'));
				self['canvas']['setFillStyle']($p['getattr']($m['Color'], 'BLACK'));
				self['canvas']['beginPath']();
				self['canvas']['moveTo']($constant_int_120, $constant_int_50);
				self['canvas']['lineTo']($constant_int_150, $constant_int_70);
				self['canvas']['lineTo']($constant_int_150, $constant_int_50);
				self['canvas']['quadraticCurveTo']($constant_int_150, $constant_int_150, $constant_int_80, $constant_int_80);
				self['canvas']['cubicCurveTo']($constant_int_85, $constant_int_25, $constant_int_75, $constant_int_37, $constant_int_75, $constant_int_40);
				self['canvas']['closePath']();
				self['canvas']['fill']();
				self['canvas']['setFont']('bold 16px Verdana');
				self['canvas']['fillText']('PYJS', $constant_int_20, $constant_int_120);
				self['canvas']['beginPath']();
				self['canvas']['rect']($constant_int_180, $constant_int_180, $constant_int_80, $constant_int_80);
				self['canvas']['rect']($constant_int_200, $constant_int_200, $constant_int_80, $constant_int_80);
				self['canvas']['stroke']();
				self['canvas']['beginPath']();
				self['canvas']['arc']($constant_int_200, $constant_int_100, $constant_int_20, $constant_int_0, $p['getattr']($m['math'], 'pi'), false);
				self['canvas']['stroke']();
				self['canvas']['saveContext']();
				self['canvas']['translate']($constant_int_150, $constant_int_0);
				self['canvas']['fillRect']($constant_int_0, $constant_int_0, $constant_int_150, $constant_int_150);
				self['canvas']['setFillStyle']($m['Color']['Color']('#09F'));
				self['canvas']['fillRect']($constant_int_15, $constant_int_15, $constant_int_120, $constant_int_120);
				self['canvas']['setFillStyle']($m['Color']['Color']('#FFF'));
				self['canvas']['setGlobalAlpha'](0.5);
				self['canvas']['fillRect']($constant_int_30, $constant_int_30, $constant_int_90, $constant_int_90);
				self['canvas']['fillRect']($constant_int_45, $constant_int_45, $constant_int_60, $constant_int_60);
				self['canvas']['fillRect']($constant_int_60, $constant_int_60, $constant_int_30, $constant_int_30);
				self['canvas']['restoreContext']();
				self['canvas']['saveContext']();
				self['canvas']['translate']($constant_int_10, $constant_int_140);
				self['canvas']['setFillStyle']($m['Color']['Color']('#FD0'));
				self['canvas']['fillRect']($constant_int_0, $constant_int_0, $constant_int_75, $constant_int_75);
				self['canvas']['setFillStyle']($m['Color']['Color']('#6C0'));
				self['canvas']['fillRect']($constant_int_75, $constant_int_0, $constant_int_75, $constant_int_75);
				self['canvas']['setFillStyle']($m['Color']['Color']('#09F'));
				self['canvas']['fillRect']($constant_int_0, $constant_int_75, $constant_int_75, $constant_int_75);
				self['canvas']['setFillStyle']($m['Color']['Color']('#F30'));
				self['canvas']['fillRect']($constant_int_75, $constant_int_75, $constant_int_75, $constant_int_75);
				self['canvas']['setFillStyle']($m['Color']['Color']('#FFF'));
				self['canvas']['setGlobalAlpha'](0.2);
				$iter1_iter = $p['range']($constant_int_7);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['canvas']['beginPath']();
					self['canvas']['arc']($constant_int_75, $constant_int_75, (typeof ($add1=$constant_int_10)==typeof ($add2=(typeof ($mul1=$constant_int_10)==typeof ($mul2=i) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)), $constant_int_0, (typeof ($mul3=$p['getattr']($m['math'], 'pi'))==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)), false);
					self['canvas']['fill']();
				}
				self['canvas']['saveContext']();
				self['canvas']['setGlobalAlpha'](0.8);
				self['canvas']['beginPath']();
				self['canvas']['arc']($constant_int_75, $constant_int_75, $constant_int_50, $constant_int_0, (typeof ($mul5=$p['getattr']($m['math'], 'pi'))==typeof ($mul6=$constant_int_2) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)), true);
				self['canvas']['moveTo']($constant_int_110, $constant_int_75);
				self['canvas']['arc']($constant_int_75, $constant_int_75, $constant_int_35, $constant_int_0, $p['getattr']($m['math'], 'pi'), false);
				self['canvas']['moveTo']($constant_int_65, $constant_int_65);
				self['canvas']['arc']($constant_int_60, $constant_int_65, $constant_int_5, $constant_int_0, (typeof ($mul7=$p['getattr']($m['math'], 'pi'))==typeof ($mul8=$constant_int_2) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)), true);
				self['canvas']['moveTo']($constant_int_95, $constant_int_65);
				self['canvas']['arc']($constant_int_90, $constant_int_65, $constant_int_5, $constant_int_0, (typeof ($mul9=$p['getattr']($m['math'], 'pi'))==typeof ($mul10=$constant_int_2) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)), true);
				self['canvas']['stroke']();
				self['canvas']['restoreContext']();
				self['canvas']['restoreContext']();
				self['canvas']['beginPath']();
				self['canvas']['arc']($constant_int_200, $constant_int_200, $constant_int_20, $constant_int_0, (typeof ($mul11=$p['getattr']($m['math'], 'pi'))==typeof ($mul12=$constant_int_2) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)), false);
				self['canvas']['stroke']();
				self['canvas']['saveContext']();
				self['canvas']['setGlobalAlpha'](1.0);
				$iter2_iter = $p['range']($constant_int_6);
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					self['canvas']['saveContext']();
					self['canvas']['setFillStyle']($m['Color']['Color']((typeof ($mul13=$constant_int_51)==typeof ($mul14=i) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14)), (typeof ($sub1=$constant_int_255)==typeof ($sub2=(typeof ($mul15=$constant_int_51)==typeof ($mul16=i) && typeof $mul15=='number'?
						$mul15*$mul16:
						$p['op_mul']($mul15,$mul16))) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)), $constant_int_255));
					$iter3_iter = $p['range']((typeof ($mul17=i)==typeof ($mul18=$constant_int_6) && typeof $mul17=='number'?
						$mul17*$mul18:
						$p['op_mul']($mul17,$mul18)));
					if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter['__iter__']();
						$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						j = $iter3_nextval;
						self['canvas']['rotate']((typeof ($div1=(typeof ($mul19=$p['getattr']($m['math'], 'pi'))==typeof ($mul20=$constant_int_2) && typeof $mul19=='number'?
							$mul19*$mul20:
							$p['op_mul']($mul19,$mul20)))==typeof ($div2=(typeof ($mul21=i)==typeof ($mul22=6.0) && typeof $mul21=='number'?
							$mul21*$mul22:
							$p['op_mul']($mul21,$mul22))) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2)));
						self['canvas']['beginPath']();
						self['canvas']['rect']($constant_int_0, (typeof ($mul23=i)==typeof ($mul24=12.5) && typeof $mul23=='number'?
							$mul23*$mul24:
							$p['op_mul']($mul23,$mul24)), $constant_int_5, $constant_int_5);
						self['canvas']['fill']();
					}
					self['canvas']['restoreContext']();
				}
				self['canvas']['restoreContext']();
				self['canvas']['restoreContext']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['drawDemo'] = $method;
			$method = $pyjs__bind_method2('stopDemo', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0e3a6f635d02ae896769488982369d6b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stopDemo'] = $method;
			var $bases = new Array($m['SimpleCanvasDemo']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('StaticDemo', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end StaticDemo */


/* end module: StaticDemo */


/*
PYJS_DEPS: ['math', 'pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Canvas.Color', 'pyjamas.Canvas', 'SimpleCanvasDemo.SimpleCanvasDemo', 'SimpleCanvasDemo']
*/
