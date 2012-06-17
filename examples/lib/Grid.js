/* start module: Grid */
$pyjs.loaded_modules['Grid'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Grid'].__was_initialized__) return $pyjs.loaded_modules['Grid'];
	var $m = $pyjs.loaded_modules["Grid"];
	$m.__repr__ = function() { return "<module: Grid>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Grid';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['pyjamas'] = $p['___import___']('pyjamas.ui.Grid', null);
		$m['Grid'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Grid';
			$cls_definition.__md5__ = '4a00db8f6113a28383799f7b9ed6d131';
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
					if (self.prototype.__md5__ !== '4a00db8f6113a28383799f7b9ed6d131') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['pyjamas']['ui']['Grid']['Grid']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedRow', $constant_int_0) : $p['setattr'](self, 'selectedRow', $constant_int_0); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createGrid', function(rows, cols) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					rows = arguments[1];
					cols = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4a00db8f6113a28383799f7b9ed6d131') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_iter,$iter2_type,row,$iter2_iter,$iter1_array,$iter1_idx,$iter1_nextval,$iter2_idx,$add10,$add11,$add12,$2,$1,$iter2_nextval,$iter1_type,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,col,$iter2_array;
				self['resize']((typeof ($add1=rows)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)), (typeof ($add3=cols)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('values', $p['dict']([])) : $p['setattr'](self, 'values', $p['dict']([])); 
				self['getRowFormatter']()['addStyleName']($constant_int_0, 'user-BorderRow');
				$iter1_iter = $p['range'](rows);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					row = $iter1_nextval;
					$p['getattr'](self, 'values').__setitem__(row, $p['dict']([]));
					(typeof ($1=$p['getattr'](self, 'values')).__array != 'undefined'?
						((typeof $1.__array[$2=row]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(row)).__setitem__($constant_int_0, row);
					self['getRowFormatter']()['addStyleName']((typeof ($add5=row)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)), 'user-UnselectedRow');
					self['getCellFormatter']()['addStyleName']((typeof ($add7=row)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)), $constant_int_0, 'user-BorderCell');
					self['setHTML']((typeof ($add9=row)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)), $constant_int_0, $p['sprintf']('<b>%s</b>', (typeof ($add11=row)==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12))));
					$iter2_iter = $p['range']($constant_int_0, cols);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						col = $iter2_nextval;
						self['setCellValue'](row, col, '');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['rows'],['cols']]);
			$cls_definition['createGrid'] = $method;
			$method = $pyjs__bind_method2('setColLabelValue', function(col, value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					col = arguments[1];
					value = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4a00db8f6113a28383799f7b9ed6d131') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add14,$add13;
				self['setHTML']($constant_int_0, (typeof ($add13=col)==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)), $p['sprintf']('<b>%s</b>', value));
				return null;
			}
	, 1, [null,null,['self'],['col'],['value']]);
			$cls_definition['setColLabelValue'] = $method;
			$method = $pyjs__bind_method2('setRowLabelValue', function(row, value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					value = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4a00db8f6113a28383799f7b9ed6d131') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add15,$add16;
				self['setHTML']((typeof ($add15=row)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)), $constant_int_0, $p['sprintf']('<b>%s</b>', value));
				return null;
			}
	, 1, [null,null,['self'],['row'],['value']]);
			$cls_definition['setRowLabelValue'] = $method;
			$method = $pyjs__bind_method2('setCellValue', function(row, col, value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					col = arguments[2];
					value = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4a00db8f6113a28383799f7b9ed6d131') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add20,$bool1,$add19,$4,$add18,$3,$add17;
				(typeof ($3=$p['getattr'](self, 'values')).__array != 'undefined'?
					((typeof $3.__array[$4=row]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(row)).__setitem__(col, value);
				if ((($bool1=$p['op_eq'](value, '')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					value = '&nbsp;';
				}
				self['setHTML']((typeof ($add17=row)==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)), (typeof ($add19=col)==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)), value);
				return null;
			}
	, 1, [null,null,['self'],['row'],['col'],['value']]);
			$cls_definition['setCellValue'] = $method;
			$method = $pyjs__bind_method2('clearGrid', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4a00db8f6113a28383799f7b9ed6d131') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$iter4_nextval,$iter3_type,col,$iter4_idx,$iter3_iter,$iter4_type,$iter3_array,$iter4_array,$iter4_iter,$iter3_nextval,row;
				$iter3_iter = $p['range']($constant_int_1, self['getRowCount']());
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					row = $iter3_nextval;
					$iter4_iter = $p['range']($constant_int_1, self['getColumnCount']());
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						col = $iter4_nextval;
						self['clearCell'](row, col);
					}
				}
				self['selectRow']((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearGrid'] = $method;
			$method = $pyjs__bind_method2('selectRow', function(row) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4a00db8f6113a28383799f7b9ed6d131') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['styleRow']($p['getattr'](self, 'selectedRow'), false);
				self['styleRow'](row, true);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedRow', row) : $p['setattr'](self, 'selectedRow', row); 
				return null;
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['selectRow'] = $method;
			$method = $pyjs__bind_method2('styleRow', function(row, selected) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					selected = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4a00db8f6113a28383799f7b9ed6d131') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,$cmp3,$cmp2,$and1,$bool2,$bool3,$bool4,$and2;
				if ((($bool3=((($bool2=$and1=((($cmp1=row)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp3=row)===($cmp4=self['getRowCount']())?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					if ((($bool4=selected) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						self['getRowFormatter']()['addStyleName'](row, 'user-SelectedRow');
					}
					else {
						self['getRowFormatter']()['removeStyleName'](row, 'user-SelectedRow');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['row'],['selected']]);
			$cls_definition['styleRow'] = $method;
			var $bases = new Array($p['getattr']($p['getattr']($p['getattr']($m['pyjamas'], 'ui'), 'Grid'), 'Grid'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Grid', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Grid */


/* end module: Grid */


/*
PYJS_DEPS: ['pyjamas.ui.Grid', 'pyjamas', 'pyjamas.ui']
*/
