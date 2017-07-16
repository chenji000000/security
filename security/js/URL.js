var IP = 'http://180.153.68.242:2022/';
var URL = IP + "Commons/WebServicePurview.asmx/";
var URLCarList = IP + "commons/WsTreeNode.asmx/";
var URLCarRoute = IP + "Commons/WebServiceBasis.asmx/";

var jsondatastr;
jsondatastr = function(str){
				var s = str.indexOf("<");
				var end = str.indexOf(">");
				var jsondata = str.substring(s,end+1)
				jsondata = str.replace(jsondata,"");
				var endof = jsondata.indexOf(">");
				if (endof>=0) {
				
					return jsondatastr(jsondata);
				}else
				{
					jsondata = eval('(' + jsondata + ')');
					return jsondata;
				}
			}