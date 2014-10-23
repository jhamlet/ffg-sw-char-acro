!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;
if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")
}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)
},f,f.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);
return s}({1:[function(require,module){module.exports={rgb:function(r,g,b){return["RGB",r>1?r/255:r,g>1?g/255:g,b>1?b/255:b]
},cmyk:function(c,m,y,k){return["CMYK",c>1?c/100:c,m>1?m/100:m,y>1?y/100:y,k>1?k/100:k]
}}},{}],2:[function(require,module){function Component(spec){_.extend(this,spec),_.defaults(this,this.defaults),this.name=this.name||protean.guid(),this.children=this.children||[],_.each(this.children,function(c){c.parent=this
},this)}require("../acrobat/polyfills");var protean=require("protean"),_=require("underscore");
Component.extended=function(subclass){var uber=this,uberproto=uber.prototype,subproto=subclass.prototype,uberdefaults=uberproto.defaults,subdefaults=subproto.defaults;
subproto.defaults=_.extend({},uberdefaults,subdefaults||{})},module.exports=protean.classify(Component,{defaults:{type:"component",x:0,y:0,width:0,height:0},get fqn(){for(var p=this,path=[];p;)path.push(p.name),p=p.parent;
return path.reverse().join(".")},get pageIndex(){for(var page,p=this,valid=!1;p;){if(page=p.page,_.isNumber(page)){valid=!0;
break}p=p.parent}return valid?page:0},get pageX(){return this.getComputedValue("x")
},get pageY(){return this.getComputedValue("y")},set rect(r){this.x=r[0],this.y=r[1],this.width=r[2]-r[0],this.height=r[3]-r[1]
},get rect(){var x=this.x,y=this.y,w=this.width,h=this.height;return[x,y,x+w,y+h]
},create:function(doc){return _.invoke(this.children,"create",doc),this},destroy:function(){this.parent=null,_.invoke(this.children,"destroy")
},render:function(){return _.invoke(this.children,"render"),this},getComputedValue:function(name){for(var p=this,val=0;p;)val+=p[name],p=p.parent;
return val}})},{"../acrobat/polyfills":7,protean:22,underscore:26}],3:[function(require,module){function Field(spec){Field.superclass.call(this,spec)
}require("./polyfills");var Component=require("./component"),_=require("underscore");
Field.extended=function(subclass){var uber=this,uberproto=uber.prototype,subproto=subclass.prototype,uberattrs=uberproto.attributes,subattrs=subproto.attributes;
subproto.attributes=_.extend({},uberattrs,subattrs||{})},module.exports=Component.extend(Field,{attributes:{alignment:"alignment",limit:"charLimit",multiline:"multiline",password:"password",rich:"richText",richText:"richValue",color:"textColor",font:"textFont",size:"textSize",noscroll:"doNotScroll",nospell:"doNotSpellCheck",pageRect:"rect",fill:"fillColor",highlight:"highlight",mark:"style",value:"value",autocommit:"commetOnSelChange"},defaults:{type:"field",autocommit:!0},create:function(doc){var fqn=this.fqn;
return Field.superproto.create.call(this,doc),this.doc=doc,this.field=doc.getField(fqn)||doc.addField(fqn,this.fieldType,this.pageIndex,this.pageRect),this.render(),this
},destroy:function(){this.doc=null,this.field=null,Field.superproto.destroy.call(this)
},render:function(){return _.each(_.keys(this.attributes),this._syncAttribute.bind(this)),Field.superproto.render.call(this),this
},get pageRect(){var pb=this.doc.getPageBox("Bleed",this.pageIndex),ph=pb[1]-pb[3],x=this.pageX,y=this.pageY,w=this.width,h=this.height,tx=x,ty=ph-y,bx=x+w,by=ph-(y+h);
return[tx,ty,bx,by]},setFieldProperty:function(name,value){var result=!0;try{this.field[name]=value
}catch(e){result=!1,console.log("Can not set property '"+name+"' on field '"+this.name)
}return result},_syncAttribute:function(name){var attrs=this.attributes,fName=attrs[name],val=this[name];
switch(typeof val){case"undefined":return;case"function":return val.call(this,fName);
default:return this.setFieldProperty(fName,val)}}})},{"./component":2,"./polyfills":7,underscore:26}],4:[function(require,module){function Form(spec){Form.superclass.call(this,_.extend(spec,{children:_.map(spec.pages,function(page,idx){return new Component({name:"page"+idx,type:"page",page:idx,children:page})
})}))}var Component=require("./component"),_=require("underscore");Form.create=function(doc,spec){var form=new Form(spec);
doc.delay=!0,form.create(doc),form.destroy(),doc.delay=!1,doc.resetForm()},module.exports=Component.extend(Form,{defaults:{type:"form"}})
},{"./component":2,underscore:26}],5:[function(require){var _=require("underscore");
console.log||(console.log=_.bind(console.println,console))},{underscore:26}],6:[function(require){var _=require("underscore"),slice=Array.prototype.slice,fnProto=Function.prototype;
fnProto.bind||(fnProto.bind=function(){var args=slice.call(arguments);return _.bind.apply(_,[this].concat(args))
})},{underscore:26}],7:[function(require){require("./object"),require("./function"),require("./console")
},{"./console":5,"./function":6,"./object":8}],8:[function(){var Surrogate;Object.defineProperty||(Object.defineProperty=function(obj,name,spec){var value=spec.value,get=spec.get,set=spec.set;
return get||set?(get&&obj.__defineGetter__(name,get),set&&obj.__defineSetter__(name,set)):obj[name]=value,obj
}),Object.defineProperties||(Object.defineProperties=function(obj,propspec){var name;
for(name in propspec)Object.defineProperty(obj,name,propspec[name]);return obj}),Object.create||(Surrogate=function(){},Object.create=function(obj,propspec){var o;
return Surrogate.prototype=obj,o=new Surrogate,propspec&&Object.defineProperties(o,propspec),o
})},{}],9:[function(require,module,exports){var Form=require("../acrobat/form"),_=require("underscore"),colors=require("../acrobat/colors"),abilityId=0,customSkillId=0,dutyBoxId=0,critLineId=0;
_.extend(exports,require("../base/factory"),{format:function(doc,spec){return spec.name="aurebesh",Form.create(doc,spec)
},description:function(s){return this.component({name:"description",x:s.x,y:s.y,children:[this.text(_.extend({name:"species",defaultValue:"Human"},s.species||{})),this.text(_.extend({name:"career"},s.career||{})),this.text(_.extend({name:"gender"},s.gender||{})),this.text(_.extend({name:"age"},s.age||{})),this.text(_.extend({name:"height"},s.height||{})),this.text(_.extend({name:"build"},s.build||{})),this.text(_.extend({name:"hair"},s.hair||{})),this.text(_.extend({name:"eyes"},s.eyes||{})),this.text(_.extend({name:"motivation1"},s.motivation1||{})),this.text(_.extend({name:"motivation2"},s.motivation2||{}))]})
},charbox:function(s){return this.text(_.extend({width:22,height:18,size:18,font:font.HelvB,alignment:"center",defaultValue:2},s))
},dutybox:function(s){return this.component({name:"od"+dutyBoxId++,x:s&&s.x||0,y:s&&s.y||0,children:[this.text({name:"description",x:0,y:0,width:134,height:15}),this.text({name:"size",x:148.75,y:0,width:36,height:15})]})
},ability:function(s){var y=11.527+(s.y||0);return this.component({name:"ab"+abilityId++,children:[this.text({name:"desc",x:0,y:y,width:277.228,height:15,rich:!0}),this.text({name:"act",x:291.94,y:y,width:52.346,height:15}),this.text({name:"rnk",x:358.884,y:y,width:20,height:15,alignment:"center"})]})
},abilities:function(s){var ability=this.ability.bind(this);return this.component({name:"abils",x:s.x,y:s.y,children:_.times(s.count,function(i){return ability({y:16*i})
})})},skillpool:function(){var checkbox=this.checkbox.bind(this),startX=142,stepX=8.25,y=1.4,w=9.36,h=6.48,ht=9,mark=style.sq;
return _(5).times(function(i){return checkbox({name:"rnk"+i,x:startX+stepX*i,y:y+4,width:w,height:h,size:ht,mark:mark,color:colors.cmyk(0,0,0,70)})
}).concat(_(5).times(function(i){return checkbox({name:"abil"+i,x:startX+stepX*i,y:y,width:w,height:h,size:ht,mark:mark,color:colors.cmyk(0,0,0,70)})
}))},skill:function(s){return this.component({name:s.id,children:[this.checkbox({name:"car",x:3.25,y:2.75,width:8,height:8,size:7,color:colors.cmyk(0,0,0,70),mark:style.ci})].concat(s.id&&s.id.indexOf("cust")>-1?this.text({name:"name",x:13,y:0,width:108,height:12,color:colors.cmyk(0,0,0,70)}):void 0).concat(s.addStat?this.text({name:"char",x:123,y:0,width:16,height:12,size:7,alignment:"center",color:colors.cmyk(0,0,0,70)}):void 0).concat(this.skillpool()).filter(Boolean)})
},skills:function(s){var skills=require("../base/skills"),makeSkill=this.skill.bind(this),space=function(o,i){return o.y=13*i,o
},general=_.where(skills,{type:"general"}).map(makeSkill).map(space),knowledge=_.where(skills,{type:"knowledge"}).concat([{id:"cust"+customSkillId++}]).concat([{id:"cust"+customSkillId++}]).map(makeSkill).map(space),combat=_.where(skills,{type:"combat"}).concat([{id:"cust"+customSkillId++,addStat:!0}]).map(makeSkill).map(space),custom=_(4).times(function(){return{id:"cust"+customSkillId++,addStat:!0}
}).map(makeSkill).map(space);return this.component({name:"skills",x:s.x,y:s.y,children:[this.component({name:"gen",x:0,y:20,children:general}),this.component({name:"know",x:196.75,y:19.75,children:knowledge}),this.component({name:"com",x:196.75,y:150,children:combat}),this.component({name:"oth",x:196.75,y:254,children:custom})]})
},weapbox:function(s){var cbNames=["min","maj","des"],cbOpts={x:-1,y:0,width:7.92,height:10.8,size:9,color:colors.cmyk(0,0,0,70),mark:style.cr};
return this.component(_.extend({name:"weapon",x:0,y:0,children:[this.text({name:"name",x:19.5,y:0,width:115.5,height:15}),this.text({name:"skill",x:154.5,y:0,width:58.7,height:15}),this.text({name:"dam",x:225,y:0,width:15,height:15,alignment:"center"}),this.text({name:"crit",x:248,y:0,width:15,height:15,alignment:"center"}),this.text({name:"rng",x:280.6,y:0,width:51.4,height:15}),this.text({name:"enc",x:341,y:0,width:15,height:15,alignment:"center"}),this.text({name:"hp",x:364,y:0,width:15,height:15,alignment:"center"}),this.text({name:"spec",x:26.2,y:15,width:300,height:15}),this.component({name:"cond",x:356,y:16.5,children:_(3).times(function(i){var opts=_.extend({name:cbNames[i]},cbOpts);
return opts.x+=8*i,opts}).map(this.checkbox.bind(this))})]},s))},critline:function(){var checkbox=this.checkbox.bind(this),cbOpts={x:-2.5,y:2.75,width:7.92,height:10.8,size:9,color:colors.cmyk(0,0,0,70),mark:style.di};
return this.component({name:"crit"+critLineId++,children:_(4).times(function(i){return checkbox(_.extend({name:"cbox"+i},cbOpts))
}).map(function(b,i){return b.x=8*i,b}).concat([this.text({name:"desc",x:36,y:0,width:144,height:15})])})
},checkgrid:function(s){var rows=s.cells,cw=9,ch=6.4,vpad=-1,hpad=-1,style={width:11,height:8.4,color:s.color,mark:s.mark},checkbox=this.checkbox.bind(this);
return this.component({name:s.name,x:s.x,y:s.y,children:_.chain(rows).map(function(cols,r){return _(cols).times(function(c){var cb=checkbox(_.extend({name:"cb-"+c+"x"+r,x:c*cw+hpad,y:r*ch+vpad},style));
return cb})}).flatten().value()})},script:function(fn){var src=fn.toString().split("\n").slice(1);
return src.pop(),src.join("\n")}})},{"../acrobat/colors":1,"../acrobat/form":4,"../base/factory":13,"../base/skills":14,underscore:26}],10:[function(require){var Aurebesh=require("./factory"),doc=event.target,colors=require("../acrobat/colors"),_=require("underscore");
Aurebesh.format(doc,{pages:[[Aurebesh.text({name:"name",defaultValue:"Character Name",x:126.833,y:22.749,width:194,height:15,size:10}),Aurebesh.description({x:411.334,y:323.926,species:{x:26.5,y:11.877,width:156.5,height:15},career:{x:26.5,y:27.877,width:156.5,height:15},gender:{x:26.5,y:43.877,width:64,height:15},age:{x:113.588,y:43.877,width:69,height:15},height:{x:26.5,y:59.877,width:64,height:15},build:{x:115.588,y:59.877,width:67,height:15},hair:{x:20.5,y:75.877,width:70,height:15},eyes:{x:113.588,y:75.877,width:69,height:15},motivation1:{x:37.5,y:91.877,width:145,height:15},motivation2:{x:4,y:107.877,width:180,height:15}}),Aurebesh.component({name:"od",x:411.334,y:459,children:_.map([Aurebesh.dutybox(),Aurebesh.dutybox(),Aurebesh.dutybox()],function(b,i){return b.y=16*i,b
})}),Aurebesh.component({name:"moral",x:411.334,y:517.782,children:[Aurebesh.text({name:"c",x:4,y:9.5,width:30,height:18,alignment:"center",size:10}),Aurebesh.text({name:"str",x:50,y:0,width:101,height:15,alignment:"right"}),Aurebesh.text({name:"weak",x:50,y:16,width:101,height:15,alignment:"right"}),Aurebesh.text({name:"conf",x:39.5,y:29,width:142,height:16,size:10})]}),Aurebesh.component({name:"char",x:17.972,y:75.25,children:[Aurebesh.charbox({name:"br"}),Aurebesh.charbox({name:"ag"}),Aurebesh.charbox({name:"int"}),Aurebesh.charbox({name:"cun"}),Aurebesh.charbox({name:"wil"}),Aurebesh.charbox({name:"pr"})].map(function(b,i){return b.x=64.2*i+18,b
})}),Aurebesh.skills({x:18.18,y:128.013}),Aurebesh.abilities({x:18.099,y:439.998,count:10}),Aurebesh.component({name:"weapons",x:18.099,y:641.78,children:_(4).times(function(i){return{name:"weap"+i,x:0,y:32*i}
}).map(Aurebesh.weapbox.bind(Aurebesh))}),Aurebesh.component({name:"soak",x:411.334,y:586.4,children:[Aurebesh.text({name:"value",x:10.3,y:18.3,width:30,height:18,size:13,font:font.HelvB,alignment:"center"})]}),Aurebesh.component({name:"defense",x:411.334,y:630.582,children:[Aurebesh.text({name:"melee",x:2,y:18.3,width:25.5,height:18,size:13,font:font.HelvB,alignment:"center"}),Aurebesh.text({name:"range",x:33,y:18.3,width:30,height:18,size:13,font:font.HelvB,alignment:"center"})]}),Aurebesh.component({name:"wounds",x:481.334,y:586.4,children:[Aurebesh.text({name:"threshold",x:4,y:18.3,width:30,height:18,size:13,font:font.HelvB,alignment:"center"}),Aurebesh.text({name:"current",x:48.15,y:18.3,width:62,height:18,size:13,alignment:"center"})]}),Aurebesh.component({name:"strain",x:481.334,y:630.582,children:[Aurebesh.text({name:"threshold",x:4,y:18.3,width:30,height:18,size:13,font:font.HelvB,alignment:"center"}),Aurebesh.text({name:"current",x:48.15,y:18.3,width:62,height:18,size:13,alignment:"center"})]}),Aurebesh.component({name:"criticals",x:410.25,y:689.448,children:_(5).times(Aurebesh.critline.bind(Aurebesh)).map(function(b,i){return b.y=16*i,b
})})],[].concat(_(2).times(function(c){return Aurebesh.component({name:"gear"+c,x:18+196.5*c,y:37,children:_(16).times(function(r){return Aurebesh.component({name:"item-"+c+"-"+r,x:0,y:16*r,children:[Aurebesh.text({name:"desc",x:0,y:0,width:147,height:15}),Aurebesh.text({name:"enc",x:159,y:0,width:23,height:15,alignment:"center"})]})
})})})).concat(Aurebesh.component({name:"armor",x:18,y:308,children:[Aurebesh.text({name:"desc",x:0,y:0,width:212,height:15}),Aurebesh.text({name:"def",x:237.4,y:0,width:46,height:15,alignment:"center"}),Aurebesh.text({name:"soak",x:299.5,y:0,width:32,height:15,alignment:"center"}),Aurebesh.text({name:"enc",x:342,y:0,width:15,height:15,alignment:"center"}),Aurebesh.text({name:"hp",x:363,y:0,width:15.5,height:15,alignment:"center"}),Aurebesh.text({name:"spec",x:26.5,y:16,width:296,height:15}),function(){var cbNames=["min","maj","des"],cbOpts={x:-.5,y:2,width:7.92,height:10.8,size:9,color:colors.cmyk(0,0,0,70),mark:style.cr};
return Aurebesh.component({name:"cond",x:355.5,y:16,children:_(3).times(function(i){var opts=_.extend({name:cbNames[i]},cbOpts);
return opts.x+=8*i,opts}).map(Aurebesh.checkbox.bind(Aurebesh))})}()]})).concat(Aurebesh.text({name:"credits",x:24,y:360,width:169,height:15})).concat(Aurebesh.text({name:"enc-threshold",x:258,y:360,width:40.8,height:15,alignment:"center"})).concat(Aurebesh.text({name:"enc-current",x:343,y:360,width:48,height:15,alignment:"center"})).concat(Aurebesh.abilities({x:18,y:405,count:22})).concat(Aurebesh.text({name:"exp-total",x:435,y:41,width:60,height:15,alignment:"center"})).concat(Aurebesh.text({name:"exp-avail",x:528,y:41,width:60,height:15,alignment:"right"})).concat(Aurebesh.component({name:"specs",x:411,y:81.436,children:[0,60.5,60.3,60.45,60.25].reduce(function(acc,cur,idx){return acc.y+=cur,acc.items.push(Aurebesh.component({name:"spec"+idx,x:0,y:acc.y,children:[Aurebesh.checkbox({name:"car",x:3.5,y:7,width:8,height:8,size:7,color:colors.cmyk(0,0,0,70),mark:style.ci}),Aurebesh.text({name:"name",x:7.5,y:19,width:136.45,height:15,size:9}),Aurebesh.text({name:"sig",x:13.28,y:38,width:130,height:15,size:9,alignment:"right"})].concat(Aurebesh.checkgrid({name:"talgrid",cells:[4,4,4,4,4],x:147,y:0,color:colors.cmyk(0,0,0,70),mark:style.cr})).concat(Aurebesh.checkgrid({name:"sigrid",cells:[1,4,4],x:147,y:35,color:colors.cmyk(0,0,0,70),mark:style.cr}))})),acc
},{y:0,items:[]}).items})).concat(Aurebesh.component({name:"powers",x:411,y:385.5,children:[0,40,40,40,40,40].reduce(function(acc,cur,idx){return acc.y+=cur,acc.items.push(Aurebesh.component({name:"pow"+idx,x:0,y:acc.y,children:[Aurebesh.text({name:"name",x:7.5,y:17,width:136.45,height:15,size:9}),Aurebesh.checkgrid({name:"powgrid",cells:[1,4,4,4,4],x:147,y:0,color:colors.cmyk(0,0,0,70),mark:style.cr})]})),acc
},{y:0,items:[]}).items})).concat(Aurebesh.text({name:"notes",x:411,y:638,width:183,height:133.2,size:9,multiline:!0}))]}),doc.addScript("fixupForm",Aurebesh.script(function(){var len,i,f;
if(app.viewerVersion>=11)for(i=0,len=this.numFields;len>i;i++)f=this.getField(this.getNthFieldName(i)),f.delay=!0,f.delay=!1
}))},{"../acrobat/colors":1,"./factory":9,underscore:26}],11:[function(require,module){function CheckBox(spec){CheckBox.superclass.call(this,spec)
}var Field=require("../acrobat/field");module.exports=Field.extend(CheckBox,{fieldType:"checkbox"})
},{"../acrobat/field":3}],12:[function(require,module){function DropDown(spec){DropDown.superclass.call(this,spec)
}var TextComponent=require("./text");module.exports=TextComponent.extend(DropDown,{fieldType:"listbox",attributes:{},defaults:{items:[]},sync:function(){var f=this.field;
return DropDown.superproto.sync.call(this),f.setItems(this.items),this}})},{"./text":15}],13:[function(require,module,exports){var Component=require("../acrobat/component"),TextComponent=require("./text"),CheckBox=require("./check-box"),DropDown=require("./drop-down"),Form=require("../acrobat/form");
exports.format=function(doc,spec){return Form.create(doc,spec)},exports.component=function(spec){return new Component(spec)
},exports.text=function(spec){return new TextComponent(spec)},exports.dropdown=function(spec){return new DropDown(spec)
},exports.checkbox=function(spec){return new CheckBox(spec)}},{"../acrobat/component":2,"../acrobat/form":4,"./check-box":11,"./drop-down":12,"./text":15}],14:[function(require,module){function skill(id,characteristic,type){return{id:id,characteristic:characteristic,type:type}
}var GENERAL="general",KNOWLEDGE="knowledge",COMBAT="combat",BRAWN="brawn",AGILITY="agility",INTELLECT="intellect",CUNNING="cunning",WILLPOWER="willpower",PRESENCE="presence";
module.exports=[skill("astrogation",INTELLECT,GENERAL),skill("athletics",BRAWN,GENERAL),skill("charm",PRESENCE,GENERAL),skill("coercion",WILLPOWER,GENERAL),skill("computers",INTELLECT,GENERAL),skill("cool",PRESENCE,GENERAL),skill("coordination",INTELLECT,GENERAL),skill("deception",CUNNING,GENERAL),skill("discipline",WILLPOWER,GENERAL),skill("leadership",PRESENCE,GENERAL),skill("mechanics",INTELLECT,GENERAL),skill("medicine",INTELLECT,GENERAL),skill("negotiation",PRESENCE,GENERAL),skill("perception",CUNNING,GENERAL),skill("piloting-planetary",AGILITY,GENERAL),skill("piloting-space",AGILITY,GENERAL),skill("resilience",BRAWN,GENERAL),skill("skulduggery",CUNNING,GENERAL),skill("stealth",AGILITY,GENERAL),skill("streetwise",CUNNING,GENERAL),skill("survival",CUNNING,GENERAL),skill("vigilance",WILLPOWER,GENERAL),skill("brawl",BRAWN,COMBAT),skill("gunnery",AGILITY,COMBAT),skill("lightsaber",BRAWN,COMBAT),skill("melee",BRAWN,COMBAT),skill("ranged-heavy",AGILITY,COMBAT),skill("ranged-light",AGILITY,COMBAT),skill("core-worlds",INTELLECT,KNOWLEDGE),skill("education",INTELLECT,KNOWLEDGE),skill("lore",INTELLECT,KNOWLEDGE),skill("outer-rim",INTELLECT,KNOWLEDGE),skill("underworld",INTELLECT,KNOWLEDGE),skill("warfare",INTELLECT,KNOWLEDGE),skill("xenology",INTELLECT,KNOWLEDGE)]
},{}],15:[function(require,module){function TextField(spec){TextField.superclass.call(this,spec)
}var Field=require("../acrobat/field"),colors=require("../acrobat/colors");module.exports=Field.extend(TextField,{fieldType:"text",defaults:{type:"text",width:72,height:16,font:font.Helv,color:colors.cmyk(0,0,0,70),size:8,alignment:"left",multiline:!1,rich:!1,noscroll:!0,nospell:!0}})
},{"../acrobat/colors":1,"../acrobat/field":3}],16:[function(require,module){function augment(){return _.rest(arguments,1).reduce(function(acc,obj){var key,getter,setter,props;
for(key in obj)acc.hasOwnProperty(key)||(getter=obj.__lookupGetter__(key),setter=obj.__lookupSetter__(key),getter||setter?(props=props||{},props[key]={get:getter,set:setter,configurable:!0,enumerable:!0}):acc[key]=obj[key]);
return props&&Object.defineProperties(acc,props),acc},arguments[0])}var _=require("underscore");
module.exports=augment},{underscore:26}],17:[function(require,module){module.exports=require("./inherit").bind(null,Object)
},{"./inherit":23}],18:[function(require,module){var _=require("underscore");module.exports=function(){return _.reduce(arguments,function(acc,cur,idx){return acc[cur]=idx+1,acc
},{})}},{underscore:26}],19:[function(require,module){function execute(){var fns=_.flatten(_.rest(arguments,0)).reduce(function(acc,cur){var spec;
return _.isFunction(cur)?(spec={},spec.fn=cur,acc.push(spec)):(spec=acc[acc.length-1],spec.args=spec.args||[null],spec.args.push(cur)),acc
},[]).map(function(spec){return ProtoBind.apply(spec.fn,spec.args)});return function(){for(var fn,curArgs=_.rest(arguments,0),len=fns.length,i=0;len>i;i++)fn=fns[i],curArgs=fn[_.isArray(curArgs)?"apply":"call"](null,curArgs);
return curArgs}}var ProtoBind=Function.prototype.bind,_=require("underscore");module.exports=execute
},{underscore:26}],20:[function(require,module){for(var lut=[],i=0;256>i;i++)lut[i]=(16>i?"0":"")+i.toString(16);
module.exports=function(){var d0=4294967295*Math.random()|0,d1=4294967295*Math.random()|0,d2=4294967295*Math.random()|0,d3=4294967295*Math.random()|0;
return lut[255&d0]+lut[d0>>8&255]+lut[d0>>16&255]+lut[d0>>24&255]+"-"+lut[255&d1]+lut[d1>>8&255]+"-"+lut[d1>>16&15|64]+lut[d1>>24&255]+"-"+lut[63&d2|128]+lut[d2>>8&255]+"-"+lut[d2>>16&255]+lut[d2>>24&255]+lut[255&d3]+lut[d3>>8&255]+lut[d3>>16&255]+lut[d3>>24&255]
}},{}],21:[function(require,module){var _=require("underscore");module.exports=function(){var args=_.rest(arguments,0);
return _.object(args,args)}},{underscore:26}],22:[function(require,module){module.exports={inherit:require("./inherit"),classify:require("./classify"),augment:require("./augment"),hashify:require("./hashify"),enumerate:require("./enumerate"),instantiate:require("./instantiate"),guid:require("./guid"),invoke:require("./invoke"),execute:require("./execute")}
},{"./augment":16,"./classify":17,"./enumerate":18,"./execute":19,"./guid":20,"./hashify":21,"./inherit":23,"./instantiate":24,"./invoke":25}],23:[function(require,module){function inherit(superclass,subclass,props,properties){var hasCtor,superproto,proto;
return arguments.length<4&&"function"!=typeof subclass&&(properties=props,props=subclass,subclass=null),hasCtor=props&&props.hasOwnProperty("constructor"),subclass=subclass||hasCtor&&props.constructor||function(){superclass.apply(this,arguments)
},superproto=superclass.prototype,subclass.prototype=proto=augment(Object.create(superproto),subclass.prototype),properties=properties||{},props&&(delete props.constructor,augment(proto,props)),properties.constructor={value:subclass},Object.defineProperties(proto,properties),subclass.superclass=superclass,subclass.superproto=superproto,subclass.extend||(subclass.extend=inherit.bind(subclass,subclass)),subclass.extended=subclass.extended?_.wrap(subclass.extended.bind(subclass),function(f,sc){superclass.extended&&superclass.extended(sc),f(sc)
}):superclass.extended,superclass.extended&&superclass.extended(subclass),subclass
}var augment=require("./augment"),_=require("underscore");module.exports=inherit},{"./augment":16,underscore:26}],24:[function(require,module){require("underscore");
module.exports=function(fn,args){var obj=Object.create(fn.prototype);return fn.apply(obj,args||[]),obj
}},{underscore:26}],25:[function(require,module){function invoke(name){var args=_.rest(arguments,1);
return function(obj){return obj[name].apply(obj,args)}}var _=require("underscore");
module.exports=invoke},{underscore:26}],26:[function(require,module,exports){(function(){var root=this,previousUnderscore=root._,ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype,push=ArrayProto.push,slice=ArrayProto.slice,concat=ArrayProto.concat,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty,nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind,_=function(obj){return obj instanceof _?obj:this instanceof _?void(this._wrapped=obj):new _(obj)
};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=_),exports._=_):root._=_,_.VERSION="1.7.0";
var createCallback=function(func,context,argCount){if(void 0===context)return func;
switch(null==argCount?3:argCount){case 1:return function(value){return func.call(context,value)
};case 2:return function(value,other){return func.call(context,value,other)};case 3:return function(value,index,collection){return func.call(context,value,index,collection)
};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection)
}}return function(){return func.apply(context,arguments)}};_.iteratee=function(value,context,argCount){return null==value?_.identity:_.isFunction(value)?createCallback(value,context,argCount):_.isObject(value)?_.matches(value):_.property(value)
},_.each=_.forEach=function(obj,iteratee,context){if(null==obj)return obj;iteratee=createCallback(iteratee,context);
var i,length=obj.length;if(length===+length)for(i=0;length>i;i++)iteratee(obj[i],i,obj);
else{var keys=_.keys(obj);for(i=0,length=keys.length;length>i;i++)iteratee(obj[keys[i]],keys[i],obj)
}return obj},_.map=_.collect=function(obj,iteratee,context){if(null==obj)return[];
iteratee=_.iteratee(iteratee,context);for(var currentKey,keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length,results=Array(length),index=0;length>index;index++)currentKey=keys?keys[index]:index,results[index]=iteratee(obj[currentKey],currentKey,obj);
return results};var reduceError="Reduce of empty array with no initial value";_.reduce=_.foldl=_.inject=function(obj,iteratee,memo,context){null==obj&&(obj=[]),iteratee=createCallback(iteratee,context,4);
var currentKey,keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length,index=0;
if(arguments.length<3){if(!length)throw new TypeError(reduceError);memo=obj[keys?keys[index++]:index++]
}for(;length>index;index++)currentKey=keys?keys[index]:index,memo=iteratee(memo,obj[currentKey],currentKey,obj);
return memo},_.reduceRight=_.foldr=function(obj,iteratee,memo,context){null==obj&&(obj=[]),iteratee=createCallback(iteratee,context,4);
var currentKey,keys=obj.length!==+obj.length&&_.keys(obj),index=(keys||obj).length;
if(arguments.length<3){if(!index)throw new TypeError(reduceError);memo=obj[keys?keys[--index]:--index]
}for(;index--;)currentKey=keys?keys[index]:index,memo=iteratee(memo,obj[currentKey],currentKey,obj);
return memo},_.find=_.detect=function(obj,predicate,context){var result;return predicate=_.iteratee(predicate,context),_.some(obj,function(value,index,list){return predicate(value,index,list)?(result=value,!0):void 0
}),result},_.filter=_.select=function(obj,predicate,context){var results=[];return null==obj?results:(predicate=_.iteratee(predicate,context),_.each(obj,function(value,index,list){predicate(value,index,list)&&results.push(value)
}),results)},_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(_.iteratee(predicate)),context)
},_.every=_.all=function(obj,predicate,context){if(null==obj)return!0;predicate=_.iteratee(predicate,context);
var index,currentKey,keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length;
for(index=0;length>index;index++)if(currentKey=keys?keys[index]:index,!predicate(obj[currentKey],currentKey,obj))return!1;
return!0},_.some=_.any=function(obj,predicate,context){if(null==obj)return!1;predicate=_.iteratee(predicate,context);
var index,currentKey,keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length;
for(index=0;length>index;index++)if(currentKey=keys?keys[index]:index,predicate(obj[currentKey],currentKey,obj))return!0;
return!1},_.contains=_.include=function(obj,target){return null==obj?!1:(obj.length!==+obj.length&&(obj=_.values(obj)),_.indexOf(obj,target)>=0)
},_.invoke=function(obj,method){var args=slice.call(arguments,2),isFunc=_.isFunction(method);
return _.map(obj,function(value){return(isFunc?method:value[method]).apply(value,args)
})},_.pluck=function(obj,key){return _.map(obj,_.property(key))},_.where=function(obj,attrs){return _.filter(obj,_.matches(attrs))
},_.findWhere=function(obj,attrs){return _.find(obj,_.matches(attrs))},_.max=function(obj,iteratee,context){var value,computed,result=-1/0,lastComputed=-1/0;
if(null==iteratee&&null!=obj){obj=obj.length===+obj.length?obj:_.values(obj);for(var i=0,length=obj.length;length>i;i++)value=obj[i],value>result&&(result=value)
}else iteratee=_.iteratee(iteratee,context),_.each(obj,function(value,index,list){computed=iteratee(value,index,list),(computed>lastComputed||computed===-1/0&&result===-1/0)&&(result=value,lastComputed=computed)
});return result},_.min=function(obj,iteratee,context){var value,computed,result=1/0,lastComputed=1/0;
if(null==iteratee&&null!=obj){obj=obj.length===+obj.length?obj:_.values(obj);for(var i=0,length=obj.length;length>i;i++)value=obj[i],result>value&&(result=value)
}else iteratee=_.iteratee(iteratee,context),_.each(obj,function(value,index,list){computed=iteratee(value,index,list),(lastComputed>computed||1/0===computed&&1/0===result)&&(result=value,lastComputed=computed)
});return result},_.shuffle=function(obj){for(var rand,set=obj&&obj.length===+obj.length?obj:_.values(obj),length=set.length,shuffled=Array(length),index=0;length>index;index++)rand=_.random(0,index),rand!==index&&(shuffled[index]=shuffled[rand]),shuffled[rand]=set[index];
return shuffled},_.sample=function(obj,n,guard){return null==n||guard?(obj.length!==+obj.length&&(obj=_.values(obj)),obj[_.random(obj.length-1)]):_.shuffle(obj).slice(0,Math.max(0,n))
},_.sortBy=function(obj,iteratee,context){return iteratee=_.iteratee(iteratee,context),_.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iteratee(value,index,list)}
}).sort(function(left,right){var a=left.criteria,b=right.criteria;if(a!==b){if(a>b||void 0===a)return 1;
if(b>a||void 0===b)return-1}return left.index-right.index}),"value")};var group=function(behavior){return function(obj,iteratee,context){var result={};
return iteratee=_.iteratee(iteratee,context),_.each(obj,function(value,index){var key=iteratee(value,index,obj);
behavior(result,value,key)}),result}};_.groupBy=group(function(result,value,key){_.has(result,key)?result[key].push(value):result[key]=[value]
}),_.indexBy=group(function(result,value,key){result[key]=value}),_.countBy=group(function(result,value,key){_.has(result,key)?result[key]++:result[key]=1
}),_.sortedIndex=function(array,obj,iteratee,context){iteratee=_.iteratee(iteratee,context,1);
for(var value=iteratee(obj),low=0,high=array.length;high>low;){var mid=low+high>>>1;
iteratee(array[mid])<value?low=mid+1:high=mid}return low},_.toArray=function(obj){return obj?_.isArray(obj)?slice.call(obj):obj.length===+obj.length?_.map(obj,_.identity):_.values(obj):[]
},_.size=function(obj){return null==obj?0:obj.length===+obj.length?obj.length:_.keys(obj).length
},_.partition=function(obj,predicate,context){predicate=_.iteratee(predicate,context);
var pass=[],fail=[];return _.each(obj,function(value,key,obj){(predicate(value,key,obj)?pass:fail).push(value)
}),[pass,fail]},_.first=_.head=_.take=function(array,n,guard){return null==array?void 0:null==n||guard?array[0]:0>n?[]:slice.call(array,0,n)
},_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(null==n||guard?1:n)))
},_.last=function(array,n,guard){return null==array?void 0:null==n||guard?array[array.length-1]:slice.call(array,Math.max(array.length-n,0))
},_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,null==n||guard?1:n)
},_.compact=function(array){return _.filter(array,_.identity)};var flatten=function(input,shallow,strict,output){if(shallow&&_.every(input,_.isArray))return concat.apply(output,input);
for(var i=0,length=input.length;length>i;i++){var value=input[i];_.isArray(value)||_.isArguments(value)?shallow?push.apply(output,value):flatten(value,shallow,strict,output):strict||output.push(value)
}return output};_.flatten=function(array,shallow){return flatten(array,shallow,!1,[])
},_.without=function(array){return _.difference(array,slice.call(arguments,1))},_.uniq=_.unique=function(array,isSorted,iteratee,context){if(null==array)return[];
_.isBoolean(isSorted)||(context=iteratee,iteratee=isSorted,isSorted=!1),null!=iteratee&&(iteratee=_.iteratee(iteratee,context));
for(var result=[],seen=[],i=0,length=array.length;length>i;i++){var value=array[i];
if(isSorted)i&&seen===value||result.push(value),seen=value;else if(iteratee){var computed=iteratee(value,i,array);
_.indexOf(seen,computed)<0&&(seen.push(computed),result.push(value))}else _.indexOf(result,value)<0&&result.push(value)
}return result},_.union=function(){return _.uniq(flatten(arguments,!0,!0,[]))},_.intersection=function(array){if(null==array)return[];
for(var result=[],argsLength=arguments.length,i=0,length=array.length;length>i;i++){var item=array[i];
if(!_.contains(result,item)){for(var j=1;argsLength>j&&_.contains(arguments[j],item);j++);j===argsLength&&result.push(item)
}}return result},_.difference=function(array){var rest=flatten(slice.call(arguments,1),!0,!0,[]);
return _.filter(array,function(value){return!_.contains(rest,value)})},_.zip=function(array){if(null==array)return[];
for(var length=_.max(arguments,"length").length,results=Array(length),i=0;length>i;i++)results[i]=_.pluck(arguments,i);
return results},_.object=function(list,values){if(null==list)return{};for(var result={},i=0,length=list.length;length>i;i++)values?result[list[i]]=values[i]:result[list[i][0]]=list[i][1];
return result},_.indexOf=function(array,item,isSorted){if(null==array)return-1;var i=0,length=array.length;
if(isSorted){if("number"!=typeof isSorted)return i=_.sortedIndex(array,item),array[i]===item?i:-1;
i=0>isSorted?Math.max(0,length+isSorted):isSorted}for(;length>i;i++)if(array[i]===item)return i;
return-1},_.lastIndexOf=function(array,item,from){if(null==array)return-1;var idx=array.length;
for("number"==typeof from&&(idx=0>from?idx+from+1:Math.min(idx,from+1));--idx>=0;)if(array[idx]===item)return idx;
return-1},_.range=function(start,stop,step){arguments.length<=1&&(stop=start||0,start=0),step=step||1;
for(var length=Math.max(Math.ceil((stop-start)/step),0),range=Array(length),idx=0;length>idx;idx++,start+=step)range[idx]=start;
return range};var Ctor=function(){};_.bind=function(func,context){var args,bound;
if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));
if(!_.isFunction(func))throw new TypeError("Bind must be called on a function");return args=slice.call(arguments,2),bound=function(){if(!(this instanceof bound))return func.apply(context,args.concat(slice.call(arguments)));
Ctor.prototype=func.prototype;var self=new Ctor;Ctor.prototype=null;var result=func.apply(self,args.concat(slice.call(arguments)));
return _.isObject(result)?result:self}},_.partial=function(func){var boundArgs=slice.call(arguments,1);
return function(){for(var position=0,args=boundArgs.slice(),i=0,length=args.length;length>i;i++)args[i]===_&&(args[i]=arguments[position++]);
for(;position<arguments.length;)args.push(arguments[position++]);return func.apply(this,args)
}},_.bindAll=function(obj){var i,key,length=arguments.length;if(1>=length)throw new Error("bindAll must be passed function names");
for(i=1;length>i;i++)key=arguments[i],obj[key]=_.bind(obj[key],obj);return obj},_.memoize=function(func,hasher){var memoize=function(key){var cache=memoize.cache,address=hasher?hasher.apply(this,arguments):key;
return _.has(cache,address)||(cache[address]=func.apply(this,arguments)),cache[address]
};return memoize.cache={},memoize},_.delay=function(func,wait){var args=slice.call(arguments,2);
return setTimeout(function(){return func.apply(null,args)},wait)},_.defer=function(func){return _.delay.apply(_,[func,1].concat(slice.call(arguments,1)))
},_.throttle=function(func,wait,options){var context,args,result,timeout=null,previous=0;
options||(options={});var later=function(){previous=options.leading===!1?0:_.now(),timeout=null,result=func.apply(context,args),timeout||(context=args=null)
};return function(){var now=_.now();previous||options.leading!==!1||(previous=now);
var remaining=wait-(now-previous);return context=this,args=arguments,0>=remaining||remaining>wait?(clearTimeout(timeout),timeout=null,previous=now,result=func.apply(context,args),timeout||(context=args=null)):timeout||options.trailing===!1||(timeout=setTimeout(later,remaining)),result
}},_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result,later=function(){var last=_.now()-timestamp;
wait>last&&last>0?timeout=setTimeout(later,wait-last):(timeout=null,immediate||(result=func.apply(context,args),timeout||(context=args=null)))
};return function(){context=this,args=arguments,timestamp=_.now();var callNow=immediate&&!timeout;
return timeout||(timeout=setTimeout(later,wait)),callNow&&(result=func.apply(context,args),context=args=null),result
}},_.wrap=function(func,wrapper){return _.partial(wrapper,func)},_.negate=function(predicate){return function(){return!predicate.apply(this,arguments)
}},_.compose=function(){var args=arguments,start=args.length-1;return function(){for(var i=start,result=args[start].apply(this,arguments);i--;)result=args[i].call(this,result);
return result}},_.after=function(times,func){return function(){return--times<1?func.apply(this,arguments):void 0
}},_.before=function(times,func){var memo;return function(){return--times>0?memo=func.apply(this,arguments):func=null,memo
}},_.once=_.partial(_.before,2),_.keys=function(obj){if(!_.isObject(obj))return[];
if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)_.has(obj,key)&&keys.push(key);
return keys},_.values=function(obj){for(var keys=_.keys(obj),length=keys.length,values=Array(length),i=0;length>i;i++)values[i]=obj[keys[i]];
return values},_.pairs=function(obj){for(var keys=_.keys(obj),length=keys.length,pairs=Array(length),i=0;length>i;i++)pairs[i]=[keys[i],obj[keys[i]]];
return pairs},_.invert=function(obj){for(var result={},keys=_.keys(obj),i=0,length=keys.length;length>i;i++)result[obj[keys[i]]]=keys[i];
return result},_.functions=_.methods=function(obj){var names=[];for(var key in obj)_.isFunction(obj[key])&&names.push(key);
return names.sort()},_.extend=function(obj){if(!_.isObject(obj))return obj;for(var source,prop,i=1,length=arguments.length;length>i;i++){source=arguments[i];
for(prop in source)hasOwnProperty.call(source,prop)&&(obj[prop]=source[prop])}return obj
},_.pick=function(obj,iteratee,context){var key,result={};if(null==obj)return result;
if(_.isFunction(iteratee)){iteratee=createCallback(iteratee,context);for(key in obj){var value=obj[key];
iteratee(value,key,obj)&&(result[key]=value)}}else{var keys=concat.apply([],slice.call(arguments,1));
obj=new Object(obj);for(var i=0,length=keys.length;length>i;i++)key=keys[i],key in obj&&(result[key]=obj[key])
}return result},_.omit=function(obj,iteratee,context){if(_.isFunction(iteratee))iteratee=_.negate(iteratee);
else{var keys=_.map(concat.apply([],slice.call(arguments,1)),String);iteratee=function(value,key){return!_.contains(keys,key)
}}return _.pick(obj,iteratee,context)},_.defaults=function(obj){if(!_.isObject(obj))return obj;
for(var i=1,length=arguments.length;length>i;i++){var source=arguments[i];for(var prop in source)void 0===obj[prop]&&(obj[prop]=source[prop])
}return obj},_.clone=function(obj){return _.isObject(obj)?_.isArray(obj)?obj.slice():_.extend({},obj):obj
},_.tap=function(obj,interceptor){return interceptor(obj),obj};var eq=function(a,b,aStack,bStack){if(a===b)return 0!==a||1/a===1/b;
if(null==a||null==b)return a===b;a instanceof _&&(a=a._wrapped),b instanceof _&&(b=b._wrapped);
var className=toString.call(a);if(className!==toString.call(b))return!1;switch(className){case"[object RegExp]":case"[object String]":return""+a==""+b;
case"[object Number]":return+a!==+a?+b!==+b:0===+a?1/+a===1/b:+a===+b;case"[object Date]":case"[object Boolean]":return+a===+b
}if("object"!=typeof a||"object"!=typeof b)return!1;for(var length=aStack.length;length--;)if(aStack[length]===a)return bStack[length]===b;
var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&"constructor"in a&&"constructor"in b&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor))return!1;
aStack.push(a),bStack.push(b);var size,result;if("[object Array]"===className){if(size=a.length,result=size===b.length)for(;size--&&(result=eq(a[size],b[size],aStack,bStack)););}else{var key,keys=_.keys(a);
if(size=keys.length,result=_.keys(b).length===size)for(;size--&&(key=keys[size],result=_.has(b,key)&&eq(a[key],b[key],aStack,bStack)););}return aStack.pop(),bStack.pop(),result
};_.isEqual=function(a,b){return eq(a,b,[],[])},_.isEmpty=function(obj){if(null==obj)return!0;
if(_.isArray(obj)||_.isString(obj)||_.isArguments(obj))return 0===obj.length;for(var key in obj)if(_.has(obj,key))return!1;
return!0},_.isElement=function(obj){return!(!obj||1!==obj.nodeType)},_.isArray=nativeIsArray||function(obj){return"[object Array]"===toString.call(obj)
},_.isObject=function(obj){var type=typeof obj;return"function"===type||"object"===type&&!!obj
},_.each(["Arguments","Function","String","Number","Date","RegExp"],function(name){_["is"+name]=function(obj){return toString.call(obj)==="[object "+name+"]"
}}),_.isArguments(arguments)||(_.isArguments=function(obj){return _.has(obj,"callee")
}),"function"!=typeof/./&&(_.isFunction=function(obj){return"function"==typeof obj||!1
}),_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj))},_.isNaN=function(obj){return _.isNumber(obj)&&obj!==+obj
},_.isBoolean=function(obj){return obj===!0||obj===!1||"[object Boolean]"===toString.call(obj)
},_.isNull=function(obj){return null===obj},_.isUndefined=function(obj){return void 0===obj
},_.has=function(obj,key){return null!=obj&&hasOwnProperty.call(obj,key)},_.noConflict=function(){return root._=previousUnderscore,this
},_.identity=function(value){return value},_.constant=function(value){return function(){return value
}},_.noop=function(){},_.property=function(key){return function(obj){return obj[key]
}},_.matches=function(attrs){var pairs=_.pairs(attrs),length=pairs.length;return function(obj){if(null==obj)return!length;
obj=new Object(obj);for(var i=0;length>i;i++){var pair=pairs[i],key=pair[0];if(pair[1]!==obj[key]||!(key in obj))return!1
}return!0}},_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=createCallback(iteratee,context,1);
for(var i=0;n>i;i++)accum[i]=iteratee(i);return accum},_.random=function(min,max){return null==max&&(max=min,min=0),min+Math.floor(Math.random()*(max-min+1))
},_.now=Date.now||function(){return(new Date).getTime()};var escapeMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},unescapeMap=_.invert(escapeMap),createEscaper=function(map){var escaper=function(match){return map[match]
},source="(?:"+_.keys(map).join("|")+")",testRegexp=RegExp(source),replaceRegexp=RegExp(source,"g");
return function(string){return string=null==string?"":""+string,testRegexp.test(string)?string.replace(replaceRegexp,escaper):string
}};_.escape=createEscaper(escapeMap),_.unescape=createEscaper(unescapeMap),_.result=function(object,property){if(null==object)return void 0;
var value=object[property];return _.isFunction(value)?object[property]():value};var idCounter=0;
_.uniqueId=function(prefix){var id=++idCounter+"";return prefix?prefix+id:id},_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var noMatch=/(.)^/,escapes={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},escaper=/\\|'|\r|\n|\u2028|\u2029/g,escapeChar=function(match){return"\\"+escapes[match]
};_.template=function(text,settings,oldSettings){!settings&&oldSettings&&(settings=oldSettings),settings=_.defaults({},settings,_.templateSettings);
var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join("|")+"|$","g"),index=0,source="__p+='";
text.replace(matcher,function(match,escape,interpolate,evaluate,offset){return source+=text.slice(index,offset).replace(escaper,escapeChar),index=offset+match.length,escape?source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'":interpolate?source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'":evaluate&&(source+="';\n"+evaluate+"\n__p+='"),match
}),source+="';\n",settings.variable||(source="with(obj||{}){\n"+source+"}\n"),source="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+source+"return __p;\n";
try{var render=new Function(settings.variable||"obj","_",source)}catch(e){throw e.source=source,e
}var template=function(data){return render.call(this,data,_)},argument=settings.variable||"obj";
return template.source="function("+argument+"){\n"+source+"}",template},_.chain=function(obj){var instance=_(obj);
return instance._chain=!0,instance};var result=function(obj){return this._chain?_(obj).chain():obj
};_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];
_.prototype[name]=function(){var args=[this._wrapped];return push.apply(args,arguments),result.call(this,func.apply(_,args))
}})},_.mixin(_),_.each(["pop","push","reverse","shift","sort","splice","unshift"],function(name){var method=ArrayProto[name];
_.prototype[name]=function(){var obj=this._wrapped;return method.apply(obj,arguments),"shift"!==name&&"splice"!==name||0!==obj.length||delete obj[0],result.call(this,obj)
}}),_.each(["concat","join","slice"],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result.call(this,method.apply(this._wrapped,arguments))
}}),_.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return _
})}).call(this)},{}]},{},[10]);