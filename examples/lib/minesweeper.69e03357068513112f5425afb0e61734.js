/* start module: minesweeper */
$pyjs['loaded_modules']['minesweeper'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['minesweeper']['__was_initialized__']) return $pyjs['loaded_modules']['minesweeper'];
	var $m = $pyjs['loaded_modules']['minesweeper'];
	$m['__repr__'] = function() { return '<module: minesweeper>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'minesweeper';
	$m['__name__'] = __mod_name__;
	try {
		var $bool80;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_294 = new $p['int'](294);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_201 = new $p['int'](201);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_999 = new $p['int'](999);
		var $constant_int_112 = new $p['int'](112);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_5000 = new $p['int'](5000);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_190 = new $p['int'](190);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
		$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', null, null, false);
		$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', null, null, false);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
		$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
		$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', null, null, false);
		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
		$m['random'] = $p['___import___']('random', null);
		$m['DataService'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = 'fd64aebf62f95e857136446093601996';
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
					if (self.prototype['__md5__'] !== 'fd64aebf62f95e857136446093601996') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['DataService'], self)['__init__']('/minesweeper/default/call/jsonrpc', $p['list'](['add_score', 'get_scores']));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['JSONProxy']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DataService', $p['tuple']($bases), $data);
		})();
		$m['setColorfulHTML'] = function(element, count) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var colors,html,$sub2,$sub1,$2,$1;
			colors = $p['list'](['#0000fe', '#007a00', '#fe0000', '#00007a', '#7a0000', '#007a7a', '#000000', '#7a7a7a']);
			html = $p['sprintf']('<span class="number" style="color:%s;">%d</span>', $p['tuple']([(typeof ($1=colors)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=(typeof ($sub1=count)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2))]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__']((typeof ($sub1=count)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)))), count]));
			$m['DOM']['setInnerHTML'](element, html);
			return null;
		};
		$m['setColorfulHTML']['__name__'] = 'setColorfulHTML';

		$m['setColorfulHTML']['__bind_type__'] = 0;
		$m['setColorfulHTML']['__args__'] = [null,null,['element'],['count']];
		$m['MineMenuBar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = '4a2ca449c2d7f798a94392f5d9455926';
			$method = $pyjs__bind_method2('__init__', function(game) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					game = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4a2ca449c2d7f798a94392f5d9455926') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var body,menu_help,menu_game;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('game', game) : $p['setattr'](self, 'game', game); 
				$p['$$super']($m['MineMenuBar'], self)['__init__']();
				body = $doc['getElementsByTagName']('body')['item']($constant_int_0);
				body['setAttribute']('id', 'Beginner');
				menu_game = $m['MenuBar'](true);
				menu_game['addItem']('New', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'New'));
				menu_game['addItem'](self['span_text']('Beginner'), true, (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'Beginner'));
				menu_game['addItem'](self['span_text']('Intermediate'), true, (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'Intermediate'));
				menu_game['addItem'](self['span_text']('Expert'), true, (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'Expert'));
				menu_game['addItem'](self['span_text']('Custom'), true, (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'Custom'));
				menu_help = $m['MenuBar'](true);
				menu_help['addItem']('About', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'About'));
				self['addItem']($m['MenuItem']('Game', menu_game));
				self['addItem']($m['MenuItem']('Help', menu_help));
				return null;
			}
	, 1, [null,null,['self'],['game']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('span_text', function(text) {
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
					if (self.prototype['__md5__'] !== '4a2ca449c2d7f798a94392f5d9455926') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['sprintf']('<span class="%s"></span>%s', $p['tuple']([text, text]));
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['span_text'] = $method;
			var $bases = new Array($m['MenuBar']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MineMenuBar', $p['tuple']($bases), $data);
		})();
		$m['MenuCmd'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = 'e5127f2fa6af3ed56a8db8ca8fa0f421';
			$method = $pyjs__bind_method2('__init__', function(menu, command) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					menu = arguments[1];
					command = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5127f2fa6af3ed56a8db8ca8fa0f421') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('menu', menu) : $p['setattr'](self, 'menu', menu); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('command', command) : $p['setattr'](self, 'command', command); 
				return null;
			}
	, 1, [null,null,['self'],['menu'],['command']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('execute', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5127f2fa6af3ed56a8db8ca8fa0f421') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var body,modes,level,$bool2,$bool3,$bool1,$bool6,$8,$bool5,$6,$7,$4,$5,$bool4,$3;
				if ((($bool1=$p['tuple'](['Beginner', 'Intermediate', 'Expert', 'Custom'])['__contains__']($p['getattr'](self, 'command'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					body = $doc['getElementsByTagName']('body')['item']($constant_int_0);
					body['setAttribute']('id', $p['getattr'](self, 'command'));
				}
				modes = $p['dict']([['New', $p['list']([$p['tuple']([$constant_int_0, $constant_int_0]), $constant_int_0])], ['Beginner', $p['list']([$p['tuple']([$constant_int_8, $constant_int_8]), $constant_int_1])], ['Intermediate', $p['list']([$p['tuple']([$constant_int_16, $constant_int_16]), $constant_int_2])], ['Expert', $p['list']([$p['tuple']([$constant_int_16, $constant_int_32]), $constant_int_3])]]);
				level = modes['get']($p['getattr'](self, 'command'));
				if ((($bool2=level) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					if ((($bool3=(typeof ($3=level)['__array'] != 'undefined'?
						((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']($constant_int_1))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						$p['getattr']($p['getattr'](self, 'menu'), 'game')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'menu'), 'game')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'menu'), 'game')['__setattr__']('level', (typeof ($5=level)['__array'] != 'undefined'?
							((typeof $5['__array'][$6=$constant_int_1]) != 'undefined'?$5['__array'][$6]:
								$5['__getitem__']($6)):
								$5['__getitem__']($constant_int_1))) : $p['setattr']($p['getattr']($p['getattr'](self, 'menu'), 'game'), 'level', (typeof ($5=level)['__array'] != 'undefined'?
							((typeof $5['__array'][$6=$constant_int_1]) != 'undefined'?$5['__array'][$6]:
								$5['__getitem__']($6)):
								$5['__getitem__']($constant_int_1))); 
					}
					self['menu']['game']['next_game']((typeof ($7=level)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=$constant_int_0]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__']($constant_int_0)));
				}
				else if ((($bool4=$p['op_eq']($p['getattr'](self, 'command'), 'Custom')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$p['getattr']($p['getattr'](self, 'menu'), 'game')['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'menu'), 'game')['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'menu'), 'game')['__setattr__']('level', $constant_int_4) : $p['setattr']($p['getattr']($p['getattr'](self, 'menu'), 'game'), 'level', $constant_int_4); 
					self['show_custom']();
				}
				else if ((($bool5=$p['op_eq']($p['getattr'](self, 'command'), 'Instructions')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				}
				else if ((($bool6=$p['op_eq']($p['getattr'](self, 'command'), 'About')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['show_about']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['execute'] = $method;
			$method = $pyjs__bind_method2('show_custom', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5127f2fa6af3ed56a8db8ca8fa0f421') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_iter,contents,rows,buttons,$iter1_array,$sub3,$sub6,$sub5,$sub4,$iter1_nextval,$div2,$div3,$div1,$div4,$iter1_type,columns,$iter1_idx,bombs,each,top,left;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dialog', $pyjs_kwargs_call(null, $m['DialogBox'], null, null, [{'StyleName':'custom-dialog'}])) : $p['setattr'](self, 'dialog', $pyjs_kwargs_call(null, $m['DialogBox'], null, null, [{'StyleName':'custom-dialog'}])); 
				self['dialog']['setHTML']('Custom Settings');
				contents = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'StyleName':'contents'}]);
				self['dialog']['setWidget'](contents);
				rows = $m['HorizontalPanel']();
				columns = $m['HorizontalPanel']();
				bombs = $m['HorizontalPanel']();
				buttons = $m['HorizontalPanel']();
				$iter1_iter = $p['tuple']([rows, columns, bombs, buttons]);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					each = $iter1_nextval;
					contents['add'](each);
				}
				rows['add']($m['Label']('Rows:'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('row', $m['TextBox']()) : $p['setattr'](self, 'row', $m['TextBox']()); 
				rows['add']($p['getattr'](self, 'row'));
				columns['add']($m['Label']('Columns:'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('column', $m['TextBox']()) : $p['setattr'](self, 'column', $m['TextBox']()); 
				columns['add']($p['getattr'](self, 'column'));
				bombs['add']($m['Label']('Bombs:'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bomb', $m['TextBox']()) : $p['setattr'](self, 'bomb', $m['TextBox']()); 
				bombs['add']($p['getattr'](self, 'bomb'));
				buttons['add']($m['Button']('OK', $p['getattr'](self, 'new_game')));
				buttons['add']($m['Button']('Cancel', $p['getattr'](self, 'close_dialog')));
				left = (typeof ($div1=(typeof ($sub3=$m['Window']['getClientWidth']())==typeof ($sub4=$constant_int_201) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)))==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				top = (typeof ($div3=(typeof ($sub5=$m['Window']['getClientHeight']())==typeof ($sub6=$constant_int_190) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4));
				self['dialog']['setPopupPosition'](left, top);
				self['dialog']['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['show_custom'] = $method;
			$method = $pyjs__bind_method2('new_game', function(event) {
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
					if (self.prototype['__md5__'] !== 'e5127f2fa6af3ed56a8db8ca8fa0f421') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bomb,$cmp2,column,$mul2,$pyjs_try_err,$bool7,$cmp1,$mul1,row;
				try {
					row = $p['int'](self['row']['getText']());
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						$m['Window']['alert']('Invalid number in rows');
						return null;
					}
				}
				try {
					column = $p['int'](self['column']['getText']());
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						$m['Window']['alert']('Invalid number in columns');
						return null;
					}
				}
				try {
					bomb = $p['int'](self['bomb']['getText']());
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						bomb = $constant_int_0;
					}
				}
				if ((($bool7=((((($cmp1=bomb)===($cmp2=(typeof ($mul1=row)==typeof ($mul2=column) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$m['Window']['alert']('Number of bombs should not be greater than rows x columns.');
				}
				else {
					self['menu']['game']['next_game']($p['tuple']([row, column]), bomb);
					self['close_dialog']();
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['new_game'] = $method;
			$method = $pyjs__bind_method2('close_dialog', function(event) {
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
					if (self.prototype['__md5__'] !== 'e5127f2fa6af3ed56a8db8ca8fa0f421') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['dialog']['hide']();
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['close_dialog'] = $method;
			$method = $pyjs__bind_method2('show_about', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e5127f2fa6af3ed56a8db8ca8fa0f421') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div6,$sub10,$div8,$div7,top,$sub9,html,left,$sub7,$sub8,contents,$div5;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dialog', $pyjs_kwargs_call(null, $m['PopupPanel'], null, null, [{'StyleName':'about', 'autoHide':true}])) : $p['setattr'](self, 'dialog', $pyjs_kwargs_call(null, $m['PopupPanel'], null, null, [{'StyleName':'about', 'autoHide':true}])); 
				contents = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{'StyleName':'contents'}, '']);
				self['dialog']['setWidget'](contents);
				html = '<p class="pyjamas">MineSweeper written in Python with <a href="http://pyjs.org" target="_blank">Pyjamas</a><p><p class="comments">Send comments to <a href="mailto:suzan.shakya@gmail.com">suzan.shakya@gmail.com</a>.<p>';
				contents['setHTML'](html);
				left = (typeof ($div5=(typeof ($sub7=$m['Window']['getClientWidth']())==typeof ($sub8=$constant_int_294) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6));
				top = (typeof ($div7=(typeof ($sub9=$m['Window']['getClientHeight']())==typeof ($sub10=$constant_int_112) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8));
				self['dialog']['setPopupPosition'](left, top);
				self['dialog']['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['show_about'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MenuCmd', $p['tuple']($bases), $data);
		})();
		$m['Smiley'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = 'f6e8e8a93f467ef9a50907133c9074a4';
			$method = $pyjs__bind_method2('__init__', function(game) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					game = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f6e8e8a93f467ef9a50907133c9074a4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('game', game) : $p['setattr'](self, 'game', game); 
				$pyjs_kwargs_call($p['$$super']($m['Smiley'], self), '__init__', null, null, [{'StyleName':'facesmile'}]);
				self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
				self['addClickListener'](self);
				self['addMouseListener'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pressed', false) : $p['setattr'](self, 'pressed', false); 
				return null;
			}
	, 1, [null,null,['self'],['game']]);
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
					if (self.prototype['__md5__'] !== 'f6e8e8a93f467ef9a50907133c9074a4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['game']['restart']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f6e8e8a93f467ef9a50907133c9074a4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pressed', true) : $p['setattr'](self, 'pressed', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('previousStyleName', self['getStyleName']()) : $p['setattr'](self, 'previousStyleName', self['getStyleName']()); 
				self['setStyleName']('faceooh');
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f6e8e8a93f467ef9a50907133c9074a4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool8;
				if ((($bool8=$p['getattr'](self, 'pressed')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pressed', false) : $p['setattr'](self, 'pressed', false); 
					self['setStyleName']($p['getattr'](self, 'previousStyleName'));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
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
					if (self.prototype['__md5__'] !== 'f6e8e8a93f467ef9a50907133c9074a4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onMouseUp'](sender, $constant_int_0, $constant_int_0);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			var $bases = new Array($m['FocusPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Smiley', $p['tuple']($bases), $data);
		})();
		$m['RemoteHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = 'f3bba4f2dbb79f9753474fb72d8e489e';
			$method = $pyjs__bind_method2('__init__', function(game) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					game = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f3bba4f2dbb79f9753474fb72d8e489e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('game', game) : $p['setattr'](self, 'game', game); 
				return null;
			}
	, 1, [null,null,['self'],['game']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					response = arguments[1];
					request_info = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f3bba4f2dbb79f9753474fb72d8e489e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool9;
				if ((($bool9=$p['op_eq']($p['getattr'](request_info, 'method'), 'get_scores')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('toppers', response) : $p['setattr']($p['getattr'](self, 'game'), 'toppers', response); 
					self['load_top_scores']();
				}
				return null;
			}
	, 1, [null,null,['self'],['response'],['request_info']]);
			$cls_definition['onRemoteResponse'] = $method;
			$method = $pyjs__bind_method2('load_top_scores', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f3bba4f2dbb79f9753474fb72d8e489e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_type,player,$iter3_idx,$iter2_iter,score,$iter3_iter,$iter2_type,time,$add13,$add15,$iter2_idx,$add10,$add11,$add12,$iter3_array,$add16,$add14,$iter2_nextval,html,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$iter3_nextval,$iter2_array;
				html = '<p>These are the top MineSweepers.<p>';
				html = (typeof ($add1=html)==typeof ($add2="<table class='scores_table'>") && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				html = (typeof ($add3=html)==typeof ($add4=$p['sprintf']('<tr><th> %s </th><th> %s </th><th> %s </th></tr>', $p['tuple'](['Beginner', 'Intermediate', 'Expert']))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				html = (typeof ($add5=html)==typeof ($add6='<tr>') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				$iter2_iter = $p['getattr']($p['getattr'](self, 'game'), 'toppers');
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					score = $iter2_nextval;
					html = (typeof ($add7=html)==typeof ($add8="<td><table class='individual_table'>") && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
					html = (typeof ($add9=html)==typeof ($add10="<tr><th class='name'> MineSweepers </th><th class='time'> Time </th></tr>") && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
					$iter3_iter = score;
					if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter['__iter__']();
						$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter3_nextval, 2, null);
						player = $tupleassign1[0];
						time = $tupleassign1[1];
						html = (typeof ($add11=html)==typeof ($add12=$p['sprintf']("<tr><td class='name'> %s </td><td class='time'> %s </td></tr>", $p['tuple']([player, time]))) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12));
					}
					html = (typeof ($add13=html)==typeof ($add14='</table></td>') && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
				}
				html = (typeof ($add15=html)==typeof ($add16='</tr></table>') && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
				$m['SCORES']['setHTML'](html);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['load_top_scores'] = $method;
			$method = $pyjs__bind_method2('onRemoteError', function(code, message, request_info) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					code = arguments[1];
					message = arguments[2];
					request_info = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f3bba4f2dbb79f9753474fb72d8e489e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				$m['LOG']['setHTML']($p['str'](message));
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return $m['LOG']['setHTML']('');
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null];
				$m['Timer']($constant_int_5000, $lambda1);
				return null;
			}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
			$cls_definition['onRemoteError'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RemoteHandler', $p['tuple']($bases), $data);
		})();
		$m['RemainingMineHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = '6993fa7edd8c45fb66f2354cc8c8960d';
			$method = $pyjs__bind_method2('__init__', function(game) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					game = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6993fa7edd8c45fb66f2354cc8c8960d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('game', game) : $p['setattr'](self, 'game', game); 
				return null;
			}
	, 1, [null,null,['self'],['game']]);
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
					if (self.prototype['__md5__'] !== '6993fa7edd8c45fb66f2354cc8c8960d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$bool13,$iter5_idx,$bool11,bomb_explodes_on,$bool14,$bool15,$bool16,one,$iter5_iter,$and2,$and1,$iter5_array,$iter5_type,$bool12;
				self['game']['counter']['setStyleName']('digit counter');
				bomb_explodes_on = function(){
					var $bool10,$iter4_nextval,$collcomp1,one,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp1 = $p['list']();
				$iter4_iter = $p['getattr']($p['getattr'](self, 'game'), 'bombed_cells');
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					one = $iter4_nextval;
					if ((($bool10=!$p['op_eq']($p['getattr'](one, 'state'), $constant_int_1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						$collcomp1['append'](one);
					}
				}

	return $collcomp1;}();
				if ((($bool11=bomb_explodes_on) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					self['game']['show_all_bombs'](bomb_explodes_on);
					$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('started', true) : $p['setattr']($p['getattr'](self, 'game'), 'started', true); 
				}
				$iter5_iter = self['game']['get_all_cells']();
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					one = $iter5_nextval;
					if ((($bool13=!(($bool12=$p['getattr']($p['getattr'](self, 'game'), 'started')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12['__nonzero__']=='function'?
								$bool12['__nonzero__']() :
								(typeof $bool12['__len__']=='function'?
									($bool12['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						break;
					}
					else if ((($bool15=((($bool14=$and1=$p['tuple']([$constant_int_0, $constant_int_2])['__contains__']($p['getattr'](one, 'state'))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14['__nonzero__']=='function'?
								$bool14['__nonzero__']() :
								(typeof $bool14['__len__']=='function'?
									($bool14['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))):$and1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
						self['game']['grid']['onClick'](one);
					}
				}
				$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('started', false) : $p['setattr']($p['getattr'](self, 'game'), 'started', false); 
				if ((($bool16=bomb_explodes_on) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['game']['face']['setStyleName']('facedead');
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RemainingMineHandler', $p['tuple']($bases), $data);
		})();
		$m['Cell'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = 'e1a0e23474ab080bf76cadfc7c2765e4';
			$method = $pyjs__bind_method2('__init__', function(x, y, grid) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					grid = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e1a0e23474ab080bf76cadfc7c2765e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['$$super']($m['Cell'], self)['__init__']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', y) : $p['setattr'](self, 'y', y); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('grid', grid) : $p['setattr'](self, 'grid', grid); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('count', $constant_int_0) : $p['setattr'](self, 'count', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('state', $constant_int_0) : $p['setattr'](self, 'state', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('element', grid['cellFormatter']['getElement'](x, y)) : $p['setattr'](self, 'element', grid['cellFormatter']['getElement'](x, y)); 
				self['setStyleName']('blank');
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['grid']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Cell', $p['tuple']($bases), $data);
		})();
		$m['CustomGrid'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = '084d7d0970b510dfd937981dcb78372c';
			$method = $pyjs__bind_method2('__init__', function(game, row, column) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					game = arguments[1];
					row = arguments[2];
					column = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '084d7d0970b510dfd937981dcb78372c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter7_type,$10,i,$iter6_idx,$iter7_iter,$iter7_array,$iter6_array,j,$iter6_type,$9,$iter7_idx,$iter6_iter,$iter7_nextval,$iter6_nextval;
				$pyjs_kwargs_call($p['$$super']($m['CustomGrid'], self), '__init__', null, null, [{'StyleName':'grid'}, row, column]);
				self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
				self['sinkEvents']($p['op_bitor']([$p['getattr']($m['Event'], 'ONMOUSEDOWN'), $p['getattr']($m['Event'], 'ONMOUSEUP'), $p['getattr']($m['Event'], 'ONMOUSEOUT')]));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('game', game) : $p['setattr'](self, 'game', game); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cells', $p['list']([])) : $p['setattr'](self, 'cells', $p['list']([])); 
				$iter6_iter = $p['xrange'](row);
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					self['cells']['append']($p['list']([]));
					$iter7_iter = $p['xrange'](column);
					if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter['__iter__']();
						$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						j = $iter7_nextval;
						(typeof ($9=$p['getattr'](self, 'cells'))['__array'] != 'undefined'?
							((typeof $9['__array'][$10=(typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__']((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))))['append']($m['Cell'](i, j, self));
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['game'],['row'],['column']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getCell', function(row, column) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '084d7d0970b510dfd937981dcb78372c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$11,$12,$13;
				return (typeof ($13=(typeof ($11=$p['getattr'](self, 'cells'))['__array'] != 'undefined'?
					((typeof $11['__array'][$12=row]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](row)))['__array'] != 'undefined'?
					((typeof $13['__array'][$14=column]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](column));
			}
	, 1, [null,null,['self'],['row'],['column']]);
			$cls_definition['getCell'] = $method;
			$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
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
					if (self.prototype['__md5__'] !== '084d7d0970b510dfd937981dcb78372c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,column,event_mapper,tr,$bool17,$bool21,$bool20,event_handler,table,td,target_cell,type,row;
				$m['DOM']['eventPreventDefault'](event);
				if ((($bool18=!(($bool17=$p['getattr']($p['getattr'](self, 'game'), 'started')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17['__nonzero__']=='function'?
							$bool17['__nonzero__']() :
							(typeof $bool17['__len__']=='function'?
								($bool17['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					return null;
				}
				td = self['getEventTargetCell'](event);
				if ((($bool20=!(($bool19=td) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					return null;
				}
				tr = $m['DOM']['getParent'](td);
				table = $m['DOM']['getParent'](tr);
				row = $m['DOM']['getChildIndex'](table, tr);
				column = $m['DOM']['getChildIndex'](tr, td);
				target_cell = self['getCell'](row, column);
				type = $m['DOM']['eventGetType'](event);
				event_mapper = $p['dict']([['click', 'onClick'], ['contextmenu', 'onRightClick'], ['mousedown', 'onMouseDown'], ['mouseup', 'onMouseUp'], ['mouseout', 'onMouseLeave']]);
				event_handler = event_mapper['get'](type);
				if ((($bool21=event_handler) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					$p['getattr'](self, event_handler)(target_cell);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$method = $pyjs__bind_method2('onClick', function(target) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '084d7d0970b510dfd937981dcb78372c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and3,$and4,$bool25,$bool24,$bool27,$add17,$bool26,$bool23,$bool22,$add18,$bool28;
				if ((($bool22=$p['op_eq']($p['getattr'](target, 'state'), $constant_int_1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
						false :
						(typeof $bool22=='object'?
							(typeof $bool22['__nonzero__']=='function'?
								$bool22['__nonzero__']() :
								(typeof $bool22['__len__']=='function'?
									($bool22['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool24=((($bool23=$and3=$p['op_eq']($p['getattr'](target, 'state'), $constant_int_3)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23['__nonzero__']=='function'?
							$bool23['__nonzero__']() :
							(typeof $bool23['__len__']=='function'?
								($bool23['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](target, 'count'):$and3)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24['__nonzero__']=='function'?
								$bool24['__nonzero__']() :
								(typeof $bool24['__len__']=='function'?
									($bool24['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['game']['open_if_satisfies'](target);
					return null;
				}
				target['setStyleName']('opened');
				target['__is_instance__'] && typeof target['__setattr__'] == 'function' ? target['__setattr__']('state', $constant_int_3) : $p['setattr'](target, 'state', $constant_int_3); 
				$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('count_opened_cells', (typeof ($add17=$p['getattr']($p['getattr'](self, 'game'), 'count_opened_cells'))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18))) : $p['setattr']($p['getattr'](self, 'game'), 'count_opened_cells', (typeof ($add17=$p['getattr']($p['getattr'](self, 'game'), 'count_opened_cells'))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18))); 
				if ((($bool25=$p['getattr']($p['getattr'](self, 'game'), 'first_click')) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('first_click', false) : $p['setattr']($p['getattr'](self, 'game'), 'first_click', false); 
					self['game']['onTimer'](target);
					if ((($bool26=$p['op_eq']($p['getattr'](target, 'count'), (typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3)))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
							false :
							(typeof $bool26=='object'?
								(typeof $bool26['__nonzero__']=='function'?
									$bool26['__nonzero__']() :
									(typeof $bool26['__len__']=='function'?
										($bool26['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['game']['move_to_extra_mine'](target);
					}
				}
				if ((($bool27=$p['op_eq']($p['getattr'](target, 'count'), (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['game']['show_all_bombs']($p['list']([target]));
					return null;
				}
				else if ((($bool28=$p['op_eq']($p['getattr'](target, 'count'), $constant_int_0)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					self['game']['open_neighboring_cells'](target);
				}
				else {
					$m['setColorfulHTML'](target['getElement'](), $p['getattr'](target, 'count'));
				}
				self['game']['check_win']();
				return null;
			}
	, 1, [null,null,['self'],['target']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onRightClick', function(target) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '084d7d0970b510dfd937981dcb78372c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool32,$bool33,$bool30,$bool31,$bool29;
				if ((($bool29=$p['op_eq']($p['getattr'](target, 'state'), $constant_int_3)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
						false :
						(typeof $bool29=='object'?
							(typeof $bool29['__nonzero__']=='function'?
								$bool29['__nonzero__']() :
								(typeof $bool29['__len__']=='function'?
									($bool29['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool30=$p['getattr']($p['getattr'](self, 'game'), 'first_click')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('first_click', false) : $p['setattr']($p['getattr'](self, 'game'), 'first_click', false); 
					self['game']['onTimer'](target);
				}
				if ((($bool31=$p['op_eq']($p['getattr'](target, 'state'), $constant_int_0)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					target['setStyleName']('bombflagged');
					target['__is_instance__'] && typeof target['__setattr__'] == 'function' ? target['__setattr__']('state', $constant_int_1) : $p['setattr'](target, 'state', $constant_int_1); 
					self['game']['flagged_cells']['append'](target);
				}
				else if ((($bool32=$p['op_eq']($p['getattr'](target, 'state'), $constant_int_1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					target['setStyleName']('bombquestion');
					target['__is_instance__'] && typeof target['__setattr__'] == 'function' ? target['__setattr__']('state', $constant_int_2) : $p['setattr'](target, 'state', $constant_int_2); 
					self['game']['flagged_cells']['remove'](target);
				}
				else if ((($bool33=$p['op_eq']($p['getattr'](target, 'state'), $constant_int_2)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					target['setStyleName']('blank');
					target['__is_instance__'] && typeof target['__setattr__'] == 'function' ? target['__setattr__']('state', $constant_int_0) : $p['setattr'](target, 'state', $constant_int_0); 
				}
				self['game']['set_counter']();
				self['game']['check_win']();
				return null;
			}
	, 1, [null,null,['self'],['target']]);
			$cls_definition['onRightClick'] = $method;
			$method = $pyjs__bind_method2('onMouseDown', function(target) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '084d7d0970b510dfd937981dcb78372c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add20,$and5,$and6,$bool36,$bool34,$bool35,$add19;
				if ((($bool34=$p['op_eq']($p['getattr'](target, 'state'), $constant_int_0)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					target['addStyleName']('pressed');
					$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('to_be_released', $p['list']([target])) : $p['setattr']($p['getattr'](self, 'game'), 'to_be_released', $p['list']([target])); 
				}
				if ((($bool36=((($bool35=$and5=$p['op_eq']($p['getattr'](target, 'state'), $constant_int_3)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35['__nonzero__']=='function'?
							$bool35['__nonzero__']() :
							(typeof $bool35['__len__']=='function'?
								($bool35['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](target, 'count'):$and5)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36['__nonzero__']=='function'?
								$bool36['__nonzero__']() :
								(typeof $bool36['__len__']=='function'?
									($bool36['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['game']['press_neighbor_cells'](target);
				}
				self['game']['face']['setStyleName']('faceooh');
				$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('no_of_click', (typeof ($add19=$p['getattr']($p['getattr'](self, 'game'), 'no_of_click'))==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20))) : $p['setattr']($p['getattr'](self, 'game'), 'no_of_click', (typeof ($add19=$p['getattr']($p['getattr'](self, 'game'), 'no_of_click'))==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20))); 
				return null;
			}
	, 1, [null,null,['self'],['target']]);
			$cls_definition['onMouseDown'] = $method;
			$method = $pyjs__bind_method2('onMouseUp', function(target) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '084d7d0970b510dfd937981dcb78372c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,$iter8_array,one,$iter8_iter,$iter8_nextval,$iter8_type;
				$iter8_iter = $p['getattr']($p['getattr'](self, 'game'), 'to_be_released');
				if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter['__iter__']();
					$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					one = $iter8_nextval;
					one['removeStyleName']('pressed');
				}
				$p['getattr'](self, 'game')['__is_instance__'] && typeof $p['getattr'](self, 'game')['__setattr__'] == 'function' ? $p['getattr'](self, 'game')['__setattr__']('to_be_released', $p['list']([])) : $p['setattr']($p['getattr'](self, 'game'), 'to_be_released', $p['list']([])); 
				self['game']['face']['setStyleName']('facesmile');
				return null;
			}
	, 1, [null,null,['self'],['target']]);
			$cls_definition['onMouseUp'] = $method;
			$method = $pyjs__bind_method2('onMouseLeave', function(target) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '084d7d0970b510dfd937981dcb78372c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['onMouseUp'](target);
				return null;
			}
	, 1, [null,null,['self'],['target']]);
			$cls_definition['onMouseLeave'] = $method;
			var $bases = new Array($m['Grid']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CustomGrid', $p['tuple']($bases), $data);
		})();
		$m['Game'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'minesweeper';
			$cls_definition['__md5__'] = '0980750835969cd4a89fa4228276b1a1';
			$method = $pyjs__bind_method2('__init__', function(row, column) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row = arguments[1];
					column = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof column == 'undefined') column=arguments['callee']['__args__'][4][1];
				var one,$or1,$or2,$iter9_nextval,$iter9_iter,score_board,$iter9_idx,$iter9_array,$bool37,menubar,$iter9_type;
				$pyjs_kwargs_call($p['$$super']($m['Game'], self), '__init__', null, null, [{'StyleName':'game'}]);
				self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('row', row) : $p['setattr'](self, 'row', row); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('column', ((($bool37=$or1=column) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37['__nonzero__']=='function'?
							$bool37['__nonzero__']() :
							(typeof $bool37['__len__']=='function'?
								($bool37['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:row)) : $p['setattr'](self, 'column', ((($bool37=$or1=column) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37['__nonzero__']=='function'?
							$bool37['__nonzero__']() :
							(typeof $bool37['__len__']=='function'?
								($bool37['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:row)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('level', $constant_int_1) : $p['setattr'](self, 'level', $constant_int_1); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('toppers', $p['list']([$p['list']([]), $p['list']([]), $p['list']([])])) : $p['setattr'](self, 'toppers', $p['list']([$p['list']([]), $p['list']([]), $p['list']([])])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('remote', $m['DataService']()) : $p['setattr'](self, 'remote', $m['DataService']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('remote_handler', $m['RemoteHandler'](self)) : $p['setattr'](self, 'remote_handler', $m['RemoteHandler'](self)); 
				self['remote']['get_scores']($p['getattr'](self, 'remote_handler'));
				menubar = $m['MineMenuBar'](self);
				score_board = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'StyleName':'score-board'}]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('grid_panel', $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{'StyleName':'grid-panel'}])) : $p['setattr'](self, 'grid_panel', $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{'StyleName':'grid-panel'}])); 
				self['add'](menubar);
				self['add'](score_board);
				self['add']($p['getattr'](self, 'grid_panel'));
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('counter', $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'digit counter'}, '000'])) : $p['setattr'](self, 'counter', $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'digit counter'}, '000'])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('face', $m['Smiley'](self)) : $p['setattr'](self, 'face', $m['Smiley'](self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timer', $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'digit timer'}, '000'])) : $p['setattr'](self, 'timer', $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'digit timer'}, '000'])); 
				$iter9_iter = $p['tuple']([$p['getattr'](self, 'counter'), $p['getattr'](self, 'face'), $p['getattr'](self, 'timer')]);
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					one = $iter9_nextval;
					score_board['add'](one);
				}
				score_board['setCellWidth']($p['getattr'](self, 'face'), '100%');
				self['create_grid']();
				self['start']();
				return null;
			}
	, 1, [null,null,['self'],['row'],['column', $constant_int_0]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
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
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['eventPreventDefault'](event);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$method = $pyjs__bind_method2('create_grid', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('grid', $m['CustomGrid'](self, $p['getattr'](self, 'row'), $p['getattr'](self, 'column'))) : $p['setattr'](self, 'grid', $m['CustomGrid'](self, $p['getattr'](self, 'row'), $p['getattr'](self, 'column'))); 
				self['grid_panel']['add']($p['getattr'](self, 'grid'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['create_grid'] = $method;
			$method = $pyjs__bind_method2('start', function(no_of_bomb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					no_of_bomb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof no_of_bomb == 'undefined') no_of_bomb=arguments['callee']['__args__'][3][1];
				var $or4,$or3,$sub12,$div10,$div9,$sub11,$mul6,$bool38,$mul4,$mul3,$mul5;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time', (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5))) : $p['setattr'](self, 'time', (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('started', true) : $p['setattr'](self, 'started', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('first_click', true) : $p['setattr'](self, 'first_click', true); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bombed_cells', $p['list']([])) : $p['setattr'](self, 'bombed_cells', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flagged_cells', $p['list']([])) : $p['setattr'](self, 'flagged_cells', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('to_be_released', $p['list']([])) : $p['setattr'](self, 'to_be_released', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('count_opened_cells', $constant_int_0) : $p['setattr'](self, 'count_opened_cells', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('no_of_click', $constant_int_0) : $p['setattr'](self, 'no_of_click', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('squares', (typeof ($mul3=$p['getattr'](self, 'row'))==typeof ($mul4=$p['getattr'](self, 'column')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'squares', (typeof ($mul3=$p['getattr'](self, 'row'))==typeof ($mul4=$p['getattr'](self, 'column')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('no_of_bomb', ((($bool38=$or3=no_of_bomb) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38['__nonzero__']=='function'?
							$bool38['__nonzero__']() :
							(typeof $bool38['__len__']=='function'?
								($bool38['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:$p['int']((typeof ($div9=(typeof ($mul5=$p['getattr'](self, 'squares'))==typeof ($mul6=$constant_int_10) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($div10=$constant_int_64) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))))) : $p['setattr'](self, 'no_of_bomb', ((($bool38=$or3=no_of_bomb) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38['__nonzero__']=='function'?
							$bool38['__nonzero__']() :
							(typeof $bool38['__len__']=='function'?
								($bool38['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:$p['int']((typeof ($div9=(typeof ($mul5=$p['getattr'](self, 'squares'))==typeof ($mul6=$constant_int_10) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($div10=$constant_int_64) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('no_of_safe_zones', (typeof ($sub11=$p['getattr'](self, 'squares'))==typeof ($sub12=$p['getattr'](self, 'no_of_bomb')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))) : $p['setattr'](self, 'no_of_safe_zones', (typeof ($sub11=$p['getattr'](self, 'squares'))==typeof ($sub12=$p['getattr'](self, 'no_of_bomb')) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12))); 
				self['set_counter']();
				self['timer']['setText']('000');
				self['generate_bombs']();
				self['face']['setStyleName']('facesmile');
				return null;
			}
	, 1, [null,null,['self'],['no_of_bomb', $constant_int_0]]);
			$cls_definition['start'] = $method;
			$method = $pyjs__bind_method2('get_all_cells', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,j,one,$iter13_idx,$iter10_iter,$iter11_idx,$iter13_type,$iter11_iter,$iter10_idx,$iter12_array,$iter11_array,$iter11_nextval,$iter13_nextval,$iter13_iter,i,$iter12_type,$iter11_type,$iter10_array,$iter13_array,$iter12_iter,$iter10_type,$iter12_idx,$iter12_nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration']();
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter12_iter = $p['xrange']($p['getattr'](self, 'row'));
						if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
							$iter12_type = 0;
						} else {
							$iter12_iter = $iter12_iter['__iter__']();
							$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter12_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								i = $iter12_nextval;
								$iter13_iter = $p['xrange']($p['getattr'](self, 'column'));
								if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
									$iter13_type = 0;
								} else {
									$iter13_iter = $iter13_iter['__iter__']();
									$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
								}
								$iter13_idx = 0;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								$generator_state[2] = 0;
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
								for (;($generator_state[2] > 0 || typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined');$generator_state[2] = 0) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
										j = $iter13_nextval;
										one = self['grid']['getCell'](i, j);
										$yield_value = one;
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
								$generator_state[1]=3;
							}
							if ($generator_state[1] == 3) {
								$generator_state[1]=4;
							}
							if ($generator_state[1] == 4) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

					return;
				};
				return $generator;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_all_cells'] = $method;
			$method = $pyjs__bind_method2('get_neighbors', function(cell) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cell = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub20,$cmp13,$sub19,one,$iter16_idx,$bool44,$iter17_type,$iter16_iter,row,$add28,$iter17_iter,$iter15_iter,$iter16_type,$add21,$add22,$add25,$add24,$add27,$add26,$iter16_nextval,$iter17_idx,$iter17_nextval,$iter16_array,$iter14_array,$sub18,$iter14_type,$bool42,$bool41,$bool40,$sub13,$iter15_array,$sub17,$sub16,$sub15,$sub14,$cmp15,$cmp14,$cmp17,$cmp16,$cmp11,$cmp10,$iter14_iter,$cmp12,$cmp18,$iter14_idx,$iter14_nextval,$cmp5,$cmp4,$cmp7,$cmp6,$bool43,$cmp3,$iter17_array,column,j,$cmp9,$cmp8,$iter15_idx,i,$iter15_nextval,$iter15_type,y,x,$bool39,$add23;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration']();
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						x = $p['getattr'](cell, 'x');
						y = $p['getattr'](cell, 'y');
						var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'row'), $p['getattr'](self, 'column')]), 2, null);
						row = $tupleassign3[0];
						column = $tupleassign3[1];
						$iter16_iter = $p['xrange']((typeof ($sub17=x)==typeof ($sub18=$constant_int_1) && (typeof $sub17=='number'||typeof $sub17=='string')?
							$sub17-$sub18:
							$p['op_sub']($sub17,$sub18)), (typeof ($add25=x)==typeof ($add26=$constant_int_2) && (typeof $add25=='number'||typeof $add25=='string')?
							$add25+$add26:
							$p['op_add']($add25,$add26)));
						if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
							$iter16_type = 0;
						} else {
							$iter16_iter = $iter16_iter['__iter__']();
							$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter16_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								i = $iter16_nextval;
								$generator_state[3] = 0;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool42=(((($cmp11=$constant_int_0)===($cmp12=($compare5 = i))?0:
									(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
										($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
										$p['cmp']($cmp11, $cmp12))) < 1)&&((($cmp13=$compare5)===($cmp14=($compare6 = row))?0:
									(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
										($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
										$p['cmp']($cmp13, $cmp14))) == -1))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
										false :
										(typeof $bool42=='object'?
											(typeof $bool42['__nonzero__']=='function'?
												$bool42['__nonzero__']() :
												(typeof $bool42['__len__']=='function'?
													($bool42['__len__']()>0 ?
														true :
														false) :
													true ) ) :
											 true ) )))) {
									$generator_state[2]=1;
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$iter17_iter = $p['xrange']((typeof ($sub19=y)==typeof ($sub20=$constant_int_1) && (typeof $sub19=='number'||typeof $sub19=='string')?
											$sub19-$sub20:
											$p['op_sub']($sub19,$sub20)), (typeof ($add27=y)==typeof ($add28=$constant_int_2) && (typeof $add27=='number'||typeof $add27=='string')?
											$add27+$add28:
											$p['op_add']($add27,$add28)));
										if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
											$iter17_type = 0;
										} else {
											$iter17_iter = $iter17_iter['__iter__']();
											$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
										}
										$iter17_idx = 0;
										$generator_state[3]=1;
									}
									if ($generator_state[3] == 1) {
										$generator_state[4] = 0;
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
										for (;($generator_state[4] > 0 || typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined');$generator_state[4] = 0) {
											if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
												for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
												j = $iter17_nextval;
												$generator_state[6] = 0;
												$generator_state[4]=1;
											}
											if ($generator_state[4] == 1) {
												if(($generator_state[5]==1)||($generator_state[5]<1&&((($bool43=(((($cmp15=$constant_int_0)===($cmp16=($compare7 = j))?0:
													(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
														($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
														$p['cmp']($cmp15, $cmp16))) < 1)&&((($cmp17=$compare7)===($cmp18=($compare8 = column))?0:
													(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
														($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
														$p['cmp']($cmp17, $cmp18))) == -1))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
														false :
														(typeof $bool43=='object'?
															(typeof $bool43['__nonzero__']=='function'?
																$bool43['__nonzero__']() :
																(typeof $bool43['__len__']=='function'?
																	($bool43['__len__']()>0 ?
																		true :
																		false) :
																	true ) ) :
															 true ) )))) {
													$generator_state[5]=1;
													if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
														for (var $i = 6 ; $i < ($generator_state['length']<8?8:$generator_state['length']); $i++) $generator_state[$i]=0;
														$generator_state[8] = 0;
														$generator_state[6]=1;
													}
													if ($generator_state[6] == 1) {
														if(($generator_state[7]==1)||($generator_state[7]<1&&((($bool44=!$p['op_eq']($p['tuple']([i, j]), $p['tuple']([x, y]))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
																false :
																(typeof $bool44=='object'?
																	(typeof $bool44['__nonzero__']=='function'?
																		$bool44['__nonzero__']() :
																		(typeof $bool44['__len__']=='function'?
																			($bool44['__len__']()>0 ?
																				true :
																				false) :
																			true ) ) :
																	 true ) )))) {
															$generator_state[7]=1;
															if (typeof $generator_state[8] == 'undefined' || $generator_state[8] === 0) {
																for (var $i = 8 ; $i < ($generator_state['length']<10?10:$generator_state['length']); $i++) $generator_state[$i]=0;
																one = self['grid']['getCell'](i, j);
																$yield_value = one;
																$yielding = true;
																$generator_state[8] = 1;
																return $yield_value;
																$generator_state[8]=1;
															}
															if ($generator_state[8] == 1) {
																if (typeof $exc != 'undefined' && $exc !== null) {
																	$yielding = null;
																	$generator_state[8] = -1;
																	throw $exc;
																}
																$generator_state[8]=2;
															}
															if ($generator_state[8] == 2) {
															}
														}
														$generator_state[7]=0;
														$generator_state[6]=2;
													}
													if ($generator_state[6] == 2) {
													}
												}
												$generator_state[5]=0;
												$generator_state[4]=2;
											}
											if ($generator_state[4] == 2) {
											}
										}
										$generator_state[3]=3;
									}
									if ($generator_state[3] == 3) {
										$generator_state[3]=4;
									}
									if ($generator_state[3] == 4) {
									}
								}
								$generator_state[2]=0;
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

					return;
				};
				return $generator;
			}
	, 1, [null,null,['self'],['cell']]);
			$cls_definition['get_neighbors'] = $method;
			$method = $pyjs__bind_method2('set_counter', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$and8,$bool45,$sub21,$bool46,$bool47,value,$and7,$cmp20,$add29,$len2,template,$len1,next_value,$cmp19,$add30;
				next_value = (typeof ($sub21=$p['getattr'](self, 'no_of_bomb'))==typeof ($sub22=(($len1=$p['getattr'](self, 'flagged_cells')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1)))))) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22));
				if ((($bool46=((($bool45=$and7=$p['op_eq'](next_value, $constant_int_0)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45['__nonzero__']=='function'?
							$bool45['__nonzero__']() :
							(typeof $bool45['__len__']=='function'?
								($bool45['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](self, 'started'):$and7)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46['__nonzero__']=='function'?
								$bool46['__nonzero__']() :
								(typeof $bool46['__len__']=='function'?
									($bool46['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['counter']['setStyleName']('digit counter-blue');
					self['counter']['addClickListener']($m['RemainingMineHandler'](self));
				}
				else {
					self['counter']['setStyleName']('digit counter');
					$p['getattr'](self, 'counter')['__is_instance__'] && typeof $p['getattr'](self, 'counter')['__setattr__'] == 'function' ? $p['getattr'](self, 'counter')['__setattr__']('_clickListeners', $p['list']([])) : $p['setattr']($p['getattr'](self, 'counter'), '_clickListeners', $p['list']([])); 
				}
				if ((($bool47=((($cmp19=next_value)===($cmp20=$constant_int_0)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
						false :
						(typeof $bool47=='object'?
							(typeof $bool47['__nonzero__']=='function'?
								$bool47['__nonzero__']() :
								(typeof $bool47['__len__']=='function'?
									($bool47['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					template = '-00';
					next_value = $p['abs'](next_value);
				}
				else {
					template = '000';
				}
				value = $p['str'](next_value);
				value = (typeof ($add29=$p['__getslice'](template, 0, (typeof ($usub6=(($len2=value) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))))=='number'?
					-$usub6:
					$p['op_usub']($usub6))))==typeof ($add30=value) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30));
				self['counter']['setText'](value);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['set_counter'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(target) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					target = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$or6,$bool50,$add32,$add33,$add31,$bool49,$bool48,$cmp21,$cmp22,$len3,$add34,str_time,$bool51;
				if ((($bool50=((($bool49=$or5=!(($bool48=$p['getattr'](self, 'started')) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48['__nonzero__']=='function'?
							$bool48['__nonzero__']() :
							(typeof $bool48['__len__']=='function'?
								($bool48['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49['__nonzero__']=='function'?
							$bool49['__nonzero__']() :
							(typeof $bool49['__len__']=='function'?
								($bool49['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:$p['getattr'](self, 'first_click'))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50['__nonzero__']=='function'?
								$bool50['__nonzero__']() :
								(typeof $bool50['__len__']=='function'?
									($bool50['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				$m['Timer']($constant_int_1000, self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time', (typeof ($add31=$p['getattr'](self, 'time'))==typeof ($add32=$constant_int_1) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32))) : $p['setattr'](self, 'time', (typeof ($add31=$p['getattr'](self, 'time'))==typeof ($add32=$constant_int_1) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32))); 
				if ((($bool51=((($cmp21=$p['getattr'](self, 'time'))===($cmp22=$constant_int_999)?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) < 1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51['__nonzero__']=='function'?
								$bool51['__nonzero__']() :
								(typeof $bool51['__len__']=='function'?
									($bool51['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					str_time = $p['str']($p['getattr'](self, 'time'));
					str_time = (typeof ($add33=$p['__getslice']('000', 0, (typeof ($usub7=(($len3=str_time) === null?$constant_int_0:
						(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
							(typeof $len3['__len__'] == 'function'?$len3['__len__']():
								(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
									$p['len']($len3))))))=='number'?
						-$usub7:
						$p['op_usub']($usub7))))==typeof ($add34=str_time) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34));
					self['timer']['setText'](str_time);
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('started', false) : $p['setattr'](self, 'started', false); 
					self['face']['setStyleName']('faceclock');
				}
				return null;
			}
	, 1, [null,null,['self'],['target']]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('sample', function(population, k) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					population = arguments[1];
					k = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,$iter18_iter,$iter18_array,seq,i,$iter18_idx,s,pick,$iter18_nextval;
				seq = $p['list'](population);
				s = $p['list']([]);
				$iter18_iter = $p['xrange'](k);
				if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter['__iter__']();
					$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					i = $iter18_nextval;
					pick = $m['random']['choice'](seq);
					seq['remove'](pick);
					s['append'](pick);
				}
				return s;
			}
	, 1, [null,null,['self'],['population'],['k']]);
			$cls_definition['sample'] = $method;
			$method = $pyjs__bind_method2('generate_bombs', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_nextval,bomb,$bool52,$bool53,mine,one,$mod1,$mod2,row,$iter19_iter,$iter19_nextval,$iter20_idx,$iter20_array,$iter20_iter,bombs,$iter19_array,$iter20_type,$add38,$iter19_idx,i,$add36,$add37,$add35,column,$iter19_type,$floordiv2,$floordiv1,y,x;
				bombs = self['sample']($p['xrange']($p['getattr'](self, 'squares')), (typeof ($add35=$p['getattr'](self, 'no_of_bomb'))==typeof ($add36=$constant_int_1) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)));
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'row'), $p['getattr'](self, 'column')]), 2, null);
				row = $tupleassign4[0];
				column = $tupleassign4[1];
				$iter19_iter = $p['enumerate'](bombs);
				if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
					$iter19_type = 0;
				} else {
					$iter19_iter = $iter19_iter['__iter__']();
					$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter19_idx = 0;
				while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter19_nextval, 2, null);
					i = $tupleassign5[0];
					bomb = $tupleassign5[1];
					x = (typeof ($floordiv1=bomb)==typeof ($floordiv2=column) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math['floor']($floordiv1/$floordiv2):
						$p['op_floordiv']($floordiv1,$floordiv2));
					y = (typeof ($mod1=bomb)==typeof ($mod2=column) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2));
					mine = self['grid']['getCell'](x, y);
					if ((($bool52=$p['op_eq'](i, $constant_int_0)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
							false :
							(typeof $bool52=='object'?
								(typeof $bool52['__nonzero__']=='function'?
									$bool52['__nonzero__']() :
									(typeof $bool52['__len__']=='function'?
										($bool52['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extra_mine', mine) : $p['setattr'](self, 'extra_mine', mine); 
						continue;
					}
					self['bombed_cells']['append'](mine);
					mine['__is_instance__'] && typeof mine['__setattr__'] == 'function' ? mine['__setattr__']('count', (typeof ($usub8=$constant_int_1)=='number'?
						-$usub8:
						$p['op_usub']($usub8))) : $p['setattr'](mine, 'count', (typeof ($usub8=$constant_int_1)=='number'?
						-$usub8:
						$p['op_usub']($usub8))); 
					$iter20_iter = self['get_neighbors'](mine);
					if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
						$iter20_type = 0;
					} else {
						$iter20_iter = $iter20_iter['__iter__']();
						$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter20_idx = 0;
					while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
						one = $iter20_nextval;
						if ((($bool53=!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub9=$constant_int_1)=='number'?
							-$usub9:
							$p['op_usub']($usub9)))) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
								false :
								(typeof $bool53=='object'?
									(typeof $bool53['__nonzero__']=='function'?
										$bool53['__nonzero__']() :
										(typeof $bool53['__len__']=='function'?
											($bool53['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							one['__is_instance__'] && typeof one['__setattr__'] == 'function' ? one['__setattr__']('count', (typeof ($add37=$p['getattr'](one, 'count'))==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
								$add37+$add38:
								$p['op_add']($add37,$add38))) : $p['setattr'](one, 'count', (typeof ($add37=$p['getattr'](one, 'count'))==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
								$add37+$add38:
								$p['op_add']($add37,$add38))); 
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['generate_bombs'] = $method;
			$method = $pyjs__bind_method2('move_to_extra_mine', function(to_be_moved) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					to_be_moved = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool54,$sub23,$add39,$iter22_array,$sub24,$bool55,$iter21_nextval,$iter22_nextval,$iter21_idx,$add41,one,$iter21_type,$iter21_iter,$iter22_idx,$iter22_type,$iter21_array,$add42,$add40,$iter22_iter;
				to_be_moved['__is_instance__'] && typeof to_be_moved['__setattr__'] == 'function' ? to_be_moved['__setattr__']('count', $constant_int_0) : $p['setattr'](to_be_moved, 'count', $constant_int_0); 
				self['bombed_cells']['remove'](to_be_moved);
				$iter21_iter = self['get_neighbors'](to_be_moved);
				if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
					$iter21_type = 0;
				} else {
					$iter21_iter = $iter21_iter['__iter__']();
					$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter21_idx = 0;
				while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
					one = $iter21_nextval;
					if ((($bool54=$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub10=$constant_int_1)=='number'?
						-$usub10:
						$p['op_usub']($usub10)))) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
							false :
							(typeof $bool54=='object'?
								(typeof $bool54['__nonzero__']=='function'?
									$bool54['__nonzero__']() :
									(typeof $bool54['__len__']=='function'?
										($bool54['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						to_be_moved['__is_instance__'] && typeof to_be_moved['__setattr__'] == 'function' ? to_be_moved['__setattr__']('count', (typeof ($add39=$p['getattr'](to_be_moved, 'count'))==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
							$add39+$add40:
							$p['op_add']($add39,$add40))) : $p['setattr'](to_be_moved, 'count', (typeof ($add39=$p['getattr'](to_be_moved, 'count'))==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
							$add39+$add40:
							$p['op_add']($add39,$add40))); 
					}
					else {
						one['__is_instance__'] && typeof one['__setattr__'] == 'function' ? one['__setattr__']('count', (typeof ($sub23=$p['getattr'](one, 'count'))==typeof ($sub24=$constant_int_1) && (typeof $sub23=='number'||typeof $sub23=='string')?
							$sub23-$sub24:
							$p['op_sub']($sub23,$sub24))) : $p['setattr'](one, 'count', (typeof ($sub23=$p['getattr'](one, 'count'))==typeof ($sub24=$constant_int_1) && (typeof $sub23=='number'||typeof $sub23=='string')?
							$sub23-$sub24:
							$p['op_sub']($sub23,$sub24))); 
					}
				}
				$p['getattr'](self, 'extra_mine')['__is_instance__'] && typeof $p['getattr'](self, 'extra_mine')['__setattr__'] == 'function' ? $p['getattr'](self, 'extra_mine')['__setattr__']('count', (typeof ($usub11=$constant_int_1)=='number'?
					-$usub11:
					$p['op_usub']($usub11))) : $p['setattr']($p['getattr'](self, 'extra_mine'), 'count', (typeof ($usub11=$constant_int_1)=='number'?
					-$usub11:
					$p['op_usub']($usub11))); 
				self['bombed_cells']['append']($p['getattr'](self, 'extra_mine'));
				$iter22_iter = self['get_neighbors']($p['getattr'](self, 'extra_mine'));
				if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter['__iter__']();
					$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
					one = $iter22_nextval;
					if ((($bool55=!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub12=$constant_int_1)=='number'?
						-$usub12:
						$p['op_usub']($usub12)))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
							false :
							(typeof $bool55=='object'?
								(typeof $bool55['__nonzero__']=='function'?
									$bool55['__nonzero__']() :
									(typeof $bool55['__len__']=='function'?
										($bool55['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						one['__is_instance__'] && typeof one['__setattr__'] == 'function' ? one['__setattr__']('count', (typeof ($add41=$p['getattr'](one, 'count'))==typeof ($add42=$constant_int_1) && (typeof $add41=='number'||typeof $add41=='string')?
							$add41+$add42:
							$p['op_add']($add41,$add42))) : $p['setattr'](one, 'count', (typeof ($add41=$p['getattr'](one, 'count'))==typeof ($add42=$constant_int_1) && (typeof $add41=='number'||typeof $add41=='string')?
							$add41+$add42:
							$p['op_add']($add41,$add42))); 
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['to_be_moved']]);
			$cls_definition['move_to_extra_mine'] = $method;
			$method = $pyjs__bind_method2('press_neighbor_cells', function(cell) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cell = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter23_type,$bool57,$iter23_nextval,$iter23_iter,$bool58,$add44,$add43,$bool56,one,$iter23_array,$iter23_idx;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('count_flags', $constant_int_0) : $p['setattr'](self, 'count_flags', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bomb_explodes_on', $p['list']([])) : $p['setattr'](self, 'bomb_explodes_on', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('to_be_released', $p['list']([])) : $p['setattr'](self, 'to_be_released', $p['list']([])); 
				$iter23_iter = self['get_neighbors'](cell);
				if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
					$iter23_type = 0;
				} else {
					$iter23_iter = $iter23_iter['__iter__']();
					$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter23_idx = 0;
				while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
					one = $iter23_nextval;
					if ((($bool56=$p['op_eq']($p['getattr'](one, 'state'), $constant_int_3)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
							false :
							(typeof $bool56=='object'?
								(typeof $bool56['__nonzero__']=='function'?
									$bool56['__nonzero__']() :
									(typeof $bool56['__len__']=='function'?
										($bool56['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						continue;
					}
					one['addStyleName']('pressed');
					self['to_be_released']['append'](one);
					if ((($bool57=$p['op_eq']($p['getattr'](one, 'state'), $constant_int_1)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
							false :
							(typeof $bool57=='object'?
								(typeof $bool57['__nonzero__']=='function'?
									$bool57['__nonzero__']() :
									(typeof $bool57['__len__']=='function'?
										($bool57['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('count_flags', (typeof ($add43=$p['getattr'](self, 'count_flags'))==typeof ($add44=$constant_int_1) && (typeof $add43=='number'||typeof $add43=='string')?
							$add43+$add44:
							$p['op_add']($add43,$add44))) : $p['setattr'](self, 'count_flags', (typeof ($add43=$p['getattr'](self, 'count_flags'))==typeof ($add44=$constant_int_1) && (typeof $add43=='number'||typeof $add43=='string')?
							$add43+$add44:
							$p['op_add']($add43,$add44))); 
					}
					else {
						if ((($bool58=$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub13=$constant_int_1)=='number'?
							-$usub13:
							$p['op_usub']($usub13)))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
								false :
								(typeof $bool58=='object'?
									(typeof $bool58['__nonzero__']=='function'?
										$bool58['__nonzero__']() :
										(typeof $bool58['__len__']=='function'?
											($bool58['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['bomb_explodes_on']['append'](one);
						}
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['cell']]);
			$cls_definition['press_neighbor_cells'] = $method;
			$method = $pyjs__bind_method2('open_if_satisfies', function(cell) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cell = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool60,$bool59;
				if ((($bool59=$p['op_eq']($p['getattr'](self, 'count_flags'), $p['getattr'](cell, 'count'))) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59['__nonzero__']=='function'?
								$bool59['__nonzero__']() :
								(typeof $bool59['__len__']=='function'?
									($bool59['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool60=$p['getattr'](self, 'bomb_explodes_on')) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
							false :
							(typeof $bool60=='object'?
								(typeof $bool60['__nonzero__']=='function'?
									$bool60['__nonzero__']() :
									(typeof $bool60['__len__']=='function'?
										($bool60['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['show_all_bombs']($p['getattr'](self, 'bomb_explodes_on'));
					}
					else {
						self['open_neighboring_cells'](cell);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['cell']]);
			$cls_definition['open_if_satisfies'] = $method;
			$method = $pyjs__bind_method2('open_neighboring_cells', function(cell) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cell = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool61,$and9,$bool63,$bool62,$bool65,$bool64,$iter24_idx,$add46,$iter24_type,$and10,$iter24_array,$add45,one,$iter24_iter,$iter24_nextval;
				if ((($bool62=!(($bool61=$p['getattr'](self, 'started')) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61['__nonzero__']=='function'?
							$bool61['__nonzero__']() :
							(typeof $bool61['__len__']=='function'?
								($bool61['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62['__nonzero__']=='function'?
								$bool62['__nonzero__']() :
								(typeof $bool62['__len__']=='function'?
									($bool62['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				$iter24_iter = self['get_neighbors'](cell);
				if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
					$iter24_type = 0;
				} else {
					$iter24_iter = $iter24_iter['__iter__']();
					$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter24_idx = 0;
				while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
					one = $iter24_nextval;
					if ((($bool64=((($bool63=$and9=$p['tuple']([$constant_int_0, $constant_int_2])['__contains__']($p['getattr'](one, 'state'))) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63['__nonzero__']=='function'?
								$bool63['__nonzero__']() :
								(typeof $bool63['__len__']=='function'?
									($bool63['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub14=$constant_int_1)=='number'?
						-$usub14:
						$p['op_usub']($usub14))):$and9)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
							false :
							(typeof $bool64=='object'?
								(typeof $bool64['__nonzero__']=='function'?
									$bool64['__nonzero__']() :
									(typeof $bool64['__len__']=='function'?
										($bool64['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						one['setStyleName']('opened');
						one['__is_instance__'] && typeof one['__setattr__'] == 'function' ? one['__setattr__']('state', $constant_int_3) : $p['setattr'](one, 'state', $constant_int_3); 
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('count_opened_cells', (typeof ($add45=$p['getattr'](self, 'count_opened_cells'))==typeof ($add46=$constant_int_1) && (typeof $add45=='number'||typeof $add45=='string')?
							$add45+$add46:
							$p['op_add']($add45,$add46))) : $p['setattr'](self, 'count_opened_cells', (typeof ($add45=$p['getattr'](self, 'count_opened_cells'))==typeof ($add46=$constant_int_1) && (typeof $add45=='number'||typeof $add45=='string')?
							$add45+$add46:
							$p['op_add']($add45,$add46))); 
						if ((($bool65=$p['op_eq']($p['getattr'](one, 'count'), $constant_int_0)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
								false :
								(typeof $bool65=='object'?
									(typeof $bool65['__nonzero__']=='function'?
										$bool65['__nonzero__']() :
										(typeof $bool65['__len__']=='function'?
											($bool65['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							self['open_neighboring_cells'](one);
						}
						else {
							$m['setColorfulHTML'](one['getElement'](), $p['getattr'](one, 'count'));
						}
					}
				}
				self['check_win']();
				return null;
			}
	, 1, [null,null,['self'],['cell']]);
			$cls_definition['open_neighboring_cells'] = $method;
			$method = $pyjs__bind_method2('check_win', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var name,$bool67,$iter25_nextval,$bool69,$bool68,$bool66,$iter25_iter,one,$and12,$and11,$bool70,$iter25_idx,$bool71,$iter25_type,$iter25_array;
				if ((($bool67=!(($bool66=$p['getattr'](self, 'started')) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
					false :
					(typeof $bool66=='object'?
						(typeof $bool66['__nonzero__']=='function'?
							$bool66['__nonzero__']() :
							(typeof $bool66['__len__']=='function'?
								($bool66['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
						false :
						(typeof $bool67=='object'?
							(typeof $bool67['__nonzero__']=='function'?
								$bool67['__nonzero__']() :
								(typeof $bool67['__len__']=='function'?
									($bool67['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool68=$p['op_eq']($p['getattr'](self, 'count_opened_cells'), $p['getattr'](self, 'no_of_safe_zones'))) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
						false :
						(typeof $bool68=='object'?
							(typeof $bool68['__nonzero__']=='function'?
								$bool68['__nonzero__']() :
								(typeof $bool68['__len__']=='function'?
									($bool68['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter25_iter = $p['getattr'](self, 'bombed_cells');
					if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
						$iter25_type = 0;
					} else {
						$iter25_iter = $iter25_iter['__iter__']();
						$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter25_idx = 0;
					while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
						one = $iter25_nextval;
						if ((($bool69=!$p['op_eq']($p['getattr'](one, 'state'), $constant_int_1)) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
								false :
								(typeof $bool69=='object'?
									(typeof $bool69['__nonzero__']=='function'?
										$bool69['__nonzero__']() :
										(typeof $bool69['__len__']=='function'?
											($bool69['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							one['setStyleName']('cell bombflagged');
							self['flagged_cells']['append'](one);
						}
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('started', false) : $p['setattr'](self, 'started', false); 
					self['set_counter']();
					self['face']['setStyleName']('facewin');
					name = $m['Window']['prompt']($p['sprintf']("You've done it !\n                                Game Time: %s seconds\n                                Number of Clicks: %s\nWhat's ur name ?", $p['tuple']([$p['getattr'](self, 'time'), $p['getattr'](self, 'no_of_click')])));
					if ((($bool71=((($bool70=$and11=name) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
						false :
						(typeof $bool70=='object'?
							(typeof $bool70['__nonzero__']=='function'?
								$bool70['__nonzero__']() :
								(typeof $bool70['__len__']=='function'?
									($bool70['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3])['__contains__']($p['getattr'](self, 'level')):$and11)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
							false :
							(typeof $bool71=='object'?
								(typeof $bool71['__nonzero__']=='function'?
									$bool71['__nonzero__']() :
									(typeof $bool71['__len__']=='function'?
										($bool71['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['remote']['add_score'](name, $p['getattr'](self, 'level'), $p['getattr'](self, 'time'), $p['getattr'](self, 'no_of_click'), $p['getattr'](self, 'remote_handler'));
						self['add_player_to_toppers'](name);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['check_win'] = $method;
			$method = $pyjs__bind_method2('add_player_to_toppers', function(name) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $15,$16,$sub26,$sub25,current_level,toppers_in_this_level,$lambda2;
				current_level = (typeof ($sub25=$p['getattr'](self, 'level'))==typeof ($sub26=$constant_int_1) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26));
				toppers_in_this_level = (typeof ($15=$p['getattr'](self, 'toppers'))['__array'] != 'undefined'?
					((typeof $15['__array'][$16=current_level]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](current_level));
				toppers_in_this_level['append']($p['tuple']([$p['sprintf']('<b>%s</b>', name), $p['getattr'](self, 'time')]));
				var 				$lambda2 = function(score) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
					var $17,$18;
					return (typeof ($17=score)['__array'] != 'undefined'?
						((typeof $17['__array'][$18=$constant_int_1]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__']($constant_int_1));
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null,['score']];
				$p['getattr'](self, 'toppers')['__setitem__'](current_level, $pyjs_kwargs_call(null, $p['sorted'], null, null, [{'key':$lambda2}, toppers_in_this_level]));
				self['remote_handler']['load_top_scores']();
				return null;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['add_player_to_toppers'] = $method;
			$method = $pyjs__bind_method2('show_all_bombs', function(bomb_explodes_on) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bomb_explodes_on = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof bomb_explodes_on == 'undefined') bomb_explodes_on=arguments['callee']['__args__'][3][1];
				var $iter28_array,$iter27_nextval,$iter28_type,$iter26_idx,$iter26_nextval,$bool72,$bool73,one,$iter26_type,$iter27_array,$iter27_iter,$iter27_idx,$iter28_iter,$iter26_array,$iter26_iter,$iter28_idx,$iter28_nextval,$iter27_type;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('started', false) : $p['setattr'](self, 'started', false); 
				self['face']['setStyleName']('facedead');
				$iter26_iter = $p['getattr'](self, 'bombed_cells');
				if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter['__iter__']();
					$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					one = $iter26_nextval;
					if ((($bool72=!$p['op_eq']($p['getattr'](one, 'state'), $constant_int_1)) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
							false :
							(typeof $bool72=='object'?
								(typeof $bool72['__nonzero__']=='function'?
									$bool72['__nonzero__']() :
									(typeof $bool72['__len__']=='function'?
										($bool72['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						one['setStyleName']('cell bombrevealed');
					}
				}
				$iter27_iter = $p['getattr'](self, 'flagged_cells');
				if (typeof ($iter27_array = $iter27_iter['__array']) != 'undefined') {
					$iter27_type = 0;
				} else {
					$iter27_iter = $iter27_iter['__iter__']();
					$iter27_type = typeof ($iter27_array = $iter27_iter['__array']) != 'undefined'? 0 : (typeof $iter27_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter27_idx = 0;
				while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
					one = $iter27_nextval;
					if ((($bool73=!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub15=$constant_int_1)=='number'?
						-$usub15:
						$p['op_usub']($usub15)))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
							false :
							(typeof $bool73=='object'?
								(typeof $bool73['__nonzero__']=='function'?
									$bool73['__nonzero__']() :
									(typeof $bool73['__len__']=='function'?
										($bool73['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						one['setStyleName']('cell bombmisflagged');
					}
				}
				$iter28_iter = bomb_explodes_on;
				if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
					$iter28_type = 0;
				} else {
					$iter28_iter = $iter28_iter['__iter__']();
					$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter28_idx = 0;
				while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
					one = $iter28_nextval;
					one['setStyleName']('cell bombdeath');
				}
				return null;
			}
	, 1, [null,null,['self'],['bomb_explodes_on', $p['list']([])]]);
			$cls_definition['show_all_bombs'] = $method;
			$method = $pyjs__bind_method2('next_game', function(level, no_of_bomb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					no_of_bomb = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];
				if (typeof no_of_bomb == 'undefined') no_of_bomb=arguments['callee']['__args__'][4][1];
				var $bool78,$bool79,$bool76,$bool77,$bool74,$bool75,$cmp23,$cmp24,$cmp25,$cmp26,$21,$20,$22,$25,$24,$26,$or7,current_level,$or9,$or8,$and13,$and14,$19,$23;
				current_level = $p['tuple']([$p['getattr'](self, 'row'), $p['getattr'](self, 'column')]);
				if ((($bool77=((($bool75=$or7=!(($bool74=level) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74['__nonzero__']=='function'?
							$bool74['__nonzero__']() :
							(typeof $bool74['__len__']=='function'?
								($bool74['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
					false :
					(typeof $bool75=='object'?
						(typeof $bool75['__nonzero__']=='function'?
							$bool75['__nonzero__']() :
							(typeof $bool75['__len__']=='function'?
								($bool75['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or7:((($bool76=$or8=$p['op_eq'](level, $p['tuple']([$constant_int_0, $constant_int_0]))) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
					false :
					(typeof $bool76=='object'?
						(typeof $bool76['__nonzero__']=='function'?
							$bool76['__nonzero__']() :
							(typeof $bool76['__len__']=='function'?
								($bool76['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or8:$p['op_eq'](level, current_level)))) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
						false :
						(typeof $bool77=='object'?
							(typeof $bool77['__nonzero__']=='function'?
								$bool77['__nonzero__']() :
								(typeof $bool77['__len__']=='function'?
									($bool77['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['restart'](no_of_bomb);
				}
				else {
					var $tupleassign6 = $p['__ass_unpack'](level, 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('row', $tupleassign6[0]) : $p['setattr'](self, 'row', $tupleassign6[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('column', $tupleassign6[1]) : $p['setattr'](self, 'column', $tupleassign6[1]); 
					if ((($bool79=((($bool78=$and13=((($cmp23=(typeof ($19=level)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=$constant_int_0]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__']($constant_int_0)))===($cmp24=(typeof ($21=current_level)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=$constant_int_0]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__']($constant_int_0)))?0:
						(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
							($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
							$p['cmp']($cmp23, $cmp24))) < 1)) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
						false :
						(typeof $bool78=='object'?
							(typeof $bool78['__nonzero__']=='function'?
								$bool78['__nonzero__']() :
								(typeof $bool78['__len__']=='function'?
									($bool78['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp25=(typeof ($23=level)['__array'] != 'undefined'?
						((typeof $23['__array'][$24=$constant_int_1]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__']($constant_int_1)))===($cmp26=(typeof ($25=current_level)['__array'] != 'undefined'?
						((typeof $25['__array'][$26=$constant_int_1]) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__']($constant_int_1)))?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))) < 1):$and13)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
							false :
							(typeof $bool79=='object'?
								(typeof $bool79['__nonzero__']=='function'?
									$bool79['__nonzero__']() :
									(typeof $bool79['__len__']=='function'?
										($bool79['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs_kwargs_call(self['grid'], 'resize', level, null, [{}]);
						self['restart'](no_of_bomb);
					}
					else {
						self['grid_panel']['remove']($p['getattr'](self, 'grid'));
						self['create_grid']();
						self['start'](no_of_bomb);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['level', null],['no_of_bomb', $constant_int_0]]);
			$cls_definition['next_game'] = $method;
			$method = $pyjs__bind_method2('restart', function(no_of_bomb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					no_of_bomb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0980750835969cd4a89fa4228276b1a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof no_of_bomb == 'undefined') no_of_bomb=arguments['callee']['__args__'][3][1];
				var $iter29_type,one,$iter29_nextval,$iter29_idx,$iter29_iter,$iter29_array;
				$iter29_iter = self['get_all_cells']();
				if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter['__iter__']();
					$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					one = $iter29_nextval;
					one['__is_instance__'] && typeof one['__setattr__'] == 'function' ? one['__setattr__']('count', $constant_int_0) : $p['setattr'](one, 'count', $constant_int_0); 
					one['__is_instance__'] && typeof one['__setattr__'] == 'function' ? one['__setattr__']('state', $constant_int_0) : $p['setattr'](one, 'state', $constant_int_0); 
					one['setStyleName']('blank');
					$m['DOM']['setInnerHTML'](one['getElement'](), '');
				}
				self['start'](no_of_bomb);
				return null;
			}
	, 1, [null,null,['self'],['no_of_bomb', $constant_int_0]]);
			$cls_definition['restart'] = $method;
			var $bases = new Array($m['VerticalPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Game', $p['tuple']($bases), $data);
		})();
		if ((($bool80=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
				false :
				(typeof $bool80=='object'?
					(typeof $bool80['__nonzero__']=='function'?
						$bool80['__nonzero__']() :
						(typeof $bool80['__len__']=='function'?
							($bool80['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['pyjd']['setup']('./public/minesweeper.html');
			$m['LOG'] = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{'StyleName':'log'}, '']);
			$m['SCORES'] = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{'StyleName':'scores'}, '']);
			$m['game'] = $m['Game']($constant_int_8, $constant_int_8);
			$m['RootPanel']('content')['add']($m['game']);
			$m['RootPanel']('content')['add']($m['SCORES']);
			$m['RootPanel']('content')['add']($m['LOG']);
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end minesweeper */


/* end module: minesweeper */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas.ui.MenuBar', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.Event', 'pyjamas.Window', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'random']
*/
