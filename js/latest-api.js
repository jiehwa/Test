define("device", function(a) {
		// 	var b = this,
		// 		c = a.accelerometer = {},
		// 		d = new DelegateClass("device", "accelerometer", "getCurrentAcceleration");
		// 	new DelegateClass("device", "accelerometer", "watchAcceleration");
		// 	var e = new DelegateClass("device", "accelerometer", "clearWatch");
		// 	c.get = function(a) {
		// 		d(function(c) {
		// 			"object" == typeof c && "undefined" != typeof c.x && "undefined" != typeof c.y && "undefined" != typeof c.z ? a.onsuccess.apply(this, arguments) : b.error(ErrCode.ACC_GET_ERR, ErrCode.UNKNOW_CALLBACK, a)
		// 		}, function(c) {
		// 			b.error(ErrCode.ACC_GET_ERR, c, a)
		// 		}, a)
		// 	};
		// 	var f;
		// 	return c.startListen = function(a) {
		// 		f && e(f), installPlugin("device", function(c) {
		// 			f = c.accelerometer.watchAcceleration(function(c) {
		// 				"object" == typeof c && "undefined" != typeof c.x && "undefined" != typeof c.y && "undefined" != typeof c.z ? a.onsuccess.apply(this, arguments) : b.error(ErrCode.ACC_GET_ERR, ErrCode.UNKNOW_CALLBACK, a)
		// 			}, function(c) {
		// 				b.error(ErrCode.ACC_GET_ERR, c, a)
		// 			}, a)
		// 		})
		// 	}, c.stopListen = function() {
		// 		e(f)
		// 	}, c
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.activity = {},
		// 		d = new DelegateClass("device", "activity", "startActivity");
		// 	c.start = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("invokeThirdApp", JSON.stringify(a.intent), function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, a.onfail), !1) : (d(function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(c) {
		// 			b.error(ErrCode.ACC_GET_ERR, c, a)
		// 		}, a.intent, a), void 0)
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b.native = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b.native = BLightApp && "function" == typeof BLightApp.invokeThirdApp ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b.native = 0), b.web = 0, a(b)
		// 	}
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.battery = {},
		// 		d = new DelegateClass("device", "batterystatus", "start"),
		// 		e = new DelegateClass("device", "batterystatus", "stop");
		// 	return c.get = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("getBattery", function(b) {
		// 			b.isPlugged = "true" === b.plugged ? !0 : !1, delete b.plugged, b.level && (b.level = 100 * b.level), a.onsuccess(b)
		// 		}, a.onfail), void 0) : (d(function() {
		// 			a.onsuccess.apply(this, arguments), e(function() {}, function() {})
		// 		}, function(c) {
		// 			b.error(ErrCode.BTY_ERR, c, a)
		// 		}, a), void 0)
		// 	}, c.startListen = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("startListenBattery", function(b) {
		// 			b.isPlugged = "true" === b.plugged ? !0 : !1, delete b.plugged, b.level && (b.level = 100 * b.level), a.onsuccess(b)
		// 		}, a.onfail), void 0) : (d(a.onsuccess, function(c) {
		// 			b.error(ErrCode.BTY_ERR, c, a)
		// 		}, a), void 0)
		// 	}, c.stopListen = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("stopListenBattery", function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, a.onfail), void 0) : ("undefined" == typeof a ? e(function() {}, function() {}) : e(function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(c) {
		// 			b.error(ErrCode.BTY_ERR, c, a)
		// 		}, a), void 0)
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b.native = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b.native = BLightApp && "function" == typeof BLightApp.startListenBattery ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b.native = 0), b.web = 0, a(b)
		// 	}, c
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.compass = {},
		// 		d = new DelegateClass("device", "compass", "getCurrentHeading");
		// 	new DelegateClass("device", "compass", "watchHeading");
		// 	var e = new DelegateClass("device", "compass", "clearWatch");
		// 	c.get = function(a) {
		// 		d(function(c) {
		// 			"object" == typeof c && "undefined" != typeof c.magneticHeading && "undefined" != typeof c.trueHeading ? a.onsuccess.apply(this, arguments) : b.error(ErrCode.CPS_ERROR, ErrCode.UNKNOW_CALLBACK, a)
		// 		}, function(c) {
		// 			b.error(ErrCode.CPS_ERROR, c, a)
		// 		}, a)
		// 	};
		// 	var f;
		// 	return c.startListen = function(a) {
		// 		f && e(f), installPlugin("device", function(c) {
		// 			f = c.compass.watchHeading(function(c) {
		// 				"object" == typeof c && "undefined" != typeof c.magneticHeading && "undefined" != typeof c.trueHeading ? a.onsuccess.apply(this, arguments) : b.error(ErrCode.CPS_ERROR, ErrCode.UNKNOW_CALLBACK, a)
		// 			}, function(c) {
		// 				b.error(ErrCode.CPS_ERROR, c, a)
		// 			})
		// 		})
		// 	}, c.stopListen = function() {
		// 		e(f)
		// 	}, c
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.connection = {};
		// 	a.CONNECTION_STATUS = {
		// 		UNKNOWN: "unknown",
		// 		ETHERNET: "ethernet",
		// 		WIFI: "wifi",
		// 		CELL_2G: "2g",
		// 		CELL_3G: "3g",
		// 		CELL_4G: "4g",
		// 		CELL: "cellular",
		// 		NONE: "none"
		// 	}, a.kconnection = {
		// 		"lightapp.device.CONNECT_UNKNOWN": a.CONNECTION_STATUS.UNKNOWN,
		// 		"lightapp.device.CONNECT_NONE": a.CONNECTION_STATUS.NONE,
		// 		"lightapp.device.CONNECT_WIFI": a.CONNECTION_STATUS.WIFI,
		// 		"lightapp.device.CONNECT_MOBILE": a.CONNECTION_STATUS.CELL,
		// 		"lightapp.device.CONNECT_CONNECTED": a.CONNECTION_STATUS.UNKNOWN
		// 	}, c.status = a.CONNECTION_STATUS.UNKNOWN;
		// 	var d = new DelegateClass("device", "connection", "getInfo");
		// 	c.get = function(e) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) return cloudaBLight("getNetworkType", function(a) {
		// 			a = clouda.device.kconnection[a.net_result] || clouda.device.CONNECTION_STATUS.UNKNOWN, e.onsuccess(a)
		// 		}, e.onfail), !1;
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.NUWA) {
		// 			if (c.status !== a.CONNECTION_STATUS.UNKNOWN) return e.onsuccess(c.status), void 0;
		// 			d(function(a) {
		// 				c.status = a, e.onsuccess.call(this, a), delete e.onsuccess
		// 			}, function(a) {
		// 				b.error(ErrCode.CONNECT_ERROR, a, e)
		// 			}, e)
		// 		} else b.error(ErrCode.BROWSER_NOT_SUPPORT, ErrCode.BROWSER_NOT_SUPPORT, e)
		// 	};
		// 	var e = null;
		// 	return c.startListen = function(a) {
		// 		e = a.onsuccess, d(function(a) {
		// 			c.status = a, "function" == typeof e && e.call(void 0, a), e(a)
		// 		}, function(c) {
		// 			b.error(ErrCode.CONNECT_ERROR, c, a)
		// 		}, a)
		// 	}, c.stopListen = function() {
		// 		e = null
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b.native = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b.native = BLightApp && "function" == typeof BLightApp.getNetworkType ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b.native = 0), b.web = 0, a(b)
		// 	}, a
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.contact = {};
		// 	new DelegateClass("device", "contact", "create"), new DelegateClass("device", "contact", "find"), new DelegateClass("device", "contact", "findBounds"), c.find = function(a, c) {
		// 		installPlugin("device", function(d) {
		// 			d.contact.find(a, function(a) {
		// 				Array.isArray(a) ? c.onsuccess.apply(this, arguments) : b.error(ErrCode.CONTACT_FIND_ERR, ErrCode.UNKNOW_CALLBACK, c)
		// 			}, function(a) {
		// 				b.error(ErrCode.CONTACT_FIND_ERR, a, c)
		// 			}, c)
		// 		})
		// 	}, c.insert = function(a, c) {
		// 		installPlugin("device", function(d) {
		// 			var e = d.contact.create();
		// 			for (var f in a) e[f] = a[f];
		// 			e.save(function() {
		// 				c.onsuccess.apply(this, arguments)
		// 			}, function(a) {
		// 				b.error(ErrCode.CONTACT_FIND_ERR, a, c)
		// 			})
		// 		})
		// 	}, c.update = function(a, c, d) {
		// 		installPlugin("device", function() {
		// 			if ("object" == typeof a) {
		// 				for (var e in c) a[e] = c[e];
		// 				c.displayName && a.name && (a.name.familyName = c.displayName.substring(0, 1), a.name.givenName = c.displayName.substring(1)), a.id && (a.rawId = a.id), a.save(function() {
		// 					d.onsuccess.apply(this, arguments)
		// 				}, function(a) {
		// 					b.error(ErrCode.CONTACT_FIND_ERR, a, d)
		// 				})
		// 			} else b.error(ErrCode.CONTACT_FIND_ERR, ErrCode.UNKNOW_CALLBACK, d)
		// 		})
		// 	}, c.remove = function(a, c) {
		// 		installPlugin("device", function() {
		// 			try {
		// 				"object" == typeof a ? a.remove(function() {
		// 					c.onsuccess(clouda.STATUS.SUCCESS)
		// 				}, function(a) {
		// 					b.error(ErrCode.CONTACT_FIND_ERR, a, c)
		// 				}) : c.onsuccess(clouda.STATUS.SUCCESS)
		// 			} catch (d) {
		// 				console.log(d.stack)
		// 			}
		// 		})
		// 	}, c.count = function(a) {
		// 		installPlugin("device", function(c) {
		// 			c.contact.findBounds(["*"], function(b) {
		// 				a.onsuccess(b.count), b.close(function() {}, function() {})
		// 			}, function(c) {
		// 				b.error(ErrCode.CONTACT_FIND_ERR, c, a)
		// 			}, a)
		// 		})
		// 	}, c.getCursor = function(a, c, d, e) {
		// 		installPlugin("device", function(f) {
		// 			f.contact.findBounds(a, function(a) {
		// 				a.get(c, function(b) {
		// 					e.onsuccess(b), a.close(function() {}, function() {})
		// 				}, function(a) {
		// 					b.error(ErrCode.CONTACT_FIND_ERR, a, e)
		// 				}, d)
		// 			}, function(a) {
		// 				b.error(ErrCode.CONTACT_FIND_ERR, a, e)
		// 			}, e)
		// 		})
		// 	}
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.device = {},
		// 		d = new DelegateClass("device", "device", "getUuid"),
		// 		e = new DelegateClass("device", "device", "getHostAppKey"),
		// 		f = new DelegateClass("device", "device", "getImei"),
		// 		g = new DelegateClass("device", "device", "getAndroidVersion"),
		// 		h = new DelegateClass("device", "device", "getProductModel");
		// 	return new DelegateClass("device", "device", "getScreenResolution"), c.getImei = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("getDeviceInfo", function(b) {
		// 			a.onsuccess(JSON.parse(b.device_info).imei)
		// 		}, a.onfail), !1) : (f(a.onsuccess, function(c) {
		// 			b.error(ErrCode.DEVICE_ERR, c, a)
		// 		}, a), void 0)
		// 	}, c.getUuid = function(a) {
		// 		d(a.onsuccess, function(c) {
		// 			b.error(ErrCode.DEVICE_ERR, c, a)
		// 		}, a)
		// 	}, c.getSysVersion = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("getDeviceInfo", function(b) {
		// 			a.onsuccess(JSON.parse(b.device_info).os_version)
		// 		}, a.onfail), !1) : (g(a.onsuccess, function(c) {
		// 			b.error(ErrCode.DEVICE_ERR, c, a)
		// 		}, a), void 0)
		// 	}, c.getDeviceModelName = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("getDeviceInfo", function(b) {
		// 			a.onsuccess(JSON.parse(b.device_info).model)
		// 		}, a.onfail), !1) : (h(a.onsuccess, function(c) {
		// 			b.error(ErrCode.DEVICE_ERR, c, a)
		// 		}, a), void 0)
		// 	}, c.getScreenSize = function(a) {
		// 		window.screen ? a.onsuccess(window.screen) : b.error(ErrCode.DEVICE_ERR, ErrCode.DEVICE_ERR, a)
		// 	}, c.getHostAppKey = function(a) {
		// 		e(a.onsuccess, function(c) {
		// 			b.error(ErrCode.DEVICE_ERR, c, a)
		// 		}, a)
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b.native = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b.native = BLightApp && "function" == typeof BLightApp.getDeviceInfo ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b.native = 0), b.web = 0, a(b)
		// 	}, c
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.fs = {};
		// 	a.fs.ftmsg = {
		// 		1: "FILE NOT FOUND.",
		// 		2: "INVALID URL.",
		// 		3: "CONNECTION ERR.",
		// 		4: "ABORT_ERR."
		// 	};
		// 	var d = function(c, d, e) {
		// 			a.fs.ftmsg[d.code] && (d.error = a.fs.ftmsg[d.code]), d.result = d.code, delete d.code, b.error(c, d, e)
		// 		},
		// 		e = function(a) {
		// 			installPlugin("device", function(c) {
		// 				c.fs.requestFileSystem(c.fs.LocalFileSystem.PERSISTENT, 1e8, function(c) {
		// 					c.root.getDirectory(b.ak, {
		// 						create: !0,
		// 						exclusive: !1
		// 					}, function(b) {
		// 						a(b)
		// 					}, function() {
		// 						a(null)
		// 					})
		// 				}, function() {
		// 					a(null)
		// 				})
		// 			})
		// 		},
		// 		f = function(a) {
		// 			return a.substring(a.lastIndexOf("/") + 1)
		// 		},
		// 		g = null;
		// 	return c.post = function(a, b, c) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) {
		// 			var e = {};
		// 			if (e.param = [], c.param)
		// 				for (var h in c.param) e.param.push({
		// 					key: h,
		// 					value: c.param[h]
		// 				});
		// 			if (e.file = [], e.file.push({
		// 				key: c.uploadKey,
		// 				value: a
		// 			}), clouda.PLATFORM == clouda.PLATFORMS.IOS) {
		// 				var i = {};
		// 				i[c.uploadKey] = a, cloudaBLight("postFile", JSON.stringify({
		// 					url: b,
		// 					file: i,
		// 					param: c.param
		// 				}), c.onsuccess, function(a) {
		// 					a.error = clouda.device.fs.ftmsg[a.result], c.onfail(a)
		// 				})
		// 			} else cloudaBLight("postFile", b, JSON.stringify(e), c.onsuccess, function(a) {
		// 				a.error = clouda.device.fs.ftmsg[a.result], c.onfail(a)
		// 			});
		// 			return !1
		// 		}
		// 		installPlugin("filetransfer", function(e) {
		// 			null === g && (g = new e.FileTransfer), g.onprogress = c.onprogress ? function(a) {
		// 				c.onprogress(a)
		// 			} : function() {};
		// 			var h = new e.FileUploadOptions;
		// 			h.fileKey = c.uploadKey, h.fileName = f(a), c.param && (h.params = c.param), g.upload(a, b, function() {
		// 				c.onsuccess.apply(this, arguments)
		// 			}, function(a) {
		// 				d(ErrCode.FS_ERR, a, c)
		// 			}, h, c)
		// 		})
		// 	}, c.download = function(a, c, f) {
		// 		installPlugin("filetransfer", function(h) {
		// 			null === g && (g = new h.FileTransfer), f.onprogress && (g.onprogress = function(a) {
		// 				f.onprogress(a)
		// 			}), e(function(e) {
		// 				return e ? (g.download(a, e.fullPath + "/" + c, function() {
		// 					f.onsuccess.apply(this, arguments)
		// 				}, function(a) {
		// 					d(ErrCode.FS_ERR, a, f)
		// 				}, f), void 0) : (b.error(ErrCode.FS_ERR, err, f), void 0)
		// 			})
		// 		})
		// 	}, c.abort = function() {
		// 		null === g ? b.error(ErrCode.FS_ERR, clouda.STATUS.SYSTEM_FAILURE, options) : g.abort()
		// 	}, c.remove = function(a, c) {
		// 		installPlugin("device", function(d) {
		// 			var e = new d.fs.FileEntry(f(a), a);
		// 			e.remove(function() {
		// 				c.onsuccess.apply(this, arguments)
		// 			}, function(a) {
		// 				b.error(ErrCode.FS_ERR, a, c)
		// 			}, c)
		// 		})
		// 	}, c.empty = function(a) {
		// 		installPlugin("device", function() {
		// 			e(function(c) {
		// 				var d = c;
		// 				d.removeRecursively(function() {
		// 					a.onsuccess.apply(this, arguments)
		// 				}, function(c) {
		// 					b.error(ErrCode.FS_ERR, c, a)
		// 				}, a)
		// 			})
		// 		})
		// 	}, c.count = function(a) {
		// 		installPlugin("device", function() {
		// 			e(function(c) {
		// 				var d = c,
		// 					e = d.createReader();
		// 				e.readEntries(function(b) {
		// 					a.onsuccess.call(this, b.length)
		// 				}, function(c) {
		// 					b.error(ErrCode.FS_ERR, c, a)
		// 				}, a)
		// 			})
		// 		})
		// 	}, c.getInfo = function(a, c) {
		// 		installPlugin("device", function(d) {
		// 			var e = new d.fs.FileEntry(f(a), a);
		// 			e.file(function(a) {
		// 				c.onsuccess(a)
		// 			}, function() {
		// 				b.error(ErrCode.FS_ERR, ErrCode.UNKNOW_CALLBACK, c)
		// 			})
		// 		}, c)
		// 	}, c.getInfoByOffset = function(a, c) {
		// 		installPlugin("device", function() {
		// 			e(function(d) {
		// 				var e = d,
		// 					f = e.createReader();
		// 				f.readEntries(function(d) {
		// 					return a >= d.length ? (b.error(ErrCode.FS_ERR, ErrCode.UNKNOW_CALLBACK, c), void 0) : (fileEntry.file(function(a) {
		// 						c.onsuccess(a)
		// 					}, function() {
		// 						b.error(ErrCode.FS_ERR, ErrCode.UNKNOW_CALLBACK, c)
		// 					}), void 0)
		// 				}, function(a) {
		// 					b.error(ErrCode.FS_ERR, a, c)
		// 				}, c)
		// 			})
		// 		}, c)
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b["native"] = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b["native"] = BLightApp && "function" == typeof BLightApp.postFile ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b["native"] = 0), b.web = 0, a(b)
		// 	}, a
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.geolocation = {};
		// 	a.LOCATION_METHOD = {
		// 		BASE_STATION: 0,
		// 		GPS: 1
		// 	}, a.LOCERR = {
		// 		PERMISSION_DENIED: 1,
		// 		POSITION_UNAVAILABLE: 2,
		// 		TIMEOUT: 3
		// 	}, a.COORDTYPE = {
		// 		BD: "bd09ll",
		// 		GCJ: "gcj02ll",
		// 		GPS: "wgs84ll"
		// 	};
		// 	var d = new DelegateClass("map", "start"),
		// 		e = new DelegateClass("map", "stop");
		// 	c.get = function(a) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG && BLightApp && "function" == typeof BLightApp.getCurrentPosition) return cloudaBLight("getCurrentPosition", function(b) {
		// 			b.coords.coordtype = clouda.device.COORDTYPE.BD, a.onsuccess(b.coords)
		// 		}, a.onfail), !1;
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.NUWA && clouda.PLATFORM === clouda.PLATFORMS.ANDROID) d(function(c) {
		// 			"object" == typeof c ? (c.coordtype = clouda.device.COORDTYPE.GCJ, a.onsuccess(c)) : b.error(ErrCode.LOC_GET_ERR, ErrCode.UNKNOW_CALLBACK, a), e(function() {}, function() {})
		// 		}, function(c) {
		// 			b.error(ErrCode.LOC_GET_ERR, c, a)
		// 		}, a);
		// 		else try {
		// 			navigator.geolocation.getCurrentPosition(function(b) {
		// 				b.coords.coordtype = clouda.device.COORDTYPE.GPS, a.onsuccess(b.coords)
		// 			}, a.onfail)
		// 		} catch (c) {
		// 			a.onfail(clouda.STATUS.SYSTEM_FAILURE)
		// 		}
		// 	};
		// 	var f = 0;
		// 	return c.startListen = function(a) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) return cloudaBLight("startListenLocation", function(b) {
		// 			a.onsuccess(b.coords)
		// 		}, a.onfail), !1;
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.NUWA) d(function(c) {
		// 			"object" == typeof c ? a.onsuccess(c) : b.error(ErrCode.LOC_GET_ERR, ErrCode.UNKNOW_CALLBACK, a)
		// 		}, function(c) {
		// 			b.error(ErrCode.LOC_GET_ERR, c, a)
		// 		}, a);
		// 		else try {
		// 			navigator.geolocation.clearWatch(f), f = navigator.geolocation.watchPosition(function(b) {
		// 				a.onsuccess(b.coords)
		// 			}, a.onfail)
		// 		} catch (c) {
		// 			a.onfail(clouda.STATUS.SYSTEM_FAILURE)
		// 		}
		// 	}, c.stopListen = function(a) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) return cloudaBLight("stopListenLocation", function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, a.onfail), void 0;
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.NUWA) e(function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(c) {
		// 			b.error(ErrCode.LOC_GET_ERR, c, a)
		// 		}, a);
		// 		else try {
		// 			navigator.geolocation.clearWatch(f), a.onsuccess(clouda.STATUS.SUCCESS)
		// 		} catch (c) {
		// 			a.onfail(clouda.STATUS.SYSTEM_FAILURE)
		// 		}
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b["native"] = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b["native"] = BLightApp && "function" == typeof BLightApp.getCurrentPosition ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b["native"] = 0), b.web = 1, a(b)
		// 	}, a
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.globalization = {},
		// 		d = new DelegateClass("device", "globalization", "getLocaleName");
		// 	return c.getlocale = function(a) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) {
		// 			try {
		// 				var c = BLightApp.getGlobalizationInfo();
		// 				a.onsuccess(c)
		// 			} catch (e) {
		// 				b.error(ErrCode.GLO_ERR, e.stack, a)
		// 			}
		// 			return !1
		// 		}
		// 		d(function(c) {
		// 			"string" == typeof c.value ? a.onsuccess(c.value.replace(/_\w+/, "")) : b.error(ErrCode.GLO_ERR, ErrCode.GLO_ERR, a)
		// 		}, function() {
		// 			a && "function" == typeof a.onfail ? a.onfail(ErrCode.GLO_ERR) : b.error(ErrCode.GLO_ERR)
		// 		}, a)
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b.native = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b.native = BLightApp && "function" == typeof BLightApp.getGlobalizationInfo ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b.native = 0), b.web = 0, a(b)
		// 	}, a
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.gyro = {},
		// 		d = new DelegateClass("device", "orientation", "getCurrentDeviceOrientation"),
		// 		e = new DelegateClass("device", "orientation", "clearWatch");
		// 	c.get = function(a) {
		// 		d(function(c) {
		// 			"object" == typeof c && "undefined" != typeof c.alpha && "undefined" != typeof c.beta && "undefined" != typeof c.gamma ? a.onsuccess.apply(this, arguments) : b.error(ErrCode.GYRO_ERR, ErrCode.UNKNOW_CALLBACK, a)
		// 		}, function(c) {
		// 			b.error(ErrCode.GYRO_ERR, c, a)
		// 		}, a)
		// 	};
		// 	var f;
		// 	return c.startListen = function(a) {
		// 		f && e(f), installPlugin("device", function(c) {
		// 			f = c.orientation.watchDeviceOrientation(function(c) {
		// 				"object" == typeof c && "undefined" != typeof c.alpha && "undefined" != typeof c.beta && "undefined" != typeof c.gamma ? a.onsuccess.apply(this, arguments) : b.error(ErrCode.GYRO_ERR, ErrCode.UNKNOW_CALLBACK, a)
		// 			}, function(c) {
		// 				b.error(ErrCode.GYRO_ERR, c, a)
		// 			}, a)
		// 		})
		// 	}, c.stopListen = function() {
		// 		e(f)
		// 	}, c
		// }), define("device", function(a) {
		// 	var b = a.keyboard = {};
		// 	b.startListenKeyboard = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("startListenKeyboard", JSON.stringify({}), a.onsuccess, a.onfail), !1) : void 0
		// 	}, b.stopListenKeyboard = function(a) {
		// 		return clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("stopListenKeyboard", JSON.stringify({}), a.onsuccess, a.onfail), !1) : void 0
		// 	}
		// }), define("device", function(a) {
		// 	var b = a.localStorage = {};
		// 	b.set = function(a, b, c) {
		// 		try {
		// 			window.localStorage.setItem(a, b), c.onsuccess(clouda.STATUS.SUCCESS)
		// 		} catch (d) {
		// 			console.log(d.stack), c.onfail(clouda.STATUS.SYSTEM_FAILURE)
		// 		}
		// 	}, b.get = function(a, b) {
		// 		try {
		// 			b.onsuccess(window.localStorage.getItem(a))
		// 		} catch (c) {
		// 			console.log(c.stack), b.onfail(clouda.STATUS.SYSTEM_FAILURE)
		// 		}
		// 	}, b.remove = function(a, b) {
		// 		try {
		// 			window.localStorage.removeItem(a), b.onsuccess(clouda.STATUS.SUCCESS)
		// 		} catch (c) {
		// 			console.log(c.stack), b.onfail(clouda.STATUS.SYSTEM_FAILURE)
		// 		}
		// 	}, b.count = function(a) {
		// 		try {
		// 			a.onsuccess(window.localStorage.length)
		// 		} catch (b) {
		// 			console.log(b.stack), a.onfail(clouda.STATUS.SYSTEM_FAILURE)
		// 		}
		// 	}, b.empty = function(a) {
		// 		try {
		// 			window.localStorage.clear(), a.onsuccess(clouda.STATUS.SUCCESS)
		// 		} catch (b) {
		// 			console.log(b.stack), a.onfail(clouda.STATUS.SYSTEM_FAILURE)
		// 		}
		// 	}
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.media = {};
		// 	a.media.mediamsg = {
		// 		0: "NONE ACTIVE.",
		// 		1: "ABORT_ERR.",
		// 		2: "CONNECTION ERR.",
		// 		3: "DECODE ERR.",
		// 		4: "SRC NOT SUPPORT."
		// 	}, a.MEDIA_DESTINATION = {}, a.MEDIA_ENCODEING = {}, a.MEDIA_TYPE = {}, a.MEDIA_SOURCE = {}, a.MEDIA_DIRECTION = {}, a.MEDIA_DESTINATION.DATA_URL = 0, a.MEDIA_DESTINATION.FILE_URI = 1, a.MEDIA_DESTINATION.NATIVE_URI = 2, a.MEDIA_ENCODEING.JPEG = 0, a.MEDIA_ENCODEING.PNG = 1, a.MEDIA_TYPE.PICTURE = 0, a.MEDIA_TYPE.VIDEO = 1, a.MEDIA_TYPE.ALLMEDIA = 2, a.MEDIA_TYPE.AUDIO = 3, a.MEDIA_SOURCE.ALBUM = 1, a.MEDIA_SOURCE.CAMERA = 0, a.MEDIA_DIRECTION.BACK = 0, a.MEDIA_DIRECTION.FRONT = 1, a.MEDIA_FORMAT = {
		// 		FILE: 0,
		// 		BASE64: 1
		// 	}, a.MEDIA_STATUS = {
		// 		NONE: 0,
		// 		STARTING: 1,
		// 		RUNNING: 2,
		// 		PAUSED: 3,
		// 		STOPPED: 4
		// 	}, new DelegateClass("device", "camera", "getPicture"), new DelegateClass("device", "capture", "captureAudio"), new DelegateClass("device", "capture", "captureImage"), new DelegateClass("device", "capture", "captureVideo"), c.captureMedia = function(c) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) {
		// 			c.source || (c.source = clouda.device.MEDIA_SOURCE.CAMERA);
		// 			var d = function(a) {
		// 					a.lastModified && (a.lastModifiedDate = a.lastModified, delete a.lastModified), c.onsuccess(a)
		// 				},
		// 				e = function(a) {
		// 					"cancel" === a.error_info && (a.result = clouda.STATUS.USER_CANCELED), c.onfail(a)
		// 				};
		// 			if (clouda.PLATFORM == clouda.PLATFORMS.IOS) {
		// 				if (clouda.RUNTIME_VERSION >= "5.5") {
		// 					var f = c.source == clouda.device.MEDIA_SOURCE.CAMERA ? "clouda.device.MEDIA_SOURCE.CAMERA" : "clouda.device.MEDIA_SOURCE.ALBUM";
		// 					return cloudaBLight("captureMedia", JSON.stringify({
		// 						quality: c.quality,
		// 						base64: c.base64,
		// 						height: c.height,
		// 						width: c.width,
		// 						source: f
		// 					}), d, e), !1
		// 				}
		// 				return !1
		// 			}
		// 			if (clouda.RUNTIME_VERSION >= "5.5") {
		// 				var g = {
		// 					quality: c.quality,
		// 					base64: c.base64,
		// 					height: c.height,
		// 					width: c.width,
		// 					source: c.source
		// 				};
		// 				return c.mediaType == clouda.device.MEDIA_TYPE.AUDIO ? b.error(ErrCode.NOT_FINISH, ErrCode.NOT_FINISH, c) : c.source == clouda.device.MEDIA_SOURCE.CAMERA ? (g.mediaType = c.mediaType === clouda.device.MEDIA_TYPE.VIDEO ? "lightapp.device.MEDIA_TYPE.VIDEO" : "lightapp.device.MEDIA_TYPE.IMAGE", cloudaBLight("cloudaLaunchCamera", JSON.stringify(g), d, e)) : c.source == clouda.device.MEDIA_SOURCE.ALBUM ? (g.mediaType = c.mediaType === clouda.device.MEDIA_TYPE.VIDEO ? "lightapp.device.MEDIA_TYPE.VIDEO" : "lightapp.device.MEDIA_TYPE.IMAGE", cloudaBLight("cloudaLaunchGallery", JSON.stringify(g), d, e)) : b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), !1
		// 			}
		// 			var h;
		// 			return c.mediaType == clouda.device.MEDIA_TYPE.AUDIO ? b.error(ErrCode.NOT_FINISH, ErrCode.NOT_FINISH, c) : c.source == clouda.device.MEDIA_SOURCE.CAMERA ? (h = c.mediaType === clouda.device.MEDIA_TYPE.VIDEO ? "lightapp.device.MEDIA_TYPE.VIDEO" : "lightapp.device.MEDIA_TYPE.IMAGE", cloudaBLight("cloudaLaunchCamera", h, d, e)) : c.source == clouda.device.MEDIA_SOURCE.ALBUM ? (h = c.mediaType === clouda.device.MEDIA_TYPE.VIDEO ? "lightapp.device.MEDIA_TYPE.VIDEO" : "lightapp.device.MEDIA_TYPE.IMAGE", cloudaBLight("cloudaLaunchGallery", h, d, e)) : b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), !1
		// 		}
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? installPlugin("device", function(d) {
		// 			var e;
		// 			c.mediaType == clouda.device.MEDIA_TYPE.VIDEO ? c.source === clouda.device.MEDIA_SOURCE.ALBUM ? (e = d.camera.getPicture, c.sourceType = a.MEDIA_SOURCE.ALBUM) : e = d.capture.captureVideo : c.mediaType == clouda.device.MEDIA_TYPE.AUDIO ? e = d.capture.captureAudio : (c.format === a.MEDIA_FORMAT.BASE64 ? c.destType = a.MEDIA_DESTINATION.DATA_URL : c.format === a.MEDIA_FORMAT.FILE && (c.destType = a.MEDIA_DESTINATION.FILE_URI), c.source === clouda.device.MEDIA_SOURCE.ALBUM ? (e = d.camera.getPicture, c.sourceType = a.MEDIA_SOURCE.ALBUM) : e = c.format === a.MEDIA_FORMAT.BASE64 ? d.camera.getPicture : d.capture.captureImage), e(function(b) {
		// 				if (Array.isArray(b))
		// 					if (1 == b.length && c.details) {
		// 						var e = 0;
		// 						b[e].getFormatData(function(a) {
		// 							b[e].width = a.width, b[e].height = a.height, b[e].duration = a.duration, c.onsuccess(b[0])
		// 						}, function() {})
		// 					} else 1 === b.length ? c.onsuccess(b[0]) : c.onsuccess(b);
		// 				else if (c.format === a.MEDIA_FORMAT.FILE) {
		// 					var f = new d.fs.MediaFile("tmpfile", b);
		// 					c.onsuccess(f)
		// 				} else c.onsuccess(b)
		// 			}, function(a) {
		// 				a.code && (a.result = a.code, a.error_info = a.message), 3 == a.result ? b.error(ErrCode.MEDIA_ERR, {
		// 					result: clouda.STATUS.USER_CANCELED,
		// 					error_info: "cancel"
		// 				}, c) : b.error(ErrCode.MEDIA_ERR, a, c)
		// 			}, c)
		// 		}, c) : b.error(ErrCode.MEDIA_ERR, clouda.STATUS.SYSTEM_FAILURE, c)
		// 	};
		// 	var d = {};
		// 	return c.operateMedia = function(a, c, e) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) {
		// 			var f = function(a) {
		// 					e.onsuccess(a.fullPath)
		// 				},
		// 				g = function() {
		// 					e.onsuccess(clouda.STATUS.SUCCESS)
		// 				},
		// 				h = function(a) {
		// 					a.error_info || (a.error_info = clouda.device.media.mediamsg[a.result]), e.onfail(a)
		// 				};
		// 			if (clouda.PLATFORM == clouda.PLATFORMS.IOS) return e.path = a, e.operator = c, cloudaBLight("operateMedia", JSON.stringify(e), g, h), !1;
		// 			switch (c) {
		// 				case "startRecord":
		// 					cloudaBLight("startRecording", a, g, h);
		// 					break;
		// 				case "stopRecord":
		// 					cloudaBLight("stopRecording", f, h);
		// 					break;
		// 				case "play":
		// 					cloudaBLight("playAudio", a, "lightapp.device.AUDIO_TYPE.PLAY", g, h);
		// 					break;
		// 				case "stop":
		// 					cloudaBLight("playAudio", a, "lightapp.device.AUDIO_TYPE.STOP", g, h);
		// 					break;
		// 				case "seekTo":
		// 					cloudaBLight("audioSeekTo", e.time, g, h);
		// 					break;
		// 				case "setVolume":
		// 					cloudaBLight("setVolume", e.volume, g, h);
		// 					break;
		// 				case "speedFF":
		// 					cloudaBLight("audioSpeedFF", g, h);
		// 					break;
		// 				default:
		// 					b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, e)
		// 			}
		// 			return !1
		// 		}
		// 		installPlugin("device", function(b) {
		// 			switch (d[a] || (d[a] = new b.Media(a, function() {}, e.onfail, e.onstatus)), c) {
		// 				case "getDuration":
		// 					var f = d[a][c]();
		// 					f > -1 ? e.onsuccess(f) : e.onfail(f);
		// 					break;
		// 				case "seekTo":
		// 					d[a][c](e.time), e.onsuccess(clouda.STATUS.SUCCESS);
		// 					break;
		// 				case "setVolume":
		// 					e.volume = parseFloat(e.volume), d[a][c](e.volume), e.onsuccess(clouda.STATUS.SUCCESS);
		// 					break;
		// 				case "speedFF":
		// 					d[a][c](5e3, e.onsuccess);
		// 					break;
		// 				case "play":
		// 					d[a][c](e, e.onsuccess);
		// 					break;
		// 				case "startRecord":
		// 				case "stop":
		// 				case "pause":
		// 					d[a][c](), e.onsuccess(clouda.STATUS.SUCCESS);
		// 					break;
		// 				case "stopRecord":
		// 					d[a][c](e.onsuccess, e.onfail);
		// 					break;
		// 				case "release":
		// 					d[a][c](), e.onsuccess(a), delete d[a]
		// 			}
		// 		}, e)
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b["native"] = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b["native"] = BLightApp && "function" == typeof BLightApp.cloudaLaunchCamera ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b["native"] = 0), b.web = 0, a(b)
		// 	}, a
		// }), define("device", function(a) {
		// 	var b = a.notification = {},
		// 		c = new DelegateClass("device", "notification", "alert"),
		// 		d = new DelegateClass("device", "notification", "confirm"),
		// 		e = new DelegateClass("device", "notification", "prompt"),
		// 		f = new DelegateClass("device", "notification", "beep"),
		// 		g = new DelegateClass("device", "notification", "vibrate"),
		// 		h = new DelegateClass("device", "notification", "activityStart"),
		// 		i = new DelegateClass("device", "notification", "activityStop"),
		// 		j = new DelegateClass("device", "notification", "progressStart"),
		// 		k = new DelegateClass("device", "notification", "progressValue"),
		// 		l = new DelegateClass("device", "notification", "progressStop");
		// 	return b.alert = function(a, b) {
		// 		return "object" == typeof b ? c(a, b.onsuccess, b.title, b.buttonName, b) : c(a)
		// 	}, b.confirm = function(a, b) {
		// 		b.buttonLabels && b.buttonLabels.length > 2 && (b.buttonLabels.length = 2), d.call(this, a, function(a) {
		// 			2 === a ? b.onfail(clouda.STATUS.USER_CANCELED) : b.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, b.title, b.buttonLabels, b)
		// 	}, b.beep = function(a) {
		// 		f(a)
		// 	}, b.vibrate = function(a) {
		// 		g(a)
		// 	}, b.prompt = function(a, b) {
		// 		b.buttonLabels && b.buttonLabels.length > 2 && (b.buttonLabels.length = 2), e.call(this, a, function(a) {
		// 			2 === a ? b.onfail(clouda.STATUS.USER_CANCELED) : b.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, b.title, b.buttonLabels, b.defaultText, b)
		// 	}, b.startLoad = function(a, b, c) {
		// 		h(a, b, c)
		// 	}, b.stopLoad = function(a) {
		// 		i(a)
		// 	}, b.startProgress = function(a, b) {
		// 		j(a, b)
		// 	}, b.updateProgress = function(a) {
		// 		k(a)
		// 	}, b.stopProgress = function() {
		// 		l()
		// 	}, a
		// }), define("device", function(a) {
		// 	var b = a.orientation = {},
		// 		c = !1;
		// 	b.setOrientation = function(a) {
		// 		var b = a.portrait;
		// 		c && nuwa.am.setOrientation(b), document.addEventListener("runtimeready", function() {
		// 			c = !0, nuwa.am.setOrientation(b)
		// 		})
		// 	}
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.qr = {},
		// 		d = new DelegateClass("barcode", "identifyQRcode"),
		// 		e = new DelegateClass("barcode", "identifyBarcode");
		// 	new DelegateClass("barcode", "createQRcode"), a.QR_TYPE = {
		// 		QRCODE: 1,
		// 		BARCODE: 2
		// 	}, c.startCapture = function(c) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) {
		// 			var f;
		// 			return f = c.type == clouda.device.QR_TYPE.BARCODE ? "lightapp.device.QR_TYPE.BARCODE" : "lightapp.device.QR_TYPE.QRCODE", cloudaBLight("startQRcode", f, function(a) {
		// 				c.onsuccess(a.qr_result)
		// 			}, c.onfail), void 0
		// 		}
		// 		c.type === a.QR_TYPE.BARCODE ? e(function(a) {
		// 			"string" == typeof a ? c.onsuccess.apply(this, arguments) : b.error(ErrCode.QR_ERR, ErrCode.UNKNOW_CALLBACK, c)
		// 		}, function(a) {
		// 			b.error(ErrCode.QR_ERR, a, c)
		// 		}, c) : d(function(a) {
		// 			"string" == typeof a ? c.onsuccess.apply(this, arguments) : b.error(ErrCode.QR_ERR, ErrCode.UNKNOW_CALLBACK, c)
		// 		}, function(a) {
		// 			b.error(ErrCode.QR_ERR, a, c)
		// 		}, c)
		// 	};
		// 	var f = {};
		// 	f.BLACK = 0, f.COLOR = 1, f.DYNAMIC = 2;
		// 	var g = {};
		// 	g.GIF = "gif", g.JPEG = "jpeg", c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b.native = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b.native = BLightApp && "function" == typeof BLightApp.startQRcode ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b.native = 0), b.web = 0, a(b)
		// 	}
		// }), define("device", function(a) {
		// 	var b = this,
		// 		c = a.screen = {},
		// 		d = new DelegateClass("device", "sharescreenshot", "takeScreenshot"),
		// 		e = new DelegateClass("device", "sharescreenshot", "sharePicture"),
		// 		f = new DelegateClass("device", "sharescreenshot", "shareScreenshot");
		// 	c.captureScreen = function(a) {
		// 		d(function(b) {
		// 			a.onsuccess(b)
		// 		}, function(c) {
		// 			b.error(ErrCode.SCREEN_ERROR, c, a)
		// 		})
		// 	}, c.shareImage = function(a, c) {
		// 		e(function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.SCREEN_ERROR, a, c)
		// 		}, a)
		// 	}, c.shareScreen = function(a) {
		// 		f(function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(c) {
		// 			b.error(ErrCode.SCREEN_ERROR, c, a)
		// 		})
		// 	}
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.account = {};
		// 	new DelegateClass("device", "login", "login");
		// 	var d = null;
		// 	a.LOGIN_TYPE = {
		// 		WEIBO: "sinaweibo",
		// 		QQ: "qqdenglu",
		// 		KAIXIN: "kaixin",
		// 		QQWEIBO: "qqweibo",
		// 		RENREN: "renren"
		// 	};
		// 	var e = !1;
		// 	c.login = function(a) {
		// 		if (!a.onsuccess || !a.onfail || !a.redirect_uri || "function" != typeof a.onsuccess || "function" != typeof a.onfail) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), !1;
		// 		var c = {
		// 			client_id: clouda.lightapp.ak,
		// 			redirect_uri: a.redirect_uri,
		// 			scope: a.scope || "basic",
		// 			login_mode: a.login_mode || 0,
		// 			login_type: a.login_type || void 0,
		// 			mobile: a.mobile || void 0,
		// 			display: "mobile",
		// 			response_type: "code",
		// 			state: a.state || void 0
		// 		};
		// 		if (1 === c.login_mode && (c.confirm_login = 1), 2 === c.login_mode && (c.force_login = 1), c.disable_third_login = 0 === a.disable_third_login ? a.disable_third_login : 1, !Boolean(a.force_h5) && clouda.RUNTIME === clouda.RUNTIMES.KUANG && BLightApp && "function" == typeof BLightApp.login) {
		// 			var f = clouda.lib.utils.regcallback(a.onsuccess, a.onfail);
		// 			BLightApp.login(JSON.stringify(c), f.s, f.f)
		// 		} else {
		// 			var g = "https://openapi.baidu.com/oauth/2.0/authorize";
		// 			a.authorize_url && (g = a.authorize_url);
		// 			var h = g + "?response_type=code&client_id=" + clouda.lightapp.ak + "&redirect_uri=" + encodeURIComponent(a.redirect_uri);
		// 			c.login_mode && (h += "&login_mode=" + c.login_mode), c.login_type && (h += "&login_type=" + c.login_type), c.client_id && (h += "&client_id=" + c.client_id), c.scope && (h += "&scope=" + c.scope), c.state && (h += "&state=" + c.state), c.display && (h += "&display=" + c.display), c.force_login && (h += "&force_login=" + c.force_login), c.confirm_login && (h += "&confirm_login=" + c.confirm_login), c.mobile && (h += "&mobile=" + c.mobile), h += "&return_callback=" + encodeURIComponent(location.origin), h += "&disable_third_login=" + c.disable_third_login, document.querySelector("#cloudaLoginFrame") ? d = document.querySelector("#cloudaLoginFrame") : (d = document.createElement("iframe"), d.id = "cloudaLoginFrame"), d.src = h, d.style.position = "absolute", d.style.top = "0px", d.style.left = "0px", d.scrolling = "no", d.style.border = "none", d.style.backgroundColor = "#fff", d.style.display = "none", d.style.zIndex = "99999", document.body.appendChild(d), e || window.addEventListener("message", function(b) {
		// 				var c = b.data;
		// 				"return_callback" === c && (clouda.mbaas.account.closeLoginDialog(), a.onfail()), "show_login" === c && (d.style.display = "block"), e = !0
		// 			}, !1);
		// 			var i = top.innerWidth >= top.document.body.offsetHeight ? top.innerWidth : top.document.body.offsetHeight;
		// 			d.style.width = top.innerWidth + "px", d.style.height = i + "px", d.onload = function() {
		// 				d.style.width = top.innerWidth + "px", d.style.height = i + "px"
		// 			}
		// 		}
		// 	}, c.closeLoginDialog = function() {
		// 		d && document.body.contains(d) && document.body.removeChild(d)
		// 	}, c.bdLogin = function(a) {
		// 		if (!clouda.STATUS.SUCCESS) return kuangForReady("clouda.mbaas.account.bdLogin", arguments), void 0;
		// 		if (!a.onsuccess || !a.onfail || "function" != typeof a.onsuccess || "function" != typeof a.onfail || !a.tpl) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), !1;
		// 		var c = {};
		// 		if (c.u = a.u ? encodeURIComponent(a.u) : "", c.uid = a.uid || "", c.regtype = a.regtype || "", c.from = a.from || "", c.bd_page_type = a.bd_page_type || "", c.pu = a.pu || "", c.tn = a.tn || "", c.tpl = a.tpl, c.login_type = a.login_type || "", c.mobile = a.mobile || "", clouda.RUNTIME === clouda.RUNTIMES.KUANG && BLightApp && "function" == typeof BLightApp.bdLogin) {
		// 			var d = clouda.lib.utils.regcallback(a.onsuccess, a.onfail);
		// 			return BLightApp.bdLogin(JSON.stringify(c), d.s, d.f), void 0
		// 		}
		// 		var e = "http://wappass.baidu.com/passport/",
		// 			f = e + "?login&u=" + c.u + "&uid=" + c.uid + "&pu=" + c.pu + "&regtype=" + c.regtype + "&from=" + c.from + "&bd_page_type=" + c.bd_page_type + "&tn=" + c.tn + "&tpl=" + c.tpl;
		// 		if (a.extra_params) {
		// 			var g = a.extra_params;
		// 			for (var h in g) g.hasOwnProperty(h) && (f = f + "&" + h + "=" + g[h])
		// 		}
		// 		return location.replace(f), void 0
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b["native"] = 0 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b["native"] = BLightApp && "function" == typeof BLightApp.login ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b["native"] = 0), b.web = 1, a(b)
		// 	}
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.app = {};
		// 	c.followSite = function(a, c) {
		// 		return a ? (clouda.lib.utils.setLogStorage("app", "followSite"), clouda.RUNTIME === clouda.RUNTIMES.KUANG ? clouda.RUNTIME_VERSION < 5.3 ? (clouda.lib.moplus.openApp(!1, a, "请使用最新版【手机百度】\n订阅"), void 0) : (cloudaBLight("followSite", function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, c.onfail), !1) : (installPlugin("device", function() {
		// 			nuwa.am.subscribe(a, function() {
		// 				c.onsuccess(clouda.STATUS.SUCCESS)
		// 			}, function(a) {
		// 				b.error(ErrCode.APP_ERROR, a, c)
		// 			})
		// 		}), void 0)) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.checkFollow = function(a, c) {
		// 		return a ? (clouda.lib.utils.setLogStorage("app", "checkFollow"), clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (cloudaBLight("queryWzStatus", function(a) {
		// 			c.onsuccess(parseInt(a.status, 10))
		// 		}, c.onfail), !1) : (installPlugin("device", function() {
		// 			nuwa.am.hasSubscribed(a, function(a) {
		// 				c.onsuccess(a ? 1 : 0)
		// 			}, function(a) {
		// 				b.error(ErrCode.APP_ERROR, a, c)
		// 			})
		// 		}), void 0)) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b["native"] = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b["native"] = BLightApp && "function" == typeof BLightApp.followSite ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b["native"] = 0), b.web = 0, a(b)
		// 	}
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.face = {};
		// 	a.FR_ERROR = {
		// 		NETWORK_ERR: 1,
		// 		TIMEOUT_ERR: 2,
		// 		CANCEL_ERR: 3,
		// 		REGISTER_ERR: 4,
		// 		VERIFY_ERR: 5,
		// 		DETECT_FACE_ERR: 6,
		// 		AUTHORIZE_DEVICE_ERR: 7,
		// 		GET_DEVICE_LIST_ERR: 8,
		// 		CLECK_BLINK_ERR: 9,
		// 		SERVER_ERR: 99,
		// 		UNKNOWN_ERR: 100
		// 	}, c.register = function(a, c) {
		// 		installPlugin("facerecognition", function(d) {
		// 			var e = new d.FaceRecognition(a);
		// 			e.register(function() {
		// 				c.onsuccess(clouda.STATUS.SUCCESS)
		// 			}, function(a) {
		// 				b.error(ErrCode.FR_ERROR, a, c)
		// 			})
		// 		})
		// 	}, c.verify = function(a, c) {
		// 		installPlugin("facerecognition", function(d) {
		// 			var e = new d.FaceRecognition(a);
		// 			e.verify(function() {
		// 				c.onsuccess(clouda.STATUS.SUCCESS)
		// 			}, function(a) {
		// 				b.error(ErrCode.FR_ERROR, a, c)
		// 			})
		// 		})
		// 	}, c.checkBlink = function(a, c) {
		// 		installPlugin("facerecognition", function(d) {
		// 			var e = new d.FaceRecognition(a);
		// 			e.check_blink(function() {
		// 				c.onsuccess(clouda.STATUS.SUCCESS)
		// 			}, function(a) {
		// 				b.error(ErrCode.FR_ERROR, a, c)
		// 			})
		// 		})
		// 	}, c.authorizeDevice = function(a, c) {
		// 		installPlugin("facerecognition", function(d) {
		// 			var e = new d.FaceRecognition(a);
		// 			e.authorize_device(function() {
		// 				c.onsuccess(clouda.STATUS.SUCCESS)
		// 			}, function(a) {
		// 				b.error(ErrCode.FR_ERROR, a, c)
		// 			})
		// 		})
		// 	}, c.listDevice = function(a, c) {
		// 		installPlugin("facerecognition", function(d) {
		// 			var e = new d.FaceRecognition(a);
		// 			e.get_device_list(function() {
		// 				c.onsuccess.apply(this, arguments)
		// 			}, function(a) {
		// 				b.error(ErrCode.FR_ERROR, a, c)
		// 			})
		// 		})
		// 	}
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.map = {},
		// 		d = new DelegateClass("map", "start"),
		// 		e = new DelegateClass("map", "stop"),
		// 		f = new DelegateClass("map", "locationRequest"),
		// 		g = new DelegateClass("map", "poiRequest"),
		// 		h = function(a, b) {
		// 			var c = document.getElementsByTagName("head")[0],
		// 				d = document.createElement("script");
		// 			d.type = "text/javascript", d.src = a, d.onload = d.onreadystatechange = function() {
		// 				this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || ("function" == typeof b && b(), d.onload = d.onreadystatechange = null, c && d.parentNode && c.removeChild(d))
		// 			}, c.insertBefore(d, c.firstChild)
		// 		};
		// 	c.Convertor = {}, c.Convertor.translate = function(a, b, d) {
		// 		var e = "cbk_" + Math.round(1e4 * Math.random()),
		// 			f = "http://api.map.baidu.com/ag/coord/convert?from=" + b + "&to=4&x=" + a.lng + "&y=" + a.lat + "&callback=clouda.mbaas.map.Convertor." + e;
		// 		h(f), c.Convertor[e] = function(a) {
		// 			delete c.Convertor[e];
		// 			var b = new BMap.Point(a.x, a.y);
		// 			"function" == typeof d && d(b)
		// 		}
		// 	}, c.start = function(a) {
		// 		d(a.onsuccess, function(c) {
		// 			b.error(ErrCode.MAP_ERROR, c, a)
		// 		}, a)
		// 	}, c.stop = function(a) {
		// 		e(function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(c) {
		// 			b.error(ErrCode.MAP_ERROR, c, a)
		// 		}, a)
		// 	}, c.locationRequest = function(a) {
		// 		f(a.onsuccess, function(c) {
		// 			b.error(ErrCode.MAP_ERROR, c, a)
		// 		}, a)
		// 	}, c.poiRequest = function(a) {
		// 		g(function(b) {
		// 			a.onsuccess(b)
		// 		}, function(c) {
		// 			b.error(ErrCode.MAP_ERROR, c, a)
		// 		}, a)
		// 	}
		// }), define("mbaas", function(a) {
		// 	return a.share = {}, a
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.pay = {};
		// 	new DelegateClass("lightpay", "init"), new DelegateClass("lightpay", "dopay");
		// 	var d = ["lecai.com", "cloudaapi.duapp.com"];
		// 	c.init = function(a, c) {
		// 		if (!a) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), !1;
		// 		if ("number" == typeof a && (a = String(a)), !clouda.STATUS.SUCCESS) return kuangForReady("clouda.mbaas.pay.init", arguments), void 0;
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG && BLightApp && "function" == typeof BLightApp.initpay) {
		// 			var d = clouda.lib.utils.regcallback(function() {
		// 				c.onsuccess(clouda.STATUS.SUCCESS)
		// 			}, c.onfail);
		// 			return BLightApp.initpay(d.s, d.f, a), !1
		// 		}
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA
		// 	}, c.doPay = function(a) {
		// 		if (a.hideLoading || (a.hideLoading = !1), a.orderInfo || b.error(ErrCode.PAY_ERROR, ErrCode.UNKNOW_INPUT, a), !clouda.STATUS.SUCCESS) return kuangForReady("clouda.mbaas.pay.doPay", arguments), void 0;
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG && BLightApp && "function" == typeof BLightApp.dopay) {
		// 			var c = clouda.lib.utils.regcallback(a.onsuccess, a.onfail);
		// 			if (clouda.PLATFORM === clouda.PLATFORMS.IOS) {
		// 				for (var e = a.safari ? !0 : !1, f = 0, g = d.length; g > f; f++)
		// 					if (-1 !== location.origin.indexOf(d[f])) {
		// 						e = !0;
		// 						break
		// 					}
		// 				if (e) {
		// 					if (clouda.RUNTIME_VERSION > "5.3.5") {
		// 						var h = {
		// 							ExternalURL: "http://baifubao.baidu.com/jump?uri=/api/0/pay/0/wapdirect/0&" + a.orderInfo
		// 						};
		// 						BLightApp.dopay(c.s, c.f, a.orderInfo, a.hideLoading, JSON.stringify(h))
		// 					} else BLightApp.dopay(c.s, c.f, a.orderInfo, a.hideLoading);
		// 					return
		// 				}
		// 			}
		// 			return BLightApp.dopay(c.s, c.f, a.orderInfo, a.hideLoading), !1
		// 		}
		// 		return 1 == a.noLogin ? (location.href = "http://baifubao.baidu.com/jump?uri=/api/0/pay/0/wapdirect&" + a.orderInfo, !1) : (location.href = "http://baifubao.baidu.com/jump?uri=/api/0/pay/0/wapdirect/0&" + a.orderInfo, !1)
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b["native"] = 1 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b["native"] = BLightApp && "function" == typeof BLightApp.dopay ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b["native"] = 0), b.web = 1, a(b)
		// 	}
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.pcs = {};
		// 	a.VIDEO_STREAM = {
		// 		P360: "MP4_360P",
		// 		P480: "MP4_480P"
		// 	}, a.MEDIA_TYPE = {
		// 		IMG: "image",
		// 		AUD: "audio",
		// 		VID: "video",
		// 		DOC: "doc"
		// 	}, a.CODEC_TYPE = {
		// 		M320: "M3U8_320_240",
		// 		M480224: "M3U8_480_224",
		// 		M480360: "M3U8_480_360",
		// 		M640: "M3U8_640_480",
		// 		M854: "M3U8_854_480"
		// 	};
		// 	var d, e = "";
		// 	return c.init = function(a, c) {
		// 		return a ? (installPlugin("pcs", function(e) {
		// 			e.initPCS(a, function() {
		// 				c.onsuccess(e), d = e
		// 			}, function(a) {
		// 				b.error(ErrCode.PCS_ERROR, a, c)
		// 			})
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.mkdir = function(a, c) {
		// 		return d ? (d.makeDir(e + a, function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.getQuota = function(a) {
		// 		return d ? (d.quota(function(b) {
		// 			a.onsuccess(b)
		// 		}, function(c) {
		// 			b.error(ErrCode.PCS_ERROR, c, a)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), void 0)
		// 	}, c.uploadFile = function(a, c, f) {
		// 		return d ? (d.uploadFile({
		// 			source: a,
		// 			target: e + c
		// 		}, function(a) {
		// 			f.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, f)
		// 		}, function(a) {
		// 			f.onprogress(a)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, f), void 0)
		// 	}, c.deleteFiles = function(a, c) {
		// 		return d && Array.isArray(a) ? (d.deleteFiles(a, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.getMeta = function(a, c) {
		// 		return d ? (d.meta(a, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.getList = function(a, c) {
		// 		if (!d) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0;
		// 		var e = {
		// 			path: a
		// 		};
		// 		e.by = c.by ? c.by : "time", e.order = c.order ? c.order : "asc", d.list(e, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		})
		// 	}, c.getStreamingURL = function(c, f, g) {
		// 		if (!d) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, g), void 0;
		// 		"string" != typeof f && (f = a.VIDEO_STREAM.P360);
		// 		var h = {
		// 			source: e + c,
		// 			type: f
		// 		};
		// 		d.getStreamingURL(h, function(a) {
		// 			g.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, g)
		// 		})
		// 	}, c.search = function(a, c, f, g) {
		// 		if (!d) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, g), void 0;
		// 		var h = {
		// 			path: e + a,
		// 			key: c,
		// 			recursive: f
		// 		};
		// 		d.search(h, function(a) {
		// 			g.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, g)
		// 		})
		// 	}, c.thumbnail = function(a, c) {
		// 		if (!d) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0;
		// 		var f = {
		// 			path: e + a,
		// 			quality: c.quality,
		// 			width: c.width,
		// 			height: c.height
		// 		};
		// 		d.thumbnail(f, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		})
		// 	}, c.move = function(a, c) {
		// 		if (!d || !Array.isArray(a)) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0;
		// 		for (var f = 0, g = a.length; g > f; f++) a[f].from = e + a[f].from, a[f].to = e + a[f].to;
		// 		d.move(a, function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		})
		// 	}, c.rename = function(a, c) {
		// 		if (!d || !Array.isArray(a)) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0;
		// 		for (var f = 0, g = a.length; g > f; f++) a[f].oldName = e + a[f].oldName, a[f].newName = e + a[f].newName;
		// 		d.rename(a, function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		})
		// 	}, c.copy = function(a, c) {
		// 		if (!d || !Array.isArray(a)) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0;
		// 		for (var f = 0, g = a.length; g > f; f++) a[f].from = e + a[f].from, a[f].to = e + a[f].to;
		// 		d.copy(a, function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		})
		// 	}, c.getListByCategory = function(a, c) {
		// 		return d ? (d.streamWithSpecificMediaType({
		// 			type: a
		// 		}, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.createFileLink = function(a, c) {
		// 		return d ? (d.createFileLink(e + a, function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.deleteFileLink = function(a, c) {
		// 		return d ? (d.deleteFileLink(e + a, function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.cloudMatch = function(a, c, e) {
		// 		return d ? (d.cloudMatch({
		// 			localPath: a,
		// 			serverPath: c
		// 		}, function(a) {
		// 			e.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, e)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, e), void 0)
		// 	}, c.cloudMatchAndUploadFile = function(a, c, e) {
		// 		return d ? (d.cloudMatchAndUploadFile({
		// 			localPath: a,
		// 			serverPath: c
		// 		}, function(a) {
		// 			e.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, e)
		// 		}, function(a) {
		// 			e.onprogress(a)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, e), void 0)
		// 	}, c.listRecycle = function(a) {
		// 		return d ? (d.listRecycle({}, function(b) {
		// 			a.onsuccess(b)
		// 		}, function(c) {
		// 			b.error(ErrCode.PCS_ERROR, c, a)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), void 0)
		// 	}, c.restore = function(a, c) {
		// 		return d && Array.isArray(a) ? (d.restoreRecycle(a, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.cleanRecycle = function(a) {
		// 		return d ? (d.cleanRecycle(function() {
		// 			a.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(c) {
		// 			b.error(ErrCode.PCS_ERROR, c, a)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), void 0)
		// 	}, c.downloadFile = function(a, c, e) {
		// 		if (!d) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, e), void 0;
		// 		var f, g = {
		// 			source: a,
		// 			target: c
		// 		};
		// 		Array.isArray(a) ? (f = d.batchDownloadFiles, delete g.source, g.sourceList = a) : e.codecType ? (f = d.downloadFileAsSpecificCodecType, g.type = e.codecType) : f = e.asStream ? d.downloadFileFromStream : d.downloadFile, f(g, function(a) {
		// 			e.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, e)
		// 		}, function(a) {
		// 			e.onprogress(a)
		// 		})
		// 	}, c.cloudDownload = function(a, c, e) {
		// 		if (!d) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, e), void 0;
		// 		var f = {
		// 			sourceUrl: a,
		// 			serverPath: c,
		// 			rateLimit: e.rateLimit ? e.rateLimit : 0,
		// 			timeOut: e.timeout ? e.timeout : 0
		// 		};
		// 		d.cloudDownload(f, function() {
		// 			e.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, e)
		// 		})
		// 	}, c.cloudDownloadTaskList = function(a) {
		// 		if (!d) return b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), void 0;
		// 		a.asc = "desc" === a.order ? 0 : 1;
		// 		var c = {
		// 			start: a.start ? a.start : 0,
		// 			limit: a.limit ? a.limit : 0,
		// 			asc: a.asc,
		// 			status: a.status ? a.status : -1,
		// 			needTaskInfo: a.needTaskInfo ? a.needTaskInfo : !0
		// 		};
		// 		d.cloudDownloadTaskList(c, function(b) {
		// 			a.onsuccess(b)
		// 		}, function(c) {
		// 			b.error(ErrCode.PCS_ERROR, c, a)
		// 		})
		// 	}, c.queryCloudDownloadTaskStatus = function(a, c) {
		// 		return d && Array.isArray(a) ? (d.queryCloudDownloadTaskStatus(a, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.queryCloudDownloadTaskProgress = function(a, c) {
		// 		return d && Array.isArray(a) ? (d.queryCloudDownloadTaskProgress(a, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.cancelCloudDownload = function(a, c) {
		// 		return d && Array.isArray(filesukarr) ? (d.cancelCloudDownload(a, function() {
		// 			c.onsuccess(clouda.STATUS.SUCCESS)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, c.diff = function(a, c) {
		// 		return d ? (d.diff(a, function(a) {
		// 			c.onsuccess(a)
		// 		}, function(a) {
		// 			b.error(ErrCode.PCS_ERROR, a, c)
		// 		}), void 0) : (b.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, c), void 0)
		// 	}, a
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.mediaplayer = {};
		// 	c.play = function(a, c) {
		// 		installPlugin("videoplayer", function(d) {
		// 			var e = new d.VideoPlayerOptions(a);
		// 			d.play(function() {
		// 				c.onsuccess(clouda.STATUS.SUCCESS)
		// 			}, function(a) {
		// 				b.error(ErrCode.CPS_ERROR, a, c)
		// 			}, e)
		// 		})
		// 	}
		// }), define("mbaas", function(a) {
		// 	var b = a.push = {},
		// 		c = function(a, b) {
		// 			var c = document.createElement("script");
		// 			c.setAttribute("src", a), document.head.appendChild(c), c.onload = function() {
		// 				b && b(c)
		// 			}
		// 		},
		// 		d = "";
		// 	b.registerUnicast = function(a) {
		// 		if (clouda.lib.utils.setLogStorage("push", "registerUnicast"), clouda.RUNTIME === clouda.RUNTIMES.KUANG && clouda.RUNTIME_VERSION < "5.4") return cloudaBLight("getPushToken", a.onsuccess, a.onfail), !1;
		// 		window.cloudaPushServiceRegisterUnicast = function(b) {
		// 			b.error ? a.onfail(b) : a.onsuccess(b)
		// 		};
		// 		var b = "";
		// 		a.nonce && a.csrftoken && (b = "&nonce=" + a.nonce + "&csrftoken=" + a.csrftoken), a.addShortcut && (b = b + "&addShortcut=" + a.addShortcut);
		// 		var e = "" === d ? "7777" : d;
		// 		c("http://127.0.0.1:" + e + "/bindLight?apikey=" + clouda.lightapp.ak + b + "&callback=cloudaPushServiceRegisterUnicast", function(a) {
		// 			document.head.removeChild(a)
		// 		})
		// 	}, b.unregisterUnicast = function(a) {
		// 		clouda.lib.utils.setLogStorage("push", "unregisterUnicast"), window.cloudaPushServiceUnregisterUnicast = function(b) {
		// 			b.error ? a.onfail(b) : a.onsuccess(b)
		// 		};
		// 		var b = "";
		// 		a.nonce && a.csrftoken && (b = "&nonce=" + a.nonce + "&csrftoken=" + a.csrftoken);
		// 		var e = "" === d ? "7777" : d;
		// 		c("http://127.0.0.1:" + e + "/unbindLight?apikey=" + clouda.lightapp.ak + b + "&callback=cloudaPushServiceUnregisterUnicast", function(a) {
		// 			document.head.removeChild(a)
		// 		})
		// 	}, b.registerMulticast = function(a) {
		// 		clouda.lib.utils.setLogStorage("push", "registerMulticast"), window.cloudaPushServiceRegisteMulticast = function(b) {
		// 			b.error ? a.onfail(b) : a.onsuccess(b)
		// 		};
		// 		var b = "";
		// 		a.nonce && a.csrftoken && (b = "&nonce=" + a.nonce + "&csrftoken=" + a.csrftoken);
		// 		var e = "" === d ? "7777" : d;
		// 		c("http://127.0.0.1:" + e + "/subscribeService?apikey=" + clouda.lightapp.ak + b + "&tag=" + a.tag + "&callback=cloudaPushServiceRegisteMulticast", function(a) {
		// 			document.head.removeChild(a)
		// 		})
		// 	}, b.unregisterMulticast = function(a) {
		// 		clouda.lib.utils.setLogStorage("push", "unregisterMulticast"), window.cloudaPushServiceUnregisterMulticast = function(b) {
		// 			b.error ? a.onfail(b) : a.onsuccess(b)
		// 		};
		// 		var b = "";
		// 		a.nonce && a.csrftoken && (b = "&nonce=" + a.nonce + "&csrftoken=" + a.csrftoken);
		// 		var e = "" === d ? "7777" : d;
		// 		c("http://127.0.0.1:" + e + "/unsubscribeService?apikey=" + clouda.lightapp.ak + b + "&tag=" + a.tag + "&callback=cloudaPushServiceUnregisterMulticast", function(a) {
		// 			document.head.removeChild(a)
		// 		})
		// 	}, b.detectRuntime = function(a) {
		// 		clouda.lib.utils.setLogStorage("push", "detectRuntime"), window.cloudaPushServiceDetectRuntime = function(b) {
		// 			a(b)
		// 		}, c("http://127.0.0.1:7777/detectRuntime?callback=cloudaPushServiceDetectRuntime", function(a) {
		// 			document.head.removeChild(a)
		// 		})
		// 	}, b.startRuntime = function(a) {
		// 		clouda.lib.utils.setLogStorage("push", "startRuntime");
		// 		var b = encodeURIComponent("#Intent;action=com.baidu.lightapp.runtime.start;end");
		// 		window.cloudaPushServiceStartRuntime = function(b) {
		// 			a(b)
		// 		}, c("http://127.0.0.1:7777/startRuntime?intent=" + b + "&callback=cloudaPushServiceStartRuntime", function(a) {
		// 			document.head.removeChild(a)
		// 		})
		// 	}, b.getUniqueId = function(a) {
		// 		clouda.lib.utils.setLogStorage("push", "getUniqueId"), window.cloudaPushServiceGetUniqueId = function(b) {
		// 			b.error ? a.onfail(b) : a.onsuccess(b)
		// 		};
		// 		var b = "" === d ? "7777" : d;
		// 		c("http://127.0.0.1:" + b + "/getUniqueId?apikey=" + clouda.lightapp.ak + "&callback=cloudaPushServiceGetUniqueId", function(a) {
		// 			document.head.removeChild(a)
		// 		})
		// 	}, b.isBind = function(a) {
		// 		clouda.lib.utils.setLogStorage("push", "isBind"), window.cloudaPushServiceIsBind = function(b) {
		// 			b.error ? a.onfail(b) : a.onsuccess(b)
		// 		};
		// 		var b = "" === d ? "7777" : d;
		// 		c("http://127.0.0.1:" + b + "/isBind?apikey=" + clouda.lightapp.ak + "&callback=cloudaPushServiceIsBind", function(a) {
		// 			document.head.removeChild(a)
		// 		})
		// 	}, b.checkSupport = function(a) {
		// 		var b = {};
		// 		navigator.userAgent;
		// 		var e = !1;
		// 		! function() {
		// 			var a = setTimeout(function() {
		// 				e ? clear(a) : getPushServiceVersionCallback({
		// 					error: 1
		// 				})
		// 			}, 2e3)
		// 		}(), window.getPushServiceVersionCallback = function(c) {
		// 			e = !0, c.error ? (b.web = 0, b["native"] = 0, a(b), console.error("fail to getPushVersion")) : (c.pushVersion, c.pushVersion >= 23 ? (b["native"] = 1, b.web = 1) : (b.web = 0, b["native"] = 0), a(b))
		// 		}, c("http://127.0.0.1:7777/getPushServiceVersion?callback=getPushServiceVersionCallback", function(a) {
		// 			d = "7777", document.head.removeChild(a)
		// 		}), c("http://127.0.0.1:9741/getPushServiceVersion?callback=getPushServiceVersionCallback", function(a) {
		// 			d = "9741", document.head.removeChild(a)
		// 		})
		// 	}
		// }), define("mbaas", function(a) {
		// 	function b(a) {
		// 		var b = clouda.lightInit.ak || clouda.lightapp.ak,
		// 			d = document.getElementsByClassName("bdSharePopup");
		// 		if (1 == a.hide) {
		// 			for (var e, i = 0, j = d.length; j > i; i++) e = d[i], "block" == e.style.display && (e.style.display = "none");
		// 			return !1
		// 		}
		// 		var k = function(a) {
		// 			var b = a.parentNode;
		// 			b && b.removeChild(a)
		// 		};
		// 		if (!a.content) return !1;
		// 		for (var l = 0, m = d.length; m > l; l++) d[l] && k(d[l]);
		// 		a.linkUrl = a.linkUrl ? encodeURIComponent(a.linkUrl) : encodeURIComponent(location.href), a.imageUrl = a.imageUrl ? encodeURIComponent(a.imageUrl) : "";
		// 		var n = {
		// 			afterRender: function() {
		// 				console.log("afterRender exec...")
		// 			},
		// 			client_id: b,
		// 			dom_id: "hidden_btn",
		// 			content: a.content,
		// 			theme: "native",
		// 			appid: a.appid ? a.appid : "",
		// 			animate: !1,
		// 			url: a.linkUrl,
		// 			pic_url: a.imageUrl
		// 		};
		// 		if (console.log(n), h) return socShare.init(n, function() {
		// 			f.dispatchEvent(g)
		// 		}), !1;
		// 		var o;
		// 		o = "http:" === window.location.protocol ? "http://apps.bdimg.com" : "https://openapi.baidu.com";
		// 		var p = 1.1;
		// 		c(o + "/cloudaapi/socialshare-api/share.min.js?a=" + p, function() {
		// 			var c = ["weixin_friend", "weixin_timeline", "qqfriend", "sinaweibo", "qqweibo", "qqdenglu", "renren", "sms", "email"];
		// 			if (a.mediaType && "all" !== a.mediaType) {
		// 				for (var d = !1, e = 0, i = c.length; i > e; e++)
		// 					if (c[e] == a.mediaType) {
		// 						d = !0;
		// 						break
		// 					}
		// 				if (d) return "weixin_friend" == a.mediaType || "weixin_timeline" == a.mediaType || "qqfriend" == a.mediaType ? location.href = "http://m.baidu.com/lightapp/reload?url=" + encodeURIComponent(location.href) + "&ak=" + n.client_id + "&appid=" + n.appid : "sinaweibo" == a.mediaType || "qqweibo" == a.mediaType || "renren" == a.mediaType ? location.href = "http://openapi.baidu.com/social/widget/share?method=share&media_type=" + a.mediaType + "&client_id=" + b + "&url=" + a.linkUrl + "&pic_url=" + a.imageUrl + "&content=" + encodeURIComponent(a.content) + "&u=" + a.linkUrl : "qqdenglu" == a.mediaType ? location.href = socShare.acc.getQQHref(n) : ("sms" == a.mediaType || "email" == a.mediaType) && socShare.acc.getShortLink({
		// 					client_id: b,
		// 					url: a.linkUrl
		// 				}, function() {
		// 					var b = socShare.acc.shortLinks[a.mediaType];
		// 					location.href = "sms" == a.mediaType ? socShare.acc.getSMSHref(a.content, b) : socShare.acc.getEmailHref(a.content, b)
		// 				}), void 0
		// 			}
		// 			h = !0, document.querySelector("#hidden_btn") ? console.log("js 加载失败") : (f = document.createElement("div"), f.id = "hidden_btn", f.style.display = "none", document.body.appendChild(f), socShare.init(n, function() {
		// 				f.dispatchEvent(g)
		// 			}))
		// 		})
		// 	}

		// 	function c(a, b) {
		// 		var c, d, e, f = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
		// 		"object" == typeof a && (d = a, a = void 0), e = d || {}, a = a || e.url, b = b || e.success, c = document.createElement("script"), c.id = "share_script", c.async = e.async || !1, c.type = "text/javascript", e.charset && (c.charset = e.charset), c.src = a, f.insertBefore(c, f.firstChild), "function" == typeof b && (document.addEventListener ? c.addEventListener("load", b, !1) : c.onreadystatechange = function() {
		// 			/loaded|complete/.test(c.readyState) && (c.onreadystatechange = null, b())
		// 		})
		// 	}
		// 	var d = this,
		// 		e = a.socialshare = {},
		// 		f = null,
		// 		g = document.createEvent("HTMLEvents");
		// 	g.initEvent("click", !1, !0), g.eventType = "message";
		// 	var h = !1;
		// 	return e.callShare = function(a) {
		// 		if (clouda.RUNTIME === clouda.RUNTIMES.KUANG && BLightApp && "function" == typeof BLightApp.callShare || navigator.userAgent.match(/baiduboxapp\/([\d+.]+)/) && clouda.RUNTIME_VERSION >= "5.3.5") {
		// 			if (1 == a.hide) return !1;
		// 			if (!a.onsuccess || !a.onfail || "function" != typeof a.onsuccess || "function" != typeof a.onfail) return d.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), !1;
		// 			if (!a.content) return d.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), !1;
		// 			if (!a.mediaType) return d.error(ErrCode.UNKNOW_INPUT, ErrCode.UNKNOW_INPUT, a), !1;
		// 			a.title || (a.title = "来自手机百度"), a.linkUrl || (a.linkUrl = location.href);
		// 			var c = clouda.lib.utils.regcallback(a.onsuccess, a.onfail);
		// 			if (clouda.RUNTIME === clouda.RUNTIMES.KUANG) BLightApp.callShare(JSON.stringify(a), c.s, c.f);
		// 			else if ("undefined" != typeof Bdbox_android_utils && "undefined" != typeof Bdbox_android_utils.callShare) Bdbox_android_utils.callShare(JSON.stringify(a), c.s, c.f);
		// 			else if (clouda.PLATFORM === clouda.PLATFORMS.IOS) {
		// 				var e = "baiduboxapp://callShare?options=" + encodeURIComponent(JSON.stringify(a)) + "&errorcallback=" + c.f + "&successcallback=" + c.s;
		// 				location.href = e
		// 			}
		// 			return !1
		// 		}
		// 		return clouda.RUNTIME === clouda.RUNTIMES.NUWA ? (b(a), !1) : (b(a), !1)
		// 	}, e.checkSupport = function(a) {
		// 		var b = {};
		// 		clouda.RUNTIME === clouda.RUNTIMES.NUWA ? b.native = 0 : clouda.RUNTIME === clouda.RUNTIMES.KUANG ? b.native = BLightApp && "function" == typeof BLightApp.callShare ? 1 : 0 : clouda.RUNTIME === clouda.RUNTIMES.WEB && (b.native = navigator.userAgent.match(/baiduboxapp\/([\d+.]+)/) && clouda.RUNTIME_VERSION >= "5.3.5" ? 1 : 0), b.web = 1, a(b)
		// 	}, e
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.subscribe = {},
		// 		d = {},
		// 		e = function(a, b) {
		// 			var c = document.createElement("script");
		// 			c.setAttribute("src", a), document.head.appendChild(c), c.onload = function() {
		// 				b && b(c)
		// 			}
		// 		};
		// 	c.setPanel = function(a) {
		// 		d = {
		// 			title: a.title || "",
		// 			description: a.description || "",
		// 			imgUrl: a.imgUrl.trim() || ""
		// 		}
		// 	}, c.showPanel = function(a) {
		// 		var c = this;
		// 		if (clouda.PLATFORM !== clouda.PLATFORMS.IOS && !document.querySelector("#subscribeView_" + b.ak)) {
		// 			var f = !1,
		// 				g = "7777";
		// 			! function() {
		// 				var a = setTimeout(function() {
		// 					f ? clear(a) : isSubscribedCallback({
		// 						error: 1
		// 					})
		// 				}, 1500)
		// 			}(), e("http://127.0.0.1:7777/isBind?apikey=" + clouda.lightapp.ak + "&callback=isSubscribedCallback", function(a) {
		// 				document.head.removeChild(a)
		// 			}), e("http://127.0.0.1:9741/isBind?apikey=" + clouda.lightapp.ak + "&callback=isSubscribedCallback", function(a) {
		// 				document.head.removeChild(a), g = "9741"
		// 			}), window.isSubscribedCallback = function(h) {
		// 				if (console.log(h), f = !0, !h.error && h.is_bind) return !1;
		// 				var i = '<div style="position:relative;margin-right:15px;border-radius:4px;min-height:62px;background-color:rgba(72,72,72, 0.8)"><div style="position:absolute;width:45px;height:45px;border-radius:5px;background-color:#fff;margin:9px 0 0 9px;background-image: url(' + d.imgUrl + ');background-size:cover"></div>' + '<div style="position:absolute;top:0;left:65px;height:100%;overflow:hidden;max-width:42%;padding-top:14px;">' + '<h3 style="margin:0;font-weight:normal;color:#fff;white-space:nowrap">' + d.title + "</h3>" + '<h5 style="margin:0;font-weight:normal;color:#fff;white-space:nowrap">' + d.description + "</h5>" + "</div>" + '<div id="subscribeBtn_' + b.ak + '" style="position:absolute;right:10px;top:15px;border-radius:3px;height:33px;width:72px;font-size:12px;color:#fff;line-height:33px;text-align:center;cursor:pointer;background:-webkit-linear-gradient(top, #5d5d5d, #383A38);box-shadow:0px -2px 6px #2c2c2c inset;">添加至桌面</div>' + '<button id="closeBtn_' + b.ak + '" style="padding:0;position:absolute;width:19px;height:19px;line-height:19px;top:-9px;right:-9px;border:none;border-radius:18px;color:#fff;background-color:rgba(72,72,72, 1);box-shadow:0px 0px 2px #e9e9e9;">X</button>' + "</div>",
		// 					j = document.createElement("div");
		// 				j.id = "subscribeView_" + b.ak, j.style.position = "fixed", j.style.margin = "auto 10px", j.style.bottom = "20px", j.style.width = "90%", j.innerHTML = i, document.body.appendChild(j), window.subscribeCallback = function(b) {
		// 					b.error ? a.onfail(b) : (document.body.removeChild(j), a.onsuccess(b))
		// 				}, document.getElementById("subscribeBtn_" + b.ak).addEventListener("click", function() {
		// 					c.checkSupport(function(b) {
		// 						if (0 === b["native"]) return clouda.lib.moplus.openApp(a.appid), !1;
		// 						var c = "";
		// 						a.nonce && a.csrftoken && (c = "&nonce=" + a.nonce + "&csrftoken=" + a.csrftoken), c += "&addShortcut=true", e("http://127.0.0.1:" + g + "/bindLight?apikey=" + clouda.lightapp.ak + c + "&callback=subscribeCallback", function(a) {
		// 							document.head.removeChild(a)
		// 						})
		// 					})
		// 				}), document.getElementById("closeBtn_" + b.ak).addEventListener("click", function() {
		// 					document.body.removeChild(j)
		// 				})
		// 			}
		// 		}
		// 	}, c.checkSupport = function(a) {
		// 		var b = {};
		// 		navigator.userAgent;
		// 		var c = !1;
		// 		! function() {
		// 			var a = setTimeout(function() {
		// 				c ? clear(a) : getPushServiceVersionCallback({
		// 					error: 1
		// 				})
		// 			}, 2e3)
		// 		}(), window.getPushServiceVersionCallback = function(d) {
		// 			c = !0, d.error ? (b.web = 0, b.native = 0, a(b), console.error("fail to geiPushVersion")) : (d.pushVersion, d.pushVersion >= 23 ? (b.native = 1, b.web = 1) : (b.web = 0, b.native = 0), a(b))
		// 		}, e("http://127.0.0.1:7777/getPushServiceVersion?callback=getPushServiceVersionCallback", function(a) {
		// 			support_port = "7777", document.head.removeChild(a)
		// 		}), e("http://127.0.0.1:9741/getPushServiceVersion?callback=getPushServiceVersionCallback", function(a) {
		// 			support_port = "9741", document.head.removeChild(a)
		// 		})
		// 	}
		// }), define("mbaas", function(a) {
		// 	var b = this,
		// 		c = a.vtt = {},
		// 		d = a.tts = {},
		// 		e = new DelegateClass("voice", "tts", "say"),
		// 		f = new DelegateClass("voice", "vtt", "showDialog");
		// 	a.VTT_SPEECHMODE = {
		// 		SEARCH: 0,
		// 		INPUT: 1
		// 	}, a.VTT_RATE = {
		// 		K8: 8e3,
		// 		K16: 16e3
		// 	};
		// 	var g = {};
		// 	c.init = function(a, b, c) {
		// 		g.ak = a, g.sk = b, g.pid = "" + c
		// 	}, c.showDialog = function(c) {
		// 		return g.ak ? clouda.RUNTIME === clouda.RUNTIMES.KUANG ? (c.uuid || (c.uuid = "uuid-uuid"), c.speechMode !== a.VTT_SPEECHMODE.SEARCH && (c.speechMode = a.VTT_SPEECHMODE.INPUT), c.speechMode = c.speechMode + "", c.filename || (c.filename = "2000000.wav"), clouda.PLATFORM == clouda.PLATFORMS.IOS ? cloudaBLight("showVTTDialog", JSON.stringify({
		// 			pid: g.pid,
		// 			uuid: c.uuid,
		// 			enablePower: "true",
		// 			ak: g.ak,
		// 			sk: g.sk,
		// 			speechMode: c.speechMode,
		// 			filename: c.filename
		// 		}), c.onsuccess, c.onfail) : cloudaBLight("launchSeniorVoiceRecognition", JSON.stringify({
		// 			config: {
		// 				pid: g.pid,
		// 				uuid: c.uuid,
		// 				enablePower: "true",
		// 				key: g.ak,
		// 				secKey: g.sk,
		// 				speechMode: c.speechMode,
		// 				filename: c.filename
		// 			}
		// 		}), c.onsuccess, c.onfail), !1) : (c.speechMode !== a.VTT_SPEECHMODE.SEARCH && (c.speechMode = a.VTT_SPEECHMODE.INPUT), c.dialogTheme || (c.dialogTheme = 1), c.ak = g.ak, c.sk = g.sk, c.pid = g.pid, f(c.onsuccess, c.onfail, c), void 0) : (b.error(ErrCode.vtt_ERR, "api need init first", c), !1)
		// 	}, d.TYPE_DICT_US = "dict_en", d.TYPE_DICT_UK = "dict_uk", d.TYPE_DICT_ZH = "trans_zh", d.say = function(a, c) {
		// 		e(function(a) {
		// 			"string" == typeof a ? c.onsuccess.apply(this, arguments) : b.error(ErrCode.vtt_ERR, ErrCode.UNKNOW_CALLBACK, c)
		// 		}, function(a) {
		// 			b.error(ErrCode.BTY_ERROR, a, c)
		// 		}, a, c.type)
		// 	}
		// }), 