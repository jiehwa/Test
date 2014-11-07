! function(window) {
	"use strict";
	if ("object" == typeof window) {
		"undefined" == typeof window.clouda && (window.clouda = window.Blend = {}), "function" != typeof clouda.lightapp && (clouda.lightapp = function(a, b) {
			clouda.lightapp.ak = a, "function" == typeof b && b()
		}), "function" != typeof clouda.lightInit && (clouda.lightInit = function(a, b) {
			clouda.lightapp.ak = a.ak, "function" == typeof b && b()
		}), clouda.STATUS = {
			SUCCESS: 0,
			SYSTEM_FAILURE: -3,
			USER_CANCELED: -2
		}, clouda.RUNTIMES = {
			WEB: 0,
			KUANG: 1,
			NUWA: 2
		}, clouda.PLATFORMS = {
			ANDROID: 1,
			IOS: 2,
			OTHER: 0
		},
		function() {
			if (clouda.RUNTIME = "undefined" != typeof BLightApp ? clouda.RUNTIMES.KUANG : navigator.userAgent.match(/BaiduLightAppRuntime/i) ? clouda.RUNTIMES.NUWA : clouda.RUNTIMES.WEB, clouda.PLATFORM = navigator.userAgent.match(/android/i) ? clouda.PLATFORMS.ANDROID : navigator.userAgent.match(/(iphone)|(ipad)/i) ? clouda.PLATFORMS.IOS : clouda.PLATFORMS.OTHER, navigator.userAgent.match(/baiduboxapp\/([\d.-_]*)/i)) {
				var a = navigator.userAgent.match(/baiduboxapp\/([\d.-_]*)/i)[1];
				a.match(/[1-9]\.[^_]*/) && (a = a.match(/[1-9]\.[^_]*/)[0]), clouda.PLATFORM === clouda.PLATFORMS.IOS && (a = a.split(".").reverse().join(".")), clouda.RUNTIME_VERSION = a
			} else clouda.RUNTIME_VERSION = 0
		}();
		var ErrCode = {
				UNKNOW_CALLBACK: -10,
				UNKNOW_INPUT: -99,
				SYSTEM_FAILURE: -3,
				USER_CANCELED: -2,
				AK_UNDEFINED: -4,
				RT_GETERROR: 5,
				EXEC_ERROR: -5,
				NOT_FINISH: -98,
				BROWSER_NOT_SUPPORT: -97,
				ACC_GET_ERR: 6,
				LOC_GET_ERR: 7,
				CAP_GET_ERR: 8,
				CONTACT_FIND_ERR: 9,
				GLO_ERR: 10,
				REACH_ERR: 11,
				MEDIA_ERR: 12,
				CPS_ERROR: 13,
				BTY_ERROR: 14,
				QR_ERR: 15,
				FS_ERR: 16,
				BTY_ERR: 17,
				CONNECT_ERROR: 18,
				SCREEN_ERROR: 19,
				FR_ERROR: 20,
				PUSH_ERR: 21,
				GYRO_ERR: 22,
				MAP_ERROR: 23,
				LOGIN_ERROR: 24,
				PCS_ERROR: 25,
				DEVICE_ERR: 26,
				PAY_ERROR: 27,
				APP_ERROR: 28
			},
			errorMessage = {
				0: "成功",
				"-10": "接口返回不符合预期",
				"-2": "用户取消",
				"-3": "接口的运行错误。",
				"-4": "错误，您需要在调用api前设置ak。 clouda.lightapp(your_ak_here);",
				"-5": "执行接口出错。",
				"-98": "接口未提供。",
				"-99": "接口输入不符合预期。",
				5: "接口的运行环境准备中出错。"
			},
			runtimeError = function(a, b, c) {
				if (clouda.RUNTIME === clouda.RUNTIMES.WEB && clouda.PLATFORM === clouda.PLATFORMS.ANDROID) return clouda.lib.moplus.openApp(), void 0;
				0 > a && (b = a), "object" == typeof c && "function" == typeof c.onfail && c.onfail(b);
				try {
					throw new Error
				} catch (d) {
					var e = d.stack.split("\n"),
						f = errorMessage[a];
					if (!f)
						for (var g in ErrCode)
							if (ErrCode[g] === a) {
								f = a + ":" + g;
								break
							}
					console.error(f + "! " + (b ? "app错误信息" + JSON.stringify(b) : "") + e[2].replace(/\s*/, ""))
				}
			},
			kuangstack = [],
			stackn = 0,
			kuangForReady = function(functionname, argus) {
				1 != clouda.STATUS.SUCCESS && 0 === stackn ? kuangstack.push({
					func: functionname,
					arg: argus
				}) : eval(functionname).apply(null, argus)
			},
			BLightClass = function() {
				return function(a) {
					return function() {
						a.exec.apply(a, arguments)
					}
				}(this)
			},
			emptyfunc = function() {};
		BLightClass.prototype.exec = function() {
			for (var a, b = arguments, c = Array.prototype.shift.apply(b), d = 0, e = b.length; e > d; d++) "function" == typeof b[d] && ("function" == typeof b[d + 1] ? (a = clouda.lib.utils.regcallback(b[d], b[d + 1]), b[d + 1] = a.f) : a = clouda.lib.utils.regcallback(b[d], emptyfunc), b[d] = a.s);
			1 != clouda.STATUS.SUCCESS && 0 === stackn ? kuangstack.push({
				func: "BLightApp." + c,
				arg: b
			}) : BLightApp[c].apply(BLightApp, b)
		};
		var cloudaBLight = new BLightClass,
			DelegateClass = function(a, b, c) {
				return this.module = a, this.submodule = b, this.func = c,
					function(a) {
						return function() {
							a.exec.apply(a, arguments)
						}
					}(this)
			};
		DelegateClass.prototype.exec = function() {
			var a = arguments,
				b = this;
			installPlugin(this.module, function(c) {
				try {
					b.func ? c[b.submodule][b.func].apply(b, a) : c[b.submodule].apply(b, a)
				} catch (d) {
					var e;
					e = c ? ErrCode.EXEC_ERROR : clouda.STATUS.SYSTEM_FAILURE, a.length && "object" == typeof a[a.length - 1] && "function" == typeof a[a.length - 1].onfail && a[a.length - 1].onfail(e), console.error(d.stack), b.error(e)
				}
			})
		}, clouda.lightapp.error = DelegateClass.prototype.error = runtimeError;
		var beforeRuntimeReadyStack = [],
			timeoutid, triggerStack = function() {
				if (beforeRuntimeReadyStack.length) {
					for (var i = 0, len = beforeRuntimeReadyStack.length; len > i; i++) installPlugin.apply(void 0, beforeRuntimeReadyStack[i]);
					beforeRuntimeReadyStack.length = 0
				}
				if (kuangstack.length) {
					for (var j = 0, jlen = kuangstack.length; jlen > j; j++) "undefined" != typeof BLightApp ? eval(kuangstack[j].func).apply(BLightApp, kuangstack[j].arg) : eval(kuangstack[j].func).apply(void 0, kuangstack[j].arg);
					kuangstack.length = 0
				}
			};
		timeoutid = setTimeout(function() {
			stackn = 100, clouda.STATUS.SUCCESS || (clouda.STATUS.SUCCESS = 1), triggerStack()
		}, 3e3), document.addEventListener("runtimeready", function() {
			clouda.STATUS.SUCCESS = 1, "undefined" != typeof BLightApp ? clouda.RUNTIME = clouda.RUNTIMES.KUANG : clouda.RUNTIME != clouda.RUNTIMES.KUANG && (clouda.RUNTIME = clouda.RUNTIMES.NUWA), clearTimeout(timeoutid), triggerStack()
		});
		var regPlugins = {},
			regCallbacks = {},
			installPlugin = function(a, b, c) {
				if (!clouda.lightapp.ak) return runtimeError(ErrCode.AK_UNDEFINED), console.error("错误，'" + a + "' clouda.lightapp(your_ak_here);"), !1;
				if (!clouda.STATUS.SUCCESS && 100 > stackn) return beforeRuntimeReadyStack.push([a, b]), void 0;
				if (!a) return !1;
				if ("undefined" != typeof regPlugins[a] && regPlugins[a]) return b(regPlugins[a]);
				if (Array.isArray(regCallbacks[a])) return regCallbacks[a].push(b);
				try {
					nuwa.pm.bindAk(clouda.lightapp.ak), regCallbacks[a] = [], regCallbacks[a].push(b), nuwa.pm.absorb(a, function(b) {
						b.on("error", function() {
							throw new Error("RT_GETERROR")
						}), b.on("progress", function(b) {
							console.log(a + " percentage = " + b)
						}), b.on("complete", function() {
							var b = nuwa.require(a);
							regPlugins[a] = b;
							for (var c = 0, d = regCallbacks[a].length; d > c; c++) regCallbacks[a][c](b);
							delete regCallbacks[a]
						})
					})
				} catch (d) {
					try {
						b(null)
					} catch (e) {
						runtimeError(clouda.STATUS.SYSTEM_FAILURE, null, c), console.error(e.stack)
					}
				}
				return !1
			},
			count = 0,
			uniqid = function(a) {
				return a = a || "BlendUI", a + count++
			},
			define = function(a, b) {
				var c = clouda[a];
				b.call(clouda.lightapp, c, clouda)
			};
		clouda.device = {}, clouda.mbaas = {}, clouda.lib = {}, clouda.ui = {}, define("lib", function(a) {
			var b = "http://m.baidu.com/lightapp/reload?",
				c = {},
				d = "2264015",
				e = function(a) {
					var b;
					document.querySelector("#cloudaMoplusFrame") ? b = document.querySelector("#cloudaMoplusFrame") : (b = document.createElement("iframe"), b.id = "cloudaMoplusFrame", window.addEventListener("message", function(a) {
						var b = a.data;
						console.log(JSON.stringify(b)), "redirect" === b.type && (location.href = b.data)
					}, !1), document.body.appendChild(b)), b.src = a, b.scrolling = "no", b.style.border = "none", b.style.display = "none"
				};
			c.openApp = function(a, c, f) {
				var g;
				(a || confirm(f || "运行错误\n当前浏览器无法正常运行此页面，请使用手机百度\n点击确定立即启用")) && (g = b + "url=" + encodeURIComponent(location.href) + "&appid=" + (c || d) + "&ak=" + (clouda.lightapp.ak || ""), e(g))
			}, a.moplus = c
		}), define("lib", function(a) {
			function b(a) {
				a.debug || (a.debug = a.info), l.log = a
			}
			var c = console,
				d = function() {},
				e = {
					successProxy: {},
					failProxy: {}
				},
				f = 100,
				g = 'function (randomId,result) {var sproxy = clouda.lib.callbackProxy.successProxy[randomId];if(typeof result === "string"){try{result = JSON.parse(result);}catch(e){console.error(e);}}if(sproxy){sproxy(result);}else{console.warn(randomId+" lost!");}}',
				h = 'function (randomId,result) {var fproxy = clouda.lib.callbackProxy.failProxy[randomId];if(typeof result === "string"){result = JSON.parse(result);}if(fproxy){fproxy(result);}else{console.warn(randomId+" lost!");}}',
				i = {
					log: d,
					error: d,
					warn: d,
					info: d,
					debug: d,
					trace: d
				};
			Function.prototype.bind && ["error", "warn"].forEach(function(a) {
				i[a] = c[a].bind(c)
			});
			var j = !("undefined" == typeof a || !a.exports),
				k = !("undefined" == typeof document || !document.getElementById),
				l = {
					slientLogger: i,
					setLogger: b,
					setDebugMode: function(a) {
						b(a ? c : i)
					},
					domReady: function(a) {
						return /complete|loaded|interactive/.test(document.readyState) ? (a(), void 0) : (document.addEventListener("DOMContentLoaded", function() {
							a()
						}, !1), void 0)
					},
					extend: function(a) {
						return a || (a = {}), Array.prototype.slice.call(arguments, 1).forEach(function(b) {
							if (b)
								for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
						}), a
					},
					isArray: function(a) {
						return Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.call(a)
					},
					isObject: function(a) {
						return "[object Object]" == Object.prototype.toString.call(a)
					},
					isFunction: function(a) {
						return "[object Function]" == Object.prototype.toString.call(a)
					},
					isNumber: function(a) {
						return "[object Number]" == Object.prototype.toString.call(a)
					},
					isString: function(a) {
						return "[object String]" == Object.prototype.toString.call(a)
					},
					isDefined: function(a) {
						return "undefined" != typeof a
					},
					isSimpleValue: function(a) {
						return !(this.isObject(a) || this.isArray(a) || this.isFunction(a))
					},
					getUniqId: function() {
						return ++f
					},
					inherit: function(a, b) {
						function c() {
							this.constructor = a
						}
						for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
						return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
					},
					ajaxGet: function(a) {
						var b = new window.XMLHttpRequest;
						return a.async !== !1 && (a.async = !0), a.async && (b.onreadystatechange = function() {
							if (4 == b.readyState) {
								var c;
								b.status >= 200 && b.status < 300 || 0 === b.status && "file:" == location.protocol ? (c = b.responseText, a.callback(c)) : a.callback(b.responseText)
							}
						}), b.open("GET", a.url, a.async), b.send(a.query || ""), a.async ? void 0 : 200 === b.status ? b.responseText : !1
					},
					trim: function(a) {
						return a ? a.trim ? a.trim() : a.replace(/^\s+|\s+$/gm, "") : ""
					},
					trigger: function(a, b, c) {
						if (!a) return this.log.error("emply element passed in"), void 0;
						c = c || {};
						var d, e = {
							bubbles: !0,
							cancelable: !0,
							detail: c
						};
						if ("undefined" != typeof CustomEvent) d = new CustomEvent(b, e), a.dispatchEvent(d);
						else try {
							d = document.createEvent("CustomEvent"), d.initCustomEvent(b, !0, !0, c), a.dispatchEvent(d)
						} catch (f) {
							this.log.error(f)
						}
						return !0
					},
					copy: function(a) {
						var b;
						if (this.isArray(a)) {
							b = [];
							for (var c = 0, d = a.length; d > c; c++) b.push(this.copy(a[c], 1));
							return b
						}
						if (this.isObject(a)) {
							b = {};
							for (var e in a) a.hasOwnProperty(e) && !this.isSysOwnedFld(e) && (b[e] = this.copy(a[e], 1));
							return b
						}
						return a
					},
					isNodeEnv: function() {
						return j
					},
					isBrowserEnv: function() {
						return k
					},
					isPlainObject: function(a) {
						if (!a || !this.isObject(a) || a.nodeType) return !1;
						if (a.constructor && !a.hasOwnProperty("constructor") && !a.constructor.prototype.hasOwnProperty("isPrototypeOf")) return !1;
						var b = void 0;
						for (b in a);
						return void 0 === b || a.hasOwnProperty(b)
					},
					removeFromArray: function(a, b) {
						var c = a.indexOf(b);
						return c > -1 && a.splice(c, 1), c
					},
					size: function(a) {
						if (null === a) return 0;
						if (a.length === +a.length) return a.length;
						var b = 0;
						for (var c in a) a.hasOwnProperty(c) && b++;
						return b
					},
					regcallback: function(a, b) {
						if (!a || !b || "function" != typeof a || "function" != typeof b) return lightapp.error(ErrCode.UNKNOW_INPUT, a, b), !1;
						var c = this.getUniqId();
						e.successProxy[c] = a, e.failProxy[c] = b;
						var d = "(function(result){ var randomId = '" + c + "';(",
							f = ")(randomId,result)})";
						return {
							s: d + g + f,
							f: d + h + f
						}
					},
					getWebKitPluginInfo: function(a) {
						return clouda.RUNTIME === clouda.RUNTIMES.KUANG && clouda.PLATFORM === clouda.PLATFORMS.ANDROID && clouda.RUNTIME_VERSION >= "5.5" ? (cloudaBLight("getWebKitPluginInfo", a, a), void 0) : ("function" == typeof a && a({
							result: 1
						}), void 0)
					},
					setLogStorage: function(a, b) {
						var c = localStorage.getItem("cloudaFuncs");
						if (c) try {
							c = JSON.parse(c), c[a] || (c[a] = {}), c[a][b] || (c[a][b] = 0), c[a][b] = c[a][b] + 1
						} catch (d) {
							console.error(d)
						} else c = {}, c[a] = {}, c[a][b] = 1;
						localStorage.setItem("cloudaFuncs", JSON.stringify(c))
					},
					closeWindow: function() {
						cloudaBLight("closeWindow")
					}
				};
			l.setDebugMode(!1), a.utils = l, a.callbackProxy = e
		}), 
		// 
		define("ui", function(a) {
			var b = a.event = {},
				c = ["layerCreateSuccess", "layerLoadFinish", "layerPullDown", "tap", "slide"],
				d = {};
			return b.on = function(a, b, e, f) {
				if (e = e || this.getCurrentId && this.getCurrentId() || "empty", f = f || this, d[a]) {
					for (var g = 0, h = d[a].listener, i = h.length; i > g && (h[g].id != e || h[g].callback != b || h[g].context != f); g++);
					g == i && d[a].listener.push({
						id: e,
						context: f,
						callback: b
					}), d[a].listened || (document.addEventListener(a, d[a].callback, !1), d[a].listened = !0)
				} else d[a] = {}, d[a].listener = [], d[a].callback = c.indexOf(a) < 0 ? function(b) {
					var c = JSON.parse(b.data),
						e = d[a].listener;
					b.origin = b.sender || c.origin, b.data = c.data, b.reciever = b.target = c.target;
					for (var f = 0, g = e.length; g > f; f++) e[f].callback.call(e[f].context, b, e[f].id)
				} : function(b) {
					for (var c = d[a].listener, e = 0, f = c.length; f > e; e++) c[e].id == b.origin && c[e].callback.call(c[e].context, b, c[e].id)
				}, this.on(a, b, e, f)
			}, b.off = function(a, b, c, e) {
				if (c = c || this.getCurrentId && this.getCurrentId() || "empty", e = e || this, d[a])
					if (b) {
						for (var f = 0, g = d[a].listener, h = "all" == b, i = g.length; i > f; f++)
							if (g[f].id == c && g[f].context == e && (h || g[f].callback == b)) {
								g.splice && g.splice(f, 1);
								break
							}
						0 === g.length && d[a].listened && (document.removeEventListener(a, d[a].callback), d[a].listened = !1)
					} else document.removeEventListener(a, d[a].callback), d[a].listened = !1, d[a].listener = [];
				else console.log("无此事件绑定")
			}, b
		}), define("ui", function(a) {
			var b = a.layer = {},
				c = a.event || {},
				d = "0";
			return b.prepare = function(a, b) {
				a = a || uniqid();
				var c = {};
				return ["url", "pullToRefresh"].forEach(function(a) {
					void 0 !== b[a] && (c[a] = b[a])
				}), window.lc_bridge.prepareLayer(a, JSON.stringify(c)), a
			}, b.resume = function(a, c) {
				var d = {
					fx: "slide",
					reverse: !1,
					duration: "normal"
				};
				c && (c.fx && (d.fx = c.fx), c.reverse && (d.reverse = c.reverse), c.duration && (d.duration = c.duration)), window.lc_bridge.resumeLayer(a, JSON.stringify(d)), b.fire("in", !1, a)
			}, b.back = function(a) {
				window.lc_bridge.backToPreviousLayer(), b.fire("out", !1, a || b.getCurrentId())
			}, b.reload = function(a, c) {
				return (1 === arguments.length || 0 === arguments.length) && (c = a, a = b.getCurrentId()), window.lc_bridge.layerLoadUrl(a, c), a
			}, b.destroy = function(a) {
				return a || (a = b.getCurrentId()), window.lc_bridge.destroyLayer(a), a
			}, b.stopPullRefresh = function(a) {
				return a || (a = b.getCurrentId()), window.lc_bridge.layerStopRefresh(a), a
			}, b.isAvailable = function(a) {
				return window.lc_bridge.isLayerAvailable(a)
			}, b.getCurrentId = function() {
				return window.lc_bridge.currentLayerId()
			}, b.layerStopLoading = function(a) {
				return a = a || b.getCurrentId(), window.lc_bridge.layerStopLoading(a)
			}, b.on = c.on, b.off = c.off, b.fire = function(a, c, e) {
				c ? "top" == c && (c = d) : c = "";
				var f = b.getCurrentId(),
					g = {};
				g.data = e || "", g.target = c, g.origin = f, window.lc_bridge.layerPostMessage(f, c, a, JSON.stringify(g))
			}, b.postMessage = function(a, c) {
				b.fire("message", c, a)
			}, b
		}), define("ui", function(a) {
			var b = window.devicePixelRatio || 2,
				c = a.layerGroup = {};
			return a.event || {}, c.create = function(a, c, d) {
				var e = {
					id: a || uniqid(),
					infos: c
				};
				d.active && (e.active = d.active);
				var f = {};
				return ["left", "top", "width", "height"].forEach(function(a) {
					void 0 !== d[a] && (f[a] = d[a] * b)
				}), window.lc_bridge.addLayerGroup(JSON.stringify(e), JSON.stringify(f)), a
			}, c.showLayer = function(a, b) {
				return window.lc_bridge.showLayerInGroup(a, b), a
			}, c.addLayer = function(a, b) {
				return window.lc_bridge.addLayerInGroup(a, b, index), a
			}, c.removeLayer = function(a, b) {
				return window.lc_bridge.removeLayerInGroup(a, b), a
			}, c.updateLayer = function(a, b, c) {
				return window.lc_bridge.updateLayerInGroup(a, b, c), a
			}, c
		})
	}
}(window);