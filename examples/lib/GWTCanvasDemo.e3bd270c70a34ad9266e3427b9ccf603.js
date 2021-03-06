/* start module: GWTCanvasDemo */
$pyjs['loaded_modules']['GWTCanvasDemo'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['GWTCanvasDemo']['__was_initialized__']) return $pyjs['loaded_modules']['GWTCanvasDemo'];
	var $m = $pyjs['loaded_modules']['GWTCanvasDemo'];
	$m['__repr__'] = function() { return '<module: GWTCanvasDemo>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GWTCanvasDemo';
	$m['__name__'] = __mod_name__;
	try {
		var $bool2;
		var $constant_int_400 = new $p['int'](400);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
		$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
		$m['StaticDemo'] = $p['___import___']('StaticDemo.StaticDemo', null, null, false);
		$m['LogoDemo'] = $p['___import___']('LogoDemo.LogoDemo', null, null, false);
		$m['ParticleDemo'] = $p['___import___']('ParticleDemo.ParticleDemo', null, null, false);
		$m['GradientDemo'] = $p['___import___']('GradientDemo.GradientDemo', null, null, false);
		$m['SuiteDemo'] = $p['___import___']('SuiteDemo.SuiteDemo', null, null, false);
		$m['GWTCanvasDemo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'GWTCanvasDemo';
			$cls_definition['__md5__'] = 'e17345d53aff7f024ca13b05f63a3f63';
			$method = $pyjs__bind_method2('_get_canvas', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e17345d53aff7f024ca13b05f63a3f63') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['GWTCanvas']($constant_int_400, $constant_int_400);
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_canvas'] = $method;
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
					if (self.prototype['__md5__'] !== 'e17345d53aff7f024ca13b05f63a3f63') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var canvas,$iter1_nextval,$iter1_type,i,$iter1_iter,vp,$bool1,$iter1_array,$len1,lb,$4,$1,$2,$3,$iter1_idx;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('layout', $m['HorizontalPanel']()) : $p['setattr'](self, 'layout', $m['HorizontalPanel']()); 
				canvas = self['_get_canvas']();
				canvas['addStyleName']('gwt-canvas');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('demos', $p['list']([])) : $p['setattr'](self, 'demos', $p['list']([])); 
				self['demos']['append']($m['StaticDemo'](canvas));
				self['demos']['append']($m['LogoDemo'](canvas));
				self['demos']['append']($m['ParticleDemo'](canvas));
				self['demos']['append']($m['GradientDemo'](canvas));
				self['demos']['append']($m['SuiteDemo'](canvas));
				lb = $m['ListBox']();
				lb['setStyleName']('listBox');
				$iter1_iter = $p['range']((($len1=$p['getattr'](self, 'demos')) === null?$constant_int_0:
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
					lb['addItem']((typeof ($1=$p['getattr'](self, 'demos'))['__array'] != 'undefined'?
						((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](i))['getName']());
				}
				lb['addChangeListener'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentDemo', (typeof ($3=$p['getattr'](self, 'demos'))['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0))) : $p['setattr'](self, 'currentDemo', (typeof ($3=$p['getattr'](self, 'demos'))['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_0))); 
				vp = $m['VerticalPanel']();
				vp['add'](lb);
				vp['add'](canvas);
				self['layout']['add'](vp);
				if ((($bool1=!$p['op_is'](self['currentDemo']['getControls'](), null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['layout']['add'](self['currentDemo']['getControls']());
				}
				$m['RootPanel']()['add']($p['getattr'](self, 'layout'));
				self['currentDemo']['drawDemo']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('onChange', function(listBox) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listBox = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e17345d53aff7f024ca13b05f63a3f63') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $6,$5,choice;
				choice = listBox['getSelectedIndex']();
				self['swapDemo']((typeof ($5=$p['getattr'](self, 'demos'))['__array'] != 'undefined'?
					((typeof $5['__array'][$6=choice]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](choice)));
				return null;
			}
	, 1, [null,null,['self'],['listBox']]);
			$cls_definition['onChange'] = $method;
			$method = $pyjs__bind_method2('swapDemo', function(newDemo) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					newDemo = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e17345d53aff7f024ca13b05f63a3f63') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['currentDemo']['stopDemo']();
				self['layout']['remove'](self['currentDemo']['getControls']());
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentDemo', newDemo) : $p['setattr'](self, 'currentDemo', newDemo); 
				self['layout']['add'](self['currentDemo']['getControls']());
				self['currentDemo']['drawDemo']();
				return null;
			}
	, 1, [null,null,['self'],['newDemo']]);
			$cls_definition['swapDemo'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GWTCanvasDemo', $p['tuple']($bases), $data);
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
			$m['pyjd']['setup']('./public/GWTCanvasDemo.html');
			$m['app'] = $m['GWTCanvasDemo']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GWTCanvasDemo */


/* end module: GWTCanvasDemo */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'StaticDemo.StaticDemo', 'StaticDemo', 'LogoDemo.LogoDemo', 'LogoDemo', 'ParticleDemo.ParticleDemo', 'ParticleDemo', 'GradientDemo.GradientDemo', 'GradientDemo', 'SuiteDemo.SuiteDemo', 'SuiteDemo']
*/
