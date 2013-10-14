/* start module: libtimesheet.model.vo.TimeVO */
$pyjs['loaded_modules']['libtimesheet.model.vo.TimeVO'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.model.vo.TimeVO']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.model.vo.TimeVO'];
	if(typeof $pyjs['loaded_modules']['libtimesheet.model.vo'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet.model.vo']['__was_initialized__']) $p['___import___']('libtimesheet.model.vo', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.model.vo.TimeVO'];
	$m['__repr__'] = function() { return '<module: libtimesheet.model.vo.TimeVO>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.model.vo.TimeVO';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet.model.vo']['TimeVO'] = $pyjs['loaded_modules']['libtimesheet.model.vo.TimeVO'];
	try {


		$m['TimeVO'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.model.vo.TimeVO';
			$cls_definition['__md5__'] = '175516a97057e992f7fe1a49f6e51a7c';
			$cls_definition['start'] = null;
			$cls_definition['end'] = null;
			$cls_definition['project'] = null;
			$cls_definition['description'] = null;
			$method = $pyjs__bind_method2('__init__', function(start, end, project, description) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					start = arguments[1];
					end = arguments[2];
					project = arguments[3];
					description = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '175516a97057e992f7fe1a49f6e51a7c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof description == 'undefined') description=arguments['callee']['__args__'][6][1];

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('start', start) : $p['setattr'](self, 'start', start); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('end', end) : $p['setattr'](self, 'end', end); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('project', project) : $p['setattr'](self, 'project', project); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('description', description) : $p['setattr'](self, 'description', description); 
				return null;
			}
	, 1, [null,null,['self'],['start'],['end'],['project'],['description', '']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('isEmpty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '175516a97057e992f7fe1a49f6e51a7c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool3,$bool1,$bool4;
				if ((($bool1=$p['getattr'](self, 'start')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				if ((($bool2=$p['getattr'](self, 'end')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					return false;
				}
				if ((($bool3=$p['getattr'](self, 'project')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return false;
				}
				if ((($bool4=$p['getattr'](self, 'description')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					return false;
				}
				return true;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isEmpty'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TimeVO', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.model.vo.TimeVO */


/* end module: libtimesheet.model.vo.TimeVO */


