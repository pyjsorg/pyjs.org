/* start module: pyjamas.ui.SplitPanel */
$pyjs.loaded_modules['pyjamas.ui.SplitPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.SplitPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.SplitPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.SplitPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.SplitPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.SplitPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['SplitPanel'] = $pyjs.loaded_modules['pyjamas.ui.SplitPanel'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
		$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', 'pyjamas.ui', null, false);
		$m['EventGenerator'] = $p['___import___']('pyjamas.EventController.EventGenerator', 'pyjamas.ui', null, false);
		$m['GlassWidget'] = $p['___import___']('pyjamas.ui.GlassWidget', 'pyjamas.ui', null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui', null, false);
		$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui', null, false);
		$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
		$m['fireMouseEvent'] = $p['___import___']('pyjamas.ui.MouseListener.fireMouseEvent', 'pyjamas.ui', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$m['SplitPanelSplitter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.SplitPanel';
			$cls_definition.__md5__ = 'fc1f5ab7bd443f7689d9fe4ebb4479d8';
			$method = $pyjs__bind_method2('__init__', function(splitPanel) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					splitPanel = arguments[1];
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc1f5ab7bd443f7689d9fe4ebb4479d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof splitPanel != 'undefined') {
						if (splitPanel !== null && typeof splitPanel['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = splitPanel;
							splitPanel = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var elem;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_splitpanel', splitPanel) : $p['setattr'](self, '_splitpanel', splitPanel); 
				$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self]);
				$m['MouseHandler']['__init__'](self);
				self['addMouseListener'](self);
				elem = self['getElement']();
				$m['DOM']['setStyleAttribute'](elem, 'overflow', 'hidden');
				return null;
			}
	, 1, [null,['kwargs'],['self'],['splitPanel']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc1f5ab7bd443f7689d9fe4ebb4479d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1,ev;
				ev = $m['DOM']['eventGetCurrentEvent']();
				if ((($bool1=!$p['op_eq']($m['DOM']['eventGetButton'](ev), $p['getattr']($m['Event'], 'BUTTON_LEFT'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					return null;
				}
				$m['DOM']['eventPreventDefault']($m['DOM']['eventGetCurrentEvent']());
				self['_splitpanel']['startSplitterDrag'](x, y);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			var $bases = new Array($m['SimplePanel'],$m['MouseHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SplitPanelSplitter', $p['tuple']($bases), $data);
		})();
		$m['SplitPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.SplitPanel';
			$cls_definition.__md5__ = '8189fd21932ffa185e778c84d89e7653';
			$method = $pyjs__bind_method2('__init__', function(vertical) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					vertical = arguments[1];
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof vertical != 'undefined') {
						if (vertical !== null && typeof vertical['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = vertical;
							vertical = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof vertical == 'undefined') vertical=arguments.callee.__args__[3][1];
				var $bool5,$bool2,$bool3,$bool4;
				if ((($bool3=!(($bool2=kwargs.__contains__('StyleName')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					if ((($bool4=vertical) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						kwargs.__setitem__('StyleName', 'gwt-VerticalSplitPanel');
					}
					else {
						kwargs.__setitem__('StyleName', 'gwt-HorizontalSplitPanel');
					}
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_drag_start', null) : $p['setattr'](self, '_drag_start', null); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_pos', '50%') : $p['setattr'](self, '_pos', '50%'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_vertical', vertical) : $p['setattr'](self, '_vertical', vertical); 
				$pyjs_kwargs_call($m['AbsolutePanel'], '__init__', null, kwargs, [{}, self]);
				$m['MouseHandler']['__init__'](self);
				self['addListenedEvent']('Resize');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_container1', $m['ScrollPanel']()) : $p['setattr'](self, '_container1', $m['ScrollPanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_container2', $m['ScrollPanel']()) : $p['setattr'](self, '_container2', $m['ScrollPanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_splitter', $m['SplitPanelSplitter'](self)) : $p['setattr'](self, '_splitter', $m['SplitPanelSplitter'](self)); 
				self['_splitter']['addMouseListener'](self);
				self['addMouseListener'](self);
				$m['AbsolutePanel']['add'](self, $p['getattr'](self, '_container1'), $constant_int_0, $constant_int_0);
				$m['AbsolutePanel']['add'](self, $p['getattr'](self, '_splitter'), $constant_int_0, $constant_int_0);
				$m['AbsolutePanel']['add'](self, $p['getattr'](self, '_container2'), $constant_int_0, $constant_int_0);
				if ((($bool5=vertical) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['_splitter']['setStyleName']('vsplitter');
					self['_splitter']['setWidth']('100%');
					self['_container1']['setWidth']('100%');
					self['_container2']['setWidth']('100%');
					$m['DOM']['setStyleAttribute'](self['_splitter']['getElement'](), 'cursor', 'n-resize');
				}
				else {
					self['_splitter']['setStyleName']('hsplitter');
					self['_splitter']['setHeight']('100%');
					self['_container1']['setHeight']('100%');
					self['_container2']['setHeight']('100%');
					$m['DOM']['setStyleAttribute'](self['_splitter']['getElement'](), 'cursor', 'e-resize');
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['vertical', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onAttach', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['AbsolutePanel']['onAttach'](self);
				self['setSplitPosition']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onAttach'] = $method;
			$method = $pyjs__bind_method2('_finalizePositions', function(pos) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments.callee.__args__[3][1];
				var finalized,$bool10,$bool11,$bool12,$bool13,$bool14,$bool16,$bool17,space,$sub9,$sub8,$sub12,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$sub10,$cmp4,$and1,$and2,$and3,$and4,$and5,$and6,$bool15,$cmp15,$cmp14,$cmp16,$bool6,$bool7,$cmp13,$cmp12,$bool8,$bool9,$cmp5,sz,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$cmp9,$cmp8,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$sub11,$cmp11,$add8,$cmp10;
				finalized = false;
				if ((($bool6=$p['getattr'](self, '_vertical')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					if ((($bool7=$p['op_is'](pos, null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						pos = self['_container1']['getOffsetHeight']();
					}
					space = self['getOffsetHeight']();
					sz = self['_splitter']['getOffsetHeight']();
					if ((($bool10=((($bool8=$and1=((($cmp1=space)===($cmp2=$constant_int_0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool9=$and2=((($cmp3=sz)===($cmp4=$constant_int_0)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9.__nonzero__=='function'?
								$bool9.__nonzero__() :
								(typeof $bool9.__len__=='function'?
									($bool9.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp5=pos)===($cmp6=$constant_int_0)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == 1):$and2):$and1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
							false :
							(typeof $bool10=='object'?
								(typeof $bool10.__nonzero__=='function'?
									$bool10.__nonzero__() :
									(typeof $bool10.__len__=='function'?
										($bool10.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool11=((($cmp7=pos)===($cmp8=(typeof ($sub1=space)==typeof ($sub2=sz) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2)))?0:
							(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
								($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
								$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
							pos = (typeof ($sub3=space)==typeof ($sub4=sz) && (typeof $sub3=='number'||typeof $sub3=='string')?
								$sub3-$sub4:
								$p['op_sub']($sub3,$sub4));
							self['_container1']['setHeight'](pos);
						}
						self['setWidgetPosition']($p['getattr'](self, '_splitter'), $constant_int_0, pos);
						self['setWidgetPosition']($p['getattr'](self, '_container2'), $constant_int_0, (typeof ($add1=pos)==typeof ($add2=sz) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2)));
						self['_container2']['setHeight']((typeof ($sub5=space)==typeof ($sub6=(typeof ($add3=pos)==typeof ($add4=sz) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4))) && (typeof $sub5=='number'||typeof $sub5=='string')?
							$sub5-$sub6:
							$p['op_sub']($sub5,$sub6)));
						finalized = true;
					}
				}
				else {
					if ((($bool12=$p['op_is'](pos, null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						pos = self['_container1']['getOffsetWidth']();
					}
					space = self['getOffsetWidth']();
					sz = self['_splitter']['getOffsetWidth']();
					if ((($bool15=((($bool13=$and4=((($cmp9=space)===($cmp10=$constant_int_0)?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool14=$and5=((($cmp11=sz)===($cmp12=$constant_int_0)?0:
						(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
							($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
							$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14.__nonzero__=='function'?
								$bool14.__nonzero__() :
								(typeof $bool14.__len__=='function'?
									($bool14.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp13=pos)===($cmp14=$constant_int_0)?0:
						(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
							($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
							$p['cmp']($cmp13, $cmp14))) == 1):$and5):$and4)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15.__nonzero__=='function'?
									$bool15.__nonzero__() :
									(typeof $bool15.__len__=='function'?
										($bool15.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool16=((($cmp15=pos)===($cmp16=(typeof ($sub7=space)==typeof ($sub8=sz) && (typeof $sub7=='number'||typeof $sub7=='string')?
							$sub7-$sub8:
							$p['op_sub']($sub7,$sub8)))?0:
							(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
								($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
								$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
								false :
								(typeof $bool16=='object'?
									(typeof $bool16.__nonzero__=='function'?
										$bool16.__nonzero__() :
										(typeof $bool16.__len__=='function'?
											($bool16.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							pos = (typeof ($sub9=space)==typeof ($sub10=sz) && (typeof $sub9=='number'||typeof $sub9=='string')?
								$sub9-$sub10:
								$p['op_sub']($sub9,$sub10));
							self['_container1']['setWidth'](pos);
						}
						self['setWidgetPosition']($p['getattr'](self, '_splitter'), pos, $constant_int_0);
						self['setWidgetPosition']($p['getattr'](self, '_container2'), (typeof ($add5=pos)==typeof ($add6=sz) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6)), $constant_int_0);
						self['_container2']['setWidth']((typeof ($sub11=space)==typeof ($sub12=(typeof ($add7=pos)==typeof ($add8=sz) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8))) && (typeof $sub11=='number'||typeof $sub11=='string')?
							$sub11-$sub12:
							$p['op_sub']($sub11,$sub12)));
						finalized = true;
					}
				}
				if ((($bool17=finalized) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['dispatchResizeEvent'](self, pos);
				}
				return finalized;
			}
	, 1, [null,null,['self'],['pos', null]]);
			$cls_definition['_finalizePositions'] = $method;
			$method = $pyjs__bind_method2('_stopDragging', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18;
				if ((($bool18=!$p['op_is']($p['getattr'](self, '_drag_start'), null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18.__nonzero__=='function'?
								$bool18.__nonzero__() :
								(typeof $bool18.__len__=='function'?
									($bool18.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_drag_start', null) : $p['setattr'](self, '_drag_start', null); 
					$m['GlassWidget']['hide']();
					$m['DOM']['eventCancelBubble']($m['DOM']['eventGetCurrentEvent'](), true);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_stopDragging'] = $method;
			$method = $pyjs__bind_method2('_isDragging', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return !$p['op_is']($p['getattr'](self, '_drag_start'), null);
			}
	, 1, [null,null,['self']]);
			$cls_definition['_isDragging'] = $method;
			$method = $pyjs__bind_method2('startSplitterDrag', function(x, y) {
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
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool20,$bool19;
				if ((($bool19=$p['op_is']($p['getattr'](self, '_drag_start'), null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool20=$p['getattr'](self, '_vertical')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
							false :
							(typeof $bool20=='object'?
								(typeof $bool20.__nonzero__=='function'?
									$bool20.__nonzero__() :
									(typeof $bool20.__len__=='function'?
										($bool20.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_drag_start', y) : $p['setattr'](self, '_drag_start', y); 
					}
					else {
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_drag_start', x) : $p['setattr'](self, '_drag_start', x); 
					}
					$m['GlassWidget']['show'](self);
				}
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['startSplitterDrag'] = $method;
			$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$sub16,$sub15,$sub14,$bool24,$cmp17,$bool21,$bool23,$bool22,$cmp18;
				if ((($bool22=!(($bool21=self['_isDragging']()) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool23=$p['getattr'](self, '_vertical')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23.__nonzero__=='function'?
								$bool23.__nonzero__() :
								(typeof $bool23.__len__=='function'?
									($bool23.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_pos', (typeof ($sub13=y)==typeof ($sub14=$p['getattr'](self, '_drag_start')) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14))) : $p['setattr'](self, '_pos', (typeof ($sub13=y)==typeof ($sub14=$p['getattr'](self, '_drag_start')) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14))); 
				}
				else {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_pos', (typeof ($sub15=x)==typeof ($sub16=$p['getattr'](self, '_drag_start')) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16))) : $p['setattr'](self, '_pos', (typeof ($sub15=x)==typeof ($sub16=$p['getattr'](self, '_drag_start')) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16))); 
				}
				if ((($bool24=((($cmp17=$p['getattr'](self, '_pos'))===($cmp18=$constant_int_1)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_pos', $constant_int_1) : $p['setattr'](self, '_pos', $constant_int_1); 
				}
				self['setSplitPosition']();
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool25,$bool26,ev;
				ev = $m['DOM']['eventGetCurrentEvent']();
				if ((($bool25=!$p['op_eq']($m['DOM']['eventGetButton'](ev), $p['getattr']($m['Event'], 'BUTTON_LEFT'))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25.__nonzero__=='function'?
								$bool25.__nonzero__() :
								(typeof $bool25.__len__=='function'?
									($bool25.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				$m['DOM']['eventPreventDefault'](ev);
				if ((($bool26=self['_isDragging']()) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26.__nonzero__=='function'?
								$bool26.__nonzero__() :
								(typeof $bool26.__len__=='function'?
									($bool26.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_stopDragging']();
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$method = $pyjs__bind_method2('onMouseGlassEnter', function(sender) {
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
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseGlassEnter'] = $method;
			$method = $pyjs__bind_method2('onMouseGlassLeave', function(sender) {
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
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_stopDragging']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseGlassLeave'] = $method;
			$method = $pyjs__bind_method2('setSplitPosition', function(pos) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments.callee.__args__[3][1];
				var $bool32,finalized,$bool29,$cmp20,$bool27,$bool31,$bool30,$cmp19,$bool28;
				if ((($bool27=!$p['op_is'](pos, null)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27.__nonzero__=='function'?
								$bool27.__nonzero__() :
								(typeof $bool27.__len__=='function'?
									($bool27.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_pos', pos) : $p['setattr'](self, '_pos', pos); 
				}
				else {
					pos = $p['getattr'](self, '_pos');
				}
				if ((($bool28=((($cmp19=pos)===($cmp20=$constant_int_1)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28.__nonzero__=='function'?
								$bool28.__nonzero__() :
								(typeof $bool28.__len__=='function'?
									($bool28.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					pos = $constant_int_1;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_pos', pos) : $p['setattr'](self, '_pos', pos); 
				}
				if ((($bool29=$p['getattr'](self, '_vertical')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29.__nonzero__=='function'?
								$bool29.__nonzero__() :
								(typeof $bool29.__len__=='function'?
									($bool29.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_container1']['setHeight'](pos);
				}
				else {
					self['_container1']['setWidth'](pos);
				}
				finalized = false;
				if ((($bool30=$p['isinstance'](pos, $p['int'])) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30.__nonzero__=='function'?
								$bool30.__nonzero__() :
								(typeof $bool30.__len__=='function'?
									($bool30.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					finalized = self['_finalizePositions'](pos);
				}
				if ((($bool32=!(($bool31=finalized) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['DeferredCommand']['add']($p['getattr'](self, '_finalizePositions'));
				}
				return null;
			}
	, 1, [null,null,['self'],['pos', null]]);
			$cls_definition['setSplitPosition'] = $method;
			$method = $pyjs__bind_method2('getWidget', function(index) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool33;
				if ((($bool33=$p['op_eq'](index, $constant_int_0)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return self['_container1']['getWidget']();
				}
				return self['_container2']['getWidget']();
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getWidget'] = $method;
			$method = $pyjs__bind_method2('setWidget', function(index, widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					widget = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool34;
				if ((($bool34=$p['op_eq'](index, $constant_int_0)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34.__nonzero__=='function'?
								$bool34.__nonzero__() :
								(typeof $bool34.__len__=='function'?
									($bool34.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return self['_container1']['setWidget'](widget);
				}
				return self['_container2']['setWidget'](widget);
			}
	, 1, [null,null,['self'],['index'],['widget']]);
			$cls_definition['setWidget'] = $method;
			$method = $pyjs__bind_method2('add', function(widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool36,$bool35;
				if ((($bool35=$p['op_eq'](self['getWidget']($constant_int_0), null)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setWidget']($constant_int_0, widget);
				}
				else if ((($bool36=$p['op_eq'](self['getWidget']($constant_int_1), null)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36.__nonzero__=='function'?
								$bool36.__nonzero__() :
								(typeof $bool36.__len__=='function'?
									($bool36.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setWidget']($constant_int_1, widget);
				}
				else {
					console['error']('SimplePanel can only contain one child widget');
				}
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('remove', function(widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool38,$bool37;
				if ((($bool37=$p['op_eq'](self['getWidget']($constant_int_0), widget)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37.__nonzero__=='function'?
								$bool37.__nonzero__() :
								(typeof $bool37.__len__=='function'?
									($bool37.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_container1']['remove'](widget);
				}
				else if ((($bool38=$p['op_eq'](self['getWidget']($constant_int_1), widget)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38.__nonzero__=='function'?
								$bool38.__nonzero__() :
								(typeof $bool38.__len__=='function'?
									($bool38.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_container2']['remove'](widget);
				}
				else {
					$m['AbsolutePanel']['remove'](self, widget);
				}
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$method = $pyjs__bind_method2('getElement', function(index) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof index == 'undefined') index=arguments.callee.__args__[3][1];
				var $bool39;
				if ((($bool39=$p['op_is'](index, null)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39.__nonzero__=='function'?
								$bool39.__nonzero__() :
								(typeof $bool39.__len__=='function'?
									($bool39.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $m['AbsolutePanel']['getElement'](self);
				}
				return self['getWidget'](index)['getElement']();
			}
	, 1, [null,null,['self'],['index', null]]);
			$cls_definition['getElement'] = $method;
			$method = $pyjs__bind_method2('getEndOfLineWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getWidget']($constant_int_1);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getEndOfLineWidget'] = $method;
			$method = $pyjs__bind_method2('getSplitElement', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['_splitter']['getElement']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSplitElement'] = $method;
			$method = $pyjs__bind_method2('getStartOfLineWidget', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['getWidget']($constant_int_0);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getStartOfLineWidget'] = $method;
			$method = $pyjs__bind_method2('isResizing', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return false;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isResizing'] = $method;
			$method = $pyjs__bind_method2('setEndOfLineWidget', function(widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setWidget']($constant_int_1, widget);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['setEndOfLineWidget'] = $method;
			$method = $pyjs__bind_method2('setStartOfLineWidget', function(widget) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8189fd21932ffa185e778c84d89e7653') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setWidget']($constant_int_0, widget);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['setStartOfLineWidget'] = $method;
			var $bases = new Array($m['AbsolutePanel'],$m['MouseHandler'],$m['EventGenerator']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SplitPanel', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.SplitPanel */


/* end module: pyjamas.ui.SplitPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.DeferredCommand', 'pyjamas.EventController.EventGenerator', 'pyjamas.EventController', 'pyjamas.ui.GlassWidget', 'pyjamas.ui', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.MouseListener.fireMouseEvent', 'pyjamas.ui.Event']
*/
