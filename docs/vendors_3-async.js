((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_react-tablex​"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_react-tablex​"] || []).push([
        ['vendors_3'],
{ "node_modules/ahooks/es/createDeepCompareEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "createDeepCompareEffect", {
    enumerable: true,
    get: function() {
        return createDeepCompareEffect;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var _depsEqual = __mako_require__("node_modules/ahooks/es/utils/depsEqual.js");
var createDeepCompareEffect = function(hook) {
    return function(effect, deps) {
        var ref = (0, _react.useRef)(undefined);
        var signalRef = (0, _react.useRef)(0);
        if (deps === undefined || !(0, _depsEqual.depsEqual)(deps, ref.current)) signalRef.current += 1;
        ref.current = deps;
        hook(effect, [
            signalRef.current
        ]);
    };
};

},
"node_modules/ahooks/es/createUpdateEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    createUpdateEffect: function() {
        return createUpdateEffect;
    },
    default: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var createUpdateEffect = function(hook) {
    return function(effect, deps) {
        var isMounted = (0, _react.useRef)(false);
        // for react-refresh
        hook(function() {
            return function() {
                isMounted.current = false;
            };
        }, []);
        hook(function() {
            if (!isMounted.current) isMounted.current = true;
            else return effect();
        }, deps);
    };
};
var _default = createUpdateEffect;

},
"node_modules/ahooks/es/createUseStorageState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    SYNC_STORAGE_EVENT_NAME: function() {
        return SYNC_STORAGE_EVENT_NAME;
    },
    createUseStorageState: function() {
        return createUseStorageState;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useEventListener = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventListener/index.js"));
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var SYNC_STORAGE_EVENT_NAME = 'AHOOKS_SYNC_STORAGE_EVENT_NAME';
function createUseStorageState(getStorage) {
    function useStorageState(key, options) {
        if (options === void 0) options = {};
        var storage;
        var _a = options.listenStorageChange, listenStorageChange = _a === void 0 ? false : _a, _b = options.onError, onError = _b === void 0 ? function(e) {
            console.error(e);
        } : _b;
        // https://github.com/alibaba/hooks/issues/800
        try {
            storage = getStorage();
        } catch (err) {
            onError(err);
        }
        var serializer = function(value) {
            if (options.serializer) return options.serializer(value);
            return JSON.stringify(value);
        };
        var deserializer = function(value) {
            if (options.deserializer) return options.deserializer(value);
            return JSON.parse(value);
        };
        function getStoredValue() {
            try {
                var raw = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
                if (raw) return deserializer(raw);
            } catch (e) {
                onError(e);
            }
            if ((0, _utils.isFunction)(options.defaultValue)) return options.defaultValue();
            return options.defaultValue;
        }
        var _c = (0, _tslib.__read)((0, _react.useState)(getStoredValue), 2), state = _c[0], setState = _c[1];
        (0, _useUpdateEffect.default)(function() {
            setState(getStoredValue());
        }, [
            key
        ]);
        var updateState = function(value) {
            var currentState = (0, _utils.isFunction)(value) ? value(state) : value;
            if (!listenStorageChange) setState(currentState);
            try {
                var newValue = void 0;
                var oldValue = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
                if ((0, _utils.isUndef)(currentState)) {
                    newValue = null;
                    storage === null || storage === void 0 || storage.removeItem(key);
                } else {
                    newValue = serializer(currentState);
                    storage === null || storage === void 0 || storage.setItem(key, newValue);
                }
                dispatchEvent(// send custom event to communicate within same page
                // importantly this should not be a StorageEvent since those cannot
                // be constructed with a non-built-in storage area
                new CustomEvent(SYNC_STORAGE_EVENT_NAME, {
                    detail: {
                        key: key,
                        newValue: newValue,
                        oldValue: oldValue,
                        storageArea: storage
                    }
                }));
            } catch (e) {
                onError(e);
            }
        };
        var syncState = function(event) {
            if (event.key !== key || event.storageArea !== storage) return;
            setState(getStoredValue());
        };
        var syncStateFromCustomEvent = function(event) {
            syncState(event.detail);
        };
        // from another document
        (0, _useEventListener.default)('storage', syncState, {
            enable: listenStorageChange
        });
        // from the same document but different hooks
        (0, _useEventListener.default)(SYNC_STORAGE_EVENT_NAME, syncStateFromCustomEvent, {
            enable: listenStorageChange
        });
        return [
            state,
            (0, _useMemoizedFn.default)(updateState)
        ];
    }
    return useStorageState;
}

},
"node_modules/ahooks/es/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    clearCache: function() {
        return _useRequest.clearCache;
    },
    configResponsive: function() {
        return _useResponsive.configResponsive;
    },
    createUpdateEffect: function() {
        return _createUpdateEffect.createUpdateEffect;
    },
    useAntdTable: function() {
        return _useAntdTable.default;
    },
    useAsyncEffect: function() {
        return _useAsyncEffect.default;
    },
    useBoolean: function() {
        return _useBoolean.default;
    },
    useClickAway: function() {
        return _useClickAway.default;
    },
    useControllableValue: function() {
        return _useControllableValue.default;
    },
    useCookieState: function() {
        return _useCookieState.default;
    },
    useCountDown: function() {
        return _useCountDown.default;
    },
    useCounter: function() {
        return _useCounter.default;
    },
    useCreation: function() {
        return _useCreation.default;
    },
    useDebounce: function() {
        return _useDebounce.default;
    },
    useDebounceEffect: function() {
        return _useDebounceEffect.default;
    },
    useDebounceFn: function() {
        return _useDebounceFn.default;
    },
    useDeepCompareEffect: function() {
        return _useDeepCompareEffect.default;
    },
    useDeepCompareLayoutEffect: function() {
        return _useDeepCompareLayoutEffect.default;
    },
    useDocumentVisibility: function() {
        return _useDocumentVisibility.default;
    },
    useDrag: function() {
        return _useDrag.default;
    },
    useDrop: function() {
        return _useDrop.default;
    },
    useDynamicList: function() {
        return _useDynamicList.default;
    },
    useEventEmitter: function() {
        return _useEventEmitter.default;
    },
    useEventListener: function() {
        return _useEventListener.default;
    },
    useEventTarget: function() {
        return _useEventTarget.default;
    },
    useExternal: function() {
        return _useExternal.default;
    },
    useFavicon: function() {
        return _useFavicon.default;
    },
    useFocusWithin: function() {
        return _useFocusWithin.default;
    },
    useFullscreen: function() {
        return _useFullscreen.default;
    },
    useFusionTable: function() {
        return _useFusionTable.default;
    },
    useGetState: function() {
        return _useGetState.default;
    },
    useHistoryTravel: function() {
        return _useHistoryTravel.default;
    },
    useHover: function() {
        return _useHover.default;
    },
    useInViewport: function() {
        return _useInViewport.default;
    },
    useInfiniteScroll: function() {
        return _useInfiniteScroll.default;
    },
    useInterval: function() {
        return _useInterval.default;
    },
    useIsomorphicLayoutEffect: function() {
        return _useIsomorphicLayoutEffect.default;
    },
    useKeyPress: function() {
        return _useKeyPress.default;
    },
    useLatest: function() {
        return _useLatest.default;
    },
    useLocalStorageState: function() {
        return _useLocalStorageState.default;
    },
    useLockFn: function() {
        return _useLockFn.default;
    },
    useLongPress: function() {
        return _useLongPress.default;
    },
    useMap: function() {
        return _useMap.default;
    },
    useMemoizedFn: function() {
        return _useMemoizedFn.default;
    },
    useMount: function() {
        return _useMount.default;
    },
    useMouse: function() {
        return _useMouse.default;
    },
    useMutationObserver: function() {
        return _useMutationObserver.default;
    },
    useNetwork: function() {
        return _useNetwork.default;
    },
    usePagination: function() {
        return _usePagination.default;
    },
    usePrevious: function() {
        return _usePrevious.default;
    },
    useRafInterval: function() {
        return _useRafInterval.default;
    },
    useRafState: function() {
        return _useRafState.default;
    },
    useRafTimeout: function() {
        return _useRafTimeout.default;
    },
    useReactive: function() {
        return _useReactive.default;
    },
    useRequest: function() {
        return _useRequest.default;
    },
    useResetState: function() {
        return _useResetState.default;
    },
    useResponsive: function() {
        return _useResponsive.default;
    },
    useSafeState: function() {
        return _useSafeState.default;
    },
    useScroll: function() {
        return _useScroll.default;
    },
    useSelections: function() {
        return _useSelections.default;
    },
    useSessionStorageState: function() {
        return _useSessionStorageState.default;
    },
    useSet: function() {
        return _useSet.default;
    },
    useSetState: function() {
        return _useSetState.default;
    },
    useSize: function() {
        return _useSize.default;
    },
    useTextSelection: function() {
        return _useTextSelection.default;
    },
    useTheme: function() {
        return _useTheme.default;
    },
    useThrottle: function() {
        return _useThrottle.default;
    },
    useThrottleEffect: function() {
        return _useThrottleEffect.default;
    },
    useThrottleFn: function() {
        return _useThrottleFn.default;
    },
    useTimeout: function() {
        return _useTimeout.default;
    },
    useTitle: function() {
        return _useTitle.default;
    },
    useToggle: function() {
        return _useToggle.default;
    },
    useTrackedEffect: function() {
        return _useTrackedEffect.default;
    },
    useUnmount: function() {
        return _useUnmount.default;
    },
    useUnmountedRef: function() {
        return _useUnmountedRef.default;
    },
    useUpdate: function() {
        return _useUpdate.default;
    },
    useUpdateEffect: function() {
        return _useUpdateEffect.default;
    },
    useUpdateLayoutEffect: function() {
        return _useUpdateLayoutEffect.default;
    },
    useVirtualList: function() {
        return _useVirtualList.default;
    },
    useWebSocket: function() {
        return _useWebSocket.default;
    },
    useWhyDidYouUpdate: function() {
        return _useWhyDidYouUpdate.default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _createUpdateEffect = __mako_require__("node_modules/ahooks/es/createUpdateEffect/index.js");
var _useAntdTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useAntdTable/index.js"));
var _useAsyncEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useAsyncEffect/index.js"));
var _useBoolean = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useBoolean/index.js"));
var _useClickAway = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useClickAway/index.js"));
var _useControllableValue = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useControllableValue/index.js"));
var _useCookieState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useCookieState/index.js"));
var _useCountDown = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useCountDown/index.js"));
var _useCounter = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useCounter/index.js"));
var _useCreation = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useCreation/index.js"));
var _useDebounce = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDebounce/index.js"));
var _useDebounceEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDebounceEffect/index.js"));
var _useDebounceFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDebounceFn/index.js"));
var _useDeepCompareEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDeepCompareEffect/index.js"));
var _useDeepCompareLayoutEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDeepCompareLayoutEffect/index.js"));
var _useDocumentVisibility = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDocumentVisibility/index.js"));
var _useDrag = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDrag/index.js"));
var _useDrop = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDrop/index.js"));
var _useDynamicList = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDynamicList/index.js"));
var _useEventEmitter = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventEmitter/index.js"));
var _useEventListener = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventListener/index.js"));
var _useEventTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventTarget/index.js"));
var _useExternal = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useExternal/index.js"));
var _useFavicon = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useFavicon/index.js"));
var _useFocusWithin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useFocusWithin/index.js"));
var _useFullscreen = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useFullscreen/index.js"));
var _useFusionTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useFusionTable/index.js"));
var _useGetState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useGetState/index.js"));
var _useHistoryTravel = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useHistoryTravel/index.js"));
var _useHover = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useHover/index.js"));
var _useInfiniteScroll = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useInfiniteScroll/index.js"));
var _useInterval = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useInterval/index.js"));
var _useInViewport = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useInViewport/index.js"));
var _useIsomorphicLayoutEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useIsomorphicLayoutEffect/index.js"));
var _useKeyPress = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useKeyPress/index.js"));
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _useLocalStorageState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLocalStorageState/index.js"));
var _useLockFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLockFn/index.js"));
var _useLongPress = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLongPress/index.js"));
var _useMap = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMap/index.js"));
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useMount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMount/index.js"));
var _useMouse = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMouse/index.js"));
var _useNetwork = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useNetwork/index.js"));
var _usePagination = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/usePagination/index.js"));
var _usePrevious = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/usePrevious/index.js"));
var _useRafInterval = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRafInterval/index.js"));
var _useRafState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRafState/index.js"));
var _useRafTimeout = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRafTimeout/index.js"));
var _useReactive = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useReactive/index.js"));
var _useRequest = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/ahooks/es/useRequest/index.js"));
var _useResetState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useResetState/index.js"));
var _useResponsive = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/ahooks/es/useResponsive/index.js"));
var _useSafeState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useSafeState/index.js"));
var _useScroll = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useScroll/index.js"));
var _useSelections = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useSelections/index.js"));
var _useSessionStorageState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useSessionStorageState/index.js"));
var _useSet = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useSet/index.js"));
var _useSetState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useSetState/index.js"));
var _useSize = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useSize/index.js"));
var _useTextSelection = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useTextSelection/index.js"));
var _useThrottle = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useThrottle/index.js"));
var _useThrottleEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useThrottleEffect/index.js"));
var _useThrottleFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useThrottleFn/index.js"));
var _useTimeout = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useTimeout/index.js"));
var _useTitle = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useTitle/index.js"));
var _useToggle = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useToggle/index.js"));
var _useTrackedEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useTrackedEffect/index.js"));
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var _useUnmountedRef = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmountedRef/index.js"));
var _useUpdate = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdate/index.js"));
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
var _useUpdateLayoutEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateLayoutEffect/index.js"));
var _useVirtualList = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useVirtualList/index.js"));
var _useWebSocket = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useWebSocket/index.js"));
var _useWhyDidYouUpdate = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useWhyDidYouUpdate/index.js"));
var _useMutationObserver = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMutationObserver/index.js"));
var _useTheme = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useTheme/index.js"));

},
"node_modules/ahooks/es/useAntdTable/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _usePagination = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/usePagination/index.js"));
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
var useAntdTable = function(service, options) {
    var _a;
    if (options === void 0) options = {};
    var form = options.form, _b = options.defaultType, defaultType = _b === void 0 ? 'simple' : _b, defaultParams = options.defaultParams, _c = options.manual, manual = _c === void 0 ? false : _c, _d = options.refreshDeps, refreshDeps = _d === void 0 ? [] : _d, _e = options.ready, ready = _e === void 0 ? true : _e, rest = (0, _tslib.__rest)(options, [
        "form",
        "defaultType",
        "defaultParams",
        "manual",
        "refreshDeps",
        "ready"
    ]);
    var result = (0, _usePagination.default)(service, (0, _tslib.__assign)((0, _tslib.__assign)({
        ready: ready,
        manual: true
    }, rest), {
        onSuccess: function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            runSuccessRef.current = true;
            (_a = rest.onSuccess) === null || _a === void 0 || _a.call.apply(_a, (0, _tslib.__spreadArray)([
                rest
            ], (0, _tslib.__read)(args), false));
        }
    }));
    var _f = result.params, params = _f === void 0 ? [] : _f, run = result.run;
    var cacheFormTableData = params[2] || {};
    var _g = (0, _tslib.__read)((0, _react.useState)((cacheFormTableData === null || cacheFormTableData === void 0 ? void 0 : cacheFormTableData.type) || defaultType), 2), type = _g[0], setType = _g[1];
    var allFormDataRef = (0, _react.useRef)({});
    var defaultDataSourceRef = (0, _react.useRef)([]);
    var runSuccessRef = (0, _react.useRef)(false);
    var isAntdV4 = !!(form === null || form === void 0 ? void 0 : form.getInternalHooks);
    // get current active field values
    var getActiveFieldValues = function() {
        if (!form) return {};
        // antd 4
        if (isAntdV4) return form.getFieldsValue(null, function() {
            return true;
        });
        // antd 3
        var allFieldsValue = form.getFieldsValue();
        var activeFieldsValue = {};
        Object.keys(allFieldsValue).forEach(function(key) {
            if (form.getFieldInstance ? form.getFieldInstance(key) : true) activeFieldsValue[key] = allFieldsValue[key];
        });
        return activeFieldsValue;
    };
    var validateFields = function() {
        if (!form) return Promise.resolve({});
        var activeFieldsValue = getActiveFieldValues();
        var fields = Object.keys(activeFieldsValue);
        // antd 4
        if (isAntdV4) return form.validateFields(fields);
        // antd 3
        return new Promise(function(resolve, reject) {
            form.validateFields(fields, function(errors, values) {
                if (errors) reject(errors);
                else resolve(values);
            });
        });
    };
    var restoreForm = function() {
        if (!form) return;
        // antd v4
        if (isAntdV4) return form.setFieldsValue(allFormDataRef.current);
        // antd v3
        var activeFieldsValue = {};
        Object.keys(allFormDataRef.current).forEach(function(key) {
            if (form.getFieldInstance ? form.getFieldInstance(key) : true) activeFieldsValue[key] = allFormDataRef.current[key];
        });
        form.setFieldsValue(activeFieldsValue);
    };
    var changeType = function() {
        var activeFieldsValue = getActiveFieldValues();
        allFormDataRef.current = (0, _tslib.__assign)((0, _tslib.__assign)({}, allFormDataRef.current), activeFieldsValue);
        setType(function(t) {
            return t === 'simple' ? 'advance' : 'simple';
        });
    };
    var _submit = function(initPagination) {
        if (!ready) return;
        setTimeout(function() {
            validateFields().then(function(values) {
                if (values === void 0) values = {};
                var pagination = initPagination || (0, _tslib.__assign)((0, _tslib.__assign)({
                    pageSize: options.defaultPageSize || 10
                }, (params === null || params === void 0 ? void 0 : params[0]) || {}), {
                    current: 1
                });
                if (!form) {
                    // @ts-ignore
                    run(pagination);
                    return;
                }
                // record all form data
                allFormDataRef.current = (0, _tslib.__assign)((0, _tslib.__assign)({}, allFormDataRef.current), values);
                // @ts-ignore
                run(pagination, values, {
                    allFormData: allFormDataRef.current,
                    type: type
                });
            }).catch(function(err) {
                return err;
            });
        });
    };
    var reset = function() {
        var _a, _b;
        if (form) form.resetFields();
        _submit((0, _tslib.__assign)((0, _tslib.__assign)({}, (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]) || {}), {
            pageSize: options.defaultPageSize || ((_b = (_a = options.defaultParams) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.pageSize) || 10,
            current: 1
        }));
    };
    var submit = function(e) {
        var _a, _b, _c;
        (_a = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _a === void 0 || _a.call(e);
        _submit(runSuccessRef.current ? undefined : (0, _tslib.__assign)({
            pageSize: options.defaultPageSize || ((_c = (_b = options.defaultParams) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.pageSize) || 10,
            current: 1
        }, (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]) || {}));
    };
    var onTableChange = function(pagination, filters, sorter, extra) {
        var _a = (0, _tslib.__read)(params || []), oldPaginationParams = _a[0], restParams = _a.slice(1);
        run.apply(void 0, (0, _tslib.__spreadArray)([
            (0, _tslib.__assign)((0, _tslib.__assign)({}, oldPaginationParams), {
                current: pagination.current,
                pageSize: pagination.pageSize,
                filters: filters,
                sorter: sorter,
                extra: extra
            })
        ], (0, _tslib.__read)(restParams), false));
    };
    // init
    (0, _react.useEffect)(function() {
        // if has cache, use cached params. ignore manual and ready.
        if (params.length > 0) {
            allFormDataRef.current = (cacheFormTableData === null || cacheFormTableData === void 0 ? void 0 : cacheFormTableData.allFormData) || {};
            restoreForm();
            // @ts-ignore
            run.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(params), false));
            return;
        }
        if (ready) {
            allFormDataRef.current = (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[1]) || {};
            restoreForm();
            if (!manual) _submit(defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]);
        }
    }, []);
    // change search type, restore form data
    (0, _useUpdateEffect.default)(function() {
        if (!ready) return;
        restoreForm();
    }, [
        type
    ]);
    // refresh & ready change on the same time
    var hasAutoRun = (0, _react.useRef)(false);
    hasAutoRun.current = false;
    (0, _useUpdateEffect.default)(function() {
        if (!manual && ready) {
            hasAutoRun.current = true;
            if (form) form.resetFields();
            allFormDataRef.current = (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[1]) || {};
            restoreForm();
            _submit(defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]);
        }
    }, [
        ready
    ]);
    (0, _useUpdateEffect.default)(function() {
        if (hasAutoRun.current) return;
        if (!ready) return;
        if (!manual) {
            hasAutoRun.current = true;
            if (options.refreshDepsAction) options.refreshDepsAction();
            else result.pagination.changeCurrent(1);
        }
    }, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(refreshDeps), false));
    return (0, _tslib.__assign)((0, _tslib.__assign)({}, result), {
        tableProps: {
            dataSource: ((_a = result.data) === null || _a === void 0 ? void 0 : _a.list) || defaultDataSourceRef.current,
            loading: result.loading,
            onChange: (0, _useMemoizedFn.default)(onTableChange),
            pagination: {
                current: result.pagination.current,
                pageSize: result.pagination.pageSize,
                total: result.pagination.total
            }
        },
        search: {
            submit: (0, _useMemoizedFn.default)(submit),
            type: type,
            changeType: (0, _useMemoizedFn.default)(changeType),
            reset: (0, _useMemoizedFn.default)(reset)
        }
    });
};
var _default = useAntdTable;

},
"node_modules/ahooks/es/useAsyncEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
function isAsyncGenerator(val) {
    return (0, _utils.isFunction)(val[Symbol.asyncIterator]);
}
function useAsyncEffect(effect, deps) {
    (0, _react.useEffect)(function() {
        var e = effect();
        var cancelled = false;
        function execute() {
            return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
                var result;
                return (0, _tslib.__generator)(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!isAsyncGenerator(e)) return [
                                3 /*break*/ ,
                                4
                            ];
                            _a.label = 1;
                        case 1:
                            return [
                                4 /*yield*/ ,
                                e.next()
                            ];
                        case 2:
                            result = _a.sent();
                            if (result.done || cancelled) return [
                                3 /*break*/ ,
                                3
                            ];
                            return [
                                3 /*break*/ ,
                                1
                            ];
                        case 3:
                            return [
                                3 /*break*/ ,
                                6
                            ];
                        case 4:
                            return [
                                4 /*yield*/ ,
                                e
                            ];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        }
        execute();
        return function() {
            cancelled = true;
        };
    }, deps);
}
var _default = useAsyncEffect;

},
"node_modules/ahooks/es/useBoolean/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useBoolean;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useToggle = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useToggle/index.js"));
function useBoolean(defaultValue) {
    if (defaultValue === void 0) defaultValue = false;
    var _a = (0, _tslib.__read)((0, _useToggle.default)(!!defaultValue), 2), state = _a[0], _b = _a[1], toggle = _b.toggle, set = _b.set;
    var actions = (0, _react.useMemo)(function() {
        var setTrue = function() {
            return set(true);
        };
        var setFalse = function() {
            return set(false);
        };
        return {
            toggle: toggle,
            set: function(v) {
                return set(!!v);
            },
            setTrue: setTrue,
            setFalse: setFalse
        };
    }, []);
    return [
        state,
        actions
    ];
}

},
"node_modules/ahooks/es/useClickAway/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useClickAway;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _getDocumentOrShadow = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/getDocumentOrShadow.js"));
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
function useClickAway(onClickAway, target, eventName) {
    if (eventName === void 0) eventName = 'click';
    var onClickAwayRef = (0, _useLatest.default)(onClickAway);
    (0, _useEffectWithTarget.default)(function() {
        var handler = function(event) {
            var targets = Array.isArray(target) ? target : [
                target
            ];
            if (targets.some(function(item) {
                var targetElement = (0, _domTarget.getTargetElement)(item);
                return !targetElement || targetElement.contains(event.target);
            })) return;
            onClickAwayRef.current(event);
        };
        var documentOrShadow = (0, _getDocumentOrShadow.default)(target);
        var eventNames = Array.isArray(eventName) ? eventName : [
            eventName
        ];
        eventNames.forEach(function(event) {
            return documentOrShadow.addEventListener(event, handler);
        });
        return function() {
            eventNames.forEach(function(event) {
                return documentOrShadow.removeEventListener(event, handler);
            });
        };
    }, Array.isArray(eventName) ? eventName : [
        eventName
    ], target);
}

},
"node_modules/ahooks/es/useControllableValue/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useUpdate = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdate/index.js"));
function useControllableValue(defaultProps, options) {
    if (options === void 0) options = {};
    var props = defaultProps !== null && defaultProps !== void 0 ? defaultProps : {};
    var defaultValue = options.defaultValue, _a = options.defaultValuePropName, defaultValuePropName = _a === void 0 ? 'defaultValue' : _a, _b = options.valuePropName, valuePropName = _b === void 0 ? 'value' : _b, _c = options.trigger, trigger = _c === void 0 ? 'onChange' : _c;
    var value = props[valuePropName];
    var isControlled = Object.prototype.hasOwnProperty.call(props, valuePropName);
    var initialValue = (0, _react.useMemo)(function() {
        if (isControlled) return value;
        if (Object.prototype.hasOwnProperty.call(props, defaultValuePropName)) return props[defaultValuePropName];
        return defaultValue;
    }, []);
    var stateRef = (0, _react.useRef)(initialValue);
    if (isControlled) stateRef.current = value;
    var update = (0, _useUpdate.default)();
    function setState(v) {
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        var r = (0, _utils.isFunction)(v) ? v(stateRef.current) : v;
        if (!isControlled) {
            stateRef.current = r;
            update();
        }
        if (props[trigger]) props[trigger].apply(props, (0, _tslib.__spreadArray)([
            r
        ], (0, _tslib.__read)(args), false));
    }
    return [
        stateRef.current,
        (0, _useMemoizedFn.default)(setState)
    ];
}
var _default = useControllableValue;

},
"node_modules/ahooks/es/useCookieState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _jscookie = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/js-cookie/dist/js.cookie.mjs"));
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
function useCookieState(cookieKey, options) {
    if (options === void 0) options = {};
    var _a = (0, _tslib.__read)((0, _react.useState)(function() {
        var cookieValue = _jscookie.default.get(cookieKey);
        if ((0, _utils.isString)(cookieValue)) return cookieValue;
        if ((0, _utils.isFunction)(options.defaultValue)) return options.defaultValue();
        return options.defaultValue;
    }), 2), state = _a[0], setState = _a[1];
    var updateState = (0, _useMemoizedFn.default)(function(newValue, newOptions) {
        if (newOptions === void 0) newOptions = {};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _a = (0, _tslib.__assign)((0, _tslib.__assign)({}, options), newOptions), defaultValue = _a.defaultValue, restOptions = (0, _tslib.__rest)(_a, [
            "defaultValue"
        ]);
        var value = (0, _utils.isFunction)(newValue) ? newValue(state) : newValue;
        setState(value);
        if (value === undefined) _jscookie.default.remove(cookieKey);
        else _jscookie.default.set(cookieKey, value, restOptions);
    });
    return [
        state,
        updateState
    ];
}
var _default = useCookieState;

},
"node_modules/ahooks/es/useCountDown/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _dayjs = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dayjs/dayjs.min.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _index = __mako_require__("node_modules/ahooks/es/utils/index.js");
var calcLeft = function(target) {
    if (!target) return 0;
    // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
    var left = (0, _dayjs.default)(target).valueOf() - Date.now();
    return left < 0 ? 0 : left;
};
var parseMs = function(milliseconds) {
    return {
        days: Math.floor(milliseconds / 86400000),
        hours: Math.floor(milliseconds / 3600000) % 24,
        minutes: Math.floor(milliseconds / 60000) % 60,
        seconds: Math.floor(milliseconds / 1000) % 60,
        milliseconds: Math.floor(milliseconds) % 1000
    };
};
var useCountdown = function(options) {
    if (options === void 0) options = {};
    var _a = options || {}, leftTime = _a.leftTime, targetDate = _a.targetDate, _b = _a.interval, interval = _b === void 0 ? 1000 : _b, onEnd = _a.onEnd;
    var memoLeftTime = (0, _react.useMemo)(function() {
        return (0, _index.isNumber)(leftTime) && leftTime > 0 ? Date.now() + leftTime : undefined;
    }, [
        leftTime
    ]);
    var target = 'leftTime' in options ? memoLeftTime : targetDate;
    var _c = (0, _tslib.__read)((0, _react.useState)(function() {
        return calcLeft(target);
    }), 2), timeLeft = _c[0], setTimeLeft = _c[1];
    var onEndRef = (0, _useLatest.default)(onEnd);
    (0, _react.useEffect)(function() {
        if (!target) {
            // for stop
            setTimeLeft(0);
            return;
        }
        // 立即执行一次
        setTimeLeft(calcLeft(target));
        var timer = setInterval(function() {
            var _a;
            var targetLeft = calcLeft(target);
            setTimeLeft(targetLeft);
            if (targetLeft === 0) {
                clearInterval(timer);
                (_a = onEndRef.current) === null || _a === void 0 || _a.call(onEndRef);
            }
        }, interval);
        return function() {
            return clearInterval(timer);
        };
    }, [
        target,
        interval
    ]);
    var formattedRes = (0, _react.useMemo)(function() {
        return parseMs(timeLeft);
    }, [
        timeLeft
    ]);
    return [
        timeLeft,
        formattedRes
    ];
};
var _default = useCountdown;

},
"node_modules/ahooks/es/useCounter/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
function getTargetValue(val, options) {
    if (options === void 0) options = {};
    var min = options.min, max = options.max;
    var target = val;
    if ((0, _utils.isNumber)(max)) target = Math.min(max, target);
    if ((0, _utils.isNumber)(min)) target = Math.max(min, target);
    return target;
}
function useCounter(initialValue, options) {
    if (initialValue === void 0) initialValue = 0;
    if (options === void 0) options = {};
    var min = options.min, max = options.max;
    var _a = (0, _tslib.__read)((0, _react.useState)(function() {
        return getTargetValue(initialValue, {
            min: min,
            max: max
        });
    }), 2), current = _a[0], setCurrent = _a[1];
    var setValue = function(value) {
        setCurrent(function(c) {
            var target = (0, _utils.isNumber)(value) ? value : value(c);
            return getTargetValue(target, {
                max: max,
                min: min
            });
        });
    };
    var inc = function(delta) {
        if (delta === void 0) delta = 1;
        setValue(function(c) {
            return c + delta;
        });
    };
    var dec = function(delta) {
        if (delta === void 0) delta = 1;
        setValue(function(c) {
            return c - delta;
        });
    };
    var set = function(value) {
        setValue(value);
    };
    var reset = function() {
        setValue(initialValue);
    };
    return [
        current,
        {
            inc: (0, _useMemoizedFn.default)(inc),
            dec: (0, _useMemoizedFn.default)(dec),
            set: (0, _useMemoizedFn.default)(set),
            reset: (0, _useMemoizedFn.default)(reset)
        }
    ];
}
var _default = useCounter;

},
"node_modules/ahooks/es/useCreation/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _depsAreSame = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/depsAreSame.js"));
var useCreation = function(factory, deps) {
    var current = (0, _react.useRef)({
        deps: deps,
        obj: undefined,
        initialized: false
    }).current;
    if (current.initialized === false || !(0, _depsAreSame.default)(current.deps, deps)) {
        current.deps = deps;
        current.obj = factory();
        current.initialized = true;
    }
    return current.obj;
};
var _default = useCreation;

},
"node_modules/ahooks/es/useDebounce/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useDebounceFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDebounceFn/index.js"));
function useDebounce(value, options) {
    var _a = (0, _tslib.__read)((0, _react.useState)(value), 2), debounced = _a[0], setDebounced = _a[1];
    var run = (0, _useDebounceFn.default)(function() {
        setDebounced(value);
    }, options).run;
    (0, _react.useEffect)(function() {
        run();
    }, [
        value
    ]);
    return debounced;
}
var _default = useDebounce;

},
"node_modules/ahooks/es/useDebounceEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useDebounceFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useDebounceFn/index.js"));
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
function useDebounceEffect(effect, deps, options) {
    var _a = (0, _tslib.__read)((0, _react.useState)({}), 2), flag = _a[0], setFlag = _a[1];
    var run = (0, _useDebounceFn.default)(function() {
        setFlag({});
    }, options).run;
    (0, _react.useEffect)(function() {
        return run();
    }, deps);
    (0, _useUpdateEffect.default)(effect, [
        flag
    ]);
}
var _default = useDebounceEffect;

},
"node_modules/ahooks/es/useDebounceFn/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _lodashpolyfill = __mako_require__("node_modules/ahooks/es/utils/lodash-polyfill.js");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _isDev = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isDev.js"));
function useDebounceFn(fn, options) {
    var _a;
    if (_isDev.default) {
        if (!(0, _utils.isFunction)(fn)) console.error("useDebounceFn expected parameter is a function, got ".concat(typeof fn));
    }
    var fnRef = (0, _useLatest.default)(fn);
    var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
    var debounced = (0, _react.useMemo)(function() {
        return (0, _lodashpolyfill.debounce)(function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return fnRef.current.apply(fnRef, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args), false));
        }, wait, options);
    }, []);
    (0, _useUnmount.default)(function() {
        debounced.cancel();
    });
    return {
        run: debounced,
        cancel: debounced.cancel,
        flush: debounced.flush
    };
}
var _default = useDebounceFn;

},
"node_modules/ahooks/es/useDeepCompareEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var _createDeepCompareEffect = __mako_require__("node_modules/ahooks/es/createDeepCompareEffect/index.js");
var _default = (0, _createDeepCompareEffect.createDeepCompareEffect)(_react.useEffect);

},
"node_modules/ahooks/es/useDeepCompareLayoutEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var _createDeepCompareEffect = __mako_require__("node_modules/ahooks/es/createDeepCompareEffect/index.js");
var _default = (0, _createDeepCompareEffect.createDeepCompareEffect)(_react.useLayoutEffect);

},
"node_modules/ahooks/es/useDocumentVisibility/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useEventListener = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventListener/index.js"));
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var getVisibility = function() {
    if (!_isBrowser.default) return 'visible';
    return document.visibilityState;
};
function useDocumentVisibility() {
    var _a = (0, _tslib.__read)((0, _react.useState)(getVisibility), 2), documentVisibility = _a[0], setDocumentVisibility = _a[1];
    (0, _useEventListener.default)('visibilitychange', function() {
        setDocumentVisibility(getVisibility());
    }, {
        target: function() {
            return document;
        }
    });
    return documentVisibility;
}
var _default = useDocumentVisibility;

},
"node_modules/ahooks/es/useDrag/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _useMount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMount/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
var useDrag = function(data, target, options) {
    if (options === void 0) options = {};
    var optionsRef = (0, _useLatest.default)(options);
    var dataRef = (0, _useLatest.default)(data);
    var imageElementRef = (0, _react.useRef)(undefined);
    var dragImage = optionsRef.current.dragImage;
    (0, _useMount.default)(function() {
        if (dragImage === null || dragImage === void 0 ? void 0 : dragImage.image) {
            var image = dragImage.image;
            if ((0, _utils.isString)(image)) {
                var imageElement = new Image();
                imageElement.src = image;
                imageElementRef.current = imageElement;
            } else imageElementRef.current = image;
        }
    });
    (0, _useEffectWithTarget.default)(function() {
        var targetElement = (0, _domTarget.getTargetElement)(target);
        if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) return;
        var onDragStart = function(event) {
            var _a, _b;
            (_b = (_a = optionsRef.current).onDragStart) === null || _b === void 0 || _b.call(_a, event);
            event.dataTransfer.setData('custom', JSON.stringify(dataRef.current));
            if ((dragImage === null || dragImage === void 0 ? void 0 : dragImage.image) && imageElementRef.current) {
                var _c = dragImage.offsetX, offsetX = _c === void 0 ? 0 : _c, _d = dragImage.offsetY, offsetY = _d === void 0 ? 0 : _d;
                event.dataTransfer.setDragImage(imageElementRef.current, offsetX, offsetY);
            }
        };
        var onDragEnd = function(event) {
            var _a, _b;
            (_b = (_a = optionsRef.current).onDragEnd) === null || _b === void 0 || _b.call(_a, event);
        };
        targetElement.setAttribute('draggable', 'true');
        targetElement.addEventListener('dragstart', onDragStart);
        targetElement.addEventListener('dragend', onDragEnd);
        return function() {
            targetElement.removeEventListener('dragstart', onDragStart);
            targetElement.removeEventListener('dragend', onDragEnd);
        };
    }, [], target);
};
var _default = useDrag;

},
"node_modules/ahooks/es/useDrop/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
var _react = __mako_require__("node_modules/react/index.js");
var useDrop = function(target, options) {
    if (options === void 0) options = {};
    var optionsRef = (0, _useLatest.default)(options);
    // https://stackoverflow.com/a/26459269
    var dragEnterTarget = (0, _react.useRef)(undefined);
    (0, _useEffectWithTarget.default)(function() {
        var targetElement = (0, _domTarget.getTargetElement)(target);
        if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) return;
        var onData = function(dataTransfer, event) {
            var uri = dataTransfer.getData('text/uri-list');
            var dom = dataTransfer.getData('custom');
            if (dom && optionsRef.current.onDom) {
                var data = dom;
                try {
                    data = JSON.parse(dom);
                } catch (_a) {
                    data = dom;
                }
                optionsRef.current.onDom(data, event);
                return;
            }
            if (uri && optionsRef.current.onUri) {
                optionsRef.current.onUri(uri, event);
                return;
            }
            if (dataTransfer.files && dataTransfer.files.length && optionsRef.current.onFiles) {
                optionsRef.current.onFiles(Array.from(dataTransfer.files), event);
                return;
            }
            if (dataTransfer.items && dataTransfer.items.length && optionsRef.current.onText) dataTransfer.items[0].getAsString(function(text) {
                optionsRef.current.onText(text, event);
            });
        };
        var onDragEnter = function(event) {
            var _a, _b;
            event.preventDefault();
            event.stopPropagation();
            dragEnterTarget.current = event.target;
            (_b = (_a = optionsRef.current).onDragEnter) === null || _b === void 0 || _b.call(_a, event);
        };
        var onDragOver = function(event) {
            var _a, _b;
            event.preventDefault();
            (_b = (_a = optionsRef.current).onDragOver) === null || _b === void 0 || _b.call(_a, event);
        };
        var onDragLeave = function(event) {
            var _a, _b;
            if (event.target === dragEnterTarget.current) (_b = (_a = optionsRef.current).onDragLeave) === null || _b === void 0 || _b.call(_a, event);
        };
        var onDrop = function(event) {
            var _a, _b;
            event.preventDefault();
            onData(event.dataTransfer, event);
            (_b = (_a = optionsRef.current).onDrop) === null || _b === void 0 || _b.call(_a, event);
        };
        var onPaste = function(event) {
            var _a, _b;
            onData(event.clipboardData, event);
            (_b = (_a = optionsRef.current).onPaste) === null || _b === void 0 || _b.call(_a, event);
        };
        targetElement.addEventListener('dragenter', onDragEnter);
        targetElement.addEventListener('dragover', onDragOver);
        targetElement.addEventListener('dragleave', onDragLeave);
        targetElement.addEventListener('drop', onDrop);
        targetElement.addEventListener('paste', onPaste);
        return function() {
            targetElement.removeEventListener('dragenter', onDragEnter);
            targetElement.removeEventListener('dragover', onDragOver);
            targetElement.removeEventListener('dragleave', onDragLeave);
            targetElement.removeEventListener('drop', onDrop);
            targetElement.removeEventListener('paste', onPaste);
        };
    }, [], target);
};
var _default = useDrop;

},
"node_modules/ahooks/es/useDynamicList/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _isDev = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isDev.js"));
var useDynamicList = function(initialList) {
    if (initialList === void 0) initialList = [];
    var counterRef = (0, _react.useRef)(-1);
    var keyList = (0, _react.useRef)([]);
    var setKey = (0, _react.useCallback)(function(index) {
        counterRef.current += 1;
        keyList.current.splice(index, 0, counterRef.current);
    }, []);
    var _a = (0, _tslib.__read)((0, _react.useState)(function() {
        initialList.forEach(function(_, index) {
            setKey(index);
        });
        return initialList;
    }), 2), list = _a[0], setList = _a[1];
    var resetList = (0, _react.useCallback)(function(newList) {
        keyList.current = [];
        setList(function() {
            newList.forEach(function(_, index) {
                setKey(index);
            });
            return newList;
        });
    }, []);
    var insert = (0, _react.useCallback)(function(index, item) {
        setList(function(l) {
            var temp = (0, _tslib.__spreadArray)([], (0, _tslib.__read)(l), false);
            temp.splice(index, 0, item);
            setKey(index);
            return temp;
        });
    }, []);
    var getKey = (0, _react.useCallback)(function(index) {
        return keyList.current[index];
    }, []);
    var getIndex = (0, _react.useCallback)(function(key) {
        return keyList.current.findIndex(function(ele) {
            return ele === key;
        });
    }, []);
    var merge = (0, _react.useCallback)(function(index, items) {
        setList(function(l) {
            var temp = (0, _tslib.__spreadArray)([], (0, _tslib.__read)(l), false);
            items.forEach(function(_, i) {
                setKey(index + i);
            });
            temp.splice.apply(temp, (0, _tslib.__spreadArray)([
                index,
                0
            ], (0, _tslib.__read)(items), false));
            return temp;
        });
    }, []);
    var replace = (0, _react.useCallback)(function(index, item) {
        setList(function(l) {
            var temp = (0, _tslib.__spreadArray)([], (0, _tslib.__read)(l), false);
            temp[index] = item;
            return temp;
        });
    }, []);
    var remove = (0, _react.useCallback)(function(index) {
        setList(function(l) {
            var temp = (0, _tslib.__spreadArray)([], (0, _tslib.__read)(l), false);
            temp.splice(index, 1);
            // remove keys if necessary
            try {
                keyList.current.splice(index, 1);
            } catch (e) {
                console.error(e);
            }
            return temp;
        });
    }, []);
    var batchRemove = (0, _react.useCallback)(function(indexes) {
        if (!Array.isArray(indexes)) {
            if (_isDev.default) console.error("`indexes` parameter of `batchRemove` function expected to be an array, but got \"".concat(typeof indexes, "\"."));
            return;
        }
        if (!indexes.length) return;
        setList(function(prevList) {
            var newKeyList = [];
            var newList = prevList.filter(function(item, index) {
                var shouldKeep = !indexes.includes(index);
                if (shouldKeep) newKeyList.push(getKey(index));
                return shouldKeep;
            });
            keyList.current = newKeyList;
            return newList;
        });
    }, []);
    var move = (0, _react.useCallback)(function(oldIndex, newIndex) {
        if (oldIndex === newIndex) return;
        setList(function(l) {
            var newList = (0, _tslib.__spreadArray)([], (0, _tslib.__read)(l), false);
            var temp = newList.filter(function(_, index) {
                return index !== oldIndex;
            });
            temp.splice(newIndex, 0, newList[oldIndex]);
            // move keys if necessary
            try {
                var keyTemp = keyList.current.filter(function(_, index) {
                    return index !== oldIndex;
                });
                keyTemp.splice(newIndex, 0, keyList.current[oldIndex]);
                keyList.current = keyTemp;
            } catch (e) {
                console.error(e);
            }
            return temp;
        });
    }, []);
    var push = (0, _react.useCallback)(function(item) {
        setList(function(l) {
            setKey(l.length);
            return l.concat([
                item
            ]);
        });
    }, []);
    var pop = (0, _react.useCallback)(function() {
        // remove keys if necessary
        try {
            keyList.current = keyList.current.slice(0, keyList.current.length - 1);
        } catch (e) {
            console.error(e);
        }
        setList(function(l) {
            return l.slice(0, l.length - 1);
        });
    }, []);
    var unshift = (0, _react.useCallback)(function(item) {
        setList(function(l) {
            setKey(0);
            return [
                item
            ].concat(l);
        });
    }, []);
    var shift = (0, _react.useCallback)(function() {
        // remove keys if necessary
        try {
            keyList.current = keyList.current.slice(1, keyList.current.length);
        } catch (e) {
            console.error(e);
        }
        setList(function(l) {
            return l.slice(1, l.length);
        });
    }, []);
    var sortList = (0, _react.useCallback)(function(result) {
        return result.map(function(item, index) {
            return {
                key: index,
                item: item
            };
        }) // add index into obj
        .sort(function(a, b) {
            return getIndex(a.key) - getIndex(b.key);
        }) // sort based on the index of table
        .filter(function(item) {
            return !!item.item;
        }) // remove undefined(s)
        .map(function(item) {
            return item.item;
        });
    }, []);
    return {
        list: list,
        insert: insert,
        merge: merge,
        replace: replace,
        remove: remove,
        batchRemove: batchRemove,
        getKey: getKey,
        getIndex: getIndex,
        move: move,
        push: push,
        pop: pop,
        unshift: unshift,
        shift: shift,
        sortList: sortList,
        resetList: resetList
    };
};
var _default = useDynamicList;

},
"node_modules/ahooks/es/useEventEmitter/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    EventEmitter: function() {
        return EventEmitter;
    },
    default: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var EventEmitter = function() {
    function EventEmitter() {
        var _this = this;
        this.subscriptions = new Set();
        this.emit = function(val) {
            var e_1, _a;
            try {
                for(var _b = (0, _tslib.__values)(_this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()){
                    var subscription = _c.value;
                    subscription(val);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        };
        this.useSubscription = function(callback) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            var callbackRef = (0, _react.useRef)(undefined);
            callbackRef.current = callback;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            (0, _react.useEffect)(function() {
                function subscription(val) {
                    if (callbackRef.current) callbackRef.current(val);
                }
                _this.subscriptions.add(subscription);
                return function() {
                    _this.subscriptions.delete(subscription);
                };
            }, []);
        };
    }
    return EventEmitter;
}();
function useEventEmitter() {
    var ref = (0, _react.useRef)(undefined);
    if (!ref.current) ref.current = new EventEmitter();
    return ref.current;
}
var _default = useEventEmitter;

},
"node_modules/ahooks/es/useEventListener/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
function useEventListener(eventName, handler, options) {
    if (options === void 0) options = {};
    var _a = options.enable, enable = _a === void 0 ? true : _a;
    var handlerRef = (0, _useLatest.default)(handler);
    (0, _useEffectWithTarget.default)(function() {
        if (!enable) return;
        var targetElement = (0, _domTarget.getTargetElement)(options.target, window);
        if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) return;
        var eventListener = function(event) {
            return handlerRef.current(event);
        };
        var eventNameArray = Array.isArray(eventName) ? eventName : [
            eventName
        ];
        eventNameArray.forEach(function(event) {
            targetElement.addEventListener(event, eventListener, {
                capture: options.capture,
                once: options.once,
                passive: options.passive
            });
        });
        return function() {
            eventNameArray.forEach(function(event) {
                targetElement.removeEventListener(event, eventListener, {
                    capture: options.capture
                });
            });
        };
    }, [
        eventName,
        options.capture,
        options.once,
        options.passive,
        enable
    ], options.target);
}
var _default = useEventListener;

},
"node_modules/ahooks/es/useEventTarget/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
function useEventTarget(options) {
    var _a = options || {}, initialValue = _a.initialValue, transformer = _a.transformer;
    var _b = (0, _tslib.__read)((0, _react.useState)(initialValue), 2), value = _b[0], setValue = _b[1];
    var transformerRef = (0, _useLatest.default)(transformer);
    var reset = (0, _react.useCallback)(function() {
        return setValue(initialValue);
    }, []);
    var onChange = (0, _react.useCallback)(function(e) {
        var _value = e.target.value;
        if ((0, _utils.isFunction)(transformerRef.current)) return setValue(transformerRef.current(_value));
        // no transformer => U and T should be the same
        return setValue(_value);
    }, []);
    return [
        value,
        {
            onChange: onChange,
            reset: reset
        }
    ];
}
var _default = useEventTarget;

},
"node_modules/ahooks/es/useExternal/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
// {[path]: count}
// remove external when no used
var EXTERNAL_USED_COUNT = {};
var loadScript = function(path, props) {
    if (props === void 0) props = {};
    var script = document.querySelector("script[src=\"".concat(path, "\"]"));
    if (!script) {
        var newScript_1 = document.createElement('script');
        newScript_1.src = path;
        Object.keys(props).forEach(function(key) {
            newScript_1[key] = props[key];
        });
        newScript_1.setAttribute('data-status', 'loading');
        document.body.appendChild(newScript_1);
        return {
            ref: newScript_1,
            status: 'loading'
        };
    }
    return {
        ref: script,
        status: script.getAttribute('data-status') || 'ready'
    };
};
var loadCss = function(path, props) {
    if (props === void 0) props = {};
    var css = document.querySelector("link[href=\"".concat(path, "\"]"));
    if (!css) {
        var newCss_1 = document.createElement('link');
        newCss_1.rel = 'stylesheet';
        newCss_1.href = path;
        Object.keys(props).forEach(function(key) {
            newCss_1[key] = props[key];
        });
        // IE9+
        var isLegacyIECss = 'hideFocus' in newCss_1;
        // use preload in IE Edge (to detect load errors)
        if (isLegacyIECss && newCss_1.relList) {
            newCss_1.rel = 'preload';
            newCss_1.as = 'style';
        }
        newCss_1.setAttribute('data-status', 'loading');
        document.head.appendChild(newCss_1);
        return {
            ref: newCss_1,
            status: 'loading'
        };
    }
    return {
        ref: css,
        status: css.getAttribute('data-status') || 'ready'
    };
};
var useExternal = function(path, options) {
    var _a = (0, _tslib.__read)((0, _react.useState)(path ? 'loading' : 'unset'), 2), status = _a[0], setStatus = _a[1];
    var ref = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(function() {
        if (!path) {
            setStatus('unset');
            return;
        }
        var pathname = path.replace(/[|#].*$/, '');
        if ((options === null || options === void 0 ? void 0 : options.type) === 'css' || !(options === null || options === void 0 ? void 0 : options.type) && /(^css!|\.css$)/.test(pathname)) {
            var result = loadCss(path, options === null || options === void 0 ? void 0 : options.css);
            ref.current = result.ref;
            setStatus(result.status);
        } else if ((options === null || options === void 0 ? void 0 : options.type) === 'js' || !(options === null || options === void 0 ? void 0 : options.type) && /(^js!|\.js$)/.test(pathname)) {
            var result = loadScript(path, options === null || options === void 0 ? void 0 : options.js);
            ref.current = result.ref;
            setStatus(result.status);
        } else // do nothing
        console.error("Cannot infer the type of external resource, and please provide a type ('js' | 'css'). Refer to the https://ahooks.js.org/hooks/dom/use-external/#options");
        if (!ref.current) return;
        if (EXTERNAL_USED_COUNT[path] === undefined) EXTERNAL_USED_COUNT[path] = 1;
        else EXTERNAL_USED_COUNT[path] += 1;
        var handler = function(event) {
            var _a;
            var targetStatus = event.type === 'load' ? 'ready' : 'error';
            (_a = ref.current) === null || _a === void 0 || _a.setAttribute('data-status', targetStatus);
            setStatus(targetStatus);
        };
        ref.current.addEventListener('load', handler);
        ref.current.addEventListener('error', handler);
        return function() {
            var _a, _b, _c;
            (_a = ref.current) === null || _a === void 0 || _a.removeEventListener('load', handler);
            (_b = ref.current) === null || _b === void 0 || _b.removeEventListener('error', handler);
            EXTERNAL_USED_COUNT[path] -= 1;
            if (EXTERNAL_USED_COUNT[path] === 0 && !(options === null || options === void 0 ? void 0 : options.keepWhenUnused)) (_c = ref.current) === null || _c === void 0 || _c.remove();
            ref.current = undefined;
        };
    }, [
        path
    ]);
    return status;
};
var _default = useExternal;

},
"node_modules/ahooks/es/useFavicon/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var ImgTypeMap = {
    SVG: 'image/svg+xml',
    ICO: 'image/x-icon',
    GIF: 'image/gif',
    PNG: 'image/png'
};
var useFavicon = function(href) {
    (0, _react.useEffect)(function() {
        if (!href) return;
        var cutUrl = href.split('.');
        var imgSuffix = cutUrl[cutUrl.length - 1].toLocaleUpperCase();
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = ImgTypeMap[imgSuffix];
        link.href = href;
        link.rel = 'shortcut icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [
        href
    ]);
};
var _default = useFavicon;

},
"node_modules/ahooks/es/useFocusWithin/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useFocusWithin;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useEventListener = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventListener/index.js"));
function useFocusWithin(target, options) {
    var _a = (0, _tslib.__read)((0, _react.useState)(false), 2), isFocusWithin = _a[0], setIsFocusWithin = _a[1];
    var _b = options || {}, onFocus = _b.onFocus, onBlur = _b.onBlur, onChange = _b.onChange;
    (0, _useEventListener.default)('focusin', function(e) {
        if (!isFocusWithin) {
            onFocus === null || onFocus === void 0 || onFocus(e);
            onChange === null || onChange === void 0 || onChange(true);
            setIsFocusWithin(true);
        }
    }, {
        target: target
    });
    (0, _useEventListener.default)('focusout', function(e) {
        var _a, _b;
        if (isFocusWithin && !((_b = (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, e.relatedTarget))) {
            onBlur === null || onBlur === void 0 || onBlur(e);
            onChange === null || onChange === void 0 || onChange(false);
            setIsFocusWithin(false);
        }
    }, {
        target: target
    });
    return isFocusWithin;
}

},
"node_modules/ahooks/es/useFullscreen/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _screenfull = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/screenfull/dist/screenfull.js"));
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var useFullscreen = function(target, options) {
    var _a = options || {}, onExit = _a.onExit, onEnter = _a.onEnter, _b = _a.pageFullscreen, pageFullscreen = _b === void 0 ? false : _b;
    var _c = (0, _utils.isBoolean)(pageFullscreen) || !pageFullscreen ? {} : pageFullscreen, _d = _c.className, className = _d === void 0 ? 'ahooks-page-fullscreen' : _d, _e = _c.zIndex, zIndex = _e === void 0 ? 999999 : _e;
    var onExitRef = (0, _useLatest.default)(onExit);
    var onEnterRef = (0, _useLatest.default)(onEnter);
    // The state of full screen may be changed by other scripts/components,
    // so the initial value needs to be computed dynamically.
    var _f = (0, _tslib.__read)((0, _react.useState)(getIsFullscreen), 2), state = _f[0], setState = _f[1];
    var stateRef = (0, _react.useRef)(getIsFullscreen());
    function getIsFullscreen() {
        return _screenfull.default.isEnabled && !!_screenfull.default.element && _screenfull.default.element === (0, _domTarget.getTargetElement)(target);
    }
    var invokeCallback = function(fullscreen) {
        var _a, _b;
        if (fullscreen) (_a = onEnterRef.current) === null || _a === void 0 || _a.call(onEnterRef);
        else (_b = onExitRef.current) === null || _b === void 0 || _b.call(onExitRef);
    };
    var updateFullscreenState = function(fullscreen) {
        // Prevent repeated calls when the state is not changed.
        if (stateRef.current !== fullscreen) {
            invokeCallback(fullscreen);
            setState(fullscreen);
            stateRef.current = fullscreen;
        }
    };
    var onScreenfullChange = function() {
        var fullscreen = getIsFullscreen();
        updateFullscreenState(fullscreen);
    };
    var togglePageFullscreen = function(fullscreen) {
        var el = (0, _domTarget.getTargetElement)(target);
        if (!el) return;
        var styleElem = document.getElementById(className);
        if (fullscreen) {
            el.classList.add(className);
            if (!styleElem) {
                styleElem = document.createElement('style');
                styleElem.setAttribute('id', className);
                styleElem.textContent = "\n          .".concat(className, " {\n            position: fixed; left: 0; top: 0; right: 0; bottom: 0;\n            width: 100% !important; height: 100% !important;\n            z-index: ").concat(zIndex, ";\n          }");
                el.appendChild(styleElem);
            }
        } else {
            el.classList.remove(className);
            if (styleElem) styleElem.remove();
        }
        updateFullscreenState(fullscreen);
    };
    var enterFullscreen = function() {
        var el = (0, _domTarget.getTargetElement)(target);
        if (!el) return;
        if (pageFullscreen) {
            togglePageFullscreen(true);
            return;
        }
        if (_screenfull.default.isEnabled) try {
            _screenfull.default.request(el);
        } catch (error) {
            console.error(error);
        }
    };
    var exitFullscreen = function() {
        var el = (0, _domTarget.getTargetElement)(target);
        if (!el) return;
        if (pageFullscreen) {
            togglePageFullscreen(false);
            return;
        }
        if (_screenfull.default.isEnabled && _screenfull.default.element === el) _screenfull.default.exit();
    };
    var toggleFullscreen = function() {
        if (state) exitFullscreen();
        else enterFullscreen();
    };
    (0, _react.useEffect)(function() {
        if (!_screenfull.default.isEnabled || pageFullscreen) return;
        _screenfull.default.on('change', onScreenfullChange);
        return function() {
            _screenfull.default.off('change', onScreenfullChange);
        };
    }, []);
    return [
        state,
        {
            enterFullscreen: (0, _useMemoizedFn.default)(enterFullscreen),
            exitFullscreen: (0, _useMemoizedFn.default)(exitFullscreen),
            toggleFullscreen: (0, _useMemoizedFn.default)(toggleFullscreen),
            isEnabled: _screenfull.default.isEnabled
        }
    ];
};
var _default = useFullscreen;

},
"node_modules/ahooks/es/useFusionTable/fusionAdapter.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    fieldAdapter: function() {
        return fieldAdapter;
    },
    resultAdapter: function() {
        return resultAdapter;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var fieldAdapter = function(field) {
    return {
        getFieldInstance: function(name) {
            return field.getNames().includes(name);
        },
        setFieldsValue: field.setValues,
        getFieldsValue: field.getValues,
        resetFields: field.resetToDefault,
        validateFields: function(fields, callback) {
            field.validate(fields, callback);
        }
    };
};
var resultAdapter = function(result) {
    var tableProps = {
        dataSource: result.tableProps.dataSource,
        loading: result.tableProps.loading,
        onSort: function(dataIndex, order) {
            var _a;
            result.tableProps.onChange({
                current: result.pagination.current,
                pageSize: result.pagination.pageSize
            }, (_a = result.params[0]) === null || _a === void 0 ? void 0 : _a.filters, {
                field: dataIndex,
                order: order
            });
        },
        onFilter: function(filterParams) {
            var _a;
            result.tableProps.onChange({
                current: result.pagination.current,
                pageSize: result.pagination.pageSize
            }, filterParams, (_a = result.params[0]) === null || _a === void 0 ? void 0 : _a.sorter);
        }
    };
    var paginationProps = {
        onChange: result.pagination.changeCurrent,
        onPageSizeChange: result.pagination.changePageSize,
        current: result.pagination.current,
        pageSize: result.pagination.pageSize,
        total: result.pagination.total
    };
    return (0, _tslib.__assign)((0, _tslib.__assign)({}, result), {
        tableProps: tableProps,
        paginationProps: paginationProps
    });
};

},
"node_modules/ahooks/es/useFusionTable/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _useAntdTable = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useAntdTable/index.js"));
var _fusionAdapter = __mako_require__("node_modules/ahooks/es/useFusionTable/fusionAdapter.js");
var useFusionTable = function(service, options) {
    if (options === void 0) options = {};
    var ret = (0, _useAntdTable.default)(service, (0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
        form: options.field ? (0, _fusionAdapter.fieldAdapter)(options.field) : undefined
    }));
    return (0, _fusionAdapter.resultAdapter)(ret);
};
var _default = useFusionTable;

},
"node_modules/ahooks/es/useGetState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
function useGetState(initialState) {
    var _a = (0, _tslib.__read)((0, _react.useState)(initialState), 2), state = _a[0], setState = _a[1];
    var stateRef = (0, _useLatest.default)(state);
    var getState = (0, _react.useCallback)(function() {
        return stateRef.current;
    }, []);
    return [
        state,
        setState,
        getState
    ];
}
var _default = useGetState;

},
"node_modules/ahooks/es/useHistoryTravel/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useHistoryTravel;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var dumpIndex = function(step, arr) {
    var index = step > 0 ? step - 1 // move forward
     : arr.length + step; // move backward
    if (index >= arr.length - 1) index = arr.length - 1;
    if (index < 0) index = 0;
    return index;
};
var split = function(step, targetArr) {
    var index = dumpIndex(step, targetArr);
    return {
        _current: targetArr[index],
        _before: targetArr.slice(0, index),
        _after: targetArr.slice(index + 1)
    };
};
function useHistoryTravel(initialValue, maxLength) {
    if (maxLength === void 0) maxLength = 0;
    var _a = (0, _tslib.__read)((0, _react.useState)({
        present: initialValue,
        past: [],
        future: []
    }), 2), history = _a[0], setHistory = _a[1];
    var present = history.present, past = history.past, future = history.future;
    var initialValueRef = (0, _react.useRef)(initialValue);
    var reset = function() {
        var params = [];
        for(var _i = 0; _i < arguments.length; _i++)params[_i] = arguments[_i];
        var _initial = params.length > 0 ? params[0] : initialValueRef.current;
        initialValueRef.current = _initial;
        setHistory({
            present: _initial,
            future: [],
            past: []
        });
    };
    var updateValue = function(val) {
        var _past = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(past), false), [
            present
        ], false);
        var maxLengthNum = (0, _utils.isNumber)(maxLength) ? maxLength : Number(maxLength);
        // maximum number of records exceeded
        if (maxLengthNum > 0 && _past.length > maxLengthNum) //delete first
        _past.splice(0, 1);
        setHistory({
            present: val,
            future: [],
            past: _past
        });
    };
    var _forward = function(step) {
        if (step === void 0) step = 1;
        if (future.length === 0) return;
        var _a = split(step, future), _before = _a._before, _current = _a._current, _after = _a._after;
        setHistory({
            past: (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(past), false), [
                present
            ], false), (0, _tslib.__read)(_before), false),
            present: _current,
            future: _after
        });
    };
    var _backward = function(step) {
        if (step === void 0) step = -1;
        if (past.length === 0) return;
        var _a = split(step, past), _before = _a._before, _current = _a._current, _after = _a._after;
        setHistory({
            past: _before,
            present: _current,
            future: (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(_after), false), [
                present
            ], false), (0, _tslib.__read)(future), false)
        });
    };
    var go = function(step) {
        var stepNum = (0, _utils.isNumber)(step) ? step : Number(step);
        if (stepNum === 0) return;
        if (stepNum > 0) return _forward(stepNum);
        _backward(stepNum);
    };
    return {
        value: present,
        backLength: past.length,
        forwardLength: future.length,
        setValue: (0, _useMemoizedFn.default)(updateValue),
        go: (0, _useMemoizedFn.default)(go),
        back: (0, _useMemoizedFn.default)(function() {
            go(-1);
        }),
        forward: (0, _useMemoizedFn.default)(function() {
            go(1);
        }),
        reset: (0, _useMemoizedFn.default)(reset)
    };
}

},
"node_modules/ahooks/es/useHover/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _useBoolean = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useBoolean/index.js"));
var _useEventListener = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventListener/index.js"));
var _default = function(target, options) {
    var _a = options || {}, onEnter = _a.onEnter, onLeave = _a.onLeave, onChange = _a.onChange;
    var _b = (0, _tslib.__read)((0, _useBoolean.default)(false), 2), state = _b[0], _c = _b[1], setTrue = _c.setTrue, setFalse = _c.setFalse;
    (0, _useEventListener.default)('mouseenter', function() {
        onEnter === null || onEnter === void 0 || onEnter();
        setTrue();
        onChange === null || onChange === void 0 || onChange(true);
    }, {
        target: target
    });
    (0, _useEventListener.default)('mouseleave', function() {
        onLeave === null || onLeave === void 0 || onLeave();
        setFalse();
        onChange === null || onChange === void 0 || onChange(false);
    }, {
        target: target
    });
    return state;
};

},
"node_modules/ahooks/es/useInViewport/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
__mako_require__("node_modules/intersection-observer/intersection-observer.js");
var _react = __mako_require__("node_modules/react/index.js");
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
function useInViewport(target, options) {
    var _a = options || {}, callback = _a.callback, option = (0, _tslib.__rest)(_a, [
        "callback"
    ]);
    var _b = (0, _tslib.__read)((0, _react.useState)(), 2), state = _b[0], setState = _b[1];
    var _c = (0, _tslib.__read)((0, _react.useState)(), 2), ratio = _c[0], setRatio = _c[1];
    (0, _useEffectWithTarget.default)(function() {
        var targets = Array.isArray(target) ? target : [
            target
        ];
        var els = targets.map(function(element) {
            return (0, _domTarget.getTargetElement)(element);
        }).filter(Boolean);
        if (!els.length) return;
        var observer = new IntersectionObserver(function(entries) {
            var e_1, _a;
            try {
                for(var entries_1 = (0, _tslib.__values)(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()){
                    var entry = entries_1_1.value;
                    setRatio(entry.intersectionRatio);
                    setState(entry.isIntersecting);
                    callback === null || callback === void 0 || callback(entry);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, (0, _tslib.__assign)((0, _tslib.__assign)({}, option), {
            root: (0, _domTarget.getTargetElement)(options === null || options === void 0 ? void 0 : options.root)
        }));
        els.forEach(function(el) {
            return observer.observe(el);
        });
        return function() {
            observer.disconnect();
        };
    }, [
        options === null || options === void 0 ? void 0 : options.rootMargin,
        options === null || options === void 0 ? void 0 : options.threshold,
        callback
    ], target);
    return [
        state,
        ratio
    ];
}
var _default = useInViewport;

},
"node_modules/ahooks/es/useInfiniteScroll/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useEventListener = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventListener/index.js"));
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useRequest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/index.js"));
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _rect = __mako_require__("node_modules/ahooks/es/utils/rect.js");
var useInfiniteScroll = function(service, options) {
    if (options === void 0) options = {};
    var target = options.target, isNoMore = options.isNoMore, _a = options.threshold, threshold = _a === void 0 ? 100 : _a, _b = options.direction, direction = _b === void 0 ? 'bottom' : _b, _c = options.reloadDeps, reloadDeps = _c === void 0 ? [] : _c, manual = options.manual, onBefore = options.onBefore, onSuccess = options.onSuccess, onError = options.onError, onFinally = options.onFinally;
    var _d = (0, _tslib.__read)((0, _react.useState)(), 2), finalData = _d[0], setFinalData = _d[1];
    var _e = (0, _tslib.__read)((0, _react.useState)(false), 2), loadingMore = _e[0], setLoadingMore = _e[1];
    var isScrollToTop = direction === 'top';
    // lastScrollTop is used to determine whether the scroll direction is up or down
    var lastScrollTop = (0, _react.useRef)(undefined);
    // scrollBottom is used to record the distance from the bottom of the scroll bar
    var scrollBottom = (0, _react.useRef)(0);
    var noMore = (0, _react.useMemo)(function() {
        if (!isNoMore) return false;
        return isNoMore(finalData);
    }, [
        finalData
    ]);
    var _f = (0, _useRequest.default)(function(lastData) {
        return (0, _tslib.__awaiter)(void 0, void 0, void 0, function() {
            var currentData;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            service(lastData)
                        ];
                    case 1:
                        currentData = _a.sent();
                        return [
                            2 /*return*/ ,
                            {
                                currentData: currentData,
                                lastData: lastData
                            }
                        ];
                }
            });
        });
    }, {
        manual: manual,
        onFinally: function(_, d, e) {
            setLoadingMore(false);
            onFinally === null || onFinally === void 0 || onFinally(d === null || d === void 0 ? void 0 : d.currentData, e);
        },
        onBefore: function() {
            return onBefore === null || onBefore === void 0 ? void 0 : onBefore();
        },
        onSuccess: function(d) {
            var _a, _b, _c;
            if (!d.lastData) setFinalData((0, _tslib.__assign)((0, _tslib.__assign)({}, d.currentData), {
                list: (0, _tslib.__spreadArray)([], (0, _tslib.__read)((_a = d.currentData.list) !== null && _a !== void 0 ? _a : []), false)
            }));
            else setFinalData((0, _tslib.__assign)((0, _tslib.__assign)({}, d.currentData), {
                list: isScrollToTop ? (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(d.currentData.list), false), (0, _tslib.__read)((_b = d.lastData.list) !== null && _b !== void 0 ? _b : []), false) : (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)((_c = d.lastData.list) !== null && _c !== void 0 ? _c : []), false), (0, _tslib.__read)(d.currentData.list), false)
            }));
            setTimeout(function() {
                if (isScrollToTop) {
                    var el = (0, _domTarget.getTargetElement)(target);
                    el = el === document ? document.documentElement : el;
                    if (el) {
                        var scrollHeight = (0, _rect.getScrollHeight)(el);
                        el.scrollTo(0, scrollHeight - scrollBottom.current);
                    }
                } else // eslint-disable-next-line @typescript-eslint/no-use-before-define
                scrollMethod();
            });
            onSuccess === null || onSuccess === void 0 || onSuccess(d.currentData);
        },
        onError: function(e) {
            return onError === null || onError === void 0 ? void 0 : onError(e);
        }
    }), loading = _f.loading, error = _f.error, run = _f.run, runAsync = _f.runAsync, cancel = _f.cancel;
    var loadMore = (0, _useMemoizedFn.default)(function() {
        if (noMore) return;
        setLoadingMore(true);
        run(finalData);
    });
    var runAsyncForCurrent = function(data) {
        return (0, _tslib.__awaiter)(void 0, void 0, void 0, function() {
            var res;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            runAsync(data)
                        ];
                    case 1:
                        res = _a.sent();
                        return [
                            2 /*return*/ ,
                            res.currentData
                        ];
                }
            });
        });
    };
    var loadMoreAsync = (0, _useMemoizedFn.default)(function() {
        if (noMore) return Promise.reject();
        setLoadingMore(true);
        return runAsyncForCurrent(finalData);
    });
    var reload = function() {
        setLoadingMore(false);
        return run();
    };
    var reloadAsync = function() {
        setLoadingMore(false);
        return runAsyncForCurrent();
    };
    var scrollMethod = function() {
        var el = (0, _domTarget.getTargetElement)(target);
        if (!el) return;
        var targetEl = el === document ? document.documentElement : el;
        var scrollTop = (0, _rect.getScrollTop)(targetEl);
        var scrollHeight = (0, _rect.getScrollHeight)(targetEl);
        var clientHeight = (0, _rect.getClientHeight)(targetEl);
        if (isScrollToTop) {
            if (lastScrollTop.current !== undefined && lastScrollTop.current > scrollTop && scrollTop <= threshold) loadMore();
            lastScrollTop.current = scrollTop;
            scrollBottom.current = scrollHeight - scrollTop;
        } else if (scrollHeight - scrollTop <= clientHeight + threshold) loadMore();
    };
    (0, _useEventListener.default)('scroll', function() {
        if (loading || loadingMore) return;
        scrollMethod();
    }, {
        target: target
    });
    (0, _useUpdateEffect.default)(function() {
        run();
    }, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(reloadDeps), false));
    return {
        data: finalData,
        loading: !loadingMore && loading,
        error: error,
        loadingMore: loadingMore,
        noMore: noMore,
        loadMore: loadMore,
        loadMoreAsync: loadMoreAsync,
        reload: (0, _useMemoizedFn.default)(reload),
        reloadAsync: (0, _useMemoizedFn.default)(reloadAsync),
        mutate: setFinalData,
        cancel: cancel
    };
};
var _default = useInfiniteScroll;

},
"node_modules/ahooks/es/useInterval/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var useInterval = function(fn, delay, options) {
    if (options === void 0) options = {};
    var timerCallback = (0, _useMemoizedFn.default)(fn);
    var timerRef = (0, _react.useRef)(null);
    var clear = (0, _react.useCallback)(function() {
        if (timerRef.current) clearInterval(timerRef.current);
    }, []);
    (0, _react.useEffect)(function() {
        if (!(0, _utils.isNumber)(delay) || delay < 0) return;
        if (options.immediate) timerCallback();
        timerRef.current = setInterval(timerCallback, delay);
        return clear;
    }, [
        delay,
        options.immediate
    ]);
    return clear;
};
var _default = useInterval;

},
"node_modules/ahooks/es/useIsomorphicLayoutEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var useIsomorphicLayoutEffect = _isBrowser.default ? _react.useLayoutEffect : _react.useEffect;
var _default = useIsomorphicLayoutEffect;

},
"node_modules/ahooks/es/useKeyPress/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useDeepCompareWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useDeepCompareWithTarget.js"));
var _isAppleDevice = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isAppleDevice.js"));
// 键盘事件 keyCode 别名
var aliasKeyCodeMap = {
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pausebreak: 19,
    capslock: 20,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    leftarrow: 37,
    uparrow: 38,
    rightarrow: 39,
    downarrow: 40,
    insert: 45,
    delete: 46,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftwindowkey: 91,
    rightwindowkey: 92,
    meta: _isAppleDevice.default ? [
        91,
        93
    ] : [
        91,
        92
    ],
    selectkey: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalpoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    equalsign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardslash: 191,
    graveaccent: 192,
    openbracket: 219,
    backslash: 220,
    closebracket: 221,
    singlequote: 222
};
// 修饰键
var modifierKey = {
    ctrl: function(event) {
        return event.ctrlKey;
    },
    shift: function(event) {
        return event.shiftKey;
    },
    alt: function(event) {
        return event.altKey;
    },
    meta: function(event) {
        if (event.type === 'keyup') return aliasKeyCodeMap.meta.includes(event.keyCode);
        return event.metaKey;
    }
};
// 判断合法的按键类型
function isValidKeyType(value) {
    return (0, _utils.isString)(value) || (0, _utils.isNumber)(value);
}
// 根据 event 计算激活键数量
function countKeyByEvent(event) {
    var countOfModifier = Object.keys(modifierKey).reduce(function(total, key) {
        if (modifierKey[key](event)) return total + 1;
        return total;
    }, 0);
    // 16 17 18 91 92 是修饰键的 keyCode，如果 keyCode 是修饰键，那么激活数量就是修饰键的数量，如果不是，那么就需要 +1
    return [
        16,
        17,
        18,
        91,
        92
    ].includes(event.keyCode) ? countOfModifier : countOfModifier + 1;
}
/**
 * 判断按键是否激活
 * @param [event: KeyboardEvent]键盘事件
 * @param [keyFilter: any] 当前键
 * @returns string | number | boolean
 */ function genFilterKey(event, keyFilter, exactMatch) {
    var e_1, _a;
    // 浏览器自动补全 input 的时候，会触发 keyDown、keyUp 事件，但此时 event.key 等为空
    if (!event.key) return false;
    // 数字类型直接匹配事件的 keyCode
    if ((0, _utils.isNumber)(keyFilter)) return event.keyCode === keyFilter ? keyFilter : false;
    // 字符串依次判断是否有组合键
    var genArr = keyFilter.split('.');
    var genLen = 0;
    try {
        for(var genArr_1 = (0, _tslib.__values)(genArr), genArr_1_1 = genArr_1.next(); !genArr_1_1.done; genArr_1_1 = genArr_1.next()){
            var key = genArr_1_1.value;
            // 组合键
            var genModifier = modifierKey[key];
            // keyCode 别名
            var aliasKeyCode = aliasKeyCodeMap[key.toLowerCase()];
            if (genModifier && genModifier(event) || aliasKeyCode && aliasKeyCode === event.keyCode) genLen++;
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (genArr_1_1 && !genArr_1_1.done && (_a = genArr_1.return)) _a.call(genArr_1);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
    /**
     * 需要判断触发的键位和监听的键位完全一致，判断方法就是触发的键位里有且等于监听的键位
     * genLen === genArr.length 能判断出来触发的键位里有监听的键位
     * countKeyByEvent(event) === genArr.length 判断出来触发的键位数量里有且等于监听的键位数量
     * 主要用来防止按组合键其子集也会触发的情况，例如监听 ctrl+a 会触发监听 ctrl 和 a 两个键的事件。
     */ if (exactMatch) return genLen === genArr.length && countKeyByEvent(event) === genArr.length ? keyFilter : false;
    return genLen === genArr.length ? keyFilter : false;
}
/**
 * 键盘输入预处理方法
 * @param [keyFilter: any] 当前键
 * @returns () => Boolean
 */ function genKeyFormatter(keyFilter, exactMatch) {
    if ((0, _utils.isFunction)(keyFilter)) return keyFilter;
    if (isValidKeyType(keyFilter)) return function(event) {
        return genFilterKey(event, keyFilter, exactMatch);
    };
    if (Array.isArray(keyFilter)) return function(event) {
        return keyFilter.find(function(item) {
            return genFilterKey(event, item, exactMatch);
        });
    };
    return function() {
        return Boolean(keyFilter);
    };
}
var defaultEvents = [
    'keydown'
];
function useKeyPress(keyFilter, eventHandler, option) {
    var _a = option || {}, _b = _a.events, events = _b === void 0 ? defaultEvents : _b, target = _a.target, _c = _a.exactMatch, exactMatch = _c === void 0 ? false : _c, _d = _a.useCapture, useCapture = _d === void 0 ? false : _d;
    var eventHandlerRef = (0, _useLatest.default)(eventHandler);
    var keyFilterRef = (0, _useLatest.default)(keyFilter);
    (0, _useDeepCompareWithTarget.default)(function() {
        var e_2, _a;
        var _b;
        var el = (0, _domTarget.getTargetElement)(target, window);
        if (!el) return;
        var callbackHandler = function(event) {
            var _a;
            var genGuard = genKeyFormatter(keyFilterRef.current, exactMatch);
            var keyGuard = genGuard(event);
            var firedKey = isValidKeyType(keyGuard) ? keyGuard : event.key;
            if (keyGuard) return (_a = eventHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(eventHandlerRef, event, firedKey);
        };
        try {
            for(var events_1 = (0, _tslib.__values)(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()){
                var eventName = events_1_1.value;
                (_b = el === null || el === void 0 ? void 0 : el.addEventListener) === null || _b === void 0 || _b.call(el, eventName, callbackHandler, useCapture);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
        return function() {
            var e_3, _a;
            var _b;
            try {
                for(var events_2 = (0, _tslib.__values)(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()){
                    var eventName = events_2_1.value;
                    (_b = el === null || el === void 0 ? void 0 : el.removeEventListener) === null || _b === void 0 || _b.call(el, eventName, callbackHandler, useCapture);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
        };
    }, [
        events
    ], target);
}
var _default = useKeyPress;

},
"node_modules/ahooks/es/useLatest/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
function useLatest(value) {
    var ref = (0, _react.useRef)(value);
    ref.current = value;
    return ref;
}
var _default = useLatest;

},
"node_modules/ahooks/es/useLocalStorageState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _createUseStorageState = __mako_require__("node_modules/ahooks/es/createUseStorageState/index.js");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var useLocalStorageState = (0, _createUseStorageState.createUseStorageState)(function() {
    return _isBrowser.default ? localStorage : undefined;
});
var _default = useLocalStorageState;

},
"node_modules/ahooks/es/useLockFn/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
function useLockFn(fn) {
    var _this = this;
    var lockRef = (0, _react.useRef)(false);
    return (0, _react.useCallback)(function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(_this, void 0, void 0, function() {
            var ret, e_1;
            return (0, _tslib.__generator)(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (lockRef.current) return [
                            2 /*return*/ 
                        ];
                        lockRef.current = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4 /*yield*/ ,
                            fn.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args), false))
                        ];
                    case 2:
                        ret = _a.sent();
                        return [
                            2 /*return*/ ,
                            ret
                        ];
                    case 3:
                        e_1 = _a.sent();
                        throw e_1;
                    case 4:
                        lockRef.current = false;
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 5:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    }, [
        fn
    ]);
}
var _default = useLockFn;

},
"node_modules/ahooks/es/useLongPress/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
function useLongPress(onLongPress, target, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.delay, delay = _c === void 0 ? 300 : _c, moveThreshold = _b.moveThreshold, onClick = _b.onClick, onLongPressEnd = _b.onLongPressEnd;
    var onLongPressRef = (0, _useLatest.default)(onLongPress);
    var onClickRef = (0, _useLatest.default)(onClick);
    var onLongPressEndRef = (0, _useLatest.default)(onLongPressEnd);
    var timerRef = (0, _react.useRef)(undefined);
    var isTriggeredRef = (0, _react.useRef)(false);
    var pervPositionRef = (0, _react.useRef)({
        x: 0,
        y: 0
    });
    var mousePressed = (0, _react.useRef)(false);
    var touchPressed = (0, _react.useRef)(false);
    var hasMoveThreshold = !!((moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.x) && moveThreshold.x > 0 || (moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.y) && moveThreshold.y > 0);
    (0, _useEffectWithTarget.default)(function() {
        var targetElement = (0, _domTarget.getTargetElement)(target);
        if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) return;
        var overThreshold = function(event) {
            var _a = getClientPosition(event), clientX = _a.clientX, clientY = _a.clientY;
            var offsetX = Math.abs(clientX - pervPositionRef.current.x);
            var offsetY = Math.abs(clientY - pervPositionRef.current.y);
            return !!((moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.x) && offsetX > moveThreshold.x || (moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.y) && offsetY > moveThreshold.y);
        };
        function getClientPosition(event) {
            if ('TouchEvent' in window && event instanceof TouchEvent) return {
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY
            };
            if (event instanceof MouseEvent) return {
                clientX: event.clientX,
                clientY: event.clientY
            };
            return {
                clientX: 0,
                clientY: 0
            };
        }
        var createTimer = function(event) {
            timerRef.current = setTimeout(function() {
                onLongPressRef.current(event);
                isTriggeredRef.current = true;
            }, delay);
        };
        var onTouchStart = function(event) {
            if (touchPressed.current) return;
            touchPressed.current = true;
            if (hasMoveThreshold) {
                var _a = getClientPosition(event), clientX = _a.clientX, clientY = _a.clientY;
                pervPositionRef.current.x = clientX;
                pervPositionRef.current.y = clientY;
            }
            createTimer(event);
        };
        var onMouseDown = function(event) {
            var _a;
            if ((_a = event === null || event === void 0 ? void 0 : event.sourceCapabilities) === null || _a === void 0 ? void 0 : _a.firesTouchEvents) return;
            mousePressed.current = true;
            if (hasMoveThreshold) {
                pervPositionRef.current.x = event.clientX;
                pervPositionRef.current.y = event.clientY;
            }
            createTimer(event);
        };
        var onMove = function(event) {
            if (timerRef.current && overThreshold(event)) {
                clearTimeout(timerRef.current);
                timerRef.current = undefined;
            }
        };
        var onTouchEnd = function(event) {
            var _a;
            if (!touchPressed.current) return;
            touchPressed.current = false;
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = undefined;
            }
            if (isTriggeredRef.current) (_a = onLongPressEndRef.current) === null || _a === void 0 || _a.call(onLongPressEndRef, event);
            else if (onClickRef.current) onClickRef.current(event);
            isTriggeredRef.current = false;
        };
        var onMouseUp = function(event) {
            var _a, _b;
            if ((_a = event === null || event === void 0 ? void 0 : event.sourceCapabilities) === null || _a === void 0 ? void 0 : _a.firesTouchEvents) return;
            if (!mousePressed.current) return;
            mousePressed.current = false;
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = undefined;
            }
            if (isTriggeredRef.current) (_b = onLongPressEndRef.current) === null || _b === void 0 || _b.call(onLongPressEndRef, event);
            else if (onClickRef.current) onClickRef.current(event);
            isTriggeredRef.current = false;
        };
        var onMouseLeave = function(event) {
            var _a;
            if (!mousePressed.current) return;
            mousePressed.current = false;
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = undefined;
            }
            if (isTriggeredRef.current) {
                (_a = onLongPressEndRef.current) === null || _a === void 0 || _a.call(onLongPressEndRef, event);
                isTriggeredRef.current = false;
            }
        };
        targetElement.addEventListener('mousedown', onMouseDown);
        targetElement.addEventListener('mouseup', onMouseUp);
        targetElement.addEventListener('mouseleave', onMouseLeave);
        targetElement.addEventListener('touchstart', onTouchStart);
        targetElement.addEventListener('touchend', onTouchEnd);
        if (hasMoveThreshold) {
            targetElement.addEventListener('mousemove', onMove);
            targetElement.addEventListener('touchmove', onMove);
        }
        return function() {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                isTriggeredRef.current = false;
            }
            targetElement.removeEventListener('mousedown', onMouseDown);
            targetElement.removeEventListener('mouseup', onMouseUp);
            targetElement.removeEventListener('mouseleave', onMouseLeave);
            targetElement.removeEventListener('touchstart', onTouchStart);
            targetElement.removeEventListener('touchend', onTouchEnd);
            if (hasMoveThreshold) {
                targetElement.removeEventListener('mousemove', onMove);
                targetElement.removeEventListener('touchmove', onMove);
            }
        };
    }, [], target);
}
var _default = useLongPress;

},
"node_modules/ahooks/es/useMap/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
function useMap(initialValue) {
    var getInitValue = function() {
        return new Map(initialValue);
    };
    var _a = (0, _tslib.__read)((0, _react.useState)(getInitValue), 2), map = _a[0], setMap = _a[1];
    var set = function(key, entry) {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.set(key, entry);
            return temp;
        });
    };
    var setAll = function(newMap) {
        setMap(new Map(newMap));
    };
    var remove = function(key) {
        setMap(function(prev) {
            var temp = new Map(prev);
            temp.delete(key);
            return temp;
        });
    };
    var reset = function() {
        return setMap(getInitValue());
    };
    var get = function(key) {
        return map.get(key);
    };
    return [
        map,
        {
            set: (0, _useMemoizedFn.default)(set),
            setAll: (0, _useMemoizedFn.default)(setAll),
            remove: (0, _useMemoizedFn.default)(remove),
            reset: (0, _useMemoizedFn.default)(reset),
            get: (0, _useMemoizedFn.default)(get)
        }
    ];
}
var _default = useMap;

},
"node_modules/ahooks/es/useMemoizedFn/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _isDev = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isDev.js"));
var useMemoizedFn = function(fn) {
    if (_isDev.default) {
        if (!(0, _utils.isFunction)(fn)) console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof fn));
    }
    var fnRef = (0, _react.useRef)(fn);
    // why not write `fnRef.current = fn`?
    // https://github.com/alibaba/hooks/issues/728
    fnRef.current = (0, _react.useMemo)(function() {
        return fn;
    }, [
        fn
    ]);
    var memoizedFn = (0, _react.useRef)(undefined);
    if (!memoizedFn.current) memoizedFn.current = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return fnRef.current.apply(this, args);
    };
    return memoizedFn.current;
};
var _default = useMemoizedFn;

},
"node_modules/ahooks/es/useMount/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _isDev = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isDev.js"));
var useMount = function(fn) {
    if (_isDev.default) {
        if (!(0, _utils.isFunction)(fn)) console.error("useMount: parameter `fn` expected to be a function, but got \"".concat(typeof fn, "\"."));
    }
    (0, _react.useEffect)(function() {
        var result = fn === null || fn === void 0 ? void 0 : fn();
        // If fn returns a Promise, don't return it as cleanup function
        if (result && typeof result === 'object' && typeof result.then === 'function') return;
        return result;
    }, []);
};
var _default = useMount;

},
"node_modules/ahooks/es/useMouse/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _useRafState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRafState/index.js"));
var _useEventListener = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventListener/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var initState = {
    screenX: NaN,
    screenY: NaN,
    clientX: NaN,
    clientY: NaN,
    pageX: NaN,
    pageY: NaN,
    elementX: NaN,
    elementY: NaN,
    elementH: NaN,
    elementW: NaN,
    elementPosX: NaN,
    elementPosY: NaN
};
var _default = function(target) {
    var _a = (0, _tslib.__read)((0, _useRafState.default)(initState), 2), state = _a[0], setState = _a[1];
    (0, _useEventListener.default)('mousemove', function(event) {
        var screenX = event.screenX, screenY = event.screenY, clientX = event.clientX, clientY = event.clientY, pageX = event.pageX, pageY = event.pageY;
        var newState = {
            screenX: screenX,
            screenY: screenY,
            clientX: clientX,
            clientY: clientY,
            pageX: pageX,
            pageY: pageY,
            elementX: NaN,
            elementY: NaN,
            elementH: NaN,
            elementW: NaN,
            elementPosX: NaN,
            elementPosY: NaN
        };
        var targetElement = (0, _domTarget.getTargetElement)(target);
        if (targetElement) {
            var _a = targetElement.getBoundingClientRect(), left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
            newState.elementPosX = left + window.pageXOffset;
            newState.elementPosY = top_1 + window.pageYOffset;
            newState.elementX = pageX - newState.elementPosX;
            newState.elementY = pageY - newState.elementPosY;
            newState.elementW = width;
            newState.elementH = height;
        }
        setState(newState);
    }, {
        target: function() {
            return document;
        }
    });
    return state;
};

},
"node_modules/ahooks/es/useMutationObserver/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useDeepCompareWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useDeepCompareWithTarget.js"));
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var useMutationObserver = function(callback, target, options) {
    if (options === void 0) options = {};
    var callbackRef = (0, _useLatest.default)(callback);
    (0, _useDeepCompareWithTarget.default)(function() {
        var element = (0, _domTarget.getTargetElement)(target);
        if (!element) return;
        var observer = new MutationObserver(callbackRef.current);
        observer.observe(element, options);
        return function() {
            observer === null || observer === void 0 || observer.disconnect();
        };
    }, [
        options
    ], target);
};
var _default = useMutationObserver;

},
"node_modules/ahooks/es/useNetwork/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var NetworkEventType;
(function(NetworkEventType) {
    NetworkEventType["ONLINE"] = "online";
    NetworkEventType["OFFLINE"] = "offline";
    NetworkEventType["CHANGE"] = "change";
})(NetworkEventType || (NetworkEventType = {}));
function getConnection() {
    var nav = navigator;
    if (!(0, _utils.isObject)(nav)) return null;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
}
function getConnectionProperty() {
    var c = getConnection();
    if (!c) return {};
    return {
        rtt: c.rtt,
        type: c.type,
        saveData: c.saveData,
        downlink: c.downlink,
        downlinkMax: c.downlinkMax,
        effectiveType: c.effectiveType
    };
}
function useNetwork() {
    var _a = (0, _tslib.__read)((0, _react.useState)(function() {
        return (0, _tslib.__assign)({
            since: undefined,
            online: navigator === null || navigator === void 0 ? void 0 : navigator.onLine
        }, getConnectionProperty());
    }), 2), state = _a[0], setState = _a[1];
    (0, _react.useEffect)(function() {
        var onOnline = function() {
            setState(function(prevState) {
                return (0, _tslib.__assign)((0, _tslib.__assign)({}, prevState), {
                    online: true,
                    since: new Date()
                });
            });
        };
        var onOffline = function() {
            setState(function(prevState) {
                return (0, _tslib.__assign)((0, _tslib.__assign)({}, prevState), {
                    online: false,
                    since: new Date()
                });
            });
        };
        var onConnectionChange = function() {
            setState(function(prevState) {
                return (0, _tslib.__assign)((0, _tslib.__assign)({}, prevState), getConnectionProperty());
            });
        };
        window.addEventListener(NetworkEventType.ONLINE, onOnline);
        window.addEventListener(NetworkEventType.OFFLINE, onOffline);
        var connection = getConnection();
        connection === null || connection === void 0 || connection.addEventListener(NetworkEventType.CHANGE, onConnectionChange);
        return function() {
            window.removeEventListener(NetworkEventType.ONLINE, onOnline);
            window.removeEventListener(NetworkEventType.OFFLINE, onOffline);
            connection === null || connection === void 0 || connection.removeEventListener(NetworkEventType.CHANGE, onConnectionChange);
        };
    }, []);
    return state;
}
var _default = useNetwork;

},
"node_modules/ahooks/es/usePagination/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useRequest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/index.js"));
var usePagination = function(service, options) {
    var _a;
    if (options === void 0) options = {};
    var _b = options.defaultPageSize, defaultPageSize = _b === void 0 ? 10 : _b, _c = options.defaultCurrent, defaultCurrent = _c === void 0 ? 1 : _c, rest = (0, _tslib.__rest)(options, [
        "defaultPageSize",
        "defaultCurrent"
    ]);
    var result = (0, _useRequest.default)(service, (0, _tslib.__assign)({
        defaultParams: [
            {
                current: defaultCurrent,
                pageSize: defaultPageSize
            }
        ],
        refreshDepsAction: function() {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            changeCurrent(1);
        }
    }, rest));
    var _d = result.params[0] || {}, _e = _d.current, current = _e === void 0 ? 1 : _e, _f = _d.pageSize, pageSize = _f === void 0 ? defaultPageSize : _f;
    var total = ((_a = result.data) === null || _a === void 0 ? void 0 : _a.total) || 0;
    var totalPage = (0, _react.useMemo)(function() {
        return Math.ceil(total / pageSize);
    }, [
        pageSize,
        total
    ]);
    var onChange = function(c, p) {
        var toCurrent = c <= 0 ? 1 : c;
        var toPageSize = p <= 0 ? 1 : p;
        var tempTotalPage = Math.ceil(total / toPageSize);
        if (toCurrent > tempTotalPage) toCurrent = Math.max(1, tempTotalPage);
        var _a = (0, _tslib.__read)(result.params || []), _b = _a[0], oldPaginationParams = _b === void 0 ? {} : _b, restParams = _a.slice(1);
        result.run.apply(result, (0, _tslib.__spreadArray)([
            (0, _tslib.__assign)((0, _tslib.__assign)({}, oldPaginationParams), {
                current: toCurrent,
                pageSize: toPageSize
            })
        ], (0, _tslib.__read)(restParams), false));
    };
    var changeCurrent = function(c) {
        onChange(c, pageSize);
    };
    var changePageSize = function(p) {
        onChange(current, p);
    };
    return (0, _tslib.__assign)((0, _tslib.__assign)({}, result), {
        pagination: {
            current: current,
            pageSize: pageSize,
            total: total,
            totalPage: totalPage,
            onChange: (0, _useMemoizedFn.default)(onChange),
            changeCurrent: (0, _useMemoizedFn.default)(changeCurrent),
            changePageSize: (0, _useMemoizedFn.default)(changePageSize)
        }
    });
};
var _default = usePagination;

},
"node_modules/ahooks/es/usePrevious/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var defaultShouldUpdate = function(a, b) {
    return !Object.is(a, b);
};
function usePrevious(state, shouldUpdate) {
    if (shouldUpdate === void 0) shouldUpdate = defaultShouldUpdate;
    var prevRef = (0, _react.useRef)(undefined);
    var curRef = (0, _react.useRef)(undefined);
    if (shouldUpdate(curRef.current, state)) {
        prevRef.current = curRef.current;
        curRef.current = state;
    }
    return prevRef.current;
}
var _default = usePrevious;

},
"node_modules/ahooks/es/useRafInterval/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var setRafInterval = function(callback, delay) {
    if (delay === void 0) delay = 0;
    if (typeof requestAnimationFrame === 'undefined') return {
        id: setInterval(callback, delay)
    };
    var start = Date.now();
    var handle = {
        id: 0
    };
    var loop = function() {
        var current = Date.now();
        if (current - start >= delay) {
            callback();
            start = Date.now();
        }
        handle.id = requestAnimationFrame(loop);
    };
    handle.id = requestAnimationFrame(loop);
    return handle;
};
var cancelAnimationFrameIsNotDefined = function(t) {
    return typeof cancelAnimationFrame === 'undefined';
};
var clearRafInterval = function(handle) {
    if (cancelAnimationFrameIsNotDefined(handle.id)) return clearInterval(handle.id);
    cancelAnimationFrame(handle.id);
};
function useRafInterval(fn, delay, options) {
    var immediate = options === null || options === void 0 ? void 0 : options.immediate;
    var fnRef = (0, _useLatest.default)(fn);
    var timerRef = (0, _react.useRef)(undefined);
    var clear = (0, _react.useCallback)(function() {
        if (timerRef.current) clearRafInterval(timerRef.current);
    }, []);
    (0, _react.useEffect)(function() {
        if (!(0, _utils.isNumber)(delay) || delay < 0) return;
        if (immediate) fnRef.current();
        timerRef.current = setRafInterval(function() {
            fnRef.current();
        }, delay);
        return clear;
    }, [
        delay
    ]);
    return clear;
}
var _default = useRafInterval;

},
"node_modules/ahooks/es/useRafState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
function useRafState(initialState) {
    var ref = (0, _react.useRef)(0);
    var _a = (0, _tslib.__read)((0, _react.useState)(initialState), 2), state = _a[0], setState = _a[1];
    var setRafState = (0, _react.useCallback)(function(value) {
        cancelAnimationFrame(ref.current);
        ref.current = requestAnimationFrame(function() {
            setState(value);
        });
    }, []);
    (0, _useUnmount.default)(function() {
        cancelAnimationFrame(ref.current);
    });
    return [
        state,
        setRafState
    ];
}
var _default = useRafState;

},
"node_modules/ahooks/es/useRafTimeout/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var setRafTimeout = function(callback, delay) {
    if (delay === void 0) delay = 0;
    if (typeof requestAnimationFrame === 'undefined') return {
        id: setTimeout(callback, delay)
    };
    var handle = {
        id: 0
    };
    var startTime = Date.now();
    var loop = function() {
        var current = Date.now();
        if (current - startTime >= delay) callback();
        else handle.id = requestAnimationFrame(loop);
    };
    handle.id = requestAnimationFrame(loop);
    return handle;
};
var cancelAnimationFrameIsNotDefined = function(t) {
    return typeof cancelAnimationFrame === 'undefined';
};
var clearRafTimeout = function(handle) {
    if (cancelAnimationFrameIsNotDefined(handle.id)) return clearTimeout(handle.id);
    cancelAnimationFrame(handle.id);
};
function useRafTimeout(fn, delay) {
    var fnRef = (0, _useLatest.default)(fn);
    var timerRef = (0, _react.useRef)(undefined);
    var clear = (0, _react.useCallback)(function() {
        if (timerRef.current) clearRafTimeout(timerRef.current);
    }, []);
    (0, _react.useEffect)(function() {
        if (!(0, _utils.isNumber)(delay) || delay < 0) return;
        timerRef.current = setRafTimeout(function() {
            fnRef.current();
        }, delay);
        return clear;
    }, [
        delay
    ]);
    return clear;
}
var _default = useRafTimeout;

},
"node_modules/ahooks/es/useReactive/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _isPlainObject = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/lodash/isPlainObject.js"));
var _useCreation = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useCreation/index.js"));
var _useUpdate = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdate/index.js"));
// k:v 原对象:代理过的对象
var proxyMap = new WeakMap();
// k:v 代理过的对象:原对象
var rawMap = new WeakMap();
function observer(initialVal, cb) {
    var existingProxy = proxyMap.get(initialVal);
    // 添加缓存 防止重新构建proxy
    if (existingProxy) return existingProxy;
    // 防止代理已经代理过的对象
    // https://github.com/alibaba/hooks/issues/839
    if (rawMap.has(initialVal)) return initialVal;
    var proxy = new Proxy(initialVal, {
        get: function(target, key, receiver) {
            var res = Reflect.get(target, key, receiver);
            // https://github.com/alibaba/hooks/issues/1317
            var descriptor = Reflect.getOwnPropertyDescriptor(target, key);
            if (!(descriptor === null || descriptor === void 0 ? void 0 : descriptor.configurable) && !(descriptor === null || descriptor === void 0 ? void 0 : descriptor.writable)) return res;
            // Only proxy plain object or array,
            // otherwise it will cause: https://github.com/alibaba/hooks/issues/2080
            return (0, _isPlainObject.default)(res) || Array.isArray(res) ? observer(res, cb) : res;
        },
        set: function(target, key, val) {
            var ret = Reflect.set(target, key, val);
            cb();
            return ret;
        },
        deleteProperty: function(target, key) {
            var ret = Reflect.deleteProperty(target, key);
            cb();
            return ret;
        }
    });
    proxyMap.set(initialVal, proxy);
    rawMap.set(proxy, initialVal);
    return proxy;
}
function useReactive(initialState) {
    var update = (0, _useUpdate.default)();
    var stateRef = (0, _react.useRef)(initialState);
    var state = (0, _useCreation.default)(function() {
        return observer(stateRef.current, function() {
            update();
        });
    }, []);
    return state;
}
var _default = useReactive;

},
"node_modules/ahooks/es/useRequest/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    clearCache: function() {
        return _cache.clearCache;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _useRequest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/useRequest.js"));
