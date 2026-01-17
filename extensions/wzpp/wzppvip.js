/*************************************

项目名称：问真排盘
脚本作者：SQHOME
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.+\/(user\/getvipinfo|User\/getWXPW) url script-response-body 

[mitm]
hostname = bzpp3.iwzbz.com

*************************************/


var response = JSON.parse($response.body);

response.isSuccess = true;
response.validateKey = "sqhome";
response.code = 0;
response.data = {
    "expires" : "2099-09-09 09:09:09",
    "vipLevel" : 3
  };

$done({body : JSON.stringify(response)});