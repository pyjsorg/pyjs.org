/* start module: pyjamas.builder.Builder */
$pyjs['loaded_modules']['pyjamas.builder.Builder'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.builder.Builder']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.builder.Builder'];
	if(typeof $pyjs['loaded_modules']['pyjamas.builder'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.builder']['__was_initialized__']) $p['___import___']('pyjamas.builder', null);
	var $m = $pyjs['loaded_modules']['pyjamas.builder.Builder'];
	$m['__repr__'] = function() { return '<module: pyjamas.builder.Builder>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.builder.Builder';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.builder']['Builder'] = $pyjs['loaded_modules']['pyjamas.builder.Builder'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$m['XMLFile'] = $p['___import___']('pyjamas.builder.XMLFile.XMLFile', 'pyjamas.builder', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.builder', null, false);
		$m['ui'] = $p['___import___']('pyjamas.ui', 'pyjamas.builder', null, false);
		$m['MultiListener'] = $p['___import___']('pyjamas.ui.MultiListener.MultiListener', 'pyjamas.builder', null, false);
		$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.builder', null, false);
		$m['TooltipListener'] = $p['___import___']('pyjamas.ui.Tooltip.TooltipListener', 'pyjamas.builder', null, false);
		$m['eventListeners'] = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'onClick':$p['tuple'](['addClickListener', 'sender']), 'onDoubleClick':$p['tuple'](['addDoubleClickListener', 'sender']), 'onChange':$p['tuple'](['addChangeListener', 'sender']), 'onFocus':$p['tuple'](['addFocusListener', 'sender']), 'onLostFocus':$p['tuple'](['addFocusListener', 'sender']), 'onLoad':$p['tuple'](['addLoadListener', 'sender']), 'onError':$p['tuple'](['addLoadListener', 'sender']), 'onKeyDown':$p['tuple'](['addKeyboardListener', 'sender', 'keycode', 'modifiers']), 'onKeyUp':$p['tuple'](['addKeyboardListener', 'sender', 'keycode', 'modifiers']), 'onKeyPress':$p['tuple'](['addKeyboardListener', 'sender', 'keycode', 'modifiers']), 'onMouseDown':$p['tuple'](['addMouseListener', 'sender', 'x', 'y']), 'onMouseUp':$p['tuple'](['addMouseListener', 'sender', 'x', 'y']), 'onMouseMove':$p['tuple'](['addMouseListener', 'sender', 'x', 'y']), 'onMouseEnter':$p['tuple'](['addMouseListener', 'sender']), 'onMouseLeave':$p['tuple'](['addMouseListener', 'sender']), 'onScroll':$p['tuple'](['addScrollListener', 'sender', 'row', 'col']), 'onCellClicked':$p['tuple'](['addTableListener', 'sender', 'row', 'col']), 'onTabSelected':$p['tuple'](['addTabListener', 'sender', 'tabIndex']), 'onBeforeTabSelected':$p['tuple'](['addTabListener', 'sender', 'tabIndex']), 'onTreeItemSelected':$p['tuple'](['addTreeListener', 'sender'])}]);
		$m['BuilderState'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.builder.Builder';
			$cls_definition['__md5__'] = '3956373d04c7a511020bf88e3d2ddde9';
			$method = $pyjs__bind_method2('__init__', function(builder, eventTarget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					builder = arguments[1];
					eventTarget = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3956373d04c7a511020bf88e3d2ddde9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('builder', builder) : $p['setattr'](self, 'builder', builder); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventTarget', eventTarget) : $p['setattr'](self, 'eventTarget', eventTarget); 
				return null;
			}
	, 1, [null,null,['self'],['builder'],['eventTarget']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BuilderState', $p['tuple']($bases), $data);
		})();
		$m['Builder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.builder.Builder';
			$cls_definition['__md5__'] = '71e2f9ca19d4343dca243ce2b641b66f';
			$method = $pyjs__bind_method2('__init__', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71e2f9ca19d4343dca243ce2b641b66f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('builder_text', null) : $p['setattr'](self, 'builder_text', null); 
				self['setText'](text);
				return null;
			}
	, 1, [null,null,['self'],['text', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setText', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71e2f9ca19d4343dca243ce2b641b66f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool1;
				if ((($bool1=$p['op_is'](text, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widgets_by_name', $p['dict']([])) : $p['setattr'](self, 'widgets_by_name', $p['dict']([])); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget_instances', $p['dict']([])) : $p['setattr'](self, 'widget_instances', $p['dict']([])); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget_order', $p['dict']([])) : $p['setattr'](self, 'widget_order', $p['dict']([])); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widgets_by_class', $p['dict']([])) : $p['setattr'](self, 'widgets_by_class', $p['dict']([])); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('properties', null) : $p['setattr'](self, 'properties', null); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('components', null) : $p['setattr'](self, 'components', null); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('builder_text', null) : $p['setattr'](self, 'builder_text', null); 
					return null;
				}
				text = $p['str'](text);
				if ((($bool2=$p['op_eq'](text, $p['getattr'](self, 'builder_text'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('builder_text', text) : $p['setattr'](self, 'builder_text', text); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widgets_by_name', $p['dict']([])) : $p['setattr'](self, 'widgets_by_name', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget_instances', $p['dict']([])) : $p['setattr'](self, 'widget_instances', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widget_order', $p['dict']([])) : $p['setattr'](self, 'widget_order', $p['dict']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('widgets_by_class', $p['dict']([])) : $p['setattr'](self, 'widgets_by_class', $p['dict']([])); 
				var $tupleassign1 = $p['__ass_unpack']($m['XMLFile'](text)['parse'](), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('properties', $tupleassign1[0]) : $p['setattr'](self, 'properties', $tupleassign1[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('components', $tupleassign1[1]) : $p['setattr'](self, 'components', $tupleassign1[1]); 
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['setText'] = $method;
			$method = $pyjs__bind_method2('createInstance', function(instancename, eventTarget, targetItem, index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					instancename = arguments[1];
					eventTarget = arguments[2];
					targetItem = arguments[3];
					index = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '71e2f9ca19d4343dca243ce2b641b66f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof eventTarget == 'undefined') eventTarget=arguments['callee']['__args__'][4][1];
				if (typeof targetItem == 'undefined') targetItem=arguments['callee']['__args__'][5][1];
				if (typeof index == 'undefined') index=arguments['callee']['__args__'][6][1];
				var childs,widgets_by_class,frame,widget_order,$iter4_type,$iter4_iter,widgets_by_name,$bool24,props,addItem,widget_instances,$iter4_nextval,$iter4_idx,item,$iter4_array,$51,$52,$bool25;
				widget_instances = $p['dict']([]);
				widgets_by_name = $p['dict']([]);
				widgets_by_class = $p['dict']([]);
				widget_order = $p['list']([]);
				addItem = function(comp, props, childs, parentInstance, eventTarget) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
					var $bool18,$bool19,$bool10,$bool11,$bool12,child,$bool14,wprops,$bool16,$iter1_iter,$49,$48,$iter3_iter,$43,$42,$41,$40,$47,$46,$45,$44,$bool13,$iter2_type,added_already,$and1,$and2,$bool22,$bool15,listener,$bool3,$iter2_nextval,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,modname,name,l,item,$50,identifier,$bool17,elemprops,listener_name,index,$iter2_iter,tooltip,$bool21,$bool20,$bool23,childitem,$iter1_nextval,args,cname,$iter2_array,$iter3_array,$iter3_nextval,$iter1_array,$iter2_idx,$8,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19,n,$iter1_idx,kls,listen_add_fn,$29,$28,$iter3_idx,$21,$20,$23,$22,$25,$24,$27,$26,fname,klsname,$or4,$or1,$or3,$or2,listener_fn,$9,$iter3_type,$iter1_type,$38,$39,$36,$37,$34,$35,$32,$33,$30,$31;
					klsname = (typeof ($1=comp)['__array'] != 'undefined'?
						((typeof $1['__array'][$2='name']) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__']('name'));
					modname = comp['get']('module');
					if ((($bool3=$p['op_is'](modname, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						modname = '.'['join']($p['list'](['pyjamas.ui', klsname]));
					}
					kls = $m['Factory']['lookupClass']('.'['join']($p['list']([modname, klsname])));
					args = $p['dict']([]);
					wprops = $p['dict']([]);
					if ((($bool4=props['has_key']('common')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						wprops['update']((typeof ($3=props)['__array'] != 'undefined'?
							((typeof $3['__array'][$4='common']) != 'undefined'?$3['__array'][$4]:
								$3['__getitem__']($4)):
								$3['__getitem__']('common')));
					}
					if ((($bool5=props['has_key']('widget')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						wprops['update']((typeof ($5=props)['__array'] != 'undefined'?
							((typeof $5['__array'][$6='widget']) != 'undefined'?$5['__array'][$6]:
								$5['__getitem__']($6)):
								$5['__getitem__']('widget')));
					}
					$iter1_iter = kls['_getProps']();
					if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter['__iter__']();
						$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						n = $iter1_nextval;
						name = (typeof ($7=n)['__array'] != 'undefined'?
							((typeof $7['__array'][$8=$p['getattr']($m['ui'], 'PROP_NAME')]) != 'undefined'?$7['__array'][$8]:
								$7['__getitem__']($8)):
								$7['__getitem__']($p['getattr']($m['ui'], 'PROP_NAME')));
						if ((($bool7=!(($bool6=wprops['has_key'](name)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
							false :
							(typeof $bool6=='object'?
								(typeof $bool6['__nonzero__']=='function'?
									$bool6['__nonzero__']() :
									(typeof $bool6['__len__']=='function'?
										($bool6['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
							continue;
						}
						fname = (typeof ($9=n)['__array'] != 'undefined'?
							((typeof $9['__array'][$10=$p['getattr']($m['ui'], 'PROP_FNAM')]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__']($p['getattr']($m['ui'], 'PROP_FNAM')));
						if ((($bool8=$p['op_eq']((typeof ($11=wprops)['__array'] != 'undefined'?
							((typeof $11['__array'][$12=name]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__'](name)), '')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
							continue;
						}
						args['__setitem__'](fname, (typeof ($13=wprops)['__array'] != 'undefined'?
							((typeof $13['__array'][$14=name]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__'](name)));
					}
					item = $pyjs_kwargs_call(null, kls, null, args, [{}]);
					if ((($bool9=$p['hasattr'](item, '_setWeirdProps')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						item['_setWeirdProps'](wprops, $m['BuilderState'](self, eventTarget));
					}
					tooltip = wprops['get']('tooltip');
					if ((($bool10=!$p['op_is'](tooltip, null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						item['addMouseListener']($m['TooltipListener'](tooltip));
					}
					identifier = (typeof ($15=comp)['__array'] != 'undefined'?
						((typeof $15['__array'][$16='id']) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__']('id'));
					widget_order['append'](identifier);
					widgets_by_name['__setitem__'](identifier, klsname);
					widget_instances['__setitem__'](identifier, item);
					l = widgets_by_class['get'](klsname, $p['list']([]));
					l['append'](identifier);
					widgets_by_class['__setitem__'](klsname, l);
					$iter2_iter = $p['enumerate'](childs);
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 2, null);
						index = $tupleassign2[0];
						child = $tupleassign2[1];
						if ((($bool13=((($bool12=$or1=!(($bool11=(typeof ($17=child)['__array'] != 'undefined'?
							((typeof $17['__array'][$18=$constant_int_0]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__']($constant_int_0))['has_key']('type')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
							false :
							(typeof $bool11=='object'?
								(typeof $bool11['__nonzero__']=='function'?
									$bool11['__nonzero__']() :
									(typeof $bool11['__len__']=='function'?
										($bool11['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12['__nonzero__']=='function'?
									$bool12['__nonzero__']() :
									(typeof $bool12['__len__']=='function'?
										($bool12['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or1:$p['op_is']((typeof ($21=(typeof ($19=child)['__array'] != 'undefined'?
							((typeof $19['__array'][$20=$constant_int_0]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__']($constant_int_0)))['__array'] != 'undefined'?
							((typeof $21['__array'][$22='type']) != 'undefined'?$21['__array'][$22]:
								$21['__getitem__']($22)):
								$21['__getitem__']('type')), null))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
							continue;
						}
						childitem = addItem((typeof ($23=child)['__array'] != 'undefined'?
							((typeof $23['__array'][$24=$constant_int_0]) != 'undefined'?$23['__array'][$24]:
								$23['__getitem__']($24)):
								$23['__getitem__']($constant_int_0)), (typeof ($25=child)['__array'] != 'undefined'?
							((typeof $25['__array'][$26=$constant_int_1]) != 'undefined'?$25['__array'][$26]:
								$25['__getitem__']($26)):
								$25['__getitem__']($constant_int_1)), (typeof ($27=child)['__array'] != 'undefined'?
							((typeof $27['__array'][$28=$constant_int_2]) != 'undefined'?$27['__array'][$28]:
								$27['__getitem__']($28)):
								$27['__getitem__']($constant_int_2)), item, eventTarget);
						if ((($bool14=$p['op_is'](childitem, null)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
							continue;
						}
						item['addIndexedItem']((typeof ($31=(typeof ($29=child)['__array'] != 'undefined'?
							((typeof $29['__array'][$30=$constant_int_0]) != 'undefined'?$29['__array'][$30]:
								$29['__getitem__']($30)):
								$29['__getitem__']($constant_int_0)))['__array'] != 'undefined'?
							((typeof $31['__array'][$32='index']) != 'undefined'?$31['__array'][$32]:
								$31['__getitem__']($32)):
								$31['__getitem__']('index')), childitem);
						if ((($bool16=!(($bool15=props['__contains__']('elements')) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15['__nonzero__']=='function'?
									$bool15['__nonzero__']() :
									(typeof $bool15['__len__']=='function'?
										($bool15['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
							props['__setitem__']('elements', $p['dict']([]));
						}
						if ((($bool18=!(($bool17=(typeof ($33=props)['__array'] != 'undefined'?
							((typeof $33['__array'][$34='elements']) != 'undefined'?$33['__array'][$34]:
								$33['__getitem__']($34)):
								$33['__getitem__']('elements'))['__contains__'](index)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
							false :
							(typeof $bool17=='object'?
								(typeof $bool17['__nonzero__']=='function'?
									$bool17['__nonzero__']() :
									(typeof $bool17['__len__']=='function'?
										($bool17['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
							(typeof ($35=props)['__array'] != 'undefined'?
								((typeof $35['__array'][$36='elements']) != 'undefined'?$35['__array'][$36]:
									$35['__getitem__']($36)):
									$35['__getitem__']('elements'))['__setitem__'](index, $p['dict']([]));
						}
						elemprops = (typeof ($39=(typeof ($37=props)['__array'] != 'undefined'?
							((typeof $37['__array'][$38='elements']) != 'undefined'?$37['__array'][$38]:
								$37['__getitem__']($38)):
								$37['__getitem__']('elements')))['__array'] != 'undefined'?
							((typeof $39['__array'][$40=index]) != 'undefined'?$39['__array'][$40]:
								$39['__getitem__']($40)):
								$39['__getitem__'](index));
						item['setElementProperties'](childitem, elemprops);
						cname = (typeof ($43=(typeof ($41=child)['__array'] != 'undefined'?
							((typeof $41['__array'][$42=$constant_int_0]) != 'undefined'?$41['__array'][$42]:
								$41['__getitem__']($42)):
								$41['__getitem__']($constant_int_0)))['__array'] != 'undefined'?
							((typeof $43['__array'][$44='id']) != 'undefined'?$43['__array'][$44]:
								$43['__getitem__']($44)):
								$43['__getitem__']('id'));
						$p['setattr'](item, cname, childitem);
					}
					if ((($bool20=((($bool19=$and1=!$p['op_is'](eventTarget, null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19['__nonzero__']=='function'?
								$bool19['__nonzero__']() :
								(typeof $bool19['__len__']=='function'?
									($bool19['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?props['has_key']('events'):$and1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						added_already = $p['list']([]);
						$iter3_iter = (typeof ($45=props)['__array'] != 'undefined'?
							((typeof $45['__array'][$46='events']) != 'undefined'?$45['__array'][$46]:
								$45['__getitem__']($46)):
								$45['__getitem__']('events'))['items']();
						if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
							$iter3_type = 0;
						} else {
							$iter3_iter = $iter3_iter['__iter__']();
							$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter3_idx = 0;
						while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
							var $tupleassign3 = $p['__ass_unpack']($iter3_nextval, 2, null);
							listener_name = $tupleassign3[0];
							listener_fn = $tupleassign3[1];
							if ((($bool23=((($bool21=$or3=added_already['__contains__'](listener_name)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
								false :
								(typeof $bool21=='object'?
									(typeof $bool21['__nonzero__']=='function'?
										$bool21['__nonzero__']() :
										(typeof $bool21['__len__']=='function'?
											($bool21['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or3:!(($bool22=listener_fn) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
								false :
								(typeof $bool22=='object'?
									(typeof $bool22['__nonzero__']=='function'?
										$bool22['__nonzero__']() :
										(typeof $bool22['__len__']=='function'?
											($bool22['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) ))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
								continue;
							}
							args = $p['dict']([]);
							args['__setitem__'](listener_name, listener_fn);
							fname = (typeof ($49=(typeof ($47=$m['eventListeners'])['__array'] != 'undefined'?
								((typeof $47['__array'][$48=listener_name]) != 'undefined'?$47['__array'][$48]:
									$47['__getitem__']($48)):
									$47['__getitem__'](listener_name)))['__array'] != 'undefined'?
								((typeof $49['__array'][$50=$constant_int_0]) != 'undefined'?$49['__array'][$50]:
									$49['__getitem__']($50)):
									$49['__getitem__']($constant_int_0));
							listener = $pyjs_kwargs_call(null, $m['MultiListener'], null, args, [{}, eventTarget]);
							$p['setattr'](item, $p['sprintf']('_%sListener', fname), listener);
							listen_add_fn = $p['getattr'](item, fname);
							listen_add_fn(listener);
						}
					}
					return item;
				};
				addItem['__name__'] = 'addItem';

				addItem['__bind_type__'] = 0;
				addItem['__args__'] = [null,null,['comp'],['props'],['childs'],['parentInstance'],['eventTarget']];
				$iter4_iter = $p['getattr'](self, 'components');
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter4_nextval, 3, null);
					frame = $tupleassign4[0];
					props = $tupleassign4[1];
					childs = $tupleassign4[2];
					if ((($bool24=!$p['op_eq']((typeof ($51=frame)['__array'] != 'undefined'?
						((typeof $51['__array'][$52='id']) != 'undefined'?$51['__array'][$52]:
							$51['__getitem__']($52)):
							$51['__getitem__']('id')), instancename)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
						continue;
					}
					if ((($bool25=!$p['op_is'](index, null)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
						frame['__setitem__']('index', index);
					}
					item = addItem(frame, props, childs, targetItem, eventTarget);
					$p['getattr'](self, 'widget_instances')['__setitem__'](instancename, widget_instances);
					$p['getattr'](self, 'widgets_by_name')['__setitem__'](instancename, widgets_by_name);
					$p['getattr'](self, 'widgets_by_class')['__setitem__'](instancename, widgets_by_class);
					$p['getattr'](self, 'widget_order')['__setitem__'](instancename, widget_order);
					return item;
				}
				return null;
			}
	, 1, [null,null,['self'],['instancename'],['eventTarget', null],['targetItem', null],['index', null]]);
			$cls_definition['createInstance'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Builder', $p['tuple']($bases), $data);
		})();
		$m['HTTPUILoader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.builder.Builder';
			$cls_definition['__md5__'] = '27e2bbf053e3dff5f7db9bacb41e830d';
			$method = $pyjs__bind_method2('__init__', function(app) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					app = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27e2bbf053e3dff5f7db9bacb41e830d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('app', app) : $p['setattr'](self, 'app', app); 
				return null;
			}
	, 1, [null,null,['self'],['app']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('load', function(xml_file) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					xml_file = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27e2bbf053e3dff5f7db9bacb41e830d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['HTTPRequest']()['asyncGet'](xml_file, self);
				return null;
			}
	, 1, [null,null,['self'],['xml_file']]);
			$cls_definition['load'] = $method;
			$method = $pyjs__bind_method2('onCompletion', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27e2bbf053e3dff5f7db9bacb41e830d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['app']['onUILoaded'](text);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onCompletion'] = $method;
			$method = $pyjs__bind_method2('onError', function(text, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27e2bbf053e3dff5f7db9bacb41e830d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['app']['onUILoadError'](text, code);
				return null;
			}
	, 1, [null,null,['self'],['text'],['code']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('onTimeout', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '27e2bbf053e3dff5f7db9bacb41e830d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['app']['onUILoadingTimeout'](text);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onTimeout'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HTTPUILoader', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.builder.Builder */


/* end module: pyjamas.builder.Builder */


/*
PYJS_DEPS: ['pyjamas.builder.XMLFile.XMLFile', 'pyjamas', 'pyjamas.builder', 'pyjamas.builder.XMLFile', 'pyjamas.Factory', 'pyjamas.ui', 'pyjamas.ui.MultiListener.MultiListener', 'pyjamas.ui.MultiListener', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.ui.Tooltip.TooltipListener', 'pyjamas.ui.Tooltip']
*/
