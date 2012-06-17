/* start module: Upload */
$pyjs.loaded_modules['Upload'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Upload'].__was_initialized__) return $pyjs.loaded_modules['Upload'];
	var $m = $pyjs.loaded_modules["Upload"];
	$m.__repr__ = function() { return "<module: Upload>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Upload';
	$m.__name__ = __mod_name__;
	try {
		var $bool4;
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_5 = new $p['int'](5);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['FileUpload'] = $p['___import___']('pyjamas.ui.FileUpload.FileUpload', null, null, false);
		$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
		$m['NamedFrame'] = $p['___import___']('pyjamas.ui.NamedFrame.NamedFrame', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['AsyncUpload'] = $p['___import___']('AsyncUpload', null);
		$m['Upload'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Upload';
			$cls_definition.__md5__ = '55ace069e2a3e7961049ec58b33d50de';
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '55ace069e2a3e7961049ec58b33d50de') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('main', (typeof FileUploadPanel == "undefined"?$m.FileUploadPanel:FileUploadPanel)()) : $p['setattr'](self, 'main', (typeof FileUploadPanel == "undefined"?$m.FileUploadPanel:FileUploadPanel)()); 
				$m['RootPanel']()['add']($p['getattr'](self, 'main'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Upload', $p['tuple']($bases), $data);
		})();
		$m['FileUploadPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Upload';
			$cls_definition.__md5__ = '724794476dddda157b58092f1bf68e90';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '724794476dddda157b58092f1bf68e90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var hPanel,results,vPanel;
				$m['SimplePanel']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('form', $m['FormPanel']()) : $p['setattr'](self, 'form', $m['FormPanel']()); 
				self['form']['setEncoding']($p['getattr']($m['FormPanel'], 'ENCODING_MULTIPART'));
				self['form']['setMethod']($p['getattr']($m['FormPanel'], 'METHOD_POST'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('url', 'http://localhost/pyjamas_upload_demo') : $p['setattr'](self, 'url', 'http://localhost/pyjamas_upload_demo'); 
				self['form']['setAction']($p['getattr'](self, 'url'));
				self['form']['setTarget']('results');
				vPanel = $m['VerticalPanel']();
				hPanel = $m['HorizontalPanel']();
				hPanel['setSpacing']($constant_int_5);
				hPanel['add']($m['Label']('Upload file:'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('field', $m['FileUpload']()) : $p['setattr'](self, 'field', $m['FileUpload']()); 
				self['field']['setName']('file');
				hPanel['add']($p['getattr'](self, 'field'));
				hPanel['add']($m['Button']('Submit', $p['getattr'](self, 'onBtnClick')));
				vPanel['add'](hPanel);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('simple', $m['CheckBox']('Simple mode?  ')) : $p['setattr'](self, 'simple', $m['CheckBox']('Simple mode?  ')); 
				vPanel['add']($p['getattr'](self, 'simple'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('progress', $m['Label']('0%')) : $p['setattr'](self, 'progress', $m['Label']('0%')); 
				results = $m['NamedFrame']('results');
				vPanel['add'](results);
				vPanel['add']($p['getattr'](self, 'progress'));
				self['form']['add'](vPanel);
				self['add']($p['getattr'](self, 'form'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onBtnClick', function(event) {
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
					if (self.prototype.__md5__ !== '724794476dddda157b58092f1bf68e90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var files,el,$bool2,$bool1,file;
				self['progress']['setText']('0%');
				if ((($bool1=self['simple']['isChecked']()) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['form']['submit']();
				}
				else {
					if ((($bool2=$m['AsyncUpload']['is_old_browser']()) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						$m['Window']['alert']("Hmmm, your browser doesn't support this.");
					}
					else {
						el = self['field']['getElement']();
						files = $p['getattr'](el, 'files');
						file = files[0];
						$m['AsyncUpload']['asyncUpload']($p['getattr'](self, 'url'), file, self);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBtnClick'] = $method;
			$method = $pyjs__bind_method2('onload', function(status) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					status = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '724794476dddda157b58092f1bf68e90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['progress']['setText']('100%');
				return null;
			}
	, 1, [null,null,['self'],['status']]);
			$cls_definition['onload'] = $method;
			$method = $pyjs__bind_method2('onerror', function(status) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					status = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '724794476dddda157b58092f1bf68e90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$m['Window']['alert']((typeof ($add1='oh noes we got an ')==typeof ($add2=$p['str'](status)) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
				return null;
			}
	, 1, [null,null,['self'],['status']]);
			$cls_definition['onerror'] = $method;
			$method = $pyjs__bind_method2('onprogress', function(loaded, total) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					loaded = arguments[1];
					total = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '724794476dddda157b58092f1bf68e90') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div1,p,$bool3,$add4,progress,$div2,$mul2,$mul1,$add3;
				if ((($bool3=$p['op_eq'](self['progress']['getText'](), '100%')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return null;
				}
				progress = (typeof ($div1=loaded)==typeof ($div2=total) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				p = $p['int']((typeof ($mul1=progress)==typeof ($mul2=$constant_int_100) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				self['progress']['setText']((typeof ($add3=$p['str'](p))==typeof ($add4='%') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)));
				return null;
			}
	, 1, [null,null,['self'],['loaded'],['total']]);
			$cls_definition['onprogress'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('FileUploadPanel', $p['tuple']($bases), $data);
		})();
		if ((($bool4=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			$m['pyjd']['setup']('public/Upload.html');
			$m['app'] = $m['Upload']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Upload */


/* end module: Upload */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.FileUpload.FileUpload', 'pyjamas.ui.FileUpload', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.NamedFrame.NamedFrame', 'pyjamas.ui.NamedFrame', 'pyjamas.Window', 'AsyncUpload']
*/
