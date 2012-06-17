/* start module: pyjamas.gmaps.Utils */
$pyjs.loaded_modules['pyjamas.gmaps.Utils'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.gmaps.Utils'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.gmaps.Utils'];
	if(typeof $pyjs.loaded_modules['pyjamas.gmaps'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.gmaps'].__was_initialized__) $p['___import___']('pyjamas.gmaps', null);
	var $m = $pyjs.loaded_modules["pyjamas.gmaps.Utils"];
	$m.__repr__ = function() { return "<module: pyjamas.gmaps.Utils>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.gmaps.Utils';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.gmaps']['Utils'] = $pyjs.loaded_modules['pyjamas.gmaps.Utils'];
	try {


		$m['translateGmapsObject'] = function(obj, fieldName, fields, pyToJs) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);


    //console.log("translateGmapsObject " + fieldNameXXX+"("+pyToJs+")")

    if (! (fieldName in fields))
    {
      //console.log("nothing")
      return obj;
    }
    else{
        $m.action = fields[fieldName]
        //console.log("action=" + action)

        if ($m.action == 'd')
        {
          //console.log("is dict")
          // this newobj can be used in js and also in python,
          // like this "newobj.field"
          var newobj = {}
          for (var i in obj)
             // vai ficar disponivel como uma propriedade, no python!
             newobj[i] = $m['translateGmapsObject'](obj[i], i, fields, pyToJs);
          return newobj

        }
        else if ($m.action == 'l')
        {
          if (pyToJs) {
              var newobj = $m['listToJs'](obj)
              //console.log("is list py->js")
              for (var i in newobj){
                 newobj[i]=$m['translateGmapsObject'](
                    newobj[i], fieldName + "[]", fields,pyToJs ) ;
              }
              return newobj
          }else{
              //console.log("is list js->py")
              var newobj = $p['list']([])
              for (var i in obj)
                 newobj.append($m['translateGmapsObject'](
                     obj[i], fieldName + "[]", fields,pyToJs ));
              return newobj
          }
        }
        else
        {
          //console.log("is special")
          return $m.action(obj)
        }
    }
    
		};
		$m['translateGmapsObject'].__name__ = 'translateGmapsObject';

		$m['translateGmapsObject'].__bind_type__ = 0;
		$m['translateGmapsObject'].__args__ = [null,null,['obj'],['fieldName'],['fields'],['pyToJs']];
		$m['dictToJs'] = function(dict) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var obj,$iter1_type,value,$iter1_iter,$pyjs_try_err,$iter1_array,key,$iter1_nextval,$1,$2,$iter1_idx;
			obj = {};
			try {
				$iter1_iter = dict;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					key = $iter1_nextval;
					value = (typeof ($1=dict).__array != 'undefined'?
						((typeof $1.__array[$2=key]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(key));
obj[key] = value
				}
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			return obj;
		};
		$m['dictToJs'].__name__ = 'dictToJs';

		$m['dictToJs'].__bind_type__ = 0;
		$m['dictToJs'].__args__ = [null,null,['dict']];
		$m['listToJs'] = function(list) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,obj,$iter2_array;
			obj = [];
			$iter2_iter = list;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				obj['push'](i);
			}
			return obj;
		};
		$m['listToJs'].__name__ = 'listToJs';

		$m['listToJs'].__bind_type__ = 0;
		$m['listToJs'].__args__ = [null,null,['list']];
		$m['createListenerMethods'] = function(obj) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			obj.__is_instance__ && typeof obj.__setattr__ == 'function' ? obj.__setattr__('addListener', (typeof __addListener == "undefined"?$m.__addListener:__addListener)) : $p['setattr'](obj, 'addListener', (typeof __addListener == "undefined"?$m.__addListener:__addListener)); 
			obj.__is_instance__ && typeof obj.__setattr__ == 'function' ? obj.__setattr__('removeListener', (typeof __removeListener == "undefined"?$m.__removeListener:__removeListener)) : $p['setattr'](obj, 'removeListener', (typeof __removeListener == "undefined"?$m.__removeListener:__removeListener)); 
			obj.__is_instance__ && typeof obj.__setattr__ == 'function' ? obj.__setattr__('clearListeners', (typeof __clearListeners == "undefined"?$m.__clearListeners:__clearListeners)) : $p['setattr'](obj, 'clearListeners', (typeof __clearListeners == "undefined"?$m.__clearListeners:__clearListeners)); 
			obj.__is_instance__ && typeof obj.__setattr__ == 'function' ? obj.__setattr__('clearInstanceListeners', (typeof __clearInstanceListeners == "undefined"?$m.__clearInstanceListeners:__clearInstanceListeners)) : $p['setattr'](obj, 'clearInstanceListeners', (typeof __clearInstanceListeners == "undefined"?$m.__clearInstanceListeners:__clearInstanceListeners)); 
			obj.__is_instance__ && typeof obj.__setattr__ == 'function' ? obj.__setattr__('__listeners', $p['dict']([])) : $p['setattr'](obj, '__listeners', $p['dict']([])); 
			return null;
		};
		$m['createListenerMethods'].__name__ = 'createListenerMethods';

		$m['createListenerMethods'].__bind_type__ = 0;
		$m['createListenerMethods'].__args__ = [null,null,['obj']];
		$m['__dumpListeners'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $iter4_idx,$iter3_idx,$iter4_nextval,self,$iter3_type,list,$3,eventName,$iter3_iter,$iter4_type,$iter3_array,$iter4_array,$4,$iter4_iter,$iter3_nextval;
			self = this;
			$iter3_iter = $p['getattr'](self, '__listeners');
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				eventName = $iter3_nextval;
				$iter4_iter = (typeof ($3=$p['getattr'](self, '__listeners')).__array != 'undefined'?
					((typeof $3.__array[$4=eventName]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(eventName));
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					list = $iter4_nextval;
				}
			}
			return null;
		};
		$m['__dumpListeners'].__name__ = '__dumpListeners';

		$m['__dumpListeners'].__bind_type__ = 0;
		$m['__dumpListeners'].__args__ = [null,null];
		$m['__addListener'] = function(eventName, callback) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var thelist,self,$bool1,$6,$5;
			self = this;
			thelist = 
       $wnd.google.maps.event.addListener(this, eventName, function(event) {
         callback(event);
       })
    ;
			if ((($bool1=$p['getattr'](self, '__listeners').__contains__(eventName)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				(typeof ($5=$p['getattr'](self, '__listeners')).__array != 'undefined'?
					((typeof $5.__array[$6=eventName]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(eventName))['append'](thelist);
			}
			else {
				$p['getattr'](self, '__listeners').__setitem__(eventName, $p['list']([thelist]));
			}
			return thelist;
		};
		$m['__addListener'].__name__ = '__addListener';

		$m['__addListener'].__bind_type__ = 0;
		$m['__addListener'].__args__ = [null,null,['eventName'],['callback']];
		$m['__removeListener'] = function(list) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter5_nextval,$bool2,$10,$iter5_array,self,$9,$7,eventName,$iter5_iter,$8,$iter5_idx,$iter5_type;
			self = this;
			$iter5_iter = $p['getattr'](self, '__listeners');
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				eventName = $iter5_nextval;
				if ((($bool2=(typeof ($7=$p['getattr'](self, '__listeners')).__array != 'undefined'?
					((typeof $7.__array[$8=eventName]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(eventName)).__contains__(list)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
$wnd.google.maps.event.removeListener(list);
					(typeof ($9=$p['getattr'](self, '__listeners')).__array != 'undefined'?
						((typeof $9.__array[$10=eventName]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(eventName))['remove'](list);
					return null;
				}
			}
			return null;
		};
		$m['__removeListener'].__name__ = '__removeListener';

		$m['__removeListener'].__bind_type__ = 0;
		$m['__removeListener'].__args__ = [null,null,['list']];
		$m['__clearListeners'] = function(eventName) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool3,self;
			self = this;
$wnd.google.maps.event.clearListeners(this, eventName)
			if ((($bool3=$p['getattr'](self, '__listeners').__contains__(eventName)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$p['getattr'](self, '__listeners').__delitem__(eventName);
			}
			return null;
		};
		$m['__clearListeners'].__name__ = '__clearListeners';

		$m['__clearListeners'].__bind_type__ = 0;
		$m['__clearListeners'].__args__ = [null,null,['eventName']];
		$m['__clearInstanceListeners'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var self;
			self = this;
$wnd.google.maps.event.clearInstanceListeners(this)
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__listeners', $p['dict']([])) : $p['setattr'](self, '__listeners', $p['dict']([])); 
			return null;
		};
		$m['__clearInstanceListeners'].__name__ = '__clearInstanceListeners';

		$m['__clearInstanceListeners'].__bind_type__ = 0;
		$m['__clearInstanceListeners'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.gmaps.Utils */


/* end module: pyjamas.gmaps.Utils */


