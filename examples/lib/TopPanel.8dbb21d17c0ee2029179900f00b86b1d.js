/* start module: TopPanel */
$pyjs['loaded_modules']['TopPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['TopPanel']['__was_initialized__']) return $pyjs['loaded_modules']['TopPanel'];
	var $m = $pyjs['loaded_modules']['TopPanel'];
	$m['__repr__'] = function() { return '<module: TopPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TopPanel';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_512 = new $p['int'](512);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
		$m['AboutDialog'] = $p['___import___']('AboutDialog.AboutDialog', null, null, false);
		$m['Logger'] = $p['___import___']('MailLogger.Logger', null, null, false);
		$m['TopPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'TopPanel';
			$cls_definition['__md5__'] = 'ee0e7aa81e30cf99d9c9bee6c9cbf388';
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
					if (self.prototype['__md5__'] !== 'ee0e7aa81e30cf99d9c9bee6c9cbf388') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var outer,inner,links;
				$m['Composite']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('signOutLink', $m['HTML']("<a href='javascript:;'>Sign Out</a>")) : $p['setattr'](self, 'signOutLink', $m['HTML']("<a href='javascript:;'>Sign Out</a>")); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('aboutLink', $m['HTML']("<a href='javascript:;'>About</a>")) : $p['setattr'](self, 'aboutLink', $m['HTML']("<a href='javascript:;'>About</a>")); 
				outer = $m['HorizontalPanel']();
				inner = $m['VerticalPanel']();
				outer['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
				inner['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
				links = $m['HorizontalPanel']();
				links['setSpacing']($constant_int_4);
				links['add']($p['getattr'](self, 'signOutLink'));
				links['add']($p['getattr'](self, 'aboutLink'));
				outer['add'](inner);
				inner['add']($m['HTML']('<b>Welcome back, foo@example.com</b>'));
				inner['add'](links);
				self['signOutLink']['addClickListener'](self);
				self['aboutLink']['addClickListener'](self);
				self['initWidget'](outer);
				inner['setStyleName']('mail-TopPanel');
				links['setStyleName']('mail-TopPanelLinks');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
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
					if (self.prototype['__md5__'] !== 'ee0e7aa81e30cf99d9c9bee6c9cbf388') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dlg,$bool2,$sub3,$sub4,$bool1,$div3,$div2,$sub2,$sub1,$div1,top,$div4,left;
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'signOutLink'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$m['Window']['alert']('If this were implemented, you would be signed out now.');
				}
				else if ((($bool2=$p['op_eq'](sender, $p['getattr'](self, 'aboutLink'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					dlg = $m['AboutDialog']();
					left = (typeof ($div1=(typeof ($sub1=$m['Window']['getClientWidth']())==typeof ($sub2=$constant_int_512) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)))==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
					top = (typeof ($div3=(typeof ($sub3=$m['Window']['getClientHeight']())==typeof ($sub4=$constant_int_256) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4));
					$m['Logger']('TopPanel', $p['sprintf']('left: %d', left));
					$m['Logger']('TopPanel', $p['sprintf']('top: %d', top));
					dlg['setPopupPosition'](left, top);
					dlg['show']();
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TopPanel', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TopPanel */


/* end module: TopPanel */


/*
PYJS_DEPS: ['pyjamas.Window', 'pyjamas', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.HasAlignment', 'AboutDialog.AboutDialog', 'AboutDialog', 'MailLogger.Logger', 'MailLogger']
*/
