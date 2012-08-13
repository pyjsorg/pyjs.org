/* start module: pyjamas.Canvas.ImageLoader */
$pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.ImageLoader>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ImageLoader';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['ImageLoader'] = $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_0 = new $p['int'](0);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.Canvas', null, false);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.Canvas', null, false);
		$m['imageLoaders'] = $p['list']([]);
		$m['ImageLoader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.ImageLoader';
			$cls_definition['__md5__'] = '0f83ec27f237870c129c4fe6f309d8a9';
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
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', $p['list']([])) : $p['setattr'](self, 'images', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callBack', null) : $p['setattr'](self, 'callBack', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loadedImages', $constant_int_0) : $p['setattr'](self, 'loadedImages', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('totalImages', $constant_int_0) : $p['setattr'](self, 'totalImages', $constant_int_0); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onImageLoad', $p['getattr'](self, 'onLoad')) : $p['setattr'](self, 'onImageLoad', $p['getattr'](self, 'onLoad')); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addHandle', function(img) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					img = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('totalImages', (typeof ($add1=$p['getattr'](self, 'totalImages'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) : $p['setattr'](self, 'totalImages', (typeof ($add1=$p['getattr'](self, 'totalImages'))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))); 
				self['images']['append'](img);
				return null;
			}
	, 1, [null,null,['self'],['img']]);
			$cls_definition['addHandle'] = $method;
			$method = $pyjs__bind_method2('dispatchIfComplete', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,$and1,$bool1,$and2;
				if ((($bool2=((($bool1=$and1=!$p['op_is']($p['getattr'](self, 'callBack'), null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?self['isAllLoaded']():$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['callBack']['onImagesLoaded']($p['getattr'](self, 'images'));
					$m['imageLoaders']['remove'](self);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['dispatchIfComplete'] = $method;
			$method = $pyjs__bind_method2('finalize', function(cb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callBack', cb) : $p['setattr'](self, 'callBack', cb); 
				return null;
			}
	, 1, [null,null,['self'],['cb']]);
			$cls_definition['finalize'] = $method;
			$method = $pyjs__bind_method2('incrementLoadedImages', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loadedImages', (typeof ($add3=$p['getattr'](self, 'loadedImages'))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))) : $p['setattr'](self, 'loadedImages', (typeof ($add3=$p['getattr'](self, 'loadedImages'))==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['incrementLoadedImages'] = $method;
			$method = $pyjs__bind_method2('isAllLoaded', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['op_eq']($p['getattr'](self, 'loadedImages'), $p['getattr'](self, 'totalImages'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['isAllLoaded'] = $method;
			$method = $pyjs__bind_method2('prepareImage', function(url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var img;
				img = $m['Image']();
				img['__is_instance__'] && typeof img['__setattr__'] == 'function' ? img['__setattr__']('__isLoaded', false) : $p['setattr'](img, '__isLoaded', false); 
				img['addLoadListener'](self);
				$m['DOM']['setEventListener'](img['getElement'](), img);
				$m['DOM']['sinkEvents'](img['getElement'](), $p['getattr']($m['Event'], 'ONLOAD'));
				return img;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['prepareImage'] = $method;
			$method = $pyjs__bind_method2('onLoad', function(img) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					img = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3,$bool4;
				if ((($bool4=!(($bool3=$p['getattr'](img, '__isLoaded')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3['__nonzero__']=='function'?
							$bool3['__nonzero__']() :
							(typeof $bool3['__len__']=='function'?
								($bool3['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					img['__is_instance__'] && typeof img['__setattr__'] == 'function' ? img['__setattr__']('__isLoaded', true) : $p['setattr'](img, '__isLoaded', true); 
					self['incrementLoadedImages']();
					img['removeLoadListener'](self);
				}
				self['dispatchIfComplete']();
				return img;
				return null;
			}
	, 1, [null,null,['self'],['img']]);
			$cls_definition['onLoad'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ImageLoader', $p['tuple']($bases), $data);
		})();
		$m['loadImages'] = function(urls, cb) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter1_iter,il,$iter2_type,$iter2_iter,$iter1_array,$iter1_nextval,$iter2_idx,$6,$4,$5,$2,$3,$1,$iter2_nextval,$iter1_type,i,$len2,$iter1_idx,$len1,$iter2_array;
			il = $m['ImageLoader']();
			$iter1_iter = $p['range']((($len1=urls) === null?$constant_int_0:
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
				il['addHandle'](il['prepareImage']((typeof ($1=urls)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i))));
			}
			il['finalize'](cb);
			$m['imageLoaders']['append'](il);
			$iter2_iter = $p['range']((($len2=urls) === null?$constant_int_0:
				(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
							$p['len']($len2))))));
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				(typeof ($3=$p['getattr'](il, 'images'))['__array'] != 'undefined'?
					((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](i))['setUrl']((typeof ($5=urls)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](i)));
			}
			return null;
		};
		$m['loadImages']['__name__'] = 'loadImages';

		$m['loadImages']['__bind_type__'] = 0;
		$m['loadImages']['__args__'] = [null,null,['urls'],['cb']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.ImageLoader */


/* end module: pyjamas.Canvas.ImageLoader */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Image.Image', 'pyjamas.ui', 'pyjamas.ui.Image', 'pyjamas.ui.Event']
*/
