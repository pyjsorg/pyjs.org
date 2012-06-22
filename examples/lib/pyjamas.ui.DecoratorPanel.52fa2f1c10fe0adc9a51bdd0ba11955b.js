/* start module: pyjamas.ui.DecoratorPanel */
$pyjs['loaded_modules']['pyjamas.ui.DecoratorPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DecoratorPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DecoratorPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DecoratorPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DecoratorPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DecoratorPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DecoratorPanel'] = $pyjs['loaded_modules']['pyjamas.ui.DecoratorPanel'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui', null, false);
		$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', 'pyjamas.ui', null, false);
		$m['DecoratorPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DecoratorPanel';
			$cls_definition['__md5__'] = 'dc2658141f720f03e15a6f9f445888ca';
			$cls_definition['DEFAULT_STYLENAME'] = 'gwt-DecoratorPanel';
			$cls_definition['DEFAULT_ROW_STYLENAMES'] = $p['list'](['top', 'middle', 'bottom']);
			$method = $pyjs__bind_method2('__init__', function(rowStyles, containerIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					rowStyles = arguments[1];
					containerIndex = arguments[2];
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dc2658141f720f03e15a6f9f445888ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof containerIndex != 'undefined') {
						if (containerIndex !== null && typeof containerIndex['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = containerIndex;
							containerIndex = arguments[3];
						}
					} else 					if (typeof rowStyles != 'undefined') {
						if (rowStyles !== null && typeof rowStyles['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = rowStyles;
							rowStyles = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof rowStyles == 'undefined') rowStyles=arguments['callee']['__args__'][3][1];
				if (typeof containerIndex == 'undefined') containerIndex=arguments['callee']['__args__'][4][1];
				var row,$bool1,$len1,$iter1_nextval,$iter1_type,i,$bool5,fc,$iter1_iter,$bool2,$bool3,$bool6,$iter1_array,$bool4,$1,$2,$iter1_idx;
				if ((($bool1=$p['op_is'](rowStyles, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					rowStyles = $p['getattr'](self, 'DEFAULT_ROW_STYLENAMES');
				}
				if ((($bool2=kwargs['has_key']('Element')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('table', kwargs['pop']('Element')) : $p['setattr'](self, 'table', kwargs['pop']('Element')); 
					fc = $m['DOM']['getFirstChild']($p['getattr'](self, 'table'));
					if ((($bool3=fc) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tbody', fc) : $p['setattr'](self, 'tbody', fc); 
					}
					else {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tbody', $m['DOM']['createTBody']()) : $p['setattr'](self, 'tbody', $m['DOM']['createTBody']()); 
						$m['DOM']['appendChild']($p['getattr'](self, 'table'), $p['getattr'](self, 'tbody'));
					}
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('table', $m['DOM']['createTable']()) : $p['setattr'](self, 'table', $m['DOM']['createTable']()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tbody', $m['DOM']['createTBody']()) : $p['setattr'](self, 'tbody', $m['DOM']['createTBody']()); 
					$m['DOM']['appendChild']($p['getattr'](self, 'table'), $p['getattr'](self, 'tbody'));
					$m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'cellSpacing', '0');
					$m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'cellPadding', '0');
				}
				if ((($bool5=!(($bool4=kwargs['has_key']('StyleName')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4['__nonzero__']=='function'?
							$bool4['__nonzero__']() :
							(typeof $bool4['__len__']=='function'?
								($bool4['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					kwargs['__setitem__']('StyleName', $p['getattr'](self, 'DEFAULT_STYLENAME'));
				}
				$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self, $p['getattr'](self, 'table')]);
				$iter1_iter = $p['range']((($len1=rowStyles) === null?$constant_int_0:
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
					row = self['createTR']((typeof ($1=rowStyles)['__array'] != 'undefined'?
						((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](i)));
					$m['DOM']['appendChild']($p['getattr'](self, 'tbody'), row);
					if ((($bool6=$p['op_eq'](i, containerIndex)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('containerElem', $m['DOM']['getFirstChild']($m['DOM']['getChild'](row, $constant_int_1))) : $p['setattr'](self, 'containerElem', $m['DOM']['getFirstChild']($m['DOM']['getChild'](row, $constant_int_1))); 
					}
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['rowStyles', null],['containerIndex', $constant_int_1]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createTR', function(styleName) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					styleName = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dc2658141f720f03e15a6f9f445888ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add6,$add4,$add5,trElem;
				trElem = $m['DOM']['createTR']();
				self['setStyleName'](trElem, styleName);
				$m['DOM']['appendChild'](trElem, self['createTD']((typeof ($add1=styleName)==typeof ($add2='Left') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))));
				$m['DOM']['appendChild'](trElem, self['createTD']((typeof ($add3=styleName)==typeof ($add4='Center') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))));
				$m['DOM']['appendChild'](trElem, self['createTD']((typeof ($add5=styleName)==typeof ($add6='Right') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))));
				return trElem;
			}
	, 1, [null,null,['self'],['styleName']]);
			$cls_definition['createTR'] = $method;
			$method = $pyjs__bind_method2('createTD', function(styleName) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					styleName = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dc2658141f720f03e15a6f9f445888ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tdElem,inner,$add8,$add7;
				tdElem = $m['DOM']['createTD']();
				inner = $m['DOM']['createDiv']();
				$m['DOM']['appendChild'](tdElem, inner);
				self['setStyleName'](tdElem, styleName);
				self['setStyleName'](inner, (typeof ($add7=styleName)==typeof ($add8='Inner') && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)));
				return tdElem;
			}
	, 1, [null,null,['self'],['styleName']]);
			$cls_definition['createTD'] = $method;
			$method = $pyjs__bind_method2('getCellElement', function(row, cell) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					cell = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dc2658141f720f03e15a6f9f445888ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tr,td;
				tr = $m['DOM']['getChild']($p['getattr'](self, 'tbody'), row);
				td = $m['DOM']['getChild'](tr, cell);
				return $m['DOM']['getFirstChild'](td);
			}
	, 1, [null,null,['self'],['row'],['cell']]);
			$cls_definition['getCellElement'] = $method;
			$method = $pyjs__bind_method2('getContainerElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dc2658141f720f03e15a6f9f445888ca') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'containerElem');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getContainerElement'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratorPanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratorPanel', $m['DecoratorPanel']);
		$m['DecoratedTabBar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DecoratorPanel';
			$cls_definition['__md5__'] = '45ef20009ce542c91251190b5fcd6ba2';
			$cls_definition['TAB_ROW_STYLES'] = $p['list'](['tabTop', 'tabMiddle']);
			$cls_definition['STYLENAME_DEFAULT'] = 'gwt-DecoratedTabBar';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '45ef20009ce542c91251190b5fcd6ba2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs_kwargs_call($m['TabBar'], '__init__', null, kwargs, [{}, self]);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createTabTextWrapper', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '45ef20009ce542c91251190b5fcd6ba2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DecoratorPanel']($p['getattr'](self, 'TAB_ROW_STYLES'), $constant_int_1);
			}
	, 1, [null,null,['self']]);
			$cls_definition['createTabTextWrapper'] = $method;
			var $bases = new Array($m['TabBar']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratedTabBar', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratedTabBar', $m['DecoratedTabBar']);
		$m['DecoratedTabPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DecoratorPanel';
			$cls_definition['__md5__'] = '3f04b0c2532e9fa1fd045b7709e13cd2';
			$cls_definition['DEFAULT_STYLENAME'] = 'gwt-DecoratedTabPanel';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3f04b0c2532e9fa1fd045b7709e13cd2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $bool7,tabbar,$bool8,$bool9;
				if ((($bool8=!(($bool7=kwargs['has_key']('StyleName')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7['__nonzero__']=='function'?
							$bool7['__nonzero__']() :
							(typeof $bool7['__len__']=='function'?
								($bool7['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					kwargs['__setitem__']('StyleName', $p['getattr'](self, 'DEFAULT_STYLENAME'));
				}
				if ((($bool9=kwargs['has_key']('TabBar')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					tabbar = kwargs['pop']('TabBar');
				}
				else {
					tabbar = $m['DecoratedTabBar']();
				}
				$pyjs_kwargs_call($m['TabPanel'], '__init__', null, kwargs, [{}, self, tabbar]);
				self['getTabBar']()['setStyleName']($p['getattr']($m['DecoratedTabBar'], 'STYLENAME_DEFAULT'));
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createTabTextWrapper', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3f04b0c2532e9fa1fd045b7709e13cd2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DecoratorPanel']($p['getattr']($m['DecoratedTabBar'], 'TAB_ROW_STYLES'), $constant_int_1);
			}
	, 1, [null,null,['self']]);
			$cls_definition['createTabTextWrapper'] = $method;
			var $bases = new Array($m['TabPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratedTabPanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratedTabPanel', $m['DecoratedTabPanel']);
		$m['DecoratorTitledPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DecoratorPanel';
			$cls_definition['__md5__'] = '6fac41c6e5acbe3034d22e987defff00';
			$method = $pyjs__bind_method2('__init__', function(title, titleStyle, imgStyle, rowStyles, containerIndex, titleIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					titleStyle = arguments[2];
					imgStyle = arguments[3];
					rowStyles = arguments[4];
					containerIndex = arguments[5];
					titleIndex = arguments[6];
					var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6fac41c6e5acbe3034d22e987defff00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof titleIndex != 'undefined') {
						if (titleIndex !== null && typeof titleIndex['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = titleIndex;
							titleIndex = arguments[7];
						}
					} else 					if (typeof containerIndex != 'undefined') {
						if (containerIndex !== null && typeof containerIndex['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = containerIndex;
							containerIndex = arguments[7];
						}
					} else 					if (typeof rowStyles != 'undefined') {
						if (rowStyles !== null && typeof rowStyles['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = rowStyles;
							rowStyles = arguments[7];
						}
					} else 					if (typeof imgStyle != 'undefined') {
						if (imgStyle !== null && typeof imgStyle['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = imgStyle;
							imgStyle = arguments[7];
						}
					} else 					if (typeof titleStyle != 'undefined') {
						if (titleStyle !== null && typeof titleStyle['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = titleStyle;
							titleStyle = arguments[7];
						}
					} else 					if (typeof title != 'undefined') {
						if (title !== null && typeof title['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = title;
							title = arguments[7];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[7];
						}
					} else {
					}
				}
				if (typeof titleStyle == 'undefined') titleStyle=arguments['callee']['__args__'][4][1];
				if (typeof imgStyle == 'undefined') imgStyle=arguments['callee']['__args__'][5][1];
				if (typeof rowStyles == 'undefined') rowStyles=arguments['callee']['__args__'][6][1];
				if (typeof containerIndex == 'undefined') containerIndex=arguments['callee']['__args__'][7][1];
				if (typeof titleIndex == 'undefined') titleIndex=arguments['callee']['__args__'][8][1];
				var img,$bool10,$bool11,tdiv,inner,$bool12;
				if ((($bool10=$p['op_is'](rowStyles, null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					rowStyles = $p['list'](['top', 'top2', 'middle', 'bottom']);
				}
				if ((($bool11=$p['op_is'](titleStyle, null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					titleStyle = 'title';
				}
				$pyjs_kwargs_call($m['DecoratorPanel'], '__init__', null, kwargs, [{}, self, rowStyles, containerIndex]);
				inner = self['getCellElement'](titleIndex, $constant_int_1);
				if ((($bool12=imgStyle) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					img = $m['DOM']['createDiv']();
					$m['DOM']['setAttribute'](img, 'className', imgStyle);
					$m['DOM']['appendChild'](inner, img);
				}
				tdiv = $m['DOM']['createDiv']();
				$m['DOM']['setAttribute'](tdiv, 'className', titleStyle);
				$m['DOM']['setInnerText'](tdiv, title);
				$m['DOM']['appendChild'](inner, tdiv);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['title'],['titleStyle', null],['imgStyle', null],['rowStyles', null],['containerIndex', $constant_int_2],['titleIndex', $constant_int_1]]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['DecoratorPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratorTitledPanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DecoratorPanel', 'DecoratorTitledPanel', $m['DecoratorTitledPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DecoratorPanel */


/* end module: pyjamas.ui.DecoratorPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.Factory', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.TabBar.TabBar', 'pyjamas.ui.TabBar']
*/
