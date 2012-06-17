/* start module: GChartExample20 */
$pyjs.loaded_modules['GChartExample20'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample20'].__was_initialized__) return $pyjs.loaded_modules['GChartExample20'];
	var $m = $pyjs.loaded_modules["GChartExample20"];
	$m.__repr__ = function() { return "<module: GChartExample20>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample20';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_55 = new $p['int'](55);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_65 = new $p['int'](65);
		var $constant_int_70 = new $p['int'](70);
		var $constant_int_75 = new $p['int'](75);
		var $constant_int_80 = new $p['int'](80);
		var $constant_int_85 = new $p['int'](85);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_95 = new $p['int'](95);
		var $constant_int_100 = new $p['int'](100);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
		$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
		$m['TouchedPointUpdateOption'] = $p['___import___']('pyjamas.chart.TouchedPointUpdateOption', null, null, false);
		$m['LABEL_COL'] = $constant_int_0;
		$m['OBJECT_COL'] = $constant_int_1;
		$m['N_COLS'] = $constant_int_2;
		$m['N_SLICES'] = $constant_int_5;
		$m['ObjectSelectorDropdownList'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GChartExample20';
			$cls_definition.__md5__ = 'bab95b0919585c7d00c7f9814e05688a';
			$method = $pyjs__bind_method2('__init__', function(labelObjectPairs) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					labelObjectPairs = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bab95b0919585c7d00c7f9814e05688a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,$4,$iter1_iter,$iter1_array,$len1,$1,$2,$3,$iter1_idx;
				$m['ListBox']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('labelObjectPairs', labelObjectPairs) : $p['setattr'](self, 'labelObjectPairs', labelObjectPairs); 
				self['setVisibleItemCount']($constant_int_1);
				$iter1_iter = $p['range']((($len1=labelObjectPairs) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['addItem']((typeof ($3=(typeof ($1=labelObjectPairs).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i))).__array != 'undefined'?
						((typeof $3.__array[$4=$m['LABEL_COL']]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__($m['LABEL_COL'])));
				}
				return null;
			}
	, 1, [null,null,['self'],['labelObjectPairs']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getObject', function(index) {
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
					if (self.prototype.__md5__ !== 'bab95b0919585c7d00c7f9814e05688a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result,$8,$6,$7,$5;
				result = (typeof ($7=(typeof ($5=$p['getattr'](self, 'labelObjectPairs')).__array != 'undefined'?
					((typeof $5.__array[$6=index]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(index))).__array != 'undefined'?
					((typeof $7.__array[$8=$m['OBJECT_COL']]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($m['OBJECT_COL']));
				return result;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getObject'] = $method;
			$method = $pyjs__bind_method2('getSelectedObject', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bab95b0919585c7d00c7f9814e05688a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var result;
				result = self['getObject'](self['getSelectedIndex']());
				return result;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSelectedObject'] = $method;
			$method = $pyjs__bind_method2('setSelectedObject', function(selectedObject) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					selectedObject = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bab95b0919585c7d00c7f9814e05688a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$11,$iter2_iter,i,$iter2_idx,$bool1,$len2,$12,$9,$10,$iter2_array;
				$iter2_iter = $p['range']((($len2=$p['getattr'](self, 'labelObjectPairs')) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					if ((($bool1=$p['op_eq'](selectedObject, (typeof ($11=(typeof ($9=$p['getattr'](self, 'labelObjectPairs')).__array != 'undefined'?
						((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(i))).__array != 'undefined'?
						((typeof $11.__array[$12=$m['OBJECT_COL']]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__($m['OBJECT_COL'])))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						self['setSelectedIndex'](i);
						return null;
					}
				}
				throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('selectedObject specified was not found on the labelObjectPairs list.'));
				return null;
			}
	, 1, [null,null,['self'],['selectedObject']]);
			$cls_definition['setSelectedObject'] = $method;
			$method = $pyjs__bind_method2('getNObjects', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bab95b0919585c7d00c7f9814e05688a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len3;
				return (($len3=$p['getattr'](self, 'labelObjectPairs')) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3)))));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getNObjects'] = $method;
			var $bases = new Array($m['ListBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ObjectSelectorDropdownList', $p['tuple']($bases), $data);
		})();
		$m['ColorSpec'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GChartExample20';
			$cls_definition.__md5__ = '6921539e76c506efe6470f765932bd4f';
			$method = $pyjs__bind_method2('__init__', function(backgroundColor, borderColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					backgroundColor = arguments[1];
					borderColor = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6921539e76c506efe6470f765932bd4f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('backgroundColor', backgroundColor) : $p['setattr'](self, 'backgroundColor', backgroundColor); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('borderColor', borderColor) : $p['setattr'](self, 'borderColor', borderColor); 
				return null;
			}
	, 1, [null,null,['self'],['backgroundColor'],['borderColor']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ColorSpec', $p['tuple']($bases), $data);
		})();
		$m['SliceEditor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GChartExample20';
			$cls_definition.__md5__ = '7505d73bfc96dc7af4a0f8049bcb9863';
			$method = $pyjs__bind_method2('__init__', function(chart) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					chart = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7505d73bfc96dc7af4a0f8049bcb9863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var commandBar,propertyForm,sliceSwitcher,mainPanel;
				$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{autoHide:true, modal:true}, self]);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('chart', chart) : $p['setattr'](self, 'chart', chart); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('isFirstTime', true) : $p['setattr'](self, 'isFirstTime', true); 
				mainPanel = $m['VerticalPanel']();
				propertyForm = $m['FlexTable']();
				commandBar = $m['DockPanel']();
				sliceSwitcher = $m['HorizontalPanel']();
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('prevSlice', $m['Button']('&lt;Prev Slice', self)) : $p['setattr'](self, 'prevSlice', $m['Button']('&lt;Prev Slice', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('nextSlice', $m['Button']('Next Slice&gt;', self)) : $p['setattr'](self, 'nextSlice', $m['Button']('Next Slice&gt;', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('closeButton', $m['Button']('Close', self)) : $p['setattr'](self, 'closeButton', $m['Button']('Close', self)); 
				self['chart']['colorSelector']['addChangeListener'](self);
				self['chart']['sliceSizeSelector']['addChangeListener'](self);
				self['chart']['shadingSelector']['addChangeListener'](self);
				propertyForm['setSize']($constant_int_3, $constant_int_2);
				propertyForm['setText']($constant_int_0, $constant_int_0, 'Color:');
				propertyForm['setWidget']($constant_int_0, $constant_int_1, $p['getattr']($p['getattr'](self, 'chart'), 'colorSelector'));
				propertyForm['setText']($constant_int_1, $constant_int_0, 'Shading Pattern:');
				propertyForm['setWidget']($constant_int_1, $constant_int_1, $p['getattr']($p['getattr'](self, 'chart'), 'shadingSelector'));
				propertyForm['setText']($constant_int_2, $constant_int_0, 'Slice Size:');
				propertyForm['setWidget']($constant_int_2, $constant_int_1, $p['getattr']($p['getattr'](self, 'chart'), 'sliceSizeSelector'));
				sliceSwitcher['add']($p['getattr'](self, 'prevSlice'));
				sliceSwitcher['add']($p['getattr'](self, 'nextSlice'));
				commandBar['add'](sliceSwitcher, $p['getattr']($m['DockPanel'], 'WEST'));
				commandBar['add']($p['getattr'](self, 'closeButton'), $p['getattr']($m['DockPanel'], 'EAST'));
				commandBar['setCellHorizontalAlignment']($p['getattr'](self, 'closeButton'), $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_RIGHT'));
				commandBar['setWidth']('100%');
				mainPanel['add'](propertyForm);
				mainPanel['add'](commandBar);
				self['setWidget'](mainPanel);
				return null;
			}
	, 1, [null,null,['self'],['chart']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onChange', function(sender) {
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
					if (self.prototype.__md5__ !== '7505d73bfc96dc7af4a0f8049bcb9863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['copyFormPropertiesIntoChart'](self['chart']['getTouchedPoint']());
				self['chart']['update']($p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_LOCKED'));
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('copyChartPropertiesIntoForm', function(p) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					p = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7505d73bfc96dc7af4a0f8049bcb9863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sliceSize,$mul2,$mul1;
				self['setText']($p['sprintf']('Slice %d Properties ', self['chart']['getCurveIndex'](p['getParent']())));
				self['chart']['colorSelector']['setSelectedObject'](self['getColorSpec'](p['getParent']()['getSymbol']()['getBackgroundColor'](), p['getParent']()['getSymbol']()['getBorderColor']()));
				self['chart']['shadingSelector']['setSelectedObject'](p['getParent']()['getSymbol']()['getSymbolType']());
				sliceSize = $p['round']((typeof ($mul1=$constant_int_100)==typeof ($mul2=p['getParent']()['getSymbol']()['getPieSliceSize']()) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				self['chart']['sliceSizeSelector']['setSelectedObject']($p['int'](sliceSize));
				return null;
			}
	, 1, [null,null,['self'],['p']]);
			$cls_definition['copyChartPropertiesIntoForm'] = $method;
			$method = $pyjs__bind_method2('copyFormPropertiesIntoChart', function(p) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					p = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7505d73bfc96dc7af4a0f8049bcb9863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sliceSize,$div1,$div2;
				p['getParent']()['getSymbol']()['setBackgroundColor']($p['getattr'](self['chart']['colorSelector']['getSelectedObject'](), 'backgroundColor'));
				p['getParent']()['getSymbol']()['setBorderColor']($p['getattr'](self['chart']['colorSelector']['getSelectedObject'](), 'borderColor'));
				p['getParent']()['getSymbol']()['setHoverSelectionBorderColor']($p['getattr'](self['chart']['colorSelector']['getSelectedObject'](), 'backgroundColor'));
				p['getParent']()['getSymbol']()['setHoverSelectionBackgroundColor']($p['getattr'](self['chart']['colorSelector']['getSelectedObject'](), 'borderColor'));
				p['getParent']()['getSymbol']()['setSymbolType'](self['chart']['shadingSelector']['getSelectedObject']());
				sliceSize = $p['int'](self['chart']['sliceSizeSelector']['getSelectedObject']());
				p['getParent']()['getSymbol']()['setPieSliceSize']((typeof ($div1=sliceSize)==typeof ($div2=100.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)));
				return null;
			}
	, 1, [null,null,['self'],['p']]);
			$cls_definition['copyFormPropertiesIntoChart'] = $method;
			$method = $pyjs__bind_method2('getColorSpec', function(backgroundColor, borderColor) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					backgroundColor = arguments[1];
					borderColor = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7505d73bfc96dc7af4a0f8049bcb9863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,i,$and1,$iter3_array,$bool2,$bool3,$and2,$iter3_iter,$iter3_type,cs,$iter3_nextval;
				$iter3_iter = $p['range'](self['chart']['colorSelector']['getNObjects']());
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					cs = self['chart']['colorSelector']['getObject'](i);
					if ((($bool3=((($bool2=$and1=$p['op_eq'](backgroundColor, $p['getattr'](cs, 'backgroundColor'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq'](borderColor, $p['getattr'](cs, 'borderColor')):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						return cs;
					}
				}
				throw ((typeof IllegalArgumentException == "undefined"?$m.IllegalArgumentException:IllegalArgumentException)('Attempt to retrieve a non-existing color combination.'));
				return null;
			}
	, 1, [null,null,['self'],['backgroundColor'],['borderColor']]);
			$cls_definition['getColorSpec'] = $method;
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
					if (self.prototype.__md5__ !== '7505d73bfc96dc7af4a0f8049bcb9863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,$bool4,$bool5;
				if ((($bool4=$p['op_eq'](sender, $p['getattr'](self, 'prevSlice'))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['chart']['onClickPrevSlice'](sender);
				}
				else if ((($bool5=$p['op_eq'](sender, $p['getattr'](self, 'nextSlice'))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['chart']['onClickNextSlice'](sender);
				}
				else if ((($bool6=$p['op_eq'](sender, $p['getattr'](self, 'closeButton'))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['onClickClose'](sender);
				}
				else {
					self['onClickDefault'](sender);
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onClickClose', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7505d73bfc96dc7af4a0f8049bcb9863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['hide']();
				self['chart']['touch'](null);
				self['chart']['update']($p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_LOCKED'));
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClickClose'] = $method;
			$method = $pyjs__bind_method2('onClickDefault', function(sender) {
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
					if (self.prototype.__md5__ !== '7505d73bfc96dc7af4a0f8049bcb9863') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$bool7,$add4,$bool8,event;
				if ((($bool7=$p['op_eq'](null, self['chart']['getTouchedPoint']())) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					return null;
				}
				event = $m['DOM']['eventGetCurrentEvent']();
				self['copyChartPropertiesIntoForm'](self['chart']['getTouchedPoint']());
				if ((($bool8=$p['getattr'](self, 'isFirstTime')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					self['setPopupPosition']((typeof ($add1=$m['Window']['getScrollLeft']())==typeof ($add2=$m['DOM']['eventGetClientX'](event)) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)), (typeof ($add3=$m['Window']['getScrollTop']())==typeof ($add4=$m['DOM']['eventGetClientX'](event)) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)));
					self['show']();
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('isFirstTime', false) : $p['setattr'](self, 'isFirstTime', false); 
				}
				else {
					self['show']();
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClickDefault'] = $method;
			var $bases = new Array($m['DialogBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SliceEditor', $p['tuple']($bases), $data);
		})();
		$m['GChartExample20'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GChartExample20';
			$cls_definition.__md5__ = 'dab7a9f0ad31ee617a84c94a622eebdc';
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
					if (self.prototype.__md5__ !== 'dab7a9f0ad31ee617a84c94a622eebdc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$13,iCurve,$iter4_nextval,SOURCE_CODE_LINK,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,initSliceSize;
				$m['GChart']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('colorSelector', $m['ObjectSelectorDropdownList']($p['list']([$p['list'](['Red', $m['ColorSpec']('red', '#F88')]), $p['list'](['Fuchsia', $m['ColorSpec']('#F0F', '#F8F')]), $p['list'](['Lime', $m['ColorSpec']('#0F0', '#8F8')]), $p['list'](['Blue', $m['ColorSpec']('#00F', '#88F')]), $p['list'](['Aqua', $m['ColorSpec']('#0FF', '#8FF')]), $p['list'](['Maroon', $m['ColorSpec']('#800', '#C88')]), $p['list'](['Purple', $m['ColorSpec']('#808', '#C8C')]), $p['list'](['Green', $m['ColorSpec']('#080', '#8C8')]), $p['list'](['Olive', $m['ColorSpec']('#880', '#CC8')]), $p['list'](['Navy', $m['ColorSpec']('#008', '#88C')]), $p['list'](['Teal', $m['ColorSpec']('#088', '#8CC')])]))) : $p['setattr'](self, 'colorSelector', $m['ObjectSelectorDropdownList']($p['list']([$p['list'](['Red', $m['ColorSpec']('red', '#F88')]), $p['list'](['Fuchsia', $m['ColorSpec']('#F0F', '#F8F')]), $p['list'](['Lime', $m['ColorSpec']('#0F0', '#8F8')]), $p['list'](['Blue', $m['ColorSpec']('#00F', '#88F')]), $p['list'](['Aqua', $m['ColorSpec']('#0FF', '#8FF')]), $p['list'](['Maroon', $m['ColorSpec']('#800', '#C88')]), $p['list'](['Purple', $m['ColorSpec']('#808', '#C8C')]), $p['list'](['Green', $m['ColorSpec']('#080', '#8C8')]), $p['list'](['Olive', $m['ColorSpec']('#880', '#CC8')]), $p['list'](['Navy', $m['ColorSpec']('#008', '#88C')]), $p['list'](['Teal', $m['ColorSpec']('#088', '#8CC')])]))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('shadingSelector', $m['ObjectSelectorDropdownList']($p['list']([$p['list'](['Vertical shading', $p['getattr']($m['SymbolType'], 'PIE_SLICE_VERTICAL_SHADING')]), $p['list'](['Horizontal shading', $p['getattr']($m['SymbolType'], 'PIE_SLICE_HORIZONTAL_SHADING')]), $p['list'](['Optimal shading', $p['getattr']($m['SymbolType'], 'PIE_SLICE_OPTIMAL_SHADING')])]))) : $p['setattr'](self, 'shadingSelector', $m['ObjectSelectorDropdownList']($p['list']([$p['list'](['Vertical shading', $p['getattr']($m['SymbolType'], 'PIE_SLICE_VERTICAL_SHADING')]), $p['list'](['Horizontal shading', $p['getattr']($m['SymbolType'], 'PIE_SLICE_HORIZONTAL_SHADING')]), $p['list'](['Optimal shading', $p['getattr']($m['SymbolType'], 'PIE_SLICE_OPTIMAL_SHADING')])]))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sliceSizeSelector', $m['ObjectSelectorDropdownList']($p['list']([$p['list'](['0%', $p['int']($constant_int_0)]), $p['list'](['5%', $p['int']($constant_int_5)]), $p['list'](['10%', $p['int']($constant_int_10)]), $p['list'](['15%', $p['int']($constant_int_15)]), $p['list'](['20%', $p['int']($constant_int_20)]), $p['list'](['25%', $p['int']($constant_int_25)]), $p['list'](['30%', $p['int']($constant_int_30)]), $p['list'](['35%', $p['int']($constant_int_35)]), $p['list'](['40%', $p['int']($constant_int_40)]), $p['list'](['45%', $p['int']($constant_int_45)]), $p['list'](['50%', $p['int']($constant_int_50)]), $p['list'](['55%', $p['int']($constant_int_55)]), $p['list'](['60%', $p['int']($constant_int_60)]), $p['list'](['65%', $p['int']($constant_int_65)]), $p['list'](['70%', $p['int']($constant_int_70)]), $p['list'](['75%', $p['int']($constant_int_75)]), $p['list'](['80%', $p['int']($constant_int_80)]), $p['list'](['85%', $p['int']($constant_int_85)]), $p['list'](['90%', $p['int']($constant_int_90)]), $p['list'](['95%', $p['int']($constant_int_95)]), $p['list'](['100%', $p['int']($constant_int_100)])]))) : $p['setattr'](self, 'sliceSizeSelector', $m['ObjectSelectorDropdownList']($p['list']([$p['list'](['0%', $p['int']($constant_int_0)]), $p['list'](['5%', $p['int']($constant_int_5)]), $p['list'](['10%', $p['int']($constant_int_10)]), $p['list'](['15%', $p['int']($constant_int_15)]), $p['list'](['20%', $p['int']($constant_int_20)]), $p['list'](['25%', $p['int']($constant_int_25)]), $p['list'](['30%', $p['int']($constant_int_30)]), $p['list'](['35%', $p['int']($constant_int_35)]), $p['list'](['40%', $p['int']($constant_int_40)]), $p['list'](['45%', $p['int']($constant_int_45)]), $p['list'](['50%', $p['int']($constant_int_50)]), $p['list'](['55%', $p['int']($constant_int_55)]), $p['list'](['60%', $p['int']($constant_int_60)]), $p['list'](['65%', $p['int']($constant_int_65)]), $p['list'](['70%', $p['int']($constant_int_70)]), $p['list'](['75%', $p['int']($constant_int_75)]), $p['list'](['80%', $p['int']($constant_int_80)]), $p['list'](['85%', $p['int']($constant_int_85)]), $p['list'](['90%', $p['int']($constant_int_90)]), $p['list'](['95%', $p['int']($constant_int_95)]), $p['list'](['100%', $p['int']($constant_int_100)])]))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('theSliceEditor', $m['SliceEditor'](self)) : $p['setattr'](self, 'theSliceEditor', $m['SliceEditor'](self)); 
				SOURCE_CODE_LINK = "<a href='GChartExample20.txt' target='_blank'>Source code</a>";
				self['setChartSize']($constant_int_100, $constant_int_100);
				self['setBorderStyle']('none');
				self['setChartTitle']('<big>Click pie to edit!</big>');
				self['setChartTitleThickness']($constant_int_20);
				self['setChartFootnotes'](SOURCE_CODE_LINK);
				self['setChartFootnotesThickness']($constant_int_20);
				initSliceSize = $p['list']([0.3, 0.2, 0.1, 0.2, 0.2]);
				self['addClickListener']($p['getattr'](self, 'theSliceEditor'));
				$iter4_iter = $p['range']($m['N_SLICES']);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					iCurve = $iter4_nextval;
					self['addCurve']();
					self['getCurve']()['getSymbol']()['setBorderWidth']($constant_int_1);
					self['getCurve']()['getSymbol']()['setFillThickness']($constant_int_4);
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_4);
					self['getCurve']()['getSymbol']()['setHoverLocation']($p['getattr']($m['AnnotationLocation'], 'ON_PIE_ARC'));
					self['getCurve']()['getSymbol']()['setBorderColor']($p['getattr'](self['colorSelector']['getObject'](iCurve), 'borderColor'));
					self['getCurve']()['getSymbol']()['setBackgroundColor']($p['getattr'](self['colorSelector']['getObject'](iCurve), 'backgroundColor'));
					self['getCurve']()['getSymbol']()['setHoverSelectionBackgroundColor']($p['getattr'](self['colorSelector']['getObject'](iCurve), 'borderColor'));
					self['getCurve']()['getSymbol']()['setHoverSelectionBorderColor']($p['getattr'](self['colorSelector']['getObject'](iCurve), 'backgroundColor'));
					self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'PIE_SLICE_HORIZONTAL_SHADING'));
					self['getCurve']()['getSymbol']()['setPieSliceSize']((typeof ($13=initSliceSize).__array != 'undefined'?
						((typeof $13.__array[$14=iCurve]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__(iCurve)));
					self['getCurve']()['getSymbol']()['setModelHeight'](1.0);
					self['getCurve']()['getSymbol']()['setModelWidth']($constant_int_0);
					self['getCurve']()['addPoint'](0.5, 0.5);
				}
				self['getXAxis']()['setAxisMin']($constant_int_0);
				self['getXAxis']()['setAxisMax']($constant_int_1);
				self['getYAxis']()['setAxisMin']($constant_int_0);
				self['getYAxis']()['setAxisMax']($constant_int_1);
				self['getXAxis']()['setHasGridlines'](false);
				self['getXAxis']()['setAxisVisible'](false);
				self['getXAxis']()['setTickCount']($constant_int_0);
				self['getYAxis']()['setHasGridlines'](false);
				self['getYAxis']()['setAxisVisible'](false);
				self['getYAxis']()['setTickCount']($constant_int_0);
				self['update']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClickPrevSlice', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dab7a9f0ad31ee617a84c94a622eebdc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var iPrev,iCurve,$sub3,$sub2,$sub1,$bool9,$sub4;
				iCurve = self['getCurveIndex'](self['getTouchedCurve']());
				if ((($bool9=$p['op_eq'](iCurve, $constant_int_0)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					iPrev = (typeof ($sub1=self['getNCurves']())==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
				}
				else {
					iPrev = (typeof ($sub3=iCurve)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
				}
				self['touch'](self['getCurve'](iPrev)['getPoint']($constant_int_0));
				self['theSliceEditor']['copyChartPropertiesIntoForm'](self['getTouchedPoint']());
				self['update']($p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_LOCKED'));
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClickPrevSlice'] = $method;
			$method = $pyjs__bind_method2('onClickNextSlice', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'dab7a9f0ad31ee617a84c94a622eebdc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var iCurve,$bool10,iNext,$add6,$add7,$add5,$add8;
				iCurve = self['getCurveIndex'](self['getTouchedCurve']());
				if ((($bool10=$p['op_eq']((typeof ($add5=iCurve)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)), self['getNCurves']())) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					iNext = $constant_int_0;
				}
				else {
					iNext = (typeof ($add7=iCurve)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				self['touch'](self['getCurve'](iNext)['getPoint']($constant_int_0));
				self['theSliceEditor']['copyChartPropertiesIntoForm'](self['getTouchedPoint']());
				self['update']($p['getattr']($m['TouchedPointUpdateOption'], 'TOUCHED_POINT_LOCKED'));
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onClickNextSlice'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('GChartExample20', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GChartExample20 */


/* end module: GChartExample20 */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType', 'pyjamas.chart.TouchedPointUpdateOption']
*/
