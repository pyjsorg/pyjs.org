/* start module: Anchor */
$pyjs['loaded_modules']['Anchor'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Anchor']['__was_initialized__']) return $pyjs['loaded_modules']['Anchor'];
	var $m = $pyjs['loaded_modules']['Anchor'];
	$m['__repr__'] = function() { return '<module: Anchor>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Anchor';
	$m['__name__'] = __mod_name__;
	try {
		var $bool1,$cmp2,$iter2_type,$iter2_iter,$bool2,$iter1_array,$1,$iter1_nextval,$len1,$bool3,$iter1_iter,$2,$iter2_nextval,$cmp1,$iter1_type,$iter2_idx,$iter1_idx,$iter2_array;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$m['Anchor'] = $p['___import___']('pyjamas.ui.Anchor.Anchor', null, null, false);
		$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['onClick'] = function(sender) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$m['Window']['alert']($p['sprintf']('Make service request using %s', sender['getID']()));
			return null;
		};
		$m['onClick']['__name__'] = 'onClick';

		$m['onClick']['__bind_type__'] = 0;
		$m['onClick']['__args__'] = [null,null,['sender']];
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
			$m['pyjd']['setup']('public/Anchor.html');
			$m['a1'] = $pyjs_kwargs_call(null, $m['Anchor'], null, null, [{'Widget':$m['HTML']('Test 1: Anchor to external site using HTML widget.'), 'Href':'http://pyjs.org', 'Title':'Test1'}]);
			$m['RootPanel']()['add']($m['a1']);
			$m['$$label'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'text':'Test 2: Click listener added to a label.'}]);
			$m['$$label']['addClickListener']($m['onClick']);
			$m['RootPanel']()['add']($m['$$label']);
			$m['a2'] = $pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{'text':'Hyperlink', 'Element':$m['DOM']['createSpan']()}]);
			$m['a2']['setID']('param1');
			$m['a2']['addClickListener']($m['onClick']);
			$m['html2'] = $m['HTMLPanel']("Test 3: <span id ='t3'></span> added to HTMLPanel with click listener.");
			$m['html2']['add']($m['a2'], 't3');
			$m['RootPanel']()['add']($m['html2']);
			$m['hpanel'] = $m['HorizontalPanel']();
			$m['hpanel']['append']($m['HTML']('Test 4:  Anchor to external site using Image widget'));
			$m['a3'] = $pyjs_kwargs_call(null, $m['Anchor'], null, null, [{'Widget':$m['Image']('http://pyjs.org/assets/images/pyjs.128x128.png'), 'Href':'http://pyjs.org', 'Title':'Test4'}]);
			$m['hpanel']['append']($m['a3']);
			$m['RootPanel']()['add']($m['hpanel']);
			$m['serverXml'] = "\n<html>\n  <head>\n    <title>Example 5</title>\n  </head>\n  <body>\n        <p>Test 5: Processes server html and insert click listeners into links: \n        <span id='link1' class = 'wikilink'>link 1</span> and <span id='link2' class = 'wikilink'>link 2</span>.\n        </p>\n  </body>\n</html>\n";
			$m['html3'] = $m['HTMLPanel']($m['serverXml']);
			$m['links'] = $p['list']();
			$iter1_iter = $m['html3']['findTags']('span');
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				$m['elem'] = $iter1_nextval;
				if ((($bool2=$p['op_eq']($m['DOM']['getElemAttribute']($m['elem'], 'class'), 'wikilink')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$m['linkClass'] = $m['DOM']['getElemAttribute']($m['elem'], 'class');
				}
				$m['links']['append']($m['elem']);
			}
			if ((($bool3=((($cmp1=(($len1=$m['links']) === null?$constant_int_0:
				(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
							$p['len']($len1))))))===($cmp2=$constant_int_0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$m['parent'] = $m['DOM']['getParent']((typeof ($1=$m['links'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($constant_int_0)));
				$iter2_iter = $m['links'];
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					$m['link'] = $iter2_nextval;
					$m['linkId'] = $m['DOM']['getElemAttribute']($m['link'], 'id');
					$m['linkClass'] = $m['DOM']['getElemAttribute']($m['link'], 'class');
					$m['linkInner'] = $m['DOM']['getInnerHTML']($m['link']);
					$m['a3'] = $pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{'text':$m['linkInner'], 'Element':$m['DOM']['createSpan']()}]);
					$m['a3']['addClickListener']($m['onClick']);
					$m['a3']['setID']('param2');
					$m['DOM']['setInnerHTML']($m['link'], '');
					$m['html3']['add']($m['a3'], $m['linkId']);
				}
			}
			$m['RootPanel']()['add']($m['html3']);
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Anchor */


/* end module: Anchor */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM', 'pyjamas.ui.Anchor.Anchor', 'pyjamas.ui.Anchor', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.Window', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel']
*/
