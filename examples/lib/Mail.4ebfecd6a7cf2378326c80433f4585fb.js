/* start module: Mail */
$pyjs['loaded_modules']['Mail'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Mail']['__was_initialized__']) return $pyjs['loaded_modules']['Mail'];
	var $m = $pyjs['loaded_modules']['Mail'];
	$m['__repr__'] = function() { return '<module: Mail>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Mail';
	$m['__name__'] = __mod_name__;
	try {
		var $bool2;
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_4 = new $p['int'](4);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', null, null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['MailDetail'] = $p['___import___']('MailDetail.MailDetail', null, null, false);
		$m['Shortcuts'] = $p['___import___']('Shortcuts.Shortcuts', null, null, false);
		$m['MailList'] = $p['___import___']('MailList.MailList', null, null, false);
		$m['TopPanel'] = $p['___import___']('TopPanel.TopPanel', null, null, false);
		$m['Logger'] = $p['___import___']('MailLogger.Logger', null, null, false);
		$m['Mail'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Mail';
			$cls_definition['__md5__'] = 'c7f5908d92069a35e5ae3a4d6be74b0d';
			$method = $pyjs__bind_method2('get', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c7f5908d92069a35e5ae3a4d6be74b0d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'singleton');
			}
	, 1, [null,null,['self']]);
			$cls_definition['get'] = $method;
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c7f5908d92069a35e5ae3a4d6be74b0d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var topPanel,outer,rightPanel,mailList;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('singleton', self) : $p['setattr'](self, 'singleton', self); 
				topPanel = $m['TopPanel']();
				rightPanel = $m['VerticalPanel']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mailDetail', $m['MailDetail']()) : $p['setattr'](self, 'mailDetail', $m['MailDetail']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shortcuts', $m['Shortcuts']()) : $p['setattr'](self, 'shortcuts', $m['Shortcuts']()); 
				topPanel['setWidth']('100%');
				mailList = $m['MailList']($p['getattr'](self, 'singleton'));
				mailList['setWidth']('100%');
				rightPanel['add'](mailList);
				rightPanel['add']($p['getattr'](self, 'mailDetail'));
				mailList['setWidth']('100%');
				self['mailDetail']['setWidth']('100%');
				outer = $m['DockPanel']();
				outer['add'](topPanel, $p['getattr']($m['DockPanel'], 'NORTH'));
				outer['add']($p['getattr'](self, 'shortcuts'), $p['getattr']($m['DockPanel'], 'WEST'));
				outer['add'](rightPanel, $p['getattr']($m['DockPanel'], 'CENTER'));
				outer['setWidth']('100%');
				outer['setSpacing']($constant_int_4);
				outer['setCellWidth'](rightPanel, '100%');
				$m['Window']['addWindowResizeListener'](self);
				$m['Window']['enableScrolling'](false);
				$m['Window']['setMargin']('0px');
				$m['RootPanel']()['add'](outer);
				$m['RootPanel']()['add']($m['Logger']());
				$m['DeferredCommand']['add'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('execute', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c7f5908d92069a35e5ae3a4d6be74b0d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onWindowResized']($m['Window']['getClientWidth'](), $m['Window']['getClientHeight']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['execute'] = $method;
			$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
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
					if (self.prototype['__md5__'] !== 'c7f5908d92069a35e5ae3a4d6be74b0d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,shortcutHeight,$cmp2,$bool1,$sub3,$sub2,$sub1,$sub4;
				shortcutHeight = (typeof ($sub3=(typeof ($sub1=height)==typeof ($sub2=self['shortcuts']['getAbsoluteTop']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)))==typeof ($sub4=$constant_int_8) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				if ((($bool1=((($cmp1=shortcutHeight)===($cmp2=$constant_int_1)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					shortcutHeight = $constant_int_1;
				}
				self['shortcuts']['setHeight']($p['sprintf']('%dpx', shortcutHeight));
				self['mailDetail']['adjustSize'](width, height);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['onWindowResized'] = $method;
			$method = $pyjs__bind_method2('displayItem', function(item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					item = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c7f5908d92069a35e5ae3a4d6be74b0d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['mailDetail']['setItem'](item);
				return null;
			}
	, 1, [null,null,['self'],['item']]);
			$cls_definition['displayItem'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Mail', $p['tuple']($bases), $data);
		})();
		if ((($bool2=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			$m['pyjd']['setup']('./public/Mail.html');
			$m['m'] = $m['Mail']();
			$m['m']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Mail */


/* end module: Mail */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window', 'pyjamas', 'pyjamas.DeferredCommand', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui', 'pyjamas.ui.DockPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'MailDetail.MailDetail', 'MailDetail', 'Shortcuts.Shortcuts', 'Shortcuts', 'MailList.MailList', 'MailList', 'TopPanel.TopPanel', 'TopPanel', 'MailLogger.Logger', 'MailLogger']
*/
