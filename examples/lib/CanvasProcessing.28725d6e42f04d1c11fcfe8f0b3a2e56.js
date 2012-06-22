/* start module: CanvasProcessing */
$pyjs['loaded_modules']['CanvasProcessing'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['CanvasProcessing']['__was_initialized__']) return $pyjs['loaded_modules']['CanvasProcessing'];
	var $m = $pyjs['loaded_modules']['CanvasProcessing'];
	$m['__repr__'] = function() { return '<module: CanvasProcessing>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CanvasProcessing';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_150 = new $p['int'](150);
		var $constant_int_121 = new $p['int'](121);
		var $constant_int_184 = new $p['int'](184);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_255 = new $p['int'](255);
		$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['getFirstChild'] = $p['___import___']('pyjamas.DOM.getFirstChild', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['math'] = $p['___import___']('math', null);
		;
		$m['p'] = null;
		$m['radius'] = 50.0;
		$m['delay'] = $constant_int_16;
		$m['setup'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $div2,$div3,$div1,$div4;
			$m['p']['size']($constant_int_200, $constant_int_200);
			$m['p']['strokeWeight']($constant_int_10);
			$m['p']['frameRate']($constant_int_15);
			$m['X'] = (typeof ($div1=$p['getattr']($m['p'], 'width'))==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			$m['Y'] = (typeof ($div3=$p['getattr']($m['p'], 'width'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4));
			$m['nX'] = $m['X'];
			$m['nY'] = $m['Y'];
			return null;
		};
		$m['setup']['__name__'] = 'setup';

		$m['setup']['__bind_type__'] = 0;
		$m['setup']['__args__'] = [null,null];
		$m['draw'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $div10,$sub3,$sub2,$sub1,$sub4,$div8,$div9,$div6,$div7,$div5,$add2,$add3,$add1,$add6,$add4,$add5;
			$m['radius'] = (typeof ($add1=$m['radius'])==typeof ($add2=$m['math']['sin']((typeof ($div5=$p['getattr']($m['p'], 'frameCount'))==typeof ($div6=$constant_int_4) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6)))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			$m['X'] = (typeof ($add3=$m['X'])==typeof ($add4=(typeof ($div7=(typeof ($sub1=$m['nX'])==typeof ($sub2=$m['X']) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)))==typeof ($div8=$m['delay']) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			$m['Y'] = (typeof ($add5=$m['Y'])==typeof ($add6=(typeof ($div9=(typeof ($sub3=$m['nY'])==typeof ($sub4=$m['Y']) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))==typeof ($div10=$m['delay']) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			$m['p']['background']($constant_int_100);
			$m['p']['fill']($constant_int_0, $constant_int_121, $constant_int_184);
			$m['p']['stroke']($constant_int_255);
			$m['p']['ellipse']($m['X'], $m['Y'], $m['radius'], $m['radius']);
			return null;
		};
		$m['draw']['__name__'] = 'draw';

		$m['draw']['__bind_type__'] = 0;
		$m['draw']['__args__'] = [null,null];
		$m['mouseMoved'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$m['nX'] = $p['getattr']($m['p'], 'mouseX');
			$m['nY'] = $p['getattr']($m['p'], 'mouseY');
			return null;
		};
		$m['mouseMoved']['__name__'] = 'mouseMoved';

		$m['mouseMoved']['__bind_type__'] = 0;
		$m['mouseMoved']['__args__'] = [null,null];
		$m['ProcessingCanvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'CanvasProcessing';
			$cls_definition['__md5__'] = 'f4907b7d6512dfe9f528c7f947664dec';
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
					if (self.prototype['__md5__'] !== 'f4907b7d6512dfe9f528c7f947664dec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['GWTCanvas']['__init__'](self, $constant_int_150, $constant_int_150, $constant_int_150, $constant_int_150);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('c', self['getCanvasElement']()) : $p['setattr'](self, 'c', self['getCanvasElement']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('p', Processing($p['getattr'](self, 'c'))) : $p['setattr'](self, 'p', Processing($p['getattr'](self, 'c'))); 
				$m['p'] = $p['getattr'](self, 'p');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GWTCanvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ProcessingCanvas', $p['tuple']($bases), $data);
		})();
		if ((($bool1=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$m['note'] = $m['HTML']('\nNote that this is an example of using processing.js.<br>\nSee <a href=http://ejohn.org/blog/processingjs/>http://ejohn.org/blog/processingjs/</a> for more info.<br>\nSince processing.js is built for state-of-the-art browser<br>\nthat properly implement canvas, IE is not supported.<br>\n<br>\n');
			$m['RootPanel']()['add']($m['note']);
			$m['PC'] = $m['ProcessingCanvas']();
			$p['getattr']($m['PC'], 'p')['__is_instance__'] && typeof $p['getattr']($m['PC'], 'p')['__setattr__'] == 'function' ? $p['getattr']($m['PC'], 'p')['__setattr__']('setup', $m['setup']) : $p['setattr']($p['getattr']($m['PC'], 'p'), 'setup', $m['setup']); 
			$p['getattr']($m['PC'], 'p')['__is_instance__'] && typeof $p['getattr']($m['PC'], 'p')['__setattr__'] == 'function' ? $p['getattr']($m['PC'], 'p')['__setattr__']('draw', $m['draw']) : $p['setattr']($p['getattr']($m['PC'], 'p'), 'draw', $m['draw']); 
			$p['getattr']($m['PC'], 'p')['__is_instance__'] && typeof $p['getattr']($m['PC'], 'p')['__setattr__'] == 'function' ? $p['getattr']($m['PC'], 'p')['__setattr__']('mouseMoved', $m['mouseMoved']) : $p['setattr']($p['getattr']($m['PC'], 'p'), 'mouseMoved', $m['mouseMoved']); 
			$m['PC']['p']['init']();
			$m['RootPanel']()['add']($m['PC']);
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end CanvasProcessing */


/* end module: CanvasProcessing */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM.getFirstChild', 'pyjamas.DOM', 'pyjamas.Window', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'math']
*/
/*
PYJS_JS: [('processing.js', 'default', 'middle')]
*/
