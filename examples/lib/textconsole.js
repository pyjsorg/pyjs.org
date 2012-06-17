/* start module: textconsole */
$pyjs.loaded_modules['textconsole'] = function (__mod_name__) {
	if($pyjs.loaded_modules['textconsole'].__was_initialized__) return $pyjs.loaded_modules['textconsole'];
	var $m = $pyjs.loaded_modules["textconsole"];
	$m.__repr__ = function() { return "<module: textconsole>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'textconsole';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
		$m['math'] = $p['___import___']('math', null);
		$m['log'] = $m['logging']['getAppendLogger']((typeof __name__ == "undefined"?$m.__name__:__name__), $p['getattr']($m['logging'], 'DEBUG'), $p['getattr']($m['logging'], 'PLAIN_FORMAT'));
		$m['TextWindow'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'textconsole';
			$cls_definition.__md5__ = '3c264eadeb5e77cbbedc3dd154c671cc';
			$method = $pyjs__bind_method2('__init__', function(cols, rows, width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					cols = arguments[1];
					rows = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c264eadeb5e77cbbedc3dd154c671cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,x,$iter1_idx;
				$m['AbsolutePanel']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('rows', rows) : $p['setattr'](self, 'rows', rows); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('cols', cols) : $p['setattr'](self, 'cols', cols); 
				self['setStyleName']('gwt-TextWindow');
				$m['DOM']['setStyleAttribute'](self['getElement'](), 'fontFamily', 'monospace');
				self['setHeight'](height);
				self['setWidth'](width);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('text', $p['dict']([])) : $p['setattr'](self, 'text', $p['dict']([])); 
				$iter1_iter = $p['range']($p['getattr'](self, 'cols'));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					x = $iter1_nextval;
					$p['getattr'](self, 'text').__setitem__(x, $p['dict']([]));
				}
				return null;
			}
	, 1, [null,null,['self'],['cols'],['rows'],['width'],['height']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_get_label', function(x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c264eadeb5e77cbbedc3dd154c671cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var xpos,txt,$5,$mul3,ypos,$3,$bool2,$6,$bool1,$8,$7,$4,$mul4,$2,$mul2,$mul1,$1;
				if ((($bool2=!(($bool1=(typeof ($1=$p['getattr'](self, 'text')).__array != 'undefined'?
					((typeof $1.__array[$2=x]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(x))['has_key'](y)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					xpos = (typeof ($mul1=x)==typeof ($mul2=$p['getattr'](self, 'fontsize')) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
					ypos = (typeof ($mul3=y)==typeof ($mul4=$p['getattr'](self, 'fontheight')) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4));
					txt = $m['Label'](' ');
					self['add'](txt, xpos, ypos);
					(typeof ($3=$p['getattr'](self, 'text')).__array != 'undefined'?
						((typeof $3.__array[$4=x]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(x)).__setitem__(y, txt);
				}
				return (typeof ($7=(typeof ($5=$p['getattr'](self, 'text')).__array != 'undefined'?
					((typeof $5.__array[$6=x]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(x))).__array != 'undefined'?
					((typeof $7.__array[$8=y]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(y));
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['_get_label'] = $method;
			$method = $pyjs__bind_method2('setChar', function(x, y, $$char) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					$$char = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c264eadeb5e77cbbedc3dd154c671cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$char,$$label;
				$$label = self['_get_label'](x, y);
				$$label['setText']($$char);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['$$char']]);
			$cls_definition['setChar'] = $method;
			$method = $pyjs__bind_method2('setWidth', function(width) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c264eadeb5e77cbbedc3dd154c671cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ratio,$div3,$div2,$mul6,$mul5,$div1,$div4;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontsize', $m['math']['floor']((typeof ($div1=width)==typeof ($div2=$p['getattr'](self, 'cols')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))) : $p['setattr'](self, 'fontsize', $m['math']['floor']((typeof ($div1=width)==typeof ($div2=$p['getattr'](self, 'cols')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))); 
				$m['AbsolutePanel']['setWidth'](self, $p['sprintf']('%dpx', (typeof ($mul5=$p['getattr'](self, 'cols'))==typeof ($mul6=$p['getattr'](self, 'fontsize')) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))));
				ratio = (typeof ($div3=$p['getattr'](self, 'fontsize'))==typeof ($div4=$p['getattr'](self, 'fontheight')) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4));
				$m['DOM']['setStyleAttribute'](self['getElement'](), 'fontSizeAdjust', $p['str'](ratio));
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setWidth'] = $method;
			$method = $pyjs__bind_method2('setHeight', function(height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c264eadeb5e77cbbedc3dd154c671cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul8,$mul7,$div6,$div5;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fontheight', $m['math']['floor']((typeof ($div5=height)==typeof ($div6=$p['getattr'](self, 'rows')) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)))) : $p['setattr'](self, 'fontheight', $m['math']['floor']((typeof ($div5=height)==typeof ($div6=$p['getattr'](self, 'rows')) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)))); 
				$m['AbsolutePanel']['setHeight'](self, $p['sprintf']('%dpx', (typeof ($mul7=$p['getattr'](self, 'rows'))==typeof ($mul8=$p['getattr'](self, 'fontheight')) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))));
				$m['DOM']['setStyleAttribute'](self['getElement'](), 'fontSize', $p['sprintf']('%dpx', $p['getattr'](self, 'fontheight')));
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setHeight'] = $method;
			$method = $pyjs__bind_method2('setText', function(x, y, string) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					string = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c264eadeb5e77cbbedc3dd154c671cc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,i,$9,$add2,$iter2_idx,$add1,$len1,$10,$iter2_array;
				$iter2_iter = $p['range']((($len1=string) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					self['setChar']((typeof ($add1=x)==typeof ($add2=i) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)), y, (typeof ($9=string).__array != 'undefined'?
						((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(i)));
				}
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['string']]);
			$cls_definition['setText'] = $method;
			var $bases = new Array($m['AbsolutePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TextWindow', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end textconsole */


/* end module: textconsole */


/*
PYJS_DEPS: ['pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.DOM', 'pyjamas.logging', 'math']
*/