var _cache = __mako_require__("node_modules/ahooks/es/useRequest/src/utils/cache.js");
var _default = _useRequest.default;

},
"node_modules/ahooks/es/useRequest/src/Fetch.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var Fetch = function() {
    function Fetch(serviceRef, options, subscribe, initState) {
        if (initState === void 0) initState = {};
        this.serviceRef = serviceRef;
        this.options = options;
        this.subscribe = subscribe;
        this.initState = initState;
        this.count = 0;
        this.state = {
            loading: false,
            params: undefined,
            data: undefined,
            error: undefined
        };
        this.state = (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, this.state), {
            loading: !options.manual
        }), initState);
    }
    Fetch.prototype.setState = function(s) {
        if (s === void 0) s = {};
        this.state = (0, _tslib.__assign)((0, _tslib.__assign)({}, this.state), s);
        this.subscribe();
    };
    Fetch.prototype.runPluginHandler = function(event) {
        var rest = [];
        for(var _i = 1; _i < arguments.length; _i++)rest[_i - 1] = arguments[_i];
        // @ts-ignore
        var r = this.pluginImpls.map(function(i) {
            var _a;
            return (_a = i[event]) === null || _a === void 0 ? void 0 : _a.call.apply(_a, (0, _tslib.__spreadArray)([
                i
            ], (0, _tslib.__read)(rest), false));
        }).filter(Boolean);
        return Object.assign.apply(Object, (0, _tslib.__spreadArray)([
            {}
        ], (0, _tslib.__read)(r), false));
    };
    Fetch.prototype.runAsync = function() {
        var params = [];
        for(var _i = 0; _i < arguments.length; _i++)params[_i] = arguments[_i];
        return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
            var currentCount, _a, _b, stopNow, _c, returnNow, state, servicePromise, res, error_1;
            var _d;
            var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            return (0, _tslib.__generator)(this, function(_q) {
                switch(_q.label){
                    case 0:
                        this.count += 1;
                        currentCount = this.count;
                        _a = this.runPluginHandler('onBefore', params), _b = _a.stopNow, stopNow = _b === void 0 ? false : _b, _c = _a.returnNow, returnNow = _c === void 0 ? false : _c, state = (0, _tslib.__rest)(_a, [
                            "stopNow",
                            "returnNow"
                        ]);
                        // stop request
                        if (stopNow) return [
                            2 /*return*/ ,
                            new Promise(function() {})
                        ];
                        this.setState((0, _tslib.__assign)({
                            loading: true,
                            params: params
                        }, state));
                        // return now
                        if (returnNow) return [
                            2 /*return*/ ,
                            Promise.resolve(state.data)
                        ];
                        (_f = (_e = this.options).onBefore) === null || _f === void 0 || _f.call(_e, params);
                        _q.label = 1;
                    case 1:
                        _q.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        servicePromise = this.runPluginHandler('onRequest', this.serviceRef.current, params).servicePromise;
                        if (!servicePromise) servicePromise = (_d = this.serviceRef).current.apply(_d, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(params), false));
                        return [
                            4 /*yield*/ ,
                            servicePromise
                        ];
                    case 2:
                        res = _q.sent();
                        if (currentCount !== this.count) // prevent run.then when request is canceled
                        return [
                            2 /*return*/ ,
                            new Promise(function() {})
                        ];
                        // const formattedResult = this.options.formatResultRef.current ? this.options.formatResultRef.current(res) : res;
                        this.setState({
                            data: res,
                            error: undefined,
                            loading: false
                        });
                        (_h = (_g = this.options).onSuccess) === null || _h === void 0 || _h.call(_g, res, params);
                        this.runPluginHandler('onSuccess', res, params);
                        (_k = (_j = this.options).onFinally) === null || _k === void 0 || _k.call(_j, params, res, undefined);
                        if (currentCount === this.count) this.runPluginHandler('onFinally', params, res, undefined);
                        return [
                            2 /*return*/ ,
                            res
                        ];
                    case 3:
                        error_1 = _q.sent();
                        if (currentCount !== this.count) // prevent run.then when request is canceled
                        return [
                            2 /*return*/ ,
                            new Promise(function() {})
                        ];
                        this.setState({
                            error: error_1,
                            loading: false
                        });
                        (_m = (_l = this.options).onError) === null || _m === void 0 || _m.call(_l, error_1, params);
                        this.runPluginHandler('onError', error_1, params);
                        (_p = (_o = this.options).onFinally) === null || _p === void 0 || _p.call(_o, params, undefined, error_1);
                        if (currentCount === this.count) this.runPluginHandler('onFinally', params, undefined, error_1);
                        throw error_1;
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Fetch.prototype.run = function() {
        var _this = this;
        var params = [];
        for(var _i = 0; _i < arguments.length; _i++)params[_i] = arguments[_i];
        this.runAsync.apply(this, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(params), false)).catch(function(error) {
            if (!_this.options.onError) console.error(error);
        });
    };
    Fetch.prototype.cancel = function() {
        this.count += 1;
        this.setState({
            loading: false
        });
        this.runPluginHandler('onCancel');
    };
    Fetch.prototype.refresh = function() {
        // @ts-ignore
        this.run.apply(this, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(this.state.params || []), false));
    };
    Fetch.prototype.refreshAsync = function() {
        // @ts-ignore
        return this.runAsync.apply(this, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(this.state.params || []), false));
    };
    Fetch.prototype.mutate = function(data) {
        var targetData = (0, _utils.isFunction)(data) ? data(this.state.data) : data;
        this.runPluginHandler('onMutate', targetData);
        this.setState({
            data: targetData
        });
    };
    return Fetch;
}();
var _default = Fetch;

},
"node_modules/ahooks/es/useRequest/src/plugins/useAutoRunPlugin.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
// support refreshDeps & ready
var useAutoRunPlugin = function(fetchInstance, _a) {
    var manual = _a.manual, _b = _a.ready, ready = _b === void 0 ? true : _b, _c = _a.defaultParams, defaultParams = _c === void 0 ? [] : _c, _d = _a.refreshDeps, refreshDeps = _d === void 0 ? [] : _d, refreshDepsAction = _a.refreshDepsAction;
    var hasAutoRun = (0, _react.useRef)(false);
    hasAutoRun.current = false;
    (0, _useUpdateEffect.default)(function() {
        if (!manual && ready) {
            hasAutoRun.current = true;
            fetchInstance.run.apply(fetchInstance, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(defaultParams), false));
        }
    }, [
        ready
    ]);
    (0, _useUpdateEffect.default)(function() {
        if (hasAutoRun.current) return;
        if (!manual) {
            hasAutoRun.current = true;
            if (refreshDepsAction) refreshDepsAction();
            else fetchInstance.refresh();
        }
    }, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(refreshDeps), false));
    return {
        onBefore: function() {
            if (!ready) return {
                stopNow: true
            };
        }
    };
};
useAutoRunPlugin.onInit = function(_a) {
    var _b = _a.ready, ready = _b === void 0 ? true : _b, manual = _a.manual;
    return {
        loading: !manual && ready
    };
};
var _default = useAutoRunPlugin;

},
"node_modules/ahooks/es/useRequest/src/plugins/useCachePlugin.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useCreation = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useCreation/index.js"));
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var _cache = __mako_require__("node_modules/ahooks/es/useRequest/src/utils/cache.js");
var _cachePromise = __mako_require__("node_modules/ahooks/es/useRequest/src/utils/cachePromise.js");
var _cacheSubscribe = __mako_require__("node_modules/ahooks/es/useRequest/src/utils/cacheSubscribe.js");
var useCachePlugin = function(fetchInstance, _a) {
    var cacheKey = _a.cacheKey, _b = _a.cacheTime, cacheTime = _b === void 0 ? 300000 : _b, _c = _a.staleTime, staleTime = _c === void 0 ? 0 : _c, customSetCache = _a.setCache, customGetCache = _a.getCache;
    var unSubscribeRef = (0, _react.useRef)(undefined);
    var currentPromiseRef = (0, _react.useRef)(undefined);
    var _setCache = function(key, cachedData) {
        if (customSetCache) customSetCache(cachedData);
        else (0, _cache.setCache)(key, cacheTime, cachedData);
        (0, _cacheSubscribe.trigger)(key, cachedData.data);
    };
    var _getCache = function(key, params) {
        if (params === void 0) params = [];
        if (customGetCache) return customGetCache(params);
        return (0, _cache.getCache)(key);
    };
    (0, _useCreation.default)(function() {
        if (!cacheKey) return;
        // get data from cache when init
        var cacheData = _getCache(cacheKey);
        if (cacheData && Object.hasOwnProperty.call(cacheData, 'data')) {
            fetchInstance.state.data = cacheData.data;
            fetchInstance.state.params = cacheData.params;
            if (staleTime === -1 || Date.now() - cacheData.time <= staleTime) fetchInstance.state.loading = false;
        }
        // subscribe same cachekey update, trigger update
        unSubscribeRef.current = (0, _cacheSubscribe.subscribe)(cacheKey, function(data) {
            fetchInstance.setState({
                data: data
            });
        });
    }, []);
    (0, _useUnmount.default)(function() {
        var _a;
        (_a = unSubscribeRef.current) === null || _a === void 0 || _a.call(unSubscribeRef);
    });
    if (!cacheKey) return {};
    return {
        onBefore: function(params) {
            var cacheData = _getCache(cacheKey, params);
            if (!cacheData || !Object.hasOwnProperty.call(cacheData, 'data')) return {};
            // If the data is fresh, stop request
            if (staleTime === -1 || Date.now() - cacheData.time <= staleTime) return {
                loading: false,
                data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data,
                error: undefined,
                returnNow: true
            };
            else // If the data is stale, return data, and request continue
            return {
                data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data,
                error: undefined
            };
        },
        onRequest: function(service, args) {
            var servicePromise = (0, _cachePromise.getCachePromise)(cacheKey);
            // If has servicePromise, and is not trigger by self, then use it
            if (servicePromise && servicePromise !== currentPromiseRef.current) return {
                servicePromise: servicePromise
            };
            servicePromise = service.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args), false));
            currentPromiseRef.current = servicePromise;
            (0, _cachePromise.setCachePromise)(cacheKey, servicePromise);
            return {
                servicePromise: servicePromise
            };
        },
        onSuccess: function(data, params) {
            var _a;
            if (cacheKey) {
                // cancel subscribe, avoid trgger self
                (_a = unSubscribeRef.current) === null || _a === void 0 || _a.call(unSubscribeRef);
                _setCache(cacheKey, {
                    data: data,
                    params: params,
                    time: Date.now()
                });
                // resubscribe
                unSubscribeRef.current = (0, _cacheSubscribe.subscribe)(cacheKey, function(d) {
                    fetchInstance.setState({
                        data: d
                    });
                });
            }
        },
        onMutate: function(data) {
            var _a;
            if (cacheKey) {
                // cancel subscribe, avoid trigger self
                (_a = unSubscribeRef.current) === null || _a === void 0 || _a.call(unSubscribeRef);
                _setCache(cacheKey, {
                    data: data,
                    params: fetchInstance.state.params,
                    time: Date.now()
                });
                // resubscribe
                unSubscribeRef.current = (0, _cacheSubscribe.subscribe)(cacheKey, function(d) {
                    fetchInstance.setState({
                        data: d
                    });
                });
            }
        }
    };
};
var _default = useCachePlugin;

},
"node_modules/ahooks/es/useRequest/src/plugins/useDebouncePlugin.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _debounce = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/lodash/debounce.js"));
var _react = __mako_require__("node_modules/react/index.js");
var useDebouncePlugin = function(fetchInstance, _a) {
    var debounceWait = _a.debounceWait, debounceLeading = _a.debounceLeading, debounceTrailing = _a.debounceTrailing, debounceMaxWait = _a.debounceMaxWait;
    var debouncedRef = (0, _react.useRef)(undefined);
    var options = (0, _react.useMemo)(function() {
        var ret = {};
        if (debounceLeading !== undefined) ret.leading = debounceLeading;
        if (debounceTrailing !== undefined) ret.trailing = debounceTrailing;
        if (debounceMaxWait !== undefined) ret.maxWait = debounceMaxWait;
        return ret;
    }, [
        debounceLeading,
        debounceTrailing,
        debounceMaxWait
    ]);
    (0, _react.useEffect)(function() {
        if (debounceWait) {
            var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);
            debouncedRef.current = (0, _debounce.default)(function(callback) {
                callback();
            }, debounceWait, options);
            // debounce runAsync should be promise
            // https://github.com/lodash/lodash/issues/4400#issuecomment-834800398
            fetchInstance.runAsync = function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                return new Promise(function(resolve, reject) {
                    var _a;
                    (_a = debouncedRef.current) === null || _a === void 0 || _a.call(debouncedRef, function() {
                        _originRunAsync_1.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args), false)).then(resolve).catch(reject);
                    });
                });
            };
            return function() {
                var _a;
                (_a = debouncedRef.current) === null || _a === void 0 || _a.cancel();
                fetchInstance.runAsync = _originRunAsync_1;
            };
        }
    }, [
        debounceWait,
        options
    ]);
    if (!debounceWait) return {};
    return {
        onCancel: function() {
            var _a;
            (_a = debouncedRef.current) === null || _a === void 0 || _a.cancel();
        }
    };
};
var _default = useDebouncePlugin;

},
"node_modules/ahooks/es/useRequest/src/plugins/useLoadingDelayPlugin.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var useLoadingDelayPlugin = function(fetchInstance, _a) {
    var loadingDelay = _a.loadingDelay, ready = _a.ready;
    var timerRef = (0, _react.useRef)(undefined);
    if (!loadingDelay) return {};
    var cancelTimeout = function() {
        if (timerRef.current) clearTimeout(timerRef.current);
    };
    return {
        onBefore: function() {
            cancelTimeout();
            // Two cases:
            // 1. ready === undefined
            // 2. ready === true
            if (ready !== false) timerRef.current = setTimeout(function() {
                fetchInstance.setState({
                    loading: true
                });
            }, loadingDelay);
            return {
                loading: false
            };
        },
        onFinally: function() {
            cancelTimeout();
        },
        onCancel: function() {
            cancelTimeout();
        }
    };
};
var _default = useLoadingDelayPlugin;

},
"node_modules/ahooks/es/useRequest/src/plugins/usePollingPlugin.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
var _isDocumentVisible = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js"));
var _subscribeReVisible = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/utils/subscribeReVisible.js"));
var usePollingPlugin = function(fetchInstance, _a) {
    var pollingInterval = _a.pollingInterval, _b = _a.pollingWhenHidden, pollingWhenHidden = _b === void 0 ? true : _b, _c = _a.pollingErrorRetryCount, pollingErrorRetryCount = _c === void 0 ? -1 : _c;
    var timerRef = (0, _react.useRef)(undefined);
    var unsubscribeRef = (0, _react.useRef)(undefined);
    var countRef = (0, _react.useRef)(0);
    var stopPolling = function() {
        var _a;
        if (timerRef.current) clearTimeout(timerRef.current);
        (_a = unsubscribeRef.current) === null || _a === void 0 || _a.call(unsubscribeRef);
    };
    (0, _useUpdateEffect.default)(function() {
        if (!pollingInterval) stopPolling();
    }, [
        pollingInterval
    ]);
    if (!pollingInterval) return {};
    return {
        onBefore: function() {
            stopPolling();
        },
        onError: function() {
            countRef.current += 1;
        },
        onSuccess: function() {
            countRef.current = 0;
        },
        onFinally: function() {
            if (pollingErrorRetryCount === -1 || pollingErrorRetryCount !== -1 && countRef.current <= pollingErrorRetryCount) timerRef.current = setTimeout(function() {
                // if pollingWhenHidden = false && document is hidden, then stop polling and subscribe revisible
                if (!pollingWhenHidden && !(0, _isDocumentVisible.default)()) unsubscribeRef.current = (0, _subscribeReVisible.default)(function() {
                    fetchInstance.refresh();
                });
                else fetchInstance.refresh();
            }, pollingInterval);
            else countRef.current = 0;
        },
        onCancel: function() {
            stopPolling();
        }
    };
};
var _default = usePollingPlugin;

},
"node_modules/ahooks/es/useRequest/src/plugins/useRefreshOnWindowFocusPlugin.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var _limit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/utils/limit.js"));
var _subscribeFocus = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/utils/subscribeFocus.js"));
var useRefreshOnWindowFocusPlugin = function(fetchInstance, _a) {
    var refreshOnWindowFocus = _a.refreshOnWindowFocus, _b = _a.focusTimespan, focusTimespan = _b === void 0 ? 5000 : _b;
    var unsubscribeRef = (0, _react.useRef)(undefined);
    var stopSubscribe = function() {
        var _a;
        (_a = unsubscribeRef.current) === null || _a === void 0 || _a.call(unsubscribeRef);
    };
    (0, _react.useEffect)(function() {
        if (refreshOnWindowFocus) {
            var limitRefresh_1 = (0, _limit.default)(fetchInstance.refresh.bind(fetchInstance), focusTimespan);
            unsubscribeRef.current = (0, _subscribeFocus.default)(function() {
                limitRefresh_1();
            });
        }
        return function() {
            stopSubscribe();
        };
    }, [
        refreshOnWindowFocus,
        focusTimespan
    ]);
    (0, _useUnmount.default)(function() {
        stopSubscribe();
    });
    return {};
};
var _default = useRefreshOnWindowFocusPlugin;

},
"node_modules/ahooks/es/useRequest/src/plugins/useRetryPlugin.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var useRetryPlugin = function(fetchInstance, _a) {
    var retryInterval = _a.retryInterval, retryCount = _a.retryCount;
    var timerRef = (0, _react.useRef)(undefined);
    var countRef = (0, _react.useRef)(0);
    var triggerByRetry = (0, _react.useRef)(false);
    if (!retryCount) return {};
    return {
        onBefore: function() {
            if (!triggerByRetry.current) countRef.current = 0;
            triggerByRetry.current = false;
            if (timerRef.current) clearTimeout(timerRef.current);
        },
        onSuccess: function() {
            countRef.current = 0;
        },
        onError: function() {
            countRef.current += 1;
            if (retryCount === -1 || countRef.current <= retryCount) {
                // Exponential backoff
                var timeout = retryInterval !== null && retryInterval !== void 0 ? retryInterval : Math.min(1000 * Math.pow(2, countRef.current), 30000);
                timerRef.current = setTimeout(function() {
                    triggerByRetry.current = true;
                    fetchInstance.refresh();
                }, timeout);
            } else countRef.current = 0;
        },
        onCancel: function() {
            countRef.current = 0;
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    };
};
var _default = useRetryPlugin;

},
"node_modules/ahooks/es/useRequest/src/plugins/useThrottlePlugin.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _throttle = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/lodash/throttle.js"));
var _react = __mako_require__("node_modules/react/index.js");
var useThrottlePlugin = function(fetchInstance, _a) {
    var throttleWait = _a.throttleWait, throttleLeading = _a.throttleLeading, throttleTrailing = _a.throttleTrailing;
    var throttledRef = (0, _react.useRef)(undefined);
    var options = {};
    if (throttleLeading !== undefined) options.leading = throttleLeading;
    if (throttleTrailing !== undefined) options.trailing = throttleTrailing;
    (0, _react.useEffect)(function() {
        if (throttleWait) {
            var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);
            throttledRef.current = (0, _throttle.default)(function(callback) {
                callback();
            }, throttleWait, options);
            // throttle runAsync should be promise
            // https://github.com/lodash/lodash/issues/4400#issuecomment-834800398
            fetchInstance.runAsync = function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                return new Promise(function(resolve, reject) {
                    var _a;
                    (_a = throttledRef.current) === null || _a === void 0 || _a.call(throttledRef, function() {
                        _originRunAsync_1.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args), false)).then(resolve).catch(reject);
                    });
                });
            };
            return function() {
                var _a;
                fetchInstance.runAsync = _originRunAsync_1;
                (_a = throttledRef.current) === null || _a === void 0 || _a.cancel();
            };
        }
    }, [
        throttleWait,
        throttleLeading,
        throttleTrailing
    ]);
    if (!throttleWait) return {};
    return {
        onCancel: function() {
            var _a;
            (_a = throttledRef.current) === null || _a === void 0 || _a.cancel();
        }
    };
};
var _default = useThrottlePlugin;

},
"node_modules/ahooks/es/useRequest/src/useRequest.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _useAutoRunPlugin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/plugins/useAutoRunPlugin.js"));
var _useCachePlugin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/plugins/useCachePlugin.js"));
var _useDebouncePlugin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/plugins/useDebouncePlugin.js"));
var _useLoadingDelayPlugin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/plugins/useLoadingDelayPlugin.js"));
var _usePollingPlugin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/plugins/usePollingPlugin.js"));
var _useRefreshOnWindowFocusPlugin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/plugins/useRefreshOnWindowFocusPlugin.js"));
var _useRetryPlugin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/plugins/useRetryPlugin.js"));
var _useThrottlePlugin = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/plugins/useThrottlePlugin.js"));
var _useRequestImplement = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/useRequestImplement.js"));
// function useRequest<TData, TParams extends any[], TFormated, TTFormated extends TFormated = any>(
//   service: Service<TData, TParams>,
//   options: OptionsWithFormat<TData, TParams, TFormated, TTFormated>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TFormated, TParams>
// function useRequest<TData, TParams extends any[]>(
//   service: Service<TData, TParams>,
//   options?: OptionsWithoutFormat<TData, TParams>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TData, TParams>
function useRequest(service, options, plugins) {
    return (0, _useRequestImplement.default)(service, options, (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(plugins || []), false), [
        _useDebouncePlugin.default,
        _useLoadingDelayPlugin.default,
        _usePollingPlugin.default,
        _useRefreshOnWindowFocusPlugin.default,
        _useThrottlePlugin.default,
        _useAutoRunPlugin.default,
        _useCachePlugin.default,
        _useRetryPlugin.default
    ], false));
}
var _default = useRequest;

},
"node_modules/ahooks/es/useRequest/src/useRequestImplement.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _useCreation = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useCreation/index.js"));
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useMount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMount/index.js"));
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var _useUpdate = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdate/index.js"));
var _isDev = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isDev.js"));
var _Fetch = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/Fetch.js"));
function useRequestImplement(service, options, plugins) {
    if (options === void 0) options = {};
    if (plugins === void 0) plugins = [];
    var _a = options.manual, manual = _a === void 0 ? false : _a, _b = options.ready, ready = _b === void 0 ? true : _b, rest = (0, _tslib.__rest)(options, [
        "manual",
        "ready"
    ]);
    if (_isDev.default) {
        if (options.defaultParams && !Array.isArray(options.defaultParams)) console.warn("expected defaultParams is array, got ".concat(typeof options.defaultParams));
    }
    var fetchOptions = (0, _tslib.__assign)({
        manual: manual,
        ready: ready
    }, rest);
    var serviceRef = (0, _useLatest.default)(service);
    var update = (0, _useUpdate.default)();
    var fetchInstance = (0, _useCreation.default)(function() {
        var initState = plugins.map(function(p) {
            var _a;
            return (_a = p === null || p === void 0 ? void 0 : p.onInit) === null || _a === void 0 ? void 0 : _a.call(p, fetchOptions);
        }).filter(Boolean);
        return new _Fetch.default(serviceRef, fetchOptions, update, Object.assign.apply(Object, (0, _tslib.__spreadArray)([
            {}
        ], (0, _tslib.__read)(initState), false)));
    }, []);
    fetchInstance.options = fetchOptions;
    // run all plugins hooks
    fetchInstance.pluginImpls = plugins.map(function(p) {
        return p(fetchInstance, fetchOptions);
    });
    (0, _useMount.default)(function() {
        if (!manual && ready) {
            // useCachePlugin can set fetchInstance.state.params from cache when init
            var params = fetchInstance.state.params || options.defaultParams || [];
            // @ts-ignore
            fetchInstance.run.apply(fetchInstance, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(params), false));
        }
    });
    (0, _useUnmount.default)(function() {
        fetchInstance.cancel();
    });
    return {
        loading: fetchInstance.state.loading,
        data: fetchInstance.state.data,
        error: fetchInstance.state.error,
        params: fetchInstance.state.params || [],
        cancel: (0, _useMemoizedFn.default)(fetchInstance.cancel.bind(fetchInstance)),
        refresh: (0, _useMemoizedFn.default)(fetchInstance.refresh.bind(fetchInstance)),
        refreshAsync: (0, _useMemoizedFn.default)(fetchInstance.refreshAsync.bind(fetchInstance)),
        run: (0, _useMemoizedFn.default)(fetchInstance.run.bind(fetchInstance)),
        runAsync: (0, _useMemoizedFn.default)(fetchInstance.runAsync.bind(fetchInstance)),
        mutate: (0, _useMemoizedFn.default)(fetchInstance.mutate.bind(fetchInstance))
    };
}
var _default = useRequestImplement;

},
"node_modules/ahooks/es/useRequest/src/utils/cache.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    clearCache: function() {
        return clearCache;
    },
    getCache: function() {
        return getCache;
    },
    setCache: function() {
        return setCache;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var cache = new Map();
var setCache = function(key, cacheTime, cachedData) {
    var currentCache = cache.get(key);
    if (currentCache === null || currentCache === void 0 ? void 0 : currentCache.timer) clearTimeout(currentCache.timer);
    var timer = undefined;
    if (cacheTime > -1) // if cache out, clear it
    timer = setTimeout(function() {
        cache.delete(key);
    }, cacheTime);
    cache.set(key, (0, _tslib.__assign)((0, _tslib.__assign)({}, cachedData), {
        timer: timer
    }));
};
var getCache = function(key) {
    return cache.get(key);
};
var clearCache = function(key) {
    if (key) {
        var cacheKeys = Array.isArray(key) ? key : [
            key
        ];
        cacheKeys.forEach(function(cacheKey) {
            return cache.delete(cacheKey);
        });
    } else cache.clear();
};

},
"node_modules/ahooks/es/useRequest/src/utils/cachePromise.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    getCachePromise: function() {
        return getCachePromise;
    },
    setCachePromise: function() {
        return setCachePromise;
    }
});
var cachePromise = new Map();
var getCachePromise = function(cacheKey) {
    return cachePromise.get(cacheKey);
};
var setCachePromise = function(cacheKey, promise) {
    // Should cache the same promise, cannot be promise.finally
    // Because the promise.finally will change the reference of the promise
    cachePromise.set(cacheKey, promise);
    // no use promise.finally for compatibility
    promise.then(function(res) {
        cachePromise.delete(cacheKey);
        return res;
    }).catch(function() {
        cachePromise.delete(cacheKey);
    });
};

},
"node_modules/ahooks/es/useRequest/src/utils/cacheSubscribe.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    subscribe: function() {
        return subscribe;
    },
    trigger: function() {
        return trigger;
    }
});
var listeners = {};
var trigger = function(key, data) {
    if (listeners[key]) listeners[key].forEach(function(item) {
        return item(data);
    });
};
var subscribe = function(key, listener) {
    if (!listeners[key]) listeners[key] = [];
    listeners[key].push(listener);
    return function unsubscribe() {
        var index = listeners[key].indexOf(listener);
        listeners[key].splice(index, 1);
    };
};

},
"node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return isDocumentVisible;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
function isDocumentVisible() {
    if (_isBrowser.default) return document.visibilityState !== 'hidden';
    return true;
}

},
"node_modules/ahooks/es/useRequest/src/utils/isOnline.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var isOnline = function() {
    if (_isBrowser.default && typeof navigator.onLine !== 'undefined') return navigator.onLine;
    return true;
};
var _default = isOnline;

},
"node_modules/ahooks/es/useRequest/src/utils/limit.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return limit;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
function limit(fn, timespan) {
    var pending = false;
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (pending) return;
        pending = true;
        fn.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args), false));
        setTimeout(function() {
            pending = false;
        }, timespan);
    };
}

},
"node_modules/ahooks/es/useRequest/src/utils/subscribeFocus.js": function (module, exports, __mako_require__){
// from swr
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var _isDocumentVisible = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js"));
var _isOnline = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/utils/isOnline.js"));
var listeners = new Set();
function subscribe(listener) {
    listeners.add(listener);
    return function unsubscribe() {
        listeners.has(listener) && listeners.delete(listener);
    };
}
if (_isBrowser.default) {
    var revalidate = function() {
        if (!(0, _isDocumentVisible.default)() || !(0, _isOnline.default)()) return;
        listeners.forEach(function(listener) {
            return listener();
        });
    };
    window.addEventListener('visibilitychange', revalidate, false);
    window.addEventListener('focus', revalidate, false);
}
var _default = subscribe;

},
"node_modules/ahooks/es/useRequest/src/utils/subscribeReVisible.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var _isDocumentVisible = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js"));
var listeners = new Set();
function subscribe(listener) {
    listeners.add(listener);
    return function unsubscribe() {
        listeners.has(listener) && listeners.delete(listener);
    };
}
if (_isBrowser.default) {
    var revalidate = function() {
        if (!(0, _isDocumentVisible.default)()) return;
        listeners.forEach(function(listener) {
            return listener();
        });
    };
    window.addEventListener('visibilitychange', revalidate, false);
}
var _default = subscribe;

},
"node_modules/ahooks/es/useResetState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useCreation = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useCreation/index.js"));
var useResetState = function(initialState) {
    var initialStateRef = (0, _react.useRef)(initialState);
    var initialStateMemo = (0, _useCreation.default)(function() {
        return (0, _utils.isFunction)(initialStateRef.current) ? initialStateRef.current() : initialStateRef.current;
    }, []);
    var _a = (0, _tslib.__read)((0, _react.useState)(initialStateMemo), 2), state = _a[0], setState = _a[1];
    var resetState = (0, _useMemoizedFn.default)(function() {
        setState(initialStateMemo);
    });
    return [
        state,
        setState,
        resetState
    ];
};
var _default = useResetState;

},
"node_modules/ahooks/es/useResponsive/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    configResponsive: function() {
        return configResponsive;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var subscribers = new Set();
