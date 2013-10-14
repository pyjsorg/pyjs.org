/* start module: pyjamas.Canvas.SVGCanvas */
$pyjs['loaded_modules']['pyjamas.Canvas.SVGCanvas'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.SVGCanvas']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.SVGCanvas'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.SVGCanvas'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.SVGCanvas>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.SVGCanvas';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['SVGCanvas'] = $pyjs['loaded_modules']['pyjamas.Canvas.SVGCanvas'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_150 = new $p['int'](150);
		var $constant_int_4 = new $p['int'](4);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
		$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.Canvas', null, false);
		$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.Canvas', null, false);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
		$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
		$m['SOURCE_OVER'] = 'source-over';
		$m['DESTINATION_OVER'] = 'destination-over';
		$m['BUTT'] = 'butt';
		$m['ROUND'] = 'round';
		$m['SQUARE'] = 'square';
		$m['MITER'] = 'miter';
		$m['ROUND'] = 'round';
		$m['BEVEL'] = 'bevel';
		$m['SVGCanvasGradient'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.SVGCanvas';
			$cls_definition['__md5__'] = '9815e5ca6f78acb6bda8db943d3f496f';
			$method = $pyjs__bind_method2('__init__', function(defs_elem, elem_type, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					defs_elem = arguments[1];
					elem_type = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9815e5ca6f78acb6bda8db943d3f496f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add2,$add1,$add4;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defs_elem', defs_elem) : $p['setattr'](self, 'defs_elem', defs_elem); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas_width', $p['float'](width)) : $p['setattr'](self, 'canvas_width', $p['float'](width)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas_height', $p['float'](height)) : $p['setattr'](self, 'canvas_height', $p['float'](height)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('elem', self['_createElementSVG'](elem_type)) : $p['setattr'](self, 'elem', self['_createElementSVG'](elem_type)); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('id', (typeof ($add3='grad')==typeof ($add4=$p['str']((typeof ($add1=$m['DOM']['getChildCount'](defs_elem))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))) : $p['setattr'](self, 'id', (typeof ($add3='grad')==typeof ($add4=$p['str']((typeof ($add1=$m['DOM']['getChildCount'](defs_elem))==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))); 
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'id', $p['getattr'](self, 'id'));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'gradientUnits', 'userSpaceOnUse');
				$m['DOM']['appendChild'](defs_elem, $p['getattr'](self, 'elem'));
				return null;
			}
	, 1, [null,null,['self'],['defs_elem'],['elem_type'],['width'],['height']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_get_svg_coord_percent', function(coordXY) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					coordXY = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9815e5ca6f78acb6bda8db943d3f496f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul4,$mul3,$3,newX,newY,$div4,$div2,$div3,$4,$div1,$2,$mul2,$mul1,$1;
				newX = $p['int']((typeof ($mul1=(typeof ($div1=(typeof ($1=coordXY)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0)))==typeof ($div2=$p['getattr'](self, 'canvas_width')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))==typeof ($mul2=100.0) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				newY = $p['int']((typeof ($mul3=(typeof ($div3=(typeof ($3=coordXY)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$constant_int_1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($constant_int_1)))==typeof ($div4=$p['getattr'](self, 'canvas_height')) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))==typeof ($mul4=100.0) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)));
				return $p['tuple']([newX, newY]);
			}
	, 1, [null,null,['self'],['coordXY']]);
			$cls_definition['_get_svg_coord_percent'] = $method;
			$method = $pyjs__bind_method2('addColorStop', function(offset, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9815e5ca6f78acb6bda8db943d3f496f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add5,stop,$add6,$mul6,$mul5;
				stop = self['_createElementSVG']('stop');
				stop['setAttributeNS'](null, 'stop-color', color);
				offset = $p['int']((typeof ($mul5=offset)==typeof ($mul6=$constant_int_100) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
				offset = (typeof ($add5=$p['str'](offset))==typeof ($add6='%') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				stop['setAttributeNS'](null, 'offset', offset);
				$m['DOM']['appendChild']($p['getattr'](self, 'elem'), stop);
				return null;
			}
	, 1, [null,null,['self'],['offset'],['color']]);
			$cls_definition['addColorStop'] = $method;
			$method = $pyjs__bind_method2('_createElementSVG', function(name) {
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
					if (self.prototype['__md5__'] !== '9815e5ca6f78acb6bda8db943d3f496f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $doc['createElementNS']('http://www.w3.org/2000/svg', name);
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['_createElementSVG'] = $method;
			$method = $pyjs__bind_method2('getColor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9815e5ca6f78acb6bda8db943d3f496f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add8,$add9,$add10,$add7;
				return (typeof ($add9=(typeof ($add7='url(#')==typeof ($add8=$p['getattr'](self, 'id')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($add10=')') && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getColor'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SVGCanvasGradient', $p['tuple']($bases), $data);
		})();
		$m['SVGCanvasLinearGradient'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.SVGCanvas';
			$cls_definition['__md5__'] = '14c525da7f162dd352e171184b9fe0b7';
			$method = $pyjs__bind_method2('__init__', function(defs_elem, width, height, x1, y1, x2, y2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					defs_elem = arguments[1];
					width = arguments[2];
					height = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					x2 = arguments[6];
					y2 = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 8) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '14c525da7f162dd352e171184b9fe0b7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,$add13,startXY,$5,$add14,$add15,$add16,$add17,$add11,$8,$9,$6,$7,endXY,$add18,$10,$11,$12;
				$m['SVGCanvasGradient']['__init__'](self, defs_elem, 'linearGradient', width, height);
				startXY = self['_get_svg_coord_percent']($p['tuple']([x1, y1]));
				endXY = self['_get_svg_coord_percent']($p['tuple']([x2, y2]));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'x1', (typeof ($add11=$p['str']((typeof ($5=startXY)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_0))))==typeof ($add12='%') && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'y1', (typeof ($add13=$p['str']((typeof ($7=startXY)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_1]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_1))))==typeof ($add14='%') && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'x2', (typeof ($add15=$p['str']((typeof ($9=endXY)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=$constant_int_0]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']($constant_int_0))))==typeof ($add16='%') && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'y2', (typeof ($add17=$p['str']((typeof ($11=endXY)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=$constant_int_1]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__']($constant_int_1))))==typeof ($add18='%') && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)));
				return null;
			}
	, 1, [null,null,['self'],['defs_elem'],['width'],['height'],['x1'],['y1'],['x2'],['y2']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['SVGCanvasGradient']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SVGCanvasLinearGradient', $p['tuple']($bases), $data);
		})();
		$m['SVGCanvasRadialGradient'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.SVGCanvas';
			$cls_definition['__md5__'] = 'd27438d878c7a0e41033db766f6a1df8';
			$method = $pyjs__bind_method2('__init__', function(defs_elem, width, height, x1, y1, r1, x2, y2, r2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 9) $pyjs__exception_func_param(arguments['callee']['__name__'], 10, 10, arguments['length']+1);
				} else {
					var self = arguments[0];
					defs_elem = arguments[1];
					width = arguments[2];
					height = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					r1 = arguments[6];
					x2 = arguments[7];
					y2 = arguments[8];
					r2 = arguments[9];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 10) $pyjs__exception_func_param(arguments['callee']['__name__'], 10, 10, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd27438d878c7a0e41033db766f6a1df8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $22,innerXY,radii,$add28,$add21,$add20,$add22,$add25,$add24,$add27,$add26,$add19,$14,$15,$16,$17,$13,$18,$19,outerXY,$21,$20,$add23;
				$m['SVGCanvasGradient']['__init__'](self, defs_elem, 'radialGradient', width, height);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('radii', $p['tuple']([r1, r2])) : $p['setattr'](self, 'radii', $p['tuple']([r1, r2])); 
				innerXY = self['_get_svg_coord_percent']($p['tuple']([x1, y1]));
				outerXY = self['_get_svg_coord_percent']($p['tuple']([x2, y2]));
				radii = self['_get_svg_coord_percent']($p['tuple']([r1, r2]));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'cx', (typeof ($add19=$p['str']((typeof ($13=outerXY)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=$constant_int_0]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']($constant_int_0))))==typeof ($add20='%') && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20)));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'cy', (typeof ($add21=$p['str']((typeof ($15=outerXY)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=$constant_int_1]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__']($constant_int_1))))==typeof ($add22='%') && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'r', (typeof ($add23=$p['str']((typeof ($17=radii)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=$constant_int_1]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__']($constant_int_1))))==typeof ($add24='%') && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'fx', (typeof ($add25=$p['str']((typeof ($19=innerXY)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=$constant_int_0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']($constant_int_0))))==typeof ($add26='%') && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'elem'), 'fy', (typeof ($add27=$p['str']((typeof ($21=innerXY)['__array'] != 'undefined'?
					((typeof $21['__array'][$22=$constant_int_1]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__']($constant_int_1))))==typeof ($add28='%') && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28)));
				return null;
			}
	, 1, [null,null,['self'],['defs_elem'],['width'],['height'],['x1'],['y1'],['r1'],['x2'],['y2'],['r2']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addColorStop', function(offset, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd27438d878c7a0e41033db766f6a1df8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add29,$28,$add30,$mul8,$25,$24,$27,$26,P,$29,$30,$mul7,$sub2,$sub1,$div6,$23,$div5;
				P = (typeof ($div5=(typeof ($add29=(typeof ($mul7=offset)==typeof ($mul8=(typeof ($sub1=(typeof ($23=$p['getattr'](self, 'radii'))['__array'] != 'undefined'?
					((typeof $23['__array'][$24=$constant_int_1]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']($constant_int_1)))==typeof ($sub2=(typeof ($25=$p['getattr'](self, 'radii'))['__array'] != 'undefined'?
					((typeof $25['__array'][$26=$constant_int_0]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__']($constant_int_0))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($add30=(typeof ($27=$p['getattr'](self, 'radii'))['__array'] != 'undefined'?
					((typeof $27['__array'][$28=$constant_int_0]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__']($constant_int_0))) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)))==typeof ($div6=(typeof ($29=$p['getattr'](self, 'radii'))['__array'] != 'undefined'?
					((typeof $29['__array'][$30=$constant_int_1]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__']($constant_int_1))) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6));
				$m['SVGCanvasGradient']['addColorStop'](self, P, color);
				return null;
			}
	, 1, [null,null,['self'],['offset'],['color']]);
			$cls_definition['addColorStop'] = $method;
			var $bases = new Array($m['SVGCanvasGradient']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SVGCanvasRadialGradient', $p['tuple']($bases), $data);
		})();
		$m['SVGCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.SVGCanvas';
			$cls_definition['__md5__'] = '550ba5d086dbc4e72a12fd1b7852fe73';
			$method = $pyjs__bind_method2('__init__', function(coordX, coordY, pixelX, pixelY) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					coordX = arguments[1];
					coordY = arguments[2];
					pixelX = arguments[3];
					pixelY = arguments[4];
					var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof pixelY != 'undefined') {
						if (pixelY !== null && typeof pixelY['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = pixelY;
							pixelY = arguments[5];
						}
					} else 					if (typeof pixelX != 'undefined') {
						if (pixelX !== null && typeof pixelX['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = pixelX;
							pixelX = arguments[5];
						}
					} else 					if (typeof coordY != 'undefined') {
						if (coordY !== null && typeof coordY['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = coordY;
							coordY = arguments[5];
						}
					} else 					if (typeof coordX != 'undefined') {
						if (coordX !== null && typeof coordX['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = coordX;
							coordX = arguments[5];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[5];
						}
					} else {
					}
				}
				if (typeof coordX == 'undefined') coordX=arguments['callee']['__args__'][3][1];
				if (typeof coordY == 'undefined') coordY=arguments['callee']['__args__'][4][1];
				if (typeof pixelX == 'undefined') pixelX=arguments['callee']['__args__'][5][1];
				if (typeof pixelY == 'undefined') pixelY=arguments['callee']['__args__'][6][1];
				var $bool4,focusable,$bool2,$bool3,$bool1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pixelHeight', $constant_int_150) : $p['setattr'](self, 'pixelHeight', $constant_int_150); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pixelWidth', $constant_int_300) : $p['setattr'](self, 'pixelWidth', $constant_int_300); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('coordHeight', $p['getattr'](self, 'pixelHeight')) : $p['setattr'](self, 'coordHeight', $p['getattr'](self, 'pixelHeight')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('coordWidth', $p['getattr'](self, 'pixelWidth')) : $p['setattr'](self, 'coordWidth', $p['getattr'](self, 'pixelWidth')); 
				focusable = $m['Focus']['createFocusable']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', self['_createElementSVG']('svg')) : $p['setattr'](self, 'canvas', self['_createElementSVG']('svg')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('defs', self['_createElementSVG']('defs')) : $p['setattr'](self, 'defs', self['_createElementSVG']('defs')); 
				$m['DOM']['appendChild']($p['getattr'](self, 'canvas'), $p['getattr'](self, 'defs'));
				$m['DOM']['appendChild'](focusable, $p['getattr'](self, 'canvas'));
				$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, focusable]);
				if ((($bool1=!$p['op_is'](pixelX, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['setPixelWidth'](pixelX);
				}
				if ((($bool2=!$p['op_is'](pixelY, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['setPixelHeight'](pixelY);
				}
				if ((($bool3=!$p['op_is'](coordX, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['setCoordWidth'](coordX);
				}
				if ((($bool4=!$p['op_is'](coordY, null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['setCoordHeight'](coordY);
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ctx_stack', $p['list']([])) : $p['setattr'](self, 'ctx_stack', $p['list']([])); 
				self['_init_context']();
				self['clear']();
				return null;
			}
	, 1, [null,['kwargs'],['self'],['coordX', null],['coordY', null],['pixelX', null],['pixelY', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('_createElementSVG', function(name) {
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
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $doc['createElementNS']('http://www.w3.org/2000/svg', name);
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['_createElementSVG'] = $method;
			$method = $pyjs__bind_method2('_addElementSVG', function(elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $36,$35,$32,$33,$bool5,$31,$34;
				if ((($bool5=$p['op_eq']((typeof ($31=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $31['__array'][$32='composite']) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__']('composite')), $m['DESTINATION_OVER'])) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$m['DOM']['insertChild']((typeof ($33=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
						((typeof $33['__array'][$34='transform_group']) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__']('transform_group')), elem, $constant_int_0);
				}
				else {
					$m['DOM']['appendChild']((typeof ($35=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
						((typeof $35['__array'][$36='transform_group']) != 'undefined'?$35['__array'][$36]:
							$35['__getitem__']($36)):
							$35['__getitem__']('transform_group')), elem);
				}
				return null;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['_addElementSVG'] = $method;
			$method = $pyjs__bind_method2('_init_context', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ctx', $p['dict']([['fill', 'black'], ['alpha', 1.0], ['composite', $m['SOURCE_OVER']], ['stroke', 'black'], ['stroke-width', $constant_int_1], ['linecap', $m['BUTT']], ['linejoin', $m['MITER']], ['miterlimit', $constant_int_4], ['font', '12px sans-serif'], ['transform_group', $p['getattr'](self, 'canvas')], ['matrix', $p['list']([$constant_int_1, $constant_int_0, $constant_int_0, $constant_int_1, $constant_int_0, $constant_int_0])]])) : $p['setattr'](self, 'ctx', $p['dict']([['fill', 'black'], ['alpha', 1.0], ['composite', $m['SOURCE_OVER']], ['stroke', 'black'], ['stroke-width', $constant_int_1], ['linecap', $m['BUTT']], ['linejoin', $m['MITER']], ['miterlimit', $constant_int_4], ['font', '12px sans-serif'], ['transform_group', $p['getattr'](self, 'canvas')], ['matrix', $p['list']([$constant_int_1, $constant_int_0, $constant_int_0, $constant_int_1, $constant_int_0, $constant_int_0])]])); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_init_context'] = $method;
			$method = $pyjs__bind_method2('_integerize', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				x = $p['int'](x);
				y = $p['int'](y);
				return $p['tuple']([x, y]);
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['_integerize'] = $method;
			$method = $pyjs__bind_method2('_setPoint', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('last_point', self['_integerize'](x, y)) : $p['setattr'](self, 'last_point', self['_integerize'](x, y)); 
				if ((($bool6=$p['op_is']($p['getattr'](self, 'first_point'), null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('first_point', $p['getattr'](self, 'last_point')) : $p['setattr'](self, 'first_point', $p['getattr'](self, 'last_point')); 
				}
				return $p['getattr'](self, 'last_point');
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['_setPoint'] = $method;
			$method = $pyjs__bind_method2('getCanvasElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'canvas');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCanvasElement'] = $method;
			$method = $pyjs__bind_method2('beginPath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path_string', '') : $p['setattr'](self, 'path_string', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('first_point', null) : $p['setattr'](self, 'first_point', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('last_point', null) : $p['setattr'](self, 'last_point', null); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['beginPath'] = $method;
			$method = $pyjs__bind_method2('moveTo', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add38,$add39,$38,$39,$add32,$37,$add31,$add36,$add37,$add34,$add35,$add40,$add33,$40;
				self['_setPoint'](x, y);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path_string', (typeof ($add39=$p['getattr'](self, 'path_string'))==typeof ($add40=(typeof ($add37=(typeof ($add35=(typeof ($add33=(typeof ($add31='M ')==typeof ($add32=$p['str']((typeof ($37=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $37['__array'][$38=$constant_int_0]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__']($constant_int_0)))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32)))==typeof ($add34=' ') && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)))==typeof ($add36=$p['str']((typeof ($39=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $39['__array'][$40=$constant_int_1]) != 'undefined'?$39['__array'][$40]:
						$39['__getitem__']($40)):
						$39['__getitem__']($constant_int_1)))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)))==typeof ($add38=' ') && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38))) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40))) : $p['setattr'](self, 'path_string', (typeof ($add39=$p['getattr'](self, 'path_string'))==typeof ($add40=(typeof ($add37=(typeof ($add35=(typeof ($add33=(typeof ($add31='M ')==typeof ($add32=$p['str']((typeof ($37=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $37['__array'][$38=$constant_int_0]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__']($constant_int_0)))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32)))==typeof ($add34=' ') && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)))==typeof ($add36=$p['str']((typeof ($39=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $39['__array'][$40=$constant_int_1]) != 'undefined'?$39['__array'][$40]:
						$39['__getitem__']($40)):
						$39['__getitem__']($constant_int_1)))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)))==typeof ($add38=' ') && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38))) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40))); 
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['moveTo'] = $method;
			$method = $pyjs__bind_method2('lineTo', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add50,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$43,$bool7,$42,$41,$add45,$44;
				self['_setPoint'](x, y);
				if ((($bool7=$p['op_is']($p['getattr'](self, 'first_point'), null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('first_point', $p['getattr'](self, 'last_point')) : $p['setattr'](self, 'first_point', $p['getattr'](self, 'last_point')); 
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path_string', (typeof ($add49=$p['getattr'](self, 'path_string'))==typeof ($add50=(typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41='L ')==typeof ($add42=$p['str']((typeof ($41=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $41['__array'][$42=$constant_int_0]) != 'undefined'?$41['__array'][$42]:
						$41['__getitem__']($42)):
						$41['__getitem__']($constant_int_0)))) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42)))==typeof ($add44=' ') && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44)))==typeof ($add46=$p['str']((typeof ($43=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $43['__array'][$44=$constant_int_1]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__']($constant_int_1)))) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$p['op_add']($add45,$add46)))==typeof ($add48=' ') && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$p['op_add']($add47,$add48))) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50))) : $p['setattr'](self, 'path_string', (typeof ($add49=$p['getattr'](self, 'path_string'))==typeof ($add50=(typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41='L ')==typeof ($add42=$p['str']((typeof ($41=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $41['__array'][$42=$constant_int_0]) != 'undefined'?$41['__array'][$42]:
						$41['__getitem__']($42)):
						$41['__getitem__']($constant_int_0)))) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42)))==typeof ($add44=' ') && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44)))==typeof ($add46=$p['str']((typeof ($43=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $43['__array'][$44=$constant_int_1]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__']($constant_int_1)))) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$p['op_add']($add45,$add46)))==typeof ($add48=' ') && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$p['op_add']($add47,$add48))) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50))); 
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['lineTo'] = $method;
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
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,$bool8,$cmp2;
				while ((($bool8=((($cmp1=$m['DOM']['getChildCount']($p['getattr'](self, 'canvas')))===($cmp2=$constant_int_1)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					$m['DOM']['removeChild']($p['getattr'](self, 'canvas'), $m['DOM']['getChild']($p['getattr'](self, 'canvas'), $constant_int_1));
				}
				self['beginPath']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$method = $pyjs__bind_method2('cubicCurveTo', function(cp1x, cp1y, cp2x, cp2y, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					cp1x = arguments[1];
					cp1y = arguments[2];
					cp2x = arguments[3];
					cp2y = arguments[4];
					x = arguments[5];
					y = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add65,$add64,$add67,$add66,$add61,$add60,$add63,$add62,$add69,$add68,$49,$48,cp1,cp2,$47,$46,$45,$add70,$50,$add74,$51,$add72,$bool9,$add73,$add76,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59,$add71,$add75,$52,$53,$54,$55,$56;
				if ((($bool9=$p['op_is']($p['getattr'](self, 'last_point'), null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					return null;
				}
				cp1 = self['_integerize'](cp1x, cp1y);
				cp2 = self['_integerize'](cp2x, cp2y);
				self['_setPoint'](x, y);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path_string', (typeof ($add75=$p['getattr'](self, 'path_string'))==typeof ($add76=(typeof ($add73=(typeof ($add71=(typeof ($add69=(typeof ($add67=(typeof ($add65=(typeof ($add63=(typeof ($add61=(typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53=(typeof ($add51='C ')==typeof ($add52=$p['str']((typeof ($45=cp1)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=$constant_int_0]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__']($constant_int_0)))) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52)))==typeof ($add54=' ') && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					$p['op_add']($add53,$add54)))==typeof ($add56=$p['str']((typeof ($47=cp1)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=$constant_int_1]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__']($constant_int_1)))) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56)))==typeof ($add58=' ') && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58)))==typeof ($add60=$p['str']((typeof ($49=cp2)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=$constant_int_0]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__']($constant_int_0)))) && (typeof $add59=='number'||typeof $add59=='string')?
					$add59+$add60:
					$p['op_add']($add59,$add60)))==typeof ($add62=' ') && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62)))==typeof ($add64=$p['str']((typeof ($51=cp2)['__array'] != 'undefined'?
					((typeof $51['__array'][$52=$constant_int_1]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__']($constant_int_1)))) && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$p['op_add']($add63,$add64)))==typeof ($add66=' ') && (typeof $add65=='number'||typeof $add65=='string')?
					$add65+$add66:
					$p['op_add']($add65,$add66)))==typeof ($add68=$p['str']((typeof ($53=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $53['__array'][$54=$constant_int_0]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__']($constant_int_0)))) && (typeof $add67=='number'||typeof $add67=='string')?
					$add67+$add68:
					$p['op_add']($add67,$add68)))==typeof ($add70=' ') && (typeof $add69=='number'||typeof $add69=='string')?
					$add69+$add70:
					$p['op_add']($add69,$add70)))==typeof ($add72=$p['str']((typeof ($55=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $55['__array'][$56=$constant_int_1]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__']($constant_int_1)))) && (typeof $add71=='number'||typeof $add71=='string')?
					$add71+$add72:
					$p['op_add']($add71,$add72)))==typeof ($add74=' ') && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					$p['op_add']($add73,$add74))) && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					$p['op_add']($add75,$add76))) : $p['setattr'](self, 'path_string', (typeof ($add75=$p['getattr'](self, 'path_string'))==typeof ($add76=(typeof ($add73=(typeof ($add71=(typeof ($add69=(typeof ($add67=(typeof ($add65=(typeof ($add63=(typeof ($add61=(typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53=(typeof ($add51='C ')==typeof ($add52=$p['str']((typeof ($45=cp1)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=$constant_int_0]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__']($constant_int_0)))) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52)))==typeof ($add54=' ') && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					$p['op_add']($add53,$add54)))==typeof ($add56=$p['str']((typeof ($47=cp1)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=$constant_int_1]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__']($constant_int_1)))) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56)))==typeof ($add58=' ') && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58)))==typeof ($add60=$p['str']((typeof ($49=cp2)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=$constant_int_0]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__']($constant_int_0)))) && (typeof $add59=='number'||typeof $add59=='string')?
					$add59+$add60:
					$p['op_add']($add59,$add60)))==typeof ($add62=' ') && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62)))==typeof ($add64=$p['str']((typeof ($51=cp2)['__array'] != 'undefined'?
					((typeof $51['__array'][$52=$constant_int_1]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__']($constant_int_1)))) && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$p['op_add']($add63,$add64)))==typeof ($add66=' ') && (typeof $add65=='number'||typeof $add65=='string')?
					$add65+$add66:
					$p['op_add']($add65,$add66)))==typeof ($add68=$p['str']((typeof ($53=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $53['__array'][$54=$constant_int_0]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__']($constant_int_0)))) && (typeof $add67=='number'||typeof $add67=='string')?
					$add67+$add68:
					$p['op_add']($add67,$add68)))==typeof ($add70=' ') && (typeof $add69=='number'||typeof $add69=='string')?
					$add69+$add70:
					$p['op_add']($add69,$add70)))==typeof ($add72=$p['str']((typeof ($55=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $55['__array'][$56=$constant_int_1]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__']($constant_int_1)))) && (typeof $add71=='number'||typeof $add71=='string')?
					$add71+$add72:
					$p['op_add']($add71,$add72)))==typeof ($add74=' ') && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					$p['op_add']($add73,$add74))) && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					$p['op_add']($add75,$add76))); 
				return null;
			}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
			$cls_definition['cubicCurveTo'] = $method;
			$method = $pyjs__bind_method2('quadraticCurveTo', function(cpx, cpy, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					cpx = arguments[1];
					cpy = arguments[2];
					x = arguments[3];
					y = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add89,$add88,$bool10,$add82,$add81,$add80,$add87,$add86,$add85,$add84,cp,$59,$add83,$64,$61,$60,$63,$62,$add94,$add90,$add91,$add92,$add93,$add77,$add78,$add79,$58,$57;
				if ((($bool10=$p['op_is']($p['getattr'](self, 'last_point'), null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					return null;
				}
				cp = self['_integerize'](cpx, cpy);
				self['_setPoint'](x, y);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path_string', (typeof ($add93=$p['getattr'](self, 'path_string'))==typeof ($add94=(typeof ($add91=(typeof ($add89=(typeof ($add87=(typeof ($add85=(typeof ($add83=(typeof ($add81=(typeof ($add79=(typeof ($add77='Q ')==typeof ($add78=$p['str']((typeof ($57=cp)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=$constant_int_0]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__']($constant_int_0)))) && (typeof $add77=='number'||typeof $add77=='string')?
					$add77+$add78:
					$p['op_add']($add77,$add78)))==typeof ($add80=' ') && (typeof $add79=='number'||typeof $add79=='string')?
					$add79+$add80:
					$p['op_add']($add79,$add80)))==typeof ($add82=$p['str']((typeof ($59=cp)['__array'] != 'undefined'?
					((typeof $59['__array'][$60=$constant_int_1]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__']($constant_int_1)))) && (typeof $add81=='number'||typeof $add81=='string')?
					$add81+$add82:
					$p['op_add']($add81,$add82)))==typeof ($add84=' ') && (typeof $add83=='number'||typeof $add83=='string')?
					$add83+$add84:
					$p['op_add']($add83,$add84)))==typeof ($add86=$p['str']((typeof ($61=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $61['__array'][$62=$constant_int_0]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__']($constant_int_0)))) && (typeof $add85=='number'||typeof $add85=='string')?
					$add85+$add86:
					$p['op_add']($add85,$add86)))==typeof ($add88=' ') && (typeof $add87=='number'||typeof $add87=='string')?
					$add87+$add88:
					$p['op_add']($add87,$add88)))==typeof ($add90=$p['str']((typeof ($63=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $63['__array'][$64=$constant_int_1]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__']($constant_int_1)))) && (typeof $add89=='number'||typeof $add89=='string')?
					$add89+$add90:
					$p['op_add']($add89,$add90)))==typeof ($add92=' ') && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92))) && (typeof $add93=='number'||typeof $add93=='string')?
					$add93+$add94:
					$p['op_add']($add93,$add94))) : $p['setattr'](self, 'path_string', (typeof ($add93=$p['getattr'](self, 'path_string'))==typeof ($add94=(typeof ($add91=(typeof ($add89=(typeof ($add87=(typeof ($add85=(typeof ($add83=(typeof ($add81=(typeof ($add79=(typeof ($add77='Q ')==typeof ($add78=$p['str']((typeof ($57=cp)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=$constant_int_0]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__']($constant_int_0)))) && (typeof $add77=='number'||typeof $add77=='string')?
					$add77+$add78:
					$p['op_add']($add77,$add78)))==typeof ($add80=' ') && (typeof $add79=='number'||typeof $add79=='string')?
					$add79+$add80:
					$p['op_add']($add79,$add80)))==typeof ($add82=$p['str']((typeof ($59=cp)['__array'] != 'undefined'?
					((typeof $59['__array'][$60=$constant_int_1]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__']($constant_int_1)))) && (typeof $add81=='number'||typeof $add81=='string')?
					$add81+$add82:
					$p['op_add']($add81,$add82)))==typeof ($add84=' ') && (typeof $add83=='number'||typeof $add83=='string')?
					$add83+$add84:
					$p['op_add']($add83,$add84)))==typeof ($add86=$p['str']((typeof ($61=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $61['__array'][$62=$constant_int_0]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__']($constant_int_0)))) && (typeof $add85=='number'||typeof $add85=='string')?
					$add85+$add86:
					$p['op_add']($add85,$add86)))==typeof ($add88=' ') && (typeof $add87=='number'||typeof $add87=='string')?
					$add87+$add88:
					$p['op_add']($add87,$add88)))==typeof ($add90=$p['str']((typeof ($63=$p['getattr'](self, 'last_point'))['__array'] != 'undefined'?
					((typeof $63['__array'][$64=$constant_int_1]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__']($constant_int_1)))) && (typeof $add89=='number'||typeof $add89=='string')?
					$add89+$add90:
					$p['op_add']($add89,$add90)))==typeof ($add92=' ') && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92))) && (typeof $add93=='number'||typeof $add93=='string')?
					$add93+$add94:
					$p['op_add']($add93,$add94))); 
				return null;
			}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
			$cls_definition['quadraticCurveTo'] = $method;
			$method = $pyjs__bind_method2('closePath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add96,$or1,$or2,$bool11,$add95,$bool12;
				if ((($bool12=((($bool11=$or1=$p['op_is']($p['getattr'](self, 'last_point'), null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11['__nonzero__']=='function'?
							$bool11['__nonzero__']() :
							(typeof $bool11['__len__']=='function'?
								($bool11['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['op_eq']($p['getattr'](self, 'last_point'), $p['getattr'](self, 'first_point')))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path_string', (typeof ($add95=$p['getattr'](self, 'path_string'))==typeof ($add96='Z ') && (typeof $add95=='number'||typeof $add95=='string')?
					$add95+$add96:
					$p['op_add']($add95,$add96))) : $p['setattr'](self, 'path_string', (typeof ($add95=$p['getattr'](self, 'path_string'))==typeof ($add96='Z ') && (typeof $add95=='number'||typeof $add95=='string')?
					$add95+$add96:
					$p['op_add']($add95,$add96))); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('last_point', $p['getattr'](self, 'first_point')) : $p['setattr'](self, 'last_point', $p['getattr'](self, 'first_point')); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['closePath'] = $method;
			$method = $pyjs__bind_method2('fill', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $72,$or4,$70,$71,$cmp3,$or3,$cmp4,$bool13,$bool14,$bool15,$bool16,$69,$68,$65,path,$67,$66;
				if ((($bool14=((($bool13=$or3=$p['op_is']($p['getattr'](self, 'last_point'), null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13['__nonzero__']=='function'?
							$bool13['__nonzero__']() :
							(typeof $bool13['__len__']=='function'?
								($bool13['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:!$p['op_eq']($p['getattr'](self, 'last_point'), $p['getattr'](self, 'first_point')))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				if ((($bool15=$p['op_is']((typeof ($65=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $65['__array'][$66='fill']) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__']('fill')), null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				path = self['_createElementSVG']('path');
				$m['DOM']['setElemAttribute'](path, 'd', $p['getattr'](self, 'path_string'));
				$m['DOM']['setElemAttribute'](path, 'fill', $p['str']((typeof ($67=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $67['__array'][$68='fill']) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__']('fill'))));
				if ((($bool16=((($cmp3=(typeof ($69=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $69['__array'][$70='alpha']) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__']('alpha')))===($cmp4=1.0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					$m['DOM']['setElemAttribute'](path, 'fill-opacity', $p['str']((typeof ($71=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
						((typeof $71['__array'][$72='alpha']) != 'undefined'?$71['__array'][$72]:
							$71['__getitem__']($72)):
							$71['__getitem__']('alpha'))));
				}
				$m['DOM']['setElemAttribute'](path, 'stroke', 'transparent');
				self['_addElementSVG'](path);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['fill'] = $method;
			$method = $pyjs__bind_method2('_apply_stroke_styles', function(elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool17,$88,$87,$86,$85,$84,$83,$82,$81,$80,$cmp5,$73,$cmp6,$76,$77,$74,$75,$78,$79;
				$m['DOM']['setElemAttribute'](elem, 'stroke', $p['str']((typeof ($73=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $73['__array'][$74='stroke']) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__']('stroke'))));
				$m['DOM']['setElemAttribute'](elem, 'stroke-width', $p['str']((typeof ($75=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $75['__array'][$76='stroke-width']) != 'undefined'?$75['__array'][$76]:
						$75['__getitem__']($76)):
						$75['__getitem__']('stroke-width'))));
				$m['DOM']['setElemAttribute'](elem, 'stroke-linecap', $p['str']((typeof ($77=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $77['__array'][$78='linecap']) != 'undefined'?$77['__array'][$78]:
						$77['__getitem__']($78)):
						$77['__getitem__']('linecap'))));
				$m['DOM']['setElemAttribute'](elem, 'stroke-linejoin', $p['str']((typeof ($79=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $79['__array'][$80='linejoin']) != 'undefined'?$79['__array'][$80]:
						$79['__getitem__']($80)):
						$79['__getitem__']('linejoin'))));
				if ((($bool17=$p['op_eq']((typeof ($81=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $81['__array'][$82='linejoin']) != 'undefined'?$81['__array'][$82]:
						$81['__getitem__']($82)):
						$81['__getitem__']('linejoin')), $m['MITER'])) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					$m['DOM']['setElemAttribute'](elem, 'stroke-miterlimit', $p['str']((typeof ($83=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
						((typeof $83['__array'][$84='miterlimit']) != 'undefined'?$83['__array'][$84]:
							$83['__getitem__']($84)):
							$83['__getitem__']('miterlimit'))));
				}
				if ((($bool18=((($cmp5=(typeof ($85=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $85['__array'][$86='alpha']) != 'undefined'?$85['__array'][$86]:
						$85['__getitem__']($86)):
						$85['__getitem__']('alpha')))===($cmp6=1.0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					$m['DOM']['setElemAttribute'](elem, 'stroke-opacity', $p['str']((typeof ($87=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
						((typeof $87['__array'][$88='alpha']) != 'undefined'?$87['__array'][$88]:
							$87['__getitem__']($88)):
							$87['__getitem__']('alpha'))));
				}
				return null;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['_apply_stroke_styles'] = $method;
			$method = $pyjs__bind_method2('stroke', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$bool19,$or6,$89,$90,$91,$92,$bool21,$bool20,path;
				if ((($bool19=$p['op_is']($p['getattr'](self, 'last_point'), null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					return null;
				}
				if ((($bool21=((($bool20=$or5=$p['op_is']((typeof ($89=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $89['__array'][$90='stroke']) != 'undefined'?$89['__array'][$90]:
						$89['__getitem__']($90)):
						$89['__getitem__']('stroke')), null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20['__nonzero__']=='function'?
							$bool20['__nonzero__']() :
							(typeof $bool20['__len__']=='function'?
								($bool20['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:$p['op_eq']((typeof ($91=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $91['__array'][$92='stroke-width']) != 'undefined'?$91['__array'][$92]:
						$91['__getitem__']($92)):
						$91['__getitem__']('stroke-width')), $constant_int_0))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					return null;
				}
				path = self['_createElementSVG']('path');
				$m['DOM']['setElemAttribute'](path, 'd', $p['getattr'](self, 'path_string'));
				self['_apply_stroke_styles'](path);
				$m['DOM']['setElemAttribute'](path, 'fill', 'transparent');
				self['_addElementSVG'](path);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stroke'] = $method;
			$method = $pyjs__bind_method2('_posAngle', function(angle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					angle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp7,$bool23,$mul10,$add97,$cmp9,twoPi,$cmp8,$cmp10,$mul9,$bool22,$sub3,$add98,$sub4;
				twoPi = (typeof ($mul9=$p['getattr']($m['math'], 'pi'))==typeof ($mul10=$constant_int_2) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10));
				while ((($bool22=((($cmp7=angle)===($cmp8=$constant_int_0)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					angle = (typeof ($add97=angle)==typeof ($add98=twoPi) && (typeof $add97=='number'||typeof $add97=='string')?
						$add97+$add98:
						$p['op_add']($add97,$add98));
				}
				while ((($bool23=((($cmp9=angle)===($cmp10=twoPi)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					angle = (typeof ($sub3=angle)==typeof ($sub4=twoPi) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
				}
				return angle;
			}
	, 1, [null,null,['self'],['angle']]);
			$cls_definition['_posAngle'] = $method;
			$method = $pyjs__bind_method2('arc', function(centerX, centerY, radius, startAngle, endAngle, antiClockwise) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					centerX = arguments[1];
					centerY = arguments[2];
					radius = arguments[3];
					startAngle = arguments[4];
					endAngle = arguments[5];
					antiClockwise = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool28,$add130,$add131,$add118,$add119,$add116,$add117,$add114,$add115,$add112,$add103,$add110,$add111,$add102,$add123,$mul18,$add125,$add99,$add121,$add132,$bool24,largeSweep,$add120,$bool25,$or7,$bool27,$bool26,$add124,$sub6,$sub5,$add101,$add100,startX,startY,$add105,$add104,$add107,$add106,$add109,$add108,$or8,$add129,$add113,$cmp14,$cmp16,$cmp11,$cmp13,$cmp12,$add128,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,endY,endX,$add127,$cmp15,sweepAngle,$add122,$add126;
				startX = $p['int']((typeof ($add99=centerX)==typeof ($add100=(typeof ($mul11=radius)==typeof ($mul12=$m['math']['cos'](startAngle)) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12))) && (typeof $add99=='number'||typeof $add99=='string')?
					$add99+$add100:
					$p['op_add']($add99,$add100)));
				startY = $p['int']((typeof ($add101=centerY)==typeof ($add102=(typeof ($mul13=radius)==typeof ($mul14=$m['math']['sin'](startAngle)) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))) && (typeof $add101=='number'||typeof $add101=='string')?
					$add101+$add102:
					$p['op_add']($add101,$add102)));
				endX = $p['int']((typeof ($add103=centerX)==typeof ($add104=(typeof ($mul15=radius)==typeof ($mul16=$m['math']['cos'](endAngle)) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $add103=='number'||typeof $add103=='string')?
					$add103+$add104:
					$p['op_add']($add103,$add104)));
				endY = $p['int']((typeof ($add105=centerY)==typeof ($add106=(typeof ($mul17=radius)==typeof ($mul18=$m['math']['sin'](endAngle)) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))) && (typeof $add105=='number'||typeof $add105=='string')?
					$add105+$add106:
					$p['op_add']($add105,$add106)));
				sweepAngle = self['_posAngle']((typeof ($sub5=endAngle)==typeof ($sub6=startAngle) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)));
				if ((($bool25=((($bool24=$or7=((($cmp11=sweepAngle)===($cmp12=0.01)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24['__nonzero__']=='function'?
							$bool24['__nonzero__']() :
							(typeof $bool24['__len__']=='function'?
								($bool24['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or7:((($cmp13=sweepAngle)===($cmp14=6.27)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == 1))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					self['arc'](centerX, centerY, radius, $constant_int_0, $p['getattr']($m['math'], 'pi'), antiClockwise);
					self['arc'](centerX, centerY, radius, $p['getattr']($m['math'], 'pi'), $constant_int_0, antiClockwise);
					self['moveTo'](startX, startY);
					self['closePath']();
					return null;
				}
				self['moveTo'](startX, startY);
				largeSweep = ((($cmp15=sweepAngle)===($cmp16=$p['getattr']($m['math'], 'pi'))?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1);
				if ((($bool26=antiClockwise) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					largeSweep = !(($bool27=largeSweep) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) );
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('path_string', (typeof ($add131=$p['getattr'](self, 'path_string'))==typeof ($add132=(typeof ($add129=(typeof ($add127=(typeof ($add125=(typeof ($add123=(typeof ($add121=(typeof ($add119=(typeof ($add117=(typeof ($add115=(typeof ($add113=(typeof ($add111=(typeof ($add109=(typeof ($add107='A')==typeof ($add108=$p['str'](radius)) && (typeof $add107=='number'||typeof $add107=='string')?
					$add107+$add108:
					$p['op_add']($add107,$add108)))==typeof ($add110=',') && (typeof $add109=='number'||typeof $add109=='string')?
					$add109+$add110:
					$p['op_add']($add109,$add110)))==typeof ($add112=$p['str'](radius)) && (typeof $add111=='number'||typeof $add111=='string')?
					$add111+$add112:
					$p['op_add']($add111,$add112)))==typeof ($add114=' 0 ') && (typeof $add113=='number'||typeof $add113=='string')?
					$add113+$add114:
					$p['op_add']($add113,$add114)))==typeof ($add116=$p['str']($p['int'](largeSweep))) && (typeof $add115=='number'||typeof $add115=='string')?
					$add115+$add116:
					$p['op_add']($add115,$add116)))==typeof ($add118=',') && (typeof $add117=='number'||typeof $add117=='string')?
					$add117+$add118:
					$p['op_add']($add117,$add118)))==typeof ($add120=$p['str']($p['int'](!(($bool28=antiClockwise) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28['__nonzero__']=='function'?
							$bool28['__nonzero__']() :
							(typeof $bool28['__len__']=='function'?
								($bool28['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )))) && (typeof $add119=='number'||typeof $add119=='string')?
					$add119+$add120:
					$p['op_add']($add119,$add120)))==typeof ($add122=' ') && (typeof $add121=='number'||typeof $add121=='string')?
					$add121+$add122:
					$p['op_add']($add121,$add122)))==typeof ($add124=$p['str'](endX)) && (typeof $add123=='number'||typeof $add123=='string')?
					$add123+$add124:
					$p['op_add']($add123,$add124)))==typeof ($add126=',') && (typeof $add125=='number'||typeof $add125=='string')?
					$add125+$add126:
					$p['op_add']($add125,$add126)))==typeof ($add128=$p['str'](endY)) && (typeof $add127=='number'||typeof $add127=='string')?
					$add127+$add128:
					$p['op_add']($add127,$add128)))==typeof ($add130=' ') && (typeof $add129=='number'||typeof $add129=='string')?
					$add129+$add130:
					$p['op_add']($add129,$add130))) && (typeof $add131=='number'||typeof $add131=='string')?
					$add131+$add132:
					$p['op_add']($add131,$add132))) : $p['setattr'](self, 'path_string', (typeof ($add131=$p['getattr'](self, 'path_string'))==typeof ($add132=(typeof ($add129=(typeof ($add127=(typeof ($add125=(typeof ($add123=(typeof ($add121=(typeof ($add119=(typeof ($add117=(typeof ($add115=(typeof ($add113=(typeof ($add111=(typeof ($add109=(typeof ($add107='A')==typeof ($add108=$p['str'](radius)) && (typeof $add107=='number'||typeof $add107=='string')?
					$add107+$add108:
					$p['op_add']($add107,$add108)))==typeof ($add110=',') && (typeof $add109=='number'||typeof $add109=='string')?
					$add109+$add110:
					$p['op_add']($add109,$add110)))==typeof ($add112=$p['str'](radius)) && (typeof $add111=='number'||typeof $add111=='string')?
					$add111+$add112:
					$p['op_add']($add111,$add112)))==typeof ($add114=' 0 ') && (typeof $add113=='number'||typeof $add113=='string')?
					$add113+$add114:
					$p['op_add']($add113,$add114)))==typeof ($add116=$p['str']($p['int'](largeSweep))) && (typeof $add115=='number'||typeof $add115=='string')?
					$add115+$add116:
					$p['op_add']($add115,$add116)))==typeof ($add118=',') && (typeof $add117=='number'||typeof $add117=='string')?
					$add117+$add118:
					$p['op_add']($add117,$add118)))==typeof ($add120=$p['str']($p['int'](!(($bool28=antiClockwise) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28['__nonzero__']=='function'?
							$bool28['__nonzero__']() :
							(typeof $bool28['__len__']=='function'?
								($bool28['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )))) && (typeof $add119=='number'||typeof $add119=='string')?
					$add119+$add120:
					$p['op_add']($add119,$add120)))==typeof ($add122=' ') && (typeof $add121=='number'||typeof $add121=='string')?
					$add121+$add122:
					$p['op_add']($add121,$add122)))==typeof ($add124=$p['str'](endX)) && (typeof $add123=='number'||typeof $add123=='string')?
					$add123+$add124:
					$p['op_add']($add123,$add124)))==typeof ($add126=',') && (typeof $add125=='number'||typeof $add125=='string')?
					$add125+$add126:
					$p['op_add']($add125,$add126)))==typeof ($add128=$p['str'](endY)) && (typeof $add127=='number'||typeof $add127=='string')?
					$add127+$add128:
					$p['op_add']($add127,$add128)))==typeof ($add130=' ') && (typeof $add129=='number'||typeof $add129=='string')?
					$add129+$add130:
					$p['op_add']($add129,$add130))) && (typeof $add131=='number'||typeof $add131=='string')?
					$add131+$add132:
					$p['op_add']($add131,$add132))); 
				return null;
			}
	, 1, [null,null,['self'],['centerX'],['centerY'],['radius'],['startAngle'],['endAngle'],['antiClockwise']]);
			$cls_definition['arc'] = $method;
			$method = $pyjs__bind_method2('_make_rect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $100,$98,$99,$94,$95,$97,$93,xy,wh,$96,rect;
				rect = self['_createElementSVG']('rect');
				xy = self['_integerize'](startX, startY);
				wh = self['_integerize'](width, height);
				$m['DOM']['setElemAttribute'](rect, 'x', $p['str']((typeof ($93=xy)['__array'] != 'undefined'?
					((typeof $93['__array'][$94=$constant_int_0]) != 'undefined'?$93['__array'][$94]:
						$93['__getitem__']($94)):
						$93['__getitem__']($constant_int_0))));
				$m['DOM']['setElemAttribute'](rect, 'y', $p['str']((typeof ($95=xy)['__array'] != 'undefined'?
					((typeof $95['__array'][$96=$constant_int_1]) != 'undefined'?$95['__array'][$96]:
						$95['__getitem__']($96)):
						$95['__getitem__']($constant_int_1))));
				$m['DOM']['setElemAttribute'](rect, 'width', $p['str']((typeof ($97=wh)['__array'] != 'undefined'?
					((typeof $97['__array'][$98=$constant_int_0]) != 'undefined'?$97['__array'][$98]:
						$97['__getitem__']($98)):
						$97['__getitem__']($constant_int_0))));
				$m['DOM']['setElemAttribute'](rect, 'height', $p['str']((typeof ($99=wh)['__array'] != 'undefined'?
					((typeof $99['__array'][$100=$constant_int_1]) != 'undefined'?$99['__array'][$100]:
						$99['__getitem__']($100)):
						$99['__getitem__']($constant_int_1))));
				return rect;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['_make_rect'] = $method;
			$method = $pyjs__bind_method2('fillRect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $101,$105,$104,$107,$106,$bool30,$103,$cmp17,$102,$108,$bool29,$cmp18,rect;
				if ((($bool29=$p['op_is']((typeof ($101=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $101['__array'][$102='fill']) != 'undefined'?$101['__array'][$102]:
						$101['__getitem__']($102)):
						$101['__getitem__']('fill')), null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				rect = self['_make_rect'](startX, startY, width, height);
				$m['DOM']['setElemAttribute'](rect, 'fill', $p['str']((typeof ($103=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $103['__array'][$104='fill']) != 'undefined'?$103['__array'][$104]:
						$103['__getitem__']($104)):
						$103['__getitem__']('fill'))));
				if ((($bool30=((($cmp17=(typeof ($105=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $105['__array'][$106='alpha']) != 'undefined'?$105['__array'][$106]:
						$105['__getitem__']($106)):
						$105['__getitem__']('alpha')))===($cmp18=1.0)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					$m['DOM']['setElemAttribute'](rect, 'fill-opacity', $p['str']((typeof ($107=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
						((typeof $107['__array'][$108='alpha']) != 'undefined'?$107['__array'][$108]:
							$107['__getitem__']($108)):
							$107['__getitem__']('alpha'))));
				}
				$m['DOM']['setElemAttribute'](rect, 'stroke', 'transparent');
				self['_addElementSVG'](rect);
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['fillRect'] = $method;
			$method = $pyjs__bind_method2('strokeRect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $112,$110,$111,$109,$or9,$bool32,$bool31,$or10,rect;
				if ((($bool32=((($bool31=$or9=$p['op_is']((typeof ($109=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $109['__array'][$110='stroke']) != 'undefined'?$109['__array'][$110]:
						$109['__getitem__']($110)):
						$109['__getitem__']('stroke')), null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
					false :
					(typeof $bool31=='object'?
						(typeof $bool31['__nonzero__']=='function'?
							$bool31['__nonzero__']() :
							(typeof $bool31['__len__']=='function'?
								($bool31['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or9:$p['op_eq']((typeof ($111=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $111['__array'][$112='stroke-width']) != 'undefined'?$111['__array'][$112]:
						$111['__getitem__']($112)):
						$111['__getitem__']('stroke-width')), $constant_int_0))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					return null;
				}
				rect = self['_make_rect'](startX, startY, width, height);
				self['_apply_stroke_styles'](rect);
				$m['DOM']['setElemAttribute'](rect, 'fill', 'transparent');
				self['_addElementSVG'](rect);
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['strokeRect'] = $method;
			$method = $pyjs__bind_method2('rect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add134,$add135,$add133,$add138,$add136,$add137,$add140,$add139;
				self['moveTo'](startX, startY);
				self['lineTo']((typeof ($add133=startX)==typeof ($add134=width) && (typeof $add133=='number'||typeof $add133=='string')?
					$add133+$add134:
					$p['op_add']($add133,$add134)), startY);
				self['lineTo']((typeof ($add135=startX)==typeof ($add136=width) && (typeof $add135=='number'||typeof $add135=='string')?
					$add135+$add136:
					$p['op_add']($add135,$add136)), (typeof ($add137=startY)==typeof ($add138=height) && (typeof $add137=='number'||typeof $add137=='string')?
					$add137+$add138:
					$p['op_add']($add137,$add138)));
				self['lineTo'](startX, (typeof ($add139=startY)==typeof ($add140=height) && (typeof $add139=='number'||typeof $add139=='string')?
					$add139+$add140:
					$p['op_add']($add139,$add140)));
				self['closePath']();
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['rect'] = $method;
			$method = $pyjs__bind_method2('fillText', function(text, startX, startY, maxWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					startX = arguments[2];
					startY = arguments[3];
					maxWidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];
				var $116,$117,$114,$115,$113,$118,$119,xy,style,text_elem,$add145,$add144,$add146,$add141,$add143,$add142,$120,$bool33;
				text_elem = self['_createElementSVG']('text');
				xy = self['_integerize'](startX, startY);
				$m['DOM']['setElemAttribute'](text_elem, 'x', $p['str']((typeof ($113=xy)['__array'] != 'undefined'?
					((typeof $113['__array'][$114=$constant_int_0]) != 'undefined'?$113['__array'][$114]:
						$113['__getitem__']($114)):
						$113['__getitem__']($constant_int_0))));
				$m['DOM']['setElemAttribute'](text_elem, 'y', $p['str']((typeof ($115=xy)['__array'] != 'undefined'?
					((typeof $115['__array'][$116=$constant_int_1]) != 'undefined'?$115['__array'][$116]:
						$115['__getitem__']($116)):
						$115['__getitem__']($constant_int_1))));
				if ((($bool33=!$p['op_is'](maxWidth, null)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					$m['DOM']['setElemAttribute'](text_elem, 'textLength', $p['str'](maxWidth));
				}
				style = (typeof ($add145=(typeof ($add143=(typeof ($add141='font:')==typeof ($add142=(typeof ($117=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $117['__array'][$118='font']) != 'undefined'?$117['__array'][$118]:
						$117['__getitem__']($118)):
						$117['__getitem__']('font'))) && (typeof $add141=='number'||typeof $add141=='string')?
					$add141+$add142:
					$p['op_add']($add141,$add142)))==typeof ($add144=';fill:') && (typeof $add143=='number'||typeof $add143=='string')?
					$add143+$add144:
					$p['op_add']($add143,$add144)))==typeof ($add146=$p['str']((typeof ($119=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $119['__array'][$120='fill']) != 'undefined'?$119['__array'][$120]:
						$119['__getitem__']($120)):
						$119['__getitem__']('fill')))) && (typeof $add145=='number'||typeof $add145=='string')?
					$add145+$add146:
					$p['op_add']($add145,$add146));
				$m['DOM']['setElemAttribute'](text_elem, 'style', style);
				$m['DOM']['setInnerText'](text_elem, text);
				self['_addElementSVG'](text_elem);
				return null;
			}
	, 1, [null,null,['self'],['text'],['startX'],['startY'],['maxWidth', null]]);
			$cls_definition['fillText'] = $method;
			$method = $pyjs__bind_method2('createLinearGradient', function(x0, y0, x1, y1) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					x1 = arguments[3];
					y1 = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['SVGCanvasLinearGradient']($p['getattr'](self, 'defs'), $p['getattr'](self, 'pixelWidth'), $p['getattr'](self, 'pixelHeight'), $p['int'](x0), $p['int'](y0), $p['int'](x1), $p['int'](y1));
			}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
			$cls_definition['createLinearGradient'] = $method;
			$method = $pyjs__bind_method2('createRadialGradient', function(x0, y0, r0, x1, y1, r1) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					r0 = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					r1 = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $m['SVGCanvasRadialGradient']($p['getattr'](self, 'defs'), $p['getattr'](self, 'pixelWidth'), $p['getattr'](self, 'pixelHeight'), $p['int'](x0), $p['int'](y0), $p['int'](r0), $p['int'](x1), $p['int'](y1), $p['int'](r1));
			}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1']]);
			$cls_definition['createRadialGradient'] = $method;
			$method = $pyjs__bind_method2('drawImage', function(img) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					img = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var image,$155,$138,$139,$150,$151,$156,$154,destWH,$130,$131,$132,$133,$134,$135,$136,$137,$145,sourceXY,$141,$140,$143,$bool36,$142,$bool37,img_elem,$129,$128,$149,$148,sourceWH,$123,$122,$121,$146,$127,$126,$125,$124,$152,$bool35,$153,url,destXY,$len2,$len3,$bool34,$len1,$147,$144;
				if ((($bool34=$p['isinstance'](img, $m['Widget'])) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					img_elem = img['getElement']();
					url = img['getUrl']();
				}
				else {
					img_elem = img;
					url = $m['DOM']['getAttribute'](img, 'src');
				}
				sourceXY = null;
				sourceWH = null;
				destXY = null;
				destWH = null;
				if ((($bool35=$p['op_eq']((($len1=args) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), $constant_int_8)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35['__nonzero__']=='function'?
								$bool35['__nonzero__']() :
								(typeof $bool35['__len__']=='function'?
									($bool35['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					sourceXY = $p['tuple']([(typeof ($121=args)['__array'] != 'undefined'?
						((typeof $121['__array'][$122=$constant_int_0]) != 'undefined'?$121['__array'][$122]:
							$121['__getitem__']($122)):
							$121['__getitem__']($constant_int_0)), (typeof ($123=args)['__array'] != 'undefined'?
						((typeof $123['__array'][$124=$constant_int_1]) != 'undefined'?$123['__array'][$124]:
							$123['__getitem__']($124)):
							$123['__getitem__']($constant_int_1))]);
					sourceWH = $p['tuple']([(typeof ($125=args)['__array'] != 'undefined'?
						((typeof $125['__array'][$126=$constant_int_2]) != 'undefined'?$125['__array'][$126]:
							$125['__getitem__']($126)):
							$125['__getitem__']($constant_int_2)), (typeof ($127=args)['__array'] != 'undefined'?
						((typeof $127['__array'][$128=$constant_int_3]) != 'undefined'?$127['__array'][$128]:
							$127['__getitem__']($128)):
							$127['__getitem__']($constant_int_3))]);
					destXY = $p['tuple']([(typeof ($129=args)['__array'] != 'undefined'?
						((typeof $129['__array'][$130=$constant_int_4]) != 'undefined'?$129['__array'][$130]:
							$129['__getitem__']($130)):
							$129['__getitem__']($constant_int_4)), (typeof ($131=args)['__array'] != 'undefined'?
						((typeof $131['__array'][$132=$constant_int_5]) != 'undefined'?$131['__array'][$132]:
							$131['__getitem__']($132)):
							$131['__getitem__']($constant_int_5))]);
					destWH = $p['tuple']([(typeof ($133=args)['__array'] != 'undefined'?
						((typeof $133['__array'][$134=$constant_int_6]) != 'undefined'?$133['__array'][$134]:
							$133['__getitem__']($134)):
							$133['__getitem__']($constant_int_6)), (typeof ($135=args)['__array'] != 'undefined'?
						((typeof $135['__array'][$136=$constant_int_7]) != 'undefined'?$135['__array'][$136]:
							$135['__getitem__']($136)):
							$135['__getitem__']($constant_int_7))]);
				}
				else if ((($bool36=$p['op_eq']((($len2=args) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))), $constant_int_4)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					destXY = $p['tuple']([(typeof ($137=args)['__array'] != 'undefined'?
						((typeof $137['__array'][$138=$constant_int_0]) != 'undefined'?$137['__array'][$138]:
							$137['__getitem__']($138)):
							$137['__getitem__']($constant_int_0)), (typeof ($139=args)['__array'] != 'undefined'?
						((typeof $139['__array'][$140=$constant_int_1]) != 'undefined'?$139['__array'][$140]:
							$139['__getitem__']($140)):
							$139['__getitem__']($constant_int_1))]);
					destWH = $p['tuple']([(typeof ($141=args)['__array'] != 'undefined'?
						((typeof $141['__array'][$142=$constant_int_2]) != 'undefined'?$141['__array'][$142]:
							$141['__getitem__']($142)):
							$141['__getitem__']($constant_int_2)), (typeof ($143=args)['__array'] != 'undefined'?
						((typeof $143['__array'][$144=$constant_int_3]) != 'undefined'?$143['__array'][$144]:
							$143['__getitem__']($144)):
							$143['__getitem__']($constant_int_3))]);
				}
				else if ((($bool37=$p['op_eq']((($len3=args) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))), $constant_int_2)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					destXY = $p['tuple']([(typeof ($145=args)['__array'] != 'undefined'?
						((typeof $145['__array'][$146=$constant_int_0]) != 'undefined'?$145['__array'][$146]:
							$145['__getitem__']($146)):
							$145['__getitem__']($constant_int_0)), (typeof ($147=args)['__array'] != 'undefined'?
						((typeof $147['__array'][$148=$constant_int_1]) != 'undefined'?$147['__array'][$148]:
							$147['__getitem__']($148)):
							$147['__getitem__']($constant_int_1))]);
					destWH = $p['tuple']([$p['getattr'](img_elem, 'width'), $p['getattr'](img_elem, 'height')]);
				}
				else {
					throw ($p['TypeError']('Wrong number of arguments for SVGCanvas.drawImage'));
				}
				image = self['_createElementSVG']('image');
				image['setAttributeNS']('http://www.w3.org/1999/xlink', 'xlink:href', url);
				$m['DOM']['setElemAttribute'](image, 'x', $p['str']($p['int']((typeof ($149=destXY)['__array'] != 'undefined'?
					((typeof $149['__array'][$150=$constant_int_0]) != 'undefined'?$149['__array'][$150]:
						$149['__getitem__']($150)):
						$149['__getitem__']($constant_int_0)))));
				$m['DOM']['setElemAttribute'](image, 'y', $p['str']($p['int']((typeof ($151=destXY)['__array'] != 'undefined'?
					((typeof $151['__array'][$152=$constant_int_1]) != 'undefined'?$151['__array'][$152]:
						$151['__getitem__']($152)):
						$151['__getitem__']($constant_int_1)))));
				$m['DOM']['setElemAttribute'](image, 'width', $p['str']($p['int']((typeof ($153=destWH)['__array'] != 'undefined'?
					((typeof $153['__array'][$154=$constant_int_0]) != 'undefined'?$153['__array'][$154]:
						$153['__getitem__']($154)):
						$153['__getitem__']($constant_int_0)))));
				$m['DOM']['setElemAttribute'](image, 'height', $p['str']($p['int']((typeof ($155=destWH)['__array'] != 'undefined'?
					((typeof $155['__array'][$156=$constant_int_1]) != 'undefined'?$155['__array'][$156]:
						$155['__getitem__']($156)):
						$155['__getitem__']($constant_int_1)))));
				self['_addElementSVG'](image);
				return null;
			}
	, 1, ['args',null,['self'],['img']]);
			$cls_definition['drawImage'] = $method;
			$method = $pyjs__bind_method2('saveContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['ctx_stack']['append']($p['dict']($p['getattr'](self, 'ctx')));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['saveContext'] = $method;
			$method = $pyjs__bind_method2('restoreContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool38,$len4;
				if ((($bool38=$p['op_eq']((($len4=$p['getattr'](self, 'ctx_stack')) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))), $constant_int_0)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ctx', self['ctx_stack']['pop']()) : $p['setattr'](self, 'ctx', self['ctx_stack']['pop']()); 
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['restoreContext'] = $method;
			$method = $pyjs__bind_method2('getLineCap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $157,$158;
				return (typeof ($157=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $157['__array'][$158='linecap']) != 'undefined'?$157['__array'][$158]:
						$157['__getitem__']($158)):
						$157['__getitem__']('linecap'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineCap'] = $method;
			$method = $pyjs__bind_method2('setLineCap', function(lineCap) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineCap = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'ctx')['__setitem__']('linecap', lineCap);
				return null;
			}
	, 1, [null,null,['self'],['lineCap']]);
			$cls_definition['setLineCap'] = $method;
			$method = $pyjs__bind_method2('getLineJoin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $159,$160;
				return (typeof ($159=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $159['__array'][$160='linejoin']) != 'undefined'?$159['__array'][$160]:
						$159['__getitem__']($160)):
						$159['__getitem__']('linejoin'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineJoin'] = $method;
			$method = $pyjs__bind_method2('setLineJoin', function(lineJoin) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineJoin = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'ctx')['__setitem__']('linejoin', lineJoin);
				return null;
			}
	, 1, [null,null,['self'],['lineJoin']]);
			$cls_definition['setLineJoin'] = $method;
			$method = $pyjs__bind_method2('getLineWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $162,$161;
				return (typeof ($161=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $161['__array'][$162='stroke-width']) != 'undefined'?$161['__array'][$162]:
						$161['__getitem__']($162)):
						$161['__getitem__']('stroke-width'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineWidth'] = $method;
			$method = $pyjs__bind_method2('setLineWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'ctx')['__setitem__']('stroke-width', $p['int'](width));
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setLineWidth'] = $method;
			$method = $pyjs__bind_method2('getMiterLimit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $164,$163;
				return (typeof ($163=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $163['__array'][$164='miterlimit']) != 'undefined'?$163['__array'][$164]:
						$163['__getitem__']($164)):
						$163['__getitem__']('miterlimit'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMiterLimit'] = $method;
			$method = $pyjs__bind_method2('setMiterLimit', function(miterLimit) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					miterLimit = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'ctx')['__setitem__']('miterlimit', miterLimit);
				return null;
			}
	, 1, [null,null,['self'],['miterLimit']]);
			$cls_definition['setMiterLimit'] = $method;
			$method = $pyjs__bind_method2('setStrokeStyle', function(grad) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					grad = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool39;
				if ((($bool39=$p['isinstance'](grad, $m['SVGCanvasGradient'])) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39['__nonzero__']=='function'?
								$bool39['__nonzero__']() :
								(typeof $bool39['__len__']=='function'?
									($bool39['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					grad = grad['getColor']();
				}
				$p['getattr'](self, 'ctx')['__setitem__']('stroke', grad);
				return null;
			}
	, 1, [null,null,['self'],['grad']]);
			$cls_definition['setStrokeStyle'] = $method;
			$method = $pyjs__bind_method2('setBackgroundColor', function(color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var style,$add147,$add150,$add149,$add148;
				style = (typeof ($add149=(typeof ($add147='background-color: ')==typeof ($add148=$p['str'](color)) && (typeof $add147=='number'||typeof $add147=='string')?
					$add147+$add148:
					$p['op_add']($add147,$add148)))==typeof ($add150=';') && (typeof $add149=='number'||typeof $add149=='string')?
					$add149+$add150:
					$p['op_add']($add149,$add150));
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'canvas'), 'style', style);
				return null;
			}
	, 1, [null,null,['self'],['color']]);
			$cls_definition['setBackgroundColor'] = $method;
			$method = $pyjs__bind_method2('getGlobalAlpha', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $166,$165;
				return (typeof ($165=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $165['__array'][$166='alpha']) != 'undefined'?$165['__array'][$166]:
						$165['__getitem__']($166)):
						$165['__getitem__']('alpha'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalAlpha'] = $method;
			$method = $pyjs__bind_method2('setGlobalAlpha', function(alpha) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'ctx')['__setitem__']('alpha', alpha);
				return null;
			}
	, 1, [null,null,['self'],['alpha']]);
			$cls_definition['setGlobalAlpha'] = $method;
			$method = $pyjs__bind_method2('getGlobalCompositeOperation', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $167,$168;
				return (typeof ($167=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $167['__array'][$168='composite']) != 'undefined'?$167['__array'][$168]:
						$167['__getitem__']($168)):
						$167['__getitem__']('composite'));
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalCompositeOperation'] = $method;
			$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(globalCompositeOperation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					globalCompositeOperation = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'ctx')['__setitem__']('composite', globalCompositeOperation);
				return null;
			}
	, 1, [null,null,['self'],['globalCompositeOperation']]);
			$cls_definition['setGlobalCompositeOperation'] = $method;
			$method = $pyjs__bind_method2('setFillStyle', function(grad) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					grad = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool40;
				if ((($bool40=$p['isinstance'](grad, $m['SVGCanvasGradient'])) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
						false :
						(typeof $bool40=='object'?
							(typeof $bool40['__nonzero__']=='function'?
								$bool40['__nonzero__']() :
								(typeof $bool40['__len__']=='function'?
									($bool40['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					grad = grad['getColor']();
				}
				$p['getattr'](self, 'ctx')['__setitem__']('fill', grad);
				return null;
			}
	, 1, [null,null,['self'],['grad']]);
			$cls_definition['setFillStyle'] = $method;
			$method = $pyjs__bind_method2('setFont', function(font) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					font = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$p['getattr'](self, 'ctx')['__setitem__']('font', font);
				return null;
			}
	, 1, [null,null,['self'],['font']]);
			$cls_definition['setFont'] = $method;
			$method = $pyjs__bind_method2('setWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setPixelWidth'](width);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setWidth'] = $method;
			$method = $pyjs__bind_method2('setHeight', function(height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setPixelHeight'](height);
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setHeight'] = $method;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setCoordSize'](width, height);
				self['setPixelHeight'](height);
				self['setPixelWidth'](width);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['resize'] = $method;
			$method = $pyjs__bind_method2('setCoordSize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['setCoordWidth'](width);
				self['setCoordHeight'](height);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['setCoordSize'] = $method;
			$method = $pyjs__bind_method2('getCoordHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'coordHeight');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCoordHeight'] = $method;
			$method = $pyjs__bind_method2('setCoordHeight', function(height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('coordHeight', $p['int'](height)) : $p['setattr'](self, 'coordHeight', $p['int'](height)); 
				self['_set_base_transform']();
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setCoordHeight'] = $method;
			$method = $pyjs__bind_method2('getCoordWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, 'coordWidth');
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCoordWidth'] = $method;
			$method = $pyjs__bind_method2('setCoordWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('coordWidth', $p['int'](width)) : $p['setattr'](self, 'coordWidth', $p['int'](width)); 
				self['_set_base_transform']();
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setCoordWidth'] = $method;
			$method = $pyjs__bind_method2('setPixelHeight', function(height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				height = $p['int'](height);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pixelHeight', height) : $p['setattr'](self, 'pixelHeight', height); 
				$m['FocusWidget']['setHeight'](self, height);
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'canvas'), 'height', $p['str'](height));
				self['_set_base_transform']();
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setPixelHeight'] = $method;
			$method = $pyjs__bind_method2('setPixelWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				width = $p['int'](width);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pixelWidth', width) : $p['setattr'](self, 'pixelWidth', width); 
				$m['FocusWidget']['setWidth'](self, width);
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'canvas'), 'width', $p['str'](width));
				self['_set_base_transform']();
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setPixelWidth'] = $method;
			$method = $pyjs__bind_method2('_set_base_transform', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add152,$add153,$add151,$add156,$add154,$add155;
				self['clear']();
				$m['DOM']['setElemAttribute']($p['getattr'](self, 'canvas'), 'viewBox', (typeof ($add155=(typeof ($add153=(typeof ($add151='0 0 ')==typeof ($add152=$p['str']($p['getattr'](self, 'coordWidth'))) && (typeof $add151=='number'||typeof $add151=='string')?
					$add151+$add152:
					$p['op_add']($add151,$add152)))==typeof ($add154=' ') && (typeof $add153=='number'||typeof $add153=='string')?
					$add153+$add154:
					$p['op_add']($add153,$add154)))==typeof ($add156=$p['str']($p['getattr'](self, 'coordHeight'))) && (typeof $add155=='number'||typeof $add155=='string')?
					$add155+$add156:
					$p['op_add']($add155,$add156)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_set_base_transform'] = $method;
			$method = $pyjs__bind_method2('_matrix_mult', function(t, m) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					t = arguments[1];
					m = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $174,$175,$176,$177,$170,$171,$172,$173,$178,$179,$189,$188,$mul28,$mul29,$181,$180,$mul24,$182,$mul22,$mul23,$187,$186,$add169,$add168,$add163,$add162,$add161,$add160,$add167,$add166,$add165,$add164,$169,$mul39,$mul38,$mul35,$mul34,x12,x22,$mul31,$mul30,$mul33,$mul32,$add170,$add171,$add172,x21,x23,x13,$220,x11,$mul37,$mul36,$mul19,$mul21,$208,$209,$202,$203,$200,$201,$206,$207,$204,$205,$mul26,$mul27,$183,$mul25,$185,$184,$mul20,$add158,$add159,$add157,$mul40,$mul41,$mul42,$198,$199,$219,$218,$215,$214,$217,$216,$211,$210,$213,$212,$196,$197,$194,$195,$192,$193,$190,$191;
				x11 = (typeof ($add157=(typeof ($mul19=(typeof ($169=t)['__array'] != 'undefined'?
					((typeof $169['__array'][$170=$constant_int_0]) != 'undefined'?$169['__array'][$170]:
						$169['__getitem__']($170)):
						$169['__getitem__']($constant_int_0)))==typeof ($mul20=(typeof ($171=m)['__array'] != 'undefined'?
					((typeof $171['__array'][$172=$constant_int_0]) != 'undefined'?$171['__array'][$172]:
						$171['__getitem__']($172)):
						$171['__getitem__']($constant_int_0))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)))==typeof ($add158=(typeof ($mul21=(typeof ($173=t)['__array'] != 'undefined'?
					((typeof $173['__array'][$174=$constant_int_2]) != 'undefined'?$173['__array'][$174]:
						$173['__getitem__']($174)):
						$173['__getitem__']($constant_int_2)))==typeof ($mul22=(typeof ($175=m)['__array'] != 'undefined'?
					((typeof $175['__array'][$176=$constant_int_1]) != 'undefined'?$175['__array'][$176]:
						$175['__getitem__']($176)):
						$175['__getitem__']($constant_int_1))) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22))) && (typeof $add157=='number'||typeof $add157=='string')?
					$add157+$add158:
					$p['op_add']($add157,$add158));
				x21 = (typeof ($add159=(typeof ($mul23=(typeof ($177=t)['__array'] != 'undefined'?
					((typeof $177['__array'][$178=$constant_int_1]) != 'undefined'?$177['__array'][$178]:
						$177['__getitem__']($178)):
						$177['__getitem__']($constant_int_1)))==typeof ($mul24=(typeof ($179=m)['__array'] != 'undefined'?
					((typeof $179['__array'][$180=$constant_int_0]) != 'undefined'?$179['__array'][$180]:
						$179['__getitem__']($180)):
						$179['__getitem__']($constant_int_0))) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)))==typeof ($add160=(typeof ($mul25=(typeof ($181=t)['__array'] != 'undefined'?
					((typeof $181['__array'][$182=$constant_int_3]) != 'undefined'?$181['__array'][$182]:
						$181['__getitem__']($182)):
						$181['__getitem__']($constant_int_3)))==typeof ($mul26=(typeof ($183=m)['__array'] != 'undefined'?
					((typeof $183['__array'][$184=$constant_int_1]) != 'undefined'?$183['__array'][$184]:
						$183['__getitem__']($184)):
						$183['__getitem__']($constant_int_1))) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26))) && (typeof $add159=='number'||typeof $add159=='string')?
					$add159+$add160:
					$p['op_add']($add159,$add160));
				x12 = (typeof ($add161=(typeof ($mul27=(typeof ($185=t)['__array'] != 'undefined'?
					((typeof $185['__array'][$186=$constant_int_0]) != 'undefined'?$185['__array'][$186]:
						$185['__getitem__']($186)):
						$185['__getitem__']($constant_int_0)))==typeof ($mul28=(typeof ($187=m)['__array'] != 'undefined'?
					((typeof $187['__array'][$188=$constant_int_2]) != 'undefined'?$187['__array'][$188]:
						$187['__getitem__']($188)):
						$187['__getitem__']($constant_int_2))) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)))==typeof ($add162=(typeof ($mul29=(typeof ($189=t)['__array'] != 'undefined'?
					((typeof $189['__array'][$190=$constant_int_2]) != 'undefined'?$189['__array'][$190]:
						$189['__getitem__']($190)):
						$189['__getitem__']($constant_int_2)))==typeof ($mul30=(typeof ($191=m)['__array'] != 'undefined'?
					((typeof $191['__array'][$192=$constant_int_3]) != 'undefined'?$191['__array'][$192]:
						$191['__getitem__']($192)):
						$191['__getitem__']($constant_int_3))) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30))) && (typeof $add161=='number'||typeof $add161=='string')?
					$add161+$add162:
					$p['op_add']($add161,$add162));
				x22 = (typeof ($add163=(typeof ($mul31=(typeof ($193=t)['__array'] != 'undefined'?
					((typeof $193['__array'][$194=$constant_int_1]) != 'undefined'?$193['__array'][$194]:
						$193['__getitem__']($194)):
						$193['__getitem__']($constant_int_1)))==typeof ($mul32=(typeof ($195=m)['__array'] != 'undefined'?
					((typeof $195['__array'][$196=$constant_int_2]) != 'undefined'?$195['__array'][$196]:
						$195['__getitem__']($196)):
						$195['__getitem__']($constant_int_2))) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32)))==typeof ($add164=(typeof ($mul33=(typeof ($197=t)['__array'] != 'undefined'?
					((typeof $197['__array'][$198=$constant_int_3]) != 'undefined'?$197['__array'][$198]:
						$197['__getitem__']($198)):
						$197['__getitem__']($constant_int_3)))==typeof ($mul34=(typeof ($199=m)['__array'] != 'undefined'?
					((typeof $199['__array'][$200=$constant_int_3]) != 'undefined'?$199['__array'][$200]:
						$199['__getitem__']($200)):
						$199['__getitem__']($constant_int_3))) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34))) && (typeof $add163=='number'||typeof $add163=='string')?
					$add163+$add164:
					$p['op_add']($add163,$add164));
				x13 = (typeof ($add167=(typeof ($add165=(typeof ($mul35=(typeof ($201=t)['__array'] != 'undefined'?
					((typeof $201['__array'][$202=$constant_int_0]) != 'undefined'?$201['__array'][$202]:
						$201['__getitem__']($202)):
						$201['__getitem__']($constant_int_0)))==typeof ($mul36=(typeof ($203=m)['__array'] != 'undefined'?
					((typeof $203['__array'][$204=$constant_int_4]) != 'undefined'?$203['__array'][$204]:
						$203['__getitem__']($204)):
						$203['__getitem__']($constant_int_4))) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36)))==typeof ($add166=(typeof ($mul37=(typeof ($205=t)['__array'] != 'undefined'?
					((typeof $205['__array'][$206=$constant_int_2]) != 'undefined'?$205['__array'][$206]:
						$205['__getitem__']($206)):
						$205['__getitem__']($constant_int_2)))==typeof ($mul38=(typeof ($207=m)['__array'] != 'undefined'?
					((typeof $207['__array'][$208=$constant_int_5]) != 'undefined'?$207['__array'][$208]:
						$207['__getitem__']($208)):
						$207['__getitem__']($constant_int_5))) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38))) && (typeof $add165=='number'||typeof $add165=='string')?
					$add165+$add166:
					$p['op_add']($add165,$add166)))==typeof ($add168=(typeof ($209=t)['__array'] != 'undefined'?
					((typeof $209['__array'][$210=$constant_int_4]) != 'undefined'?$209['__array'][$210]:
						$209['__getitem__']($210)):
						$209['__getitem__']($constant_int_4))) && (typeof $add167=='number'||typeof $add167=='string')?
					$add167+$add168:
					$p['op_add']($add167,$add168));
				x23 = (typeof ($add171=(typeof ($add169=(typeof ($mul39=(typeof ($211=t)['__array'] != 'undefined'?
					((typeof $211['__array'][$212=$constant_int_1]) != 'undefined'?$211['__array'][$212]:
						$211['__getitem__']($212)):
						$211['__getitem__']($constant_int_1)))==typeof ($mul40=(typeof ($213=m)['__array'] != 'undefined'?
					((typeof $213['__array'][$214=$constant_int_4]) != 'undefined'?$213['__array'][$214]:
						$213['__getitem__']($214)):
						$213['__getitem__']($constant_int_4))) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40)))==typeof ($add170=(typeof ($mul41=(typeof ($215=t)['__array'] != 'undefined'?
					((typeof $215['__array'][$216=$constant_int_3]) != 'undefined'?$215['__array'][$216]:
						$215['__getitem__']($216)):
						$215['__getitem__']($constant_int_3)))==typeof ($mul42=(typeof ($217=m)['__array'] != 'undefined'?
					((typeof $217['__array'][$218=$constant_int_5]) != 'undefined'?$217['__array'][$218]:
						$217['__getitem__']($218)):
						$217['__getitem__']($constant_int_5))) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42))) && (typeof $add169=='number'||typeof $add169=='string')?
					$add169+$add170:
					$p['op_add']($add169,$add170)))==typeof ($add172=(typeof ($219=t)['__array'] != 'undefined'?
					((typeof $219['__array'][$220=$constant_int_5]) != 'undefined'?$219['__array'][$220]:
						$219['__getitem__']($220)):
						$219['__getitem__']($constant_int_5))) && (typeof $add171=='number'||typeof $add171=='string')?
					$add171+$add172:
					$p['op_add']($add171,$add172));
				return $p['list']([x11, x21, x12, x22, x13, x23]);
			}
	, 1, [null,null,['self'],['t'],['m']]);
			$cls_definition['_matrix_mult'] = $method;
			$method = $pyjs__bind_method2('_apply_current_transforms', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add178,$add179,$238,$237,$236,$235,$add173,$add174,$add175,$add176,$add177,$cmp20,$233,group,transform,$add189,$add188,$232,$add181,$add180,$add183,$add182,$add185,$add184,$add187,$add186,$234,$228,$229,$bool41,$224,$225,$226,$227,$221,$222,$223,$231,$230,$cmp19,$add196,$add194,$add195,$add192,$add193,$add190,$add191,mx;
				if ((($bool41=((($cmp19=$m['DOM']['getChildCount']((typeof ($221=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $221['__array'][$222='transform_group']) != 'undefined'?$221['__array'][$222]:
						$221['__getitem__']($222)):
						$221['__getitem__']('transform_group'))))===($cmp20=$constant_int_0)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
						false :
						(typeof $bool41=='object'?
							(typeof $bool41['__nonzero__']=='function'?
								$bool41['__nonzero__']() :
								(typeof $bool41['__len__']=='function'?
									($bool41['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					group = self['_createElementSVG']('g');
					$m['DOM']['appendChild']($p['getattr'](self, 'canvas'), group);
					$p['getattr'](self, 'ctx')['__setitem__']('transform_group', group);
				}
				mx = (typeof ($223=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $223['__array'][$224='matrix']) != 'undefined'?$223['__array'][$224]:
						$223['__getitem__']($224)):
						$223['__getitem__']('matrix'));
				transform = (typeof ($add195=(typeof ($add193=(typeof ($add191=(typeof ($add189=(typeof ($add187=(typeof ($add185=(typeof ($add183=(typeof ($add181=(typeof ($add179=(typeof ($add177=(typeof ($add175=(typeof ($add173='matrix(')==typeof ($add174=$p['str']((typeof ($225=mx)['__array'] != 'undefined'?
					((typeof $225['__array'][$226=$constant_int_0]) != 'undefined'?$225['__array'][$226]:
						$225['__getitem__']($226)):
						$225['__getitem__']($constant_int_0)))) && (typeof $add173=='number'||typeof $add173=='string')?
					$add173+$add174:
					$p['op_add']($add173,$add174)))==typeof ($add176=',') && (typeof $add175=='number'||typeof $add175=='string')?
					$add175+$add176:
					$p['op_add']($add175,$add176)))==typeof ($add178=$p['str']((typeof ($227=mx)['__array'] != 'undefined'?
					((typeof $227['__array'][$228=$constant_int_1]) != 'undefined'?$227['__array'][$228]:
						$227['__getitem__']($228)):
						$227['__getitem__']($constant_int_1)))) && (typeof $add177=='number'||typeof $add177=='string')?
					$add177+$add178:
					$p['op_add']($add177,$add178)))==typeof ($add180=',') && (typeof $add179=='number'||typeof $add179=='string')?
					$add179+$add180:
					$p['op_add']($add179,$add180)))==typeof ($add182=$p['str']((typeof ($229=mx)['__array'] != 'undefined'?
					((typeof $229['__array'][$230=$constant_int_2]) != 'undefined'?$229['__array'][$230]:
						$229['__getitem__']($230)):
						$229['__getitem__']($constant_int_2)))) && (typeof $add181=='number'||typeof $add181=='string')?
					$add181+$add182:
					$p['op_add']($add181,$add182)))==typeof ($add184=',') && (typeof $add183=='number'||typeof $add183=='string')?
					$add183+$add184:
					$p['op_add']($add183,$add184)))==typeof ($add186=$p['str']((typeof ($231=mx)['__array'] != 'undefined'?
					((typeof $231['__array'][$232=$constant_int_3]) != 'undefined'?$231['__array'][$232]:
						$231['__getitem__']($232)):
						$231['__getitem__']($constant_int_3)))) && (typeof $add185=='number'||typeof $add185=='string')?
					$add185+$add186:
					$p['op_add']($add185,$add186)))==typeof ($add188=',') && (typeof $add187=='number'||typeof $add187=='string')?
					$add187+$add188:
					$p['op_add']($add187,$add188)))==typeof ($add190=$p['str']((typeof ($233=mx)['__array'] != 'undefined'?
					((typeof $233['__array'][$234=$constant_int_4]) != 'undefined'?$233['__array'][$234]:
						$233['__getitem__']($234)):
						$233['__getitem__']($constant_int_4)))) && (typeof $add189=='number'||typeof $add189=='string')?
					$add189+$add190:
					$p['op_add']($add189,$add190)))==typeof ($add192=',') && (typeof $add191=='number'||typeof $add191=='string')?
					$add191+$add192:
					$p['op_add']($add191,$add192)))==typeof ($add194=$p['str']((typeof ($235=mx)['__array'] != 'undefined'?
					((typeof $235['__array'][$236=$constant_int_5]) != 'undefined'?$235['__array'][$236]:
						$235['__getitem__']($236)):
						$235['__getitem__']($constant_int_5)))) && (typeof $add193=='number'||typeof $add193=='string')?
					$add193+$add194:
					$p['op_add']($add193,$add194)))==typeof ($add196=') ') && (typeof $add195=='number'||typeof $add195=='string')?
					$add195+$add196:
					$p['op_add']($add195,$add196));
				$m['DOM']['setElemAttribute']((typeof ($237=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $237['__array'][$238='transform_group']) != 'undefined'?$237['__array'][$238]:
						$237['__getitem__']($238)):
						$237['__getitem__']('transform_group')), 'transform', transform);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_apply_current_transforms'] = $method;
			$method = $pyjs__bind_method2('transform', function(m11, m12, m21, m22, dx, dy) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					m11 = arguments[1];
					m12 = arguments[2];
					m21 = arguments[3];
					m22 = arguments[4];
					dx = arguments[5];
					dy = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self'],['m11'],['m12'],['m21'],['m22'],['dx'],['dy']]);
			$cls_definition['transform'] = $method;
			$method = $pyjs__bind_method2('rotate', function(angle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					angle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$239,m,s,t,$240;
				t = (typeof ($239=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $239['__array'][$240='matrix']) != 'undefined'?$239['__array'][$240]:
						$239['__getitem__']($240)):
						$239['__getitem__']('matrix'));
				s = $m['math']['sin'](angle);
				c = $m['math']['cos'](angle);
				m = $p['list']([c, s, (typeof ($usub1=s)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), c, $constant_int_0, $constant_int_0]);
				$p['getattr'](self, 'ctx')['__setitem__']('matrix', self['_matrix_mult'](t, m));
				self['_apply_current_transforms']();
				return null;
			}
	, 1, [null,null,['self'],['angle']]);
			$cls_definition['rotate'] = $method;
			$method = $pyjs__bind_method2('scale', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var m,t,$242,$241;
				t = (typeof ($241=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $241['__array'][$242='matrix']) != 'undefined'?$241['__array'][$242]:
						$241['__getitem__']($242)):
						$241['__getitem__']('matrix'));
				m = $p['list']([x, $constant_int_0, $constant_int_0, y, $constant_int_0, $constant_int_0]);
				$p['getattr'](self, 'ctx')['__setitem__']('matrix', self['_matrix_mult'](t, m));
				self['_apply_current_transforms']();
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['scale'] = $method;
			$method = $pyjs__bind_method2('translate', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '550ba5d086dbc4e72a12fd1b7852fe73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var m,$246,xy,t,$248,$247,$244,$245,$243;
				xy = self['_integerize'](x, y);
				t = (typeof ($243=$p['getattr'](self, 'ctx'))['__array'] != 'undefined'?
					((typeof $243['__array'][$244='matrix']) != 'undefined'?$243['__array'][$244]:
						$243['__getitem__']($244)):
						$243['__getitem__']('matrix'));
				m = $p['list']([$constant_int_1, $constant_int_0, $constant_int_0, $constant_int_1, (typeof ($245=xy)['__array'] != 'undefined'?
					((typeof $245['__array'][$246=$constant_int_0]) != 'undefined'?$245['__array'][$246]:
						$245['__getitem__']($246)):
						$245['__getitem__']($constant_int_0)), (typeof ($247=xy)['__array'] != 'undefined'?
					((typeof $247['__array'][$248=$constant_int_1]) != 'undefined'?$247['__array'][$248]:
						$247['__getitem__']($248)):
						$247['__getitem__']($constant_int_1))]);
				$p['getattr'](self, 'ctx')['__setitem__']('matrix', self['_matrix_mult'](t, m));
				self['_apply_current_transforms']();
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['translate'] = $method;
			var $bases = new Array($m['FocusWidget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SVGCanvas', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.SVGCanvas */


/* end module: pyjamas.Canvas.SVGCanvas */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.Focus', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'math']
*/
