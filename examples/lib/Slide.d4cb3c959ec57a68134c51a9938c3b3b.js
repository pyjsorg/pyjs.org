/* start module: Slide */
$pyjs['loaded_modules']['Slide'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Slide']['__was_initialized__']) return $pyjs['loaded_modules']['Slide'];
	var $m = $pyjs['loaded_modules']['Slide'];
	$m['__repr__'] = function() { return '<module: Slide>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Slide';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_0 = new $p['int'](0);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['SlideLoader'] = $p['___import___']('SlideLoader.SlideLoader', null, null, false);
		$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['esc'] = function(txt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return txt;
		};
		$m['esc']['__name__'] = 'esc';

		$m['esc']['__bind_type__'] = 0;
		$m['esc']['__args__'] = [null,null,['txt']];
		$m['urlmap'] = function(txt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter1_iter,$or1,end,$add3,$iter1_array,$sub2,$sub1,$add7,$iter1_nextval,$or3,$or2,$add5,$add6,$bool2,$bool3,$bool1,$bool4,$bool5,$2,$1,c,$iter1_type,idx,i,beg,$add2,url,$add1,$len2,$iter1_idx,$add4,$len1,$add8;
			idx = txt['find']('http://');
			if ((($bool1=$p['op_eq'](idx, (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				return $m['esc'](txt);
			}
			$iter1_iter = $p['range'](idx, (($len1=txt) === null?$constant_int_0:
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
				c = (typeof ($1=txt)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i));
				if ((($bool4=((($bool2=$or1=$p['op_eq'](c, ' ')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($bool3=$or2=$p['op_eq'](c, '\n')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or2:$p['op_eq'](c, '\t')))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					i = (typeof ($sub1=i)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
					break;
				}
			}
			i = (typeof ($add1=i)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			beg = $p['__getslice'](txt, 0, idx);
			if ((($bool5=$p['op_eq'](i, (($len2=txt) === null?$constant_int_0:
				(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
							$p['len']($len2))))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				url = $p['__getslice'](txt, idx, null);
				end = '';
			}
			else {
				url = $p['__getslice'](txt, idx, i);
				end = $p['__getslice'](txt, i, null);
			}
			txt = (typeof ($add3=$m['esc'](beg))==typeof ($add4=$p['sprintf']("<a href='%s'>", url)) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			txt = (typeof ($add7=txt)==typeof ($add8=(typeof ($add5=$p['sprintf']('%s</a>', $m['esc'](url)))==typeof ($add6=$m['urlmap'](end)) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			return txt;
		};
		$m['urlmap']['__name__'] = 'urlmap';

		$m['urlmap']['__bind_type__'] = 0;
		$m['urlmap']['__args__'] = [null,null,['txt']];
		$m['ts'] = function(txt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter2_nextval,$iter2_type,$iter2_iter,l,$iter2_idx,r,line,$iter2_array;
			l = txt['$$split']('\n');
			r = $p['list']([]);
			$iter2_iter = l;
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				line = $iter2_nextval;
				r['append']($m['urlmap'](line));
			}
			return '<br />'['join'](r);
		};
		$m['ts']['__name__'] = 'ts';

		$m['ts']['__bind_type__'] = 0;
		$m['ts']['__args__'] = [null,null,['txt']];
		$m['Slide'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Slide';
			$cls_definition['__md5__'] = '81f2d276afb5112323a3db8b2784db2a';
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
					if (self.prototype['__md5__'] !== '81f2d276afb5112323a3db8b2784db2a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var text;
				$m['Sink']['__init__'](self);
				text = "<div class='infoProse'>This is the Kitchen Sink sample.  ";
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vp', $m['VerticalPanel']()) : $p['setattr'](self, 'vp', $m['VerticalPanel']()); 
				self['initWidget']($p['getattr'](self, 'vp'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loaded', false) : $p['setattr'](self, 'loaded', false); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onShow', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '81f2d276afb5112323a3db8b2784db2a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,name;
				if ((($bool6=$p['getattr'](self, 'loaded')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					return null;
				}
				name = self['$$name']['$$replace'](' ', '_');
				name = name['lower']();
				$m['HTTPRequest']()['asyncGet']($p['sprintf']('%s.txt', name), $m['SlideLoader'](self));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			$method = $pyjs__bind_method2('setSlide', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '81f2d276afb5112323a3db8b2784db2a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,ul_stack1,$bool10,$bool12,$iter3_type,$bool14,$bool15,$bool16,$bool17,$bool37,txt,line,$and11,$add23,$iter3_idx,ul_line,$add21,ul_stack2,$add22,$add25,$bool27,$and7,$bool25,$bool24,add,$bool26,$bool21,$iter3_iter,$bool23,$bool11,$add26,$bool29,$bool28,$bool20,$and8,$and9,$bool34,$bool13,doing_code,$and1,$and2,$and3,$and4,$bool22,$and6,$and5,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$iter3_array,$cmp1,$bool8,$bool9,$add18,$add19,$bool35,ul_line2,$cmp2,$and10,$bool32,$bool33,$bool30,$bool31,$bool36,$len3,$add13,$add20,$add24,$bool38,$add9,$iter3_nextval,$bool7;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loaded', true) : $p['setattr'](self, 'loaded', true); 
				ul_stack1 = $constant_int_0;
				ul_stack2 = $constant_int_0;
				doing_code = $constant_int_0;
				txt = '';
				text = (typeof ($add9=text)==typeof ($add10='\n') && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				$iter3_iter = text['$$split']('\n');
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					line = $iter3_nextval;
					if ((($bool7=doing_code) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						if ((($bool8=$p['op_eq'](line, '}}')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
							doing_code = $constant_int_0;
							line = '</pre>';
							txt = (typeof ($add11=txt)==typeof ($add12=line) && (typeof $add11=='number'||typeof $add11=='string')?
								$add11+$add12:
								$p['op_add']($add11,$add12));
							self['vp']['add']($m['HTML'](txt));
							txt = '';
							continue;
						}
						if ((($bool9=line) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
							txt = (typeof ($add13=txt)==typeof ($add14=line) && (typeof $add13=='number'||typeof $add13=='string')?
								$add13+$add14:
								$p['op_add']($add13,$add14));
						}
						txt = (typeof ($add15=txt)==typeof ($add16='\n') && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16));
						continue;
					}
					line = line['strip']();
					ul_line = false;
					ul_line2 = false;
					add = false;
					if ((($bool11=!(($bool10=line) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
						false :
						(typeof $bool10=='object'?
							(typeof $bool10['__nonzero__']=='function'?
								$bool10['__nonzero__']() :
								(typeof $bool10['__len__']=='function'?
									($bool10['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						line = '&nbsp;';
					}
					else if ((($bool12=$p['op_eq']($p['__getslice'](line, 0, $constant_int_2), '{{')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						doing_code = $constant_int_1;
						if ((($bool13=((($cmp1=(($len3=line) === null?$constant_int_0:
							(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
								(typeof $len3['__len__'] == 'function'?$len3['__len__']():
									(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
										$p['len']($len3))))))===($cmp2=$constant_int_2)?0:
							(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
								($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
								$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
							line = $p['sprintf']("<pre class='slide_code'>%s", $p['__getslice'](line, $constant_int_2, null));
						}
						else {
							line = "<pre class='slide_code'>";
						}
					}
					else if ((($bool15=((($bool14=$and1=$p['op_eq']($p['__getslice'](line, 0, $constant_int_2), '= ')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']($p['__getslice'](line, (typeof ($usub2=$constant_int_2)=='number'?
						-$usub2:
						$p['op_usub']($usub2)), null), ' ='):$and1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
							false :
							(typeof $bool15=='object'?
								(typeof $bool15['__nonzero__']=='function'?
									$bool15['__nonzero__']() :
									(typeof $bool15['__len__']=='function'?
										($bool15['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						line = $p['sprintf']("<h1 class='slide_heading1'>%s</h1>", $p['__getslice'](line, $constant_int_2, (typeof ($usub3=$constant_int_2)=='number'?
							-$usub3:
							$p['op_usub']($usub3))));
					}
					else if ((($bool17=((($bool16=$and3=$p['op_eq']($p['__getslice'](line, 0, $constant_int_3), '== ')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']($p['__getslice'](line, (typeof ($usub4=$constant_int_3)=='number'?
						-$usub4:
						$p['op_usub']($usub4)), null), ' =='):$and3)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
							false :
							(typeof $bool17=='object'?
								(typeof $bool17['__nonzero__']=='function'?
									$bool17['__nonzero__']() :
									(typeof $bool17['__len__']=='function'?
										($bool17['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						line = $p['sprintf']("<h2 class='slide_heading2>%s</h2>", $p['__getslice'](line, $constant_int_3, (typeof ($usub5=$constant_int_3)=='number'?
							-$usub5:
							$p['op_usub']($usub5))));
					}
					else if ((($bool18=$p['op_eq']($p['__getslice'](line, 0, $constant_int_2), '* ')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
							false :
							(typeof $bool18=='object'?
								(typeof $bool18['__nonzero__']=='function'?
									$bool18['__nonzero__']() :
									(typeof $bool18['__len__']=='function'?
										($bool18['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool20=!(($bool19=ul_stack1) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
							false :
							(typeof $bool19=='object'?
								(typeof $bool19['__nonzero__']=='function'?
									$bool19['__nonzero__']() :
									(typeof $bool19['__len__']=='function'?
										($bool19['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
								false :
								(typeof $bool20=='object'?
									(typeof $bool20['__nonzero__']=='function'?
										$bool20['__nonzero__']() :
										(typeof $bool20['__len__']=='function'?
											($bool20['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							txt = (typeof ($add17=txt)==typeof ($add18="<ul class='slide_list1'>\n") && (typeof $add17=='number'||typeof $add17=='string')?
								$add17+$add18:
								$p['op_add']($add17,$add18));
						}
						line = $p['sprintf']("<li class='slide_listitem1'/>%s\n", $m['ts']($p['__getslice'](line, $constant_int_2, null)));
						ul_stack1 = true;
						ul_line = true;
					}
					else if ((($bool21=$p['op_eq']($p['__getslice'](line, 0, $constant_int_3), '** ')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
							false :
							(typeof $bool21=='object'?
								(typeof $bool21['__nonzero__']=='function'?
									$bool21['__nonzero__']() :
									(typeof $bool21['__len__']=='function'?
										($bool21['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool23=!(($bool22=ul_stack2) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
							false :
							(typeof $bool22=='object'?
								(typeof $bool22['__nonzero__']=='function'?
									$bool22['__nonzero__']() :
									(typeof $bool22['__len__']=='function'?
										($bool22['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
								false :
								(typeof $bool23=='object'?
									(typeof $bool23['__nonzero__']=='function'?
										$bool23['__nonzero__']() :
										(typeof $bool23['__len__']=='function'?
											($bool23['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							txt = (typeof ($add19=txt)==typeof ($add20="<ul class='slide_list2'>\n") && (typeof $add19=='number'||typeof $add19=='string')?
								$add19+$add20:
								$p['op_add']($add19,$add20));
						}
						line = $p['sprintf']("<li class='slide_listitem2'/>%s\n", $m['ts']($p['__getslice'](line, $constant_int_2, null)));
						ul_stack2 = true;
						ul_line2 = true;
						ul_line = true;
					}
					else {
						if ((($bool25=!(($bool24=doing_code) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
							false :
							(typeof $bool24=='object'?
								(typeof $bool24['__nonzero__']=='function'?
									$bool24['__nonzero__']() :
									(typeof $bool24['__len__']=='function'?
										($bool24['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
								false :
								(typeof $bool25=='object'?
									(typeof $bool25['__nonzero__']=='function'?
										$bool25['__nonzero__']() :
										(typeof $bool25['__len__']=='function'?
											($bool25['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							line = $p['sprintf']("<p class='slide_para'>%s</p>", line);
						}
					}
					if ((($bool28=((($bool26=$and5=ul_stack2) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26['__nonzero__']=='function'?
								$bool26['__nonzero__']() :
								(typeof $bool26['__len__']=='function'?
									($bool26['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($bool27=ul_line2) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ):$and5)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
							false :
							(typeof $bool28=='object'?
								(typeof $bool28['__nonzero__']=='function'?
									$bool28['__nonzero__']() :
									(typeof $bool28['__len__']=='function'?
										($bool28['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						ul_stack2 = false;
						txt = (typeof ($add21=txt)==typeof ($add22='</ul>\n') && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22));
					}
					if ((($bool31=((($bool29=$and7=ul_stack1) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($bool30=ul_line) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ):$and7)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
							false :
							(typeof $bool31=='object'?
								(typeof $bool31['__nonzero__']=='function'?
									$bool31['__nonzero__']() :
									(typeof $bool31['__len__']=='function'?
										($bool31['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						ul_stack1 = false;
						txt = (typeof ($add23=txt)==typeof ($add24='</ul>\n') && (typeof $add23=='number'||typeof $add23=='string')?
							$add23+$add24:
							$p['op_add']($add23,$add24));
					}
					if ((($bool37=((($bool34=$and9=!(($bool32=ul_stack2) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool35=$and10=!(($bool33=ul_stack1) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!(($bool36=doing_code) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36['__nonzero__']=='function'?
								$bool36['__nonzero__']() :
								(typeof $bool36['__len__']=='function'?
									($bool36['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ):$and10):$and9)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
							false :
							(typeof $bool37=='object'?
								(typeof $bool37['__nonzero__']=='function'?
									$bool37['__nonzero__']() :
									(typeof $bool37['__len__']=='function'?
										($bool37['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						add = true;
					}
					txt = (typeof ($add25=txt)==typeof ($add26=line) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
					if ((($bool38=add) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
							false :
							(typeof $bool38=='object'?
								(typeof $bool38['__nonzero__']=='function'?
									$bool38['__nonzero__']() :
									(typeof $bool38['__len__']=='function'?
										($bool38['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['vp']['add']($m['HTML'](txt));
						txt = '';
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['setSlide'] = $method;
			$method = $pyjs__bind_method2('onError', function(text, code) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					code = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '81f2d276afb5112323a3db8b2784db2a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['vp']['clear']();
				self['vp']['add']($m['HTML']($p['sprintf']("TODO: Slide '%s' not loaded", $p['getattr'](self, '$$name'))));
				self['vp']['add']($m['HTML'](text));
				self['vp']['add']($m['HTML'](code));
				return null;
			}
	, 1, [null,null,['self'],['text'],['code']]);
			$cls_definition['onError'] = $method;
			$method = $pyjs__bind_method2('onProgress', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '81f2d276afb5112323a3db8b2784db2a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['vp']['clear']();
				self['vp']['add']($m['HTML']($p['sprintf']('Progress: %s', $p['getattr'](self, '$$name'))));
				self['vp']['add']($m['HTML']($p['sprintf']('%s', $p['str']($p['getattr'](event, 'loaded')))));
				self['vp']['add']($m['HTML']($p['sprintf']('%s', $p['str']($p['getattr'](event, 'total')))));
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onProgress'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Slide', $p['tuple']($bases), $data);
		})();
		$m['init'] = function(name, desc) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			return $m['SinkInfo'](name, desc, $m['Slide']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null,['name'],['desc']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Slide */


/* end module: Slide */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'SlideLoader.SlideLoader', 'SlideLoader', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.Window']
*/
