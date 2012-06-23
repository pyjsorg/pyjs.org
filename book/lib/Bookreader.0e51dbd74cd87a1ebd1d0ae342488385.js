/* start module: Bookreader */
$pyjs['loaded_modules']['Bookreader'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Bookreader']['__was_initialized__']) return $pyjs['loaded_modules']['Bookreader'];
	var $m = $pyjs['loaded_modules']['Bookreader'];
	$m['__repr__'] = function() { return '<module: Bookreader>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Bookreader';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_130 = new $p['int'](130);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_6 = new $p['int'](6);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$m['SinkList'] = $p['___import___']('SinkList.SinkList', null, null, false);
		$m['History'] = $p['___import___']('pyjamas.History', null, null, false);
		$m['Chapter'] = $p['___import___']('Chapter', null);
		$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
		$m['ChapterListLoader'] = $p['___import___']('BookLoader.ChapterListLoader', null, null, false);
		$m['loadSection'] = function(section) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var chapter;
			chapter = $m['Chapter']['Chapter']();
			chapter['setStyleName']('ks-Sink');
			chapter['__is_instance__'] && typeof chapter['__setattr__'] == 'function' ? chapter['__setattr__']('$$name', section) : $p['setattr'](chapter, '$$name', section); 
			$m['RootPanel']()['add'](chapter);
			chapter['onShow']();
			return null;
		};
		$m['loadSection']['__name__'] = 'loadSection';

		$m['loadSection']['__bind_type__'] = 0;
		$m['loadSection']['__args__'] = [null,null,['section']];
		$m['Bookreader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'Bookreader';
			$cls_definition['__md5__'] = '2bcfa58db3731e8c86e1138bdf417a82';
			$method = $pyjs__bind_method2('onHistoryChanged', function(token) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					token = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfa58db3731e8c86e1138bdf417a82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var info;
				info = self['sink_list']['find'](token);
				if ($p['bool'](info)) {
					self['show'](info, false);
				}
				else {
					self['showInfo']();
				}
				return null;
			}
	, 1, [null,null,['self'],['token']]);
			$cls_definition['onHistoryChanged'] = $method;
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfa58db3731e8c86e1138bdf417a82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var section;
				section = $m['Window']['getLocation']()['getSearchVar']('section');
				if ($p['bool'](!$p['bool'](section))) {
					self['loadChapters']();
				}
				else {
					$m['loadSection'](section);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$method = $pyjs__bind_method2('loadChapters', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfa58db3731e8c86e1138bdf417a82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var authors_panel,$iter1_nextval,$iter1_type,name,left_panel,$iter1_iter,vp,authors_html,$iter1_array,authors,years,email,$iter1_idx;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('curInfo', '') : $p['setattr'](self, 'curInfo', ''); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('curSink', null) : $p['setattr'](self, 'curSink', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('description', $m['HTML']()) : $p['setattr'](self, 'description', $m['HTML']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sink_list', $m['SinkList']()) : $p['setattr'](self, 'sink_list', $m['SinkList']()); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('panel', $m['DockPanel']()) : $p['setattr'](self, 'panel', $m['DockPanel']()); 
				self['loadSinks']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sinkContainer', $m['DockPanel']()) : $p['setattr'](self, 'sinkContainer', $m['DockPanel']()); 
				self['sinkContainer']['setStyleName']('ks-Sink');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sp', $m['ScrollPanel']($p['getattr'](self, 'sinkContainer'))) : $p['setattr'](self, 'sp', $m['ScrollPanel']($p['getattr'](self, 'sinkContainer'))); 
				self['sp']['setWidth']('100%');
				self['sp']['setHeight']('100%');
				vp = $m['VerticalPanel']();
				vp['setWidth']('99%');
				vp['setHeight']('100%');
				vp['add']($p['getattr'](self, 'description'));
				vp['add']($p['getattr'](self, 'sp'));
				authors = $p['list']([$p['tuple'](['2008, 2009', 'Kenneth Casson Leighton', 'lkcl@lkcl.net'])]);
				$iter1_iter = authors;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 3, null);
					years = $tupleassign1[0];
					name = $tupleassign1[1];
					email = $tupleassign1[2];
					authors_html = $p['sprintf']('&copy; %s <a href="mailto:%s">%s</a><br />', $p['tuple']([years, email, name]));
				}
				authors_panel = $m['HTML']();
				authors_panel['setStyleName']('ks-Authors');
				authors_panel['setHTML']($p['__getslice'](authors_html, 0, (typeof ($usub1=$constant_int_6)=='number'?
					-$usub1:
					$p['op_usub']($usub1))));
				left_panel = $pyjs_kwargs_call(null, $m['DockPanel'], null, null, [{'Height':'100%'}]);
				left_panel['add']($p['getattr'](self, 'sink_list'), $p['getattr']($m['DockPanel'], 'NORTH'));
				left_panel['add'](authors_panel, $p['getattr']($m['DockPanel'], 'SOUTH'));
				self['description']['setStyleName']('ks-Intro');
				self['panel']['add'](left_panel, $p['getattr']($m['DockPanel'], 'WEST'));
				self['panel']['add'](vp, $p['getattr']($m['DockPanel'], 'CENTER'));
				self['panel']['setCellVerticalAlignment']($p['getattr'](self, 'sink_list'), $p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
				self['panel']['setCellWidth'](vp, '100%');
				self['panel']['setCellHeight'](vp, '100%');
				$m['Window']['addWindowResizeListener'](self);
				$m['History']['addHistoryListener'](self);
				$m['RootPanel']()['add']($p['getattr'](self, 'panel'));
				self['onWindowResized']($m['Window']['getClientWidth'](), $m['Window']['getClientHeight']());
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['loadChapters'] = $method;
			$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
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
					if (self.prototype['__md5__'] !== '2bcfa58db3731e8c86e1138bdf417a82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4;
				self['panel']['setWidth']($p['__op_sub']($sub1=width,$sub2=$constant_int_20));
				self['sink_list']['resize']($p['__op_sub']($sub3=width,$sub4=$constant_int_20), $p['__op_sub']($sub5=height,$sub6=$constant_int_130));
				self['sp']['setHeight']($p['sprintf']('%dpx', $p['__op_sub']($sub7=height,$sub8=$constant_int_130)));
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['onWindowResized'] = $method;
			$method = $pyjs__bind_method2('show', function(info, affectHistory) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					info = arguments[1];
					affectHistory = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfa58db3731e8c86e1138bdf417a82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				if ($p['bool']($p['op_eq'](info, $p['getattr'](self, 'curInfo')))) {
					return null;
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('curInfo', info) : $p['setattr'](self, 'curInfo', info); 
				if ($p['bool'](!$p['op_is']($p['getattr'](self, 'curSink'), null))) {
					self['curSink']['onHide']();
					self['sinkContainer']['remove']($p['getattr'](self, 'curSink'));
				}
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('curSink', info['getInstance']()) : $p['setattr'](self, 'curSink', info['getInstance']()); 
				self['sink_list']['setSinkSelection'](info['getName']());
				self['sink_list']['sp']['setScrollPosition']($constant_int_0);
				self['sink_list']['sp']['setHorizontalScrollPosition']($constant_int_0);
				self['description']['setHTML'](info['getDescription']());
				if ($p['bool'](affectHistory)) {
					$m['History']()['newItem'](info['getName']());
				}
				self['sinkContainer']['add']($p['getattr'](self, 'curSink'), $p['getattr']($m['DockPanel'], 'CENTER'));
				self['sinkContainer']['setCellWidth']($p['getattr'](self, 'curSink'), '100%');
				self['sinkContainer']['setCellHeight']($p['getattr'](self, 'curSink'), '100%');
				self['sinkContainer']['setCellVerticalAlignment']($p['getattr'](self, 'curSink'), $p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
				self['curSink']['onShow']();
				return null;
			}
	, 1, [null,null,['self'],['info'],['affectHistory']]);
			$cls_definition['show'] = $method;
			$method = $pyjs__bind_method2('loadSinks', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfa58db3731e8c86e1138bdf417a82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$m['HTTPRequest']()['asyncGet']('contents.txt', $m['ChapterListLoader'](self));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['loadSinks'] = $method;
			$method = $pyjs__bind_method2('setChapters', function(chapters) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					chapters = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfa58db3731e8c86e1138bdf417a82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,name,$iter2_iter,l,$iter2_idx,initToken,$iter2_array,desc;
				$iter2_iter = chapters;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					l = $iter2_nextval['$nextval'];
					name = l['__getitem__']($constant_int_0);
					desc = l['__getitem__']($constant_int_1);
					self['sink_list']['addSink']($m['Chapter']['init'](name, desc));
				}
				initToken = $m['History']['getToken']();
				if ($p['bool']($p['len'](initToken))) {
					self['onHistoryChanged'](initToken);
				}
				else {
					self['showInfo']();
				}
				return null;
			}
	, 1, [null,null,['self'],['chapters']]);
			$cls_definition['setChapters'] = $method;
			$method = $pyjs__bind_method2('showInfo', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2bcfa58db3731e8c86e1138bdf417a82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['show']($p['getattr']($p['getattr'](self, 'sink_list'), 'sinks')['__getitem__']($constant_int_0), false);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['showInfo'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Bookreader', $p['tuple']($bases), $data);
		})();
		if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
			$m['pyjd']['setup']('http://127.0.0.1/pyjamas/doc/book/public/Bookreader.html');
			$m['app'] = $m['Bookreader']();
			$m['app']['onModuleLoad']();
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Bookreader */


/* end module: Bookreader */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.Window', 'SinkList.SinkList', 'SinkList', 'pyjamas.History', 'Chapter', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'BookLoader.ChapterListLoader', 'BookLoader']
*/
