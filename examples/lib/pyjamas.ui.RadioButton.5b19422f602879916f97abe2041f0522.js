/* start module: pyjamas.ui.RadioButton */
$pyjs['loaded_modules']['pyjamas.ui.RadioButton'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.RadioButton']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.RadioButton'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.RadioButton'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.RadioButton>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.RadioButton';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['RadioButton'] = $pyjs['loaded_modules']['pyjamas.ui.RadioButton'];
	try {


		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui', null, false);
		$m['RadioButton'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.RadioButton';
			$cls_definition['__md5__'] = '9043e3696ae51207c2aab10772163533';
			$cls_definition['_props'] = $p['list']([$p['tuple'](['group', 'Group', 'Name', null])]);
			$method = $pyjs__bind_method2('__init__', function(group, $$label, asHTML) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var ka = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
						var ka = arguments[arguments['length']+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					group = arguments[1];
					$$label = arguments[2];
					asHTML = arguments[3];
					var ka = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
						ka = arguments[arguments['length']+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9043e3696ae51207c2aab10772163533') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ka == 'undefined') {
					ka = $p['__empty_dict']();
					if (typeof asHTML != 'undefined') {
						if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
							ka = asHTML;
							asHTML = arguments[4];
						}
					} else 					if (typeof $$label != 'undefined') {
						if ($$label !== null && typeof $$label['$pyjs_is_kwarg'] != 'undefined') {
							ka = $$label;
							$$label = arguments[4];
						}
					} else 					if (typeof group != 'undefined') {
						if (group !== null && typeof group['$pyjs_is_kwarg'] != 'undefined') {
							ka = group;
							group = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							ka = self;
							self = arguments[4];
						}
					} else {
					}
				}
				if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];
				if (typeof $$label == 'undefined') $$label=arguments['callee']['__args__'][4][1];
				if (typeof asHTML == 'undefined') asHTML=arguments['callee']['__args__'][5][1];
				var $or1,$or2,$$label,$bool1;
				ka['__setitem__']('StyleName', ka['get']('StyleName', 'gwt-RadioButton'));
				ka['__setitem__']('Element', ((($bool1=$or1=ka['get']('Element', null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$m['DOM']['createInputRadio'](group)));
				$pyjs_kwargs_call($m['CheckBox'], '__init__', null, ka, [{}, self, $$label, asHTML]);
				return null;
			}
	, 1, [null,['ka'],['self'],['group', null],['$$label', null],['asHTML', false]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				return (typeof ($add1=$m['CheckBox']['_getProps']())==typeof ($add2=$p['getattr'](self, '_props')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			var $bases = new Array($m['CheckBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RadioButton', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.RadioButton', 'RadioButton', $m['RadioButton']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.RadioButton */


/* end module: pyjamas.ui.RadioButton */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui', 'pyjamas.ui.CheckBox']
*/
