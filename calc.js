/**
 * 计算两个人数 x 和 y 的和
 * @param (number) x 第一个求和的数
 * @param (number) y 第二个求和的数
 * @return (number) 返回 x + y 的求和结果
 */

function add(x,y){
  if(((typeof x)==='number')&&((typeof y)==='number'))
      return x + y;
  else
      return NaN;
}

module.exports.add =add;
