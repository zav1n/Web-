    // 小括号 > 逻辑非 > 乘除法 > 加减法 > 逻辑与 > 逻辑或 > 赋值符
    let a = 200;
      // a>=5
      if (!a >= 5 && a <= 10 || a >= 100 && a <= 200) {
        console.log(true)
      }
      //先判定 !a>=5 如果a>=5 则ture 再加非 (!)就false   
      //再判定 &&  ,与(&&)有一假都为假
      //接着判定 或(||)  有一真都为真