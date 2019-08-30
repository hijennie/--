/**
 *  封装经常使用的元素
 *  用对象封装更加不容易出错
 * 
 * kits.getZeroize(num)   补零
 * kits.getDate()  获取当前时间  返回值 2019-08-20 19:39:43
 * kits.getRandom(n,m)  返回(n,m)之间的随机整数
 * kits.getRgbColor()   返回RGB颜色
 * kits.getRandomColor()   返回十六进制的随机颜色
 * kits.getId()   根据时间戳和最大随机数获得一个字符串
 * kits.getLocalDataArray(key)   从localStorage里面根据指定的键(key)获取一个数组
 * kits.saveLocalDataArray(key,obj)   存储一个数据在本地存储中
 * kits.appendDataIntoArray(key,obj)  向localStorage里面指定键(key)的数组数据追加一个数据对象（data）参数
 * kits.deleteLocalDataById(key,id)  根据对应的id从localStorage中指定键(key)的数组中删除一条数据参数
 * kits.modifyLocalDataById(key,id,data)  根据id修改localStorage里面的指定键(key)的数组数据参数
 * 
 */

 var kits = {};
 /*
   获取当前时间  返回值 2019-08-20 19:39:43
 */
/**
 * 补零
 */
kits.getZeroize = function(num){
    return num < 10 ? '0' + num : num;
}
kits.getDate = function (){
    let date = new Date();
    let year = date.getFullYear();
    let month = kits.getZeroize(date.getMonth()+1);
    let day = kits.getZeroize(date.getDate());
    let hour = kits.getZeroize(date.getHours());
    let minute = kits.getZeroize(date.getMinutes());
    let second = kits.getZeroize(date.getSeconds());
    return yaer + '-' + month + '-' + day + ' ' + hour + ':' + getMinutes + ':' + second;
}

/*
    获取随机数   (n,m)之间的随机整数
*/
kits.getRandom = function(n,m){
    return Math.floor(Math.random() * (m - n + 1) + n);
}

/**
 * 获取随机rgb颜色
 */
kits.getRgbColor = function(){
    let r = kits.getRandom(0,255);
    let g = kits.getRandom(0,255);
    let b = kits.getRandom(0,255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

/**
 * 获取随机十六进制的颜色  0-9 a-f   #123456
 */
kits.getColor =function(){
    var colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    var colorArray = colorValue.split(",");
     var color="#";
     for(var i=0;i<6;i++){
          color += colorArray[Math.floor(Math.random()*16)];
     }
     return color;
  }

  /**
 * 根据时间戳和最大随机数获得一个字符串
*/
kits.getId = function(){
    let date = new Date();
    let id = date.getTime();
    return id = id + '' + this.getRandom(10000,99999);
}

/**
 * 从localStorage里面根据指定的键(key)获取一个数组
 * key 为本地数据的键名
 */
kits.getLocalDataArray = function(key){
    let str = localStorage.getItem(key);
    let arr = JSON.parse(str);
    return arr || [];
}

/**
 * 存储一个数据在本地存储中
 */
kits.saveLocalDataArray = function(key,obj){
    let arr = JSON.stringify(obj);
    localStorage.setItem(key,arr);
}

/**
 * 向localStorage里面指定键(key)的数组数据追加一个数据对象（data）参数
 */
kits.appendDataIntoArray = function (key,obj){
    let oldArr = kits.getLocalDataArray(key);
    oldArr.push(obj);
    arr = JSON.stringify(oldArr);
    localStorage.setItem(key,arr);
}

/**
 * 根据对应的id从localStorage中指定键(key)的数组中删除一条数据参数
 */
kits.delerelLocalDateById = function(key,id){
    let oldArr = this.getLocalDataArray(key);
    oldArr.forEach((e,i) => {
        if(e.id === id){
            oldArr.splice(i,1);
            return;
        }
    })
    this.saveLocalDataArray(key,oldArr);
}
/**
 * 根据id修改localStorage里面的指定键(key)的数组数据参数
 */
kits.modifyLocalDateById = function(key,id,data){
    let oldArr = this.getLocalDataArray(key);
    let flag = false;
    oldArr.forEach((e,i) => {
        if(e.id === id){
            aoldAdd[i] = data;
            flag = true;
            return;
        }
    })
    this.saveLocalDataArray(key,oldArr);
    return flag;
    
}