var info;
var responsiveConfig = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
};
function handleResize() {
    var e_1, _a;
    var oldInfo = info;
    calculate();
    if (oldInfo === info) return;
    try {
        for(var subscribers_1 = (0, _tslib.__values)(subscribers), subscribers_1_1 = subscribers_1.next(); !subscribers_1_1.done; subscribers_1_1 = subscribers_1.next()){
            var subscriber = subscribers_1_1.value;
            subscriber();
        }
    } catch (e_1_1) {
        e_1 = {
            error: e_1_1
        };
    } finally{
        try {
            if (subscribers_1_1 && !subscribers_1_1.done && (_a = subscribers_1.return)) _a.call(subscribers_1);
        } finally{
            if (e_1) throw e_1.error;
        }
    }
}
var listening = false;
function calculate() {
    var e_2, _a;
    var width = window.innerWidth;
    var newInfo = {};
    var shouldUpdate = false;
    try {
        for(var _b = (0, _tslib.__values)(Object.keys(responsiveConfig)), _c = _b.next(); !_c.done; _c = _b.next()){
            var key = _c.value;
            newInfo[key] = width >= responsiveConfig[key];
            if (newInfo[key] !== info[key]) shouldUpdate = true;
        }
    } catch (e_2_1) {
        e_2 = {
            error: e_2_1
        };
    } finally{
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally{
            if (e_2) throw e_2.error;
        }
    }
    if (shouldUpdate) info = newInfo;
}
function configResponsive(config) {
    responsiveConfig = config;
    if (info) calculate();
}
function useResponsive() {
    if (_isBrowser.default && !listening) {
        info = {};
        calculate();
        window.addEventListener('resize', handleResize);
        listening = true;
    }
    var _a = (0, _tslib.__read)((0, _react.useState)(info), 2), state = _a[0], setState = _a[1];
    (0, _react.useEffect)(function() {
        if (!_isBrowser.default) return;
        // In React 18's StrictMode, useEffect perform twice, resize listener is remove, so handleResize is never perform.
        // https://github.com/alibaba/hooks/issues/1910
        if (!listening) window.addEventListener('resize', handleResize);
        var subscriber = function() {
            setState(info);
        };
        subscribers.add(subscriber);
        return function() {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                window.removeEventListener('resize', handleResize);
                listening = false;
            }
        };
    }, []);
    return state;
}
var _default = useResponsive;

},
"node_modules/ahooks/es/useSafeState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useUnmountedRef = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmountedRef/index.js"));
function useSafeState(initialState) {
    var unmountedRef = (0, _useUnmountedRef.default)();
    var _a = (0, _tslib.__read)((0, _react.useState)(initialState), 2), state = _a[0], setState = _a[1];
    var setCurrentState = (0, _react.useCallback)(function(currentState) {
        /** if component is unmounted, stop update */ if (unmountedRef.current) return;
        setState(currentState);
    }, []);
    return [
        state,
        setCurrentState
    ];
}
var _default = useSafeState;

},
"node_modules/ahooks/es/useScroll/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _useRafState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRafState/index.js"));
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
function useScroll(target, shouldUpdate) {
    if (shouldUpdate === void 0) shouldUpdate = function() {
        return true;
    };
    var _a = (0, _tslib.__read)((0, _useRafState.default)(), 2), position = _a[0], setPosition = _a[1];
    var shouldUpdateRef = (0, _useLatest.default)(shouldUpdate);
    (0, _useEffectWithTarget.default)(function() {
        var el = (0, _domTarget.getTargetElement)(target, document);
        if (!el) return;
        var updatePosition = function() {
            var newPosition;
            if (el === document) {
                if (document.scrollingElement) newPosition = {
                    left: document.scrollingElement.scrollLeft,
                    top: document.scrollingElement.scrollTop
                };
                else // When in quirks mode, the scrollingElement attribute returns the HTML body element if it exists and is potentially scrollable, otherwise it returns null.
                // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/scrollingElement
                // https://stackoverflow.com/questions/28633221/document-body-scrolltop-firefox-returns-0-only-js
                newPosition = {
                    left: Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft),
                    top: Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
                };
            } else newPosition = {
                left: el.scrollLeft,
                top: el.scrollTop
            };
            if (shouldUpdateRef.current(newPosition)) setPosition(newPosition);
        };
        updatePosition();
        el.addEventListener('scroll', updatePosition);
        return function() {
            el.removeEventListener('scroll', updatePosition);
        };
    }, [], target);
    return position;
}
var _default = useScroll;

},
"node_modules/ahooks/es/useSelections/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _isPlainObject = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/lodash/isPlainObject.js"));
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _react = __mako_require__("node_modules/react/index.js");
function useSelections(items, options) {
    var _a, _b;
    var defaultSelected = [];
    var itemKey;
    if (Array.isArray(options)) defaultSelected = options;
    else if ((0, _isPlainObject.default)(options)) {
        defaultSelected = (_a = options === null || options === void 0 ? void 0 : options.defaultSelected) !== null && _a !== void 0 ? _a : defaultSelected;
        itemKey = (_b = options === null || options === void 0 ? void 0 : options.itemKey) !== null && _b !== void 0 ? _b : itemKey;
    }
    var getKey = function(item) {
        if ((0, _utils.isFunction)(itemKey)) return itemKey(item);
        if ((0, _utils.isString)(itemKey) && (0, _isPlainObject.default)(item)) return item[itemKey];
        return item;
    };
    var _c = (0, _tslib.__read)((0, _react.useState)(defaultSelected), 2), selected = _c[0], setSelected = _c[1];
    var selectedMap = (0, _react.useMemo)(function() {
        var keyToItemMap = new Map();
        if (!Array.isArray(selected)) return keyToItemMap;
        selected.forEach(function(item) {
            keyToItemMap.set(getKey(item), item);
        });
        return keyToItemMap;
    }, [
        selected
    ]);
    var isSelected = function(item) {
        return selectedMap.has(getKey(item));
    };
    var select = function(item) {
        selectedMap.set(getKey(item), item);
        setSelected(Array.from(selectedMap.values()));
    };
    var unSelect = function(item) {
        selectedMap.delete(getKey(item));
        setSelected(Array.from(selectedMap.values()));
    };
    var toggle = function(item) {
        if (isSelected(item)) unSelect(item);
        else select(item);
    };
    var selectAll = function() {
        items.forEach(function(item) {
            selectedMap.set(getKey(item), item);
        });
        setSelected(Array.from(selectedMap.values()));
    };
    var unSelectAll = function() {
        items.forEach(function(item) {
            selectedMap.delete(getKey(item));
        });
        setSelected(Array.from(selectedMap.values()));
    };
    var noneSelected = (0, _react.useMemo)(function() {
        return items.every(function(item) {
            return !selectedMap.has(getKey(item));
        });
    }, [
        items,
        selectedMap
    ]);
    var allSelected = (0, _react.useMemo)(function() {
        return items.every(function(item) {
            return selectedMap.has(getKey(item));
        }) && !noneSelected;
    }, [
        items,
        selectedMap,
        noneSelected
    ]);
    var partiallySelected = (0, _react.useMemo)(function() {
        return !noneSelected && !allSelected;
    }, [
        noneSelected,
        allSelected
    ]);
    var toggleAll = function() {
        return allSelected ? unSelectAll() : selectAll();
    };
    var clearAll = function() {
        selectedMap.clear();
        setSelected([]);
    };
    return {
        selected: selected,
        noneSelected: noneSelected,
        allSelected: allSelected,
        partiallySelected: partiallySelected,
        setSelected: setSelected,
        isSelected: isSelected,
        select: (0, _useMemoizedFn.default)(select),
        unSelect: (0, _useMemoizedFn.default)(unSelect),
        toggle: (0, _useMemoizedFn.default)(toggle),
        selectAll: (0, _useMemoizedFn.default)(selectAll),
        unSelectAll: (0, _useMemoizedFn.default)(unSelectAll),
        clearAll: (0, _useMemoizedFn.default)(clearAll),
        toggleAll: (0, _useMemoizedFn.default)(toggleAll)
    };
}
var _default = useSelections;

},
"node_modules/ahooks/es/useSessionStorageState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _createUseStorageState = __mako_require__("node_modules/ahooks/es/createUseStorageState/index.js");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var useSessionStorageState = (0, _createUseStorageState.createUseStorageState)(function() {
    return _isBrowser.default ? sessionStorage : undefined;
});
var _default = useSessionStorageState;

},
"node_modules/ahooks/es/useSet/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
function useSet(initialValue) {
    var getInitValue = function() {
        return new Set(initialValue);
    };
    var _a = (0, _tslib.__read)((0, _react.useState)(getInitValue), 2), set = _a[0], setSet = _a[1];
    var updateSet = function(updater) {
        setSet(function(prevSet) {
            return updater(new Set(prevSet));
        });
    };
    var add = function(key) {
        if (set.has(key)) return;
        updateSet(function(newSet) {
            newSet.add(key);
            return newSet;
        });
    };
    var remove = function(key) {
        if (!set.has(key)) return;
        updateSet(function(newSet) {
            newSet.delete(key);
            return newSet;
        });
    };
    var reset = function() {
        return setSet(getInitValue());
    };
    return [
        set,
        {
            add: (0, _useMemoizedFn.default)(add),
            remove: (0, _useMemoizedFn.default)(remove),
            reset: (0, _useMemoizedFn.default)(reset)
        }
    ];
}
var _default = useSet;

},
"node_modules/ahooks/es/useSetState/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var useSetState = function(initialState) {
    var _a = (0, _tslib.__read)((0, _react.useState)(initialState), 2), state = _a[0], setState = _a[1];
    var setMergeState = (0, _useMemoizedFn.default)(function(patch) {
        setState(function(prevState) {
            var newState = (0, _utils.isFunction)(patch) ? patch(prevState) : patch;
            return newState ? (0, _tslib.__assign)((0, _tslib.__assign)({}, prevState), newState) : prevState;
        });
    });
    return [
        state,
        setMergeState
    ];
};
var _default = useSetState;

},
"node_modules/ahooks/es/useSize/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _resizeobserverpolyfill = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"));
var _useRafState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useRafState/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useIsomorphicLayoutEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useIsomorphicLayoutEffectWithTarget.js"));
function useSize(target) {
    var _a = (0, _tslib.__read)((0, _useRafState.default)(function() {
        var el = (0, _domTarget.getTargetElement)(target);
        return el ? {
            width: el.clientWidth,
            height: el.clientHeight
        } : undefined;
    }), 2), state = _a[0], setState = _a[1];
    (0, _useIsomorphicLayoutEffectWithTarget.default)(function() {
        var el = (0, _domTarget.getTargetElement)(target);
        if (!el) return;
        var resizeObserver = new _resizeobserverpolyfill.default(function(entries) {
            entries.forEach(function(entry) {
                var _a = entry.target, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
                setState({
                    width: clientWidth,
                    height: clientHeight
                });
            });
        });
        resizeObserver.observe(el);
        return function() {
            resizeObserver.disconnect();
        };
    }, [], target);
    return state;
}
var _default = useSize;

},
"node_modules/ahooks/es/useTextSelection/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
var initRect = {
    top: NaN,
    left: NaN,
    bottom: NaN,
    right: NaN,
    height: NaN,
    width: NaN
};
var initState = (0, _tslib.__assign)({
    text: ''
}, initRect);
function getRectFromSelection(selection) {
    if (!selection) return initRect;
    if (selection.rangeCount < 1) return initRect;
    var range = selection.getRangeAt(0);
    var _a = range.getBoundingClientRect(), height = _a.height, width = _a.width, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        height: height,
        width: width,
        top: top,
        left: left,
        right: right,
        bottom: bottom
    };
}
function useTextSelection(target) {
    var _a = (0, _tslib.__read)((0, _react.useState)(initState), 2), state = _a[0], setState = _a[1];
    var stateRef = (0, _react.useRef)(state);
    var isInRangeRef = (0, _react.useRef)(false);
    stateRef.current = state;
    (0, _useEffectWithTarget.default)(function() {
        var el = (0, _domTarget.getTargetElement)(target, document);
        if (!el) return;
        var mouseupHandler = function() {
            var selObj = null;
            var text = '';
            var rect = initRect;
            if (!window.getSelection) return;
            selObj = window.getSelection();
            text = selObj ? selObj.toString() : '';
            if (text && isInRangeRef.current) {
                rect = getRectFromSelection(selObj);
                setState((0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, state), {
                    text: text
                }), rect));
            }
        };
        // 任意点击都需要清空之前的 range
        var mousedownHandler = function(e) {
            // 如果是鼠标右键需要跳过 这样选中的数据就不会被清空
            if (e.button === 2) return;
            if (!window.getSelection) return;
            if (stateRef.current.text) setState((0, _tslib.__assign)({}, initState));
            isInRangeRef.current = false;
            var selObj = window.getSelection();
            if (!selObj) return;
            selObj.removeAllRanges();
            isInRangeRef.current = el.contains(e.target);
        };
        el.addEventListener('mouseup', mouseupHandler);
        document.addEventListener('mousedown', mousedownHandler);
        return function() {
            el.removeEventListener('mouseup', mouseupHandler);
            document.removeEventListener('mousedown', mousedownHandler);
        };
    }, [], target);
    return state;
}
var _default = useTextSelection;

},
"node_modules/ahooks/es/useTheme/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    ThemeMode: function() {
        return ThemeMode;
    },
    default: function() {
        return useTheme;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var ThemeMode;
(function(ThemeMode) {
    ThemeMode["LIGHT"] = "light";
    ThemeMode["DARK"] = "dark";
    ThemeMode["SYSTEM"] = "system";
})(ThemeMode || (ThemeMode = {}));
var useCurrentTheme = function() {
    var matchMedia = _isBrowser.default ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;
    var _a = (0, _tslib.__read)((0, _react.useState)(function() {
        if (_isBrowser.default) return (matchMedia === null || matchMedia === void 0 ? void 0 : matchMedia.matches) ? ThemeMode.DARK : ThemeMode.LIGHT;
        else return ThemeMode.LIGHT;
    }), 2), theme = _a[0], setTheme = _a[1];
    (0, _react.useEffect)(function() {
        var onThemeChange = function(event) {
            if (event.matches) setTheme(ThemeMode.DARK);
            else setTheme(ThemeMode.LIGHT);
        };
        matchMedia === null || matchMedia === void 0 || matchMedia.addEventListener('change', onThemeChange);
        return function() {
            matchMedia === null || matchMedia === void 0 || matchMedia.removeEventListener('change', onThemeChange);
        };
    }, []);
    return theme;
};
function useTheme(options) {
    if (options === void 0) options = {};
    var localStorageKey = options.localStorageKey;
    var _a = (0, _tslib.__read)((0, _react.useState)(function() {
        var preferredThemeMode = (localStorageKey === null || localStorageKey === void 0 ? void 0 : localStorageKey.length) && localStorage.getItem(localStorageKey);
        return preferredThemeMode || ThemeMode.SYSTEM;
    }), 2), themeMode = _a[0], setThemeMode = _a[1];
    var setThemeModeWithLocalStorage = function(mode) {
        setThemeMode(mode);
        if (localStorageKey === null || localStorageKey === void 0 ? void 0 : localStorageKey.length) localStorage.setItem(localStorageKey, mode);
    };
    var currentTheme = useCurrentTheme();
    var theme = themeMode === ThemeMode.SYSTEM ? currentTheme : themeMode;
    return {
        theme: theme,
        themeMode: themeMode,
        setThemeMode: (0, _useMemoizedFn.default)(setThemeModeWithLocalStorage)
    };
}

},
"node_modules/ahooks/es/useThrottle/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useThrottleFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useThrottleFn/index.js"));
function useThrottle(value, options) {
    var _a = (0, _tslib.__read)((0, _react.useState)(value), 2), throttled = _a[0], setThrottled = _a[1];
    var run = (0, _useThrottleFn.default)(function() {
        setThrottled(value);
    }, options).run;
    (0, _react.useEffect)(function() {
        run();
    }, [
        value
    ]);
    return throttled;
}
var _default = useThrottle;

},
"node_modules/ahooks/es/useThrottleEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useThrottleFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useThrottleFn/index.js"));
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
function useThrottleEffect(effect, deps, options) {
    var _a = (0, _tslib.__read)((0, _react.useState)({}), 2), flag = _a[0], setFlag = _a[1];
    var run = (0, _useThrottleFn.default)(function() {
        setFlag({});
    }, options).run;
    (0, _react.useEffect)(function() {
        return run();
    }, deps);
    (0, _useUpdateEffect.default)(effect, [
        flag
    ]);
}
var _default = useThrottleEffect;

},
"node_modules/ahooks/es/useThrottleFn/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _throttle = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/lodash/throttle.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _isDev = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isDev.js"));
function useThrottleFn(fn, options) {
    var _a;
    if (_isDev.default) {
        if (!(0, _utils.isFunction)(fn)) console.error("useThrottleFn expected parameter is a function, got ".concat(typeof fn));
    }
    var fnRef = (0, _useLatest.default)(fn);
    var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
    var throttled = (0, _react.useMemo)(function() {
        return (0, _throttle.default)(function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return fnRef.current.apply(fnRef, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args), false));
        }, wait, options);
    }, []);
    (0, _useUnmount.default)(function() {
        throttled.cancel();
    });
    return {
        run: throttled,
        cancel: throttled.cancel,
        flush: throttled.flush
    };
}
var _default = useThrottleFn;

},
"node_modules/ahooks/es/useTimeout/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var useTimeout = function(fn, delay) {
    var timerCallback = (0, _useMemoizedFn.default)(fn);
    var timerRef = (0, _react.useRef)(null);
    var clear = (0, _react.useCallback)(function() {
        if (timerRef.current) clearTimeout(timerRef.current);
    }, []);
    (0, _react.useEffect)(function() {
        if (!(0, _utils.isNumber)(delay) || delay < 0) return;
        timerRef.current = setTimeout(timerCallback, delay);
        return clear;
    }, [
        delay
    ]);
    return clear;
};
var _default = useTimeout;

},
"node_modules/ahooks/es/useTitle/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var DEFAULT_OPTIONS = {
    restoreOnUnmount: false
};
function useTitle(title, options) {
    if (options === void 0) options = DEFAULT_OPTIONS;
    var titleRef = (0, _react.useRef)(_isBrowser.default ? document.title : '');
    (0, _react.useEffect)(function() {
        document.title = title;
    }, [
        title
    ]);
    (0, _useUnmount.default)(function() {
        if (options.restoreOnUnmount) document.title = titleRef.current;
    });
}
var _default = useTitle;

},
"node_modules/ahooks/es/useToggle/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
function useToggle(defaultValue, reverseValue) {
    if (defaultValue === void 0) defaultValue = false;
    var _a = (0, _tslib.__read)((0, _react.useState)(defaultValue), 2), state = _a[0], setState = _a[1];
    var actions = (0, _react.useMemo)(function() {
        var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
        var toggle = function() {
            return setState(function(s) {
                return s === defaultValue ? reverseValueOrigin : defaultValue;
            });
        };
        var set = function(value) {
            return setState(value);
        };
        var setLeft = function() {
            return setState(defaultValue);
        };
        var setRight = function() {
            return setState(reverseValueOrigin);
        };
        return {
            toggle: toggle,
            set: set,
            setLeft: setLeft,
            setRight: setRight
        };
    // useToggle ignore value change
    // }, [defaultValue, reverseValue]);
    }, []);
    return [
        state,
        actions
    ];
}
var _default = useToggle;

},
"node_modules/ahooks/es/useTrackedEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var diffTwoDeps = function(deps1, deps2) {
    // Let's do a reference equality check on 2 dependency list.
    // If deps1 is defined, we iterate over deps1 and do comparison on each element with equivalent element from deps2
    // As this func is used only in this hook, we assume 2 deps always have same length.
    return deps1 ? deps1.map(function(_, idx) {
        return !Object.is(deps1[idx], deps2 === null || deps2 === void 0 ? void 0 : deps2[idx]) ? idx : -1;
    }).filter(function(ele) {
        return ele >= 0;
    }) : deps2 ? deps2.map(function(_, idx) {
        return idx;
    }) : [];
};
var useTrackedEffect = function(effect, deps) {
    var previousDepsRef = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(function() {
        var changes = diffTwoDeps(previousDepsRef.current, deps);
        var previousDeps = previousDepsRef.current;
        previousDepsRef.current = deps;
        return effect(changes, previousDeps, deps);
    }, deps);
};
var _default = useTrackedEffect;

},
"node_modules/ahooks/es/useUnmount/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _isDev = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isDev.js"));
var useUnmount = function(fn) {
    if (_isDev.default) {
        if (!(0, _utils.isFunction)(fn)) console.error("useUnmount expected parameter is a function, got ".concat(typeof fn));
    }
    var fnRef = (0, _useLatest.default)(fn);
    (0, _react.useEffect)(function() {
        return function() {
            fnRef.current();
        };
    }, []);
};
var _default = useUnmount;

},
"node_modules/ahooks/es/useUnmountedRef/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var useUnmountedRef = function() {
    var unmountedRef = (0, _react.useRef)(false);
    (0, _react.useEffect)(function() {
        unmountedRef.current = false;
        return function() {
            unmountedRef.current = true;
        };
    }, []);
    return unmountedRef;
};
var _default = useUnmountedRef;

},
"node_modules/ahooks/es/useUpdate/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var useUpdate = function() {
    var _a = (0, _tslib.__read)((0, _react.useState)({}), 2), setState = _a[1];
    return (0, _react.useCallback)(function() {
        return setState({});
    }, []);
};
var _default = useUpdate;

},
"node_modules/ahooks/es/useUpdateEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var _createUpdateEffect = __mako_require__("node_modules/ahooks/es/createUpdateEffect/index.js");
var _default = (0, _createUpdateEffect.createUpdateEffect)(_react.useEffect);

},
"node_modules/ahooks/es/useUpdateLayoutEffect/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var _createUpdateEffect = __mako_require__("node_modules/ahooks/es/createUpdateEffect/index.js");
var _default = (0, _createUpdateEffect.createUpdateEffect)(_react.useLayoutEffect);

},
"node_modules/ahooks/es/useVirtualList/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useEventListener = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useEventListener/index.js"));
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useSize = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useSize/index.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var _utils = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _useUpdateEffect = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUpdateEffect/index.js"));
var useVirtualList = function(list, options) {
    var containerTarget = options.containerTarget, wrapperTarget = options.wrapperTarget, itemHeight = options.itemHeight, _a = options.overscan, overscan = _a === void 0 ? 5 : _a;
    var itemHeightRef = (0, _useLatest.default)(itemHeight);
    var size = (0, _useSize.default)(containerTarget);
    var scrollTriggerByScrollToFunc = (0, _react.useRef)(false);
    var _b = (0, _tslib.__read)((0, _react.useState)([]), 2), targetList = _b[0], setTargetList = _b[1];
    var _c = (0, _tslib.__read)((0, _react.useState)({}), 2), wrapperStyle = _c[0], setWrapperStyle = _c[1];
    var getVisibleCount = function(containerHeight, fromIndex) {
        if ((0, _utils.isNumber)(itemHeightRef.current)) return Math.ceil(containerHeight / itemHeightRef.current);
        var sum = 0;
        var endIndex = 0;
        for(var i = fromIndex; i < list.length; i++){
            var height = itemHeightRef.current(i, list[i]);
            sum += height;
            endIndex = i;
            if (sum >= containerHeight) break;
        }
        return endIndex - fromIndex;
    };
    var getOffset = function(scrollTop) {
        if ((0, _utils.isNumber)(itemHeightRef.current)) return Math.floor(scrollTop / itemHeightRef.current);
        var sum = 0;
        var offset = 0;
        for(var i = 0; i < list.length; i++){
            var height = itemHeightRef.current(i, list[i]);
            sum += height;
            if (sum >= scrollTop) {
                offset = i;
                break;
            }
        }
        return offset + 1;
    };
    // 获取上部高度
    var getDistanceTop = function(index) {
        if ((0, _utils.isNumber)(itemHeightRef.current)) {
            var height_1 = index * itemHeightRef.current;
            return height_1;
        }
        var height = list.slice(0, index).reduce(function(sum, _, i) {
            return sum + itemHeightRef.current(i, list[i]);
        }, 0);
        return height;
    };
    var totalHeight = (0, _react.useMemo)(function() {
        if ((0, _utils.isNumber)(itemHeightRef.current)) return list.length * itemHeightRef.current;
        return list.reduce(function(sum, _, index) {
            return sum + itemHeightRef.current(index, list[index]);
        }, 0);
    }, [
        list
    ]);
    var calculateRange = function() {
        var container = (0, _domTarget.getTargetElement)(containerTarget);
        if (container) {
            var scrollTop = container.scrollTop, clientHeight = container.clientHeight;
            var offset = getOffset(scrollTop);
            var visibleCount = getVisibleCount(clientHeight, offset);
            var start_1 = Math.max(0, offset - overscan);
            var end = Math.min(list.length, offset + visibleCount + overscan);
            var offsetTop = getDistanceTop(start_1);
            setWrapperStyle({
                height: totalHeight - offsetTop + 'px',
                marginTop: offsetTop + 'px'
            });
            setTargetList(list.slice(start_1, end).map(function(ele, index) {
                return {
                    data: ele,
                    index: index + start_1
                };
            }));
        }
    };
    (0, _useUpdateEffect.default)(function() {
        var wrapper = (0, _domTarget.getTargetElement)(wrapperTarget);
        if (wrapper) Object.keys(wrapperStyle).forEach(function(key) {
            return wrapper.style[key] = wrapperStyle[key];
        });
    }, [
        wrapperStyle
    ]);
    (0, _react.useEffect)(function() {
        if (!(size === null || size === void 0 ? void 0 : size.width) || !(size === null || size === void 0 ? void 0 : size.height)) return;
        calculateRange();
    }, [
        size === null || size === void 0 ? void 0 : size.width,
        size === null || size === void 0 ? void 0 : size.height,
        list
    ]);
    (0, _useEventListener.default)('scroll', function(e) {
        if (scrollTriggerByScrollToFunc.current) {
            scrollTriggerByScrollToFunc.current = false;
            return;
        }
        e.preventDefault();
        calculateRange();
    }, {
        target: containerTarget
    });
    var scrollTo = function(index) {
        var container = (0, _domTarget.getTargetElement)(containerTarget);
        if (container) {
            scrollTriggerByScrollToFunc.current = true;
            container.scrollTop = getDistanceTop(index);
            calculateRange();
        }
    };
    return [
        targetList,
        (0, _useMemoizedFn.default)(scrollTo)
    ];
};
var _default = useVirtualList;

},
"node_modules/ahooks/es/useWebSocket/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    ReadyState: function() {
        return ReadyState;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
