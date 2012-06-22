/* start module: MailList */
$pyjs['loaded_modules']['MailList'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['MailList']['__was_initialized__']) return $pyjs['loaded_modules']['MailList'];
	var $m = $pyjs['loaded_modules']['MailList'];
	$m['__repr__'] = function() { return '<module: MailList>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MailList';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_10 = new $p['int'](10);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
		$m['MailItems'] = $p['___import___']('MailItems.MailItems', null, null, false);
		$m['Logger'] = $p['___import___']('Logger.Logger', null, null, false);
		$m['MailList'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'MailList';
			$cls_definition['__md5__'] = '7217dbde5cc63b5ffc353c448037ce9d';
			$cls_definition['VISIBLE_EMAIL_COUNT'] = $constant_int_10;
			$method = $pyjs__bind_method2('__init__', function(mailObject) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					mailObject = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7217dbde5cc63b5ffc353c448037ce9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var innerNavBar;
				$m['Composite']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('countLabel', $m['HTML']()) : $p['setattr'](self, 'countLabel', $m['HTML']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('newerButton', $m['HTML']("<a href='javascript:;'>&lt; newer</a>", true)) : $p['setattr'](self, 'newerButton', $m['HTML']("<a href='javascript:;'>&lt; newer</a>", true)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('olderButton', $m['HTML']("<a href='javascript:;'>older &gt;</a>", true)) : $p['setattr'](self, 'olderButton', $m['HTML']("<a href='javascript:;'>older &gt;</a>", true)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startIndex', $constant_int_0) : $p['setattr'](self, 'startIndex', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedRow', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))) : $p['setattr'](self, 'selectedRow', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('table', $m['FlexTable']()) : $p['setattr'](self, 'table', $m['FlexTable']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('navBar', $m['HorizontalPanel']()) : $p['setattr'](self, 'navBar', $m['HorizontalPanel']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mailObject', mailObject) : $p['setattr'](self, 'mailObject', mailObject); 
				self['table']['setCellSpacing']($constant_int_0);
				self['table']['setCellPadding']($constant_int_2);
				self['table']['setWidth']('100%');
				self['table']['addTableListener'](self);
				self['newerButton']['addClickListener'](self);
				self['olderButton']['addClickListener'](self);
				innerNavBar = $m['HorizontalPanel']();
				innerNavBar['setSpacing']($constant_int_8);
				innerNavBar['add']($p['getattr'](self, 'newerButton'));
				innerNavBar['add']($p['getattr'](self, 'countLabel'));
				innerNavBar['add']($p['getattr'](self, 'olderButton'));
				self['navBar']['setStyleName']('mail-ListNavBar');
				self['navBar']['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
				self['navBar']['add'](innerNavBar);
				self['navBar']['setWidth']('100%');
				self['initWidget']($p['getattr'](self, 'table'));
				self['setStyleName']('mail-List');
				self['initTable']();
				self['update']();
				return null;
			}
	, 1, [null,null,['self'],['mailObject']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onCellDoubleClicked', function(sender, row, cell) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					row = arguments[2];
					cell = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7217dbde5cc63b5ffc353c448037ce9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['sender'],['row'],['cell']]);
			$cls_definition['onCellDoubleClicked'] = $method;
			$method = $pyjs__bind_method2('onCellClicked', function(sender, row, cell) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					row = arguments[2];
					cell = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7217dbde5cc63b5ffc353c448037ce9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,$cmp2,$bool1,$sub2,$sub1;
				if ((($bool1=((($cmp1=row)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['selectRow']((typeof ($sub1=row)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['row'],['cell']]);
			$cls_definition['onCellClicked'] = $method;
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
					if (self.prototype['__md5__'] !== '7217dbde5cc63b5ffc353c448037ce9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$add2,$cmp6,$cmp3,$cmp4,$bool2,$bool3,$add1,$bool4,$bool5,$sub3,$sub6,$sub5,$sub4;
				if ((($bool2=$p['op_eq'](sender, $p['getattr'](self, 'olderButton'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startIndex', (typeof ($add1=$p['getattr'](self, 'startIndex'))==typeof ($add2=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT')) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))) : $p['setattr'](self, 'startIndex', (typeof ($add1=$p['getattr'](self, 'startIndex'))==typeof ($add2=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT')) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))); 
					if ((($bool3=((((($cmp3=$p['getattr'](self, 'startIndex'))===($cmp4=$m['MailItems']()['getMailItemCount']())?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startIndex', (typeof ($sub3=$p['getattr'](self, 'startIndex'))==typeof ($sub4=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT')) && (typeof $sub3=='number'||typeof $sub3=='string')?
							$sub3-$sub4:
							$p['op_sub']($sub3,$sub4))) : $p['setattr'](self, 'startIndex', (typeof ($sub3=$p['getattr'](self, 'startIndex'))==typeof ($sub4=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT')) && (typeof $sub3=='number'||typeof $sub3=='string')?
							$sub3-$sub4:
							$p['op_sub']($sub3,$sub4))); 
					}
					else {
						self['styleRow']($p['getattr'](self, 'selectedRow'), false);
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedRow', (typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))) : $p['setattr'](self, 'selectedRow', (typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))); 
						self['update']();
					}
				}
				else if ((($bool4=$p['op_eq'](sender, $p['getattr'](self, 'newerButton'))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startIndex', (typeof ($sub5=$p['getattr'](self, 'startIndex'))==typeof ($sub6=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT')) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6))) : $p['setattr'](self, 'startIndex', (typeof ($sub5=$p['getattr'](self, 'startIndex'))==typeof ($sub6=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT')) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6))); 
					if ((($bool5=((($cmp5=$p['getattr'](self, 'startIndex'))===($cmp6=$constant_int_0)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startIndex', $constant_int_0) : $p['setattr'](self, 'startIndex', $constant_int_0); 
					}
					else {
						self['styleRow']($p['getattr'](self, 'selectedRow'), false);
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedRow', (typeof ($usub3=$constant_int_1)=='number'?
							-$usub3:
							$p['op_usub']($usub3))) : $p['setattr'](self, 'selectedRow', (typeof ($usub3=$constant_int_1)=='number'?
							-$usub3:
							$p['op_usub']($usub3))); 
						self['update']();
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('initTable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7217dbde5cc63b5ffc353c448037ce9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp7,$add12,$add15,i,$add18,$add13,$cmp8,$add14,$add3,$add16,$add17,$bool6,$add7,$add4,$add5,$add6,$add8,$add9,$add10,$add11;
				self['table']['setText']($constant_int_0, $constant_int_0, 'sender');
				self['table']['setText']($constant_int_0, $constant_int_1, 'email');
				self['table']['setText']($constant_int_0, $constant_int_2, 'subject');
				self['table']['setWidget']($constant_int_0, $constant_int_3, $p['getattr'](self, 'navBar'));
				self['table']['getRowFormatter']()['setStyleName']($constant_int_0, 'mail-ListHeader');
				i = $constant_int_0;
				while ((($bool6=((($cmp7=i)===($cmp8=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT'))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['table']['setText']((typeof ($add3=i)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)), $constant_int_0, '');
					self['table']['setText']((typeof ($add5=i)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)), $constant_int_1, '');
					self['table']['setText']((typeof ($add7=i)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)), $constant_int_2, '');
					self['table']['getCellFormatter']()['setWordWrap']((typeof ($add9=i)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)), $constant_int_0, false);
					self['table']['getCellFormatter']()['setWordWrap']((typeof ($add11=i)==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)), $constant_int_1, false);
					self['table']['getCellFormatter']()['setWordWrap']((typeof ($add13=i)==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)), $constant_int_2, false);
					self['table']['getFlexCellFormatter']()['setColSpan']((typeof ($add15=i)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)), $constant_int_2, $constant_int_2);
					i = (typeof ($add17=i)==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['initTable'] = $method;
			$method = $pyjs__bind_method2('selectRow', function(row) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7217dbde5cc63b5ffc353c448037ce9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add20,item,$bool7,$add19;
				item = $m['MailItems']()['getMailItem']((typeof ($add19=$p['getattr'](self, 'startIndex'))==typeof ($add20=row) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)));
				if ((($bool7=$p['op_is'](item, null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					return null;
				}
				self['styleRow']($p['getattr'](self, 'selectedRow'), false);
				self['styleRow'](row, true);
				item['__is_instance__'] && typeof item['__setattr__'] == 'function' ? item['__setattr__']('read', true) : $p['setattr'](item, 'read', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('selectedRow', row) : $p['setattr'](self, 'selectedRow', row); 
				self['mailObject']['get']()['displayItem'](item);
				return null;
			}
	, 1, [null,null,['self'],['row']]);
			$cls_definition['selectRow'] = $method;
			$method = $pyjs__bind_method2('styleRow', function(row, selected) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					selected = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7217dbde5cc63b5ffc353c448037ce9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add22,$add21,$add24,$bool8,$bool9,$add23;
				if ((($bool8=!$p['op_eq'](row, (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8['__nonzero__']=='function'?
								$bool8['__nonzero__']() :
								(typeof $bool8['__len__']=='function'?
									($bool8['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool9=selected) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9['__nonzero__']=='function'?
									$bool9['__nonzero__']() :
									(typeof $bool9['__len__']=='function'?
										($bool9['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['table']['getRowFormatter']()['addStyleName']((typeof ($add21=row)==typeof ($add22=$constant_int_1) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22)), 'mail-SelectedRow');
					}
					else {
						self['table']['getRowFormatter']()['removeStyleName']((typeof ($add23=row)==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
							$add23+$add24:
							$p['op_add']($add23,$add24)), 'mail-SelectedRow');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['row'],['selected']]);
			$cls_definition['styleRow'] = $method;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7217dbde5cc63b5ffc353c448037ce9d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,$bool11,$bool12,$bool13,$bool14,$add41,$add40,$add29,$add28,startIndexPlusOne,$add49,item,$add47,$add46,$add44,$add25,$add42,$add27,$add26,$add48,$add43,$add50,max,$add36,$cmp15,$cmp14,$cmp17,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$cmp18,count,$add38,$add39,i,$add33,$add30,$add31,$cmp9,$add37,$add34,$add35,$add32,$add45;
				count = $m['MailItems']()['getMailItemCount']();
				max = (typeof ($add25=$p['getattr'](self, 'startIndex'))==typeof ($add26=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT')) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
				if ((($bool10=((($cmp9=max)===($cmp10=count)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					max = count;
				}
				self['newerButton']['setVisible'](!$p['op_eq']($p['getattr'](self, 'startIndex'), $constant_int_0));
				self['olderButton']['setVisible'](((($cmp11=(typeof ($add27=$p['getattr'](self, 'startIndex'))==typeof ($add28=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT')) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28)))===($cmp12=count)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1));
				startIndexPlusOne = (typeof ($add29=$p['getattr'](self, 'startIndex'))==typeof ($add30=$constant_int_1) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30));
				self['countLabel']['setText']($p['sprintf']('%d - %d of %d', $p['tuple']([startIndexPlusOne, max, count])));
				i = $constant_int_0;
				while ((($bool11=((($cmp13=i)===($cmp14=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT'))?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11['__nonzero__']=='function'?
								$bool11['__nonzero__']() :
								(typeof $bool11['__len__']=='function'?
									($bool11['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool12=((((($cmp15=(typeof ($add31=$p['getattr'](self, 'startIndex'))==typeof ($add32=i) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32)))===($cmp16=$m['MailItems']()['getMailItemCount']())?0:
						(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
							($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
							$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
							false :
							(typeof $bool12=='object'?
								(typeof $bool12['__nonzero__']=='function'?
									$bool12['__nonzero__']() :
									(typeof $bool12['__len__']=='function'?
										($bool12['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						break;
					}
					item = $m['MailItems']()['getMailItem']((typeof ($add33=$p['getattr'](self, 'startIndex'))==typeof ($add34=i) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34)));
					self['table']['setText']((typeof ($add35=i)==typeof ($add36=$constant_int_1) && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36)), $constant_int_0, $p['getattr'](item, 'sender'));
					self['table']['setText']((typeof ($add37=i)==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38)), $constant_int_1, $p['getattr'](item, 'email'));
					self['table']['setText']((typeof ($add39=i)==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40)), $constant_int_2, $p['getattr'](item, 'subject'));
					i = (typeof ($add41=i)==typeof ($add42=$constant_int_1) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42));
				}
				while ((($bool13=((($cmp17=i)===($cmp18=$p['getattr']($m['MailList'], 'VISIBLE_EMAIL_COUNT'))?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13['__nonzero__']=='function'?
								$bool13['__nonzero__']() :
								(typeof $bool13['__len__']=='function'?
									($bool13['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['table']['setHTML']((typeof ($add43=i)==typeof ($add44=$constant_int_1) && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44)), $constant_int_0, '&nbsp;');
					self['table']['setHTML']((typeof ($add45=i)==typeof ($add46=$constant_int_1) && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46)), $constant_int_1, '&nbsp;');
					self['table']['setHTML']((typeof ($add47=i)==typeof ($add48=$constant_int_1) && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48)), $constant_int_2, '&nbsp;');
					i = (typeof ($add49=i)==typeof ($add50=$constant_int_1) && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						$p['op_add']($add49,$add50));
				}
				if ((($bool14=$p['op_eq']($p['getattr'](self, 'selectedRow'), (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['selectRow']($constant_int_0);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MailList', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end MailList */


/* end module: MailList */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HasAlignment', 'MailItems.MailItems', 'MailItems', 'Logger.Logger', 'Logger']
*/
