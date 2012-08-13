/* start module: pyjamas.ui.DisclosurePanel */
$pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DisclosurePanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DisclosurePanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DisclosurePanel'] = $pyjs['loaded_modules']['pyjamas.ui.DisclosurePanel'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas.ui');
		$m['ClickableHeader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DisclosurePanel';
			$cls_definition['__md5__'] = 'bdbc2cb00748a7b8ac178522411df6a9';
			$method = $pyjs__bind_method2('__init__', function(disclosurePanel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					disclosurePanel = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'bdbc2cb00748a7b8ac178522411df6a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof disclosurePanel != 'undefined') {
						if (disclosurePanel !== null && typeof disclosurePanel['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = disclosurePanel;
							disclosurePanel = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var element;
				element = kwargs['pop']('Element', $m['DOM']['createAnchor']());
				$m['SimplePanel']['__init__'](self, element);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('disclosurePanel', disclosurePanel) : $p['setattr'](self, 'disclosurePanel', disclosurePanel); 
				element = self['getElement']();
				$m['DOM']['setAttribute'](element, 'href', 'javascript:void(0);');
				$m['DOM']['setStyleAttribute'](element, 'display', 'block');
				self['sinkEvents']($p['getattr']($m['Event'], 'ONCLICK'));
				self['setStyleName']('header');
				return null;
			}
	, 1, [null,['kwargs'],['self'],['disclosurePanel']]);
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
					if (self.prototype['__md5__'] !== 'bdbc2cb00748a7b8ac178522411df6a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newstate,$bool2,$bool1,etype;
				etype = $m['DOM']['eventGetType'](event);
				if ((($bool1=$p['op_eq'](etype, 'click')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$m['DOM']['eventPreventDefault'](event);
					newstate = !(($bool2=self['disclosurePanel']['getOpen']()) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2['__nonzero__']=='function'?
								$bool2['__nonzero__']() :
								(typeof $bool2['__len__']=='function'?
									($bool2['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) );
					self['disclosurePanel']['setOpen'](newstate);
				}
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			var $bases = new Array($m['SimplePanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ClickableHeader', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DisclosurePanel', 'ClickableHeader', $m['ClickableHeader']);
		$m['DefaultHeader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DisclosurePanel';
			$cls_definition['__md5__'] = '8287f47c708be66b27c7d672e80cc1e3';
			$method = $pyjs__bind_method2('__init__', function(text, images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					images = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8287f47c708be66b27c7d672e80cc1e3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof images == 'undefined') images=arguments['callee']['__args__'][4][1];

				$m['Widget']['__init__'](self);
				self['setImageBase'](images);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('root', $m['DOM']['createTable']()) : $p['setattr'](self, 'root', $m['DOM']['createTable']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tbody', $m['DOM']['createTBody']()) : $p['setattr'](self, 'tbody', $m['DOM']['createTBody']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tr', $m['DOM']['createTR']()) : $p['setattr'](self, 'tr', $m['DOM']['createTR']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('imageTD', $m['DOM']['createTD']()) : $p['setattr'](self, 'imageTD', $m['DOM']['createTD']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('labelTD', $m['DOM']['createTD']()) : $p['setattr'](self, 'labelTD', $m['DOM']['createTD']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('imgElem', $m['DOM']['createImg']()) : $p['setattr'](self, 'imgElem', $m['DOM']['createImg']()); 
				self['setElement']($p['getattr'](self, 'root'));
				$m['DOM']['appendChild']($p['getattr'](self, 'root'), $p['getattr'](self, 'tbody'));
				$m['DOM']['appendChild']($p['getattr'](self, 'tbody'), $p['getattr'](self, 'tr'));
				$m['DOM']['appendChild']($p['getattr'](self, 'tr'), $p['getattr'](self, 'imageTD'));
				$m['DOM']['appendChild']($p['getattr'](self, 'tr'), $p['getattr'](self, 'labelTD'));
				$m['DOM']['appendChild']($p['getattr'](self, 'imageTD'), $p['getattr'](self, 'imgElem'));
				self['setText'](text);
				return null;
			}
	, 1, [null,null,['self'],['text'],['images', true]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('getText', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8287f47c708be66b27c7d672e80cc1e3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['DOM']['getInnerText']($p['getattr'](self, 'labelTD'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getText'] = $method;
			$method = $pyjs__bind_method2('setText', function(text) {
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
					if (self.prototype['__md5__'] !== '8287f47c708be66b27c7d672e80cc1e3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['DOM']['setInnerText']($p['getattr'](self, 'labelTD'), text);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['setText'] = $method;
			$method = $pyjs__bind_method2('onOpen', function(panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					panel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8287f47c708be66b27c7d672e80cc1e3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['updateState'](true);
				return null;
			}
	, 1, [null,null,['self'],['panel']]);
			$cls_definition['onOpen'] = $method;
			$method = $pyjs__bind_method2('onClose', function(panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					panel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8287f47c708be66b27c7d672e80cc1e3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['updateState'](false);
				return null;
			}
	, 1, [null,null,['self'],['panel']]);
			$cls_definition['onClose'] = $method;
			$method = $pyjs__bind_method2('setImageBase', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8287f47c708be66b27c7d672e80cc1e3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('imageBase', $m['pygwt']['getImageBaseURL'](images)) : $p['setattr'](self, 'imageBase', $m['pygwt']['getImageBaseURL'](images)); 
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['setImageBase'] = $method;
			$method = $pyjs__bind_method2('updateState', function(setOpen) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					setOpen = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8287f47c708be66b27c7d672e80cc1e3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add2,$bool3,$add1,$add4;
				if ((($bool3=setOpen) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$m['DOM']['setAttribute']($p['getattr'](self, 'imgElem'), 'src', (typeof ($add1=$p['getattr'](self, 'imageBase'))==typeof ($add2='disclosurePanelOpen.png') && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)));
				}
				else {
					$m['DOM']['setAttribute']($p['getattr'](self, 'imgElem'), 'src', (typeof ($add3=$p['getattr'](self, 'imageBase'))==typeof ($add4='disclosurePanelClosed.png') && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)));
				}
				return null;
			}
	, 1, [null,null,['self'],['setOpen']]);
			$cls_definition['updateState'] = $method;
			var $bases = new Array($m['Widget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DefaultHeader', $p['tuple']($bases), $data);
		})();
		$m['DisclosurePanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DisclosurePanel';
			$cls_definition['__md5__'] = '6bcc88b96ab8001e103edaa03eee04f5';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var headerText,header,$len2,headerWidget,$or1,isOpen,$or2,headerContent,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$2,$1,element,$assign1,$len1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('handlers', $p['list']([])) : $p['setattr'](self, 'handlers', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('content', null) : $p['setattr'](self, 'content', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', false) : $p['setattr'](self, 'images', false); 
				element = kwargs['pop']('Element', null);
				$assign1 = null;
				headerText = $assign1;
				headerWidget = $assign1;
				isOpen = false;
				if ((($bool4=$p['op_eq']((($len1=args) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), $constant_int_1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					header = (typeof ($1=args)['__array'] != 'undefined'?
						((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__']($constant_int_0));
				}
				if ((($bool5=$p['op_eq']((($len2=args) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))), $constant_int_2)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					var $tupleassign1 = $p['__ass_unpack']($p['__getslice'](args, 0, $constant_int_2), 2, null);
					header = $tupleassign1[0];
					isOpen = $tupleassign1[1];
				}
				if ((($bool6=$p['isinstance'](header, $p['basestring'])) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					headerText = header;
				}
				else {
					headerWidget = header;
				}
				isOpen = kwargs['pop']('isOpen', isOpen);
				headerText = kwargs['pop']('header', headerText);
				headerWidget = kwargs['pop']('header', headerWidget);
				headerContent = headerWidget;
				if ((($bool8=((($bool7=$or1=!$p['op_is'](headerText, null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7['__nonzero__']=='function'?
							$bool7['__nonzero__']() :
							(typeof $bool7['__len__']=='function'?
								($bool7['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['op_is'](headerContent, null))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					if ((($bool9=$p['op_is'](headerText, null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						headerText = '';
					}
					headerContent = $m['DefaultHeader'](headerText);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mainPanel', $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Element':element}])) : $p['setattr'](self, 'mainPanel', $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'Element':element}])); 
				self['_init_header'](headerContent);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('contentWrapper', $m['SimplePanel']()) : $p['setattr'](self, 'contentWrapper', $m['SimplePanel']()); 
				self['mainPanel']['add']($p['getattr'](self, 'header'));
				self['mainPanel']['add']($p['getattr'](self, 'contentWrapper'));
				$m['DOM']['setStyleAttribute'](self['contentWrapper']['getElement'](), 'padding', '0px');
				$m['DOM']['setStyleAttribute'](self['contentWrapper']['getElement'](), 'overflow', 'hidden');
				kwargs['__setitem__']('StyleName', kwargs['get']('StyleName', 'gwt-DisclosurePanel'));
				$pyjs_kwargs_call($m['Composite'], '__init__', null, kwargs, [{}, self, $p['getattr'](self, 'mainPanel')]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isOpen', null) : $p['setattr'](self, 'isOpen', null); 
				self['setOpen'](isOpen);
				self['setContentDisplay']();
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_init_header', function(headerContent) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					headerContent = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('header', $m['ClickableHeader'](self)) : $p['setattr'](self, 'header', $m['ClickableHeader'](self)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('headerObj', headerContent) : $p['setattr'](self, 'headerObj', headerContent); 
				self['addEventHandler']($p['getattr'](self, 'headerObj'));
				self['setHeader']($p['getattr'](self, 'headerObj'));
				return null;
			}
	, 1, [null,null,['self'],['headerContent']]);
			$cls_definition['_init_header'] = $method;
			$method = $pyjs__bind_method2('add', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10;
				if ((($bool10=$p['op_is'](self['getContent'](), null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					self['setContent'](widget);
				}
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['add'] = $method;
			$method = $pyjs__bind_method2('addEventHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['handlers']['append'](handler);
				return null;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addEventHandler'] = $method;
			$method = $pyjs__bind_method2('removeEventHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['handlers']['remove'](handler);
				return null;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['removeEventHandler'] = $method;
			$method = $pyjs__bind_method2('clear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setContent'](null);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$method = $pyjs__bind_method2('getContent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'content');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getContent'] = $method;
			$method = $pyjs__bind_method2('getHeader', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return self['header']['getWidget']();
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHeader'] = $method;
			$method = $pyjs__bind_method2('getOpen', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'isOpen');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getOpen'] = $method;
			$method = $pyjs__bind_method2('getImages', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'images');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImages'] = $method;
			$method = $pyjs__bind_method2('remove', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool11;
				if ((($bool11=$p['op_eq'](widget, self['getContent']())) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					self['setContent'](null);
					return true;
				}
				return false;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$method = $pyjs__bind_method2('setContent', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$bool13;
				if ((($bool12=!$p['op_is']($p['getattr'](self, 'content'), null)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					self['contentWrapper']['setWidget'](null);
					self['content']['removeStyleName']('content');
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('content', widget) : $p['setattr'](self, 'content', widget); 
				if ((($bool13=!$p['op_is']($p['getattr'](self, 'content'), null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					self['contentWrapper']['setWidget']($p['getattr'](self, 'content'));
					self['content']['addStyleName']('content');
					self['setContentDisplay']();
				}
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['setContent'] = $method;
			$method = $pyjs__bind_method2('setHeader', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['header']['setWidget'](widget);
				return null;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['setHeader'] = $method;
			$method = $pyjs__bind_method2('setOpen', function(isOpen) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					isOpen = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool14;
				if ((($bool14=$p['op_eq']($p['getattr'](self, 'isOpen'), isOpen)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('isOpen', isOpen) : $p['setattr'](self, 'isOpen', isOpen); 
				self['setContentDisplay']();
				self['fireEvent']();
				return null;
			}
	, 1, [null,null,['self'],['isOpen']]);
			$cls_definition['setOpen'] = $method;
			$method = $pyjs__bind_method2('setImages', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$bool15,$bool16,$bool17,header,$and2;
				if ((($bool15=$p['op_eq']($p['getattr'](self, 'images'), images)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', images) : $p['setattr'](self, 'images', images); 
				header = self['getHeader']();
				if ((($bool17=((($bool16=$and1=!$p['op_is'](header, null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16['__nonzero__']=='function'?
							$bool16['__nonzero__']() :
							(typeof $bool16['__len__']=='function'?
								($bool16['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['isinstance'](header, $m['DefaultHeader']):$and1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					header['setImageBase'](images);
					header['updateState'](self['getOpen']());
				}
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['setImages'] = $method;
			$method = $pyjs__bind_method2('fireEvent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$iter1_nextval,$iter1_type,$iter1_iter,handler,$iter1_array,$iter1_idx;
				$iter1_iter = $p['getattr'](self, 'handlers');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					handler = $iter1_nextval;
					if ((($bool18=$p['getattr'](self, 'isOpen')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						handler['onOpen'](self);
					}
					else {
						handler['onClose'](self);
					}
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['fireEvent'] = $method;
			$method = $pyjs__bind_method2('setContentDisplay', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6bcc88b96ab8001e103edaa03eee04f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool19;
				if ((($bool19=$p['getattr'](self, 'isOpen')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
						false :
						(typeof $bool19=='object'?
							(typeof $bool19['__nonzero__']=='function'?
								$bool19['__nonzero__']() :
								(typeof $bool19['__len__']=='function'?
									($bool19['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['addStyleName']('open');
					self['removeStyleName']('closed');
				}
				else {
					self['addStyleName']('closed');
					self['removeStyleName']('open');
				}
				self['contentWrapper']['setVisible']($p['getattr'](self, 'isOpen'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['setContentDisplay'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DisclosurePanel', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DisclosurePanel', 'DisclosurePanel', $m['DisclosurePanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DisclosurePanel */


/* end module: pyjamas.ui.DisclosurePanel */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.Factory', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Event', 'pyjamas.DOM', 'pygwt']
*/
