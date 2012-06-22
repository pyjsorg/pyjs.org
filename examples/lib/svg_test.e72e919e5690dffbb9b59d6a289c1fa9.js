/* start module: svg_test */
$pyjs['loaded_modules']['svg_test'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['svg_test']['__was_initialized__']) return $pyjs['loaded_modules']['svg_test'];
	var $m = $pyjs['loaded_modules']['svg_test'];
	$m['__repr__'] = function() { return '<module: svg_test>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'svg_test';
	$m['__name__'] = __mod_name__;
	try {
		var $bool7;

		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['svgWindow'] = $p['___import___']('svgWindow.svgWindow', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['mainUI'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'svg_test';
			$cls_definition['__md5__'] = '751f51d3fd427d4f026841d7f8041aee';
			$cls_definition['svg'] = null;
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
					if (self.prototype['__md5__'] !== '751f51d3fd427d4f026841d7f8041aee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newButton,$iter1_nextval,$iter1_type,$iter1_idx,svg,$iter1_iter,buttons,$iter1_array,buttonName,panel;
				svg = $pyjs_kwargs_call(null, $m['svgWindow'], null, null, [{'className':'svg'}]);
				$m['mainUI']['__is_instance__'] && typeof $m['mainUI']['__setattr__'] == 'function' ? $m['mainUI']['__setattr__']('svg', svg) : $p['setattr']($m['mainUI'], 'svg', svg); 
				$m['RootPanel']()['add'](svg);
				panel = $m['HorizontalPanel']();
				$m['RootPanel']()['add'](panel);
				buttons = $p['list'](['zoom in', 'zoom out', 'rotate CW', 'rotate CCW', 'reload', 'reset']);
				$iter1_iter = buttons;
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					buttonName = $iter1_nextval;
					newButton = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'listener':$p['getattr'](self, 'clickListener')}, buttonName]);
					panel['add'](newButton);
				}
				$m['RootPanel']()['add']($m['HTML']('Hello <b>World</b>'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clickListener', function(e) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					e = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '751f51d3fd427d4f026841d7f8041aee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3,$bool1,$bool6,$bool4,$bool5,button;
				button = e['getText']();
				if ((($bool1=$p['op_eq'](button, 'zoom in')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$m['mainUI']['svg']['zoom_in']();
				}
				else if ((($bool2=$p['op_eq'](button, 'zoom out')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$m['mainUI']['svg']['zoom_out']();
				}
				else if ((($bool3=$p['op_eq'](button, 'rotate CW')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$m['mainUI']['svg']['rot_CW']();
				}
				else if ((($bool4=$p['op_eq'](button, 'rotate CCW')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$m['mainUI']['svg']['rot_CCW']();
				}
				else if ((($bool5=$p['op_eq'](button, 'reset')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$m['mainUI']['svg']['reset_transforms']();
				}
				else if ((($bool6=$p['op_eq'](button, 'reload')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$m['mainUI']['svg']['change_floorplan']();
				}
				return null;
			}
	, 1, [null,null,['self'],['e']]);
			$cls_definition['clickListener'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('mainUI', $p['tuple']($bases), $data);
		})();
		if ((($bool7=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			$m['pyjd']['setup']('./public/svg_test.html');
			$m['ui'] = $m['mainUI']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end svg_test */


/* end module: svg_test */


/*
PYJS_DEPS: ['pyjd', 'svgWindow.svgWindow', 'svgWindow', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.Window']
*/
