/* start module: pyjamas.dnd */
$pyjs.loaded_modules['pyjamas.dnd'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.dnd'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.dnd'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.dnd"];
	$m.__repr__ = function() { return "<module: pyjamas.dnd>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.dnd';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['dnd'] = $pyjs.loaded_modules['pyjamas.dnd'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_0 = new $p['int'](0);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.dnd', null, false);
		$m['makeDraggable'] = function(widget) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var element;
			element = widget['getElement']();
			$m['DOM']['setAttribute'](element, 'draggable', true);
			return null;
		};
		$m['makeDraggable'].__name__ = 'makeDraggable';

		$m['makeDraggable'].__bind_type__ = 0;
		$m['makeDraggable'].__args__ = [null,null,['widget']];
		$m['PROTECTED'] = $constant_int_1;
		$m['READ_WRITE'] = $constant_int_2;
		$m['READ_ONLY'] = $constant_int_3;
		$m['DISABLED'] = $constant_int_4;
		$m['getTypes'] = function(event) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool4,$iter1_iter,$iter2_type,dt,ct,$iter2_iter,item,$pyjs_try_err,$iter1_array,$iter1_nextval,type_i,$bool2,$bool3,$iter2_idx,$bool1,dt_types,$bool5,$4,$2,$3,types,$1,$iter2_nextval,$iter1_type,$add2,$add3,$add1,$len2,$iter1_idx,$add4,$len1,$iter2_array;
			types = $p['list']([]);
			dt = $p['getattr'](event, 'dataTransfer');
			try {
				dt_types = $p['getattr'](dt, 'types');
				if ((($bool1=$p['isinstance'](dt_types, $p['basestring'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					return dt_types['$$split'](',');
				}
				ct = $constant_int_0;
				try {
					type_i = dt_types['item'](ct);
					while ((($bool2=type_i) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
							false :
							(typeof $bool2=='object'?
								(typeof $bool2.__nonzero__=='function'?
									$bool2.__nonzero__() :
									(typeof $bool2.__len__=='function'?
										($bool2.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						types['append'](type_i);
						ct = (typeof ($add1=ct)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2));
						type_i = dt_types['item'](ct);
					}
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						try {
							type_i = (typeof ($1=dt_types).__array != 'undefined'?
								((typeof $1.__array[$2=ct]) != 'undefined'?$1.__array[$2]:
									$1.__getitem__($2)):
									$1.__getitem__(ct));
							while ((($bool3=type_i) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
								types['append'](type_i);
								ct = (typeof ($add3=ct)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
									$add3+$add4:
									$p['op_add']($add3,$add4));
								type_i = (typeof ($3=dt_types).__array != 'undefined'?
									((typeof $3.__array[$4=ct]) != 'undefined'?$3.__array[$4]:
										$3.__getitem__($4)):
										$3.__getitem__(ct));
							}
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (true) {
								$iter1_iter = $p['list'](['Text', 'URL', 'File', 'HTML', 'Image', 'String']);
								if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
									$iter1_type = 0;
								} else {
									$iter1_iter = $iter1_iter.__iter__();
									$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
								}
								$iter1_idx = 0;
								while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
									item = $iter1_nextval;
									try {
										if ((($bool4=(($len1=dt['getData'](item)) === null?$constant_int_0:
											(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
												(typeof $len1.__len__ == 'function'?$len1.__len__():
													(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
														$p['len']($len1)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
											types['append'](item);
										}
									} catch($pyjs_try_err) {
										$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
										var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
										$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
										if (true) {
										}
									}
								}
							}
						}
					}
				}
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					$iter2_iter = $p['list'](['Text', 'URL', 'File', 'HTML', 'Image']);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						item = $iter2_nextval;
						try {
							if ((($bool5=(($len2=dt['getData'](item)) === null?$constant_int_0:
								(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
									(typeof $len2.__len__ == 'function'?$len2.__len__():
										(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
											$p['len']($len2)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
								types['append'](item);
							}
						} catch($pyjs_try_err) {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if (true) {
							}
						}
					}
				}
			}
			return types;
		};
		$m['getTypes'].__name__ = 'getTypes';

		$m['getTypes'].__bind_type__ = 0;
		$m['getTypes'].__args__ = [null,null,['event']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.dnd */


/* end module: pyjamas.dnd */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
