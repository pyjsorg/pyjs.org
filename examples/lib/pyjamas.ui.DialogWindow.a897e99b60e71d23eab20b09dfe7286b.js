/* start module: pyjamas.ui.DialogWindow */
$pyjs['loaded_modules']['pyjamas.ui.DialogWindow'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DialogWindow']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DialogWindow'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DialogWindow'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DialogWindow>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DialogWindow';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DialogWindow'] = $pyjs['loaded_modules']['pyjamas.ui.DialogWindow'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_4 = new $p['int'](4);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', null, false);
		$m['DialogBox'] = $p['___import___']('DialogBox.DialogBox', 'pyjamas.ui', null, false);
		$m['HTML'] = $p['___import___']('HTML.HTML', 'pyjamas.ui', null, false);
		$m['FlexTable'] = $p['___import___']('FlexTable.FlexTable', 'pyjamas.ui', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui', null, false);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.ui', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'pyjamas.ui', null, false);
		$m['GlassWidget'] = $p['___import___']('pyjamas.ui.GlassWidget', 'pyjamas.ui', null, false);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', 'pyjamas.ui', null, false);
		$m['pyjamas'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui');
		$m['DialogWindow'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DialogWindow';
			$cls_definition['__md5__'] = 'afb7deb802ec3fe96e5e3efb26b006cf';
			$cls_definition['_props'] = $p['list']([$p['tuple'](['caption', 'Caption', 'HTML', null])]);
			$method = $pyjs__bind_method2('__init__', function(autoHide, modal, centered, caption, minimize, maximize, close, captionStyle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 9 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 9)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 10, arguments['length']+1);
				} else {
					var self = arguments[0];
					autoHide = arguments[1];
					modal = arguments[2];
					centered = arguments[3];
					caption = arguments[4];
					minimize = arguments[5];
					maximize = arguments[6];
					close = arguments[7];
					captionStyle = arguments[8];
					var kwargs = arguments['length'] >= 10 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 10)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 10, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof captionStyle != 'undefined') {
						if (captionStyle !== null && typeof captionStyle['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = captionStyle;
							captionStyle = arguments[9];
						}
					} else 					if (typeof close != 'undefined') {
						if (close !== null && typeof close['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = close;
							close = arguments[9];
						}
					} else 					if (typeof maximize != 'undefined') {
						if (maximize !== null && typeof maximize['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = maximize;
							maximize = arguments[9];
						}
					} else 					if (typeof minimize != 'undefined') {
						if (minimize !== null && typeof minimize['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = minimize;
							minimize = arguments[9];
						}
					} else 					if (typeof caption != 'undefined') {
						if (caption !== null && typeof caption['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = caption;
							caption = arguments[9];
						}
					} else 					if (typeof centered != 'undefined') {
						if (centered !== null && typeof centered['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = centered;
							centered = arguments[9];
						}
					} else 					if (typeof modal != 'undefined') {
						if (modal !== null && typeof modal['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = modal;
							modal = arguments[9];
						}
					} else 					if (typeof autoHide != 'undefined') {
						if (autoHide !== null && typeof autoHide['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = autoHide;
							autoHide = arguments[9];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[9];
						}
					} else {
					}
				}
				if (typeof autoHide == 'undefined') autoHide=arguments['callee']['__args__'][3][1];
				if (typeof modal == 'undefined') modal=arguments['callee']['__args__'][4][1];
				if (typeof centered == 'undefined') centered=arguments['callee']['__args__'][5][1];
				if (typeof caption == 'undefined') caption=arguments['callee']['__args__'][6][1];
				if (typeof minimize == 'undefined') minimize=arguments['callee']['__args__'][7][1];
				if (typeof maximize == 'undefined') maximize=arguments['callee']['__args__'][8][1];
				if (typeof close == 'undefined') close=arguments['callee']['__args__'][9][1];
				if (typeof captionStyle == 'undefined') captionStyle=arguments['callee']['__args__'][10][1];
				var $bool3,$bool2,$bool1;
				$pyjs_kwargs_call($m['DialogBox'], '__init__', null, kwargs, [{}, self, autoHide, modal, centered]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_dialogListeners', $p['list']([])) : $p['setattr'](self, '_dialogListeners', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minimized', null) : $p['setattr'](self, '_minimized', null); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maximized', null) : $p['setattr'](self, '_maximized', null); 
				if ((($bool1=$p['isinstance'](caption, $p['basestring'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['caption']['setText'](caption);
				}
				else if ((($bool2=!$p['op_is'](caption, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('caption', caption) : $p['setattr'](self, 'caption', caption); 
					self['caption']['addMouseListener'](self);
				}
				if ((($bool3=!$p['op_is'](captionStyle, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['caption']['setStyleName'](captionStyle);
				}
				else {
					self['caption']['addStyleName']('WindowCaption');
				}
				self['setControls'](minimize, maximize, close);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['autoHide', null],['modal', true],['centered', false],['caption', null],['minimize', null],['maximize', null],['close', null],['captionStyle', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('createDefaultControl', function(control_type) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					control_type = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,$bool4,$bool5;
				if ((($bool4=$p['op_eq'](control_type, 'minimize')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					return $m['Button']('_');
				}
				else if ((($bool5=$p['op_eq'](control_type, 'maximize')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					return $m['Button']('^');
				}
				else if ((($bool6=$p['op_eq'](control_type, 'close')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					return $m['Button']('X');
				}
				throw ($p['ValueError']($p['sprintf']("Invalid control '%s'", control_type)));
				return null;
			}
	, 1, [null,null,['self'],['control_type']]);
			$cls_definition['createDefaultControl'] = $method;
			$method = $pyjs__bind_method2('setControls', function(minimize, maximize, close) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					minimize = arguments[1];
					maximize = arguments[2];
					close = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,captionPanel,controls,$or1,$or3,$or2,cf,$bool7,$bool8,$bool9,captionStyle;
				if ((($bool7=$p['op_is'](minimize, true)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('minimizeWidget', self['createDefaultControl']('minimize')) : $p['setattr'](self, 'minimizeWidget', self['createDefaultControl']('minimize')); 
				}
				else if ((($bool8=$p['isinstance'](minimize, $p['basestring'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('minimizeWidget', $m['Image'](minimize)) : $p['setattr'](self, 'minimizeWidget', $m['Image'](minimize)); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('minimizeWidget', minimize) : $p['setattr'](self, 'minimizeWidget', minimize); 
				}
				if ((($bool9=$p['op_is'](maximize, true)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('maximizeWidget', self['createDefaultControl']('maximize')) : $p['setattr'](self, 'maximizeWidget', self['createDefaultControl']('maximize')); 
				}
				else if ((($bool10=$p['isinstance'](maximize, $p['basestring'])) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('maximizeWidget', $m['Image'](maximize)) : $p['setattr'](self, 'maximizeWidget', $m['Image'](maximize)); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('maximizeWidget', maximize) : $p['setattr'](self, 'maximizeWidget', maximize); 
				}
				if ((($bool11=$p['op_is'](close, true)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeWidget', self['createDefaultControl']('close')) : $p['setattr'](self, 'closeWidget', self['createDefaultControl']('close')); 
				}
				else if ((($bool12=$p['isinstance'](close, $p['basestring'])) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeWidget', $m['Image'](close)) : $p['setattr'](self, 'closeWidget', $m['Image'](close)); 
				}
				else {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeWidget', close) : $p['setattr'](self, 'closeWidget', close); 
				}
				if ((($bool15=((($bool13=$or1=$p['isinstance']($p['getattr'](self, 'minimizeWidget'), $m['UIObject'])) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13['__nonzero__']=='function'?
							$bool13['__nonzero__']() :
							(typeof $bool13['__len__']=='function'?
								($bool13['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($bool14=$or2=$p['isinstance']($p['getattr'](self, 'maximizeWidget'), $m['UIObject'])) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or2:$p['isinstance']($p['getattr'](self, 'closeWidget'), $m['UIObject'])))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					cf = self['panel']['getCellFormatter']();
					captionStyle = self['caption']['getStyleName']();
					captionPanel = $pyjs_kwargs_call(null, $m['FlexTable'], null, null, [{'Width':'99%', 'BorderWidth':'0', 'CellPadding':'0', 'CellSpacing':'0'}]);
					controls = $m['HorizontalPanel']();
					controls['setStyleName']('Controls');
					controls['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'));
					if ((($bool16=$p['isinstance']($p['getattr'](self, 'minimizeWidget'), $m['UIObject'])) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
						self['minimizeWidget']['setStyleName']('Minimize');
						controls['add']($p['getattr'](self, 'minimizeWidget'));
						self['minimizeWidget']['addClickListener']($p['getattr'](self, 'onMinimize'));
					}
					if ((($bool17=$p['isinstance']($p['getattr'](self, 'maximizeWidget'), $m['UIObject'])) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
						self['maximizeWidget']['setStyleName']('Maximize');
						controls['add']($p['getattr'](self, 'maximizeWidget'));
						self['maximizeWidget']['addClickListener']($p['getattr'](self, 'onMaximize'));
					}
					if ((($bool18=$p['isinstance']($p['getattr'](self, 'closeWidget'), $m['UIObject'])) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						self['closeWidget']['setStyleName']('Close');
						controls['add']($p['getattr'](self, 'closeWidget'));
						self['closeWidget']['addClickListener']($p['getattr'](self, 'onClose'));
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('closeable', true) : $p['setattr'](self, 'closeable', true); 
					}
					self['caption']['removeStyleName'](captionStyle);
					self['panel']['setWidget']($constant_int_0, $constant_int_0, captionPanel);
					captionPanel['setWidget']($constant_int_0, $constant_int_0, $p['getattr'](self, 'caption'));
					captionPanel['setWidget']($constant_int_0, $constant_int_1, controls);
					captionPanel['setStyleName'](captionStyle);
					cf = captionPanel['getCellFormatter']();
					cf['setWidth']($constant_int_0, $constant_int_1, '1%');
				}
				return null;
			}
	, 1, [null,null,['self'],['minimize'],['maximize'],['close']]);
			$cls_definition['setControls'] = $method;
			$method = $pyjs__bind_method2('getDialogListeners', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return $p['getattr'](self, '_dialogListeners');
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['getDialogListeners'] = $method;
			$method = $pyjs__bind_method2('addDialogListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_dialogListeners']['append'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addDialogListener'] = $method;
			$method = $pyjs__bind_method2('removeDialogListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['_dialogListeners']['remove'](listener);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeDialogListener'] = $method;
			$method = $pyjs__bind_method2('_runDialogListener', function(action) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					action = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool19,$iter1_nextval,$iter1_type,$iter1_iter,listener,$bool20,$bool21,$iter1_array,cont,onListener,$iter1_idx;
				cont = true;
				$iter1_iter = $p['getattr'](self, '_dialogListeners');
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					if ((($bool19=!$p['op_is'](listener, self)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
						onListener = $p['getattr'](listener, action, null);
						if ((($bool20=!$p['op_is'](onListener, null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
							if ((($bool21=$p['op_is'](onListener(), false)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
								cont = false;
							}
						}
					}
				}
				return cont;
			}
	, 1, [null,null,['self'],['action']]);
			$cls_definition['_runDialogListener'] = $method;
			$method = $pyjs__bind_method2('onActivate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool22;
				if ((($bool22=$p['op_is'](self['_runDialogListener']('onActivate'), false)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				self['hide']();
				self['show']();
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onActivate'] = $method;
			$method = $pyjs__bind_method2('_toggleMaximize', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var height,width,$assign1,$bool23,$assign2,$sub3,$sub2,$sub1,$sub4,top,left;
				if ((($bool23=$p['getattr'](self, '_maximized')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					var $tupleassign1 = $p['__ass_unpack']($p['getattr'](self, '_maximized'), 4, null);
					top = $tupleassign1[0];
					left = $tupleassign1[1];
					height = $tupleassign1[2];
					width = $tupleassign1[3];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maximized', null) : $p['setattr'](self, '_maximized', null); 
					$assign1 = '';
					height = $assign1;
					width = $assign1;
				}
				else {
					top = self['getPopupTop']();
					left = self['getPopupLeft']();
					height = self['getHeight']();
					width = self['getWidth']();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maximized', $p['tuple']([top, left, height, width])) : $p['setattr'](self, '_maximized', $p['tuple']([top, left, height, width])); 
					$assign2 = $constant_int_0;
					top = $assign2;
					left = $assign2;
					height = (typeof ($sub1=$p['int']($m['pyjamas']['Window']['getClientHeight']()))==typeof ($sub2=$constant_int_4) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
					width = (typeof ($sub3=$p['int']($m['pyjamas']['Window']['getClientWidth']()))==typeof ($sub4=$constant_int_4) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
				}
				self['setPopupPosition'](left, top);
				self['panel']['setHeight'](height);
				self['panel']['setWidth'](width);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_toggleMaximize'] = $method;
			$method = $pyjs__bind_method2('onMaximize', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var widget,$bool25,$bool24,$bool26;
				if ((($bool24=$p['op_is'](self['_runDialogListener']('onMaximize'), false)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					return null;
				}
				self['_toggleMaximize']();
				widget = self['panel']['getWidget']($constant_int_1, $constant_int_0);
				if ((($bool26=!(($bool25=widget['isVisible']()) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25['__nonzero__']=='function'?
							$bool25['__nonzero__']() :
							(typeof $bool25['__len__']=='function'?
								($bool25['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					widget['setVisible'](true);
				}
				self['hide']();
				self['show']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onMaximize'] = $method;
			$method = $pyjs__bind_method2('onMinimize', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var widget,$bool30,$bool27,$bool31,$bool29,$bool28;
				if ((($bool27=$p['op_is'](self['_runDialogListener']('onMinimize'), false)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					return null;
				}
				widget = $p['getattr'](self, 'child');
				if ((($bool28=!$p['op_is'](widget, null)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					if ((($bool29=widget['isVisible']()) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
						widget['setVisible'](false);
						self['setHeight']('');
						self['setWidth']('');
						if ((($bool30=$p['getattr'](self, '_maximized')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minimized', $p['getattr'](self, '_maximized')) : $p['setattr'](self, '_minimized', $p['getattr'](self, '_maximized')); 
							self['_toggleMaximize']();
						}
						else {
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minimized', null) : $p['setattr'](self, '_minimized', null); 
						}
					}
					else {
						if ((($bool31=!$p['op_is']($p['getattr'](self, '_minimized'), null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
							self['_toggleMaximize']();
						}
						widget['setVisible'](true);
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onMinimize'] = $method;
			$method = $pyjs__bind_method2('onClose', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
				var $bool32;
				if ((($bool32=$p['op_is'](self['_runDialogListener']('onClose'), false)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				self['hide']();
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClose'] = $method;
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
					if (self.prototype['__md5__'] !== 'afb7deb802ec3fe96e5e3efb26b006cf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$or4,$bool33,$bool34;
				if ((($bool34=((($bool33=$or4=!$p['op_eq']($p['getattr'](self, 'dragStartX'), x)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33['__nonzero__']=='function'?
							$bool33['__nonzero__']() :
							(typeof $bool33['__len__']=='function'?
								($bool33['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or4:!$p['op_eq']($p['getattr'](self, 'dragStartY'), y))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					self['onActivate']();
				}
				$m['DialogBox']['endDragging'](self);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			var $bases = new Array($m['DialogBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DialogWindow', $p['tuple']($bases), $data);
		})();
		$m['Factory']['registerClass']('pyjamas.ui.DialogWindow', 'DialogWindow', $m['DialogWindow']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DialogWindow */


/* end module: pyjamas.ui.DialogWindow */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', 'pyjamas.ui.UIObject', 'DialogBox.DialogBox', 'DialogBox', 'HTML.HTML', 'HTML', 'FlexTable.FlexTable', 'FlexTable', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.GlassWidget', 'pyjamas.ui.HasAlignment', 'pyjamas.Window']
*/
