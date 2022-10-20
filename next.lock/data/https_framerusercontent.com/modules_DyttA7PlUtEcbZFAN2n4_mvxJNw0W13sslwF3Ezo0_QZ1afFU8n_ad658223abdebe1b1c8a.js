// Generated by Framer (5c7c246)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";const enabledGestures={CrjcpHaRe:{hover:true,pressed:true},eKP5vO3YE:{hover:true,pressed:true}};const cycleOrder=["eKP5vO3YE","CrjcpHaRe"];const variantClassNames={CrjcpHaRe:"framer-v-184h0z1",eKP5vO3YE:"framer-v-78zvbl"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={Off:"eKP5vO3YE",On:"CrjcpHaRe"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="eKP5vO3YE",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"eKP5vO3YE",enabledGestures,transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapyrno23=activeVariantCallback(async(...args)=>{setVariant("CrjcpHaRe");});const onTap1ezqs5c=activeVariantCallback(async(...args)=>{setVariant("eKP5vO3YE");});const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-pd8Wq",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-78zvbl",className),"data-framer-name":"Off","data-highlight":true,layoutDependency:layoutDependency,layoutId:"eKP5vO3YE",onTap:onTapyrno23,ref:ref,style:{borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopLeftRadius:50,borderTopRightRadius:50,...style},transition:transition,...addPropertyOverrides({"CrjcpHaRe-hover":{"data-framer-name":undefined},"CrjcpHaRe-pressed":{"data-framer-name":undefined},"eKP5vO3YE-hover":{"data-framer-name":undefined},"eKP5vO3YE-pressed":{"data-framer-name":undefined},CrjcpHaRe:{"data-framer-name":"On",onTap:onTap1ezqs5c}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1br2m3k","data-framer-name":"Bg",layoutDependency:layoutDependency,layoutId:"ElVhjbtcp",style:{backgroundColor:"var(--token-225ef828-7589-4d8a-abd2-7b2130f87b8e, rgb(215, 219, 223))",borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopLeftRadius:50,borderTopRightRadius:50,opacity:1},transition:transition,variants:{"CrjcpHaRe-pressed":{backgroundColor:"var(--token-225ef828-7589-4d8a-abd2-7b2130f87b8e, rgb(215, 219, 223))",opacity:.75},"eKP5vO3YE-pressed":{backgroundColor:"var(--token-cdade5fd-d6e3-4b79-aadb-7ea4927fa6e4, rgb(8, 144, 255))",opacity:.75},CrjcpHaRe:{backgroundColor:"var(--token-cdade5fd-d6e3-4b79-aadb-7ea4927fa6e4, rgb(8, 144, 255))"}}}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-5p9sgk","data-border":true,layoutDependency:layoutDependency,layoutId:"r7j5go6t_",style:{"--border-bottom-width":"1px","--border-color":'var(--token-02748f82-5c58-4ef6-9fdd-0d74e01338af, rgb(193, 200, 205)) /* {"name":"slate8"} */',"--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"var(--token-0d1ee449-4cae-4eac-8f51-242ef9a73b98, rgb(251, 252, 253))",borderBottomLeftRadius:12,borderBottomRightRadius:12,borderTopLeftRadius:12,borderTopRightRadius:12,boxShadow:"0px 0.3619381243333773px 0.6514886238000792px -1px rgba(0, 0, 0, 0.19402), 0px 1.3741263429785435px 2.4734274173613784px -2px rgba(0, 0, 0, 0.18288), 0px 6px 10.8px -3px rgba(0, 0, 0, 0.132)"},transition:transition,variants:{"CrjcpHaRe-hover":{"--border-bottom-width":"1px","--border-color":'var(--token-f5d7cc0d-c09e-4682-b2b7-01482fe45222, rgb(3, 129, 241)) /* {"name":"blue11"} */',"--border-left-width":"1px","--border-right-width":"1px","--border-top-width":"1px"},"CrjcpHaRe-pressed":{"--border-bottom-width":"1px","--border-color":'var(--token-f5d7cc0d-c09e-4682-b2b7-01482fe45222, rgb(3, 129, 241)) /* {"name":"blue11"} */',"--border-left-width":"1px","--border-right-width":"1px","--border-top-width":"1px"},"eKP5vO3YE-hover":{"--border-color":'var(--token-cdade5fd-d6e3-4b79-aadb-7ea4927fa6e4, rgb(8, 144, 255)) /* {"name":"blue9"} */'},"eKP5vO3YE-pressed":{boxShadow:"0px 0.3619381243333773px 0.6514886238000792px -1px rgba(0, 0, 0, 0.38216), 0px 1.3741263429785435px 2.4734274173613784px -2px rgba(0, 0, 0, 0.36023), 0px 6px 10.8px -3px rgba(0, 0, 0, 0.26)"},CrjcpHaRe:{"--border-bottom-width":"0px","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px"}}})]})})});});const css=['.framer-pd8Wq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-pd8Wq * { box-sizing: border-box; }",".framer-pd8Wq .framer-78zvbl { cursor: pointer; height: 28px; overflow: visible; position: relative; width: 45px; }",".framer-pd8Wq .framer-1br2m3k { flex: none; height: 6px; left: calc(53.33333333333336% - 37px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 6px / 2); width: 37px; will-change: transform; }",".framer-pd8Wq .framer-5p9sgk { flex: none; height: 22px; left: 3px; overflow: visible; position: absolute; top: calc(50.00000000000002% - 22px / 2); width: 22px; }",".framer-pd8Wq .framer-v-78zvbl .framer-78zvbl, .framer-pd8Wq .framer-v-184h0z1 .framer-78zvbl { cursor: pointer; }",".framer-pd8Wq.framer-v-184h0z1 .framer-1br2m3k { bottom: 0px; height: unset; left: 0px; right: 0px; top: 0px; width: unset; }",".framer-pd8Wq.framer-v-184h0z1 .framer-5p9sgk { left: unset; right: 3px; }",".framer-pd8Wq.framer-v-78zvbl.pressed .framer-1br2m3k { height: 12px; top: calc(50.00000000000002% - 12px / 2); }",".framer-pd8Wq.framer-v-78zvbl.pressed .framer-5p9sgk { left: 1px; width: 26px; }",".framer-pd8Wq.framer-v-184h0z1.pressed .framer-1br2m3k { bottom: unset; height: 22px; top: calc(50.00000000000002% - 22px / 2); width: unset; }",".framer-pd8Wq.framer-v-184h0z1.pressed .framer-5p9sgk { left: unset; right: 1px; width: 26px; }",".framer-pd8Wq.framer-v-184h0z1.hover .framer-1br2m3k { bottom: 1px; height: unset; width: unset; }",".framer-pd8Wq.framer-v-184h0z1.hover .framer-5p9sgk { left: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 28
 * @framerIntrinsicWidth 45
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"CrjcpHaRe":{"layout":["fixed","fixed"]},"RH9nOoFtF":{"layout":["fixed","fixed"]},"is5dlVxg1":{"layout":["fixed","fixed"]},"k2rSSFwi8":{"layout":["fixed","fixed"]},"IZI5q_1oQ":{"layout":["fixed","fixed"]}}}
 */ const FramerQZ1afFU8n=withCSS(Component,css);export default FramerQZ1afFU8n;FramerQZ1afFU8n.displayName="Toggle";FramerQZ1afFU8n.defaultProps={height:28,width:45};addPropertyControls(FramerQZ1afFU8n,{variant:{options:["eKP5vO3YE","CrjcpHaRe"],optionTitles:["Off","On"],title:"Variant",type:ControlType.Enum}});addFonts(FramerQZ1afFU8n,[]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerQZ1afFU8n","slots":[],"annotations":{"framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"CrjcpHaRe\":{\"layout\":[\"fixed\",\"fixed\"]},\"RH9nOoFtF\":{\"layout\":[\"fixed\",\"fixed\"]},\"is5dlVxg1\":{\"layout\":[\"fixed\",\"fixed\"]},\"k2rSSFwi8\":{\"layout\":[\"fixed\",\"fixed\"]},\"IZI5q_1oQ\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerIntrinsicWidth":"45","framerIntrinsicHeight":"28"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./QZ1afFU8n.map