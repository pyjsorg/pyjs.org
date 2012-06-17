/* start module: Photos */
$pyjs.loaded_modules['Photos'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Photos'].__was_initialized__) return $pyjs.loaded_modules['Photos'];
	var $m = $pyjs.loaded_modules["Photos"];
	$m.__repr__ = function() { return "<module: Photos>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Photos';
	$m.__name__ = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_4 = new $p['int'](4);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['json'] = $p['___import___']('json', null);
		$m['Photos'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'Photos';
			$cls_definition.__md5__ = '6de8b51470a7600f6118edce1491801d';
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
					if (self.prototype.__md5__ !== '6de8b51470a7600f6118edce1491801d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4;
				$m['Composite']['__init__'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('albums', $p['list']([])) : $p['setattr'](self, 'albums', $p['list']([])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('photos', $p['list']([])) : $p['setattr'](self, 'photos', $p['list']([])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('grid', $pyjs_kwargs_call(null, $m['Grid'], null, null, [{CellPadding:$constant_int_4, CellSpacing:$constant_int_4}, $constant_int_4, $constant_int_4])) : $p['setattr'](self, 'grid', $pyjs_kwargs_call(null, $m['Grid'], null, null, [{CellPadding:$constant_int_4, CellSpacing:$constant_int_4}, $constant_int_4, $constant_int_4])); 
				self['grid']['addTableListener'](self);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drill', $constant_int_0) : $p['setattr'](self, 'drill', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', $constant_int_0) : $p['setattr'](self, 'pos', $constant_int_0); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('up', $m['Button']('Up', self)) : $p['setattr'](self, 'up', $m['Button']('Up', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('next', $m['Button']('Next', self)) : $p['setattr'](self, 'next', $m['Button']('Next', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('prev', $m['Button']('Prev', self)) : $p['setattr'](self, 'prev', $m['Button']('Prev', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('timer', $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:self}])) : $p['setattr'](self, 'timer', $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:self}])); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('userid', 'jameskhedley') : $p['setattr'](self, 'userid', 'jameskhedley'); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('album_url', (typeof ($add3=(typeof ($add1='http://picasaweb.google.com/data/feed/base/user/')==typeof ($add2=$p['getattr'](self, 'userid')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4='?alt=json-in-script&kind=album&hl=en_US&callback=restCb') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))) : $p['setattr'](self, 'album_url', (typeof ($add3=(typeof ($add1='http://picasaweb.google.com/data/feed/base/user/')==typeof ($add2=$p['getattr'](self, 'userid')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4='?alt=json-in-script&kind=album&hl=en_US&callback=restCb') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))); 
				self['doRESTQuery']($p['getattr'](self, 'album_url'), $p['getattr'](self, 'timer'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vp', $m['VerticalPanel']()) : $p['setattr'](self, 'vp', $m['VerticalPanel']()); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('disclosure', $m['DisclosurePanel']('Click for boring technical details.')) : $p['setattr'](self, 'disclosure', $m['DisclosurePanel']('Click for boring technical details.')); 
				self['disclosure']['add']($m['HTML']("<p>OK so you want to write client JS to do a RESTful HTTP query from picasa right?\n\t\t\t\t Well you can't because of the Same Origin Policy. Basically this means that\n\t\t\t\t because the domain of the query and the domain of the hosted site are different,\n\t\t\t\t then that could well be a cross-site scripting (XSS) attack. So, the workaround is to\n\t\t\t\t do the call from a script tag so the JSON we get back is part of the document.\n\t\t\t\t But since we don't know what URL to hit yet, once we find out then we have to inject\n\t\t\t\t a new script tag dynamically which the browser will run as soon as we append it.\n\t\t\t\t To be honest I'm not 100% why Google use RESTful services and not JSON-RPC or somesuch,\n\t\t\t\t which would be easier. Well, easier for me."));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('IDPanel', $m['HorizontalPanel']()) : $p['setattr'](self, 'IDPanel', $m['HorizontalPanel']()); 
				self['IDPanel']['add']($m['Label']('Enter google account:'));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('IDButton', $m['Button']('Go', self)) : $p['setattr'](self, 'IDButton', $m['Button']('Go', self)); 
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('IDBox', $m['TextBox']()) : $p['setattr'](self, 'IDBox', $m['TextBox']()); 
				self['IDBox']['setText']($p['getattr'](self, 'userid'));
				self['IDPanel']['add']($p['getattr'](self, 'IDBox'));
				self['IDPanel']['add']($p['getattr'](self, 'IDButton'));
				self['vp']['add']($p['getattr'](self, 'IDPanel'));
				self['vp']['add']($p['getattr'](self, 'disclosure'));
				self['vp']['add']($p['getattr'](self, 'grid'));
				self['initWidget']($p['getattr'](self, 'vp'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('doRESTQuery', function(url, timer) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					timer = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6de8b51470a7600f6118edce1491801d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var new_script;
				new_script = $m['DOM']['createElement']('script');
				$m['DOM']['setElemAttribute'](new_script, 'src', url);
				$m['DOM']['setElemAttribute'](new_script, 'type', 'text/javascript');
				$doc['body']['appendChild'](new_script);
				self['timer']['schedule']($constant_int_100);
				return null;
			}
	, 1, [null,null,['self'],['url'],['timer']]);
			$cls_definition['doRESTQuery'] = $method;
			$method = $pyjs__bind_method2('onCellClicked', function(sender, row, col) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					row = arguments[2];
					col = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6de8b51470a7600f6118edce1491801d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add20,$8,photo,$6,$add26,album,$add28,$5,$add19,$add21,$add18,$add22,$add25,$add24,$add27,$3,$sub3,$sub2,$sub1,$sub4,hp,$add23,$add14,$add15,$add16,$bool1,$add10,$add11,$add12,$add13,$mul3,$7,$4,$mul4,$2,$mul2,$mul1,$1,$bool2,url,gridcols,$add17,$add6,$add7,$add5,$add8,$add9;
				if ((($bool1=$p['op_eq']($p['getattr'](self, 'drill'), $constant_int_0)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drill', (typeof ($add5=$p['getattr'](self, 'drill'))==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))) : $p['setattr'](self, 'drill', (typeof ($add5=$p['getattr'](self, 'drill'))==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))); 
					self['vp']['clear']();
					self['grid']['clear']();
					self['vp']['add']($p['getattr'](self, 'up'));
					self['vp']['add']($p['getattr'](self, 'grid'));
					gridcols = self['grid']['getColumnCount']();
					album = (typeof ($1=$p['getattr'](self, 'albums')).__array != 'undefined'?
						((typeof $1.__array[$2=(typeof ($add9=(typeof ($add7=row)==typeof ($add8=col) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)))==typeof ($add10=(typeof ($mul1=row)==typeof ($mul2=(typeof ($sub1=gridcols)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2))) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10))]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__((typeof ($add9=(typeof ($add7=row)==typeof ($add8=col) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)))==typeof ($add10=(typeof ($mul1=row)==typeof ($mul2=(typeof ($sub1=gridcols)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2))) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10))));
					url = (typeof ($add17=(typeof ($add15=(typeof ($add13=(typeof ($add11='http://picasaweb.google.com/data/feed/base/user/')==typeof ($add12=$p['getattr'](self, 'userid')) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)))==typeof ($add14='/albumid/') && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)))==typeof ($add16=(typeof ($3=album).__array != 'undefined'?
						((typeof $3.__array[$4='id']) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__('id'))) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)))==typeof ($add18='?alt=json-in-script&kind=photo&hl=en_US&callback=restCb') && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
					self['doRESTQuery'](url, $p['getattr'](self, 'timer'));
				}
				else if ((($bool2=$p['op_eq']($p['getattr'](self, 'drill'), $constant_int_1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drill', (typeof ($add19=$p['getattr'](self, 'drill'))==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20))) : $p['setattr'](self, 'drill', (typeof ($add19=$p['getattr'](self, 'drill'))==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20))); 
					gridcols = self['grid']['getColumnCount']();
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', (typeof ($add23=(typeof ($add21=row)==typeof ($add22=col) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)))==typeof ($add24=(typeof ($mul3=row)==typeof ($mul4=(typeof ($sub3=gridcols)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4))) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24))) : $p['setattr'](self, 'pos', (typeof ($add23=(typeof ($add21=row)==typeof ($add22=col) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)))==typeof ($add24=(typeof ($mul3=row)==typeof ($mul4=(typeof ($sub3=gridcols)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4))) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24))); 
					photo = (typeof ($5=$p['getattr'](self, 'photos')).__array != 'undefined'?
						((typeof $5.__array[$6=$p['getattr'](self, 'pos')]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($p['getattr'](self, 'pos')));
					self['vp']['clear']();
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fullsize', $m['HTML']((typeof ($add27=(typeof ($add25='<img src="')==typeof ($add26=(typeof ($7=photo).__array != 'undefined'?
						((typeof $7.__array[$8='full']) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__('full'))) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26)))==typeof ($add28='"/>') && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))) : $p['setattr'](self, 'fullsize', $m['HTML']((typeof ($add27=(typeof ($add25='<img src="')==typeof ($add26=(typeof ($7=photo).__array != 'undefined'?
						((typeof $7.__array[$8='full']) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__('full'))) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26)))==typeof ($add28='"/>') && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28)))); 
					hp = $m['HorizontalPanel']();
					hp['add']($p['getattr'](self, 'up'));
					hp['add']($p['getattr'](self, 'prev'));
					hp['add']($p['getattr'](self, 'next'));
					hp['setSpacing']($constant_int_8);
					self['vp']['add'](hp);
					self['vp']['add']($p['getattr'](self, 'fullsize'));
				}
				return null;
			}
	, 1, [null,null,['self'],['sender'],['row'],['col']]);
			$cls_definition['onCellClicked'] = $method;
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
					if (self.prototype.__md5__ !== '6de8b51470a7600f6118edce1491801d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,$bool11,$bool12,$9,$add29,$12,photo,$sub6,$sub5,$or1,$or2,$bool3,$bool6,$bool7,$bool4,$bool5,$10,$bool8,$bool9,$11,$cmp4,$add38,$cmp1,$cmp3,$cmp2,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$len1;
				if ((($bool3=$p['op_eq'](sender, $p['getattr'](self, 'IDButton'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('userid', self['IDBox']['getText']()) : $p['setattr'](self, 'userid', self['IDBox']['getText']()); 
					if ((($bool5=((($bool4=$or1=$p['op_eq']($p['getattr'](self, 'userid'), '')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:self['userid']['isdigit']())) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						return null;
					}
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drill', $constant_int_0) : $p['setattr'](self, 'drill', $constant_int_0); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('album_url', (typeof ($add31=(typeof ($add29='http://picasaweb.google.com/data/feed/base/user/')==typeof ($add30=$p['getattr'](self, 'userid')) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30)))==typeof ($add32='?alt=json-in-script&kind=album&hl=en_US&callback=restCb') && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32))) : $p['setattr'](self, 'album_url', (typeof ($add31=(typeof ($add29='http://picasaweb.google.com/data/feed/base/user/')==typeof ($add30=$p['getattr'](self, 'userid')) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						$p['op_add']($add29,$add30)))==typeof ($add32='?alt=json-in-script&kind=album&hl=en_US&callback=restCb') && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32))); 
					self['grid']['clear']();
					self['doRESTQuery']($p['getattr'](self, 'album_url'), $p['getattr'](self, 'timer'));
				}
				else {
					if ((($bool6=$p['op_eq']($p['getattr'](self, 'drill'), $constant_int_2)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						if ((($bool7=$p['op_eq'](sender, $p['getattr'](self, 'up'))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
							self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drill', $constant_int_1) : $p['setattr'](self, 'drill', $constant_int_1); 
							self['vp']['clear']();
							self['vp']['add']($p['getattr'](self, 'up'));
							self['vp']['add']($p['getattr'](self, 'grid'));
							self['fillGrid']($p['getattr'](self, 'photos'), 'photos');
						}
						else {
							if ((($bool8=$p['op_eq'](sender, $p['getattr'](self, 'next'))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
								if ((($bool9=((((($cmp1=$p['getattr'](self, 'pos'))===($cmp2=(($len1=$p['getattr'](self, 'photos')) === null?$constant_int_0:
									(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
										(typeof $len1.__len__ == 'function'?$len1.__len__():
											(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
												$p['len']($len1))))))?0:
									(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
										($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
										$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
									return null;
								}
								self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', (typeof ($add33=$p['getattr'](self, 'pos'))==typeof ($add34=$constant_int_1) && (typeof $add33=='number'||typeof $add33=='string')?
									$add33+$add34:
									$p['op_add']($add33,$add34))) : $p['setattr'](self, 'pos', (typeof ($add33=$p['getattr'](self, 'pos'))==typeof ($add34=$constant_int_1) && (typeof $add33=='number'||typeof $add33=='string')?
									$add33+$add34:
									$p['op_add']($add33,$add34))); 
							}
							else if ((($bool10=$p['op_eq'](sender, $p['getattr'](self, 'prev'))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
									false :
									(typeof $bool10=='object'?
										(typeof $bool10.__nonzero__=='function'?
											$bool10.__nonzero__() :
											(typeof $bool10.__len__=='function'?
												($bool10.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								if ((($bool11=((($cmp3=$p['getattr'](self, 'pos'))===($cmp4=$constant_int_1)?0:
									(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
										($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
										$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
									return null;
								}
								self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', (typeof ($sub5=$p['getattr'](self, 'pos'))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
									$sub5-$sub6:
									$p['op_sub']($sub5,$sub6))) : $p['setattr'](self, 'pos', (typeof ($sub5=$p['getattr'](self, 'pos'))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
									$sub5-$sub6:
									$p['op_sub']($sub5,$sub6))); 
							}
							photo = (typeof ($9=$p['getattr'](self, 'photos')).__array != 'undefined'?
								((typeof $9.__array[$10=$p['getattr'](self, 'pos')]) != 'undefined'?$9.__array[$10]:
									$9.__getitem__($10)):
									$9.__getitem__($p['getattr'](self, 'pos')));
							self['fullsize']['setHTML']((typeof ($add37=(typeof ($add35='<img src="')==typeof ($add36=(typeof ($11=photo).__array != 'undefined'?
								((typeof $11.__array[$12='full']) != 'undefined'?$11.__array[$12]:
									$11.__getitem__($12)):
									$11.__getitem__('full'))) && (typeof $add35=='number'||typeof $add35=='string')?
								$add35+$add36:
								$p['op_add']($add35,$add36)))==typeof ($add38='"/>') && (typeof $add37=='number'||typeof $add37=='string')?
								$add37+$add38:
								$p['op_add']($add37,$add38)));
						}
					}
					else if ((($bool12=$p['op_eq']($p['getattr'](self, 'drill'), $constant_int_1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('drill', $constant_int_0) : $p['setattr'](self, 'drill', $constant_int_0); 
						self['vp']['clear']();
						self['vp']['add']($p['getattr'](self, 'IDPanel'));
						self['vp']['add']($p['getattr'](self, 'disclosure'));
						self['vp']['add']($p['getattr'](self, 'grid'));
						self['fillGrid']($p['getattr'](self, 'albums'), 'albums');
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			$method = $pyjs__bind_method2('onTimer', function(timer) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					timer = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6de8b51470a7600f6118edce1491801d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool13,$bool14,$bool15,fd,receiver;
				fd = $doc['getElementById']('__pygwt_hiddenData');
				receiver = $p['getattr'](fd, 'innerHTML');
				if ((($bool13=$p['op_eq'](receiver, 'wait')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					self['timer']['schedule']($constant_int_1000);
					return null;
				}
				fd.__is_instance__ && typeof fd.__setattr__ == 'function' ? fd.__setattr__('innerHTML', 'wait') : $p['setattr'](fd, 'innerHTML', 'wait'); 
				if ((($bool14=$p['op_eq']($p['getattr'](self, 'drill'), $constant_int_0)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					self['parseAlbums'](receiver);
					self['fillGrid']($p['getattr'](self, 'albums'), 'albums');
				}
				else if ((($bool15=$p['op_eq']($p['getattr'](self, 'drill'), $constant_int_1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					self['parsePhotos'](receiver);
					self['fillGrid']($p['getattr'](self, 'photos'), 'photos');
				}
				return null;
			}
	, 1, [null,null,['self'],['timer']]);
			$cls_definition['onTimer'] = $method;
			$method = $pyjs__bind_method2('fillGrid', function(items, type) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					items = arguments[1];
					type = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6de8b51470a7600f6118edce1491801d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var cols,$bool16,$iter1_iter,vp,$mod1,$mod2,rows,$21,$20,$22,$24,$add40,$iter1_array,$iter1_idx,$iter1_nextval,$17,$div2,$div3,$div1,$div4,$14,$15,$16,$add39,$iter1_type,$13,i,$18,$19,$len2,$len3,$23;
				self['grid']['clear']();
				cols = self['grid']['getColumnCount']();
				self['grid']['resizeRows']((typeof ($add39=(typeof ($div1=(($len2=items) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))))==typeof ($div2=cols) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40)));
				rows = self['grid']['getRowCount']();
				$iter1_iter = $p['range']((($len3=items) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3))))));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					vp = $m['VerticalPanel']();
					if ((($bool16=$p['op_eq'](type, 'photos')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
						vp['add']((typeof ($15=(typeof ($13=items).__array != 'undefined'?
							((typeof $13.__array[$14=i]) != 'undefined'?$13.__array[$14]:
								$13.__getitem__($14)):
								$13.__getitem__(i))).__array != 'undefined'?
							((typeof $15.__array[$16='thumb']) != 'undefined'?$15.__array[$16]:
								$15.__getitem__($16)):
								$15.__getitem__('thumb')));
					}
					else {
						vp['add']((typeof ($19=(typeof ($17=items).__array != 'undefined'?
							((typeof $17.__array[$18=i]) != 'undefined'?$17.__array[$18]:
								$17.__getitem__($18)):
								$17.__getitem__(i))).__array != 'undefined'?
							((typeof $19.__array[$20='thumb']) != 'undefined'?$19.__array[$20]:
								$19.__getitem__($20)):
								$19.__getitem__('thumb')));
						vp['add']((typeof ($23=(typeof ($21=items).__array != 'undefined'?
							((typeof $21.__array[$22=i]) != 'undefined'?$21.__array[$22]:
								$21.__getitem__($22)):
								$21.__getitem__(i))).__array != 'undefined'?
							((typeof $23.__array[$24='title']) != 'undefined'?$23.__array[$24]:
								$23.__getitem__($24)):
								$23.__getitem__('title')));
					}
					self['grid']['setWidget']($p['int']((typeof ($div3=i)==typeof ($div4=cols) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))), (typeof ($mod1=i)==typeof ($mod2=cols) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2)), vp);
				}
				return null;
			}
	, 1, [null,null,['self'],['items'],['type']]);
			$cls_definition['fillGrid'] = $method;
			$method = $pyjs__bind_method2('parsePhotos', function(items) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					items = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6de8b51470a7600f6118edce1491801d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var aphoto,$add41,$29,$28,$iter2_iter,$add44,$25,$add42,$27,$26,$add43,ph,$40,$iter2_type,$iter2_idx,$iter2_nextval,photo_list,$38,$39,$36,$34,$35,$32,$33,$30,$31,$37,$iter2_array;
				photo_list = $m['json']['loads'](items);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('photos', $p['list']([])) : $p['setattr'](self, 'photos', $p['list']([])); 
				$iter2_iter = photo_list;
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					ph = $iter2_nextval;
					aphoto = $p['dict']([]);
					aphoto.__setitem__('thumb', $m['HTML']((typeof ($add43=(typeof ($add41='<img src="')==typeof ($add42=(typeof ($31=(typeof ($29=(typeof ($27=(typeof ($25=ph).__array != 'undefined'?
						((typeof $25.__array[$26='media$group']) != 'undefined'?$25.__array[$26]:
							$25.__getitem__($26)):
							$25.__getitem__('media$group'))).__array != 'undefined'?
						((typeof $27.__array[$28='media$thumbnail']) != 'undefined'?$27.__array[$28]:
							$27.__getitem__($28)):
							$27.__getitem__('media$thumbnail'))).__array != 'undefined'?
						((typeof $29.__array[$30=$constant_int_1]) != 'undefined'?$29.__array[$30]:
							$29.__getitem__($30)):
							$29.__getitem__($constant_int_1))).__array != 'undefined'?
						((typeof $31.__array[$32='url']) != 'undefined'?$31.__array[$32]:
							$31.__getitem__($32)):
							$31.__getitem__('url'))) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42)))==typeof ($add44='"/>') && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44))));
					aphoto.__setitem__('full', (typeof ($39=(typeof ($37=(typeof ($35=(typeof ($33=ph).__array != 'undefined'?
						((typeof $33.__array[$34='media$group']) != 'undefined'?$33.__array[$34]:
							$33.__getitem__($34)):
							$33.__getitem__('media$group'))).__array != 'undefined'?
						((typeof $35.__array[$36='media$content']) != 'undefined'?$35.__array[$36]:
							$35.__getitem__($36)):
							$35.__getitem__('media$content'))).__array != 'undefined'?
						((typeof $37.__array[$38=$constant_int_0]) != 'undefined'?$37.__array[$38]:
							$37.__getitem__($38)):
							$37.__getitem__($constant_int_0))).__array != 'undefined'?
						((typeof $39.__array[$40='url']) != 'undefined'?$39.__array[$40]:
							$39.__getitem__($40)):
							$39.__getitem__('url')));
					self['photos']['append'](aphoto);
				}
				return null;
			}
	, 1, [null,null,['self'],['items']]);
			$cls_definition['parsePhotos'] = $method;
			$method = $pyjs__bind_method2('parseAlbums', function(items) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					items = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6de8b51470a7600f6118edce1491801d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_type,al,album_list,analbum,$iter3_idx,$add48,$add47,$add46,$49,$48,$iter3_iter,$43,$42,$41,$47,$46,$45,$44,$60,$iter3_array,$53,url,$55,$58,$59,$50,$51,$52,$add45,$54,$iter3_nextval,$56,$57;
				album_list = $m['json']['loads'](items);
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('albums', $p['list']([])) : $p['setattr'](self, 'albums', $p['list']([])); 
				$iter3_iter = album_list;
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					al = $iter3_nextval;
					analbum = $p['dict']([]);
					analbum.__setitem__('title', $m['HTML']((typeof ($43=(typeof ($41=al).__array != 'undefined'?
						((typeof $41.__array[$42='title']) != 'undefined'?$41.__array[$42]:
							$41.__getitem__($42)):
							$41.__getitem__('title'))).__array != 'undefined'?
						((typeof $43.__array[$44='$t']) != 'undefined'?$43.__array[$44]:
							$43.__getitem__($44)):
							$43.__getitem__('$t'))));
					analbum.__setitem__('thumb', $m['HTML']((typeof ($add47=(typeof ($add45='<img src="')==typeof ($add46=(typeof ($51=(typeof ($49=(typeof ($47=(typeof ($45=al).__array != 'undefined'?
						((typeof $45.__array[$46='media$group']) != 'undefined'?$45.__array[$46]:
							$45.__getitem__($46)):
							$45.__getitem__('media$group'))).__array != 'undefined'?
						((typeof $47.__array[$48='media$thumbnail']) != 'undefined'?$47.__array[$48]:
							$47.__getitem__($48)):
							$47.__getitem__('media$thumbnail'))).__array != 'undefined'?
						((typeof $49.__array[$50=$constant_int_0]) != 'undefined'?$49.__array[$50]:
							$49.__getitem__($50)):
							$49.__getitem__($constant_int_0))).__array != 'undefined'?
						((typeof $51.__array[$52='url']) != 'undefined'?$51.__array[$52]:
							$51.__getitem__($52)):
							$51.__getitem__('url'))) && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46)))==typeof ($add48='"/>') && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48))));
					url = (typeof ($55=(typeof ($53=al).__array != 'undefined'?
						((typeof $53.__array[$54='id']) != 'undefined'?$53.__array[$54]:
							$53.__getitem__($54)):
							$53.__getitem__('id'))).__array != 'undefined'?
						((typeof $55.__array[$56='$t']) != 'undefined'?$55.__array[$56]:
							$55.__getitem__($56)):
							$55.__getitem__('$t'));
					analbum.__setitem__('id', (typeof ($59=(typeof ($57=url['$$split']('albumid/')).__array != 'undefined'?
						((typeof $57.__array[$58=$constant_int_1]) != 'undefined'?$57.__array[$58]:
							$57.__getitem__($58)):
							$57.__getitem__($constant_int_1))['$$split']('?alt')).__array != 'undefined'?
						((typeof $59.__array[$60=$constant_int_0]) != 'undefined'?$59.__array[$60]:
							$59.__getitem__($60)):
							$59.__getitem__($constant_int_0)));
					self['albums']['append'](analbum);
				}
				return null;
			}
	, 1, [null,null,['self'],['items']]);
			$cls_definition['parseAlbums'] = $method;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Photos', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Photos */


/* end module: Photos */


/*
PYJS_DEPS: ['pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.DOM', 'json']
*/
