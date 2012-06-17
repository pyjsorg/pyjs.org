/* start module: pyjamas.raphael.raphael */
$pyjs.loaded_modules['pyjamas.raphael.raphael'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.raphael.raphael'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.raphael.raphael'];
	if(typeof $pyjs.loaded_modules['pyjamas.raphael'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.raphael'].__was_initialized__) $p['___import___']('pyjamas.raphael', null);
	var $m = $pyjs.loaded_modules["pyjamas.raphael.raphael"];
	$m.__repr__ = function() { return "<module: pyjamas.raphael.raphael>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.raphael.raphael';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.raphael']['raphael'] = $pyjs.loaded_modules['pyjamas.raphael.raphael'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_0 = new $p['int'](0);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.raphael', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.raphael', null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.raphael', null, false);
		$m['RaphaelEventHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.raphael.raphael';
			$cls_definition.__md5__ = '0fb48f2cb360a75efe856a3f6474fb12';
			$method = $pyjs__bind_method2('__init__', function(element) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var onContextMenu,onDblClick,onClick,onMouseOut,onMouseLeave,onMouseEnter,onMouseDown,onMouseMove,onMouseUp;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_listeners', $p['dict']([['click', $p['list']([])], ['mousedown', $p['list']([])], ['mouseup', $p['list']([])], ['mousemove', $p['list']([])], ['mouseenter', $p['list']([])], ['mouseleave', $p['list']([])], ['mouseout', $p['list']([])], ['dblclick', $p['list']([])], ['contextmenu', $p['list']([])]])) : $p['setattr'](self, '_listeners', $p['dict']([['click', $p['list']([])], ['mousedown', $p['list']([])], ['mouseup', $p['list']([])], ['mousemove', $p['list']([])], ['mouseenter', $p['list']([])], ['mouseleave', $p['list']([])], ['mouseout', $p['list']([])], ['dblclick', $p['list']([])], ['contextmenu', $p['list']([])]])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_sender', $p['dict']([['click', $p['list']([])], ['mousedown', $p['list']([])], ['mouseup', $p['list']([])], ['mousemove', $p['list']([])], ['mouseenter', $p['list']([])], ['mouseleave', $p['list']([])], ['mouseout', $p['list']([])], ['dblclick', $p['list']([])], ['contextmenu', $p['list']([])]])) : $p['setattr'](self, '_sender', $p['dict']([['click', $p['list']([])], ['mousedown', $p['list']([])], ['mouseup', $p['list']([])], ['mousemove', $p['list']([])], ['mouseenter', $p['list']([])], ['mouseleave', $p['list']([])], ['mouseout', $p['list']([])], ['dblclick', $p['list']([])], ['contextmenu', $p['list']([])]])); 
				onClick = $p['getattr'](self, '_onClick');
				onMouseDown = $p['getattr'](self, '_onMouseDown');
				onMouseUp = $p['getattr'](self, '_onMouseUp');
				onMouseMove = $p['getattr'](self, '_onMouseMove');
				onMouseEnter = $p['getattr'](self, '_onMouseEnter');
				onMouseLeave = $p['getattr'](self, '_onMouseLeave');
				onMouseOut = $p['getattr'](self, '_onMouseOut');
				onDblClick = $p['getattr'](self, '_onDblClick');
				onContextMenu = $p['getattr'](self, '_onContextMenu');

           this._event_element=element;
           this._event_element.onclick      = onClick;
           this._event_element.onmousedown  = onMouseDown;
           this._event_element.onmouseup    = onMouseUp;
           this._event_element.onmousemove  = onMouseMove;
           this._event_element.onmouseenter = onMouseEnter;
           this._event_element.onmouseout   = onMouseOut;
           this._event_element.onmouseleave = onMouseLeave;
           this._event_element.ondblclick   = onDblClick;
           this._event_element.oncontextmenu= onContextMenu;
        
			}
	, 1, [null,null,['self'],['element']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addListener', function(type, listener, sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					listener = arguments[2];
					sender = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments.callee.__args__[5][1];
				var $4,$2,$3,$1;
				(typeof ($1=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $1.__array[$2=type]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(type))['append'](listener);
				(typeof ($3=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $3.__array[$4=type]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(type))['append'](sender);
				return null;
			}
	, 1, [null,null,['self'],['type'],['listener'],['sender', null]]);
			$cls_definition['addListener'] = $method;
			$method = $pyjs__bind_method2('removeListener', function(type, listener) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					listener = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $10,i,$8,$9,$6,$7,$5;
				i = (typeof ($5=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $5.__array[$6=type]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(type))['index'](listener);
				(typeof ($7=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $7.__array[$8=type]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(type))['$$delete'](i);
				(typeof ($9=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $9.__array[$10=type]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(type))['remove'](listener);
				return null;
			}
	, 1, [null,null,['self'],['type'],['listener']]);
			$cls_definition['removeListener'] = $method;
			$method = $pyjs__bind_method2('_onClick', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$iter1_idx,$iter1_nextval,$11,$12,$13,$or2,send,$iter1_iter,listener,listeners,$bool1,$iter1_array,$or1,$iter1_type,sender;
				listeners = (typeof ($11=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $11.__array[$12='click']) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__('click'));
				sender = (typeof ($13=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $13.__array[$14='click']) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__('click'));
				$iter1_iter = $p['zip'](listeners, sender);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
					listener = $tupleassign1[0];
					send = $tupleassign1[1];
					listener(((($bool1=$or1=send) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1.__nonzero__=='function'?
								$bool1.__nonzero__() :
								(typeof $bool1.__len__=='function'?
									($bool1.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onClick'] = $method;
			$method = $pyjs__bind_method2('_onMouseDown', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $15,$16,$17,$iter2_type,sender,$iter2_iter,$or4,$bool2,$18,$iter2_idx,send,listener,listeners,$iter2_nextval,$or3,$iter2_array;
				listeners = (typeof ($15=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $15.__array[$16='mousedown']) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__('mousedown'));
				sender = (typeof ($17=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $17.__array[$18='mousedown']) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__('mousedown'));
				$iter2_iter = $p['zip'](listeners, sender);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 2, null);
					listener = $tupleassign2[0];
					send = $tupleassign2[1];
					listener(((($bool2=$or3=send) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or3:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onMouseDown'] = $method;
			$method = $pyjs__bind_method2('_onMouseUp', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$iter3_idx,sender,$iter3_array,$21,$20,$22,$19,send,listener,$bool3,listeners,$or6,$iter3_iter,$iter3_type,$iter3_nextval;
				listeners = (typeof ($19=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $19.__array[$20='mouseup']) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__('mouseup'));
				sender = (typeof ($21=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $21.__array[$22='mouseup']) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__('mouseup'));
				$iter3_iter = $p['zip'](listeners, sender);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter3_nextval, 2, null);
					listener = $tupleassign3[0];
					send = $tupleassign3[1];
					listener(((($bool3=$or5=send) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or5:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onMouseUp'] = $method;
			$method = $pyjs__bind_method2('_onMouseMove', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var listener,$or7,$or8,sender,$iter4_nextval,$bool4,$25,$24,send,$26,$iter4_idx,listeners,$iter4_type,$iter4_array,$iter4_iter,$23;
				listeners = (typeof ($23=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $23.__array[$24='mousemove']) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__('mousemove'));
				sender = (typeof ($25=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $25.__array[$26='mousemove']) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__('mousemove'));
				$iter4_iter = $p['zip'](listeners, sender);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					var $tupleassign4 = $p['__ass_unpack']($iter4_nextval, 2, null);
					listener = $tupleassign4[0];
					send = $tupleassign4[1];
					listener(((($bool4=$or7=send) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or7:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onMouseMove'] = $method;
			$method = $pyjs__bind_method2('_onMouseEnter', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $29,$28,sender,$iter5_nextval,$iter5_array,send,$or9,$27,listener,listeners,$iter5_iter,$30,$iter5_idx,$iter5_type,$bool5,$or10;
				listeners = (typeof ($27=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $27.__array[$28='mouseenter']) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__('mouseenter'));
				sender = (typeof ($29=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $29.__array[$30='mouseenter']) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__('mouseenter'));
				$iter5_iter = $p['zip'](listeners, sender);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter5_nextval, 2, null);
					listener = $tupleassign5[0];
					send = $tupleassign5[1];
					listener(((($bool5=$or9=send) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or9:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onMouseEnter'] = $method;
			$method = $pyjs__bind_method2('_onMouseLeave', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_array,sender,$iter6_idx,$iter6_type,$32,$33,send,$31,listener,$34,listeners,$or11,$or12,$bool6,$iter6_iter,$iter6_nextval;
				listeners = (typeof ($31=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $31.__array[$32='mouseleave']) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__('mouseleave'));
				sender = (typeof ($33=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $33.__array[$34='mouseleave']) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__('mouseleave'));
				$iter6_iter = $p['zip'](listeners, sender);
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					var $tupleassign6 = $p['__ass_unpack']($iter6_nextval, 2, null);
					listener = $tupleassign6[0];
					send = $tupleassign6[1];
					listener(((($bool6=$or11=send) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or11:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onMouseLeave'] = $method;
			$method = $pyjs__bind_method2('_onMouseOut', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var listener,$iter7_array,sender,$38,$36,$37,$35,send,$iter7_nextval,$or14,listeners,$or13,$iter7_idx,$iter7_iter,$iter7_type,$bool7;
				listeners = (typeof ($35=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $35.__array[$36='mouseout']) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__('mouseout'));
				sender = (typeof ($37=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $37.__array[$38='mouseout']) != 'undefined'?$37.__array[$38]:
						$37.__getitem__($38)):
						$37.__getitem__('mouseout'));
				$iter7_iter = $p['zip'](listeners, sender);
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					var $tupleassign7 = $p['__ass_unpack']($iter7_nextval, 2, null);
					listener = $tupleassign7[0];
					send = $tupleassign7[1];
					listener(((($bool7=$or13=send) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7.__nonzero__=='function'?
								$bool7.__nonzero__() :
								(typeof $bool7.__len__=='function'?
									($bool7.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or13:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onMouseOut'] = $method;
			$method = $pyjs__bind_method2('_onDblClick', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var listener,$bool8,$iter8_idx,sender,$39,$iter8_array,send,$iter8_iter,listeners,$or16,$or15,$iter8_nextval,$iter8_type,$42,$41,$40;
				listeners = (typeof ($39=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $39.__array[$40='dblclick']) != 'undefined'?$39.__array[$40]:
						$39.__getitem__($40)):
						$39.__getitem__('dblclick'));
				sender = (typeof ($41=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $41.__array[$42='mouseout']) != 'undefined'?$41.__array[$42]:
						$41.__getitem__($42)):
						$41.__getitem__('mouseout'));
				$iter8_iter = $p['zip'](listeners, sender);
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					var $tupleassign8 = $p['__ass_unpack']($iter8_nextval, 2, null);
					listener = $tupleassign8[0];
					send = $tupleassign8[1];
					listener(((($bool8=$or15=send) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8.__nonzero__=='function'?
								$bool8.__nonzero__() :
								(typeof $bool8.__len__=='function'?
									($bool8.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or15:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onDblClick'] = $method;
			$method = $pyjs__bind_method2('_onContextMenu', function(event) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fb48f2cb360a75efe856a3f6474fb12') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or17,$iter9_type,$iter9_array,sender,$iter9_iter,$iter9_nextval,$iter9_idx,send,$46,listener,listeners,$43,$or18,$bool9,$45,$44;
				listeners = (typeof ($43=$p['getattr'](self, '_listeners')).__array != 'undefined'?
					((typeof $43.__array[$44='contextmenu']) != 'undefined'?$43.__array[$44]:
						$43.__getitem__($44)):
						$43.__getitem__('contextmenu'));
				sender = (typeof ($45=$p['getattr'](self, '_sender')).__array != 'undefined'?
					((typeof $45.__array[$46='contextmenu']) != 'undefined'?$45.__array[$46]:
						$45.__getitem__($46)):
						$45.__getitem__('contextmenu'));
				$iter9_iter = $p['zip'](listeners, sender);
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					var $tupleassign9 = $p['__ass_unpack']($iter9_nextval, 2, null);
					listener = $tupleassign9[0];
					send = $tupleassign9[1];
					listener(((($bool9=$or17=send) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9.__nonzero__=='function'?
								$bool9.__nonzero__() :
								(typeof $bool9.__len__=='function'?
									($bool9.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or17:self), event);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_onContextMenu'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RaphaelEventHandler', $p['tuple']($bases), $data);
		})();
		$m['Raphael'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.raphael.raphael';
			$cls_definition.__md5__ = '1e7b78704c57fd8aa107f03b3834ec7d';
			$method = $pyjs__bind_method2('__init__', function(width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				$m['Widget']['__init__'](self);
				element = $m['DOM']['createDiv']();
				self['setElement'](element);
				self['setPixelSize'](width, height);

           this._canvas = $wnd.Raphael(element, width, height);
        
				$m['RaphaelEventHandler']['__init__'](self, $p['getattr'](self, 'element'));
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getCanvas', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, '_canvas');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCanvas'] = $method;
			$method = $pyjs__bind_method2('setSize', function(width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._canvas.setSize(width, height);
        
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['setSize'] = $method;
			$method = $pyjs__bind_method2('getColor', function(brightness) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					brightness = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof brightness == 'undefined') brightness=arguments.callee.__args__[3][1];


           $m.colour = this._canvas.getColor();
        
				return (typeof colour == "undefined"?$m.colour:colour);
			}
	, 1, [null,null,['self'],['brightness', null]]);
			$cls_definition['getColor'] = $method;
			$method = $pyjs__bind_method2('resetColor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._canvas.getColor().reset();
        
			}
	, 1, [null,null,['self']]);
			$cls_definition['resetColor'] = $method;
			$method = $pyjs__bind_method2('circle', function(x, y, radius) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					radius = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element = this._canvas.circle(x, y, radius);
           this._canvas.safari();
        
				return (typeof RaphaelElement == "undefined"?$m.RaphaelElement:RaphaelElement)($p['getattr'](self, '_element'));
			}
	, 1, [null,null,['self'],['x'],['y'],['radius']]);
			$cls_definition['circle'] = $method;
			$method = $pyjs__bind_method2('rect', function(x, y, width, height, cornerRadius) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 5, 6, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					width = arguments[3];
					height = arguments[4];
					cornerRadius = arguments[5];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 5 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 5, 6, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof cornerRadius == 'undefined') cornerRadius=arguments.callee.__args__[7][1];


           this._element = this._canvas.rect(x, y, width, height,
                                             cornerRadius);
        
				return (typeof RaphaelElement == "undefined"?$m.RaphaelElement:RaphaelElement)($p['getattr'](self, '_element'));
			}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height'],['cornerRadius', $constant_int_0]]);
			$cls_definition['rect'] = $method;
			$method = $pyjs__bind_method2('ellipse', function(x, y, xRadius, yRadius) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					xRadius = arguments[3];
					yRadius = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element = this._canvas.ellipse(x, y, xRadius, yRadius);
        
				return (typeof RaphaelElement == "undefined"?$m.RaphaelElement:RaphaelElement)($p['getattr'](self, '_element'));
			}
	, 1, [null,null,['self'],['x'],['y'],['xRadius'],['yRadius']]);
			$cls_definition['ellipse'] = $method;
			$method = $pyjs__bind_method2('image', function(src, x, y, width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 6, 6, arguments.length+1);
				} else {
					var self = arguments[0];
					src = arguments[1];
					x = arguments[2];
					y = arguments[3];
					width = arguments[4];
					height = arguments[5];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 6) $pyjs__exception_func_param(arguments.callee.__name__, 6, 6, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element = this._canvas.image(src, x, y, width, height);
        
				return (typeof RaphaelElement == "undefined"?$m.RaphaelElement:RaphaelElement)($p['getattr'](self, '_element'));
			}
	, 1, [null,null,['self'],['src'],['x'],['y'],['width'],['height']]);
			$cls_definition['image'] = $method;
			$method = $pyjs__bind_method2('set', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element = this._canvas.set();
        
				return (typeof RaphaelSetElement == "undefined"?$m.RaphaelSetElement:RaphaelSetElement)($p['getattr'](self, '_element'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['set'] = $method;
			$method = $pyjs__bind_method2('text', function(x, y, text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					text = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element = this._canvas.text(x, y, text);
        
				return (typeof RaphaelElement == "undefined"?$m.RaphaelElement:RaphaelElement)($p['getattr'](self, '_element'));
			}
	, 1, [null,null,['self'],['x'],['y'],['text']]);
			$cls_definition['text'] = $method;
			$method = $pyjs__bind_method2('path', function(data, attrs) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					attrs = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];
				if (typeof attrs == 'undefined') attrs=arguments.callee.__args__[4][1];
				var value,$iter10_nextval,attr,$bool10,$bool11,$iter10_array,$47,$48,$iter10_type,$iter10_iter,$iter10_idx;
				if ((($bool10=!$p['op_eq'](data, null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10.__nonzero__=='function'?
								$bool10.__nonzero__() :
								(typeof $bool10.__len__=='function'?
									($bool10.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {

               this._element = this._canvas.path(data);
            
				}
				else {

               this._element = this._canvas.path("");
            
				}
				if ((($bool11=!$p['op_eq'](attrs, null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11.__nonzero__=='function'?
								$bool11.__nonzero__() :
								(typeof $bool11.__len__=='function'?
									($bool11.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter10_iter = attrs['keys']();
					if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
						$iter10_type = 0;
					} else {
						$iter10_iter = $iter10_iter.__iter__();
						$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter10_idx = 0;
					while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
						attr = $iter10_nextval;
						value = (typeof ($47=attrs).__array != 'undefined'?
							((typeof $47.__array[$48=attr]) != 'undefined'?$47.__array[$48]:
								$47.__getitem__($48)):
								$47.__getitem__(attr));

                    this._element.attr(attr, value);
                
					}
				}
				return (typeof RaphaelPathElement == "undefined"?$m.RaphaelPathElement:RaphaelPathElement)($p['getattr'](self, '_element'));
			}
	, 1, [null,null,['self'],['data', null],['attrs', null]]);
			$cls_definition['path'] = $method;
			$method = $pyjs__bind_method2('connection', function(obj1, obj2, line, bg, cp1, cp2, p1, p2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 9, arguments.length+1);
				} else {
					var self = arguments[0];
					obj1 = arguments[1];
					obj2 = arguments[2];
					line = arguments[3];
					bg = arguments[4];
					cp1 = arguments[5];
					cp2 = arguments[6];
					p1 = arguments[7];
					p2 = arguments[8];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 9, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1e7b78704c57fd8aa107f03b3834ec7d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof obj2 == 'undefined') obj2=arguments.callee.__args__[4][1];
				if (typeof line == 'undefined') line=arguments.callee.__args__[5][1];
				if (typeof bg == 'undefined') bg=arguments.callee.__args__[6][1];
				if (typeof cp1 == 'undefined') cp1=arguments.callee.__args__[7][1];
				if (typeof cp2 == 'undefined') cp2=arguments.callee.__args__[8][1];
				if (typeof p1 == 'undefined') p1=arguments.callee.__args__[9][1];
				if (typeof p2 == 'undefined') p2=arguments.callee.__args__[10][1];
				var line_path,bg_path;
				line_path = self['path'](null, $p['dict']([['stroke-width', $constant_int_5]]));
				bg_path = self['path'](null, $p['dict']([['stroke-width', $constant_int_5]]));
				return (typeof RaphaelConnectionElement == "undefined"?$m.RaphaelConnectionElement:RaphaelConnectionElement)(line_path, bg_path, obj1, obj2, line, bg, cp1, cp2, p1, p2);
			}
	, 1, [null,null,['self'],['obj1'],['obj2', null],['line', null],['bg', null],['cp1', null],['cp2', null],['p1', null],['p2', null]]);
			$cls_definition['connection'] = $method;
			var $bases = new Array($m['Widget'],$m['RaphaelEventHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Raphael', $p['tuple']($bases), $data);
		})();
		$m['RaphaelElement'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.raphael.raphael';
			$cls_definition.__md5__ = 'b33904e31d1c439d69873b700ceef5b7';
			$method = $pyjs__bind_method2('__init__', function(raphaelElement) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					raphaelElement = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_element', raphaelElement) : $p['setattr'](self, '_element', raphaelElement); 
				$m['RaphaelEventHandler']['__init__'](self, $p['getattr']($p['getattr'](self, '_element'), 'node'));
				return null;
			}
	, 1, [null,null,['self'],['raphaelElement']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getElement', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, '_element');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getElement'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element.remove();
        
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			$method = $pyjs__bind_method2('hide', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element.hide();
        
			}
	, 1, [null,null,['self']]);
			$cls_definition['hide'] = $method;
			$method = $pyjs__bind_method2('show', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element.show();
        
			}
	, 1, [null,null,['self']]);
			$cls_definition['show'] = $method;
			$method = $pyjs__bind_method2('rotate', function(angle, cx, cy) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					angle = arguments[1];
					cx = arguments[2];
					cy = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof cy == 'undefined') cy=arguments.callee.__args__[5][1];
				var $bool12,isAbsolute;
				if ((($bool12=$p['op_eq'](cy, null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12.__nonzero__=='function'?
								$bool12.__nonzero__() :
								(typeof $bool12.__len__=='function'?
									($bool12.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					isAbsolute = cx;

               this._element.rotate(angle, isAbsolute);
            
				}
				else {

               this._element.rotate(angle, cx, cy);
            
				}
				return null;
			}
	, 1, [null,null,['self'],['angle'],['cx'],['cy', null]]);
			$cls_definition['rotate'] = $method;
			$method = $pyjs__bind_method2('translate', function(dx, dy) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					dx = arguments[1];
					dy = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element.translate(dx, dy);
        
			}
	, 1, [null,null,['self'],['dx'],['dy']]);
			$cls_definition['translate'] = $method;
			$method = $pyjs__bind_method2('scale', function(xtimes, ytimes) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					xtimes = arguments[1];
					ytimes = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element.scale(xtimes, ytimes);
        
			}
	, 1, [null,null,['self'],['xtimes'],['ytimes']]);
			$cls_definition['scale'] = $method;
			$method = $pyjs__bind_method2('setAttr', function(attr, value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					value = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element.attr(attr, value);
        
			}
	, 1, [null,null,['self'],['attr'],['value']]);
			$cls_definition['setAttr'] = $method;
			$method = $pyjs__bind_method2('setAttrs', function(attrs) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					attrs = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var attr,$iter11_iter,$iter11_type,value,$iter11_array,$iter11_nextval,$iter11_idx;
				$iter11_iter = attrs['items']();
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					var $tupleassign10 = $p['__ass_unpack']($iter11_nextval, 2, null);
					attr = $tupleassign10[0];
					value = $tupleassign10[1];

               this._element.attr(attr, value);
            
				}
				return null;
			}
	, 1, [null,null,['self'],['attrs']]);
			$cls_definition['setAttrs'] = $method;
			$method = $pyjs__bind_method2('getAttr', function(attr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           var value = this._element.attr(attr);
        
				return (typeof value == "undefined"?$m.value:value);
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['getAttr'] = $method;
			$method = $pyjs__bind_method2('animate', function(attrs, duration) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					attrs = arguments[1];
					duration = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var attr,$iter12_array,value,$iter12_nextval,$iter12_iter,$iter12_idx,$iter12_type;

           var jsAttrs = {};
        
				$iter12_iter = attrs['items']();
				if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter.__iter__();
					$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					var $tupleassign11 = $p['__ass_unpack']($iter12_nextval, 2, null);
					attr = $tupleassign11[0];
					value = $tupleassign11[1];

               jsAttrs[attr] = value;
            
				}

           this._element.animate(jsAttrs, duration);
        
			}
	, 1, [null,null,['self'],['attrs'],['duration']]);
			$cls_definition['animate'] = $method;
			$method = $pyjs__bind_method2('animatewith', function(element, attrs, duration) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					attrs = arguments[2];
					duration = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_array,otherElement,$iter13_nextval,attr,$iter13_iter,value,$iter13_type,$iter13_idx;

           var jsAttrs = {};
        
				otherElement = element['getElement']();
				$iter13_iter = attrs['items']();
				if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter.__iter__();
					$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					var $tupleassign12 = $p['__ass_unpack']($iter13_nextval, 2, null);
					attr = $tupleassign12[0];
					value = $tupleassign12[1];

               jsAttrs[attr] = value;
            
				}

           this._element.animate(otherElement,$m.jsAttrs, duration);
        
			}
	, 1, [null,null,['self'],['element'],['attrs'],['duration']]);
			$cls_definition['animatewith'] = $method;
			$method = $pyjs__bind_method2('getBBox', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var y,x,height,width;
				x = $constant_int_0;
				y = $constant_int_0;
				width = $constant_int_0;
				height = $constant_int_0;

           var bounds = this._element.getBBox();
           x = bounds.x;
           y = bounds.y;
           width = bounds.width;
           height = bounds.height;
        
				return $p['dict']([['x', x], ['y', y], ['width', width], ['height', height]]);
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBBox'] = $method;
			$method = $pyjs__bind_method2('toFront', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element.toFront();
        
			}
	, 1, [null,null,['self']]);
			$cls_definition['toFront'] = $method;
			$method = $pyjs__bind_method2('toBack', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}


           this._element.toBack();
        
			}
	, 1, [null,null,['self']]);
			$cls_definition['toBack'] = $method;
			$method = $pyjs__bind_method2('insertBefore', function(element) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var otherElement;
				otherElement = element['getElement']();

           this._element.insertBefore(otherElement);
        
			}
	, 1, [null,null,['self'],['element']]);
			$cls_definition['insertBefore'] = $method;
			$method = $pyjs__bind_method2('insertAfter', function(element) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var otherElement;
				otherElement = element['getElement']();

           this._element.insertAfter(otherElement);
        
			}
	, 1, [null,null,['self'],['element']]);
			$cls_definition['insertAfter'] = $method;
			$method = $pyjs__bind_method2('drag', function(move, start, up) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					move = arguments[1];
					start = arguments[2];
					up = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var onUp,onStart,onMove;
				onMove = $p['getattr'](self, '_onMove');
				onStart = $p['getattr'](self, '_onStart');
				onUp = $p['getattr'](self, '_onUp');
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('onMoveFunction', move) : $p['setattr'](self, 'onMoveFunction', move); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('onStartFunction', start) : $p['setattr'](self, 'onStartFunction', start); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('onUpFunction', up) : $p['setattr'](self, 'onUpFunction', up); 

           this._element.drag(onMove,onStart,onUp);
        
			}
	, 1, [null,null,['self'],['move'],['start'],['up']]);
			$cls_definition['drag'] = $method;
			$method = $pyjs__bind_method2('_onMove', function(dx, dy, a, b) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					dx = arguments[1];
					dy = arguments[2];
					a = arguments[3];
					b = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 5) $pyjs__exception_func_param(arguments.callee.__name__, 5, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onMoveFunction'](self, dx, dy, (typeof x == "undefined"?$m.x:x), (typeof y == "undefined"?$m.y:y));
				return null;
			}
	, 1, [null,null,['self'],['dx'],['dy'],['a'],['b']]);
			$cls_definition['_onMove'] = $method;
			$method = $pyjs__bind_method2('_onStart', function(x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onStartFunction'](self, x, y);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['_onStart'] = $method;
			$method = $pyjs__bind_method2('_onUp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b33904e31d1c439d69873b700ceef5b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onUpFunction'](self);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_onUp'] = $method;
			var $bases = new Array($p['object'],$m['RaphaelEventHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RaphaelElement', $p['tuple']($bases), $data);
		})();
		$m['RaphaelSetElement'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.raphael.raphael';
			$cls_definition.__md5__ = '0fec7f08c05ac176f6399768498317fc';
			$method = $pyjs__bind_method2('__init__', function(raphaelElement) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					raphaelElement = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fec7f08c05ac176f6399768498317fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_element', raphaelElement) : $p['setattr'](self, '_element', raphaelElement); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('raphael_elements', $p['list']([])) : $p['setattr'](self, 'raphael_elements', $p['list']([])); 
				return null;
			}
	, 1, [null,null,['self'],['raphaelElement']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('add', function(element) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fec7f08c05ac176f6399768498317fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var otherElement;
				self['raphael_elements']['append'](element);
				otherElement = element['getElement']();

           this._element.push(otherElement);
        
			}
	, 1, [null,null,['self'],['element']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('addListener', function(type, listener) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					listener = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fec7f08c05ac176f6399768498317fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,element,$iter14_iter,$iter14_idx,$iter14_nextval;
				$iter14_iter = $p['getattr'](self, 'raphael_elements');
				if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter.__iter__();
					$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					element = $iter14_nextval;
					element['addListener'](type, listener, self);
				}
				return null;
			}
	, 1, [null,null,['self'],['type'],['listener']]);
			$cls_definition['addListener'] = $method;
			$method = $pyjs__bind_method2('removeListener', function(type, listener) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					listener = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0fec7f08c05ac176f6399768498317fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter15_iter,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,element;
				$iter15_iter = $p['getattr'](self, 'raphael_elements');
				if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter.__iter__();
					$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					element = $iter15_nextval;
					element['removeListener'](type, listener);
				}
				return null;
			}
	, 1, [null,null,['self'],['type'],['listener']]);
			$cls_definition['removeListener'] = $method;
			var $bases = new Array($m['RaphaelElement']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RaphaelSetElement', $p['tuple']($bases), $data);
		})();
		$m['_DockConnection'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.raphael.raphael';
			$cls_definition.__md5__ = '2c1cdbcfbb3ceba1f788396d49bf593c';
			$cls_definition['NORTH'] = $constant_int_0;
			$cls_definition['EAST'] = $constant_int_3;
			$cls_definition['SOUTH'] = $constant_int_1;
			$cls_definition['WEST'] = $constant_int_2;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('_DockConnection', $p['tuple']($bases), $data);
		})();
		$m['DOCK_CONNECTION'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.raphael.raphael';
			$cls_definition.__md5__ = 'c739389f16edb7954219e3202c7a7386';
			$cls_definition['NORTH'] = $constant_int_0;
			$cls_definition['EAST'] = $constant_int_3;
			$cls_definition['SOUTH'] = $constant_int_1;
			$cls_definition['WEST'] = $constant_int_2;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DOCK_CONNECTION', $p['tuple']($bases), $data);
		})();
		$m['COUNTER_MAP'] = $p['dict']([[$constant_int_0, $constant_int_1], [$constant_int_1, $constant_int_0], [$constant_int_2, $constant_int_3], [$constant_int_3, $constant_int_2]]);
		$m['RaphaelConnectionElement'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.raphael.raphael';
			$cls_definition.__md5__ = 'ad048820da43c3d5847537d0ddddebe7';
			$method = $pyjs__bind_method2('__init__', function(line_path, bg_path, obj1, obj2, line, bg, cp1, cp2, p1, p2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 10)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 11, arguments.length+1);
				} else {
					var self = arguments[0];
					line_path = arguments[1];
					bg_path = arguments[2];
					obj1 = arguments[3];
					obj2 = arguments[4];
					line = arguments[5];
					bg = arguments[6];
					cp1 = arguments[7];
					cp2 = arguments[8];
					p1 = arguments[9];
					p2 = arguments[10];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 11)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 11, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof obj1 == 'undefined') obj1=arguments.callee.__args__[5][1];
				if (typeof obj2 == 'undefined') obj2=arguments.callee.__args__[6][1];
				if (typeof line == 'undefined') line=arguments.callee.__args__[7][1];
				if (typeof bg == 'undefined') bg=arguments.callee.__args__[8][1];
				if (typeof cp1 == 'undefined') cp1=arguments.callee.__args__[9][1];
				if (typeof cp2 == 'undefined') cp2=arguments.callee.__args__[10][1];
				if (typeof p1 == 'undefined') p1=arguments.callee.__args__[11][1];
				if (typeof p2 == 'undefined') p2=arguments.callee.__args__[12][1];
				var $or20,$bool14,$bool15,$bool16,$or21,$bool13,$or19,$or22;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('obj1', obj1) : $p['setattr'](self, 'obj1', obj1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('obj2', obj2) : $p['setattr'](self, 'obj2', obj2); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('line_path', line_path) : $p['setattr'](self, 'line_path', line_path); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('bg_path', bg_path) : $p['setattr'](self, 'bg_path', bg_path); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('cp1', cp1) : $p['setattr'](self, 'cp1', cp1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('cp2', cp2) : $p['setattr'](self, 'cp2', cp2); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('p1', p1) : $p['setattr'](self, 'p1', p1); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('p2', p2) : $p['setattr'](self, 'p2', p2); 
				self['draw']();
				line = ((($bool13=$or19=line) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or19:$p['dict']([]));
				bg = ((($bool14=$or21=bg) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14.__nonzero__=='function'?
							$bool14.__nonzero__() :
							(typeof $bool14.__len__=='function'?
								($bool14.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or21:$p['dict']([]));
				if ((($bool15=line) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setLineAttrs'](line);
				}
				if ((($bool16=bg) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['setBackGroundAttrs'](bg);
				}
				return null;
			}
	, 1, [null,null,['self'],['line_path'],['bg_path'],['obj1', null],['obj2', null],['line', $p['dict']([])],['bg', $p['dict']([])],['cp1', null],['cp2', null],['p1', null],['p2', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_getPath', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$bool17,$49,$and8,$and9,$and1,$and2,$and3,$and4,$and5,$and6,$and7,p,dis,$div32,$div33,$div30,$div31,$div36,$div34,$div35,$248,$249,$246,$247,$244,$245,$242,$243,$240,$241,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$149,$148,$145,$144,$147,$146,$141,$140,$143,$142,$98,$99,$94,$95,$96,$97,$90,$91,$92,$93,$260,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$add42,$add41,$add40,$72,$73,$70,$268,$71,$269,$76,$77,$add56,$75,$iter17_idx,$sub31,$sub32,$101,$100,$103,$102,$105,$104,$107,$106,$109,$108,$215,$214,$217,$216,$211,$210,$198,$199,$196,$197,$194,$195,$192,$193,$190,$191,$sub22,$sub23,$sub20,$sub21,$sub26,$161,$sub24,$sub25,$sub28,dy,$174,$175,$176,$177,$170,$171,$172,$173,y1,$iter17_type,y3,y2,$178,$179,$261,$or28,$or29,$or24,$or25,$or26,$or27,$or23,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$58,$59,$50,$51,$52,$53,$54,$55,$56,$57,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,res,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$iter16_nextval,$bool29,$bool28,$add15,$228,$229,$224,$225,$226,$227,$220,$221,$222,$223,$div21,$div20,$div23,$div22,$div25,$div24,$div27,$div26,$div29,$div28,$259,$258,$251,$250,$253,$252,$255,$254,$257,$256,$138,$139,$130,$131,$132,$133,$134,$135,$136,$137,x2,x3,x1,x4,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$213,$212,$and12,$and13,$and10,$and11,$and16,$and17,$and14,$and15,$and18,$and19,$iter16_array,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$219,$cmp9,$cmp8,$218,$add83,$add82,$add81,$add80,$add84,$len2,$sub27,$189,$188,$262,$263,$264,$265,$266,$267,$181,$180,$183,$182,$185,$184,$187,$186,$iter17_nextval,$sub30,$sub33,$sub29,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,$167,$166,$165,$164,$163,$162,dx,$160,$169,$168,$iter16_idx,$add65,$add64,$add67,$add66,$add61,$add60,$add63,$add62,$add69,$add68,y4,$69,$68,$65,$64,$67,$66,$61,$60,$63,$62,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$bool41,$bool40,$len1,$bool49,$bool48,$bool32,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$239,$238,$237,$236,$235,$234,$233,$232,$231,$230,$div18,$div19,$div14,$div15,$div16,$div17,$div10,$div11,$div12,$div13,$282,$283,$129,$128,$284,$123,$122,$121,$120,$127,$126,$125,$124,bb2,bb1,$sub40,$iter16_iter,$add29,$add28,$iter17_iter,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$div8,$div9,$cmp11,$cmp10,$cmp12,$div2,$div3,$div1,$div6,$div7,$div4,$div5,i,res2,res1,d,$273,$272,$271,$270,$277,$276,$275,$274,$279,$278,$152,$153,$150,$151,$156,$157,$154,$155,$158,$159,$89,$88,$87,$86,$85,$84,$83,$82,$81,$80,$add50,$add51,$add52,$add53,$add54,$add55,$74,$add57,$add58,$add59,$78,$79,$bool54,$bool55,$bool56,$bool50,$bool51,$bool52,$bool53,$cmp5,$208,$209,$202,$203,$200,$201,$206,$207,$204,$205,$281,j,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$116,$117,$114,$115,$112,$113,$110,$111,$118,$119,$iter16_type,$add14,$iter17_array,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$280,$or33,$or32,$or31,$or30,$or34;
				p = $p['list']([]);
				d = $p['dict']([]);
				dis = $p['list']([]);
				if ((($bool18=((($bool17=$and1=$p['getattr'](self, 'obj1')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](self, 'obj2'):$and1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18.__nonzero__=='function'?
								$bool18.__nonzero__() :
								(typeof $bool18.__len__=='function'?
									($bool18.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					bb1 = self['obj1']['getBBox']();
					bb2 = self['obj2']['getBBox']();
					p = $p['list']([$p['dict']([['x', (typeof ($add1=(typeof ($49=bb1).__array != 'undefined'?
						((typeof $49.__array[$50='x']) != 'undefined'?$49.__array[$50]:
							$49.__getitem__($50)):
							$49.__getitem__('x')))==typeof ($add2=(typeof ($div1=(typeof ($51=bb1).__array != 'undefined'?
						((typeof $51.__array[$52='width']) != 'undefined'?$51.__array[$52]:
							$51.__getitem__($52)):
							$51.__getitem__('width')))==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))], ['y', (typeof ($sub1=(typeof ($53=bb1).__array != 'undefined'?
						((typeof $53.__array[$54='y']) != 'undefined'?$53.__array[$54]:
							$53.__getitem__($54)):
							$53.__getitem__('y')))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))]]), $p['dict']([['x', (typeof ($add3=(typeof ($55=bb1).__array != 'undefined'?
						((typeof $55.__array[$56='x']) != 'undefined'?$55.__array[$56]:
							$55.__getitem__($56)):
							$55.__getitem__('x')))==typeof ($add4=(typeof ($div3=(typeof ($57=bb1).__array != 'undefined'?
						((typeof $57.__array[$58='width']) != 'undefined'?$57.__array[$58]:
							$57.__getitem__($58)):
							$57.__getitem__('width')))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))], ['y', (typeof ($add7=(typeof ($add5=(typeof ($59=bb1).__array != 'undefined'?
						((typeof $59.__array[$60='y']) != 'undefined'?$59.__array[$60]:
							$59.__getitem__($60)):
							$59.__getitem__('y')))==typeof ($add6=(typeof ($61=bb1).__array != 'undefined'?
						((typeof $61.__array[$62='height']) != 'undefined'?$61.__array[$62]:
							$61.__getitem__($62)):
							$61.__getitem__('height'))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)))==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8))]]), $p['dict']([['x', (typeof ($sub3=(typeof ($63=bb1).__array != 'undefined'?
						((typeof $63.__array[$64='x']) != 'undefined'?$63.__array[$64]:
							$63.__getitem__($64)):
							$63.__getitem__('x')))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4))], ['y', (typeof ($add9=(typeof ($65=bb1).__array != 'undefined'?
						((typeof $65.__array[$66='y']) != 'undefined'?$65.__array[$66]:
							$65.__getitem__($66)):
							$65.__getitem__('y')))==typeof ($add10=(typeof ($div5=(typeof ($67=bb1).__array != 'undefined'?
						((typeof $67.__array[$68='height']) != 'undefined'?$67.__array[$68]:
							$67.__getitem__($68)):
							$67.__getitem__('height')))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10))]]), $p['dict']([['x', (typeof ($add13=(typeof ($add11=(typeof ($69=bb1).__array != 'undefined'?
						((typeof $69.__array[$70='x']) != 'undefined'?$69.__array[$70]:
							$69.__getitem__($70)):
							$69.__getitem__('x')))==typeof ($add12=(typeof ($71=bb1).__array != 'undefined'?
						((typeof $71.__array[$72='width']) != 'undefined'?$71.__array[$72]:
							$71.__getitem__($72)):
							$71.__getitem__('width'))) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14))], ['y', (typeof ($add15=(typeof ($73=bb1).__array != 'undefined'?
						((typeof $73.__array[$74='y']) != 'undefined'?$73.__array[$74]:
							$73.__getitem__($74)):
							$73.__getitem__('y')))==typeof ($add16=(typeof ($div7=(typeof ($75=bb1).__array != 'undefined'?
						((typeof $75.__array[$76='height']) != 'undefined'?$75.__array[$76]:
							$75.__getitem__($76)):
							$75.__getitem__('height')))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8))) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16))]]), $p['dict']([['x', (typeof ($add17=(typeof ($77=bb2).__array != 'undefined'?
						((typeof $77.__array[$78='x']) != 'undefined'?$77.__array[$78]:
							$77.__getitem__($78)):
							$77.__getitem__('x')))==typeof ($add18=(typeof ($div9=(typeof ($79=bb2).__array != 'undefined'?
						((typeof $79.__array[$80='width']) != 'undefined'?$79.__array[$80]:
							$79.__getitem__($80)):
							$79.__getitem__('width')))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10))) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18))], ['y', (typeof ($sub5=(typeof ($81=bb2).__array != 'undefined'?
						((typeof $81.__array[$82='y']) != 'undefined'?$81.__array[$82]:
							$81.__getitem__($82)):
							$81.__getitem__('y')))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6))]]), $p['dict']([['x', (typeof ($add19=(typeof ($83=bb2).__array != 'undefined'?
						((typeof $83.__array[$84='x']) != 'undefined'?$83.__array[$84]:
							$83.__getitem__($84)):
							$83.__getitem__('x')))==typeof ($add20=(typeof ($div11=(typeof ($85=bb2).__array != 'undefined'?
						((typeof $85.__array[$86='width']) != 'undefined'?$85.__array[$86]:
							$85.__getitem__($86)):
							$85.__getitem__('width')))==typeof ($div12=$constant_int_2) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12))) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20))], ['y', (typeof ($add23=(typeof ($add21=(typeof ($87=bb2).__array != 'undefined'?
						((typeof $87.__array[$88='y']) != 'undefined'?$87.__array[$88]:
							$87.__getitem__($88)):
							$87.__getitem__('y')))==typeof ($add22=(typeof ($89=bb2).__array != 'undefined'?
						((typeof $89.__array[$90='height']) != 'undefined'?$89.__array[$90]:
							$89.__getitem__($90)):
							$89.__getitem__('height'))) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)))==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24))]]), $p['dict']([['x', (typeof ($sub7=(typeof ($91=bb2).__array != 'undefined'?
						((typeof $91.__array[$92='x']) != 'undefined'?$91.__array[$92]:
							$91.__getitem__($92)):
							$91.__getitem__('x')))==typeof ($sub8=$constant_int_1) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8))], ['y', (typeof ($add25=(typeof ($93=bb2).__array != 'undefined'?
						((typeof $93.__array[$94='y']) != 'undefined'?$93.__array[$94]:
							$93.__getitem__($94)):
							$93.__getitem__('y')))==typeof ($add26=(typeof ($div13=(typeof ($95=bb2).__array != 'undefined'?
						((typeof $95.__array[$96='height']) != 'undefined'?$95.__array[$96]:
							$95.__getitem__($96)):
							$95.__getitem__('height')))==typeof ($div14=$constant_int_2) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14))) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26))]]), $p['dict']([['x', (typeof ($add29=(typeof ($add27=(typeof ($97=bb2).__array != 'undefined'?
						((typeof $97.__array[$98='x']) != 'undefined'?$97.__array[$98]:
							$97.__getitem__($98)):
							$97.__getitem__('x')))==typeof ($add28=(typeof ($99=bb2).__array != 'undefined'?
						((typeof $99.__array[$100='width']) != 'undefined'?$99.__array[$100]:
							$99.__getitem__($100)):
							$99.__getitem__('width'))) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))==typeof ($add30=$constant_int_1) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30))], ['y', (typeof ($add31=(typeof ($101=bb2).__array != 'undefined'?
						((typeof $101.__array[$102='y']) != 'undefined'?$101.__array[$102]:
							$101.__getitem__($102)):
							$101.__getitem__('y')))==typeof ($add32=(typeof ($div15=(typeof ($103=bb2).__array != 'undefined'?
						((typeof $103.__array[$104='height']) != 'undefined'?$103.__array[$104]:
							$103.__getitem__($104)):
							$103.__getitem__('height')))==typeof ($div16=$constant_int_2) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16))) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32))]])]);
				}
				if ((($bool21=((($bool19=$and3=$p['getattr'](self, 'obj1')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool20=$p['getattr'](self, 'obj2')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20.__nonzero__=='function'?
							$bool20.__nonzero__() :
							(typeof $bool20.__len__=='function'?
								($bool20.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and3)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
						false :
						(typeof $bool21=='object'?
							(typeof $bool21.__nonzero__=='function'?
								$bool21.__nonzero__() :
								(typeof $bool21.__len__=='function'?
									($bool21.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					bb1 = self['obj1']['getBBox']();
					p = $p['list']([$p['dict']([['x', (typeof ($add33=(typeof ($105=bb1).__array != 'undefined'?
						((typeof $105.__array[$106='x']) != 'undefined'?$105.__array[$106]:
							$105.__getitem__($106)):
							$105.__getitem__('x')))==typeof ($add34=(typeof ($div17=(typeof ($107=bb1).__array != 'undefined'?
						((typeof $107.__array[$108='width']) != 'undefined'?$107.__array[$108]:
							$107.__getitem__($108)):
							$107.__getitem__('width')))==typeof ($div18=$constant_int_2) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18))) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34))], ['y', (typeof ($sub9=(typeof ($109=bb1).__array != 'undefined'?
						((typeof $109.__array[$110='y']) != 'undefined'?$109.__array[$110]:
							$109.__getitem__($110)):
							$109.__getitem__('y')))==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10))]]), $p['dict']([['x', (typeof ($add35=(typeof ($111=bb1).__array != 'undefined'?
						((typeof $111.__array[$112='x']) != 'undefined'?$111.__array[$112]:
							$111.__getitem__($112)):
							$111.__getitem__('x')))==typeof ($add36=(typeof ($div19=(typeof ($113=bb1).__array != 'undefined'?
						((typeof $113.__array[$114='width']) != 'undefined'?$113.__array[$114]:
							$113.__getitem__($114)):
							$113.__getitem__('width')))==typeof ($div20=$constant_int_2) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20))) && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36))], ['y', (typeof ($add39=(typeof ($add37=(typeof ($115=bb1).__array != 'undefined'?
						((typeof $115.__array[$116='y']) != 'undefined'?$115.__array[$116]:
							$115.__getitem__($116)):
							$115.__getitem__('y')))==typeof ($add38=(typeof ($117=bb1).__array != 'undefined'?
						((typeof $117.__array[$118='height']) != 'undefined'?$117.__array[$118]:
							$117.__getitem__($118)):
							$117.__getitem__('height'))) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38)))==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40))]]), $p['dict']([['x', (typeof ($sub11=(typeof ($119=bb1).__array != 'undefined'?
						((typeof $119.__array[$120='x']) != 'undefined'?$119.__array[$120]:
							$119.__getitem__($120)):
							$119.__getitem__('x')))==typeof ($sub12=$constant_int_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12))], ['y', (typeof ($add41=(typeof ($121=bb1).__array != 'undefined'?
						((typeof $121.__array[$122='y']) != 'undefined'?$121.__array[$122]:
							$121.__getitem__($122)):
							$121.__getitem__('y')))==typeof ($add42=(typeof ($div21=(typeof ($123=bb1).__array != 'undefined'?
						((typeof $123.__array[$124='height']) != 'undefined'?$123.__array[$124]:
							$123.__getitem__($124)):
							$123.__getitem__('height')))==typeof ($div22=$constant_int_2) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22))) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42))]]), $p['dict']([['x', (typeof ($add45=(typeof ($add43=(typeof ($125=bb1).__array != 'undefined'?
						((typeof $125.__array[$126='x']) != 'undefined'?$125.__array[$126]:
							$125.__getitem__($126)):
							$125.__getitem__('x')))==typeof ($add44=(typeof ($127=bb1).__array != 'undefined'?
						((typeof $127.__array[$128='width']) != 'undefined'?$127.__array[$128]:
							$127.__getitem__($128)):
							$127.__getitem__('width'))) && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44)))==typeof ($add46=$constant_int_1) && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46))], ['y', (typeof ($add47=(typeof ($129=bb1).__array != 'undefined'?
						((typeof $129.__array[$130='y']) != 'undefined'?$129.__array[$130]:
							$129.__getitem__($130)):
							$129.__getitem__('y')))==typeof ($add48=(typeof ($div23=(typeof ($131=bb1).__array != 'undefined'?
						((typeof $131.__array[$132='height']) != 'undefined'?$131.__array[$132]:
							$131.__getitem__($132)):
							$131.__getitem__('height')))==typeof ($div24=$constant_int_2) && typeof $div23=='number' && $div24 !== 0?
						$div23/$div24:
						$p['op_div']($div23,$div24))) && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48))]])]);
				}
				if ((($bool24=((($bool23=$and5=!(($bool22=$p['getattr'](self, 'obj1')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](self, 'obj2'):$and5)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					bb2 = self['obj2']['getBBox']();
					p = $p['list']([$p['dict']([['x', (typeof ($add49=(typeof ($133=bb2).__array != 'undefined'?
						((typeof $133.__array[$134='x']) != 'undefined'?$133.__array[$134]:
							$133.__getitem__($134)):
							$133.__getitem__('x')))==typeof ($add50=(typeof ($div25=(typeof ($135=bb2).__array != 'undefined'?
						((typeof $135.__array[$136='width']) != 'undefined'?$135.__array[$136]:
							$135.__getitem__($136)):
							$135.__getitem__('width')))==typeof ($div26=$constant_int_2) && typeof $div25=='number' && $div26 !== 0?
						$div25/$div26:
						$p['op_div']($div25,$div26))) && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						$p['op_add']($add49,$add50))], ['y', (typeof ($sub13=(typeof ($137=bb2).__array != 'undefined'?
						((typeof $137.__array[$138='y']) != 'undefined'?$137.__array[$138]:
							$137.__getitem__($138)):
							$137.__getitem__('y')))==typeof ($sub14=$constant_int_1) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14))]]), $p['dict']([['x', (typeof ($add51=(typeof ($139=bb2).__array != 'undefined'?
						((typeof $139.__array[$140='x']) != 'undefined'?$139.__array[$140]:
							$139.__getitem__($140)):
							$139.__getitem__('x')))==typeof ($add52=(typeof ($div27=(typeof ($141=bb2).__array != 'undefined'?
						((typeof $141.__array[$142='width']) != 'undefined'?$141.__array[$142]:
							$141.__getitem__($142)):
							$141.__getitem__('width')))==typeof ($div28=$constant_int_2) && typeof $div27=='number' && $div28 !== 0?
						$div27/$div28:
						$p['op_div']($div27,$div28))) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52))], ['y', (typeof ($add55=(typeof ($add53=(typeof ($143=bb2).__array != 'undefined'?
						((typeof $143.__array[$144='y']) != 'undefined'?$143.__array[$144]:
							$143.__getitem__($144)):
							$143.__getitem__('y')))==typeof ($add54=(typeof ($145=bb2).__array != 'undefined'?
						((typeof $145.__array[$146='height']) != 'undefined'?$145.__array[$146]:
							$145.__getitem__($146)):
							$145.__getitem__('height'))) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54)))==typeof ($add56=$constant_int_1) && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56))]]), $p['dict']([['x', (typeof ($sub15=(typeof ($147=bb2).__array != 'undefined'?
						((typeof $147.__array[$148='x']) != 'undefined'?$147.__array[$148]:
							$147.__getitem__($148)):
							$147.__getitem__('x')))==typeof ($sub16=$constant_int_1) && (typeof $sub15=='number'||typeof $sub15=='string')?
						$sub15-$sub16:
						$p['op_sub']($sub15,$sub16))], ['y', (typeof ($add57=(typeof ($149=bb2).__array != 'undefined'?
						((typeof $149.__array[$150='y']) != 'undefined'?$149.__array[$150]:
							$149.__getitem__($150)):
							$149.__getitem__('y')))==typeof ($add58=(typeof ($div29=(typeof ($151=bb2).__array != 'undefined'?
						((typeof $151.__array[$152='height']) != 'undefined'?$151.__array[$152]:
							$151.__getitem__($152)):
							$151.__getitem__('height')))==typeof ($div30=$constant_int_2) && typeof $div29=='number' && $div30 !== 0?
						$div29/$div30:
						$p['op_div']($div29,$div30))) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58))]]), $p['dict']([['x', (typeof ($add61=(typeof ($add59=(typeof ($153=bb2).__array != 'undefined'?
						((typeof $153.__array[$154='x']) != 'undefined'?$153.__array[$154]:
							$153.__getitem__($154)):
							$153.__getitem__('x')))==typeof ($add60=(typeof ($155=bb2).__array != 'undefined'?
						((typeof $155.__array[$156='width']) != 'undefined'?$155.__array[$156]:
							$155.__getitem__($156)):
							$155.__getitem__('width'))) && (typeof $add59=='number'||typeof $add59=='string')?
						$add59+$add60:
						$p['op_add']($add59,$add60)))==typeof ($add62=$constant_int_1) && (typeof $add61=='number'||typeof $add61=='string')?
						$add61+$add62:
						$p['op_add']($add61,$add62))], ['y', (typeof ($add63=(typeof ($157=bb2).__array != 'undefined'?
						((typeof $157.__array[$158='y']) != 'undefined'?$157.__array[$158]:
							$157.__getitem__($158)):
							$157.__getitem__('y')))==typeof ($add64=(typeof ($div31=(typeof ($159=bb2).__array != 'undefined'?
						((typeof $159.__array[$160='height']) != 'undefined'?$159.__array[$160]:
							$159.__getitem__($160)):
							$159.__getitem__('height')))==typeof ($div32=$constant_int_2) && typeof $div31=='number' && $div32 !== 0?
						$div31/$div32:
						$p['op_div']($div31,$div32))) && (typeof $add63=='number'||typeof $add63=='string')?
						$add63+$add64:
						$p['op_add']($add63,$add64))]])]);
				}
				if ((($bool32=((($bool27=$and7=!(($bool25=$p['getattr'](self, 'p1')) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
					false :
					(typeof $bool27=='object'?
						(typeof $bool27.__nonzero__=='function'?
							$bool27.__nonzero__() :
							(typeof $bool27.__len__=='function'?
								($bool27.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool28=$and8=!(($bool26=$p['getattr'](self, 'p2')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
					false :
					(typeof $bool26=='object'?
						(typeof $bool26.__nonzero__=='function'?
							$bool26.__nonzero__() :
							(typeof $bool26.__len__=='function'?
								($bool26.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool30=$or23=!(($bool29=$p['getattr'](self, 'cp1')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30.__nonzero__=='function'?
							$bool30.__nonzero__() :
							(typeof $bool30.__len__=='function'?
								($bool30.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or23:!(($bool31=$p['getattr'](self, 'cp2')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31.__nonzero__=='function'?
							$bool31.__nonzero__() :
							(typeof $bool31.__len__=='function'?
								($bool31.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )):$and8):$and7)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter16_iter = $p['range']($constant_int_0, $constant_int_3);
					if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
						$iter16_type = 0;
					} else {
						$iter16_iter = $iter16_iter.__iter__();
						$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter16_idx = 0;
					while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
						i = $iter16_nextval;
						$iter17_iter = $p['range']($constant_int_4, $constant_int_7);
						if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
							$iter17_type = 0;
						} else {
							$iter17_iter = $iter17_iter.__iter__();
							$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter17_idx = 0;
						while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
							j = $iter17_nextval;
							dx = $p['abs']((typeof ($sub17=(typeof ($163=(typeof ($161=p).__array != 'undefined'?
								((typeof $161.__array[$162=i]) != 'undefined'?$161.__array[$162]:
									$161.__getitem__($162)):
									$161.__getitem__(i))).__array != 'undefined'?
								((typeof $163.__array[$164='x']) != 'undefined'?$163.__array[$164]:
									$163.__getitem__($164)):
									$163.__getitem__('x')))==typeof ($sub18=(typeof ($167=(typeof ($165=p).__array != 'undefined'?
								((typeof $165.__array[$166=j]) != 'undefined'?$165.__array[$166]:
									$165.__getitem__($166)):
									$165.__getitem__(j))).__array != 'undefined'?
								((typeof $167.__array[$168='x']) != 'undefined'?$167.__array[$168]:
									$167.__getitem__($168)):
									$167.__getitem__('x'))) && (typeof $sub17=='number'||typeof $sub17=='string')?
								$sub17-$sub18:
								$p['op_sub']($sub17,$sub18)));
							dy = $p['abs']((typeof ($sub19=(typeof ($171=(typeof ($169=p).__array != 'undefined'?
								((typeof $169.__array[$170=i]) != 'undefined'?$169.__array[$170]:
									$169.__getitem__($170)):
									$169.__getitem__(i))).__array != 'undefined'?
								((typeof $171.__array[$172='y']) != 'undefined'?$171.__array[$172]:
									$171.__getitem__($172)):
									$171.__getitem__('y')))==typeof ($sub20=(typeof ($175=(typeof ($173=p).__array != 'undefined'?
								((typeof $173.__array[$174=j]) != 'undefined'?$173.__array[$174]:
									$173.__getitem__($174)):
									$173.__getitem__(j))).__array != 'undefined'?
								((typeof $175.__array[$176='y']) != 'undefined'?$175.__array[$176]:
									$175.__getitem__($176)):
									$175.__getitem__('y'))) && (typeof $sub19=='number'||typeof $sub19=='string')?
								$sub19-$sub20:
								$p['op_sub']($sub19,$sub20)));
							if ((($bool45=((($bool33=$or25=$p['op_eq'](i, (typeof ($sub21=j)==typeof ($sub22=$constant_int_4) && (typeof $sub21=='number'||typeof $sub21=='string')?
								$sub21-$sub22:
								$p['op_sub']($sub21,$sub22)))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
								false :
								(typeof $bool33=='object'?
									(typeof $bool33.__nonzero__=='function'?
										$bool33.__nonzero__() :
										(typeof $bool33.__len__=='function'?
											($bool33.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or25:((($bool40=$and16=((($bool35=$or27=((($bool34=$and10=!$p['op_eq'](i, $constant_int_3)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
								false :
								(typeof $bool34=='object'?
									(typeof $bool34.__nonzero__=='function'?
										$bool34.__nonzero__() :
										(typeof $bool34.__len__=='function'?
											($bool34.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?!$p['op_eq'](j, $constant_int_6):$and10)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
								false :
								(typeof $bool35=='object'?
									(typeof $bool35.__nonzero__=='function'?
										$bool35.__nonzero__() :
										(typeof $bool35.__len__=='function'?
											($bool35.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or27:((($cmp1=(typeof ($179=(typeof ($177=p).__array != 'undefined'?
								((typeof $177.__array[$178=i]) != 'undefined'?$177.__array[$178]:
									$177.__getitem__($178)):
									$177.__getitem__(i))).__array != 'undefined'?
								((typeof $179.__array[$180='x']) != 'undefined'?$179.__array[$180]:
									$179.__getitem__($180)):
									$179.__getitem__('x')))===($cmp2=(typeof ($183=(typeof ($181=p).__array != 'undefined'?
								((typeof $181.__array[$182=j]) != 'undefined'?$181.__array[$182]:
									$181.__getitem__($182)):
									$181.__getitem__(j))).__array != 'undefined'?
								((typeof $183.__array[$184='x']) != 'undefined'?$183.__array[$184]:
									$183.__getitem__($184)):
									$183.__getitem__('x')))?0:
								(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
									($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
									$p['cmp']($cmp1, $cmp2))) == -1))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
								false :
								(typeof $bool40=='object'?
									(typeof $bool40.__nonzero__=='function'?
										$bool40.__nonzero__() :
										(typeof $bool40.__len__=='function'?
											($bool40.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($bool41=$and17=((($bool37=$or29=((($bool36=$and12=!$p['op_eq'](i, $constant_int_2)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
								false :
								(typeof $bool36=='object'?
									(typeof $bool36.__nonzero__=='function'?
										$bool36.__nonzero__() :
										(typeof $bool36.__len__=='function'?
											($bool36.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?!$p['op_eq'](j, $constant_int_7):$and12)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
								false :
								(typeof $bool37=='object'?
									(typeof $bool37.__nonzero__=='function'?
										$bool37.__nonzero__() :
										(typeof $bool37.__len__=='function'?
											($bool37.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or29:((($cmp3=(typeof ($187=(typeof ($185=p).__array != 'undefined'?
								((typeof $185.__array[$186=i]) != 'undefined'?$185.__array[$186]:
									$185.__getitem__($186)):
									$185.__getitem__(i))).__array != 'undefined'?
								((typeof $187.__array[$188='x']) != 'undefined'?$187.__array[$188]:
									$187.__getitem__($188)):
									$187.__getitem__('x')))===($cmp4=(typeof ($191=(typeof ($189=p).__array != 'undefined'?
								((typeof $189.__array[$190=j]) != 'undefined'?$189.__array[$190]:
									$189.__getitem__($190)):
									$189.__getitem__(j))).__array != 'undefined'?
								((typeof $191.__array[$192='x']) != 'undefined'?$191.__array[$192]:
									$191.__getitem__($192)):
									$191.__getitem__('x')))?0:
								(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
									($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
									$p['cmp']($cmp3, $cmp4))) == 1))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
								false :
								(typeof $bool41=='object'?
									(typeof $bool41.__nonzero__=='function'?
										$bool41.__nonzero__() :
										(typeof $bool41.__len__=='function'?
											($bool41.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($bool42=$and18=((($bool39=$or31=((($bool38=$and14=!$p['op_eq'](i, $constant_int_0)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
								false :
								(typeof $bool38=='object'?
									(typeof $bool38.__nonzero__=='function'?
										$bool38.__nonzero__() :
										(typeof $bool38.__len__=='function'?
											($bool38.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?!$p['op_eq'](j, $constant_int_5):$and14)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
								false :
								(typeof $bool39=='object'?
									(typeof $bool39.__nonzero__=='function'?
										$bool39.__nonzero__() :
										(typeof $bool39.__len__=='function'?
											($bool39.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or31:((($cmp5=(typeof ($195=(typeof ($193=p).__array != 'undefined'?
								((typeof $193.__array[$194=i]) != 'undefined'?$193.__array[$194]:
									$193.__getitem__($194)):
									$193.__getitem__(i))).__array != 'undefined'?
								((typeof $195.__array[$196='y']) != 'undefined'?$195.__array[$196]:
									$195.__getitem__($196)):
									$195.__getitem__('y')))===($cmp6=(typeof ($199=(typeof ($197=p).__array != 'undefined'?
								((typeof $197.__array[$198=j]) != 'undefined'?$197.__array[$198]:
									$197.__getitem__($198)):
									$197.__getitem__(j))).__array != 'undefined'?
								((typeof $199.__array[$200='y']) != 'undefined'?$199.__array[$200]:
									$199.__getitem__($200)):
									$199.__getitem__('y')))?0:
								(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
									($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
									$p['cmp']($cmp5, $cmp6))) == 1))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
								false :
								(typeof $bool42=='object'?
									(typeof $bool42.__nonzero__=='function'?
										$bool42.__nonzero__() :
										(typeof $bool42.__len__=='function'?
											($bool42.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?((($bool44=$or33=((($bool43=$and20=!$p['op_eq'](i, $constant_int_1)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
								false :
								(typeof $bool43=='object'?
									(typeof $bool43.__nonzero__=='function'?
										$bool43.__nonzero__() :
										(typeof $bool43.__len__=='function'?
											($bool43.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?!$p['op_eq'](j, $constant_int_4):$and20)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
								false :
								(typeof $bool44=='object'?
									(typeof $bool44.__nonzero__=='function'?
										$bool44.__nonzero__() :
										(typeof $bool44.__len__=='function'?
											($bool44.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or33:((($cmp7=(typeof ($203=(typeof ($201=p).__array != 'undefined'?
								((typeof $201.__array[$202=i]) != 'undefined'?$201.__array[$202]:
									$201.__getitem__($202)):
									$201.__getitem__(i))).__array != 'undefined'?
								((typeof $203.__array[$204='y']) != 'undefined'?$203.__array[$204]:
									$203.__getitem__($204)):
									$203.__getitem__('y')))===($cmp8=(typeof ($207=(typeof ($205=p).__array != 'undefined'?
								((typeof $205.__array[$206=j]) != 'undefined'?$205.__array[$206]:
									$205.__getitem__($206)):
									$205.__getitem__(j))).__array != 'undefined'?
								((typeof $207.__array[$208='y']) != 'undefined'?$207.__array[$208]:
									$207.__getitem__($208)):
									$207.__getitem__('y')))?0:
								(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
									($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
									$p['cmp']($cmp7, $cmp8))) == -1)):$and18):$and17):$and16))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
									false :
									(typeof $bool45=='object'?
										(typeof $bool45.__nonzero__=='function'?
											$bool45.__nonzero__() :
											(typeof $bool45.__len__=='function'?
												($bool45.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								dis['append']((typeof ($add65=dy)==typeof ($add66=dy) && (typeof $add65=='number'||typeof $add65=='string')?
									$add65+$add66:
									$p['op_add']($add65,$add66)));
								d.__setitem__((typeof ($209=dis).__array != 'undefined'?
									((typeof $209.__array[$210=(typeof ($sub23=(($len1=dis) === null?$constant_int_0:
									(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
										(typeof $len1.__len__ == 'function'?$len1.__len__():
											(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
												$p['len']($len1))))))==typeof ($sub24=$constant_int_1) && (typeof $sub23=='number'||typeof $sub23=='string')?
									$sub23-$sub24:
									$p['op_sub']($sub23,$sub24))]) != 'undefined'?$209.__array[$210]:
										$209.__getitem__($210)):
										$209.__getitem__((typeof ($sub23=(($len1=dis) === null?$constant_int_0:
									(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
										(typeof $len1.__len__ == 'function'?$len1.__len__():
											(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
												$p['len']($len1))))))==typeof ($sub24=$constant_int_1) && (typeof $sub23=='number'||typeof $sub23=='string')?
									$sub23-$sub24:
									$p['op_sub']($sub23,$sub24)))), $p['list']([i, j]));
							}
						}
					}
					if ((($bool46=$p['op_eq']((($len2=dis) === null?$constant_int_0:
						(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
							(typeof $len2.__len__ == 'function'?$len2.__len__():
								(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
									$p['len']($len2))))), $constant_int_0)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
							false :
							(typeof $bool46=='object'?
								(typeof $bool46.__nonzero__=='function'?
									$bool46.__nonzero__() :
									(typeof $bool46.__len__=='function'?
										($bool46.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						res = $p['list']([$constant_int_0, $constant_int_4]);
					}
					else {
						res = (typeof ($211=d).__array != 'undefined'?
							((typeof $211.__array[$212=$p['min'](dis)]) != 'undefined'?$211.__array[$212]:
								$211.__getitem__($212)):
								$211.__getitem__($p['min'](dis)));
					}
					x1 = (typeof ($217=(typeof ($215=p).__array != 'undefined'?
						((typeof $215.__array[$216=(typeof ($213=res).__array != 'undefined'?
						((typeof $213.__array[$214=$constant_int_0]) != 'undefined'?$213.__array[$214]:
							$213.__getitem__($214)):
							$213.__getitem__($constant_int_0))]) != 'undefined'?$215.__array[$216]:
							$215.__getitem__($216)):
							$215.__getitem__((typeof ($213=res).__array != 'undefined'?
						((typeof $213.__array[$214=$constant_int_0]) != 'undefined'?$213.__array[$214]:
							$213.__getitem__($214)):
							$213.__getitem__($constant_int_0))))).__array != 'undefined'?
						((typeof $217.__array[$218='x']) != 'undefined'?$217.__array[$218]:
							$217.__getitem__($218)):
							$217.__getitem__('x'));
					y1 = (typeof ($223=(typeof ($221=p).__array != 'undefined'?
						((typeof $221.__array[$222=(typeof ($219=res).__array != 'undefined'?
						((typeof $219.__array[$220=$constant_int_0]) != 'undefined'?$219.__array[$220]:
							$219.__getitem__($220)):
							$219.__getitem__($constant_int_0))]) != 'undefined'?$221.__array[$222]:
							$221.__getitem__($222)):
							$221.__getitem__((typeof ($219=res).__array != 'undefined'?
						((typeof $219.__array[$220=$constant_int_0]) != 'undefined'?$219.__array[$220]:
							$219.__getitem__($220)):
							$219.__getitem__($constant_int_0))))).__array != 'undefined'?
						((typeof $223.__array[$224='y']) != 'undefined'?$223.__array[$224]:
							$223.__getitem__($224)):
							$223.__getitem__('y'));
					x4 = (typeof ($229=(typeof ($227=p).__array != 'undefined'?
						((typeof $227.__array[$228=(typeof ($225=res).__array != 'undefined'?
						((typeof $225.__array[$226=$constant_int_1]) != 'undefined'?$225.__array[$226]:
							$225.__getitem__($226)):
							$225.__getitem__($constant_int_1))]) != 'undefined'?$227.__array[$228]:
							$227.__getitem__($228)):
							$227.__getitem__((typeof ($225=res).__array != 'undefined'?
						((typeof $225.__array[$226=$constant_int_1]) != 'undefined'?$225.__array[$226]:
							$225.__getitem__($226)):
							$225.__getitem__($constant_int_1))))).__array != 'undefined'?
						((typeof $229.__array[$230='x']) != 'undefined'?$229.__array[$230]:
							$229.__getitem__($230)):
							$229.__getitem__('x'));
					y4 = (typeof ($235=(typeof ($233=p).__array != 'undefined'?
						((typeof $233.__array[$234=(typeof ($231=res).__array != 'undefined'?
						((typeof $231.__array[$232=$constant_int_1]) != 'undefined'?$231.__array[$232]:
							$231.__getitem__($232)):
							$231.__getitem__($constant_int_1))]) != 'undefined'?$233.__array[$234]:
							$233.__getitem__($234)):
							$233.__getitem__((typeof ($231=res).__array != 'undefined'?
						((typeof $231.__array[$232=$constant_int_1]) != 'undefined'?$231.__array[$232]:
							$231.__getitem__($232)):
							$231.__getitem__($constant_int_1))))).__array != 'undefined'?
						((typeof $235.__array[$236='y']) != 'undefined'?$235.__array[$236]:
							$235.__getitem__($236)):
							$235.__getitem__('y'));
				}
				else {
					if ((($bool47=$p['getattr'](self, 'cp1')) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
							false :
							(typeof $bool47=='object'?
								(typeof $bool47.__nonzero__=='function'?
									$bool47.__nonzero__() :
									(typeof $bool47.__len__=='function'?
										($bool47.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign13 = $p['__ass_unpack']($p['tuple']([(typeof ($239=(typeof ($237=p).__array != 'undefined'?
							((typeof $237.__array[$238=$p['getattr'](self, 'cp1')]) != 'undefined'?$237.__array[$238]:
								$237.__getitem__($238)):
								$237.__getitem__($p['getattr'](self, 'cp1')))).__array != 'undefined'?
							((typeof $239.__array[$240='x']) != 'undefined'?$239.__array[$240]:
								$239.__getitem__($240)):
								$239.__getitem__('x')), (typeof ($243=(typeof ($241=p).__array != 'undefined'?
							((typeof $241.__array[$242=$p['getattr'](self, 'cp1')]) != 'undefined'?$241.__array[$242]:
								$241.__getitem__($242)):
								$241.__getitem__($p['getattr'](self, 'cp1')))).__array != 'undefined'?
							((typeof $243.__array[$244='y']) != 'undefined'?$243.__array[$244]:
								$243.__getitem__($244)):
								$243.__getitem__('y'))]), 2, null);
						x1 = $tupleassign13[0];
						y1 = $tupleassign13[1];
						res1 = $p['getattr'](self, 'cp1');
					}
					else {
						x1 = (typeof ($245=$p['getattr'](self, 'p1')).__array != 'undefined'?
							((typeof $245.__array[$246=$constant_int_0]) != 'undefined'?$245.__array[$246]:
								$245.__getitem__($246)):
								$245.__getitem__($constant_int_0));
						y1 = (typeof ($247=$p['getattr'](self, 'p1')).__array != 'undefined'?
							((typeof $247.__array[$248=$constant_int_1]) != 'undefined'?$247.__array[$248]:
								$247.__getitem__($248)):
								$247.__getitem__($constant_int_1));
						res1 = null;
					}
					if ((($bool48=$p['getattr'](self, 'cp2')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
							false :
							(typeof $bool48=='object'?
								(typeof $bool48.__nonzero__=='function'?
									$bool48.__nonzero__() :
									(typeof $bool48.__len__=='function'?
										($bool48.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $tupleassign14 = $p['__ass_unpack']($p['tuple']([(typeof ($251=(typeof ($249=p).__array != 'undefined'?
							((typeof $249.__array[$250=(typeof ($add67=$p['getattr'](self, 'cp2'))==typeof ($add68=$constant_int_4) && (typeof $add67=='number'||typeof $add67=='string')?
							$add67+$add68:
							$p['op_add']($add67,$add68))]) != 'undefined'?$249.__array[$250]:
								$249.__getitem__($250)):
								$249.__getitem__((typeof ($add67=$p['getattr'](self, 'cp2'))==typeof ($add68=$constant_int_4) && (typeof $add67=='number'||typeof $add67=='string')?
							$add67+$add68:
							$p['op_add']($add67,$add68))))).__array != 'undefined'?
							((typeof $251.__array[$252='x']) != 'undefined'?$251.__array[$252]:
								$251.__getitem__($252)):
								$251.__getitem__('x')), (typeof ($255=(typeof ($253=p).__array != 'undefined'?
							((typeof $253.__array[$254=(typeof ($add69=$p['getattr'](self, 'cp2'))==typeof ($add70=$constant_int_4) && (typeof $add69=='number'||typeof $add69=='string')?
							$add69+$add70:
							$p['op_add']($add69,$add70))]) != 'undefined'?$253.__array[$254]:
								$253.__getitem__($254)):
								$253.__getitem__((typeof ($add69=$p['getattr'](self, 'cp2'))==typeof ($add70=$constant_int_4) && (typeof $add69=='number'||typeof $add69=='string')?
							$add69+$add70:
							$p['op_add']($add69,$add70))))).__array != 'undefined'?
							((typeof $255.__array[$256='y']) != 'undefined'?$255.__array[$256]:
								$255.__getitem__($256)):
								$255.__getitem__('y'))]), 2, null);
						x4 = $tupleassign14[0];
						y4 = $tupleassign14[1];
						res2 = (typeof ($add71=$p['getattr'](self, 'cp2'))==typeof ($add72=$constant_int_4) && (typeof $add71=='number'||typeof $add71=='string')?
							$add71+$add72:
							$p['op_add']($add71,$add72));
					}
					else {
						x4 = (typeof ($257=$p['getattr'](self, 'p2')).__array != 'undefined'?
							((typeof $257.__array[$258=$constant_int_0]) != 'undefined'?$257.__array[$258]:
								$257.__getitem__($258)):
								$257.__getitem__($constant_int_0));
						y4 = (typeof ($259=$p['getattr'](self, 'p2')).__array != 'undefined'?
							((typeof $259.__array[$260=$constant_int_1]) != 'undefined'?$259.__array[$260]:
								$259.__getitem__($260)):
								$259.__getitem__($constant_int_1));
						res2 = null;
					}
					if ((($bool50=((($bool49=$and22=$p['op_eq'](res1, null)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49.__nonzero__=='function'?
								$bool49.__nonzero__() :
								(typeof $bool49.__len__=='function'?
									($bool49.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq'](res2, null):$and22)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
							false :
							(typeof $bool50=='object'?
								(typeof $bool50.__nonzero__=='function'?
									$bool50.__nonzero__() :
									(typeof $bool50.__len__=='function'?
										($bool50.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						res1 = $constant_int_0;
						res2 = $constant_int_4;
					}
					else if ((($bool52=((($bool51=$and24=!$p['op_eq'](res1, null)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51.__nonzero__=='function'?
								$bool51.__nonzero__() :
								(typeof $bool51.__len__=='function'?
									($bool51.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq'](res2, null):$and24)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
							false :
							(typeof $bool52=='object'?
								(typeof $bool52.__nonzero__=='function'?
									$bool52.__nonzero__() :
									(typeof $bool52.__len__=='function'?
										($bool52.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool53=((($cmp9=res1)===($cmp10=$constant_int_4)?0:
							(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
								($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
								$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
								false :
								(typeof $bool53=='object'?
									(typeof $bool53.__nonzero__=='function'?
										$bool53.__nonzero__() :
										(typeof $bool53.__len__=='function'?
											($bool53.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							res2 = (typeof ($add73=(typeof ($261=$m['COUNTER_MAP']).__array != 'undefined'?
								((typeof $261.__array[$262=res1]) != 'undefined'?$261.__array[$262]:
									$261.__getitem__($262)):
									$261.__getitem__(res1)))==typeof ($add74=$constant_int_4) && (typeof $add73=='number'||typeof $add73=='string')?
								$add73+$add74:
								$p['op_add']($add73,$add74));
						}
						else {
							res2 = (typeof ($sub25=(typeof ($263=$m['COUNTER_MAP']).__array != 'undefined'?
								((typeof $263.__array[$264=res1]) != 'undefined'?$263.__array[$264]:
									$263.__getitem__($264)):
									$263.__getitem__(res1)))==typeof ($sub26=$constant_int_4) && (typeof $sub25=='number'||typeof $sub25=='string')?
								$sub25-$sub26:
								$p['op_sub']($sub25,$sub26));
						}
					}
					else if ((($bool55=((($bool54=$and26=$p['op_eq'](res1, null)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54.__nonzero__=='function'?
								$bool54.__nonzero__() :
								(typeof $bool54.__len__=='function'?
									($bool54.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_eq'](res2, null):$and26)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
							false :
							(typeof $bool55=='object'?
								(typeof $bool55.__nonzero__=='function'?
									$bool55.__nonzero__() :
									(typeof $bool55.__len__=='function'?
										($bool55.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool56=((($cmp11=res2)===($cmp12=$constant_int_4)?0:
							(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
								($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
								$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
								false :
								(typeof $bool56=='object'?
									(typeof $bool56.__nonzero__=='function'?
										$bool56.__nonzero__() :
										(typeof $bool56.__len__=='function'?
											($bool56.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							res1 = (typeof ($add75=(typeof ($265=$m['COUNTER_MAP']).__array != 'undefined'?
								((typeof $265.__array[$266=res2]) != 'undefined'?$265.__array[$266]:
									$265.__getitem__($266)):
									$265.__getitem__(res2)))==typeof ($add76=$constant_int_4) && (typeof $add75=='number'||typeof $add75=='string')?
								$add75+$add76:
								$p['op_add']($add75,$add76));
						}
						else {
							res1 = (typeof ($sub27=(typeof ($267=$m['COUNTER_MAP']).__array != 'undefined'?
								((typeof $267.__array[$268=res2]) != 'undefined'?$267.__array[$268]:
									$267.__getitem__($268)):
									$267.__getitem__(res2)))==typeof ($sub28=$constant_int_4) && (typeof $sub27=='number'||typeof $sub27=='string')?
								$sub27-$sub28:
								$p['op_sub']($sub27,$sub28));
						}
					}
					res = $p['list']([res1, res2]);
				}
				dx = $p['max']((typeof ($div33=$p['abs']((typeof ($sub29=x1)==typeof ($sub30=x4) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30))))==typeof ($div34=$constant_int_2) && typeof $div33=='number' && $div34 !== 0?
					$div33/$div34:
					$p['op_div']($div33,$div34)), $constant_int_10);
				dy = $p['max']((typeof ($div35=$p['abs']((typeof ($sub31=y1)==typeof ($sub32=y4) && (typeof $sub31=='number'||typeof $sub31=='string')?
					$sub31-$sub32:
					$p['op_sub']($sub31,$sub32))))==typeof ($div36=$constant_int_2) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					$p['op_div']($div35,$div36)), $constant_int_10);
				x2 = (typeof ($271=$p['list']([x1, x1, (typeof ($sub33=x1)==typeof ($sub34=dx) && (typeof $sub33=='number'||typeof $sub33=='string')?
					$sub33-$sub34:
					$p['op_sub']($sub33,$sub34)), (typeof ($add77=x1)==typeof ($add78=dx) && (typeof $add77=='number'||typeof $add77=='string')?
					$add77+$add78:
					$p['op_add']($add77,$add78))])).__array != 'undefined'?
					((typeof $271.__array[$272=(typeof ($269=res).__array != 'undefined'?
					((typeof $269.__array[$270=$constant_int_0]) != 'undefined'?$269.__array[$270]:
						$269.__getitem__($270)):
						$269.__getitem__($constant_int_0))]) != 'undefined'?$271.__array[$272]:
						$271.__getitem__($272)):
						$271.__getitem__((typeof ($269=res).__array != 'undefined'?
					((typeof $269.__array[$270=$constant_int_0]) != 'undefined'?$269.__array[$270]:
						$269.__getitem__($270)):
						$269.__getitem__($constant_int_0))));
				y2 = (typeof ($275=$p['list']([(typeof ($sub35=y1)==typeof ($sub36=dy) && (typeof $sub35=='number'||typeof $sub35=='string')?
					$sub35-$sub36:
					$p['op_sub']($sub35,$sub36)), (typeof ($add79=y1)==typeof ($add80=dy) && (typeof $add79=='number'||typeof $add79=='string')?
					$add79+$add80:
					$p['op_add']($add79,$add80)), y1, y1])).__array != 'undefined'?
					((typeof $275.__array[$276=(typeof ($273=res).__array != 'undefined'?
					((typeof $273.__array[$274=$constant_int_0]) != 'undefined'?$273.__array[$274]:
						$273.__getitem__($274)):
						$273.__getitem__($constant_int_0))]) != 'undefined'?$275.__array[$276]:
						$275.__getitem__($276)):
						$275.__getitem__((typeof ($273=res).__array != 'undefined'?
					((typeof $273.__array[$274=$constant_int_0]) != 'undefined'?$273.__array[$274]:
						$273.__getitem__($274)):
						$273.__getitem__($constant_int_0))));
				x3 = (typeof ($279=$p['list']([$constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, x4, x4, (typeof ($sub37=x4)==typeof ($sub38=dx) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38)), (typeof ($add81=x4)==typeof ($add82=dx) && (typeof $add81=='number'||typeof $add81=='string')?
					$add81+$add82:
					$p['op_add']($add81,$add82))])).__array != 'undefined'?
					((typeof $279.__array[$280=(typeof ($277=res).__array != 'undefined'?
					((typeof $277.__array[$278=$constant_int_1]) != 'undefined'?$277.__array[$278]:
						$277.__getitem__($278)):
						$277.__getitem__($constant_int_1))]) != 'undefined'?$279.__array[$280]:
						$279.__getitem__($280)):
						$279.__getitem__((typeof ($277=res).__array != 'undefined'?
					((typeof $277.__array[$278=$constant_int_1]) != 'undefined'?$277.__array[$278]:
						$277.__getitem__($278)):
						$277.__getitem__($constant_int_1))));
				y3 = (typeof ($283=$p['list']([$constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, (typeof ($add83=y1)==typeof ($add84=dy) && (typeof $add83=='number'||typeof $add83=='string')?
					$add83+$add84:
					$p['op_add']($add83,$add84)), (typeof ($sub39=y1)==typeof ($sub40=dy) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40)), y4, y4])).__array != 'undefined'?
					((typeof $283.__array[$284=(typeof ($281=res).__array != 'undefined'?
					((typeof $281.__array[$282=$constant_int_1]) != 'undefined'?$281.__array[$282]:
						$281.__getitem__($282)):
						$281.__getitem__($constant_int_1))]) != 'undefined'?$283.__array[$284]:
						$283.__getitem__($284)):
						$283.__getitem__((typeof ($281=res).__array != 'undefined'?
					((typeof $281.__array[$282=$constant_int_1]) != 'undefined'?$281.__array[$282]:
						$281.__getitem__($282)):
						$281.__getitem__($constant_int_1))));
				return ','['join']($p['list'](['M', $p['str'](x1), $p['str'](y1), 'C', $p['str'](x2), $p['str'](y2), $p['str'](x3), $p['str'](y3), $p['str'](x4), $p['str'](y4)]));
			}
	, 1, [null,null,['self']]);
			$cls_definition['_getPath'] = $method;
			$method = $pyjs__bind_method2('draw', function(p1, p2) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					p1 = arguments[1];
					p2 = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof p1 == 'undefined') p1=arguments.callee.__args__[3][1];
				if (typeof p2 == 'undefined') p2=arguments.callee.__args__[4][1];
				var $bool58,$bool57,$or37,$or36,$or35,path,$or38;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('p1', ((($bool57=$or35=p1) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or35:$p['getattr'](self, 'p1'))) : $p['setattr'](self, 'p1', ((($bool57=$or35=p1) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or35:$p['getattr'](self, 'p1'))); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('p2', ((($bool58=$or37=p2) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or37:$p['getattr'](self, 'p2'))) : $p['setattr'](self, 'p2', ((($bool58=$or37=p2) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or37:$p['getattr'](self, 'p2'))); 
				path = self['_getPath']();
				self['line_path']['setAttr']('path', path);
				self['bg_path']['setAttr']('path', path);
				return null;
			}
	, 1, [null,null,['self'],['p1', null],['p2', null]]);
			$cls_definition['draw'] = $method;
			$method = $pyjs__bind_method2('setLineAttrs', function(attrs) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					attrs = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['line_path']['setAttrs'](attrs);
				return null;
			}
	, 1, [null,null,['self'],['attrs']]);
			$cls_definition['setLineAttrs'] = $method;
			$method = $pyjs__bind_method2('setBackGroundAttrs', function(attrs) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					attrs = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['bg_path']['setAttrs'](attrs);
				return null;
			}
	, 1, [null,null,['self'],['attrs']]);
			$cls_definition['setBackGroundAttrs'] = $method;
			$method = $pyjs__bind_method2('toFront', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['line_path']['toFront']();
				self['bg_path']['toFront']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['toFront'] = $method;
			$method = $pyjs__bind_method2('toBack', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['line_path']['toBack']();
				self['bg_path']['toBack']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['toBack'] = $method;
			$method = $pyjs__bind_method2('remove', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['line_path']['remove']();
				self['bg_path']['remove']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['remove'] = $method;
			$method = $pyjs__bind_method2('addListener', function(type, listener) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					listener = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['line_path']['addListener'](type, listener, self);
				self['bg_path']['addListener'](type, listener, self);
				return null;
			}
	, 1, [null,null,['self'],['type'],['listener']]);
			$cls_definition['addListener'] = $method;
			$method = $pyjs__bind_method2('removeListener', function(type, listener) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					listener = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ad048820da43c3d5847537d0ddddebe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['line_path']['removeListener'](type, listener);
				self['bg_path']['removeListener'](type, listener);
				return null;
			}
	, 1, [null,null,['self'],['type'],['listener']]);
			$cls_definition['removeListener'] = $method;
			var $bases = new Array($m['RaphaelElement']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RaphaelConnectionElement', $p['tuple']($bases), $data);
		})();
		$m['RaphaelPathElement'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.raphael.raphael';
			$cls_definition.__md5__ = '571b17fd7321a40e215758625c542716';
			var $bases = new Array($m['RaphaelElement']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RaphaelPathElement', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.raphael.raphael */


/* end module: pyjamas.raphael.raphael */


/*
PYJS_DEPS: ['pyjamas.ui.Widget.Widget', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.DOM', 'pyjamas.Window']
*/
