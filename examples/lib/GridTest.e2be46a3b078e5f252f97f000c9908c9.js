/* start module: GridTest */
$pyjs.loaded_modules['GridTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GridTest'].__was_initialized__) return $pyjs.loaded_modules['GridTest'];
	var $m = $pyjs.loaded_modules["GridTest"];
	$m.__repr__ = function() { return "<module: GridTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GridTest';
	$m.__name__ = __mod_name__;
	try {
		var $bool8;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_10 = new $p['int'](10);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
		$m['CellFormatter'] = $p['___import___']('pyjamas.ui.CellFormatter.CellFormatter', null, null, false);
		$m['RowFormatter'] = $p['___import___']('pyjamas.ui.RowFormatter.RowFormatter', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
		$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['GridWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GridTest';
			$cls_definition.__md5__ = '6c883b68fcb5607cbccf2ffabcdefc08';
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
					if (self.prototype.__md5__ !== '6c883b68fcb5607cbccf2ffabcdefc08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['AbsolutePanel']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page', $constant_int_0) : $p['setattr'](self, 'page', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('min_page', $constant_int_1) : $p['setattr'](self, 'min_page', $constant_int_1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('max_page', $constant_int_10) : $p['setattr'](self, 'max_page', $constant_int_10); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('addb', $m['Button']('Next >', self)) : $p['setattr'](self, 'addb', $m['Button']('Next >', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('subb', $m['Button']('< Prev', self)) : $p['setattr'](self, 'subb', $m['Button']('< Prev', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('clearb', $m['Button']('Clear', self)) : $p['setattr'](self, 'clearb', $m['Button']('Clear', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('g', $m['Grid']()) : $p['setattr'](self, 'g', $m['Grid']()); 
				self['g']['resize']($constant_int_5, $constant_int_5);
				self['g']['setWidget']($constant_int_0, $constant_int_0, $m['HTML']('<b>Grid Test</b>'));
				self['g']['setBorderWidth']($constant_int_2);
				self['g']['setCellPadding']($constant_int_4);
				self['g']['setCellSpacing']($constant_int_1);
				self['updatePageDisplay']();
				self['add']($p['getattr'](self, 'subb'));
				self['add']($p['getattr'](self, 'addb'));
				self['add']($p['getattr'](self, 'clearb'));
				self['add']($p['getattr'](self, 'g'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6c883b68fcb5607cbccf2ffabcdefc08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$bool2,$bool3,$bool1,$sub2,$sub1,$add1;
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'clearb'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['g']['clear']();
					return null;
				}
				else if ((($bool2=$p['op_eq'](sender, $p['getattr'](self, 'addb'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page', (typeof ($add1=$p['getattr'](self, 'page'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))) : $p['setattr'](self, 'page', (typeof ($add1=$p['getattr'](self, 'page'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))); 
				}
				else if ((($bool3=$p['op_eq'](sender, $p['getattr'](self, 'subb'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page', (typeof ($sub1=$p['getattr'](self, 'page'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 'page', (typeof ($sub1=$p['getattr'](self, 'page'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))); 
				}
				self['updatePageDisplay']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('updatePageDisplay', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6c883b68fcb5607cbccf2ffabcdefc08') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_iter,$iter2_type,$iter2_iter,$iter1_array,$sub3,$sub4,$iter1_nextval,total_pages,$iter2_idx,$iter2_nextval,$bool6,$bool7,$bool4,$bool5,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$iter1_type,$cmp3,$cmp2,$cmp8,$add3,$iter1_idx,$add4,y,x,$iter2_array;
				if ((($bool4=((($cmp1=$p['getattr'](self, 'page'))===($cmp2=$p['getattr'](self, 'min_page'))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page', $p['getattr'](self, 'min_page')) : $p['setattr'](self, 'page', $p['getattr'](self, 'min_page')); 
				}
				else if ((($bool5=((($cmp3=$p['getattr'](self, 'page'))===($cmp4=$p['getattr'](self, 'max_page'))?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page', $p['getattr'](self, 'max_page')) : $p['setattr'](self, 'page', $p['getattr'](self, 'max_page')); 
				}
				total_pages = (typeof ($add3=(typeof ($sub3=$p['getattr'](self, 'max_page'))==typeof ($sub4=$p['getattr'](self, 'min_page')) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				self['g']['setHTML']($constant_int_0, $constant_int_4, $p['sprintf']('<b>page %d of %d</b>', $p['tuple']([$p['getattr'](self, 'page'), total_pages])));
				if ((($bool6=((((($cmp5=$p['getattr'](self, 'page'))===($cmp6=$p['getattr'](self, 'max_page'))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['addb']['setEnabled'](false);
				}
				else {
					self['addb']['setEnabled'](true);
				}
				if ((($bool7=((($cmp7=$p['getattr'](self, 'page'))===($cmp8=$p['getattr'](self, 'min_page'))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) < 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['subb']['setEnabled'](false);
				}
				else {
					self['subb']['setEnabled'](true);
				}
				$iter1_iter = $p['range']($constant_int_1, $constant_int_5);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					y = $iter1_nextval;
					$iter2_iter = $p['range']($constant_int_5);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						x = $iter2_nextval;
						self['g']['setText'](y, x, $p['sprintf']('%d (%d,%d)', $p['tuple']([$p['getattr'](self, 'page'), x, y])));
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['updatePageDisplay'] = $method;
			var $bases = new Array($m['AbsolutePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('GridWidget', $p['tuple']($bases), $data);
		})();
		$m['AppInit'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			return $m['GridWidget']();
		};
		$m['AppInit'].__name__ = 'AppInit';

		$m['AppInit'].__bind_type__ = 0;
		$m['AppInit'].__args__ = [null,null];
		if ((($bool8=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			$m['pyjd']['setup']('./GridTest.html');
			$m['g'] = $m['GridWidget']();
			$m['RootPanel']()['add']($m['g']);
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GridTest */


/* end module: GridTest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.Window']
*/