var _useLatest = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useLatest/index.js"));
var _useMemoizedFn = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useMemoizedFn/index.js"));
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var ReadyState;
(function(ReadyState) {
    ReadyState[ReadyState["Connecting"] = 0] = "Connecting";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["Closing"] = 2] = "Closing";
    ReadyState[ReadyState["Closed"] = 3] = "Closed";
})(ReadyState || (ReadyState = {}));
function useWebSocket(socketUrl, options) {
    if (options === void 0) options = {};
    var _a = options.reconnectLimit, reconnectLimit = _a === void 0 ? 3 : _a, _b = options.reconnectInterval, reconnectInterval = _b === void 0 ? 3000 : _b, _c = options.manual, manual = _c === void 0 ? false : _c, onOpen = options.onOpen, onClose = options.onClose, onMessage = options.onMessage, onError = options.onError, protocols = options.protocols;
    var _d = (0, _tslib.__read)((0, _react.useState)(), 2), latestMessage = _d[0], setLatestMessage = _d[1];
    var _e = (0, _tslib.__read)((0, _react.useState)(ReadyState.Closed), 2), readyState = _e[0], setReadyState = _e[1];
    var onOpenRef = (0, _useLatest.default)(onOpen);
    var onCloseRef = (0, _useLatest.default)(onClose);
    var onMessageRef = (0, _useLatest.default)(onMessage);
    var onErrorRef = (0, _useLatest.default)(onError);
    var readyStateRef = (0, _useLatest.default)(readyState);
    var reconnectTimesRef = (0, _react.useRef)(0);
    var reconnectTimerRef = (0, _react.useRef)(undefined);
    var websocketRef = (0, _react.useRef)(undefined);
    var reconnect = function() {
        var _a;
        if (reconnectTimesRef.current < reconnectLimit && ((_a = websocketRef.current) === null || _a === void 0 ? void 0 : _a.readyState) !== ReadyState.Open) {
            if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
            reconnectTimerRef.current = setTimeout(function() {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                connectWs();
                reconnectTimesRef.current++;
            }, reconnectInterval);
        }
    };
    var connectWs = function() {
        if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
        if (websocketRef.current) websocketRef.current.close();
        var ws = new WebSocket(socketUrl, protocols);
        setReadyState(ReadyState.Connecting);
        ws.onerror = function(event) {
            var _a;
            if (websocketRef.current !== ws) return;
            reconnect();
            (_a = onErrorRef.current) === null || _a === void 0 || _a.call(onErrorRef, event, ws);
            setReadyState(ws.readyState || ReadyState.Closed);
        };
        ws.onopen = function(event) {
            var _a;
            if (websocketRef.current !== ws) return;
            (_a = onOpenRef.current) === null || _a === void 0 || _a.call(onOpenRef, event, ws);
            reconnectTimesRef.current = 0;
            setReadyState(ws.readyState || ReadyState.Open);
        };
        ws.onmessage = function(message) {
            var _a;
            if (websocketRef.current !== ws) return;
            (_a = onMessageRef.current) === null || _a === void 0 || _a.call(onMessageRef, message, ws);
            setLatestMessage(message);
        };
        ws.onclose = function(event) {
            var _a;
            (_a = onCloseRef.current) === null || _a === void 0 || _a.call(onCloseRef, event, ws);
            // closed by server
            if (websocketRef.current === ws) reconnect();
            // closed by disconnect or closed by server
            if (!websocketRef.current || websocketRef.current === ws) setReadyState(ws.readyState || ReadyState.Closed);
        };
        websocketRef.current = ws;
    };
    var sendMessage = function(message) {
        var _a;
        if (readyStateRef.current === ReadyState.Open) (_a = websocketRef.current) === null || _a === void 0 || _a.send(message);
        else throw new Error('WebSocket disconnected');
    };
    var connect = function() {
        reconnectTimesRef.current = 0;
        connectWs();
    };
    var disconnect = function() {
        var _a;
        if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
        reconnectTimesRef.current = reconnectLimit;
        (_a = websocketRef.current) === null || _a === void 0 || _a.close();
        websocketRef.current = undefined;
    };
    (0, _react.useEffect)(function() {
        if (!manual && socketUrl) connect();
    }, [
        socketUrl,
        manual
    ]);
    (0, _useUnmount.default)(function() {
        disconnect();
    });
    return {
        latestMessage: latestMessage,
        sendMessage: (0, _useMemoizedFn.default)(sendMessage),
        connect: (0, _useMemoizedFn.default)(connect),
        disconnect: (0, _useMemoizedFn.default)(disconnect),
        readyState: readyState,
        webSocketIns: websocketRef.current
    };
}
var _default = useWebSocket;

},
"node_modules/ahooks/es/useWhyDidYouUpdate/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _tslib = __mako_require__("node_modules/tslib/tslib.es6.mjs");
var _react = __mako_require__("node_modules/react/index.js");
function useWhyDidYouUpdate(componentName, props) {
    var prevProps = (0, _react.useRef)({});
    (0, _react.useEffect)(function() {
        if (prevProps.current) {
            var allKeys = Object.keys((0, _tslib.__assign)((0, _tslib.__assign)({}, prevProps.current), props));
            var changedProps_1 = {};
            allKeys.forEach(function(key) {
                if (!Object.is(prevProps.current[key], props[key])) changedProps_1[key] = {
                    from: prevProps.current[key],
                    to: props[key]
                };
            });
            if (Object.keys(changedProps_1).length) console.log('[why-did-you-update]', componentName, changedProps_1);
        }
        prevProps.current = props;
    });
}
var _default = useWhyDidYouUpdate;

},
"node_modules/ahooks/es/utils/createEffectWithTarget.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useUnmount = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/useUnmount/index.js"));
var _depsAreSame = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/depsAreSame.js"));
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var createEffectWithTarget = function(useEffectType) {
    /**
     *
     * @param effect
     * @param deps
     * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
     */ var useEffectWithTarget = function(effect, deps, target) {
        var hasInitRef = (0, _react.useRef)(false);
        var lastElementRef = (0, _react.useRef)([]);
        var lastDepsRef = (0, _react.useRef)([]);
        var unLoadRef = (0, _react.useRef)(undefined);
        useEffectType(function() {
            var _a;
            var targets = Array.isArray(target) ? target : [
                target
            ];
            var els = targets.map(function(item) {
                return (0, _domTarget.getTargetElement)(item);
            });
            // init run
            if (!hasInitRef.current) {
                hasInitRef.current = true;
                lastElementRef.current = els;
                lastDepsRef.current = deps;
                unLoadRef.current = effect();
                return;
            }
            if (els.length !== lastElementRef.current.length || !(0, _depsAreSame.default)(lastElementRef.current, els) || !(0, _depsAreSame.default)(lastDepsRef.current, deps)) {
                (_a = unLoadRef.current) === null || _a === void 0 || _a.call(unLoadRef);
                lastElementRef.current = els;
                lastDepsRef.current = deps;
                unLoadRef.current = effect();
            }
        });
        (0, _useUnmount.default)(function() {
            var _a;
            (_a = unLoadRef.current) === null || _a === void 0 || _a.call(unLoadRef);
            // for react-refresh
            hasInitRef.current = false;
        });
    };
    return useEffectWithTarget;
};
var _default = createEffectWithTarget;

},
"node_modules/ahooks/es/utils/depsAreSame.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function depsAreSame(oldDeps, deps) {
    if (oldDeps === deps) return true;
    for(var i = 0; i < oldDeps.length; i++){
        if (!Object.is(oldDeps[i], deps[i])) return false;
    }
    return true;
}
var _default = depsAreSame;

},
"node_modules/ahooks/es/utils/depsEqual.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "depsEqual", {
    enumerable: true,
    get: function() {
        return depsEqual;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _reactfastcompare = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react-fast-compare/index.js"));
var depsEqual = function(aDeps, bDeps) {
    if (aDeps === void 0) aDeps = [];
    if (bDeps === void 0) bDeps = [];
    return (0, _reactfastcompare.default)(aDeps, bDeps);
};

},
"node_modules/ahooks/es/utils/domTarget.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "getTargetElement", {
    enumerable: true,
    get: function() {
        return getTargetElement;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _index = __mako_require__("node_modules/ahooks/es/utils/index.js");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
function getTargetElement(target, defaultElement) {
    if (!_isBrowser.default) return undefined;
    if (!target) return defaultElement;
    var targetElement;
    if ((0, _index.isFunction)(target)) targetElement = target();
    else if ('current' in target) targetElement = target.current;
    else targetElement = target;
    return targetElement;
}

},
"node_modules/ahooks/es/utils/getDocumentOrShadow.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _domTarget = __mako_require__("node_modules/ahooks/es/utils/domTarget.js");
var checkIfAllInShadow = function(targets) {
    return targets.every(function(item) {
        var targetElement = (0, _domTarget.getTargetElement)(item);
        if (!targetElement) return false;
        if (targetElement.getRootNode() instanceof ShadowRoot) return true;
        return false;
    });
};
var getShadow = function(node) {
    if (!node) return document;
    return node.getRootNode();
};
var getDocumentOrShadow = function(target) {
    if (!target || !document.getRootNode) return document;
    var targets = Array.isArray(target) ? target : [
        target
    ];
    if (checkIfAllInShadow(targets)) return getShadow((0, _domTarget.getTargetElement)(targets[0]));
    return document;
};
var _default = getDocumentOrShadow;

},
"node_modules/ahooks/es/utils/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    isBoolean: function() {
        return isBoolean;
    },
    isFunction: function() {
        return isFunction;
    },
    isNumber: function() {
        return isNumber;
    },
    isObject: function() {
        return isObject;
    },
    isString: function() {
        return isString;
    },
    isUndef: function() {
        return isUndef;
    }
});
var isObject = function(value) {
    return value !== null && typeof value === 'object';
};
var isFunction = function(value) {
    return typeof value === 'function';
};
var isString = function(value) {
    return typeof value === 'string';
};
var isBoolean = function(value) {
    return typeof value === 'boolean';
};
var isNumber = function(value) {
    return typeof value === 'number';
};
var isUndef = function(value) {
    return typeof value === 'undefined';
};

},
"node_modules/ahooks/es/utils/isAppleDevice.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(typeof navigator !== 'undefined' ? navigator === null || navigator === void 0 ? void 0 : navigator.platform : '');
var _default = isAppleDevice;

},
"node_modules/ahooks/es/utils/isBrowser.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var _default = isBrowser;

},
"node_modules/ahooks/es/utils/isDev.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var isDev = true;
var _default = isDev;

},
"node_modules/ahooks/es/utils/lodash-polyfill.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "debounce", {
    enumerable: true,
    get: function() {
        return _debounce.default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _debounce = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/lodash/debounce.js"));
const global = __mako_require__("node_modules/node-libs-browser-okam/polyfill/global.js");
function isNodeOrWeb() {
    var freeGlobal = (typeof global === 'undefined' ? 'undefined' : typeof global) == 'object' && global && global.Object === Object && global;
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    return freeGlobal || freeSelf;
}
if (!isNodeOrWeb()) global.Date = Date;

},
"node_modules/ahooks/es/utils/rect.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
__mako_require__.e(exports, {
    getClientHeight: function() {
        return getClientHeight;
    },
    getScrollHeight: function() {
        return getScrollHeight;
    },
    getScrollTop: function() {
        return getScrollTop;
    }
});
var getScrollTop = function(el) {
    if (el === document || el === document.documentElement || el === document.body) return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    return el.scrollTop;
};
var getScrollHeight = function(el) {
    return el.scrollHeight || Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
};
var getClientHeight = function(el) {
    return el.clientHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
};

},
"node_modules/ahooks/es/utils/useDeepCompareWithTarget.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
var _depsEqual = __mako_require__("node_modules/ahooks/es/utils/depsEqual.js");
var useDeepCompareEffectWithTarget = function(effect, deps, target) {
    var ref = (0, _react.useRef)(undefined);
    var signalRef = (0, _react.useRef)(0);
    if (!(0, _depsEqual.depsEqual)(deps, ref.current)) signalRef.current += 1;
    ref.current = deps;
    (0, _useEffectWithTarget.default)(effect, [
        signalRef.current
    ], target);
};
var _default = useDeepCompareEffectWithTarget;

},
"node_modules/ahooks/es/utils/useEffectWithTarget.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _createEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/createEffectWithTarget.js"));
var useEffectWithTarget = (0, _createEffectWithTarget.default)(_react.useEffect);
var _default = useEffectWithTarget;

},
"node_modules/ahooks/es/utils/useIsomorphicLayoutEffectWithTarget.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _isBrowser = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/isBrowser.js"));
var _useEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useEffectWithTarget.js"));
var _useLayoutEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/useLayoutEffectWithTarget.js"));
var useIsomorphicLayoutEffectWithTarget = _isBrowser.default ? _useLayoutEffectWithTarget.default : _useEffectWithTarget.default;
var _default = useIsomorphicLayoutEffectWithTarget;

},
"node_modules/ahooks/es/utils/useLayoutEffectWithTarget.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = __mako_require__("node_modules/react/index.js");
var _createEffectWithTarget = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/ahooks/es/utils/createEffectWithTarget.js"));
var useEffectWithTarget = (0, _createEffectWithTarget.default)(_react.useLayoutEffect);
var _default = useEffectWithTarget;

},
"node_modules/async-validator/dist-web/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return Schema;
    }
});
const process = __mako_require__("node_modules/node-libs-browser-okam/polyfill/process.js");
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
/* eslint no-console:0 */ var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime
if (typeof process !== 'undefined' && process.env && true && typeof window !== 'undefined' && typeof document !== 'undefined') warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined') {
        if (errors.every(function(e) {
            return typeof e === 'string';
        })) console.warn(type, errors);
    }
};
function convertFieldsError(errors) {
    if (!errors || !errors.length) return null;
    var fields = {};
    errors.forEach(function(error) {
        var field = error.field;
        fields[field] = fields[field] || [];
        fields[field].push(error);
    });
    return fields;
}
function format(template) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    var i = 0;
    var len = args.length;
    if (typeof template === 'function') return template.apply(null, args);
    if (typeof template === 'string') {
        var str = template.replace(formatRegExp, function(x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch(x){
                case '%s':
                    return String(args[i++]);
                case '%d':
                    return Number(args[i++]);
                case '%j':
                    try {
                        return JSON.stringify(args[i++]);
                    } catch (_) {
                        return '[Circular]';
                    }
                    break;
                default:
                    return x;
            }
        });
        return str;
    }
    return template;
}
function isNativeStringType(type) {
    return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}
