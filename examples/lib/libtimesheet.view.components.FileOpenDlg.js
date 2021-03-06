/* start module: libtimesheet.view.components.FileOpenDlg */
$pyjs['loaded_modules']['libtimesheet.view.components.FileOpenDlg'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libtimesheet.view.components.FileOpenDlg']['__was_initialized__']) return $pyjs['loaded_modules']['libtimesheet.view.components.FileOpenDlg'];
	if(typeof $pyjs['loaded_modules']['libtimesheet.view.components'] == 'undefined' || !$pyjs['loaded_modules']['libtimesheet.view.components']['__was_initialized__']) $p['___import___']('libtimesheet.view.components', null);
	var $m = $pyjs['loaded_modules']['libtimesheet.view.components.FileOpenDlg'];
	$m['__repr__'] = function() { return '<module: libtimesheet.view.components.FileOpenDlg>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libtimesheet.view.components.FileOpenDlg';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libtimesheet.view.components']['FileOpenDlg'] = $pyjs['loaded_modules']['libtimesheet.view.components.FileOpenDlg'];
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		$m['Notification'] = $p['___import___']('libtimesheet.ApplicationConstants.Notification', 'libtimesheet.view.components', null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'libtimesheet.view.components', null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'libtimesheet.view.components', null, false);
		$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'libtimesheet.view.components', null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'libtimesheet.view.components', null, false);
		$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', 'libtimesheet.view.components', null, false);
		$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', 'libtimesheet.view.components', null, false);
		$m['FileUpload'] = $p['___import___']('pyjamas.ui.FileUpload.FileUpload', 'libtimesheet.view.components', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'libtimesheet.view.components', null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'libtimesheet.view.components', null, false);
		$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', 'libtimesheet.view.components', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'libtimesheet.view.components', null, false);
		$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'libtimesheet.view.components', null, false);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'libtimesheet.view.components', null, false);
		$m['sys'] = $p['___import___']('sys', 'libtimesheet.view.components');
		$m['has_getAsText'] = true;
		$m['FileOpenDlg'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libtimesheet.view.components.FileOpenDlg';
			$cls_definition['__md5__'] = '6ea4045d4eb3d987d3298d7472c68bb8';
			$cls_definition['files'] = null;
			$method = $pyjs__bind_method2('__init__', function(left, top, fileLocation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					left = arguments[1];
					top = arguments[2];
					fileLocation = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '6ea4045d4eb3d987d3298d7472c68bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof left == 'undefined') left=arguments['callee']['__args__'][3][1];
				if (typeof top == 'undefined') top=arguments['callee']['__args__'][4][1];
				if (typeof fileLocation == 'undefined') fileLocation=arguments['callee']['__args__'][5][1];
				var sep,$bool10,$bool11,hpanel,$pyjs_try_err,$add1,location,msg,$and1,$and2,$and3,$bool2,$bool3,$bool1,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$cmp5,$cmp4,$cmp6,$cmp1,$cmp3,$cmp2,elem,$add2,$add3,base,$add6,$add7,$add4,$add5,$add8;
				try {
					$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{'modal':false}, self]);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filename', null) : $p['setattr'](self, 'filename', null); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', null) : $p['setattr'](self, 'data', null); 
					self['setPopupPosition'](left, top);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dockPanel', $m['DockPanel']()) : $p['setattr'](self, 'dockPanel', $m['DockPanel']()); 
					self['dockPanel']['setSpacing']($constant_int_4);
					self['setText']('File Open');
					if ((($bool2=!(($bool1=$p['op_is'](fileLocation, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						msg = $m['HTML']('Loading file...', true);
						self['dockPanel']['add'](msg, $p['getattr']($m['DockPanel'], 'NORTH'));
						location = fileLocation;
						if ((($bool3=((($cmp1=fileLocation['find']('://'))===($cmp2=$constant_int_0)?0:
							(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
								($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
								$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
							base = $m['Window']['getLocation']()['getHref']();
							if ((($bool4=((((($cmp3=base['find']('/'))===($cmp4=$constant_int_0)?0:
								(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
									($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
									$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
								sep = '/';
							}
							else {
								sep = '\\';
							}
							base = (typeof ($add1=sep['join']($p['__getslice'](base['$$split'](sep), 0, (typeof ($usub1=$constant_int_1)=='number'?
								-$usub1:
								$p['op_usub']($usub1)))))==typeof ($add2=sep) && (typeof $add1=='number'||typeof $add1=='string')?
								$add1+$add2:
								$p['op_add']($add1,$add2));
							location = (typeof ($add3=base)==typeof ($add4=fileLocation) && (typeof $add3=='number'||typeof $add3=='string')?
								$add3+$add4:
								$p['op_add']($add3,$add4));
						}
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('iframe', $m['Frame'](location)) : $p['setattr'](self, 'iframe', $m['Frame'](location)); 
						self['dockPanel']['add']($p['getattr'](self, 'iframe'), $p['getattr']($m['DockPanel'], 'CENTER'));
					}
					else {
						msg = $m['HTML']('Choose a file', true);
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('browseFile', $m['FileUpload']()) : $p['setattr'](self, 'browseFile', $m['FileUpload']()); 
						elem = self['browseFile']['getElement']();
						if ((($bool7=((($bool5=$and1=false) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
							false :
							(typeof $bool5=='object'?
								(typeof $bool5['__nonzero__']=='function'?
									$bool5['__nonzero__']() :
									(typeof $bool5['__len__']=='function'?
										($bool5['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool6=$and2=$m['has_getAsText']) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
							false :
							(typeof $bool6=='object'?
								(typeof $bool6['__nonzero__']=='function'?
									$bool6['__nonzero__']() :
									(typeof $bool6['__len__']=='function'?
										($bool6['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['hasattr'](elem, 'files'):$and2):$and1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('iframe', null) : $p['setattr'](self, 'iframe', null); 
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('files', $p['getattr'](elem, 'files')) : $p['setattr'](self, 'files', $p['getattr'](elem, 'files')); 
							self['dockPanel']['add']($p['getattr'](self, 'browseFile'), $p['getattr']($m['DockPanel'], 'CENTER'));
						}
						else {
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('browseFile', null) : $p['setattr'](self, 'browseFile', null); 
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('files', null) : $p['setattr'](self, 'files', null); 
							base = (typeof ($add5='')==typeof ($add6=$p['getattr']($doc, 'location')) && (typeof $add5=='number'||typeof $add5=='string')?
								$add5+$add6:
								$p['op_add']($add5,$add6));
							if ((($bool8=((((($cmp5=base['find']('/'))===($cmp6=$constant_int_0)?0:
								(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
									($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
									$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
								sep = '/';
							}
							else {
								sep = '\\';
							}
							if ((($bool10=!(($bool9=$p['op_eq']($p['__getslice'](base['lower'](), 0, $constant_int_5), 'file:')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
								false :
								(typeof $bool9=='object'?
									(typeof $bool9['__nonzero__']=='function'?
										$bool9['__nonzero__']() :
										(typeof $bool9['__len__']=='function'?
											($bool9['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
								base = 'file:///C:/';
								msg = $m['HTML']("You'll have to place the application on a local file system, otherwise the browser forbids access.", true);
							}
							else {
								base = (typeof ($add7=sep['join']($p['__getslice'](base['$$split'](sep), 0, (typeof ($usub2=$constant_int_1)=='number'?
									-$usub2:
									$p['op_usub']($usub2)))))==typeof ($add8=sep) && (typeof $add7=='number'||typeof $add7=='string')?
									$add7+$add8:
									$p['op_add']($add7,$add8));
							}
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('iframe', $m['Frame'](base)) : $p['setattr'](self, 'iframe', $m['Frame'](base)); 
							self['dockPanel']['add']($p['getattr'](self, 'iframe'), $p['getattr']($m['DockPanel'], 'CENTER'));
						}
						self['dockPanel']['add'](msg, $p['getattr']($m['DockPanel'], 'NORTH'));
					}
					if ((($bool11=$p['getattr'](self, 'iframe')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						self['iframe']['setWidth']('36em');
					}
					hpanel = $m['HorizontalPanel']();
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('openBtn', $m['Button']('Open', $p['getattr'](self, 'onClickOpen'))) : $p['setattr'](self, 'openBtn', $m['Button']('Open', $p['getattr'](self, 'onClickOpen'))); 
					hpanel['add']($p['getattr'](self, 'openBtn'));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('cancelBtn', $m['Button']('Cancel', $p['getattr'](self, 'onClickCancel'))) : $p['setattr'](self, 'cancelBtn', $m['Button']('Cancel', $p['getattr'](self, 'onClickCancel'))); 
					hpanel['add']($p['getattr'](self, 'cancelBtn'));
					self['dockPanel']['add'](hpanel, $p['getattr']($m['DockPanel'], 'SOUTH'));
					self['setWidget']($p['getattr'](self, 'dockPanel'));
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['left', $constant_int_50],['top', $constant_int_50],['fileLocation', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onClickCancel', function(sender) {
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
					if (self.prototype['__md5__'] !== '6ea4045d4eb3d987d3298d7472c68bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['hide']();
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClickCancel'] = $method;
			$method = $pyjs__bind_method2('onClickOpen', function(sender) {
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
					if (self.prototype['__md5__'] !== '6ea4045d4eb3d987d3298d7472c68bb8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool12,$bool13,$bool14,$bool15,$bool16,elem,file,filename,$pyjs_try_err,body,$add14,$add10,$add11,$add12,$add13,data,$cmp7,e,$cmp8,$add9;
				data = null;
				filename = null;
				if ((($bool12=$p['getattr'](self, 'files')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					if ((($bool13=$p['op_eq']($p['getattr']($p['getattr'](self, 'files'), 'length'), $constant_int_0)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						return null;
					}
					if ((($bool14=((($cmp7=$p['getattr']($p['getattr'](self, 'files'), 'length'))===($cmp8=$constant_int_1)?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
						$m['alert']('Cannot open more than one file');
						return null;
					}
					file = self['files']['item']($constant_int_0);
					filename = $p['getattr'](file, 'fileName');
					try {
						data = file['getAsText']('');
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							e = $pyjs_try_err;
							$m['has_getAsText'] = false;
							$m['alert']('Sorry. cannot retrieve file in this browser.\nTry again.');
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				else {
					elem = self['iframe']['getElement']();
					body = $p['getattr']($p['getattr']($p['getattr'](elem, 'contentWindow'), 'document'), 'body');
					try {
						filename = (typeof ($add9='')==typeof ($add10=$p['getattr']($p['getattr'](elem, 'contentWindow'), 'location')) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10));
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							filename = null;
						}
					}
					if ((($bool15=$p['op_eq']($p['getattr']($p['getattr'](body, 'childNodes'), 'length'), $constant_int_1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
						data = (typeof ($add11='')==typeof ($add12=$p['getattr'](body['childNodes']['item']($constant_int_0), 'innerHTML')) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12));
					}
					else {
						data = (typeof ($add13='')==typeof ($add14=$p['getattr'](body, 'innerHTML')) && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14));
					}
				}
				self['hide']();
				if ((($bool16=data) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', data) : $p['setattr'](self, 'data', data); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('filename', filename) : $p['setattr'](self, 'filename', filename); 
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClickOpen'] = $method;
			var $bases = new Array($m['DialogBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FileOpenDlg', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libtimesheet.view.components.FileOpenDlg */


/* end module: libtimesheet.view.components.FileOpenDlg */


/*
PYJS_DEPS: ['libtimesheet.ApplicationConstants.Notification', 'libtimesheet', 'libtimesheet.ApplicationConstants', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.FileUpload.FileUpload', 'pyjamas.ui.FileUpload', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame', 'pyjamas.DOM', 'pyjamas.Window.alert', 'pyjamas.Window', 'sys']
*/
