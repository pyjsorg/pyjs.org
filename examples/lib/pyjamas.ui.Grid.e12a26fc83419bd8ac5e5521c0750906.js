/* start module: pyjamas.ui.Grid */
$pyjs['loaded_modules']['pyjamas.ui.Grid'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Grid']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Grid'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Grid'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Grid>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Grid';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Grid'] = $pyjs['loaded_modules']['pyjamas.ui.Grid'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['HTMLTable'] = $p['___import___']('pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui', null, false);
		$m['CellFormatter'] = $p['___import___']('pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui', null, false);
		$m['RowFormatter'] = $p['___import___']('pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui', null, false);
		$m['Grid'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Grid';
			$cls_definition['__md5__'] = 'cc05a8019b5110f2fc30ab8d2cf18ac5';
			$method = $pyjs__bind_method2('__init__', function(rows, columns) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					rows = arguments[1];
					columns = arguments[2];
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof columns != 'undefined') {
						if (columns !== null && typeof columns['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = columns;
							columns = arguments[3];
						}
					} else 					if (typeof rows != 'undefined') {
						if (rows !== null && typeof rows['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = rows;
							rows = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof rows == 'undefined') rows=arguments['callee']['__args__'][3][1];
				if (typeof columns == 'undefined') columns=arguments['callee']['__args__'][4][1];
				var $cmp4,$cmp1,$cmp3,$cmp2,$or2,$bool2,$bool1,$or1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numColumns', $constant_int_0) : $p['setattr'](self, 'numColumns', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numRows', $constant_int_0) : $p['setattr'](self, 'numRows', $constant_int_0); 
				$pyjs_kwargs_call($m['HTMLTable'], '__init__', null, kwargs, [{}, self]);
				if ((($bool2=((($bool1=$or1=((($cmp1=rows)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($cmp3=columns)===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['resize'](rows, columns);
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['rows', $constant_int_0],['columns', $constant_int_0]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('removeRow', function(row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub2,$sub1;
				$m['HTMLTable']['removeRow'](self, row);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numRows', (typeof ($sub1=$p['getattr'](self, 'numRows'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) : $p['setattr'](self, 'numRows', (typeof ($sub1=$p['getattr'](self, 'numRows'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))); 
				return null;
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['removeRow'] = $method;
			$method = $pyjs__bind_method2('resize', function(rows, columns) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					rows = arguments[1];
					columns = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['resizeColumns'](columns);
				self['resizeRows'](rows);
				return null;
			}
	, 1, [null,null,['self'],['rows'],['columns']]);
			$cls_definition['resize'] = $method;
			$method = $pyjs__bind_method2('resizeColumns', function(columns) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					columns = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_array,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_iter,$iter1_array,$sub3,$sub6,$sub5,$sub4,$iter1_nextval,$bool3,$iter2_idx,$iter2_nextval,$bool4,$iter3_type,$cmp5,$cmp6,$iter1_type,$iter1_idx,i,$iter4_nextval,j,$iter4_idx,$iter4_array,$iter3_nextval,$iter2_array;
				if ((($bool3=$p['op_eq']($p['getattr'](self, 'numColumns'), columns)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return null;
				}
				if ((($bool4=((($cmp5=$p['getattr'](self, 'numColumns'))===($cmp6=columns)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$iter1_iter = $p['range']($constant_int_0, $p['getattr'](self, 'numRows'));
					if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter['__iter__']();
						$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						i = $iter1_nextval;
						$iter2_iter = $p['range']((typeof ($sub3=$p['getattr'](self, 'numColumns'))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
							$sub3-$sub4:
							$p['op_sub']($sub3,$sub4)), (typeof ($sub5=columns)==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
							$sub5-$sub6:
							$p['op_sub']($sub5,$sub6)), (typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1)));
						if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
							$iter2_type = 0;
						} else {
							$iter2_iter = $iter2_iter['__iter__']();
							$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter2_idx = 0;
						while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
							j = $iter2_nextval;
							self['removeCell'](i, j);
						}
					}
				}
				else {
					$iter3_iter = $p['range']($p['getattr'](self, 'numRows'));
					if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter['__iter__']();
						$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						i = $iter3_nextval;
						$iter4_iter = $p['range']($p['getattr'](self, 'numColumns'), columns);
						if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
							$iter4_type = 0;
						} else {
							$iter4_iter = $iter4_iter['__iter__']();
							$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter4_idx = 0;
						while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
							j = $iter4_nextval;
							self['insertCell'](i, j);
						}
					}
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numColumns', columns) : $p['setattr'](self, 'numColumns', columns); 
				return null;
			}
	, 1, [null,null,['self'],['columns']]);
			$cls_definition['resizeColumns'] = $method;
			$method = $pyjs__bind_method2('resizeRows', function(rows) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rows = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp7,$sub10,$cmp9,$cmp8,$sub9,$sub8,$bool6,$cmp10,$bool5,$sub7,$bool7;
				if ((($bool5=$p['op_eq']($p['getattr'](self, 'numRows'), rows)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					return null;
				}
				if ((($bool6=((($cmp7=$p['getattr'](self, 'numRows'))===($cmp8=rows)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['addRows'](self['getBodyElement'](), (typeof ($sub7=rows)==typeof ($sub8=$p['getattr'](self, 'numRows')) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)), $p['getattr'](self, 'numColumns'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('numRows', rows) : $p['setattr'](self, 'numRows', rows); 
				}
				else {
					while ((($bool7=((($cmp9=$p['getattr'](self, 'numRows'))===($cmp10=rows)?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						self['removeRow']((typeof ($sub9=$p['getattr'](self, 'numRows'))==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$p['op_sub']($sub9,$sub10)));
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['rows']]);
			$cls_definition['resizeRows'] = $method;
			$method = $pyjs__bind_method2('createCell', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				td = $m['HTMLTable']['createCell'](self);
				$m['DOM']['setInnerHTML'](td, '&nbsp;');
				return td;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createCell'] = $method;
			$method = $pyjs__bind_method2('clearCell', function(row, column) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var b,td;
				td = self['cellFormatter']['getElement'](row, column);
				b = $m['HTMLTable']['internalClearCell'](self, td);
				$m['DOM']['setInnerHTML'](td, '&nbsp;');
				return b;
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['clearCell'] = $method;
			$method = $pyjs__bind_method2('prepareCell', function(row, column) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['prepareCell'] = $method;
			$method = $pyjs__bind_method2('prepareRow', function(row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['prepareRow'] = $method;
			$method = $pyjs__bind_method2('getCellCount', function(row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'numColumns');
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['getCellCount'] = $method;
			$method = $pyjs__bind_method2('getColumnCount', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'numColumns');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getColumnCount'] = $method;
			$method = $pyjs__bind_method2('getRowCount', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'numRows');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getRowCount'] = $method;
			$method = $pyjs__bind_method2('addRows', function(table, numRows, columns) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					table = arguments[1];
					numRows = arguments[2];
					columns = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cc05a8019b5110f2fc30ab8d2cf18ac5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,cell,cellNum,$iter5_idx,$iter6_idx,$iter6_type,$iter5_array,rowNum,$iter6_array,$iter5_iter,$iter5_type,td,$iter6_nextval,$iter6_iter,row;
				td = $m['DOM']['createElement']('td');
				$m['DOM']['setInnerHTML'](td, '&nbsp;');
				row = $m['DOM']['createElement']('tr');
				$iter5_iter = $p['range'](columns);
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					cellNum = $iter5_nextval;
					cell = td['cloneNode'](true);
					row['appendChild'](cell);
				}
				$iter6_iter = $p['range'](numRows);
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					rowNum = $iter6_nextval;
					table['appendChild'](row['cloneNode'](true));
				}
				return null;
			}
	, 1, [null,null,['self'],['table'],['numRows'],['columns']]);
			$cls_definition['addRows'] = $method;
			var $bases = new Array($m['HTMLTable']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Grid', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.Grid', 'Grid', $m['Grid']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Grid */


/* end module: pyjamas.ui.Grid */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui', 'pyjamas.ui.HTMLTable', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter']
*/
