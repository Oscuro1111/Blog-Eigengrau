/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
import React from 'react';

function supported(cmd){
    return document.queryCommandSupported(cmd.cmd);
}

var flg = false;

export var Execute = function(cmd){
    if(supported(cmd)){
        if(document.execCommand){
            document.execCommand(cmd.cmd,false,(cmd.value||""));
        }
    }
};


export const ColorSelector = () => {

	return (
        <React.Fragment>
		<select className="selectColor" ref={r=>{
              for(let i = 0;i<r.children.length;i++){
                  r.children[i].addEventListener('click',function(e){
                    Execute({cmd:(!flg&&"foreColor")||(flg&&"backColor"),value:(this.value)});
                  });
              }
        }}>
			<option  value="hex">
				Colors
			</option>
			<option   style={{"background-color":"rgb(240, 248, 255)"}} value="#f0f8ff">
				aliceblue 
			</option>
			<option   style={{"background-color":"rgb(250, 235, 215)"}} value="#faebd7">
				antiquewhite 
			</option>
			<option   style={{"background-color":"rgb(255, 239, 219)"}} value="#ffefdb">
				antiquewhite1 
			</option>
			<option   style={{"background-color":"rgb(238, 223, 204)"}} value="#eedfcc">
				antiquewhite2 
			</option>
			<option   style={{"background-color":"rgb(205, 192, 176)"}} value="#cdc0b0">
				antiquewhite3 
			</option>
			<option   style={{"background-color":"rgb(139, 131, 120)"}} value="#8b8378">
				antiquewhite4 
			</option>
			<option   style={{"background-color":"rgb(127, 255, 212)"}} value="#7fffd4">
				aquamarine1 
			</option>
			<option   style={{"background-color":"rgb(118, 238, 198)"}} value="#76eec6">
				aquamarine2 
			</option>
			<option   style={{"background-color":"rgb(69, 139, 116)"}} value="#458b74">
				aquamarine4 
			</option>
			<option   style={{"background-color":"rgb(240, 255, 255)"}} value="#f0ffff">
				azure1 
			</option>
			<option   style={{"background-color":"rgb(224, 238, 238)"}} value="#e0eeee">
				azure2 
			</option>
			<option   style={{"background-color":"rgb(193, 205, 205)"}} value="#c1cdcd">
				azure3 
			</option>
			<option   style={{"background-color":"rgb(131, 139, 139)"}} value="#838b8b">
				azure4 
			</option>
			<option   style={{"background-color":"rgb(245, 245, 220)"}} value="#f5f5dc">
				beige 
			</option>
			<option   style={{"background-color":"rgb(255, 228, 196)"}} value="#ffe4c4">
				bisque1 
			</option>
			<option   style={{"background-color":"rgb(238, 213, 183)"}} value="#eed5b7">
				bisque2 
			</option>
			<option   style={{"background-color":"rgb(205, 183, 158)"}} value="#cdb79e">
				bisque3 
			</option>
			<option   style={{"background-color":"rgb(139, 125, 107)"}} value="#8b7d6b">
				bisque4 
			</option>
			<option   style={{"background-color":"rgb(0, 0, 0)"}} value="#000000">
				black 
			</option>
			<option   style={{"background-color":"rgb(255, 235, 205)"}} value="#ffebcd">
				blanchedalmond 
			</option>
			<option   style={{"background-color":"rgb(0, 0, 255)"}} value="#0000ff">
				blue1 
			</option>
			<option   style={{"background-color":"rgb(0, 0, 238)"}} value="#0000ee">
				blue2 
			</option>
			<option   style={{"background-color":"rgb(0, 0, 139)"}} value="#00008b">
				blue4 
			</option>
			<option   style={{"background-color":"rgb(138, 43, 226)"}} value="#8a2be2">
				blueviolet 
			</option>
			<option   style={{"background-color":"rgb(165, 42, 42)"}} value="#a52a2a">
				brown 
			</option>
			<option   style={{"background-color":"rgb(255, 64, 64)"}} value="#ff4040">
				brown1 
			</option>
			<option   style={{"background-color":"rgb(238, 59, 59)"}} value="#ee3b3b">
				brown2 
			</option>
			<option   style={{"background-color":"rgb(205, 51, 51)"}} value="#cd3333">
				brown3 
			</option>
			<option   style={{"background-color":"rgb(139, 35, 35)"}} value="#8b2323">
				brown4 
			</option>
			<option   style={{"background-color":"rgb(222, 184, 135)"}} value="#deb887">
				burlywood 
			</option>
			<option   style={{"background-color":"rgb(255, 211, 155)"}} value="#ffd39b">
				burlywood1 
			</option>
			<option   style={{"background-color":"rgb(238, 197, 145)"}} value="#eec591">
				burlywood2 
			</option>
			<option   style={{"background-color":"rgb(205, 170, 125)"}} value="#cdaa7d">
				burlywood3 
			</option>
			<option   style={{"background-color":"rgb(139, 115, 85)"}} value="#8b7355">
				burlywood4 
			</option>
			<option   style={{"background-color":"rgb(95, 158, 160)"}} value="#5f9ea0">
				cadetblue 
			</option>
			<option   style={{"background-color":"rgb(152, 245, 255)"}} value="#98f5ff">
				cadetblue1 
			</option>
			<option   style={{"background-color":"rgb(142, 229, 238)"}} value="#8ee5ee">
				cadetblue2 
			</option>
			<option   style={{"background-color":"rgb(122, 197, 205)"}} value="#7ac5cd">
				cadetblue3 
			</option>
			<option   style={{"background-color":"rgb(83, 134, 139)"}} value="#53868b">
				cadetblue4 
			</option>
			<option   style={{"background-color":"rgb(127, 255, 0)"}} value="#7fff00">
				chartreuse1 
			</option>
			<option   style={{"background-color":"rgb(118, 238, 0)"}} value="#76ee00">
				chartreuse2 
			</option>
			<option   style={{"background-color":"rgb(102, 205, 0)"}} value="#66cd00">
				chartreuse3 
			</option>
			<option   style={{"background-color":"rgb(69, 139, 0)"}} value="#458b00">
				chartreuse4 
			</option>
			<option   style={{"background-color":"rgb(210, 105, 30)"}} value="#d2691e">
				chocolate 
			</option>
			<option   style={{"background-color":"rgb(255, 127, 36)"}} value="#ff7f24">
				chocolate1 
			</option>
			<option   style={{"background-color":"rgb(238, 118, 33)"}} value="#ee7621">
				chocolate2 
			</option>
			<option   style={{"background-color":"rgb(205, 102, 29)"}} value="#cd661d">
				chocolate3 
			</option>
			<option   style={{"background-color":"rgb(255, 127, 80)"}} value="#ff7f50">
				coral 
			</option>
			<option   style={{"background-color":"rgb(255, 114, 86)"}} value="#ff7256">
				coral1 
			</option>
			<option   style={{"background-color":"rgb(238, 106, 80)"}} value="#ee6a50">
				coral2 
			</option>
			<option   style={{"background-color":"rgb(205, 91, 69)"}} value="#cd5b45">
				coral3 
			</option>
			<option   style={{"background-color":"rgb(139, 62, 47)"}} value="#8b3e2f">
				coral4 
			</option>
			<option   style={{"background-color":"rgb(100, 149, 237)"}} value="#6495ed">
				cornflowerblue 
			</option>
			<option   style={{"background-color":"rgb(255, 248, 220)"}} value="#fff8dc">
				cornsilk1 
			</option>
			<option   style={{"background-color":"rgb(238, 232, 205)"}} value="#eee8cd">
				cornsilk2 
			</option>
			<option   style={{"background-color":"rgb(205, 200, 177)"}} value="#cdc8b1">
				cornsilk3 
			</option>
			<option   style={{"background-color":"rgb(139, 136, 120)"}} value="#8b8878">
				cornsilk4 
			</option>
			<option   style={{"background-color":"rgb(0, 255, 255)"}} value="#00ffff">
				cyan1 
			</option>
			<option   style={{"background-color":"rgb(0, 238, 238)"}} value="#00eeee">
				cyan2 
			</option>
			<option   style={{"background-color":"rgb(0, 205, 205)"}} value="#00cdcd">
				cyan3 
			</option>
			<option   style={{"background-color":"rgb(0, 139, 139)"}} value="#008b8b">
				cyan4 
			</option>
			<option   style={{"background-color":"rgb(184, 134, 11)"}} value="#b8860b">
				darkgoldenrod 
			</option>
			<option   style={{"background-color":"rgb(255, 185, 15)"}} value="#ffb90f">
				darkgoldenrod1 
			</option>
			<option   style={{"background-color":"rgb(238, 173, 14)"}} value="#eead0e">
				darkgoldenrod2 
			</option>
			<option   style={{"background-color":"rgb(205, 149, 12)"}} value="#cd950c">
				darkgoldenrod3 
			</option>
			<option   style={{"background-color":"rgb(139, 101, 8)"}} value="#8b6508">
				darkgoldenrod4 
			</option>
			<option   style={{"background-color":"rgb(0, 100, 0)"}} value="#006400">
				darkgreen 
			</option>
			<option   style={{"background-color":"rgb(189, 183, 107)"}} value="#bdb76b">
				darkkhaki 
			</option>
			<option   style={{"background-color":"rgb(85, 107, 47)"}} value="#556b2f">
				darkolivegreen 
			</option>
			<option   style={{"background-color":"rgb(202, 255, 112)"}} value="#caff70">
				darkolivegreen1 
			</option>
			<option   style={{"background-color":"rgb(188, 238, 104)"}} value="#bcee68">
				darkolivegreen2 
			</option>
			<option   style={{"background-color":"rgb(162, 205, 90)"}} value="#a2cd5a">
				darkolivegreen3 
			</option>
			<option   style={{"background-color":"rgb(110, 139, 61)"}} value="#6e8b3d">
				darkolivegreen4 
			</option>
			<option   style={{"background-color":"rgb(255, 140, 0)"}} value="#ff8c00">
				darkorange 
			</option>
			<option   style={{"background-color":"rgb(255, 127, 0)"}} value="#ff7f00">
				darkorange1 
			</option>
			<option   style={{"background-color":"rgb(238, 118, 0)"}} value="#ee7600">
				darkorange2 
			</option>
			<option   style={{"background-color":"rgb(205, 102, 0)"}} value="#cd6600">
				darkorange3 
			</option>
			<option   style={{"background-color":"rgb(139, 69, 0)"}} value="#8b4500">
				darkorange4 
			</option>
			<option   style={{"background-color":"rgb(153, 50, 204)"}} value="#9932cc">
				darkorchid 
			</option>
			<option   style={{"background-color":"rgb(191, 62, 255)"}} value="#bf3eff">
				darkorchid1 
			</option>
			<option   style={{"background-color":"rgb(178, 58, 238)"}} value="#b23aee">
				darkorchid2 
			</option>
			<option   style={{"background-color":"rgb(154, 50, 205)"}} value="#9a32cd">
				darkorchid3 
			</option>
			<option   style={{"background-color":"rgb(104, 34, 139)"}} value="#68228b">
				darkorchid4 
			</option>
			<option   style={{"background-color":"rgb(233, 150, 122)"}} value="#e9967a">
				darksalmon 
			</option>
			<option   style={{"background-color":"rgb(143, 188, 143)"}} value="#8fbc8f">
				darkseagreen 
			</option>
			<option   style={{"background-color":"rgb(193, 255, 193)"}} value="#c1ffc1">
				darkseagreen1 
			</option>
			<option   style={{"background-color":"rgb(180, 238, 180)"}} value="#b4eeb4">
				darkseagreen2 
			</option>
			<option   style={{"background-color":"rgb(155, 205, 155)"}} value="#9bcd9b">
				darkseagreen3 
			</option>
			<option   style={{"background-color":"rgb(105, 139, 105)"}} value="#698b69">
				darkseagreen4 
			</option>
			<option   style={{"background-color":"rgb(72, 61, 139)"}} value="#483d8b">
				darkslateblue 
			</option>
			<option   style={{"background-color":"rgb(47, 79, 79)"}} value="#2f4f4f">
				darkslategray 
			</option>
			<option   style={{"background-color":"rgb(151, 255, 255)"}} value="#97ffff">
				darkslategray1 
			</option>
			<option   style={{"background-color":"rgb(141, 238, 238)"}} value="#8deeee">
				darkslategray2 
			</option>
			<option   style={{"background-color":"rgb(121, 205, 205)"}} value="#79cdcd">
				darkslategray3 
			</option>
			<option   style={{"background-color":"rgb(82, 139, 139)"}} value="#528b8b">
				darkslategray4 
			</option>
			<option   style={{"background-color":"rgb(0, 206, 209)"}} value="#00ced1">
				darkturquoise 
			</option>
			<option   style={{"background-color":"rgb(148, 0, 211)"}} value="#9400d3">
				darkviolet 
			</option>
			<option   style={{"background-color":"rgb(255, 20, 147)"}} value="#ff1493">
				deeppink1 
			</option>
			<option   style={{"background-color":"rgb(238, 18, 137)"}} value="#ee1289">
				deeppink2 
			</option>
			<option   style={{"background-color":"rgb(205, 16, 118)"}} value="#cd1076">
				deeppink3 
			</option>
			<option   style={{"background-color":"rgb(139, 10, 80)"}} value="#8b0a50">
				deeppink4 
			</option>
			<option   style={{"background-color":"rgb(0, 191, 255)"}} value="#00bfff">
				deepskyblue1 
			</option>
			<option   style={{"background-color":"rgb(0, 178, 238)"}} value="#00b2ee">
				deepskyblue2 
			</option>
			<option   style={{"background-color":"rgb(0, 154, 205)"}} value="#009acd">
				deepskyblue3 
			</option>
			<option   style={{"background-color":"rgb(0, 104, 139)"}} value="#00688b">
				deepskyblue4 
			</option>
			<option   style={{"background-color":"rgb(105, 105, 105)"}} value="#696969">
				dimgray 
			</option>
			<option   style={{"background-color":"rgb(30, 144, 255)"}} value="#1e90ff">
				dodgerblue1 
			</option>
			<option   style={{"background-color":"rgb(28, 134, 238)"}} value="#1c86ee">
				dodgerblue2 
			</option>
			<option   style={{"background-color":"rgb(24, 116, 205)"}} value="#1874cd">
				dodgerblue3 
			</option>
			<option   style={{"background-color":"rgb(16, 78, 139)"}} value="#104e8b">
				dodgerblue4 
			</option>
			<option   style={{"background-color":"rgb(178, 34, 34)"}} value="#b22222">
				firebrick 
			</option>
			<option   style={{"background-color":"rgb(255, 48, 48)"}} value="#ff3030">
				firebrick1 
			</option>
			<option   style={{"background-color":"rgb(238, 44, 44)"}} value="#ee2c2c">
				firebrick2 
			</option>
			<option   style={{"background-color":"rgb(205, 38, 38)"}} value="#cd2626">
				firebrick3 
			</option>
			<option   style={{"background-color":"rgb(139, 26, 26)"}} value="#8b1a1a">
				firebrick4 
			</option>
			<option   style={{"background-color":"rgb(255, 250, 240)"}} value="#fffaf0">
				floralwhite 
			</option>
			<option   style={{"background-color":"rgb(34, 139, 34)"}} value="#228b22">
				forestgreen 
			</option>
			<option   style={{"background-color":"rgb(220, 220, 220)"}} value="#dcdcdc">
				gainsboro 
			</option>
			<option   style={{"background-color":"rgb(248, 248, 255)"}} value="#f8f8ff">
				ghostwhite 
			</option>
			<option   style={{"background-color":"rgb(255, 215, 0)"}} value="#ffd700">
				gold1 
			</option>
			<option   style={{"background-color":"rgb(238, 201, 0)"}} value="#eec900">
				gold2 
			</option>
			<option   style={{"background-color":"rgb(205, 173, 0)"}} value="#cdad00">
				gold3 
			</option>
			<option   style={{"background-color":"rgb(139, 117, 0)"}} value="#8b7500">
				gold4 
			</option>
			<option   style={{"background-color":"rgb(218, 165, 32)"}} value="#daa520">
				goldenrod 
			</option>
			<option   style={{"background-color":"rgb(255, 193, 37)"}} value="#ffc125">
				goldenrod1 
			</option>
			<option   style={{"background-color":"rgb(238, 180, 34)"}} value="#eeb422">
				goldenrod2 
			</option>
			<option   style={{"background-color":"rgb(205, 155, 29)"}} value="#cd9b1d">
				goldenrod3 
			</option>
			<option   style={{"background-color":"rgb(139, 105, 20)"}} value="#8b6914">
				goldenrod4 
			</option>
			<option   style={{"background-color":"rgb(190, 190, 190)"}} value="#bebebe">
				gray 
			</option>
			<option   style={{"background-color":"rgb(3, 3, 3)"}} value="#030303">
				gray1 
			</option>
			<option   style={{"background-color":"rgb(5, 5, 5)"}} value="#050505">
				gray2 
			</option>
			<option   style={{"background-color":"rgb(8, 8, 8)"}} value="#080808">
				gray3 
			</option>
			<option   style={{"background-color":"rgb(10, 10, 10)"}} value="#0a0a0a">
				gray4 
			</option>
			<option   style={{"background-color":"rgb(13, 13, 13)"}} value="#0d0d0d">
				gray5 
			</option>
			<option   style={{"background-color":"rgb(15, 15, 15)"}} value="#0f0f0f">
				gray6 
			</option>
			<option   style={{"background-color":"rgb(18, 18, 18)"}} value="#121212">
				gray7 
			</option>
			<option   style={{"background-color":"rgb(20, 20, 20)"}} value="#141414">
				gray8 
			</option>
			<option   style={{"background-color":"rgb(23, 23, 23)"}} value="#171717">
				gray9 
			</option>
			<option   style={{"background-color":"rgb(26, 26, 26)"}} value="#1a1a1a">
				gray10 
			</option>
			<option   style={{"background-color":"rgb(28, 28, 28)"}} value="#1c1c1c">
				gray11 
			</option>
			<option   style={{"background-color":"rgb(31, 31, 31)"}} value="#1f1f1f">
				gray12 
			</option>
			<option   style={{"background-color":"rgb(33, 33, 33)"}} value="#212121">
				gray13 
			</option>
			<option   style={{"background-color":"rgb(36, 36, 36)"}} value="#242424">
				gray14 
			</option>
			<option   style={{"background-color":"rgb(38, 38, 38)"}} value="#262626">
				gray15 
			</option>
			<option   style={{"background-color":"rgb(41, 41, 41)"}} value="#292929">
				gray16 
			</option>
			<option   style={{"background-color":"rgb(43, 43, 43)"}} value="#2b2b2b">
				gray17 
			</option>
			<option   style={{"background-color":"rgb(46, 46, 46)"}} value="#2e2e2e">
				gray18 
			</option>
			<option   style={{"background-color":"rgb(48, 48, 48)"}} value="#303030">
				gray19 
			</option>
			<option   style={{"background-color":"rgb(51, 51, 51)"}} value="#333333">
				gray20 
			</option>
			<option   style={{"background-color":"rgb(54, 54, 54)"}} value="#363636">
				gray21 
			</option>
			<option   style={{"background-color":"rgb(56, 56, 56)"}} value="#383838">
				gray22 
			</option>
			<option   style={{"background-color":"rgb(59, 59, 59)"}} value="#3b3b3b">
				gray23 
			</option>
			<option   style={{"background-color":"rgb(61, 61, 61)"}} value="#3d3d3d">
				gray24 
			</option>
			<option   style={{"background-color":"rgb(64, 64, 64)"}} value="#404040">
				gray25 
			</option>
			<option   style={{"background-color":"rgb(66, 66, 66)"}} value="#424242">
				gray26 
			</option>
			<option   style={{"background-color":"rgb(69, 69, 69)"}} value="#454545">
				gray27 
			</option>
			<option   style={{"background-color":"rgb(71, 71, 71)"}} value="#474747">
				gray28 
			</option>
			<option   style={{"background-color":"rgb(74, 74, 74)"}} value="#4a4a4a">
				gray29 
			</option>
			<option   style={{"background-color":"rgb(77, 77, 77)"}} value="#4d4d4d">
				gray30 
			</option>
			<option   style={{"background-color":"rgb(79, 79, 79)"}} value="#4f4f4f">
				gray31 
			</option>
			<option   style={{"background-color":"rgb(82, 82, 82)"}} value="#525252">
				gray32 
			</option>
			<option   style={{"background-color":"rgb(84, 84, 84)"}} value="#545454">
				gray33 
			</option>
			<option   style={{"background-color":"rgb(87, 87, 87)"}} value="#575757">
				gray34 
			</option>
			<option   style={{"background-color":"rgb(89, 89, 89)"}} value="#595959">
				gray35 
			</option>
			<option   style={{"background-color":"rgb(92, 92, 92)"}} value="#5c5c5c">
				gray36 
			</option>
			<option   style={{"background-color":"rgb(94, 94, 94)"}} value="#5e5e5e">
				gray37 
			</option>
			<option   style={{"background-color":"rgb(97, 97, 97)"}} value="#616161">
				gray38 
			</option>
			<option   style={{"background-color":"rgb(99, 99, 99)"}} value="#636363">
				gray39 
			</option>
			<option   style={{"background-color":"rgb(102, 102, 102)"}} value="#666666">
				gray40 
			</option>
			<option   style={{"background-color":"rgb(105, 105, 105)"}} value="#696969">
				gray41 
			</option>
			<option   style={{"background-color":"rgb(107, 107, 107)"}} value="#6b6b6b">
				gray42 
			</option>
			<option   style={{"background-color":"rgb(110, 110, 110)"}} value="#6e6e6e">
				gray43 
			</option>
			<option   style={{"background-color":"rgb(112, 112, 112)"}} value="#707070">
				gray44 
			</option>
			<option   style={{"background-color":"rgb(115, 115, 115)"}} value="#737373">
				gray45 
			</option>
			<option   style={{"background-color":"rgb(117, 117, 117)"}} value="#757575">
				gray46 
			</option>
			<option   style={{"background-color":"rgb(120, 120, 120)"}} value="#787878">
				gray47 
			</option>
			<option   style={{"background-color":"rgb(122, 122, 122)"}} value="#7a7a7a">
				gray48 
			</option>
			<option   style={{"background-color":"rgb(125, 125, 125)"}} value="#7d7d7d">
				gray49 
			</option>
			<option   style={{"background-color":"rgb(127, 127, 127)"}} value="#7f7f7f">
				gray50 
			</option>
			<option   style={{"background-color":"rgb(130, 130, 130)"}} value="#828282">
				gray51 
			</option>
			<option   style={{"background-color":"rgb(133, 133, 133)"}} value="#858585">
				gray52 
			</option>
			<option   style={{"background-color":"rgb(135, 135, 135)"}} value="#878787">
				gray53 
			</option>
			<option   style={{"background-color":"rgb(138, 138, 138)"}} value="#8a8a8a">
				gray54 
			</option>
			<option   style={{"background-color":"rgb(140, 140, 140)"}} value="#8c8c8c">
				gray55 
			</option>
			<option   style={{"background-color":"rgb(143, 143, 143)"}} value="#8f8f8f">
				gray56 
			</option>
			<option   style={{"background-color":"rgb(145, 145, 145)"}} value="#919191">
				gray57 
			</option>
			<option   style={{"background-color":"rgb(148, 148, 148)"}} value="#949494">
				gray58 
			</option>
			<option   style={{"background-color":"rgb(150, 150, 150)"}} value="#969696">
				gray59 
			</option>
			<option   style={{"background-color":"rgb(153, 153, 153)"}} value="#999999">
				gray60 
			</option>
			<option   style={{"background-color":"rgb(156, 156, 156)"}} value="#9c9c9c">
				gray61 
			</option>
			<option   style={{"background-color":"rgb(158, 158, 158)"}} value="#9e9e9e">
				gray62 
			</option>
			<option   style={{"background-color":"rgb(161, 161, 161)"}} value="#a1a1a1">
				gray63 
			</option>
			<option   style={{"background-color":"rgb(163, 163, 163)"}} value="#a3a3a3">
				gray64 
			</option>
			<option   style={{"background-color":"rgb(166, 166, 166)"}} value="#a6a6a6">
				gray65 
			</option>
			<option   style={{"background-color":"rgb(168, 168, 168)"}} value="#a8a8a8">
				gray66 
			</option>
			<option   style={{"background-color":"rgb(171, 171, 171)"}} value="#ababab">
				gray67 
			</option>
			<option   style={{"background-color":"rgb(173, 173, 173)"}} value="#adadad">
				gray68 
			</option>
			<option   style={{"background-color":"rgb(176, 176, 176)"}} value="#b0b0b0">
				gray69 
			</option>
			<option   style={{"background-color":"rgb(179, 179, 179)"}} value="#b3b3b3">
				gray70 
			</option>
			<option   style={{"background-color":"rgb(181, 181, 181)"}} value="#b5b5b5">
				gray71 
			</option>
			<option   style={{"background-color":"rgb(184, 184, 184)"}} value="#b8b8b8">
				gray72 
			</option>
			<option   style={{"background-color":"rgb(186, 186, 186)"}} value="#bababa">
				gray73 
			</option>
			<option   style={{"background-color":"rgb(189, 189, 189)"}} value="#bdbdbd">
				gray74 
			</option>
			<option   style={{"background-color":"rgb(191, 191, 191)"}} value="#bfbfbf">
				gray75 
			</option>
			<option   style={{"background-color":"rgb(194, 194, 194)"}} value="#c2c2c2">
				gray76 
			</option>
			<option   style={{"background-color":"rgb(196, 196, 196)"}} value="#c4c4c4">
				gray77 
			</option>
			<option   style={{"background-color":"rgb(199, 199, 199)"}} value="#c7c7c7">
				gray78 
			</option>
			<option   style={{"background-color":"rgb(201, 201, 201)"}} value="#c9c9c9">
				gray79 
			</option>
			<option   style={{"background-color":"rgb(204, 204, 204)"}} value="#cccccc">
				gray80 
			</option>
			<option   style={{"background-color":"rgb(207, 207, 207)"}} value="#cfcfcf">
				gray81 
			</option>
			<option   style={{"background-color":"rgb(209, 209, 209)"}} value="#d1d1d1">
				gray82 
			</option>
			<option   style={{"background-color":"rgb(212, 212, 212)"}} value="#d4d4d4">
				gray83 
			</option>
			<option   style={{"background-color":"rgb(214, 214, 214)"}} value="#d6d6d6">
				gray84 
			</option>
			<option   style={{"background-color":"rgb(217, 217, 217)"}} value="#d9d9d9">
				gray85 
			</option>
			<option   style={{"background-color":"rgb(219, 219, 219)"}} value="#dbdbdb">
				gray86 
			</option>
			<option   style={{"background-color":"rgb(222, 222, 222)"}} value="#dedede">
				gray87 
			</option>
			<option   style={{"background-color":"rgb(224, 224, 224)"}} value="#e0e0e0">
				gray88 
			</option>
			<option   style={{"background-color":"rgb(227, 227, 227)"}} value="#e3e3e3">
				gray89 
			</option>
			<option   style={{"background-color":"rgb(229, 229, 229)"}} value="#e5e5e5">
				gray90 
			</option>
			<option   style={{"background-color":"rgb(232, 232, 232)"}} value="#e8e8e8">
				gray91 
			</option>
			<option   style={{"background-color":"rgb(235, 235, 235)"}} value="#ebebeb">
				gray92 
			</option>
			<option   style={{"background-color":"rgb(237, 237, 237)"}} value="#ededed">
				gray93 
			</option>
			<option   style={{"background-color":"rgb(240, 240, 240)"}} value="#f0f0f0">
				gray94 
			</option>
			<option   style={{"background-color":"rgb(242, 242, 242)"}} value="#f2f2f2">
				gray95 
			</option>
			<option   style={{"background-color":"rgb(247, 247, 247)"}} value="#f7f7f7">
				gray97 
			</option>
			<option   style={{"background-color":"rgb(250, 250, 250)"}} value="#fafafa">
				gray98 
			</option>
			<option   style={{"background-color":"rgb(252, 252, 252)"}} value="#fcfcfc">
				gray99 
			</option>
			<option   style={{"background-color":"rgb(0, 255, 0)"}} value="#00ff00">
				green1 
			</option>
			<option   style={{"background-color":"rgb(0, 238, 0)"}} value="#00ee00">
				green2 
			</option>
			<option   style={{"background-color":"rgb(0, 205, 0)"}} value="#00cd00">
				green3 
			</option>
			<option   style={{"background-color":"rgb(0, 139, 0)"}} value="#008b00">
				green4 
			</option>
			<option   style={{"background-color":"rgb(173, 255, 47)"}} value="#adff2f">
				greenyellow 
			</option>
			<option   style={{"background-color":"rgb(240, 255, 240)"}} value="#f0fff0">
				honeydew1 
			</option>
			<option   style={{"background-color":"rgb(224, 238, 224)"}} value="#e0eee0">
				honeydew2 
			</option>
			<option   style={{"background-color":"rgb(193, 205, 193)"}} value="#c1cdc1">
				honeydew3 
			</option>
			<option   style={{"background-color":"rgb(131, 139, 131)"}} value="#838b83">
				honeydew4 
			</option>
			<option   style={{"background-color":"rgb(255, 105, 180)"}} value="#ff69b4">
				hotpink 
			</option>
			<option   style={{"background-color":"rgb(255, 110, 180)"}} value="#ff6eb4">
				hotpink1 
			</option>
			<option   style={{"background-color":"rgb(238, 106, 167)"}} value="#ee6aa7">
				hotpink2 
			</option>
			<option   style={{"background-color":"rgb(205, 96, 144)"}} value="#cd6090">
				hotpink3 
			</option>
			<option   style={{"background-color":"rgb(139, 58, 98)"}} value="#8b3a62">
				hotpink4 
			</option>
			<option   style={{"background-color":"rgb(205, 92, 92)"}} value="#cd5c5c">
				indianred 
			</option>
			<option   style={{"background-color":"rgb(255, 106, 106)"}} value="#ff6a6a">
				indianred1 
			</option>
			<option   style={{"background-color":"rgb(238, 99, 99)"}} value="#ee6363">
				indianred2 
			</option>
			<option   style={{"background-color":"rgb(205, 85, 85)"}} value="#cd5555">
				indianred3 
			</option>
			<option   style={{"background-color":"rgb(139, 58, 58)"}} value="#8b3a3a">
				indianred4 
			</option>
			<option   style={{"background-color":"rgb(255, 255, 240)"}} value="#fffff0">
				ivory1 
			</option>
			<option   style={{"background-color":"rgb(238, 238, 224)"}} value="#eeeee0">
				ivory2 
			</option>
			<option   style={{"background-color":"rgb(205, 205, 193)"}} value="#cdcdc1">
				ivory3 
			</option>
			<option   style={{"background-color":"rgb(139, 139, 131)"}} value="#8b8b83">
				ivory4 
			</option>
			<option   style={{"background-color":"rgb(240, 230, 140)"}} value="#f0e68c">
				khaki 
			</option>
			<option   style={{"background-color":"rgb(255, 246, 143)"}} value="#fff68f">
				khaki1 
			</option>
			<option   style={{"background-color":"rgb(238, 230, 133)"}} value="#eee685">
				khaki2 
			</option>
			<option   style={{"background-color":"rgb(205, 198, 115)"}} value="#cdc673">
				khaki3 
			</option>
			<option   style={{"background-color":"rgb(139, 134, 78)"}} value="#8b864e">
				khaki4 
			</option>
			<option   style={{"background-color":"rgb(230, 230, 250)"}} value="#e6e6fa">
				lavender 
			</option>
			<option   style={{"background-color":"rgb(255, 240, 245)"}} value="#fff0f5">
				lavenderblush1 
			</option>
			<option   style={{"background-color":"rgb(238, 224, 229)"}} value="#eee0e5">
				lavenderblush2 
			</option>
			<option   style={{"background-color":"rgb(205, 193, 197)"}} value="#cdc1c5">
				lavenderblush3 
			</option>
			<option   style={{"background-color":"rgb(139, 131, 134)"}} value="#8b8386">
				lavenderblush4 
			</option>
			<option   style={{"background-color":"rgb(124, 252, 0)"}} value="#7cfc00">
				lawngreen 
			</option>
			<option   style={{"background-color":"rgb(255, 250, 205)"}} value="#fffacd">
				lemonchiffon1 
			</option>
			<option   style={{"background-color":"rgb(238, 233, 191)"}} value="#eee9bf">
				lemonchiffon2 
			</option>
			<option   style={{"background-color":"rgb(205, 201, 165)"}} value="#cdc9a5">
				lemonchiffon3 
			</option>
			<option   style={{"background-color":"rgb(139, 137, 112)"}} value="#8b8970">
				lemonchiffon4 
			</option>
			<option   style={{"background-color":"rgb(238, 221, 130)"}} value="#eedd82">
				light 
			</option>
			<option   style={{"background-color":"rgb(173, 216, 230)"}} value="#add8e6">
				lightblue 
			</option>
			<option   style={{"background-color":"rgb(191, 239, 255)"}} value="#bfefff">
				lightblue1 
			</option>
			<option   style={{"background-color":"rgb(178, 223, 238)"}} value="#b2dfee">
				lightblue2 
			</option>
			<option   style={{"background-color":"rgb(154, 192, 205)"}} value="#9ac0cd">
				lightblue3 
			</option>
			<option   style={{"background-color":"rgb(104, 131, 139)"}} value="#68838b">
				lightblue4 
			</option>
			<option   style={{"background-color":"rgb(240, 128, 128)"}} value="#f08080">
				lightcoral 
			</option>
			<option   style={{"background-color":"rgb(224, 255, 255)"}} value="#e0ffff">
				lightcyan1 
			</option>
			<option   style={{"background-color":"rgb(209, 238, 238)"}} value="#d1eeee">
				lightcyan2 
			</option>
			<option   style={{"background-color":"rgb(180, 205, 205)"}} value="#b4cdcd">
				lightcyan3 
			</option>
			<option   style={{"background-color":"rgb(122, 139, 139)"}} value="#7a8b8b">
				lightcyan4 
			</option>
			<option   style={{"background-color":"rgb(255, 236, 139)"}} value="#ffec8b">
				lightgoldenrod1 
			</option>
			<option   style={{"background-color":"rgb(238, 220, 130)"}} value="#eedc82">
				lightgoldenrod2 
			</option>
			<option   style={{"background-color":"rgb(205, 190, 112)"}} value="#cdbe70">
				lightgoldenrod3 
			</option>
			<option   style={{"background-color":"rgb(139, 129, 76)"}} value="#8b814c">
				lightgoldenrod4 
			</option>
			<option   style={{"background-color":"rgb(250, 250, 210)"}} value="#fafad2">
				lightgoldenrodyellow 
			</option>
			<option   style={{"background-color":"rgb(211, 211, 211)"}} value="#d3d3d3">
				lightgray 
			</option>
			<option   style={{"background-color":"rgb(255, 182, 193)"}} value="#ffb6c1">
				lightpink 
			</option>
			<option   style={{"background-color":"rgb(255, 174, 185)"}} value="#ffaeb9">
				lightpink1 
			</option>
			<option   style={{"background-color":"rgb(238, 162, 173)"}} value="#eea2ad">
				lightpink2 
			</option>
			<option   style={{"background-color":"rgb(205, 140, 149)"}} value="#cd8c95">
				lightpink3 
			</option>
			<option   style={{"background-color":"rgb(139, 95, 101)"}} value="#8b5f65">
				lightpink4 
			</option>
			<option   style={{"background-color":"rgb(255, 160, 122)"}} value="#ffa07a">
				lightsalmon1 
			</option>
			<option   style={{"background-color":"rgb(238, 149, 114)"}} value="#ee9572">
				lightsalmon2 
			</option>
			<option   style={{"background-color":"rgb(205, 129, 98)"}} value="#cd8162">
				lightsalmon3 
			</option>
			<option   style={{"background-color":"rgb(139, 87, 66)"}} value="#8b5742">
				lightsalmon4 
			</option>
			<option   style={{"background-color":"rgb(32, 178, 170)"}} value="#20b2aa">
				lightseagreen 
			</option>
			<option   style={{"background-color":"rgb(135, 206, 250)"}} value="#87cefa">
				lightskyblue 
			</option>
			<option   style={{"background-color":"rgb(176, 226, 255)"}} value="#b0e2ff">
				lightskyblue1 
			</option>
			<option   style={{"background-color":"rgb(164, 211, 238)"}} value="#a4d3ee">
				lightskyblue2 
			</option>
			<option   style={{"background-color":"rgb(141, 182, 205)"}} value="#8db6cd">
				lightskyblue3 
			</option>
			<option   style={{"background-color":"rgb(96, 123, 139)"}} value="#607b8b">
				lightskyblue4 
			</option>
			<option   style={{"background-color":"rgb(132, 112, 255)"}} value="#8470ff">
				lightslateblue 
			</option>
			<option   style={{"background-color":"rgb(119, 136, 153)"}} value="#778899">
				lightslategray 
			</option>
			<option   style={{"background-color":"rgb(176, 196, 222)"}} value="#b0c4de">
				lightsteelblue 
			</option>
			<option   style={{"background-color":"rgb(202, 225, 255)"}} value="#cae1ff">
				lightsteelblue1 
			</option>
			<option   style={{"background-color":"rgb(188, 210, 238)"}} value="#bcd2ee">
				lightsteelblue2 
			</option>
			<option   style={{"background-color":"rgb(162, 181, 205)"}} value="#a2b5cd">
				lightsteelblue3 
			</option>
			<option   style={{"background-color":"rgb(110, 123, 139)"}} value="#6e7b8b">
				lightsteelblue4 
			</option>
			<option   style={{"background-color":"rgb(255, 255, 224)"}} value="#ffffe0">
				lightyellow1 
			</option>
			<option   style={{"background-color":"rgb(238, 238, 209)"}} value="#eeeed1">
				lightyellow2 
			</option>
			<option   style={{"background-color":"rgb(205, 205, 180)"}} value="#cdcdb4">
				lightyellow3 
			</option>
			<option   style={{"background-color":"rgb(139, 139, 122)"}} value="#8b8b7a">
				lightyellow4 
			</option>
			<option   style={{"background-color":"rgb(50, 205, 50)"}} value="#32cd32">
				limegreen 
			</option>
			<option   style={{"background-color":"rgb(250, 240, 230)"}} value="#faf0e6">
				linen 
			</option>
			<option   style={{"background-color":"rgb(255, 0, 255)"}} value="#ff00ff">
				magenta 
			</option>
			<option   style={{"background-color":"rgb(238, 0, 238)"}} value="#ee00ee">
				magenta2 
			</option>
			<option   style={{"background-color":"rgb(205, 0, 205)"}} value="#cd00cd">
				magenta3 
			</option>
			<option   style={{"background-color":"rgb(139, 0, 139)"}} value="#8b008b">
				magenta4 
			</option>
			<option   style={{"background-color":"rgb(176, 48, 96)"}} value="#b03060">
				maroon 
			</option>
			<option   style={{"background-color":"rgb(255, 52, 179)"}} value="#ff34b3">
				maroon1 
			</option>
			<option   style={{"background-color":"rgb(238, 48, 167)"}} value="#ee30a7">
				maroon2 
			</option>
			<option   style={{"background-color":"rgb(205, 41, 144)"}} value="#cd2990">
				maroon3 
			</option>
			<option   style={{"background-color":"rgb(139, 28, 98)"}} value="#8b1c62">
				maroon4 
			</option>
			<option   style={{"background-color":"rgb(102, 205, 170)"}} value="#66cdaa">
				medium 
			</option>
			<option   style={{"background-color":"rgb(102, 205, 170)"}} value="#66cdaa">
				mediumaquamarine 
			</option>
			<option   style={{"background-color":"rgb(0, 0, 205)"}} value="#0000cd">
				mediumblue 
			</option>
			<option   style={{"background-color":"rgb(186, 85, 211)"}} value="#ba55d3">
				mediumorchid 
			</option>
			<option   style={{"background-color":"rgb(224, 102, 255)"}} value="#e066ff">
				mediumorchid1 
			</option>
			<option   style={{"background-color":"rgb(209, 95, 238)"}} value="#d15fee">
				mediumorchid2 
			</option>
			<option   style={{"background-color":"rgb(180, 82, 205)"}} value="#b452cd">
				mediumorchid3 
			</option>
			<option   style={{"background-color":"rgb(122, 55, 139)"}} value="#7a378b">
				mediumorchid4 
			</option>
			<option   style={{"background-color":"rgb(147, 112, 219)"}} value="#9370db">
				mediumpurple 
			</option>
			<option   style={{"background-color":"rgb(171, 130, 255)"}} value="#ab82ff">
				mediumpurple1 
			</option>
			<option   style={{"background-color":"rgb(159, 121, 238)"}} value="#9f79ee">
				mediumpurple2 
			</option>
			<option   style={{"background-color":"rgb(137, 104, 205)"}} value="#8968cd">
				mediumpurple3 
			</option>
			<option   style={{"background-color":"rgb(93, 71, 139)"}} value="#5d478b">
				mediumpurple4 
			</option>
			<option   style={{"background-color":"rgb(60, 179, 113)"}} value="#3cb371">
				mediumseagreen 
			</option>
			<option   style={{"background-color":"rgb(123, 104, 238)"}} value="#7b68ee">
				mediumslateblue 
			</option>
			<option   style={{"background-color":"rgb(0, 250, 154)"}} value="#00fa9a">
				mediumspringgreen 
			</option>
			<option   style={{"background-color":"rgb(72, 209, 204)"}} value="#48d1cc">
				mediumturquoise 
			</option>
			<option   style={{"background-color":"rgb(199, 21, 133)"}} value="#c71585">
				mediumvioletred 
			</option>
			<option   style={{"background-color":"rgb(25, 25, 112)"}} value="#191970">
				midnightblue 
			</option>
			<option   style={{"background-color":"rgb(245, 255, 250)"}} value="#f5fffa">
				mintcream 
			</option>
			<option   style={{"background-color":"rgb(255, 228, 225)"}} value="#ffe4e1">
				mistyrose1 
			</option>
			<option   style={{"background-color":"rgb(238, 213, 210)"}} value="#eed5d2">
				mistyrose2 
			</option>
			<option   style={{"background-color":"rgb(205, 183, 181)"}} value="#cdb7b5">
				mistyrose3 
			</option>
			<option   style={{"background-color":"rgb(139, 125, 123)"}} value="#8b7d7b">
				mistyrose4 
			</option>
			<option   style={{"background-color":"rgb(255, 228, 181)"}} value="#ffe4b5">
				moccasin 
			</option>
			<option   style={{"background-color":"rgb(255, 222, 173)"}} value="#ffdead">
				navajowhite1 
			</option>
			<option   style={{"background-color":"rgb(238, 207, 161)"}} value="#eecfa1">
				navajowhite2 
			</option>
			<option   style={{"background-color":"rgb(205, 179, 139)"}} value="#cdb38b">
				navajowhite3 
			</option>
			<option   style={{"background-color":"rgb(139, 121, 94)"}} value="#8b795e">
				navajowhite4 
			</option>
			<option   style={{"background-color":"rgb(0, 0, 128)"}} value="#000080">
				navyblue 
			</option>
			<option   style={{"background-color":"rgb(253, 245, 230)"}} value="#fdf5e6">
				oldlace 
			</option>
			<option   style={{"background-color":"rgb(107, 142, 35)"}} value="#6b8e23">
				olivedrab 
			</option>
			<option   style={{"background-color":"rgb(192, 255, 62)"}} value="#c0ff3e">
				olivedrab1 
			</option>
			<option   style={{"background-color":"rgb(179, 238, 58)"}} value="#b3ee3a">
				olivedrab2 
			</option>
			<option   style={{"background-color":"rgb(105, 139, 34)"}} value="#698b22">
				olivedrab4 
			</option>
			<option   style={{"background-color":"rgb(255, 165, 0)"}} value="#ffa500">
				orange1 
			</option>
			<option   style={{"background-color":"rgb(238, 154, 0)"}} value="#ee9a00">
				orange2 
			</option>
			<option   style={{"background-color":"rgb(205, 133, 0)"}} value="#cd8500">
				orange3 
			</option>
			<option   style={{"background-color":"rgb(139, 90, 0)"}} value="#8b5a00">
				orange4 
			</option>
			<option   style={{"background-color":"rgb(255, 69, 0)"}} value="#ff4500">
				orangered1 
			</option>
			<option   style={{"background-color":"rgb(238, 64, 0)"}} value="#ee4000">
				orangered2 
			</option>
			<option   style={{"background-color":"rgb(205, 55, 0)"}} value="#cd3700">
				orangered3 
			</option>
			<option   style={{"background-color":"rgb(139, 37, 0)"}} value="#8b2500">
				orangered4 
			</option>
			<option   style={{"background-color":"rgb(218, 112, 214)"}} value="#da70d6">
				orchid 
			</option>
			<option   style={{"background-color":"rgb(255, 131, 250)"}} value="#ff83fa">
				orchid1 
			</option>
			<option   style={{"background-color":"rgb(238, 122, 233)"}} value="#ee7ae9">
				orchid2 
			</option>
			<option   style={{"background-color":"rgb(205, 105, 201)"}} value="#cd69c9">
				orchid3 
			</option>
			<option   style={{"background-color":"rgb(139, 71, 137)"}} value="#8b4789">
				orchid4 
			</option>
			<option   style={{"background-color":"rgb(219, 112, 147)"}} value="#db7093">
				pale 
			</option>
			<option   style={{"background-color":"rgb(238, 232, 170)"}} value="#eee8aa">
				palegoldenrod 
			</option>
			<option   style={{"background-color":"rgb(152, 251, 152)"}} value="#98fb98">
				palegreen 
			</option>
			<option   style={{"background-color":"rgb(154, 255, 154)"}} value="#9aff9a">
				palegreen1 
			</option>
			<option   style={{"background-color":"rgb(144, 238, 144)"}} value="#90ee90">
				palegreen2 
			</option>
			<option   style={{"background-color":"rgb(124, 205, 124)"}} value="#7ccd7c">
				palegreen3 
			</option>
			<option   style={{"background-color":"rgb(84, 139, 84)"}} value="#548b54">
				palegreen4 
			</option>
			<option   style={{"background-color":"rgb(175, 238, 238)"}} value="#afeeee">
				paleturquoise 
			</option>
			<option   style={{"background-color":"rgb(187, 255, 255)"}} value="#bbffff">
				paleturquoise1 
			</option>
			<option   style={{"background-color":"rgb(174, 238, 238)"}} value="#aeeeee">
				paleturquoise2 
			</option>
			<option   style={{"background-color":"rgb(150, 205, 205)"}} value="#96cdcd">
				paleturquoise3 
			</option>
			<option   style={{"background-color":"rgb(102, 139, 139)"}} value="#668b8b">
				paleturquoise4 
			</option>
			<option   style={{"background-color":"rgb(219, 112, 147)"}} value="#db7093">
				palevioletred 
			</option>
			<option   style={{"background-color":"rgb(255, 130, 171)"}} value="#ff82ab">
				palevioletred1 
			</option>
			<option   style={{"background-color":"rgb(238, 121, 159)"}} value="#ee799f">
				palevioletred2 
			</option>
			<option   style={{"background-color":"rgb(205, 104, 137)"}} value="#cd6889">
				palevioletred3 
			</option>
			<option   style={{"background-color":"rgb(139, 71, 93)"}} value="#8b475d">
				palevioletred4 
			</option>
			<option   style={{"background-color":"rgb(255, 239, 213)"}} value="#ffefd5">
				papayawhip 
			</option>
			<option   style={{"background-color":"rgb(255, 218, 185)"}} value="#ffdab9">
				peachpuff1 
			</option>
			<option   style={{"background-color":"rgb(238, 203, 173)"}} value="#eecbad">
				peachpuff2 
			</option>
			<option   style={{"background-color":"rgb(205, 175, 149)"}} value="#cdaf95">
				peachpuff3 
			</option>
			<option   style={{"background-color":"rgb(139, 119, 101)"}} value="#8b7765">
				peachpuff4 
			</option>
			<option   style={{"background-color":"rgb(255, 192, 203)"}} value="#ffc0cb">
				pink 
			</option>
			<option   style={{"background-color":"rgb(255, 181, 197)"}} value="#ffb5c5">
				pink1 
			</option>
			<option   style={{"background-color":"rgb(238, 169, 184)"}} value="#eea9b8">
				pink2 
			</option>
			<option   style={{"background-color":"rgb(205, 145, 158)"}} value="#cd919e">
				pink3 
			</option>
			<option   style={{"background-color":"rgb(139, 99, 108)"}} value="#8b636c">
				pink4 
			</option>
			<option   style={{"background-color":"rgb(221, 160, 221)"}} value="#dda0dd">
				plum 
			</option>
			<option   style={{"background-color":"rgb(255, 187, 255)"}} value="#ffbbff">
				plum1 
			</option>
			<option   style={{"background-color":"rgb(238, 174, 238)"}} value="#eeaeee">
				plum2 
			</option>
			<option   style={{"background-color":"rgb(205, 150, 205)"}} value="#cd96cd">
				plum3 
			</option>
			<option   style={{"background-color":"rgb(139, 102, 139)"}} value="#8b668b">
				plum4 
			</option>
			<option   style={{"background-color":"rgb(176, 224, 230)"}} value="#b0e0e6">
				powderblue 
			</option>
			<option   style={{"background-color":"rgb(160, 32, 240)"}} value="#a020f0">
				purple 
			</option>
			<option   style={{"background-color":"rgb(155, 48, 255)"}} value="#9b30ff">
				purple1 
			</option>
			<option   style={{"background-color":"rgb(145, 44, 238)"}} value="#912cee">
				purple2 
			</option>
			<option   style={{"background-color":"rgb(125, 38, 205)"}} value="#7d26cd">
				purple3 
			</option>
			<option   style={{"background-color":"rgb(85, 26, 139)"}} value="#551a8b">
				purple4 
			</option>
			<option   style={{"background-color":"rgb(255, 0, 0)"}} value="#ff0000">
				red1 
			</option>
			<option   style={{"background-color":"rgb(238, 0, 0)"}} value="#ee0000">
				red2 
			</option>
			<option   style={{"background-color":"rgb(205, 0, 0)"}} value="#cd0000">
				red3 
			</option>
			<option   style={{"background-color":"rgb(139, 0, 0)"}} value="#8b0000">
				red4 
			</option>
			<option   style={{"background-color":"rgb(188, 143, 143)"}} value="#bc8f8f">
				rosybrown 
			</option>
			<option   style={{"background-color":"rgb(255, 193, 193)"}} value="#ffc1c1">
				rosybrown1 
			</option>
			<option   style={{"background-color":"rgb(238, 180, 180)"}} value="#eeb4b4">
				rosybrown2 
			</option>
			<option   style={{"background-color":"rgb(205, 155, 155)"}} value="#cd9b9b">
				rosybrown3 
			</option>
			<option   style={{"background-color":"rgb(139, 105, 105)"}} value="#8b6969">
				rosybrown4 
			</option>
			<option   style={{"background-color":"rgb(65, 105, 225)"}} value="#4169e1">
				royalblue 
			</option>
			<option   style={{"background-color":"rgb(72, 118, 255)"}} value="#4876ff">
				royalblue1 
			</option>
			<option   style={{"background-color":"rgb(67, 110, 238)"}} value="#436eee">
				royalblue2 
			</option>
			<option   style={{"background-color":"rgb(58, 95, 205)"}} value="#3a5fcd">
				royalblue3 
			</option>
			<option   style={{"background-color":"rgb(39, 64, 139)"}} value="#27408b">
				royalblue4 
			</option>
			<option   style={{"background-color":"rgb(139, 69, 19)"}} value="#8b4513">
				saddlebrown 
			</option>
			<option   style={{"background-color":"rgb(250, 128, 114)"}} value="#fa8072">
				salmon 
			</option>
			<option   style={{"background-color":"rgb(255, 140, 105)"}} value="#ff8c69">
				salmon1 
			</option>
			<option   style={{"background-color":"rgb(238, 130, 98)"}} value="#ee8262">
				salmon2 
			</option>
			<option   style={{"background-color":"rgb(205, 112, 84)"}} value="#cd7054">
				salmon3 
			</option>
			<option   style={{"background-color":"rgb(139, 76, 57)"}} value="#8b4c39">
				salmon4 
			</option>
			<option   style={{"background-color":"rgb(244, 164, 96)"}} value="#f4a460">
				sandybrown 
			</option>
			<option   style={{"background-color":"rgb(84, 255, 159)"}} value="#54ff9f">
				seagreen1 
			</option>
			<option   style={{"background-color":"rgb(78, 238, 148)"}} value="#4eee94">
				seagreen2 
			</option>
			<option   style={{"background-color":"rgb(67, 205, 128)"}} value="#43cd80">
				seagreen3 
			</option>
			<option   style={{"background-color":"rgb(46, 139, 87)"}} value="#2e8b57">
				seagreen4 
			</option>
			<option   style={{"background-color":"rgb(255, 245, 238)"}} value="#fff5ee">
				seashell1 
			</option>
			<option   style={{"background-color":"rgb(238, 229, 222)"}} value="#eee5de">
				seashell2 
			</option>
			<option   style={{"background-color":"rgb(205, 197, 191)"}} value="#cdc5bf">
				seashell3 
			</option>
			<option   style={{"background-color":"rgb(139, 134, 130)"}} value="#8b8682">
				seashell4 
			</option>
			<option   style={{"background-color":"rgb(160, 82, 45)"}} value="#a0522d">
				sienna 
			</option>
			<option   style={{"background-color":"rgb(255, 130, 71)"}} value="#ff8247">
				sienna1 
			</option>
			<option   style={{"background-color":"rgb(238, 121, 66)"}} value="#ee7942">
				sienna2 
			</option>
			<option   style={{"background-color":"rgb(205, 104, 57)"}} value="#cd6839">
				sienna3 
			</option>
			<option   style={{"background-color":"rgb(139, 71, 38)"}} value="#8b4726">
				sienna4 
			</option>
			<option   style={{"background-color":"rgb(135, 206, 235)"}} value="#87ceeb">
				skyblue 
			</option>
			<option   style={{"background-color":"rgb(135, 206, 255)"}} value="#87ceff">
				skyblue1 
			</option>
			<option   style={{"background-color":"rgb(126, 192, 238)"}} value="#7ec0ee">
				skyblue2 
			</option>
			<option   style={{"background-color":"rgb(108, 166, 205)"}} value="#6ca6cd">
				skyblue3 
			</option>
			<option   style={{"background-color":"rgb(74, 112, 139)"}} value="#4a708b">
				skyblue4 
			</option>
			<option   style={{"background-color":"rgb(106, 90, 205)"}} value="#6a5acd">
				slateblue 
			</option>
			<option   style={{"background-color":"rgb(131, 111, 255)"}} value="#836fff">
				slateblue1 
			</option>
			<option   style={{"background-color":"rgb(122, 103, 238)"}} value="#7a67ee">
				slateblue2 
			</option>
			<option   style={{"background-color":"rgb(105, 89, 205)"}} value="#6959cd">
				slateblue3 
			</option>
			<option   style={{"background-color":"rgb(71, 60, 139)"}} value="#473c8b">
				slateblue4 
			</option>
			<option   style={{"background-color":"rgb(112, 128, 144)"}} value="#708090">
				slategray 
			</option>
			<option   style={{"background-color":"rgb(198, 226, 255)"}} value="#c6e2ff">
				slategray1 
			</option>
			<option   style={{"background-color":"rgb(185, 211, 238)"}} value="#b9d3ee">
				slategray2 
			</option>
			<option   style={{"background-color":"rgb(159, 182, 205)"}} value="#9fb6cd">
				slategray3 
			</option>
			<option   style={{"background-color":"rgb(108, 123, 139)"}} value="#6c7b8b">
				slategray4 
			</option>
			<option   style={{"background-color":"rgb(255, 250, 250)"}} value="#fffafa">
				snow1 
			</option>
			<option   style={{"background-color":"rgb(238, 233, 233)"}} value="#eee9e9">
				snow2 
			</option>
			<option   style={{"background-color":"rgb(205, 201, 201)"}} value="#cdc9c9">
				snow3 
			</option>
			<option   style={{"background-color":"rgb(139, 137, 137)"}} value="#8b8989">
				snow4 
			</option>
			<option   style={{"background-color":"rgb(0, 255, 127)"}} value="#00ff7f">
				springgreen1 
			</option>
			<option   style={{"background-color":"rgb(0, 238, 118)"}} value="#00ee76">
				springgreen2 
			</option>
			<option   style={{"background-color":"rgb(0, 205, 102)"}} value="#00cd66">
				springgreen3 
			</option>
			<option   style={{"background-color":"rgb(0, 139, 69)"}} value="#008b45">
				springgreen4 
			</option>
			<option   style={{"background-color":"rgb(70, 130, 180)"}} value="#4682b4">
				steelblue 
			</option>
			<option   style={{"background-color":"rgb(99, 184, 255)"}} value="#63b8ff">
				steelblue1 
			</option>
			<option   style={{"background-color":"rgb(92, 172, 238)"}} value="#5cacee">
				steelblue2 
			</option>
			<option   style={{"background-color":"rgb(79, 148, 205)"}} value="#4f94cd">
				steelblue3 
			</option>
			<option   style={{"background-color":"rgb(54, 100, 139)"}} value="#36648b">
				steelblue4 
			</option>
			<option   style={{"background-color":"rgb(210, 180, 140)"}} value="#d2b48c">
				tan 
			</option>
			<option   style={{"background-color":"rgb(255, 165, 79)"}} value="#ffa54f">
				tan1 
			</option>
			<option   style={{"background-color":"rgb(238, 154, 73)"}} value="#ee9a49">
				tan2 
			</option>
			<option   style={{"background-color":"rgb(205, 133, 63)"}} value="#cd853f">
				tan3 
			</option>
			<option   style={{"background-color":"rgb(139, 90, 43)"}} value="#8b5a2b">
				tan4 
			</option>
			<option   style={{"background-color":"rgb(216, 191, 216)"}} value="#d8bfd8">
				thistle 
			</option>
			<option   style={{"background-color":"rgb(255, 225, 255)"}} value="#ffe1ff">
				thistle1 
			</option>
			<option   style={{"background-color":"rgb(238, 210, 238)"}} value="#eed2ee">
				thistle2 
			</option>
			<option   style={{"background-color":"rgb(205, 181, 205)"}} value="#cdb5cd">
				thistle3 
			</option>
			<option   style={{"background-color":"rgb(139, 123, 139)"}} value="#8b7b8b">
				thistle4 
			</option>
			<option   style={{"background-color":"rgb(255, 99, 71)"}} value="#ff6347">
				tomato1 
			</option>
			<option   style={{"background-color":"rgb(238, 92, 66)"}} value="#ee5c42">
				tomato2 
			</option>
			<option   style={{"background-color":"rgb(205, 79, 57)"}} value="#cd4f39">
				tomato3 
			</option>
			<option   style={{"background-color":"rgb(139, 54, 38)"}} value="#8b3626">
				tomato4 
			</option>
			<option   style={{"background-color":"rgb(64, 224, 208)"}} value="#40e0d0">
				turquoise 
			</option>
			<option   style={{"background-color":"rgb(0, 245, 255)"}} value="#00f5ff">
				turquoise1 
			</option>
			<option   style={{"background-color":"rgb(0, 229, 238)"}} value="#00e5ee">
				turquoise2 
			</option>
			<option   style={{"background-color":"rgb(0, 197, 205)"}} value="#00c5cd">
				turquoise3 
			</option>
			<option   style={{"background-color":"rgb(0, 134, 139)"}} value="#00868b">
				turquoise4 
			</option>
			<option   style={{"background-color":"rgb(238, 130, 238)"}} value="#ee82ee">
				violet 
			</option>
			<option   style={{"background-color":"rgb(208, 32, 144)"}} value="#d02090">
				violetred 
			</option>
			<option   style={{"background-color":"rgb(255, 62, 150)"}} value="#ff3e96">
				violetred1 
			</option>
			<option   style={{"background-color":"rgb(238, 58, 140)"}} value="#ee3a8c">
				violetred2 
			</option>
			<option   style={{"background-color":"rgb(205, 50, 120)"}} value="#cd3278">
				violetred3 
			</option>
			<option   style={{"background-color":"rgb(139, 34, 82)"}} value="#8b2252">
				violetred4 
			</option>
			<option   style={{"background-color":"rgb(245, 222, 179)"}} value="#f5deb3">
				wheat 
			</option>
			<option   style={{"background-color":"rgb(255, 231, 186)"}} value="#ffe7ba">
				wheat1 
			</option>
			<option   style={{"background-color":"rgb(238, 216, 174)"}} value="#eed8ae">
				wheat2 
			</option>
			<option   style={{"background-color":"rgb(205, 186, 150)"}} value="#cdba96">
				wheat3 
			</option>
			<option   style={{"background-color":"rgb(139, 126, 102)"}} value="#8b7e66">
				wheat4 
			</option>
			<option   style={{"background-color":"rgb(255, 255, 255)"}} value="#ffffff">
				white 
			</option>
			<option   style={{"background-color":"rgb(245, 245, 245)"}} value="#f5f5f5">
				whitesmoke 
			</option>
			<option   style={{"background-color":"rgb(255, 255, 0)"}} value="#ffff00">
				yellow1 
			</option>
			<option   style={{"background-color":"rgb(238, 238, 0)"}} value="#eeee00">
				yellow2 
			</option>
			<option   style={{"background-color":"rgb(205, 205, 0)"}} value="#cdcd00">
				yellow3 
			</option>
			<option   style={{"background-color":"rgb(139, 139, 0)"}} value="#8b8b00">
				yellow4 
			</option>
			<option   style={{"background-color":"rgb(154, 205, 50)"}} value="#9acd32">
				yellowgreen 
			</option>
		</select>
        <form action="#" className="toolForm">

		  <span><input  name="tc"  type="radio" onClick={e=>{flg=false;}}/>Text color</span>
		<span><input  name="tc" type="radio" onClick={e=>{flg=true;}}/>Background color{'\n'}</span>
	  </form>
        </React.Fragment>
	);
};
