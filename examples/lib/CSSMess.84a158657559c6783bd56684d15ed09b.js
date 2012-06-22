/* start module: CSSMess */
$pyjs['loaded_modules']['CSSMess'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['CSSMess']['__was_initialized__']) return $pyjs['loaded_modules']['CSSMess'];
	var $m = $pyjs['loaded_modules']['CSSMess'];
	$m['__repr__'] = function() { return '<module: CSSMess>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CSSMess';
	$m['__name__'] = __mod_name__;
	try {
		var $bool5;

		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['pygwt'] = $p['___import___']('pygwt', null);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['StyleSheetCssFile'] = $p['___import___']('pyjamas.ui.CSS.StyleSheetCssFile', null, null, false);
		$m['StyleSheetCssText'] = $p['___import___']('pyjamas.ui.CSS.StyleSheetCssText', null, null, false);
		$m['newcolours'] = '\n<!--\n.teststyle {\n  font-size: 100%;\n  margin: 20px;\n  padding: 20px;\n  background-color: #8080ff;\n}\n-->\n';
		$m['morenewcolours'] = '\n<!--\n.teststyle {\n  font-size: 200%;\n  margin: 20px;\n  padding: 20px;\n  background-color: #ff80ff;\n}\n-->\n';
		$m['sc'] = null;
		$m['greet'] = function(fred) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $bool2,$bool3,$bool1,$bool4,txt;
			txt = fred['getText']();
			if ((($bool1=$p['op_eq'](txt, 'Click me lots')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$m['sc'] = $m['StyleSheetCssText']($m['newcolours']);
				fred['setText']('Did it work?');
			}
			else if ((($bool2=$p['op_eq'](txt, 'Did it work?')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$m['sc']['remove']();
				fred['setText']('It did!');
			}
			else if ((($bool3=$p['op_eq'](txt, 'It did!')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$m['sc'] = $m['StyleSheetCssText']($m['morenewcolours']);
				fred['setText']('Play again!');
			}
			else if ((($bool4=!$p['op_eq'](txt, 'Ok enough now')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				fred['setText']('Ok enough now');
				$m['sc']['remove']();
			}
			return null;
		};
		$m['greet']['__name__'] = 'greet';

		$m['greet']['__bind_type__'] = 0;
		$m['greet']['__args__'] = [null,null,['fred']];
		if ((($bool5=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			$m['pyjd']['setup']('public/CSSMess.html?fred=foo#me');
			$m['b'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'StyleName':'teststyle'}, 'Click me lots', $m['greet']]);
			$m['h'] = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'teststyle'}, '<b>CSSMess World</b> (html)']);
			$m['l'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'teststyle'}, 'CSSMess World (label)']);
			$m['base'] = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'teststyle'}, $p['sprintf']('CSSMess from %s', $m['pygwt']['getModuleBaseURL']())]);
			$m['RootPanel']()['add']($m['b']);
			$m['RootPanel']()['add']($m['h']);
			$m['RootPanel']()['add']($m['l']);
			$m['RootPanel']()['add']($m['base']);
			$m['StyleSheetCssFile']('./CSSMess.css');
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end CSSMess */


/* end module: CSSMess */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.Window', 'pygwt', 'pyjamas.DOM', 'pyjamas.ui.CSS.StyleSheetCssFile', 'pyjamas.ui.CSS', 'pyjamas.ui.CSS.StyleSheetCssText']
*/
