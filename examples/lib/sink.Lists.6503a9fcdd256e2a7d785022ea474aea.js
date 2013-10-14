/* start module: sink.Lists */
$pyjs['loaded_modules']['sink.Lists'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sink.Lists']['__was_initialized__']) return $pyjs['loaded_modules']['sink.Lists'];
	if(typeof $pyjs['loaded_modules']['sink'] == 'undefined' || !$pyjs['loaded_modules']['sink']['__was_initialized__']) $p['___import___']('sink', null);
	var $m = $pyjs['loaded_modules']['sink.Lists'];
	$m['__repr__'] = function() { return '<module: sink.Lists>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sink.Lists';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sink']['Lists'] = $pyjs['loaded_modules']['sink.Lists'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_0 = new $p['int'](0);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', 'sink', null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', 'sink', null, false);
		$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', 'sink', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'sink', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'sink', null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'sink', null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'sink', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'sink', null, false);
		$m['Lists'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Lists';
			$cls_definition['__md5__'] = '80ab79bbcbd1ecf1ce32a954c1a1e4c1';
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
					if (self.prototype['__md5__'] !== '80ab79bbcbd1ecf1ce32a954c1a1e4c1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var horz,$iter1_nextval,$iter1_type,i,$iter1_iter,$add2,$add1,$iter1_array,$len1,txt,panel,$iter1_idx;
				$m['Sink']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sStrings', $p['list']([$p['list'](['foo0', 'bar0', 'baz0', 'toto0', 'tintin0']), $p['list'](['foo1', 'bar1', 'baz1', 'toto1', 'tintin1']), $p['list'](['foo2', 'bar2', 'baz2', 'toto2', 'tintin2']), $p['list'](['foo3', 'bar3', 'baz3', 'toto3', 'tintin3']), $p['list'](['foo4', 'bar4', 'baz4', 'toto4', 'tintin4'])])) : $p['setattr'](self, 'sStrings', $p['list']([$p['list'](['foo0', 'bar0', 'baz0', 'toto0', 'tintin0']), $p['list'](['foo1', 'bar1', 'baz1', 'toto1', 'tintin1']), $p['list'](['foo2', 'bar2', 'baz2', 'toto2', 'tintin2']), $p['list'](['foo3', 'bar3', 'baz3', 'toto3', 'tintin3']), $p['list'](['foo4', 'bar4', 'baz4', 'toto4', 'tintin4'])])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('combo', $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'VisibleItemCount':$constant_int_1}])) : $p['setattr'](self, 'combo', $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'VisibleItemCount':$constant_int_1}])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('list', $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'MultipleSelect':true, 'VisibleItemCount':$constant_int_10}])) : $p['setattr'](self, 'list', $pyjs_kwargs_call(null, $m['ListBox'], null, null, [{'MultipleSelect':true, 'VisibleItemCount':$constant_int_10}])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('echo', $m['Label']()) : $p['setattr'](self, 'echo', $m['Label']()); 
				self['combo']['addChangeListener'](self);
				$iter1_iter = $p['range']((($len1=$p['getattr'](self, 'sStrings')) === null?$constant_int_0:
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
					txt = $p['sprintf']('List %d', i);
					self['combo']['addItem'](txt);
					self['combo']['setItemText'](i, (typeof ($add1=txt)==typeof ($add2=' using set text') && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)));
				}
				self['combo']['setSelectedIndex']($constant_int_0);
				self['fillList']($constant_int_0);
				self['list']['setItemSelected']($constant_int_0, false);
				self['list']['setItemSelected']($constant_int_1, true);
				self['list']['addChangeListener'](self);
				horz = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'VerticalAlignment':$p['getattr']($m['HasAlignment'], 'ALIGN_TOP'), 'Spacing':$constant_int_8}]);
				horz['add']($p['getattr'](self, 'combo'));
				horz['add']($p['getattr'](self, 'list'));
				panel = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'HorizontalAlignment':$p['getattr']($m['HasAlignment'], 'ALIGN_LEFT')}]);
				panel['add'](horz);
				panel['add']($p['getattr'](self, 'echo'));
				self['initWidget'](panel);
				self['echoSelection']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onChange', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80ab79bbcbd1ecf1ce32a954c1a1e4c1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool1;
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'combo'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['fillList'](self['combo']['getSelectedIndex']());
				}
				else if ((($bool2=$p['op_eq'](sender, $p['getattr'](self, 'list'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['echoSelection']();
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('onShow', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80ab79bbcbd1ecf1ce32a954c1a1e4c1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			$method = $pyjs__bind_method2('fillList', function(idx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					idx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80ab79bbcbd1ecf1ce32a954c1a1e4c1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,i,$3,$iter2_idx,$len2,$4,$2,strings,$iter2_array,$1;
				self['list']['clear']();
				strings = (typeof ($1=$p['getattr'](self, 'sStrings'))['__array'] != 'undefined'?
					((typeof $1['__array'][$2=idx]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](idx));
				$iter2_iter = $p['range']((($len2=strings) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))));
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					self['list']['addItem']((typeof ($3=strings)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](i)));
				}
				self['echoSelection']();
				return null;
			}
	, 1, [null,null,['self'],['idx']]);
			$cls_definition['fillList'] = $method;
			$method = $pyjs__bind_method2('echoSelection', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80ab79bbcbd1ecf1ce32a954c1a1e4c1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$add3,i,$iter3_type,$bool3,$add5,$add6,$iter3_iter,$add4,$iter3_array,msg,$iter3_nextval;
				msg = 'Selected items: ';
				$iter3_iter = $p['range'](self['list']['getItemCount']());
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					if ((($bool3=self['list']['isItemSelected'](i)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						msg = (typeof ($add5=msg)==typeof ($add6=(typeof ($add3=self['list']['getItemText'](i))==typeof ($add4=' ') && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4))) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
					}
				}
				self['echo']['setText'](msg);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['echoSelection'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Lists', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var text;
			text = 'Here is the ListBox widget in its two major forms.';
			return $m['SinkInfo']('Lists', text, $m['Lists']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sink.Lists */


/* end module: sink.Lists */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
