/* start module: MailItem */
$pyjs['loaded_modules']['MailItem'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['MailItem']['__was_initialized__']) return $pyjs['loaded_modules']['MailItem'];
	var $m = $pyjs['loaded_modules']['MailItem'];
	$m['__repr__'] = function() { return '<module: MailItem>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MailItem';
	$m['__name__'] = __mod_name__;
	try {


		$m['MailItem'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'MailItem';
			$cls_definition['__md5__'] = '9d8fb000824773baadc87adee44d461b';
			$method = $pyjs__bind_method2('__init__', function(sender, email, subject, body) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					email = arguments[2];
					subject = arguments[3];
					body = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9d8fb000824773baadc87adee44d461b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sender', sender) : $p['setattr'](self, 'sender', sender); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('email', email) : $p['setattr'](self, 'email', email); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('subject', subject) : $p['setattr'](self, 'subject', subject); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('body', body) : $p['setattr'](self, 'body', body); 
				return null;
			}
	, 1, [null,null,['self'],['sender'],['email'],['subject'],['body']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MailItem', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end MailItem */


/* end module: MailItem */


