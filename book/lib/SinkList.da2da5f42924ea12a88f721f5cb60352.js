/* start module: SinkList */
$pyjs['loaded_modules']['SinkList'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['SinkList']['__was_initialized__']) return $pyjs['loaded_modules']['SinkList'];
	var $m = $pyjs['loaded_modules']['SinkList'];
	$m['__repr__'] = function() { return '<module: SinkList>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SinkList';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_70 = new $p['int'](70);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
		$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['SinkList'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SinkList';
			$cls_definition['__md5__'] = '205c727efc8505d1ecf7d1faf6720014';
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
					if (self.prototype['__md5__'] !== '205c727efc8505d1ecf7d1faf6720014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Composite']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vp_list', $m['VerticalPanel']()) : $p['setattr'](self, 'vp_list', $m['VerticalPanel']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sinks', $p['list']([])) : $p['setattr'](self, 'sinks', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedSink', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))) : $p['setattr'](self, 'selectedSink', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sp', $m['ScrollPanel']($p['getattr'](self, 'vp_list'))) : $p['setattr'](self, 'sp', $m['ScrollPanel']($p['getattr'](self, 'vp_list'))); 
				self['sp']['setWidth']('14em');
				self['initWidget']($p['getattr'](self, 'sp'));
				self['setStyleName']('ks-List');
				self['resize']($m['Window']['getClientWidth'](), $m['Window']['getClientHeight']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '205c727efc8505d1ecf7d1faf6720014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub1,$sub2;
				self['sp']['setHeight']($p['sprintf']('%dpx', $p['__op_sub']($sub1=height,$sub2=$constant_int_70)));
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['resize'] = $method;
			$method = $pyjs__bind_method2('addSink', function(info) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					info = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '205c727efc8505d1ecf7d1faf6720014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var link,name;
				name = info['getName']();
				link = $pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{'TargetHistoryToken':name}, name, false]);
				link['setStyleName']('ks-SinkItem');
				self['vp_list']['add'](link);
				self['sinks']['append'](info);
				return null;
			}
	, 1, [null,null,['self'],['info']]);
			$cls_definition['addSink'] = $method;
			$method = $pyjs__bind_method2('find', function(sinkName) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sinkName = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '205c727efc8505d1ecf7d1faf6720014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var info,$iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$iter1_idx;
				$iter1_iter = $p['getattr'](self, 'sinks');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					info = $iter1_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](info['getName'](), sinkName))) {
						return info;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sinkName']]);
			$cls_definition['find'] = $method;
			$method = $pyjs__bind_method2('setSinkSelection', function(name) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '205c727efc8505d1ecf7d1faf6720014') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var info,widget,$iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,$iter2_array;
				if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'selectedSink'), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))))) {
					self['vp_list']['getWidget']($p['getattr'](self, 'selectedSink'))['removeStyleName']('ks-SinkItem-selected');
				}
				$iter2_iter = $p['range']($p['len']($p['getattr'](self, 'sinks')));
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					info = $p['getattr'](self, 'sinks')['__getitem__'](i);
					if ($p['bool']($p['op_eq'](info['getName'](), name))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedSink', i) : $p['setattr'](self, 'selectedSink', i); 
						widget = self['vp_list']['getWidget']($p['getattr'](self, 'selectedSink'));
						widget['addStyleName']('ks-SinkItem-selected');
						return null;
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['setSinkSelection'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SinkList', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end SinkList */


/* end module: SinkList */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.Window']
*/
