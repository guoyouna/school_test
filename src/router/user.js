router.get('/all', async(ctx, next) =>{
    await userService.getAllUsers().then((res)=>{
      console.log("打印结果："+JSON.stringify(res));
      ctx.body = res
    })
})