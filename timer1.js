const args = process.argv;

for (const num of args){
  if (num >= 0 && args.length > 0 && !isNaN(num))
  setTimeout(()=>{
    process.stdout.write('\x07')
  }, num * 1000)
}