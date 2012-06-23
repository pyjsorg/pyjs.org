/* start module: Chapter */
$pyjs['loaded_modules']['Chapter'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Chapter']['__was_initialized__']) return $pyjs['loaded_modules']['Chapter'];
	var $m = $pyjs['loaded_modules']['Chapter'];
	$m['__repr__'] = function() { return '<module: Chapter>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Chapter';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_10 = new $p['int'](10);
		$m['Sink'] = $p['___import___']('Sink.Sink', null, null, false);
		$m['SinkInfo'] = $p['___import___']('Sink.SinkInfo', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
		$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
		$m['ChapterLoader'] = $p['___import___']('BookLoader.ChapterLoader', null, null, false);
		$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['escape'] = function(txt, esc) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof esc == 'undefined') esc=arguments['callee']['__args__'][3][1];

			if ($p['bool'](!$p['bool'](esc))) {
				return txt;
			}
			txt = txt['$$replace']('&', '&amp;');
			txt = txt['$$replace']('<', '&lt;');
			txt = txt['$$replace']('>', '&gt;');
			txt = txt['$$replace']('%', '&#37;');
			return txt;
		};
		$m['escape']['__name__'] = 'escape';

		$m['escape']['__bind_type__'] = 0;
		$m['escape']['__args__'] = [null,null,['txt'],['esc', $constant_int_1]];
		$m['sect_markup'] = function(txt, name) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var links,$iter1_iter,url,end,p,il,res,prev_idx,$iter1_array,$sub2,$sub1,$iter1_idx,$iter1_nextval,$add14,$add15,$add16,$add10,$add11,$add12,$add13,$iter1_type,l,idx,i,beg,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,page_url;
			res = '';
			idx = $constant_int_0;
			links = $p['list']([]);
			while ($p['bool']($constant_int_1)) {
				prev_idx = idx;
				idx = txt['find']('L#{', idx);
				if ($p['bool']($p['op_eq'](idx, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))))) {
					res = $p['__op_add']($add1=res,$add2=$p['__getslice'](txt, prev_idx, null));
					break;
				}
				beg = $p['__getslice'](txt, prev_idx, idx);
				idx = $p['__op_add']($add3=idx,$add4=$constant_int_3);
				i = txt['find']('}', idx);
				if ($p['bool']($p['op_eq'](i, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))))) {
					res = $p['__op_add']($add5=res,$add6=$p['__getslice'](txt, prev_idx, null));
					break;
				}
				if ($p['bool']($p['op_eq'](i, $p['__op_sub']($sub1=$p['len'](txt),$sub2=$constant_int_1)))) {
					url = $p['__getslice'](txt, idx, null);
					end = '';
				}
				else {
					url = $p['__getslice'](txt, idx, i);
					end = $p['__getslice'](txt, $p['__op_add']($add7=i,$add8=$constant_int_1), null);
				}
				res = $p['__op_add']($add9=res,$add10=beg);
				idx = $p['__op_add']($add11=i,$add12=$constant_int_1);
				page_url = $p['sprintf']('%s_', name);
				page_url = $p['__op_add']($add13=page_url,$add14=url['lower']());
				i = $m['HTMLPanel']['createUniqueId']();
				res = $p['__op_add']($add15=res,$add16=$p['sprintf']("<span id='%s'></span>", $p['str'](i)));
				links['append']($p['list']([i, $m['Hyperlink'](url, false, page_url)]));
			}
			if ($p['bool'](!$p['bool'](links))) {
				return $m['HTML'](res);
			}
			p = $m['HTMLPanel'](res);
			$iter1_iter = links;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				il = $iter1_nextval['$nextval'];
				i = il['__getitem__']($constant_int_0);
				l = il['__getitem__']($constant_int_1);
				p['add'](l, i);
			}
			return p;
		};
		$m['sect_markup']['__name__'] = 'sect_markup';

		$m['sect_markup']['__bind_type__'] = 0;
		$m['sect_markup']['__args__'] = [null,null,['txt'],['name']];
		$m['urlmap'] = function(txt, esc) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof esc == 'undefined') esc=arguments['callee']['__args__'][3][1];
			var $or1,$add28,end,$iter2_iter,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$sub8,$sub3,$sub7,$sub6,$sub5,$sub4,$or5,$or4,$or7,$or6,$iter2_type,$or3,$or2,$and1,$and2,$or9,$or8,$iter2_idx,$add17,c1,$add18,$add19,c,$iter2_nextval,idx,i,beg,url,$or11,$or10,$or12,$iter2_array;
			idx = txt['find']('http://');
			if ($p['bool']($p['op_eq'](idx, (typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))))) {
				idx = txt['find']('https://');
			}
			if ($p['bool']($p['op_eq'](idx, (typeof ($usub4=$constant_int_1)=='number'?
				-$usub4:
				$p['op_usub']($usub4))))) {
				return $m['escape'](txt, esc);
			}
			$iter2_iter = $p['range']($p['__op_add']($add17=idx,$add18=$constant_int_7), $p['len'](txt));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				c = txt['__getitem__'](i);
				if ($p['bool'](($p['bool']($or1=$p['op_eq'](c, ' '))?$or1:($p['bool']($or2=$p['op_eq'](c, '\n'))?$or2:($p['bool']($or3=$p['op_eq'](c, '\t'))?$or3:($p['bool']($or4=$p['op_eq'](c, ','))?$or4:($p['bool']($or5=$p['op_eq'](c, '<'))?$or5:($p['bool']($or6=$p['op_eq'](c, ')'))?$or6:($p['bool']($or7=$p['op_eq'](c, '('))?$or7:$p['op_eq'](c, '>')))))))))) {
					i = $p['__op_sub']($sub3=i,$sub4=$constant_int_1);
					break;
				}
				if ($p['bool'](!$p['op_eq'](i, $p['__op_sub']($sub5=$p['len'](txt),$sub6=$constant_int_1)))) {
					c1 = txt['__getitem__']($p['__op_add']($add19=i,$add20=$constant_int_1));
					if ($p['bool'](($p['bool']($and1=($p['bool']($or9=$p['op_eq'](c1, ' '))?$or9:$p['op_eq'](c1, '\n')))?($p['bool']($or11=$p['op_eq'](c, '.'))?$or11:$p['op_eq'](c, ':')):$and1))) {
						i = $p['__op_sub']($sub7=i,$sub8=$constant_int_1);
						break;
					}
				}
			}
			i = $p['__op_add']($add21=i,$add22=$constant_int_1);
			beg = $p['__getslice'](txt, 0, idx);
			if ($p['bool']($p['op_eq'](i, $p['len'](txt)))) {
				url = $p['__getslice'](txt, idx, null);
				end = '';
			}
			else {
				url = $p['__getslice'](txt, idx, i);
				end = $p['__getslice'](txt, i, null);
			}
			txt = $p['__op_add']($add23=$m['escape'](beg, esc),$add24=$p['sprintf']("<a href='%s'>", url));
			txt = $p['__op_add']($add27=txt,$add28=$p['__op_add']($add25=$p['sprintf']('%s</a>', $m['escape'](url)),$add26=$m['urlmap'](end, esc)));
			return txt;
		};
		$m['urlmap']['__name__'] = 'urlmap';

		$m['urlmap']['__bind_type__'] = 0;
		$m['urlmap']['__args__'] = [null,null,['txt'],['esc', $constant_int_1]];
		$m['ts'] = function(txt, esc) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof esc == 'undefined') esc=arguments['callee']['__args__'][3][1];
			var $iter3_idx,$iter3_nextval,$iter3_array,l,r,$iter3_iter,$iter3_type,line;
			l = txt['$$split']('\n');
			r = $p['list']([]);
			$iter3_iter = l;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				line = $iter3_nextval['$nextval'];
				line = line['$$replace']('%', '&#37;');
				r['append']($m['urlmap'](line, esc));
			}
			return '<br />'['join'](r);
		};
		$m['ts']['__name__'] = 'ts';

		$m['ts']['__bind_type__'] = 0;
		$m['ts']['__args__'] = [null,null,['txt'],['esc', $constant_int_1]];
		$m['qr'] = function(line) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return line['$$replace']("'", '&#39;');
		};
		$m['qr']['__name__'] = 'qr';

		$m['qr']['__bind_type__'] = 0;
		$m['qr']['__args__'] = [null,null,['line']];
		$m['Chapter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Chapter';
			$cls_definition['__md5__'] = '5c22d5951739d2b0a2327d9a16ef02b3';
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
					if (self.prototype['__md5__'] !== '5c22d5951739d2b0a2327d9a16ef02b3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['Sink']['__init__'](self);
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
					if (self.prototype['__md5__'] !== '5c22d5951739d2b0a2327d9a16ef02b3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['getattr'](self, 'loaded'))) {
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$name', self['$$name']['$$replace'](' ', '_')) : $p['setattr'](self, '$$name', self['$$name']['$$replace'](' ', '_')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$name', self['$$name']['lower']()) : $p['setattr'](self, '$$name', self['$$name']['lower']()); 
				$m['HTTPRequest']()['asyncGet']($p['sprintf']('%s.txt', $p['getattr'](self, '$$name')), $m['ChapterLoader'](self));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			$method = $pyjs__bind_method2('setChapter', function(text) {
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
					if (self.prototype['__md5__'] !== '5c22d5951739d2b0a2327d9a16ef02b3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add29,$add30;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loaded', true) : $p['setattr'](self, 'loaded', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('text', $p['__op_add']($add29=text,$add30='\n')) : $p['setattr'](self, 'text', $p['__op_add']($add29=text,$add30='\n')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ul_stack1', $constant_int_0) : $p['setattr'](self, 'ul_stack1', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ul_stack2', $constant_int_0) : $p['setattr'](self, 'ul_stack2', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('doing_code', $constant_int_0) : $p['setattr'](self, 'doing_code', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('custom_style', false) : $p['setattr'](self, 'custom_style', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', '') : $p['setattr'](self, 'txt', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('para', '') : $p['setattr'](self, 'para', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('up_to', $constant_int_0) : $p['setattr'](self, 'up_to', $constant_int_0); 
				$m['Timer']($constant_int_1, self);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['setChapter'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(timer) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					timer = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c22d5951739d2b0a2327d9a16ef02b3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var count,idx,$add32,$add33,$add31,$add34;
				count = $constant_int_0;
				while ($p['bool'](($p['cmp'](count, $constant_int_10) == -1))) {
					count = $p['__op_add']($add31=count,$add32=$constant_int_1);
					idx = self['text']['find']('\n', $p['getattr'](self, 'up_to'));
					if ($p['bool'](($p['cmp'](idx, $constant_int_0) == -1))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('text', null) : $p['setattr'](self, 'text', null); 
						break;
					}
					self['process_line']($p['__getslice']($p['getattr'](self, 'text'), $p['getattr'](self, 'up_to'), idx));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('up_to', $p['__op_add']($add33=idx,$add34=$constant_int_1)) : $p['setattr'](self, 'up_to', $p['__op_add']($add33=idx,$add34=$constant_int_1)); 
				}
				if ($p['bool']($p['getattr'](self, 'text'))) {
					timer['schedule']($constant_int_1);
				}
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('process_line', function(line) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					line = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5c22d5951739d2b0a2327d9a16ef02b3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var addline,$add53,addpara,ul_line2,$add49,ul_line,$add47,$add46,$add44,$add43,$add42,$add41,$add40,add,$and8,$and9,$and3,$and4,$and5,$and6,$and7,$and12,$and13,$and10,$and11,$and16,$and17,$and14,$and15,panel,$add50,$add51,$add38,$add39,$add54,$add55,$add56,$add57,$add58,$add48,$add36,$add37,$add35,$add52,$add45;
				if ($p['bool']($p['getattr'](self, 'doing_code'))) {
					if ($p['bool']($p['op_eq'](line, '}}'))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('doing_code', $constant_int_0) : $p['setattr'](self, 'doing_code', $constant_int_0); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('custom_style', false) : $p['setattr'](self, 'custom_style', false); 
						line = '</pre>';
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add35=$p['getattr'](self, 'txt'),$add36=line)) : $p['setattr'](self, 'txt', $p['__op_add']($add35=$p['getattr'](self, 'txt'),$add36=line)); 
						panel = $m['sect_markup']($p['getattr'](self, 'txt'), $p['getattr'](self, '$$name'));
						self['vp']['add'](panel);
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', '') : $p['setattr'](self, 'txt', ''); 
						return null;
					}
					if ($p['bool'](line)) {
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'custom_style')))) {
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add37=$p['getattr'](self, 'txt'),$add38=$m['escape'](line))) : $p['setattr'](self, 'txt', $p['__op_add']($add37=$p['getattr'](self, 'txt'),$add38=$m['escape'](line))); 
						}
						else {
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add39=$p['getattr'](self, 'txt'),$add40=line)) : $p['setattr'](self, 'txt', $p['__op_add']($add39=$p['getattr'](self, 'txt'),$add40=line)); 
						}
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add41=$p['getattr'](self, 'txt'),$add42='\n')) : $p['setattr'](self, 'txt', $p['__op_add']($add41=$p['getattr'](self, 'txt'),$add42='\n')); 
					return null;
				}
				line = line['strip']();
				ul_line = false;
				ul_line2 = false;
				addline = '';
				add = false;
				addpara = false;
				if ($p['bool'](!$p['bool'](line))) {
					line = '';
					addpara = true;
				}
				else if ($p['bool']($p['op_eq']($p['__getslice'](line, 0, $constant_int_2), '{{'))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('doing_code', $constant_int_1) : $p['setattr'](self, 'doing_code', $constant_int_1); 
					addpara = true;
					if ($p['bool'](($p['bool']($and3=($p['cmp']($p['len'](line), $constant_int_4) == 1))?$p['op_eq'](line['__getitem__']($constant_int_2), '-'):$and3))) {
						addline = $p['sprintf']("<pre class='chapter_%s'>", $p['__getslice'](line, $constant_int_3, null));
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('custom_style', true) : $p['setattr'](self, 'custom_style', true); 
					}
					else if ($p['bool'](($p['cmp']($p['len'](line), $constant_int_2) == 1))) {
						addline = $p['sprintf']("<pre class='chapter_code'>%s", $p['__getslice'](line, $constant_int_2, null));
					}
					else {
						addline = "<pre class='chapter_code'>";
					}
				}
				else if ($p['bool'](($p['bool']($and5=$p['op_eq']($p['__getslice'](line, 0, $constant_int_2), '= '))?$p['op_eq']($p['__getslice'](line, (typeof ($usub5=$constant_int_2)=='number'?
					-$usub5:
					$p['op_usub']($usub5)), null), ' ='):$and5))) {
					addline = $p['sprintf']("<h1 class='chapter_heading1>%s</h1>", $m['qr']($p['__getslice'](line, $constant_int_2, (typeof ($usub6=$constant_int_2)=='number'?
						-$usub6:
						$p['op_usub']($usub6)))));
					add = true;
					addpara = true;
				}
				else if ($p['bool'](($p['bool']($and7=$p['op_eq']($p['__getslice'](line, 0, $constant_int_3), '== '))?$p['op_eq']($p['__getslice'](line, (typeof ($usub7=$constant_int_3)=='number'?
					-$usub7:
					$p['op_usub']($usub7)), null), ' =='):$and7))) {
					addline = $p['sprintf']("<h2 class='chapter_heading2>%s</h2>", $m['qr']($p['__getslice'](line, $constant_int_3, (typeof ($usub8=$constant_int_3)=='number'?
						-$usub8:
						$p['op_usub']($usub8)))));
					add = true;
					addpara = true;
				}
				else if ($p['bool']($p['op_eq']($p['__getslice'](line, 0, $constant_int_2), '* '))) {
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'ul_stack1')))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add43=$p['getattr'](self, 'txt'),$add44="<ul class='chapter_list1'>\n")) : $p['setattr'](self, 'txt', $p['__op_add']($add43=$p['getattr'](self, 'txt'),$add44="<ul class='chapter_list1'>\n")); 
					}
					addline = $p['sprintf']("<li class='chapter_listitem1'/>%s\n", $m['ts']($p['__getslice'](line, $constant_int_2, null), $constant_int_0));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ul_stack1', true) : $p['setattr'](self, 'ul_stack1', true); 
					ul_line = true;
					addpara = true;
				}
				else if ($p['bool']($p['op_eq']($p['__getslice'](line, 0, $constant_int_3), '** '))) {
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'ul_stack2')))) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add45=$p['getattr'](self, 'txt'),$add46="<ul class='chapter_list2'>\n")) : $p['setattr'](self, 'txt', $p['__op_add']($add45=$p['getattr'](self, 'txt'),$add46="<ul class='chapter_list2'>\n")); 
					}
					addline = $p['sprintf']("<li class='chapter_listitem2'/>%s\n", $m['ts']($p['__getslice'](line, $constant_int_2, null), $constant_int_0));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ul_stack2', true) : $p['setattr'](self, 'ul_stack2', true); 
					ul_line2 = true;
					ul_line = true;
				}
				if ($p['bool'](($p['bool']($and9=$p['getattr'](self, 'ul_stack2'))?!$p['bool'](ul_line2):$and9))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ul_stack2', false) : $p['setattr'](self, 'ul_stack2', false); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add47=$p['getattr'](self, 'txt'),$add48='</ul>\n')) : $p['setattr'](self, 'txt', $p['__op_add']($add47=$p['getattr'](self, 'txt'),$add48='</ul>\n')); 
				}
				if ($p['bool'](($p['bool']($and11=$p['getattr'](self, 'ul_stack1'))?!$p['bool'](ul_line):$and11))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ul_stack1', false) : $p['setattr'](self, 'ul_stack1', false); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add49=$p['getattr'](self, 'txt'),$add50='</ul>\n')) : $p['setattr'](self, 'txt', $p['__op_add']($add49=$p['getattr'](self, 'txt'),$add50='</ul>\n')); 
				}
				if ($p['bool'](addline)) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', $p['__op_add']($add53=$p['getattr'](self, 'txt'),$add54=$p['__op_add']($add51=addline,$add52='\n'))) : $p['setattr'](self, 'txt', $p['__op_add']($add53=$p['getattr'](self, 'txt'),$add54=$p['__op_add']($add51=addline,$add52='\n'))); 
				}
				else if ($p['bool'](line)) {
					line = line['$$replace']('%', '&#37;');
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('para', $p['__op_add']($add57=$p['getattr'](self, 'para'),$add58=$p['__op_add']($add55=line,$add56='\n'))) : $p['setattr'](self, 'para', $p['__op_add']($add57=$p['getattr'](self, 'para'),$add58=$p['__op_add']($add55=line,$add56='\n'))); 
				}
				if ($p['bool'](($p['bool']($and13=!$p['bool']($p['getattr'](self, 'ul_stack2')))?($p['bool']($and14=!$p['bool']($p['getattr'](self, 'ul_stack1')))?!$p['bool']($p['getattr'](self, 'doing_code')):$and14):$and13))) {
					add = true;
				}
				if ($p['bool'](($p['bool']($and16=$p['getattr'](self, 'para'))?addpara:$and16))) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('para', $p['sprintf']("<p class='chapter_para'>%s</p>", $m['urlmap']($p['getattr'](self, 'para'), $constant_int_0))) : $p['setattr'](self, 'para', $p['sprintf']("<p class='chapter_para'>%s</p>", $m['urlmap']($p['getattr'](self, 'para'), $constant_int_0))); 
					panel = $m['sect_markup']($p['getattr'](self, 'para'), $p['getattr'](self, '$$name'));
					self['vp']['add'](panel);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('para', '') : $p['setattr'](self, 'para', ''); 
				}
				if ($p['bool'](add)) {
					panel = $m['sect_markup']($p['getattr'](self, 'txt'), $p['getattr'](self, '$$name'));
					self['vp']['add'](panel);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('txt', '') : $p['setattr'](self, 'txt', ''); 
				}
				return null;
			}
	, 1, [null,null,['self'],['line']]);
			$cls_definition['process_line'] = $method;
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
					if (self.prototype['__md5__'] !== '5c22d5951739d2b0a2327d9a16ef02b3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['vp']['clear']();
				self['vp']['add']($m['HTML']($p['sprintf']("TODO: Chapter '%s' not loaded", $p['getattr'](self, '$$name'))));
				self['vp']['add']($m['HTML'](text));
				self['vp']['add']($m['HTML'](code));
				return null;
			}
	, 1, [null,null,['self'],['text'],['code']]);
			$cls_definition['onError'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Chapter', $p['tuple']($bases), $data);
		})();
		$m['init'] = function(name, desc) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			return $m['SinkInfo'](name, desc, $m['Chapter']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null,['name'],['desc']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Chapter */


/* end module: Chapter */


/*
PYJS_DEPS: ['Sink.Sink', 'Sink', 'Sink.SinkInfo', 'pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'BookLoader.ChapterLoader', 'BookLoader', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.Window', 'pyjamas.Timer.Timer', 'pyjamas.Timer']
*/
