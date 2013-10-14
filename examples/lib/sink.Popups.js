/* start module: sink.Popups */
$pyjs['loaded_modules']['sink.Popups'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sink.Popups']['__was_initialized__']) return $pyjs['loaded_modules']['sink.Popups'];
	if(typeof $pyjs['loaded_modules']['sink'] == 'undefined' || !$pyjs['loaded_modules']['sink']['__was_initialized__']) $p['___import___']('sink', null);
	var $m = $pyjs['loaded_modules']['sink.Popups'];
	$m['__repr__'] = function() { return '<module: sink.Popups>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sink.Popups';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sink']['Popups'] = $pyjs['loaded_modules']['sink.Popups'];
	try {

		var $constant_int_8 = new $p['int'](8);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', 'sink', null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', 'sink', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'sink', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'sink', null, false);
		$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'sink', null, false);
		$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', 'sink', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'sink', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'sink', null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'sink', null, false);
		$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', 'sink', null, false);
		$m['DialogWindow'] = $p['___import___']('pyjamas.ui.DialogWindow.DialogWindow', 'sink', null, false);
		$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', 'sink', null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'sink', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'sink', null, false);
		$m['Popups'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Popups';
			$cls_definition['__md5__'] = '9158147994108cace973a8e596e13314';
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
					if (self.prototype['__md5__'] !== '9158147994108cace973a8e596e13314') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,i,list,$iter1_iter,$iter1_array,panel;
				$m['Sink']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fDialogButton', $m['Button']('Show Dialog', self)) : $p['setattr'](self, 'fDialogButton', $m['Button']('Show Dialog', self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fPopupButton', $m['Button']('Show Popup', self)) : $p['setattr'](self, 'fPopupButton', $m['Button']('Show Popup', self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fMultipleDialogButton', $m['Button']('Show muliple dialogs', self)) : $p['setattr'](self, 'fMultipleDialogButton', $m['Button']('Show muliple dialogs', self)); 
				panel = $m['VerticalPanel']();
				panel['add']($p['getattr'](self, 'fPopupButton'));
				panel['add']($p['getattr'](self, 'fDialogButton'));
				panel['add']($p['getattr'](self, 'fMultipleDialogButton'));
				list = $m['ListBox']();
				list['setVisibleItemCount']($constant_int_5);
				$iter1_iter = $p['range']($constant_int_10);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					list['addItem']($p['sprintf']('list item %d', i));
				}
				panel['add'](list);
				panel['setSpacing']($constant_int_8);
				self['initWidget'](panel);
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
					if (self.prototype['__md5__'] !== '9158147994108cace973a8e596e13314') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
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
					if (self.prototype['__md5__'] !== '9158147994108cace973a8e596e13314') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$add11,$add9,dlg,$bool3,$add3,$add2,p,$bool1,$add6,$add7,$add4,$add5,$add12,$add10,$add8,$add1,top,left;
				if ((($bool1=$p['op_eq'](sender, $p['getattr'](self, 'fPopupButton'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					p = (typeof MyPopup == "undefined"?$m['MyPopup']:MyPopup)();
					left = (typeof ($add1=sender['getAbsoluteLeft']())==typeof ($add2=$constant_int_10) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
					top = (typeof ($add3=sender['getAbsoluteTop']())==typeof ($add4=$constant_int_10) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					p['setPopupPosition'](left, top);
					p['show']();
				}
				else if ((($bool2=$p['op_eq'](sender, $p['getattr'](self, 'fDialogButton'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					dlg = (typeof MyDialog == "undefined"?$m['MyDialog']:MyDialog)(self['baseURL']());
					left = (typeof ($add5=self['fDialogButton']['getAbsoluteLeft']())==typeof ($add6=$constant_int_10) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
					top = (typeof ($add7=self['fDialogButton']['getAbsoluteTop']())==typeof ($add8=$constant_int_10) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
					dlg['setPopupPosition'](left, top);
					dlg['show']();
				}
				else if ((($bool3=$p['op_eq'](sender, $p['getattr'](self, 'fMultipleDialogButton'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					dlg = (typeof MyDialogWindow == "undefined"?$m['MyDialogWindow']:MyDialogWindow)(self['baseURL']());
					left = (typeof ($add9=self['fDialogButton']['getAbsoluteLeft']())==typeof ($add10=$constant_int_10) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
					top = (typeof ($add11=self['fDialogButton']['getAbsoluteTop']())==typeof ($add12=$constant_int_10) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
					dlg['setPopupPosition'](left, top);
					dlg['show']();
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Popups', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add29,$add20,$add30,$add31,$add28,$add21,text,$add23,$add22,$add25,$add24,$add27,$add26,$add14,$add15,$add16,$add17,$add32,$add13,$add18,$add19;
			text = "This page demonstrates GWT's built-in support for in-page ";
			text = (typeof ($add13=text)==typeof ($add14='popups.  The first is a very simple informational popup that closes ') && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
			text = (typeof ($add15=text)==typeof ($add16='itself automatically when you click off of it.  The second is a more ') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16));
			text = (typeof ($add17=text)==typeof ($add18="complex draggable dialog box. If you're wondering why there's ") && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18));
			text = (typeof ($add19=text)==typeof ($add20="a list box at the bottom, it's to demonstrate that you can drag the ") && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20));
			text = (typeof ($add21=text)==typeof ($add22='dialog box over it.  ') && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22));
			text = (typeof ($add23=text)==typeof ($add24='This is noteworthy because some browsers render lists and combos in ') && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				$p['op_add']($add23,$add24));
			text = (typeof ($add25=text)==typeof ($add26="a funky way that, if GWT didn't do some magic for you, would ") && (typeof $add25=='number'||typeof $add25=='string')?
				$add25+$add26:
				$p['op_add']($add25,$add26));
			text = (typeof ($add27=text)==typeof ($add28='normally cause the dialog box to appear to hover <i>underneath</i> ') && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28));
			text = (typeof ($add29=text)==typeof ($add30="the list box.  Fortunately, you don't have to worry about it -- ") && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30));
			text = (typeof ($add31=text)==typeof ($add32='just use the GWT <code>DialogBox</code> class.') && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32));
			return $m['SinkInfo']('Popups', text, $m['Popups']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
		$m['MyDialog'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Popups';
			$cls_definition['__md5__'] = 'fa17da10a01a27694b06e7e8378309a9';
			$method = $pyjs__bind_method2('__init__', function(baseURL) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					baseURL = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'fa17da10a01a27694b06e7e8378309a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add33,closeButton,$add34,dock,iframe,msg;
				$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{'glass':true}, self]);
				self['setText']('Sample DialogBox with embedded Frame');
				iframe = $m['Frame']((typeof ($add33=baseURL)==typeof ($add34='rembrandt/LaMarcheNocturne.html') && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)));
				closeButton = $m['Button']('Close', self);
				msg = $m['HTML']('<center>This is an example of a standard dialog box component.<br>  You can put pretty much anything you like into it,<br>such as the following IFRAME:</center>', true);
				dock = $m['DockPanel']();
				dock['setSpacing']($constant_int_4);
				dock['add'](closeButton, $p['getattr']($m['DockPanel'], 'SOUTH'));
				dock['add'](msg, $p['getattr']($m['DockPanel'], 'NORTH'));
				dock['add'](iframe, $p['getattr']($m['DockPanel'], 'CENTER'));
				dock['setCellHorizontalAlignment'](closeButton, $p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
				dock['setCellWidth'](iframe, '100%');
				dock['setWidth']('100%');
				iframe['setWidth']('36em');
				iframe['setHeight']('20em');
				self['setWidget'](dock);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('initURL', iframe['getUrl']()) : $p['setattr'](self, 'initURL', iframe['getUrl']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('iframe', iframe) : $p['setattr'](self, 'iframe', iframe); 
				return null;
			}
	, 1, [null,null,['self'],['baseURL']]);
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
					if (self.prototype['__md5__'] !== 'fa17da10a01a27694b06e7e8378309a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['iframe']['setUrl']($p['getattr'](self, 'initURL'));
				self['hide']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['DialogBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MyDialog', $p['tuple']($bases), $data);
		})();
		$m['MyDialogWindow'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Popups';
			$cls_definition['__md5__'] = 'aae51e121c78c1201e5ffce4ab865fef';
			$cls_definition['images'] = $p['list'](['JohannesElison.jpg', 'LaMarcheNocturne.jpg', 'SelfPortrait1628.jpg', 'SelfPortrait1640.jpg', 'TheArtistInHisStudio.jpg', 'TheReturnOfTheProdigalSon.jpg']);
			$method = $pyjs__bind_method2('__init__', function(baseURL) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					baseURL = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'aae51e121c78c1201e5ffce4ab865fef') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var imgname,img,closeButton,dock,msg;
				$pyjs_kwargs_call($m['DialogWindow'], '__init__', null, null, [{'modal':false, 'minimize':true, 'maximize':true, 'close':true}, self]);
				closeButton = $m['Button']('Close', self);
				imgname = self['images']['pop']($constant_int_0);
				self['images']['append'](imgname);
				self['setText']('Sample DialogWindow with embedded image');
				img = $m['Image']($p['sprintf']('%srembrandt/%s', $p['tuple']([baseURL, imgname])));
				msg = $m['HTML']($p['sprintf']("<center>This is an example of a standard dialog box component.<br>  You can put pretty much anything you like into it,<br>such as the following image '%s':</center>", imgname), true);
				dock = $m['DockPanel']();
				dock['setSpacing']($constant_int_4);
				dock['add'](closeButton, $p['getattr']($m['DockPanel'], 'SOUTH'));
				dock['add'](msg, $p['getattr']($m['DockPanel'], 'NORTH'));
				dock['add'](img, $p['getattr']($m['DockPanel'], 'CENTER'));
				dock['setCellHorizontalAlignment'](closeButton, $p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
				dock['setCellWidth'](img, '100%');
				dock['setWidth']('100%');
				self['setWidget'](dock);
				return null;
			}
	, 1, [null,null,['self'],['baseURL']]);
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
					if (self.prototype['__md5__'] !== 'aae51e121c78c1201e5ffce4ab865fef') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['hide']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['DialogWindow']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MyDialogWindow', $p['tuple']($bases), $data);
		})();
		$m['MyPopup'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Popups';
			$cls_definition['__md5__'] = '607585919570af52bb5187d22923c4a1';
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
					if (self.prototype['__md5__'] !== '607585919570af52bb5187d22923c4a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var contents;
				$m['PopupPanel']['__init__'](self, true);
				contents = $m['HTML']('Click anywhere outside this popup to make it disappear.');
				contents['setWidth']('128px');
				self['setWidget'](contents);
				self['setStyleName']('ks-popups-Popup');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['PopupPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('MyPopup', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sink.Popups */


/* end module: sink.Popups */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.DialogWindow.DialogWindow', 'pyjamas.ui.DialogWindow', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame', 'pyjamas.ui.HasAlignment', 'pyjamas.DOM']
*/