function isEmptyValue(value, type) {
    if (value === undefined || value === null) return true;
    if (type === 'array' && Array.isArray(value) && !value.length) return true;
    if (isNativeStringType(type) && typeof value === 'string' && !value) return true;
    return false;
}
function asyncParallelArray(arr, func, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;
    function count(errors) {
        results.push.apply(results, errors || []);
        total++;
        if (total === arrLength) callback(results);
    }
    arr.forEach(function(a) {
        func(a, count);
    });
}
function asyncSerialArray(arr, func, callback) {
    var index = 0;
    var arrLength = arr.length;
    function next(errors) {
        if (errors && errors.length) {
            callback(errors);
            return;
        }
        var original = index;
        index = index + 1;
        if (original < arrLength) func(arr[original], next);
        else callback([]);
    }
    next([]);
}
function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k) {
        ret.push.apply(ret, objArr[k] || []);
    });
    return ret;
}
var AsyncValidationError = /*#__PURE__*/ function(_Error) {
    _inheritsLoose(AsyncValidationError, _Error);
    function AsyncValidationError(errors, fields) {
        var _this;
        _this = _Error.call(this, 'Async Validation Error') || this;
        _this.errors = errors;
        _this.fields = fields;
        return _this;
    }
    return AsyncValidationError;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
    if (option.first) {
        var _pending = new Promise(function(resolve, reject) {
            var next = function next(errors) {
                callback(errors);
                return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
            };
            var flattenArr = flattenObjArr(objArr);
            asyncSerialArray(flattenArr, func, next);
        });
        _pending["catch"](function(e) {
            return e;
        });
        return _pending;
    }
    var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function(resolve, reject) {
        var next = function next(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === objArrLength) {
                callback(results);
                return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
            }
        };
        if (!objArrKeys.length) {
            callback(results);
            resolve(source);
        }
        objArrKeys.forEach(function(key) {
            var arr = objArr[key];
            if (firstFields.indexOf(key) !== -1) asyncSerialArray(arr, func, next);
            else asyncParallelArray(arr, func, next);
        });
    });
    pending["catch"](function(e) {
        return e;
    });
    return pending;
}
function isErrorObj(obj) {
    return !!(obj && obj.message !== undefined);
}
function getValue(value, path) {
    var v = value;
    for(var i = 0; i < path.length; i++){
        if (v == undefined) return v;
        v = v[path[i]];
    }
    return v;
}
function complementError(rule, source) {
    return function(oe) {
        var fieldValue;
        if (rule.fullFields) fieldValue = getValue(source, rule.fullFields);
        else fieldValue = source[oe.field || rule.fullField];
        if (isErrorObj(oe)) {
            oe.field = oe.field || rule.fullField;
            oe.fieldValue = fieldValue;
            return oe;
        }
        return {
            message: typeof oe === 'function' ? oe() : oe,
            fieldValue: fieldValue,
            field: oe.field || rule.fullField
        };
    };
}
function deepMerge(target, source) {
    if (source) {
        for(var s in source)if (source.hasOwnProperty(s)) {
            var value = source[s];
            if (typeof value === 'object' && typeof target[s] === 'object') target[s] = _extends({}, target[s], value);
            else target[s] = value;
        }
    }
    return target;
}
var required$1 = function required(rule, value, source, errors, options, type) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) errors.push(format(options.messages.required, rule.fullField));
};
/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */ var whitespace = function whitespace(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === '') errors.push(format(options.messages.whitespace, rule.fullField));
};
// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
var getUrlRegex = function() {
    if (urlReg) return urlReg;
    var word = '[a-fA-F\\d:]';
    var b = function b(options) {
        return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
    };
    var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
    var v6seg = '[a-fA-F\\d]{1,4}';
    var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful
    var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
    var v4exact = new RegExp("^" + v4 + "$");
    var v6exact = new RegExp("^" + v6 + "$");
    var ip = function ip(options) {
        return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
    };
    ip.v4 = function(options) {
        return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
    };
    ip.v6 = function(options) {
        return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
    };
    var protocol = "(?:(?:[a-z]+:)?//)";
    var auth = '(?:\\S+(?::\\S*)?@)?';
    var ipv4 = ip.v4().source;
    var ipv6 = ip.v6().source;
    var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
    var port = '(?::\\d{2,5})?';
    var path = '(?:[/?#][^\\s"]*)?';
    var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
    urlReg = new RegExp("(?:^" + regex + "$)", 'i');
    return urlReg;
};
/* eslint max-len:0 */ var pattern$2 = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    // url: new RegExp(
    //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    //   'i',
    // ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
    integer: function integer(value) {
        return types.number(value) && parseInt(value, 10) === value;
    },
    "float": function float(value) {
        return types.number(value) && !types.integer(value);
    },
    array: function array(value) {
        return Array.isArray(value);
    },
    regexp: function regexp(value) {
        if (value instanceof RegExp) return true;
        try {
            return new RegExp(value), true;
        } catch (e) {
            return false;
        }
    },
    date: function date(value) {
        return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
    },
    number: function number(value) {
        if (isNaN(value)) return false;
        return typeof value === 'number';
    },
    object: function object(value) {
        return typeof value === 'object' && !types.array(value);
    },
    method: function method(value) {
        return typeof value === 'function';
    },
    email: function email(value) {
        return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
    },
    url: function url(value) {
        return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
    },
    hex: function hex(value) {
        return typeof value === 'string' && !!value.match(pattern$2.hex);
    }
};
var type$1 = function type(rule, value, source, errors, options) {
    if (rule.required && value === undefined) {
        required$1(rule, value, source, errors, options);
        return;
    }
    var custom = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex'
    ];
    var ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
        if (!types[ruleType](value)) errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
         // straight typeof check
    } else if (ruleType && typeof value !== rule.type) errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
};
var range = function range(rule, value, source, errors, options) {
    var len = typeof rule.len === 'number';
    var min = typeof rule.min === 'number';
    var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = typeof value === 'number';
    var str = typeof value === 'string';
    var arr = Array.isArray(value);
    if (num) key = 'number';
    else if (str) key = 'string';
    else if (arr) key = 'array';
     // if the value is not of a supported type for range validation
    // the validation rule rule should use the
    // type property to also test for a particular type
    if (!key) return false;
    if (arr) val = value.length;
    if (str) // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
    if (len) {
        if (val !== rule.len) errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    } else if (min && !max && val < rule.min) errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    else if (max && !min && val > rule.max) errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    else if (min && max && (val < rule.min || val > rule.max)) errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
};
var ENUM$1 = 'enum';
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
    rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
    if (rule[ENUM$1].indexOf(value) === -1) errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
    if (rule.pattern) {
        if (rule.pattern instanceof RegExp) {
            // if a RegExp instance is passed, reset `lastIndex` in case its `global`
            // flag is accidentally set to `true`, which in a validation scenario
            // is not necessary and the result might be misleading
            rule.pattern.lastIndex = 0;
            if (!rule.pattern.test(value)) errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        } else if (typeof rule.pattern === 'string') {
            var _pattern = new RegExp(rule.pattern);
            if (!_pattern.test(value)) errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
    }
};
var rules = {
    required: required$1,
    whitespace: whitespace,
    type: type$1,
    range: range,
    "enum": enumerable$1,
    pattern: pattern$1
};
var string = function string(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, 'string') && !rule.required) return callback();
        rules.required(rule, value, source, errors, options, 'string');
        if (!isEmptyValue(value, 'string')) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
            rules.pattern(rule, value, source, errors, options);
            if (rule.whitespace === true) rules.whitespace(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var method = function method(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var number = function number(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (value === '') value = undefined;
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var _boolean = function _boolean(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var regexp = function regexp(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value)) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var integer = function integer(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var floatFn = function floatFn(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var array = function array(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if ((value === undefined || value === null) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options, 'array');
        if (value !== undefined && value !== null) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var object = function object(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var ENUM = 'enum';
var enumerable = function enumerable(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) rules[ENUM](rule, value, source, errors, options);
    }
    callback(errors);
};
var pattern = function pattern(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, 'string') && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, 'string')) rules.pattern(rule, value, source, errors, options);
    }
    callback(errors);
};
var date = function date(rule, value, callback, source, options) {
    // console.log('integer rule called %j', rule);
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);
    if (validate) {
        if (isEmptyValue(value, 'date') && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, 'date')) {
            var dateObject;
            if (value instanceof Date) dateObject = value;
            else dateObject = new Date(value);
            rules.type(rule, dateObject, source, errors, options);
            if (dateObject) rules.range(rule, dateObject.getTime(), source, errors, options);
        }
    }
    callback(errors);
};
var required = function required(rule, value, callback, source, options) {
    var errors = [];
    var type = Array.isArray(value) ? 'array' : typeof value;
    rules.required(rule, value, source, errors, options, type);
    callback(errors);
};
var type = function type(rule, value, callback, source, options) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, ruleType) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options, ruleType);
        if (!isEmptyValue(value, ruleType)) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var any = function any(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
    }
    callback(errors);
};
var validators = {
    string: string,
    method: method,
    number: number,
    "boolean": _boolean,
    regexp: regexp,
    integer: integer,
    "float": floatFn,
    array: array,
    object: object,
    "enum": enumerable,
    pattern: pattern,
    date: date,
    url: type,
    hex: type,
    email: type,
    required: required,
    any: any
};
function newMessages() {
    return {
        "default": 'Validation error on field %s',
        required: '%s is required',
        "enum": '%s must be one of %s',
        whitespace: '%s cannot be empty',
        date: {
            format: '%s date %s is invalid for format %s',
            parse: '%s date could not be parsed, %s is invalid ',
            invalid: '%s date %s is invalid'
        },
        types: {
            string: '%s is not a %s',
            method: '%s is not a %s (function)',
            array: '%s is not an %s',
            object: '%s is not an %s',
            number: '%s is not a %s',
            date: '%s is not a %s',
            "boolean": '%s is not a %s',
            integer: '%s is not an %s',
            "float": '%s is not a %s',
            regexp: '%s is not a valid %s',
            email: '%s is not a valid %s',
            url: '%s is not a valid %s',
            hex: '%s is not a valid %s'
        },
        string: {
            len: '%s must be exactly %s characters',
            min: '%s must be at least %s characters',
            max: '%s cannot be longer than %s characters',
            range: '%s must be between %s and %s characters'
        },
        number: {
            len: '%s must equal %s',
            min: '%s cannot be less than %s',
            max: '%s cannot be greater than %s',
            range: '%s must be between %s and %s'
        },
        array: {
            len: '%s must be exactly %s in length',
            min: '%s cannot be less than %s in length',
            max: '%s cannot be greater than %s in length',
            range: '%s must be between %s and %s in length'
        },
        pattern: {
            mismatch: '%s value %s does not match pattern %s'
        },
        clone: function clone() {
            var cloned = JSON.parse(JSON.stringify(this));
            cloned.clone = this.clone;
            return cloned;
        }
    };
}
var messages = newMessages();
/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */ var Schema = /*#__PURE__*/ function() {
    // ========================= Static =========================
    // ======================== Instance ========================
    function Schema(descriptor) {
        this.rules = null;
        this._messages = messages;
        this.define(descriptor);
    }
    var _proto = Schema.prototype;
    _proto.define = function define(rules) {
        var _this = this;
        if (!rules) throw new Error('Cannot configure a schema with no rules');
        if (typeof rules !== 'object' || Array.isArray(rules)) throw new Error('Rules must be an object');
        this.rules = {};
        Object.keys(rules).forEach(function(name) {
            var item = rules[name];
            _this.rules[name] = Array.isArray(item) ? item : [
                item
            ];
        });
    };
    _proto.messages = function messages(_messages) {
        if (_messages) this._messages = deepMerge(newMessages(), _messages);
        return this._messages;
    };
    _proto.validate = function validate(source_, o, oc) {
        var _this2 = this;
        if (o === void 0) o = {};
        if (oc === void 0) oc = function oc() {};
        var source = source_;
        var options = o;
        var callback = oc;
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        if (!this.rules || Object.keys(this.rules).length === 0) {
            if (callback) callback(null, source);
            return Promise.resolve(source);
        }
        function complete(results) {
            var errors = [];
            var fields = {};
            function add(e) {
                if (Array.isArray(e)) {
                    var _errors;
                    errors = (_errors = errors).concat.apply(_errors, e);
                } else errors.push(e);
            }
            for(var i = 0; i < results.length; i++)add(results[i]);
            if (!errors.length) callback(null, source);
            else {
                fields = convertFieldsError(errors);
                callback(errors, fields);
            }
        }
        if (options.messages) {
            var messages$1 = this.messages();
            if (messages$1 === messages) messages$1 = newMessages();
            deepMerge(messages$1, options.messages);
            options.messages = messages$1;
        } else options.messages = this.messages();
        var series = {};
        var keys = options.keys || Object.keys(this.rules);
        keys.forEach(function(z) {
            var arr = _this2.rules[z];
            var value = source[z];
            arr.forEach(function(r) {
                var rule = r;
                if (typeof rule.transform === 'function') {
                    if (source === source_) source = _extends({}, source);
                    value = source[z] = rule.transform(value);
                }
                if (typeof rule === 'function') rule = {
                    validator: rule
                };
                else rule = _extends({}, rule);
                 // Fill validator. Skip if nothing need to validate
                rule.validator = _this2.getValidationMethod(rule);
                if (!rule.validator) return;
                rule.field = z;
                rule.fullField = rule.fullField || z;
                rule.type = _this2.getType(rule);
                series[z] = series[z] || [];
                series[z].push({
                    rule: rule,
                    value: value,
                    source: source,
                    field: z
                });
            });
        });
        var errorFields = {};
        return asyncMap(series, options, function(data, doIt) {
            var rule = data.rule;
            var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
            deep = deep && (rule.required || !rule.required && data.value);
            rule.field = data.field;
            function addFullField(key, schema) {
                return _extends({}, schema, {
                    fullField: rule.fullField + "." + key,
                    fullFields: rule.fullFields ? [].concat(rule.fullFields, [
                        key
                    ]) : [
                        key
                    ]
                });
            }
            function cb(e) {
                if (e === void 0) e = [];
                var errorList = Array.isArray(e) ? e : [
                    e
                ];
                if (!options.suppressWarning && errorList.length) Schema.warning('async-validator:', errorList);
                if (errorList.length && rule.message !== undefined) errorList = [].concat(rule.message);
                 // Fill error info
                var filledErrors = errorList.map(complementError(rule, source));
                if (options.first && filledErrors.length) {
                    errorFields[rule.field] = 1;
                    return doIt(filledErrors);
                }
                if (!deep) doIt(filledErrors);
                else {
                    // if rule is required but the target object
                    // does not exist fail at the rule level and don't
                    // go deeper
                    if (rule.required && !data.value) {
                        if (rule.message !== undefined) filledErrors = [].concat(rule.message).map(complementError(rule, source));
                        else if (options.error) filledErrors = [
                            options.error(rule, format(options.messages.required, rule.field))
                        ];
                        return doIt(filledErrors);
                    }
                    var fieldsSchema = {};
                    if (rule.defaultField) Object.keys(data.value).map(function(key) {
                        fieldsSchema[key] = rule.defaultField;
                    });
                    fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
                    var paredFieldsSchema = {};
                    Object.keys(fieldsSchema).forEach(function(field) {
                        var fieldSchema = fieldsSchema[field];
                        var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [
                            fieldSchema
                        ];
                        paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
                    });
                    var schema = new Schema(paredFieldsSchema);
                    schema.messages(options.messages);
                    if (data.rule.options) {
                        data.rule.options.messages = options.messages;
                        data.rule.options.error = options.error;
                    }
                    schema.validate(data.value, data.rule.options || options, function(errs) {
                        var finalErrors = [];
                        if (filledErrors && filledErrors.length) finalErrors.push.apply(finalErrors, filledErrors);
                        if (errs && errs.length) finalErrors.push.apply(finalErrors, errs);
                        doIt(finalErrors.length ? finalErrors : null);
                    });
                }
            }
            var res;
            if (rule.asyncValidator) res = rule.asyncValidator(rule, data.value, cb, data.source, options);
            else if (rule.validator) {
                try {
                    res = rule.validator(rule, data.value, cb, data.source, options);
                } catch (error) {
                    console.error == null || console.error(error); // rethrow to report error
                    if (!options.suppressValidatorError) setTimeout(function() {
                        throw error;
                    }, 0);
                    cb(error.message);
                }
                if (res === true) cb();
                else if (res === false) cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
                else if (res instanceof Array) cb(res);
                else if (res instanceof Error) cb(res.message);
            }
            if (res && res.then) res.then(function() {
                return cb();
            }, function(e) {
                return cb(e);
            });
        }, function(results) {
            complete(results);
        }, source);
    };
    _proto.getType = function getType(rule) {
        if (rule.type === undefined && rule.pattern instanceof RegExp) rule.type = 'pattern';
        if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) throw new Error(format('Unknown rule type %s', rule.type));
        return rule.type || 'string';
    };
    _proto.getValidationMethod = function getValidationMethod(rule) {
        if (typeof rule.validator === 'function') return rule.validator;
        var keys = Object.keys(rule);
        var messageIndex = keys.indexOf('message');
        if (messageIndex !== -1) keys.splice(messageIndex, 1);
        if (keys.length === 1 && keys[0] === 'required') return validators.required;
        return validators[this.getType(rule)] || undefined;
    };
    return Schema;
}();
Schema.register = function register(type, validator) {
    if (typeof validator !== 'function') throw new Error('Cannot register a validator by type, validator is not a function');
    validators[type] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
 //# sourceMappingURL=index.js.map

},
"node_modules/intersection-observer/intersection-observer.js": function (module, exports, __mako_require__){
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */ (function() {
    'use strict';
    // Exit early if we're not running in a browser.
    if (typeof window !== 'object') return;
    // Exit early if all IntersectionObserver and IntersectionObserverEntry
    // features are natively supported.
    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
        // Minimal polyfill for Edge 15's lack of `isIntersecting`
        // See: https://github.com/w3c/IntersectionObserver/issues/211
        if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
            get: function() {
                return this.intersectionRatio > 0;
            }
        });
        return;
    }
    /**
 * Returns the embedding frame element, if any.
 * @param {!Document} doc
 * @return {!Element}
 */ function getFrameElement(doc) {
        try {
            return doc.defaultView && doc.defaultView.frameElement || null;
        } catch (e) {
            // Ignore the error.
            return null;
        }
    }
    /**
 * A local reference to the root document.
 */ var document = function(startDoc) {
        var doc = startDoc;
        var frame = getFrameElement(doc);
        while(frame){
            doc = frame.ownerDocument;
            frame = getFrameElement(doc);
        }
        return doc;
    }(window.document);
    /**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */ var registry = [];
    /**
 * The signal updater for cross-origin intersection. When not null, it means
 * that the polyfill is configured to work in a cross-origin mode.
 * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
 */ var crossOriginUpdater = null;
    /**
 * The current cross-origin intersection. Only used in the cross-origin mode.
 * @type {DOMRect|ClientRect}
 */ var crossOriginRect = null;
    /**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */ function IntersectionObserverEntry(entry) {
        this.time = entry.time;
        this.target = entry.target;
        this.rootBounds = ensureDOMRect(entry.rootBounds);
        this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
        this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
        this.isIntersecting = !!entry.intersectionRect;
        // Calculates the intersection ratio.
        var targetRect = this.boundingClientRect;
        var targetArea = targetRect.width * targetRect.height;
        var intersectionRect = this.intersectionRect;
        var intersectionArea = intersectionRect.width * intersectionRect.height;
        // Sets intersection ratio.
        if (targetArea) // Round the intersection ratio to avoid floating point math issues:
        // https://github.com/w3c/IntersectionObserver/issues/324
        this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
        else // If area is zero and is intersecting, sets to 1, otherwise to 0
        this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
    /**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */ function IntersectionObserver(callback, opt_options) {
        var options = opt_options || {};
        if (typeof callback != 'function') throw new Error('callback must be a function');
        if (options.root && options.root.nodeType != 1 && options.root.nodeType != 9) throw new Error('root must be a Document or Element');
        // Binds and throttles `this._checkForIntersections`.
        this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
        // Private properties.
        this._callback = callback;
        this._observationTargets = [];
        this._queuedEntries = [];
        this._rootMarginValues = this._parseRootMargin(options.rootMargin);
        // Public properties.
        this.thresholds = this._initThresholds(options.threshold);
        this.root = options.root || null;
        this.rootMargin = this._rootMarginValues.map(function(margin) {
            return margin.value + margin.unit;
        }).join(' ');
        /** @private @const {!Array<!Document>} */ this._monitoringDocuments = [];
        /** @private @const {!Array<function()>} */ this._monitoringUnsubscribes = [];
    }
    /**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */ IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
    /**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */ IntersectionObserver.prototype.POLL_INTERVAL = null;
    /**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */ IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
    /**
 * Sets up the polyfill in the cross-origin mode. The result is the
 * updater function that accepts two arguments: `boundingClientRect` and
 * `intersectionRect` - just as these fields would be available to the
 * parent via `IntersectionObserverEntry`. This function should be called
 * each time the iframe receives intersection information from the parent
 * window, e.g. via messaging.
 * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
 */ IntersectionObserver._setupCrossOriginUpdater = function() {
        if (!crossOriginUpdater) /**
     * @param {DOMRect|ClientRect} boundingClientRect
     * @param {DOMRect|ClientRect} intersectionRect
     */ crossOriginUpdater = function(boundingClientRect, intersectionRect) {
            if (!boundingClientRect || !intersectionRect) crossOriginRect = getEmptyRect();
            else crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
            registry.forEach(function(observer) {
                observer._checkForIntersections();
            });
        };
        return crossOriginUpdater;
    };
    /**
 * Resets the cross-origin mode.
 */ IntersectionObserver._resetCrossOriginUpdater = function() {
        crossOriginUpdater = null;
        crossOriginRect = null;
    };
    /**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */ IntersectionObserver.prototype.observe = function(target) {
        var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
            return item.element == target;
        });
        if (isTargetAlreadyObserved) return;
        if (!(target && target.nodeType == 1)) throw new Error('target must be an Element');
        this._registerInstance();
        this._observationTargets.push({
            element: target,
            entry: null
        });
        this._monitorIntersections(target.ownerDocument);
        this._checkForIntersections();
    };
    /**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */ IntersectionObserver.prototype.unobserve = function(target) {
        this._observationTargets = this._observationTargets.filter(function(item) {
            return item.element != target;
        });
        this._unmonitorIntersections(target.ownerDocument);
        if (this._observationTargets.length == 0) this._unregisterInstance();
    };
    /**
 * Stops observing all target elements for intersection changes.
 */ IntersectionObserver.prototype.disconnect = function() {
        this._observationTargets = [];
        this._unmonitorAllIntersections();
        this._unregisterInstance();
    };
    /**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */ IntersectionObserver.prototype.takeRecords = function() {
        var records = this._queuedEntries.slice();
        this._queuedEntries = [];
        return records;
    };
    /**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */ IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
        var threshold = opt_threshold || [
            0
        ];
        if (!Array.isArray(threshold)) threshold = [
            threshold
        ];
        return threshold.sort().filter(function(t, i, a) {
            if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) throw new Error('threshold must be a number between 0 and 1 inclusively');
            return t !== a[i - 1];
        });
    };
    /**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */ IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
        var marginString = opt_rootMargin || '0px';
        var margins = marginString.split(/\s+/).map(function(margin) {
            var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
            if (!parts) throw new Error('rootMargin must be specified in pixels or percent');
            return {
                value: parseFloat(parts[1]),
                unit: parts[2]
            };
        });
        // Handles shorthand.
        margins[1] = margins[1] || margins[0];
        margins[2] = margins[2] || margins[0];
        margins[3] = margins[3] || margins[1];
        return margins;
    };
    /**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @param {!Document} doc
 * @private
 */ IntersectionObserver.prototype._monitorIntersections = function(doc) {
        var win = doc.defaultView;
        if (!win) // Already destroyed.
        return;
        if (this._monitoringDocuments.indexOf(doc) != -1) // Already monitoring.
        return;
        // Private state for monitoring.
        var callback = this._checkForIntersections;
        var monitoringInterval = null;
        var domObserver = null;
        // If a poll interval is set, use polling instead of listening to
        // resize and scroll events or DOM mutations.
        if (this.POLL_INTERVAL) monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
        else {
            addEvent(win, 'resize', callback, true);
            addEvent(doc, 'scroll', callback, true);
            if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
                domObserver = new win.MutationObserver(callback);
                domObserver.observe(doc, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
        }
        this._monitoringDocuments.push(doc);
        this._monitoringUnsubscribes.push(function() {
            // Get the window object again. When a friendly iframe is destroyed, it
            // will be null.
            var win = doc.defaultView;
            if (win) {
                if (monitoringInterval) win.clearInterval(monitoringInterval);
                removeEvent(win, 'resize', callback, true);
            }
            removeEvent(doc, 'scroll', callback, true);
            if (domObserver) domObserver.disconnect();
        });
        // Also monitor the parent.
        var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
        if (doc != rootDoc) {
            var frame = getFrameElement(doc);
            if (frame) this._monitorIntersections(frame.ownerDocument);
        }
    };
    /**
 * Stops polling for intersection changes.
 * @param {!Document} doc
 * @private
 */ IntersectionObserver.prototype._unmonitorIntersections = function(doc) {
        var index = this._monitoringDocuments.indexOf(doc);
        if (index == -1) return;
        var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
        // Check if any dependent targets are still remaining.
        var hasDependentTargets = this._observationTargets.some(function(item) {
            var itemDoc = item.element.ownerDocument;
            // Target is in this context.
            if (itemDoc == doc) return true;
            // Target is nested in this context.
            while(itemDoc && itemDoc != rootDoc){
                var frame = getFrameElement(itemDoc);
                itemDoc = frame && frame.ownerDocument;
                if (itemDoc == doc) return true;
            }
            return false;
        });
        if (hasDependentTargets) return;
        // Unsubscribe.
        var unsubscribe = this._monitoringUnsubscribes[index];
        this._monitoringDocuments.splice(index, 1);
        this._monitoringUnsubscribes.splice(index, 1);
        unsubscribe();
        // Also unmonitor the parent.
        if (doc != rootDoc) {
            var frame = getFrameElement(doc);
            if (frame) this._unmonitorIntersections(frame.ownerDocument);
        }
    };
    /**
 * Stops polling for intersection changes.
 * @param {!Document} doc
 * @private
 */ IntersectionObserver.prototype._unmonitorAllIntersections = function() {
        var unsubscribes = this._monitoringUnsubscribes.slice(0);
        this._monitoringDocuments.length = 0;
        this._monitoringUnsubscribes.length = 0;
        for(var i = 0; i < unsubscribes.length; i++)unsubscribes[i]();
    };
    /**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */ IntersectionObserver.prototype._checkForIntersections = function() {
        if (!this.root && crossOriginUpdater && !crossOriginRect) // Cross origin monitoring, but no initial data available yet.
        return;
        var rootIsInDom = this._rootIsInDom();
        var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
        this._observationTargets.forEach(function(item) {
            var target = item.element;
            var targetRect = getBoundingClientRect(target);
            var rootContainsTarget = this._rootContainsTarget(target);
            var oldEntry = item.entry;
            var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);
            var rootBounds = null;
            if (!this._rootContainsTarget(target)) rootBounds = getEmptyRect();
            else if (!crossOriginUpdater || this.root) rootBounds = rootRect;
            var newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target: target,
                boundingClientRect: targetRect,
                rootBounds: rootBounds,
                intersectionRect: intersectionRect
            });
            if (!oldEntry) this._queuedEntries.push(newEntry);
            else if (rootIsInDom && rootContainsTarget) // If the new entry intersection ratio has crossed any of the
            // thresholds, add a new entry.
            {
                if (this._hasCrossedThreshold(oldEntry, newEntry)) this._queuedEntries.push(newEntry);
            } else // If the root is not in the DOM or target is not contained within
            // root but the previous entry for this target had an intersection,
            // add a new record indicating removal.
            if (oldEntry && oldEntry.isIntersecting) this._queuedEntries.push(newEntry);
        }, this);
        if (this._queuedEntries.length) this._callback(this.takeRecords(), this);
    };
    /**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} targetRect The bounding rect of the target.
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */ IntersectionObserver.prototype._computeTargetAndRootIntersection = function(target, targetRect, rootRect) {
        // If the element isn't displayed, an intersection can't happen.
        if (window.getComputedStyle(target).display == 'none') return;
        var intersectionRect = targetRect;
        var parent = getParentNode(target);
        var atRoot = false;
        while(!atRoot && parent){
            var parentRect = null;
            var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
            // If the parent isn't displayed, an intersection can't happen.
            if (parentComputedStyle.display == 'none') return null;
            if (parent == this.root || parent.nodeType == /* DOCUMENT */ 9) {
                atRoot = true;
                if (parent == this.root || parent == document) {
                    if (crossOriginUpdater && !this.root) {
                        if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
                            // A 0-size cross-origin intersection means no-intersection.
                            parent = null;
                            parentRect = null;
                            intersectionRect = null;
                        } else parentRect = crossOriginRect;
                    } else parentRect = rootRect;
                } else {
                    // Check if there's a frame that can be navigated to.
                    var frame = getParentNode(parent);
                    var frameRect = frame && getBoundingClientRect(frame);
                    var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
                    if (frameRect && frameIntersect) {
                        parent = frame;
                        parentRect = convertFromParentRect(frameRect, frameIntersect);
                    } else {
                        parent = null;
                        intersectionRect = null;
                    }
                }
            } else {
                // If the element has a non-visible overflow, and it's not the <body>
                // or <html> element, update the intersection rect.
                // Note: <body> and <html> cannot be clipped to a rect that's not also
                // the document rect, so no need to compute a new intersection.
                var doc = parent.ownerDocument;
                if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != 'visible') parentRect = getBoundingClientRect(parent);
            }
            // If either of the above conditionals set a new parentRect,
            // calculate new intersection data.
            if (parentRect) intersectionRect = computeRectIntersection(parentRect, intersectionRect);
            if (!intersectionRect) break;
            parent = parent && getParentNode(parent);
        }
        return intersectionRect;
    };
    /**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {ClientRect} The expanded root rect.
 * @private
 */ IntersectionObserver.prototype._getRootRect = function() {
        var rootRect;
        if (this.root && !isDoc(this.root)) rootRect = getBoundingClientRect(this.root);
        else {
            // Use <html>/<body> instead of window since scroll bars affect size.
            var doc = isDoc(this.root) ? this.root : document;
            var html = doc.documentElement;
            var body = doc.body;
            rootRect = {
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
            };
        }
        return this._expandRectByRootMargin(rootRect);
    };
    /**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {DOMRect|ClientRect} rect The rect object to expand.
 * @return {ClientRect} The expanded rect.
 * @private
 */ IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
        var margins = this._rootMarginValues.map(function(margin, i) {
            return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
        });
        var newRect = {
            top: rect.top - margins[0],
            right: rect.right + margins[1],
            bottom: rect.bottom + margins[2],
            left: rect.left - margins[3]
        };
        newRect.width = newRect.right - newRect.left;
        newRect.height = newRect.bottom - newRect.top;
        return newRect;
    };
    /**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */ IntersectionObserver.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
        // To make comparing easier, an entry that has a ratio of 0
        // but does not actually intersect is given a value of -1
        var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
        var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
        // Ignore unchanged ratios
        if (oldRatio === newRatio) return;
        for(var i = 0; i < this.thresholds.length; i++){
            var threshold = this.thresholds[i];
            // Return true if an entry matches a threshold or if the new ratio
            // and the old ratio are on the opposite sides of a threshold.
            if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) return true;
        }
    };
    /**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */ IntersectionObserver.prototype._rootIsInDom = function() {
        return !this.root || containsDeep(document, this.root);
    };
    /**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */ IntersectionObserver.prototype._rootContainsTarget = function(target) {
        var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
        return containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument);
    };
    /**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */ IntersectionObserver.prototype._registerInstance = function() {
        if (registry.indexOf(this) < 0) registry.push(this);
    };
    /**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */ IntersectionObserver.prototype._unregisterInstance = function() {
        var index = registry.indexOf(this);
        if (index != -1) registry.splice(index, 1);
    };
    /**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */ function now() {
        return window.performance && performance.now && performance.now();
    }
    /**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */ function throttle(fn, timeout) {
        var timer = null;
        return function() {
            if (!timer) timer = setTimeout(function() {
                fn();
                timer = null;
            }, timeout);
        };
    }
    /**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */ function addEvent(node, event, fn, opt_useCapture) {
        if (typeof node.addEventListener == 'function') node.addEventListener(event, fn, opt_useCapture || false);
        else if (typeof node.attachEvent == 'function') node.attachEvent('on' + event, fn);
    }
    /**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */ function removeEvent(node, event, fn, opt_useCapture) {
        if (typeof node.removeEventListener == 'function') node.removeEventListener(event, fn, opt_useCapture || false);
        else if (typeof node.detachEvent == 'function') node.detachEvent('on' + event, fn);
    }
    /**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object|?ClientRect} The intersection rect or undefined if no
 *     intersection is found.
 */ function computeRectIntersection(rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top);
        var bottom = Math.min(rect1.bottom, rect2.bottom);
        var left = Math.max(rect1.left, rect2.left);
        var right = Math.min(rect1.right, rect2.right);
        var width = right - left;
        var height = bottom - top;
        return width >= 0 && height >= 0 && {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
        } || null;
    }
    /**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
 */ function getBoundingClientRect(el) {
        var rect;
        try {
            rect = el.getBoundingClientRect();
        } catch (err) {
        // Ignore Windows 7 IE11 "Unspecified error"
        // https://github.com/w3c/IntersectionObserver/pull/205
        }
        if (!rect) return getEmptyRect();
        // Older IE
        if (!(rect.width && rect.height)) rect = {
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        };
        return rect;
    }
    /**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {ClientRect} The empty rect.
 */ function getEmptyRect() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }
    /**
 * Ensure that the result has all of the necessary fields of the DOMRect.
 * Specifically this ensures that `x` and `y` fields are set.
 *
 * @param {?DOMRect|?ClientRect} rect
 * @return {?DOMRect}
 */ function ensureDOMRect(rect) {
        // A `DOMRect` object has `x` and `y` fields.
        if (!rect || 'x' in rect) return rect;
        // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
        // for internally calculated Rect objects. For the purposes of
        // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
        // for these fields.
        return {
            top: rect.top,
            y: rect.top,
            bottom: rect.bottom,
            left: rect.left,
            x: rect.left,
            right: rect.right,
            width: rect.width,
            height: rect.height
        };
    }
    /**
 * Inverts the intersection and bounding rect from the parent (frame) BCR to
 * the local BCR space.
 * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
 * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
 * @return {ClientRect} The local root bounding rect for the parent's children.
 */ function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
        var top = parentIntersectionRect.top - parentBoundingRect.top;
        var left = parentIntersectionRect.left - parentBoundingRect.left;
        return {
            top: top,
            left: left,
            height: parentIntersectionRect.height,
            width: parentIntersectionRect.width,
            bottom: top + parentIntersectionRect.height,
            right: left + parentIntersectionRect.width
        };
    }
    /**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */ function containsDeep(parent, child) {
        var node = child;
        while(node){
            if (node == parent) return true;
            node = getParentNode(node);
        }
        return false;
    }
    /**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */ function getParentNode(node) {
        var parent = node.parentNode;
        if (node.nodeType == /* DOCUMENT */ 9 && node != document) // If this node is a document node, look for the embedding frame.
        return getFrameElement(node);
        // If the parent has element that is assigned through shadow root slot
        if (parent && parent.assignedSlot) parent = parent.assignedSlot.parentNode;
        if (parent && parent.nodeType == 11 && parent.host) // If the parent is a shadow root, return the host element.
        return parent.host;
        return parent;
    }
    /**
 * Returns true if `node` is a Document.
 * @param {!Node} node
 * @returns {boolean}
 */ function isDoc(node) {
        return node && node.nodeType === 9;
    }
    // Exposes the constructors globally.
    window.IntersectionObserver = IntersectionObserver;
    window.IntersectionObserverEntry = IntersectionObserverEntry;
})();

},
"node_modules/js-cookie/dist/js.cookie.mjs": function (module, exports, __mako_require__){
/*! js-cookie v3.0.5 | MIT */ /* eslint-disable no-var */ "use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return api;
    }
});
function assign(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)target[key] = source[key];
    }
    return target;
}
/* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
    read: function(value) {
        if (value[0] === '"') value = value.slice(1, -1);
        return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function(value) {
        return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
};
/* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
    function set(name, value, attributes) {
        if (typeof document === 'undefined') return;
        attributes = assign({}, defaultAttributes, attributes);
        if (typeof attributes.expires === 'number') attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
        if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
        name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var stringifiedAttributes = '';
        for(var attributeName in attributes){
            if (!attributes[attributeName]) continue;
            stringifiedAttributes += '; ' + attributeName;
            if (attributes[attributeName] === true) continue;
            // Considers RFC 6265 section 5.2:
            // ...
            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
            //     character:
            // Consume the characters of the unparsed-attributes up to,
            // not including, the first %x3B (";") character.
            // ...
            stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
        }
        return document.cookie = name + '=' + converter.write(value, name) + stringifiedAttributes;
    }
    function get(name) {
        if (typeof document === 'undefined' || arguments.length && !name) return;
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var jar = {};
        for(var i = 0; i < cookies.length; i++){
            var parts = cookies[i].split('=');
            var value = parts.slice(1).join('=');
            try {
                var found = decodeURIComponent(parts[0]);
                jar[found] = converter.read(value, found);
                if (name === found) break;
            } catch (e) {}
        }
        return name ? jar[name] : jar;
    }
    return Object.create({
        set,
        get,
        remove: function(name, attributes) {
            set(name, '', assign({}, attributes, {
                expires: -1
            }));
        },
        withAttributes: function(attributes) {
            return init(this.converter, assign({}, this.attributes, attributes));
        },
        withConverter: function(converter) {
            return init(assign({}, this.converter, converter), this.attributes);
        }
    }, {
        attributes: {
            value: Object.freeze(defaultAttributes)
        },
        converter: {
            value: Object.freeze(converter)
        }
    });
}
var api = init(defaultConverter, {
    path: '/'
});

},
"node_modules/lodash/_Symbol.js": function (module, exports, __mako_require__){
var root = __mako_require__("node_modules/lodash/_root.js");
/** Built-in value references. */ var _$m_Symbol = root.Symbol;
module.exports = _$m_Symbol;

},
"node_modules/lodash/_baseGetTag.js": function (module, exports, __mako_require__){
var _$m_Symbol = __mako_require__("node_modules/lodash/_Symbol.js");
var getRawTag = __mako_require__("node_modules/lodash/_getRawTag.js");
var objectToString = __mako_require__("node_modules/lodash/_objectToString.js");
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = _$m_Symbol ? _$m_Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},
"node_modules/lodash/_baseTrim.js": function (module, exports, __mako_require__){
var trimmedEndIndex = __mako_require__("node_modules/lodash/_trimmedEndIndex.js");
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
module.exports = baseTrim;

},
"node_modules/lodash/_freeGlobal.js": function (module, exports, __mako_require__){
/** Detect free variable `global` from Node.js. */ const global = __mako_require__("node_modules/node-libs-browser-okam/polyfill/global.js");
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

},
"node_modules/lodash/_getPrototype.js": function (module, exports, __mako_require__){
var overArg = __mako_require__("node_modules/lodash/_overArg.js");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

},
"node_modules/lodash/_getRawTag.js": function (module, exports, __mako_require__){
var _$m_Symbol = __mako_require__("node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = _$m_Symbol ? _$m_Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},
"node_modules/lodash/_objectToString.js": function (module, exports, __mako_require__){
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},
"node_modules/lodash/_overArg.js": function (module, exports, __mako_require__){
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},
"node_modules/lodash/_root.js": function (module, exports, __mako_require__){
var freeGlobal = __mako_require__("node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

},
"node_modules/lodash/_trimmedEndIndex.js": function (module, exports, __mako_require__){
/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index)));
    return index;
}
module.exports = trimmedEndIndex;

},
"node_modules/lodash/debounce.js": function (module, exports, __mako_require__){
var isObject = __mako_require__("node_modules/lodash/isObject.js");
var now = __mako_require__("node_modules/lodash/now.js");
var toNumber = __mako_require__("node_modules/lodash/toNumber.js");
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
var nativeMax = Math.max;
var nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
module.exports = debounce;

},
"node_modules/lodash/isObject.js": function (module, exports, __mako_require__){
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

},
"node_modules/lodash/isObjectLike.js": function (module, exports, __mako_require__){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

},
"node_modules/lodash/isPlainObject.js": function (module, exports, __mako_require__){
var baseGetTag = __mako_require__("node_modules/lodash/_baseGetTag.js");
var getPrototype = __mako_require__("node_modules/lodash/_getPrototype.js");
var isObjectLike = __mako_require__("node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */ var objectTag = '[object Object]';
var funcProto = Function.prototype;
var objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
    var proto = getPrototype(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;

},
"node_modules/lodash/isSymbol.js": function (module, exports, __mako_require__){
var baseGetTag = __mako_require__("node_modules/lodash/_baseGetTag.js");
var isObjectLike = __mako_require__("node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},
"node_modules/lodash/lodash.js": function (module, exports, __mako_require__){
const global = __mako_require__("node_modules/node-libs-browser-okam/polyfill/global.js");
(function() {
    /** Used as a safe reference for `undefined` in pre-ES5 environments. */ var undefined;
    /** Used as the semantic version number. */ var VERSION = '4.17.21';
    /** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
    /** Error message constants. */ var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.', FUNC_ERROR_TEXT = 'Expected a function', INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';
    /** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
    /** Used as the internal argument placeholder. */ var PLACEHOLDER = '__lodash_placeholder__';
    /** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    /** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    /** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    /** Used as default options for `_.truncate`. */ var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = '...';
    /** Used to detect hot functions by number of calls within a span of milliseconds. */ var HOT_COUNT = 800, HOT_SPAN = 16;
    /** Used to indicate the type of lazy iteratees. */ var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
    /** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    /** Used to associate wrap methods with their bit flags. */ var wrapFlags = [
        [
            'ary',
            WRAP_ARY_FLAG
        ],
        [
            'bind',
            WRAP_BIND_FLAG
        ],
        [
            'bindKey',
            WRAP_BIND_KEY_FLAG
        ],
        [
            'curry',
            WRAP_CURRY_FLAG
        ],
        [
            'curryRight',
            WRAP_CURRY_RIGHT_FLAG
        ],
        [
            'flip',
            WRAP_FLIP_FLAG
        ],
        [
            'partial',
            WRAP_PARTIAL_FLAG
        ],
        [
            'partialRight',
            WRAP_PARTIAL_RIGHT_FLAG
        ],
        [
            'rearg',
            WRAP_REARG_FLAG
        ]
    ];
    /** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', asyncTag = '[object AsyncFunction]', boolTag = '[object Boolean]', dateTag = '[object Date]', domExcTag = '[object DOMException]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', nullTag = '[object Null]', objectTag = '[object Object]', promiseTag = '[object Promise]', proxyTag = '[object Proxy]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', undefinedTag = '[object Undefined]', weakMapTag = '[object WeakMap]', weakSetTag = '[object WeakSet]';
    var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
    /** Used to match empty string literals in compiled template source. */ var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    /** Used to match HTML entities and HTML characters. */ var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    /** Used to match template delimiters. */ var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    /** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    /** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
    /** Used to match a single whitespace character. */ var reWhitespace = /\s/;
    /** Used to match wrap detail comments. */ var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    /** Used to match words composed of alphanumeric characters. */ var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */ var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    /** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
    /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */ var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    /** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
    /** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
    /** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
    /** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
    /** Used to match Latin Unicode letters (excluding mathematical operators). */ var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    /** Used to ensure capturing order of template delimiters. */ var reNoMatch = /($^)/;
    /** Used to match unescaped characters in compiled string literals. */ var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    /** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = '\\u2700-\\u27bf', rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff', rsMathOpRange = '\\xac\\xb1\\xd7\\xf7', rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf', rsPunctuationRange = '\\u2000-\\u206f', rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000', rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde', rsVarRange = '\\ufe0e\\ufe0f', rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    /** Used to compose unicode capture groups. */ var rsApos = "['\u2019]", rsAstral = '[' + rsAstralRange + ']', rsBreak = '[' + rsBreakRange + ']', rsCombo = '[' + rsComboRange + ']', rsDigits = '\\d+', rsDingbat = '[' + rsDingbatRange + ']', rsLower = '[' + rsLowerRange + ']', rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsUpper = '[' + rsUpperRange + ']', rsZWJ = '\\u200d';
    /** Used to compose unicode regexes. */ var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')', rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')', rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?', rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?', reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
        rsNonAstral,
        rsRegional,
        rsSurrPair
    ].join('|') + ')' + rsOptVar + reOptMod + ')*', rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = '(?:' + [
        rsDingbat,
        rsRegional,
        rsSurrPair
    ].join('|') + ')' + rsSeq, rsSymbol = '(?:' + [
        rsNonAstral + rsCombo + '?',
        rsCombo,
        rsRegional,
        rsSurrPair,
        rsAstral
    ].join('|') + ')';
    /** Used to match apostrophes. */ var reApos = RegExp(rsApos, 'g');
    /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */ var reComboMark = RegExp(rsCombo, 'g');
    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
    /** Used to match complex or compound words. */ var reUnicodeWord = RegExp([
        rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [
            rsBreak,
            rsUpper,
            '$'
        ].join('|') + ')',
        rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [
            rsBreak,
            rsUpper + rsMiscLower,
            '$'
        ].join('|') + ')',
        rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
        rsUpper + '+' + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
    ].join('|'), 'g');
    /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
    /** Used to detect strings that need a more robust regexp to match words. */ var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    /** Used to assign default `context` object properties. */ var contextProps = [
        'Array',
        'Buffer',
        'DataView',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Math',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'String',
        'Symbol',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        '_',
        'clearTimeout',
        'isFinite',
        'parseInt',
        'setTimeout'
    ];
    /** Used to make template sourceURLs easier to identify. */ var templateCounter = -1;
    /** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    /** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    /** Used to map Latin Unicode letters to basic Latin letters. */ var deburredLetters = {
        // Latin-1 Supplement block.
        '\xc0': 'A',
        '\xc1': 'A',
        '\xc2': 'A',
        '\xc3': 'A',
        '\xc4': 'A',
        '\xc5': 'A',
        '\xe0': 'a',
        '\xe1': 'a',
        '\xe2': 'a',
        '\xe3': 'a',
        '\xe4': 'a',
        '\xe5': 'a',
        '\xc7': 'C',
        '\xe7': 'c',
        '\xd0': 'D',
        '\xf0': 'd',
        '\xc8': 'E',
        '\xc9': 'E',
        '\xca': 'E',
        '\xcb': 'E',
        '\xe8': 'e',
        '\xe9': 'e',
        '\xea': 'e',
        '\xeb': 'e',
        '\xcc': 'I',
        '\xcd': 'I',
        '\xce': 'I',
        '\xcf': 'I',
        '\xec': 'i',
        '\xed': 'i',
        '\xee': 'i',
        '\xef': 'i',
        '\xd1': 'N',
        '\xf1': 'n',
        '\xd2': 'O',
        '\xd3': 'O',
        '\xd4': 'O',
        '\xd5': 'O',
        '\xd6': 'O',
        '\xd8': 'O',
        '\xf2': 'o',
        '\xf3': 'o',
        '\xf4': 'o',
        '\xf5': 'o',
        '\xf6': 'o',
        '\xf8': 'o',
        '\xd9': 'U',
        '\xda': 'U',
        '\xdb': 'U',
        '\xdc': 'U',
        '\xf9': 'u',
        '\xfa': 'u',
        '\xfb': 'u',
        '\xfc': 'u',
        '\xdd': 'Y',
        '\xfd': 'y',
        '\xff': 'y',
        '\xc6': 'Ae',
        '\xe6': 'ae',
        '\xde': 'Th',
        '\xfe': 'th',
        '\xdf': 'ss',
        // Latin Extended-A block.
        '\u0100': 'A',
        '\u0102': 'A',
        '\u0104': 'A',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u0105': 'a',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010a': 'C',
        '\u010c': 'C',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010b': 'c',
        '\u010d': 'c',
        '\u010e': 'D',
        '\u0110': 'D',
        '\u010f': 'd',
        '\u0111': 'd',
        '\u0112': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u0118': 'E',
        '\u011a': 'E',
        '\u0113': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u0119': 'e',
        '\u011b': 'e',
        '\u011c': 'G',
        '\u011e': 'G',
        '\u0120': 'G',
        '\u0122': 'G',
        '\u011d': 'g',
        '\u011f': 'g',
        '\u0121': 'g',
        '\u0123': 'g',
        '\u0124': 'H',
        '\u0126': 'H',
        '\u0125': 'h',
        '\u0127': 'h',
        '\u0128': 'I',
        '\u012a': 'I',
        '\u012c': 'I',
        '\u012e': 'I',
        '\u0130': 'I',
        '\u0129': 'i',
        '\u012b': 'i',
        '\u012d': 'i',
        '\u012f': 'i',
        '\u0131': 'i',
        '\u0134': 'J',
        '\u0135': 'j',
        '\u0136': 'K',
        '\u0137': 'k',
        '\u0138': 'k',
        '\u0139': 'L',
        '\u013b': 'L',
        '\u013d': 'L',
        '\u013f': 'L',
        '\u0141': 'L',
        '\u013a': 'l',
        '\u013c': 'l',
        '\u013e': 'l',
        '\u0140': 'l',
        '\u0142': 'l',
        '\u0143': 'N',
        '\u0145': 'N',
        '\u0147': 'N',
        '\u014a': 'N',
        '\u0144': 'n',
        '\u0146': 'n',
        '\u0148': 'n',
        '\u014b': 'n',
        '\u014c': 'O',
        '\u014e': 'O',
        '\u0150': 'O',
        '\u014d': 'o',
        '\u014f': 'o',
        '\u0151': 'o',
        '\u0154': 'R',
        '\u0156': 'R',
        '\u0158': 'R',
        '\u0155': 'r',
        '\u0157': 'r',
        '\u0159': 'r',
        '\u015a': 'S',
        '\u015c': 'S',
        '\u015e': 'S',
        '\u0160': 'S',
        '\u015b': 's',
        '\u015d': 's',
        '\u015f': 's',
        '\u0161': 's',
        '\u0162': 'T',
        '\u0164': 'T',
        '\u0166': 'T',
        '\u0163': 't',
        '\u0165': 't',
        '\u0167': 't',
        '\u0168': 'U',
        '\u016a': 'U',
        '\u016c': 'U',
        '\u016e': 'U',
        '\u0170': 'U',
        '\u0172': 'U',
        '\u0169': 'u',
        '\u016b': 'u',
        '\u016d': 'u',
        '\u016f': 'u',
        '\u0171': 'u',
        '\u0173': 'u',
        '\u0174': 'W',
        '\u0175': 'w',
        '\u0176': 'Y',
        '\u0177': 'y',
        '\u0178': 'Y',
        '\u0179': 'Z',
        '\u017b': 'Z',
        '\u017d': 'Z',
        '\u017a': 'z',
        '\u017c': 'z',
        '\u017e': 'z',
        '\u0132': 'IJ',
        '\u0133': 'ij',
        '\u0152': 'Oe',
        '\u0153': 'oe',
        '\u0149': "'n",
        '\u017f': 's'
    };
    /** Used to map characters to HTML entities. */ var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    /** Used to map HTML entities to characters. */ var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
    };
    /** Used to escape characters for inclusion in compiled string literals. */ var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };
    /** Built-in method references without a dependency on `root`. */ var freeParseFloat = parseFloat, freeParseInt = parseInt;
    /** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
    /** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
    /** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
    /** Used to access faster Node.js helpers. */ var nodeUtil = function() {
        try {
            // Use `util.types` for Node.js 10+.
            var types = freeModule && freeModule.require && freeModule.require('util').types;
            if (types) return types;
            // Legacy `process.binding('util')` for Node.js < 10.
            return freeProcess && freeProcess.binding && freeProcess.binding('util');
        } catch (e) {}
    }();
    /* Node.js helper references. */ var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    /*--------------------------------------------------------------------------*/ /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */ function apply(func, thisArg, args) {
        switch(args.length){
            case 0:
                return func.call(thisArg);
            case 1:
                return func.call(thisArg, args[0]);
            case 2:
                return func.call(thisArg, args[0], args[1]);
            case 3:
                return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
    }
    /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */ function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
    }
    /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */ function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (iteratee(array[index], index, array) === false) break;
        }
        return array;
    }
    /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */ function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while(length--){
            if (iteratee(array[length], length, array) === false) break;
        }
        return array;
    }
    /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */ function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (!predicate(array[index], index, array)) return false;
        }
        return true;
    }
    /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */ function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while(++index < length){
            var value = array[index];
            if (predicate(value, index, array)) result[resIndex++] = value;
        }
        return result;
    }
    /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */ function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
    }
    /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */ function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (comparator(value, array[index])) return true;
        }
        return false;
    }
    /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */ function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while(++index < length)result[index] = iteratee(array[index], index, array);
        return result;
    }
    /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */ function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while(++index < length)array[offset + index] = values[index];
        return array;
    }
    /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */ function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) accumulator = array[++index];
        while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
        return accumulator;
    }
    /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */ function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) accumulator = array[--length];
        while(length--)accumulator = iteratee(accumulator, array[length], length, array);
        return accumulator;
    }
    /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */ function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (predicate(array[index], index, array)) return true;
        }
        return false;
    }
    /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */ var asciiSize = baseProperty('length');
    /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */ function asciiToArray(string) {
        return string.split('');
    }
    /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */ function asciiWords(string) {
        return string.match(reAsciiWord) || [];
    }
    /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */ function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection) {
            if (predicate(value, key, collection)) {
                result = key;
                return false;
            }
        });
        return result;
    }
    /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while(fromRight ? index-- : ++index < length){
            if (predicate(array[index], index, array)) return index;
        }
        return -1;
    }
    /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while(++index < length){
            if (comparator(array[index], value)) return index;
        }
        return -1;
    }
    /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */ function baseIsNaN(value) {
        return value !== value;
    }
    /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */ function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
    }
    /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */ function baseProperty(key) {
        return function(object) {
            return object == null ? undefined : object[key];
        };
    }
    /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */ function basePropertyOf(object) {
        return function(key) {
            return object == null ? undefined : object[key];
        };
    }
    /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */ function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
    }
    /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */ function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while(length--)array[length] = array[length].value;
        return array;
    }
    /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */ function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while(++index < length){
            var current = iteratee(array[index]);
            if (current !== undefined) result = result === undefined ? current : result + current;
        }
        return result;
    }
    /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */ function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while(++index < n)result[index] = iteratee(index);
        return result;
    }
    /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */ function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
            return [
                key,
                object[key]
            ];
        });
    }
    /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */ function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
    }
    /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */ function baseUnary(func) {
        return function(value) {
            return func(value);
        };
    }
    /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */ function baseValues(object, props) {
        return arrayMap(props, function(key) {
            return object[key];
        });
    }
    /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */ function cacheHas(cache, key) {
        return cache.has(key);
    }
    /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */ function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while(++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
        return index;
    }
    /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */ function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while(index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
        return index;
    }
    /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */ function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while(length--)if (array[length] === placeholder) ++result;
        return result;
    }
    /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */ var deburrLetter = basePropertyOf(deburredLetters);
    /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */ var escapeHtmlChar = basePropertyOf(htmlEscapes);
    /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */ function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
    }
    /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */ function getValue(object, key) {
        return object == null ? undefined : object[key];
    }
    /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */ function hasUnicode(string) {
        return reHasUnicode.test(string);
    }
    /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */ function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
    }
    /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */ function iteratorToArray(iterator) {
        var data, result = [];
        while(!(data = iterator.next()).done)result.push(data.value);
        return result;
    }
    /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */ function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
            result[++index] = [
                key,
                value
            ];
        });
        return result;
    }
    /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */ function overArg(func, transform) {
        return function(arg) {
            return func(transform(arg));
        };
    }
    /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */ function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while(++index < length){
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
                array[index] = PLACEHOLDER;
                result[resIndex++] = index;
            }
        }
        return result;
    }
    /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */ function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
            result[++index] = value;
        });
        return result;
    }
    /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */ function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
            result[++index] = [
                value,
                value
            ];
        });
        return result;
    }
    /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while(++index < length){
            if (array[index] === value) return index;
        }
        return -1;
    }
    /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while(index--){
            if (array[index] === value) return index;
        }
        return index;
    }
    /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */ function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */ function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */ function trimmedEndIndex(string) {
        var index = string.length;
        while(index-- && reWhitespace.test(string.charAt(index)));
        return index;
    }
    /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */ var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */ function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while(reUnicode.test(string))++result;
        return result;
    }
    /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */ function unicodeToArray(string) {
        return string.match(reUnicode) || [];
    }
    /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */ function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
    }
    /*--------------------------------------------------------------------------*/ /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */ var runInContext = function runInContext(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        /** Built-in constructor references. */ var Array1 = context.Array, Date = context.Date, Error = context.Error, Function1 = context.Function, Math = context.Math, Object1 = context.Object, RegExp1 = context.RegExp, String = context.String, TypeError = context.TypeError;
        /** Used for built-in method references. */ var arrayProto = Array1.prototype, funcProto = Function1.prototype, objectProto = Object1.prototype;
        /** Used to detect overreaching core-js shims. */ var coreJsData = context['__core-js_shared__'];
        /** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
        /** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
        /** Used to generate unique IDs. */ var idCounter = 0;
        /** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
            return uid ? 'Symbol(src)_1.' + uid : '';
        }();
        /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */ var nativeObjectToString = objectProto.toString;
        /** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object1);
        /** Used to restore the original `_` reference in `_.noConflict`. */ var oldDash = root._;
        /** Used to detect if a method is native. */ var reIsNative = RegExp1('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        /** Built-in value references. */ var Buffer = moduleExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object1.getPrototypeOf, Object1), objectCreate = Object1.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        var defineProperty = function() {
            try {
                var func = getNative(Object1, 'defineProperty');
                func({}, '', {});
                return func;
            } catch (e) {}
        }();
        /** Mocked built-ins. */ var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        /* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object1.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object1.keys, Object1), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse;
        /* Built-in method references that are verified to be native. */ var DataView = getNative(context, 'DataView'), Map = getNative(context, 'Map'), Promise = getNative(context, 'Promise'), Set = getNative(context, 'Set'), WeakMap = getNative(context, 'WeakMap'), nativeCreate = getNative(Object1, 'create');
        /** Used to store function metadata. */ var metaMap = WeakMap && new WeakMap;
        /** Used to lookup unminified function names. */ var realNames = {};
        /** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        /** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
        /*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */ function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                if (value instanceof LodashWrapper) return value;
                if (hasOwnProperty.call(value, '__wrapped__')) return wrapperClone(value);
            }
            return new LodashWrapper(value);
        }
        /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */ var baseCreate = function() {
            function object() {}
            return function(proto) {
                if (!isObject(proto)) return {};
                if (objectCreate) return objectCreate(proto);
                object.prototype = proto;
                var result = new object;
                object.prototype = undefined;
                return result;
            };
        }();
        /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */ function baseLodash() {
        // No operation performed.
        }
        /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */ function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined;
        }
        /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */ lodash.templateSettings = {
            /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */ 'escape': reEscape,
            /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */ 'evaluate': reEvaluate,
            /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */ 'interpolate': reInterpolate,
            /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */ 'variable': '',
            /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */ 'imports': {
                /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */ '_': lodash
            }
        };
        // Ensure wrappers are instances of `baseLodash`.
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        /*------------------------------------------------------------------------*/ /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */ function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
        }
        /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */ function lazyClone() {
            var result = new LazyWrapper(this.__wrapped__);
            result.__actions__ = copyArray(this.__actions__);
            result.__dir__ = this.__dir__;
            result.__filtered__ = this.__filtered__;
            result.__iteratees__ = copyArray(this.__iteratees__);
            result.__takeCount__ = this.__takeCount__;
            result.__views__ = copyArray(this.__views__);
            return result;
        }
        /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */ function lazyReverse() {
            if (this.__filtered__) {
                var result = new LazyWrapper(this);
                result.__dir__ = -1;
                result.__filtered__ = true;
            } else {
                result = this.clone();
                result.__dir__ *= -1;
            }
            return result;
        }
        /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */ function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
            var result = [];
            outer: while(length-- && resIndex < takeCount){
                index += dir;
                var iterIndex = -1, value = array[index];
                while(++iterIndex < iterLength){
                    var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type, computed = iteratee(value);
                    if (type == LAZY_MAP_FLAG) value = computed;
                    else if (!computed) {
                        if (type == LAZY_FILTER_FLAG) continue outer;
                        else break outer;
                    }
                }
                result[resIndex++] = value;
            }
            return result;
        }
        // Ensure `LazyWrapper` is an instance of `baseLodash`.
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        /*------------------------------------------------------------------------*/ /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */ function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
        }
        /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
        }
        /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */ function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
        }
        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        /*------------------------------------------------------------------------*/ /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */ function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
        }
        /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) return false;
            var lastIndex = data.length - 1;
            if (index == lastIndex) data.pop();
            else splice.call(data, index, 1);
            --this.size;
            return true;
        }
        /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1];
        }
        /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */ function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
                ++this.size;
                data.push([
                    key,
                    value
                ]);
            } else data[index][1] = value;
            return this;
        }
        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        /*------------------------------------------------------------------------*/ /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while(++index < length){
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */ function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
                'hash': new Hash,
                'map': new (Map || ListCache),
                'string': new Hash
            };
        }
        /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function mapCacheDelete(key) {
            var result = getMapData(this, key)['delete'](key);
            this.size -= result ? 1 : 0;
            return result;
        }
        /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function mapCacheGet(key) {
            return getMapData(this, key).get(key);
        }
        /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function mapCacheHas(key) {
            return getMapData(this, key).has(key);
        }
        /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */ function mapCacheSet(key, value) {
            var data = getMapData(this, key), size = data.size;
            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this;
        }
        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        /*------------------------------------------------------------------------*/ /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */ function SetCache(values) {
            var index = -1, length = values == null ? 0 : values.length;
            this.__data__ = new MapCache;
            while(++index < length)this.add(values[index]);
        }
        /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */ function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
        }
        /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */ function setCacheHas(value) {
            return this.__data__.has(value);
        }
        // Add methods to `SetCache`.
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        /*------------------------------------------------------------------------*/ /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
        }
        /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */ function stackClear() {
            this.__data__ = new ListCache;
            this.size = 0;
        }
        /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function stackDelete(key) {
            var data = this.__data__, result = data['delete'](key);
            this.size = data.size;
            return result;
        }
        /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function stackGet(key) {
            return this.__data__.get(key);
        }
        /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function stackHas(key) {
            return this.__data__.has(key);
        }
        /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */ function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
                var pairs = data.__data__;
                if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                    pairs.push([
                        key,
                        value
                    ]);
                    this.size = ++data.size;
                    return this;
                }
                data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
        }
        // Add methods to `Stack`.
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        /*------------------------------------------------------------------------*/ /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */ function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
            for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
            isIndex(key, length)))) result.push(key);
            return result;
        }
        /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */ function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined;
        }
        /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */ function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */ function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
        }
        /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function assignMergeValue(object, key, value) {
            if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
        }
        /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
        }
        /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */ function assocIndexOf(array, key) {
            var length = array.length;
            while(length--){
                if (eq(array[length][0], key)) return length;
            }
            return -1;
        }
        /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */ function baseAggregator(collection, setter, iteratee, accumulator) {
            baseEach(collection, function(value, key, collection) {
                setter(accumulator, value, iteratee(value), collection);
            });
            return accumulator;
        }
        /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */ function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
        }
        /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */ function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
        }
        /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function baseAssignValue(object, key, value) {
            if (key == '__proto__' && defineProperty) defineProperty(object, key, {
                'configurable': true,
                'enumerable': true,
                'value': value,
                'writable': true
            });
            else object[key] = value;
        }
        /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */ function baseAt(object, paths) {
            var index = -1, length = paths.length, result = Array1(length), skip = object == null;
            while(++index < length)result[index] = skip ? undefined : get(object, paths[index]);
            return result;
        }
        /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */ function baseClamp(number, lower, upper) {
            if (number === number) {
                if (upper !== undefined) number = number <= upper ? number : upper;
                if (lower !== undefined) number = number >= lower ? number : lower;
            }
            return number;
        }
        /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */ function baseClone(value, bitmask, customizer, key, object, stack) {
            var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
            if (result !== undefined) return result;
            if (!isObject(value)) return value;
            var isArr = isArray(value);
            if (isArr) {
                result = initCloneArray(value);
                if (!isDeep) return copyArray(value, result);
            } else {
                var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
                if (isBuffer(value)) return cloneBuffer(value, isDeep);
                if (tag == objectTag || tag == argsTag || isFunc && !object) {
                    result = isFlat || isFunc ? {} : initCloneObject(value);
                    if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
                } else {
                    if (!cloneableTags[tag]) return object ? value : {};
                    result = initCloneByTag(value, tag, isDeep);
                }
            }
            // Check for circular references and return its corresponding clone.
            stack || (stack = new Stack);
            var stacked = stack.get(value);
            if (stacked) return stacked;
            stack.set(value, result);
            if (isSet(value)) value.forEach(function(subValue) {
                result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
            else if (isMap(value)) value.forEach(function(subValue, key) {
                result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined : keysFunc(value);
            arrayEach(props || value, function(subValue, key) {
                if (props) {
                    key = subValue;
                    subValue = value[key];
                }
                // Recursively populate clone (susceptible to call stack limits).
                assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
            return result;
        }
        /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */ function baseConforms(source) {
            var props = keys(source);
            return function(object) {
                return baseConformsTo(object, source, props);
            };
        }
        /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */ function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) return !length;
            object = Object1(object);
            while(length--){
                var key = props[length], predicate = source[key], value = object[key];
                if (value === undefined && !(key in object) || !predicate(value)) return false;
            }
            return true;
        }
        /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */ function baseDelay(func, wait, args) {
            if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            return setTimeout(function() {
                func.apply(undefined, args);
            }, wait);
        }
        /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */ function baseDifference(array, values, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
            if (!length) return result;
            if (iteratee) values = arrayMap(values, baseUnary(iteratee));
            if (comparator) {
                includes = arrayIncludesWith;
                isCommon = false;
            } else if (values.length >= LARGE_ARRAY_SIZE) {
                includes = cacheHas;
                isCommon = false;
                values = new SetCache(values);
            }
            outer: while(++index < length){
                var value = array[index], computed = iteratee == null ? value : iteratee(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                    var valuesIndex = valuesLength;
                    while(valuesIndex--){
                        if (values[valuesIndex] === computed) continue outer;
                    }
                    result.push(value);
                } else if (!includes(values, computed, comparator)) result.push(value);
            }
            return result;
        }
        /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */ var baseEach = createBaseEach(baseForOwn);
        /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */ var baseEachRight = createBaseEach(baseForOwnRight, true);
        /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */ function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function(value, index, collection) {
                result = !!predicate(value, index, collection);
                return result;
            });
            return result;
        }
        /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */ function baseExtremum(array, iteratee, comparator) {
            var index = -1, length = array.length;
            while(++index < length){
                var value = array[index], current = iteratee(value);
                if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) var computed = current, result = value;
            }
            return result;
        }
        /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */ function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) start = -start > length ? 0 : length + start;
            end = end === undefined || end > length ? length : toInteger(end);
            if (end < 0) end += length;
            end = start > end ? 0 : toLength(end);
            while(start < end)array[start++] = value;
            return array;
        }
        /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */ function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection, function(value, index, collection) {
                if (predicate(value, index, collection)) result.push(value);
            });
            return result;
        }
        /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */ function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result || (result = []);
            while(++index < length){
                var value = array[index];
                if (depth > 0 && predicate(value)) {
                    if (depth > 1) // Recursively flatten arrays (susceptible to call stack limits).
                    baseFlatten(value, depth - 1, predicate, isStrict, result);
                    else arrayPush(result, value);
                } else if (!isStrict) result[result.length] = value;
            }
            return result;
        }
        /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */ var baseFor = createBaseFor();
        /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */ var baseForRight = createBaseFor(true);
        /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */ function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
        }
        /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */ function baseForOwnRight(object, iteratee) {
            return object && baseForRight(object, iteratee, keys);
        }
        /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */ function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
                return isFunction(object[key]);
            });
        }
        /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */ function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while(object != null && index < length)object = object[toKey(path[index++])];
            return index && index == length ? object : undefined;
        }
        /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */ function baseGetTag(value) {
            if (value == null) return value === undefined ? undefinedTag : nullTag;
            return symToStringTag && symToStringTag in Object1(value) ? getRawTag(value) : objectToString(value);
        }
        /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */ function baseGt(value, other) {
            return value > other;
        }
        /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */ function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
        }
        /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */ function baseHasIn(object, key) {
            return object != null && key in Object1(object);
        }
        /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */ function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */ function baseIntersection(arrays, iteratee, comparator) {
            var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array1(othLength), maxLength = Infinity, result = [];
            while(othIndex--){
                var array = arrays[othIndex];
                if (othIndex && iteratee) array = arrayMap(array, baseUnary(iteratee));
                maxLength = nativeMin(array.length, maxLength);
                caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer: while(++index < length && result.length < maxLength){
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                    othIndex = othLength;
                    while(--othIndex){
                        var cache = caches[othIndex];
                        if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer;
                    }
                    if (seen) seen.push(computed);
                    result.push(value);
                }
            }
            return result;
        }
        /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */ function baseInverter(object, setter, iteratee, accumulator) {
            baseForOwn(object, function(value, key, object) {
                setter(accumulator, iteratee(value), key, object);
            });
            return accumulator;
        }
        /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */ function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined : apply(func, object, args);
        }
        /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */ function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */ function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */ function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */ function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) return true;
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
                if (!isBuffer(other)) return false;
                objIsArr = true;
                objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
                stack || (stack = new Stack);
                return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
                if (objIsWrapped || othIsWrapped) {
                    var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                    stack || (stack = new Stack);
                    return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                }
            }
            if (!isSameTag) return false;
            stack || (stack = new Stack);
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */ function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
        }
        /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */ function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) return !length;
            object = Object1(object);
            while(index--){
                var data = matchData[index];
                if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
            }
            while(++index < length){
                data = matchData[index];
                var key = data[0], objValue = object[key], srcValue = data[1];
                if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) return false;
                } else {
                    var stack = new Stack;
                    if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                    if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
                }
            }
            return true;
        }
        /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */ function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) return false;
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }
        /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */ function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */ function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
        }
        /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */ function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */ function baseIteratee(value) {
            // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
            // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
            if (typeof value == 'function') return value;
            if (value == null) return identity;
            if (typeof value == 'object') return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            return property(value);
        }
        /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */ function baseKeys(object) {
            if (!isPrototype(object)) return nativeKeys(object);
            var result = [];
            for(var key in Object1(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
            return result;
        }
        /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */ function baseKeysIn(object) {
            if (!isObject(object)) return nativeKeysIn(object);
            var isProto = isPrototype(object), result = [];
            for(var key in object)if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
            return result;
        }
        /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */ function baseLt(value, other) {
            return value < other;
        }
        /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */ function baseMap(collection, iteratee) {
            var index = -1, result = isArrayLike(collection) ? Array1(collection.length) : [];
            baseEach(collection, function(value, key, collection) {
                result[++index] = iteratee(value, key, collection);
            });
            return result;
        }
        /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */ function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            return function(object) {
                return object === source || baseIsMatch(object, source, matchData);
            };
        }
        /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */ function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
            return function(object) {
                var objValue = get(object, path);
                return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
        }
        /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */ function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) return;
            baseFor(source, function(srcValue, key) {
                stack || (stack = new Stack);
                if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                else {
                    var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
                    if (newValue === undefined) newValue = srcValue;
                    assignMergeValue(object, key, newValue);
                }
            }, keysIn);
        }
        /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */ function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
                assignMergeValue(object, key, stacked);
                return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
            var isCommon = newValue === undefined;
            if (isCommon) {
                var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                newValue = srcValue;
                if (isArr || isBuff || isTyped) {
                    if (isArray(objValue)) newValue = objValue;
                    else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
                    else if (isBuff) {
                        isCommon = false;
                        newValue = cloneBuffer(srcValue, true);
                    } else if (isTyped) {
                        isCommon = false;
                        newValue = cloneTypedArray(srcValue, true);
                    } else newValue = [];
                } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    newValue = objValue;
                    if (isArguments(objValue)) newValue = toPlainObject(objValue);
                    else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
                } else isCommon = false;
            }
            if (isCommon) {
                // Recursively merge objects and arrays (susceptible to call stack limits).
                stack.set(srcValue, newValue);
                mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
                stack['delete'](srcValue);
            }
            assignMergeValue(object, key, newValue);
        }
        /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */ function baseNth(array, n) {
            var length = array.length;
            if (!length) return;
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined;
        }
        /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */ function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) iteratees = arrayMap(iteratees, function(iteratee) {
                if (isArray(iteratee)) return function(value) {
                    return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
                };
                return iteratee;
            });
            else iteratees = [
                identity
            ];
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result = baseMap(collection, function(value, key, collection) {
                var criteria = arrayMap(iteratees, function(iteratee) {
                    return iteratee(value);
                });
                return {
                    'criteria': criteria,
                    'index': ++index,
                    'value': value
                };
            });
            return baseSortBy(result, function(object, other) {
                return compareMultiple(object, other, orders);
            });
        }
        /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */ function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
                return hasIn(object, path);
            });
        }
        /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */ function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result = {};
            while(++index < length){
                var path = paths[index], value = baseGet(object, path);
                if (predicate(value, path)) baseSet(result, castPath(path, object), value);
            }
            return result;
        }
        /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */ function basePropertyDeep(path) {
            return function(object) {
                return baseGet(object, path);
            };
        }
        /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */ function basePullAll(array, values, iteratee, comparator) {
            var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
            if (array === values) values = copyArray(values);
            if (iteratee) seen = arrayMap(array, baseUnary(iteratee));
            while(++index < length){
                var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
                while((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1){
                    if (seen !== array) splice.call(seen, fromIndex, 1);
                    splice.call(array, fromIndex, 1);
                }
            }
            return array;
        }
        /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */ function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while(length--){
                var index = indexes[length];
                if (length == lastIndex || index !== previous) {
                    var previous = index;
                    if (isIndex(index)) splice.call(array, index, 1);
                    else baseUnset(array, index);
                }
            }
            return array;
        }
        /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */ function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */ function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array1(length);
            while(length--){
                result[fromRight ? length : ++index] = start;
                start += step;
            }
            return result;
        }
        /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */ function baseRepeat(string, n) {
            var result = '';
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;
            // Leverage the exponentiation by squaring algorithm for a faster repeat.
            // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
            do {
                if (n % 2) result += string;
                n = nativeFloor(n / 2);
                if (n) string += string;
            }while (n)
            return result;
        }
        /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */ function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + '');
        }
        /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */ function baseSample(collection) {
            return arraySample(values(collection));
        }
        /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */ function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */ function baseSet(object, path, value, customizer) {
            if (!isObject(object)) return object;
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while(nested != null && ++index < length){
                var key = toKey(path[index]), newValue = value;
                if (key === '__proto__' || key === 'constructor' || key === 'prototype') return object;
                if (index != lastIndex) {
                    var objValue = nested[key];
                    newValue = customizer ? customizer(objValue, key, nested) : undefined;
                    if (newValue === undefined) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
                assignValue(nested, key, newValue);
                nested = nested[key];
            }
            return object;
        }
        /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */ var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
        };
        /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */ var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, 'toString', {
                'configurable': true,
                'enumerable': false,
                'value': constant(string),
                'writable': true
            });
        };
        /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */ function baseShuffle(collection) {
            return shuffleSelf(values(collection));
        }
        /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */ function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) start = -start > length ? 0 : length + start;
            end = end > length ? length : end;
            if (end < 0) end += length;
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array1(length);
            while(++index < length)result[index] = array[index + start];
            return result;
        }
        /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */ function baseSome(collection, predicate) {
            var result;
            baseEach(collection, function(value, index, collection) {
                result = predicate(value, index, collection);
                return !result;
            });
            return !!result;
        }
        /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */ function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                while(low < high){
                    var mid = low + high >>> 1, computed = array[mid];
                    if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) low = mid + 1;
                    else high = mid;
                }
                return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
        }
        /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */ function baseSortedIndexBy(array, value, iteratee, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) return 0;
            value = iteratee(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined;
            while(low < high){
                var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
                if (valIsNaN) var setLow = retHighest || othIsReflexive;
                else if (valIsUndefined) setLow = othIsReflexive && (retHighest || othIsDefined);
                else if (valIsNull) setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
                else if (valIsSymbol) setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
                else if (othIsNull || othIsSymbol) setLow = false;
                else setLow = retHighest ? computed <= value : computed < value;
                if (setLow) low = mid + 1;
                else high = mid;
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
        }
        /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */ function baseSortedUniq(array, iteratee) {
            var index = -1, length = array.length, resIndex = 0, result = [];
            while(++index < length){
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                if (!index || !eq(computed, seen)) {
                    var seen = computed;
                    result[resIndex++] = value === 0 ? 0 : value;
                }
            }
            return result;
        }
        /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */ function baseToNumber(value) {
            if (typeof value == 'number') return value;
            if (isSymbol(value)) return NAN;
            return +value;
        }
        /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */ function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') return value;
            if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
            return arrayMap(value, baseToString) + '';
            if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : '';
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */ function baseUniq(array, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
            if (comparator) {
                isCommon = false;
                includes = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
                var set = iteratee ? null : createSet(array);
                if (set) return setToArray(set);
                isCommon = false;
                includes = cacheHas;
                seen = new SetCache;
            } else seen = iteratee ? [] : result;
            outer: while(++index < length){
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                    var seenIndex = seen.length;
                    while(seenIndex--){
                        if (seen[seenIndex] === computed) continue outer;
                    }
                    if (iteratee) seen.push(computed);
                    result.push(value);
                } else if (!includes(seen, computed, comparator)) {
                    if (seen !== result) seen.push(computed);
                    result.push(value);
                }
            }
            return result;
        }
        /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */ function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
        }
        /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */ function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */ function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while((fromRight ? index-- : ++index < length) && predicate(array[index], index, array));
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */ function baseWrapperValue(value, actions) {
            var result = value;
            if (result instanceof LazyWrapper) result = result.value();
            return arrayReduce(actions, function(result, action) {
                return action.func.apply(action.thisArg, arrayPush([
                    result
                ], action.args));
            }, result);
        }
        /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */ function baseXor(arrays, iteratee, comparator) {
            var length = arrays.length;
            if (length < 2) return length ? baseUniq(arrays[0]) : [];
            var index = -1, result = Array1(length);
            while(++index < length){
                var array = arrays[index], othIndex = -1;
                while(++othIndex < length)if (othIndex != index) result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
            }
            return baseUniq(baseFlatten(result, 1), iteratee, comparator);
        }
        /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */ function baseZipObject(props, values, assignFunc) {
            var index = -1, length = props.length, valsLength = values.length, result = {};
            while(++index < length){
                var value = index < valsLength ? values[index] : undefined;
                assignFunc(result, props[index], value);
            }
            return result;
        }
        /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */ function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
        }
        /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */ function castFunction(value) {
            return typeof value == 'function' ? value : identity;
        }
        /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */ function castPath(value, object) {
            if (isArray(value)) return value;
            return isKey(value, object) ? [
                value
            ] : stringToPath(toString(value));
        }
        /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */ var castRest = baseRest;
        /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */ function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
        }
        /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */ var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
        };
        /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */ function cloneBuffer(buffer, isDeep) {
            if (isDeep) return buffer.slice();
            var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result);
            return result;
        }
        /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */ function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array(result).set(new Uint8Array(arrayBuffer));
            return result;
        }
        /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */ function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */ function cloneRegExp(regexp) {
            var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result.lastIndex = regexp.lastIndex;
            return result;
        }
        /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */ function cloneSymbol(symbol) {
            return symbolValueOf ? Object1(symbolValueOf.call(symbol)) : {};
        }
        /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */ function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */ function compareAscending(value, other) {
            if (value !== other) {
                var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
                var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
                if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
                if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
            }
            return 0;
        }
        /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */ function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while(++index < length){
                var result = compareAscending(objCriteria[index], othCriteria[index]);
                if (result) {
                    if (index >= ordersLength) return result;
                    var order = orders[index];
                    return result * (order == 'desc' ? -1 : 1);
                }
            }
            // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
            // that causes it, under certain circumstances, to provide the same value for
            // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
            // for more details.
            //
            // This also ensures a stable sort in V8 and other engines.
            // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
            return object.index - other.index;
        }
        /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */ function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array1(leftLength + rangeLength), isUncurried = !isCurried;
            while(++leftIndex < leftLength)result[leftIndex] = partials[leftIndex];
            while(++argsIndex < holdersLength)if (isUncurried || argsIndex < argsLength) result[holders[argsIndex]] = args[argsIndex];
            while(rangeLength--)result[leftIndex++] = args[argsIndex++];
            return result;
        }
        /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */ function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array1(rangeLength + rightLength), isUncurried = !isCurried;
            while(++argsIndex < rangeLength)result[argsIndex] = args[argsIndex];
            var offset = argsIndex;
            while(++rightIndex < rightLength)result[offset + rightIndex] = partials[rightIndex];
            while(++holdersIndex < holdersLength)if (isUncurried || argsIndex < argsLength) result[offset + holders[holdersIndex]] = args[argsIndex++];
            return result;
        }
        /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */ function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array1(length));
            while(++index < length)array[index] = source[index];
            return array;
        }
        /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */ function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while(++index < length){
                var key = props[index];
                var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
                if (newValue === undefined) newValue = source[key];
                if (isNew) baseAssignValue(object, key, newValue);
                else assignValue(object, key, newValue);
            }
            return object;
        }
        /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */ function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
        }
        /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */ function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
        }
        /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */ function createAggregator(setter, initializer) {
            return function(collection, iteratee) {
                var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
                return func(collection, setter, getIteratee(iteratee, 2), accumulator);
            };
        }
        /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */ function createAssigner(assigner) {
            return baseRest(function(object, sources) {
                var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
                customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1;
                }
                object = Object1(object);
                while(++index < length){
                    var source = sources[index];
                    if (source) assigner(object, source, index, customizer);
                }
                return object;
            });
        }
        /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */ function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee) {
                if (collection == null) return collection;
                if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
                var length = collection.length, index = fromRight ? length : -1, iterable = Object1(collection);
                while(fromRight ? index-- : ++index < length){
                    if (iteratee(iterable[index], index, iterable) === false) break;
                }
                return collection;
            };
        }
        /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */ function createBaseFor(fromRight) {
            return function(object, iteratee, keysFunc) {
                var index = -1, iterable = Object1(object), props = keysFunc(object), length = props.length;
                while(length--){
                    var key = props[fromRight ? length : ++index];
                    if (iteratee(iterable[key], key, iterable) === false) break;
                }
                return object;
            };
        }
        /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
        }
        /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */ function createCaseFirst(methodName) {
            return function(string) {
                string = toString(string);
                var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
                var chr = strSymbols ? strSymbols[0] : string.charAt(0);
                var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
                return chr[methodName]() + trailing;
            };
        }
        /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */ function createCompounder(callback) {
            return function(string) {
                return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
            };
        }
        /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */ function createCtor(Ctor) {
            return function() {
                // Use a `switch` statement to work with class constructors. See
                // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
                // for more details.
                var args = arguments;
                switch(args.length){
                    case 0:
                        return new Ctor;
                    case 1:
                        return new Ctor(args[0]);
                    case 2:
                        return new Ctor(args[0], args[1]);
                    case 3:
                        return new Ctor(args[0], args[1], args[2]);
                    case 4:
                        return new Ctor(args[0], args[1], args[2], args[3]);
                    case 5:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                    case 6:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                    case 7:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                }
                var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
                // Mimic the constructor's `return` behavior.
                // See https://es5.github.io/#x13.2.2 for more details.
                return isObject(result) ? result : thisBinding;
            };
        }
        /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
                var length = arguments.length, args = Array1(length), index = length, placeholder = getHolder(wrapper);
                while(index--)args[index] = arguments[index];
                var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                length -= holders.length;
                if (length < arity) return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return apply(fn, this, args);
            }
            return wrapper;
        }
        /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */ function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
                var iterable = Object1(collection);
                if (!isArrayLike(collection)) {
                    var iteratee = getIteratee(predicate, 3);
                    collection = keys(collection);
                    predicate = function(key) {
                        return iteratee(iterable[key], key, iterable);
                    };
                }
                var index = findIndexFunc(collection, predicate, fromIndex);
                return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
            };
        }
        /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */ function createFlow(fromRight) {
            return flatRest(function(funcs) {
                var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
                if (fromRight) funcs.reverse();
                while(index--){
                    var func = funcs[index];
                    if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
                    if (prereq && !wrapper && getFuncName(func) == 'wrapper') var wrapper = new LodashWrapper([], true);
                }
                index = wrapper ? index : length;
                while(++index < length){
                    func = funcs[index];
                    var funcName = getFuncName(func), data = funcName == 'wrapper' ? getData(func) : undefined;
                    if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                    else wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
                return function() {
                    var args = arguments, value = args[0];
                    if (wrapper && args.length == 1 && isArray(value)) return wrapper.plant(value).value();
                    var index = 0, result = length ? funcs[index].apply(this, args) : value;
                    while(++index < length)result = funcs[index].call(this, result);
                    return result;
                };
            });
        }
        /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
            function wrapper() {
                var length = arguments.length, args = Array1(length), index = length;
                while(index--)args[index] = arguments[index];
                if (isCurried) var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
                if (partials) args = composeArgs(args, partials, holders, isCurried);
                if (partialsRight) args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
                length -= holdersCount;
                if (isCurried && length < arity) {
                    var newHolders = replaceHolders(args, placeholder);
                    return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
                }
                var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
                length = args.length;
                if (argPos) args = reorder(args, argPos);
                else if (isFlip && length > 1) args.reverse();
                if (isAry && ary < length) args.length = ary;
                if (this && this !== root && this instanceof wrapper) fn = Ctor || createCtor(fn);
                return fn.apply(thisBinding, args);
            }
            return wrapper;
        }
        /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */ function createInverter(setter, toIteratee) {
            return function(object, iteratee) {
                return baseInverter(object, setter, toIteratee(iteratee), {});
            };
        }
        /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */ function createMathOperation(operator, defaultValue) {
            return function(value, other) {
                var result;
                if (value === undefined && other === undefined) return defaultValue;
                if (value !== undefined) result = value;
                if (other !== undefined) {
                    if (result === undefined) return other;
                    if (typeof value == 'string' || typeof other == 'string') {
                        value = baseToString(value);
                        other = baseToString(other);
                    } else {
                        value = baseToNumber(value);
                        other = baseToNumber(other);
                    }
                    result = operator(value, other);
                }
                return result;
            };
        }
        /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */ function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
                iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
                return baseRest(function(args) {
                    var thisArg = this;
                    return arrayFunc(iteratees, function(iteratee) {
                        return apply(iteratee, thisArg, args);
                    });
                });
            });
        }
        /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */ function createPadding(length, chars) {
            chars = chars === undefined ? ' ' : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) return charsLength ? baseRepeat(chars, length) : chars;
            var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
        }
        /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */ function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
                var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array1(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                while(++leftIndex < leftLength)args[leftIndex] = partials[leftIndex];
                while(argsLength--)args[leftIndex++] = arguments[++argsIndex];
                return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
        }
        /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */ function createRange(fromRight) {
            return function(start, end, step) {
                if (step && typeof step != 'number' && isIterateeCall(start, end, step)) end = step = undefined;
                // Ensure the sign of `-0` is preserved.
                start = toFinite(start);
                if (end === undefined) {
                    end = start;
                    start = 0;
                } else end = toFinite(end);
                step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
                return baseRange(start, end, step, fromRight);
            };
        }
        /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */ function createRelationalOperation(operator) {
            return function(value, other) {
                if (!(typeof value == 'string' && typeof other == 'string')) {
                    value = toNumber(value);
                    other = toNumber(other);
                }
                return operator(value, other);
            };
        }
        /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            var newData = [
                func,
                bitmask,
                thisArg,
                newPartials,
                newHolders,
                newPartialsRight,
                newHoldersRight,
                argPos,
                ary,
                arity
            ];
            var result = wrapFunc.apply(undefined, newData);
            if (isLaziable(func)) setData(result, newData);
            result.placeholder = placeholder;
            return setWrapToString(result, func, bitmask);
        }
        /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */ function createRound(methodName) {
            var func = Math[methodName];
            return function(number, precision) {
                number = toNumber(number);
                precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
                if (precision && nativeIsFinite(number)) {
                    // Shift with exponential notation to avoid floating-point issues.
                    // See [MDN](https://mdn.io/round#Examples) for more details.
                    var pair = (toString(number) + 'e').split('e'), value = func(pair[0] + 'e' + (+pair[1] + precision));
                    pair = (toString(value) + 'e').split('e');
                    return +(pair[0] + 'e' + (+pair[1] - precision));
                }
                return func(number);
            };
        }
        /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */ var createSet = !(Set && 1 / setToArray(new Set([
            ,
            -0
        ]))[1] == INFINITY) ? noop : function(values) {
            return new Set(values);
        };
        /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */ function createToPairs(keysFunc) {
            return function(object) {
                var tag = getTag(object);
                if (tag == mapTag) return mapToArray(object);
                if (tag == setTag) return setToPairs(object);
                return baseToPairs(object, keysFunc(object));
            };
        }
        /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */ function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            var length = partials ? partials.length : 0;
            if (!length) {
                bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
                partials = holders = undefined;
            }
            ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
            arity = arity === undefined ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                var partialsRight = partials, holdersRight = holders;
                partials = holders = undefined;
            }
            var data = isBindKey ? undefined : getData(func);
            var newData = [
                func,
                bitmask,
                thisArg,
                partials,
                holders,
                partialsRight,
                holdersRight,
                argPos,
                ary,
                arity
            ];
            if (data) mergeData(newData, data);
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            if (!bitmask || bitmask == WRAP_BIND_FLAG) var result = createBind(func, bitmask, thisArg);
            else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) result = createCurry(func, bitmask, arity);
            else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) result = createPartial(func, bitmask, thisArg, partials);
            else result = createHybrid.apply(undefined, newData);
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result, newData), func, bitmask);
        }
        /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */ function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) return srcValue;
            return objValue;
        }
        /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */ function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
                // Recursively merge objects and arrays (susceptible to call stack limits).
                stack.set(srcValue, objValue);
                baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
                stack['delete'](srcValue);
            }
            return objValue;
        }
        /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */ function customOmitClone(value) {
            return isPlainObject(value) ? undefined : value;
        }
        /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
            // Check that cyclic values are equal.
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
            var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
            stack.set(array, other);
            stack.set(other, array);
            // Ignore non-index properties.
            while(++index < arrLength){
                var arrValue = array[index], othValue = other[index];
                if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                if (compared !== undefined) {
                    if (compared) continue;
                    result = false;
                    break;
                }
                // Recursively compare arrays (susceptible to call stack limits).
                if (seen) {
                    if (!arraySome(other, function(othValue, othIndex) {
                        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
                    })) {
                        result = false;
                        break;
                    }
                } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    result = false;
                    break;
                }
            }
            stack['delete'](array);
            stack['delete'](other);
            return result;
        }
        /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch(tag){
                case dataViewTag:
                    if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
                    object = object.buffer;
                    other = other.buffer;
                case arrayBufferTag:
                    if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
                    return true;
                case boolTag:
                case dateTag:
                case numberTag:
                    // Coerce booleans to `1` or `0` and dates to milliseconds.
                    // Invalid dates are coerced to `NaN`.
                    return eq(+object, +other);
                case errorTag:
                    return object.name == other.name && object.message == other.message;
                case regexpTag:
                case stringTag:
                    // Coerce regexes to strings and treat strings, primitives and objects,
                    // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                    // for more details.
                    return object == other + '';
                case mapTag:
                    var convert = mapToArray;
                case setTag:
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                    convert || (convert = setToArray);
                    if (object.size != other.size && !isPartial) return false;
                    // Assume cyclic values are equal.
                    var stacked = stack.get(object);
                    if (stacked) return stacked == other;
                    bitmask |= COMPARE_UNORDERED_FLAG;
                    // Recursively compare objects (susceptible to call stack limits).
                    stack.set(object, other);
                    var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                    stack['delete'](object);
                    return result;
                case symbolTag:
                    if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
            return false;
        }
        /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) return false;
            var index = objLength;
            while(index--){
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
            }
            // Check that cyclic values are equal.
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) return objStacked == other && othStacked == object;
            var result = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while(++index < objLength){
                key = objProps[index];
                var objValue = object[key], othValue = other[key];
                if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                // Recursively compare objects (susceptible to call stack limits).
                if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                    result = false;
                    break;
                }
                skipCtor || (skipCtor = key == 'constructor');
            }
            if (result && !skipCtor) {
                var objCtor = object.constructor, othCtor = other.constructor;
                // Non `Object` object instances with different constructors are not equal.
                if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) result = false;
            }
            stack['delete'](object);
            stack['delete'](other);
            return result;
        }
        /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */ function flatRest(func) {
            return setToString(overRest(func, undefined, flatten), func + '');
        }
        /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */ function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
        }
        /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */ function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */ var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
        };
        /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */ function getFuncName(func) {
            var result = func.name + '', array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
            while(length--){
                var data = array[length], otherFunc = data.func;
                if (otherFunc == null || otherFunc == func) return data.name;
            }
            return result;
        }
        /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */ function getHolder(func) {
            var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
            return object.placeholder;
        }
        /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */ function getIteratee() {
            var result = lodash.iteratee || iteratee;
            result = result === iteratee ? baseIteratee : result;
            return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */ function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }
        /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */ function getMatchData(object) {
            var result = keys(object), length = result.length;
            while(length--){
                var key = result[length], value = object[key];
                result[length] = [
                    key,
                    value,
                    isStrictComparable(value)
                ];
            }
            return result;
        }
        /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */ function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
        }
        /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */ function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
                value[symToStringTag] = undefined;
                var unmasked = true;
            } catch (e) {}
            var result = nativeObjectToString.call(value);
            if (unmasked) {
                if (isOwn) value[symToStringTag] = tag;
                else delete value[symToStringTag];
            }
            return result;
        }
        /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) return [];
            object = Object1(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
                return propertyIsEnumerable.call(object, symbol);
            });
        };
        /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */ var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result = [];
            while(object){
                arrayPush(result, getSymbols(object));
                object = getPrototype(object);
            }
            return result;
        };
        /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */ var getTag = baseGetTag;
        // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
            var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
            if (ctorString) switch(ctorString){
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
            return result;
        };
        /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */ function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while(++index < length){
                var data = transforms[index], size = data.size;
                switch(data.type){
                    case 'drop':
                        start += size;
                        break;
                    case 'dropRight':
                        end -= size;
                        break;
                    case 'take':
                        end = nativeMin(end, start + size);
                        break;
                    case 'takeRight':
                        start = nativeMax(start, end - size);
                        break;
                }
            }
            return {
                'start': start,
                'end': end
            };
        }
        /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */ function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
        }
        /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */ function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result = false;
            while(++index < length){
                var key = toKey(path[index]);
                if (!(result = object != null && hasFunc(object, key))) break;
                object = object[key];
            }
            if (result || ++index != length) return result;
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */ function initCloneArray(array) {
            var length = array.length, result = new array.constructor(length);
            // Add properties assigned by `RegExp#exec`.
            if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
                result.index = array.index;
                result.input = array.input;
            }
            return result;
        }
        /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */ function initCloneObject(object) {
            return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */ function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch(tag){
                case arrayBufferTag:
                    return cloneArrayBuffer(object);
                case boolTag:
                case dateTag:
                    return new Ctor(+object);
                case dataViewTag:
                    return cloneDataView(object, isDeep);
                case float32Tag:
                case float64Tag:
                case int8Tag:
                case int16Tag:
                case int32Tag:
                case uint8Tag:
                case uint8ClampedTag:
                case uint16Tag:
                case uint32Tag:
                    return cloneTypedArray(object, isDeep);
                case mapTag:
                    return new Ctor;
                case numberTag:
                case stringTag:
                    return new Ctor(object);
                case regexpTag:
                    return cloneRegExp(object);
                case setTag:
                    return new Ctor;
                case symbolTag:
                    return cloneSymbol(object);
            }
        }
        /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */ function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) return source;
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
            details = details.join(length > 2 ? ', ' : ' ');
            return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
        }
        /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */ function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */ function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */ function isIterateeCall(value, index, object) {
            if (!isObject(object)) return false;
            var type = typeof index;
            if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) return eq(object[index], value);
            return false;
        }
        /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */ function isKey(value, object) {
            if (isArray(value)) return false;
            var type = typeof value;
            if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) return true;
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object1(object);
        }
        /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */ function isKeyable(value) {
            var type = typeof value;
            return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }
        /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */ function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) return false;
            if (func === other) return true;
            var data = getData(other);
            return !!data && func === data[0];
        }
        /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */ function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
        }
        /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */ var isMaskable = coreJsData ? isFunction : stubFalse;
        /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */ function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
            return value === proto;
        }
        /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */ function isStrictComparable(value) {
            return value === value && !isObject(value);
        }
        /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */ function matchesStrictComparable(key, srcValue) {
            return function(object) {
                if (object == null) return false;
                return object[key] === srcValue && (srcValue !== undefined || key in Object1(object));
            };
        }
        /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */ function memoizeCapped(func) {
            var result = memoize(func, function(key) {
                if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
                return key;
            });
            var cache = result.cache;
            return result;
        }
        /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */ function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            // Exit early if metadata can't be merged.
            if (!(isCommon || isCombo)) return data;
            // Use source `thisArg` if available.
            if (srcBitmask & WRAP_BIND_FLAG) {
                data[2] = source[2];
                // Set when currying a bound function.
                newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            // Compose partial arguments.
            var value = source[3];
            if (value) {
                var partials = data[3];
                data[3] = partials ? composeArgs(partials, value, source[4]) : value;
                data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            // Compose partial right arguments.
            value = source[5];
            if (value) {
                partials = data[5];
                data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
                data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            // Use source `argPos` if available.
            value = source[7];
            if (value) data[7] = value;
            // Use source `ary` if it's smaller.
            if (srcBitmask & WRAP_ARY_FLAG) data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            // Use source `arity` if one is not provided.
            if (data[9] == null) data[9] = source[9];
            // Use source `func` and merge bitmasks.
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
        }
        /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */ function nativeKeysIn(object) {
            var result = [];
            if (object != null) for(var key in Object1(object))result.push(key);
            return result;
        }
        /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */ function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */ function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? func.length - 1 : start, 0);
            return function() {
                var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array1(length);
                while(++index < length)array[index] = args[start + index];
                index = -1;
                var otherArgs = Array1(start + 1);
                while(++index < start)otherArgs[index] = args[index];
                otherArgs[start] = transform(array);
                return apply(func, this, otherArgs);
            };
        }
        /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */ function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */ function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while(length--){
                var index = indexes[length];
                array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
            }
            return array;
        }
        /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */ function safeGet(object, key) {
            if (key === 'constructor' && typeof object[key] === 'function') return;
            if (key == '__proto__') return;
            return object[key];
        }
        /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */ var setData = shortOut(baseSetData);
        /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */ var setTimeout = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
        };
        /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */ var setToString = shortOut(baseSetToString);
        /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */ function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + '';
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */ function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
                var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) return arguments[0];
                } else count = 0;
                return func.apply(undefined, arguments);
            };
        }
        /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */ function shuffleSelf(array, size) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size = size === undefined ? length : size;
            while(++index < size){
                var rand = baseRandom(index, lastIndex), value = array[rand];
                array[rand] = array[index];
                array[index] = value;
            }
            array.length = size;
            return array;
        }
        /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */ var stringToPath = memoizeCapped(function(string) {
            var result = [];
            if (string.charCodeAt(0) === 46 /* . */ ) result.push('');
            string.replace(rePropName, function(match, number, quote, subString) {
                result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
            });
            return result;
        });
        /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */ function toKey(value) {
            if (typeof value == 'string' || isSymbol(value)) return value;
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */ function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func);
                } catch (e) {}
                try {
                    return func + '';
                } catch (e) {}
            }
            return '';
        }
        /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */ function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
                var value = '_.' + pair[0];
                if (bitmask & pair[1] && !arrayIncludes(details, value)) details.push(value);
            });
            return details.sort();
        }
        /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */ function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) return wrapper.clone();
            var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result.__actions__ = copyArray(wrapper.__actions__);
            result.__index__ = wrapper.__index__;
            result.__values__ = wrapper.__values__;
            return result;
        }
        /*------------------------------------------------------------------------*/ /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */ function chunk(array, size, guard) {
            if (guard ? isIterateeCall(array, size, guard) : size === undefined) size = 1;
            else size = nativeMax(toInteger(size), 0);
            var length = array == null ? 0 : array.length;
            if (!length || size < 1) return [];
            var index = 0, resIndex = 0, result = Array1(nativeCeil(length / size));
            while(index < length)result[resIndex++] = baseSlice(array, index, index += size);
            return result;
        }
        /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */ function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
            while(++index < length){
                var value = array[index];
                if (value) result[resIndex++] = value;
            }
            return result;
        }
        /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */ function concat() {
            var length = arguments.length;
            if (!length) return [];
            var args = Array1(length - 1), array = arguments[0], index = length;
            while(index--)args[index - 1] = arguments[index];
            return arrayPush(isArray(array) ? copyArray(array) : [
                array
            ], baseFlatten(args, 1));
        }
        /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */ var difference = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
        });
        /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */ var differenceBy = baseRest(function(array, values) {
            var iteratee = last(values);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
        });
        /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */ var differenceWith = baseRest(function(array, values) {
            var comparator = last(values);
            if (isArrayLikeObject(comparator)) comparator = undefined;
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
        });
        /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */ function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
        }
        /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */ function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */ function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */ function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */ function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
                start = 0;
                end = length;
            }
            return baseFill(array, value, start, end);
        }
        /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */ function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) index = nativeMax(length + index, 0);
            return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */ function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = length - 1;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */ function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
        }
        /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */ function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
        }
        /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */ function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
        }
        /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */ function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
            while(++index < length){
                var pair = pairs[index];
                result[pair[0]] = pair[1];
            }
            return result;
        }
        /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */ function head(array) {
            return array && array.length ? array[0] : undefined;
        }
        /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */ function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) index = nativeMax(length + index, 0);
            return baseIndexOf(array, value, index);
        }
        /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */ function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
        }
        /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */ var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */ var intersectionBy = baseRest(function(arrays) {
            var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee === last(mapped)) iteratee = undefined;
            else mapped.pop();
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
        });
        /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */ var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            if (comparator) mapped.pop();
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
        });
        /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */ function join(array, separator) {
            return array == null ? '' : nativeJoin.call(array, separator);
        }
        /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */ function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined;
        }
        /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */ function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = length;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */ function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined;
        }
        /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */ var pull = baseRest(pullAll);
        /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */ function pullAll(array, values) {
            return array && array.length && values && values.length ? basePullAll(array, values) : array;
        }
        /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */ function pullAllBy(array, values, iteratee) {
            return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
        }
        /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */ function pullAllWith(array, values, comparator) {
            return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
        }
        /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */ var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
                return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result;
        });
        /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */ function remove(array, predicate) {
            var result = [];
            if (!(array && array.length)) return result;
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while(++index < length){
                var value = array[index];
                if (predicate(value, index, array)) {
                    result.push(value);
                    indexes.push(index);
                }
            }
            basePullAt(array, indexes);
            return result;
        }
        /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */ function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
        }
        /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */ function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
                start = 0;
                end = length;
            } else {
                start = start == null ? 0 : toInteger(start);
                end = end === undefined ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
        }
        /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */ function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
        }
        /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */ function sortedIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
        }
        /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */ function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value);
                if (index < length && eq(array[index], value)) return index;
            }
            return -1;
        }
        /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */ function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
        }
        /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */ function sortedLastIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
        }
        /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */ function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value, true) - 1;
                if (eq(array[index], value)) return index;
            }
            return -1;
        }
        /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */ function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
        }
        /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */ function sortedUniqBy(array, iteratee) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
        }
        /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */ function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
        }
        /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */ function take(array, n, guard) {
            if (!(array && array.length)) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */ function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
        }
        /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */ function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */ function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */ var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */ var unionBy = baseRest(function(arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
        });
        /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */ var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */ function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
        }
        /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */ function uniqBy(array, iteratee) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
        }
        /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */ function uniqWith(array, comparator) {
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return array && array.length ? baseUniq(array, undefined, comparator) : [];
        }
        /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */ function unzip(array) {
            if (!(array && array.length)) return [];
            var length = 0;
            array = arrayFilter(array, function(group) {
                if (isArrayLikeObject(group)) {
                    length = nativeMax(group.length, length);
                    return true;
                }
            });
            return baseTimes(length, function(index) {
                return arrayMap(array, baseProperty(index));
            });
        }
        /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */ function unzipWith(array, iteratee) {
            if (!(array && array.length)) return [];
            var result = unzip(array);
            if (iteratee == null) return result;
            return arrayMap(result, function(group) {
                return apply(iteratee, undefined, group);
            });
        }
        /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */ var without = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, values) : [];
        });
        /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */ var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */ var xorBy = baseRest(function(arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
        });
        /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */ var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */ var zip = baseRest(unzip);
        /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */ function zipObject(props, values) {
            return baseZipObject(props || [], values || [], assignValue);
        }
        /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */ function zipObjectDeep(props, values) {
            return baseZipObject(props || [], values || [], baseSet);
        }
        /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */ var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee = length > 1 ? arrays[length - 1] : undefined;
            iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
            return unzipWith(arrays, iteratee);
        });
        /*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */ function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result;
        }
        /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */ function tap(value, interceptor) {
            interceptor(value);
            return value;
        }
        /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */ function thru(value, interceptor) {
            return interceptor(value);
        }
        /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */ var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
                return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) return this.thru(interceptor);
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
                'func': thru,
                'args': [
                    interceptor
                ],
                'thisArg': undefined
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
                if (length && !array.length) array.push(undefined);
                return array;
            });
        });
        /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */ function wrapperChain() {
            return chain(this);
        }
        /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */ function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
        }
        /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */ function wrapperNext() {
            if (this.__values__ === undefined) this.__values__ = toArray(this.value());
            var done = this.__index__ >= this.__values__.length, value = done ? undefined : this.__values__[this.__index__++];
            return {
                'done': done,
                'value': value
            };
        }
        /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */ function wrapperToIterator() {
            return this;
        }
        /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */ function wrapperPlant(value) {
            var result, parent = this;
            while(parent instanceof baseLodash){
                var clone = wrapperClone(parent);
                clone.__index__ = 0;
                clone.__values__ = undefined;
                if (result) previous.__wrapped__ = clone;
                else result = clone;
                var previous = clone;
                parent = parent.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result;
        }
        /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */ function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
                var wrapped = value;
                if (this.__actions__.length) wrapped = new LazyWrapper(this);
                wrapped = wrapped.reverse();
                wrapped.__actions__.push({
                    'func': thru,
                    'args': [
                        reverse
                    ],
                    'thisArg': undefined
                });
                return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
        }
        /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */ function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        /*------------------------------------------------------------------------*/ /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */ var countBy = createAggregator(function(result, value, key) {
            if (hasOwnProperty.call(result, key)) ++result[key];
            else baseAssignValue(result, key, 1);
        });
        /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */ function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined;
            return func(collection, getIteratee(predicate, 3));
        }
        /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */ function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
        }
        /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */ var find = createFind(findIndex);
        /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */ var findLast = createFind(findLastIndex);
        /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */ function flatMap(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), 1);
        }
        /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */ function flatMapDeep(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), INFINITY);
        }
        /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */ function flatMapDepth(collection, iteratee, depth) {
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee), depth);
        }
        /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */ function forEach(collection, iteratee) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */ function forEachRight(collection, iteratee) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */ var groupBy = createAggregator(function(result, value, key) {
            if (hasOwnProperty.call(result, key)) result[key].push(value);
            else baseAssignValue(result, key, [
                value
            ]);
        });
        /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */ function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) fromIndex = nativeMax(length + fromIndex, 0);
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */ var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == 'function', result = isArrayLike(collection) ? Array1(collection.length) : [];
            baseEach(collection, function(value) {
                result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result;
        });
        /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */ var keyBy = createAggregator(function(result, value, key) {
            baseAssignValue(result, key, value);
        });
        /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */ function map(collection, iteratee) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */ function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) return [];
            if (!isArray(iteratees)) iteratees = iteratees == null ? [] : [
                iteratees
            ];
            orders = guard ? undefined : orders;
            if (!isArray(orders)) orders = orders == null ? [] : [
                orders
            ];
            return baseOrderBy(collection, iteratees, orders);
        }
        /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */ var partition = createAggregator(function(result, value, key) {
            result[key ? 0 : 1].push(value);
        }, function() {
            return [
                [],
                []
            ];
        });
        /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */ function reduce(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */ function reduceRight(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */ function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
        }
        /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */ function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
        }
        /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */ function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined) n = 1;
            else n = toInteger(n);
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
        }
        /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */ function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
        }
        /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */ function size(collection) {
            if (collection == null) return 0;
            if (isArrayLike(collection)) return isString(collection) ? stringSize(collection) : collection.length;
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) return collection.size;
            return baseKeys(collection).length;
        }
        /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */ function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined;
            return func(collection, getIteratee(predicate, 3));
        }
        /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */ var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) return [];
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) iteratees = [];
            else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) iteratees = [
                iteratees[0]
            ];
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        /*------------------------------------------------------------------------*/ /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */ var now = ctxNow || function() {
            return root.Date.now();
        };
        /*------------------------------------------------------------------------*/ /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */ function after(n, func) {
            if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            n = toInteger(n);
            return function() {
                if (--n < 1) return func.apply(this, arguments);
            };
        }
        /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */ function ary(func, n, guard) {
            n = guard ? undefined : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */ function before(n, func) {
            var result;
            if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            n = toInteger(n);
            return function() {
                if (--n > 0) result = func.apply(this, arguments);
                if (n <= 1) func = undefined;
                return result;
            };
        }
        /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */ var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bind));
                bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
        });
        /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */ var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bindKey));
                bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
        });
        /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */ function curry(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curry.placeholder;
            return result;
        }
        /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */ function curryRight(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curryRight.placeholder;
            return result;
        }
        /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */ function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
                leading = !!options.leading;
                maxing = 'maxWait' in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }
            function leadingEdge(time) {
                // Reset any `maxWait` timer.
                lastInvokeTime = time;
                // Start the timer for the trailing edge.
                timerId = setTimeout(timerExpired, wait);
                // Invoke the leading edge.
                return leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                // Either this is the first call, activity has stopped and we're at the
                // trailing edge, the system time has gone backwards and we're treating
                // it as the trailing edge, or we've hit the `maxWait` limit.
                return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) return trailingEdge(time);
                // Restart the timer.
                timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
                timerId = undefined;
                // Only invoke if we have `lastArgs` which means `func` has been
                // debounced at least once.
                if (trailing && lastArgs) return invokeFunc(time);
                lastArgs = lastThis = undefined;
                return result;
            }
            function cancel() {
                if (timerId !== undefined) clearTimeout(timerId);
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined;
            }
            function flush() {
                return timerId === undefined ? result : trailingEdge(now());
            }
            function debounced() {
                var time = now(), isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                    if (timerId === undefined) return leadingEdge(lastCallTime);
                    if (maxing) {
                        // Handle invocations in a tight loop.
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        }
        /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */ var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
        });
        /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */ var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
        });
        /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */ function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
        }
        /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */ function memoize(func, resolver) {
            if (typeof func != 'function' || resolver != null && typeof resolver != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            var memoized = function() {
                var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                if (cache.has(key)) return cache.get(key);
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result) || cache;
                return result;
            };
            memoized.cache = new (memoize.Cache || MapCache);
            return memoized;
        }
        // Expose `MapCache`.
        memoize.Cache = MapCache;
        /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */ function negate(predicate) {
            if (typeof predicate != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            return function() {
                var args = arguments;
                switch(args.length){
                    case 0:
                        return !predicate.call(this);
                    case 1:
                        return !predicate.call(this, args[0]);
                    case 2:
                        return !predicate.call(this, args[0], args[1]);
                    case 3:
                        return !predicate.call(this, args[0], args[1], args[2]);
                }
                return !predicate.apply(this, args);
            };
        }
        /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */ function once(func) {
            return before(2, func);
        }
        /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */ var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
                var index = -1, length = nativeMin(args.length, funcsLength);
                while(++index < length)args[index] = transforms[index].call(this, args[index]);
                return apply(func, this, args);
            });
        });
        /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */ var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
        });
        /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */ var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */ var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
        });
        /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */ function rest(func, start) {
            if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            start = start === undefined ? start : toInteger(start);
            return baseRest(func, start);
        }
        /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */ function spread(func, start) {
            if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
                var array = args[start], otherArgs = castSlice(args, 0, start);
                if (array) arrayPush(otherArgs, array);
                return apply(func, this, otherArgs);
            });
        }
        /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */ function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
            if (isObject(options)) {
                leading = 'leading' in options ? !!options.leading : leading;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
                'leading': leading,
                'maxWait': wait,
                'trailing': trailing
            });
        }
        /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */ function unary(func) {
            return ary(func, 1);
        }
        /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */ function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
        }
        /*------------------------------------------------------------------------*/ /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */ function castArray() {
            if (!arguments.length) return [];
            var value = arguments[0];
            return isArray(value) ? value : [
                value
            ];
        }
        /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */ function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */ function cloneWith(value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */ function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */ function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */ function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
        }
        /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */ function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */ var gt = createRelationalOperation(baseGt);
        /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */ var gte = createRelationalOperation(function(value, other) {
            return value >= other;
        });
        /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */ var isArguments = baseIsArguments(function() {
            return arguments;
        }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
        };
        /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */ var isArray = Array1.isArray;
        /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */ var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */ function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
        }
        /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */ function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
        }
        /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */ function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */ var isBuffer = nativeIsBuffer || stubFalse;
        /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */ var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */ function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */ function isEmpty(value) {
            if (value == null) return true;
            if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) return !value.size;
            if (isPrototype(value)) return !baseKeys(value).length;
            for(var key in value){
                if (hasOwnProperty.call(value, key)) return false;
            }
            return true;
        }
        /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */ function isEqual(value, other) {
            return baseIsEqual(value, other);
        }
        /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */ function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            var result = customizer ? customizer(value, other) : undefined;
            return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
        }
        /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */ function isError(value) {
            if (!isObjectLike(value)) return false;
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value);
        }
        /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */ function isFinite(value) {
            return typeof value == 'number' && nativeIsFinite(value);
        }
        /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */ function isFunction(value) {
            if (!isObject(value)) return false;
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */ function isInteger(value) {
            return typeof value == 'number' && value == toInteger(value);
        }
        /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */ function isLength(value) {
            return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */ function isObject(value) {
            var type = typeof value;
            return value != null && (type == 'object' || type == 'function');
        }
        /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */ function isObjectLike(value) {
            return value != null && typeof value == 'object';
        }
        /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */ var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */ function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */ function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */ function isNaN(value) {
            // An `NaN` primitive is the only value that is not equal to itself.
            // Perform the `toStringTag` check first to avoid errors with some
            // ActiveX objects in IE.
            return isNumber(value) && value != +value;
        }
        /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */ function isNative(value) {
            if (isMaskable(value)) throw new Error(CORE_ERROR_TEXT);
            return baseIsNative(value);
        }
        /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */ function isNull(value) {
            return value === null;
        }
        /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */ function isNil(value) {
            return value == null;
        }
        /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */ function isNumber(value) {
            return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */ function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
            var proto = getPrototype(value);
            if (proto === null) return true;
            var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
            return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */ var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */ function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */ var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */ function isString(value) {
            return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */ function isSymbol(value) {
            return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */ function isUndefined(value) {
            return value === undefined;
        }
        /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */ function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */ function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */ var lt = createRelationalOperation(baseLt);
        /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */ var lte = createRelationalOperation(function(value, other) {
            return value <= other;
        });
        /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */ function toArray(value) {
            if (!value) return [];
            if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
            if (symIterator && value[symIterator]) return iteratorToArray(value[symIterator]());
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
        }
        /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */ function toFinite(value) {
            if (!value) return value === 0 ? value : 0;
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
                var sign = value < 0 ? -1 : 1;
                return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
        }
        /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */ function toInteger(value) {
            var result = toFinite(value), remainder = result % 1;
            return result === result ? remainder ? result - remainder : result : 0;
        }
        /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */ function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */ function toNumber(value) {
            if (typeof value == 'number') return value;
            if (isSymbol(value)) return NAN;
            if (isObject(value)) {
                var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
                value = isObject(other) ? other + '' : other;
            }
            if (typeof value != 'string') return value === 0 ? value : +value;
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */ function toPlainObject(value) {
            return copyObject(value, keysIn(value));
        }
        /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */ function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */ function toString(value) {
            return value == null ? '' : baseToString(value);
        }
        /*------------------------------------------------------------------------*/ /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */ var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
                copyObject(source, keys(source), object);
                return;
            }
            for(var key in source)if (hasOwnProperty.call(source, key)) assignValue(object, key, source[key]);
        });
        /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */ var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
        });
        /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */ var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
        });
        /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */ var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
        });
        /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */ var at = flatRest(baseAt);
        /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */ function create(prototype, properties) {
            var result = baseCreate(prototype);
            return properties == null ? result : baseAssign(result, properties);
        }
        /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */ var defaults = baseRest(function(object, sources) {
            object = Object1(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) length = 1;
            while(++index < length){
                var source = sources[index];
                var props = keysIn(source);
                var propsIndex = -1;
                var propsLength = props.length;
                while(++propsIndex < propsLength){
                    var key = props[propsIndex];
                    var value = object[key];
                    if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) object[key] = source[key];
                }
            }
            return object;
        });
        /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */ var defaultsDeep = baseRest(function(args) {
            args.push(undefined, customDefaultsMerge);
            return apply(mergeWith, undefined, args);
        });
        /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */ function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */ function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */ function forIn(object, iteratee) {
            return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
        }
        /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */ function forInRight(object, iteratee) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
        }
        /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */ function forOwn(object, iteratee) {
            return object && baseForOwn(object, getIteratee(iteratee, 3));
        }
        /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */ function forOwnRight(object, iteratee) {
            return object && baseForOwnRight(object, getIteratee(iteratee, 3));
        }
        /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */ function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
        }
        /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */ function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */ function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
        }
        /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */ function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
        }
        /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */ function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
        }
        /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */ var invert = createInverter(function(result, value, key) {
            if (value != null && typeof value.toString != 'function') value = nativeObjectToString.call(value);
            result[value] = key;
        }, constant(identity));
        /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */ var invertBy = createInverter(function(result, value, key) {
            if (value != null && typeof value.toString != 'function') value = nativeObjectToString.call(value);
            if (hasOwnProperty.call(result, value)) result[value].push(key);
            else result[value] = [
                key
            ];
        }, getIteratee);
        /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */ var invoke = baseRest(baseInvoke);
        /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */ function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */ function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */ function mapKeys(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function(value, key, object) {
                baseAssignValue(result, iteratee(value, key, object), value);
            });
            return result;
        }
        /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */ function mapValues(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function(value, key, object) {
                baseAssignValue(result, key, iteratee(value, key, object));
            });
            return result;
        }
        /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */ var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
        });
        /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */ var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
        });
        /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */ var omit = flatRest(function(object, paths) {
            var result = {};
            if (object == null) return result;
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
                path = castPath(path, object);
                isDeep || (isDeep = path.length > 1);
                return path;
            });
            copyObject(object, getAllKeysIn(object), result);
            if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            var length = paths.length;
            while(length--)baseUnset(result, paths[length]);
            return result;
        });
        /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */ function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
        }
        /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */ var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
        });
        /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */ function pickBy(object, predicate) {
            if (object == null) return {};
            var props = arrayMap(getAllKeysIn(object), function(prop) {
                return [
                    prop
                ];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
                return predicate(value, path[0]);
            });
        }
        /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */ function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            // Ensure the loop is entered when path is empty.
            if (!length) {
                length = 1;
                object = undefined;
            }
            while(++index < length){
                var value = object == null ? undefined : object[toKey(path[index])];
                if (value === undefined) {
                    index = length;
                    value = defaultValue;
                }
                object = isFunction(value) ? value.call(object) : value;
            }
            return object;
        }
        /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */ function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
        }
        /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */ function setWith(object, path, value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return object == null ? object : baseSet(object, path, value, customizer);
        }
        /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */ var toPairs = createToPairs(keys);
        /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */ var toPairsIn = createToPairs(keysIn);
        /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */ function transform(object, iteratee, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee = getIteratee(iteratee, 4);
            if (accumulator == null) {
                var Ctor = object && object.constructor;
                if (isArrLike) accumulator = isArr ? new Ctor : [];
                else if (isObject(object)) accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                else accumulator = {};
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
                return iteratee(accumulator, value, index, object);
            });
            return accumulator;
        }
        /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */ function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
        }
        /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */ function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */ function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */ function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
        }
        /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */ function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
        }
        /*------------------------------------------------------------------------*/ /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */ function clamp(number, lower, upper) {
            if (upper === undefined) {
                upper = lower;
                lower = undefined;
            }
            if (upper !== undefined) {
                upper = toNumber(upper);
                upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined) {
                lower = toNumber(lower);
                lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
        }
        /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */ function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined) {
                end = start;
                start = 0;
            } else end = toFinite(end);
            number = toNumber(number);
            return baseInRange(number, start, end);
        }
        /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */ function random(lower, upper, floating) {
            if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) upper = floating = undefined;
            if (floating === undefined) {
                if (typeof upper == 'boolean') {
                    floating = upper;
                    upper = undefined;
                } else if (typeof lower == 'boolean') {
                    floating = lower;
                    lower = undefined;
                }
            }
            if (lower === undefined && upper === undefined) {
                lower = 0;
                upper = 1;
            } else {
                lower = toFinite(lower);
                if (upper === undefined) {
                    upper = lower;
                    lower = 0;
                } else upper = toFinite(upper);
            }
            if (lower > upper) {
                var temp = lower;
                lower = upper;
                upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
                var rand = nativeRandom();
                return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
            }
            return baseRandom(lower, upper);
        }
        /*------------------------------------------------------------------------*/ /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */ var camelCase = createCompounder(function(result, word, index) {
            word = word.toLowerCase();
            return result + (index ? capitalize(word) : word);
        });
        /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */ function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
        }
        /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */ function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
        }
        /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */ function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
        }
        /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */ function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */ function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
        }
        /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */ var kebabCase = createCompounder(function(result, word, index) {
            return result + (index ? '-' : '') + word.toLowerCase();
        });
        /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */ var lowerCase = createCompounder(function(result, word, index) {
            return result + (index ? ' ' : '') + word.toLowerCase();
        });
        /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */ var lowerFirst = createCaseFirst('toLowerCase');
        /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */ function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) return string;
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */ function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */ function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */ function parseInt1(string, radix, guard) {
            if (guard || radix == null) radix = 0;
            else if (radix) radix = +radix;
            return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
        }
        /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */ function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined) n = 1;
            else n = toInteger(n);
            return baseRepeat(toString(string), n);
        }
        /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */ function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */ var snakeCase = createCompounder(function(result, word, index) {
            return result + (index ? '_' : '') + word.toLowerCase();
        });
        /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */ function split(string, separator, limit) {
            if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) separator = limit = undefined;
            limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) return [];
            string = toString(string);
            if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
                separator = baseToString(separator);
                if (!separator && hasUnicode(string)) return castSlice(stringToArray(string), 0, limit);
            }
            return string.split(separator, limit);
        }
        /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */ var startCase = createCompounder(function(result, word, index) {
            return result + (index ? ' ' : '') + upperFirst(word);
        });
        /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */ function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
        }
        /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */ function template(string, options, guard) {
            // Based on John Resig's `tmpl` implementation
            // (http://ejohn.org/blog/javascript-micro-templating/)
            // and Laura Doktorova's doT.js (https://github.com/olado/doT).
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) options = undefined;
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            // Compile the regexp to match each delimiter.
            var reDelimiters = RegExp1((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
            // Use a sourceURL for easier debugging.
            // The sourceURL gets injected into the source that's eval-ed, so be careful
            // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
            // and escape the comment, thus injecting code that gets evaled.
            var sourceURL = '//# sourceURL=' + (hasOwnProperty.call(options, 'sourceURL') ? (options.sourceURL + '').replace(/\s/g, ' ') : 'lodash.templateSources[' + ++templateCounter + ']') + '\n';
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);
                // Escape characters that can't be included in string literals.
                source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
                // Replace delimiters with snippets.
                if (escapeValue) {
                    isEscaping = true;
                    source += "' +\n__e(" + escapeValue + ") +\n'";
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += "';\n" + evaluateValue + ";\n__p += '";
                }
                if (interpolateValue) source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
                index = offset + match.length;
                // The JS engine embedded in Adobe products needs `match` returned in
                // order to produce the correct `offset` value.
                return match;
            });
            source += "';\n";
            // If `variable` is not specified wrap a with-statement around the generated
            // code to add the data object to the top of the scope chain.
            var variable = hasOwnProperty.call(options, 'variable') && options.variable;
            if (!variable) source = 'with (obj) {\n' + source + '\n}\n';
            else if (reForbiddenIdentifierChars.test(variable)) throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
            // Cleanup code by stripping empty strings.
            source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
            // Frame code as the function body.
            source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
            var result = attempt(function() {
                return Function1(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
            });
            // Provide the compiled function's source by its `toString` method or
            // the `source` property as a convenience for inlining compiled templates.
            result.source = source;
            if (isError(result)) throw result;
            return result;
        }
        /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */ function toLower(value) {
            return toString(value).toLowerCase();
        }
        /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */ function toUpper(value) {
            return toString(value).toUpperCase();
        }
        /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */ function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return baseTrim(string);
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join('');
        }
        /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */ function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.slice(0, trimmedEndIndex(string) + 1);
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join('');
        }
        /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */ function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.replace(reTrimStart, '');
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join('');
        }
        /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */ function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
                var separator = 'separator' in options ? options.separator : separator;
                length = 'length' in options ? toInteger(options.length) : length;
                omission = 'omission' in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
                var strSymbols = stringToArray(string);
                strLength = strSymbols.length;
            }
            if (length >= strLength) return string;
            var end = length - stringSize(omission);
            if (end < 1) return omission;
            var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);
            if (separator === undefined) return result + omission;
            if (strSymbols) end += result.length - end;
            if (isRegExp(separator)) {
                if (string.slice(end).search(separator)) {
                    var match, substring = result;
                    if (!separator.global) separator = RegExp1(separator.source, toString(reFlags.exec(separator)) + 'g');
                    separator.lastIndex = 0;
                    while(match = separator.exec(substring))var newEnd = match.index;
                    result = result.slice(0, newEnd === undefined ? end : newEnd);
                }
            } else if (string.indexOf(baseToString(separator), end) != end) {
                var index = result.lastIndexOf(separator);
                if (index > -1) result = result.slice(0, index);
            }
            return result + omission;
        }
        /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */ function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */ var upperCase = createCompounder(function(result, word, index) {
            return result + (index ? ' ' : '') + word.toUpperCase();
        });
        /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */ var upperFirst = createCaseFirst('toUpperCase');
        /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */ function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined : pattern;
            if (pattern === undefined) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            return string.match(pattern) || [];
        }
        /*------------------------------------------------------------------------*/ /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */ var attempt = baseRest(function(func, args) {
            try {
                return apply(func, undefined, args);
            } catch (e) {
                return isError(e) ? e : new Error(e);
            }
        });
        /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */ var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
                key = toKey(key);
                baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
        });
        /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */ function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
                if (typeof pair[1] != 'function') throw new TypeError(FUNC_ERROR_TEXT);
                return [
                    toIteratee(pair[0]),
                    pair[1]
                ];
            });
            return baseRest(function(args) {
                var index = -1;
                while(++index < length){
                    var pair = pairs[index];
                    if (apply(pair[0], this, args)) return apply(pair[1], this, args);
                }
            });
        }
        /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */ function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */ function constant(value) {
            return function() {
                return value;
            };
        }
        /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */ function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
        }
        /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */ var flow = createFlow();
        /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */ var flowRight = createFlow(true);
        /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */ function identity(value) {
            return value;
        }
        /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */ function iteratee(func) {
            return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */ function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */ function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */ var method = baseRest(function(path, args) {
            return function(object) {
                return baseInvoke(object, path, args);
            };
        });
        /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */ var methodOf = baseRest(function(object, args) {
            return function(path) {
                return baseInvoke(object, path, args);
            };
        });
        /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */ function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
                options = source;
                source = object;
                object = this;
                methodNames = baseFunctions(source, keys(source));
            }
            var chain = !(isObject(options) && 'chain' in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
                var func = source[methodName];
                object[methodName] = func;
                if (isFunc) object.prototype[methodName] = function() {
                    var chainAll = this.__chain__;
                    if (chain || chainAll) {
                        var result = object(this.__wrapped__), actions = result.__actions__ = copyArray(this.__actions__);
                        actions.push({
                            'func': func,
                            'args': arguments,
                            'thisArg': object
                        });
                        result.__chain__ = chainAll;
                        return result;
                    }
                    return func.apply(object, arrayPush([
                        this.value()
                    ], arguments));
                };
            });
            return object;
        }
        /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */ function noConflict() {
            if (root._ === this) root._ = oldDash;
            return this;
        }
        /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */ function noop() {
        // No operation performed.
        }
        /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */ function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
                return baseNth(args, n);
            });
        }
        /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */ var over = createOver(arrayMap);
        /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */ var overEvery = createOver(arrayEvery);
        /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */ var overSome = createOver(arraySome);
        /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */ function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */ function propertyOf(object) {
            return function(path) {
                return object == null ? undefined : baseGet(object, path);
            };
        }
        /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */ var range = createRange();
        /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */ var rangeRight = createRange(true);
        /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */ function stubArray() {
            return [];
        }
        /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */ function stubFalse() {
            return false;
        }
        /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */ function stubObject() {
            return {};
        }
        /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */ function stubString() {
            return '';
        }
        /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */ function stubTrue() {
            return true;
        }
        /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */ function times(n, iteratee) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) return [];
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee = getIteratee(iteratee);
            n -= MAX_ARRAY_LENGTH;
            var result = baseTimes(length, iteratee);
            while(++index < n)iteratee(index);
            return result;
        }
        /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */ function toPath(value) {
            if (isArray(value)) return arrayMap(value, toKey);
            return isSymbol(value) ? [
                value
            ] : copyArray(stringToPath(toString(value)));
        }
        /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */ function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
        }
        /*------------------------------------------------------------------------*/ /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */ var add = createMathOperation(function(augend, addend) {
            return augend + addend;
        }, 0);
        /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */ var ceil = createRound('ceil');
        /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */ var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
        }, 1);
        /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */ var floor = createRound('floor');
        /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */ function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
        }
        /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */ function maxBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
        }
        /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */ function mean(array) {
            return baseMean(array, identity);
        }
        /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */ function meanBy(array, iteratee) {
            return baseMean(array, getIteratee(iteratee, 2));
        }
        /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */ function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
        }
        /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */ function minBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
        }
        /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */ var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
        }, 1);
        /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */ var round = createRound('round');
        /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */ var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
        }, 0);
        /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */ function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
        }
        /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */ function sumBy(array, iteratee) {
            return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
        }
        /*------------------------------------------------------------------------*/ // Add methods that return wrapped values in chain sequences.
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        // Add aliases.
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        // Add methods to `lodash.prototype`.
        mixin(lodash, lodash);
        /*------------------------------------------------------------------------*/ // Add methods that return unwrapped values in chain sequences.
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt1;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        // Add aliases.
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
                if (!hasOwnProperty.call(lodash.prototype, methodName)) source[methodName] = func;
            });
            return source;
        }(), {
            'chain': false
        });
        /*------------------------------------------------------------------------*/ /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */ lodash.VERSION = VERSION;
        // Assign default placeholders.
        arrayEach([
            'bind',
            'bindKey',
            'curry',
            'curryRight',
            'partial',
            'partialRight'
        ], function(methodName) {
            lodash[methodName].placeholder = lodash;
        });
        // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
        arrayEach([
            'drop',
            'take'
        ], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
                n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
                if (result.__filtered__) result.__takeCount__ = nativeMin(n, result.__takeCount__);
                else result.__views__.push({
                    'size': nativeMin(n, MAX_ARRAY_LENGTH),
                    'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
                });
                return result;
            };
            LazyWrapper.prototype[methodName + 'Right'] = function(n) {
                return this.reverse()[methodName](n).reverse();
            };
        });
        // Add `LazyWrapper` methods that accept an `iteratee` value.
        arrayEach([
            'filter',
            'map',
            'takeWhile'
        ], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee) {
                var result = this.clone();
                result.__iteratees__.push({
                    'iteratee': getIteratee(iteratee, 3),
                    'type': type
                });
                result.__filtered__ = result.__filtered__ || isFilter;
                return result;
            };
        });
        // Add `LazyWrapper` methods for `_.head` and `_.last`.
        arrayEach([
            'head',
            'last'
        ], function(methodName, index) {
            var takeName = 'take' + (index ? 'Right' : '');
            LazyWrapper.prototype[methodName] = function() {
                return this[takeName](1).value()[0];
            };
        });
        // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
        arrayEach([
            'initial',
            'tail'
        ], function(methodName, index) {
            var dropName = 'drop' + (index ? '' : 'Right');
            LazyWrapper.prototype[methodName] = function() {
                return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
        });
        LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == 'function') return new LazyWrapper(this);
            return this.map(function(value) {
                return baseInvoke(value, path, args);
            });
        });
        LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result = this;
            if (result.__filtered__ && (start > 0 || end < 0)) return new LazyWrapper(result);
            if (start < 0) result = result.takeRight(-start);
            else if (start) result = result.drop(start);
            if (end !== undefined) {
                end = toInteger(end);
                result = end < 0 ? result.dropRight(-end) : result.take(end - start);
            }
            return result;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
        };
        // Add `LazyWrapper` methods to `lodash.prototype`.
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? 'take' + (methodName == 'last' ? 'Right' : '') : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) return;
            lodash.prototype[methodName] = function() {
                var value = this.__wrapped__, args = isTaker ? [
                    1
                ] : arguments, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value);
                var interceptor = function(value) {
                    var result = lodashFunc.apply(lodash, arrayPush([
                        value
                    ], args));
                    return isTaker && chainAll ? result[0] : result;
                };
                if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) // Avoid lazy use if the iteratee has a "length" value other than `1`.
                isLazy = useLazy = false;
                var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
                if (!retUnwrapped && useLazy) {
                    value = onlyLazy ? value : new LazyWrapper(this);
                    var result = func.apply(value, args);
                    result.__actions__.push({
                        'func': thru,
                        'args': [
                            interceptor
                        ],
                        'thisArg': undefined
                    });
                    return new LodashWrapper(result, chainAll);
                }
                if (isUnwrapped && onlyLazy) return func.apply(this, args);
                result = this.thru(interceptor);
                return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;
            };
        });
        // Add `Array` methods to `lodash.prototype`.
        arrayEach([
            'pop',
            'push',
            'shift',
            'sort',
            'splice',
            'unshift'
        ], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru', retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
                var args = arguments;
                if (retUnwrapped && !this.__chain__) {
                    var value = this.value();
                    return func.apply(isArray(value) ? value : [], args);
                }
                return this[chainName](function(value) {
                    return func.apply(isArray(value) ? value : [], args);
                });
            };
        });
        // Map minified method names to their real names.
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
                var key = lodashFunc.name + '';
                if (!hasOwnProperty.call(realNames, key)) realNames[key] = [];
                realNames[key].push({
                    'name': methodName,
                    'func': lodashFunc
                });
            }
        });
        realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [
            {
                'name': 'wrapper',
                'func': undefined
            }
        ];
        // Add methods to `LazyWrapper`.
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        // Add chain sequence methods to the `lodash` wrapper.
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        // Add lazy aliases.
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) lodash.prototype[symIterator] = wrapperToIterator;
        return lodash;
    };
    /*--------------------------------------------------------------------------*/ // Export lodash.
    var _ = runInContext();
    // Some AMD build optimizers, like r.js, check for condition patterns like:
    if (typeof void 0 == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose Lodash on the global object to prevent errors when Lodash is
        // loaded by a script tag in the presence of an AMD loader.
        // See http://requirejs.org/docs/errors.html#mismatch for more details.
        // Use `_.noConflict` to remove Lodash from the global object.
        root._ = _;
        // Define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module.
        define(function() {
            return _;
        });
    } else if (freeModule) {
        // Export for Node.js.
        (freeModule.exports = _)._ = _;
        // Export for CommonJS support.
        freeExports._ = _;
    } else // Export to the global object.
    root._ = _;
}).call(this);

},
"node_modules/lodash/now.js": function (module, exports, __mako_require__){
var root = __mako_require__("node_modules/lodash/_root.js");
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
module.exports = now;

},
"node_modules/lodash/throttle.js": function (module, exports, __mako_require__){
var debounce = __mako_require__("node_modules/lodash/debounce.js");
var isObject = __mako_require__("node_modules/lodash/isObject.js");
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
    });
}
module.exports = throttle;

},
"node_modules/lodash/toNumber.js": function (module, exports, __mako_require__){
var baseTrim = __mako_require__("node_modules/lodash/_baseTrim.js");
var isObject = __mako_require__("node_modules/lodash/isObject.js");
var isSymbol = __mako_require__("node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') return value === 0 ? value : +value;
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;

},
"node_modules/screenfull/dist/screenfull.js": function (module, exports, __mako_require__){
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/ (function() {
    'use strict';
    var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
    var isCommonjs = typeof module !== 'undefined' && module.exports;
    var fn = function() {
        var val;
        var fnMap = [
            [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
            ],
            // New WebKit
            [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            // Old WebKit
            [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
            ],
            [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
            ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for(; i < l; i++){
            val = fnMap[i];
            if (val && val[1] in document) {
                for(i = 0; i < val.length; i++)ret[fnMap[0][i]] = val[i];
                return ret;
            }
        }
        return false;
    }();
    var eventNameMap = {
        change: fn.fullscreenchange,
        error: fn.fullscreenerror
    };
    var screenfull = {
        request: function(element, options) {
            return new Promise((function(resolve, reject) {
                var onFullScreenEntered = (function() {
                    this.off('change', onFullScreenEntered);
                    resolve();
                }).bind(this);
                this.on('change', onFullScreenEntered);
                element = element || document.documentElement;
                var returnPromise = element[fn.requestFullscreen](options);
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenEntered).catch(reject);
            }).bind(this));
        },
        exit: function() {
            return new Promise((function(resolve, reject) {
                if (!this.isFullscreen) {
                    resolve();
                    return;
                }
                var onFullScreenExit = (function() {
                    this.off('change', onFullScreenExit);
                    resolve();
                }).bind(this);
                this.on('change', onFullScreenExit);
                var returnPromise = document[fn.exitFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenExit).catch(reject);
            }).bind(this));
        },
        toggle: function(element, options) {
            return this.isFullscreen ? this.exit() : this.request(element, options);
        },
        onchange: function(callback) {
            this.on('change', callback);
        },
        onerror: function(callback) {
            this.on('error', callback);
        },
        on: function(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.addEventListener(eventName, callback, false);
        },
        off: function(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.removeEventListener(eventName, callback, false);
        },
        raw: fn
    };
    if (!fn) {
        if (isCommonjs) module.exports = {
            isEnabled: false
        };
        else window.screenfull = {
            isEnabled: false
        };
        return;
    }
    Object.defineProperties(screenfull, {
        isFullscreen: {
            get: function() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get: function() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get: function() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });
    if (isCommonjs) module.exports = screenfull;
    else window.screenfull = screenfull;
})();

},
 }]);
//# sourceMappingURL=vendors_3-async.js.map