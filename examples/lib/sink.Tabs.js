/* start module: sink.Tabs */
$pyjs['loaded_modules']['sink.Tabs'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sink.Tabs']['__was_initialized__']) return $pyjs['loaded_modules']['sink.Tabs'];
	if(typeof $pyjs['loaded_modules']['sink'] == 'undefined' || !$pyjs['loaded_modules']['sink']['__was_initialized__']) $p['___import___']('sink', null);
	var $m = $pyjs['loaded_modules']['sink.Tabs'];
	$m['__repr__'] = function() { return '<module: sink.Tabs>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sink.Tabs';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sink']['Tabs'] = $pyjs['loaded_modules']['sink.Tabs'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_4 = new $p['int'](4);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', 'sink', null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', 'sink', null, false);
		$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', 'sink', null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'sink', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'sink', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'sink', null, false);
		$m['Tabs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Tabs';
			$cls_definition['__md5__'] = '1ec0b17df7d9ba94ddd8fd623e06a71d';
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
					if (self.prototype['__md5__'] !== '1ec0b17df7d9ba94ddd8fd623e06a71d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9;
				$m['Sink']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fTabs', $m['TabPanel']()) : $p['setattr'](self, 'fTabs', $m['TabPanel']()); 
				self['fTabs']['addTabListener'](self);
				self['fTabs']['add'](self['createImage']((typeof ($add1=self['baseURL']())==typeof ($add2='rembrandt/JohannesElison.jpg') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))), '1634');
				self['fTabs']['add'](self['createImage']((typeof ($add3=self['baseURL']())==typeof ($add4='rembrandt/SelfPortrait1640.jpg') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))), '1640');
				self['fTabs']['add'](self['createImage']((typeof ($add5=self['baseURL']())==typeof ($add6='rembrandt/LaMarcheNocturne.jpg') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))), '1642');
				self['fTabs']['add'](self['createImage']((typeof ($add7=self['baseURL']())==typeof ($add8='rembrandt/TheReturnOfTheProdigalSon.jpg') && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))), '1662');
				self['fTabs']['add'](self['createImage']((typeof ($add9=self['baseURL']())==typeof ($add10='rembrandt/TheReturnOfTheProdigalSon.jpg') && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10))), '1662 (disabled)');
				self['fTabs']['selectTab']($constant_int_0);
				self['fTabs']['setWidth']('100%');
				self['fTabs']['setHeight']('100%');
				self['initWidget']($p['getattr'](self, 'fTabs'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
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
					if (self.prototype['__md5__'] !== '1ec0b17df7d9ba94ddd8fd623e06a71d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			$method = $pyjs__bind_method2('createImage', function(imageUrl) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					imageUrl = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ec0b17df7d9ba94ddd8fd623e06a71d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var p,image;
				image = $m['Image'](imageUrl);
				image['setStyleName']('ks-images-Image');
				p = $m['VerticalPanel']();
				p['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'));
				p['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'));
				p['add'](image);
				return p;
			}
	, 1, [null,null,['self'],['imageUrl']]);
			$cls_definition['createImage'] = $method;
			$method = $pyjs__bind_method2('onBeforeTabSelected', function(sender, tabIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					tabIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ec0b17df7d9ba94ddd8fd623e06a71d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool1;
				if ((($bool1=$p['op_eq'](tabIndex, $constant_int_4)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					return false;
				}
				return true;
			}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
			$cls_definition['onBeforeTabSelected'] = $method;
			$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					tabIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ec0b17df7d9ba94ddd8fd623e06a71d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,bar;
				bar = self['fTabs']['getTabBar']();
				if ((($bool2=$p['op_eq'](tabIndex, $constant_int_0)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					bar['getTabWidget']($constant_int_0)['setText']('1634 (selected)');
				}
				else {
					bar['getTabWidget']($constant_int_0)['setText']('1634 (not selected)');
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
			$cls_definition['onTabSelected'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Tabs', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add14,text,$add11,$add12,$add13;
			text = "This page demonstrates GWT's support for images.  Notice in particular how it uses the image's onLoad event to display a 'wait spinner' between the back and forward buttons.";
			text = "GWT's built-in <code>TabPanel</code> class makes it easy to build tabbed dialogs ";
			text = (typeof ($add11=text)==typeof ($add12='and the like.  Notice that no page load occurs when you select the ') && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			text = (typeof ($add13=text)==typeof ($add14="different tabs in this page.  That's the magic of dynamic HTML.") && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
			return $m['SinkInfo']('Tabs', text, $m['Tabs']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sink.Tabs */


/* end module: sink.Tabs */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel']
*/
