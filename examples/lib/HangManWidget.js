/* start module: HangManWidget */
$pyjs.loaded_modules['HangManWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['HangManWidget'].__was_initialized__) return $pyjs.loaded_modules['HangManWidget'];
	var $m = $pyjs.loaded_modules["HangManWidget"];
	$m.__repr__ = function() { return "<module: HangManWidget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'HangManWidget';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_130 = new $p['int'](130);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_145 = new $p['int'](145);
		var $constant_int_147 = new $p['int'](147);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_280 = new $p['int'](280);
		var $constant_int_260 = new $p['int'](260);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_160 = new $p['int'](160);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_180 = new $p['int'](180);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_140 = new $p['int'](140);
		var $constant_int_80 = new $p['int'](80);
		var $constant_int_210 = new $p['int'](210);
		var $constant_int_100 = new $p['int'](100);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['RadioButton'] = $p['___import___']('pyjamas.ui.RadioButton.RadioButton', null, null, false);
		$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['math'] = $p['___import___']('math', null);
		$m['random'] = $p['___import___']('random', null);
		$m['string'] = $p['___import___']('string', null);
		$m['Wordlist_20'] = $p['___import___']('Wordlist_20', null);
		$m['Wordlist_15'] = $p['___import___']('Wordlist_15', null);
		$m['Wordlist_10'] = $p['___import___']('Wordlist_10', null);
		$m['Wordlist_5'] = $p['___import___']('Wordlist_5', null);
		$m['HangManWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'HangManWidget';
			$cls_definition.__md5__ = '8af66326ce6b623405b5b5900406d416';
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
					if (self.prototype.__md5__ !== '8af66326ce6b623405b5b5900406d416') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_array,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter1_array,$iter3_iter,$iter1_nextval,$bool2,$iter2_idx,$bool1,$iter3_type,$6,$4,$5,$2,$3,$1,$cmp4,$iter2_nextval,$cmp1,$iter1_type,$cmp3,$cmp2,i,$add2,$add1,$len2,$iter1_idx,$len1,$iter3_nextval,$iter2_array;
				$m['Composite']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('guesses', $constant_int_0) : $p['setattr'](self, 'guesses', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('score', $constant_int_0) : $p['setattr'](self, 'score', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', $constant_int_5) : $p['setattr'](self, 'level', $constant_int_5); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('answer', '') : $p['setattr'](self, 'answer', ''); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('blanks', '') : $p['setattr'](self, 'blanks', ''); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vp_main', $m['VerticalPanel']()) : $p['setattr'](self, 'vp_main', $m['VerticalPanel']()); 
				self['vp_main']['setSpacing']($constant_int_4);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hangdude', (typeof HangDude == "undefined"?$m.HangDude:HangDude)()) : $p['setattr'](self, 'hangdude', (typeof HangDude == "undefined"?$m.HangDude:HangDude)()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('cmdNew', $m['Button']('Start', self)) : $p['setattr'](self, 'cmdNew', $m['Button']('Start', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('radLevel5', $m['RadioButton']('group0', '5-10 letters')) : $p['setattr'](self, 'radLevel5', $m['RadioButton']('group0', '5-10 letters')); 
				self['radLevel5']['setChecked'](true);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('radLevel10', $m['RadioButton']('group0', '10-15 letters')) : $p['setattr'](self, 'radLevel10', $m['RadioButton']('group0', '10-15 letters')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('radLevel15', $m['RadioButton']('group0', '15-20 letters')) : $p['setattr'](self, 'radLevel15', $m['RadioButton']('group0', '15-20 letters')); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('radLevel20', $m['RadioButton']('group0', '20+ letters')) : $p['setattr'](self, 'radLevel20', $m['RadioButton']('group0', '20+ letters')); 
				self['radLevel5']['addClickListener']($p['getattr'](self, 'onRadioSelect'));
				self['radLevel10']['addClickListener']($p['getattr'](self, 'onRadioSelect'));
				self['radLevel15']['addClickListener']($p['getattr'](self, 'onRadioSelect'));
				self['radLevel20']['addClickListener']($p['getattr'](self, 'onRadioSelect'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('rad_hp', $m['HorizontalPanel']()) : $p['setattr'](self, 'rad_hp', $m['HorizontalPanel']()); 
				self['rad_hp']['setSpacing']($constant_int_4);
				self['rad_hp']['add']($p['getattr'](self, 'radLevel5'));
				self['rad_hp']['add']($p['getattr'](self, 'radLevel10'));
				self['rad_hp']['add']($p['getattr'](self, 'radLevel15'));
				self['rad_hp']['add']($p['getattr'](self, 'radLevel20'));
				self['rad_hp']['add']($p['getattr'](self, 'cmdNew'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('puzzlestring', $m['HTML']()) : $p['setattr'](self, 'puzzlestring', $m['HTML']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('key_widgets', $p['list']([])) : $p['setattr'](self, 'key_widgets', $p['list']([])); 
				$iter1_iter = $p['range']((($len1=$p['getattr']($m['string'], 'uppercase')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['key_widgets']['append']($m['Button']($p['__getslice']($p['getattr']($m['string'], 'uppercase'), i, (typeof ($add1=i)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))), self));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('toprow', $m['HorizontalPanel']()) : $p['setattr'](self, 'toprow', $m['HorizontalPanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('midrow', $m['HorizontalPanel']()) : $p['setattr'](self, 'midrow', $m['HorizontalPanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('botrow', $m['HorizontalPanel']()) : $p['setattr'](self, 'botrow', $m['HorizontalPanel']()); 
				$iter2_iter = $p['range']((($len2=$p['getattr'](self, 'key_widgets')) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					if ((($bool1=((($cmp1=i)===($cmp2=$constant_int_7)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) < 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						self['toprow']['add']((typeof ($1=$p['getattr'](self, 'key_widgets')).__array != 'undefined'?
							((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__(i)));
					}
					else if ((($bool2=((($cmp3=i)===($cmp4=$constant_int_16)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) < 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						self['midrow']['add']((typeof ($3=$p['getattr'](self, 'key_widgets')).__array != 'undefined'?
							((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__(i)));
					}
					else {
						self['botrow']['add']((typeof ($5=$p['getattr'](self, 'key_widgets')).__array != 'undefined'?
							((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
								$5.__getitem__($6)):
								$5.__getitem__(i)));
					}
				}
				self['vp_main']['add']($p['getattr'](self, 'hangdude'));
				self['vp_main']['add']($p['getattr'](self, 'puzzlestring'));
				self['vp_main']['add']($p['getattr'](self, 'toprow'));
				self['vp_main']['add']($p['getattr'](self, 'midrow'));
				self['vp_main']['add']($p['getattr'](self, 'botrow'));
				self['vp_main']['add']($p['getattr'](self, 'rad_hp'));
				$iter3_iter = $p['range']($constant_int_1, $constant_int_12);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					self['hangdude']['draw'](i);
				}
				self['setWidget']($p['getattr'](self, 'vp_main'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8af66326ce6b623405b5b5900406d416') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$add20,$bool4,$iter6_type,$iter5_array,$bool12,$9,$add10,$cmp8,$iter5_iter,$iter4_type,$mul6,$iter5_type,$iter6_iter,$iter4_iter,$mul5,$iter6_nextval,$12,$len6,$mul4,$len7,$add21,$add18,$add22,$add19,$bool10,$len5,$8,$iter5_idx,$sub2,$sub1,$bool11,$add7,$bool13,$iter6_idx,$add13,$bool3,$iter6_array,$add17,$bool6,$bool7,words,$bool5,$add12,$7,$bool8,$bool9,$mul3,$mul2,$mul1,$11,$cmp5,$add14,$cmp7,$cmp6,$10,g,$add15,i,$iter4_nextval,j,$add16,$iter4_idx,$add3,$len4,r,$add6,$len3,$add4,$add5,$iter4_array,found,$add8,$add9,guess_letter,$add11;
				found = false;
				if ((($bool3=$p['op_eq'](sender, $p['getattr'](self, 'cmdNew'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('blanks', '') : $p['setattr'](self, 'blanks', ''); 
					self['hangdude']['clear']();
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('guesses', $constant_int_0) : $p['setattr'](self, 'guesses', $constant_int_0); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('score', $constant_int_0) : $p['setattr'](self, 'score', $constant_int_0); 
					$iter4_iter = $p['range']((($len3=$p['getattr'](self, 'key_widgets')) === null?$constant_int_0:
						(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
							(typeof $len3.__len__ == 'function'?$len3.__len__():
								(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
									$p['len']($len3))))));
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						i = $iter4_nextval;
						(typeof ($7=$p['getattr'](self, 'key_widgets')).__array != 'undefined'?
							((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
								$7.__getitem__($8)):
								$7.__getitem__(i))['setEnabled'](true);
					}
					if ((($bool4=$p['op_eq']($p['getattr'](self, 'level'), $constant_int_5)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						words = $p['getattr']($m['Wordlist_5'], 'words');
					}
					else if ((($bool5=$p['op_eq']($p['getattr'](self, 'level'), $constant_int_10)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						words = $p['getattr']($m['Wordlist_10'], 'words');
					}
					else if ((($bool6=$p['op_eq']($p['getattr'](self, 'level'), $constant_int_15)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
							false :
							(typeof $bool6=='object'?
								(typeof $bool6.__nonzero__=='function'?
									$bool6.__nonzero__() :
									(typeof $bool6.__len__=='function'?
										($bool6.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						words = $p['getattr']($m['Wordlist_15'], 'words');
					}
					else if ((($bool7=$p['op_eq']($p['getattr'](self, 'level'), $constant_int_20)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7.__nonzero__=='function'?
									$bool7.__nonzero__() :
									(typeof $bool7.__len__=='function'?
										($bool7.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						words = $p['getattr']($m['Wordlist_20'], 'words');
					}
					g = $m['random']['Random']();
					r = $p['int']((typeof ($mul1=g['random']())==typeof ($mul2=(($len4=words) === null?$constant_int_0:
						(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
							(typeof $len4.__len__ == 'function'?$len4.__len__():
								(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
									$p['len']($len4)))))) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('answer', (typeof ($9=words).__array != 'undefined'?
						((typeof $9.__array[$10=r]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(r))['upper']()) : $p['setattr'](self, 'answer', (typeof ($9=words).__array != 'undefined'?
						((typeof $9.__array[$10=r]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(r))['upper']()); 
					$iter5_iter = $p['range']((($len5=$p['getattr'](self, 'answer')) === null?$constant_int_0:
						(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
							(typeof $len5.__len__ == 'function'?$len5.__len__():
								(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
									$p['len']($len5))))));
					if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
						$iter5_type = 0;
					} else {
						$iter5_iter = $iter5_iter.__iter__();
						$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter5_idx = 0;
					while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
						i = $iter5_nextval;
						if ((($bool8=$p['op_eq']((typeof ($11=$p['getattr'](self, 'answer')).__array != 'undefined'?
							((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
								$11.__getitem__($12)):
								$11.__getitem__(i)), ' ')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
								false :
								(typeof $bool8=='object'?
									(typeof $bool8.__nonzero__=='function'?
										$bool8.__nonzero__() :
										(typeof $bool8.__len__=='function'?
											($bool8.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('blanks', (typeof ($add3=$p['getattr'](self, 'blanks'))==typeof ($add4='  ') && (typeof $add3=='number'||typeof $add3=='string')?
								$add3+$add4:
								$p['op_add']($add3,$add4))) : $p['setattr'](self, 'blanks', (typeof ($add3=$p['getattr'](self, 'blanks'))==typeof ($add4='  ') && (typeof $add3=='number'||typeof $add3=='string')?
								$add3+$add4:
								$p['op_add']($add3,$add4))); 
						}
						else {
							self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('blanks', (typeof ($add5=$p['getattr'](self, 'blanks'))==typeof ($add6='_ ') && (typeof $add5=='number'||typeof $add5=='string')?
								$add5+$add6:
								$p['op_add']($add5,$add6))) : $p['setattr'](self, 'blanks', (typeof ($add5=$p['getattr'](self, 'blanks'))==typeof ($add6='_ ') && (typeof $add5=='number'||typeof $add5=='string')?
								$add5+$add6:
								$p['op_add']($add5,$add6))); 
						}
					}
					self['puzzlestring']['setHTML']($p['getattr'](self, 'blanks'));
				}
				else {
					guess_letter = sender['getText']();
					sender['setEnabled'](false);
					$iter6_iter = $p['range']((($len6=$p['getattr'](self, 'answer')) === null?$constant_int_0:
						(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
							(typeof $len6.__len__ == 'function'?$len6.__len__():
								(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
									$p['len']($len6))))));
					if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter.__iter__();
						$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						i = $iter6_nextval;
						if ((($bool9=$p['op_eq']($p['__getslice']($p['getattr'](self, 'answer'), i, (typeof ($add7=i)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8))), guess_letter)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
								false :
								(typeof $bool9=='object'?
									(typeof $bool9.__nonzero__=='function'?
										$bool9.__nonzero__() :
										(typeof $bool9.__len__=='function'?
											($bool9.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							j = (typeof ($add9=i)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
								$add9+$add10:
								$p['op_add']($add9,$add10));
							self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('blanks', (typeof ($add15=(typeof ($add13=(typeof ($add11=$p['__getslice']($p['getattr'](self, 'blanks'), $constant_int_0, (typeof ($sub1=(typeof ($mul3=j)==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4)))==typeof ($sub2=$constant_int_2) && (typeof $sub1=='number'||typeof $sub1=='string')?
								$sub1-$sub2:
								$p['op_sub']($sub1,$sub2))))==typeof ($add12=guess_letter) && (typeof $add11=='number'||typeof $add11=='string')?
								$add11+$add12:
								$p['op_add']($add11,$add12)))==typeof ($add14=' ') && (typeof $add13=='number'||typeof $add13=='string')?
								$add13+$add14:
								$p['op_add']($add13,$add14)))==typeof ($add16=$p['__getslice']($p['getattr'](self, 'blanks'), (typeof ($mul5=j)==typeof ($mul6=$constant_int_2) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)), null)) && (typeof $add15=='number'||typeof $add15=='string')?
								$add15+$add16:
								$p['op_add']($add15,$add16))) : $p['setattr'](self, 'blanks', (typeof ($add15=(typeof ($add13=(typeof ($add11=$p['__getslice']($p['getattr'](self, 'blanks'), $constant_int_0, (typeof ($sub1=(typeof ($mul3=j)==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4)))==typeof ($sub2=$constant_int_2) && (typeof $sub1=='number'||typeof $sub1=='string')?
								$sub1-$sub2:
								$p['op_sub']($sub1,$sub2))))==typeof ($add12=guess_letter) && (typeof $add11=='number'||typeof $add11=='string')?
								$add11+$add12:
								$p['op_add']($add11,$add12)))==typeof ($add14=' ') && (typeof $add13=='number'||typeof $add13=='string')?
								$add13+$add14:
								$p['op_add']($add13,$add14)))==typeof ($add16=$p['__getslice']($p['getattr'](self, 'blanks'), (typeof ($mul5=j)==typeof ($mul6=$constant_int_2) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)), null)) && (typeof $add15=='number'||typeof $add15=='string')?
								$add15+$add16:
								$p['op_add']($add15,$add16))); 
							found = true;
							self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('score', (typeof ($add17=$p['getattr'](self, 'score'))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
								$add17+$add18:
								$p['op_add']($add17,$add18))) : $p['setattr'](self, 'score', (typeof ($add17=$p['getattr'](self, 'score'))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
								$add17+$add18:
								$p['op_add']($add17,$add18))); 
						}
					}
					self['puzzlestring']['setHTML']($p['getattr'](self, 'blanks'));
					if ((($bool11=!(($bool10=found) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10.__nonzero__=='function'?
								$bool10.__nonzero__() :
								(typeof $bool10.__len__=='function'?
									($bool10.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('guesses', (typeof ($add19=$p['getattr'](self, 'guesses'))==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20))) : $p['setattr'](self, 'guesses', (typeof ($add19=$p['getattr'](self, 'guesses'))==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20))); 
						self['hangdude']['draw']($p['getattr'](self, 'guesses'));
						if ((($bool12=((((($cmp5=$p['getattr'](self, 'guesses'))===($cmp6=$constant_int_11)?0:
							(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
								($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
								$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
							$m['Window']['alert']((typeof ($add21='You lose! Answer: ')==typeof ($add22=$p['getattr'](self, 'answer')) && (typeof $add21=='number'||typeof $add21=='string')?
								$add21+$add22:
								$p['op_add']($add21,$add22)));
						}
					}
					else {
						if ((($bool13=((((($cmp7=$p['getattr'](self, 'score'))===($cmp8=(($len7=$p['getattr'](self, 'answer')) === null?$constant_int_0:
							(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
								(typeof $len7.__len__ == 'function'?$len7.__len__():
									(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
										$p['len']($len7))))))?0:
							(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
								($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
								$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
								false :
								(typeof $bool13=='object'?
									(typeof $bool13.__nonzero__=='function'?
										$bool13.__nonzero__() :
										(typeof $bool13.__len__=='function'?
											($bool13.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$m['Window']['alert']('You win!');
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onRadioSelect', function(sender, keyCode, modifiers) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keyCode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '8af66326ce6b623405b5b5900406d416') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof keyCode == 'undefined') keyCode=arguments.callee.__args__[4][1];
				if (typeof modifiers == 'undefined') modifiers=arguments.callee.__args__[5][1];
				var $bool14,$bool15,$bool16,$bool17;
				if ((($bool14=$p['op_eq'](sender, $p['getattr'](self, 'radLevel5'))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14.__nonzero__=='function'?
								$bool14.__nonzero__() :
								(typeof $bool14.__len__=='function'?
									($bool14.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', $constant_int_5) : $p['setattr'](self, 'level', $constant_int_5); 
				}
				else if ((($bool15=$p['op_eq'](sender, $p['getattr'](self, 'radLevel10'))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', $constant_int_10) : $p['setattr'](self, 'level', $constant_int_10); 
				}
				else if ((($bool16=$p['op_eq'](sender, $p['getattr'](self, 'radLevel15'))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', $constant_int_15) : $p['setattr'](self, 'level', $constant_int_15); 
				}
				else if ((($bool17=$p['op_eq'](sender, $p['getattr'](self, 'radLevel20'))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', $constant_int_20) : $p['setattr'](self, 'level', $constant_int_20); 
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keyCode', null],['modifiers', null]]);
			$cls_definition['onRadioSelect'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HangManWidget', $p['tuple']($bases), $data);
		})();
		$m['HangDude'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'HangManWidget';
			$cls_definition.__md5__ = '21799753d8cfc802172a37c609a4884b';
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
					if (self.prototype.__md5__ !== '21799753d8cfc802172a37c609a4884b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['HorizontalPanel']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('context', $m['GWTCanvas']($constant_int_300, $constant_int_300, $constant_int_300, $constant_int_300)) : $p['setattr'](self, 'context', $m['GWTCanvas']($constant_int_300, $constant_int_300, $constant_int_300, $constant_int_300)); 
				self['context']['addStyleName']('gwt-canvas');
				self['add']($p['getattr'](self, 'context'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('clear', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '21799753d8cfc802172a37c609a4884b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['context']['clear']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$method = $pyjs__bind_method2('draw', function(guesses) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					guesses = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '21799753d8cfc802172a37c609a4884b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$mul7,$div10,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool28,$div8,$div9,$mul9,$mul8,$div2,$div3,$div1,$div6,$div7,$div4,$div5,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,$mul18;
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('fillStyle', '#000') : $p['setattr']($p['getattr'](self, 'context'), 'fillStyle', '#000'); 
				$p['getattr'](self, 'context').__is_instance__ && typeof $p['getattr'](self, 'context').__setattr__ == 'function' ? $p['getattr'](self, 'context').__setattr__('lineWidth', $constant_int_2) : $p['setattr']($p['getattr'](self, 'context'), 'lineWidth', $constant_int_2); 
				if ((($bool18=$p['op_eq'](guesses, $constant_int_1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					self['context']['fillRect']($constant_int_20, $constant_int_280, $constant_int_200, $constant_int_10);
				}
				else if ((($bool19=$p['op_eq'](guesses, $constant_int_2)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19.__nonzero__=='function'?
								$bool19.__nonzero__() :
								(typeof $bool19.__len__=='function'?
									($bool19.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['context']['fillRect']($constant_int_40, $constant_int_20, $constant_int_10, $constant_int_260);
				}
				else if ((($bool20=$p['op_eq'](guesses, $constant_int_3)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20.__nonzero__=='function'?
								$bool20.__nonzero__() :
								(typeof $bool20.__len__=='function'?
									($bool20.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['context']['fillRect']($constant_int_20, $constant_int_20, $constant_int_160, $constant_int_10);
				}
				else if ((($bool21=$p['op_eq'](guesses, $constant_int_4)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					self['context']['saveContext']();
					self['context']['translate']($constant_int_80, $constant_int_30);
					self['context']['rotate']((typeof ($div1=(typeof ($mul7=$constant_int_130)==typeof ($mul8=$p['getattr']($m['math'], 'pi')) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)))==typeof ($div2=$constant_int_180) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)));
					self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_50, $constant_int_10);
					self['context']['restoreContext']();
				}
				else if ((($bool22=$p['op_eq'](guesses, $constant_int_5)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22.__nonzero__=='function'?
								$bool22.__nonzero__() :
								(typeof $bool22.__len__=='function'?
									($bool22.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['context']['fillRect']($constant_int_140, $constant_int_20, $constant_int_10, $constant_int_50);
				}
				else if ((($bool23=$p['op_eq'](guesses, $constant_int_6)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23.__nonzero__=='function'?
								$bool23.__nonzero__() :
								(typeof $bool23.__len__=='function'?
									($bool23.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['context']['beginPath']();
					self['context']['arc']($constant_int_145, $constant_int_100, $constant_int_30, $constant_int_0, (typeof ($mul9=$p['getattr']($m['math'], 'pi'))==typeof ($mul10=$constant_int_2) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)), true);
					self['context']['closePath']();
					self['context']['stroke']();
				}
				else if ((($bool24=$p['op_eq'](guesses, $constant_int_7)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					self['context']['fillRect']($constant_int_145, $constant_int_130, $constant_int_2, $constant_int_80);
				}
				else if ((($bool25=$p['op_eq'](guesses, $constant_int_8)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25.__nonzero__=='function'?
								$bool25.__nonzero__() :
								(typeof $bool25.__len__=='function'?
									($bool25.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['context']['saveContext']();
					self['context']['translate']($constant_int_147, $constant_int_160);
					self['context']['rotate']((typeof ($div3=(typeof ($mul11=$constant_int_130)==typeof ($mul12=$p['getattr']($m['math'], 'pi')) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12)))==typeof ($div4=$constant_int_180) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)));
					self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_50, $constant_int_2);
					self['context']['restoreContext']();
				}
				else if ((($bool26=$p['op_eq'](guesses, $constant_int_9)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26.__nonzero__=='function'?
								$bool26.__nonzero__() :
								(typeof $bool26.__len__=='function'?
									($bool26.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['context']['saveContext']();
					self['context']['translate']($constant_int_147, $constant_int_160);
					self['context']['rotate']((typeof ($div5=(typeof ($mul13=$constant_int_45)==typeof ($mul14=$p['getattr']($m['math'], 'pi')) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14)))==typeof ($div6=$constant_int_180) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6)));
					self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_50, $constant_int_2);
					self['context']['restoreContext']();
				}
				else if ((($bool27=$p['op_eq'](guesses, $constant_int_10)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27.__nonzero__=='function'?
								$bool27.__nonzero__() :
								(typeof $bool27.__len__=='function'?
									($bool27.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['context']['saveContext']();
					self['context']['translate']($constant_int_147, $constant_int_210);
					self['context']['rotate']((typeof ($div7=(typeof ($mul15=$constant_int_130)==typeof ($mul16=$p['getattr']($m['math'], 'pi')) && typeof $mul15=='number'?
						$mul15*$mul16:
						$p['op_mul']($mul15,$mul16)))==typeof ($div8=$constant_int_180) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)));
					self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_60, $constant_int_2);
					self['context']['restoreContext']();
				}
				else if ((($bool28=$p['op_eq'](guesses, $constant_int_11)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28.__nonzero__=='function'?
								$bool28.__nonzero__() :
								(typeof $bool28.__len__=='function'?
									($bool28.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['context']['saveContext']();
					self['context']['translate']($constant_int_147, $constant_int_210);
					self['context']['rotate']((typeof ($div9=(typeof ($mul17=$constant_int_45)==typeof ($mul18=$p['getattr']($m['math'], 'pi')) && typeof $mul17=='number'?
						$mul17*$mul18:
						$p['op_mul']($mul17,$mul18)))==typeof ($div10=$constant_int_180) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10)));
					self['context']['fillRect']($constant_int_0, $constant_int_0, $constant_int_60, $constant_int_2);
					self['context']['restoreContext']();
				}
				self['context']['restoreContext']();
				return null;
			}
	, 1, [null,null,['self'],['guesses']]);
			$cls_definition['draw'] = $method;
			var $bases = new Array($m['HorizontalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HangDude', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end HangManWidget */


/* end module: HangManWidget */


/*
PYJS_DEPS: ['pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.RadioButton.RadioButton', 'pyjamas.ui.RadioButton', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Window', 'math', 'random', 'string', 'Wordlist_20', 'Wordlist_15', 'Wordlist_10', 'Wordlist_5']
*/
