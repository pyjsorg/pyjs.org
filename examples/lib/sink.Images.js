/* start module: sink.Images */
$pyjs['loaded_modules']['sink.Images'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sink.Images']['__was_initialized__']) return $pyjs['loaded_modules']['sink.Images'];
	if(typeof $pyjs['loaded_modules']['sink'] == 'undefined' || !$pyjs['loaded_modules']['sink']['__was_initialized__']) $p['___import___']('sink', null);
	var $m = $pyjs['loaded_modules']['sink.Images'];
	$m['__repr__'] = function() { return '<module: sink.Images>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sink.Images';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sink']['Images'] = $pyjs['loaded_modules']['sink.Images'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', 'sink', null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', 'sink', null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'sink', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'sink', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'sink', null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'sink', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'sink', null, false);
		$m['Images'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Images';
			$cls_definition['__md5__'] = '910586cdfde2b535f4a2240872e9ebc8';
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
					if (self.prototype['__md5__'] !== '910586cdfde2b535f4a2240872e9ebc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add7,$iter1_nextval,$iter1_type,i,topPanel,$len1,$iter1_iter,$add2,$add3,$add1,$add6,$iter1_array,$add4,$add5,$add8,$1,$2,panel,$iter1_idx;
				$m['Sink']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('curImage', $constant_int_0) : $p['setattr'](self, 'curImage', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image', $m['Image']()) : $p['setattr'](self, 'image', $m['Image']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loadingImage', $m['Image']((typeof ($add1=self['baseURL']())==typeof ($add2='images/blanksearching.gif') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))) : $p['setattr'](self, 'loadingImage', $m['Image']((typeof ($add1=self['baseURL']())==typeof ($add2='images/blanksearching.gif') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nextButton', $m['Image']((typeof ($add3=self['baseURL']())==typeof ($add4='rembrandt/forward.gif') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))) : $p['setattr'](self, 'nextButton', $m['Image']((typeof ($add3=self['baseURL']())==typeof ($add4='rembrandt/forward.gif') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('prevButton', $m['Image']((typeof ($add5=self['baseURL']())==typeof ($add6='rembrandt/back.gif') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))) : $p['setattr'](self, 'prevButton', $m['Image']((typeof ($add5=self['baseURL']())==typeof ($add6='rembrandt/back.gif') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sImages', $p['list'](['rembrandt/JohannesElison.jpg', 'rembrandt/LaMarcheNocturne.jpg', 'rembrandt/SelfPortrait1628.jpg', 'rembrandt/SelfPortrait1640.jpg', 'rembrandt/TheArtistInHisStudio.jpg', 'rembrandt/TheReturnOfTheProdigalSon.jpg'])) : $p['setattr'](self, 'sImages', $p['list'](['rembrandt/JohannesElison.jpg', 'rembrandt/LaMarcheNocturne.jpg', 'rembrandt/SelfPortrait1628.jpg', 'rembrandt/SelfPortrait1640.jpg', 'rembrandt/TheArtistInHisStudio.jpg', 'rembrandt/TheReturnOfTheProdigalSon.jpg'])); 
				$iter1_iter = $p['range']((($len1=$p['getattr'](self, 'sImages')) === null?$constant_int_0:
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
					$p['getattr'](self, 'sImages')['__setitem__'](i, (typeof ($add7=self['baseURL']())==typeof ($add8=(typeof ($1=$p['getattr'](self, 'sImages'))['__array'] != 'undefined'?
						((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](i))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)));
				}
				self['image']['addLoadListener'](self);
				self['prevButton']['addClickListener'](self);
				self['nextButton']['addClickListener'](self);
				topPanel = $m['DockPanel']();
				topPanel['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'));
				topPanel['add']($p['getattr'](self, 'prevButton'), $p['getattr']($m['DockPanel'], 'WEST'));
				topPanel['add']($p['getattr'](self, 'nextButton'), $p['getattr']($m['DockPanel'], 'EAST'));
				topPanel['add']($p['getattr'](self, 'loadingImage'), $p['getattr']($m['DockPanel'], 'CENTER'));
				panel = $m['VerticalPanel']();
				panel['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'));
				panel['add']($m['HTML']('<h2>A Bit of Rembrandt</h2>', true));
				panel['add'](topPanel);
				panel['add']($p['getattr'](self, 'image'));
				panel['setWidth']('100%');
				self['initWidget'](panel);
				self['image']['setStyleName']('ks-images-Image');
				self['nextButton']['setStyleName']('ks-images-Button');
				self['prevButton']['setStyleName']('ks-images-Button');
				self['loadImage']($constant_int_0);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '910586cdfde2b535f4a2240872e9ebc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$bool1,$add10,$sub2,$sub1,$add9;
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'prevButton'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['loadImage']((typeof ($sub1=$p['getattr'](self, 'curImage'))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)));
				}
				else if ((($bool2=$p['op_eq'](sender, $p['getattr'](self, 'nextButton'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['loadImage']((typeof ($add9=$p['getattr'](self, 'curImage'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onError', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '910586cdfde2b535f4a2240872e9ebc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('onLoad', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '910586cdfde2b535f4a2240872e9ebc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $add12,$add11;
				self['loadingImage']['setUrl']((typeof ($add11=self['baseURL']())==typeof ($add12='images/blanksearching.gif') && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)));
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onLoad'] = $method;
			$method = $pyjs__bind_method2('loadImage', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '910586cdfde2b535f4a2240872e9ebc8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp4,$cmp1,$cmp3,$cmp2,$3,$add14,$bool3,$len2,$len3,$bool4,$add13,$sub3,$4,$sub6,$sub5,$sub4;
				if ((($bool3=((($cmp1=index)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					index = (typeof ($sub3=(($len2=$p['getattr'](self, 'sImages')) === null?$constant_int_0:
						(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
									$p['len']($len2))))))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
				}
				else if ((($bool4=((($cmp3=index)===($cmp4=(typeof ($sub5=(($len3=$p['getattr'](self, 'sImages')) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)))?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					index = $constant_int_0;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('curImage', index) : $p['setattr'](self, 'curImage', index); 
				self['loadingImage']['setUrl']((typeof ($add13=self['baseURL']())==typeof ($add14='images/searching.gif') && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)));
				self['image']['setUrl']((typeof ($3=$p['getattr'](self, 'sImages'))['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$p['getattr'](self, 'curImage')]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($p['getattr'](self, 'curImage'))));
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['loadImage'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Images', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var text;
			text = "This page demonstrates GWT's support for images.  Notice in particular how it uses the image's onLoad event to display a 'wait spinner' between the back and forward buttons.";
			return $m['SinkInfo']('Images', text, $m['Images']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sink.Images */


/* end module: sink.Images */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML']
*/
